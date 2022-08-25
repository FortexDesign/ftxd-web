import { Navigation1 } from "../common/utils/dummy/Menu"
import { BsArrowReturnRight } from "react-icons/bs"
import React from "react"
import { BiUserCircle } from "react-icons/bi"
import logo from "../images/Logos/Brand.png"
import { RiCloseFill } from "react-icons/ri"
import Logo from "./Logo"

/* import certification from "../images/background/Certification.png"
 */
export const MenuFull = ({ isExpanded, toggleExpansion }) => {
  return (
    <div className="fortex-container mx-auto bg-primary h-full">
      <nav className="flex flex-wrap w-full items-center justify-between p-6 header-bg">
        <div className=" flex w-full items-center justify-between flex-shrink-0 mr-6 text-white pb-4">
        <Logo color={'white'} />

          <div className=" flex justify-end">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-block mr-3 px-10 py-2 mt-4 text-sm leading-none text-white border-wc hover:border-transparent hover:text-black hover:bg-white lg:mt-0"
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
          {Navigation1.map(item => (
            <a
              href={item.url}
              className="text-white text-base flex my-3 items-center "
            >
              <BsArrowReturnRight className="mr-4" />
              <p>{item.title} </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
