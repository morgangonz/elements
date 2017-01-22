var elementData = require('../data/elements.js');
var path = require('path');
var elementScores = [];

module.exports = function(app){
	

//API POST Request-handles when user submits a form & thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate Javascript array

	 app.get("/api/elements", function(req, res) {
    	res.json(elementData);
  	});

	 for (var i=0; i < elementData.length; i++){
	 	if (elementScores <= 15) {
	 		//show rocks/ground
	 	/*} else if { (elementScores = 16-24)
	 		//show mountains
	 	} else if { (elementScores = 25-34)
	 		//show wind
	 	} else if { (elementScores = 35-44)
	 		//show fire
	 	} else if { (elementScores = 45-50)
	 		//show water
	 	} */
	 		
	 };


	app.post('/api/elements', function(req, res){

		

		elementData.push(usrData);
 
		res.json(greatMatch);
	});


	};

}


