import React, { useState } from "react";

const Homepage = () => {
  const ApiKey = "3f5b56339f8fdbdc01e08aed47d34ac9";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        // `https://api.openweatherapp.org/data/2.5/weather?q=${city}&units=imperial&APID=${ApiKey}`
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${ApiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    }
  };

  return (
    <div className="container">
      <input 
      className="input" 
      placeholder="Enter city..."
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather} />

      {typeof weatherData === 'undefined' ? (
        <div>
          <p>Welcome to weather app! Enter in a city to get the weather of.</p>
        </div>
      ) : (
        <div>
          <p>{weatherData.name}</p>
          {/* <p>{Math.round(weatherData.main.temp)}ºF</p> */}
          {/* <p>{weatherData.weather[0].main}</p> */}
          <p></p>
        </div>
      )}





    </div>

    
  );
};

export default Homepage;
