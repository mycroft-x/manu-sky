import { theming } from "./theming.js";
// import { isBig } from "./media-sizing.js";
var timeLabel = document.getElementById('time')
var dayLabel = document.getElementById('day')
var forecastdayLabels = Array(document.getElementById('daylabel1'), document.getElementById('daylabel2'),
    document.getElementById('daylabel3'), document.getElementById('daylabel4'), document.getElementById('daylabel5'))
var searchforecastdayLabels = Array(document.getElementById('searchdaylabel1'), document.getElementById('searchdaylabel2'),
    document.getElementById('searchdaylabel3'), document.getElementById('searchdaylabel4'), document.getElementById('searchdaylabel5'))
export var currTime = new Date()
export var dawn = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
export var dusk = [18, 19, 20, 21, 22, 23, 1, 2, 3, 4, 5]
export function isBig() {
    if (window.innerWidth <= 820) {
        return false
    } else {
        return true
    }
}
export var daysOfWeek = (isBig()) ? ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function timeUpdate() {
    var currTime = new Date()
    function isBig() {
        if (window.innerWidth <= 820) {
            return false
        } else {
            return true
        }
    }
    var daysOfWeek = (isBig()) ? ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    timeLabel.innerHTML = `${currTime.getHours()}:${n(currTime.getMinutes())}`
    dayLabel.innerHTML = `${daysOfWeek[currTime.getDay()]} `
    for (var i of forecastdayLabels) {
        i.innerHTML = `${daysOfWeek[(currTime.getDay() + forecastdayLabels.indexOf(i) + 1) % 7]} `
    }
    for (var i of searchforecastdayLabels) {
        i.innerText = `${daysOfWeek[(currTime.getDay() + searchforecastdayLabels.indexOf(i) + 1) % 7]} `
    }
    theming()
}

function n(n) {
    return n > 9 ? `${n}` : `0${n}`;
}

