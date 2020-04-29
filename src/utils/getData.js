/* const APP_CLIENT_ID = '3MVG95jctIhbyCppbKNigsWB_A07g0JZpPdOm9SzH2vJQOfOAWqzjKVGyvfYoWj5LfASsLH4Ddnee9E7O2tfg';
const APP_CLIENT_SECRET = 'E146D7E91E42200DDB2B313B4DD4F5F9D7B498A92E980B0292CE183209E1F8F7';
const username = 'alextorrer@myorg.com';
const password = 'atr2901alex5QCHfQRoTjpcyPE5bGI1qWQCb';
const login_url = 'https://login.salesforce.com/services/oauth2/token';

var data = {
    'grant_type': 'password',
    'client_id': APP_CLIENT_ID,
    'client_secret': APP_CLIENT_SECRET,
    'username': username,
    'password': password
}

const getData = async ()=>{
    const response = await fetch(login_url, {
        method: 'GET',
        headers: JSON.stringify(data),
        mode: 'no-cors'
    });
    console.log(response);
};

export default getData; */