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
// import { AdminRoute } from "./utils/ProtectedRoutes";
import AdminDashboard from "./pages/admin/dashboard/admin.dashboard";

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
        <Route path="/shopDetails" component={ShopDetails} exact />
        <Route path="/shopDetails/add-items" component={AddItems} exact />
        <Route path="/signin" component={CustomerSignin} exact />
        <Route path="/agent/signin" component={AgentSignIn} exact />
        <Route path="/admin/signin" component={AdminSignin} exact />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        {/* <AdminRoute path="/admin/dashboard" component={AdminDashboard} /> */}
      </Switch>
    </>
  );
}

export default App;
