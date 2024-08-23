import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Image from 'next/image'

const ResidenceAct = () => {
  return (
    <div className="relative">
      <div className="container common_padding max-w-[1023px]">
        <div className="row items-center">
          <div className="lg:w-1/2 px-3 max-w-[478px]">
            <Heading blackText="Residence" orangeText=" Act" />
            <Paragraph
              textName="The Aufenthaltsgesetz is the cornerstone of German immigration law. This act governs:"
              className="pt-4"
            />
            <ul className="pt-2 pl-6">
              <li className="text-black-10 list-disc">Entry into Germany</li>
              <li className="text-black-10 list-disc">Residence permits</li>
              <li className="text-black-10 list-disc">
                Employment regulations for foreigners
              </li>
              <li className="text-black-10 list-disc">Integration measures</li>
            </ul>
            <Paragraph
              textName="Herbert utilizes this act to provide precise information on legal residence requirements and pathways to living in Germany."
              className="pt-2"
            />
          </div>
          <div className="lg:w-1/2 px-3 flex justify-end items-end">
            <Image
              src="/assets/images/sources/png/hello-man-img.png"
              alt="hello  man"
              width={392}
              height={457}
            />
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