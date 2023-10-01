import React, { useState } from 'react';
import DeleteButton from './DeleteButton';
import ToggleInterest from './ToggleInterest';

function Event({ event, onDelete }) {
  const [isInterested, setIsInterested] = useState(false);

  const toggleInterest = () => {
    setIsInterested(!isInterested);
  };

  return (
    <li className={`event ${isInterested ? 'interested' : ''}`}>
      <h4 className="ecategory">{event.category}</h4>
      <h3 className="etitle">{event.title}</h3>
      <p className="edate">DATE: {event.date}</p>
      <p className="etime">TIME: {event.time}</p>
      <p className="elocation">LOCATION: {event.location}</p>

      <div className="delete-btn">
        <DeleteButton eventId={event._id} onDelete={onDelete} />
      </div>

      <div className="interest-btn">
        <ToggleInterest isInterested={isInterested} onClick={toggleInterest} />
      </div>
    </li>
  );
}

export default Event;
