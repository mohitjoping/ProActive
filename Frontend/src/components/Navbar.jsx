import { useState } from "react";
import GitHubLogo from "../Images/GitHubLogo.svg";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Links = [
  { name: "HOME", link: "/" },
  { name: "ABOUT US", link: "/" },
  { name: "BLOG", link: "/" },
  { name: "CONTACT", link: "/" },
  { name: "GITHUB", link: "https://github.com/DevsDialogue/ProActive" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-purple-800 py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="text-white font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span>ProActive</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-purple-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
              {link.name === "GITHUB" ? (
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={GitHubLogo}
                    alt="GitHub Logo"
                    className="h-9 w-9 inline-block "
                  />
                </a>
              ) : (
                <a
                  href={link.link}
                  className="text-white hover:text-blue-400 duration-500"
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Navbar;
