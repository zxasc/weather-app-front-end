export default function CurrentWeather({ currentWeather }) {
    return(
        <section className="current">
            <h2>{currentWeather.name}, {currentWeather.time}</h2>
            <div className="main-panel">
                <h1>{Math.round(currentWeather.temperature)}&deg;</h1>
                <div className="sub-panel">
                    {currentWeather.rain ?
                        <div>
                            <span>{currentWeather.rain} mm/h</span><img src="/icons/rain.svg" alt="precipitation icon" />
                        </div>
                    : currentWeather.snow ?
                        <div>
                            <span>{currentWeather.snow} mm/h</span><img src="/icons/rain.svg" alt="precipitation icon" />
                        </div>
                    : 
                        <div>
                            <span>0 mm/h</span><img src="/icons/rain.svg" alt="precipitation icon" />
                        </div>
                    }
                    
                    <div>
                        <span>{currentWeather.wind_speed} km/h</span><img src="/icons/wind.svg" alt="wind gust icon" />
                    </div>

                    <div>
                        <span>{currentWeather.pressure} hPa</span><img src="/icons/pressure.svg" alt="pressure icon" />
                    </div>

                    <div>
                        <span>{currentWeather.uvi}</span><img src="/icons/sun.svg" alt="UVI icon" />
                    </div>
                </div>
            </div>
            <h3>{currentWeather.weather.main}</h3>
        </section>
    )
}