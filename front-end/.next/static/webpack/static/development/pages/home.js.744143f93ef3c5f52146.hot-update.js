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
    className: "flex  mv3 "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, "Logo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center flex br-pill ba"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "br--right3 pv2 ph4 pointer  ".concat(props.type === 'learn' ? 'bg-blue white' : 'blue', " ")
  }, "Learn"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "br--left3 pv2 ph4 pointer  ".concat(props.type === 'test' ? 'bg-blue white' : 'blue', " "),
    "data-type": "test",
    onClick: props.handleType
  }, "Test")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=home.js.744143f93ef3c5f52146.hot-update.js.map