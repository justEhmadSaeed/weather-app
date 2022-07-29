import React, { useContext } from 'react';
import WeatherContext from 'contexts/weather';

const Hero = () => {
  const [[todayWeather], cityName] = useContext(WeatherContext);
  const date = new Date();
  return (
    <div className="hero">
      <h3 className="hero__title">Weather App</h3>
      <div className="headline">
        <h1 className="headline__temp">
          <span>{todayWeather?.main.temp.toFixed()}</span>&deg;
        </h1>
        <div className="headline__city">
          <h3 className="headline__city-name">{cityName}</h3>
          <p className="headline__city-date">{date.toDateString()}</p>
        </div>
        <div className="mood">
          <img
            className="mood__icon"
            src={`http://openweathermap.org/img/wn/${todayWeather?.weather[0].icon}@4x.png`}
            alt="weather icon"
          />
          <p className="mood__desc">{todayWeather?.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
