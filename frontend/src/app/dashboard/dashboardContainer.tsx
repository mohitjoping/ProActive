import React from "react";
import Index from "./index";
import Todo from "./Todo";
import QuickActions from "./quikActions";
import PomodoroTimer from "./pomodoro";
import Tips from "./tips";
import MyProductivity from "./myProductivity";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-start">
      {/* Navbar */}
      <div className="flex min-w-[1280]">
        <Index />
      </div>

      {/* Main content row */}
      <div className="flex flex-row justify-start items-start ml-14 mt-5 space-x-5">
        {/* Todo component */}
        <div className="flex">
          <Todo />
        </div>

        {/* Column for Quick Actions, Pomodoro Timer, Tips, and My Productivity */}
        <div className="flex flex-col space-y-5">
          {/* Resizable component (Quick Actions) */}
          <div className="flex rounded-md bg-violet-100 p-4">
            <QuickActions />
          </div>

          {/* Pomodoro Timer */}
          <div className="flex rounded-md bg-violet-100 p-4">
            <PomodoroTimer />
          </div>

          {/* Tips */}
          <div className="flex rounded-md bg-violet-100 p-4">
            <Tips />
          </div>

          {/* My Productivity */}
          {/* <div className="flex rounded-md bg-violet-100 p-4"> */}
            {/* <MyProductivity /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
