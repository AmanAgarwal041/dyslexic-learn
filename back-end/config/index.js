const dev = require('./dev');
const production = require('./production');
module.exports = process.env.NODE_ENV === 'production' ? production : dev;
