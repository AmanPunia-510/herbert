import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import Image from "next/image";

const Team = () => {
  return (
    <div className="common_padding relative overflow-x-hidden">
      <div className="container relative z-10">
        <div className="row items-center">
          <div className="w-full md:w-1/2 max-md:flex max-md:justify-center lg:w-5/12 px-3">
            <div className="max-w-[472px]">
              <Heading
                blackText="Team "
                orangeText="& "
                blackTextOne="Resources"
              />
              <Paragraph
                textName="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed. Vulputate eget lectus vitae iaculis rhoncus."
                className="pt-4"
              />
              <ul className="text-black-10 pl-5 pt-4">
                <li className="list-disc">Single entrepreneur (yourself)</li>
                <li className="list-disc">
                  Outsourced development to freelancers
                </li>
                <li className="list-disc">Budget: $15,000</li>
              </ul>
              <Button text="Learn more" className="font-semibold mt-11" />
            </div>
          </div>
          <div className="w-full md:w-1/2 max-md:flex max-md:justify-center lg:w-7/12 px-3">
            <div className="w-full max-w-[701px] h-full max-md:flex max-md:justify-center">
              <Image
                width={701}
                height={570}
                src="/assets/images/home/png/team-right.png"
                alt="resources image"
                className="relative xl:-right-[106px] xl:max-w-[735px] max-md:max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        width={1440}
        height={10}
        src="/assets/images/home/png/team-bg.png"
        alt="team-bg"
        className="absolute -top-16 left-1/2 -translate-x-1/2 -z-[1]"
      />
      <Image
        width={50}
        height={10}
        src="/assets/images/home/png/resources-ellipse.png"
        alt="team-bg"
        className="absolute left-0 top-10 -z-[1]"/>
    </div>
  );
};

export default Team;
