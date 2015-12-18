var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

//setting a poperty on the app
app.set("view engine", "ejs");
//middleware
app.use(bodyParser.urlcoded({extender:true}));
//tiny is the amount of information displayed when logging
app.use(morgan('tiny'));


//start the server
app.listen(3000, function() {
	//log a message to make sure the server is running
	console.log("server started on 3000");
});