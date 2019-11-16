module.exports = {
	RootQuery: {
		getListData,
		getQuizData,
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