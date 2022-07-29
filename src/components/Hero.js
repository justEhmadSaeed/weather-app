import React from 'react';
import cloudy_icon from 'assets/icons/cloudy.svg';

const Hero = () => {
  return (
    <div className="hero">
      <h3 className="hero__title">Weather App</h3>
      <div className="headline">
        <h1 className="headline__temp">
          <span>16</span>&deg;
        </h1>
        <div className="headline__city">
          <h3 className="headline__city-name">London</h3>
          <p className="headline__city-date">06:09 - Mondon, 9 Sep '19</p>
        </div>
        <div className="mood">
          <img className="mood__icon" src={cloudy_icon} alt="" />
          <p className="mood__desc">Cloudy</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
