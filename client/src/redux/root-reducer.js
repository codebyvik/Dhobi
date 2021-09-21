import { combineReducers } from "redux";
import { agentReducer } from "./agents/agent.reducer";
import { authReducer } from "./auth/auth.reducer";
import { userReducer } from "./customer/customer.reducer";
import { dashBoardReducer } from "./dashboard/dashboard.reducer";
import { OrderReducer } from "./order/order.reducer";
import { shopReducer } from "./shop/shop.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  agents: agentReducer,
  order: OrderReducer,
  user: userReducer,
  dashboard: dashBoardReducer,
});

export default rootReducer;
