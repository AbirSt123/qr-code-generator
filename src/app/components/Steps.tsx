import React from 'react'
import Image from "next/image";
import QR from "../../../public/qr.svg";
import feather from "../../../public/feather.svg";
import download from "../../../public/download.svg";


const Steps = () => {
  return (
    <section className="px-10 sm:px-20">
      <h1 className='text-center mb-12 md:mb-16 tracking-wider text-[#FB8500] font-bold leading-10 text-2xl md:text-3xl'>
          Create your QR code in 3 steps
      </h1>
      <div className='grid gap-12 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='min-h-[200px]  bg-[#EAE1D7] rounded-3xl flex flex-row items-center md:flex-row sm:flex-col gap-2 sm:px-2 sm:py-2 px-2
         transition-transform transform hover:scale-105 ease-in-out duration-300 cursor-pointer'>
          <Image className='w-24' src={QR} alt="QR" />
          <div className=' md:text-left sm:text-center tracking-wide' style={{ fontFamily: "Work Sans, sans-serif" }}>
            <h1><span className='font-bold'>Step 1 :</span> Select</h1>
            <p>Select the <span className='text-[#FB8500] font-semibold'>QR code type</span> : URL, text, image, email, etc</p>

          </div>
        </div>
        <div className='min-h-[200px] bg-[#CEE4E9] rounded-3xl flex flex-row items-center md:flex-row sm:flex-col gap-2 sm:px-2 sm:py-2 px-2
        transition-transform transform hover:scale-105 ease-in-out duration-300 cursor-pointer'>
          <Image className='w-28' src={feather} alt="feather" />
          <div className='md:text-left sm:text-center tracking-wide' style={{ fontFamily: "Work Sans, sans-serif" }}>
            <h1><span className='font-bold'>Step 2 :</span> Customize</h1>
            <p>Customize your <span className='text-[#0B7E9A] font-semibold'>QR code color </span>by choosing whaterver color pleases you</p>
          </div>
        </div>
        <div className='min-h-[200px] sm:mx-auto sm:w-[calc(50%-1.5rem)] sm:col-span-2 lg:w-auto lg:col-auto lg:mx-0 bg-[#DBD0E6] rounded-3xl
        flex flex-row items-center md:flex-row sm:flex-col gap-2 sm:px-2 sm:py-2 px-2
        transition-transform transform hover:scale-105 ease-in-out duration-300 cursor-pointer'>
          <Image className='w-28' src={download} alt="download" />
          <div className='md:text-left sm:text-center tracking-wide' style={{ fontFamily: "Work Sans, sans-serif" }}>
            <h1><span className='font-bold'>Step 3 :</span> Download</h1>
            <p><span className='text-[#4C0A8D] font-semibold'>Download your QR code </span>and use it wherever you want</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Steps