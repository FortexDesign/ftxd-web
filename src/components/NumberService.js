import React, { useRef, useEffect } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const NumberService = ({ setCurrent }) => {
  const Ref = useRef();
  const theme = useTheme();
  const upToXl = useMediaQuery(theme.breakpoints.up("xl"));


  // this function detects in which section of the page I am to configure it in the current state variable
  const inViewport2 = useIntersectionObserver(Ref, { rootMargin: "-200px" });
 
  useEffect(() => {
    if (inViewport2?.isIntersecting === true) {
      setCurrent(`services-${inViewport2?.isIntersecting}`);
    }
   
  }, [inViewport2?.isIntersecting, setCurrent])
  
  return (
    <div style={{ zIndex: "10", maxWidth: upToXl ? "1477px" :"1200px"  }}
    className="bg-white service  w-full mx-auto relative pt-10">
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
