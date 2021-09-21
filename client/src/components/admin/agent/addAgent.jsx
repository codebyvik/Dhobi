import { StyledAddAgentForm } from "./agent.component.style";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../utils/Loader";
import { addAgentAction } from "../../../redux/agents/agent.action";

const AddAgent = () => {
  const dispatch = useDispatch();

  const [agentDetails, setAgentDetails] = useState({
    name: "",
    area: "",
    city: "",
    country: "India",
    pincode: "",
    email: "",
    phoneNo: "",
    password: "",
  });

  const { loading } = useSelector((state) => state.agents);

  const { name, area, city, pincode, email, phoneNo, country, password } = agentDetails;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAgentDetails({ ...agentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const AgentData = {
      name,
      phoneNo,
      email,
      location: {
        area,
        city,
        pincode,
        country,
      },
      password,
    };
    dispatch(addAgentAction(AgentData));
  };

  return (
    <Container>
      <h1 className="text-center">Add Agent</h1>
      <StyledAddAgentForm onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Agent Name</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="name"
            type="text"
            value={name}
            placeholder="Enter Agent Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Agent Email</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="email"
            type="email"
            value={email}
            placeholder="Enter Agent Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Agent Name</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="phoneNo"
            type="text"
            value={phoneNo}
            placeholder="Enter Agent PhoneNo"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="area"
            type="text"
            value={area}
            placeholder="Enter Area"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="city"
            type="text"
            value={city}
            placeholder="Enter City"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Pincode</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="pincode"
            type="text"
            value={pincode}
            placeholder="Enter Pincode"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
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

        <div className="d-flex justify-content-center">
          <Button className="d-flex  align-items-center" variant="primary " type="submit">
            <span className="me-2"> Add Agent </span>
            {loading && <Loader size={16} type="small" />}
          </Button>
        </div>
      </StyledAddAgentForm>
    </Container>
  );
};

export default AddAgent;
