import OrderActionTypes from "./order.action.types";

export const saveItemsInfo = (payload) => {
  return {
    type: OrderActionTypes.SAVE_ITEMS,
    payload: payload,
  };
};

export const SaveShippingInfo = (payload) => {
  return {
    type: OrderActionTypes.SHIPPING_INFO,
    payload: payload,
  };
};

// create order
export const createOrderAction = (order) => ({
  type: OrderActionTypes.CREATE_ORDER_START,
  payload: order,
});
export const createOrderSuccess = (order) => ({
  type: OrderActionTypes.CREATE_ORDER_SUCCESS,
  payload: order,
});
export const createOrderFail = (error) => ({
  type: OrderActionTypes.CREATE_ORDER_FAIL,
  payload: error,
});

// fetch My orders
export const fetchMyOrdersAction = (page) => ({
  type: OrderActionTypes.FETCH_MY_ORDERS_START,
  payload: page,
});
export const fetchMyOrdersSuccess = (orders) => ({
  type: OrderActionTypes.FETCH_MY_ORDERS_SUCCESS,
  payload: orders,
});
export const fetchMyOrdersFail = (error) => ({
  type: OrderActionTypes.FETCH_MY_ORDERS_FAIL,
  payload: error,
});

// fetch order Details
export const fetchOrderDetailsAction = (id) => ({
  type: OrderActionTypes.FETCH_ORDER_DETAILS_START,
  payload: id,
});
export const fetchOrderDetailsSuccess = (order) => ({
  type: OrderActionTypes.FETCH_ORDER_DETAILS_SUCCESS,
  payload: order,
});
export const fetchOrderDetailsFail = (error) => ({
  type: OrderActionTypes.FETCH_ORDER_DETAILS_FAIL,
  payload: error,
});

// fetch all orders
export const fetchAllOrdersAction = (page) => ({
  type: OrderActionTypes.FETCH_ALL_ORDERS_START,
  payload: page,
});
export const fetchAllOrdersSuccess = (orders) => ({
  type: OrderActionTypes.FETCH_ALL_ORDERS_SUCCESS,
  payload: orders,
});
export const fetchAllOrdersFail = (error) => ({
  type: OrderActionTypes.FETCH_ALL_ORDERS_FAIL,
  payload: error,
});

// update order
export const updateOrderAction = (data) => ({
  type: OrderActionTypes.UPDATE_ORDER_START,
  payload: data,
});

export const updateOrderSuccess = (order) => ({
  type: OrderActionTypes.UPDATE_ORDER_SUCCESS,
  payload: order,
});
export const updateOrderFail = (error) => ({
  type: OrderActionTypes.UPDATE_ORDER_FAIL,
  payload: error,
});
