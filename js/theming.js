import { currTime, dawn, dusk, isBig } from "./timings.js";
const middle = document.getElementById('home-middle')
const content = document.getElementById('content')
export function theming(params) {
    if (dawn.includes(currTime.getHours())== true){
        middle.style.background = "url('cloudss.png') no-repeat"
        middle.style.backgroundSize = "cover"
        if(!isBig){
            content.style.backgroundImage = "url('cloudss.png') no-repeat"
        } 
    }else if (dusk.includes(currTime.getHours()) == true){
        middle.style.background = "url('night.jpeg')"
        middle.style.backgroundSize = "cover"
        if(!isBig){
            content.style.background = "url('night.jpeg')"
        } 
    }
}