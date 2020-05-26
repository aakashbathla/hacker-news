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

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBrowserHistory\", function() { return createBrowserHistory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHashHistory\", function() { return createHashHistory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMemoryHistory\", function() { return createMemoryHistory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLocation\", function() { return createLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"locationsAreEqual\", function() { return locationsAreEqual; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parsePath\", function() { return parsePath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPath\", function() { return createPath; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"@babel/runtime/helpers/esm/extends\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ \"./node_modules/resolve-pathname/esm/resolve-pathname.js\");\n/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ \"./node_modules/value-equal/esm/value-equal.js\");\n/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ \"./node_modules/tiny-warning/dist/tiny-warning.esm.js\");\n/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ \"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js\");\n\n\n\n\n\n\nfunction addLeadingSlash(path) {\n  return path.charAt(0) === '/' ? path : '/' + path;\n}\nfunction stripLeadingSlash(path) {\n  return path.charAt(0) === '/' ? path.substr(1) : path;\n}\nfunction hasBasename(path, prefix) {\n  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;\n}\nfunction stripBasename(path, prefix) {\n  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;\n}\nfunction stripTrailingSlash(path) {\n  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;\n}\nfunction parsePath(path) {\n  var pathname = path || '/';\n  var search = '';\n  var hash = '';\n  var hashIndex = pathname.indexOf('#');\n\n  if (hashIndex !== -1) {\n    hash = pathname.substr(hashIndex);\n    pathname = pathname.substr(0, hashIndex);\n  }\n\n  var searchIndex = pathname.indexOf('?');\n\n  if (searchIndex !== -1) {\n    search = pathname.substr(searchIndex);\n    pathname = pathname.substr(0, searchIndex);\n  }\n\n  return {\n    pathname: pathname,\n    search: search === '?' ? '' : search,\n    hash: hash === '#' ? '' : hash\n  };\n}\nfunction createPath(location) {\n  var pathname = location.pathname,\n      search = location.search,\n      hash = location.hash;\n  var path = pathname || '/';\n  if (search && search !== '?') path += search.charAt(0) === '?' ? search : \"?\" + search;\n  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : \"#\" + hash;\n  return path;\n}\n\nfunction createLocation(path, state, key, currentLocation) {\n  var location;\n\n  if (typeof path === 'string') {\n    // Two-arg form: push(path, state)\n    location = parsePath(path);\n    location.state = state;\n  } else {\n    // One-arg form: push(location)\n    location = _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, path);\n    if (location.pathname === undefined) location.pathname = '';\n\n    if (location.search) {\n      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;\n    } else {\n      location.search = '';\n    }\n\n    if (location.hash) {\n      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;\n    } else {\n      location.hash = '';\n    }\n\n    if (state !== undefined && location.state === undefined) location.state = state;\n  }\n\n  try {\n    location.pathname = decodeURI(location.pathname);\n  } catch (e) {\n    if (e instanceof URIError) {\n      throw new URIError('Pathname \"' + location.pathname + '\" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');\n    } else {\n      throw e;\n    }\n  }\n\n  if (key) location.key = key;\n\n  if (currentLocation) {\n    // Resolve incomplete/relative pathname relative to current location.\n    if (!location.pathname) {\n      location.pathname = currentLocation.pathname;\n    } else if (location.pathname.charAt(0) !== '/') {\n      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(location.pathname, currentLocation.pathname);\n    }\n  } else {\n    // When there is no prior location and pathname is empty, set it to /\n    if (!location.pathname) {\n      location.pathname = '/';\n    }\n  }\n\n  return location;\n}\nfunction locationsAreEqual(a, b) {\n  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a.state, b.state);\n}\n\nfunction createTransitionManager() {\n  var prompt = null;\n\n  function setPrompt(nextPrompt) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(prompt == null, 'A history supports only one prompt at a time') : undefined;\n    prompt = nextPrompt;\n    return function () {\n      if (prompt === nextPrompt) prompt = null;\n    };\n  }\n\n  function confirmTransitionTo(location, action, getUserConfirmation, callback) {\n    // TODO: If another transition starts while we're still confirming\n    // the previous one, we may end up in a weird state. Figure out the\n    // best way to handle this.\n    if (prompt != null) {\n      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;\n\n      if (typeof result === 'string') {\n        if (typeof getUserConfirmation === 'function') {\n          getUserConfirmation(result, callback);\n        } else {\n           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : undefined;\n          callback(true);\n        }\n      } else {\n        // Return false from a transition hook to cancel the transition.\n        callback(result !== false);\n      }\n    } else {\n      callback(true);\n    }\n  }\n\n  var listeners = [];\n\n  function appendListener(fn) {\n    var isActive = true;\n\n    function listener() {\n      if (isActive) fn.apply(void 0, arguments);\n    }\n\n    listeners.push(listener);\n    return function () {\n      isActive = false;\n      listeners = listeners.filter(function (item) {\n        return item !== listener;\n      });\n    };\n  }\n\n  function notifyListeners() {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    listeners.forEach(function (listener) {\n      return listener.apply(void 0, args);\n    });\n  }\n\n  return {\n    setPrompt: setPrompt,\n    confirmTransitionTo: confirmTransitionTo,\n    appendListener: appendListener,\n    notifyListeners: notifyListeners\n  };\n}\n\nvar canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);\nfunction getConfirmation(message, callback) {\n  callback(window.confirm(message)); // eslint-disable-line no-alert\n}\n/**\n * Returns true if the HTML5 history API is supported. Taken from Modernizr.\n *\n * https://github.com/Modernizr/Modernizr/blob/master/LICENSE\n * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js\n * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586\n */\n\nfunction supportsHistory() {\n  var ua = window.navigator.userAgent;\n  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;\n  return window.history && 'pushState' in window.history;\n}\n/**\n * Returns true if browser fires popstate on hash change.\n * IE10 and IE11 do not.\n */\n\nfunction supportsPopStateOnHashChange() {\n  return window.navigator.userAgent.indexOf('Trident') === -1;\n}\n/**\n * Returns false if using go(n) with hash history causes a full page reload.\n */\n\nfunction supportsGoWithoutReloadUsingHash() {\n  return window.navigator.userAgent.indexOf('Firefox') === -1;\n}\n/**\n * Returns true if a given popstate event is an extraneous WebKit event.\n * Accounts for the fact that Chrome on iOS fires real popstate events\n * containing undefined state when pressing the back button.\n */\n\nfunction isExtraneousPopstateEvent(event) {\n  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;\n}\n\nvar PopStateEvent = 'popstate';\nvar HashChangeEvent = 'hashchange';\n\nfunction getHistoryState() {\n  try {\n    return window.history.state || {};\n  } catch (e) {\n    // IE 11 sometimes throws when accessing window.history.state\n    // See https://github.com/ReactTraining/history/pull/289\n    return {};\n  }\n}\n/**\n * Creates a history object that uses the HTML5 history API including\n * pushState, replaceState, and the popstate event.\n */\n\n\nfunction createBrowserHistory(props) {\n  if (props === void 0) {\n    props = {};\n  }\n\n  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(false, 'Browser history needs a DOM') : undefined : void 0;\n  var globalHistory = window.history;\n  var canUseHistory = supportsHistory();\n  var needsHashChangeListener = !supportsPopStateOnHashChange();\n  var _props = props,\n      _props$forceRefresh = _props.forceRefresh,\n      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,\n      _props$getUserConfirm = _props.getUserConfirmation,\n      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,\n      _props$keyLength = _props.keyLength,\n      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;\n  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';\n\n  function getDOMLocation(historyState) {\n    var _ref = historyState || {},\n        key = _ref.key,\n        state = _ref.state;\n\n    var _window$location = window.location,\n        pathname = _window$location.pathname,\n        search = _window$location.search,\n        hash = _window$location.hash;\n    var path = pathname + search + hash;\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path \"' + path + '\" to begin with \"' + basename + '\".') : undefined;\n    if (basename) path = stripBasename(path, basename);\n    return createLocation(path, state, key);\n  }\n\n  function createKey() {\n    return Math.random().toString(36).substr(2, keyLength);\n  }\n\n  var transitionManager = createTransitionManager();\n\n  function setState(nextState) {\n    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0___default()(history, nextState);\n\n    history.length = globalHistory.length;\n    transitionManager.notifyListeners(history.location, history.action);\n  }\n\n  function handlePopState(event) {\n    // Ignore extraneous popstate events in WebKit.\n    if (isExtraneousPopstateEvent(event)) return;\n    handlePop(getDOMLocation(event.state));\n  }\n\n  function handleHashChange() {\n    handlePop(getDOMLocation(getHistoryState()));\n  }\n\n  var forceNextPop = false;\n\n  function handlePop(location) {\n    if (forceNextPop) {\n      forceNextPop = false;\n      setState();\n    } else {\n      var action = 'POP';\n      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n        if (ok) {\n          setState({\n            action: action,\n            location: location\n          });\n        } else {\n          revertPop(location);\n        }\n      });\n    }\n  }\n\n  function revertPop(fromLocation) {\n    var toLocation = history.location; // TODO: We could probably make this more reliable by\n    // keeping a list of keys we've seen in sessionStorage.\n    // Instead, we just default to 0 for keys we don't know.\n\n    var toIndex = allKeys.indexOf(toLocation.key);\n    if (toIndex === -1) toIndex = 0;\n    var fromIndex = allKeys.indexOf(fromLocation.key);\n    if (fromIndex === -1) fromIndex = 0;\n    var delta = toIndex - fromIndex;\n\n    if (delta) {\n      forceNextPop = true;\n      go(delta);\n    }\n  }\n\n  var initialLocation = getDOMLocation(getHistoryState());\n  var allKeys = [initialLocation.key]; // Public interface\n\n  function createHref(location) {\n    return basename + createPath(location);\n  }\n\n  function push(path, state) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;\n    var action = 'PUSH';\n    var location = createLocation(path, state, createKey(), history.location);\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (!ok) return;\n      var href = createHref(location);\n      var key = location.key,\n          state = location.state;\n\n      if (canUseHistory) {\n        globalHistory.pushState({\n          key: key,\n          state: state\n        }, null, href);\n\n        if (forceRefresh) {\n          window.location.href = href;\n        } else {\n          var prevIndex = allKeys.indexOf(history.location.key);\n          var nextKeys = allKeys.slice(0, prevIndex + 1);\n          nextKeys.push(location.key);\n          allKeys = nextKeys;\n          setState({\n            action: action,\n            location: location\n          });\n        }\n      } else {\n         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : undefined;\n        window.location.href = href;\n      }\n    });\n  }\n\n  function replace(path, state) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;\n    var action = 'REPLACE';\n    var location = createLocation(path, state, createKey(), history.location);\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (!ok) return;\n      var href = createHref(location);\n      var key = location.key,\n          state = location.state;\n\n      if (canUseHistory) {\n        globalHistory.replaceState({\n          key: key,\n          state: state\n        }, null, href);\n\n        if (forceRefresh) {\n          window.location.replace(href);\n        } else {\n          var prevIndex = allKeys.indexOf(history.location.key);\n          if (prevIndex !== -1) allKeys[prevIndex] = location.key;\n          setState({\n            action: action,\n            location: location\n          });\n        }\n      } else {\n         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : undefined;\n        window.location.replace(href);\n      }\n    });\n  }\n\n  function go(n) {\n    globalHistory.go(n);\n  }\n\n  function goBack() {\n    go(-1);\n  }\n\n  function goForward() {\n    go(1);\n  }\n\n  var listenerCount = 0;\n\n  function checkDOMListeners(delta) {\n    listenerCount += delta;\n\n    if (listenerCount === 1 && delta === 1) {\n      window.addEventListener(PopStateEvent, handlePopState);\n      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);\n    } else if (listenerCount === 0) {\n      window.removeEventListener(PopStateEvent, handlePopState);\n      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);\n    }\n  }\n\n  var isBlocked = false;\n\n  function block(prompt) {\n    if (prompt === void 0) {\n      prompt = false;\n    }\n\n    var unblock = transitionManager.setPrompt(prompt);\n\n    if (!isBlocked) {\n      checkDOMListeners(1);\n      isBlocked = true;\n    }\n\n    return function () {\n      if (isBlocked) {\n        isBlocked = false;\n        checkDOMListeners(-1);\n      }\n\n      return unblock();\n    };\n  }\n\n  function listen(listener) {\n    var unlisten = transitionManager.appendListener(listener);\n    checkDOMListeners(1);\n    return function () {\n      checkDOMListeners(-1);\n      unlisten();\n    };\n  }\n\n  var history = {\n    length: globalHistory.length,\n    action: 'POP',\n    location: initialLocation,\n    createHref: createHref,\n    push: push,\n    replace: replace,\n    go: go,\n    goBack: goBack,\n    goForward: goForward,\n    block: block,\n    listen: listen\n  };\n  return history;\n}\n\nvar HashChangeEvent$1 = 'hashchange';\nvar HashPathCoders = {\n  hashbang: {\n    encodePath: function encodePath(path) {\n      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);\n    },\n    decodePath: function decodePath(path) {\n      return path.charAt(0) === '!' ? path.substr(1) : path;\n    }\n  },\n  noslash: {\n    encodePath: stripLeadingSlash,\n    decodePath: addLeadingSlash\n  },\n  slash: {\n    encodePath: addLeadingSlash,\n    decodePath: addLeadingSlash\n  }\n};\n\nfunction stripHash(url) {\n  var hashIndex = url.indexOf('#');\n  return hashIndex === -1 ? url : url.slice(0, hashIndex);\n}\n\nfunction getHashPath() {\n  // We can't use window.location.hash here because it's not\n  // consistent across browsers - Firefox will pre-decode it!\n  var href = window.location.href;\n  var hashIndex = href.indexOf('#');\n  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);\n}\n\nfunction pushHashPath(path) {\n  window.location.hash = path;\n}\n\nfunction replaceHashPath(path) {\n  window.location.replace(stripHash(window.location.href) + '#' + path);\n}\n\nfunction createHashHistory(props) {\n  if (props === void 0) {\n    props = {};\n  }\n\n  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(false, 'Hash history needs a DOM') : undefined : void 0;\n  var globalHistory = window.history;\n  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();\n  var _props = props,\n      _props$getUserConfirm = _props.getUserConfirmation,\n      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,\n      _props$hashType = _props.hashType,\n      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;\n  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';\n  var _HashPathCoders$hashT = HashPathCoders[hashType],\n      encodePath = _HashPathCoders$hashT.encodePath,\n      decodePath = _HashPathCoders$hashT.decodePath;\n\n  function getDOMLocation() {\n    var path = decodePath(getHashPath());\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path \"' + path + '\" to begin with \"' + basename + '\".') : undefined;\n    if (basename) path = stripBasename(path, basename);\n    return createLocation(path);\n  }\n\n  var transitionManager = createTransitionManager();\n\n  function setState(nextState) {\n    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0___default()(history, nextState);\n\n    history.length = globalHistory.length;\n    transitionManager.notifyListeners(history.location, history.action);\n  }\n\n  var forceNextPop = false;\n  var ignorePath = null;\n\n  function locationsAreEqual$$1(a, b) {\n    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;\n  }\n\n  function handleHashChange() {\n    var path = getHashPath();\n    var encodedPath = encodePath(path);\n\n    if (path !== encodedPath) {\n      // Ensure we always have a properly-encoded hash.\n      replaceHashPath(encodedPath);\n    } else {\n      var location = getDOMLocation();\n      var prevLocation = history.location;\n      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.\n\n      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.\n\n      ignorePath = null;\n      handlePop(location);\n    }\n  }\n\n  function handlePop(location) {\n    if (forceNextPop) {\n      forceNextPop = false;\n      setState();\n    } else {\n      var action = 'POP';\n      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n        if (ok) {\n          setState({\n            action: action,\n            location: location\n          });\n        } else {\n          revertPop(location);\n        }\n      });\n    }\n  }\n\n  function revertPop(fromLocation) {\n    var toLocation = history.location; // TODO: We could probably make this more reliable by\n    // keeping a list of paths we've seen in sessionStorage.\n    // Instead, we just default to 0 for paths we don't know.\n\n    var toIndex = allPaths.lastIndexOf(createPath(toLocation));\n    if (toIndex === -1) toIndex = 0;\n    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));\n    if (fromIndex === -1) fromIndex = 0;\n    var delta = toIndex - fromIndex;\n\n    if (delta) {\n      forceNextPop = true;\n      go(delta);\n    }\n  } // Ensure the hash is encoded properly before doing anything else.\n\n\n  var path = getHashPath();\n  var encodedPath = encodePath(path);\n  if (path !== encodedPath) replaceHashPath(encodedPath);\n  var initialLocation = getDOMLocation();\n  var allPaths = [createPath(initialLocation)]; // Public interface\n\n  function createHref(location) {\n    var baseTag = document.querySelector('base');\n    var href = '';\n\n    if (baseTag && baseTag.getAttribute('href')) {\n      href = stripHash(window.location.href);\n    }\n\n    return href + '#' + encodePath(basename + createPath(location));\n  }\n\n  function push(path, state) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state === undefined, 'Hash history cannot push state; it is ignored') : undefined;\n    var action = 'PUSH';\n    var location = createLocation(path, undefined, undefined, history.location);\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (!ok) return;\n      var path = createPath(location);\n      var encodedPath = encodePath(basename + path);\n      var hashChanged = getHashPath() !== encodedPath;\n\n      if (hashChanged) {\n        // We cannot tell if a hashchange was caused by a PUSH, so we'd\n        // rather setState here and ignore the hashchange. The caveat here\n        // is that other hash histories in the page will consider it a POP.\n        ignorePath = path;\n        pushHashPath(encodedPath);\n        var prevIndex = allPaths.lastIndexOf(createPath(history.location));\n        var nextPaths = allPaths.slice(0, prevIndex + 1);\n        nextPaths.push(path);\n        allPaths = nextPaths;\n        setState({\n          action: action,\n          location: location\n        });\n      } else {\n         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : undefined;\n        setState();\n      }\n    });\n  }\n\n  function replace(path, state) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state === undefined, 'Hash history cannot replace state; it is ignored') : undefined;\n    var action = 'REPLACE';\n    var location = createLocation(path, undefined, undefined, history.location);\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (!ok) return;\n      var path = createPath(location);\n      var encodedPath = encodePath(basename + path);\n      var hashChanged = getHashPath() !== encodedPath;\n\n      if (hashChanged) {\n        // We cannot tell if a hashchange was caused by a REPLACE, so we'd\n        // rather setState here and ignore the hashchange. The caveat here\n        // is that other hash histories in the page will consider it a POP.\n        ignorePath = path;\n        replaceHashPath(encodedPath);\n      }\n\n      var prevIndex = allPaths.indexOf(createPath(history.location));\n      if (prevIndex !== -1) allPaths[prevIndex] = path;\n      setState({\n        action: action,\n        location: location\n      });\n    });\n  }\n\n  function go(n) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;\n    globalHistory.go(n);\n  }\n\n  function goBack() {\n    go(-1);\n  }\n\n  function goForward() {\n    go(1);\n  }\n\n  var listenerCount = 0;\n\n  function checkDOMListeners(delta) {\n    listenerCount += delta;\n\n    if (listenerCount === 1 && delta === 1) {\n      window.addEventListener(HashChangeEvent$1, handleHashChange);\n    } else if (listenerCount === 0) {\n      window.removeEventListener(HashChangeEvent$1, handleHashChange);\n    }\n  }\n\n  var isBlocked = false;\n\n  function block(prompt) {\n    if (prompt === void 0) {\n      prompt = false;\n    }\n\n    var unblock = transitionManager.setPrompt(prompt);\n\n    if (!isBlocked) {\n      checkDOMListeners(1);\n      isBlocked = true;\n    }\n\n    return function () {\n      if (isBlocked) {\n        isBlocked = false;\n        checkDOMListeners(-1);\n      }\n\n      return unblock();\n    };\n  }\n\n  function listen(listener) {\n    var unlisten = transitionManager.appendListener(listener);\n    checkDOMListeners(1);\n    return function () {\n      checkDOMListeners(-1);\n      unlisten();\n    };\n  }\n\n  var history = {\n    length: globalHistory.length,\n    action: 'POP',\n    location: initialLocation,\n    createHref: createHref,\n    push: push,\n    replace: replace,\n    go: go,\n    goBack: goBack,\n    goForward: goForward,\n    block: block,\n    listen: listen\n  };\n  return history;\n}\n\nfunction clamp(n, lowerBound, upperBound) {\n  return Math.min(Math.max(n, lowerBound), upperBound);\n}\n/**\n * Creates a history object that stores locations in memory.\n */\n\n\nfunction createMemoryHistory(props) {\n  if (props === void 0) {\n    props = {};\n  }\n\n  var _props = props,\n      getUserConfirmation = _props.getUserConfirmation,\n      _props$initialEntries = _props.initialEntries,\n      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,\n      _props$initialIndex = _props.initialIndex,\n      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,\n      _props$keyLength = _props.keyLength,\n      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;\n  var transitionManager = createTransitionManager();\n\n  function setState(nextState) {\n    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0___default()(history, nextState);\n\n    history.length = history.entries.length;\n    transitionManager.notifyListeners(history.location, history.action);\n  }\n\n  function createKey() {\n    return Math.random().toString(36).substr(2, keyLength);\n  }\n\n  var index = clamp(initialIndex, 0, initialEntries.length - 1);\n  var entries = initialEntries.map(function (entry) {\n    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());\n  }); // Public interface\n\n  var createHref = createPath;\n\n  function push(path, state) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;\n    var action = 'PUSH';\n    var location = createLocation(path, state, createKey(), history.location);\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (!ok) return;\n      var prevIndex = history.index;\n      var nextIndex = prevIndex + 1;\n      var nextEntries = history.entries.slice(0);\n\n      if (nextEntries.length > nextIndex) {\n        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);\n      } else {\n        nextEntries.push(location);\n      }\n\n      setState({\n        action: action,\n        location: location,\n        index: nextIndex,\n        entries: nextEntries\n      });\n    });\n  }\n\n  function replace(path, state) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;\n    var action = 'REPLACE';\n    var location = createLocation(path, state, createKey(), history.location);\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (!ok) return;\n      history.entries[history.index] = location;\n      setState({\n        action: action,\n        location: location\n      });\n    });\n  }\n\n  function go(n) {\n    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);\n    var action = 'POP';\n    var location = history.entries[nextIndex];\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (ok) {\n        setState({\n          action: action,\n          location: location,\n          index: nextIndex\n        });\n      } else {\n        // Mimic the behavior of DOM histories by\n        // causing a render after a cancelled POP.\n        setState();\n      }\n    });\n  }\n\n  function goBack() {\n    go(-1);\n  }\n\n  function goForward() {\n    go(1);\n  }\n\n  function canGo(n) {\n    var nextIndex = history.index + n;\n    return nextIndex >= 0 && nextIndex < history.entries.length;\n  }\n\n  function block(prompt) {\n    if (prompt === void 0) {\n      prompt = false;\n    }\n\n    return transitionManager.setPrompt(prompt);\n  }\n\n  function listen(listener) {\n    return transitionManager.appendListener(listener);\n  }\n\n  var history = {\n    length: entries.length,\n    action: 'POP',\n    location: entries[index],\n    index: index,\n    entries: entries,\n    createHref: createHref,\n    push: push,\n    replace: replace,\n    go: go,\n    goBack: goBack,\n    goForward: goForward,\n    canGo: canGo,\n    block: block,\n    listen: listen\n  };\n  return history;\n}\n\n\n\n\n//# sourceURL=webpack:///./node_modules/history/esm/history.js?");

