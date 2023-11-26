 const userLocation = navigator.geolocation
 export function myGeolocator(userLocation) {
    if (userLocation) {
        userLocation.getCurrentPosition(success);
    }
}
 export function success(data) {
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
 }