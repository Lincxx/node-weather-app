const request = require('request');

var geocodeAddress = (addresss, callback) => { 
    var encodedAddress = encodeURIComponent(addresss);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCr1ZuxSwJSUiJV37KacSg3uJ4eLv38tXY`,
        json: true //basically saying, hey if you can send back JSON that would be cool
    }, (error, response, body)=> {
        //pretty print the json object this is the org  console.log(body.results[0].geometry);
        //console.log(JSON.stringify(body.results[0].geometry, undefined, 2));
        //console.log(response.body);
        //console.log(error);
        if(error) {
            callback('Unable to connect to Google Servers.');
        } else if(body.status === "ZERO_RESULTS") {  
            callback('Unable to find that address');
        } else if(body.status === "OK") {
            //we pass undefined, because there are no errors
            callback(undefined, {
                results: {
                    address: body.results[0].formatted_address, 
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                }
            })
            // console.log(`Address: ${body.results[0].formatted_address}`);
            // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }  
    });
}

module.exports = {
    geocodeAddress
}