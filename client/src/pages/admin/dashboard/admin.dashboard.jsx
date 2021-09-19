import AdminSidebar from "../../../components/admin/sidebar/adminSidebar.component";
import { Route, Switch } from "react-router-dom";
import AdminDashboardHome from "./adminDashboard.page";
import OrderPage from "../../order/order.page";
import OrderDetails from "../../orderDetails/orderDetails";
import AddShop from "../../../components/admin/shop/addShop";
import AddAgent from "../../../components/admin/agent/addAgent";
import ViewShop from "../../../components/admin/shop/viewShop";
import ViewAgent from "../../../components/admin/agent/viewAgent";
import UpdateShop from "../../../components/admin/shop/updateShop";
import UpdateAgent from "../../../components/admin/agent/updateAgent";

//
const AdminDashboard = () => {
  return (
    <div className="d-flex">
      <AdminSidebar />
      <div className="w-75 ms-auto me-5">
        <Switch>
          <Route path="/admin/dashboard" component={AdminDashboardHome} exact />
          <Route path="/admin/dashboard/orders" component={OrderPage} exact />
          <Route path="/admin/dashboard/orders/:id" component={OrderDetails} exact />
          <Route path="/admin/dashboard/add/shop" component={AddShop} exact />
          <Route path="/admin/dashboard/add/agent" component={AddAgent} exact />
          <Route path="/admin/dashboard/view/shop" component={ViewShop} exact />
          <Route path="/admin/dashboard/view/shop/:id" component={UpdateShop} exact />
          <Route path="/admin/dashboard/view/agent" component={ViewAgent} exact />
          <Route path="/admin/dashboard/view/agent/:id" component={UpdateAgent} exact />
        </Switch>
      </div>
    </div>
  );
};

export default AdminDashboard;
