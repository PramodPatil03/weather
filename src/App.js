
import React, { useState } from 'react'

import './App.css'
import axios from 'axios'



import brokenclouds from './Images/brokenclouds.png'
import clearsky from './Images/clearsky.png'
import fewclouds from './Images/fewclouds.png'
import rain from './Images/rain.png'
import scatteredclouds from './Images/scatteredclouds.png'
import showerrain from './Images/showerrain.png'
import sunnyrain from './Images/sunnyrainy.png'
import thunderstorm from './Images/thunderstorm.png'


function App() {
  const [weatherData, setWeatherData] = 
  useState({ name:'', main:{feels_like:0,grnd_level:0,humidity:0,pressure:0,sea_level:0,temp_max:0,temp:0,temp_min:0},weather:[{description:'clear sky'}]});
  const [city, setCity] = useState('bangalore');
  const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const apiKey = "45683c1ceac7301c50c978518d9f1f16";
  const getWeather = () => {
    axios.get(url + city + '&appid=' + apiKey)
      .then((res) => setWeatherData(res.data))
      .catch((e) => console.log(e))
  }


  return (
    <>
      <div className="container">
        <div className="main-container">
          <div className="search-holder">
            <input type="text" name='city' className='font-black' onChange={(e) => { setCity(e.target.value) }} placeholder='banglore' />
            <button className='font-black' onClick={getWeather}>Search</button>
          </div>
          <div className="other-info">
            <div className="image-holder">
              {
                (typeof weatherData.weather[0]) ? (
                  weatherData.weather[0].description === "broken Clouds" ? (
                    <img src={brokenclouds} alt="" />
                  ) : (
                    weatherData.weather[0].description === "clear sky" ?
                      (
                        <img src={clearsky} alt="" />
                      ) : (
                        weatherData.weather[0].description === "few clouds" ?
                          (
                            <img src={fewclouds} alt="" />
                          ) : (
                            weatherData.weather[0].description === "rain" ?
                              (
                                <img src={rain} alt="" />
                              ) : (
                                weatherData.weather[0].description === "scattered clouds" ?
                                  (
                                    <img src={scatteredclouds} alt="" />
                                  ) : (
                                    weatherData.weather[0].description === "shower rain" ?
                                      (
                                        <img src={showerrain} alt="" />
                                      ) : (
                                        weatherData.weather[0].description === "sunny rain" ?
                                          (
                                            <img src={sunnyrain} alt="" />
                                          ) : (
                                            <img src={thunderstorm} alt="" />
                                          )
                                      )
                                  )
                              )
                          )
                      )
                  )
                ) : (
                  <img src={clearsky} alt="" />
                )
              }
            </div>  
              <div className="temprature"> {weatherData.main.temp} <sup>o</sup>C </div>
              <div className="city-name"><p>{weatherData.name}</p></div>
          </div>
          <div>

          </div>
        </div>
        <div className="bottom-container">
          <div className="extra-info-container"><p>{weatherData.main.feels_like}</p><p>Feels Like</p></div>
          <div className="extra-info-container"><p>{weatherData.main.grnd_level}</p><p>Ground Level</p></div>
          <div className="extra-info-container"><p>{weatherData.main.humidity}</p><p>Humidity</p></div>
          <div className="extra-info-container"><p>{weatherData.main.pressure}</p><p>Pressure</p></div>
          <div className="extra-info-container"><p>{weatherData.main.sea_level}</p><p>Sea Level</p></div>
          <div className="extra-info-container"><p>{weatherData.main.temp_max}</p><p>Max Temp.</p></div>
          <div className="extra-info-container"><p>{weatherData.main.temp_min}</p><p>Min Temp.</p></div>
        </div>
      </div>
    </>
  )
}

export default App
