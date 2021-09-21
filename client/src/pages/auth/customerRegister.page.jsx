import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../utils/Loader";
import { StyledForm } from "./auth.style";

import { Select } from "antd";
import { registerUserAction } from "../../redux/auth/auth.action";

const { Option } = Select;

const CustomerRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user]);

  const [CustomerCredentials, setCustomerCredentials] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    area: "Rajajinagar",
    city: "Bengaluru",
    pincode: "560010",
    country: "India",
  });

  const { name, email, phoneNo, password, area, city, pincode, country } = CustomerCredentials;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerCredentials({ ...CustomerCredentials, [name]: value });
  };

  const handleSelectChange = (value) => {
    if (value == 1) {
      setCustomerCredentials({
        ...CustomerCredentials,
        area: "Rajajinagar",
        city: "Bengaluru",
        pincode: "560010",
      });
    } else if (value == 2) {
      setCustomerCredentials({
        ...CustomerCredentials,
        area: "Sanjaynagar",
        city: "Bengaluru",
        pincode: "560054",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const CustomerData = {
      name,
      email,
      phoneNo,
      password,
      location: {
        area,
        city,
        pincode,
        country,
      },
    };

    dispatch(registerUserAction(CustomerData));
  };

  return (
    <Container>
      <h3 className="text-center">Register</h3>
      <StyledForm onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label> Name</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="name"
            type="text"
            value={name}
            placeholder="Enter  Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> Email</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="email"
            type="email"
            value={email}
            placeholder="Enter  Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone no</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="phoneNo"
            type="text"
            value={phoneNo}
            placeholder="Enter  PhoneNo"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Area</Form.Label>
          <Select
            placeholder="Select area"
            defaultValue="1"
            style={{ width: "100%" }}
            onChange={handleSelectChange}
          >
            <Option value="1">Rajajinagar</Option>
            <Option value="2">Sanjaynagar</Option>
          </Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control
            name="city"
            type="text"
            value={city}
            placeholder="Enter City"
            required
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Pincode</Form.Label>
          <Form.Control
            name="pincode"
            type="text"
            value={pincode}
            placeholder="Enter Pincode"
            required
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="password"
            type="password"
            value={password}
            placeholder="Enter Password"
            required
          />
        </Form.Group>

        <div className="d-flex flex-column align-items-center justify-content-center">
          <Button className="d-flex  align-items-center" variant="primary " type="submit">
            <span className="me-2"> Register </span>
            {loading && <Loader size={16} type="small" />}
          </Button>
          <Link to="/signin">SignIn here</Link>
        </div>
      </StyledForm>
    </Container>
  );
};

export default CustomerRegister;
