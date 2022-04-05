import React, { useState } from "react";
// import DegreeToggle from "./DegreeToggle";
import {ApiModule} from '../pages/apiModule'
import Spinner from "./Spinner";

const Homepage = (props) => {
  const [weatherData, setWeatherData] = useState([{}]); 
  const [defaultLoaded, setDefaultLoaded] = useState(false);
  const [city, setCity] = useState("");
  // const [degreeType, setDegreeType] = useState("fahrenheit");

  React.useEffect(() => {
    if (!defaultLoaded) {
      ApiModule.getData('Accra')
        .then((data) => {
          setWeatherData(data);
          setCity("");
        })
        .finally(() => setDefaultLoaded(true));
    };
  });

  const getWeather = (event) => {
    if (event.key === "Enter") {
      ApiModule.getData(city)
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    }
  };
  console.log("data", weatherData) 

  // function updateForecastDegree(event){
  //   setDegreeType({
  //     degreeType: event.target.value
  //   })
  //   console.log(setDegreeType)
  // }

  const fahrenheit = Math.round(weatherData.main === undefined ? 0 : weatherData.main.temp );
  const celsius = Math.round((fahrenheit - 32)* 5/9);

  return (
    <div className="container">
    
      <input style={{ fontFamily: 'Montserrat, sans-serif' }}
      type = "search"
      className="input" 
      placeholder="Enter city / country..."
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather} />
    
      

      {weatherData.main === undefined ? (
        <div className="welcomeContainer">
          <Spinner/>
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
