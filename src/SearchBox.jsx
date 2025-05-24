import "./SearchBox.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [isError, setIsError] = useState(false);

    const handleInput = (event) => {
        setCity(event.target.value);
    };

    const getWeatherInfo = async (cityName) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
            );
            const jsonResponse = await response.json();

            const result = {
                city: city,
                feelsLike: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                weather: jsonResponse.weather[0].description,
            };

            return result;
        } catch (err) {
            throw err;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let newInfo = await getWeatherInfo(city.trim());
            updateInfo(newInfo);
            setIsError(false);
            setCity(""); // clears input only after success
        } catch (err) {
            setIsError(true);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <div className="TextField">
                    <TextField
                        id="outlined-basic"
                        label="City Name"
                        variant="outlined"
                        onChange={handleInput}
                        value={city}
                        required
                        autoComplete="off"
                    />
                </div>
                <Button
                    variant="contained"
                    type="submit"
                    disabled={city.trim() === ""}
                >
                    SEARCH
                </Button>
                {isError ? (
                    <p
                        style={{
                            fontSize: "1.3rem",
                            color: "red",
                            marginBottom: "2px",
                        }}
                    >
                        No such place exists!
                    </p>
                ) : (
                    ""
                )}
            </form>
        </div>
    );
}
