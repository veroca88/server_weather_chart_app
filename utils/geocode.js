const axios = require('axios')
const key = require('./keys')

const geoCode = (address, callback) => {
    const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${key.geoCode}&limit=1`

    axios.get(geoUrl)
    .catch(error => {
        if(error) {
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


// geoCode('Boston', (error, data) => {
// console.log('error', error)
// console.log('data', data)
// })

module.exports = geoCode