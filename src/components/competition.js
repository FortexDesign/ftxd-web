import React, { useRef, useEffect } from "react";
import HeroImg from "../images/background/Layer3.svg";
import { BsArrowRight } from "react-icons/bs";
import TypeWriterEffect from "react-typewriter-effect";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Grid, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const Competition = ({ setCurrent, setDrawerState }) => {
  // get the ref of div

  const theme = useTheme();
  const upToXl = useMediaQuery(theme.breakpoints.up("xl"));
  const downToMdSize = useMediaQuery(theme.breakpoints.down("md"));
  const myRef = document.querySelector(".scrollable-div");
  const Ref = useRef();
  const inViewport2 = useIntersectionObserver(Ref, {});

  // this function detects in which section of the page I am to configure it in the current state variable

  useEffect(() => {
    if (inViewport2?.isIntersecting === true) {
      setCurrent(`competition-${inViewport2?.isIntersecting}`);
    }
  }, [inViewport2?.isIntersecting, setCurrent]);

  const number = (
    <Grid container>
      <Grid
        item
        lg={6}
        md={6}
        sx={{
          display: "flex",
          justifyContent: upToXl ? "start" : "center",
          paddingRight: upToXl ? "80px" : "190px",
          paddingTop: downToMdSize && "25px",
          paddingLeft: downToMdSize ? "20px" : upToXl && "12px",
        }}
      >
        <span className="text-id id-comp text-white">01/</span>
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
      ></Grid>
    </Grid>
  );

  return (
    <Box
      sx={{ flexGrow: 1 }}
      ref={Ref}
      className="competition"
    >
      <Grid
        direction={downToMdSize ? "column-reverse" : "row"}
        sx={{ justifyContent: "center", backgroundColor: "#0f51e4", paddingTop: "1.25rem", paddingBottom: "1.25rem", "& .MuiGrid-item": { maxWidth: "100%" } }}
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}
      >
        <Grid
          sx={{ maxWidth: upToXl ? "750px!important" : "100%" }}
          item
          xs={2}
          sm={6}
          md={6}
          lg={6}
        >
          <Grid sx={{ marginTop: downToMdSize ? "1rem" : "3.5rem" }}>
            {!downToMdSize && number}

            <Grid sx={{ display: "flex", justifyContent: downToMdSize ? "center" : "end" }}>
              <img
                width={upToXl ? "90%" : downToMdSize ? "85%" : "90%"}
                alt="#"
                src={HeroImg}
                className=""
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sx={{ maxWidth: upToXl ? "750px!important" : "100%" }}
          item
          xs={2}
          sm={6}
          md={6}
          lg={6}
        >
          {downToMdSize && number}
          <div className="p-8">
            <div
              className="lg:text-left sm:text-left"
              style={{ width: upToXl || downToMdSize ? "100%" : "85%" }}
            >
              <h2 className="scrollable-div text-2xl font-bold text-white md:text-3xl">
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Grotesk-roman",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: upToXl ? "55px" : "45px",
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
              <p
                style={{ fontSize: upToXl ? "26px" : "16px" }}
                className="text-gray-300 md:mt-4 "
              >
                We believe well-communicated information is the lifeblood of every organization. Beyond engineering networks, performing field surveys, or crafting meticulously compliant permits: we
                build end-to-end technology-talent solutions to collect, process, design, and communicate rich engineering data. For the past decade, we have leveraged CAD-GIS automation and nearshore
                engineering talent to deliver value at an unparalleled cost and scale.
              </p>
              <div className="mt-4 md:mt-8">
                <button
                  style={{
                    border: `0.5px solid white`,
                    width: "50%",
                  }}
                  onClick={() => setDrawerState(true)}
                  rel="noreferrer"
                  className="flex justify-center  items-center  py-2 mt-14 text-sm font-medium text-white transition border border-white hover:bg-white hover:text-primary focus:outline-none  "
                >
                  Let's disrupt together
                  <BsArrowRight className=" ml-2 w-auto mr-0" />
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};
