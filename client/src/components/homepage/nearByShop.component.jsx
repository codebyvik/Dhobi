import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShopsAction } from "../../redux/shop/shop.action";

const NearByShopComponent = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { shops } = useSelector((state) => state.shop);

  useEffect(() => {
    if (user) {
      return dispatch(getAllShopsAction({ area: user.location.area }));
    }

    dispatch(getAllShopsAction({ area: "sanjaynagar" }));
  }, []);

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between mb-4">
        <h5>Near By Shops</h5>
        <Link to="/shops">explore </Link>
      </div>
      <div className="d-flex">
        {shops &&
          shops.map((shop) => (
            <Card key={shop._id} className="me-5" style={{ width: "18rem", cursor: "pointer" }}>
              <Card.Img
                variant="top"
                src={shop.image.url}
                style={{ height: "15rem", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{shop.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default NearByShopComponent;
