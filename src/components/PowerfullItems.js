import React, { useEffect, useRef } from "react";
import { PowerfullItems as items } from "../common/utils/dummy/PowerfullItems";
import TypeWriterEffect from "react-typewriter-effect";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export const PowerfullItems = ({ setCurrent, setIsEnabled }) => {
  const myRef = document.querySelector(".powerfull");

  const Ref = useRef();

  // this function detects in which section of the page I am to configure it in the current state variable
  const inViewport2 = useIntersectionObserver(Ref, {});
  if (inViewport2?.isIntersecting === true) {
    setCurrent(`powerfull-${inViewport2?.isIntersecting}`);
  }

  useEffect(() => {
    if (inViewport2?.isIntersecting == true) {
      setIsEnabled(false);
    } else {
      setIsEnabled(true);
    }
  }, [inViewport2?.isIntersecting]);

  return (
    <div ref={Ref} className="powerfull">
      <section style={{ zIndex: "1000" }} className="text-primary bg-white power ">
        <div className="fortex-container powerfull w-full mx-auto">
          <div className="max-w-screen-xl py-16 ">
            <div className="flex flex-col">
              <span className="numeration">03/</span>

              <span className="mt-4 text-primary powerfull-title mb-16 inline-block">
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "grotesk",
                    fontWeight: 0,
                    lineHeight: "50px",
                    letterSpacing: "-0,3em",
                    fontSize: "45px",
                  }}
                  startDelay={100}
                  cursorColor="transparent"
                  text="Key differentiators"
                  typeSpeed={50}
                  scrollArea={myRef}
                />
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
              {items.map((item, index) => (
                <div key={index} className="flex flex-col items-start">
                  <span className="head-item">{item.id}</span>
                  <div className="">
                    <p className="title-item">
                      <TypeWriterEffect
                        textStyle={{
                          fontFamily: "grotesk",
                          fontWeight: 500,
                          fontSize: "30px",
                        }}
                        startDelay={100}
                        cursorColor="transparent"
                        text={item.title}
                        typeSpeed={50}
                        scrollArea={myRef}
                      />
                    </p>
                    {item.descs.map((item) => (
                      <p className="mt-3 text-sm text-primary">{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
