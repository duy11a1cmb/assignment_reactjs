import {useAuth} from "../hooks/useAuth";
import {AUTHENTICATE, ROUTE_PATH} from "../constants/appConstants";
import {Navigate, Outlet} from "react-router-dom";
import React from "react";


const PrivateRoute = () => {
    let [auth,] = useAuth(AUTHENTICATE, null);

    if (auth) {
        return <Outlet/>
    } else {
        return (
            <Navigate to={ROUTE_PATH.login} replace/>
        )
    }

}

export default PrivateRoute