require('dotenv').config
const axios = require('axios').default


const url = `http://api.weatherstack.com/current?access_key=${API_WEATHERSTACK_KEY}&query=Omaha`

axios({
    method: "GET",
    url: url,
}).then(response => console.log("API RESPONSE", response.data)).catch(error => console.log("Some error happened", error))