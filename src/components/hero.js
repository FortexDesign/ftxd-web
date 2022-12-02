import React, { useRef, useState, useEffect } from "react";
import telecommunications from "../images/background/telecommunications.png";
import permit from "../images/background/permit2.png";
import gpr from "../images/background/gpr2.png";
import bore from "../images/background/ftxd_bore1.png";
import eng from "../images/background/ftxd_engup.png";
import dron from "../images/background/dron.png";
import Slider from "react-slick";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { BsArrowRight } from "react-icons/bs";
import { Box, Grid, useMediaQuery } from "@mui/material";
import "react-alice-carousel/lib/alice-carousel.css";
import { useTheme } from "@mui/material/styles";

import { useTypingText } from "../hooks/useTypingText";
import { Container } from "@mui/system";

export const Hero = ({ setCurrent }) => {
  const theme = useTheme();
  const upToXl = useMediaQuery(theme.breakpoints.up("xl"));
  const downToMdSize = useMediaQuery(theme.breakpoints.down("md"));
  
  /* const [wordIndex, setWordIndex] = useState(0); */
  /*   const [change, setchange] = useState({ slideIndex: 0, updateCount: 0 });
   */ const Ref = useRef();
  const inViewport2 = useIntersectionObserver(Ref, {});
  // this function detects in which section of the page I am to configure it in the current state variable
  useEffect(() => {
    if (inViewport2?.isIntersecting === true) {
      setCurrent(`hero-${inViewport2?.isIntersecting}`);
    }
  }, [inViewport2?.isIntersecting, setCurrent])
  
  
  //parameters required by the slicer
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    /*     afterChange: () =>
      this.setState((state) => ({ updateCount: state.updateCount + 1 })),
    afterChange: (current) => this.setState({ activeSlide2: current }), */
  };
  const customSlider = useRef();

  /* Words for typing */
  const { word, wordIndex, setWordIndex, } = useTypingText(["telecommunications.", "utility permiting.", "utility locating.", "utility engineering.", "ISP engineering.", "surveying."], 70, 10/* , wordIndex, setWordIndex */);


  
  /*  useEffect(() => {
    customSlider.current.slickGoTo(wordIndex);
  }, [wordIndex]); */

  return (
    <Box
      sx={{ flexGrow: 1 }}
      ref={Ref}
      className="hero"
    >
      <Grid
        sx={{ justifyContent: "center", paddingTop: upToXl ? "88px" : "80px", backgroundColor: "#141c32", position: "relative" }}
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 2, sm: 12, md: 12, lg: 12 }}
      >
        <Grid
          item
          xs={2}
          sm={12}
          md={12}
          lg={upToXl ? 8 : 12}
        >
          <Container
            sx={{
              paddingLeft: downToMdSize ? "0px" : "24px",
              paddingRight: downToMdSize ? "0px" : "24px",
            }}
            maxWidth={upToXl ? "xl" : "lg"}
          >
            <Slider
              ref={(slider) => (customSlider.current = slider)}
              {...settings}
            >
              {/*Items for the alice-carousel slider  */}
              <div className="containerC">
                <div
                  style={{ backgroundImage: `url(${telecommunications})` }}
                  className="image w-full "
                ></div>
              </div>

              <div className="containerC">
                <div
                  style={{ backgroundImage: `url(${permit})` }}
                  className="image w-full"
                ></div>
              </div>
              <div className="containerC">
                <div
                  style={{ backgroundImage: `url(${gpr})` }}
                  className="image w-full"
                ></div>
              </div>
              <div className="containerC">
                <div
                  style={{ backgroundImage: `url(${bore})` }}
                  className="image w-full"
                ></div>
              </div>
              <div className="containerC">
                <div
                  style={{ backgroundImage: `url(${eng})` }}
                  className="image w-full"
                ></div>
              </div>
              <div className="containerC">
                <div
                  style={{ backgroundImage: `url(${dron})` }}
                  className="image w-full"
                ></div>
              </div>
            </Slider>
          </Container>
          <Container maxWidth={upToXl ? "xl" : "lg"}>
            <Box sx={{ position: "absolute", display: "flex", justifyContent: "center", flexDirection: "column", top: "40px", height: "100%", width:downToMdSize?"345px":"545px" }}>
              <span className="ml-4 hero-title font-semibold text-white">We design the blueprints for the future of {word}</span>
              <a
                style={{ width: "202px" }}
                href="_blank"
                className="flex justify-center ml-4 items-center  py-2 mt-14 text-sm font-medium text-white transition border border-white hover:bg-white hover:text-primary focus:outline-none focus:ring focus:ring-yellow-400"
              >
                <span>Get started</span>
                <BsArrowRight className="text-white hover:text-primary ml-2 w-auto mr-0" />
              </a>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};
