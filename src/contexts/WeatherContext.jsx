import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = (props) => {
  const [city, setCity] = useState({
    id: 6,
    name: "Ankara",
    latitude: "39.9208",
    longitude: "32.8541",
    population: 5270575,
    region: "İç Anadolu",
  });

  const [current, setCurrent] = useState(null);
  const [daily, setDaily] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=hourly,minutely&units=metric&lang=tr&appid=${apiKey}`
    ).then(({ data }) => {
      setDaily(data.daily);
    });
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        current,
        setCurrent,
        daily,
        setDaily,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
