import React from 'react';

function Event({ event }) {
  return (
      <li class="event">
        <h4 class="ecategory">{event.category}</h4>
        <h3 class="etitle">{event.title}</h3>
        <p class="edate">DATE: {event.date}</p>
        <p class="etime">TIME: {event.time}</p>
        <p class="elocation">LOCATION: {event.location}</p>
    </li>
  );
}

export default Event;