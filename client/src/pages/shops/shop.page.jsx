import { Rate } from "antd";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { Shop, SortOptions } from "./shopPage.style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShopsAction } from "../../redux/shop/shop.action";

const ShopPage = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { shops } = useSelector((state) => state.shop);

  useEffect(() => {
    if (user) {
      return dispatch(getAllShopsAction({ area: user.location.area }));
    }

    dispatch(getAllShopsAction({ area: "sanjaynagar" }));
  }, []);

  const handleSort = (e) => {
    console.log(e.target.value);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between mt-3">
        <h5>Shops</h5>
        {/* <SortOptions>
          <Form.Select size="sm" onChange={handleSort}>
            <option value="name">name</option>
            <option value="recent">recently added</option>
            <option value="ratings">ratings</option>
          </Form.Select>
        </SortOptions> */}
      </div>
      {shops &&
        shops.map((shop) => (
          <Shop key={shop._id}>
            <div className="shop-img">
              <img src={shop.image.url} alt="hop" />
            </div>
            <div>
              <h3>{shop.name}</h3>
              <p>{(shop.location.area, shop.location.city, shop.location.pincode)}</p>
              <Rate className="mb-3" disabled allowHalf defaultValue={shop.ratings} /> <br />
              <Link to={`/shops/${shop._id}`}>
                <Button variant="outline-primary" size="sm">
                  visit shop
                </Button>
              </Link>
            </div>
          </Shop>
        ))}
    </Container>
  );
};

export default ShopPage;
