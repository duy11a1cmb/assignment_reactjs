import React from "react";
import ListComponent from "./ListComponent/ListComponent";

const Home = () => {
    return (
        <div className='d-flex flex-row row' style={{width: '100%', height: 'calc(100vh - 60px)',overflow:'auto'}}>
            <ListComponent/>
        </div>
    );
};

export default Home;
