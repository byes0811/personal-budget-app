import React from "react";
import { Navbar, NavDropdown, Form, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const DashboardNavbar = ({ handleLogout, toggleSidebar }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="sb-topnav">
      <Navbar.Brand href="/" className="ps-3">
        Start Bootstrap
      </Navbar.Brand>
      <Button
        variant="link"
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>

      <Form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div className="input-group">
          <Form.Control type="text" placeholder="Search for..." />
          <Button variant="primary">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </Form>

      <Nav className="ms-auto ms-md-0 me-3 me-lg-4">
        <Nav.Link href="#">
          <FontAwesomeIcon icon={faUser} />
        </Nav.Link>
        <NavDropdown title="Profile" id="nav-dropdown">
          <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default DashboardNavbar;
