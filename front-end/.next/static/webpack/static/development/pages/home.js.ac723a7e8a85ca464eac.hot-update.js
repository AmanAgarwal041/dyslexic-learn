webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _learn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learn */ "./pages/home/learn.js");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test */ "./pages/home/test.js");
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-canvas-draw */ "./node_modules/react-canvas-draw/es/index.js");






var Home = function Home(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('learn'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var handleType = function handleType(e) {
    var type = e.currentTarget.dataset.type;
    setType(type);
  };

  if (type === 'test') return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_test__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleType: handleType
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_learn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleType: handleType
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home.js.ac723a7e8a85ca464eac.hot-update.js.map