import { wicons } from "./wicons.js";
import { my_key, initialCap } from "./mainWeather.js";
import { daysOfWeek } from "./timings.js";
const search = document.getElementById("search");
const searchbar = document.getElementById("search-bar");
const searchWeatherIcon = document.getElementById("search-weather-icon");
const searchTemp = document.getElementById('search-temp-cont')
const searchInfo = document.getElementById("search-info");
const searchMainFrame = document.getElementById("search-main-frame");
const searchLocLabel = document.getElementById("search-location-label");
const searchDescLabel = document.getElementById("search-desc-label");
const searchTimeLabel = document.getElementById("search-time-label");
const searchforecastdayIcons = Array(
    document.getElementById('searchdayicon1'), document.getElementById('searchdayicon2'),
    document.getElementById('searchdayicon3'), document.getElementById('searchdayicon4'), document.getElementById('searchdayicon5')
)
const searchForecast = document.getElementById("search-forecast");
const searchDayLabels = document.getElementById("search-day-labels");
function n(n) {
    return n > 9 ? `${n}` : `0${n}`;
}
export var searchcurrTempC
export var searchcurrTempF
export async function searchWeatherInfo(searchVal) {
    const url_forsearchloc = `https://api.openweathermap.org/geo/1.0/direct?q=${searchVal},NGA&appid=${my_key}`;
    const searchloc = await fetch(url_forsearchloc);
    const searchlocdata = await searchloc.json();
    const url_forsearchweather = `https://api.openweathermap.org/data/2.5/weather?lat=${searchlocdata[0].lat}&lon=${searchlocdata[0].lon}&appid=${my_key}`;
    const searchWeather = await fetch(url_forsearchweather);
    const searchWeatherdata = await searchWeather.json();
    const searchname = searchWeatherdata.name;
    const searchicon = wicons[searchWeatherdata.weather[0].icon];
    const searchShiftInSecs = searchWeatherdata.timezone;
    console.log(searchShiftInSecs);
    const searchcurrTemp = searchWeatherdata.main.temp;
    searchcurrTempC = Math.floor(searchcurrTemp - 273.15);
    searchcurrTempF = Math.floor(searchcurrTempC * (9 / 5) + 32);
    const url_searchforecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${searchlocdata[0].lat}&lon=${searchlocdata[0].lon}&cnt=40&appid=${my_key}`;
    const searchforecast = await fetch(url_searchforecast);
    const searchforecastdata = await searchforecast.json();
    const searchforecast_iconcodes = []
    if (searchforecastdata) {
        console.log(searchforecastdata);
        searchInfo.style.display = "flex";
        search.style.height = "calc(5/7 * 100%)";
        search.style.justifyContent = "space-evenly";
        searchbar.style.height = "7.5%";
        searchLocLabel.innerText = `${searchname}`;
        searchTemp.innerText = `${searchcurrTempC}`
        searchWeatherIcon.setAttribute("src", searchicon);
        searchDescLabel.innerText = initialCap(searchWeatherdata.weather[0].description);
        function getSearchTime() {
            const shiftedTimestamp = new Date((Date.now() - 3600000) + searchShiftInSecs * 1000);
            searchTimeLabel.innerText = `${daysOfWeek[shiftedTimestamp.getDay()]}  ${n(shiftedTimestamp.getHours())}:${n(shiftedTimestamp.getMinutes())}`
        }
        getSearchTime()
        setInterval(getSearchTime, 1000);
        let cnt = 0
        for (let i of searchforecastdata.list) {
            cnt++
            if (cnt % 8 == 0 || cnt == 0) {
                searchforecast_iconcodes.push(i.weather[0].icon)
            }
        }
    }
    async function searchweatherForecast() {
        let cnt = 0
        for (let i of searchforecastdayIcons) {
            i.setAttribute("src", `${wicons[searchforecast_iconcodes[cnt]]}`)
            cnt++
        }
    }
    function getLocalTime(lat, long) {
        const utcDate = new Date();
        const timeZoneOffset = new Date().getTimezoneOffset() / 60;
        const localTime = new Date(utcDate.getTime() + timeZoneOffset * 60 * 60 * 1000);
        const options = {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false,
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        const localTimeString = localTime.toLocaleString(undefined, options);
        return localTimeString;
    }
    document.getElementById('searchdayicon0').setAttribute("src", `${searchicon}`);
    searchweatherForecast()
    return { searchcurrTempC, searchcurrTempF }
}
