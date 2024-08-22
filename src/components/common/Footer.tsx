import React from 'react';
import Image from "next/image";
import Paragraph from "./Paragraph";
import { FOOTER_LINKS } from "./Helper";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from './Icon';

const Footer = () => {
  return (
    <>
      <div className='bg-orange-30'>
        <div className='container pt-[212px]'>
          <div className='row justify-between w-full'>
            <div className='lg:w-5/12 px-3'>
              <Image
                src='/assets/images/home/png/logo-img.png'
                width={326}
                height={98}
                alt="footer logo" />
              <Paragraph textName="Lorem ipsum dolor sit amet consectetur. Fusce tortor etiam vitae velit mi sed mattis tempor tristique. Purus sed phasellus metus lectus auctor." className="lg:pt-4 pt-3 max-w-[412px]" />
            </div>
            <div className="lg:w-6/12 px-3 w-full max-lg:justify-between">
              <div className="row">
                {FOOTER_LINKS.map((section, sectionIndex) => {
                  const hasImageLinks = section.links.some(link => typeof link !== 'string');

                  return (
                    <div key={sectionIndex} className="sm:w-1/3 px-3 w-1/2 max-lg:pt-5">
                      <h4 className="font-medium text-black-20 leading-5 pb-2 opacity-90">{section.title}</h4>
                      <ul className={hasImageLinks ? 'flex' : ''}>
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex} className={`pt-2 text-black-10 leading-6 ${typeof link !== 'string' ? 'size-8 rounded-full flex items-center justify-center' : ''}`}>
                            {typeof link === 'string' ? (
                              <a href="/">{link}</a>
                            ) : (
                              <a href="/">
                                {React.createElement(link, { className: 'w-6 h-6' })}
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
        <p className='text-center text-black-10 py-4'>Copyright © 2024 herbert, All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
