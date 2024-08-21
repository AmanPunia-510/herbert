import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'

const Features = () => {
  return (
      <div className='common_padding'>
          <div className="container">
              <Heading textName='Herbert Main' orangeText=' Features' className='text-center' />
              <Paragraph textName='Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed.' className='max-w-[556px] text-center pt-4 mx-auto' />
              
              <div className="row">
                  <div className="w-4/12 px-3">
                  <div className='size-10 rounded-full bg-orange-10 text-white text-base'></div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Features