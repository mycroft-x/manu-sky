const url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=092d2e0de1a74b5588891afd20b2188a'

export async function myGeolocator() {
    const iploc = await fetch(url)
    const iplocdata = await iploc.json()
    const lat = iplocdata.latitude
    const lon  = iplocdata.longitude
    console.log(lat, lon);
    return { lat, lon }
}
