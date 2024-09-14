import React from 'react';
import Image from 'next/image';
import AboutImg from '../../../public/AboutImg.svg';

const About = () => {
  return (
    <section id='About' className='min-h-screen px-10 sm:px-20 py-16'>
      <div className='max-w-screen-xl mx-auto'>
        <h1 className='text-center tracking-widest text-main-orange font-bold text-4xl pb-8' style={{ fontFamily: 'Work Sans, sans-serif' }}>
          About
        </h1>
        <div className='flex flex-col md:flex-row md:items-center'>
          <div className='md:w-1/2'>
            <Image
              src={AboutImg}
              alt='AboutImage'
              width={500}
            />
          </div>
          <p
            className='sm:leading-7 sm:text-center text-center tracking-wider text-slate-500 md:w-1/2 md:leading-relaxed md:text-base md:text-left lg:text-xl lg:leading-loose'
          >
            Welcome to the Ultimate QR Code Generator! Our platform makes creating QR codes simple, fast, and enjoyable.
            Whether it’s for SMS, emails, or images, you can generate them in just a few clicks with our user-friendly interface.
            Experience the convenience and versatility of our tool today, and take your digital interactions to the next level!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
