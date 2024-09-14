import React from 'react';
import { QRCode } from 'react-qrcode-logo'; 


interface QRCodePreviewProps {
  value: string;
  color: string;
  backgroundColor: string;
  logo?: File | null;
}

const QRCodePreview: React.FC<QRCodePreviewProps> = ({ value, color, backgroundColor, logo }) => {
  return (
    <div>
      <QRCode
        value={value}
        fgColor={color}
        bgColor={backgroundColor}
        size={256}
      />
      {/* Add logo to QR code if needed */}
    </div>
  );
};

export default QRCodePreview;
