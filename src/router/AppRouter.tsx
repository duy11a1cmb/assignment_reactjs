import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import {ROUTE_PATH} from "../constants/appConstants";

import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import DetailComponent from "../pages/DetailComponent/DetailComponent";
import Layout from "../components/layout/Layout";


const AppRouters = () => {

    return (
        <Routes>
            <Route path={ROUTE_PATH.login} element={<Login/>}/>
            <Route element={ <PrivateRoute/>}>
                <Route path={ROUTE_PATH.home} element={<Home/>}>
                </Route>
                <Route path={ROUTE_PATH.detail + "/:id"} element={<DetailComponent/>}/>
            </Route>
            <Route path='*' index element={<Navigate to={ROUTE_PATH.home} replace/>}/>
        </Routes>
    );
};

export default AppRouters;
