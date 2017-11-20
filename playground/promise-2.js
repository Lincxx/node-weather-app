const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => { 
        var encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCr1ZuxSwJSUiJV37KacSg3uJ4eLv38tXY`,
            json: true //basically saying, hey if you can send back JSON that would be cool
        }, (error, response, body)=> {
           
            if(error) {
                reject('Unable to connect to Google Servers.');
            } else if(body.status === "ZERO_RESULTS") {  
                reject('Unable to find that address');
            } else if(body.status === "OK") {
                //we pass undefined, because there are no errors
                resolve({
                        address: body.results[0].formatted_address, 
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                        });
            }  
        });
    });
};

geocodeAddress('37650').then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
}, (err) => {
    console.log(err);
});