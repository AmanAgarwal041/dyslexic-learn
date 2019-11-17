module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/home/header.js":
/*!******************************!*\
  !*** ./pages/home/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-canvas-draw */ "react-canvas-draw");
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_canvas_draw__WEBPACK_IMPORTED_MODULE_2__);




const Header = props => {
  const {
    letterType,
    setLetterType
  } = props;

  const handleAlphabets = () => {
    setLetterType(1);
  };

  const handleDigits = () => {
    setLetterType(2);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex  mv3 justify-between f4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, "Logo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " flex br-pill ba b--prpl "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: `br--right3 pv2 ph4 pointer fw6  ${props.type === 'learn' ? 'bg-prpl white' : 'prpl'} `,
    "data-type": "learn",
    onClick: props.handleType
  }, "Learn"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: `br--left3 pv2 ph4 pointer fw6 ${props.type === 'test' ? 'bg-prpl white' : 'prpl'} `,
    "data-type": "test",
    onClick: props.handleType
  }, "Test")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: `br4 ba ph4 pv2 mr3 pointer fw6 b--prpl ${letterType === 1 ? 'bg-prpl white' : 'prpl'}`,
    onClick: handleAlphabets
  }, "Alphabets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: `br4 ba ph4 pv2 pointer fw6 b--prpl  ${letterType === 2 ? 'bg-prpl white' : 'prpl'}`,
    onClick: handleDigits
  }, "Digit")));
};

Header.propTypes = {
  setLetterType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired // letterType:PropTypes.int.isRequired,

};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _learn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./learn */ "./pages/home/learn.js");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test */ "./pages/home/test.js");
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-canvas-draw */ "react-canvas-draw");
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_canvas_draw__WEBPACK_IMPORTED_MODULE_3__);





const Home = props => {
  const [type, setType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('learn');

  const handleType = e => {
    const {
      type
    } = e.currentTarget.dataset;
    setType(type);
  };

  if (type === 'test') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_test__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleType: handleType
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_learn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleType: handleType
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/home/learn.js":
/*!*****************************!*\
  !*** ./pages/home/learn.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries_listdata_gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../queries/listdata.gql */ "./queries/listdata.gql");
/* harmony import */ var _queries_listdata_gql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_queries_listdata_gql__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _queries_getchar_gql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../queries/getchar.gql */ "./queries/getchar.gql");
/* harmony import */ var _queries_getchar_gql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_queries_getchar_gql__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./pages/home/header.js");
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-canvas-draw */ "react-canvas-draw");
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_canvas_draw__WEBPACK_IMPORTED_MODULE_6__);








