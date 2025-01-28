import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ authenticated, children }) => {
  // Redirect to login if not authenticated
  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  return children; 
};

export default PrivateRoute;
