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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
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

/***/ "./src/client/app/template.js":
/*!************************************!*\
  !*** ./src/client/app/template.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (({ body, title }) => {\n  return `\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>${title}</title>\n        <link rel=\"stylesheet\" href=\"./main.css\">\n      </head>\n      \n      <body>\n        <div id=\"root\">${body}</div>\n      </body>\n    </html>\n  `;\n});\n\n//# sourceURL=webpack:///./src/client/app/template.js?");

/***/ }),

/***/ "./src/client/components/Nav/Nav.js":
/*!******************************************!*\
  !*** ./src/client/components/Nav/Nav.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Nav = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    \"div\",\n    { className: \"d-flex nav\" },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"nav__image ml25\",\n      src: \"https://news.ycombinator.com/y18.gif\",\n      alt: \"logo image\"\n    }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"span\",\n      { className: \"nav__title ml25\" },\n      \"Hacker News\"\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"span\",\n      { className: \"nav__links ml25\" },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"a\",\n        { className: \"active\", href: \"top\" },\n        \"Top |\"\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"a\",\n        { className: \"ml10\", href: \"new\" },\n        \"New\"\n      )\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\n//# sourceURL=webpack:///./src/client/components/Nav/Nav.js?");

/***/ }),

/***/ "./src/client/components/Post/PostItem/index.js":
/*!******************************************************!*\
  !*** ./src/client/components/Post/PostItem/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst PostItem = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    \"div\",\n    { className: \"post__item\" },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      { className: \"d-flex align-items-center mh50 post__item--container\" },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        { className: \"post__item--no_of_comments ml25\" },\n        \"36\"\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        { className: \"post__item--no_of_upvotes ml25\" },\n        \"96\"\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"post__item--upvote ml10\" }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        { className: \"post__item--title ml10\" },\n        \"Seemingly Impossible Swift Programs\"\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        { className: \"post__item--author ml10\" },\n        \"(nytimes.com) by \",\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          \"b\",\n          null,\n          \"pd\"\n        ),\n        \" 3 hours ago [\",\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          \"a\",\n          { className: \"btn btn-link\" },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"b\",\n            null,\n            \"hide\"\n          )\n        ),\n        \"]\"\n      )\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      { className: \"d-flex align-items-center mh50  post__item--container\" },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        { className: \"post__item--no_of_comments ml25\" },\n        \"36\"\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        { className: \"post__item--no_of_upvotes ml25\" },\n        \"96\"\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"post__item--upvote ml10\" }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        { className: \"post__item--title ml10\" },\n        \"Seemingly Impossible Swift Programs\"\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        { className: \"post__item--author ml10\" },\n        \"(nytimes.com) by \",\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          \"b\",\n          null,\n          \"pd\"\n        ),\n        \" 3 hours ago [\",\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          \"a\",\n          { className: \"btn btn-link\" },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"b\",\n            null,\n            \"hide\"\n          )\n        ),\n        \"]\"\n      )\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostItem);\n\n//# sourceURL=webpack:///./src/client/components/Post/PostItem/index.js?");

/***/ }),

/***/ "./src/client/components/Post/PostList/index.js":
/*!******************************************************!*\
  !*** ./src/client/components/Post/PostList/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PostItem_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PostItem/index */ \"./src/client/components/Post/PostItem/index.js\");\n\n\nconst Post = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    \"div\",\n    { className: \"post\" },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostItem_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\n//# sourceURL=webpack:///./src/client/components/Post/PostList/index.js?");

/***/ }),

/***/ "./src/client/components/Post/index.js":
/*!*********************************************!*\
  !*** ./src/client/components/Post/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PostList_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostList/index */ \"./src/client/components/Post/PostList/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_PostList_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/client/components/Post/index.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/App */ \"./src/client/App.js\");\n/* harmony import */ var _client_app_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/app/template */ \"./src/client/app/template.js\");\n\n\n\n\n\n\nconst port = 30000;\nconst server = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\nserver.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(\"dist\"));\nserver.get(\"/\", (req, res) => {\n  const component = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n  res.send(Object(_client_app_template__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n    body: component,\n    title: \"Hacker News App\"\n  }));\n});\n\nserver.listen(port);\nconsole.log(`Serving at http://localhost:${port}`);\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

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

/***/ })

/******/ });