import { wicons } from "./wicons.js";
import { my_key, initialCap } from "./mainWeather.js";
import { daysOfWeek } from "./timings.js";
var search = document.getElementById("search");
var searchbar = document.getElementById("search-bar");
// var dropdown = document.getElementById('searchDropdown')
var searchWeatherIcon = document.getElementById("search-weather-icon");
var searchTemp = document.getElementById('search-temp-cont')
var searchInfo = document.getElementById("search-info");
var searchMainFrame = document.getElementById("search-main-frame");
var searchLocLabel = document.getElementById("search-location-label");
var searchDescLabel = document.getElementById("search-desc-label");
var searchTimeLabel = document.getElementById("search-time-label");
var searchforecastdayIcons = Array(
    document.getElementById('searchdayicon1'), document.getElementById('searchdayicon2'),
    document.getElementById('searchdayicon3'), document.getElementById('searchdayicon4'), document.getElementById('searchdayicon5')
)
var searchForecast = document.getElementById("search-forecast");
var searchDayLabels = document.getElementById("search-day-labels");
export var searchcurrTempC
export var searchcurrTempF

export async function searchWeatherInfo(searchVal) {
    var url_forsearchloc = `https://api.openweathermap.org/geo/1.0/direct?q=${searchVal},NGA&appid=${my_key}`;
    var searchloc = await fetch(url_forsearchloc);
    var searchlocdata = await searchloc.json();

    var url_forsearchweather = `https://api.openweathermap.org/data/2.5/weather?lat=${searchlocdata[0].lat}&lon=${searchlocdata[0].lon}&appid=${my_key}`;
    var searchWeather = await fetch(url_forsearchweather);
    var searchWeatherdata = await searchWeather.json();
    var searchname = searchWeatherdata.name;
    var searchicon = wicons[searchWeatherdata.weather[0].icon];
    var searchShiftInSecs = searchWeatherdata.timezone;
    console.log(searchShiftInSecs);
    var searchcurrTemp = searchWeatherdata.main.temp;
    searchcurrTempC = Math.floor(searchcurrTemp - 273.15);
    searchcurrTempF = Math.floor(searchcurrTempC * (9 / 5) + 32);

    var url_searchforecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${searchlocdata[0].lat}&lon=${searchlocdata[0].lon}&cnt=40&appid=${my_key}`;
    var searchforecast = await fetch(url_searchforecast);
    var searchforecastdata = await searchforecast.json();
    var searchforecast_iconcodes = []
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
            var shiftedTimestamp = new Date((Date.now() - 3600000) + searchShiftInSecs * 1000);
            searchTimeLabel.innerText = `${daysOfWeek[shiftedTimestamp.getDay()]}  ${shiftedTimestamp.getHours()}:${shiftedTimestamp.getMinutes()}`
        }
        getSearchTime()
        setInterval(getSearchTime, 1000);
        var cnt = 0
        for (var i of searchforecastdata.list) {
            cnt++
            if (cnt % 8 == 0 || cnt == 0) {
                searchforecast_iconcodes.push(i.weather[0].icon)
            }
        }


    }
    async function searchweatherForecast() {
        var cnt = 0
        for (var i of searchforecastdayIcons) {
            i.setAttribute("src", `${wicons[searchforecast_iconcodes[cnt]]}`)
            cnt++
        }
    }
    document.getElementById('searchdayicon0').setAttribute("src", `${searchicon}`);
    searchweatherForecast()
    return { searchcurrTempC, searchcurrTempF }
}
