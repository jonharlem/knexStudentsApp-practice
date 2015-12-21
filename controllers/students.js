var express = require("express");
var router = express.Router();
var knex = require("../db/knex");

router.get('/', function(req, res) {
	//SELECT * FROM students and run a function to render the 
	knex('students').then(function(studentsFromDB) {
		// we want to respond with a file that shows all users
		//it is going to refer to what is sent back: students
		res.render("index", {students:studentsFromDB});
	});
});

router.get('/students/new', function(req, res) {
	res.render("new");
});

router.post('/students', function(req, res) {
	knex('students').insert(req.body).then(function(){
		res.redirect('/students');
	});
});

router.get('/students/:id/edit', function(req, res) {
	var id = req.params.id;
	//find a student
	knex('students').where({id: id}).first().then(function(){
	//render edit; show form
		res.render("edit", {students:student});
	});
});

router.put('students/:id', function(req, res) {
	//use knex to update the student
	knex('students').where({id: req.params.id}).first().update(req.body).then(function(req, res){
		res.redirect('/students');
	});
});

router.delete('/:id', function(req, res) {
	knex('students').where({id: req.params.id}).del().then(function(){
		res.direct("/students");
	});
}

module.exports = router;