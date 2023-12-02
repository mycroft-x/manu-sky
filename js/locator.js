var url = 'https://api.ipdata.co?api-key=4f3b186a99cc82d92bf2ddda3b74db56fa27ec0fb53be7ecea65ef15'

export async function myGeolocator() {
    var iploc = await fetch(url)
    var iplocdata = await iploc.json()
    var lat = iplocdata.latitude
    var lon  = iplocdata.longitude
    console.log(lat, lon);
    return { lat, lon }
}
