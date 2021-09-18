import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";

import Shop1 from "../../assets/shop1.jpg";

const NearByShopComponent = () => {
  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between mb-4">
        <h5>Near By Shops</h5>
        <Link to="/shops">explore </Link>
      </div>
      <div className="d-flex">
        <Card className="me-5" style={{ width: "18rem", cursor: "pointer" }}>
          <Card.Img variant="top" src={Shop1} style={{ height: "15rem", objectFit: "cover" }} />
          <Card.Body>
            <Card.Title>Prem Washing service</Card.Title>
          </Card.Body>
        </Card>
        <Card className="me-5" style={{ width: "18rem", cursor: "pointer" }}>
          <Card.Img variant="top" src={Shop1} style={{ height: "15rem", objectFit: "cover" }} />
          <Card.Body>
            <Card.Title>Prem Washing service</Card.Title>
          </Card.Body>
        </Card>
        <Card className="me-5" style={{ width: "18rem", cursor: "pointer" }}>
          <Card.Img variant="top" src={Shop1} style={{ height: "15rem", objectFit: "cover" }} />
          <Card.Body>
            <Card.Title>Prem Washing service</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default NearByShopComponent;
