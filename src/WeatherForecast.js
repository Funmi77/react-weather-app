import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
