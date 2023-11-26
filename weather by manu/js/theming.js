import { currTime, dawn, dusk } from "./timings.js";
const middle = document.getElementById('home-middle')

export function theming(params) {
    if (dawn.includes(currTime.getHours())== true){
        middle.style.background = "url('/img/images/cloudss.jpg') no-repeat"
        middle.style.backgroundSize = "cover"
    }else if (dusk.includes(currTime.getHours()) == true){
        middle.style.background = "url('/img/images/night.jpg')"
        middle.style.backgroundSize = "cover"
    }  
}