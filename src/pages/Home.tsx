import React from "react";
import {Link, Outlet} from "react-router-dom";
import {Nav} from "react-bootstrap";
import {ROUTE_PATH} from "../constants/appConstants";
import Layout from "../components/layout/Layout";

const Home = () => {
    return (
        <Layout>
            <div className='d-flex flex-row row' style={{width:'100%',height:'calc(100vh - 60px)'}}>
                <div className='col-2'>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Link to={ROUTE_PATH.home_list} className='nav-link'>List</Link>
                        <Link to={ROUTE_PATH.home_list_1} className='nav-link'>List 1</Link>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>
                </div>
                <div className='col-10' style={{borderLeft:'1px solid gray', maxHeight:'calc(100% - 130px)',overflow:"auto"}}>
                    <Outlet/>
                </div>
            </div>
        </Layout>

    );
};

export default Home;
