'use client';
import React, { useState } from "react";
import { QRCode } from 'react-qrcode-logo';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkInput from './inputs/LinkInput';
import EmailInput from './inputs/EmailInput';
import PhoneInput from './inputs/PhoneInput';
import TextInput from './inputs/TextInput';
import SmsInput from './inputs/SmsInput';
import QrCodeStyling from '../components/QrStyling/QrCodeStyling';
import LogoUploader from '../components/QrStyling/LogoUploader';
import {
  faCalendar,
  faCirclePlay,
  faCommentSms,
  faDownload,
  faEnvelope,
  faFilePdf,
  faHeadphones,
  faImage,
  faLink,
  faPhone,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import WhatsappInput from "./inputs/WhatsappInput";
import EventInput from "./inputs/EventInput";
import WifiInput from "./inputs/WifiInput";
import PdfInput from "./inputs/PdfInput";
import ImageInput from "./inputs/ImageInput";
import VideoInput from "./inputs/VideoInput";
import AudioInput from "./inputs/AudioInput";
import FacebookInput from "./inputs/FacebookInput";
import YoutubeInput from "./inputs/YoutubeInput";
import TwitterInput from "./inputs/TwitterInput";
import QRCodeGenerator from '../components/generator/QrCodeGenerator';
import { useEffect } from 'react';
const QrCode = () => {
  const [selectedType, setSelectedType] = useState("");
  const [backgroundColor, setBackgroundColor] = useState<string>("#FFFFFF");
  const [qrColor, setQrColor] = useState<string>("#000000");
  const [logo, setLogo] = useState<string | null>(null);
  const [qrWidth, setQrWidth] = useState<number>(400);
  const [value, setValue] = useState<string>('');
  const [isValidLink, setIsValidLink] = useState<boolean>(true);
  const [isQrEnabled, setIsQrEnabled] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  //QR COde
  /////
  useEffect(() => {
    setValue(''); 
    setIsQrEnabled(false);
    setErrorMessage('');
  }, [selectedType]);
  
  const handleValidation = (isValid: boolean, message?: string) => {
    setIsQrEnabled(isValid);
    setErrorMessage(message || '');
  };
  
  const renderInputs = () => {
    const inputClasses =
      "border-[1.5px] p-3 mb-7 tracking-wider text-gray-400 w-full rounded-md border-none ring-1 ring-gray-200 focus:outline-none focus:ring-1 focus:ring-slate-400 transition-shadow duration-300 ease-in-out ";

    switch (selectedType) {
      case "Link":
        return <LinkInput inputClasses={inputClasses} setLinkValue={setValue} linkValue={value} setIsValidLink={(isValid) => handleValidation(isValid, isValid ? '' : 'Please enter a valid URL.')} />;
      case "Email":
        return <EmailInput inputClasses={inputClasses} setEmailValue={setValue} setIsQrEnabled={setIsQrEnabled} />;
      case "Phone":
        return <PhoneInput inputClasses={inputClasses}  setPhoneValue={setValue} setIsQrEnabled={setIsQrEnabled}/>;
      case "Text":
        return <TextInput inputClasses={inputClasses} setTextValue={setValue} textValue={value} setIsQrEnabled={setIsQrEnabled}/>;
      case "Sms":
        return <SmsInput inputClasses={inputClasses} setSmsValue={setValue} setIsQrEnabled={setIsQrEnabled}/>;
      case "Facebook":
        return <FacebookInput inputClasses={inputClasses} setFaceValue={setValue} FaceValue={value} setIsValidLink={(isValid) => handleValidation(isValid, isValid ? '' : 'Please enter a valid URL.')} />
      case "Youtube":
        return <YoutubeInput inputClasses={inputClasses} setYtbValue={setValue} YtbValue={value} setIsValidLink={(isValid) => handleValidation(isValid, isValid ? '' : 'Please enter a valid URL.')} />
      case "Twitter":
        return <TwitterInput inputClasses={inputClasses} setTwitValue={setValue} twitValue={value} setIsValidLink={(isValid) => handleValidation(isValid, isValid ? '' : 'Please enter a valid URL.')} />
      case "Whatsapp":
        return <WhatsappInput inputClasses={inputClasses} setWhatsValue={setValue} setIsQrEnabled={setIsQrEnabled}  />;
      case "Event":
        return <EventInput inputClasses={inputClasses} setEventValue={setValue} setIsQrEnabled={setIsQrEnabled}  />;
      case "Wifi":
        return <WifiInput inputClasses={inputClasses} setWifiValue={setValue} setIsQrEnabled={setIsQrEnabled} />;
      case "Pdf":
        return <PdfInput setPdfValue={setValue} pdfValue={value} setIsQrEnabled={setIsQrEnabled}/>
      case "Image":
        return <ImageInput setImageValue={setValue} imageValue={value} setIsQrEnabled={setIsQrEnabled}/>
      case "Video":
        return <VideoInput setVideoValue={setValue} videoValue={value} setIsQrEnabled={setIsQrEnabled} />
      case "Audio":
        return <AudioInput setAudioValue={setValue} audioValue={value} setIsQrEnabled={setIsQrEnabled} />
      default:
        return null;
    }
  };
  return (
    <section id="QrCode" className="min-h-screen lg:px-20 md:px-16 px-8 ">
      QrCode
      <div className="flex flex-col lg:flex-row border-solid border-2">
        <div className="flex-grow py-12 sm:px-7 bg-[#F2F6F9] ">
          <div className="grid grid-cols-3 lg:grid-cols-5 border-solid border-2 bg-white">
            {[
              { icon: faLink, label: "Link" },
              { icon: faBars, label: "Text" },
              { icon: faEnvelope, label: "Email" },
              { icon: faPhone, label: "Phone" },
              { icon: faCommentSms, label: "Sms" },
              { icon: faFilePdf, label: "Pdf" },
              { icon: faWhatsapp, label: "Whatsapp" },
              { icon: faFacebook, label: "Facebook" },
              { icon: faYoutube, label: "Youtube" },
              { icon: faXTwitter, label: "Twitter" },
              { icon: faWifi, label: "Wifi" },
              { icon: faImage, label: "Image" },
              { icon: faCirclePlay, label: "Video" },
              { icon: faHeadphones, label: "Audio" },
              { icon: faCalendar, label: "Event" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="py-5 text-center flex justify-center items-center gap-1 hover:text-main-orange
                relative overflow-hidden transition-shadow duration-100 hover:shadow-[0_0_0_2px_#FB8500] cursor-pointer"
                onClick={() => setSelectedType(label)}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="w-4 hover:text-main-orange transition-colors duration-100"
                />
                <span className="text-sm font-inter hover:text-main-orange transition-colors duration-100">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4">{renderInputs()}

            <div>
              <QrCodeStyling
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        qrColor={qrColor}
        setQrColor={setQrColor}
              />
              <LogoUploader logo={logo} setLogo={setLogo} />
            </div>
          </div>
           
        </div>
        <div className="flex-shrink-1 lg:w-1/3 border-solid border-2">
          
          <QRCodeGenerator value={value} backgroundColor={backgroundColor} qrColor={qrColor} logo={logo} qrWidth={qrWidth}
            isDisabled={!isQrEnabled}/>
          {!isQrEnabled && errorMessage && (
            <p className="text-red-500 mt-2">{errorMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default QrCode;
