var elementData = require('../data/elements.js');
var path = require('path');
var elementScores = [];

module.exports = function(app){


//API POST Request-handles when user submits a form & thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate Javascript array

	//display images on webpage: http://localhost:8675/images/fire.jpg
	app.get('/images/fire.jpg', function (req, res) {
	    res.sendfile(path.resolve('./app/images/fire.jpg'));
	});
	app.get('/images/rock.jpg', function (req, res) {
	    res.sendfile(path.resolve('./app/images/rock.jpg'));
	});
	app.get('/images/mountain.jpg', function (req, res) {
		res.sendfile(path.resolve('./app/images/mountain.jpg'));
	});
	app.get('/images/water.jpg', function (req, res) {
		res.sendfile(path.resolve('./app/images/water.jpg'));
	});
	app.get('/images/wind.jpg', function (req, res) {
		res.sendfile(path.resolve('./app/images/wind.jpg'));
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
					desription: "You like independence",
					photo:'/images/rock.jpg'
				})
			} else if (elementScores >= 16 && elementScores <= 24){
				//show mountains
				res.send({
					name:"You're a Mountain",
					description: "Strong and steady",
					photo:'/images/mountain.jpg'
				})
			} else if (elementScores >= 25 && elementScores <= 34){
				//show wind
				res.send({
					name:"You're Wind",
					description: "You think and act swiftly.",
					photo:'/images/wind.jpg'
				})
			} else if (elementScores >= 35 && elementScores <= 44){
				//show fire
				res.send({
					name:"You're Fire",
					description: "Full of energy",
					photo:'/images/fire.jpg'
				})
			} else if (elementScores >= 45 && elementScores <= 50){
				//show water
				res.send({
					name:"You're Water",
					description: "Approximately 60%",
					photo:'/images/water.jpg'
				})
			}


	});


};
