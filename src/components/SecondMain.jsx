import React from "react";
import { FaPlus } from "react-icons/fa";
import person1 from "../assets/per-1.png";
import person2 from "../assets/per-2.png";
import person3 from "../assets/per-3.png";
import person4 from "../assets/per-4.png";
import person5 from "../assets/per-5.png";

import buildingImg from "../assets/Build.png";
import man from "../assets/man.png";
import line1 from "../assets/line-1.png";
import line2 from "../assets/line-2.png";


const SecondMain = () => {
  return (
    <>
      <div className="flex items-center justify-between mr-[60px]">
        <div className="px-24 py-10 flex flex-col gap-5">
          <h2 className="text-black text-6xl font-semibold">
            Featured <span className="text-red-600 text-6xl">Agents</span>{" "}
          </h2>
          <p className="text-gray-800">
            Meet the opportunity to work with some of the top <br />
            Real Estate Agents in town
          </p>
        </div>
        <div className="flex items-center gap-5">
          <span className="inline-block bg-red-600 rounded-full text-white text-7xl">
            <FaPlus />
          </span>
          <p className="text-gray-600">
            View all <br /> <span className="text-red-600">Agents</span>
          </p>
        </div>
      </div>
      <div className="flex w-[100%]">
        <div className="px-16 py-10 flex items-start gap-6 relative w-[35%]">
          <img src={person1} alt="" />
          <div className="flex flex-col gap-7">
            <div className="bg-red-600 text-white rounded-tr-[15px] mt-6 p-2 w-[210px] h-[40px] font-semibold">
              <h2>Amirul Feisal</h2>
            </div>
            <div className="flex items-center gap-5 pt-3">
              <div className="flex items-center gap-1">
              <img src={buildingImg} alt="" />
              <p className="text-gray-600">25 Listings</p>
              </div>
              <div className="flex items-center gap-1">
              <img src={man} alt="" />
              <p className="text-gray-600">REN 1255</p>
              </div>
            </div>
          </div>
          <div className="absolute top-[100px] left-[400px]">
            <img src={line1} className="w-[80px]" />
          </div>
        </div>
        <div className="px-16 py-10 flex items-start gap-6 relative w-[35%]">
          <img src={person2} alt="" />
          <div className="flex flex-col gap-7">
            <div className="bg-black text-white rounded-tr-[15px] mt-6 p-2 w-[210px] h-[40px] font-semibold">
              <h2>Amirul Feisal</h2>
            </div>
            <div className="flex items-center gap-5 pt-3">
              <div className="flex items-center gap-1">
              <img src={buildingImg} alt="" />
              <p className="text-gray-600">25 Listings</p>
              </div>
              <div className="flex items-center gap-1">
              <img src={man} alt="" />
              <p className="text-gray-600">REN 1255</p>
              </div>
            </div>
          </div>
          <div className="absolute top-[100px] left-[400px]">
            <img src={line2} className="w-[80px]" />
          </div>
        </div>
        <div className="px-16 py-10 flex items-start gap-6 relative w-[35%]">
          <img src={person3} alt="" />
          <div className="flex flex-col gap-7">
            <div className="bg-red-600 text-white rounded-tr-[15px] mt-6 p-2 w-[210px] h-[40px] font-semibold">
              <h2>Amirul Feisal</h2>
            </div>
            <div className="flex items-center gap-5 pt-3">
              <div className="flex items-center gap-1">
              <img src={buildingImg} alt="" />
              <p className="text-gray-600">25 Listings</p>
              </div>
              <div className="flex items-center gap-1">
              <img src={man} alt="" />
              <p className="text-gray-600">REN 1255</p>
              </div>
            </div>
          </div>
          <div className="absolute top-[100px] left-[400px]">
            <img src={line1} className="w-[80px]" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
      <div className="px-16 py-10 flex items-start gap-6 relative w-[40%]">
          <img src={person4} alt="" />
          <div className="flex flex-col gap-7">
            <div className="bg-black text-white rounded-tr-[15px] mt-6 p-2 w-[210px] h-[40px] font-semibold">
              <h2>Amirul Feisal</h2>
            </div>
            <div className="flex items-center gap-5 pt-3">
              <div className="flex items-center gap-1">
              <img src={buildingImg} alt="" />
              <p className="text-gray-600">25 Listings</p>
              </div>
              <div className="flex items-center gap-1">
              <img src={man} alt="" />
              <p className="text-gray-600">REN 1255</p>
              </div>
            </div>
          </div>
          <div className="absolute top-[100px] left-[400px]">
            <img src={line2} className="w-[80px]" />
          </div>
        </div>
        <div className="px-16 py-10 flex items-start gap-6 relative w-[40%]">
          <img src={person5} alt="" />
          <div className="flex flex-col gap-7">
            <div className="bg-red-600 text-white rounded-tr-[15px] mt-6 p-2 w-[210px] h-[40px] font-semibold">
              <h2>Amirul Feisal</h2>
            </div>
            <div className="flex items-center gap-5 pt-3">
              <div className="flex items-center gap-1">
              <img src={buildingImg} alt="" />
              <p className="text-gray-600">25 Listings</p>
              </div>
              <div className="flex items-center gap-1">
              <img src={man} alt="" />
              <p className="text-gray-600">REN 1255</p>
              </div>
            </div>
          </div>
          <div className="absolute top-[100px] left-[400px]">
            <img src={line1} className="w-[80px]" />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SecondMain;
