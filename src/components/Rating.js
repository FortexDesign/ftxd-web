import React from "react"
import brands from "../images/background/brands.png"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import TypeWriterEffect from "react-typewriter-effect"
import { performanceItems } from "../common/utils/dummy/performance"
import Slider from "react-slick"

export const Rating = () => {
  const myRef = document.querySelector(".rating-c")

  const settings = {
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  }

  return (
    <div className=" relative">
      {/*    <div
        style={{ height: "100%", width: "30vw" }}
        className="bg-secondary absolute left-0"
      ></div> */}
      <div className="fortex-container mx-auto relative rating-c">
        <aside className=" bg-secondary sm:grid sm:grid-cols-2 h-full w-full">
          {/* <div className="flex flex-col justify-center items-center">
            <span className="rating text-white">4.5</span>
            <div className="flex">
              {[1, 2, 3, 4].map(star => (
                <AiFillStar className="text-white text-3xl mx-2" />
              ))}
              <AiOutlineStar className="text-white text-3xl mx-2" />
            </div>
            <p className="text-white text-desc mx-auto mb-20">
              CUSTOMER SATISFACTION
            </p>
          </div> */}
          <div className="flex flex-col">
            <span
              style={{ marginTop: "20%" }}
              className="mt-4 text-white performance-title"
            >
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
                    className="flex flex-col items-center justify-center pt-20"
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
          <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
            <div className="max-w-xl mx-auto text-center md:text-left">
              <h2 className="companies-title text-gray-900 pb-10  md:text-lg">
                <TypeWriterEffect
                  /*                 textStyle={{
                  fontFamily: "grotesk-",
                  fontWeight: 0,
                  letterSpacing: "-0.03em",
                  fontSize: "45px",
                }} */
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
  )
}
