webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _learn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./learn */ "./pages/home/learn.js");
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-canvas-draw */ "./node_modules/react-canvas-draw/es/index.js");




var Home = function Home(props) {
  var canvasValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _ref = props || {},
      _ref$router = _ref.router;

  _ref$router = _ref$router === void 0 ? {} : _ref$router;
  var _ref$router$query = _ref$router.query,
      query = _ref$router$query === void 0 ? {} : _ref$router$query;
  var type = query.type;

  var handleClear = function handleClear() {
    canvasValue.current.clear();
  };

  var handleUndo = function handleUndo() {
    canvasValue.current.undo();
  };

  var handleData = function handleData() {
    console.log(canvasValue.current.canvas.drawing.toDataURL("image/png")); // canvasValue.current
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_learn__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home.js.46377467b4d139f3c203.hot-update.js.map