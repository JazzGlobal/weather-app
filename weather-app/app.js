var express = require('express'),
    api = require('./api/api.js'),
    geolocation = require('geolocation'),
    bodyParser = require('body-parser'),
    app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

//Routes
app.get('/', function(req, res){
  res.render('index');
});

var port = process.env.port || 3000;
app.listen(port, process.env.IP, function(){
  console.log("Listening on : " + port);
});
