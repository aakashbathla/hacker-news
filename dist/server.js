/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Nav/Nav */ \"./src/client/components/Nav/Nav.js\");\n/* harmony import */ var _components_Post_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Post/index */ \"./src/client/components/Post/index.js\");\n\n\n\nconst App = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    \"div\",\n    { className: \"col-xs-12\" },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Post_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/commons/constants/api.services.js":
/*!******************************************************!*\
  !*** ./src/client/commons/constants/api.services.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst apis = {\n  search: 'https://hn.algolia.com/api/v1/search'\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apis);\n\n//# sourceURL=webpack:///./src/client/commons/constants/api.services.js?");

/***/ }),

/***/ "./src/client/commons/constants/index.js":
/*!***********************************************!*\
  !*** ./src/client/commons/constants/index.js ***!
  \***********************************************/
/*! exports provided: FRONT_PAGE_TAG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRONT_PAGE_TAG\", function() { return FRONT_PAGE_TAG; });\nconst FRONT_PAGE_TAG = 'front_page';\n\n//# sourceURL=webpack:///./src/client/commons/constants/index.js?");

/***/ }),

/***/ "./src/client/commons/initialState/postList.state.js":
/*!***********************************************************!*\
  !*** ./src/client/commons/initialState/postList.state.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst postListState = {\n  isFetching: false,\n  data: {\n    hits: [],\n    nbPages: 0,\n    page: 0\n  },\n  error: null\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (postListState);\n\n//# sourceURL=webpack:///./src/client/commons/initialState/postList.state.js?");

/***/ }),

/***/ "./src/client/commons/utils/ServiceUtil.js":
/*!*************************************************!*\
  !*** ./src/client/commons/utils/ServiceUtil.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ \"es6-promise\");\n/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n\n\n\nes6_promise__WEBPACK_IMPORTED_MODULE_1___default.a.polyfill();\n\nclass ServiceUtils {\n  constructor() {\n    this.basePath = Object({\"NODE_ENV\":\"development\"}).API_BASE_PATH || '';\n    this.fetch = this.fetch.bind(this);\n  }\n\n  fetch(url, additionalFetchOptions) {\n    var _this = this;\n\n    return _asyncToGenerator(function* () {\n      let responseData;\n\n      // Request options in axios format\n      const reqOptions = _extends({\n        url: `${_this.basePath}${url}`,\n        withCredentials: false\n      }, additionalFetchOptions);\n\n      try {\n        const response = yield axios__WEBPACK_IMPORTED_MODULE_0___default()(reqOptions);\n        responseData = response.data;\n      } catch (err) {\n        throw err;\n      }\n\n      return responseData;\n    })();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new ServiceUtils());\n\n//# sourceURL=webpack:///./src/client/commons/utils/ServiceUtil.js?");

/***/ }),

/***/ "./src/client/commons/utils/url.js":
/*!*****************************************!*\
  !*** ./src/client/commons/utils/url.js ***!
  \*****************************************/
/*! exports provided: createQueryParamsUrl, buildUrl, extractDomainFromUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createQueryParamsUrl\", function() { return createQueryParamsUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildUrl\", function() { return buildUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extractDomainFromUrl\", function() { return extractDomainFromUrl; });\n/**\r\n *\r\n * @param {Object} query - Object of query params\r\n * @returns {String}\r\n */\nconst createQueryParamsUrl = (query = {}) => {\n  const queryParams = [];\n\n  const keys = Object.keys(query);\n\n  for (let i = 0, l = keys.length; i < l; i += 1) {\n    const value = `${query[keys[i]]}`;\n    queryParams.push(`${keys[i]}=${value}`);\n  }\n\n  return queryParams.join('&');\n};\n\n/**\r\n *\r\n * @param {Object} options - Url options\r\n * @returns {String} - Url\r\n * @description - Creates a url with query params\r\n */\nconst buildUrl = options => {\n  if (typeof options === 'object') {\n    const { pathName, query } = options;\n\n    let url = pathName;\n\n    if (typeof query === 'object') {\n      url += `?${createQueryParamsUrl(query)}`;\n    }\n    return url;\n  }\n\n  return options;\n};\n\nconst extractDomainFromUrl = (url = '') => {\n  const nonEmptyUrl = url || '';\n  const urlParts = nonEmptyUrl.replace('http://', '').replace('https://', '').split(/[/?#]/);\n  return urlParts[0];\n};\n\n//# sourceURL=webpack:///./src/client/commons/utils/url.js?");

/***/ }),

/***/ "./src/client/components/HidePost/HidePost.js":
/*!****************************************************!*\
  !*** ./src/client/components/HidePost/HidePost.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst HidePost = ({ hidePost, objectId }) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    \"a\",\n    {\n      className: \"post__item--link\",\n      onClick: e => {\n        e.preventDefault();\n        hidePost(objectId);\n      }\n    },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"b\",\n      null,\n      \"hide\"\n    )\n  );\n};\n\nHidePost.propTypes = {\n  hidePost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  objectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HidePost);\n\n//# sourceURL=webpack:///./src/client/components/HidePost/HidePost.js?");

/***/ }),

/***/ "./src/client/components/HidePost/actions.js":
/*!***************************************************!*\
  !*** ./src/client/components/HidePost/actions.js ***!
  \***************************************************/
/*! exports provided: hidePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hidePost\", function() { return hidePost; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/client/components/HidePost/constants.js\");\n\n\nconst hidePost = data => ({\n  type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"HIDE_POST\"],\n  data\n});\n\n//# sourceURL=webpack:///./src/client/components/HidePost/actions.js?");

/***/ }),

