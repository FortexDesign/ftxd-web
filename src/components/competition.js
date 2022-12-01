import React, { useRef } from "react";
import HeroImg from "../images/background/Layer3.svg";
import { BsArrowRight } from "react-icons/bs";
import TypeWriterEffect from "react-typewriter-effect";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Grid, Box, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/system";

export const Competition = ({ setCurrent }) => {
  // get the ref of div

  const theme = useTheme();
  const upToXl = useMediaQuery(theme.breakpoints.up("xl"));
  const myRef = document.querySelector(".scrollable-div");
  const Ref = useRef();
  const inViewport2 = useIntersectionObserver(Ref, {});

  // this function detects in which section of the page I am to configure it in the current state variable
  if (inViewport2?.isIntersecting === true) {
    setCurrent(`competition-${inViewport2?.isIntersecting}`);
  }

  return (
    <Box
      sx={{ flexGrow: 1 }}
      ref={Ref}
      className="competition"
    >
      <Grid
        sx={{ paddingTop: "1.25rem", paddingBottom: "1.25rem", backgroundColor: "#0f51e4", justifyContent: "center" }}
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 2, sm: 12, md: 12, lg: 12 }}
      >
        
          <Grid
            sx={{}}
            item
            xs={2}
            sm={6}
            md={6}
            lg={12}
          >
            <Grid sx={{ marginTop: "3.5rem" }}>
              <span className="text-id id-comp text-white">01/</span>
              <img
                alt="#"
                src={HeroImg}
                className="w-3/4 mx-auto competition-image my-auto pr-12 "
              />
            </Grid>
          </Grid>
          <Grid
     
            item
            xs={2}
            sm={6}
            md={6}
            lg={12}
          >
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
                    text="Beyond Turnkey Engineering"
                    typeSpeed={50}
                    scrollArea={myRef}
                  />
                </h2>
                <p class="text-gray-300 md:mt-4 md:block">
                  We believe well-communicated information is the lifeblood of every organization. Beyond engineering networks, performing field surveys, or crafting meticulously compliant permits: we
                  build end-to-end technology-talent solutions to collect, process, design, and communicate rich engineering data. For the past decade, we have leveraged CAD-GIS automation and
                  nearshore engineering talent to deliver value at an unparalleled cost and scale.
                </p>
                <div className="mt-4 md:mt-8">
                  <a
                    href="_blank"
                    className="inline-flex items-center px-12 py-1.5 text-sm font-medium text-white transition border border-white hover:bg-white hover:text-primary focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Let's disrupt together
                    <BsArrowRight className="text-white hover:text-primary ml-2 w-auto mr-0" />
                  </a>
                </div>
              </div>
            </div>
          </Grid>
     
      </Grid>
    </Box>
  );
};
