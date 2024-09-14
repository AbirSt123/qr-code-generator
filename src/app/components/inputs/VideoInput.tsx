import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
interface VideoInputProps {
  videoValue: string; 
  setVideoValue: (value: string) => void; 
  setIsQrEnabled: (isEnabled: boolean) => void;
}
const VideoInput: React.FC<VideoInputProps> = ({ setVideoValue, setIsQrEnabled }) => {
  const [typeError, setTypeError] = useState('')
  const [fileName, setFileName] = useState('')
  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
     const file = e.target.files?.[0];
    if (file) {
      const validVideoTypes = ['video/mp4', 'video/webm', 'video/ogg'];
      if (validVideoTypes.includes(file.type)) {
        const VideoUrl = URL.createObjectURL(file);
        setVideoValue(VideoUrl);
        setIsQrEnabled(true);
        setTypeError("");
        setFileName(file.name);
      } else {
        setIsQrEnabled(false);
        setTypeError("Please upload a valid video file (mp4, webm, or ogg).");
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
              Upload Video
            </label>
      <input id="file-upload" type="file" className="hidden"
      onChange={handleVideoUpload}/>
      </div>
  </div>
  )
}

export default VideoInput