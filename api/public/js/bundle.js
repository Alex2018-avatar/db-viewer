/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/js/config/config.js":
/*!*********************************!*\
  !*** ./web/js/config/config.js ***!
  \*********************************/
/*! exports provided: BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BASE_URL\", function() { return BASE_URL; });\nvar BASE_URL = \"\".concat(WCParamJS.urlPrefixForHTTP, \":\").concat(WCParamJS.portDefault);\n\n//# sourceURL=webpack:///./web/js/config/config.js?");

/***/ }),

/***/ "./web/js/index.js":
/*!*************************!*\
  !*** ./web/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/login */ \"./web/js/models/login.js\");\n/* harmony import */ var _models_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/search */ \"./web/js/models/search.js\");\n/* harmony import */ var _models_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/database */ \"./web/js/models/database.js\");\n/* harmony import */ var _models_viewsql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/viewsql */ \"./web/js/models/viewsql.js\");\n/* harmony import */ var _views_loginView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/loginView */ \"./web/js/views/loginView.js\");\n/* harmony import */ var _views_layoutView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/layoutView */ \"./web/js/views/layoutView.js\");\n/* harmony import */ var _views_searchView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/searchView */ \"./web/js/views/searchView.js\");\n/* harmony import */ var _views_databaseView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/databaseView */ \"./web/js/views/databaseView.js\");\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/base */ \"./web/js/views/base.js\");\n\n\n\n\n\n\n\n\n\nvar DM = _views_base__WEBPACK_IMPORTED_MODULE_8__[\"elementsString\"];\n/** Global State of the app\r\n * - Search Object\r\n * - Current recipe object\r\n * - Shooping list object\r\n * - Liked recipes\r\n * \r\n*/\n\nvar state = {};\n/** BEGIN: CONTROLLERS */\n\n/**\r\n * Login Controller\r\n */\n\nvar loginController = function loginController() {\n  return regeneratorRuntime.async(function loginController$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          document.querySelector(\".\".concat(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"elementsString\"].loginForm)).addEventListener('submit', function (e) {\n            e.preventDefault();\n            var form = e.target.closest('.login-form');\n            var data = _views_loginView__WEBPACK_IMPORTED_MODULE_4__[\"getInputs\"](form.elements);\n\n            if (!data.logonId) {\n              _views_loginView__WEBPACK_IMPORTED_MODULE_4__[\"showErrorLogin\"]('block');\n              return false;\n            } else {\n              _views_loginView__WEBPACK_IMPORTED_MODULE_4__[\"showErrorLogin\"]('none');\n\n              if (!data.logonPassword) {\n                _views_loginView__WEBPACK_IMPORTED_MODULE_4__[\"showErrorLogin\"]('block');\n              } else {\n                _views_loginView__WEBPACK_IMPORTED_MODULE_4__[\"showErrorLogin\"]('none');\n                var auth = new _models_login__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n                auth.login(data);\n              }\n            }\n          });\n\n        case 1:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  });\n};\n/**\r\n * Search Controller\r\n */\n\n\nvar searchController = function searchController() {\n  var query;\n  return regeneratorRuntime.async(function searchController$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          // 1: get query form view\n          query = _views_searchView__WEBPACK_IMPORTED_MODULE_6__[\"getInput\"](); // 2) new search object and add to sate\n\n          state.search = new _models_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"](query); // 3) Prepare UI for results\n\n          _views_searchView__WEBPACK_IMPORTED_MODULE_6__[\"clearResults\"]();\n          Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"renderLoader\"])(Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.searchTable)); // 4) Search for results\n\n          _context2.next = 6;\n          return regeneratorRuntime.awrap(state.search.getResults());\n\n        case 6:\n          // 5) Render results on UI\n          Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"clearLoader\"])();\n          _views_searchView__WEBPACK_IMPORTED_MODULE_6__[\"renderResults\"](state.search.result);\n\n        case 8:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  });\n};\n\nvar viewController = function viewController() {\n  state.vwmodel = new _models_viewsql__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  state.vwmodel.readStorage();\n  var data = _views_databaseView__WEBPACK_IMPORTED_MODULE_7__[\"getInputsView\"](); //console.log(data)\n\n  if (state.vwmodel.isviewInserted(data.nameview)) {\n    Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"setUpdAlert\"])('Vista ya existe este nombre, ingrese vista con un nombre diferente!');\n  } else {\n    // 3\n    _views_databaseView__WEBPACK_IMPORTED_MODULE_7__[\"clearViewsResult\"](); // 4\n\n    state.vwmodel.addView(data); // 5\n\n    _views_databaseView__WEBPACK_IMPORTED_MODULE_7__[\"renderViews\"](state.vwmodel.viewslist);\n    _views_databaseView__WEBPACK_IMPORTED_MODULE_7__[\"clearFormView\"]();\n  }\n};\n/**\r\n * DB CONTROLLER\r\n */\n\n\nvar dbController = function dbController() {\n  var query;\n  return regeneratorRuntime.async(function dbController$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          // 1: get query form view\n          query = _views_databaseView__WEBPACK_IMPORTED_MODULE_7__[\"getInputs\"]();\n          state.vwmodel = new _models_viewsql__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n          state.vwmodel.readStorage();\n          query.views = state.vwmodel.viewslist; // 2\n\n          state.register = new _models_database__WEBPACK_IMPORTED_MODULE_2__[\"default\"](query); // 3) Prepare UI for results\n\n          Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"renderLoader\"])(Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.registerForm));\n          _context3.prev = 6;\n          _context3.next = 9;\n          return regeneratorRuntime.awrap(state.register.saveDatabase(state.register));\n\n        case 9:\n          Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"clearLoader\"])();\n          _views_databaseView__WEBPACK_IMPORTED_MODULE_7__[\"resetForm\"]();\n          Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.searchTable).style.display = 'block';\n          Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.registerContainer).style.display = 'none';\n          searchController();\n          _context3.next = 19;\n          break;\n\n        case 16:\n          _context3.prev = 16;\n          _context3.t0 = _context3[\"catch\"](6);\n          console.log(_context3.t0.message);\n\n        case 19:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, null, null, [[6, 16]]);\n};\n/** END: CONTROLLERS */\n\n\nvar listenersIfLogged = function listenersIfLogged() {\n  /**\r\n  * NAVIGATION\r\n  */\n  Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.btnMenuRegister).addEventListener('click', function (e) {\n    _views_searchView__WEBPACK_IMPORTED_MODULE_6__[\"clearResults\"]();\n    Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.searchTable).style.display = 'none';\n    Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.registerContainer).style.display = 'block';\n  }); // SEARCH CONTROLLER\n\n  Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.searchBtnForm).addEventListener('click', function (e) {\n    e.preventDefault();\n    var logAuth = new _models_login__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    if (logAuth.isAuth) {\n      searchController();\n      Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.searchTable).style.display = 'block';\n      Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.registerContainer).style.display = 'none';\n    } else {\n      logAuth.checkSession();\n    }\n  }); // LOG OUT\n\n  Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.logOutBtn).addEventListener('click', function (e) {\n    state.vmlogin = new _models_login__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    state.vmlogin.logOut();\n  }); // VIEWS FORM\n\n  Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.viewsBtnForm).addEventListener('click', function (e) {\n    e.preventDefault();\n    Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.formViewjs).classList.toggle('hidden');\n    e.target.classList.toggle('closed');\n\n    if (e.target.textContent === \"Agregar +\") {\n      e.target.textContent = \"X\";\n    } else {\n      e.target.textContent = \"Agregar +\";\n    }\n  }); // SAVE DB\n\n  Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.registerForm).addEventListener('submit', function (e) {\n    e.preventDefault();\n    if (_views_databaseView__WEBPACK_IMPORTED_MODULE_7__[\"validate\"]()) dbController();\n  }); // ADD VIEWS\n\n  Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.viewsBtnAddItem).addEventListener('click', function (e) {\n    e.preventDefault();\n    if (_views_databaseView__WEBPACK_IMPORTED_MODULE_7__[\"validateFormViews\"]()) viewController();\n  }); // DELETE VIEWS\n\n  Object(_views_base__WEBPACK_IMPORTED_MODULE_8__[\"getDOM\"])(DM.viewResultForm).addEventListener('click', function (e) {\n    e.preventDefault();\n    var btn = e.target.closest('.btn-delete-item');\n\n    if (btn) {\n      state.vwmodel = new _models_viewsql__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n      state.vwmodel.readStorage();\n      state.vwmodel.deleteView(btn.dataset.id);\n      _views_databaseView__WEBPACK_IMPORTED_MODULE_7__[\"clearViewsResult\"]();\n      _views_databaseView__WEBPACK_IMPORTED_MODULE_7__[\"renderViews\"](state.vwmodel.viewslist);\n    }\n  });\n}; // Restore liked recipes on page load\n\n\nwindow.addEventListener('load', function () {\n  state.vmlogin = new _models_login__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  state.vmlogin.isLogged();\n  console.log('[ initialized store! ]');\n\n  if (state.vmlogin.isLogged()) {\n    _views_layoutView__WEBPACK_IMPORTED_MODULE_5__[\"initLayout\"]();\n    listenersIfLogged();\n    searchController();\n  } else {\n    _views_loginView__WEBPACK_IMPORTED_MODULE_4__[\"renderLoginForm\"]();\n    loginController();\n  }\n});\n\n//# sourceURL=webpack:///./web/js/index.js?");

