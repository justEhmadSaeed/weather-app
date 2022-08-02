import Hero from 'components/Hero';
import 'App.css';
import Sidebar from 'components/Sidebar';
import WeatherProvider from 'contexts/weather';

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Hero />
        <Sidebar />
      </div>
    </WeatherProvider>
  );
}

export default App;
