import { myGeolocator } from "./locator.js";

import { wicons } from "./wicons.js";
const mainTemp = document.getElementById("temp-cont");
const weatherIcon = document.getElementById("weather-icon");
const locationLabel = document.getElementById("location-label");
const conditionLabel = document.getElementById("description-label");
const pressureLabel = document.getElementById("pressure")
const windLabel = document.getElementById("wind")
const humidityLabel = document.getElementById("humidity")
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const forecastdayIcons = Array(
  document.getElementById('dayicon1'), document.getElementById('dayicon2'),
  document.getElementById('dayicon3'), document.getElementById('dayicon4'), document.getElementById('dayicon5')
)
const forecastminmaxC = Array(
  document.getElementById('minmax1'), document.getElementById('minmax2'),
  document.getElementById('minmax3'), document.getElementById('minmax4'), document.getElementById('minmax5')
)
export const my_key = "0b5318adcd0a934671f220a27030db44";
const url_forcurrloc = `https://api.openweathermap.org/geo/1.0/direct?q=Eliozu,NGA&appid=${my_key}`;
export let currTempC
export let currTempF
export let windSpeed
export function initialCap(str) {
  str = str.split(" ");
  let newWord = ''
  str.forEach(word => {
    word = `${word[0].toUpperCase() + word.slice(1)} `
    newWord += word
  });
  return newWord
}
export async function WeatherInfo() {
  const { lat, lon } = await myGeolocator();
  const currloc = await fetch(url_forcurrloc);
  const currlocdata = await currloc.json();
  const url_forcurrweather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${my_key}`;
  const myWeather = await fetch(url_forcurrweather);
  const myWeatherdata = await myWeather.json();
  const currname = myWeatherdata.name;
  const curricon = wicons[myWeatherdata.weather[0].icon];
  const currTemp = myWeatherdata.main.temp;
  currTempC = Math.floor(currTemp - 273.15);
  currTempF = Math.floor(currTempC * (9 / 5) + 32);
  const url_currforecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${currlocdata[0].lat}&lon=${currlocdata[0].lon}&cnt=40&appid=${my_key}`;
  const forecast = await fetch(url_currforecast);
  const forecastdata = await forecast.json();
  windSpeed = Array(`${(myWeatherdata.wind.speed * 3.6).toFixed(1)} km/h`, `${(myWeatherdata.wind.speed * 2.237).toFixed(1)} mph`)
  const forecast_iconcodes = [];
  const max_minC = [];
  const max_minF = [];
  let cnt = 0;
  for (let i of forecastdata.list) {
    cnt++
    if (cnt % 8 == 0 || cnt == 0) {
      forecast_iconcodes.push(i.weather[0].icon)
      max_minC.push(Array((i.main.temp_max - 273.15), (i.main.temp_min - 273.15)))
      max_minF.push(Array((i.main.temp_max - 273.15) * (9 / 5) + 32, (i.main.temp_min - 273.15) * (9 / 5) + 32))
    }
  }
  locationLabel.innerHTML = `${currname}`;
  conditionLabel.innerHTML = initialCap(myWeatherdata.weather[0].description);
  pressureLabel.innerText = `${myWeatherdata.main.pressure}`;
  humidityLabel.innerText = `${myWeatherdata.main.humidity}`;
  windLabel.innerText = `${windSpeed[0]}`;
  mainTemp.innerHTML = `${currTempC}`;
  weatherIcon.setAttribute("src", `${curricon}`);
  document.getElementById('dayicon0').setAttribute("src", `${curricon}`);
  console.log(windSpeed);
  function weatherForecast() {
    console.log(forecast_iconcodes);
    let cnt = 0
    for (let i of forecastdayIcons) {
      i.setAttribute("src", `${wicons[forecast_iconcodes[cnt]]}`)
      cnt++
    }
    for (let i of forecastminmaxC) {
    }
  }
  weatherForecast()
  return { forecast_iconcodes, max_minC, max_minF, currTempC, currTempF }
}
export async function navsearchWeatherInfo(locName) {
  const currloc = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${locName},NGA&appid=${my_key}`);
  const currlocdata = await currloc.json();
  console.log(currlocdata);
  const url_forcurrweather = `https://api.openweathermap.org/data/2.5/weather?lat=${currlocdata[0].lat}&lon=${currlocdata[0].lon}&appid=${my_key}`;
  const myWeather = await fetch(url_forcurrweather);
  const myWeatherdata = await myWeather.json();
  console.log(myWeatherdata);
  const currname = myWeatherdata.name;
  const curricon = wicons[myWeatherdata.weather[0].icon];
  const currTemp = myWeatherdata.main.temp;
  currTempC = Math.floor(currTemp - 273.15);
  currTempF = Math.floor(currTempC * (9 / 5) + 32);
  const url_currforecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${currlocdata[0].lat}&lon=${currlocdata[0].lon}&cnt=40&appid=${my_key}`;
  const forecast = await fetch(url_currforecast);
  const forecastdata = await forecast.json();
  windSpeed = Array(`${(myWeatherdata.wind.speed * 3.6).toFixed(1)} km/h`, `${(myWeatherdata.wind.speed * 2.237).toFixed(1)} mph`)
  const forecast_iconcodes = [];
  const max_minC = [];
  const max_minF = [];
  let cnt = 0;
  for (let i of forecastdata.list) {
    cnt++
    if (cnt % 8 == 0 || cnt == 0) {
      forecast_iconcodes.push(i.weather[0].icon)
      max_minC.push(Array((i.main.temp_max - 273.15), (i.main.temp_min - 273.15)))
      max_minF.push(Array((i.main.temp_max - 273.15) * (9 / 5) + 32, (i.main.temp_min - 273.15) * (9 / 5) + 32))
    }
  }
  locationLabel.innerHTML = `${currname}`;
  conditionLabel.innerHTML = initialCap(myWeatherdata.weather[0].description);
  pressureLabel.innerText = `${myWeatherdata.main.pressure}`;
  humidityLabel.innerText = `${myWeatherdata.main.humidity}`;
  windLabel.innerText = `${windSpeed[0]}`;
  mainTemp.innerHTML = `${currTempC}`;
  weatherIcon.setAttribute("src", `${curricon}`);
  document.getElementById('dayicon0').setAttribute("src", `${curricon}`);
  console.log(windSpeed);
  function weatherForecast() {
    console.log(forecast_iconcodes);
    let cnt = 0
    for (let i of forecastdayIcons) {
      i.setAttribute("src", `${wicons[forecast_iconcodes[cnt]]}`)
      cnt++
    }
    for (let i of forecastminmaxC) {
    }
  }
  async function getLocalTime() {// Replace with your Geonames username
    const apiUrl = `http://api.geonames.org/timezoneJSON?lat=${currlocdata[0].lat}&lng=${currlocdata[0].lon}&username=mycx`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    const localTime = new Date(data.time);
    // return localTime.getHours();
    document.getElementById('search-day').innerText = `${daysOfWeek[localTime.getDay()]} ${localTime.getHours()}:${localTime.getMinutes()} (Local Time)`

  }
  getLocalTime()
  weatherForecast()
  return { forecast_iconcodes, max_minC, max_minF, currTempC, currTempF }
}
