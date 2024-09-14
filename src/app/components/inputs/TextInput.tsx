import React from 'react'

interface TextInputProps {
  inputClasses?: string;
  textValue: string;
  setTextValue: (value: string) => void;
  setIsQrEnabled: (isEnabled: boolean) => void;
}

const TextInput: React.FC<TextInputProps> = ({ inputClasses, textValue, setTextValue,setIsQrEnabled }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextValue(value);
    setIsQrEnabled(true);
    console.log(value)
  };
  return (
    <div className="px-2 sm:px-0">
            <h1 className="font-inter mb-3 tracking-wider">Text</h1>
            <textarea
            placeholder="Enter your text here"
        className={inputClasses}
        value={textValue}
        onChange={handleChange}
          />
    </div>
  )
}

export default TextInput