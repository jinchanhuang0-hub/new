import StaticPageEffects from "./StaticPageEffects";
import { normalizeSiteHtml } from "../lib/siteRoutes";

export default function StaticPage({ html }) {
  const normalizedHtml = normalizeSiteHtml(html);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: normalizedHtml }} />
      <StaticPageEffects />
    </>
  );
}
