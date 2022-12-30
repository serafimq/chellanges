export const getWidth = (width) => {
  const isNumber = !Number.isNaN(Number(width));

  return isNumber ? `${width}px` : `${width}`;
};
