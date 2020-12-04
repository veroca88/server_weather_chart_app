require('dotenv').config()
const axios =  require('axios')
const key = require('./keys')

const weatherCode = (latitude, longitude, callback) => { 
    const url = `http://api.weatherstack.com/current?access_key=${key.weather.key}&query=${latitude},${longitude}&units=f`

    axios.get(url)
    .catch(error => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        }})
        .then(response => {
           response === undefined ? 
           callback('Unable to find location, try another search!', undefined) :
           typeof(latitude) !== "number" || typeof(longitude) !== "number" ?
           callback('Please enter coordinates, latitude and longitude!') :
           callback(undefined, `Today we have ${response.data.current.weather_descriptions}, the temperature is ${response.data.current.temperature} and it feels like ${response.data.current.feelslike}`)
        })
    }

    module.exports = weatherCode