import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import {ROUTE_PATH} from "../constants/appConstants";
import ListComponent from "../pages/ListComponent/ListComponent";
import ListComponent1 from "../pages/ListComponent1/ListComponent";
import Demo1 from "../pages/demo/Demo1";
import Demo2 from "../pages/demo/Demo2";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import DetailComponent from "../pages/DetailComponent/DetailComponent";


const AppRouters = () => {

    return (
        <Routes>
            <Route path={ROUTE_PATH.login} element={<Login/>}/>
            <Route element={<PrivateRoute/>}>
                <Route path={ROUTE_PATH.home} element={<Home/>}>
                    {/*<Route path={ROUTE_PATH.home_list} element={<ListComponent/>}/>*/}
                    {/*<Route path={ROUTE_PATH.home_list_1} element={<ListComponent1/>}/>*/}
                </Route>
                <Route path={ROUTE_PATH.detail+"/:id"} element={<DetailComponent/>}/>

                <Route path={ROUTE_PATH.demo_1} element={<Demo1/>}/>
                <Route path={ROUTE_PATH.demo_2} element={<Demo2/>}/>
            </Route>
            <Route path='*' index element={<Navigate to={ROUTE_PATH.home} replace/>}/>
        </Routes>
    );
};

export default AppRouters;
