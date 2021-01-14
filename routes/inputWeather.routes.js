const { default: Axios } = require("axios");
const { Router } = require("express");
const router = new Router();

const geoCode = require('../utils/geocode')
const weatherCode = require('../utils/weather')


let weatherMessage = ""

router.get('/', (req, res ) => {
    res.render('weather')
})

router.get('/weather', (req, res) => {
    let searchedLocation = req.query.address
    geoCode(searchedLocation, (error, {location } = {}) => {
        if (!location) {
            res.render('weather',{
            errorMessage: "You must provide a correct address"
        })
        return 
    }
        if (error) return console.log('printing error', error)
            weatherCode(location, (error, weatherData) => {
                if (error) return res.send('printing error', error)
                res.render('weather', {
                    response: weatherData,
                    location,
                    address: searchedLocation
                })
                })
    })
})

router.post('/', (req, res) => {
    const { location } = req.body
        geoCode(location, (error, {location} = {}) => {
            if (!location) return console.log('printing error', error)
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
