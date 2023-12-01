let long
let lat

 export function myGeolocator() {
    const userLocation = navigator.geolocation;
    return new Promise((resolve, reject) => {
        if (userLocation) {
            userLocation.getCurrentPosition(
                (position) => {
                    lat = position.coords.latitude;
                    long = position.coords.longitude;
                    resolve({ lat, long });
                },
                (error) => {
                    reject(error);
                }
            );
        } else {
            reject(new Error('Geolocation is not supported.'));
        }
    });
}
 export function success(data) {
    lat = data.coords.latitude
    long = data.coords.longitude
    return {lat, long};
 }
