import { useState, useRef } from 'react'
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecatsWeather';
import placeholder from './placeholder.json'
import './styles/styles.scss'
//import variables from './styles/variables.module.scss'

export default function App() {
  const [weatherInfo, setWeatherInfo] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(false);
  const searchBar = useRef();

  const selectColorScheme = (data) => {
    const backgroundColors = [
      "002357", // 0
      "033770", // 1
      "01356e", // 2
      "00406c", // 3
      "024270", // 4
      "01628d", // 5
      "046f9b", // 6
      "119ebc", // 7
      "6ecfc8", // 8
      "71d3cb", // 9
      "a8ddbf", // 10
      "e8eb90", // 11
      "fede67", // 12
      "ffca62", // 13
      "fdaf5c", // 14
      "f69f50", // 15
      "f5866b", // 16
      "da6d82", // 17
      "a64e88", // 18
      "6c3384", // 19
      "29156a", // 20
      "1b2763", // 21
      "050d3e", // 22
      "040c3d" // 23
    ]
    const currentTime = Number(data.current.time.substring(0,2));
    document.documentElement.style.setProperty('--clr-backround', `#${backgroundColors[currentTime]}`)
  }

  const handleForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch(`https://weather-app-back-end-0lvz.onrender.com/${searchBar.current.value}`, { mode: 'cors' });
      
      if(response.ok) {
        const data = await response.json();
        selectColorScheme(data);
        setWeatherInfo(data);
      } else {
        console.log("Invalid city search")
      }
      
    } catch(err) {
      console.log(err)
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      <form onSubmit={handleForm} className='search-form'>
        <input
          ref={searchBar}
          type='search'
          placeholder='Katowice'
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

      <footer>
        <a href="https://www.lechocki.com" rel='noopener'>www.lechocki.com</a>
        <p>PSA: If the app isn't working, please try refreshing it a few times, as my back-end instance spins down when inactive. Thanks!</p>
      </footer>

    </>
  )
}
