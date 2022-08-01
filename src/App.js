import { useEffect, useState } from 'react';
import Hero from 'components/Hero';
import 'App.css';
import Sidebar from 'components/Sidebar';
import axios from 'axios';
import WeatherContext from 'contexts/weather';

function App() {
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
      <div className="App">
        <Hero />
        <Sidebar />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