/***/ "./src/client/components/HidePost/constants.js":
/*!*****************************************************!*\
  !*** ./src/client/components/HidePost/constants.js ***!
  \*****************************************************/
/*! exports provided: HIDE_POST_KEY, HIDE_POST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HIDE_POST_KEY\", function() { return HIDE_POST_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HIDE_POST\", function() { return HIDE_POST; });\nconst HIDE_POST_KEY = \"HACKER_NEWS/POST_LIST/HIDE_POST_KEY\";\nconst HIDE_POST = \"HACKER_NEWS/POST_LIST/HIDE_FEED\";\n\n//# sourceURL=webpack:///./src/client/components/HidePost/constants.js?");

/***/ }),

/***/ "./src/client/components/HidePost/index.js":
/*!*************************************************!*\
  !*** ./src/client/components/HidePost/index.js ***!
  \*************************************************/
/*! exports provided: mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapDispatchToProps\", function() { return mapDispatchToProps; });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/client/components/HidePost/actions.js\");\n/* harmony import */ var _HidePost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HidePost */ \"./src/client/components/HidePost/HidePost.js\");\n\n\n\n\n\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    hidePost: postId => {\n      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[\"hidePost\"])(postId));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(null, mapDispatchToProps)(_HidePost__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n\n//# sourceURL=webpack:///./src/client/components/HidePost/index.js?");

/***/ }),

/***/ "./src/client/components/HidePost/sagas.js":
/*!*************************************************!*\
  !*** ./src/client/components/HidePost/sagas.js ***!
  \*************************************************/
/*! exports provided: saveHidePostSaga, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveHidePostSaga\", function() { return saveHidePostSaga; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hidePostSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/client/components/HidePost/constants.js\");\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/localStorage */ \"./src/client/utils/localStorage.js\");\n/* eslint-disable require-yield */\n\n\n\n\n\nfunction* saveHidePostSaga(action) {\n  const { data: objectId } = action;\n\n  const storage = new _utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"LocalStorageUtil\"]();\n\n  storage.saveItemInArray(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HIDE_POST_KEY\"], objectId);\n\n  // Here, an API request can be made to hide feed\n}\n\nfunction* hidePostSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HIDE_POST\"], saveHidePostSaga);\n}\n\n//# sourceURL=webpack:///./src/client/components/HidePost/sagas.js?");

/***/ }),

/***/ "./src/client/components/LoadMore/LoadMore.js":
/*!****************************************************!*\
  !*** ./src/client/components/LoadMore/LoadMore.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst isVisible = (currentPage, totalPages) => {\n  return !!(totalPages && currentPage !== totalPages);\n};\n\nconst LoadMore = ({ currentPage, fetchPostListData, totalPages }) => {\n  const cp = currentPage + 1;\n  return isVisible(cp, totalPages) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    \"div\",\n    { className: \"load-more sm-text-center md-text-initial\" },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"a\",\n      {\n        onClick: e => {\n          e.preventDefault();\n          fetchPostListData({ page: cp });\n        },\n        className: \"post__button\"\n      },\n      \"More\"\n    )\n  );\n};\n\nLoadMore.propTypes = {\n  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  fetchPostListData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  totalPages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadMore);\n\n//# sourceURL=webpack:///./src/client/components/LoadMore/LoadMore.js?");

/***/ }),

/***/ "./src/client/components/LoadMore/index.js":
/*!*************************************************!*\
  !*** ./src/client/components/LoadMore/index.js ***!
  \*************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapStateToProps\", function() { return mapStateToProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapDispatchToProps\", function() { return mapDispatchToProps; });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Post_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Post/selectors */ \"./src/client/components/Post/selectors.js\");\n/* harmony import */ var _Post_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Post/actions */ \"./src/client/components/Post/actions.js\");\n/* harmony import */ var _LoadMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadMore */ \"./src/client/components/LoadMore/LoadMore.js\");\n\n\n\n\n\n\n\n\nconst mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_1__[\"createStructuredSelector\"])({\n  currentPage: _Post_selectors__WEBPACK_IMPORTED_MODULE_2__[\"selectCurrentPageData\"],\n  totalPages: _Post_selectors__WEBPACK_IMPORTED_MODULE_2__[\"selectTotalPageData\"]\n});\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    fetchPostListData: params => {\n      dispatch(Object(_Post_actions__WEBPACK_IMPORTED_MODULE_3__[\"fetchPostListData\"])(params));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(_LoadMore__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));\n\n//# sourceURL=webpack:///./src/client/components/LoadMore/index.js?");

/***/ }),

/***/ "./src/client/components/Loading/index.js":
/*!************************************************!*\
  !*** ./src/client/components/Loading/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Loading = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n  \"div\",\n  { className: \"spinner\" },\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"bounce1\" }),\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"bounce2\" }),\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"bounce3\" })\n);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);\n\n//# sourceURL=webpack:///./src/client/components/Loading/index.js?");

/***/ }),

/***/ "./src/client/components/Nav/Nav.js":
/*!******************************************!*\
  !*** ./src/client/components/Nav/Nav.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Nav = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    \"div\",\n    { className: \"d-flex nav nav__mobile\" },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: \"nav__image ml25\",\n        src: \"https://news.ycombinator.com/y18.gif\",\n        alt: \"logo image\"\n      }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"span\",\n        { className: \"nav__title ml25\" },\n        \"Hacker News\"\n      )\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      { className: \"nav__mobile--padding\" },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"span\",\n        { className: \"nav__links ml25\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          \"a\",\n          { className: \"active\", href: \"top\" },\n          \"Top\"\n        )\n      )\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\n//# sourceURL=webpack:///./src/client/components/Nav/Nav.js?");

/***/ }),