const Learn = props => {
  const canvasValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [letter, setLetter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [image, setImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [letterType, setLetterType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);

  const onSpeak = e => {
    const {
      text
    } = e.currentTarget.dataset;
    const sp = new SpeechSynthesisUtterance(text.toLowerCase());
    window.speechSynthesis.speak(sp);
  };

  const handleClear = () => {
    canvasValue.current.clear();
  };

  const handleUndo = () => {
    canvasValue.current.undo();
  };

  const handleData = () => {
    console.log(canvasValue.current.canvas.drawing.toDataURL("image/png"));
    setImage(canvasValue.current.canvas.drawing.toDataURL("image/png")); // canvasValue.current
  };

  const handleNext = () => {
    setImage(canvasValue.current.canvas.drawing.toDataURL("image/jpeg"));
    if (letterType === 1 && letter < 26 || letterType === 2 && letter < 100) setLetter(letter + 1);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-grow-1 flex-column ph3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleType: props.handleType,
    type: "learn",
    setLetterType: setLetterType,
    letterType: letterType
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-grow-1 items-center mt4 ph4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-between mv3 w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: _queries_listdata_gql__WEBPACK_IMPORTED_MODULE_3___default.a,
    variables: {
      offset: letter,
      typeid: letterType,
      lang: "en"
    },
    fetchPolicy: "cache-and-network"
  }, ({
    data,
    loading
  }) => {
    const {
      getListData: {
        name
      } = {}
    } = data || {};
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: _queries_getchar_gql__WEBPACK_IMPORTED_MODULE_4___default.a,
      skip: !image,
      variables: {
        image
      },
      fetchPolicy: "cache-and-network"
    }, ({
      data: charData
    }) => {
      console.log(charData);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex flex-column items-center w-25"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "b f4 mb3 prpl"
      }, "Digits "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ba f-18 flex  items-center justify-center w-100 bg-ylw b--ylw prpl"
      }, name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex flex-column items-center justify-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: " b b--black ba bn f4 mb3 ph4 pointer prpl pv2",
        "data-text": name,
        onClick: onSpeak
      }, "Speak"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: " b b--black ba bn f4 mb3 ph4 pointer prpl pv2",
        onClick: handleData
      }, "Test")));
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column items-center w-25"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "flex mb3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "b f4 mr3 prpl"
  }, "Canvas Draw"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "f3"
  }, " \u2713 \u2717")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_canvas_draw__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      height: '20rem',
      width: "100%"
    },
    brushColor: "red",
    catenaryColor: "green",
    ref: canvasValue
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex mt3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mr3 bn white fw6 ph3 pv2 pointer bg-pnk",
    onClick: handleClear
  }, "Clear"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: " bn ph3 white fw6 pv2 pointer bg-pnk",
    onClick: handleUndo
  }, "Undo")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "absolute b bn bg-prpl bottom-2 f4 flex items-center justify-center ph4 pv2 right-2 w-10 white pointer",
    onClick: handleNext
  }, "Next")));
};

Learn.propTypes = {
  handleType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Learn);

/***/ }),

/***/ "./pages/home/test.js":
/*!****************************!*\
  !*** ./pages/home/test.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./pages/home/header.js");
/* harmony import */ var _queries_getchar_gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../queries/getchar.gql */ "./queries/getchar.gql");
/* harmony import */ var _queries_getchar_gql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_queries_getchar_gql__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _queries_quizdata_gql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../queries/quizdata.gql */ "./queries/quizdata.gql");
/* harmony import */ var _queries_quizdata_gql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_queries_quizdata_gql__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-canvas-draw */ "react-canvas-draw");
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_canvas_draw__WEBPACK_IMPORTED_MODULE_6__);

 // import ReactCountdownClock from 'react-countdown-clock';







const Timer = () => {
  const [time, setTime] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(15);
  const interval = setInterval(() => {
    setTime(time - 1);
  }, [1000]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // if(time===0) clearInterval(interval)	
    clearInterval(interval);
    return () => {
      if (interval) clearInterval();
    };
  }, [time]);
  if (time === 0) return null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "absolute b ba bg-prpl bn f1 ph4 prpl pv2 left-2 ylw"
  }, '00 : ' + time);
};

