import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
interface AudioInputProps {
  audioValue: string; 
  setAudioValue: (value: string) => void; 
  setIsQrEnabled: (isEnabled: boolean) => void;
}
const AudioInput: React.FC<AudioInputProps> = ({ setAudioValue, setIsQrEnabled }) => {
  const [typeError, setTypeError] = useState('')
  const [fileName, setFileName] = useState('')
  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
     const file = e.target.files?.[0];
    if (file) {
      const validAudioTypes = ['audio/mpeg', 'audio/wav', 'audio/ogg'];
      if (validAudioTypes.includes(file.type)) {
        const VideoUrl = URL.createObjectURL(file);
        setAudioValue(VideoUrl);
        setIsQrEnabled(true);
        setTypeError("");
        setFileName(file.name);
      } else {
        setIsQrEnabled(false);
        setTypeError("Please upload a valid audio file (mp4, webm, or ogg).");
        setFileName("");
      }
    } else {
        setIsQrEnabled(false);
        setFileName(""); 
    }
  };
  return (
  <div>
    {fileName && <p className="mt-2 text-gray-700 text-center">Selected File: {fileName}</p>}
    {typeError && <p className="text-red-500 mt-2 text-center">{typeError}</p>}
    <div className=" pt-4 flex justify-center">
            <label
              htmlFor="file-upload"
              className="flex items-center cursor-pointer justify-center gap-2  px-11 py-3 bg-slate-500 text-white rounded hover:bg-slate-600"
            >
              <FontAwesomeIcon icon={faDownload} />
              Upload audio
            </label>
        <input id="file-upload" type="file" className="hidden"
        onChange={handleAudioUpload}/>
      </div>
  </div>
  )
}

export default AudioInput