/***/ }),

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
/*!***************************************************************!*\
  !*** ./node_modules/resolve-pathname/esm/resolve-pathname.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction isAbsolute(pathname) {\n  return pathname.charAt(0) === '/';\n}\n\n// About 1.5x faster than the two-arg version of Array#splice()\nfunction spliceOne(list, index) {\n  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {\n    list[i] = list[k];\n  }\n\n  list.pop();\n}\n\n// This implementation is based heavily on node's url.parse\nfunction resolvePathname(to, from) {\n  if (from === undefined) from = '';\n\n  var toParts = (to && to.split('/')) || [];\n  var fromParts = (from && from.split('/')) || [];\n\n  var isToAbs = to && isAbsolute(to);\n  var isFromAbs = from && isAbsolute(from);\n  var mustEndAbs = isToAbs || isFromAbs;\n\n  if (to && isAbsolute(to)) {\n    // to is absolute\n    fromParts = toParts;\n  } else if (toParts.length) {\n    // to is relative, drop the filename\n    fromParts.pop();\n    fromParts = fromParts.concat(toParts);\n  }\n\n  if (!fromParts.length) return '/';\n\n  var hasTrailingSlash;\n  if (fromParts.length) {\n    var last = fromParts[fromParts.length - 1];\n    hasTrailingSlash = last === '.' || last === '..' || last === '';\n  } else {\n    hasTrailingSlash = false;\n  }\n\n  var up = 0;\n  for (var i = fromParts.length; i >= 0; i--) {\n    var part = fromParts[i];\n\n    if (part === '.') {\n      spliceOne(fromParts, i);\n    } else if (part === '..') {\n      spliceOne(fromParts, i);\n      up++;\n    } else if (up) {\n      spliceOne(fromParts, i);\n      up--;\n    }\n  }\n\n  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');\n\n  if (\n    mustEndAbs &&\n    fromParts[0] !== '' &&\n    (!fromParts[0] || !isAbsolute(fromParts[0]))\n  )\n    fromParts.unshift('');\n\n  var result = fromParts.join('/');\n\n  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';\n\n  return result;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resolvePathname);\n\n\n//# sourceURL=webpack:///./node_modules/resolve-pathname/esm/resolve-pathname.js?");

/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar isProduction = \"development\" === 'production';\nvar prefix = 'Invariant failed';\nfunction invariant(condition, message) {\n    if (condition) {\n        return;\n    }\n    if (isProduction) {\n        throw new Error(prefix);\n    }\n    throw new Error(prefix + \": \" + (message || ''));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (invariant);\n\n\n//# sourceURL=webpack:///./node_modules/tiny-invariant/dist/tiny-invariant.esm.js?");

/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar isProduction = \"development\" === 'production';\nfunction warning(condition, message) {\n  if (!isProduction) {\n    if (condition) {\n      return;\n    }\n\n    var text = \"Warning: \" + message;\n\n    if (typeof console !== 'undefined') {\n      console.warn(text);\n    }\n\n    try {\n      throw Error(text);\n    } catch (x) {}\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (warning);\n\n\n//# sourceURL=webpack:///./node_modules/tiny-warning/dist/tiny-warning.esm.js?");

/***/ }),

