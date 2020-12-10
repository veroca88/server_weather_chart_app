const { default: Axios } = require("axios");
const { Router } = require("express");
const router = new Router();

const geoCode = require('../utils/geocode')
const weatherCode = require('../utils/weather')


let weatherMessage = ""
router.get('/:location', async (req, res, next) => {
    const weatherDetails = await Axios.get(weatherMessage)
    res.json("====", weatherDetails)
})
router.post('/', (req, res, next) => {
    const { location } = req.body
    // console.log('============= post BACKEND', req.body, "location", location)
        geoCode(location, (error, {latitude, longitude, location} = {}) => {
            if (error) return console.log('printing error', error)
            weatherCode(latitude, longitude, (error, weatherData) => {
                    if (error) return console.log('printing error', error)
                    console.log(location)
                    console.log(weatherData)
                    weatherMessage = weatherMessage
                    res.json(weatherData)
                    })
        })
})

module.exports = router
