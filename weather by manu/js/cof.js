import { currTempC, currTempF, windSpeed } from "./mainWeather.js";
const mainTemp = document.getElementById("temp-cont");
const celsiusBtn = document.getElementById('c-b')
const fahrenheitBtn = document.getElementById('f-b')
const windLabel = document.getElementById("wind")


celsiusBtn.addEventListener('click', () => {
        switchUnits(celsiusBtn, fahrenheitBtn);
    })
fahrenheitBtn.addEventListener('click', () => {
        switchUnits(fahrenheitBtn, celsiusBtn);
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