/***/ "./node_modules/value-equal/esm/value-equal.js":
/*!*****************************************************!*\
  !*** ./node_modules/value-equal/esm/value-equal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction valueOf(obj) {\n  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);\n}\n\nfunction valueEqual(a, b) {\n  // Test for strict equality first.\n  if (a === b) return true;\n\n  // Otherwise, if either of them == null they are not equal.\n  if (a == null || b == null) return false;\n\n  if (Array.isArray(a)) {\n    return (\n      Array.isArray(b) &&\n      a.length === b.length &&\n      a.every(function(item, index) {\n        return valueEqual(item, b[index]);\n      })\n    );\n  }\n\n  if (typeof a === 'object' || typeof b === 'object') {\n    var aValue = valueOf(a);\n    var bValue = valueOf(b);\n\n    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);\n\n    return Object.keys(Object.assign({}, a, b)).every(function(key) {\n      return valueEqual(a[key], b[key]);\n    });\n  }\n\n  return false;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (valueEqual);\n\n\n//# sourceURL=webpack:///./node_modules/value-equal/esm/value-equal.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Utils_Time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils/Time */ \"./src/client/components/Utils/Time.js\");\n/* harmony import */ var _HidePost_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../HidePost/index */ \"./src/client/components/HidePost/index.js\");\n\n\n\nconst PostItem = ({\n  author,\n  created_at_i,\n  num_comments,\n  objectID,\n  points,\n  title,\n  story_title,\n  url\n}) => {\n  const urlName = url ? new URL(url).origin : \"\";\n  const created_at = created_at_i ? Object(_Utils_Time__WEBPACK_IMPORTED_MODULE_1__[\"Time\"])(new Date(Date.now() - created_at_i)) : \"\";\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    \"div\",\n    { className: \"d-flex align-items-center mh50 post__item--container\" },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      { className: \"post__item--no_of_comments ml25\" },\n      num_comments\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      { className: \"post__item--no_of_upvotes ml25\" },\n      points\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"post__item--upvote ml10\" }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      { className: \"d-flex post__item--width--desktop post__item--direction--mobile\" },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        { className: \"post__item--title ml10\" },\n        title\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        { className: \"post__item--author ml10\" },\n        \"(\",\n        urlName,\n        \") by \",\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          \"b\",\n          null,\n          author\n        ),\n        \" \",\n        created_at,\n        \" [\",\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HidePost_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { objectId: objectID }),\n        \"]\"\n      )\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostItem);\n\n//# sourceURL=webpack:///./src/client/components/Post/PostItem/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PostItem_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PostItem/index */ \"./src/client/components/Post/PostItem/index.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Loading */ \"./src/client/components/Loading/index.js\");\n/* harmony import */ var _LoadMore_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LoadMore/index */ \"./src/client/components/LoadMore/index.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ \"./src/client/components/Post/PostList/reducer.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\n\n\nconst searchUrl = \"https://hn.algolia.com/api/v1/search?query=\";\n\nconst Post = ({ postListData, fetchPostListData }) => {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    fetchPostListData();\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    \"div\",\n    { className: \"post\" },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      { className: \"post__item\" },\n      !postListData ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        null,\n        postListData && postListData.hits.map(hit => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostItem_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _extends({ key: hit.objectID }, hit))),\n        postListData && postListData.hits && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadMore_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n      )\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\n//# sourceURL=webpack:///./src/client/components/Post/PostList/index.js?");

