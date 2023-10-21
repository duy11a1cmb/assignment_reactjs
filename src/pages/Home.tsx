import React from "react";
import ListComponent from "./ListComponent/ListComponent";

const Home = () => {
    return (
        <div className='d-flex flex-row' style={{width: '100%', height: 'calc(100vh - 120px)',overflow:'auto'}}>
            <ListComponent/>
        </div>
    );
};

export default Home;
