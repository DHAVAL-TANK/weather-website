const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=19a30f237807024a06749d0ec0f938e2&query=' + latitude + ',' + longitude+'&units=m&hourly=1'
    request({ url, json: true }, (error, { body}={}) => {
        console.log(error)
        if (error) {
            callback(error.info, undefined,undefined)
        } 
        else {
            callback(undefined, ' It is currently ' + body.current.temperature + ' degress out. Weather will be '+body.current.weather_descriptions +". | \n Wind Speed : "+ body.current.wind_speed+ " (Km/h) ",body.current.weather_icons);
        }
    })
}

module.exports = forecast