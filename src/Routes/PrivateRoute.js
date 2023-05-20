import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Componants/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Spinner />
  }
  if (user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace/>;
};

export default PrivateRoute;