/***/ "./src/client/components/Post/PostItem/index.js":
/*!******************************************************!*\
  !*** ./src/client/components/Post/PostItem/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Utils_Time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils/Time */ \"./src/client/components/Utils/Time.js\");\n/* harmony import */ var _HidePost_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../HidePost/index */ \"./src/client/components/HidePost/index.js\");\n/* harmony import */ var _Vote_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Vote/index */ \"./src/client/components/Vote/index.js\");\n\n\n\n\nconst PostItem = ({\n  author,\n  created_at_i,\n  num_comments,\n  objectID,\n  points,\n  title,\n  story_title,\n  url,\n  voted\n}) => {\n  const urlName = url ? new URL(url).origin : \"\";\n  const created_at = created_at_i ? Object(_Utils_Time__WEBPACK_IMPORTED_MODULE_1__[\"Time\"])(new Date(Date.now() - created_at_i)) : \"\";\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    \"div\",\n    { className: \"d-flex align-items-center mh50 post__item--container\" },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      { className: \"post__item--no_of_comments ml25\" },\n      num_comments\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      { className: \"post__item--no_of_upvotes ml25\" },\n      points\n    ),\n    !voted ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Vote_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { objectId: objectID }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"post__item--upvote ml10\" }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      { className: \"d-flex post__item--width--desktop post__item--direction--mobile\" },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        { className: \"post__item--title ml10\" },\n        title\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        { className: \"post__item--author ml10\" },\n        \"(\",\n        urlName,\n        \") by \",\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          \"b\",\n          null,\n          author\n        ),\n        \" \",\n        created_at,\n        \" \",\n        voted && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Vote_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { objectId: objectID, voted: voted }),\n        \" [\",\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HidePost_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { objectId: objectID }),\n        \"]\"\n      )\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostItem);\n\n//# sourceURL=webpack:///./src/client/components/Post/PostItem/index.js?");

/***/ }),

/***/ "./src/client/components/Post/PostList/actions.js":
/*!********************************************************!*\
  !*** ./src/client/components/Post/PostList/actions.js ***!
  \********************************************************/
/*! exports provided: FETCH_LOAD, FETCH_SUCCESS, FETCH_FAIL, FETCH_TEXT_CHANGE, FETCH_TEXT_RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_LOAD\", function() { return FETCH_LOAD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_SUCCESS\", function() { return FETCH_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_FAIL\", function() { return FETCH_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_TEXT_CHANGE\", function() { return FETCH_TEXT_CHANGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_TEXT_RESET\", function() { return FETCH_TEXT_RESET; });\nconst FETCH_LOAD = \"FETCH_LOAD\";\nconst FETCH_SUCCESS = \"FETCH_SUCCESS\";\nconst FETCH_FAIL = \"FETCH_FAIL\";\nconst FETCH_TEXT_CHANGE = \"FETCH_TEXT_CHANGE\";\nconst FETCH_TEXT_RESET = \"FETCH_TEXT_RESET\";\n\n//# sourceURL=webpack:///./src/client/components/Post/PostList/actions.js?");

/***/ }),

/***/ "./src/client/components/Post/PostList/index.js":
/*!******************************************************!*\
  !*** ./src/client/components/Post/PostList/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PostItem_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PostItem/index */ \"./src/client/components/Post/PostItem/index.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Loading */ \"./src/client/components/Loading/index.js\");\n/* harmony import */ var _LoadMore_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LoadMore/index */ \"./src/client/components/LoadMore/index.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ \"./src/client/components/Post/PostList/reducer.js\");\n/* harmony import */ var _Utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utils/utils */ \"./src/client/components/Utils/utils.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\n\n\n\nconst searchUrl = \"https://hn.algolia.com/api/v1/search?query=\";\n\nconst Post = ({ postListData, fetchPostListData }) => {\n  let filteredData;\n  let votedData;\n  if (postListData && postListData.hits && postListData.hits.length > 0) {\n    filteredData = Object(_Utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"filterPostDataWithHiddenPosts\"])(postListData);\n    votedData = Object(_Utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"updateUpVoteInPostData\"])(filteredData);\n  }\n  const postList = votedData ? votedData.hits : undefined;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    fetchPostListData();\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    \"div\",\n    { className: \"post\" },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      { className: \"post__item\" },\n      !postList ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        null,\n        postList && postList.map(hit => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostItem_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _extends({ key: hit.objectID }, hit))),\n        postList && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadMore_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n      )\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\n//# sourceURL=webpack:///./src/client/components/Post/PostList/index.js?");

/***/ }),

