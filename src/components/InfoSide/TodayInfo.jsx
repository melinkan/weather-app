import { useWeatherContext } from "../../contexts/WeatherContext";

export function TodayInfo() {
  const { current } = useWeatherContext();

  const uvLevel = (uvIndex) => {
    if (uvIndex <= 2) return "Low";
    if (uvIndex <= 5) return "Medium";
    if (uvIndex <= 7) return "High";
    if (uvIndex > 7) return "Very High";
  };

  if (!current) return null;
  return (
    <div className="today-info-container">
      <div className="today-info">
        <div className="precipitation">
          <span className="title">UV Index</span>
          <span className="value">
            {Math.round(current.uvi)} ({uvLevel(Math.round(current.uvi))})
          </span>
        </div>
        <div className="humidity">
          <span className="title">HUMIDITY</span>
          <span className="value">{current.humidity} %</span>
        </div>
        <div className="wind">
          <span className="title">WIND</span>
          <span className="value">{Math.round(current.wind_speed)} km/h</span>
        </div>
      </div>
    </div>
  );
}
