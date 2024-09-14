import React from 'react';

interface QrCodeStylingProps {
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  qrColor: string;
  setQrColor: (color: string) => void;
}

const QrCodeStyling: React.FC<QrCodeStylingProps> = ({
  backgroundColor,
  setBackgroundColor,
  qrColor,
  setQrColor,
}) => {
  return (
    <div>
      <h3>QR Code Styling</h3>
      <label>
        Background Color:
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </label>
      <label>
        QR Code Color:
        <input
          type="color"
          value={qrColor}
          onChange={(e) => setQrColor(e.target.value)}
        />
      </label>
    </div>
  );
};

export default QrCodeStyling;