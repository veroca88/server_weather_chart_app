const { default: Axios } = require("axios");
const { Router } = require("express");
const router = new Router();

const geoCode = require('../utils/geocode')
const weatherCode = require('../utils/weather')


let weatherMessage = ""
router.get('/', (req, res ) => {
    res.render('weather')
})
router.post('/', (req, res) => {
    const { location } = req.body
        geoCode(location, (error, {location} = {}) => {
            if (location === "Undefined" || location === undefined) return console.log('printing error', error)
            if (error) return console.log('printing error', error)
            // weatherCode(longitude, latitude, (error, weatherData) => {
                weatherCode(location, (error, weatherData) => {
                    if (error) return console.log('printing error', error)
                    console.log('++++++++++++++++++inputWeather', weatherData)
                    res.render('weather', {
                        response: weatherData
                    })
                    })
        })
})

router.get('*', (req, res) => {
    res.render('not-found', {
        errorMessage: 'Please fill up the account form'
    })
})


module.exports = router
