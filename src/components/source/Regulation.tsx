import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Image from "next/image";

const Regulation = () => {
  return (
    <div className="common_padding relative">
      <div className="container !max-w-[1055px]">
        <Heading
          textName="Employment "
          orangeText="Regulation"
          className="text-center"
        />
        <Paragraph
          textName="This regulation details the conditions under which foreign nationals can work in Germany. Herbert's training in the Beschäftigungsverordnung allows for accurate guidance on:"
          className="max-w-[716px] text-center pt-4 mx-auto"
        />
        <div className="row max-sm:justify-center sm:items-center pt-6 sm:pt-14">
          <div className="w-full px-3 sm:hidden pb-11">
            <div className="flex justify-center w-full">
              <Image
                src="/assets/images/home/png/work-tourism.png"
                width={244}
                height={340}
                alt="work-tourism-webp"
              />
            </div>
          </div>
          <div className="w-1/2 sm:w-4/12 px-3">
            <div className="max-w-[322px]">
              <div>
                <div className="flex sm:justify-end">
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    1
                  </div>
                </div>
                <p className="pt-4 font-medium text-xl text-black-20 sm:text-end">
                  Work permit requirements
                </p>
              </div>

              <div className="pt-6 sm:pt-14">
                <div className="flex sm:justify-end">
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    2
                  </div>
                </div>
                <p className="pt-4 font-medium text-xl text-black-20 sm:text-end">
                  Job-seeking visas
                </p>
              </div>
            </div>
          </div>
          <div className="w-4/12 px-3 max-sm:hidden">
            <div className="flex justify-center w-full">
              <Image
                src="/assets/images/home/png/work-tourism.png"
                width={244}
                height={340}
                alt="work-tourism-webp"
              />
            </div>
          </div>
          <div className="w-1/2 sm:w-4/12 px-3">
            <div className="max-w-[322px]">
              <div>
                <div>
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    3
                  </div>
                </div>
                <p className="pt-4 font-medium text-xl text-black-20">
                  Self-employment regulations
                </p>
              </div>

              <div className="pt-6 sm:pt-14">
                <div>
                  <div className="size-10 rounded-full bg-orange-10 text-white font-medium font-rubik flex justify-center items-center text-2xl">
                    4
                  </div>
                </div>
                <p className="pt-4 font-medium text-xl text-black-20">
                  Specific provisions for various professional groups
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
        className="absolute left-0 top-56 max-sm:w-[31px]"
        alt="work-tourism-webp"
      />

      <Image
        src="/assets/images/home/png/regulation-bottom-layer.png"
        width={2100}
        height={270}
        className="absolute left-0 bottom-[-190px] -z-[1]"
        alt="work-tourism-webp"
      />
    </div>
  );
};

export default Regulation;
