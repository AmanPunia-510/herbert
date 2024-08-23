import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";

const NeedHelp = () => {
  return (
    <div className="container">
      <div className="bg-orange-10 p-16 rounded-xl relative top-[120px]">
        <Heading
          textName="Need Help in Your Visa? Ask Herbert Now!"
          className="text-center max-w-[632px] mx-auto text-white"
        />
        <Paragraph
          textName="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
          className="max-w-[528px] text-center mx-auto text-white pt-4"
        />
        <div className="flex items-center gap-4 justify-center pt-[42px]">
          <Button
            text="Start your conversation"
            className="bg-white text-orange-10"
          />
          <Button text="Learn More" className="bg-transparent text-white border border-solid border-white rounded-[8px]"/>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