/***/ }),

/***/ "./web/js/models/database.js":
/*!***********************************!*\
  !*** ./web/js/models/database.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Database; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./web/js/config/config.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Database =\n/*#__PURE__*/\nfunction () {\n  function Database(dbobject) {\n    _classCallCheck(this, Database);\n\n    this.id = Date.now();\n    this.type = dbobject.dbtype || \"\";\n    this.connection = {\n      id: Date.now(),\n      database: dbobject.dbname || \"\",\n      hostname: dbobject.dbhost || \"\",\n      port: dbobject.dbport || \"\",\n      user: dbobject.dbuser || \"\",\n      password: \"\"\n    };\n    this.views = dbobject.views || [];\n  }\n\n  _createClass(Database, [{\n    key: \"saveDatabase\",\n    value: function saveDatabase(objectdb) {\n      var config, url, response, json;\n      return regeneratorRuntime.async(function saveDatabase$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              config = {\n                headers: {\n                  'Authorization': \"bearer \" + localStorage.getItem('WSC12019_TOKEN')\n                }\n              };\n              url = \"\".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__[\"BASE_URL\"], \"/dbs/v1/registerDB\");\n              _context.next = 5;\n              return regeneratorRuntime.awrap(axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, objectdb, config));\n\n            case 5:\n              response = _context.sent;\n              json = response.data;\n              console.log(json);\n              _context.next = 13;\n              break;\n\n            case 10:\n              _context.prev = 10;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, null, null, [[0, 10]]);\n    }\n  }]);\n\n  return Database;\n}();\n\n\n\n//# sourceURL=webpack:///./web/js/models/database.js?");

/***/ }),

