import StaticPageEffects from "./StaticPageEffects";
import FabricationTabsEffects from "./FabricationTabsEffects";
import ArtworkComparisonEffects from "./ArtworkComparisonEffects";
import ProductFaqEffects from "./ProductFaqEffects";
import { normalizeSiteHtml } from "../lib/siteRoutes";

export default function StaticPage({ html }) {
  const normalizedHtml = normalizeSiteHtml(html);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: normalizedHtml }} />
      <FabricationTabsEffects />
      <ArtworkComparisonEffects />
      <ProductFaqEffects />
      <StaticPageEffects />
    </>
  );
}
