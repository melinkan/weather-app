import dayjs from "dayjs";
import { WEEKDAYS } from "../../constants";

export function DayCard({ item, className, onClick }) {
  const weekdayIndex = dayjs.unix(item.dt).day();

  return (
    <li className={className} onClick={onClick}>
      <img
        className="day-icon"
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
      />
      <span className="day-name">{WEEKDAYS[weekdayIndex].slice(0, 3)}</span>
      <span className="day-temp">{Math.round(item.temp.max)}°C</span>
    </li>
  );
}