/***/ "./web/js/models/login.js":
/*!********************************!*\
  !*** ./web/js/models/login.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./web/js/config/config.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Login =\n/*#__PURE__*/\nfunction () {\n  function Login(user) {\n    _classCallCheck(this, Login);\n\n    // this.logonId = user.logonId;\n    // this.logonPassword = user.logonPassword\n    this.isAuth = this.isLogged();\n  }\n\n  _createClass(Login, [{\n    key: \"isLogged\",\n    value: function isLogged() {\n      var token = localStorage.getItem('WSC12019_TOKEN');\n\n      if (!token) {\n        return false;\n      }\n\n      return true;\n    }\n  }, {\n    key: \"checkSession\",\n    value: function checkSession() {\n      if (!this.isLogged()) {\n        window.location.reload();\n      }\n    }\n  }, {\n    key: \"login\",\n    value: function login(userLogin) {\n      var url, response, json;\n      return regeneratorRuntime.async(function login$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              url = \"\".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__[\"BASE_URL\"], \"/dbs/v1/loginidentity\");\n              _context.next = 4;\n              return regeneratorRuntime.awrap(axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, userLogin));\n\n            case 4:\n              response = _context.sent;\n              json = response.data;\n              localStorage.setItem('WSC12019_TOKEN', json.token);\n              window.location.reload();\n              _context.next = 13;\n              break;\n\n            case 10:\n              _context.prev = 10;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0.message);\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, null, null, [[0, 10]]);\n    }\n  }, {\n    key: \"logOut\",\n    value: function logOut() {\n      localStorage.removeItem('WSC12019_TOKEN');\n      window.location.reload();\n    }\n  }]);\n\n  return Login;\n}();\n\n\n\n//# sourceURL=webpack:///./web/js/models/login.js?");

/***/ }),

