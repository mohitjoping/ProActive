import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BodyPage1 from "./components/BodyPage1";
// import LoginPage from "./components/LoginPage";
// import SignUpPage from "./components/SignUpPage";
// import Footer from "./components/Footer";
// import Loader from "./components/Loader";
// import Navbar from "./components/Navbar";
// import LoginPage from "./components/LoginPage";
// import ForgotPassword from "./components/ForgotPassword";
// import Bodypage2 from "./components/BodyPage2";
import MainDashboard from "./components/MainDashboard";
// import favicon32x32 from "./Images/favicon-32x32.png";

function App() {
  return (
    <main className="">
      <MainDashboard/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<BodyPage1 />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter> */}
    </main>
  );
}

export default App;