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
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-canvas-draw */ "./node_modules/react-canvas-draw/es/index.js");



var Home = function Home(props) {
  var canvasValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var query = props.router.query;
  console.log(query);

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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex  mv3 "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, "Logo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center flex br-pill ba"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: " bg-blue br--right3 pv2 ph4 pointer white"
  }, "Learn"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "pv2 br--left3 ph4  pointer"
  }, "Test"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column mt4 ph4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex mv3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "br4 ba ph4 pv2 mr3 pointer"
  }, "Alphabets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "br4 ba ph4 pv2 pointer"
  }, "Digit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-between mv3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column items-center w-25"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mb2"
  }, "Digits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ba f-6 flex h5 items-center justify-center w-100 "
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
  }, "Canvas Draw"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_canvas_draw__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    className: "mr3 ba ph3 pv2 pointer",
    onClick: handleClear
  }, "Clear"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: " ba ph3 pv2 pointer",
    onClick: handleUndo
  }, "Undo")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "absolute ba bottom-2 flex items-center justify-center ph4 pv2 right-2 w-10"
  }, "Next")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home.js.bee4e67183f123048c09.hot-update.js.map