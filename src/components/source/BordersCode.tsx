import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import Image from "next/image";

const BordersCode = () => {
  return (
    <div className="common_padding overflow-hidden">
      <div className="bg-[#FFF8F2] py-[72px]">
        <div className="container">
          <div className="row items-center">
            <div className="w-7/12 px-3">
              <div className="w-full max-w-[701px] h-full">
                <Image
                  width={701}
                  height={570}
                  src="/assets/images/home/png/resources-left.png"
                  alt="resources image"
                  className="relative -left-[148px]"
                />
              </div>
            </div>
            <div className="w-5/12 px-3">
              <div className="max-w-[472px]">
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
                <Button text="Learn more" className="font-semibold mt-11" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BordersCode;
