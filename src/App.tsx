import React from "react";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouters from "./router/AppRouter";
import {Provider} from "react-redux";
import store from "./redux/store";
function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppRouters/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
