import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import { PLANS_CARD } from "../common/Helper";
import Image from "next/image";

const Plans = () => {
  return (
    <div className="common_padding relative">
      <div className="bg-orange-30 py-20">
        <div className="container relative z-10">
          <Heading
            textName="Friendly Pricing"
            orangeText=" Plans"
            className="text-center"
          />
          <Paragraph
            textName="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
            className="max-w-[556px] text-center pt-4 mx-auto"
          />
          <div className="row pt-14 max-lg:justify-center">
            {PLANS_CARD.map((plan, index) => (
              <div
                key={index}
                className="w-full max-lg:flex max-lg:justify-center lg:w-4/12 px-3"
              >
                <div
                  className={`max-w-[444px] lg:max-w-[364px]
        ${index === 0 ? "xl:border-b-0" : ""}
        ${index === 1 ? "flex justify-center max-lg:mt-10" : ""}
        ${
          index === 2
            ? "flex justify-end xl:border-solid xl:border-[1px] xl:border-t-0 xl:border-r-0 xl:border-b-0 xl:border-l-[1px] xl:border-[#D6D0CB] max-lg:mt-10"
            : ""
        }
        ${
          index !== 2
            ? "xl:border-solid xl:border-r-[1px] border-[#D6D0CB]"
            : ""
        }`}
                >
                  <div className="max-w-[444px] lg:max-w-[308px]">
                    <div className="flex justify-between items-center">
                      <h1 className="font-rubik font-semibold text-2xl md:text-custom_xl text-black-20">
                        {plan.heading}
                      </h1>
                      <div
                        className={`px-2 py-1 rounded-md ${
                          plan.validation === "Basic"
                            ? "bg-black-20 text-white"
                            : plan.validation === "Standard"
                            ? "bg-yellow-300 text-black-20"
                            : plan.validation === "Premium"
                            ? "bg-orange-20 text-white"
                            : ""
                        }`}
                      >
                        {plan.validation}
                      </div>
                    </div>
                    <p className="text-black-10 pt-4">{plan.paragraph}</p>
                    <div className="font-bold text-black-20 pt-6">
                      {plan.includeText}
                    </div>
                    <div className="flex items-center gap-1 pt-6">
                      <div>{plan.rightTick}</div>
                      <p className="text-black-10">{plan.msg}</p>
                    </div>
                    <button className="outline-none border border-transparent py-[14px] w-full rounded-[8px] bg-orange-10 font-rubik font-semibold text-white mt-8 hover:border hover:border-orange-10 hover:bg-white hover:text-orange-10 ease-linear duration-300">
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image
        width={40}
        height={265}
        src="/assets/images/home/png/visacode-section-ellipse.png"
        alt="visacode-section-ellipse"
        className="absolute top-20 right-0 z-0 pointer-events-none"
      />
    </div>
  );
};

export default Plans;
