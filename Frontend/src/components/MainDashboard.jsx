import React from "react";
import Tips from "./Tips";
import PomodoroTimer from "./PomodoroTimer";
import Todo from "./ToDoList";
import MyProductivity from "./MyProductivity";

const MainDashboard = () => {
  return (
    <div className="container  flex  h-[100vh] bg-[url('./Images/Background_Image.png')] min-w-full ">
      <div className="flex justify-center items-center h-screen">
        <Todo />
        <div className="w-2/3 h-[80vh] hp-4 m-4 rounded-lg">
          <div className="Calender h-[24vh]  bg-violet-100 rounded-2xl items-start "></div>
          <PomodoroTimer />
          <Tips />
        </div>
        {/* <MyProductivity /> */}
        <div className="w-1/3 h-[80vh] p-4 rounded-lg ml-4 mr-4 bg-violet-100 text-xl text-violet-800">
        {/* Content for right div */}
        <p>My Productivity.</p>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
