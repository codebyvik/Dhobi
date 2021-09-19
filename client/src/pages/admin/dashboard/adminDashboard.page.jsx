import { Card } from "antd";
import { Link } from "react-router-dom";
import { StyledDashboardHome } from "./adminDashboard.style";

const AdminDashboardHome = () => {
  return (
    <StyledDashboardHome>
      <Card title="Orders Pending" extra={<Link to="/orders">More</Link>} style={{ height: 200 }}>
        <p>100</p>
      </Card>
      <Card title="Orders Pending" extra={<Link to="/orders">More</Link>} style={{ height: 200 }}>
        <p>100</p>
      </Card>
      <Card title="Orders Pending" extra={<Link to="/orders">More</Link>} style={{ height: 200 }}>
        <p>100</p>
      </Card>
      <Card title="Orders Pending" extra={<Link to="/orders">More</Link>} style={{ height: 200 }}>
        <p>100</p>
      </Card>
      <Card title="Orders Pending" extra={<Link to="/orders">More</Link>} style={{ height: 200 }}>
        <p>100</p>
      </Card>
      <Card title="Orders Pending" extra={<Link to="/orders">More</Link>} style={{ height: 200 }}>
        <p>100</p>
      </Card>
    </StyledDashboardHome>
  );
};

export default AdminDashboardHome;
