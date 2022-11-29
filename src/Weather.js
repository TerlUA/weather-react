import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
export default function Weather(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "cb1dadc72f9080990228b362254cade2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control"
            autoFocus="on"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h1 className="text-capitalize">{city}</h1>
        <h2>
          <FormattedDate date={weather.date} />
        </h2>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
        </ul>

        <div className="float-left">
          <div>
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
