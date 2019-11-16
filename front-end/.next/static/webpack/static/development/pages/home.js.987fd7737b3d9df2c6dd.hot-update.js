webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home/test.js":
/*!****************************!*\
  !*** ./pages/home/test.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./pages/home/header.js");
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-canvas-draw */ "./node_modules/react-canvas-draw/es/index.js");




var Test = function Test(props) {
  var canvasValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var onSpeak = function onSpeak(val) {
    var sp = new SpeechSynthesisUtterance(val);
    window.speechSynthesis.speak(sp);
  };

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
    type: "test"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column mt4 ph4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex mv3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "br4 ba ph4 pv2 mr3 pointer"
  }, "Alphabets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "br4 ba ph4 pv2 pointer"
  }, "Digit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex  mv3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column items-center w-25 center"
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
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex mv4 items-center justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: " ph4 pv2 ba b--black mr3 pointer",
    onClick: function onClick() {
      return onSpeak('a');
    }
  }, "Speak"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: " ph4 pv2 ba b--black pointer mr3",
    onClick: handleData
  }, "Test"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mr3 ba ph3 pv2 pointer",
    onClick: handleClear
  }, "Clear"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: " ba ph3 pv2 pointer",
    onClick: handleUndo
  }, "Undo"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ })

})
//# sourceMappingURL=home.js.987fd7737b3d9df2c6dd.hot-update.js.map