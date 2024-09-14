import React from 'react'
interface YoutubeInputProps {
  inputClasses?: string;
  YtbValue: string; 
  setYtbValue: (value: string) => void; 
  setIsValidLink: (isValid: boolean) => void;
}
const YoutubeInput: React.FC<YoutubeInputProps> = ({ inputClasses, YtbValue, setYtbValue, setIsValidLink }) => {
  const validateUrl = (url: string) => {
    const urlPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    return urlPattern.test(url);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setYtbValue(value);  
    setIsValidLink(validateUrl(value));
  };
  return (
    <div className="px-2 sm:px-0">
            <h1 className="font-inter mb-3 tracking-wider">Youtube link</h1>
      <input type="text" placeholder="Enter youtube Link" className={`${inputClasses}`}
      value={YtbValue}
      onChange={handleChange}/>
    </div>
  )
}

export default YoutubeInput