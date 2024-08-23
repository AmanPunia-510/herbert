import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import Image from "next/image";

const Team = () => {
  return (
    <div className="common_padding overflow-hidden">
      <div className="container">
        <div className="row items-center">
          <div className="w-5/12 px-3">
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
          <div className="w-7/12 px-3">
            <div className="w-full max-w-[701px] h-full">
              <Image
                width={701}
                height={570}
                src="/assets/images/home/png/resources.png"
                alt="resources image"
                className="relative -right-[148px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
