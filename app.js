require('dotenv').config()
const axios = require('axios').default

const url = `http://api.weatherstack.com/current?access_key=${process.env.API_WEATHERSTACK_KEY}&query=Omaha`

axios({
    method: "GET",
    url: url,
}).then(response => console.log(`Welcome to ${response.data.location.name}, the temperature is ${response.data.current.temperature} and it feels like ${response.data.current.feelslike}`)).catch(error => console.log("Some error happened", error))