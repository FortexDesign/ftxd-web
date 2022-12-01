import React, { useRef } from "react";
import brands from "../images/background/brands.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import TypeWriterEffect from "react-typewriter-effect";
import { performanceItems } from "../common/utils/dummy/performance";
import Slider from "react-slick";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Grid, Box, Paper, Stack, useMediaQuery } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import { useTheme } from '@mui/material/styles'


export const Rating = ({ setCurrent }) => {
 
  const theme = useTheme()

  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'))

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
    
  };
  const Ref = useRef();

  const inViewport2 = useIntersectionObserver(Ref, { rootMargin: "-200px" });
  if (inViewport2?.isIntersecting === true) {
    setCurrent(`rating-${inViewport2?.isIntersecting}`);
  }

  const SliderRating = styled(Stack)(({ theme }) => ({
    backgroundColor: "#0f51e4",
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height:"670px"
  }));

  const Companies = styled(Stack)(({ theme }) => ({
    backgroundColor: "#ffffff",
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        sx={{ justifyContent: "center" }}
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        <Grid
          item
          xs={2}
          sm={4}
          md={5.3}
        >
          <SliderRating>
            <span className="text-white performance-title">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "grotesk-thin",
                  fontWeight: 0,
                  letterSpacing: !matchDownMD? "5px":"3px",
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
                <Stack
                  key={index}
                  justifyContent="center"
                  
                >
                  <Grid sx={{ display: "flex", justifyContent: "center", marginTop: "25px", marginBottom: "60px" }}>
                    <img
                      src={item.image}
                      alt={item.image}
                    ></img>
                  </Grid>

                  <p
                    className="title-item text-white"
                    style={{ marginTop: "30px" }}
                  >
                    <TypeWriterEffect
                      textStyle={{
                        fontFamily: "grotesk",
                        fontWeight: 500,
                        fontSize: !matchDownMD? "64px":"50px",
                        textAlign: "center",
                      }}
                      startDelay={100}
                      cursorColor="transparent"
                      text={item.title}
                      typeSpeed={50}
                      scrollArea={myRef}
                    />
                  </p>
                  <p
                    style={{ fontSize: !matchDownMD?"36px":"30px" }}
                    className="mt-6 text-white"
                  >
                    {item?.description}
                  </p>
                </Stack>
              ))}
            </Slider>
          </SliderRating>
        </Grid>
        <Grid
          item
          xs={2}
          sm={4}
          md={5.3}
        >
          <Companies>
            <h2 className="companies-title mt-3 text-gray-900">
              <TypeWriterEffect
                textStyle={{
                  width: !matchDownMD?"480px":"300px",
                  fontSize: !matchDownMD?"29px":"20px",
                  lineHeight: "38px",
                  height:"170px"
                }}
                startDelay={100}
                cursorColor="transparent"
                text="We represent a decade of innovation in engineering from the Virgin Islands to Massachusetts to California."
                typeSpeed={50}
                scrollArea={myRef}
              />
            </h2>
            <p className="border-b border-primary"></p>
            <img src={brands} />
          </Companies>
        </Grid>
      </Grid>
      {/* <div className="relative">
      <div className="fortex-container mx-auto relative rating-c">
        <aside className="bg-secondary sm:grid sm:grid-cols-2 h-full w-full items-center">
          <div className="flex flex-col">
            <span className="text-white performance-title">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "grotesk",
                  fontWeight: 0,
                  letterSpacing: "-0.03em",
                  fontSize: "32px",
                  textAlign: "center",
                }}
                startDelay={100}
                cursorColor="transparent"
                text="Past performance"
                typeSpeed={50}
                scrollArea={myRef}
              />
            </span>

            <div className="w-100 px-20">
              <Slider {...settings}>
                {performanceItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center"
                  >
                    <p className="title-item text-white mx-auto w-full">
                      <TypeWriterEffect
                        textStyle={{
                          fontFamily: "grotesk",
                          fontWeight: 500,
                          fontSize: "25px",
                          textAlign: "center",
                        }}
                        startDelay={100}
                        cursorColor="transparent"
                        text={item.title}
                        typeSpeed={50}
                        scrollArea={myRef}
                      />
                    </p>
                    <p className="mt-6 text-lg w-full text-center text-white">{item?.description}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="p-14 md:p-12 bg-white flex flex-col justify-center">
            <div className="max-w-xl mx-auto text-center md:text-left">
              <h2 className="companies-title text-gray-900 pb-10  md:text-lg">
                <TypeWriterEffect
                  textStyle={{
                    width: "478px",
                    fontSize: "30px",
                    lineHeight: "38px",
                  }}
                  startDelay={100}
                  cursorColor="transparent"
                  text="We represent a decade of innovation in engineering from the Virgin Islands to Massachusetts to California."
                  typeSpeed={50}
                  scrollArea={myRef}
                />
              </h2>
              <p className="border-b border-primary"></p>
              <img src={brands} />
            </div>
          </div>
        </aside>
      </div>
    </div> */}
    </Box>
  );
};
