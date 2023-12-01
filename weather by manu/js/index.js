import { timeUpdate } from "./timings.js";
import { WeatherInfo } from "./mainWeather.js";
import { weatherForecast } from "./forecastMainWeather.js";
import cities from './jsonviewer.json' assert {type: 'json'};
const my_key = '0b5318adcd0a934671f220a27030db44'




setInterval(timeUpdate, 1000)
WeatherInfo()
weatherForecast()







