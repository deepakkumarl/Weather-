import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const KEY = "1c8ccc5f13b10aa391b2c927589c285e";
  
  
  const [inp, setInp] = useState("");
  const [data, setData] = useState(null);

 
  const fetchdata = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${KEY}&units=metric`
      );
      setData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log("Error fetching the API", err);
    }
  };

  return (
    <div className="app">
      <div className="heading">
        <h1>Weatherify</h1>
      </div>

      <div className="searchCity">
        <input
          placeholder="Enter your city name"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
      </div>

      <button className="btn" onClick={fetchdata}>Get Weather</button>

    
      {data && (
        <div className="weatherDetails">
          <div className="city">
            <h2>Weather in {data.name}, {data.sys.country}</h2>
          </div>
          <div className="details">
            <div className="detail">
              <p>Temperature: {data.main.temp}°C</p>
              <p>Feels Like: {data.main.feels_like}°C</p>
            </div>
            <div className="detail">
              <p>Weather: {data.weather[0].description}</p>
              <p>Humidity: {data.main.humidity}%</p>
            </div>
            <div className="detail">
              <p>Wind Speed: {data.wind.speed} m/s</p>
              <p>Max Temperature: {data.main.temp_max}°C</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
