const path = require('path');
const express = require('express');
const axios = require('axios');
const app = express();

const PROJ_DIR = __dirname;
const HTML_FILE = path.join(PROJ_DIR, '/index.html');

app.use(express.static(PROJ_DIR));

const SF = {
    LoginUrl: 'https://login.salesforce.com/services/oauth2/token',
    Username: 'alextorrer@myorg.com',
    Password: 'atr2901alex5QCHfQRoTjpcyPE5bGI1qWQCb',
    ClientId: '3MVG95jctIhbyCppbKNigsWB_A07g0JZpPdOm9SzH2vJQOfOAWqzjKVGyvfYoWj5LfASsLH4Ddnee9E7O2tfg',
    ClientSecret: 'E146D7E91E42200DDB2B313B4DD4F5F9D7B498A92E980B0292CE183209E1F8F7',
};

const options = {
    url: (`${SF.LoginUrl}?username=${SF.Username}&password=${encodeURIComponent(SF.Password)}&client_id=${encodeURIComponent(SF.ClientId)}&client_secret=${encodeURIComponent(SF.ClientSecret)}&grant_type=password`),
    headers: {},
    method: 'POST'
};

const dataOptions={
    url: '/services/apexrest/contacts/trailheadchallenge/',
    method: 'GET',
}

app.get('/getData', (req,res)=>{
    axios.post(options.url)
        .then(function(resp){
            //console.log(resp.data.access_token);
            axios.get(resp.data.instance_url+dataOptions.url, {
                headers: {
                    'Authorization': `Bearer ${resp.data.access_token}`
                }
            })
                .then(function(response){
                    console.log((response.data));
                    res.send(response.data);
                    //res.json(response.data);
                })
                .catch(function(err){
                    console.error(err);
                });
        })
        .catch(function(err){
            console.error(err);
        });
});


app.use(express.static(PROJ_DIR));
app.listen(process.env.PORT);