import { all, call } from "redux-saga/effects";
import { agentSagas } from "./agents/agent.saga";
import { authSaga } from "./auth/auth.saga";
import { userSaga } from "./customer/customer.saga";
import { dashboardSaga } from "./dashboard/dashboard.saga";
import { orderSagas } from "./order/order.saga";
import { shopSagas } from "./shop/shop.saga";

export default function* rootSaga() {
  yield all([
    call(authSaga),
    call(shopSagas),
    call(agentSagas),
    call(dashboardSaga),
    call(userSaga),
    call(orderSagas),
  ]);
}
