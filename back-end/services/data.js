const pg = require('../libraries/psql-db');
const { head } = require('ramda');

module.exports = {
	getListData,
	getQuizData,
	getTypeOfItem,
};

async function getListData({ offset = 0, lang = 'en', typeid, limit = 1 }) {
	return pg('item')
		.where({ lang })
		.andWhere({ typeid })
		.limit(limit)
		.offset(offset);
}

async function getQuizData({ lang = 'en', typeid }) {
	return pg('item')
		.where({ lang })
		.andWhere({ typeid });
}

async function getTypeOfItem(typeid) {
	const t = await pg('itemtypes')
		.where({ id: typeid });
	return head(t);
}