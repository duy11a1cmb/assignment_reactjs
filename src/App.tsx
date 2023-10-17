import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouters from "./router/AppRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <AppRouters/>
        </BrowserRouter>
    );
}

export default App;
