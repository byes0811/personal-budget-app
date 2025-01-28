import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const DashboardSidebar = ({ collapsed }) => {
  return (
    <Nav className={`sb-sidenav accordion sb-sidenav-dark ${collapsed ? 'collapsed' : ''}`}>
      <Nav className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading">Core</div>
          <Nav.Link href="/" active>
            <div className="sb-nav-link-icon">
              <FontAwesomeIcon icon={faTachometerAlt} />
            </div>
            Dashboard
          </Nav.Link>
        </div>
      </Nav>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </Nav>
  );
};

export default DashboardSidebar;