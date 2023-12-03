import { currTime, dawn, dusk } from "./timings.js";
const middle = document.getElementById('home-middle')
const content = document.getElementById('content')
export function theming() {
    if (dawn.includes(currTime.getHours()) == true){
        middle.style.background = "url('cloudss.png') no-repeat"
        middle.style.backgroundSize = "cover"
        
    }else if (dusk.includes(currTime.getHours()) == true){
        middle.style.background = "url('night.jpeg')"
        middle.style.backgroundSize = "cover"
        
    }
}