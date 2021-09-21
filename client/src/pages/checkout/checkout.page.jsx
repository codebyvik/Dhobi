import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { StyledForm } from "../auth/auth.style";
import { useDispatch, useSelector } from "react-redux";

import { SaveShippingInfo } from "../../redux/order/order.action";

const Checkout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useSelector((state) => state.auth);

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    area: "",
    city: "",
    phoneNo: "",
    pincode: "",
    country: "",
  });

  useEffect(() => {
    if (user) {
      setShippingInfo({
        ...shippingInfo,
        area: user.location.area,
        city: user.location.city,
        phoneNo: user.phoneNo,
        pincode: user.location.pincode,
        country: user.location.country,
      });
    }
  }, [user]);

  const { name, address, area, city, phoneNo, pincode, country } = shippingInfo;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SaveShippingInfo(shippingInfo));
    history.push("/payment");
  };
  return (
    <Container>
      <h3 className="text-center my-5">Admin Signin</h3>
      <StyledForm onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name </Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="name"
            type="text"
            value={name}
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Door no</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="address"
            type="text"
            value={address}
            placeholder="Door no"
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button className="d-flex align-items-center" variant="primary " type="submit">
            <span className="me-2"> Pay now </span>
          </Button>
        </div>
      </StyledForm>
    </Container>
  );
};

export default Checkout;
