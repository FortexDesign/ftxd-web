import React, { useEffect, useRef, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { services } from "../common/utils/dummy/services";
import TypeWriterEffect from "react-typewriter-effect";
import { ServicesCollapse } from "./ServicesCollapse";

export const Services = ({ setCurrent, isEnabled, current }) => {
  // State to set the image in section viewport

  const [ImageSwitch, setImageSwitch] = useState([
    {
      id: "",
      img: "https://cdn.pixabay.com/photo/2015/05/11/12/30/circuit-762427_960_720.jpg",
    },
    {
      id: "",
      img: "https://cdn.pixabay.com/photo/2015/05/11/12/30/circuit-762427_960_720.jpg",
    },
    {
      id: "",
      img: "https://cdn.pixabay.com/photo/2015/05/11/12/30/circuit-762427_960_720.jpg",
    },
    {
      id: "",
      img: "https://cdn.pixabay.com/photo/2015/05/11/12/30/circuit-762427_960_720.jpg",
    },
    {
      id: "",
      img: "https://cdn.pixabay.com/photo/2015/05/11/12/30/circuit-762427_960_720.jpg",
    },
  ]);

  //
  const [enabledLocal, setEnabledLocal] = useState(true);

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

  const handleImage = (id, img, index) => {
    ImageSwitch[index].img = img;
    setImageSwitch((prevState) => {
      return [...prevState, ImageSwitch];
    });
    console.log(
      "🚀 ~ file: services.js ~ line 57 ~ handleImage ~ ImageSwitch",
      ImageSwitch
    );
  };

  return (
    <>
      <div ref={Ref} className="services">
        <div
          className="bg-white service fortex-container w-full mx-auto relative pt-10"
          style={{ zIndex: "10" }}
        >
          <div className="flex flex-col">
            <span className="service-title inline-block">
              <TypeWriterEffect
                textStyle={{
                  fontWeight: 500,
                  fontSize: " 80px",
                  margin: "40px 0 40px 80px",
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
            <Controller>
              <Scene enabled={enabledLocal && enabledLocal} triggerHook={0} pin>
                <div key={index} className="space-y-2 pb-10 pt-20 bg-white">
                  <summary className="flex items-center w-full p-4 cursor-pointer border-t border-b border-primary">
                    <div className=" w-full lg:text-md sm:text-base service-head">
                      <h5 className=" numeration inline-block w-1/2 text-gray-900 lg:py-4 sm:py-1 flex-1">
                        {item.id}
                      </h5>
                      <h3 className="inline-block w-1/2 pl-8 text-gray-900 lg:py-4  sm:py-1 ">
                        <TypeWriterEffect
                          startDelay={100}
                          cursorColor="transparent"
                          text={item.title}
                          typeSpeed={50}
                          scrollArea={myRef2}
                        />
                      </h3>
                    </div>
                  </summary>

                  {/* Image switched */}
                  <div className="services-container">
                    <div className="lg:py-10 lg:pr-10 sm:p-0 my-auto flex-1 fade-in-tl">
                      <img
                        alt={ImageSwitch[index].id}
                        src={ImageSwitch[index].img}
                      />
                    </div>
                    {/* This section contain all the item inside one service and when the span is clicked change the image in the service */}

                    <div className="flex flex-col flex-1 font-medium justify-center cursor-pointer">
                      {item.subservices.map((i, ix) => (
                        <span
                          key={ix}
                          onClick={() => handleImage(i.name, i.image, index)}
                          className="border-b  px-4 service-head border-primary text-gray-900 py-10 numeration "
                        >
                          {i.name}
                        </span>
                      ))}
                    </div>
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
