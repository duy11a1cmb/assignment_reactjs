import { useAuth } from "../hooks/useAuth";
import { AUTHENTICATE, ROUTE_PATH } from "../constants/appConstants";
import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import Layout from "../components/layout/Layout";

const PrivateRoute = () => {
  let [auth] = useAuth(AUTHENTICATE, null);

  if (auth) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  } else {
    return <Navigate to={ROUTE_PATH.login} replace />;
  }
};

export default PrivateRoute;
