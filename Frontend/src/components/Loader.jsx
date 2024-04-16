import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const HorizontalLoader = ({ onFinish }) => {
  // State variables for loader progress and completion
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulates loading process with controlled progress updates
  useEffect(() => {
    let intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        // Gradually increase progress, accelerating near completion
        const newProgress = Math.min(
          prevProgress + (prevProgress >= 90 ? 10 : 1),
          100
        );
        return newProgress;
      });
    }, 10); // Adjust interval for smoother loading animation

    // Simulate a short stall before finishing
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setProgress(100); // Ensure loader completes before shrinking animation

      setTimeout(() => {
        setIsLoaded(true);
        setTimeout(() => {
          onFinish(); // Call the callback function after a delay
        }, 500); // Adjust the delay for the "Loading Complete" message
      }, 500); // Adjust the delay before shrinking animation
    }, 2000); // Adjust the duration of the simulated stall

    // Cleanup function to clear intervals and timeouts on component unmount
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [onFinish]);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {!isLoaded ? (
        <div className="w-20 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-600"
            style={{ width: `${progress}%` }} // Dynamic width based on progress
          ></div>
        </div>
      ) : (
        <div className="text-xl font-bold text-gray-800">Loading Complete</div>
      )}
    </div>
  );
};

HorizontalLoader.propTypes = {
  onFinish: PropTypes.func.isRequired,
};

export default HorizontalLoader;
