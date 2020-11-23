require('dotenv').config()
const axios = require('axios').default

const url = `http://api.weatherstack.com/current?access_key=${process.env.API_WEATHERSTACK_KEY}&query=Omaha&units=f`
// const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/LosAngeles.json&access_token=${process.env.API_MAPBOX}`
const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/omaha.json?access_token=pk.eyJ1IjoidmVyb2NhIiwiYSI6ImNraHV1bjdrcTA0dDQydG8ycDZtbjB4d3QifQ.nawxcghfx7Ce25Qpu3HO1w&limit=1"

axios({
    method: "GET",
    url: url,
})
// axios.get(url).then(response => 
//     console.log(`Welcome to ${response.data.location.name}, today we have ${response.data.current.weather_descriptions}, 
//     the temperature is ${response.data.current.temperature} and it feels like ${response.data.current.feelslike}`))
//     .catch(error => console.log("Some error happened", error))

axios.get(geoUrl).then(response => {
    let latitud = 0
    let longitud = 0
    response.data.features[0] === undefined ? console.log('ERROR') :
    (latitud = response.data.features[0].center[1], //latitud comes from the second item in the array
    longitud = response.data.features[0].center[0],
    console.log(`Latitud is ${latitud} and Longitud is ${longitud}`))
}).catch(error => console.log(error))
