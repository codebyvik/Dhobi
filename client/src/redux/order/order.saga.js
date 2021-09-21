import { takeLatest, all, call, put } from "redux-saga/effects";

import axios from "axios";
import { message } from "antd";
import OrderActionTypes from "./order.action.types";
import {
  createOrderFail,
  createOrderSuccess,
  fetchAllOrdersSuccess,
  fetchMyOrdersFail,
  fetchMyOrdersSuccess,
  fetchOrderDetailsSuccess,
  fetchOrderDetailsFail,
  fetchAllOrdersFail,
  updateOrderSuccess,
  updateOrderFail,
} from "./order.action";

// Create new order
export function* CreateOrder({ payload }) {
  try {
    const { data } = yield axios.post("/api/v1/order/new", payload);
    yield message.success("Order Placed successfully");
    yield put(createOrderSuccess(data.order));
  } catch (error) {
    yield message.error(`${error.response.data.msg}`);
    yield put(createOrderFail(error.response.data.errMessage));
  }
}

export function* onCreateOrder() {
  yield takeLatest(OrderActionTypes.CREATE_ORDER_START, CreateOrder);
}

// Fetch my orders

export function* FetchMyOrders({ payload }) {
  try {
    const { data } = yield axios.get(`/api/v1/order/getMyOrders`);
    yield put(fetchMyOrdersSuccess(data));
  } catch (error) {
    yield message.error(`${error.response.data.msg}`);
    yield put(fetchMyOrdersFail(error.response.data.errMessage));
  }
}

export function* onFetchMyOrders() {
  yield takeLatest(OrderActionTypes.FETCH_MY_ORDERS_START, FetchMyOrders);
}

// fetch  order Details
export function* FetchOrderDetails({ payload }) {
  try {
    const { data } = yield axios.get(`/api/v1/order/${payload}`);
    yield put(fetchOrderDetailsSuccess(data.order));
  } catch (error) {
    yield message.error(`${error.response.data.msg}`);
    yield put(fetchOrderDetailsFail(error.response.data.errMessage));
  }
}

export function* onFetchOrderDetails() {
  yield takeLatest(OrderActionTypes.FETCH_ORDER_DETAILS_START, FetchOrderDetails);
}

// fetch  All orders
export function* FetchAllOrders({ payload }) {
  try {
    const { data } = yield axios.get(`/api/v1/order?area=`);
    yield put(fetchAllOrdersSuccess(data));
  } catch (error) {
    yield message.error(`${error.response.data.msg}`);
    yield put(fetchAllOrdersFail(error.response.data.errMessage));
  }
}

export function* onFetchAllOrders() {
  yield takeLatest(OrderActionTypes.FETCH_ALL_ORDERS_START, FetchAllOrders);
}

// Update Order
export function* UpdateOrder({ payload }) {
  try {
    const { data } = yield axios.put(`/api/v1/order/${payload.id}`, payload);
    yield message.success("Updated");
    yield put(updateOrderSuccess(data.order));
  } catch (error) {
    yield message.error(`${error.response.data.msg}`);
    yield put(updateOrderFail(error.response.data.msg));
  }
}

export function* onUpdateOrder() {
  yield takeLatest(OrderActionTypes.UPDATE_ORDER_START, UpdateOrder);
}

// export all saga functions
export function* orderSagas() {
  yield all([
    call(onCreateOrder),
    call(onFetchMyOrders),
    call(onFetchOrderDetails),
    call(onFetchAllOrders),
    call(onUpdateOrder),
  ]);
}
