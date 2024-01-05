import React from "react";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";

const Navbar = ({ handleScroll, active }) => {
  return (
    <div className="border-gray-700 border px-4 py-2 rounded-full text-gray-700">
      <ul className="flex items-center justify-center">
        <li className="mx-2">
          <button
            onClick={() => handleScroll("home")}
            className={active === "home" ? "hover:text-blue-800 bg-yellow-200 px-4 py-1 rounded-full" : "hover:text-blue-800"}
          >
            All
          </button>
        </li>
        <li className="mx-2">
          <button
            onClick={() => handleScroll("about")}
            className={active === "about" ? "hover:text-blue-800 bg-yellow-200 px-4 py-1 rounded-full" : "hover:text-blue-800"}
          >
            About
          </button>
        </li>
        <li className="mx-2">
          <button
            onClick={() => handleScroll("project")}
            className={active === "project" ? "hover:text-blue-800 bg-yellow-200 px-4 py-1 rounded-full" : "hover:text-blue-800"}
          >
            Project
          </button>
        </li>
        <li className="mx-2">
          <button
            onClick={() => handleScroll("contact")}
            className={active === "contact" ? "hover:text-blue-800 bg-yellow-200 px-4 py-1 rounded-full" : "hover:text-blue-800"}
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
