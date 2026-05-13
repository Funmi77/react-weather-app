import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "7e77fbbbab91e5504tfaaa75643of118";
  let longtitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longtitude}&lat=${latitude}}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Wed</div>
          <WeatherIcon code="clear-day" size={32} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">34°</span>
            <span className="WeatherForecast-temperature-min">27°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
