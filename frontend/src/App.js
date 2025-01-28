import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from './pages/DashboardPage.jsx';
import LoginPage from "./components/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import { useKeycloak } from "./context/KeycloakContext";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  const { authenticated } = useKeycloak();

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LoginPage />} />

        {/* Private Route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute authenticated={authenticated}>
              <DashboardPage />
            </PrivateRoute>
          }
        />

        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
