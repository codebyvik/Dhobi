import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../utils/Loader";
import { StyledForm } from "../auth/auth.style";

import { Select } from "antd";
import { updateUserAction } from "../../redux/customer/customer.action";

const { Option } = Select;

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);

  const [CustomerCredentials, setCustomerCredentials] = useState({
    name: "",
    email: "",
    phoneNo: "",
    area: "Rajajinagar",
    city: "Bengaluru",
    pincode: "560010",
    country: "India",
  });

  useEffect(() => {
    if (user) {
      setCustomerCredentials({
        name: user.name,
        email: user.email,
        phoneNo: user.phoneNo,
        area: user.location.area,
        city: user.location.city,
        pincode: user.location.pincode,
        country: user.location.country,
      });
    }
  }, [user]);

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
      id: user._id,
      location: {
        area,
        city,
        pincode,
        country,
      },
    };

    dispatch(updateUserAction(CustomerData));
  };

  return (
    <Container>
      <h3 className="text-center">Profile</h3>
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

        <div className="d-flex justify-content-center">
          <Button className="d-flex  align-items-center" variant="primary " type="submit">
            <span className="me-2"> Update Profile </span>
            {loading && <Loader size={16} type="small" />}
          </Button>
        </div>
      </StyledForm>
    </Container>
  );
};

export default ProfilePage;
