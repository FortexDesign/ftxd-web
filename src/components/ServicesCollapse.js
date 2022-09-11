import React, { useState } from "react";
import { services } from "../common/utils/dummy/services";
import { AiOutlineArrowDown } from "react-icons/ai";

export const ServicesCollapse = () => {
  const [ImageSwitch, setImageSwitch] = useState({
    id: "",
    img: "https://cdn.pixabay.com/photo/2015/05/11/12/30/circuit-762427_960_720.jpg",
  });
  return (
    <div className="bg-white fortex-container w-full mx-auto relative pt-10">
      <div className="flex flex-col">
        <span className="numeration">02/</span>
        <span className="service-title inline-block">Services</span>
      </div>

      {services.map((item) => (
        <div class="space-y-4">
          <details class="group">
            <summary className="flex items-center justify-between w-full py-4 cursor-pointer border-t  border-primary">
              <div className="flex w-full items-center  lg:text-2xl sm:text-base service-head">
                <h5 className=" text-gray-900 lg:py-4 sm:py-1 text-start w-52 ">
                  {item.id}
                </h5>
                <div className="flex w-full justify-end">
                  <h5 className="mr-4 text-gray-900 lg:py-4 sm:py-1 text-end">
                    {item.title}
                  </h5>
                  <AiOutlineArrowDown />
                </div>
              </div>
            </summary>

            <p className="services-container">
              {/* This section contain all the item inside one service and when the span is clicked change the image in the service */}
              <div className="flex flex-col flex-1 font-medium justify-center cursor-pointer">
                {item.subservices.map((i, ix) => (
                  <span
                    key={ix}
                    onClick={() => setImageSwitch({ id: i.name, img: i.image })}
                    className={`${
                      ix !== 4 ? "border-b" : ""
                    }  border-primary text-gray-900 py-4 text-sm`}
                  >
                    {i.name}
                  </span>
                ))}
              </div>
            </p>
          </details>
        </div>
      ))}
    </div>
  );
};
