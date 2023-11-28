import { WeatherInfo } from "./mainWeather.js";
import { wicons } from "./wicons.js";

const forecastdayIcons = Array(
                                document.getElementById('dayicon1'), document.getElementById('dayicon2'),
                                document.getElementById('dayicon3'), document.getElementById('dayicon4'), document.getElementById('dayicon5')
                                )
const forecastminmaxC = Array(
    document.getElementById('minmax1'), document.getElementById('minmax2'),
    document.getElementById('minmax3'), document.getElementById('minmax4'), document.getElementById('minmax5')
    )


export async function weatherForecast() {
    let {forecast_iconcodes, max_minC, max_minF} = await WeatherInfo();
    console.log(forecast_iconcodes);

    let cnt = 0

    for (const i of forecastdayIcons) {
        i.setAttribute("src", `${wicons[forecast_iconcodes[cnt]]}`)
        cnt++
    }
    for (const i of forecastminmaxC) {
        
    }
}