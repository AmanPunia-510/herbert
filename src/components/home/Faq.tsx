"use client";
import React, { useState, useRef } from "react";
import { ACCORDION_DATA } from "../common/Helper";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import Image from "next/image";

// Define types for accordion data structure
interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionData {
  items: AccordionItem[];
}

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const contentRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());

  const handleToggle = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getHeight = (index: string): string => {
    const ref = contentRefs.current.get(index);
    if (ref) {
      return ref.scrollHeight + "px";
    }
    return "0px";
  };

  return (
    <div className="common_padding pb-0 relative">
      <div className="container relative z-10">
        <Heading
          className="text-center"
          blackText="Frequently Asked"
          orangeText=" Questions"
        />
        <Paragraph
          className="text-center max-w-[622px] mx-auto pt-4 pb-10"
          textName="Help users find quick answers to common queries about Herbert, our AI-powered assistant for German visa and immigration processes. "
        />
        <div className="flex flex-col lg:flex-row lg:gap-6 w-full">
          {ACCORDION_DATA.map((item: AccordionData, outerIndex: number) => (
            <div key={outerIndex} className="lg:max-w-[558px] w-full">
              {item.items.map((i: AccordionItem, index: number) => {
                const computedIndex = `${outerIndex}-${index}`;
                return (
                  <div
                    key={computedIndex}
                    className={`${outerIndex === 0 ? "left" : "right"}`}
                  >
                    <div
                      className={`${
                        openIndex === computedIndex
                          ? "border-transparent shadow-cardShadow"
                          : "border-lightGray"
                      } w-full border bg-white overflow-hidden rounded-md flex mt-3 lg:mt-6 justify-center relative duration-300 ease-linear`}
                    >
                      <div className="accordion w-full">
                        <div
                          role="button"
                          className={`${
                            openIndex === computedIndex
                              ? "pb-2 sm:pb-3 sm:pt-[18px]"
                              : "sm:py-[18px]"
                          } duration-300 ease-linear relative z-[1] flex items-center gap-2 justify-between cursor-pointer p-[14px] sm:px-6`}
                          onClick={() => handleToggle(computedIndex)}
                          aria-expanded={openIndex === computedIndex}
                        >
                          <div className="flex items-start sm:items-center gap-1.5">
                            <h2 className={`text-sm md:text-base`}>
                              {i.title}
                            </h2>
                          </div>
                          <div className="w-[14px] h-[14px] p-1.5 relative overflow-hidden">
                            <span className="flex bg-black-10 w-full h-[3px] absolute left-0 top-1/2 -translate-y-1/2"></span>
                            <span
                              className={`flex w-[3px] h-full bg-black-10 absolute left-1/2 top-0 -translate-x-1/2 duration-300 ease-linear ${
                                openIndex === computedIndex
                                  ? "rotate-90 opacity-0"
                                  : ""
                              }`}
                            ></span>
                          </div>
                        </div>
                        <div
                          ref={(el) => {
                            contentRefs.current.set(computedIndex, el);
                          }}
                          className={`accordion-content overflow-hidden duration-300 ease-linear`}
                          style={{
                            maxHeight:
                              openIndex === computedIndex
                                ? getHeight(computedIndex)
                                : "0px",
                          }}
                        >
                          <div className="flex items-start px-[14px] sm:px-6 pb-[18px] w-full">
                            <p className="text-black-10">{i.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button text="View All" className="mt-12" />
        </div>
      </div>
      <Image
        src="/assets/images/home/png/visa-handbook-bg.png"
        alt="hello man"
        width={1603}
        height={686}
        className="absolute left-0 bottom-[-331px] -z-[1] pointer-events-none"
      />
    </div>
  );
};

export default Faq;
