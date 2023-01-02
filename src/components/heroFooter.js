import React, { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const HeroFooter = ({ setCurrent, setDrawerState }) => {
  const theme = useTheme();
  const upToXl = useMediaQuery(theme.breakpoints.up("xl"));
  const betweenMdlg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const downToMdSize = useMediaQuery(theme.breakpoints.down("md"));
  const [isHover, setisHover] = useState(false);
  const Ref = useRef();
  const inViewport2 = useIntersectionObserver(Ref, {});
 

  // this function detects in which section of the page I am to configure it in the current state variable

  useEffect(() => {
    if (inViewport2?.isIntersecting === true) {
      setCurrent(`heroFooter-${inViewport2?.isIntersecting}`);
    }
  }, [inViewport2?.isIntersecting, setCurrent]);

  return (
    <div
      ref={Ref}
      className="heroFotter"
    >
      <div className="bg-primaryYankee sm:px-10 lg:px-0 ">
        <aside
          style={{ maxWidth: upToXl ? "1477px" : "1200px", paddingLeft:betweenMdlg?"27.5px":"0px", paddingRight:betweenMdlg?"27.5px":"0px" }}
          className="overflow-hidden flex flex-col  mx-auto w-full py-10"
        >
          <h2 className="text-base font-bold text-white head-Hf">04 /</h2>
          <div className="px-6 lg:pr-32 sm:pr-0 lg:pl-16 sm:pl-2 ">
            <div className="p-8 md:p-12 lg:ml-28 sm:ml-0 lg:py-24">
              <h2 className="font-bold text-white hero-footer-title  hero-f">Get Started Now</h2>
            </div>

            <div style={{paddingRight:downToMdSize?"0px":"100px", justifyContent:downToMdSize?"center":"end"}} className="flex mt-4 md:mt-8 hero-footer xs:self-start sm:mr-0">
              <button
              onClick={()=>setDrawerState(true)}
                onMouseEnter={() => setisHover(!isHover)}
                href="#"
                className="inline-flex w-auto items-center px-16 py-2 text-sm font-medium text-white transition border border-white hover:bg-white hover:text-primary focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Let's disrupt together
                <BsArrowRight className="ml-2 w-auto mr-0" />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
