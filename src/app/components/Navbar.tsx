"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.svg'
import { Popover, PopoverButton } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    }
    const menulinks = [
    {
        name: "Home",
        link: "#Home"
    },
    {
        name: "About",
        link: "#About"
    },
    {
        name: "FAQ",
        link: "#"
    },
    {
        name: "Blog",
        link: "#"
    },
    {
        name: "Contact",
        link: "#"
        }
    ]
    return (
    <div className='bg-white drop-shadow-md fixed w-full'>
      <Popover className=' w-full flex justify-between px-20 pb-2 pt-2 md:pb-4 md:pt-4 items-center '>
          <div className='flex  items-center gap-1 cursor-pointer'>
              {/* <Image style={{ objectFit: 'contain' }} src={logo} alt='logo' /> */}
              <Link href="/">
                  <Image src={logo} alt='logo' className='w-8'/>
              </Link>
              <h1 className='text-xl font-semibold  w-60' style={{ fontFamily: 'Aoboshi One, sans-serif' }}>QR Engine</h1>
          </div>
          <div>
              <ul className='hidden md:flex gap-14'>
                  {menulinks.map((menu,id)=>(
                      <li key={id}>
                          <Link href={menu.link} className='font-semibold hover:text-main-orange text-sm' style={{fontFamily: 'Work Sans, sans-serif'}}>
                              {menu.name}
                          </Link>
                    </li>
                  
                  ))}
              </ul>
          </div>
          <div className="flex grow items-center justify-end md:hidden">
              <PopoverButton className="popover-button inline-flex items-center justify-center rounded-md bg-white p-2"
              onClick={toggleMenu}>
                  <span className='sr-only'>Open menu</span>
                  <Bars3Icon className='h-7 w-7' aria-hidden="true" />
              </PopoverButton>
          </div>
            </Popover>
        {isMenuOpen ? (
              <div className='px-20 pb-2'>
          <ul className='flex-col md:hidden '>
                  {menulinks.map((menu,id)=>(
                      <li key={id} className='py-2'>
                          <Link href={menu.link} className='font-semibold hover:text-main-orange text-sm' style={{fontFamily: 'Work Sans, sans-serif'}}>
                              {menu.name}
                          </Link>
                    </li>
                  
                  ))}
                  </ul>
                  </div>
              
          ):null}
    </div>
  )
}

export default Navbar