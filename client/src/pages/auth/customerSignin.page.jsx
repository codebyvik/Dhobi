import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledForm } from "./auth.style";
const CustomerSignin = () => {
  return (
    <Container>
      <h3 className="text-center my-5">Sign In</h3>
      <StyledForm>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button variant="primary " type="submit">
            SignIn
          </Button>
          <Link to="/register">
            <Button variant="outline-primary">Register</Button>
          </Link>
        </div>
        <div className="d-flex flex-column justify-content-end align-items-end">
          <Link className="text-info mt-3" to="/agent/signin">
            Agent Signin here
          </Link>
          <Link className="text-info mt-3" to="/admin/signin">
            Admin Signin here
          </Link>
        </div>
      </StyledForm>
    </Container>
  );
};

export default CustomerSignin;
