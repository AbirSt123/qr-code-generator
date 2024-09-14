import React from "react";
import Image from "next/image";
import HeroImage from "../../../public/heroImage.svg";
import Link from "next/link";
const Home = () => {
  return (
    <section id="Home" className="min-h-screen bg-light-blue px-10 sm:px-20 ">
      <div className="mx-auto flex flex-col mds:flex-row pt-3">
        <div className="mds:w-1/2 mds:text-start mds:pt-16 lg:pt-20 text-center">
          <h1
            className="font-bold tracking-wider text-3xl pb-8 mds:text-5xl"
            style={{ fontFamily: "Work Sans, sans-serif" }}
          >
            <span className="text-main-orange">Effortless</span> QR Code Creation
          </h1>
          <p className='leading-7 text-slate-500 tracking-wider text-lg xxs:pb-10 sm:pb-11 mds:pb-10'>
            Effortlessly create QR codes for SMS, URLs, text, email, and more with our intuitive tool.
            Quickly customize and generate professional QR codes tailored to your needs, making sharing information easier than ever.

          </p>
          <Link href="#QrCode" className="bg-slate-800 hover:bg-slate-900 text-white tracking-wider text-center py-4 px-8 w-52 rounded-md md:my-0 mds:mx-0 sm:my-7 ">
            Create my QR Code
        </Link>
        </div>
        <div className="mds:w-1/2 flex justify-center pt-14 mds:pt-0 lg:pt-0 mds:justify-end mds:pr-9 md:pr-36 sm:pr-28 pr-14">
          <Image className="w-72 md:w-96" src={HeroImage} alt="HeroImg" />
        </div>
      </div>
    </section>
  );
};

export default Home;