/***/ "./web/js/models/search.js":
/*!*********************************!*\
  !*** ./web/js/models/search.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./web/js/config/config.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Search =\n/*#__PURE__*/\nfunction () {\n  function Search(query) {\n    _classCallCheck(this, Search);\n\n    this.query = query;\n  }\n\n  _createClass(Search, [{\n    key: \"getResults\",\n    value: function getResults() {\n      var config, response;\n      return regeneratorRuntime.async(function getResults$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              config = {\n                headers: {\n                  'Authorization': \"Bearer \" + localStorage.getItem('WSC12019_TOKEN')\n                }\n              };\n              _context.next = 4;\n              return regeneratorRuntime.awrap(axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__[\"BASE_URL\"], \"/dbs/v1/@all?q=\").concat(this.query), config));\n\n            case 4:\n              response = _context.sent;\n              this.result = response.data;\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, null, this, [[0, 8]]);\n    }\n  }]);\n\n  return Search;\n}();\n\n\n\n//# sourceURL=webpack:///./web/js/models/search.js?");

/***/ }),

/***/ "./web/js/models/viewsql.js":
/*!**********************************!*\
  !*** ./web/js/models/viewsql.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Views; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Views =\n/*#__PURE__*/\nfunction () {\n  function Views() {\n    _classCallCheck(this, Views);\n\n    this.viewslist = [];\n  }\n\n  _createClass(Views, [{\n    key: \"addView\",\n    value: function addView(viesJS) {\n      var item = {\n        name: viesJS.nameview,\n        path: viesJS.path || \"\",\n        query: viesJS.query || \"\"\n      };\n      this.viewslist.push(item); // Perist data in localStorage\n\n      this.persistData();\n      return item;\n    }\n  }, {\n    key: \"deleteView\",\n    value: function deleteView(name) {\n      var index = this.viewslist.findIndex(function (el) {\n        return el.name === name;\n      });\n      this.viewslist.splice(index, 1); // Perist data in localStorage\n\n      this.persistData();\n    }\n  }, {\n    key: \"isviewInserted\",\n    value: function isviewInserted(name) {\n      return this.viewslist.findIndex(function (el) {\n        return el.name === name;\n      }) !== -1;\n    }\n  }, {\n    key: \"persistData\",\n    value: function persistData() {\n      localStorage.setItem('views', JSON.stringify(this.viewslist));\n    }\n  }, {\n    key: \"getNumViews\",\n    value: function getNumViews() {\n      return this.viewslist.length;\n    }\n  }, {\n    key: \"readStorage\",\n    value: function readStorage() {\n      var storage = JSON.parse(localStorage.getItem('views')); // Restoring likes from the localStorage\n\n      if (storage) this.viewslist = storage;\n    }\n  }]);\n\n  return Views;\n}();\n\n\n\n//# sourceURL=webpack:///./web/js/models/viewsql.js?");

/***/ }),

/***/ "./web/js/views/base.js":
/*!******************************!*\
  !*** ./web/js/views/base.js ***!
  \******************************/
/*! exports provided: elements, elementsString, getDOM, getDomALL, renderLoader, clearLoader, setUpdAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementsString\", function() { return elementsString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDOM\", function() { return getDOM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDomALL\", function() { return getDomALL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLoader\", function() { return renderLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearLoader\", function() { return clearLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUpdAlert\", function() { return setUpdAlert; });\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);\n\nvar elements = {\n  app: document.getElementById('app'),\n  btnLogin: document.querySelector('.login_btn'),\n  // loginForm: document.querySelector('.login-form').elements,\n  btnMenuRegister: document.querySelector('.btn-menu-register'),\n  btnMenuUpdate: document.querySelector('.btn-menu-update'),\n  searchForm: document.querySelector('.search'),\n  searchBtnForm: document.querySelector('.search__btn'),\n  searchRestList: document.querySelector('.results__list'),\n  searchTable: document.querySelector('.table-content'),\n  searchCbo: document.querySelector('.search__field'),\n  registerForm: document.querySelector('.register'),\n  registerFormInputs: document.querySelector('.register'),\n  //.elements,\n  registerContainer: document.querySelector('.register-db'),\n  viewsBtnForm: document.querySelector('.open-views-form'),\n  viewsBtnAddItem: document.querySelector('.add-item-view'),\n  viewResultForm: document.querySelector('.inserted-items'),\n  inputsItemView: document.querySelectorAll('.input-item-view'),\n  btnSaveDatabase: document.querySelector('.save_database_btn'),\n  formViewjs: document.querySelector('.form-vw'),\n  headerViewBtn: document.querySelector('.header-views-form'),\n  logOutBtn: document.querySelector('.btn-log-out')\n};\nvar elementsString = {\n  loader: 'loader',\n  loginForm: 'login-form',\n  btnMenuRegister: '.btn-menu-register',\n  // search\n  searchBtnForm: '.search__btn',\n  searchTable: '.table-content',\n  searchCbo: '.search__field',\n  searchRestList: '.results__list',\n  registerContainer: '.register-db',\n  registerForm: '.register',\n  logOutBtn: '.btn-log-out',\n  registerFormInputs: '.register',\n  viewsBtnForm: '.open-views-form',\n  formViewjs: '.form-vw',\n  viewsBtnAddItem: '.add-item-view',\n  inputsItemView: '.input-item-view',\n  viewResultForm: '.inserted-items'\n};\nvar getDOM = function getDOM(identifier) {\n  if (identifier.startsWith('.') || identifier.startsWith('#')) {\n    return document.querySelector(identifier);\n  } else {\n    return document.getElementById(identifier);\n  }\n};\nvar getDomALL = function getDomALL(identifier) {\n  return document.querySelectorAll(identifier);\n};\nvar renderLoader = function renderLoader(parent) {\n  var loader = \"\\n    <div class=\\\"\".concat(elementsString.loader, \"\\\">\\n      <svg>\\n        <use href=\\\"img/icons.svg#icon-cw\\\"></use>\\n      </svg>\\n    <div>\\n  \");\n  parent.insertAdjacentHTML('afterbegin', loader);\n};\nvar clearLoader = function clearLoader() {\n  var loader = document.querySelector(\".\".concat(elementsString.loader));\n  if (loader) loader.parentElement.removeChild(loader);\n};\nvar setUpdAlert = function setUpdAlert(message) {\n  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({\n    position: 'top-end',\n    icon: 'success',\n    title: \"\".concat(message),\n    //text: `${message}`,\n    showConfirmButton: false,\n    timer: 1000\n  });\n};\n\n//# sourceURL=webpack:///./web/js/views/base.js?");

/***/ }),

