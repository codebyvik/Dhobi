import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOutAction } from "../../redux/auth/auth.action";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(signOutAction());
  };

  return (
    <Navbar className="sticky-top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <h4>
            <b>Dhobi</b>
          </h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?.role === "admin" || user?.role === "agent" ? (
              ""
            ) : (
              <>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/shops">Shops</Nav.Link>
                <Nav.Link href="/orders">Orders</Nav.Link>
              </>
            )}

            {user ? (
              <Button
                onClick={() => handleSignOut()}
                className="rounded-pill px-4"
                variant="outline-danger"
                size="sm"
              >
                Sign Out
              </Button>
            ) : (
              <Link to="/signin">
                <Button className="rounded-pill px-4" variant="outline-primary" size="sm">
                  SignIn
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
