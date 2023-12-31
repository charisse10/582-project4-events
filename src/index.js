import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Admin from "./components/Admin";
import Events from "./components/Events";
import Event from "./components/Event";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <App />
        <Footer/>
      </div>
    ),
  },
  {
    path: '/user',
    element: (
      <div>
        <Navbar />
        <User />
        <Footer/>
      </div>
    ),
  },
  {
    path: '/admin',
    element: (
      <div>
        <Navbar />
        <Admin />
        <Footer/>
      </div>
    ),
  },
  {
    path: '/events',
    element: (
      <div>
        <Events/>
      </div>
    ),
    children: [
      {
        path: 'event/:_id',
        element:
          <div>
            <Event />
          </div>
      },
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
