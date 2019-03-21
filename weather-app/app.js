var express = require('express'),
    app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('public'))

//Routes

app.get('/', function(rreq, res){
  res.send('index');
})

var port = process.env.port || 3000;
app.listen(port, process.env.IP, function(){
  console.log("Listening on : " + port);
});
