import { all, call } from "redux-saga/effects";
import { agentSagas } from "./agents/agent.saga";
import { authSaga } from "./auth/auth.saga";
import { orderSagas } from "./order/order.saga";
import { shopSagas } from "./shop/shop.saga";

export default function* rootSaga() {
  yield all([call(authSaga), call(shopSagas), call(agentSagas), call(orderSagas)]);
}
