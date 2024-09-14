import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
interface PdfInputProps {
  pdfValue: string; 
  setPdfValue: (value: string) => void; 
  setIsQrEnabled: (isEnabled: boolean) => void;
}
const PdfInput: React.FC<PdfInputProps> = ({ pdfValue, setPdfValue, setIsQrEnabled }) => {
  const [typeError, setTypeError] = useState('')
  const [fileName,setFileName] = useState('')
   const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
     const file = e.target.files?.[0];
      if (file) {
      if (file.type === "application/pdf") {
        const pdfUrl = URL.createObjectURL(file);
        setPdfValue(pdfUrl);
        setIsQrEnabled(true);
        setTypeError("");
        setFileName(file.name);
      } else {
        setIsQrEnabled(false);
        setTypeError("Please upload a valid PDF file.");
        setFileName("");
      }
    } else {
        setIsQrEnabled(false);
        setFileName(""); 
    }
  };
  return (
    <div>
    {typeError && <p className="text-red-500 mt-2 text-center">{typeError}</p>}
    {fileName && <p className="mt-2 text-gray-700 text-center">Selected File: {fileName}</p>}
    <div className=" pt-4 flex justify-center">
            <label
              htmlFor="file-upload"
              className="flex items-center cursor-pointer justify-center gap-2  px-11 py-3 bg-slate-500 text-white rounded hover:bg-slate-600"
            >
              <FontAwesomeIcon icon={faDownload} />
              Upload PDF
            </label>
      <input id="file-upload" type="file" className="hidden"
        onChange={handlePdfUpload} />
      </div>
    </div>
  )
}

export default PdfInput