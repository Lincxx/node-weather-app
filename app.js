const yargs = require('yargs');
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help('Format address by wrapping it with quotes')
    .alias('help', 'h')
    .argv;

                                //our callback will have either an errorMsg or a result
geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        //lat, lng, callback
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage) {
                console.log(errorMessage)
            } else {
                console.log(`It's currently ${weatherResults.temperature}, but it feels like ${weatherResults.apparentTemperature} `)
            }
        });
    }
});