/***/ "./web/js/views/databaseView.js":
/*!**************************************!*\
  !*** ./web/js/views/databaseView.js ***!
  \**************************************/
/*! exports provided: resetForm, getInputs, getInputsView, validate, validateFormViews, clearViewsResult, clearFormView, renderViews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetForm\", function() { return resetForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInputs\", function() { return getInputs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInputsView\", function() { return getInputsView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validate\", function() { return validate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateFormViews\", function() { return validateFormViews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearViewsResult\", function() { return clearViewsResult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearFormView\", function() { return clearFormView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderViews\", function() { return renderViews; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./web/js/views/base.js\");\n\nvar DM = _base__WEBPACK_IMPORTED_MODULE_0__[\"elementsString\"];\n\nvar isValidValue = function isValidValue(element) {\n  return !['checkbox', 'radio'].includes(element.type) || element.checked;\n};\n\nvar isValidElement = function isValidElement(element) {\n  return element.name && element.value;\n};\n\nvar resetForm = function resetForm() {\n  var data = Array.from(Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(DM.registerFormInputs));\n  data.forEach(function (element, index) {\n    if (element.nodeName === 'SELECT') {\n      element.selectedIndex = 0;\n    }\n\n    if (element.nodeName === 'INPUT' && element.type === 'text') {\n      element.value = '';\n    }\n  });\n  localStorage.removeItem('views');\n  Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(DM.viewResultForm).innerHTML = '';\n};\nvar getInputs = function getInputs(elementForm) {\n  var data = Array.from(Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(DM.registerFormInputs).elements);\n  return [].reduce.call(data, function (data, element) {\n    // Make sure the element has the required properties and should be added.\n    if (isValidElement(element) && isValidValue(element)) {\n      data[element.name] = element.value;\n    }\n\n    return data;\n  }, {});\n};\nvar getInputsView = function getInputsView() {\n  var typeDB = document.getElementById('dbtype');\n  var data = Array.from(Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDomALL\"])(DM.inputsItemView));\n  return [].reduce.call(data, function (data, element) {\n    // Make sure the element has the required properties and should be added.\n    if (isValidElement(element) && isValidValue(element)) {\n      data[element.name] = element.value;\n      data['path'] = getPath(typeDB.value, data.nameview);\n    }\n\n    return data;\n  }, {});\n};\n\nfunction getPath(type, filename) {\n  switch (type) {\n    case 'MYSQL':\n      return \"views/mysql/\".concat(filename);\n      break;\n\n    case 'MARIADB':\n      return \"views/mariadb/\".concat(filename);\n      break;\n\n    case 'DB2':\n      return \"views/db2/\".concat(filename);\n      break;\n\n    default:\n      break;\n  }\n}\n\nvar errorAppend = function errorAppend(element, fieldName) {\n  var markup = \"\\n    <div class=\\\"error\\\">\".concat(fieldName, \" es un campo requerido (*)</div>\\n  \");\n  element.insertAdjacentHTML('afterend', markup);\n};\n\nvar validate = function validate() {\n  var cboType = Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(DM.registerFormInputs).elements[\"dbtype\"];\n  var txtName = Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(DM.registerFormInputs).elements[\"dbname\"];\n  var txtHost = Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(DM.registerFormInputs).elements[\"dbhost\"];\n  var txtPort = Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(DM.registerFormInputs).elements[\"dbport\"];\n  var txtUser = Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(DM.registerFormInputs).elements[\"dbuser\"];\n\n  if (cboType.selectedIndex === 0) {\n    cboType.classList.add('input-error');\n    cboType.focus();\n    return false;\n  }\n\n  if (txtName.value === \"\") {\n    txtName.classList.add('input-error');\n    txtName.focus();\n    return false;\n  }\n\n  if (txtHost.value === \"\") {\n    txtHost.classList.add('input-error');\n    txtHost.focus();\n    return false;\n  }\n\n  if (txtPort.value === \"\") {\n    txtPort.classList.add('input-error');\n    txtPort.focus();\n    return false;\n  }\n\n  if (txtUser.value === \"\") {\n    txtUser.classList.add('input-error');\n    txtUser.focus();\n    return false;\n  }\n\n  return true;\n};\n/**\r\n * VIEWS SECTION\r\n */\n\nvar validateFormViews = function validateFormViews() {\n  var txtName = Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(DM.registerFormInputs)[\"nameview\"];\n\n  if (txtName.value === \"\") {\n    txtName.classList.add('input-error');\n    txtName.focus();\n    errorAppend(txtName, 'Nombre');\n    return false;\n  }\n\n  return true;\n};\nvar clearViewsResult = function clearViewsResult() {\n  Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(DM.viewResultForm).innerHTML = '';\n};\nvar clearFormView = function clearFormView() {\n  Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(DM.registerFormInputs)[\"nameview\"].value = '';\n  Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(DM.registerFormInputs)[\"query\"].value = '';\n};\n\nvar renderTableHeaderViews = function renderTableHeaderViews() {\n  var markup = \"\\n    <ul class=\\\"view-result-thead\\\">\\n      <li>Nombre</li>\\n      <li>Ruta</li>\\n      <li>Eliminar</li>\\n    </ul>\\n  \";\n  Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(DM.viewResultForm).insertAdjacentHTML('beforeend', markup);\n};\n\nvar renderViewsItems = function renderViewsItems(element) {\n  var markup = \"\\n    <ul class=\\\"view-result-tbody\\\">\\n      <li>\".concat(element.name, \"</li>\\n      <li>\").concat(element.path, \"</li>\\n      <li>\\n        <button class=\\\"btn-tiny btn-delete-item\\\" data-id=\").concat(element.name, \">\\n          <svg>\\n            <use href=\\\"img/icons.svg#icon-circle-with-minus\\\"></use>\\n          </svg>\\n        </button>\\n      </li>\\n    </ul>\\n  \");\n  Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(DM.viewResultForm).insertAdjacentHTML('beforeend', markup);\n};\n\nvar renderViews = function renderViews(viewsList) {\n  renderTableHeaderViews();\n  if (viewsList) viewsList.forEach(renderViewsItems);\n};\n\n//# sourceURL=webpack:///./web/js/views/databaseView.js?");

/***/ }),

