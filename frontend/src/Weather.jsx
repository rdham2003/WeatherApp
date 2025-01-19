import { useEffect, useState } from "react";

function Weather() {
  const [temp, setTemp] = useState(null);
  const [feels, setFeels] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [weatherID, setWeatherID] = useState(null);
  const [windDir, setWindDir] = useState(null);
  const [windSpd, setWindSpd] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [weatherEmoji, setWeatherEmoji] = useState('');
  const [cardBg, setCardBg] = useState('');

  useEffect(() => {
    const storedWeatherID = localStorage.getItem("code");
    const storedWindDir = localStorage.getItem("wind_dir");

    setTemp(Math.round(((localStorage.getItem("temp") - 273.15) * 9 / 5 + 32)));
    setFeels(Math.round(((localStorage.getItem("feels") - 273.15) * 9 / 5 + 32)));
    setHumidity(localStorage.getItem("humid"));
    setWeatherID(localStorage.getItem("code"));
    setWindSpd(localStorage.getItem("wind_spd"));
    setLocation(localStorage.getItem("location"));
    setWeather(localStorage.getItem("weather"));
    setTimezone(localStorage.getItem("timezone"));

    if (storedWeatherID >= 200 && storedWeatherID < 300) {
      setWeatherEmoji('⛈️');
      setCardBg("linear-gradient(180deg, rgb(79, 78, 77), rgb(138, 177, 227))");
    } else if (storedWeatherID >= 300 && storedWeatherID < 400) {
      setWeatherEmoji('🌧️');
      setCardBg("linear-gradient(180deg, rgb(79, 78, 77), rgb(138, 177, 227))");
    } else if (storedWeatherID >= 500 && storedWeatherID < 600) {
      setWeatherEmoji('🌧️');
      setCardBg("linear-gradient(180deg, rgb(79, 78, 77), rgb(138, 177, 227))");
    } else if (storedWeatherID >= 600 && storedWeatherID < 700) {
      setWeatherEmoji('🌨️');
      setCardBg("linear-gradient(180deg, rgb(79, 78, 77), rgb(255, 255, 255))");
    } else if (storedWeatherID >= 700 && storedWeatherID < 800) {
      setWeatherEmoji('🌫️');
      setCardBg("linear-gradient(180deg, rgb(79, 78, 77), rgb(153, 152, 148))");
    } else if (storedWeatherID >= 801 && storedWeatherID < 900) {
      setWeatherEmoji('☁️');
      setCardBg("linear-gradient(180deg, rgb(102, 101, 98), rgb(222, 221, 217))");
    } else if (storedWeatherID >= 800) {
      setWeatherEmoji('☀️');
      setCardBg("linear-gradient(180deg, rgb(63, 162, 255),rgb(255, 174, 0))");
    } else {
        setCardBg("default-background-style");
    }

    switch(true){
        case(storedWindDir >= 345 || storedWindDir < 15):
            setWindDir("North");
            break;
        case(storedWindDir >= 15 && storedWindDir < 75):
            setWindDir("Northeast");
            break;
        case(storedWindDir >= 75 && storedWindDir < 105):
            setWindDir("East");
            break;
        case(storedWindDir >= 105 && storedWindDir < 165):
            setWindDir("Southeast");
            break;
        case(storedWindDir >= 165 && storedWindDir < 195):
            setWindDir("South");
            break;
        case(storedWindDir >= 195 && storedWindDir < 255):
            setWindDir("Southwest");
            break;
        case(storedWindDir >= 255 && storedWindDir < 285):
            setWindDir("West");
            break;
        case(storedWindDir >= 285 && storedWindDir < 345):
            setWindDir("Northwest");
            break;
      }
  }, []);

  return (
    <div className="weatherCard" style={{ background: cardBg }}>
      <h1 className="weatherCity">{location}</h1>
      <hr />
      <h2 className="temperature">{temp}° F</h2>
      <h2 className="weatherReport">{weather}</h2>
      <h2 className="weatherEmoji">{weatherEmoji}</h2>
      <h2 className="feelsLike">Feels like: {feels}° F</h2>
      <h3 className="humidity">Humidity: {humidity}%</h3>
      <h3 className="windSpeed">Wind Speed: {windSpd} mph</h3>
      <h3 className="windDirection">Wind Direction: {windDir}</h3>
    </div>
  );
}

export default Weather;
