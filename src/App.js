import React, { useEffect, useRef, useState, useCallback } from "react";
import "./App.css";
import Layout from "./components/layout";
import { ParallaxProvider } from "react-scroll-parallax";
import "./styles/globals.css";
import "./styles/powerfull.css";
import "./styles/companies.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Hero } from "./components/hero";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { Rating } from "./components/Rating";
import { Competition } from "./components/competition";
import { Services } from "./components/services";
import { HeroFooter } from "./components/heroFooter";
import { PowerfullItems } from "./components/PowerfullItems";
import { MenuFull } from "./components/menuFull";
/* import { Performance } from "./components/Statics"; */
import { NumberService } from "./components/NumberService";

import { useTheme } from "@mui/material/styles";
import {  useMediaQuery } from "@mui/material";
import RightDrawer from "./components/rightDrawer/RightDrawer";
import HubspotContactForm from "./components/hubspotForm";

function App() {
  const theme = useTheme();
  const upToXl = useMediaQuery(theme.breakpoints.up("xl"));
   const betweenMdlg = useMediaQuery(theme.breakpoints.between("md", "lg"));
   const downToMdSize = useMediaQuery(theme.breakpoints.down("md"));


  //  State to expanded menu
  const [isExpanded, toggleExpansion] = useState(false);
  // States to observe the current container
  const [contentDiv, setcontentDiv] = useState(null);
  const [current, setCurrent] = useState(null);
  // State to change the color of header
  const [colorDiv, setcolorDiv] = useState("white");
  const [isEnabled, setIsEnabled] = useState(true);
  const [drawerState, setDrawerState] = useState(false);

  const handleCloseModal = useCallback(() => {
    setDrawerState(!drawerState);
  }, [setDrawerState, drawerState]);

  //according to the value of the current colors are assigned to the div
  useEffect(() => {
    if (current === "competition-true" || current === "hero-true" /* || current === "heroFooter-true" */) {
      setcolorDiv("white");
      /*       setIsEnabled(false);
       */
    } else {
      setcolorDiv(downToMdSize?"white":"#161e34");
    }

    if (current === "services-true") {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }, [current, colorDiv,downToMdSize]);

  const Ref = useRef();

  // this function detects in which section of the page I am to configure it in the current state variable
  const inViewport2 = useIntersectionObserver(Ref, {});
  if (inViewport2?.isIntersecting === true) {
    setCurrent(`service-${inViewport2?.isIntersecting}`);
  }

  /* console.log("current***", current); */

  return (
    <>
      <RightDrawer
        drawerState={drawerState}
        handleDrawerClose={handleCloseModal}
      >
        <HubspotContactForm />
      </RightDrawer>
      {isExpanded ? (
        <div className="absolute bg-primary top-0 left-0 w-full z-10 h-full">
          {/* The menu component is visible when the state "isexpanded" is true */}
          <MenuFull
            contentDiv={contentDiv}
            isExpanded={isExpanded}
            toggleExpansion={toggleExpansion}
            setDrawerState={setDrawerState}
          />
        </div>
      ) : (
        /* Layout component content the header and footer components and the another components in the landing page are the childs  */
        <Layout
          color={colorDiv}
          isExpanded={isExpanded}
          toggleExpansion={toggleExpansion}
          setDrawerState={setDrawerState}
        >
          {/* Parallaz provider is a wrapper to all the react-scroll-parallax targets */}
          <ParallaxProvider>
            {/* Hero contain the first section of this page,this is the the slider with type text effect */}
            <Hero
              setCurrent={setCurrent}
              setcontentDiv={setcontentDiv}
            />

            {/* This section contain a blue background  */}
            <Competition
              setCurrent={setCurrent}
              setcontentDiv={setcontentDiv}
            />

            {/* The services section contains the services offered by fortex to the community in general, here you can find the effect of superimposing each service on one */}
            <div
              style={{ maxWidth: upToXl ? "1477px" :"1200px", paddingLeft:betweenMdlg?"27.5px":"0px", paddingRight:betweenMdlg?"27.5px":"0px" }}
              className="bg-white   w-full mx-auto relative pt-10"
            >
              <div className="service-number">
                <NumberService setCurrent={setCurrent} />
              </div>
              <div
                className="bg-white services  w-full mx-auto relative pt-10"
                style={{ zIndex: "10", maxWidth: upToXl ? "1477px" : "1200px" }}
              >
                <Services
                  current={current}
                  setCurrent={setCurrent}
                  isEnabled={isEnabled}
                  setcontentDiv={setcontentDiv}
                />
              </div>
            </div>

            {/* The powerfull section contain a description about all the items that make to fortex better */}
            <PowerfullItems
              setCurrent={setCurrent}
              setIsEnabled={setIsEnabled}
              setcontentDiv={setcontentDiv}
            />

            {/* This section contains the companies Fortex has worked with and some statistics in a slider*/}
            <Rating
              setCurrent={setCurrent}
              setcontentDiv={setcontentDiv}
            />

            <HeroFooter
              setCurrent={setCurrent}
              setcontentDiv={setcontentDiv}
            />
          </ParallaxProvider>
        </Layout>
      )}
    </>
  );
}

export default App;
