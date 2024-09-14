"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { Popover, PopoverButton } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navbarStyle, setNavbarStyle] = useState('mds:bg-light-blue mds:w-full');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleScroll = () => {
        const heroHeight = document.getElementById('Home')!.clientHeight;
        if (window.scrollY > heroHeight) {
            setNavbarStyle(' bg-white drop-shadow-md sticky w-full top-0 z-50 pb-1 pt-1  mds:pb-3 mds:pt-3');
        } else {
            setNavbarStyle('bg-light-blue w-full pb-1 pt-1 mds:pb-3 mds:pt-3');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menulinks = [
        { name: "Home", link: "#Home" },
        { name: "About", link: "#About" },
        { name: "FAQ", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Contact", link: "#" }
    ];

    return (
        <nav className={`${navbarStyle} w-full transition-colors duration-300`}>
            <Popover className='w-full flex justify-between px-10 sm:px-20 pb-5 pt-5 sm:pb-2 sm:pt-2 items-center'>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <Link href="/">
                        <Image src={logo} alt='logo' className='w-8' />
                    </Link>
                    <h1 className='text-xl font-semibold w-52' style={{ fontFamily: 'Aoboshi One, sans-serif' }}>QR Engine</h1>
                </div>
                <div>
                    <ul className='hidden mds:flex gap-14'>
                        {menulinks.map((menu, id) => (
                            <li key={id}>
                                <Link href={menu.link} className=' hover:text-main-orange tracking-wider  font-semibold text-sm' style={{ fontFamily: 'Work Sans, sans-serif' }}>
                                    {menu.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex grow items-center justify-end mds:hidden">
                    <PopoverButton className="popover-button inline-flex items-center justify-center rounded-md  p-2" onClick={toggleMenu}>
                        <span className='sr-only'>Open menu</span>
                        <Bars3Icon className='h-7 w-7' aria-hidden="true" />
                    </PopoverButton>
                </div>
            </Popover>
            {isMenuOpen && (
                <div className='px-10 sm:px-20 pb-2'>
                    <ul className='flex-col mds:hidden'>
                        {menulinks.map((menu, id) => (
                            <li key={id} className='py-2'>
                                <Link href={menu.link} className='font-semibold hover:text-main-orange tracking-wider text-sm' style={{ fontFamily: 'Work Sans, sans-serif' }}>
                                    {menu.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
