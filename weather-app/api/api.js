var request = require('request'),
    api_key = '88910679cdcbe6ce47c23ad3de9a008b';

const api =
{
    getWeather(geolocation, callback){
      var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${geolocation.lat}&lon=${geolocation.lon}&appid=${api_key}`;
      console.log('Requesting: ' + url)
      request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
          console.log('success');
          var data = JSON.parse(body);
          callback(data, true);
        }
        else{
          console.log(error);
          console.log('Failed');
        }
      });
    }
}
module.exports = api;
