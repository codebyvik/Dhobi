import OrderActionTypes from "./order.action.types";

const InititalState = {
  items: null,
  totalPrice: null,
  shop: null,
  shippingInfo: null,
  loading: false,
  updating: false,
  order: null,
  error: "",
  orders: null,
  totalOrders: 0,
};

export const OrderReducer = (state = InititalState, action) => {
  switch (action.type) {
    case OrderActionTypes.SAVE_ITEMS:
      return {
        ...state,
        items: action.payload.items,
        totalPrice: action.payload.totalPrice,
        shop: action.payload.shop,
      };
    case OrderActionTypes.SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };
    case OrderActionTypes.CREATE_ORDER_START:
    case OrderActionTypes.FETCH_MY_ORDERS_START:
    case OrderActionTypes.FETCH_ORDER_DETAILS_START:
    case OrderActionTypes.FETCH_ALL_ORDERS_START:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case OrderActionTypes.UPDATE_ORDER_START:
      return {
        ...state,
        error: "",
        updating: true,
      };

    case OrderActionTypes.FETCH_MY_ORDERS_SUCCESS:
    case OrderActionTypes.FETCH_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload.orders,
        totalOrders: action.payload.count,
      };
    case OrderActionTypes.CREATE_ORDER_SUCCESS:
    case OrderActionTypes.FETCH_ORDER_DETAILS_SUCCESS:
    case OrderActionTypes.UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
        updating: false,
      };

    case OrderActionTypes.CREATE_ORDER_FAIL:
    case OrderActionTypes.FETCH_MY_ORDERS_FAIL:
    case OrderActionTypes.FETCH_ORDER_DETAILS_FAIL:
    case OrderActionTypes.FETCH_ALL_ORDERS_FAIL:
    case OrderActionTypes.UPDATE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        updating: false,
      };
    default:
      return state;
      break;
  }
};
