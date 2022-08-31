import React, { useRef, useState,useEffect } from "react";
import HeroImgMobile from "../images/background/NotesMobile.png";
import telecommunications from "../images/background/telecommunications.png";
import permit from "../images/background/permit.jpg";
import gpr from "../images/background/gpr.jpg";
import bore from "../images/background/ftxd_bore.png";
import eng from "../images/background/ftxd_eng.jpg";
import Slider from "react-slick";
import TypeWriterEffect from "react-typewriter-effect";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { BsArrowRight } from "react-icons/bs";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { useTypingText } from "../hooks/useTypingText";

export const Hero = ({ setCurrent }) => {
  const [wordIndex, setWordIndex] = useState(0);
  /*   const [change, setchange] = useState({ slideIndex: 0, updateCount: 0 });
   */ const Ref = useRef();
  const inViewport2 = useIntersectionObserver(Ref, {});
  // this function detects in which section of the page I am to configure it in the current state variable
  if (inViewport2?.isIntersecting === true) {
    setCurrent(`hero-${inViewport2?.isIntersecting}`);
  }
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
  const myRef = document.querySelector(".hero");
  const customSlider = useRef();

  const items = [
    <div
      style={{ backgroundImage: `url(${telecommunications})` }}
      className="image w-full"
    ></div>,
    <div
      style={{ backgroundImage: `url(${permit})` }}
      className="image w-full"
    ></div>,
    <div
      style={{ backgroundImage: `url(${gpr})` }}
      className="image w-full"
    ></div>,
    <div
      style={{ backgroundImage: `url(${bore})` }}
      className="image w-full"
    ></div>,

    <div
      style={{ backgroundImage: `url(${eng})` }}
      className="image w-full"
    ></div>,
  ];

  const { word } = useTypingText(
    [
      "telecommunications.",
      "utility permiting.",
      "utility locating.",
      "ISP engineering.",
      "surveying.",
    ],
    70,
    10,
    wordIndex,
    setWordIndex
  );

  useEffect(() => {
    customSlider.current.slickGoTo(wordIndex);
  }, [wordIndex]);

  return (
    <div ref={Ref} className="hero">
      <div className="bg-primary relative h-auto pt-20 ">
        <aside className="fortex-container mx-auto bg-primary w-full">
          <div className="relative content-slide">
            {/*   <AliceCarousel
              autoPlay
            
              animationDuration={5000}
              disableDotsControls
              disableButtonsControls
              items={items}
            /> */}
            <Slider
              ref={(slider) => (customSlider.current = slider)}
              {...settings}
            >
              <div className="containerC">
                <div
                  style={{ backgroundImage: `url(${telecommunications})` }}
                  className="image w-full"
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
            </Slider>
            <div className="h-full text-type top-0 flex flex-col justify-center absolute   ">
              <span className="ml-10 hero-title font-semibold text-white">
                We design the blueprints for the future of {word}
              </span>
              <a
                style={{ width: "202px" }}
                href="#"
                className="flex justify-center ml-10 items-center  py-2 mt-14 text-sm font-medium text-white transition border border-white hover:bg-white hover:text-primary focus:outline-none focus:ring focus:ring-yellow-400"
              >
                <span>Get started</span>
                <BsArrowRight className="text-white hover:text-primary ml-2 w-auto mr-0" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
