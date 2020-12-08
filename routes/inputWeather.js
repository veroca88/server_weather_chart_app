const { Router } = require("express");
const router = new Router();

const geoCode = require('../utils/geocode')
const weatherCode = require('../utils/weather')



router.get('/', (req, res, next) => {
    res.send('HELLOOOOOOOOOOOOO')
})
router.post('/', (req, res, next) => {
    const { location } = req.body
    // console.log('============= post BACKEND', req.body, "location", location)
    geoCode(location, (error, data) => {
        if (error) return console.log('printing error', error)
        weatherCode(data.latitude, data.longitude, (error, weatherData) => {
                if (error) return console.log('printing error', error)
                // console.log(data.location)
                // console.log(weatherData)
                res.json(weatherData)
                })
    })
    
})

// geoCode('Galapagos', (error, data) => {
//     if (error) return console.log('printing error', error)
// weatherCode(data.latitude, data.longitude, (error, weatherData) => {
//     if (error) return console.log('printing error', error)
//     console.log(data.location)
//     console.log(weatherData)
//     })
// })
module.exports = router