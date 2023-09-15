import React from 'react';

function Event({ event }) {
  return (
      <li className="event">
        <h4 className="ecategory">{event.category}</h4>
        <h3 className="etitle">{event.title}</h3>
        <p className="edate">DATE: {event.date}</p>
        <p className="etime">TIME: {event.time}</p>
        <p className="elocation">LOCATION: {event.location}</p>
    </li>
  );
}

export default Event;
