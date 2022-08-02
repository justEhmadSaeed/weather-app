import React, { useContext } from 'react';
import { WeatherContext } from 'contexts/weather';

const Hero = () => {
  const [weatherData] = useContext(WeatherContext);
  const date = new Date();
  return (
    <div className="hero">
      <h3 className="hero__title">Weather App</h3>
      {weatherData && (
        <div className="headline">
          <h1 className="headline__temp">
            <span>{weatherData.main.temp.toFixed()}</span>&deg;
          </h1>
          <div className="headline__city">
            <h3 className="headline__city-name">{weatherData.name}</h3>
            <p className="headline__city-date">{date.toDateString()}</p>
          </div>
          <div className="mood">
            <img
              className="mood__icon"
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
              alt="weather icon"
            />
            <p className="mood__desc">{weatherData.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
