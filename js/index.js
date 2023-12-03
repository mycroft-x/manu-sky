import { timeUpdate } from "./timings.js";
import { WeatherInfo } from "./mainWeather.js";
setInterval(timeUpdate, 1000)
WeatherInfo()