require('dotenv').config()
require('body-parser')

var bodyParser = require('body-parser');
var strftime = require('strftime');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
app.use("/public", express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));


// Handle date value in POST. Can be unix, or utc.
app.get('/api/:date', function(req, res) {
  // Init vars.
  var date = new Date();

  if(req.params.date) {
    // Verify if the passed date is a interger.
    if(/^\d*$/.test(req.params.date)){ date.setTime(req.params.date); }
    else { date = new Date(req.params.date); }

    // Return Response.
    if(!date.getTime()) { res.send({error : "Invalid Date"}) }
    else { res.send({unix: date.getTime(), utc: date.toUTCString()}); }
  } else { 
    // Return Response.
    res.send({unix: Date.now(), utc: now.toUTCString()});
     }
  
});




































 module.exports = app;
