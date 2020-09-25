const request = require('request');


const geocode = (address, callback) => {

    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoidW1hcmFzaHJhZjcxIiwiYSI6ImNrZjUzNnQxeDBqMGwycG1zNmphNG0wc24ifQ.2AffV4vGfobkskAIsVXJNg&limit=1";
 
 
    request({url: url, json: true},(error, response)=>{
 
       if(error)
       {
          const errorMsg1 = 'Unable to connect to geo location services';
          callback(errorMsg1, undefined);
 
       }else if(response.body.features.length === 0){
 
          const errorMsg2 = 'Unable to find the location try another search'
          callback(errorMsg2, undefined);
 
       }else
       {
 
          callback(undefined, {
 
             latitude : response.body.features[0].center[0],
             longitude : response.body.features[0].center[1],
             location : response.body.features[0].place_name
    
          });
       }
 
    });
 
 }
 

 module.exports = geocode;