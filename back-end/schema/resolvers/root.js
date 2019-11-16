module.exports = {
	RootQuery: {
		getListData,
		getQuizData,
		getAllTypes,
	},
	Item: {
		type: getTypeOfItem,
	},
};

async function getListData(_, params, ctx) {
	return ctx.models.root.getListData(params);
}

async function getTypeOfItem(rootVal, _, ctx) {
	return ctx.models.root.getTypeOfItem(rootVal.type.id);
}

async function getQuizData(_, params, ctx) {
	return ctx.models.root.getQuizData(params);
}

async function getAllTypes(_, __, ctx) {
	return ctx.models.root.getAllTypes();
}