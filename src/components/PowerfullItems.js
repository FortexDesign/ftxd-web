import React, { useEffect, useRef } from "react";
import { PowerfullItems as items } from "../common/utils/dummy/PowerfullItems";
import TypeWriterEffect from "react-typewriter-effect";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export const PowerfullItems = ({ setCurrent, setIsEnabled }) => {
  const theme = useTheme();
  const upToXl = useMediaQuery(theme.breakpoints.up("xl"));

  const myRef = document.querySelector(".powerfull");

  const Ref = useRef();

  // this function detects in which section of the page I am to configure it in the current state variable
  const inViewport2 = useIntersectionObserver(Ref, {});

  useEffect(() => {
    if (inViewport2?.isIntersecting === true) {
      setCurrent(`powerfull-${inViewport2?.isIntersecting}`);
    }
  }, [inViewport2?.isIntersecting, setCurrent]);

  return (
    <div
      ref={Ref}
      className="powerfull"
    >
      <section
        style={{ zIndex: "1000" }}
        className="text-primary bg-white power "
      >
        <div
          style={{ maxWidth: upToXl ? "1477px" : "1200px" }}
          className="fortex-container powerfull w-full mx-auto"
        >
          <div className="max-w-screen-xl py-16 ">
            <div className="flex flex-col">
              <span className="numeration">03/</span>

              <span className="mt-4 text-primary powerfull-title mb-16 inline-block">
                {/* Typing with script effect */}
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

            {/* Powerfull items from dummy   */}
            <div className="grid grid-cols-1 gap-2 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start"
                >
                  <span className="head-item">{item.id}</span>
                  <div className="">
                    <div className="title-item">
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
                    </div>
                    {item.descs.map((item) => (
                      <p
                        key={item}
                        className="mt-3 text-sm text-primary"
                      >
                        {item}
                      </p>
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
