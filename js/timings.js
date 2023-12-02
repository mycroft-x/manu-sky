import { theming } from "./theming.js";
const timeLabel = document.getElementById('time')
const dayLabel = document.getElementById('day')
const forecastdayLabels = Array(document.getElementById('daylabel1'), document.getElementById('daylabel2'),
                                document.getElementById('daylabel3'), document.getElementById('daylabel4'), document.getElementById('daylabel5'))
const searchforecastdayLabels = Array(document.getElementById('searchdaylabel1'), document.getElementById('searchdaylabel2'),
                                document.getElementById('searchdaylabel3'), document.getElementById('searchdaylabel4'), document.getElementById('searchdaylabel5'))
export const currTime = new Date()
export const dawn = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
export const dusk = [18, 19, 20, 21, 22, 23, 1, 2, 3, 4, 5]
export const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export function timeUpdate() {
    const currTime = new Date()

    timeLabel.innerHTML = `${currTime.getHours()}:${n(currTime.getMinutes())}`
    dayLabel.innerHTML = `${daysOfWeek[currTime.getDay()]} `

    theming()
}
for (const i of forecastdayLabels) {
    i.innerHTML = `${daysOfWeek[(currTime.getDay() + forecastdayLabels.indexOf(i) + 1)%7]} `
}
for (const i of searchforecastdayLabels) {
    i.innerText = `${daysOfWeek[(currTime.getDay() + searchforecastdayLabels.indexOf(i) + 1)%7]} `
}
function n(n) {
    return n > 9 ? `${n}` : `0${n}`;
}

