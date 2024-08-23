import Image from 'next/image'
import React from 'react'

const VisaCode = () => {
  return (
    <div className='bg-orange-30 common_padding'>
      <div className='container'>
        <div className='row'>
          <div className='lg:w-1/2 px-3'>
            <div className='row'>
              <div className='w-1/2 px-3'>
                <div className="bg-white max-w-[248px] w-full h-[188px] flex justify-center items-center rounded-lg">
                  <Image
                    src='/assets/images/sources/png/visa-application-img.png'
                    width={72}
                    height={72}
                    alt='application'
                  />
                  <h4 className='font-medium text-xl leading-6 text-center max-w-[197px] pt-4'>Visa application processes</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisaCode