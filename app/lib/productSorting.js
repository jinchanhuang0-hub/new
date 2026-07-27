export const getSkuNumber = (sku = "") => {
  const match = String(sku).match(/(\d+)$/);
  return match ? Number(match[1]) : 0;
};

export const compareProductEntriesBySkuDesc = ([slugA, productA], [slugB, productB]) => {
  const skuDiff = getSkuNumber(productB.sku) - getSkuNumber(productA.sku);
  return skuDiff || slugA.localeCompare(slugB);
};

export const sortProductEntriesBySkuDesc = (entries) =>
  [...entries].sort(compareProductEntriesBySkuDesc);