/***/ "./src/client/components/Post/PostList/reducer.js":
/*!********************************************************!*\
  !*** ./src/client/components/Post/PostList/reducer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/client/components/Post/PostList/actions.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\n\nconst INITIAL_STATE = {\n  error: false,\n  results: {},\n  loading: true,\n  query: \"\"\n};\n\nconst DEFAULT_HITS = 20;\n\nconst fetchDataReducer = (state, { type, payload = null }) => {\n  switch (type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_LOAD\"]:\n      return _extends({}, state, {\n        loading: true,\n        error: false\n      });\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_FAIL\"]:\n      return _extends({}, state, {\n        loading: false,\n        error: true\n      });\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_SUCCESS\"]:\n      const oldHits = state.results[state.query] ? state.results[state.query].hits : [];\n      const updatedHits = [...oldHits, ...payload.hits];\n\n      return _extends({}, state, {\n        loading: false,\n        results: _extends({}, state.results, {\n          [state.query]: { hits: updatedHits, page: payload.page }\n        })\n      });\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_TEXT_CHANGE\"]:\n      return _extends({}, state, {\n        query: payload\n      });\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_TEXT_RESET\"]:\n      return _extends({}, state, {\n        query: \"\"\n      });\n    default:\n      return state;\n  }\n};\n\nconst fetchDataComp = searchUrl => {\n  const [state, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(fetchDataReducer, INITIAL_STATE);\n\n  const fetchData = (page = 0) => {\n    const preExisting = state.results[state.query] && state.results[state.query].page + 1;\n    try {\n      let results;\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${searchUrl}${state.query}&tags=story&page=${preExisting ? preExisting : page}&hitsPerPage=${DEFAULT_HITS}`).then(resp => {\n        results = resp;\n        dispatch({\n          type: _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_SUCCESS\"],\n          payload: {\n            hits: results.data.hits,\n            page: preExisting ? preExisting : page\n          }\n        });\n      });\n    } catch (error) {\n      console.log(error);\n      dispatch({ type: _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_FAIL\"] });\n    }\n  };\n\n  const paginate = () => {\n    const { results, query } = state;\n    let updatedPage = results[query].page + 1;\n    fetchData();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    fetchData();\n  }, []);\n\n  return _extends({}, state, { paginate });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchDataComp);\n\n//# sourceURL=webpack:///./src/client/components/Post/PostList/reducer.js?");

/***/ }),

/***/ "./src/client/components/Post/actions.js":
/*!***********************************************!*\
  !*** ./src/client/components/Post/actions.js ***!
  \***********************************************/
/*! exports provided: fetchPostListData, fetchPostListDataSuccess, fetchPostListDataError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPostListData\", function() { return fetchPostListData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPostListDataSuccess\", function() { return fetchPostListDataSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPostListDataError\", function() { return fetchPostListDataError; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/client/components/Post/constants.js\");\n\n\nconst fetchPostListData = params => ({\n  type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_POST_LIST_DATA\"],\n  params\n});\n\nconst fetchPostListDataSuccess = data => ({\n  type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_POST_LIST_DATA_SUCCESS\"],\n  data\n});\n\nconst fetchPostListDataError = error => ({\n  type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_POST_LIST_DATA_ERROR\"],\n  error\n});\n\n//# sourceURL=webpack:///./src/client/components/Post/actions.js?");

/***/ }),

/***/ "./src/client/components/Post/constants.js":
/*!*************************************************!*\
  !*** ./src/client/components/Post/constants.js ***!
  \*************************************************/
/*! exports provided: FETCH_POST_LIST_DATA, FETCH_POST_LIST_DATA_SUCCESS, FETCH_POST_LIST_DATA_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_POST_LIST_DATA\", function() { return FETCH_POST_LIST_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_POST_LIST_DATA_SUCCESS\", function() { return FETCH_POST_LIST_DATA_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_POST_LIST_DATA_ERROR\", function() { return FETCH_POST_LIST_DATA_ERROR; });\nconst FETCH_POST_LIST_DATA = \"HACKER_NEWS/POST_LIST/FETCH_POST_LIST_DATA\";\nconst FETCH_POST_LIST_DATA_SUCCESS = \"HACKER_NEWS/POST_LIST/FETCH_POST_LIST_DATA_SUCCESS\";\nconst FETCH_POST_LIST_DATA_ERROR = \"HACKER_NEWS/POST_LIST/FETCH_POST_LIST_DATA_ERROR\";\n\n//# sourceURL=webpack:///./src/client/components/Post/constants.js?");

/***/ }),

/***/ "./src/client/components/Post/index.js":
/*!*********************************************!*\
  !*** ./src/client/components/Post/index.js ***!
  \*********************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapStateToProps\", function() { return mapStateToProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapDispatchToProps\", function() { return mapDispatchToProps; });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ \"./src/client/components/Post/selectors.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./src/client/components/Post/actions.js\");\n/* harmony import */ var _PostList_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostList/index */ \"./src/client/components/Post/PostList/index.js\");\n\n\n\n\n\n\n\n\nconst mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_1__[\"createStructuredSelector\"])({\n  postListData: _selectors__WEBPACK_IMPORTED_MODULE_2__[\"selectPostListData\"]\n});\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    fetchPostListData: () => {\n      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__[\"fetchPostListData\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(_PostList_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));\n\n//# sourceURL=webpack:///./src/client/components/Post/index.js?");

/***/ }),

/***/ "./src/client/components/Post/reducers.js":
/*!************************************************!*\
  !*** ./src/client/components/Post/reducers.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/client/components/Post/constants.js\");\n/* harmony import */ var _commons_initialState_postList_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/initialState/postList.state */ \"./src/client/commons/initialState/postList.state.js\");\n/* harmony import */ var _HidePost_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HidePost/constants */ \"./src/client/components/HidePost/constants.js\");\n/* harmony import */ var _Utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/utils */ \"./src/client/components/Utils/utils.js\");\n/* harmony import */ var _Vote_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Vote/constants */ \"./src/client/components/Vote/constants.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n// import { VOTE_FEED } from \"../../atoms/Vote/constants\";\n\n\n\n\n\n\n\nconst initialState = _commons_initialState_postList_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nconst postListReducer = (state = initialState, { type, data, error }) => {\n  switch (type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_POST_LIST_DATA\"]:\n      return _extends({}, state, {\n        isFetching: true\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_POST_LIST_DATA_SUCCESS\"]:\n      return _extends({}, state, {\n        isFetching: false,\n        data\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_POST_LIST_DATA_ERROR\"]:\n      return _extends({}, state, {\n        isFetching: false,\n        error\n      });\n\n    case _HidePost_constants__WEBPACK_IMPORTED_MODULE_2__[\"HIDE_POST\"]:\n      return Object(_Utils_utils__WEBPACK_IMPORTED_MODULE_3__[\"removePost\"])(state, data);\n\n    case _Vote_constants__WEBPACK_IMPORTED_MODULE_4__[\"VOTE_POST\"]:\n      return _extends({}, state, {\n        data: _extends({}, state.data)\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (postListReducer);\n\n//# sourceURL=webpack:///./src/client/components/Post/reducers.js?");

