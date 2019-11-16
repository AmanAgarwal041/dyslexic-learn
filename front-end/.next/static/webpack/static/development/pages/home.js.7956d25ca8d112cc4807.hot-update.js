webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home/learn.js":
/*!*****************************!*\
  !*** ./pages/home/learn.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./pages/home/header.js");
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-canvas-draw */ "./node_modules/react-canvas-draw/es/index.js");




var Learn = function Learn(props) {
  var canvasValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleClear = function handleClear() {
    canvasValue.current.clear();
  };

  var handleUndo = function handleUndo() {
    canvasValue.current.undo();
  };

  var handleData = function handleData() {
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
    className: "mb2"
  }, "Digits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ba f-6 flex h5 items-center justify-center w-100 bg-ylw b--ylw prpl"
  }, "A")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column items-center justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: " ph4 pv2 ba b--black mb3 pointer"
  }, "Speak"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: " ph4 pv2 ba b--black pointer",
    onClick: handleData
  }, "Test")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column items-center w-25"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mb2"
  }, "Canvas Draw"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_canvas_draw__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      height: '16rem',
      width: "100%",
      borderStyle: 'solid',
      borderWidth: '1px'
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
    className: "absolute ba bottom-2 flex items-center justify-center ph4 pv2 right-2 w-10"
  }, "Next")));
};

/* harmony default export */ __webpack_exports__["default"] = (Learn);

/***/ })

})
//# sourceMappingURL=home.js.7956d25ca8d112cc4807.hot-update.js.map