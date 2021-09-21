import ShopActionTypes from "./shop.action.types";
// Get all Shops
export const getAllShopsAction = (keyword) => ({
  type: ShopActionTypes.GET_ALL_SHOPS_START,
  payload: keyword,
});
export const getAllShopsSuccess = (data) => ({
  type: ShopActionTypes.GET_ALL_SHOPS_SUCCESS,
  payload: data,
});
export const getAllShopsFail = (error) => ({
  type: ShopActionTypes.GET_ALL_SHOPS_FAIL,
  payload: error,
});

// Get Single Shop
export const getSingleShopAction = (id) => ({
  type: ShopActionTypes.GET_SINGLE_SHOP_START,
  payload: id,
});
export const getSingleShopSuccess = (mall) => ({
  type: ShopActionTypes.GET_SINGLE_SHOP_SUCCESS,
  payload: mall,
});
export const getSingleShopFail = (error) => ({
  type: ShopActionTypes.GET_SINGLE_SHOP_FAIL,
  payload: error,
});

// Update Shop
export const updateShopAction = (newData) => ({
  type: ShopActionTypes.UPDATE_SHOP_START,
  payload: newData,
});
export const updateShopSuccess = (mall) => ({
  type: ShopActionTypes.UPDATE_SHOP_SUCCESS,
  payload: mall,
});
export const updateShopFail = (error) => ({
  type: ShopActionTypes.UPDATE_SHOP_FAIL,
  payload: error,
});

// Add Shop
export const addShopAction = (data) => ({
  type: ShopActionTypes.ADD_SHOP_START,
  payload: data,
});
export const addShopSuccess = (mall) => ({
  type: ShopActionTypes.ADD_SHOP_SUCCESS,
  payload: mall,
});
export const addShopFail = (error) => ({
  type: ShopActionTypes.ADD_SHOP_FAIL,
  payload: error,
});

// delete mall
export const deleteShopAction = (id) => ({
  type: ShopActionTypes.DELETE_SHOP_START,
  payload: id,
});
export const deleteShopSuccess = () => ({
  type: ShopActionTypes.DELETE_SHOP_SUCCESS,
});
export const deleteShopFail = (error) => ({
  type: ShopActionTypes.DELETE_SHOP_FAIL,
  payload: error,
});

//add Review
export const addReviewAction = (review) => ({
  type: ShopActionTypes.ADD_REVIEW_START,
  payload: review,
});
// delete review
export const deleteReviewAction = (review) => ({
  type: ShopActionTypes.DELETE_REVIEW_START,
  payload: review,
});
