import React from 'react';

function DeleteButton({ eventId, onDelete }) {
  const deleteEvent = async () => {
    const confirmation = window.confirm("Are you sure you want to delete this event?");

    if (!confirmation) {
      return;
    }

    try {
      const response = await fetch(
        `https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/events/${eventId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        onDelete(eventId);
        console.log("Event deleted successfully!");
      } else {
        console.error("Error deleting event!");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <button onClick={deleteEvent}>DELETE</button>
  );
}

export default DeleteButton;


