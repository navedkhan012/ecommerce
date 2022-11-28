import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {

  const auth = useSelector(state => state) 
  const loggedInUser = () => {
    return (
      <Nav>
      <Nav.Link as={Link} to="/">
        Logout
      </Nav.Link>
      <Nav.Link as={Link} to="/signin">
        Sign In
      </Nav.Link>
   
    
    </Nav>
    )
  }
  const nonLoggedInUser = () => {
    return (
      <Nav>
      <Nav.Link as={Link} to="/">
        home
      </Nav.Link>
      <Nav.Link as={Link} to="/signin">
        Sign In
      </Nav.Link>
      <Nav.Link as={Link} to="/signup">
        signup
      </Nav.Link>
    </Nav>
    )
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Admin App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>
      <Nav.Link as={Link} to="/">
        home
      </Nav.Link>
      <Nav.Link as={Link} to="/signin">
        Sign In
      </Nav.Link>
      <Nav.Link as={Link} to="/signup">
        signup
      </Nav.Link>
    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
