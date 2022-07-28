import React from 'react';
import search_icon from 'assets/icons/search.svg';

const Sidebar = () => {
  return (
    <div className="nav">
      <div className="search">
        <input
          className="search__input"
          type="text"
          name="location"
          id=""
          placeholder="Another Location"
        />
        <button className="search__button">
          <img className="search__icon" src={search_icon} alt="" />
        </button>
      </div>
      {/* Cities List */}
      <ul className="nav__cities">
        <li className="nav__cities-item">Karachi</li>
        <li className="nav__cities-item">Lahore</li>
        <li className="nav__cities-item">New York</li>
        <li className="nav__cities-item">California</li>
      </ul>
      {/* Weather Details */}
      <div className="details">
        <h4 className="details__heading">Weather Details</h4>
        <ul className="details__list">
          <li className="details__list-item">
            <div>Cloudy</div>
            <div>86%</div>
          </li>
          <li className="details__list-item">
            <div>Humidity</div>
            <div>62%</div>
          </li>
          <li className="details__list-item">
            <div>Wind</div>
            <div>8km/h</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
