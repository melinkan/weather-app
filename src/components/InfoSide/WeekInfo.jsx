import { useEffect, useState } from "react";
import { useWeatherContext } from "../../contexts/WeatherContext";
import { DayCard } from "../DayCard";

export function WeekInfo() {
  const { daily, setCurrent } = useWeatherContext();
  const [selectedCard, setSelectedCard] = useState(0);

  useEffect(() => {
    setCurrent(daily[selectedCard]);
  }, [daily]);

  return (
    <div className="week-container">
      <ul className="week-list">
        {daily.map((item, index) => {
          if (index < 7)
            return (
              <DayCard
                className={index === selectedCard ? "active" : ""}
                onClick={() => {
                  setSelectedCard(index);
                  setCurrent(item);
                }}
                key={index}
                item={item}
              />
            );
        })}
        <div className="clear"></div>
      </ul>
    </div>
  );
}
