import React from "react";
import {Link, Outlet} from "react-router-dom";
import {Nav} from "react-bootstrap";
import {ROUTE_PATH} from "../constants/appConstants";
import Layout from "../components/layout/Layout";
import ListComponent from "./ListComponent/ListComponent";

const Home = () => {
    return (
        <Layout>
            <div className='d-flex flex-row row' style={{width:'100%',height:'calc(100vh - 60px)'}}>
                <ListComponent/>
            </div>
        </Layout>

    );
};

export default Home;