/***/ "./web/js/views/layoutView.js":
/*!************************************!*\
  !*** ./web/js/views/layoutView.js ***!
  \************************************/
/*! exports provided: initLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initLayout\", function() { return initLayout; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./web/js/views/base.js\");\n\n\nvar searchContent = function searchContent() {\n  var markup = \"\\n    <div class=\\\"search-content\\\">\\n      <div class=\\\"header__logo\\\"></div>\\n      <!-- BEGIN: Search ontainer -->\\n      <form class=\\\"search\\\">\\n        <select name=\\\"\\\" id=\\\"\\\" class=\\\"search__field\\\">\\n          <option value=\\\"\\\">Todos</option>\\n          <option value=\\\"MARIADB\\\">Maria DB</option>\\n          <option value=\\\"MYSQL\\\">MySQL</option>\\n          <option value=\\\"DB2\\\">DB2</option>\\n        </select>\\n\\n        <button class=\\\"btn search__btn\\\">\\n          <svg class=\\\"search__icon\\\">\\n            <use href=\\\"img/icons.svg#icon-magnifying-glass\\\"></use>\\n          </svg>\\n          <span>Search</span>\\n        </button>\\n      </form>\\n      <!-- END: Search ontainer -->\\n      <div class=\\\"likes\\\">\\n        <div class=\\\"likes__field\\\">\\n          <a class=\\\"btn-tiny btn-log-out\\\"><span>Cerrar Sesion</span></a>\\n        </div>\\n      </div>\\n    </div>\\n  \";\n  return markup;\n};\n\nvar menuAside = function menuAside() {\n  var markup = \"\\n    <div class=\\\"menu-container-aside\\\">\\n      <ul class=\\\"options-view\\\">\\n        <li>\\n          <div class=\\\"results__link\\\">\\n            <button class=\\\"btn search__btn btn-menu-register\\\">\\n              <span>Agregar</span>\\n            </button>\\n          </div>\\n        </li>\\n      </ul>\\n    </div>\\n  \";\n  return markup;\n};\n\nvar contentMain = function contentMain() {\n  var markup = \"\\n    <div class=\\\"content-body\\\">\\n      <div class=\\\"table-content\\\">\\n        <table class=\\\"table\\\">\\n          <thead class=\\\"thead-dark\\\">\\n            <tr>\\n              <th scope=\\\"col\\\">#</th>\\n              <th scope=\\\"col\\\">UniqueId</th>\\n              <th scope=\\\"col\\\">Tipo</th>\\n              <th scope=\\\"col\\\">Base de Datos</th>\\n              <th scope=\\\"col\\\">Puerto</th>\\n              <th scope=\\\"col\\\">Host</th>\\n            </tr>\\n          </thead>\\n          <tbody class=\\\"results__list\\\"></tbody>\\n        </table>\\n      </div>\\n\\n      <!-- BEGIN: Register FORM -->\\n      <div class=\\\"register-db\\\" style=\\\"display: none;\\\">\\n        <form class=\\\"register\\\" name=\\\"register\\\">\\n          <h1 class=\\\"title\\\">Registrar Base de Datos</h1>\\n          <div class=\\\"form-group\\\">\\n            <select name=\\\"dbtype\\\" id=\\\"dbtype\\\" class=\\\"form-input\\\">\\n              <option value=\\\"\\\">Seleccione</option>\\n              <option value=\\\"MARIADB\\\">Maria DB</option>\\n              <option value=\\\"MYSQL\\\">MySQL</option>\\n              <option value=\\\"DB2\\\">DB2</option>\\n            </select>\\n\\n          </div>\\n          <div class=\\\"form-group\\\">\\n            <label for=\\\"\\\">Nombre de la BD: </label>\\n            <input type=\\\"text\\\" name=\\\"dbname\\\" id=\\\"dbname\\\" class=\\\"form-input\\\"\\n              placeholder=\\\"Ingrese Nombre de la Base de datos\\\">\\n          </div>\\n          <div class=\\\"form-group\\\">\\n            <label for=\\\"\\\">Hostname de la BD: </label>\\n            <input type=\\\"text\\\" name=\\\"dbhost\\\" id=\\\"dbhost\\\" class=\\\"form-input\\\"\\n              placeholder=\\\"Ingrese Hostname de la Base de datos\\\">\\n          </div>\\n          <div class=\\\"form-group\\\">\\n            <label for=\\\"\\\">Port de la BD: </label>\\n            <input type=\\\"text\\\" name=\\\"dbport\\\" id=\\\"dbport\\\" class=\\\"form-input\\\"\\n              placeholder=\\\"Ingrese puerto de conexion de la base de datos\\\">\\n          </div>\\n          <div class=\\\"form-group\\\">\\n            <label for=\\\"\\\">User de la BD: </label>\\n            <input type=\\\"text\\\" name=\\\"dbuser\\\" id=\\\"dbuser\\\" class=\\\"form-input\\\"\\n              placeholder=\\\"Ingrese Usuario de connecion de la Base de datos\\\">\\n          </div>\\n\\n          <div class=\\\"form-group\\\">\\n            <label for=\\\"\\\">Agregar vistas: </label>\\n            <div class=\\\"form-group form-buttons-view\\\">\\n              <div class=\\\"open-views-form-cont\\\">\\n                <button class=\\\"btn open-views-form rigth\\\">Agregar +</button>\\n              </div>\\n              <div class=\\\"clearfix\\\"></div>\\n              <div class=\\\"views-form\\\">\\n\\n                <div class=\\\"form-vw hidden\\\">\\n                  <button class=\\\"btn-tiny add-item-view\\\">\\n                    <svg>\\n                      <use href=\\\"img/icons.svg#icon-circle-with-plus\\\"></use>\\n                    </svg>\\n                  </button>\\n                  <div class=\\\"form-group form-group-view\\\">\\n                    <label for=\\\"\\\">Nombre de la vista: </label>\\n                    <input type=\\\"text\\\" name=\\\"nameview\\\" id=\\\"nameview\\\" class=\\\"input-item-view\\\"\\n                      placeholder=\\\"Ingrese Nombre de la vista\\\">\\n                  </div>\\n                  <div class=\\\"form-group form-group-view\\\">\\n                    <label for=\\\"\\\">Query SQL: </label>\\n                    <textarea rows=\\\"5\\\" cols=\\\"50\\\" name=\\\"query\\\" id=\\\"query\\\" placeholder=\\\"Ingrese query sql\\\" class=\\\"input-item-view\\\"></textarea>\\n                  </div>\\n                  \\n                </div>\\n                <div class=\\\"clearfix\\\"></div>\\n                <div class=\\\"inserted-items\\\"></div>\\n              </div>\\n            </div>\\n          </div>\\n          <button class=\\\"btn save_database_btn\\\">\\n            <span>Guardar</span>\\n          </button>\\n        </form>\\n      </div>\\n    </div>\\n  \";\n  return markup;\n};\n\nvar initLayout = function initLayout() {\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].app.insertAdjacentHTML('beforeend', searchContent());\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].app.insertAdjacentHTML('beforeend', menuAside());\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].app.insertAdjacentHTML('beforeend', contentMain());\n};\n\n//# sourceURL=webpack:///./web/js/views/layoutView.js?");

/***/ }),

