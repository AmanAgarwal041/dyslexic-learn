const http = require('http');
const express = require('express');

const { ApolloServer } = require('apollo-server-express');
const schema = require('./schema');
const models = require('./models');

const app = express();

app.options('*', (req, res, next) => {
	res.set('Access-Control-Max-Age', 4 * 3600);
	next();
});

const corsOptions = {
	origin: (_, callback) => {
		callback(null, true);
	},
	credentials: true,
};

const modelEntries = Object.entries(models);
const apolloServer = new ApolloServer({
	...schema,
	context: () => ({
		models: modelEntries.reduce((acc, [model, initFn]) => {
			acc[model] = initFn({ });
			return acc;
		}, {}),
	}),
	introspection: true,
	playground: true,
});

apolloServer.applyMiddleware({
	app,
	path: '/',
	cors: corsOptions,
});

const server = http.createServer(app);
server.listen(process.env.PORT || 4000);

server.on('error', err => {
	console.error('Failed to run server', err);
	throw err;
});

server.on('listening', () => {
	console.info(
		`🚀 Server ready at http://localhost:${server.address().port}`,
	);
});