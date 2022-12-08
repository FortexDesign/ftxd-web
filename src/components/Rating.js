import React, { useRef } from "react";
import brands from "../images/background/brands.png";

import TypeWriterEffect from "react-typewriter-effect";
import { performanceItems } from "../common/utils/dummy/performance";
import Slider from "react-slick";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Grid, Box, Stack, useMediaQuery } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { isFirefox } from "react-device-detect";
import { useEffect } from "react";

export const Rating = ({ setCurrent }) => {
  const theme = useTheme();
  const upToXl = useMediaQuery(theme.breakpoints.up("xl"));
 /*  const betweenLgXl = useMediaQuery(theme.breakpoints.between("lg", "xl")); */
  /*const betweenMdLg = useMediaQuery(theme.breakpoints.between('md', 'lg')) */
  const betweenMdXl = useMediaQuery(theme.breakpoints.between("md", "xl"));

  const downToMdSize = useMediaQuery(theme.breakpoints.down("md"));

  const myRef = document.querySelector(".rating-c");
  /// set slider's settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    adaptiveHeight:false
  };
  const Ref = useRef();

  const inViewport2 = useIntersectionObserver(Ref, {});

  useEffect(() => {
    if (inViewport2?.isIntersecting === true) {
      setCurrent(`rating-${inViewport2?.isIntersecting}`);
    }
  }, [inViewport2?.isIntersecting, setCurrent]);

  const SliderRating = styled(Stack)(({ theme }) => ({
    backgroundColor: "#0f51e4",
    ...theme.typography.body2,
    padding: theme.spacing(downToMdSize?2:5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "600px",
  }));

  const Companies = styled(Stack)(({ theme }) => ({
    backgroundColor: "#ffffff",
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box
      sx={{ flexGrow: 1 }}
      ref={Ref}
      className="rating"
    >
      <Grid
        sx={{ justifyContent: "center" }}
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 2, sm: 2, md: 12, lg: 12 /* xl:8 */ }}
      >
        <Grid
          sx={{ maxWidth: upToXl ? "750px!important" : "100%", maxHeight: "670px" }}
          item
          xs={2}
          sm={2}
          md={6}
          lg={6}
          /*xl={2.34} */
        >
          <SliderRating>
            <span className="text-white performance-title">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "grotesk-thin",
                  fontWeight: 0,
                  letterSpacing: betweenMdXl ? "5px" : "3px",
                  fontSize: "16px",
                  textAlign: "center",
                }}
                startDelay={100}
                cursorColor="transparent"
                text="OUR EXPERIENCE IN NUMBERS"
                typeSpeed={50}
                scrollArea={myRef}
              />
            </span>
            <Slider {...settings}>
              {performanceItems.map((item, index) => (
                <Grid
                  key={index}
                  justifyContent="center"
                >
                  <Grid sx={{ display: "flex", justifyContent: "center", marginTop: "25px", marginBottom: "60px" }}>
                    <img
                      src={item.image}
                      alt={item.image}
                    ></img>
                  </Grid>

                  <div
                    className="title-item text-white"
                    style={{ marginTop: "30px" }}
                  >
                    <TypeWriterEffect
                      textStyle={{
                        fontFamily: "grotesk",
                        fontWeight: 500,
                        fontSize: betweenMdXl ? "64px" : "50px",
                        textAlign: "center",
                      }}
                      startDelay={100}
                      cursorColor="transparent"
                      text={item.title}
                      typeSpeed={50}
                      scrollArea={myRef}
                    />
                  </div>
                  <p
                    style={{ fontSize: betweenMdXl ? "36px" : "30px" }}
                    className="mt-6 text-white"
                  >
                    {item?.description}
                  </p>
                </Grid>
              ))}
            </Slider>
          </SliderRating>
        </Grid>
        <Grid
          sx={{ maxWidth: upToXl ? "750px!important" : "100%", maxHeight: "670px" }}
          item
          xs={2}
          sm={2}
          md={6}
          lg={6}
          /*  xl={2.34} */
        >
          <Companies>
            <Grid >
              <h2 className="companies-title mt-3 text-gray-900">
                <TypeWriterEffect
                  /* , */
                  textStyle={{
                    fontSize: betweenMdXl || upToXl ? "29px" : "20px",
                    lineHeight: "38px",
                    height: "150px",
          
                  }}
                  startDelay={100}
                  cursorColor="transparent"
                  text="We represent a decade of innovation in engineering from the Virgin Islands to Massachusetts to California."
                  typeSpeed={50}
                  scrollArea={myRef}
                  
                />
              </h2>
             
            </Grid>
            <Grid>
            <p
                className="border-b border-primary"
                style={{ marginTop: downToMdSize ? "20px" : "0px" }}
              ></p>
              <img
                src={brands}
                alt="brands"
              />
            </Grid>
          </Companies>
        </Grid>
      </Grid>
    </Box>
  );
};
