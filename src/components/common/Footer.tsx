'use client'
import React, { useEffect } from 'react';
import Image from "next/image";
import Paragraph from "./Paragraph";
import { FOOTER_LINKS } from "./Helper";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      '.footerleft',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: ".footerleft",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none none",
        }
      }
    );
    gsap.fromTo(
      '.footerright',
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: ".footerright",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none none",
        }
      }
    );
  }, []);

  const curretDate = new Date().getFullYear();
  return (
    <>
      <div className='bg-orange-30'>
        <div className='container pt-[212px]'>
          <div className='row justify-between w-full'>
            <div className='lg:w-5/12 px-3 footerleft'>
              <a href="/" className='inline-block max-md:max-w-[200px]'>
                <Image
                  src='/assets/images/home/png/logo-img.png'
                  width={326}
                  height={98}
                  alt="footer logo" />
              </a>
              <Paragraph textName="Lorem ipsum dolor sit amet consectetur. Fusce tortor etiam vitae velit mi sed mattis tempor tristique. Purus sed phasellus metus lectus auctor." className="lg:pt-4 pt-3 max-w-[412px]" />
            </div>
            <div className="lg:w-6/12 px-3 w-full max-lg:justify-between footerright">
              <div className="row">
                {FOOTER_LINKS.map((section, sectionIndex) => {
                  const hasImageLinks = section.links.some(link => typeof link !== 'string');

                  return (
                    <div
                      key={sectionIndex}
                      className="sm:w-1/3 px-3 w-1/2 max-lg:pt-5"
                    >
                      <h4 className="font-medium text-black-20 leading-5 lg:pb-4 pb-3 opacity-90">
                        {section.title}
                      </h4>
                      <ul className={hasImageLinks ? "flex gap-3" : ""}>
                        {section.links.map((link, linkIndex) => (
                          <li
                            key={linkIndex}
                            className={`text-black-10 leading-6 mt-2 ${typeof link !== "string"
                              ? "size-9 rounded-full flex items-center justify-center bg-[#FFEDDA] hover:scale-105 duration-300 ease-linear hover:shadow-cardShadow cursor-pointer"
                              : ""
                              }`}
                          >
                            {typeof link === "string" ? (
                              <a href="/" className='hover:text-orange-20 ease-linear duration-300 pt-2'>{link}</a>
                            ) : (
                              <a href="/">
                                {React.createElement(link, {
                                  className: "w-6 h-6",
                                })}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[1px] bg-black-20 mt-10 opacity-30'></div>
        <p className='text-center text-black-10 py-4'>Copyright © {curretDate} herbert, All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
