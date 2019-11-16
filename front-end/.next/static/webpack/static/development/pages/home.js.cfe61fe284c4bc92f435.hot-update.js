webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home/header.js":
/*!******************************!*\
  !*** ./pages/home/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-canvas-draw */ "./node_modules/react-canvas-draw/es/index.js");



var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex  mv3 justify-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, "Logo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center flex br-pill ba b--blue "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "br--right3 pv2 ph4 pointer  ".concat(props.type === 'learn' ? 'bg-blue white' : 'blue', " "),
    "data-type": "learn",
    onClick: props.handleType
  }, "Learn"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "br--left3 pv2 ph4 pointer ".concat(props.type === 'test' ? 'bg-blue white' : 'blue', " "),
    "data-type": "test",
    onClick: props.handleType
  }, "Test")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "br4 ba ph4 pv2 mr3 pointer b--light-red light-red"
  }, "Alphabets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "br4 ba ph4 pv2 pointer b--light-red light-red"
  }, "Digit")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=home.js.cfe61fe284c4bc92f435.hot-update.js.map