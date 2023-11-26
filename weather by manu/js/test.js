// console.log(Date());

// d = new Date()
// d.getMonth()
// console.log(d.getMonth());


// const dawn = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
// const dusk = [18, 19, 20, 21, 22, 23, 1, 2, 3, 4, 5]

// console.log(typeof(dusk.includes(d.getHours())))

// if (dusk.includes(d.getHours())) {
//     console.log("Wauo");
// } else {
//     console.log("Nah")
// }


const my_key = '0b5318adcd0a934671f220a27030db44'
const url_forcurrloc = `http://api.openweathermap.org/geo/1.0/direct?q=Port Harcourt,NGA&appid=${my_key}`

// let response = await fetch(url_forcurrloc)
// let commit = await response.json()

// console.log(commit);


// fetch(url_forcurrloc)
//     .then(response => response.json())
//     .then(result => )

// let promise = fetch(url_forcurrloc)
// let commit = promise.then()

// console.log(commit);

// let lol =fetch(url_forcurrloc)
//   .then(response => response.json())
//   .then(result => response.text()) 

// console.log(result);

async function getWeatherInfo(_params) {
    let currloc = await fetch(url_forcurrloc)
    let currlocdata = await currloc.json()
    // console.log(typeof(currlocdata[0].name));
    let mylat = currlocdata[0].lat
    let mylon = currlocdata[0].lon
    const url_forcurrweather = `http://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylon}&appid=${my_key}`
    const myWeather = await fetch(url_forcurrweather)
    const myWeatherdata = await myWeather.json()

    console.log(myWeatherdata.name);
}
getWeatherInfo()
// let userLocation = navigator.geolocation;
// function myGeolocator() {
//     if(userLocation) {
//         userLocation.getCurrentPosition(success);
//     } else {
//         "The geolocation API is not supported by your browser.";
//      }
// }
// function success(data) {
//     let lat = data.coords.latitude;
//     let long = data.coords.longitude;
//     console.log(lat);
// }
























