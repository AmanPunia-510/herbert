import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

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
          <div className="row">
            <div className="w-4/12 px-3">
              <div className="max-w-[362px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
