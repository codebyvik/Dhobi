import { Result } from "antd";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Success = () => {
  return (
    <Result
      status="success"
      title="Successfully Paid "
      extra={[
        <Link to="/">
          <Button>Go home</Button>,
        </Link>,
      ]}
    />
  );
};

export default Success;
