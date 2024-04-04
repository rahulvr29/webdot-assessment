import React from "react";
import House from "../assets/img-2.png";
import { IoSearch } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import "./main.css";

const Main = () => {
  return (
    <div className="relative">
      <div className="flex items-start justify-between  w-full main ">
        <div className="left w-[40%] px-9 flex items-start">
          <div className="partA flex gap-5 items-center  p-10">
            <div className="flex flex-col items-center text-4xl pl-9">
              <h2 className="text-red-600 font-bold">850+</h2>
              <p className="text-gray-600 text-xl">
                Property <br />
                Listing
              </p>
            </div>
            <div className="flex flex-col items-center text-4xl">
              <h2 className="text-red-600 font-bold">110+</h2>
              <p className="text-gray-600 text-xl">
                Esteemed <br />
                Agents
              </p>
            </div>
            <div className="flex flex-col items-center text-4xl">
              <h2 className="text-red-600 font-bold">958+</h2>
              <p className="text-gray-600 text-xl">
                Regular <br />
                Clients
              </p>
            </div>
          </div>
        </div>
        <div className="w-[60%] house-img ">
          <img src={House} className="" />
        </div>
      </div>
      <div className="absolute top-[30%] left-[7%] w-full h-full">
        <div className="bg-black text-white px-24 py-10 w-[40%] h-[62%] rounded-tr-[50px]">
          <h1 className="pt-10 pb-4 text-4xl font-bold uppercase">
            Creating blissful <br /> property search <br /> is our speciality
          </h1>
          <p className="text-white text-xl">
            With a lot of experience we will help you shortlist the properties
            you want.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-evenly gap-5 bg-white absolute top-[70%] left-[13%] px-5 py-3 w-[40%]">
        <span className="text-2xl ">
          <IoSearch />
        </span>
        <input
          type="text"
          placeholder="Search by project, street name, area"
          className=""
        />
        <span className="inline-block transform rotate-90 text-2xl">
          <VscSettings />
        </span>
        <div className="">
          <button className=" bg-red-600 px-10 py-4 text-white">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
