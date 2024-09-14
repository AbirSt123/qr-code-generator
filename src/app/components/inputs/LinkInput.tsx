import React from 'react'
interface LinkInputProps {
  inputClasses?: string;
  linkValue: string; 
  setLinkValue: (value: string) => void; 
  setIsValidLink: (isValid: boolean) => void;
}

const LinkInput: React.FC<LinkInputProps> = ({ inputClasses, linkValue, setLinkValue, setIsValidLink, }) => {
  const validateUrl = (url: string) => {
    const urlPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    return urlPattern.test(url);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLinkValue(value);
    
    setIsValidLink(validateUrl(value));
  };
  return (
    <div className="px-2 sm:px-0">
            <h1 className="font-inter mb-3 tracking-wider">Submit URL</h1>
      <input type="text" placeholder="https://" className={`${inputClasses}`}
      value={linkValue}
      onChange={handleChange} />
    </div>
  )
}

export default LinkInput