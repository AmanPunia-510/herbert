import Image from "next/image";
import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";

const VisaCode = () => {
  return (
    <div className="common_padding relative">
      <div className="bg-orange-30 py-[100px]">
        <div className="container flex items-center justify-center">
          <div className="row items-center justify-between max-lg:max-w-[450px]">
            <div className="lg:w-1/2 px-3">
              <div className="row items-center">
                <div className="w-1/2 px-3">
                  <div className="bg-white max-w-[248px] w-full h-[188px] flex justify-center items-center rounded-lg flex-col">
                    <Image
                      src="/assets/images/sources/png/visa-application-img.png"
                      width={72}
                      height={72}
                      alt="application"
                    />
                    <h4 className="font-medium sm:text-xl leading-6 text-center max-w-[197px] pt-4">
                      Visa application processes
                    </h4>
                  </div>
                </div>
                <div className="w-1/2 px-3">
                  <div className="bg-white max-w-[248px] w-full h-[188px] flex justify-center items-center rounded-lg flex-col">
                    <Image
                      src="/assets/images/sources/png/required-documents-img.png"
                      width={72}
                      height={72}
                      alt="application"
                    />
                    <h4 className="font-medium sm:text-xl leading-6 text-center max-w-[197px] pt-4">
                      Required documentation
                    </h4>
                  </div>
                  <div className="bg-white max-w-[248px] w-full h-[188px] flex justify-center items-center rounded-lg flex-col mt-9">
                    <Image
                      src="/assets/images/sources/png/visa-fee-img.png"
                      width={72}
                      height={72}
                      alt="application"
                    />
                    <h4 className="font-medium sm:text-xl leading-6 text-center max-w-[197px] pt-4">
                      Visa fees and processing times
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 px-3 max-w-[473px] flex justify-end flex-col max-lg:pt-14">
              <Heading blackText="Visa" orangeText=" Code" />
              <Paragraph
                textName="This code standardizes procedures for short-stay visas in the Schengen Area. Herberts understanding of the Visa-Kodex ensures accurate information on: "
                className="pt-4"
              />
              <Button text="Learn More" className="mt-11 w-fit" />
            </div>
          </div>
        </div>
      </div>

      <Image
        width={40}
        height={265}
        src="/assets/images/home/png/visacode-section-ellipse.png"
        alt="visacode-section-ellipse"
        className="absolute top-40 right-0 z-0 pointer-events-none"
      />
    </div>
  );
};

export default VisaCode;
