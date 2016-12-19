//require the modules I need
var express = require('express');
var router = require('./router.js');
var bodyParser = require('body-parser');
// var router = require('express').Router();
var newBody;

var http = require("https");

//init app
var server = express();
server.set('port', 8080); 

//attach middleware
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json())

//direct to home page
server.use(express.static(__dirname + '/../Client'));

// start listening to requests on port 8000
server.listen(process.env.PORT || 8000);

console.log("listening to 8000")

// server.use(router);



server.post('/stars', function (exRequest, exResponse) {
 	//working
 	console.log('in STARS-server(server)!!!');
 	console.log('exRequest.body', exRequest.body);
 	var actor = exRequest.body.actor;
 	var uriActor = encodeURI(actor);
 	console.log('actor', actor, 'uriActor', uriActor);

 	var myPerson = uriActor;
	var myPath = "/3/search/person?include_adult=false&page=1&query=" + myPerson + "&language=en-US&api_key=a437b0cda7b8a885359cb9c565766bcb";

	var options = {
	  "method": "GET",
	  "hostname": "api.themoviedb.org",
	  "port": null,
	  "path": myPath,
	  "headers": {}
	};

	
	
	var req = http.request(options, function (res) {
	  var chunks = [];
	  
	  
	  res.on("data", function (chunk) {
	    chunks.push(chunk);
	  });

	  res.on("end", function () {
	    var body = Buffer.concat(chunks);
	     newBody = body.toString()
	     console.log("RESULTS========>",newBody.results, 'newBody', newBody);
	    //console.log("poststring", newBody);
	    var stringFilms = JSON.stringify(newBody)
	    //console.log("Films!!!!!!!!!!", stringFilms);
	    exResponse.send(newBody);	   	    
	  });
	  
	});
		
	 req.write("{}");
	 req.end();

});

module.exports = server;