/***/ "./web/js/views/loginView.js":
/*!***********************************!*\
  !*** ./web/js/views/loginView.js ***!
  \***********************************/
/*! exports provided: renderLoginForm, showErrorLogin, getInputs, logInUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLoginForm\", function() { return renderLoginForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showErrorLogin\", function() { return showErrorLogin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInputs\", function() { return getInputs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logInUser\", function() { return logInUser; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./web/js/views/base.js\");\n\n\nvar loginHTML = function loginHTML() {\n  var markup = \"\\n    <div class=\\\"login-container\\\">\\n      <div class=\\\"login\\\">\\n        <form class=\\\"login-form\\\" name=\\\"loginform\\\">\\n          <h1 class=\\\"title\\\">Iniciar Sesion</h1>\\n          <div class=\\\"form-group\\\">\\n            <label for=\\\"\\\">Usuario: </label>\\n            <input type=\\\"text\\\" name=\\\"logonId\\\" id=\\\"logonId\\\" class=\\\"form-input\\\"\\n              placeholder=\\\"Ingrese Usuario\\\">\\n          </div>\\n          <div class=\\\"form-group\\\">\\n            <label for=\\\"\\\">password: </label>\\n            <input type=\\\"password\\\" name=\\\"logonPassword\\\" id=\\\"logonPassword\\\" class=\\\"form-input\\\"\\n              placeholder=\\\"Ingrese Password\\\">\\n          </div>\\n          <div class=\\\"error error-login\\\">Complete todos los campos, para continuar.</div>\\n          <button class=\\\"btn login_btn\\\">\\n            <span>Ingresar</span>\\n          </button>\\n        </form>\\n      </div>\\n    </div>\\n  \";\n  document.body.insertAdjacentHTML('beforeend', markup);\n};\n\nvar renderLoginForm = function renderLoginForm() {\n  return loginHTML();\n};\n\nvar isValidValue = function isValidValue(element) {\n  return !['checkbox', 'radio'].includes(element.type) || element.checked;\n};\n\nvar isValidElement = function isValidElement(element) {\n  return element.name && element.value;\n};\n\nvar showErrorLogin = function showErrorLogin(curDisplay) {\n  document.querySelector('.error-login').style.display = curDisplay;\n};\nvar getInputs = function getInputs(elementForm) {\n  var data = Array.from(elementForm);\n  return [].reduce.call(data, function (data, element) {\n    // Make sure the element has the required properties and should be added.\n    if (isValidElement(element) && isValidValue(element)) {\n      data[element.name] = element.value;\n    }\n\n    return data;\n  }, {});\n};\nvar logInUser = function logInUser() {// elements.app.addEventListener('click', e => {\n  //   e.preventDefault();\n  //   const btn = e.target.closest('.login_btn')\n  //   if (btn) {\n  //     const form = e.target.closest('.login-form')\n  //     // console.log('hola')\n  //     // console.log(form.elements)\n  //     console.log(getInputs(form.elements))\n  //     return getInputs(form.elements)\n  //   }\n  // })\n};\n\n//# sourceURL=webpack:///./web/js/views/loginView.js?");

/***/ }),

