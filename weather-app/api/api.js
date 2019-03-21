var request = require('request');

const api =
{
    getWeather(geolocation, callback){
      request('', function(error, response, body){
        if(!error && response.statusCode == 200){
          var data = JSON.parse(body);
          callback(data);
        }
      });
    }
}
module.exports = api;
