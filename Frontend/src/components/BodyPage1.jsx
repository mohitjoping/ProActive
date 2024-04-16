import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";

const BodyPage1 = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("../Components/LoginPage");
  };
  const handleSignupClick = () => {
    navigate("../Components/SignUpPage");
  };
  return (
    <div className=" font-serif min-h-screen flex flex-col justify-between  h-screen bg-cover  bg-[url('./Images/Background_Image.png')]">
      <Navbar />
      <div className=" text-white p-8 mx-[84px]">
        <h1 className="text-4xl font-bold mb-4 mt-24 ml-[56vh]">
          Welcome to ProActive !
        </h1>
        <p className="text-lg ml-[52vh]">
          Say goodbye to procrastination,Let&apos;s make progress not excuses.
        </p>
        <div className="mt-8 ml-[70vh]">
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mr-4 rounded"
            onClick={handleLoginClick}
          >
            LOGIN
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded "
            onClick={handleSignupClick}
          >
            SIGN-UP
          </button>
        </div>
      </div>
      <div className="bg-purple-900 p-8 border-2 rounded-lg text-white ml-[40vh] w-[121vh] h-[35vh]">
        <h2 className="text-xl font-bold mb-4">What ProActive provide you</h2>
        <ul className="list-disc pl-4">
          <li>
            Proactive:This app gamifies productivity by encouraging users to
            stay focused for set periods of time.
          </li>
          <li>
            Stay Focused: A browser for google chrome that allows users to
            restrict the amount of time they spend{" "}
          </li>
          <li>
            Freedom: Similar to stay focused,freedom allows you to block
            distracting websites and apps across all your devices.
          </li>
          <li>
            Trello:While not specifically a procrastination app, Trello is a
            popular project management tool that can help organise tasks and
            deadlines.{" "}
          </li>
        </ul>
      </div>
      <footer className="bg-purple-800 text-white p-4">
        <div>
          <h1 className="text-white font-bold ml-[98vh] text-3xl mb-1 ">
            ProActive
          </h1>
        </div>
        <div className="flex justify-around space-x-6">
          <a href="#" className="hover:text-gray-400 ">
            Terms and Conditions user policy
          </a>
          <a href="#" className="hover:text-gray-400">
            {" "}
            Copyright © 2024 all rights ProActive{" "}
          </a>

          <a href="#" className="hover:text-gray-400">
            Join Our Community
          </a>
        </div>
      </footer>
    </div>
  );
};
export default BodyPage1;