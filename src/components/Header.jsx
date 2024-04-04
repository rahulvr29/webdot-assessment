import React from "react";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  return (
    <div>
      <div className="header flex items-center justify-between p-7 px-[7.5%]">
        <h1 className="text-red-600 font-bold text-5xl">
          TECH<span className="text-black">REALTORS</span>
        </h1>
        <div className="navbar flex items-center gap-3">
          <nav>
            <ul className="flex gap-5">
              <li>Agents</li>
              <li>Properties</li>
              <li>About</li>
            </ul>
          </nav>
          <div className="menubar bg-red-600 ">
              <span className="text-white text-5xl"><RiMenu3Fill /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
