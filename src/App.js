import React from "react";
import "./App.css";
import Events from "./components/Events";

function App() {
    return (
        <div>
            <div className="title">
                <h1> Côte Saint-Luc 2023</h1>
            </div>
            <div className="home-events">
                <Events />
            </div>
        </div>
    );
}

export default App;
