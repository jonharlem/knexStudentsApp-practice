var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var knex = require("./db/knex");
var methodOverride = require('method-override');
var studentRoutes = require("./controllers/students");
require("locus");

//middleware
//setting a poperty on the app
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
//tiny is the amount of information displayed when logging
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

app.use('/students', studentRoutes);

//start the server
app.listen(3000, function() {
	//log a message to make sure the server is running
	console.log("server started on 3000");
});