// Add "use client" directive at the top to ensure client-side rendering
"use client";

// Import necessary modules from React
import React, { useState, useEffect } from 'react';

// Define the PomodoroTimer component as a TypeScript function component
const PomodoroTimer: React.FC = () => {
  const [workMinutes, setWorkMinutes] = useState<number>(25);
  const [breakMinutes, setBreakMinutes] = useState<number>(5);
  const [minutes, setMinutes] = useState<number>(workMinutes);
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isWorkTime, setIsWorkTime] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval!); // Use ! to assert that interval is defined
            // Optionally, you can add a sound notification here for end of timer
            setIsWorkTime(!isWorkTime);
            if (isWorkTime) {
              setMinutes(breakMinutes);
            } else {
              setMinutes(workMinutes);
            }
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval!); // Use ! to assert that interval is defined
    }

    return () => clearInterval(interval!); // Use ! to assert that interval is defined
  }, [isActive, isPaused, minutes, seconds, isWorkTime, workMinutes, breakMinutes]);

  const toggleTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
    setIsPaused(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setMinutes(workMinutes);
    setSeconds(0);
    setIsWorkTime(true);
  };

  const pauseTimer = () => {
    setIsPaused(true);
  };

  return (
    <div className="p-2 bg-violet-200  border border-violet-950 rounded-md shadow-md min-w-[900px] min-h-[100px] max-h-[100px] relative overflow-hidden">
      <div className="text-9xl mx-32 font-extrabold text-violet-950">
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center'>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4">
          <div className="flex-row mt-2 text-violet-950">
            <label htmlFor="workMinutes">Work Minutes:</label>
            <input
              id="workMinutes"
              type="number"
              value={workMinutes}
              onChange={(e) => setWorkMinutes(parseInt(e.target.value))}
              className="ml-2 p-1 border border-violet-950 rounded text-center w-20 md:w-auto"
            />
          </div>
          <div className="flex space-x-4 h-[10%] mt-6 mx-7">
            <button onClick={toggleTimer} className="bg-violet-950 hover:bg-violet-500 hover:text-white py-2 px-4 rounded-full">
              {isActive ? (isPaused ? 'Resume' : 'Pause') : 'Start'}
            </button>
            <button onClick={resetTimer} className="bg-violet-950 hover:bg-violet-500 hover:text-white py-2 px-4 rounded-full">
              Reset
            </button>
          </div>
          <div className="flex-row mt-2 text-violet-950">
            <label htmlFor="breakMinutes">Break Minutes:</label>
            <input
              id="breakMinutes"
              type="number"
              value={breakMinutes}
              onChange={(e) => setBreakMinutes(parseInt(e.target.value))}
              className="ml-2 p-1 border border-violet-950 rounded text-center w-20 md:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
