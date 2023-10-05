import { useState, useRef } from 'react'
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecatsWeather';
import placeholder from './placeholder.json'
import './styles/styles.css'

export default function App() {
  const [weatherInfo, setWeatherInfo] = useState(placeholder);
  const searchBar = useRef();

  const handleSearch = (e) => {
    console.log(searchBar.current.value)
  };

  const handleForm = async (e) => {
    e.preventDefault();

    console.log("lel!")
    try {
      const response = await fetch(`http://localhost:3000/${searchBar.current.value}`, { mode: 'cors' });
      
      if(!response.ok) {
        throw new Error('HAHA!')
      }

      const data = await response.json();
      setWeatherInfo(data);
    } catch(err) {
      console.error(err);
    } finally {
      console.log(weatherInfo)
    }
  };


  return (
    <>
      <form onSubmit={handleForm} className='search-form'>
        <input
          ref={searchBar}
          type='search'
          placeholder='Katowice'
          onChange={handleSearch}
        />
        <button type="submit"><img src="/icons/search.svg" alt="search" /></button>
      </form>

      <CurrentWeather
        currentWeather={weatherInfo.current}
      />

      <ForecastWeather
        title={"Hourly"}
        forecastWeather={weatherInfo.forecast.hourly}
      />
      
      <ForecastWeather
        title={"Daily"}
        forecastWeather={weatherInfo.forecast.daily}
      />

    </>
  )
}