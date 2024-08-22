import Image from 'next/image'
import React from 'react'
import Paragraph from '../common/Paragraph'

const Cards = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='lg:w-1/3 px-3'>
          <div className='border border-grey-10 rounded-lg max-w-[364px] h-[196px] w-full hover:scale-y-105 hover:bg-white hover:border-none hover:shadow-cardShadow ease-linear duration-300'>
            <div className='py-5 px-[75px]'>
              <div className='size-14 rounded-full mx-auto'>
                <Image
                  width={56}
                  height={56}
                  src="/assets/images/home/png/forms-img.png"
                  alt='documents icon'
                />
              </div>
              <h4 className='font-medium text-xl leading-6 text-center text-black-20 pt-4'>Interactive Forms</h4>
              <Paragraph className='pt-3 text-center' textName='Simplify visa application forms' />
            </div>
          </div>
        </div>
        <div className='lg:w-1/3 px-3'>
          <div className='border border-grey-10 rounded-lg max-w-[364px] h-[196px] w-full hover:scale-y-105 hover:bg-white hover:border-none hover:shadow-cardShadow ease-linear duration-300'>
            <div className='py-5 px-[75px]'>
              <div className='size-14 rounded-full mx-auto'>
                <Image
                  width={56}
                  height={56}
                  src="/assets/images/home/png/documents-img.png"
                  alt='documents icon'
                />
              </div>
              <h4 className='font-medium text-xl leading-6 text-center text-black-20 pt-4'>Document Checklist</h4>
              <Paragraph className='pt-3 text-center' textName='Personalized document preparation' />
            </div>
          </div>
        </div>
        <div className='lg:w-1/3 px-3'>
          <div className='border border-grey-10 rounded-lg max-w-[364px] h-[196px] w-full hover:scale-y-105 hover:bg-white hover:border-none hover:shadow-cardShadow ease-linear duration-300'>
            <div className='py-5 px-[75px]'>
              <div className='size-14 rounded-full mx-auto'>
                <Image
                  width={56}
                  height={56}
                  src="/assets/images/home/png/language-img.png"
                  alt='documents icon'
                />
              </div>
              <h4 className='font-medium text-xl leading-6 text-center text-black-20 pt-4'>Language Assistance</h4>
              <Paragraph className='pt-3 text-center' textName='German language skills assessment' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards