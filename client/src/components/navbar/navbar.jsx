import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
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
            <Nav.Link href="#home">Profile</Nav.Link>
            <Nav.Link href="#link">Shops</Nav.Link>
            <Nav.Link href="#link">Orders</Nav.Link>
            <Link to="/signin">
              <Button className="rounded-pill px-4" variant="outline-primary" size="sm">
                SignIn
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
