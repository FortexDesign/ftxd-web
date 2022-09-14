import React, { useRef } from "react";
import brands from "../images/background/brands.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import TypeWriterEffect from "react-typewriter-effect";
import { performanceItems } from "../common/utils/dummy/performance";
import Slider from "react-slick";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export const Rating = ({ setCurrent }) => {
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



  return (
    <div className=" relative">
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
                    <p className="mt-6 text-lg w-full text-center text-white">
                      {item?.description}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="p-14 md:p-12 bg-white flex flex-col justify-center">
            <div className="max-w-xl mx-auto text-center md:text-left">
              <h2 className="companies-title text-gray-900 pb-10  md:text-lg">
                <TypeWriterEffect
                  startDelay={100}
                  cursorColor="transparent"
                  text="Trusted by the World's Best Companies"
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
    </div>
  );
};
