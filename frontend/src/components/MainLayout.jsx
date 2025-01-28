import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useKeycloak } from "../context/KeycloakContext";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

const MainLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { handleLogout } = useKeycloak();

  return (
    <div className="sb-nav-fixed">
      <DashboardNavbar
        toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        handleLogout={handleLogout}
      />

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <DashboardSidebar collapsed={sidebarCollapsed} />
        </div>

        <div id="layoutSidenav_content">
          <main>
            <Container fluid className="px-4">
              {children}
            </Container>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="py-4 bg-light mt-auto">
    <Container fluid className="px-4">
      <div className="d-flex align-items-center justify-content-between small">
        <div className="text-muted">Copyright &copy; Your Website 2023</div>
        <div>
          <a href="/">Privacy Policy</a> &middot;{" "}
          <a href="/">Terms &amp; Conditions</a>
        </div>
      </div>
    </Container>
  </footer>
);

export default MainLayout;
