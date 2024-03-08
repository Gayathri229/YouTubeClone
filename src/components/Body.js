import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";

const Body = () => {
  const isDarkMode = useSelector((store) => store.darkMode.isDarkMode);

  return (
    <div>
      <Header />
      <div className={"flex " + (isDarkMode && " bg-black text-white")}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
