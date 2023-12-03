const url = 'https://api.ipdata.co?api-key=4f3b186a99cc82d92bf2ddda3b74db56fa27ec0fb53be7ecea65ef15'
export async function myGeolocator() {
    const iploc = await fetch(url)
    const iplocdata = await iploc.json()
    const lat = iplocdata.latitude
    const lon  = iplocdata.longitude
    console.log(lat, lon);
    return { lat, lon }
}
