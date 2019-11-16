const express = require('express');
const cookieParser = require('cookie-parser');
const { promisify } = require('util');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const routes = require('./routes');

const port = process.env.PORT || 2000;

const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
	app.render(req, res, route.page, query);
});

function expressWrapper() {
	const server = express();
	server.use(cookieParser());
	server.use(handler);
	return server;
}

app.prepare().then(expressWrapper).then(server => promisify(server.listen.bind(server))(port)).catch(console.log);