var elementData = require('../data/elements.js');
var path = require('path');
var elementScores = [];

module.exports = function(app){


//API POST Request-handles when user submits a form & thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate Javascript array

	//display images on webpage: http://localhost:8675/images/fire.jpg
	app.get('/images/fireee.jpg', function (req, res) {
	    res.sendfile(path.resolve('./app/images/fireee.jpg'));
	});
	app.get('/images/pile_rocks.jpg', function (req, res) {
	    res.sendfile(path.resolve('./app/images/pile_rocks.jpg'));
	});
	app.get('/images/mountains_..jpg', function (req, res) {
		res.sendfile(path.resolve('./app/images/mountains_..jpg'));
	});
	app.get('/images/wave_surfer.jpg', function (req, res) {
		res.sendfile(path.resolve('./app/images/wave_surfer.jpg'));
	});
	app.get('/images/windy.jpg', function (req, res) {
		res.sendfile(path.resolve('./app/images/windy.jpg'));
	});




	app.post('/api/elements', function(req, res){
			console.log(req.body)
			var scoreArray = req.body.scores;

			//this adds up the numbers
			var elementScores = eval(scoreArray.toString().replace(/,/g, '+'))
			console.log(elementScores)

			// score logic
		 	if (elementScores <= 15) {
				//show rocks/ground
				res.send({
					name:"You're a Rock",
					desription: "You provide great support and are think wisely about your choices.",
					photo:'/images/pile_rocks.jpg'
				})
			} else if (elementScores >= 16 && elementScores <= 24){
				//show mountains
				res.send({
					name:"You're a Mountain",
					description: "You are strong and steady and constantly seeking more in life",
					photo:'/images/mountains_..jpg'
				})
			} else if (elementScores >= 25 && elementScores <= 34){
				//show wind
				res.send({
					name:"You're Wind",
					description: "You think and act swiftly, but can easily be swayed.",
					photo:'/images/windy.jpg'
				})
			} else if (elementScores >= 35 && elementScores <= 44){
				//show fire
				res.send({
					name:"You're Fire",
					description: "You are full of energy and like change.",
					photo:'/images/fireee.jpg'
				})
			} else if (elementScores >= 45 && elementScores <= 50){
				//show water
				res.send({
					name:"You're Water",
					description: "You go with the flow and let the ride of life take you.",
					photo:'/images/wave_surfer.jpg'
				})
			}


	});


};
