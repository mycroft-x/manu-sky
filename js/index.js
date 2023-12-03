import { timeUpdate } from "./timings.js";
import { WeatherInfo } from "./mainWeather.js";
setInterval(timeUpdate, 500)
WeatherInfo()