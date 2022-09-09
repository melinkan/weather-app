import { TodayInfo } from "./TodayInfo";
import { WeekInfo } from "./WeekInfo";
import { Location } from "./Location";

export function InfoSide() {
  return (
    <div className="info-side">
      <TodayInfo />
      <WeekInfo />
      <Location />
    </div>
  );
}
