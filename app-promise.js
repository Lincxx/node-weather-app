const yargs = require('yargs');
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

var encodedAddress = encodeURIComponent(address);