import PropTypes from "prop-types";
import React, { useState } from "react";
import { BiMenu, BiUserCircle } from "react-icons/bi";
import Logo from "./Logo";

function Header({ isExpanded, toggleExpansion, color }) {
  return (
    <div className="header-fix ">
      <nav className="flex fortex-container mx-auto flex-wrap items-center justify-between py-6 header-bg">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <a href="/">
            <Logo color={color} />
          </a>
        </div>
        <div className="block lg:hidden">
          {/* This button make visible the menu component */}
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-4 py-2 text-white border border-white hover:text-white hover:border-white"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* This div is visible dynamic with the state*/}
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow"></div>
          <div className="flex ">
            <a
              style={{
                border: `0.5px solid ${color}`,
                color: `${color}`,
              }}
              href="#"
              target="_blank"
              rel="noreferrer"
              className="contact inline-block mr-3 px-10 py-2 mt-4 text-sm leading-none  text-white hover:border-transparent border-wc hover:text-primary hover:bg-white lg:mt-0"
            >
              Contact Us
            </a>
            <a
              href="#"
              style={{
                borderLeft: `0.5px solid ${color}`,
                color: `${color}`,
                borderTop: `0.5px solid ${color}`,
                color: `${color}`,
                borderBottom: `0.5px solid ${color}`,
                color: `${color}`,
              }}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-2 mt-4 text-xl leading-none border-w hover:border-transparent hover:text-primary hover:bg-white lg:mt-0"
            >
              <BiUserCircle fontSize={22} />
            </a>
            <a
              onClick={() => toggleExpansion(true)}
              href="#"
              style={{ border: `0.5px solid ${color}`, color: `${color}` }}
              className="inline-block px-2  mt-4 text-xl leading-none border-w hover:border-transparent hover:text-primary hover:bg-white lg:mt-0"
            >
              <BiMenu fontSize={22}  />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
