import { navsearchWeatherInfo } from "./mainWeather.js"

const mainnavSearchBar = document.getElementById('nav-searchbar')
const navSearchBtn = document.getElementById('nav-search-icon')
const navSearchBar = document.getElementById('alt-nav-searchbar')
const navSearchAlt = document.getElementById('expand-search')
const navSearchX = document.getElementById('x-ns')

navSearchBtn.addEventListener('click', function () {
    navSearchBtn.style.display = 'none'
    navSearchAlt.style.display = 'flex'
})

navSearchBar.addEventListener('input', function () {
    navSearchX.style.display = this.value.length > 0 ? 'block' : 'none';
    mainnavSearchBar.value = navSearchBar.value
});

navSearchX.addEventListener('click', function () {
    navSearchBar.value = '';
    mainnavSearchBar.value = navSearchBar.value
    navSearchBtn.style.display = 'flex'
    navSearchAlt.style.display = 'none'
    navSearchX.style.display = 'none';
});
mainnavSearchBar.addEventListener('keydown', (event) => handleEnterKey(event))
navSearchBar.addEventListener('keydown', (event) => handleEnterKey(event))
function handleEnterKey(event) {
    if (event.key == 'Enter') {
        navsearchWeatherInfo(navSearchBar.value)
    }
}


mainnavSearchBar.addEventListener('input', function () {
    // navSearchX.style.display = this.value.length > 0 ? 'block' : 'none';
    navSearchBar.value = mainnavSearchBar.value
});