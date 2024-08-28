'use client'
import React, { useEffect } from 'react';
import Image from "next/image";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const VisaCode = () => {
  useEffect(() => {
    gsap.fromTo(
      '.visa-application',
      { x: -150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        delay: 0.8,
        stagger: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.visa-application',
          start: 'top 70%',
          end: 'bottom bottom',
        }
      }
    );
    gsap.fromTo(
      '.top-card',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        delay: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.top-card',
          start: 'top 70%',
          end: 'bottom 20%',
        }
      }
    );
    gsap.fromTo(
      '.text-VisaCode',
      { opacity: 0, x: 100, duration: 3, },
      {
        opacity: 1,
        delay: 0.6,
        stagger: 0.4,
        x: 0,
        duration: 3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.text-VisaCode',
          start: 'top bottom',
          end: 'bottom top',
        }
      }
    );
    gsap.fromTo(
      '.bottom-application',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.bottom-application',
          start: 'top 90%',
          end: 'bottom 30%',
        }
      }
    );
  }, []);

  return (
    <div className="common_padding relative">
      <div className="bg-orange-30 py-[100px]">
        <div className="container flex items-center justify-center">
          <div className="row items-center justify-between max-lg:max-w-[450px]">
            <div className="lg:w-1/2 px-3">
              <div className="row items-center">
                <div className="w-1/2 px-3">
                  <div className="bg-white max-w-[248px] w-full h-[188px] flex justify-center items-center rounded-lg flex-col max-lg:p-4 p-3 visa-application">
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
                  <div className="bg-white max-w-[248px] w-full h-[188px] flex justify-center items-center rounded-lg flex-col max-lg:p-4 p-3 top-card">
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
                  <div className="bg-white max-w-[248px] w-full h-[188px] flex justify-center items-center rounded-lg flex-col mt-9 max-lg:p-4 p-3 bottom-application">
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
            <div className="lg:w-1/2 px-3 max-w-[473px] flex justify-end flex-col max-lg:pt-14 text-VisaCode">
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
        className="absolute top-40 right-0 z-0 pointer-events-none max-sm:hidden"
      />
    </div>
  );
};

export default VisaCode;
