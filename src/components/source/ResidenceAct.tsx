'use client'
import React, { useEffect } from 'react';
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Image from 'next/image';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ResidenceAct = () => {
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
      '.hello_ManText',
      {
        x: -100,
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
      <div className="container common_padding max-w-[1023px] flex justify-center">
        <div className="row justify-start max-lg:max-w-[450px] items-center">
          <div className="lg:w-1/2 px-3 max-w-[478px] hello_ManText">
            <Heading blackText="Residence" orangeText=" Act" />
            <Paragraph
              textName="The Aufenthaltsgesetz is the cornerstone of German immigration law. This act governs:"
              className="pt-4"
            />
            <div className='max-sm:max-w-[261px] lg:hidden m-8'>
              <Image
                src="/assets/images/sources/png/hello-man-img.png"
                alt="hello  man"
                width={392}
                height={457}
              />
            </div>
            <ul className="pt-2 pl-6 max-lg:hidden">
              <li className="text-black-10 list-disc text_Animation">Entry into Germany</li>
              <li className="text-black-10 list-disc text_Animation">Residence permits</li>
              <li className="text-black-10 list-disc text_Animation">
                Employment regulations for foreigners
              </li>
              <li className="text-black-10 list-disc text_Animation">Integration measures</li>
            </ul>
            <Paragraph
              textName="Herbert utilizes this act to provide precise information on legal residence requirements and pathways to living in Germany."
              className="pt-2 text_Animation"
            />
          </div>
          <div className="lg:w-1/2 px-3 flex lg:justify-end lg:items-end justify-center items-center hello_ManTwo">
            <div className='max-sm:max-w-[261px] max-lg:hidden'>
              <Image
                src="/assets/images/sources/png/hello-man-img.png"
                alt="hello  man"
                width={392}
                height={457}
              />
            </div>
            <ul className="pt-2 pl-6 lg:hidden">
              <li className="text-black-10 list-disc">Entry into Germany</li>
              <li className="text-black-10 list-disc">Residence permits</li>
              <li className="text-black-10 list-disc">
                Employment regulations for foreigners
              </li>
              <li className="text-black-10 list-disc">Integration measures</li>
            </ul>

          </div>
        </div>
      </div>
      <Image
        src="/assets/images/home/png/residence-section-ellipse.png"
        width={42}
        height={381}
        className='absolute right-0 top-[10%]'
        alt="residence-section-ellipse"
      />
    </div>
  );
}

export default ResidenceAct