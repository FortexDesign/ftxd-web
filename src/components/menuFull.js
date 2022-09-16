import { Navigation1 } from "../common/utils/dummy/Menu";
import { BsArrowReturnRight } from "react-icons/bs";
import React from "react";
import { BiUserCircle } from "react-icons/bi";
import logo from "../images/Logos/Brand.png";
import { RiCloseFill } from "react-icons/ri";
import Logo from "./Logo";

export const MenuFull = ({ isExpanded, toggleExpansion }) => {
  return (
    <div className="fortex-container mx-auto bg-primary h-full">
      <nav className="flex flex-wrap w-full items-center justify-between py-6 header-bg">
        <div className=" flex w-full items-center justify-between flex-shrink-0  text-white pb-4">
          <Logo color={"white"} />

          {/* Section of menu navigation */}
          <div className=" flex justify-end">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hidden inline-block mr-3 px-10 py-2 mt-4 text-sm leading-none text-white border-wc hover:border-transparent hover:text-black hover:bg-white lg:mt-0"
            >
              Contact Us
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-block px-2 mt-4 text-xl leading-none text-white border-w hover:border-transparent hover:text-black hover:bg-white lg:mt-0"
            >
              <BiUserCircle />
            </a>
            <div className="block">
              <button
                onClick={() => toggleExpansion(!isExpanded)}
                className="flex items-center px-2 py-2 bg-white  text-xl leading-none text-primary border border-white  hover:border-white"
              >
                <RiCloseFill />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow"></div>
        </div>
      </nav>
      <div className="menu w-full top-0 left-0 bg-primary">
        <div className="border-t border-gray-400 mt-4 mx-3 flex-1">
          <span className="mt-3 text-gray-400 subhead-menu">NAVIGATION</span>
          {Navigation1.map((item) => (
            <a
              href={item.url}
              className="text-white text-base flex my-3 items-center "
            >
              <BsArrowReturnRight className="mr-4" />
              <p>{item.title} </p>
            </a>
          ))}
        </div>

        {/* Section Impact studies and certifications */}

        {/*      <div className="border-t flex-1 border-gray-400 mt-4 mx-5">
          <div className="flex justify-between mb-4">
            <span className="mt-3 text-gray-400 subhead-menu">
              IMPACT STUDIES
            </span>
            <span className="mt-3 text-gray-400 subhead-menu border-b cursor-pointer border-gray-400">
              VIEW ALL
            </span>
          </div>
          {[1, 2, 3, 4].map(item => (
            <img
              className="sm:w-full h-40 my-4 mx-auto"
              src="https://cdn.pixabay.com/photo/2015/11/05/08/21/geometry-1023846_1280.jpg"
            />
          ))}
        </div>
        <div className="border-t border-gray-400 mt-4 mx-5 flex-1 md:pb-10 lg:pb-0  ">
          <span className="mt-3 text-gray-400 text-xs mb-4 subhead-menu">
            NAVIGATION
          </span>
          {Navigation2.map(item => (
            <Link
              to={item.url}
              className="text-white text-base flex my-3 items-center"
            >
              <BsArrowReturnRight className="mr-4" />
              <p>{item.title} </p>
            </Link>
          ))}
          <p className="border-t flex-1 mt-20 border-gray-400"></p>
          <span className="pt-3 mt-4  text-gray-400 text-xs mb-4 subhead-menu">
            CERTIFICATIONS
          </span>
          <img className="sm:w-full mt-10 mx-auto mb-10" src={certification} />
        </div> */}
      </div>
    </div>
  );
};
