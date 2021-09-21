import { Card } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dashboardFetchAction } from "../../../redux/dashboard/dashboard.action";
import { StyledDashboardHome } from "./adminDashboard.style";

const AdminDashboardHome = () => {
  const dispatch = useDispatch();

  const { totalAgent, TotalOrders, CompletedOrders, TotalShops, TotalCustomers, loading } =
    useSelector((state) => state.dashboard);
  useEffect(() => {
    dispatch(dashboardFetchAction());
  }, []);
  return (
    <StyledDashboardHome>
      <Card
        title="Total Orders"
        extra={<Link to="/admin/dashboard/orders">More</Link>}
        style={{ height: 200 }}
      >
        <p>{TotalOrders}</p>
      </Card>
      <Card
        title="Orders Pending"
        extra={<Link to="/admin/dashboard/orders">More</Link>}
        style={{ height: 200 }}
      >
        <p>{TotalOrders - CompletedOrders}</p>
      </Card>
      <Card
        title="Total Shops"
        extra={<Link to="/admin/dashboard/view/shop">More</Link>}
        style={{ height: 200 }}
      >
        <p>{TotalShops}</p>
      </Card>
      <Card
        title="Total Agents"
        extra={<Link to="/admin/dashboard/view/agent">More</Link>}
        style={{ height: 200 }}
      >
        <p>{totalAgent}</p>
      </Card>
      <Card title="Total Customers" style={{ height: 200 }}>
        <p>{TotalCustomers}</p>
      </Card>
    </StyledDashboardHome>
  );
};

export default AdminDashboardHome;
