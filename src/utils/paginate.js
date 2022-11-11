export function cropPages (items, currentPage, pageSize) {
  const startCropValue = (currentPage - 1) * pageSize;
  return [...items].splice(startCropValue, pageSize);
};