import React from "react";
import { Navigate, NavLink } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/signIn" replace/>;
};

export default ProtectedRoute;
