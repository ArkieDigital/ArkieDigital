import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navLinks } from "../../constants/navLinks";
import "./btnStyle.css";
import navIcon from "../../assets/cards/navcom.svg"

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`flex ml-5 justify-between items-center sm:justify-center mt-5 ${
        isMenuOpen ? "bg-[#111111]" : ""
      }`}
    >
      <div className="font-poppins font-bold text-[23px] text-white">
        Arkie Digital<span className="text-[#A9F868]">.</span>
      </div>
      <div className="hidden sm:flex px-20">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="text-white mx-5 hover:text-[#A9F868] transition-colors duration-300"
          >
            {link.title}
          </a>
        ))}
      </div>
      {/* <div className="sm:hidden">
        <button className="navBtn mr-5 flex" onClick={handleMenuToggle}>
          <img src={navIcon}></img>
        </button>
        {isMenuOpen && (
          <div className="absolute top-[60px] bg-[#111111] left-0 right-0 text-white py-2 hover:text-[#A9F868]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="block px-10 py-4"
              >
                {link.title}
              </a>
            ))}
          </div>
        )}
      </div> */}

      <div className="hidden sm:block">
        <button
          className={`navBtn rounded-full flex border-[#A9F868] py-[4px] px-[16px] hover:bg-[#A9F868] hover:text-[#111111] ${
            isMenuOpen ? "bg-[#111111]" : ""
          }`}
          style={{ borderWidth: "2px" }}
        >
          Let's Talk{" "}
          <span>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="nav__hover"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Lightning bolt icon */}
              </svg>
            </div>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
