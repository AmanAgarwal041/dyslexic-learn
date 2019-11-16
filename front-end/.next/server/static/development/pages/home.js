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
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-canvas-draw */ "react-canvas-draw");
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_canvas_draw__WEBPACK_IMPORTED_MODULE_1__);



const Header = props => {
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
    className: "br4 ba ph4 pv2 mr3 pointer fw6 b--prpl prpl"
  }, "Alphabets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "br4 ba ph4 pv2 pointer fw6 b--prpl prpl"
  }, "Digit")));
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
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./pages/home/header.js");
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-canvas-draw */ "react-canvas-draw");
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_canvas_draw__WEBPACK_IMPORTED_MODULE_2__);




const Learn = props => {
  const canvasValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleClear = () => {
    canvasValue.current.clear();
  };

  const handleUndo = () => {
    canvasValue.current.undo();
  };

  const handleData = () => {
    console.log(canvasValue.current.canvas.drawing.toDataURL("image/png")); // canvasValue.current
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-grow-1 flex-column ph3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleType: props.handleType,
    type: "learn"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-grow-1 items-center mt4 ph4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-between mv3 w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column items-center w-25"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "b f4 mb3 prpl"
  }, "Digits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ba f-18 flex  items-center justify-center w-100 bg-ylw b--ylw prpl"
  }, "A")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column items-center justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: " b b--black ba bn f4 mb3 ph4 pointer prpl pv2"
  }, "Speak"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: " b b--black ba bn f4 mb3 ph4 pointer prpl pv2",
    onClick: handleData
  }, "Test")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column items-center w-25"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "b f4 mb3 prpl"
  }, "Canvas Draw"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_canvas_draw__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      height: '20rem',
      width: "100%"
    },
    brushColor: "red",
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
    className: "absolute b bn bg-prpl bottom-2 f4 flex items-center justify-center ph4 pv2 right-2 w-10 white"
  }, "Next")));
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
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./pages/home/header.js");
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-canvas-draw */ "react-canvas-draw");
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_canvas_draw__WEBPACK_IMPORTED_MODULE_2__);




const Test = props => {
  const canvasValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const onSpeak = val => {
    const sp = new SpeechSynthesisUtterance(val);
    window.speechSynthesis.speak(sp);
  };

  const handleClear = () => {
    canvasValue.current.clear();
  };

  const handleUndo = () => {
    canvasValue.current.undo();
  };

  const handleData = () => {
    console.log(canvasValue.current.canvas.drawing.toDataURL("image/png")); // canvasValue.current
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-grow-1 flex-column ph3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleType: props.handleType,
    type: "test"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-grow-1 items-center mt4 ph4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex  mv3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column items-center w-25 center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "b f4 mb3 prpl"
  }, "Canvas Draw"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_canvas_draw__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      height: '16rem',
      width: "100%"
    },
    brushColor: "red",
    ref: canvasValue
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex mv4 items-center justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: " ph4 pv2  bg-pnk fw6 bn white mr3 pointer bn",
    onClick: () => onSpeak('1')
  }, "Speak"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "bn ph4 pv2 bg-pnk fw6 bn white  pointer mr3",
    onClick: handleData
  }, "Test"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mr3 ba ph3 pv2 pointer fw6 bn bg-pnk white",
    onClick: handleClear
  }, "Clear"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: " ba ph3 pv2 pointer bg-pnk fw6 bn white",
    onClick: handleUndo
  }, "Undo")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/home/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/hackathon-project/dyslexic-learn/front-end/pages/home/index.js */"./pages/home/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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