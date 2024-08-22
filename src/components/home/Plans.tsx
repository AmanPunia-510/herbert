import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import { PLANS_CARD } from "../common/Helper";

const Plans = () => {
  return (
    <div className="common_padding">
      <div className="bg-orange-30 py-20">
        <div className="container">
          <Heading
            textName="Friendly Pricing"
            orangeText=" Plans"
            className="text-center"
          />
          <Paragraph
            textName="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
            className="max-w-[556px] text-center pt-4 mx-auto"
          />
          <div className="row pt-14">
            {PLANS_CARD.map((plan, index) => (
              <div key={index} className="w-4/12 px-3">
                <div
                  className={`max-w-[364px]
                   ${
                     index === 1
                       ? "flex justify-center" // Center the middle column without a border
                       : index === 2
                       ? "flex justify-end border-solid border-[1px] border-t-0 border-r-0 border-b-0 border-l-[1px] border-[#D6D0CB]" // Align the last column to the end with a right and left border
                       : "border-solid border-r-[1px] border-[#D6D0CB]" // Add right border to the first column
                   }`}
                >
                  <div className="max-w-[308px]">
                    <div className="flex justify-between items-center">
                      <h1 className="font-rubik font-semibold text-custom_xl text-black-20">
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
                      <p className="text-black-10">10 messages</p>
                    </div>
                    <button className="outline-none border-none py-[14px] w-full rounded-[8px] bg-orange-10 font-rubik font-semibold text-white mt-8">
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
