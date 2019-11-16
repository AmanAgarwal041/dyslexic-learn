const knexObject = require('knex');
const config = require('../config/');

require('pg').types.setTypeParser(20, Number);

module.exports = knexObject({
	client: 'pg',
	connection: config.psql.connection,
	pool: {
		min: 2,
		max: 10,
		idleTimeoutMillis: 10000, // free resouces are destroyed after this many milliseconds
		reapIntervalMillis: 1000, // how often to check for idle resources to destroy
	},
});;