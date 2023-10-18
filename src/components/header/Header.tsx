
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import {ROUTE_PATH} from "../../constants/appConstants";

const Header = ()=>{
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">DuyNV2</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={"/"+ROUTE_PATH.home} className='nav-link'>Home</Nav.Link>
              <Nav.Link href={"/"+ROUTE_PATH.demo_1} className='nav-link'>Demo 1</Nav.Link>
              <Nav.Link href={"/"+ROUTE_PATH.demo_2} className='nav-link'>Demo 2</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Text>DuyNV2</Navbar.Text>
        </Container>
      </Navbar>
    )
}

export default Header;