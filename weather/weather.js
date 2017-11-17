const request = require('request');
const env = require('dotenv').config();
const api = process.env.API_KEY;

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${api}/${lat},${lng}`,
        json: true //basically saying, hey if you can send back JSON that would be cool
    }, (error, response, body)=> {
        if(!error && response.statusCode === 200){
            console.log(body.currently.temperature);
            //there is no error, so the first arg is undefined
            callback(undefined, {
                temperature : body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }
        
    });
}



module.exports.getWeather = getWeather;