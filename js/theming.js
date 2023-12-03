import { currTime, dawn, dusk } from "./timings.js";
const middle = document.getElementById('home-middle')
const content = document.getElementById('background-small')
const body = document.getElementById('body')
const homeForecast = document.getElementById('home-forecast')
const homeInfo = document.getElementById('home-info')
const navBar = document.getElementById('nav-bar')
export function theming(isBig) {
    if (dawn.includes(currTime.getHours()) == true){
        middle.style.background = "url('cloudss.png') no-repeat"
        middle.style.backgroundSize = "cover"
        if (isBig) {
            content.style.background = "url('cloudss.png') no-repeat"
            content.style.backgroundSize = "cover"
            navBar.style.width = '100%'
        } else{
            content.style.background = "transparent"
            navBar.style.width = 'calc(max-content + 15px)'
        }
        
    }else if (dusk.includes(currTime.getHours()) == true){
        middle.style.background = "url('night.jpeg')"
        middle.style.backgroundSize = "cover"
        if (isBig) {
            content.style.background = "url('night.jpeg') no-repeat"
            content.style.backgroundSize = "cover"
            homeForecast.style.color = '#fff'
            homeInfo.style.color = '#fff'
            body.style.color = '#fff'
            navBar.style.width = '100%'
            
        } else{
            content.style.background = "transparent"
            homeForecast.style.color = '#000'
            homeInfo.style.color = '#000'
            body.style.color = '#000'
            navBar.style.width = 'calc(max-content + 15px)'
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