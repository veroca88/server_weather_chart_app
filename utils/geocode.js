const axios = require('axios')

const geoCode = (address, callback) => {
    const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidmVyb2NhIiwiYSI6ImNraHV1bjdrcTA0dDQydG8ycDZtbjB4d3QifQ.nawxcghfx7Ce25Qpu3HO1w&limit=1`

    axios.get(geoUrl)
    .catch(error => {
        if(error) {
            console.log('=========error', error)
            callback('Unable to connect to location services!', undefined)
        }})
        .then(response => {
            if (response.data.features[0] === undefined) {
                callback('Unable to find location, try another search!', undefined)
            } else {
                callback(undefined, {
                latitud: response.data.features[0].center[1], 
                longitud: response.data.features[0].center[0],
                location: response.data.features[0].place_name,
                // console.log(`Latitud is ${latitud} and Longitud is ${longitud}`)
                })
            }
        })
}
// geoCode(data, (callback error-data))

module.exports = geoCode