/***/ "./web/js/views/searchView.js":
/*!************************************!*\
  !*** ./web/js/views/searchView.js ***!
  \************************************/
/*! exports provided: getInput, clearResults, renderResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInput\", function() { return getInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearResults\", function() { return clearResults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderResults\", function() { return renderResults; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./web/js/views/base.js\");\n\nvar getInput = function getInput() {\n  return Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(_base__WEBPACK_IMPORTED_MODULE_0__[\"elementsString\"].searchCbo).value;\n};\nvar clearResults = function clearResults() {\n  Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(_base__WEBPACK_IMPORTED_MODULE_0__[\"elementsString\"].searchRestList).innerHTML = '';\n};\n\nvar renderDatabases = function renderDatabases(elementJs, index) {\n  var markup = \"\\n    <tr>\\n      <th scope=\\\"row\\\">\".concat(index, \"</th>\\n      <th scope=\\\"row\\\">\").concat(elementJs.id, \"</th>\\n      <td>\").concat(elementJs.type, \"</td>\\n      <td>\").concat(elementJs.connection.database, \"</td>\\n      <td>\").concat(elementJs.connection.port, \"</td>\\n      <td>\").concat(elementJs.connection.hostname, \"</td>\\n    </tr>\\n  \");\n  Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"getDOM\"])(_base__WEBPACK_IMPORTED_MODULE_0__[\"elementsString\"].searchRestList).insertAdjacentHTML('beforeend', markup);\n};\n\nvar renderResults = function renderResults(dataList) {\n  if (dataList) {\n    dataList.forEach(renderDatabases);\n  }\n};\n\n//# sourceURL=webpack:///./web/js/views/searchView.js?");

/***/ }),

/***/ "./web/scss/style.scss":
/*!*****************************!*\
  !*** ./web/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"css/style.css\";\n\n//# sourceURL=webpack:///./web/scss/style.scss?");

/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi @babel/polyfill ./web/js/index.js ./web/scss/style.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"./node_modules/@babel/polyfill/lib/index.js\");\n__webpack_require__(/*! ./web/js/index.js */\"./web/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./web/scss/style.scss */\"./web/scss/style.scss\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./web/js/index.js_./web/scss/style.scss?");

/***/ })

/******/ });