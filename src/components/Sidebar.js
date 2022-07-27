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
        <li>Karachi</li>
        <li>Lahore</li>
        <li>New York</li>
        <li>California</li>
      </ul>
    </div>
  );
};

export default Sidebar;
