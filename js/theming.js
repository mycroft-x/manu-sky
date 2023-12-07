import { currTime, dawn, dusk } from "./timings.js";
const middle = document.getElementById('home-middle')
const content = document.getElementById('background-small')
const body = document.getElementById('body')
const homeForecast = document.getElementById('home-forecast')
const homeInfo = document.getElementById('home-info')
const navBar = document.getElementById('nav-bar')
export function theming(isBig) {
    if (dawn.includes(currTime.getHours()) == true){
        middle.style.background = "url('/images/cloudss.png') no-repeat"
        middle.style.backgroundSize = "cover"
        if (isBig) {
            content.style.background = "url('/images/cloudss.png') no-repeat"
            content.style.backgroundSize = "cover"
        } else{
            content.style.background = "transparent"
        }
        
    }else if (dusk.includes(currTime.getHours()) == true){
        middle.style.background = "url('/images/night.jpeg')"
        middle.style.backgroundSize = "cover"
        if (isBig) {
            content.style.background = "url('/images/night.jpeg') no-repeat"
            content.style.backgroundSize = "cover"
            homeForecast.style.color = '#fff'
            homeInfo.style.color = '#fff'
            // body.style.color = '#fff'
            
        } else{
            content.style.background = "transparent"
            homeForecast.style.color = '#000'
            homeInfo.style.color = '#000'
            body.style.color = '#000'
            console.log("Falseeeee");
        }
    }
}

// #cof > button,
//         #search-cof>button {
//             background-color: transparent;
//             color: #dfdfdf;
//         }

//         #cof>button:hover,
//         #search-cof>button:hover {
//             background-color: transparent;
//             color: #fff;
//         }

//         #cof>.active,
//         #search-cof>.active {
//             background-color: transparent;
//             color: #fff;
//         }