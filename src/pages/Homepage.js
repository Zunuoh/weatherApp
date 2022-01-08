import React, { useState } from "react";

const Homepage = () => {
  const ApiKey = "3f5b56339f8fdbdc01e08aed47d34ac9";
  const [weatherDate, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter") {
      fetch(
        `https://api.openweatherapp.org/data/2.5/weather?q=${city}&units=imperial&APID=${ApiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
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
    </div>
  );
};

export default Homepage;
