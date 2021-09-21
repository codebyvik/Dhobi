import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { StyledForm } from "./auth.style";
import { useDispatch, useSelector } from "react-redux";
import { agentSignInAction } from "../../redux/auth/auth.action";
import Loader from "../../utils/Loader";

const AgentSignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { user, loading } = useSelector((state) => state.auth);

  useEffect(
    () => {
      if (user) {
        history.push("/agent/orders");
      }
    },
    // eslint-disable-next-line
    [user]
  );

  const { email, password } = credentials;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(agentSignInAction(credentials));
  };

  return (
    <Container>
      <h3 className="text-center my-5">Agent Sign In</h3>
      <StyledForm onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="email"
            type="email"
            value={email}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="password"
            type="password"
            value={password}
            placeholder="Password"
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button variant="primary " type="submit">
            SignIn
            {loading && <Loader size={16} type="small" />}
          </Button>
        </div>
        <div className="d-flex flex-column justify-content-end align-items-end">
          <Link className="text-info mt-3" to="/signin">
            Customer Signin here
          </Link>
          <Link className="text-info mt-3" to="/admin/signin">
            Admin Signin here
          </Link>
        </div>
      </StyledForm>
    </Container>
  );
};

export default AgentSignIn;
