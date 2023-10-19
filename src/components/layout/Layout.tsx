import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface Layout {
    children: any
}

const Layout = (props: Layout) => {
    return (
        <>
            <Header/>
            {props.children}
            {/*<Footer/>*/}
        </>
    )
}

export default Layout;