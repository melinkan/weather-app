import { useWeatherContext } from "../../contexts/WeatherContext";
import cities from "../../turkeyCities.json";

export function Location() {
  const { setCity } = useWeatherContext();

  function handleChange(event) {
    const selectedCity = cities.filter(
      (city) => city.id === Number(event.target.value)
    )[0];
    setCity(selectedCity);
  }

  return (
    <div className="location-container">
      <select
        defaultValue={"6"}
        onChange={handleChange}
        className="location-button"
      >
        {cities.map((city) => {
          return (
            <option value={city.id} key={city.id}>
              {city.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
