"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  return (
    <nav>
      <div className='container'>
        <div className='flex items-center justify-between py-6'>
          <a href="/">
            <Image
              src='/assets/images/home/png/logo-img.png'
              width={180}
              height={54}
              alt="header logo"
            />
          </a>
          <div
            className="lg:hidden z-20 relative size-6 h-full right-0 cursor-pointer"
            onClick={() => setNav(!nav)}
          >
            {nav ? (
              <Image
                src='/assets/images/home/png/simple-menubar-img.png'
                width={24}
                height={24}
                alt="simple menubar"
              />
            ) : (
              <Image
                src='/assets/images/home/png/menubar-cross-img.png'
                width={24}
                height={24}
                alt="close menubar"
              />
            )}
          </div>
          <ul
            className={`flex items-center gap-11 max-lg:fixed top-0 max-lg:bg-white max-lg:flex-col max-lg:w-full max-lg:h-full max-lg:items-center max-lg:justify-center ease-linear duration-300 ${nav ? '-right-[100%]' : 'right-0'}`}
          >
            <li>
              <a href="" className="text-black-10">Herbert</a>
            </li>
            <li className="w-[327px] bg-black-10 mt-6 lg:hidden h-[1px] opacity-20"></li>
            <li>
              <a href="" className="text-black-10">Sources</a>
            </li>
            <li className="w-[327px] bg-black-10 mt-6 lg:hidden h-[1px] opacity-20"></li>
            <li>
              <a href="" className="text-black-10">Our Vision</a>
            </li>
            <Button text="Start your conversation with Herbert" className="lg:hidden" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
