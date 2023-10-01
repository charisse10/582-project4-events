import React from 'react';
import DeleteButton from './DeleteButton';

function Event({ event, onDelete }) {
  return (
      <li class="event">
        <h4 class="ecategory">{event.category}</h4>
        <h3 class="etitle">{event.title}</h3>
        <p class="edate">DATE: {event.date}</p>
        <p class="etime">TIME: {event.time}</p>
      <p class="elocation">LOCATION: {event.location}</p>
      
      <div class="delete-btn">
        <DeleteButton eventId={event._id} onDelete={onDelete} />
      </div>
    </li>
  );
}

export default Event;