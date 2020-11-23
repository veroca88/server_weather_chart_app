const axios = require('axios').default

const url = "http://api.weatherstack.com/current?access_key=26ca489b8e9434a01f6f6f99ecd58876&query=Omaha"

axios({
    method: "GET",
    url: url,
}).then(response => console.log("API RESPONSE", response.data)).catch(error => console.log("Some error happened", error))