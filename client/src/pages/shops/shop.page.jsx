import { Rate } from "antd";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { Shop, SortOptions } from "./shopPage.style";
import Shop1 from "../../assets/shop1.jpg";

const ShopPage = () => {
  const handleSort = (e) => {
    console.log(e.target.value);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between mt-3">
        <h5>Shops</h5>
        <SortOptions>
          <Form.Select size="sm" onChange={handleSort}>
            <option value="name">name</option>
            <option value="recent">recently added</option>
            <option value="ratings">ratings</option>
          </Form.Select>
        </SortOptions>
      </div>
      <Shop>
        <div className="shop-img">
          <img src={Shop1} alt="hop" />
        </div>
        <div>
          <h3>Shop name</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, nam?</p>
          <Rate className="mb-3" disabled allowHalf defaultValue={3} /> <br />
          <Link to="/shopDetails">
            <Button variant="outline-primary" size="sm">
              visit shop
            </Button>
          </Link>
        </div>
      </Shop>
      <Shop>
        <div className="shop-img">
          <img src={Shop1} alt="hop" />
        </div>
        <div>
          <h3>Shop name</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, nam?</p>
          <Rate className="mb-3" disabled allowHalf defaultValue={3} /> <br />
          <Link to="/shopDetails">
            <Button variant="outline-primary" size="sm">
              visit shop
            </Button>
          </Link>
        </div>
      </Shop>
      <Shop>
        <div className="shop-img">
          <img src={Shop1} alt="hop" />
        </div>
        <div>
          <h3>Shop name</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, nam?</p>
          <Rate className="mb-3" disabled allowHalf defaultValue={3} /> <br />
          <Link to="/shopDetails">
            <Button variant="outline-primary" size="sm">
              visit shop
            </Button>
          </Link>
        </div>
      </Shop>
    </Container>
  );
};

export default ShopPage;
