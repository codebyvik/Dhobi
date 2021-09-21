import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  addShopFail,
  addShopSuccess,
  deleteShopFail,
  deleteShopSuccess,
  getAllShopsFail,
  getAllShopsSuccess,
  getSingleShopFail,
  getSingleShopSuccess,
  updateShopFail,
  updateShopSuccess,
} from "./shop.action";
import ShopActionTypes from "./shop.action.types";
import axios from "axios";
import { message } from "antd";

// get all malls
export function* GetAllShops({ payload }) {
  const { keyword = "", area = "", sort = "name", page = 1 } = payload;
  try {
    const { data } = yield axios.get(
      `/api/v1/shop?keyword=${keyword}&area=${area}&sort=${sort}&page=${page}`
    );
    yield put(getAllShopsSuccess(data));
  } catch (error) {
    yield put(getAllShopsFail(error.response.data.msg));
  }
}
export function* onGetAllShops() {
  yield takeLatest(ShopActionTypes.GET_ALL_SHOPS_START, GetAllShops);
}

// get single Shop
export function* GetSingleShop({ payload }) {
  try {
    const { data } = yield axios.get(`/api/v1/shop/${payload}`);
    yield put(getSingleShopSuccess(data.shop));
  } catch (error) {
    yield put(getSingleShopFail(error.response.data.msg));
  }
}
export function* onGetSingleShop() {
  yield takeLatest(ShopActionTypes.GET_SINGLE_SHOP_START, GetSingleShop);
}
// Update  Shop
export function* UpdateShop({ payload }) {
  try {
    const { data } = yield axios.put(`/api/v1/shop/${payload.id}`, payload);
    yield put(updateShopSuccess(data.shop));
    yield message.success("Updated");
  } catch (error) {
    yield put(updateShopFail(error.response.data.msg));
    yield message.error("Error Updating");
  }
}
export function* onUpdateShop() {
  yield takeLatest(ShopActionTypes.UPDATE_SHOP_START, UpdateShop);
}
// Add  Shop
export function* AddShop({ payload }) {
  try {
    const { data } = yield axios.post(`/api/v1/shop/add`, payload);
    yield put(addShopSuccess(data.shop));
    yield message.success("Added");
  } catch (error) {
    yield put(addShopFail(error.response.data.msg));
    yield message.error(`${error.response.data.msg}`);
  }
}
export function* onAddShop() {
  yield takeLatest(ShopActionTypes.ADD_SHOP_START, AddShop);
}
// Delete  Shop
export function* DeleteShop({ payload }) {
  try {
    yield axios.delete(`/api/v1/shop/${payload}`);
    yield put(deleteShopSuccess());
    yield message.success("Deleted");
    yield window.location.reload();
  } catch (error) {
    yield put(deleteShopFail(error.response.data.msg));
    yield message.error(`${error.response.data.msg}`);
  }
}
export function* onDeleteShop() {
  yield takeLatest(ShopActionTypes.DELETE_SHOP_START, DeleteShop);
}

// add  review
export function* AddReview({ payload }) {
  try {
    yield axios.post(`/api/v1/shop/review`, payload);
    yield message.success("Added");
  } catch (error) {
    yield message.error(`${error.response.data.msg}`);
  }
}

export function* onAddReview() {
  yield takeLatest(ShopActionTypes.ADD_REVIEW_START, AddReview);
}

// delete  review
export function* DeleteReview({ payload }) {
  try {
    yield axios.delete(`/api/v1/shop/review?shopId=${payload.shopId}&id=${payload.id}`);
    yield message.success("Deleted");
  } catch (error) {
    yield message.error(`${error.response.data.msg}`);
  }
}

export function* onDeleteReview() {
  yield takeLatest(ShopActionTypes.DELETE_REVIEW_START, DeleteReview);
}
// export function

// export function
export function* shopSagas() {
  yield all([
    call(onGetAllShops),
    call(onGetSingleShop),
    call(onUpdateShop),
    call(onAddShop),
    call(onDeleteShop),
    call(onAddReview),
    call(onDeleteReview),
  ]);
}
