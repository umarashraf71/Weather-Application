const request = require('request');


const forcast = (longitude, latitude, callback) => {

    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=4bef3c401cf12b110c97efe06c1ccc21';

    request({url: url, json: true}, (error, response)=>{

        if(error)
        {
            const errorMsg1 = 'Unable to connect to weather services !';
            callback(error, undefined);
        }
        else if(response.body.cod === 400)
        {
            const errorMsg2 = 'Unable to find location !';
            callback(error, undefined);
        }
        else{

            const CelciusTemp = Math.round(parseFloat(response.body.main.temp)-273.15); //temperature
            callback(undefined, CelciusTemp);
        }

    })

}



module.exports = forcast;