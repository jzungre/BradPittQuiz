var router = require('express').Router();

router.post('/', function (req, res) {
 	console.log('in STARS-router!!!');
	// var myPerson = "Angelina%20Jolie"
	// var myPath = "/3/search/person?include_adult=false&page=1&query=" + myPerson + "&language=en-US&api_key=a437b0cda7b8a885359cb9c565766bcb";

	// var options = {
	//   "method": "GET",
	//   "hostname": "api.themoviedb.org",
	//   "port": null,
	//   "path": myPath,
	//   "headers": {}
	// };

	// var req = http.request(options, function (res) {
	//   var chunks = [];

	//   res.on("data", function (chunk) {
	//     chunks.push(chunk);
	//   });

	//   res.on("end", function () {
	//     var body = Buffer.concat(chunks);
	//     console.log(body.toString());
	//   });
	// });

	// req.write("{}");
	// req.end();

	res.send('end end end of the route')
});

module.exports = router;