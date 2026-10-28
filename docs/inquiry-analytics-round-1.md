# 第一轮询盘统计：人工配置与验收

## 代码契约

- `/api/inquiry` 只有在 Nodemailer `sendMail()` 成功完成后返回 HTTP 200：`{ "message": "Inquiry sent successfully.", "success": true, "inquiry_id": "<UUID>" }`。邮件的纯文本和 HTML 正文都有同一个 Inquiry ID。失败、校验错误或附件错误不返回 `success` 或 `inquiry_id`。
- `sendMail()` 成功只表示邮件服务接受发送操作，不证明最终收件箱送达，也不证明是有效采购需求。
- 已同意 Analytics 且当前是 Vercel Production、浏览器主机名精确为 `uccrafts.com` 或 `www.uccrafts.com` 时，接口成功后推入一次：`{ event: "uccrafts_inquiry_success", form_id, page_type, eventCallback, eventTimeout }`。`form_id` 为 `home_main`、`contact_main`、`product_main`、`product_modal`、`site_footer`、`blog_footer` 或 `other_main`；`page_type` 为 `blog`、`product`、`contact`、`other`。不发送 `inquiry_id`、自由输入字段或 `product_category`，因为目前没有可靠的统一分类来源。
- 感谢页只显示感谢内容，不负责发出成功事件。GTM 回调和 800 毫秒独立兜底只负责跳转；`dataLayer.push` 或回调执行不能证明 GA4 接收。
- 邮件中的提交页面现为 origin + pathname，不带可能包含个人信息的查询参数。仍需人工审核已上线页面 URL 和 GTM 的自动 `page_location`，因为 GA4 自动页面浏览可能记录地址栏中的查询参数。

## 部署环境

代码使用 Vercel 自动提供的 `NEXT_PUBLIC_VERCEL_ENV`。只有值为 `production`，并且浏览器主机名在上述白名单中，才会加载 GTM 或发送性能及询盘事件。`NODE_ENV=production` 单独不能放行。无此变量时默认关闭正式统计；不需要新增密钥。上线前在 Vercel 项目设置中确认 **Automatically expose System Environment Variables** 已启用，Production 构建中 `NEXT_PUBLIC_VERCEL_ENV=production`，Preview 构建中为 `preview`。若以后迁移到其他托管平台，需要先实现等价、可信的部署环境标志并验收，不能仅修改域名判断。

2026-10-26 检查：`https://uccrafts.com/` 返回 200；`https://www.uccrafts.com/` 以 308 重定向到无 www 域名。两者列入精确白名单，以覆盖跳转前的页面执行窗口。

## GTM 人工配置（不要由本轮代码自动发布）

1. 在容器 `GTM-PVLJT85N` 的 Workspace 中创建 **Custom Event** 触发器，Event name 精确填写 `uccrafts_inquiry_success`，不要启用正则，触发范围为该自定义事件。
2. 创建三个 **Data Layer Variable**（Version 2），键分别为 `form_id`、`page_type`；目前不创建 `product_category` 变量。若未来代码有经审核的固定产品分类，再映射该字段。
3. 在 GTM 中先核对现有 Google Tag 实际指向 `G-4BPKLZFWYH`（本轮只核对了仓库，未读取线上容器）。创建 **Google Analytics: GA4 Event** 标签并关联该 Google Tag，Event name 为 `generate_lead`；Event parameters 映射 `form_id={{DLV - form_id}}`、`page_type={{DLV - page_type}}`。不要映射 `inquiry_id` 或任何个人信息，也不要同时用另一个 `gtag('event','generate_lead')`。
4. 将该标签绑定第 1 步的触发器。检查 Tag 的 **Consent Settings**：Google 标签内置 consent checks 应生效，且可添加 `analytics_storage` 为额外授权要求。当前站点实行同意后才加载 GTM；拒绝或未选择时不应触发。用 Tag Assistant 检查标签的 consent 状态。
5. 搜索整个容器中所有 `generate_lead` 标签与触发器，确保感谢页浏览、自动 `form_submit`、第二个标签和其他点击事件不会重复发送它。保留既有 Google Tag 的自动页面浏览；检查容器中是否另有手动 `page_view`。检查 Google Tag 的 `page_location` 与页面查询参数策略，避免把含个人信息的 URL 送入 GA4。
6. 先在 GTM **Preview / Tag Assistant** 中，用获得同意的生产域名安全测试环境或经批准的生产验收样本验证一次成功请求对应一个自定义事件和一个 GA4 标签；失败请求、拒绝授权、直接访问感谢页均为零。Preview 域名按代码门控不会触发正式容器，不能用它声称已经验证正式 GA4 收数。通过后才人工 **Submit / Publish** 容器版本。发布前记录旧版本号以便回滚。

