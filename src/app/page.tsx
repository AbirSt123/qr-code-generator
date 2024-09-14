import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import HomePage from "@/app/components/Home"
import QrCode from "./components/QrCode";
import About from "@/app/components/About"
import Steps from "@/app/components/Steps"
import OnePhrase from "@/app/components/OnePhrase"

export default function Home() {
  return (
    <>
      <HomePage />
      <QrCode />
      <About />
      <Steps />
      <OnePhrase />
    </>
  );
}
