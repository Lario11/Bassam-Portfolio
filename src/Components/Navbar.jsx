import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ scrollToSection, portfolioRef, aboutRef, contactRef }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" text-gray-200 max-w-[1200px] h-24 mx-auto flex justify-between items-center text-lg px-4 md:px-0">
      <h1 className="text-3xl text-white font-bold">B.Bouatlaoui</h1>
      <ul className="hidden md:flex">
        <li className="p-5 text-white cursor-pointer" onClick={() => scrollToSection(portfolioRef)}>
          Portfolio
        </li>
        <li className="p-5 text-white cursor-pointer" onClick={() => scrollToSection(aboutRef)}>
          Experience
        </li>
        <li className="p-5 text-white cursor-pointer">
          <div
            className="px-4 py-1 rounded-xl text-white bg-primary-color"
            onClick={() => scrollToSection(contactRef)}
          >
            Contact
          </div>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden z-40">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "z-40 text-gray-300 fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#171717] ease-in-out duration-500]"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl text-white font-bold m-4">B.Bouatlaoui</h1>
        <ul className="p-8 text-2xl">
          <li className="p-5 cursor-pointer" onClick={() => { handleNav(); scrollToSection(portfolioRef); }}>
            Portfolio
          </li>
          <li className="p-5 text-white cursor-pointer" onClick={() => { handleNav(); scrollToSection(aboutRef); }}>
            Experience
          </li>
          <li className="p-5 text-white cursor-pointer">
            <div
              className="px-4 py-2 rounded-xl text-white bg-primary-color"
              onClick={() => { handleNav(); scrollToSection(contactRef); }}
            >
              Contact
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
