import React from 'react'
import Paragraph from '../common/Paragraph'
import Button from '../common/Button'
import Image from 'next/image'

const HomeHero = () => {
  return (
    <div className='bg-heroSection bg-no-repeat bg-cover bg-center min-h-[90vh] flex flex-col'>
      <div className='flex flex-grow flex-col items-center justify-center container relative'>
        <h1 className='mx-auto max-w-[716px] font-rubik font-semibold text-black-20 text-custom_2xl text-center'>Navigating <span className='text-orange-20'> German Bureaucracy</span> with ease</h1>
        <Paragraph textName='Herbert Visa: Your AI-powered assistant for German visa and immigration processes' className='pt-4' />
        <Button text='Start your conversation with Herbert' className='mt-10' />
        <div className='absolute left-0 top-50'>
          <Image
            src='/assets/images/home/png/header-hello-man.png'
            width={329}
            height={592}
            alt='hello man'
          />
        </div>
        <div className='absolute right-0 top-50'>
          <Image
            src='/assets/images/home/png/home-hero-right-side-man-img.png'
            width={329}
            height={592}
            alt='hello man'
          />
        </div>
      </div>
    </div>
  )
}

export default HomeHero