var express = require('express'),
    api = require('./api/api.js'),
    bodyParser = require('body-parser'),
    app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

//Routes
app.get('/', function(req, res){
  res.render('index');
});

app.get('/weather', function(req, res){
  var zipcode = req.query.zipcode;
  var weather =
  {
    current: '',
    forecast: ''
  }
  //TODO: Add error handling in the event the first request fails. Send user to
  api.getWeatherByZip(zipcode, function(current){
    weather.current = current;
    api.getForecastByZip(zipcode, function(forecast){
      weather.forecast = forecast;
      res.render('weather', {weatherData: weather});
    });
  });
});

var port = process.env.port || 3000;

app.listen(port, process.env.IP, function(){
  console.log("Listening on : " + port);
});
