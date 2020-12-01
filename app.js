const geoCode = require('./utils/geocode')
const weatherCode = require('./utils/weather')


geoCode('Boston', (error, data) => {
console.log('error', error)
console.log('data', data)
})

weatherCode(-0.2298, 78.5249, (error, data) => {
    console.log('error', error)
    console.log('data', data)
    })