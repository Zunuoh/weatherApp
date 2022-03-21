import React, { useState } from "react";
import cloud from '../images/cloud.png'
// import DegreeToggle from "./DegreeToggle";

const Homepage = (props) => {
  const ApiKey = "3f5b56339f8fdbdc01e08aed47d34ac9";
  const [weatherData, setWeatherData] = useState([{}]); 
  const [defaultLoaded, setDefaultLoaded] = useState(false);
  const [city, setCity] = useState("");
  const [degreeType, setDegreeType] = useState("fahrenheit");

  React.useEffect(() => {
    if (!defaultLoaded) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Accra&units=imperial&APPID=${ApiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        })
        .finally(() => setDefaultLoaded(true));
    };
  });

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${ApiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    }
  };

  function updateForecastDegree(event){
    setDegreeType({
      degreeType: event.target.value
    })
    console.log(setDegreeType)
  }

  const fahrenheit = Math.round(weatherData.main === undefined ? 0 : weatherData.main.temp );
  const celsius = Math.round((fahrenheit - 32)* 5/9);

  return (
    <div className="container">
      <input style={{ fontFamily: 'Montserrat, sans-serif' }}
      type = "search"
      className="input" 
      placeholder="Enter city..."
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather} />

      {weatherData.main === undefined ? (
        <div className="welcomeContainer">
          <p>Welcome to weather app! Enter in a city in the field above to get its weather.</p>
        </div>
      ) : (
        <div className="weather-data">
          <p className="city">{weatherData.name}</p>
          <div className="temp">
            {/* <div>
             <DegreeToggle updateForecastDegree={updateForecastDegree} degreeType={degreeType}/>
            </div> */}
            <div className="unitContainer">
            {Math.round(weatherData.main.temp)}ºF / {Math.round(celsius)}&deg;C
            {/* {degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F" } */}
            </div>
          </div>
          <div>
            {/* <img src={cloud} alt=""/> */}
          </div>
          <p className="weather">{weatherData.weather[0].main}</p>
          <p></p>
        </div>
      )}

      {
        weatherData.cod ==='404' ? (
          <p className='errorTemp'>Sorry, city not found</p>
        ) : (
          <p></p>
        )
      }





    </div>

    
  );
};

export default Homepage;
