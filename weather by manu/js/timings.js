import { theming } from "./theming.js";

const timeLabel = document.getElementById('time')
const dayLabel = document.getElementById('day')
export const currTime = new Date
export const dawn = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
export const dusk = [18, 19, 20, 21, 22, 23, 1, 2, 3, 4, 5]
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export function timeUpdate() {
    timeLabel.innerHTML = `${currTime.getHours()}:${n(currTime.getMinutes())}`
    dayLabel.innerHTML = `${daysOfWeek[currTime.getDay()]} `
    theming()
}
function n(n){
    return n > 9 ? `${n}`: `0${n}`;
}