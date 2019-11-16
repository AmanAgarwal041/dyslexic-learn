const { gql } = require('apollo-server-express');
const { flatten } = require('ramda');
const root = require('./root');

const SchemaDefinition = gql`
	schema {
		query: RootQuery
	}
`;

module.exports = flatten([
	SchemaDefinition,
	root,
]);