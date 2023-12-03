import { currTempC, currTempF, windSpeed } from "./mainWeather.js";
import { searchcurrTempC, searchcurrTempF } from './searchWeather.js';
var mainTemp = document.getElementById("temp-cont");
var celsiusBtn = document.getElementById('c-b')
var fahrenheitBtn = document.getElementById('f-b')
var searchCelsiusBtn = document.getElementById('search-c-b')
var searchFahrenheitBtn = document.getElementById('search-f-b')
var windLabel = document.getElementById("wind")
var searchTemp = document.getElementById('search-temp-cont')
celsiusBtn.addEventListener('click', () => {
        switchUnits(celsiusBtn, fahrenheitBtn);
    })
fahrenheitBtn.addEventListener('click', () => {
        switchUnits(fahrenheitBtn, celsiusBtn);
    })
searchCelsiusBtn.addEventListener('click', () => {
        switchSearchUnits(searchCelsiusBtn, searchFahrenheitBtn);
    })
searchFahrenheitBtn.addEventListener('click', () => {
        switchSearchUnits(searchFahrenheitBtn, searchCelsiusBtn);
    })
async function switchUnits(clickedBtn, otherBtn) {
    clickedBtn.classList.add('active');
    otherBtn.classList.remove('active');
    if (clickedBtn == celsiusBtn) {
        mainTemp.innerText = `${currTempC}`
        windLabel.innerText = `${windSpeed[0]}`

    } else if (clickedBtn == fahrenheitBtn){
        mainTemp.innerText = `${currTempF}`
        windLabel.innerText = `${windSpeed[1]}`
    }
}
async function switchSearchUnits(clickedBtn, otherBtn) {
    clickedBtn.classList.add('active');
    otherBtn.classList.remove('active');
    if (clickedBtn == searchCelsiusBtn) {
        searchTemp.innerText = `${searchcurrTempC}`
    } else if (clickedBtn == searchFahrenheitBtn){
        searchTemp.innerText = `${searchcurrTempF}`
    }
}