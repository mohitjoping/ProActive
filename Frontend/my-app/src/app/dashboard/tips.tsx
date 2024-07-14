// Add "use client" directive at the top to ensure client-side rendering
"use client";

// Import necessary modules from React and the JSON data
import React, { useState, useEffect } from 'react';
import tipsData from './tips.json'; // Adjust the import path accordingly

// Define TypeScript interface for the tip structure
interface Tip {
  title: string;
  content: string;
}

// Define the Tips component with type annotations
const Tips: React.FC = () => {
  const [tip, setTip] = useState<Tip>({ title: "", content: "" }); // Ensure initial state matches the Tip type

  useEffect(() => {
    // Select a random tip on initial load
    const randomIndex = Math.floor(Math.random() * tipsData.tips.length);
    setTip(tipsData.tips[randomIndex]);
  }, []);

  const handleRefresh = () => {
    // Select a random tip on refresh
    const randomIndex = Math.floor(Math.random() * tipsData.tips.length);
    setTip(tipsData.tips[randomIndex]);
  };

  return (
    <div className="tips-card p-2  border rounded-md shadow-md min-w-[900px] h-48 relative bg-violet-200">
      <h1 className="text-3xl font-bold text-left  text-violet-950  rounded-xl mb-4">Tips</h1>
      <h2 className="text-lg font-semibold text-violet-950 mb-2">{tip.title}</h2>
      <p className="text-gray-700 mb-4 overflow-wrap-break-word text-xs">{tip.content}</p>
      <button
        className="absolute bottom-2 right-2 bg-violet-950 hover:bg-violet-800 hover:text-white font-bold py-2 px-4 rounded-full"
        onClick={handleRefresh}
      >
        Refresh
      </button>
    </div>
  );
};

export default Tips;