/***/ }),

/***/ "./src/client/components/Post/sagas.js":
/*!*********************************************!*\
  !*** ./src/client/components/Post/sagas.js ***!
  \*********************************************/
/*! exports provided: loadPostListSaga, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadPostListSaga\", function() { return loadPostListSaga; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return postListSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/history */ \"./src/client/utils/history.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./src/client/components/Post/actions.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/client/components/Post/constants.js\");\n/* harmony import */ var _commons_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commons/constants */ \"./src/client/commons/constants/index.js\");\n/* harmony import */ var _commons_constants_api_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commons/constants/api.services */ \"./src/client/commons/constants/api.services.js\");\n/* harmony import */ var _commons_utils_ServiceUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commons/utils/ServiceUtil */ \"./src/client/commons/utils/ServiceUtil.js\");\n/* harmony import */ var _commons_utils_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commons/utils/url */ \"./src/client/commons/utils/url.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst updateQueryParams = params => {\n  if (_utils_history__WEBPACK_IMPORTED_MODULE_1__[\"default\"] && Object.keys(params).indexOf(\"page\") > -1) {\n    const queryParamsUrl = Object(_commons_utils_url__WEBPACK_IMPORTED_MODULE_7__[\"buildUrl\"])({\n      pathName: \"/\",\n      query: _extends({}, params)\n    });\n\n    _utils_history__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push(queryParamsUrl);\n  }\n};\n\nfunction* loadPostListSaga(action) {\n  try {\n    const { params = {} } = action;\n\n    const url = Object(_commons_utils_url__WEBPACK_IMPORTED_MODULE_7__[\"buildUrl\"])({\n      pathName: _commons_constants_api_services__WEBPACK_IMPORTED_MODULE_5__[\"default\"].search,\n      query: _extends({\n        tags: _commons_constants__WEBPACK_IMPORTED_MODULE_4__[\"FRONT_PAGE_TAG\"]\n      }, params)\n    });\n\n    const listingData = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(_commons_utils_ServiceUtil__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch, url);\n\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchPostListDataSuccess\"])(listingData));\n\n    updateQueryParams(params);\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchPostListDataError\"])(err));\n  }\n}\n\nfunction* postListSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_constants__WEBPACK_IMPORTED_MODULE_3__[\"FETCH_POST_LIST_DATA\"], loadPostListSaga);\n}\n\n//# sourceURL=webpack:///./src/client/components/Post/sagas.js?");

/***/ }),

/***/ "./src/client/components/Post/selectors.js":
/*!*************************************************!*\
  !*** ./src/client/components/Post/selectors.js ***!
  \*************************************************/
/*! exports provided: selectPostListData, selectTotalPageData, selectCurrentPageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectPostListData\", function() { return selectPostListData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectTotalPageData\", function() { return selectTotalPageData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectCurrentPageData\", function() { return selectCurrentPageData; });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst getPostListDataState = state => {\n  return state.postList;\n};\n\nconst selectPostListData = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(getPostListDataState, postListDataState => postListDataState.data);\n\nconst selectTotalPageData = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(getPostListDataState, postListDataState => postListDataState.data.nbPages);\n\nconst selectCurrentPageData = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(getPostListDataState, postListDataState => postListDataState.data.page);\n\n//# sourceURL=webpack:///./src/client/components/Post/selectors.js?");

/***/ }),

/***/ "./src/client/components/Utils/Time.js":
/*!*********************************************!*\
  !*** ./src/client/components/Utils/Time.js ***!
  \*********************************************/
/*! exports provided: Time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Time\", function() { return Time; });\nconst Time = date => {\n  var seconds = Math.floor((new Date() - date) / 1000);\n\n  var interval = Math.floor(seconds / 31536000);\n\n  if (interval > 1) {\n    return interval + \" years\";\n  }\n  interval = Math.floor(seconds / 2592000);\n  if (interval > 1) {\n    return interval + \" months ago\";\n  }\n  interval = Math.floor(seconds / 86400);\n  if (interval > 1) {\n    return interval + \" days ago\";\n  }\n  interval = Math.floor(seconds / 3600);\n  if (interval > 1) {\n    return interval + \" hours ago\";\n  }\n  interval = Math.floor(seconds / 60);\n  if (interval > 1) {\n    return interval + \" minutes ago\";\n  }\n  return Math.floor(seconds) + \" seconds ago\";\n};\n\n//# sourceURL=webpack:///./src/client/components/Utils/Time.js?");

/***/ }),

/***/ "./src/client/components/Utils/utils.js":
/*!**********************************************!*\
  !*** ./src/client/components/Utils/utils.js ***!
  \**********************************************/
