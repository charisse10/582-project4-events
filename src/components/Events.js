import React, { useState, useEffect } from "react";
import Event from "./Event";

function EventList() {
    const [events, setEvents] = useState([]);
    const [uniqueCategories, setUniqueCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await fetch(
                    "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/"
                );
                const data = await response.json();
                setEvents(data);

                const categories = Array.from(
                    new Set(data.map((event) => event.category))
                );

                setUniqueCategories(categories);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        }

        fetchEvents();
    }, []);

    const applyFilter = (selectedCategories) => {
        setSelectedCategories(selectedCategories);
    };

    const filteredEvents =
        selectedCategories.length === 0
            ? events
            : events.filter((event) =>
                  selectedCategories.includes(event.category)
              );

    return (
        <div>
                            <div class="container">

            <div className="events-flex">
            <section class="filter">
                    <h2>Filter by Category</h2>
                    <ul>
                        {uniqueCategories.map((category) => (
                            <li key={category}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={category}
                                        checked={selectedCategories.includes(
                                            category
                                        )}
                                        onChange={(e) => {
                                            const selectedCategory =
                                                e.target.value;
                                            const updatedCategories = [
                                                ...selectedCategories,
                                            ];
                                            if (e.target.checked) {
                                                updatedCategories.push(
                                                    selectedCategory
                                                );
                                            } else {
                                                const index =
                                                    updatedCategories.indexOf(
                                                        selectedCategory
                                                    );
                                                if (index !== -1) {
                                                    updatedCategories.splice(
                                                        index,
                                                        1
                                                    );
                                                }
                                            }
                                            applyFilter(updatedCategories);
                                        }}
                                    />
                                    {category}
                                </label>
                            </li>
                        ))}
                    </ul>
            </section>

            <section class="eventslist">
                    <h2>Events</h2>
                    <ul>
                        {filteredEvents.map((event) => (
                            <Event key={event._id} event={event} />
                        ))}
                    </ul>
            </section>
                </div>
                            </div>

        </div>
    );
}

export default EventList;
