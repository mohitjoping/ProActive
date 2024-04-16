import React, { useState, useEffect } from 'react';
import tipsData from './tips.json'; // Adjust the import path accordingly


const Tips = () => {
  const [tip, setTip] = useState({});

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
    <div className="p-2 mt-6 border rounded-md shadow-md min-w-2/3 min-h-[24vh] max-h-[26vh] relative  bg-violet-100">
      <h1 className="text-3xl font-bold text-left rounded-xl mb-4">Tips</h1>
      <h2 className="text-lg font-semibold mb-2">{tip.title}</h2>
      <p className="text-gray-700 mb-4 overflow-wrap-break-word text-xs">{tip.content}</p>
      <button
        className="absolute bottom-2 right-2 bg-violet-500 hover:bg-slate-300 hover:text-violet-500 font-bold py-2 px-4 rounded-full "
        onClick={handleRefresh}
      >
        Refresh
      </button>
    </div>
  );
};

export default Tips;
