const { gql } = require('apollo-server-express');

module.exports = gql`
	type RootQuery {
		version: String
	}

	type Item {
		id: ID!
		name: String!
		images: [String!]
		lang: String!
		type: ItemType!
	}

	type ItemType {
		id: ID!
		name: String!
	}

	extend type RootQuery {
		getListData(
			offset: Int = 0, 
			typeid: ID!,
			lang: String = "en"
		): Item,
		getQuizData(
			typeid: ID!,
			lang: String = "en"
		): [Item!]!
		getAllTypes: [ItemType!],
		getCharacter(
			image: String!
		): String
	}
`;