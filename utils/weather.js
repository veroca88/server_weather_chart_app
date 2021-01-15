require('dotenv').config()
const axios =  require('axios')
const weatherCode = async (location, callback) => { 
    const key = process.env.API_WEATHERSTACK_KEY
    const url = `http://api.weatherstack.com/current?access_key=${key}&query=${location}&units=f`

    await axios.get(url)
    .catch(error => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        }})
        .then(response => {
            console.log('Response from weather.js', response.data)
           response.data.success === 'false' || !response.data ? 
           callback('Unable to find location, try another search!', undefined) :
           callback(undefined, `Today in ${response.data.location.name}, ${response.data.location.country}, is a ${response.data.current.weather_descriptions} day, the temperature is ${response.data.current.temperature} and it feels like ${response.data.current.feelslike}`)
        })
        
    }

    module.exports = weatherCode