/*! exports provided: removePost, filterPostDataWithHiddenPosts, updateUpVoteInPostData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removePost\", function() { return removePost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterPostDataWithHiddenPosts\", function() { return filterPostDataWithHiddenPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateUpVoteInPostData\", function() { return updateUpVoteInPostData; });\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/localStorage */ \"./src/client/utils/localStorage.js\");\n/* harmony import */ var _HidePost_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HidePost/constants */ \"./src/client/components/HidePost/constants.js\");\n/* harmony import */ var _Vote_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Vote/constants */ \"./src/client/components/Vote/constants.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\nconst removePost = (postListState, objectID) => {\n  const { data } = postListState,\n        others = _objectWithoutProperties(postListState, [\"data\"]);\n  const { hits } = data;\n\n  const postIndex = hits.findIndex(post => {\n    return post.objectID === objectID;\n  });\n\n  hits.splice(postIndex, 1);\n\n  return _extends({\n    data: _extends({}, data, {\n      hits: [...hits]\n    })\n  }, others);\n};\n\n\nconst filterPostDataWithHiddenPosts = postListData => {\n  const storage = new _utils_localStorage__WEBPACK_IMPORTED_MODULE_0__[\"LocalStorageUtil\"]();\n\n  const hiddenPostIds = JSON.parse(storage.getItem(_HidePost_constants__WEBPACK_IMPORTED_MODULE_1__[\"HIDE_POST_KEY\"]) || \"[]\");\n\n  if (hiddenPostIds.length) {\n    const { hits } = postListData;\n    const filteredHits = hits.filter(hit => {\n      return hiddenPostIds.indexOf(hit.objectID) === -1;\n    });\n\n    return _extends({}, postListData, {\n      hits: filteredHits\n    });\n  }\n  return postListData;\n};\n\nconst updateUpVoteInPostData = postListData => {\n  const storage = new _utils_localStorage__WEBPACK_IMPORTED_MODULE_0__[\"LocalStorageUtil\"]();\n\n  const votedPostIds = JSON.parse(storage.getItem(_Vote_constants__WEBPACK_IMPORTED_MODULE_2__[\"VOTE_POST_KEY\"]) || \"[]\");\n\n  if (votedPostIds.length) {\n    const { hits } = postListData;\n    const votedHits = hits.map(hit => {\n      const cloneHit = _extends({}, hit);\n\n      if (votedPostIds.indexOf(cloneHit.objectID) > -1) {\n        cloneHit.voted = true;\n      }\n\n      return cloneHit;\n    });\n\n    return _extends({}, postListData, {\n      hits: votedHits\n    });\n  }\n  return postListData;\n};\n\n//# sourceURL=webpack:///./src/client/components/Utils/utils.js?");

/***/ }),

/***/ "./src/client/components/Vote/UnVote.js":
/*!**********************************************!*\
  !*** ./src/client/components/Vote/UnVote.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst UnVote = ({ votePost, objectId }) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    \"a\",\n    {\n      onClick: e => {\n        e.preventDefault();\n        votePost({\n          objectId,\n          voted: false\n        });\n      },\n      className: \"un-vote-link secondary-color\"\n    },\n    \"unvote\"\n  );\n};\n\nUnVote.propTypes = {\n  objectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  votePost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UnVote);\n\n//# sourceURL=webpack:///./src/client/components/Vote/UnVote.js?");

/***/ }),

/***/ "./src/client/components/Vote/UpVote.js":
/*!**********************************************!*\
  !*** ./src/client/components/Vote/UpVote.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst UpVote = ({ votePost, objectId }) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    \"a\",\n    {\n      onClick: e => {\n        e.preventDefault();\n        votePost({\n          objectId,\n          voted: true\n        });\n      },\n      className: \"up-vote-link\"\n    },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"up-vote-arrow\" })\n  );\n};\n\nUpVote.propTypes = {\n  objectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  votePost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpVote);\n\n//# sourceURL=webpack:///./src/client/components/Vote/UpVote.js?");

/***/ }),

/***/ "./src/client/components/Vote/Vote.js":
/*!********************************************!*\
  !*** ./src/client/components/Vote/Vote.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UnVote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnVote */ \"./src/client/components/Vote/UnVote.js\");\n/* harmony import */ var _UpVote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UpVote */ \"./src/client/components/Vote/UpVote.js\");\n\n\n\n\n\n\nconst Vote = ({ votePost, objectId, voted }) => {\n  return voted ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UnVote__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { votePost: votePost, objectId: objectId }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpVote__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { votePost: votePost, objectId: objectId });\n};\n\nVote.propTypes = {\n  objectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  votePost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  voted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n};\n\nVote.defaultProps = {\n  voted: false\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vote);\n\n//# sourceURL=webpack:///./src/client/components/Vote/Vote.js?");

/***/ }),

/***/ "./src/client/components/Vote/actions.js":
/*!***********************************************!*\
  !*** ./src/client/components/Vote/actions.js ***!
  \***********************************************/
/*! exports provided: votePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"votePost\", function() { return votePost; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/client/components/Vote/constants.js\");\n\n\nconst votePost = data => ({\n  type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"VOTE_POST\"],\n  data\n});\n\n//# sourceURL=webpack:///./src/client/components/Vote/actions.js?");

/***/ }),

/***/ "./src/client/components/Vote/constants.js":
/*!*************************************************!*\
  !*** ./src/client/components/Vote/constants.js ***!
  \*************************************************/
/*! exports provided: VOTE_POST_KEY, VOTE_POST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VOTE_POST_KEY\", function() { return VOTE_POST_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VOTE_POST\", function() { return VOTE_POST; });\nconst VOTE_POST_KEY = \"HACKER_NEWS/POST_LIST/VOTE_POST_KEY\";\nconst VOTE_POST = \"HACKER_NEWS/POST_LIST/VOTE_POST\";\n\n//# sourceURL=webpack:///./src/client/components/Vote/constants.js?");

/***/ }),

/***/ "./src/client/components/Vote/index.js":
/*!*********************************************!*\
  !*** ./src/client/components/Vote/index.js ***!
  \*********************************************/
/*! exports provided: mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapDispatchToProps\", function() { return mapDispatchToProps; });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/client/components/Vote/actions.js\");\n/* harmony import */ var _Vote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vote */ \"./src/client/components/Vote/Vote.js\");\n\n\n\n\n\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    votePost: data => {\n      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[\"votePost\"])(data));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(null, mapDispatchToProps)(_Vote__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n\n//# sourceURL=webpack:///./src/client/components/Vote/index.js?");

