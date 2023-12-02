// // console.log(Date());

// // d = new Date()
// // d.getMonth()
// // console.log(d.getMonth());


// // var dawn = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
// // var dusk = [18, 19, 20, 21, 22, 23, 1, 2, 3, 4, 5]

// // console.log(typeof(dusk.includes(d.getHours())))

// // if (dusk.includes(d.getHours())) {
// //     console.log("Wauo");
// // } else {
// //     console.log("Nah")
// // }


// var my_key = '0b5318adcd0a934671f220a27030db44'
// var url_forcurrloc = `http://api.openweathermap.org/geo/1.0/direct?q=Port Harcourt,NGA&appid=${my_key}`

// // var response = await fetch(url_forcurrloc)
// // var commit = await response.json()

// // console.log(commit);


// // fetch(url_forcurrloc)
// //     .then(response => response.json())
// //     .then(result => )

// // var promise = fetch(url_forcurrloc)
// // var commit = promise.then()

// // console.log(commit);

// // var lol =fetch(url_forcurrloc)
// //   .then(response => response.json())
// //   .then(result => response.text()) 

// // console.log(result);

// async function getWeatherInfo(_params) {
//     var currloc = await fetch(url_forcurrloc)
//     var currlocdata = await currloc.json()
//     // console.log(typeof(currlocdata[0].name));
//     var mylat = currlocdata[0].lat
//     var mylon = currlocdata[0].lon
//     var url_forcurrweather = `http://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylon}&appid=${my_key}`
//     var myWeather = await fetch(url_forcurrweather)
//     var myWeatherdata = await myWeather.json()

//     console.log(myWeatherdata.name);
// }
// getWeatherInfo()
// // var userLocation = navigator.geolocation;
// // function myGeolocator() {
// //     if(userLocation) {
// //         userLocation.getCurrentPosition(success);
// //     } else {
// //         "The geolocation API is not supported by your browser.";
// //      }
// // }
// // function success(data) {
// //     var lat = data.coords.latitude;
// //     var long = data.coords.longitude;
// //     console.log(lat);
// // }


var stingeg = "light rain"



function initialCap(str) {
    str = str.split(" ");
    var newWord = ''
    str.forEach(word => {
        word = `${word[0].toUpperCase() + word.slice(1)} `
        newWord += word
    });
    return newWord
}

console.log(initialCap(stingeg));














