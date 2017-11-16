// const yargs = require('yargs');
// const geocode = require('./geocode/geocode')

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help('Format address by wrapping it with quotes')
//     .alias('help', 'h')
//     .argv;

//                                 //our callback will have either an errorMsg or a result
// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//     if(errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

// b507ec2b86a8e1d8d9ff094fe6feb855
const request = require('request');

request({
    url: `https://api.darksky.net/forecast/b507ec2b86a8e1d8d9ff094fe6feb855/36.170584,-82.3912`,
    json: true //basically saying, hey if you can send back JSON that would be cool
}, (error, response, body)=> {
    if(!error && response.statusCode === 200){
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather');
    }
    
});






