import Image from "next/image"
import Paragraph from "./Paragraph"
import { FOOTER_LINKS } from "./Helper"

const Footer = () => {
  return (
    <>
      <div className='container'>
        <div className='row justify-between'>
          <div className='lg:w-5/12 px-3'>
            <Image
              src='/assets/images/home/png/logo-img.png'
              width={326}
              height={98}
              alt="logo" />
            <Paragraph textName="Lorem ipsum dolor sit amet consectetur. Fusce tortor etiam vitae velit mi sed mattis tempor tristique. Purus sed phasellus metus lectus auctor." className="pt-4 max-w-[412px]" />
          </div>
          <div className="lg:w-6/12 px-3">
            <div className="row">
              {FOOTER_LINKS.map((val, idx) => (
                <div key={idx} className="md:w-1/3 px-3">
                  <h4 className="font-medium text-black-20 leading-5 pb-2 opacity-90">{val.title}</h4>
                  <ul>
                    {val.links.map((link, index) => (
                      <li key={index} className="pt-2 text-black-10 leading-6">
                        <a href="/">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="md:1/3 px-3">
                <p className="font-medium text-black-20 opacity-90">Follow Us</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer