
exports.up = function(knex, Promise) {
	//function is used to make a table, you want to 
  return knex.schema.createTable('students', function(table) {
  	//want to add primary_key, id, serial
  	table.increments();
  	table.string('name');
  });
};

exports.down = function(knex, Promise) {
	//need a down schema to rollback
	return knex.schema.dropTable('students');
};

//then run $knex migrate:latest
