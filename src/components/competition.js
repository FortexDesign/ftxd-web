import React, { useRef } from "react";
import HeroImg from "../images/background/Layer3.png";
import { BsArrowRight } from "react-icons/bs";
import TypeWriterEffect from "react-typewriter-effect";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export const Competition = ({ setCurrent }) => {
  // get the ref of div
  const myRef = document.querySelector(".scrollable-div");
  const Ref = useRef();
  const inViewport2 = useIntersectionObserver(Ref, {});

  // this function detects in which section of the page I am to configure it in the current state variable
  if (inViewport2?.isIntersecting === true) {
    setCurrent(`competition-${inViewport2?.isIntersecting}`);
  }

  return (
    <div ref={Ref} className="competition">
      <div className="bg-secondary w-full py-5 sm:px-10 lg:px-0   ">
        <div className="fortex-container w-full mx-auto mt-14">
          <span
            style={{ position: "absolute" }}
            className="text-id id-comp text-white"
          >
            01/
          </span>
          <aside className="overflow-hidden bg-secondary  py-0 competition-container">
            <img
              alt="#"
              src={HeroImg}
              className="w-3/4 mx-auto competition-image my-auto pr-12 "
            />
            <div className="p-8 md:p-12">
              <div className="max-w-xl mx-auto lg:text-left sm:text-left">
                <h2 className="scrollable-div text-2xl font-bold text-white md:text-3xl">
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "Grotesk-roman",
                      width: "362px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "45px",
                      lineHeight: "57px",
                      letterSpacing: "-0.03em",
                    }}
                    startDelay={100}
                    cursorColor="transparent"
                    text="Gain an edge over your competition"
                    typeSpeed={50}
                    scrollArea={myRef}
                  />
                </h2>
                <p class="text-gray-300 md:mt-4 md:block">
                  We believe well-communicated information is the lifeblood of
                  every organization. Beyond engineering networks, or crafting
                  meticulously compliant permits - We build end-to - end
                  technology - Talent solutions to collect, process, design, and
                  communicate rich engineering data. By combining automated
                  workflows and nearshore engineers, we are able to deliver
                  value at an unparalleled cost and scale.
                </p>
                <div className="mt-4 md:mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center px-12 py-1.5 text-sm font-medium text-white transition border border-white hover:bg-white hover:text-primary focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Let's disrupt together
                    <BsArrowRight className="text-white hover:text-primary ml-2 w-auto mr-0" />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
