//tell knex what environment you're in
var env = process.env.NODE_ENV || 'development';
//bring in the knex file, use ../ or it will look in node_modules, pass in [env] because you want to be in development
var config = require("../knexfile")[env];