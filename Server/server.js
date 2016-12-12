//require the modules I need
var express = require('express');
var bodyParser = require('body-parser');

//init app
var server = express();
server.set('port', 8080); 

//attach middleware
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json())

//direct to home page
server.use(express.static(__dirname + '/../client'));

// start listening to requests on port 8000
server.listen(process.env.PORT || 8000);

console.log("listening to 8000")

module.exports = server; 