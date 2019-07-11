const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidmlyZW4xNSIsImEiOiJjanh0d3pxN3kwc21pM2Nxb28wZWVoOXJzIn0.8Tqb2TaYVzCjWaGeEWUt9A&limit=1'

    request({ url, json: true }, (error, {body}) => { // destructuring body of response
        if (error) {
            callback('Unable to connect to location service!') // if we do not provide any parameter undefined will be provided
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports =  geoCode
