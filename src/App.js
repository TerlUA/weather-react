import React from "react";
import "./App.css";
import "./Weather.css";
import Weather from "./Weather";
import img from "../src/img/sky.jpg";
export default function App() {
  return (
    <div className="App">
      <div className="container" style={{ backgroundImage: `url(${img})` }}>
        <Weather />
      </div>
      <footer>
        <small>
          <a
            href="https://github.com/TerlUA/My_weather_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          , by Olena Terletska
        </small>
      </footer>
    </div>
  );
}
