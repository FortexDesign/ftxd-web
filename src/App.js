import React, { useEffect, useRef, useState } from "react";
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
import { Performance } from "./components/Statics";
import { NumberService } from "./components/NumberService";

function App() {
  const [isExpanded, toggleExpansion] = useState(false);
  const [contentDiv, setcontentDiv] = useState(null);
  const [current, setCurrent] = useState(null);
  const [colorDiv, setcolorDiv] = useState("white");
  const [domV, setDomv] = useState();
  const [isEnabled, setIsEnabled] = useState(true);

  //according to the value of the current colors are assigned to the div
  useEffect(() => {
    if (
      current == "competition-true" ||
      current == "hero-true" ||
      current == "heroFooter-true"
    ) {
      setcolorDiv("white");
      setIsEnabled(false);
    } else {
      setcolorDiv("#161e34");
    }

/*     if (
      current == "powerfull-true" ||
      current == "competition-true" ||
      current == "hero-true" ||
      current == "heroFooter-true"
    ) {
      setIsEnabled(false);
    } else {
    } */
  }, [current, colorDiv]);
  console.log("🚀 ~ file: App.js ~ line 53 ~ App ~ current", current);

  const Ref = useRef();

  // this function detects in which section of the page I am to configure it in the current state variable
  const inViewport2 = useIntersectionObserver(Ref, {});
  if (inViewport2?.isIntersecting == true) {
    setCurrent(`service-${inViewport2?.isIntersecting}`);
  }

  return (
    <>
      {isExpanded ? (
        <div className="absolute bg-primary top-0 left-0 w-full z-10 h-full">
          <MenuFull
            contentDiv={contentDiv}
            isExpanded={isExpanded}
            toggleExpansion={toggleExpansion}
          />
        </div>
      ) : (
        <Layout
          color={colorDiv}
          isExpanded={isExpanded}
          toggleExpansion={toggleExpansion}
        >
          <ParallaxProvider>
            <Hero setCurrent={setCurrent} setcontentDiv={setcontentDiv} />
            <Competition
              setCurrent={setCurrent}
              setcontentDiv={setcontentDiv}
            />
            <div className="bg-white  fortex-container w-full mx-auto relative pt-10">
              <div className="service-number">
                <NumberService setCurrent={setCurrent} />
              </div>
              <div
                className="bg-white services  fortex-container w-full mx-auto relative pt-10"
                style={{ zIndex: "10" }}
              >
                <Services
                  current={current}
                  setCurrent={setCurrent}
                  isEnabled={isEnabled}
                  setcontentDiv={setcontentDiv}
                />
              </div>
            </div>
            <PowerfullItems
              setCurrent={setCurrent}
              setIsEnabled={setIsEnabled}
              setcontentDiv={setcontentDiv}
            />
            <Rating setCurrent={setCurrent} setcontentDiv={setcontentDiv} />

            <HeroFooter setCurrent={setCurrent} setcontentDiv={setcontentDiv} />
          </ParallaxProvider>
        </Layout>
      )}
    </>
  );
}

export default App;
