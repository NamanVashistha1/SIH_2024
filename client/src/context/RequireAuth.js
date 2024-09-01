import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const RequireAuth = ({ children }) => {
  const { token } = useContext(AuthContext);
  const authToken = token || localStorage.getItem("authToken");  // Get token from context or localStorage
  return authToken ? children : <Navigate to="/Login" />;
};

export default RequireAuth;
