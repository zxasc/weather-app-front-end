export default function ForecastCard({ forecast, type }) {

    const getIconFileName = (id) => {
        let iconFileName;
        if(id === 800) {
            iconFileName = String(id);
        } else{
            iconFileName = String(id)[0];
        }
        return iconFileName
    }



    return (
        <div className="card">
            <img src={`/condition_icons/${getIconFileName(forecast.weather.id)}.svg`} alt={`weather icon for ${forecast.weather.main}`} className="icon" />
            <h3 className="time">{forecast.hour}{forecast.dow}</h3>
            {(type == "Daily") ? <p className="temperature">{Math.round(forecast.temperature.day)}&deg;</p> : <p className="temperature">{Math.round(forecast.temperature)}&deg;</p>}
            {(type == "Daily") ? <p className="temperature-night">{Math.round(forecast.temperature.night)}&deg;</p> : null}
            {
                forecast.precipitation > 0.00 ?
                <p className="precipitation">{Math.floor(forecast.precipitation * 100)}%</p>
                : null
            }

            {
                forecast.rain ?
                <p className="precipitation amount">{forecast.rain} mm</p>
                : forecast.snow ?
                <p className="precipitation">{forecast.snow} mm</p>
                : null
            }
        </div>
    )
}