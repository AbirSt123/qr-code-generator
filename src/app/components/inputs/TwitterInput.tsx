import React from 'react'
interface TwitterInputProps {
  inputClasses?: string;
  twitValue: string; 
  setTwitValue: (value: string) => void; 
  setIsValidLink: (isValid: boolean) => void;
}
const TwitterInput: React.FC<TwitterInputProps> = ({ inputClasses, twitValue, setTwitValue, setIsValidLink }) => {
  const validateUrl = (url: string) => {
    const urlPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    return urlPattern.test(url);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTwitValue(value);  
    setIsValidLink(validateUrl(value));
  };
  return (
    <div className="px-2 sm:px-0">
            <h1 className="font-inter mb-3 tracking-wider">Twitter link</h1>
      <input type="text" placeholder="Enter twitter Link" className={`${inputClasses}`}
      value={twitValue}
      onChange={handleChange}/>
    </div>
  )
}

export default TwitterInput