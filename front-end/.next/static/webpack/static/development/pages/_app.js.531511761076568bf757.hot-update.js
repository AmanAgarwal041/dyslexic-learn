webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _apollo_with_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../apollo/with-data */ "./apollo/with-data.js");
/* harmony import */ var _helpers_noop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helpers/noop */ "./helpers/noop.js");
/* harmony import */ var _components_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/toast */ "./components/toast/index.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_15__);












 // import UserContext from '../contexts/user';
// import GET_MY_INFO from '../graph/queries/get-my-info.gql';

 // import NotLoggedin from '../components/not-loggedin';
// import Nav from '../components/nav';
// import Sidebar from '../components/sidebar';


 // import 'rodal/lib/rodal.css';

var Ehrus =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Ehrus, _App);

  function Ehrus() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Ehrus);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Ehrus).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Ehrus, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps; // if (!user || (user && user.category !== 'ogma-user')) {
      // 	return (
      // 		<div className="flex flex-grow-1 bg-near-white black justify-center pa3">
      // 			Please Log in First
      // 		</div>
      // 	);
      // }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_10__["Container"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", null, "Dyslexic-Learn")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex flex-column w-100"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex flex-grow-1"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_toast__WEBPACK_IMPORTED_MODULE_14__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, this.props))))));
    }
  }]);

  return Ehrus;
}(next_app__WEBPACK_IMPORTED_MODULE_10___default.a); // const WithUser = props => {
// 	const { data, refetch } = useQuery(GET_MY_INFO);
// 
// 	if (!data || !data.me) {
// 		if (props.originalUrl.indexOf('?rq=') < 0) {
// 			if (process.browser) {
// 				Router.push(`/?rq=${btoa(props.originalUrl)}`);
// 			} else {
// 				if (props.resStatus && props.resRedirect) {
// 					props.resStatus(302);
// 					props.resRedirect(`/?rq=${Buffer.from(props.originalUrl, 'utf-8').toString('base64')}`);
// 				}
// 			}
// 		}
// 
// 		return <NotLoggedin/>;
// 	}
// 
// 	return (
// 		<UserContext.Provider value={data && data.me ? [data.me, refetch] : [null, noop]}>
// 			<Ehrus {...props} user={data && data.me ? data.me : null} />
// 		</UserContext.Provider>
// 	);
// };
// 
// WithUser.propTypes = {
// 	resRedirect: PropTypes.func,
// 	resStatus: PropTypes.func,
// 	originalUrl: PropTypes.string,
// };
// 
// WithUser.defaultProps = {
// 	resRedirect: undefined,
// 	resStatus: undefined,
// 	originalUrl: '',
// };
// 
// WithUser.getInitialProps = async ({ Component, ctx }) => {
// 	let pageProps = {};
// 	if (Component.getInitialProps) {
// 		pageProps = await Component.getInitialProps(ctx);
// 	}
// 
// 	let resRedirect;
// 	let resStatus;
// 	let originalUrl;
// 	let { query = {} } = pageProps;
// 
// 	if (!process.browser) {
// 		const { res, req } = ctx;
// 		if (res && req) {
// 			resRedirect = res.redirect.bind(res);
// 			resStatus = res.status.bind(res);
// 			originalUrl = req.originalUrl;
// 			query = {
// 				...query,
// 				...(req.query || {}),
// 			};
// 		}
// 	}
// 
// 	return { pageProps, resRedirect, resStatus, originalUrl, query };
// };


/* harmony default export */ __webpack_exports__["default"] = (Object(_apollo_with_data__WEBPACK_IMPORTED_MODULE_12__["withApollo"])(Ehrus));

/***/ })

})
//# sourceMappingURL=_app.js.531511761076568bf757.hot-update.js.map