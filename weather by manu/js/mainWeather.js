import { myGeolocator } from "./locator.js";
import { wicons } from "./wicons.js";

const mainTemp = document.getElementById("temp-cont");
const weatherIcon = document.getElementById("weather-icon");
const locationLabel = document.getElementById("location-label");
const conditionLabel = document.getElementById("description-label");
const pressureLabel = document.getElementById("pressure")
const windLabel = document.getElementById("wind")
const humidityLabel = document.getElementById("humidity")

const my_key = "0b5318adcd0a934671f220a27030db44";
const url_forcurrloc = `http://api.openweathermap.org/geo/1.0/direct?q=Eliozu,NGA&appid=${my_key}`;
export let currTempC
export let currTempF
export let windSpeed

export async function WeatherInfo() {
  const { lat, long } = await myGeolocator();
  const currloc = await fetch(url_forcurrloc);
  const currlocdata = await currloc.json();
  const url_forcurrweather = `http://api.openweathermap.org/data/2.5/weather?lat=${currlocdata[0].lat}&lon=${currlocdata[0].lon}&appid=${my_key}`;
  const myWeather = await fetch(url_forcurrweather);
  const myWeatherdata = await myWeather.json();
  const currname = myWeatherdata.name;
  const curricon = wicons[myWeatherdata.weather[0].icon];

  const currTemp = myWeatherdata.main.temp;
  currTempC = Math.floor(currTemp - 273.15);
  currTempF = Math.floor(currTempC * (9/5) + 32);

  const url_currforecast = `http://api.openweathermap.org/data/2.5/forecast?lat=${currlocdata[0].lat}&lon=${currlocdata[0].lon}&cnt=40&appid=${my_key}`;
  const forecast = await fetch(url_currforecast);
  const forecastdata = await forecast.json();


  windSpeed = Array(`${(myWeatherdata.wind.speed * 3.6).toFixed(1)} km/h`, `${(myWeatherdata.wind.speed * 2.237).toFixed(1)} mph`)
  let forecast_iconcodes = [];
  let max_minC = [];
  let max_minF = [];
  let cnt = 0;

  for (const i of forecastdata.list) {
    cnt++
    if (cnt % 8 == 0 || cnt == 0) {
      forecast_iconcodes.push(i.weather[0].icon)
      max_minC.push(Array((i.main.temp_max - 273.15), (i.main.temp_min - 273.15)))
      max_minF.push(Array((i.main.temp_max - 273.15) * (9 / 5) + 32, (i.main.temp_min - 273.15) * (9 / 5) + 32))
    }
  }

  locationLabel.innerHTML = `${currname}`;
  conditionLabel.innerHTML = `${myWeatherdata.weather[0].description}`;
  pressureLabel.innerText = `${myWeatherdata.main.pressure}`;
  humidityLabel.innerText = `${myWeatherdata.main.humidity}`;
  windLabel.innerText = `${windSpeed[0]}`;
  mainTemp.innerHTML = `${currTempC}`;
  weatherIcon.setAttribute("src", `${curricon}`);
  document.getElementById('dayicon0').setAttribute("src", `${curricon}`);
  console.log(windSpeed);
  return { forecast_iconcodes, max_minC, max_minF, currTempC, currTempF }
}

