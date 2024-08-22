import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Image from "next/image";

const Features = () => {
  return (
    <div className="common_padding relative">
      <div className="container">
        <Heading
          textName="Herbert Main"
          orangeText=" Features"
          className="text-center"
        />
        <Paragraph
          textName="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed."
          className="max-w-[556px] text-center pt-4 mx-auto"
        />
        <div className="row items-center pt-14">
          <div className="w-4/12 px-3">
            <div className="max-w-[322px]">
              <div>
                <div className="flex justify-end">
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    1
                  </div>
                </div>
                <p className="pt-4 font-medium text-xl text-black-20 text-end">
                  Find out which visa you might want
                </p>
              </div>

              <div className="pt-14">
                <div className="flex justify-end">
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    2
                  </div>
                </div>
                <p className="pt-4 font-medium text-xl text-black-20 text-end">
                  Receive a checklist with all necessary documents
                </p>
              </div>

              <div className="pt-14">
                <div className="flex justify-end">
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    3
                  </div>
                </div>
                <p className="pt-4 font-medium text-xl text-black-20 text-end">
                  Write your CV / Motivation Letter with Herbert
                </p>
              </div>
            </div>
          </div>
          <div className="w-4/12 px-3">
            <div className="flex justify-center w-full">
              <Image
                src="/assets/images/home/png/work-tourism.png"
                width={324}
                height={452}
                alt="work-tourism-webp"
              />
            </div>
          </div>
          <div className="w-4/12 px-3 flex justify-end">
            <div className="max-w-[322px]">
              <div>
                <div>
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    4
                  </div>
                </div>
                <p className="pt-4 font-medium text-xl text-black-20">
                  Help prepare for your visa interview
                </p>
              </div>

              <div className="pt-14">
                <div>
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    5
                  </div>
                </div>
                <p className="pt-4 font-medium text-xl text-black-20">
                  Practice your German interactively with Herbert
                </p>
              </div>

              <div className="pt-14">
                <div>
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    6
                  </div>
                </div>
                <p className="pt-4 font-medium text-xl text-black-20">
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
        className="absolute left-0 top-72"
        alt="work-tourism-webp"
      />
    </div>
  );
};

export default Features;
