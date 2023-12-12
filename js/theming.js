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
            homeInfo.style.backgroundColor='rgba(0, 0, 0, 0.1)'
            homeInfo.style.backdropFilter = 'blur(0.6px)'
            homeInfo.style.border = 'solid 0.1px #fff'
            homeForecast.style.backgroundColor='rgba(0, 0, 0, 0.1)'
            homeForecast.style.backdropFilter = 'blur(0.6px)'
            document.querySelector('.cofb').style.color = '#fff'
            document.querySelector('#f-b').style.color = '#fff'
            homeForecast.style.border = 'solid 0.1px #fff'
            // body.style.color = '#fff'
            
        } else{
            content.style.background = "transparent"
            homeForecast.style.color = '#000'
            homeInfo.style.color = '#000'
            body.style.color = '#000'
            document.querySelector('#f-b').style.color = '#000'
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