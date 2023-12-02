var url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=092d2e0de1a74b5588891afd20b2188a'

export async function myGeolocator() {
    var iploc = await fetch(url)
    var iplocdata = await iploc.json()
    var lat = iplocdata.latitude
    var lon  = iplocdata.longitude
    console.log(lat, lon);
    return { lat, lon }
}
