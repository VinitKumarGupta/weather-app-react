import "./App.css";
import "@fontsource/poppins"; // defaults to 400
import "@fontsource/poppins/600.css"; // weight 600
import WeatherApp from "./WeatherApp";

function App() {
    return (
        <>
            <div className="App">
                <WeatherApp />
            </div>
        </>
    );
}

export default App;
