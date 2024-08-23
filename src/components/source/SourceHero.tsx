import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";

const SourceHero = () => {
  return (
    <div className="common_padding pt-[72px]">
      <div className="container">
        <Heading
          blackText="The Foundations of "
          orangeText="German Immigration "
          blackTextOne="Expertise"
          className="max-w-[807px] mx-auto text-center !text-custom_2xl"
        />
        <Paragraph
          textName="Herbert, our AI chatbot, is built on a comprehensive understanding of German immigration law. To ensure accuracy and reliability, Herbert's knowledge base is derived from the following authoritative sources:"
          className="max-w-[685px] mx-auto text-center pt-4"
        />
        <div className="flex justify-center">
          <Button text="Contact Us" className="mt-11" />
        </div>
      </div>
    </div>
  );
};

export default SourceHero;
