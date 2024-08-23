import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

const Faq = () => {
  return (
    <div className="common_padding">
      <div className="container">
        <Heading
          blackText="Frequently Asked "
          orangeText="Questions"
          className="text-center"
        />
        <Paragraph textName="Help users find quick answers to common queries about Herbert, our AI-powered assistant for German visa and immigration processes." className="max-w-[622px] text-center pt-4 mx-auto"/>
      </div>
    </div>
  );
};

export default Faq;

