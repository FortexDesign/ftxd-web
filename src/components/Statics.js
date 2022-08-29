import React, { useEffect, useRef } from "react";
import { performanceItems } from "../common/utils/dummy/performance";
import TypeWriterEffect from "react-typewriter-effect";
import useOnScreen from "../hooks/useNearScreen";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export const Performance = ({ setCurrent, setIsEnabled }) => {
  const myRef = document.querySelector(".powerfull");

  const Ref = useRef();

  // Verify if this element is in Viewport

  const inViewport2 = useIntersectionObserver(Ref, {});
  if (inViewport2?.isIntersecting === true) {
    setCurrent(`performance-${inViewport2?.isIntersecting}`);
  }

  useEffect(() => {
    if (inViewport2?.isIntersecting == true) {
      setIsEnabled(false);
    } else {
      setIsEnabled(true);
    }
  }, [inViewport2?.isIntersecting]);

  return (
    <div ref={Ref} className="performance">
      <section
        style={{ zIndex: "1000" }}
        className="text-white bg-secondary sm:px-6 lg:px-10 "
      >
        <div className="fortex-container powerfull w-full mx-auto">
          <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col">
              <span className="numeration">03/</span>

              <span className="mt-4 text-white performance-title mb-16 inline-block">
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "grotesk",
                    fontWeight: 0,
                    letterSpacing: "-0.03em",
                    fontSize: "45px",
                    textAlign: "center",
                  }}
                  startDelay={100}
                  cursorColor="transparent"
                  text="PAST PERFORMANCE"
                  typeSpeed={50}
                  scrollArea={myRef}
                />
              </span>
            </div>
            <div className="grid grid-cols-1 md:gap-12 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
              {performanceItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
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
                  <p className="mt-6 text-lg w-3/4 text-center text-white">
                    {item?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
