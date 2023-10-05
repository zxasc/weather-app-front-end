import ForecastCard from "./ForecastCard"

export default function ForecastWeather({ forecastWeather, title }) {
    return(
        <section className="forecast">
            <h4>{title}</h4>
            <div className="cards-wrapper">
                {forecastWeather.map((unit) => <ForecastCard key={unit} forecast={unit} type={title}/>)}
            </div>
        </section>
    )
}