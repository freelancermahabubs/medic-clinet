import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Page/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  let location = useLocation();

  if (loader) {
    return <LoadingSpinner />;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
