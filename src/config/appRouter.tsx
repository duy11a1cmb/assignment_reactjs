import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
    </Routes>
  );
};

export default AppRouters;
