import { useWeatherContext } from "../../contexts/WeatherContext";
import { HiOutlineLocationMarker } from "react-icons/hi";
import dayjs from "dayjs";
import { WEEKDAYS } from "../../constants";

export function WeatherSide() {
  const { city, current } = useWeatherContext();

  if (!current) return <div>Loading...</div>;

  const weekdayIndex = dayjs.unix(current.dt).day();

  return (
    <div className="weather-side">
      <div className="date-container">
        <h2 className="date-dayname">{WEEKDAYS[weekdayIndex]}</h2>
        <span className="date-day">
          {dayjs.unix(current.dt).format("DD MMM YYYY")}
        </span>
        <span>
          <HiOutlineLocationMarker color="white" className="location-icon" />
        </span>
        <span className="location">{city.name}</span>
      </div>
      <div className="weather-container">
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
        />
        <h1 className="weather-temp">{Math.round(current.temp.max)}°C</h1>
        <h3 className="weather-desc">{current.weather[0].main}</h3>
      </div>
    </div>
  );
}
