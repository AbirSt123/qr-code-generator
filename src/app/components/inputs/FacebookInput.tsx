import React from 'react'
interface FacebookInputProps {
  inputClasses?: string;
  FaceValue: string; 
  setFaceValue: (value: string) => void; 
  setIsValidLink: (isValid: boolean) => void;
}
const FacebookInput: React.FC<FacebookInputProps> = ({ inputClasses, FaceValue, setFaceValue, setIsValidLink, }) => {
  const validateUrl = (url: string) => {
    const urlPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    return urlPattern.test(url);
  };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFaceValue(value);  
    setIsValidLink(validateUrl(value));
  };
  return (
    <div className="px-2 sm:px-0">
            <h1 className="font-inter mb-3 tracking-wider">Facebook link</h1>
      <input type="text" placeholder="Enter facebook Link" className={`${inputClasses}`}
      value={FaceValue}
      onChange={handleChange}/>
    </div>
  )
}

export default FacebookInput