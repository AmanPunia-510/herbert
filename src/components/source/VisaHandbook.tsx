import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Image from 'next/image'

const VisaHandbook = () => {
  return (
    <>
      <div className='container common_padding'>
        <div className='max-w-[1023px]'>
          <div className='row items-center'>
            <div className='lg:w-1/2 px-3 max-w-[478px]'>
              <Heading blackText='Visa' orangeText=' Handbook' />
              <Paragraph textName='The Visumhandbuch is a comprehensive internal document used by the Federal Foreign Office and German embassies. Spanning approximately 1,000 pages, it provides detailed guidelines on visa issuance. Herberts training on this resource offers: ' className='pt-4' />
              <ul className='pt-2 pl-6'>
                <li className='text-black-10 list-disc'>In-depth insights into visa application assessment</li>
                <li className='text-black-10 list-disc'>Clarification on complex cases and exceptions</li>
                <li className='text-black-10 list-disc'>Nuanced interpretations of immigration laws and regulations</li>
              </ul>
              <Paragraph textName='Herbert utilizes this act to provide precise information on legal residence requirements and pathways to living in Germany.' className='pt-2' />
            </div>
            <div className='lg:w-1/2 px-3 flex justify-end items-end'>
              <Image
                src='/assets/images/sources/png/hello-man-img.png'
                alt='hello  man'
                width={392}
                height={457}
              />
            </div>
          </div>
        </div>
        <div className='p-6 border border-grey-10 rounded-lg mt-16'>
          <Paragraph textName='By basing its knowledge on these official sources, Herbert provides you with accurate, up-to-date, & reliable information on German immigration processes. Our commitment to using these authoritative resources ensures that you receive guidance aligned with current German immigration laws & practices.' />
        </div>
      </div>
    </>
  )
}

export default VisaHandbook