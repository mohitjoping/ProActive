// Import necessary modules from React and TypeScript type annotations
import React from "react";

const MyProductivity: React.FC = () => {
  return (
    <div className="container flex flex-col md:ml-3 rounded-xl p-5 bg-violet-100 min-h-[80vh] max-h-[80vh] md:w-[22%] overflow-hidden">
      <h1 className="myproductivity text-violet-800 ml-8 font-semibold text-xl mt-5">
        My Productivity
      </h1>
      <div className=" flex flex-row ">
        <div className="task-completed h-20 w-19 bg-violet-800 my-2 rounded-xl">

        </div>
      <div className="time-duration h-20 w-19 bg-violet-800 my-2 rounded-xl">
        
        </div>
        <div className="pi-chart"></div>
      </div>
      
      <button className="w-19 bg-violet-800 mx-1 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white">
        Daily Routine
      </button>
    </div>
  );
};

export default MyProductivity;
