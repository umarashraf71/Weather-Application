const express = require('express');
const path = require('path');
const request = require('request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forcast = require('./utils/forcast');
const exphbs = require('express-handlebars');


const app = express();


//DEFINE PATH FOR EXPRESS CONFIG
const publicDirectoryPath = path.join(__dirname, '/public');



//SETUP handlebars engine and default layout
app.engine('handlebars', exphbs({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');



//SETUP STATIC DIRECTORY TO SERVE
app.use(express.static(publicDirectoryPath));





//REQUIRING THE ROUTES
const homeRoute = require('./routes/home');


//MIDDLEWARES FOR ROUTES
app.use('/', homeRoute);



//get city name from comman line argument
// var City = process.argv[2];

// if(!City)
// {
//    console.log('Please enter city name as command line argument')
// }
// else{
      
//    geocode(City , (error, data) => {

//       if(error){

//          return console.log(error);
//       }

//       console.log( chalk.magentaBright('Geocode Data : ' + JSON.stringify(data)) );
//       console.log(chalk.greenBright('Location : ' + data.location ));

//    forcast(data.latitude, data.longitude, (error, forcastData)=>{

//       if(error){

//          return console.log(error);
//       }

//       console.log( chalk.blue('Forcast Temperature : ' + forcastData + ' degree celcius'));
      
//    })


//    });

// }




app.get('*',(req,res)=>{ 

   res.render('404');

})





//SETTING UP THE SERVER
const port = process.env.PORT || 3000;

app.listen(port, () => {

   console.log(chalk.black.bgWhiteBright(`Listening to the port : ${port} `));
})


















//CALLBACK FUNCTION EXAMPLE

// const add = (num1, num2, callback) => {

//    setTimeout(()=>{

//       const sum = {

//          sum : num1 + num2
//       },
//       minus = {

//          minus : num1 - num2
//       }

//       callback(sum.sum, minus.minus);

//    }, 2000)

// };

// add(10, 5, (sum, minus)=>{

//    console.log(sum, minus);
// })












//EXTRA MATERIAL



//  const url = 'http://api.openweathermap.org/data/2.5/weather?lat=31.5497&lon=74.3436&APPID=4bef3c401cf12b110c97efe06c1ccc21';

//  request({url: url, json: true}, (error, response)=>{

//    if(error){

//       console.log(chalk.red('Unable to connect to weather service !'));
   
//    }else if(response.body.cod == 400){

//       console.log(chalk.red('Unable to find location !'));
//    }
//    else{

//    // const data = JSON.parse(response.body);
//    // console.log(data);

//    //console.log(response.body);

//     const Body = response.body;
//     const CelciusTemp = Math.round(parseFloat(Body.main.temp)-273.15); //temperature

//     console.log(chalk.blue('It is currently ' + CelciusTemp + ' degrees out. There is no chance of rain !'));
   
//    } 
//  });




 
//  const geocodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidW1hcmFzaHJhZjcxIiwiYSI6ImNrZjUzNnQxeDBqMGwycG1zNmphNG0wc24ifQ.2AffV4vGfobkskAIsVXJNg"

//  request({url : geocodeurl, json: true}, (error, response)=>{

//    if(error){

//       console.log(chalk.red('Unable to connect to geolocation services'));
   
//    }else if(response.body.features.length === 0){

//       console.log(chalk.red('Unable to find Location try another search!'));

//    }else{
    
//    //console.log(response.body)

//    const Body = response.body;

//    var longitude = Body.features[0].center[0];
//    var lattitude = Body.features[0].center[1];


//    console.log(chalk.blue('The Latitude of Los Angeles is ' + lattitude + ' and its Longitude is ' + longitude));
   
//    }
//  });
