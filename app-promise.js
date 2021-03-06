const yargs = require('yargs');
const env = require('dotenv').config();
const api = process.env.API_KEY;
const axios = require('axios');


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

if(argv.address === "") {
    argv.address = "48503"
} 

var encodedAddress = encodeURIComponent(argv.address);
var geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCr1ZuxSwJSUiJV37KacSg3uJ4eLv38tXY`;

axios.get(geoCodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${api}/${lat},${lng}`;
    console.log(weatherUrl);

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    var temperatureHigh = response.data.daily.data[0].temperatureHigh;
    var temperatureLow = response.data.daily.data[0].temperatureLow;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
    console.log(`Today's high is ${temperatureHigh} `);
    console.log(`Today's high is ${temperatureLow} `);
}).catch((e) => {
   if(e.code === 'ENOTFOUND'){
       console.log('Unable to connect to API servers');
   } else {
       console.log(e.message);
   }
});

//hi lo temp