/***/ }),

/***/ "./src/client/components/Post/PostList/reducer.js":
/*!********************************************************!*\
  !*** ./src/client/components/Post/PostList/reducer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/client/components/Post/PostList/actions.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\n\nconst INITIAL_STATE = {\n  error: false,\n  results: {},\n  loading: true,\n  query: \"\"\n};\n\nconst DEFAULT_HITS = 20;\n\nconst fetchDataReducer = (state, { type, payload = null }) => {\n  switch (type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_LOAD\"]:\n      return _extends({}, state, {\n        loading: true,\n        error: false\n      });\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_FAIL\"]:\n      return _extends({}, state, {\n        loading: false,\n        error: true\n      });\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_SUCCESS\"]:\n      const oldHits = state.results[state.query] ? state.results[state.query].hits : [];\n      const updatedHits = [...oldHits, ...payload.hits];\n\n      return _extends({}, state, {\n        loading: false,\n        results: _extends({}, state.results, {\n          [state.query]: { hits: updatedHits, page: payload.page }\n        })\n      });\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_TEXT_CHANGE\"]:\n      return _extends({}, state, {\n        query: payload\n      });\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_TEXT_RESET\"]:\n      return _extends({}, state, {\n        query: \"\"\n      });\n    default:\n      return state;\n  }\n};\n\nconst fetchDataComp = searchUrl => {\n  const [state, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(fetchDataReducer, INITIAL_STATE);\n\n  const fetchData = (page = 0) => {\n    const preExisting = state.results[state.query] && state.results[state.query].page + 1;\n    try {\n      console.log(\"aakash\");\n      let results;\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${searchUrl}${state.query}&tags=story&page=${preExisting ? preExisting : page}&hitsPerPage=${DEFAULT_HITS}`).then(resp => {\n        results = resp;\n        console.log(results.data);\n        dispatch({\n          type: _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_SUCCESS\"],\n          payload: {\n            hits: results.data.hits,\n            page: preExisting ? preExisting : page\n          }\n        });\n      });\n    } catch (error) {\n      console.log(error);\n      dispatch({ type: _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_FAIL\"] });\n    }\n  };\n\n  const paginate = () => {\n    console.log(\"pagination\");\n    const { results, query } = state;\n    let updatedPage = results[query].page + 1;\n    fetchData();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    fetchData();\n  }, []);\n\n  return _extends({}, state, { paginate });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchDataComp);\n\n//# sourceURL=webpack:///./src/client/components/Post/PostList/reducer.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapStateToProps\", function() { return mapStateToProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapDispatchToProps\", function() { return mapDispatchToProps; });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ \"./src/client/components/Post/selectors.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./src/client/components/Post/actions.js\");\n/* harmony import */ var _PostList_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostList/index */ \"./src/client/components/Post/PostList/index.js\");\n\n\n\n\n\n\n\n\nconst mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_1__[\"createStructuredSelector\"])({\n  postListData: _selectors__WEBPACK_IMPORTED_MODULE_2__[\"selectPostListData\"]\n});\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    fetchPostListData: () => {\n      console.log(\"1\");\n      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__[\"fetchPostListData\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(_PostList_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));\n\n//# sourceURL=webpack:///./src/client/components/Post/index.js?");

