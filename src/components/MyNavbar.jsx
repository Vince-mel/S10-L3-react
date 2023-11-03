import LogoNetflix from "../assets/logo.png";
import Avatar from "../assets/avatar.png";

import {
  Dropdown,
  Navbar,
  Nav,
  NavDropdown,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";

import { BsFillBellFill, BsSearch } from "react-icons/bs";

const MyNavbar = () => {
  const { pathname } = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand>
        <img src={LogoNetflix} id="logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Link className="nav-link font-weight-bold" to={"/"}>
            Home
          </Link>
          <Link
            className="nav-link font-weight-bold"
            to={"/src/components/TVShows.jsx"}
          >
            TV Shows
          </Link>
          <Nav.Link>Movies</Nav.Link>
          <Nav.Link>Recently Added</Nav.Link>
          <Nav.Link>My List</Nav.Link>
        </Nav>
        <Nav id="avatarZone" className="d-md-none!">
          <InputGroup className=" align-content-center  ">
            <FormControl
              className="d-none d-lg-block "
              placeholder={pathname === "/" ? "cerca film" : "cerca serie tv"}
            />
          </InputGroup>
          <BsSearch className="navbar-icon" />
          <BsFillBellFill className="navbar-icon" />
          <Nav.Link>Vincenzo</Nav.Link>
          <NavDropdown title={<img src={Avatar} id="avatar" alt="propic" />}>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
