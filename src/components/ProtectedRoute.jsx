import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import React from "react";

const ProtectedRoute = () => {
  const { isLoading, isLoggedIn } = useContext(AuthContext);
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoute;
