import ShopActionTypes from "./shop.action.types";

const InititalState = {
  loading: false,
  error: "",
  shops: null,
  shop: null,
  totalShops: 0,
  updating: false,
  shopsInArea: 0,
};

export const shopReducer = (state = InititalState, action) => {
  switch (action.type) {
    case ShopActionTypes.GET_ALL_SHOPS_START:
    case ShopActionTypes.GET_SINGLE_SHOP_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case ShopActionTypes.UPDATE_SHOP_START:
    case ShopActionTypes.ADD_SHOP_START:
    case ShopActionTypes.DELETE_SHOP_START:
      return {
        ...state,
        updating: true,
        error: "",
      };
    case ShopActionTypes.DELETE_SHOP_SUCCESS:
      return {
        ...state,
        updating: false,
      };
    case ShopActionTypes.GET_ALL_SHOPS_SUCCESS:
      return {
        ...state,
        loading: false,
        shops: action.payload.shops,
        totalShops: action.payload.count,
        shopsInArea: action.payload.shopsInArea,
      };
    case ShopActionTypes.GET_SINGLE_SHOP_SUCCESS:
    case ShopActionTypes.UPDATE_SHOP_SUCCESS:
    case ShopActionTypes.ADD_SHOP_SUCCESS:
      return {
        ...state,
        loading: false,
        updating: false,
        shop: action.payload,
      };
    case ShopActionTypes.GET_ALL_SHOPS_FAIL:
    case ShopActionTypes.GET_SINGLE_SHOP_FAIL:
    case ShopActionTypes.UPDATE_SHOP_FAIL:
    case ShopActionTypes.ADD_SHOP_FAIL:
    case ShopActionTypes.DELETE_SHOP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.type,
        updating: false,
      };

    default:
      return state;
  }
};