/***/ }),

/***/ "./src/client/components/Vote/sagas.js":
/*!*********************************************!*\
  !*** ./src/client/components/Vote/sagas.js ***!
  \*********************************************/
/*! exports provided: saveUpVotePostSaga, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveUpVotePostSaga\", function() { return saveUpVotePostSaga; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return upVotePostSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/client/components/Vote/constants.js\");\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/localStorage */ \"./src/client/utils/localStorage.js\");\n/* eslint-disable require-yield */\n\n\n\n\n\nfunction* saveUpVotePostSaga(action) {\n  const {\n    data: { objectId, voted }\n  } = action;\n  const storage = new _utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"LocalStorageUtil\"]();\n\n  if (voted) {\n    storage.saveItemInArray(_constants__WEBPACK_IMPORTED_MODULE_1__[\"VOTE_POST_KEY\"], objectId);\n  } else {\n    storage.removeItemFromArray(_constants__WEBPACK_IMPORTED_MODULE_1__[\"VOTE_POST_KEY\"], objectId);\n  }\n}\n\nfunction* upVotePostSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_constants__WEBPACK_IMPORTED_MODULE_1__[\"VOTE_POST\"], saveUpVotePostSaga);\n}\n\n//# sourceURL=webpack:///./src/client/components/Vote/sagas.js?");

/***/ }),

/***/ "./src/client/reducers.js":
/*!********************************!*\
  !*** ./src/client/reducers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Post_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Post/reducers */ \"./src/client/components/Post/reducers.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  postList: _components_Post_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/client/reducers.js?");

/***/ }),

/***/ "./src/client/sagas.js":
/*!*****************************!*\
  !*** ./src/client/sagas.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_components_Post_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/components/Post/sagas */ \"./src/client/components/Post/sagas.js\");\n/* harmony import */ var _client_components_HidePost_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/components/HidePost/sagas */ \"./src/client/components/HidePost/sagas.js\");\n/* harmony import */ var _client_components_Vote_sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/components/Vote/sagas */ \"./src/client/components/Vote/sagas.js\");\n\n\n\n\n\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(_client_components_Post_sagas__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), Object(_client_components_HidePost_sagas__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), Object(_client_components_Vote_sagas__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()]);\n}\n\n//# sourceURL=webpack:///./src/client/sagas.js?");

/***/ }),

/***/ "./src/client/store.js":
/*!*****************************!*\
  !*** ./src/client/store.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./src/client/reducers.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas */ \"./src/client/sagas.js\");\n\n\n\n\n\n\n\nconst sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();\n\nconst configureStore = preloadedState => {\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(Object(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(sagaMiddleware)));\n\n  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  return store;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configureStore);\n\n//# sourceURL=webpack:///./src/client/store.js?");

/***/ }),

/***/ "./src/client/utils/history.js":
/*!*************************************!*\
  !*** ./src/client/utils/history.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// eslint-disable-next-line import/no-mutable-exports\nlet history;\n\nif (typeof document !== 'undefined') {\n  // eslint-disable-next-line global-require\n  const { createBrowserHistory } = __webpack_require__(/*! history */ \"history\");\n\n  history = createBrowserHistory();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (history);\n\n//# sourceURL=webpack:///./src/client/utils/history.js?");

/***/ }),

/***/ "./src/client/utils/localStorage.js":
/*!******************************************!*\
  !*** ./src/client/utils/localStorage.js ***!
  \******************************************/
/*! exports provided: LocalStorageUtil, isStorageUsable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocalStorageUtil\", function() { return LocalStorageUtil; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isStorageUsable\", function() { return isStorageUsable; });\n/**\r\n *\r\n * A Utility to store Key Pair value in localStorage\r\n */\n\nclass LocalStorageUtil {\n  constructor() {\n    this.getItem = key => {\n      return isStorageUsable() && typeof this.storage !== 'undefined' ? this.storage.getItem(key) : '';\n    };\n\n    this.saveItem = (key, value) => {\n      if (isStorageUsable()) {\n        this.storage.setItem(key, value);\n      }\n    };\n\n    this.removeItem = key => {\n      if (isStorageUsable()) {\n        this.storage.removeItem(key);\n      }\n    };\n\n    this.saveItemInArray = (key, value) => {\n      const feedIds = JSON.parse(this.getItem(key) || '[]');\n      feedIds.push(value);\n      this.saveItem(key, JSON.stringify(feedIds));\n    };\n\n    this.removeItemFromArray = (key, value) => {\n      const items = JSON.parse(this.getItem(key) || '[]');\n      const itemIndex = items.findIndex(item => item === value);\n      items.splice(itemIndex, 1);\n      this.saveItem(key, JSON.stringify(items));\n    };\n\n    this.storage = {};\n    if (isStorageUsable()) {\n      this.storage = window.localStorage;\n    }\n  }\n\n  /**\r\n   *\r\n   * @param {string} - Key name\r\n   * @description - Get Value from localStorage\r\n   */\n\n\n  /**\r\n   *\r\n   * @param { string } key - Key Name\r\n   * @param { string } value - Key Value\r\n   * @description - Save Value against key into localStorage\r\n   */\n\n\n  /**\r\n   *\r\n   * @param { string } name Key Name\r\n   * @description - Remove `Key Value Pair` from localStorage\r\n   */\n\n\n  /**\r\n   *\r\n   * @param { string } key - Key Name\r\n   * @param { string } value - Key Value\r\n   * @description - Saves Value in Array against key into localStorage\r\n   */\n\n\n  /**\r\n   *\r\n   * @param { string } key - Key Name\r\n   * @param { string } value - Key Value\r\n   * @description - Removes Value from Array against key into localStorage\r\n   */\n}\n\n/**\r\n *\r\n * @description - Checks is local storage available or not\r\n */\nconst isStorageUsable = () => {\n  if (typeof window === 'undefined') {\n    return false;\n  }\n  const storage = window.localStorage;\n  try {\n    storage.setItem('testkey', 'test');\n    storage.removeItem('testkey');\n  } catch (e) {\n    if (e.code === DOMException.QUOTA_EXCEEDED_ERR && storage.length === 0) {\n      return false;\n    }\n  }\n  return true;\n};\n\n//# sourceURL=webpack:///./src/client/utils/localStorage.js?");

