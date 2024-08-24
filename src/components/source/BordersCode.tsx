import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import Image from "next/image";

const BordersCode = () => {
  return (
    <div className="common_padding overflow-hidden relative">
      <div className="bg-[#FFF8F2] py-[72px]">
        <div className="container">
          <div className="row items-center max-md:flex-col-reverse max-md:gap-11">
            <div className="w-full md:w-1/2 lg:w-7/12 sm:px-3">
              <div className="w-full md:max-w-[701px] h-full max-md:flex max-md:justify-center">
                <Image
                  width={701}
                  height={570}
                  src="/assets/images/home/png/resources-left.png"
                  alt="resources image"
                  className="relative lg:-left-[70px] xl:-left-[148px] max-xl:w-full pointer-events-none z-10 max-md:max-w-[450px]"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12 px-3 xl:relative xl:right-5 max-md:flex max-md:justify-center">
              <div className="max-w-[450px] md:max-w-[472px]">
                <Heading blackText="Schengen Borders  " orangeText="Code" />
                <Paragraph
                  textName="As part of the Schengen Area, Germany adheres to this code for border control. Herbert's knowledge of the Schengener Grenzkodex covers:"
                  className="pt-4"
                />
                <ul className="text-black-10 pl-5 pt-4">
                  <li className="list-disc">Short-term stay regulations</li>
                  <li className="list-disc">
                    Entry requirements for the Schengen Area
                  </li>
                  <li className="list-disc">Border crossing procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        width={40}
        height={265}
        src="/assets/images/home/png/visacode-section-ellipse.png"
        alt="visacode-section-ellipse"
        className="absolute bottom-40 right-0 z-0 pointer-events-none"
      />
    </div>
  );
};

export default BordersCode;
