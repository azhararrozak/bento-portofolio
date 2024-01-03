import React from "react";
import { GoHomeFill } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="border px-4 py-2 rounded-full">
      <ul className="flex items-center">
        <li className="mx-2">
          <a href="/" className="text-blue-500 hover:text-blue-800">
            <GoHomeFill />
          </a>
        </li>
        <li className="mx-2">
          <a href="/about" className="text-blue-500 hover:text-blue-800">
            About
          </a>
        </li>
        <li className="mx-2">
          <a href="/contact" className="text-blue-500 hover:text-blue-800">
            Project
          </a>
        </li>
        <li className="mx-2">
          <a href="/contact" className="text-blue-500 hover:text-blue-800">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
