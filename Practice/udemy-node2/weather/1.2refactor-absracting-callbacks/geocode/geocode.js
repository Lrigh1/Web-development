const request = require('request');

const geocodeAddress = (address) => {

    const encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if(error){
            console.log('unable to connect to google servers.');
        }else if(body.status === 'ZERO_RESULTS'){
            console.log('Unable to find that address.');
        }else if(body.status === 'OK'){
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Lat: ${body.results[0].geometry.location.lat}`);
            console.log(`Long: ${body.results[0].geometry.location.lng}`);
        }
    });
}

module.exports.geocodeAddress = geocodeAddress;