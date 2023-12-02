import { myGeolocator } from "./locator.js";
import { wicons } from "./wicons.js";

var mainTemp = document.getElementById("temp-cont");
var weatherIcon = document.getElementById("weather-icon");
var locationLabel = document.getElementById("location-label");
var conditionLabel = document.getElementById("description-label");
var pressureLabel = document.getElementById("pressure")
var windLabel = document.getElementById("wind")
var humidityLabel = document.getElementById("humidity")
var forecastdayIcons = Array(
  document.getElementById('dayicon1'), document.getElementById('dayicon2'),
  document.getElementById('dayicon3'), document.getElementById('dayicon4'), document.getElementById('dayicon5')
)
var forecastminmaxC = Array(
  document.getElementById('minmax1'), document.getElementById('minmax2'),
  document.getElementById('minmax3'), document.getElementById('minmax4'), document.getElementById('minmax5')
)


export var my_key = "0b5318adcd0a934671f220a27030db44";
var url_forcurrloc = `https://api.openweathermap.org/geo/1.0/direct?q=Eliozu,NGA&appid=${my_key}`;
export var currTempC
export var currTempF
export var windSpeed

export function initialCap(str) {
  str = str.split(" ");
  var newWord = ''
  str.forEach(word => {
    word = `${word[0].toUpperCase() + word.slice(1)} `
    newWord += word
  });
  return newWord
}


export async function WeatherInfo() {
  var { lat, lon } = await myGeolocator();
  var currloc = await fetch(url_forcurrloc);
  var currlocdata = await currloc.json();
  var url_forcurrweather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${my_key}`;
  var myWeather = await fetch(url_forcurrweather);
  var myWeatherdata = await myWeather.json();
  var currname = myWeatherdata.name;
  var curricon = wicons[myWeatherdata.weather[0].icon];

  var currTemp = myWeatherdata.main.temp;
  currTempC = Math.floor(currTemp - 273.15);
  currTempF = Math.floor(currTempC * (9 / 5) + 32);

  var url_currforecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${currlocdata[0].lat}&lon=${currlocdata[0].lon}&cnt=40&appid=${my_key}`;
  var forecast = await fetch(url_currforecast);
  var forecastdata = await forecast.json();


  windSpeed = Array(`${(myWeatherdata.wind.speed * 3.6).toFixed(1)} km/h`, `${(myWeatherdata.wind.speed * 2.237).toFixed(1)} mph`)
  var forecast_iconcodes = [];
  var max_minC = [];
  var max_minF = [];
  var cnt = 0;

  for (var i of forecastdata.list) {
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

    var cnt = 0

    for (var i of forecastdayIcons) {
      i.setAttribute("src", `${wicons[forecast_iconcodes[cnt]]}`)
      cnt++
    }
    for (var i of forecastminmaxC) {

    }
  }
  weatherForecast()
  return { forecast_iconcodes, max_minC, max_minF, currTempC, currTempF }
}

