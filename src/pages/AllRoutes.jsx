import React from "react";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";


const AllRoutes = () => {
  return (
    <Routes>
     <Route path={'/'} element={<HomePage />} />
    </Routes>
  );
};

export default AllRoutes;
