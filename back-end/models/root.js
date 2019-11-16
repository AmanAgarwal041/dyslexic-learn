const dataS = require('../services/data-service');
const ocrS = require('../services/ocr-service');
const { head } = require('ramda');
const { shuffle } = require('../helpers/util');

const normalizeItem = obj => {
	if (!obj) {
		return obj;
	}

	return {
		...obj,
		images: JSON.parse(obj.images || "[]"),
		type: {
			id: obj.typeid,
		},
	}
};

module.exports = () => {
	return {
		async getListData({ lang, offset, typeid }) {
			const s = await dataS.getListData({ lang, offset, typeid, limit: 1 });
			return normalizeItem(head(s));
		},
		async getQuizData({ lang, typeid }) {
			const s = await dataS.getQuizData({ lang, typeid });
			return shuffle(s.map(normalizeItem));
		},
		async getCharacter({ image }) {
			console.log(image)
			await ocrS.getCharacter(image)
			return "H"
		},
		getTypeOfItem: dataS.getTypeOfItem,
		getAllTypes: dataS.getAllTypes,
	};
};