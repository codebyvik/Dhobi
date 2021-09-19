import { Link, useRouteMatch } from "react-router-dom";

import {
  ShoppingCartOutlined,
  AppstoreAddOutlined,
  EyeOutlined,
  UserAddOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { StyledSideBar } from "./sideBar.style";

const AdminSidebar = () => {
  const match = useRouteMatch();
  return (
    <StyledSideBar>
      <Link to={`${match.url}`}>
        <h6>Dashboard</h6>
        <DashboardOutlined />
      </Link>
      <Link to={`${match.url}/orders`}>
        <h6>Orders</h6>
        <ShoppingCartOutlined />
      </Link>
      <Link to={`${match.url}/add/shop`}>
        <h6>Add Shops</h6>
        <AppstoreAddOutlined />
      </Link>
      <Link to={`${match.url}/view/shop`}>
        <h6>View Shops</h6>
        <EyeOutlined />
      </Link>
      <Link to={`${match.url}/add/agent`}>
        <h6>Add Agent</h6>
        <UserAddOutlined />
      </Link>
      <Link to={`${match.url}/view/agent`}>
        <h6>View Agent</h6>
        <EyeOutlined />
      </Link>
    </StyledSideBar>
  );
};

export default AdminSidebar;
