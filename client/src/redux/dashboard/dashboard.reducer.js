const InititalState = {
  totalAgent: null,
  TotalOrders: null,
  CompletedOrders: null,
  TotalShops: null,
  TotalCustomers: null,
  error: "",
  loading: false,
};

export const dashBoardReducer = (state = InititalState, action) => {
  switch (action.type) {
    case "FETCH_DASHBOARD_DATA":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "FETCH_DASHBOARD_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        totalAgent: action.payload.totalAgent,
        TotalOrders: action.payload.TotalOrders,
        CompletedOrders: action.payload.CompletedOrders,
        TotalShops: action.payload.TotalShops,
        TotalCustomers: action.payload.TotalCustomers,
      };
    case "FETCH_DASHBOARD_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
