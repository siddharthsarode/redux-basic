import React from "react";
import Products from "./components/Products";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="text-4xl text-blue-700">
      {/* <Products /> */}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
