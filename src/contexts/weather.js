import { createContext, useEffect, useState } from 'react';

import axios from 'axios';

export const WeatherContext = createContext(null);

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState('Lahore');

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
        {
          signal: controller.signal,
        }
      )
      .then((res) => {
        setWeatherData(res.data);
      });
    return () => controller.abort();
  }, [city]);
  return (
    <WeatherContext.Provider value={[weatherData, setCity]}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
