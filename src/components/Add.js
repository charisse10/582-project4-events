import React, { Component } from "react";

class Add extends Component {
    constructor() {
        super();
        this.state = {
            titleInput: "",
            categoryInput: "",
            dateInput: "",
            timeInput: "",
            locationInput: "",
            isSubmitted: false,
            events: [],
        };
    }

    addEvent = async (e) => {
        e.preventDefault();

        const formData = {
            title: this.state.titleInput,
            category: this.state.categoryInput,
            date: this.state.dateInput,
            time: this.state.timeInput,
            location: this.state.locationInput,
        };

        fetch(
            "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/",
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log("Success!", data);
                this.setState({
                    isSubmitted: true,
                    titleInput: "",
                    categoryInput: "",
                    dateInput: "",
                    timeInput: "",
                    locationInput: "",
                });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    render() {
        return (
            <section class="form">
                <div class="container">
                    <h2>Add Event</h2>
                    <form onSubmit={this.addEvent}>
                        <input
                            value={this.state.titleInput}
                            onChange={(e) =>
                                this.setState({ titleInput: e.target.value })
                            }
                            id="etitle"
                            type="text"
                            placeholder="Title"
                            required
                        />
                        <select
                            value={this.state.categoryInput}
                            onChange={(e) =>
                                this.setState({ categoryInput: e.target.value })
                            }
                            id="ecategory"
                            className="placeholder"
                            required
                        >
                            <option value="" disabled hidden>
                                Select Category
                            </option>
                            <option value="On the big screen">
                                On the big screen
                            </option>
                            <option value="We love to read">
                                We love to read
                            </option>
                            <option value="Music to your ears">
                                Music to your ears
                            </option>
                            <option value="Art and Theatre">
                                Art and Theatre
                            </option>
                            <option value="Get moving">Get moving</option>
                            <option value="Celebrate">Celebrate</option>
                        </select>

                        <input
                            value={this.state.dateInput}
                            onChange={(e) =>
                                this.setState({ dateInput: e.target.value })
                            }
                            id="edate"
                            type="date"
                            required
                        />

                        <input
                            value={this.state.timeInput}
                            onChange={(e) =>
                                this.setState({ timeInput: e.target.value })
                            }
                            id="etime"
                            type="time"
                            required
                        />

                        <select
                            value={this.state.locationInput}
                            onChange={(e) =>
                                this.setState({ locationInput: e.target.value })
                            }
                            id="elocation"
                            className="placeholder"
                            required
                        >
                            <option value="" disabled hidden>
                                Select Location
                            </option>
                            <option value="CSL Auditorium">
                                CSL Auditorium
                            </option>
                            <option value="Ashkelon Gardens">
                                Ashkelon Gardens
                            </option>
                            <option value="CSL Library">CSL Library</option>
                            <option value="Trudeau Park">Trudeau Park</option>
                            <option value="Rembrandt Park Amphitheatre">
                                Rembrandt Park Amphitheatre
                            </option>
                            <option value="Fletcher Park">Fletcher Park</option>
                            <option value="Parkhaven Outdoor Pool">
                                Parkhaven Outdoor Pool
                            </option>
                            <option value="Meadowbrook Golf Course"></option>
                        </select>
                        <input
                            id="esubmit"
                            type="submit"
                            value="Submit Event"
                        />
                    </form>
                    {this.state.isSubmitted && (
                        <p class="added">Event added successfully!</p>
                    )}
                </div>
            </section>
        );
    }
}

export default Add;
