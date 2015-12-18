var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var knex = require("./db/knex");

//setting a poperty on the app
app.set("view engine", "ejs");
//middleware
app.use(bodyParser.urlencoded({extended:true}));
//tiny is the amount of information displayed when logging
app.use(morgan('tiny'));

//
app.get('/students', function(req, res) {
	//SELECT * FROM students and run a function to render the 
	knex('students').then(function(studentsFromDB) {
		// we want to respond with a file that shows all users
		//it is going to refer to what is sent back: students
		res.render("index", {students:studentsFromDB});
	});
});

app.get('/students/new', function(req, res) {
	res.render("new");
});

app.post('/students', function(req, res) {
	knex('students').insert(req.body).then(function(){
		res.redirect('/students');
	});
});
//start the server
app.listen(3000, function() {
	//log a message to make sure the server is running
	console.log("server started on 3000");
});