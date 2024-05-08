import React from "react";
import logo from "../assets/Vector.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-2">
      <div className="w-[1392px] h-[111.17px] pl-[52.22px] pr-[20.89px] py-[16.97px] bg-white/opacity-80 rounded-[65.28px] border border-gray-200 backdrop-blur-[31.33px] justify-between items-center inline-flex">
        <img className="" src={logo} alt="logo"></img>
        <div className="w-[127.94px] h-[47.39px] relative" />
        <div className="justify-end items-center gap-[15.67px] flex">
          <div className="px-[41.78px] py-[26.11px] rounded-[107.06px] hover:bg-zinc-100 border border-gray-200 justify-center items-center gap-[5.22px] flex">
            <NavLink
              to="/signup"
              className="text-center text-zinc-900 text-lg font-medium font-['Manrope'] capitalize"
            >
              Get projects
            </NavLink>
          </div>
          <div className="pl-[41.78px] pr-[49.61px] py-[26.11px] bg-zinc-900 hover:bg-neutral-600 rounded-[107.06px] justify-center items-center gap-[15.67px] flex">
            <div className="text-center text-white text-lg font-semibold font-['Manrope'] capitalize">
              Onboard Talent
            </div>
          </div>
        </div>
        <div className="origin-top-left rotate-[0.56deg] w-[25.15px] h-[25.30px] left-[1759.86px] top-[35.59px] absolute"></div>
      </div>
    </div>
  );
};

export default Navbar;
