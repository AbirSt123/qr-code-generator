import React from 'react';
import Image from 'next/image';
interface LogoUploadProps {
  logo: string | null;
  setLogo: (logo: string | null) => void;
}

const LogoUploader: React.FC<LogoUploadProps> = ({ logo, setLogo }) => {
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLogo(imageUrl);
    }
  };

  return (
    <div>
      <h3>Upload Logo</h3>
      <input type="file" accept="image/*" onChange={handleLogoUpload} />
      {logo && <Image src={logo} alt="logo preview" width={100} height={100}/>}
    </div>
  );
};

export default LogoUploader;