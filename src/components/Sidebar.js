import React, { useContext, useState } from 'react';
import search_icon from 'assets/icons/search.svg';
import { WeatherContext } from 'contexts/weather';

const CITIES = ['Karachi', 'Multan', 'London', 'New York', 'California'];

const Sidebar = () => {
  const [searchCity, setSearchCity] = useState('');
  const [weatherData, changeCity] = useContext(WeatherContext);
  const onCityClick = (e) => {
    changeCity(e.target.innerText);
  };
  const onSearchClick = () => {
    changeCity(searchCity);
  };

  return (
    <div className="nav">
      <div className="search">
        <input
          className="search__input"
          type="text"
          name="location"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder="Another Location"
        />
        <button className="search__button" onClick={onSearchClick}>
          <img className="search__icon" src={search_icon} alt="" />
        </button>
      </div>
      {/* Cities List */}
      <ul className="nav__cities">
        {CITIES.map((city) => (
          <li className="nav__cities-item" onClick={onCityClick} key={city}>
            {city}
          </li>
        ))}
      </ul>
      {/* Weather Details */}
      {weatherData && (
        <div className="details">
          <h4 className="details__heading">Weather Details</h4>
          <ul className="details__list">
            <li className="details__list-item">
              <div>Cloudy</div>
              <div>{weatherData.clouds.all}%</div>
            </li>
            <li className="details__list-item">
              <div>Humidity</div>
              <div>{weatherData.main.humidity}%</div>
            </li>
            <li className="details__list-item">
              <div>Wind</div>
              <div>{weatherData.wind.speed}km/h</div>
            </li>
            <li className="details__list-item">
              <div>Max Temperature</div>
              <div>{weatherData.main.temp_max}&deg;</div>
            </li>
            <li className="details__list-item">
              <div>Min Temperature</div>
              <div>{weatherData.main.temp_min}&deg;</div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