/***/ }),

/***/ "./src/client/components/Post/reducers.js":
/*!************************************************!*\
  !*** ./src/client/components/Post/reducers.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/client/components/Post/constants.js\");\n/* harmony import */ var _commons_initialState_postList_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/initialState/postList.state */ \"./src/client/commons/initialState/postList.state.js\");\n/* harmony import */ var _HidePost_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HidePost/constants */ \"./src/client/components/HidePost/constants.js\");\n/* harmony import */ var _Utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/utils */ \"./src/client/components/Utils/utils.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n// import { VOTE_FEED } from \"../../atoms/Vote/constants\";\n\n\n\n\n\n\nconst initialState = _commons_initialState_postList_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nconst postListReducer = (state = initialState, { type, data, error }) => {\n  switch (type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_POST_LIST_DATA\"]:\n      return _extends({}, state, {\n        isFetching: true\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_POST_LIST_DATA_SUCCESS\"]:\n      return _extends({}, state, {\n        isFetching: false,\n        data\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_POST_LIST_DATA_ERROR\"]:\n      return _extends({}, state, {\n        isFetching: false,\n        error\n      });\n\n    case _HidePost_constants__WEBPACK_IMPORTED_MODULE_2__[\"HIDE_POST\"]:\n      return Object(_Utils_utils__WEBPACK_IMPORTED_MODULE_3__[\"removePost\"])(state, data);\n\n    // case VOTE_FEED:\n    //   return {\n    //     ...state,\n    //     data: { ...state.data },\n    //   };\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (postListReducer);\n\n//# sourceURL=webpack:///./src/client/components/Post/reducers.js?");

