import { myGeolocator } from "./locator.js";
import { timeUpdate } from "./timings.js";
import {  } from "./theming.js";
import { wicons } from "./wicons.js"

const mainTemp = document.getElementById('temp-cont')
const weatherIcon = document.getElementById('weather-icon')
const locationLabel = document.getElementById('location-label')
const conditionLabel = document.getElementById('description-label')
const my_key = '0b5318adcd0a934671f220a27030db44'
const url_forcurrloc = `http://api.openweathermap.org/geo/1.0/direct?q=Port Harcourt,NGA&appid=${my_key}`

myGeolocator()
async function WeatherInfo() {
    const url_forcurrweather = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${my_key}`
    const myWeather = await fetch(url_forcurrweather)
    const myWeatherdata = await myWeather.json()
    const currTemp = myWeatherdata.main.temp
    const currTempC = Math.floor(currTemp - 273.15)
    const currTempF = Math.floor(currTempC * (9/5) -32) 
    const currname = myWeatherdata.name
    const curricon = wicons[myWeatherdata.weather[0].icon]

    locationLabel.innerHTML = `${currname}`
    conditionLabel.innerHTML = `${myWeatherdata.weather[0].description}`
    mainTemp.innerHTML = `${currTempC}`
    weatherIcon.setAttribute("src", `${curricon}`)
}

setInterval(timeUpdate, 1000)
WeatherInfo()







