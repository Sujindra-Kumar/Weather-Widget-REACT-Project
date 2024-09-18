import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike: 40.05,
        humidity: 66,
        temp: 33.05,
        tempMax: 33.05,
        tempMin: 33.05,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by SKY</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    );
}