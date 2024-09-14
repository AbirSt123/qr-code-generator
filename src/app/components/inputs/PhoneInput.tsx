import React, {useState} from 'react';
import useCountryCodes from '../countryCodes/useCountryCodes'; 

interface PhoneInputProps {
  inputClasses?: string;
  setPhoneValue: (value: string) => void;
  setIsQrEnabled: (isEnabled: boolean) => void;

}

const PhoneInput: React.FC<PhoneInputProps> = ({ inputClasses,setPhoneValue,setIsQrEnabled }) => {
  const { countryCode, setCountryCode, countryList } = useCountryCodes();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('')
  const validatePhoneNumber = (phone: string) => {
  const phoneRegex = /^[1-9]\d{0,14}$/; 
  return phoneRegex.test(phone);
};
  const handleSubmit = () => {
    setPhoneError('')
    let isValid = true;
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Please Enter a valid phone number.(must not start with 0, only digits , max 15 digits)');
      isValid = false;
    }
    if (isValid) {
      const phoneLink = `tel:+${countryCode}${phoneNumber}`;
      setPhoneValue(phoneLink);
      setIsQrEnabled(true);
    }
    else {
     setIsQrEnabled(false); 
    }
  }
  return (
    <div className="px-4 sm:px-4 md:px-7 lg:px-0">
      <h1 className="font-inter mb-3 tracking-wider">Phone Call</h1>
        {phoneError && <p className="text-red-500 text-xs mb-2">{phoneError}</p>}
      <div className="flex flex-col sm:flex-row sm:gap-8 w-full">
        <div>
          <h1 className="text-sm text-[#2a354f] font-light mb-2 tracking-wider">Country Code</h1>
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className={`${inputClasses} text-base w-full sm:max-w-48 h-12 cursor-pointer mb-5 !important`}
          >
            {countryList.map(({ name, phone }) => (
              <option key={name} value={phone}>
                {name} ({phone})
              </option>
            ))}
          </select>
        </div>
        <div className="sm:flex-1">
          <h1 className="text-sm text-[#2a354f] font-light mb-2 tracking-wider">Phone number</h1>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            className={`${inputClasses} text-base`}
            onChange = {(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
       <button onClick={handleSubmit}>Generate Phone QR Code</button>

    </div>
  );
};

export default PhoneInput;