/***/ }),

/***/ "./src/server/app.js":
/*!***************************!*\
  !*** ./src/server/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template */ \"./src/server/template.js\");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server */ \"./src/server/server.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./src/server/constants.js\");\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initialState */ \"./src/server/initialState/index.js\");\n/* harmony import */ var _client_commons_utils_ServiceUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/commons/utils/ServiceUtil */ \"./src/client/commons/utils/ServiceUtil.js\");\n/* harmony import */ var _client_commons_utils_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/commons/utils/url */ \"./src/client/commons/utils/url.js\");\n/* harmony import */ var _client_commons_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client/commons/constants */ \"./src/client/commons/constants/index.js\");\n/* harmony import */ var _client_commons_constants_api_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../client/commons/constants/api.services */ \"./src/client/commons/constants/api.services.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n// hide powered by express\napp.disable(\"x-powered-by\");\n\n// Resolves static resources path\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(\"dist\"));\n\n// start the server\nconst PORT = Object({\"NODE_ENV\":\"development\"}).PORT || 30000;\napp.listen(PORT, () => {\n  // eslint-disable-next-line no-console\n  console.log(`SSR running on port ${PORT}`);\n});\n\n// server renders home page\napp.get(\"/\", (req, res) => {\n  const params = req.query || {};\n  const url = Object(_client_commons_utils_url__WEBPACK_IMPORTED_MODULE_7__[\"buildUrl\"])({\n    pathName: _client_commons_constants_api_services__WEBPACK_IMPORTED_MODULE_9__[\"default\"].search,\n    query: _extends({\n      tags: _client_commons_constants__WEBPACK_IMPORTED_MODULE_8__[\"FRONT_PAGE_TAG\"]\n    }, params)\n  });\n\n  _client_commons_utils_ServiceUtil__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(url).then(response => {\n    _initialState__WEBPACK_IMPORTED_MODULE_5__[\"default\"].postList.data = response;\n\n    const { preloadedState, content } = Object(_server__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_initialState__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n    const templateHtml = Object(_template__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content, preloadedState);\n\n    return res.send(templateHtml);\n  }, err => {\n    return res.status(_constants__WEBPACK_IMPORTED_MODULE_4__[\"INTERNAL_SERVER_ERROR\"]).send(err);\n  });\n});\n\n//# sourceURL=webpack:///./src/server/app.js?");

/***/ }),

/***/ "./src/server/constants.js":
/*!*********************************!*\
  !*** ./src/server/constants.js ***!
  \*********************************/
/*! exports provided: INTERNAL_SERVER_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INTERNAL_SERVER_ERROR\", function() { return INTERNAL_SERVER_ERROR; });\nconst INTERNAL_SERVER_ERROR = 500;\n\n//# sourceURL=webpack:///./src/server/constants.js?");

/***/ }),

/***/ "./src/server/initialState/globalStore.js":
/*!************************************************!*\
  !*** ./src/server/initialState/globalStore.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_commons_initialState_postList_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../client/commons/initialState/postList.state */ \"./src/client/commons/initialState/postList.state.js\");\n\n\nconst globalStore = {\n  postList: _client_commons_initialState_postList_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (globalStore);\n\n//# sourceURL=webpack:///./src/server/initialState/globalStore.js?");

/***/ }),

/***/ "./src/server/initialState/index.js":
/*!******************************************!*\
  !*** ./src/server/initialState/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globalStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalStore */ \"./src/server/initialState/globalStore.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _globalStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/server/initialState/index.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return render; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/store */ \"./src/client/store.js\");\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/App */ \"./src/client/App.js\");\n\n\n\n\n\n\n\nfunction render(initialState) {\n  // Configure the store with the initial state provided\n  const store = Object(_client_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(initialState);\n\n  // render the App store static markup ins content variable\n  const content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"],\n    { store: store },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n  ));\n\n  // Get a copy of store data to create the same store on client side\n  const preloadedState = store.getState();\n\n  return { content, preloadedState };\n}\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/server/template.js":
/*!********************************!*\
  !*** ./src/server/template.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderFullPage; });\nfunction renderFullPage(html, preloadedState) {\n  return `\n    <!doctype html>\n    <html>\n      <head>\n        <title>Hacker News App</title>\n        <link rel=\"stylesheet\" href=\"./main.css\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      </head>\n      <body>\n        <div id=\"root\">${html}</div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // https://redux.js.org/recipes/server-rendering/#security-considerations\n          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, \"\\\\u003c\")}\n        </script>\n        <script src=\"./client.js\"></script>\n      </body>\n    </html>\n    `;\n}\n\n//# sourceURL=webpack:///./src/server/template.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"es6-promise\");\n\n//# sourceURL=webpack:///external_%22es6-promise%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reselect\");\n\n//# sourceURL=webpack:///external_%22reselect%22?");

/***/ })

/******/ });