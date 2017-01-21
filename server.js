//install node module
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//set up
var app = express();
var PORT = 8080;


app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

// app.use(function(req,res){

// })

require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT,function(){
	console.log("App is listening!");
});