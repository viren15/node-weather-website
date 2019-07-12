const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/69a80dad35502b3f9d59e30578961ce4/' + latitude + ',' + longitude 

    request({ url, json: true }, (error, {body}) => { // shorthand on url :)
        if (error) {
            callback('Unable to connect to weather service')
        } else if (body.error) {
            callback(' Invalid search for location. Try another Search')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out.' + 'Highest and Lowest temperature today are ' + body.daily.data[0].temperatureHigh + ' degrees and ' + body.daily.data[0].temperatureLow + ' degrees respectively! There is a ' + body.currently.precipProbability + ' % chace of rain.')
        }
    })
}

module.exports = forecast