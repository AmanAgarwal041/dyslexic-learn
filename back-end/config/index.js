const dev = require('./dev');
const production = require('./production');

module.exports = process.env === 'production' ? production : dev;