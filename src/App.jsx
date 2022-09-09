import "./App.css";
import { InfoSide, WeatherSide } from "./components";
import { WeatherProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="container">
        <WeatherSide />
        <InfoSide />
      </div>
    </WeatherProvider>
  );
}

export default App;
