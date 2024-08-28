import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Image from "next/image";

const Features = () => {
  return (
    <div className="common_padding relative">
      <div className="container relative z-10">
        <Heading
          textName="Herbert Main"
          orangeText=" Features"
          className="text-center"
        />
        <Paragraph
          textName="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed."
          className="max-w-[556px] text-center pt-4 mx-auto"
        />
        <div className="row pt-6 md:pt-14 max-lg:justify-center">
          <div className="w-full pb-11 md:hidden">
            <div className="flex justify-center w-full">
              <Image
                src="/assets/images/home/png/work-tourism.png"
                width={324}
                height={452}
                alt="work-tourism-webp"
                className="max-sm:w-[282px]"
              />
            </div>
          </div>
          <div className="w-1/2 sm:w-4/12 px-3">
            <div className="max-w-[322px]">
              <div>
                <div className="flex md:justify-end">
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    1
                  </div>
                </div>
                <p className="pt-4 font-medium text-base md:text-xl text-black-20 md:text-end">
                  Find out which visa you might want
                </p>
              </div>

              <div className="pt-14">
                <div className="flex md:justify-end">
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    2
                  </div>
                </div>
                <p className="pt-4 font-medium text-base md:text-xl text-black-20 md:text-end">
                  Receive a checklist with all necessary documents
                </p>
              </div>

              <div className="pt-14">
                <div className="flex md:justify-end">
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    3
                  </div>
                </div>
                <p className="pt-4 font-medium text-base md:text-xl text-black-20 md:text-end">
                  Write your CV / Motivation Letter with Herbert
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-4/12 px-3 max-md:hidden">
            <div className="flex justify-center w-full">
              <Image
                src="/assets/images/home/png/work-tourism.png"
                width={324}
                height={452}
                alt="work-tourism-webp"
              />
            </div>
          </div>
          <div className="w-1/2 sm:w-4/12 px-3 flex justify-end">
            <div className="max-w-[322px]">
              <div>
                <div>
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    4
                  </div>
                </div>
                <p className="pt-4 font-medium text-base md:text-xl text-black-20">
                  Help prepare for your visa interview
                </p>
              </div>

              <div className="pt-14">
                <div>
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    5
                  </div>
                </div>
                <p className="pt-4 font-medium text-base md:text-xl text-black-20">
                  Practice your German interactively with Herbert
                </p>
              </div>

              <div className="pt-14">
                <div>
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    6
                  </div>
                </div>
                <p className="pt-4 font-medium text-base md:text-xl text-black-20">
                  Let Herbert guide you through your fresh start in Germany once
                  you get there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/assets/images/home/png/features-ellipse-right.png"
        width={86}
        height={369}
        className="absolute left-0 top-72 max-md:hidden"
        alt="work-tourism-png"
      />
      <Image
        src="/assets/images/home/png/residence-section-ellipse.png"
        width={42}
        height={381}
        className="absolute right-0 top-0 sm:-top-[7%] max-sm:w-6"
        alt="residence-section-ellipse"
      />
      <Image
        src="/assets/images/home/png/features-section-bottom.png"
        width={1440}
        height={381}
        className="absolute left-0 bottom-[-92px] -z-[1]"
        alt="features-section-bottom"
      />
    </div>
  );
};

export default Features;









