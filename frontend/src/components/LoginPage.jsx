import React from "react";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from "../context/KeycloakContext";

const LoginPage = () => {
  const { keycloak, authenticated } = useKeycloak();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (authenticated) {
      navigate("/dashboard"); 
    }
  }, [authenticated, navigate]);

  const handleLogin = () => {
    // Trigger Keycloak's login process
    keycloak.login();
  };

  if (authenticated) {
    return <div>Redirecting to dashboard...</div>; // Optionally show a message during redirect
  }

  return (
    <div className="bg-primary">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">Login</h3>
                    </div>
                    <div className="card-body">
                      <button
                        onClick={handleLogin}
                        className="btn btn-primary w-100"
                      >
                        Login with Keycloak
                      </button>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small">
                        <a href="/register">Need an account? Sign up!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="layoutAuthentication_footer">
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright &copy; Your Website 2023</div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