const Canvas = ({
  data,
  letterType
}) => {
  const [image, setImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [letter, setLetter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);
  const [resultSet, setResultSet] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const canvasValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (letter === -1) return;
    onSpeak(data[letter].name);
  }, [letter]);

  const onSpeak = val => {
    const sp = new SpeechSynthesisUtterance(val.toLowerCase());
    window.speechSynthesis.speak(sp);
  };

  const handleClear = () => {
    canvasValue.current.clear();
  };

  const handleUndo = () => {
    canvasValue.current.undo();
  };

  const handleSkip = () => {
    if (letter < 26) setLetter(letter + 1);
  };

  const handleStart = () => {
    setLetter(0);
  };

  const handleNext = () => {
    setImage(canvasValue.current.canvas.drawing.toDataURL("image/png"));
    canvasValue.current.clear();
    if (letterType === 1 && letter < 26 || letterType === 2 && letter < 100) setLetter(letter + 1);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _queries_getchar_gql__WEBPACK_IMPORTED_MODULE_3___default.a,
    skip: !image,
    variables: {
      image
    },
    fetchPolicy: "cache-and-network"
  }, ({
    data
  }) => {
    console.log(data);
    return null;
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex  mv3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column items-center w-25 center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "b f4 mb3 prpl"
  }, "Canvas Draw"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_canvas_draw__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      height: '16rem',
      width: "100%"
    },
    brushColor: "red",
    ref: canvasValue
  })), letter === -1 ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Timer, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex mv4 items-center justify-center"
  }, letter === -1 ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: " ph4 pv2  bg-pnk fw6 bn white mr3 pointer bn",
    onClick: () => onSpeak(data[letter].name)
  }, "Speak"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mr3 ba ph3 pv2 pointer fw6 bn bg-pnk white",
    onClick: handleClear
  }, "Clear"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: " ba ph3 pv2 pointer bg-pnk fw6 bn white",
    onClick: handleUndo
  }, "Undo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-between mt3"
  }, letter === -1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "b bn bg-prpl  f4 flex items-center justify-center ph4 pv2  w-20 white pointer",
    onClick: handleStart
  }, "Start Test") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "b bn bg-prpl  f4 flex items-center justify-center ph4 pv2  w-20 white pointer",
    onClick: handleNext
  }, "Submit Test"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "b bn bg-prpl  f4 flex items-center justify-center ph4 pv2  w-20 white pointer",
    onClick: handleSkip
  }, "Skip"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "b bn bg-prpl  f4 flex items-center justify-center ph4 pv2  w-20 white pointer",
    onClick: handleNext
  }, "Next")))));
};

Canvas.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired
};

const Test = props => {
  const [letterType, setLetterType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-grow-1 flex-column ph3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleType: props.handleType,
    type: "test",
    setLetterType: setLetterType,
    letterType: letterType
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-grow-1 items-center mt4 ph4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _queries_quizdata_gql__WEBPACK_IMPORTED_MODULE_4___default.a,
    variables: {
      typeid: letterType,
      lang: "en"
    },
    fetchPolicy: "cache-and-network"
  }, ({
    data,
    loading
  }) => {
    const {
      getQuizData
    } = data || {};
    if (!getQuizData || getQuizData.length === 0) return null;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Canvas, {
      data: getQuizData,
      letterType: letterType
    });
  })));
};

Test.propTypes = {
  handleType: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ "./queries/getchar.gql":
/*!*****************************!*\
  !*** ./queries/getchar.gql ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getchar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCharacter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"character"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":80}};
    doc.loc.source = {"body":"query getchar($image:String!){\n  getCharacter(image:$image){\n    character\n  }\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["getchar"] = oneQuery(doc, "getchar");
        


/***/ }),

/***/ "./queries/listdata.gql":
/*!******************************!*\
  !*** ./queries/listdata.gql ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listdata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"typeid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getListData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"typeid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"typeid"}}},{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lang"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":158}};
    doc.loc.source = {"body":"query listdata($offset:Int,$typeid:ID!,$lang:String){\n  getListData(offset:$offset,typeid:$typeid,lang:$lang){\n    id\n    name\n    images\n    lang\n   \n  }\n}\n\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["listdata"] = oneQuery(doc, "listdata");
        


/***/ }),

/***/ "./queries/quizdata.gql":
/*!******************************!*\
  !*** ./queries/quizdata.gql ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"quizdata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"typeid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getQuizData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"typeid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"typeid"}}},{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lang"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":131}};
    doc.loc.source = {"body":"query quizdata($typeid:ID!,$lang:String){\n  getQuizData(typeid:$typeid,lang:$lang){\n    id\n    name\n    images\n    lang\n   \n  }\n}\n\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["quizdata"] = oneQuery(doc, "quizdata");
        


/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/home/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/hackathon-project/dyslexic-learn/front-end/pages/home/index.js */"./pages/home/index.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-canvas-draw":
/*!************************************!*\
  !*** external "react-canvas-draw" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-canvas-draw");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map