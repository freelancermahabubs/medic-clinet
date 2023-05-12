import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Page/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  let location = useLocation();

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
