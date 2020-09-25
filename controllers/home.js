const geocode = require('../utils/geocode');
const forcast = require('../utils/forcast');
const request = require('request');
const chalk = require('chalk');

module.exports = {

    home: (req, res)=>{

        res.render('index',{title:'Weather',
                            name: 'Umar Ashraf'});
     
     },

     about: (req, res)=>{

        res.render('about',{title:'About Us',
                            name: 'Umar Ashraf'});
     
     },

     help: (req, res)=>{

        res.render('help',{title:'Help',
                            name: 'Umar Ashraf'});
     
     },

     address: (req, res) =>{

        if(!req.query.address)
        {
            return res.send({
                              error: "You must provide the address term"  
                            });
        }

        geocode(req.query.address , (error, data) => {

            if(error){
      
               return res.send({error: error});
            }
      

        //res.send( chalk.magentaBright('Geocode Data : ' + JSON.stringify(data)) );
        //res.send(chalk.greenBright('Location : ' + data.location ));
    
         forcast(data.latitude, data.longitude, (error, forcastData)=>{
      
            if(error){
      
               return res.send({error: error});
            }
      
            //console.log( chalk.blue('Forcast Temperature : ' + forcastData + ' degree celcius'));
            res.send({
                geodata:   data,                                          
                location:  data.location,
                longitude: data.longitude,
                latitude:  data.latitude,
                temp:      forcastData
            })
         })
           
         });
      
     }




};
