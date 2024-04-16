import React, { useState } from "react";

const DailyRoutineChecklist = () => {
  const attributes = [
    "Wake up at 7:30 a.m",
    "Plan the day and set goals",
    "List things I'm grateful for",
    "Cook & eat healthy breakfast",
    "Check & respond to important emails",
    "Do afternoon stretches",
    "Prioritize tasks & manage time",
    "Work focus time",
    "Skill Mastery",
    "Review work to-do list",
  ];

  const [checkLists, setCheckLists] = useState([
    Array(attributes.length).fill(false), // Sunday
    Array(attributes.length).fill(false), // Monday
    Array(attributes.length).fill(false), // Tuesday
    Array(attributes.length).fill(false), // Wednesday
    Array(attributes.length).fill(false), // Thursday
    Array(attributes.length).fill(false), // Friday
    Array(attributes.length).fill(false), // Saturday
  ]);

  const handleCheckboxChange = (dayIndex, index) => {
    const newCheckLists = [...checkLists];
    newCheckLists[dayIndex][index] = !newCheckLists[dayIndex][index];
    setCheckLists(newCheckLists);
  };

  const getTotalChecked = (dayIndex) => {
    return checkLists[dayIndex].filter((item) => item).length;
  };

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="container flex   h-screen bg-[url('./Images/Background_Image.png')] min-w-full ">
      <div className="bg-violet-100 p-4 m-3 rounded-md shadow-md">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {weekdays.map((day, dayIndex) => (
            <div key={day}>
              <h2 className="text-xl font-semibold mb-2">{day}</h2>
              <ul className="list-none text-sm">
                {attributes.map((attribute, index) => (
                  <li key={index} className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={checkLists[dayIndex][index]}
                        onChange={() => handleCheckboxChange(dayIndex, index)}
                        className="form-checkbox mr-2 h-4 w-4 text-violet-800"
                      />
                      <span className="justify-start">{attribute}</span>
                    </label>
                  </li>
                ))}
              </ul>
              <p className="text-sm mt-2 font-semibold">
                Outcome: {getTotalChecked(dayIndex)} out of {attributes.length}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyRoutineChecklist;
