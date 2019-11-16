let config;

if (process.env.NODE_ENV === 'production') {
  config = require('./production');
} else {
  config = require('./dev');
}

module.exports = config;