import React, { useEffect, useRef, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { services } from "../common/utils/dummy/services";
import TypeWriterEffect from "react-typewriter-effect";
import { ServicesCollapse } from "./ServicesCollapse";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material";
import { fontFamily } from "@mui/system";
import { AiFillCaretRight } from "react-icons/ai";
import OspImage from "../images/background/TelecommunicationsEngineering/OSPEngineering.png";
import PermitePackagePImage from "../images/background/PermittingAndCompliance/PermitPackagePrep.png";
import DataCleaning from "../images/background/GISServices/DataCleaning.png";
import RecordDigitizationImage from "../images/background/CADServices/RecordDigitization.png";
import GroundPenetratingImage from "../images/background/FieldSurveyingUtilityLocating/GroundPenetratingRadar.png";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import { Grid } from "@mui/material";
export const Services = ({ setCurrent, isEnabled, current }) => {
  // State to set the image in section viewport
  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    vertical: true,
  };
  const theme = useTheme();
  const upToXl = useMediaQuery(theme.breakpoints.up("xl"));

  const [ImageSwitch, setImageSwitch] = useState([
    {
      id: "",
      img: OspImage,
    },
    {
      id: "",
      img: PermitePackagePImage,
    },
    {
      id: "",
      img: DataCleaning,
    },
    {
      id: "",
      img: RecordDigitizationImage,
    },
    {
      id: "",
      img: GroundPenetratingImage,
    },
  ]);

  //
  const [enabledLocal, setEnabledLocal] = useState(true);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [nameItem, setNameItem] = useState("");
  const [subItemIndex, setSubItemIndex] = useState(0);

  // Set the references
  const myRef2 = document.querySelector(".service-title");
  const myRef3 = document.querySelector(".services");
  const Ref = useRef();

  // this function detects in which section of the page I am to configure it in the current state variable
  const inViewport2 = useIntersectionObserver(myRef3, {});
  if (inViewport2?.isIntersecting === true) {
    setCurrent(`services-${inViewport2?.isIntersecting}`);
  }

  // set the fixed enabled

  useEffect(() => {
    setEnabledLocal(isEnabled);
  }, [isEnabled]);

  const handleItemHover = (id, img, index, indexImage) => {
    setSubItemIndex(indexImage);
    setNameItem(id);
    setShowRightArrow(true);
    ImageSwitch[index].img = img;
    setImageSwitch(ImageSwitch);
  };

  return (
    <>
      <div
        ref={Ref}
        className="services"
      >
        <div
          style={{ zIndex: "10", maxWidth: upToXl ? "1477px" : "1200px" }}
          className="bg-white service  w-full mx-auto relative pt-10"
          /*           style={{ zIndex: "10" }}
           */
        >
          <div className="flex flex-col">
            <span className="service-title inline-block">
              <TypeWriterEffect
                textStyle={{
                  fontWeight: "bolder",
                  fontSize: " 80px",
                  margin: "40px 0 40px 80px",
                  color: "#141c32",
                  marginLeft: "0px",
                }}
                startDelay={100}
                cursorColor="transparent"
                text="Services"
                typeSpeed={200}
              />
            </span>
          </div>

          {/* This section make posible the fixed effect */}
          {services.map((item, index) => (
            <Controller key={index}>
              <Scene
                enabled={enabledLocal && enabledLocal}
                triggerHook={0}
                pin
              >
                <div className={`space-y-2 pb-10 pt-20 bg-white ${isEnabled === true ? "fixed" : "services-relative "}`}>
                  <summary className="flex items-center w-full py-4 cursor-pointer border-t border-b border-primary">
                    <div className=" w-full text-xl service-head">
                      <h3 className="inline-block w-1/2 text-gray-900 lg:py-4  sm:py-1 ">{item.title}</h3>
                    </div>
                  </summary>

                  {/* Image switched */}
                  <div className="services-container">
                    {/* <div className="lg:py-4 lg:pr-10 sm:p-0 my-auto flex-1 fade-in-tl">
                      <img
                        alt={ImageSwitch[index].id}
                        src={ImageSwitch[index].img}
                      />
                    </div> */}
                    <Grid
                      container
                      spacing={{ xs: 2, sm: 2, md: 5, lg: 5 }}
                      columns={{ xs: 2, sm: 12, md: 12, lg: 12 }}
                    >
                      <Grid
                        item
                        xs={2}
                        sm={6}
                        md={6}
                        lg={6}
                        marginTop="20px"
                      >
                        {showRightArrow ? (
                          <img
                            alt={ImageSwitch[index].id}
                            src={ImageSwitch[index].img}
                          />
                        ) : (
                          <Slider {...settings}>
                            {item.subservices.map((i, ix) => (
                              <img
                                key={ix}
                                alt={i.name}
                                src={i.image}
                              />
                            ))}
                          </Slider>
                        )}
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        sm={6}
                        md={6}
                        lg={6}
                      >
                        <List
                          className=""
                          sx={{
                            "& .MuiListItem-root": {
                              borderBottomColor: "#141c32",
                              borderBottomWidth: "thin",
                              paddingBottom: "16px",
                              paddingTop: "20px",
                            },
                            paddingTop: "0px",
                          }}
                        >
                          {item.subservices.map((i, ix) => (
                            <ListItem
                              key={ix}
                              sx={{
                                "& .MuiListItemIcon-root": {
                                  minWidth: "0px",
                                  color: "#141c32",
                                },
                              }}
                              onMouseEnter={() => handleItemHover(i.name, i.image, index, ix)}
                              onMouseLeave={() => setShowRightArrow(false)}
                            >
                              <ListItemButton>
                                <ListItemIcon>{showRightArrow && nameItem === i.name && <AiFillCaretRight></AiFillCaretRight>}</ListItemIcon>
                                <ListItemText
                                  primary={i.name}
                                  sx={{
                                    "& .MuiTypography-root": {
                                      fontFamily: "grotesk",
                                      color: "#141c32",
                                    },
                                  }}
                                />
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Scene>
            </Controller>
          ))}
        </div>
      </div>

      {/* This section is visible only when the viewport is in mobile size */}

      <div className="service-collapse">
        <ServicesCollapse />
      </div>
    </>
  );
};
