const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyCr1ZuxSwJSUiJV37KacSg3uJ4eLv38tXY',
    json: true //basically saying, hey if you can send back JSON that would be cool
}, (error, response, body)=> {
    //pretty print the json object this is the org  console.log(body.results[0].geometry);
    //console.log(JSON.stringify(body.results[0].geometry, undefined, 2));
    //console.log(response.body);
    //console.log(error);
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Lng: ${body.results[0].geometry.location.lng}`);
    
});