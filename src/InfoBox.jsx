import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import CloudIcon from "@mui/icons-material/Cloud"; // Base
import AcUnitIcon from "@mui/icons-material/AcUnit"; // Snow
import SunnyIcon from "@mui/icons-material/Sunny"; // Hot
import ThunderstormIcon from "@mui/icons-material/Thunderstorm"; // Thunderstorm
import WaterDropIcon from "@mui/icons-material/WaterDrop"; // Rain

export default function InfoBox({ info }) {
    const BASE_URL =
        "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const THUNDER_URL =
        "https://images.unsplash.com/photo-1561471026-0bbb77535d25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const RAIN_URL =
        "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW58ZW58MHx8MHx8fDA%3D";

    const COLD_URL =
        "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const HOT_URL =
        "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let IMG_URL;
    let icon = <CloudIcon />;

    if (info.humidity >= 90) {
        IMG_URL = THUNDER_URL;
        icon = <ThunderstormIcon />;
    } else if (info.humidity > 70) {
        IMG_URL = RAIN_URL;
        icon = <WaterDropIcon />;
    } else if (info.temp > 20) {
        IMG_URL = HOT_URL;
        icon = <SunnyIcon />;
    } else {
        IMG_URL = COLD_URL;
        icon = <AcUnitIcon />;
    }

    if (info.city?.toLowerCase() === "eloria") {
        IMG_URL = BASE_URL;
        icon = <CloudIcon />;
    }

    return (
        <div className="InfoBox">
            <Card
                sx={{ maxWidth: 345 }}
                style={{
                    border: "2px solid rgba(96, 96, 96, 0.77)",
                    borderRadius: "0.6rem",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
                    padding: "0",
                }}
            >
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.city?.toLowerCase() === "eloria"
                            ? BASE_URL
                            : IMG_URL
                    }
                    title="weather image"
                    alt="Weather condition image"
                />
                <CardContent>
                    <div className="cityName">
                        <span>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                style={{
                                    fontFamily: "Poppins",
                                    fontWeight: "600",
                                }}
                            >
                                {info.city}&nbsp;
                            </Typography>
                        </span>
                        <span>{icon}</span>
                    </div>
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                        component="div"
                    >
                        <p>
                            <b>Temperature:</b> {info.temp}&deg;C
                        </p>
                        <p>
                            <b>Min. Temperature:</b> {info.temp_min}&deg;C
                        </p>
                        <p>
                            <b>Max. Temperature:</b> {info.temp_max}&deg;C
                        </p>
                        <p>
                            <b>Humidity:</b> {info.humidity}
                        </p>
                        <p>
                            The weather can be described as{" "}
                            <i>
                                <b>{info.weather}</b>
                            </i>{" "}
                            and feels like <b>{info.feelsLike}</b>&deg;C
                        </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
