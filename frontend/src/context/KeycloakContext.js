// context/KeycloakContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import keycloak from "../services/keycloak";

const KeycloakContext = createContext();

export const useKeycloak = () => useContext(KeycloakContext);

export const KeycloakProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [keycloakReady, setKeycloakReady] = useState(false);

  useEffect(() => {
    keycloak
      .init({ onLoad: "check-sso" })
      .then((authenticated) => {
        setAuthenticated(authenticated);
        setKeycloakReady(true);
      })
      .catch(() => {
        console.error("Failed to initialize Keycloak");
        setKeycloakReady(true); // Avoid blocking the app if initialization fails
      });
  }, []);

  const handleLogout = () => {
    const redirectUri = `${window.location.origin}/login`;

    keycloak.clearToken();
    keycloak.logout({ redirectUri }).then(() => {
      clearCookies();
      setAuthenticated(false);
    });
  };

  const clearCookies = () => {
    const cookies = document.cookie.split(";");

    cookies.forEach((cookie) => {
      const cookieName = cookie.split("=")[0].trim();

      // Remove Keycloak cookies specifically
      if (cookieName.startsWith("KEYCLOAK_")) {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
      }
    });

    // Optional: Clear any other session storage data if needed
    sessionStorage.clear();
    localStorage.clear();
  };

  if (!keycloakReady) {
    return <div>Loading...</div>; // Optionally show loading state
  }

  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated, handleLogout }}>
      {children}
    </KeycloakContext.Provider>
  );
};
