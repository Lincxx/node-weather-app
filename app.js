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
// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//     if(errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

//lat, lng, callback
weather.getWeather(36.170584, -82.3912, (errorMessage, weatherResults) => {
    
    if(errorMessage) {
        console.log(errorMessage)
    } else {
        console.log(JSON.stringify(weatherResults, undefined, 2));
    }
});







