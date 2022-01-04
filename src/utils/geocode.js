const request = require('request')

const geocode = (address, callback) => {
    const url='http://api.weatherstack.com/current?access_key=19a30f237807024a06749d0ec0f938e2&query='+address;
       request({ url, json: true }, (error,{body}={}) => {
        console.log(body)
        if (error) {
            callback(error.info, undefined)
        }
        else if (body.error) {
            callback("Unable To find Location", undefined)
        } else {
            callback(undefined, {
                latitude: body.location.lat,
                longitude: body.location.lon,
                location: body.location.name + ', '+ body.location.region+ ", "+body.location.country
            })
        }
    })
}

module.exports = geocode