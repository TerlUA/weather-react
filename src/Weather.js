import React, { useState } from "react";
import axios from "axios";
export default function Weather(props) {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setMessage(
      <div className="Answer">
        <h1>{city}</h1>
        <p>
          <ul>
            <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
            <li>Wind: {response.data.wind.speed}</li>
            <li>Humidity: {response.data.main.humidity}</li>
            <li>Description: {response.data.weather[0].description}</li>
            <li>
              <img
                src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                alt={response.data.weather[0].description}
              />
            </li>
          </ul>
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a city" onChange={updateCity} />
        <button type="Submit">Search</button>
      </form>
      {message}
    </div>
  );
}
function showCity(event) {
  event.preventDefault();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb1dadc72f9080990228b362254cade2&units=metric`;
  axios.get(apiUrl).then(displayData);
}

function changeCity(event) {
  setCity(event.target.value);
}
