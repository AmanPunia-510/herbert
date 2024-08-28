'use client'
import React, { useEffect } from 'react';
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const VisaHandbook = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hello_ManTwo',
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hello_ManTwo',
          start: 'top center',
          end: 'bottom 50%',
        }
      }
    );
    gsap.fromTo(
      '.text_Animation',
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.6,
        stagger: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.text_Animation',
          start: 'top 70%',
          end: 'bottom 20%',
        }
      }
    );
  }, []);

  return (
    <div className="relative">
      <div className="container common_padding pb-0">
        <div className="max-w-[1023px] flex items-center lg:justify-between justify-center">
          <div className="row items-center max-lg:max-w-[450px] w-full justify-between">
            <div className="lg:w-1/2 px-3 max-w-[478px] hello_ManTwo">
              <Heading blackText="Visa" orangeText=" Handbook" />
              <Paragraph
                textName="The Visumhandbuch is a comprehensive internal document used by the Federal Foreign Office and German embassies. Spanning approximately 1,000 pages, it provides detailed guidelines on visa issuance. Herberts training on this resource offers: "
                className="pt-4"
              />
              <ul className="pt-2 pl-6">
                <li className="text-black-10 list-disc text_Animation">
                  In-depth insights into visa application assessment
                </li>
                <li className="text-black-10 list-disc text_Animation">
                  Clarification on complex cases and exceptions
                </li>
                <li className="text-black-10 list-disc text_Animation">
                  Nuanced interpretations of immigration laws and regulations
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 px-3 flex lg:justify-end lg:items-end w-full items-center justify-center">
              <div className="max-sm:max-w-[261px] max-lg:mt-14 flex items-center justify-center hello_ManTwo">
                <Image
                  src="/assets/images/sources/png/hello-man-img.png"
                  alt="hello  man"
                  width={392}
                  height={457}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border border-grey-10 rounded-lg mt-16">
          <Paragraph textName="By basing its knowledge on these official sources, Herbert provides you with accurate, up-to-date, & reliable information on German immigration processes. Our commitment to using these authoritative resources ensures that you receive guidance aligned with current German immigration laws & practices." />
        </div>
      </div>
      <Image
        src="/assets/images/home/png/visa-handbook-bg.png"
        alt="hello man"
        width={1603}
        height={686}
        className="absolute left-0 bottom-[-331px]"
      />
    </div>
  );
};

export default VisaHandbook;
