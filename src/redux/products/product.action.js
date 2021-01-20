export const addFilterPrice = (array) => ({
  type: "FILTER_PRICE",
  payload: array,
});
export const getPriceFilterArray = (array) => ({
  type: "FILTER_PRICE_INPUT",
  payload: array,
});
export const getColorsFilterArray = (array) => ({
  type: "FILTER_COLORS_INPUT",
  payload: array,
});
