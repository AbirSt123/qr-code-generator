import React from 'react';
import { QRCode } from 'react-qrcode-logo';

interface QrCodeGeneratorProps {
  value: string;
  backgroundColor: string;
  qrColor: string;
  logo: string | null;
  qrWidth: number;
  isDisabled: boolean;
}

const QrCodeGenerator: React.FC<QrCodeGeneratorProps> = ({
  value,
  backgroundColor,
  qrColor,
  logo,
  qrWidth,
  isDisabled,
}) => {
  return (
    <div style={{ maxWidth: '300px' }}>
      <h2>Generated QR Code</h2>
      {isDisabled ? (
        <div style={{ opacity: 0.3, textAlign: 'center'}}>
          <QRCode
            value={!isDisabled ? value : ''}
            bgColor={backgroundColor}
            fgColor={qrColor}
            size={qrWidth}
            logoImage={logo || undefined}
            logoWidth={Math.floor(qrWidth * 0.25)} 
            removeQrCodeBehindLogo={true} 
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )
        : (
      <div style={{ opacity: 1, textAlign: 'center'}}>
        <QRCode
          value={value}
          bgColor={backgroundColor}
          fgColor={qrColor}
          size={qrWidth}
          logoImage={logo || undefined}
          logoWidth={Math.floor(qrWidth * 0.25)}
              removeQrCodeBehindLogo={true} 
          style={{ maxWidth: '100%', height: 'auto' }}
            />
      </div>
      )}
    </div>
  );
};

export default QrCodeGenerator;