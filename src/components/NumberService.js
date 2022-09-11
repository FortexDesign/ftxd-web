import React, { useRef } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export const NumberService = ({ setCurrent }) => {
  const Ref = useRef();

  // this function detects in which section of the page I am to configure it in the current state variable
  const inViewport2 = useIntersectionObserver(Ref, { rootMargin: "-200px" });
  if (inViewport2?.isIntersecting === true) {
    setCurrent(`services-${inViewport2?.isIntersecting}`);
  }
  return (
    <div style={{ padding: "0 10px" }}>
      {/* Only one number with the type write effect */}
      <span style={{ height: "400px" }} ref={Ref} className="numeration">
        <TypeWriterEffect
          startDelay={100}
          textStyle={{
            fontWeight: 0,
            fontSize: "16px",
          }}
          cursorColor="transparent"
          text="02/"
          typeSpeed={200}
        />
      </span>
    </div>
  );
};
