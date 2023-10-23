import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AUTHENTICATE, ROUTE_PATH } from "../../constants/appConstants";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { setDetailUser } from "../../redux/slices/userSlices";
import { Link } from "react-router-dom";
import './header.css'
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.userSlices.user);
  const [auth, setAuth] = useAuth(AUTHENTICATE, null);

  const handleLogout = () => {
    window?.localStorage.removeItem(AUTHENTICATE);
    dispatch(setDetailUser(null));
  };

  return (
    <Navbar
      bg="primary"
      data-bs-theme="dark"
      expand="lg"
      className="position-sticky"
      style={{ zIndex: 999, top: 0 }}
    >
      <Container>
        <Navbar.Brand href={"/" + ROUTE_PATH.home}>
          <img
            width="26px"
            src="https://e7.pngegg.com/pngimages/269/989/png-clipart-kochi-human-resource-management-human-resources-better-business-bureau-human-resource-blue-company-thumbnail.png"
            alt=""
          />
          <span className="ps-2">HRM</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Text className='text-header-profile'>
          <NavDropdown title={auth.username} id="basic-nav-dropdown">
            <NavDropdown.Item href={`/detail/${auth.id}`}>
              Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/login" onClick={handleLogout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
