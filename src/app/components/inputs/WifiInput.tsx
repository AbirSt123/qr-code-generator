import React,{useState} from 'react'

interface WifiInputProps {
  inputClasses?: string;
  setWifiValue: (value: string) => void;
  setIsQrEnabled: (isEnabled: boolean) => void;
}
const WifiInput: React.FC<WifiInputProps> = ({ inputClasses,setWifiValue,setIsQrEnabled }) => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [encryption, setEncryption] = useState('WPA'); 
  const [ssidError, setSsidError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = () => {
    setSsidError('')
    setPasswordError('')
    let isValid = true
    if (!password) {
      setPasswordError('Please Enter a password.')
      isValid = false
    }
    if (!ssid) {
      setSsidError('Please Enter a network name.')
      isValid = false
    }
    if (isValid) {
      const wifiLink = `WIFI:T:${encryption};S:${ssid};P:${password};${encryption !== 'nopass' ? ';' : ''}`
      setWifiValue(wifiLink)
      setIsQrEnabled(true);
    }
    else {
      setIsQrEnabled(false);
    }

  }

  return (
    <div className=" px-4 sm:px-4 md:px-7 lg:px-0">
            <h1 className="font-inter mb-3 tracking-wider">WI-FI</h1>
          <div className="flex flex-col md:gap-8 md:flex-row w-full">
          <div>
            <h1 className="text-sm text-[#2a354f] font-light mb-2 tracking-wider">Network name</h1>
            <input
              type="text"
              placeholder="SSID"
              className={`${inputClasses} text-base mb-1 !important`}
              value={ssid}
              onChange={(e) => setSsid(e.target.value)}
          />
          {ssidError && <p className="text-red-500 text-xs mb-2 mt-4">{ssidError}</p>}
            </div>
              <div>
            <h1 className="text-sm text-[#2a354f] font-light mb-2 tracking-wider">Network type</h1>
                  <select className={`${inputClasses} text-base w-full sm:min-w-48 h-12 cursor-pointer mb-5 !important`}
                  value={encryption}
                  onChange={(e) => setEncryption(e.target.value)}>
                  <option value="WPA">WPA/WPA2</option>
                  <option value="WEP">WEP</option>
                  <option value="nopass">None</option>
                </select>
            </div>
              <div>
             <h1 className="text-sm text-[#2a354f] font-light mb-2 tracking-wider">Password</h1>
             <input
              type="text"
              placeholder="WI-FI"
              className={`${inputClasses} text-base mb-1 !important`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="text-red-500 text-xs mb-2 mt-4">{passwordError}</p>}
            </div>
      </div>
      <button onClick={handleSubmit}>Generate Wifi QR Code</button>
      
</div>
  )
}

export default WifiInput