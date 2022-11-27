import React from "react";

import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  let auth = localStorage.getItem("token") == null ? false : true;

  console.log("auth", auth);
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoute;
