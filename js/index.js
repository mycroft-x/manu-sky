import { timeUpdate } from "./timings.js";
import { WeatherInfo } from "./mainWeather.js";
import cities from '../jsonviewer.json' assert {type: 'json'};


setInterval(timeUpdate, 1000)
WeatherInfo()







