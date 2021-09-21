import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { message } from "antd";
import NavbarComponent from "./components/navbar/navbar";
import AddItems from "./pages/addItems/addItems.page";
import AdminSignin from "./pages/auth/adminSignin.page";
import AgentSignIn from "./pages/auth/agentSignin.page";
import CustomerSignin from "./pages/auth/customerSignin.page";
import HomePage from "./pages/homepage/homepage";
import ShopDetails from "./pages/shopDetails/shopDetails.page";
import ShopPage from "./pages/shops/shop.page";
import { useDispatch } from "react-redux";
import { getLoggedInUserAction } from "./redux/auth/auth.action";
import { AdminRoute, AgentRoute, ProtectedRoute } from "./utils/ProtectedRoutes";
import AdminDashboard from "./pages/admin/dashboard/admin.dashboard";
import ProfilePage from "./pages/profile/profile.page";
import CustomerRegister from "./pages/auth/customerRegister.page";
import CustomerOrderPage from "./pages/order/customerOrder.page";
import OrderDetails from "./pages/orderDetails/orderDetails";
import Checkout from "./pages/checkout/checkout.page";
import StripeContainer from "./pages/checkout/stripeContainer";
import Success from "./pages/checkout/success";
import OrderPage from "./pages/order/order.page";

message.config({ duration: 1, top: 60 });

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedInUserAction());
  }, [dispatch]);

  return (
    <>
      <NavbarComponent />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shops" component={ShopPage} exact />
        <Route path="/shops/:shopId" component={ShopDetails} exact />

        <Route path="/signin" component={CustomerSignin} exact />
        <Route path="/register" component={CustomerRegister} exact />
        <Route path="/agent/signin" component={AgentSignIn} exact />
        <Route path="/admin/signin" component={AdminSignin} exact />

        <ProtectedRoute path="/shops/:shopId/addItems" component={AddItems} exact />

        <ProtectedRoute path="/profile" component={ProfilePage} exact />
        <ProtectedRoute path="/orders" component={CustomerOrderPage} exact />
        <ProtectedRoute path="/orders/:id" component={OrderDetails} exact />
        <ProtectedRoute path="/checkout" component={Checkout} exact />
        <ProtectedRoute path="/payment" component={StripeContainer} exact />
        <ProtectedRoute path="/order/success" component={Success} exact />
        <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
        <AgentRoute path="/agent/orders" component={OrderPage} />
      </Switch>
    </>
  );
}

export default App;
