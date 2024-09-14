import React, { useState } from 'react'

interface EventInputProps {
  inputClasses?: string;
  setEventValue: (value: string) => void;
  setIsQrEnabled: (isEnabled: boolean) => void;
}
const EventInput: React.FC<EventInputProps> = ({ inputClasses,setEventValue,setIsQrEnabled }) => {
  const [eventTitle, setEventTitle] = useState(''); 
  const [eventLocation, setEventLocation] = useState(''); 
  const [eventStartTime, setEventStartTime] = useState(''); 
  const [eventEndTime, setEventEndTime] = useState('');
  const [eventTitleError, setEventTitleError] = useState('');
  const [eventLocationError, setEventLocationError] = useState('');
  const [eventStartTimeError, setEventStartTimeError] = useState('');
  const [eventEndTimeError, setEventEndTimeError] = useState('');

  const handleSubmit = () => {
    setEventTitleError('')
    setEventLocationError('')
    setEventStartTimeError('')
    setEventEndTimeError('')
    let isValid = true
    if (!eventTitle) {
      setEventTitleError('Please enter an event title')
      isValid=false
    }
    if (!eventLocation) {
      setEventLocationError('Please enter an event location')
      isValid = false
    }
    if (!eventStartTime) {
      setEventStartTimeError('Please enter an event start time')
      isValid = false
    }
    if (!eventEndTime) {
      setEventEndTimeError('Please enter an event end time')
      isValid = false
    }

    if (isValid) {
      const startDate = new Date(eventStartTime).toISOString().replace(/-|:|\.\d{3}/g, "");
      const endDate = new Date(eventEndTime).toISOString().replace(/-|:|\.\d{3}/g, "");
      const eventLink = `BEGIN:VEVENT\nTitle:${encodeURIComponent(eventTitle)}\nLocation:${encodeURIComponent(eventLocation)}\nStartTime:${new Date(eventStartTime).toLocaleString()}\nEndTime:${new Date(eventEndTime).toLocaleString()}\nEND:VEVENT`;
      setEventValue(eventLink);
      setIsQrEnabled(true);
    }
    else {
      setIsQrEnabled(false);
    }
  }
  return (
    <div className=" px-4 sm:px-4  md:px-0">
           <h1 className="font-inter mb-3 tracking-wider">Event Title</h1>
           {eventTitleError && <p className="text-red-500 text-xs mb-2 mt-4">{eventTitleError}</p>}
            <input
              type="text"
              placeholder="Enter Event title"
              className={`${inputClasses} text-base`}
              onChange={(e) => setEventTitle(e.target.value)}
              />
            <div className="flex  flex-col lg:gap-8 lg:flex-row ">
              <div className="flex-grow">
              <h1 className="font-inter mb-3 tracking-wider">Event Location</h1>
              <input
              type="text"
              placeholder="Enter Event location"
              className={`${inputClasses} text-base`}
              onChange={(e) => setEventLocation(e.target.value)}
            
            />
           {eventLocationError && <p className="text-red-500 text-xs mb-2 mt-4">{eventLocationError}</p>}

              </div>
              <div className="flex sm:gap-10 flex-col sm:flex-row lg:gap-8">
              <div className="sm:w-72 md:w-96 lg:w-40">
                <h1 className="font-inter mb-3 tracking-wider">Start Time</h1>
                <input
                type="datetime-local" className={`${inputClasses}`}
                onChange={(e) => setEventStartTime(e.target.value)}
            />
           {eventStartTimeError && <p className="text-red-500 text-xs mb-2 mt-4">{eventStartTimeError}</p>}
              </div>
              <div className="sm:w-72 md:w-96 lg:w-40">
                <h1 className="font-inter mb-3 tracking-wider">End Time</h1>
                <input
                type="datetime-local" className={`${inputClasses}`}
                onChange={(e) => setEventEndTime(e.target.value)}
            />
           {eventEndTimeError && <p className="text-red-500 text-xs mb-2 mt-4">{eventEndTimeError}</p>}
                </div>
                </div>
      </div>
      <button onClick={handleSubmit}>Generate Event QR Code</button>
          </div>
  )
}

export default EventInput