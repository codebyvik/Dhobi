import { StyledAddAgentForm } from "./agent.component.style";
import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../utils/Loader";
import { getSingleAgentAction, updateAgentAction } from "../../../redux/agents/agent.action";

const UpdateAgent = () => {
  const dispatch = useDispatch();
  const param = useParams();

  const { agent, loading, updating } = useSelector((state) => state.agents);
  const [agentDetails, setAgentDetails] = useState({
    name: "",
    area: "",
    city: "",
    country: "India",
    pincode: "",
    email: "",
    phoneNo: "",
  });

  useEffect(() => {
    dispatch(getSingleAgentAction(param.id));
  }, [dispatch, param.id]);

  useEffect(() => {
    if (agent) {
      setAgentDetails({
        name: agent.name,
        area: agent.location.area,
        city: agent.location.city,
        country: agent.location.country,
        pincode: agent.location.pincode,
        email: agent.email,
        phoneNo: agent.phoneNo,
      });
    }
    return;
  }, [agent]);

  const { name, area, city, pincode, email, phoneNo, country } = agentDetails;

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
      id: agent._id,
    };
    dispatch(updateAgentAction(AgentData));
  };

  return (
    <Container>
      <h1 className="text-center">Update Agent</h1>
      {loading ? (
        <Loader size={44} type="big" />
      ) : (
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

          <div className="d-flex justify-content-center">
            <Button className="d-flex  align-items-center" variant="primary " type="submit">
              <span className="me-2"> Update Agent </span>
              {updating && <Loader size={16} type="small" />}
            </Button>
          </div>
        </StyledAddAgentForm>
      )}
    </Container>
  );
};

export default UpdateAgent;