## GA4 人工配置

1. 在 `G-4BPKLZFWYH` 对应属性的 **Admin > Events** 中把 `generate_lead` 标记为 **Key event**。Counting method 建议 **Once per event**：一次成功提交应计一次，应用负责单次回调去重；同一会话内两次独立成功提交仍应计两次。不要用 **Once per session** 掩盖应用重复事件。
2. 只在实际需要按表单位置或页面类型报表时，于 **Admin > Custom definitions** 注册 `form_id`、`page_type` 为 event-scoped custom dimensions。不要注册 `inquiry_id`。不添加虚构金额，不把 WhatsApp 或联系点击当作成功询盘。
3. 人工端到端验收时，Tag Assistant 看触发器和标签，GA4 **DebugView** 看调试设备事件与参数，**Realtime** 看最近 30 分钟的接收，常规报表待处理后核对趋势。DebugView、Realtime 及常规报表各有处理延迟；本轮没有真实发送或验证这些界面。

## 验收和上线顺序

1. 代码合并前：`node --test tests/inquiry.test.mjs`、`npm run build`；复核变更只包含本轮文件及已有未提交改动。
2. 部署前：核对 Vercel 环境变量自动暴露设置、生产域名、SMTP 收件与现有邮件服务配置；不要用真实收件邮箱跑自动测试。
3. 先部署代码，确认 Production 页面在获得同意后加载单一 GTM；本地和 Preview 不请求正式 GTM。此时 GA4 仍不会因为代码本身而收到 `generate_lead`。
4. 再按上节在 GTM Workspace 配置并预览、人工发布；随后在 GA4 标记关键事件并按需注册维度。使用已批准的真实端到端验收样本，核对邮件编号、GTM 事件数、GA4 DebugView/Realtime 与生产跳转。真实收件、GTM Preview、GA4 DebugView 和生产导航检查均为**待验证**。
5. 回滚：代码可回退本轮提交；GTM 可恢复发布前记录的容器版本；GA4 可取消 `generate_lead` 的关键事件标记并清理仅为本轮创建的维度。回滚前确认不会让旧代码与新 GTM 标签产生误计。

## 已知边界与第二轮

- 浏览器锁阻止同一表单的快速重复提交，模块内 Set 防止同一 `inquiry_id` 的重复前端上报；它们无法保证跨标签页、网络重试或服务端多实例中的邮件严格只发送一次。现有接口的内存限流也不是全局幂等设施。
- 拒绝或未选择授权的询盘不进入分析队列，之后同意也不补发。广告拦截、网络丢包、GTM/GA4 配置缺失或授权覆盖不足都会使 GA4 计数低于邮件服务接受数。
- 当前 Cookie 界面缺少明显的常驻设置/撤回入口，后续需要补齐。性能事件只接入相同门控，本轮未重构性能监测。源码未发现手动 `page_view`，但容器运行时是否重复仍待人工确认。
- 第二轮再考虑 `quote_click`、`contact_click`、来源持久化和完整周报系统。

官方参考：[GTM 自定义事件触发器](https://support.google.com/tagmanager/answer/7679219)、[GA4 Event 标签](https://support.google.com/tagmanager/answer/13034206)、[Consent Mode](https://developers.google.com/tag-platform/security/concepts/consent-mode)、[GA4 关键事件](https://support.google.com/analytics/answer/13128484)、[自定义维度](https://support.google.com/analytics/answer/14240153)、[Realtime 与 DebugView](https://support.google.com/analytics/answer/9333790)、[Vercel 环境变量](https://vercel.com/docs/environment-variables/framework-environment-variables)。

**仅合并代码并不代表 GA4 已经能接收 `generate_lead`，仍需完成 GTM 配置及端到端验收。**
