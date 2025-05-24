import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Eloria",
        feelsLike: 43.02,
        humidity: 44,
        temp: 37.05,
        temp_max: 37.05,
        temp_min: 37.05,
        weather: "haze",
    });

    const updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="WeatherApp">
            <h1>
                Weather App by{" "}
                <a href="https://www.linkedin.com/in/vinitgupta973/">
                    Vinit Gupta
                </a>
            </h1>
            <SearchBox updateInfo={updateWeatherInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