/***/ }),

/***/ "./src/client/components/Post/sagas.js":
/*!*********************************************!*\
  !*** ./src/client/components/Post/sagas.js ***!
  \*********************************************/
/*! exports provided: loadPostListSaga, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadPostListSaga\", function() { return loadPostListSaga; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return postListSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/history */ \"./src/client/utils/history.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./src/client/components/Post/actions.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/client/components/Post/constants.js\");\n/* harmony import */ var _commons_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commons/constants */ \"./src/client/commons/constants/index.js\");\n/* harmony import */ var _commons_constants_api_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commons/constants/api.services */ \"./src/client/commons/constants/api.services.js\");\n/* harmony import */ var _commons_utils_ServiceUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commons/utils/ServiceUtil */ \"./src/client/commons/utils/ServiceUtil.js\");\n/* harmony import */ var _commons_utils_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commons/utils/url */ \"./src/client/commons/utils/url.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst updateQueryParams = params => {\n  if (_utils_history__WEBPACK_IMPORTED_MODULE_1__[\"default\"] && Object.keys(params).indexOf(\"page\") > -1) {\n    const queryParamsUrl = Object(_commons_utils_url__WEBPACK_IMPORTED_MODULE_7__[\"buildUrl\"])({\n      pathName: \"/\",\n      query: _extends({}, params)\n    });\n\n    _utils_history__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push(queryParamsUrl);\n  }\n};\n\nfunction* loadPostListSaga(action) {\n  try {\n    const { params = {} } = action;\n\n    const url = Object(_commons_utils_url__WEBPACK_IMPORTED_MODULE_7__[\"buildUrl\"])({\n      pathName: _commons_constants_api_services__WEBPACK_IMPORTED_MODULE_5__[\"default\"].search,\n      query: _extends({\n        tags: _commons_constants__WEBPACK_IMPORTED_MODULE_4__[\"FRONT_PAGE_TAG\"]\n      }, params)\n    });\n\n    const listingData = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(_commons_utils_ServiceUtil__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch, url);\n\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchPostListDataSuccess\"])(listingData));\n\n    updateQueryParams(params);\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchPostListDataError\"])(err));\n  }\n}\n\nfunction* postListSaga() {\n  console.log(\"2\");\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_constants__WEBPACK_IMPORTED_MODULE_3__[\"FETCH_POST_LIST_DATA\"], loadPostListSaga);\n}\n\n//# sourceURL=webpack:///./src/client/components/Post/sagas.js?");

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
/*! exports provided: removePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removePost\", function() { return removePost; });\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/localStorage */ \"./src/client/utils/localStorage.js\");\n/* harmony import */ var _HidePost_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HidePost/constants */ \"./src/client/components/HidePost/constants.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n// import { VOTE_FEED_KEY } from \"../../atoms/Vote/constants\";\n\nconst removePost = (postListState, objectID) => {\n  const { data } = postListState,\n        others = _objectWithoutProperties(postListState, [\"data\"]);\n  const { hits } = data;\n\n  const postIndex = hits.findIndex(post => {\n    return post.objectID === objectID;\n  });\n\n  hits.splice(postIndex, 1);\n\n  return _extends({\n    data: _extends({}, data, {\n      hits: [...hits]\n    })\n  }, others);\n};\n\n// export const filterFeedDataWithHiddenFeeds = (postListData) => {\n//   const storage = new LocalStorageUtil();\n\n//   const hiddenFeedIds = JSON.parse(storage.getItem(HIDE_FEED_KEY) || \"[]\");\n\n//   if (hiddenFeedIds.length) {\n//     const { hits } = postListData;\n//     const filteredHits = hits.filter((hit) => {\n//       return hiddenFeedIds.indexOf(hit.objectID) === -1;\n//     });\n\n//     return {\n//       ...postListData,\n//       hits: filteredHits,\n//     };\n//   }\n//   return postListData;\n// };\n\n// export const updateUpVoteInFeedData = (postListData) => {\n//   const storage = new LocalStorageUtil();\n\n//   const votedFeedIds = JSON.parse(storage.getItem(VOTE_FEED_KEY) || \"[]\");\n\n//   if (votedFeedIds.length) {\n//     const { hits } = postListData;\n//     const votedHits = hits.map((hit) => {\n//       const cloneHit = { ...hit };\n\n//       if (votedFeedIds.indexOf(cloneHit.objectID) > -1) {\n//         cloneHit.voted = true;\n//       }\n\n//       return cloneHit;\n//     });\n\n//     return {\n//       ...postListData,\n//       hits: votedHits,\n//     };\n//   }\n//   return postListData;\n// };\n\n\n\n//# sourceURL=webpack:///./src/client/components/Utils/utils.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_components_Post_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/components/Post/sagas */ \"./src/client/components/Post/sagas.js\");\n/* harmony import */ var _client_components_HidePost_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/components/HidePost/sagas */ \"./src/client/components/HidePost/sagas.js\");\n\n\n\n\n// import voteSaga from \"./containers/atoms/Vote/sagas\";\n\nfunction* rootSaga() {\n  //   yield all([feedListSaga(), , voteSaga()]);\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(_client_components_Post_sagas__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), Object(_client_components_HidePost_sagas__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()]);\n}\n\n//# sourceURL=webpack:///./src/client/sagas.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n// eslint-disable-next-line import/no-mutable-exports\nlet history;\n\nif (typeof document !== 'undefined') {\n  // eslint-disable-next-line global-require\n  const { createBrowserHistory } = __webpack_require__(/*! history */ \"./node_modules/history/esm/history.js\");\n\n  history = createBrowserHistory();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (history);\n\n//# sourceURL=webpack:///./src/client/utils/history.js?");

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

/***/ "@babel/runtime/helpers/esm/extends":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/esm/extends" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/esm/extends\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/esm/extends%22?");

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