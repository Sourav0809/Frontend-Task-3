import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className=" text-2xl bg-[#FFFF] flex justify-between item-center px-10 py-4 font-custom ">
      <div className=" font-semibold">
        <h1>APP LOGO</h1>
      </div>
      <div className=" flex justify-center items-center gap-4 ">
        <NavLink to={"/"}>
          <h1 className=" cursor-pointer text-xl font-medium">DASHBOARD</h1>
        </NavLink>
        <NavLink to={"/select-ads"}>
          <h1 className=" cursor-pointer text-xl font-medium">CREATE ADS</h1>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
