import React, { useState } from 'react';

interface EmailInputProps {
  inputClasses?: string;
  setEmailValue: (value: string) => void;
  setIsQrEnabled: (isEnabled: boolean) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({
  inputClasses,
  setEmailValue,
  setIsQrEnabled,
}) => {
  
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [bodyError, setBodyError] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

 const handleSubmit = () => {
  setEmailError('');
  setSubjectError('');
  setBodyError('');
   let isValid = true;
   if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    if (!subject) {
      setSubjectError('Subject is required.');
      isValid = false;
    }

    if (!body) {
      setBodyError('Message is required.');
      isValid = false;
    }
  
  if (isValid) {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEmailValue(mailtoLink);
    setIsQrEnabled(true);
    console.log("Generated mailto link:", mailtoLink);
  } else {
    setIsQrEnabled(false); 
  }
};


  return (
    <div className="px-2 sm:px-0">
      <h1 className="font-inter mb-3 tracking-wider">E-mail Content</h1>
      {emailError && <p className="text-red-500 text-xs mb-2">{emailError}</p>}
      <input
        type="email"
        placeholder="Recipient"
        className={inputClasses}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {subjectError && <p className="text-red-500 text-xs mb-2">{subjectError}</p>}
      <input
        type="text"
        placeholder="Subject"
        className={inputClasses}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      {bodyError && <p className="text-red-500 text-xs mb-2">{bodyError}</p>}
      <textarea
        placeholder="Message"
        className={inputClasses}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleSubmit}>Generate Email QR Code</button>
    </div>
  );
};

export default EmailInput;