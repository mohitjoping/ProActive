import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./Navbar";

function MyProductivity() {
  return (
    <div className="container flex flex-col  md:container md:ml-3 rounded-xl p-5 bg-violet-100 min-h-[80vh] max-h-[80vh] md:w-[22%]">
      <h1 className="myproductivity  text-violet-800 ml-[8vh] font-semibold text-xl mt-5">
        My Productivity
      </h1>
      <div className="task-completed h-[20vh] w-[19vw] bg-violet-800 my-[2vh] rounded-xl "></div>
      <div className="time-duration h-[20vh] w-[19vw] bg-violet-800 my-[2vh] rounded-xl"></div>
      <div className="pi-chart"></div>
      <button className="justify-between w-[19vw] bg-violet-800 mx-1 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white">
        Daily Routine
      </button>
    </div>
  );
}
export default MyProductivity;
