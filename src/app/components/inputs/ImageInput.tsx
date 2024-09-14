import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
interface ImageInputProps {
  imageValue: string; 
  setImageValue: (value: string) => void; 
  setIsQrEnabled: (isEnabled: boolean) => void;
}
const ImageInput: React.FC<ImageInputProps> = ({ setImageValue, setIsQrEnabled }) => {
  const [typeError, setTypeError] = useState('')
  const [fileName, setFileName] = useState('')
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
     const file = e.target.files?.[0];
    if (file) {
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (validImageTypes.includes(file.type)) {
        const imageUrl = URL.createObjectURL(file);
        setImageValue(imageUrl);
        setIsQrEnabled(true);
        setTypeError("");
        setFileName(file.name);
      } else {
        setIsQrEnabled(false);
        setTypeError("Please upload a valid image(format: jpeg/png/gif).");
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
              Upload image
            </label>
      <input id="file-upload" type="file" className="hidden"
        onChange={handleImageUpload} />
      </div>
    </div>
  )
}

export default ImageInput