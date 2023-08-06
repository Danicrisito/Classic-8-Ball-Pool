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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar DataView = getNative(root, 'DataView');\n\nmodule.exports = DataView;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_DataView.js?");

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hashClear = __webpack_require__(/*! ./_hashClear */ \"./node_modules/lodash/_hashClear.js\"),\n    hashDelete = __webpack_require__(/*! ./_hashDelete */ \"./node_modules/lodash/_hashDelete.js\"),\n    hashGet = __webpack_require__(/*! ./_hashGet */ \"./node_modules/lodash/_hashGet.js\"),\n    hashHas = __webpack_require__(/*! ./_hashHas */ \"./node_modules/lodash/_hashHas.js\"),\n    hashSet = __webpack_require__(/*! ./_hashSet */ \"./node_modules/lodash/_hashSet.js\");\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\nmodule.exports = Hash;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_Hash.js?");

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ \"./node_modules/lodash/_listCacheClear.js\"),\n    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ \"./node_modules/lodash/_listCacheDelete.js\"),\n    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ \"./node_modules/lodash/_listCacheGet.js\"),\n    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ \"./node_modules/lodash/_listCacheHas.js\"),\n    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ \"./node_modules/lodash/_listCacheSet.js\");\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\nmodule.exports = ListCache;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_ListCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Map = getNative(root, 'Map');\n\nmodule.exports = Map;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_Map.js?");

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ \"./node_modules/lodash/_mapCacheClear.js\"),\n    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ \"./node_modules/lodash/_mapCacheDelete.js\"),\n    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ \"./node_modules/lodash/_mapCacheGet.js\"),\n    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ \"./node_modules/lodash/_mapCacheHas.js\"),\n    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ \"./node_modules/lodash/_mapCacheSet.js\");\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\nmodule.exports = MapCache;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_MapCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Promise = getNative(root, 'Promise');\n\nmodule.exports = Promise;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_Promise.js?");

/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Set = getNative(root, 'Set');\n\nmodule.exports = Set;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_Set.js?");

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    stackClear = __webpack_require__(/*! ./_stackClear */ \"./node_modules/lodash/_stackClear.js\"),\n    stackDelete = __webpack_require__(/*! ./_stackDelete */ \"./node_modules/lodash/_stackDelete.js\"),\n    stackGet = __webpack_require__(/*! ./_stackGet */ \"./node_modules/lodash/_stackGet.js\"),\n    stackHas = __webpack_require__(/*! ./_stackHas */ \"./node_modules/lodash/_stackHas.js\"),\n    stackSet = __webpack_require__(/*! ./_stackSet */ \"./node_modules/lodash/_stackSet.js\");\n\n/**\n * Creates a stack cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Stack(entries) {\n  var data = this.__data__ = new ListCache(entries);\n  this.size = data.size;\n}\n\n// Add methods to `Stack`.\nStack.prototype.clear = stackClear;\nStack.prototype['delete'] = stackDelete;\nStack.prototype.get = stackGet;\nStack.prototype.has = stackHas;\nStack.prototype.set = stackSet;\n\nmodule.exports = Stack;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_Stack.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Uint8Array = root.Uint8Array;\n\nmodule.exports = Uint8Array;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_Uint8Array.js?");

/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar WeakMap = getNative(root, 'WeakMap');\n\nmodule.exports = WeakMap;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_WeakMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.forEach` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns `array`.\n */\nfunction arrayEach(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (iteratee(array[index], index, array) === false) {\n      break;\n    }\n  }\n  return array;\n}\n\nmodule.exports = arrayEach;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_arrayEach.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.filter` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {Array} Returns the new filtered array.\n */\nfunction arrayFilter(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      resIndex = 0,\n      result = [];\n\n  while (++index < length) {\n    var value = array[index];\n    if (predicate(value, index, array)) {\n      result[resIndex++] = value;\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayFilter;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_arrayFilter.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseTimes = __webpack_require__(/*! ./_baseTimes */ \"./node_modules/lodash/_baseTimes.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Creates an array of the enumerable property names of the array-like `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @param {boolean} inherited Specify returning inherited property names.\n * @returns {Array} Returns the array of property names.\n */\nfunction arrayLikeKeys(value, inherited) {\n  var isArr = isArray(value),\n      isArg = !isArr && isArguments(value),\n      isBuff = !isArr && !isArg && isBuffer(value),\n      isType = !isArr && !isArg && !isBuff && isTypedArray(value),\n      skipIndexes = isArr || isArg || isBuff || isType,\n      result = skipIndexes ? baseTimes(value.length, String) : [],\n      length = result.length;\n\n  for (var key in value) {\n    if ((inherited || hasOwnProperty.call(value, key)) &&\n        !(skipIndexes && (\n           // Safari 9 has enumerable `arguments.length` in strict mode.\n           key == 'length' ||\n           // Node.js 0.10 has enumerable non-index properties on buffers.\n           (isBuff && (key == 'offset' || key == 'parent')) ||\n           // PhantomJS 2 has enumerable non-index properties on typed arrays.\n           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||\n           // Skip index properties.\n           isIndex(key, length)\n        ))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayLikeKeys;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_arrayLikeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Appends the elements of `values` to `array`.\n *\n * @private\n * @param {Array} array The array to modify.\n * @param {Array} values The values to append.\n * @returns {Array} Returns `array`.\n */\nfunction arrayPush(array, values) {\n  var index = -1,\n      length = values.length,\n      offset = array.length;\n\n  while (++index < length) {\n    array[offset + index] = values[index];\n  }\n  return array;\n}\n\nmodule.exports = arrayPush;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_arrayPush.js?");

/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Assigns `value` to `key` of `object` if the existing value is not equivalent\n * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction assignValue(object, key, value) {\n  var objValue = object[key];\n  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||\n      (value === undefined && !(key in object))) {\n    baseAssignValue(object, key, value);\n  }\n}\n\nmodule.exports = assignValue;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_assignValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = assocIndexOf;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_assocIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * The base implementation of `_.assign` without support for multiple sources\n * or `customizer` functions.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @returns {Object} Returns `object`.\n */\nfunction baseAssign(object, source) {\n  return object && copyObject(source, keys(source), object);\n}\n\nmodule.exports = baseAssign;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseAssign.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    keysIn = __webpack_require__(/*! ./keysIn */ \"./node_modules/lodash/keysIn.js\");\n\n/**\n * The base implementation of `_.assignIn` without support for multiple sources\n * or `customizer` functions.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @returns {Object} Returns `object`.\n */\nfunction baseAssignIn(object, source) {\n  return object && copyObject(source, keysIn(source), object);\n}\n\nmodule.exports = baseAssignIn;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseAssignIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ./_defineProperty */ \"./node_modules/lodash/_defineProperty.js\");\n\n/**\n * The base implementation of `assignValue` and `assignMergeValue` without\n * value checks.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction baseAssignValue(object, key, value) {\n  if (key == '__proto__' && defineProperty) {\n    defineProperty(object, key, {\n      'configurable': true,\n      'enumerable': true,\n      'value': value,\n      'writable': true\n    });\n  } else {\n    object[key] = value;\n  }\n}\n\nmodule.exports = baseAssignValue;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseAssignValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    arrayEach = __webpack_require__(/*! ./_arrayEach */ \"./node_modules/lodash/_arrayEach.js\"),\n    assignValue = __webpack_require__(/*! ./_assignValue */ \"./node_modules/lodash/_assignValue.js\"),\n    baseAssign = __webpack_require__(/*! ./_baseAssign */ \"./node_modules/lodash/_baseAssign.js\"),\n    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ \"./node_modules/lodash/_baseAssignIn.js\"),\n    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ \"./node_modules/lodash/_cloneBuffer.js\"),\n    copyArray = __webpack_require__(/*! ./_copyArray */ \"./node_modules/lodash/_copyArray.js\"),\n    copySymbols = __webpack_require__(/*! ./_copySymbols */ \"./node_modules/lodash/_copySymbols.js\"),\n    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ \"./node_modules/lodash/_copySymbolsIn.js\"),\n    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ \"./node_modules/lodash/_getAllKeys.js\"),\n    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ \"./node_modules/lodash/_getAllKeysIn.js\"),\n    getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ \"./node_modules/lodash/_initCloneArray.js\"),\n    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ \"./node_modules/lodash/_initCloneByTag.js\"),\n    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ \"./node_modules/lodash/_initCloneObject.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isMap = __webpack_require__(/*! ./isMap */ \"./node_modules/lodash/isMap.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSet = __webpack_require__(/*! ./isSet */ \"./node_modules/lodash/isSet.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\"),\n    keysIn = __webpack_require__(/*! ./keysIn */ \"./node_modules/lodash/keysIn.js\");\n\n/** Used to compose bitmasks for cloning. */\nvar CLONE_DEEP_FLAG = 1,\n    CLONE_FLAT_FLAG = 2,\n    CLONE_SYMBOLS_FLAG = 4;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/** Used to identify `toStringTag` values supported by `_.clone`. */\nvar cloneableTags = {};\ncloneableTags[argsTag] = cloneableTags[arrayTag] =\ncloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =\ncloneableTags[boolTag] = cloneableTags[dateTag] =\ncloneableTags[float32Tag] = cloneableTags[float64Tag] =\ncloneableTags[int8Tag] = cloneableTags[int16Tag] =\ncloneableTags[int32Tag] = cloneableTags[mapTag] =\ncloneableTags[numberTag] = cloneableTags[objectTag] =\ncloneableTags[regexpTag] = cloneableTags[setTag] =\ncloneableTags[stringTag] = cloneableTags[symbolTag] =\ncloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =\ncloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;\ncloneableTags[errorTag] = cloneableTags[funcTag] =\ncloneableTags[weakMapTag] = false;\n\n/**\n * The base implementation of `_.clone` and `_.cloneDeep` which tracks\n * traversed objects.\n *\n * @private\n * @param {*} value The value to clone.\n * @param {boolean} bitmask The bitmask flags.\n *  1 - Deep clone\n *  2 - Flatten inherited properties\n *  4 - Clone symbols\n * @param {Function} [customizer] The function to customize cloning.\n * @param {string} [key] The key of `value`.\n * @param {Object} [object] The parent object of `value`.\n * @param {Object} [stack] Tracks traversed objects and their clone counterparts.\n * @returns {*} Returns the cloned value.\n */\nfunction baseClone(value, bitmask, customizer, key, object, stack) {\n  var result,\n      isDeep = bitmask & CLONE_DEEP_FLAG,\n      isFlat = bitmask & CLONE_FLAT_FLAG,\n      isFull = bitmask & CLONE_SYMBOLS_FLAG;\n\n  if (customizer) {\n    result = object ? customizer(value, key, object, stack) : customizer(value);\n  }\n  if (result !== undefined) {\n    return result;\n  }\n  if (!isObject(value)) {\n    return value;\n  }\n  var isArr = isArray(value);\n  if (isArr) {\n    result = initCloneArray(value);\n    if (!isDeep) {\n      return copyArray(value, result);\n    }\n  } else {\n    var tag = getTag(value),\n        isFunc = tag == funcTag || tag == genTag;\n\n    if (isBuffer(value)) {\n      return cloneBuffer(value, isDeep);\n    }\n    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {\n      result = (isFlat || isFunc) ? {} : initCloneObject(value);\n      if (!isDeep) {\n        return isFlat\n          ? copySymbolsIn(value, baseAssignIn(result, value))\n          : copySymbols(value, baseAssign(result, value));\n      }\n    } else {\n      if (!cloneableTags[tag]) {\n        return object ? value : {};\n      }\n      result = initCloneByTag(value, tag, isDeep);\n    }\n  }\n  // Check for circular references and return its corresponding clone.\n  stack || (stack = new Stack);\n  var stacked = stack.get(value);\n  if (stacked) {\n    return stacked;\n  }\n  stack.set(value, result);\n\n  if (isSet(value)) {\n    value.forEach(function(subValue) {\n      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));\n    });\n  } else if (isMap(value)) {\n    value.forEach(function(subValue, key) {\n      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));\n    });\n  }\n\n  var keysFunc = isFull\n    ? (isFlat ? getAllKeysIn : getAllKeys)\n    : (isFlat ? keysIn : keys);\n\n  var props = isArr ? undefined : keysFunc(value);\n  arrayEach(props || value, function(subValue, key) {\n    if (props) {\n      key = subValue;\n      subValue = value[key];\n    }\n    // Recursively populate clone (susceptible to call stack limits).\n    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));\n  });\n  return result;\n}\n\nmodule.exports = baseClone;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseClone.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** Built-in value references. */\nvar objectCreate = Object.create;\n\n/**\n * The base implementation of `_.create` without support for assigning\n * properties to the created object.\n *\n * @private\n * @param {Object} proto The object to inherit from.\n * @returns {Object} Returns the new object.\n */\nvar baseCreate = (function() {\n  function object() {}\n  return function(proto) {\n    if (!isObject(proto)) {\n      return {};\n    }\n    if (objectCreate) {\n      return objectCreate(proto);\n    }\n    object.prototype = proto;\n    var result = new object;\n    object.prototype = undefined;\n    return result;\n  };\n}());\n\nmodule.exports = baseCreate;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayPush = __webpack_require__(/*! ./_arrayPush */ \"./node_modules/lodash/_arrayPush.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/**\n * The base implementation of `getAllKeys` and `getAllKeysIn` which uses\n * `keysFunc` and `symbolsFunc` to get the enumerable property names and\n * symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @param {Function} symbolsFunc The function to get the symbols of `object`.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction baseGetAllKeys(object, keysFunc, symbolsFunc) {\n  var result = keysFunc(object);\n  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));\n}\n\nmodule.exports = baseGetAllKeys;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseGetAllKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]';\n\n/**\n * The base implementation of `_.isArguments`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n */\nfunction baseIsArguments(value) {\n  return isObjectLike(value) && baseGetTag(value) == argsTag;\n}\n\nmodule.exports = baseIsArguments;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseIsArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar mapTag = '[object Map]';\n\n/**\n * The base implementation of `_.isMap` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a map, else `false`.\n */\nfunction baseIsMap(value) {\n  return isObjectLike(value) && getTag(value) == mapTag;\n}\n\nmodule.exports = baseIsMap;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseIsMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isMasked = __webpack_require__(/*! ./_isMasked */ \"./node_modules/lodash/_isMasked.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\nmodule.exports = baseIsNative;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseIsNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar setTag = '[object Set]';\n\n/**\n * The base implementation of `_.isSet` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a set, else `false`.\n */\nfunction baseIsSet(value) {\n  return isObjectLike(value) && getTag(value) == setTag;\n}\n\nmodule.exports = baseIsSet;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseIsSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/** Used to identify `toStringTag` values of typed arrays. */\nvar typedArrayTags = {};\ntypedArrayTags[float32Tag] = typedArrayTags[float64Tag] =\ntypedArrayTags[int8Tag] = typedArrayTags[int16Tag] =\ntypedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =\ntypedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =\ntypedArrayTags[uint32Tag] = true;\ntypedArrayTags[argsTag] = typedArrayTags[arrayTag] =\ntypedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =\ntypedArrayTags[dataViewTag] = typedArrayTags[dateTag] =\ntypedArrayTags[errorTag] = typedArrayTags[funcTag] =\ntypedArrayTags[mapTag] = typedArrayTags[numberTag] =\ntypedArrayTags[objectTag] = typedArrayTags[regexpTag] =\ntypedArrayTags[setTag] = typedArrayTags[stringTag] =\ntypedArrayTags[weakMapTag] = false;\n\n/**\n * The base implementation of `_.isTypedArray` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n */\nfunction baseIsTypedArray(value) {\n  return isObjectLike(value) &&\n    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];\n}\n\nmodule.exports = baseIsTypedArray;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseIsTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ \"./node_modules/lodash/_nativeKeys.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeys(object) {\n  if (!isPrototype(object)) {\n    return nativeKeys(object);\n  }\n  var result = [];\n  for (var key in Object(object)) {\n    if (hasOwnProperty.call(object, key) && key != 'constructor') {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseKeys;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ \"./node_modules/lodash/_nativeKeysIn.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeysIn(object) {\n  if (!isObject(object)) {\n    return nativeKeysIn(object);\n  }\n  var isProto = isPrototype(object),\n      result = [];\n\n  for (var key in object) {\n    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseKeysIn;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseKeysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\nmodule.exports = baseTimes;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseTimes.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.unary` without support for storing metadata.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @returns {Function} Returns the new capped function.\n */\nfunction baseUnary(func) {\n  return function(value) {\n    return func(value);\n  };\n}\n\nmodule.exports = baseUnary;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseUnary.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ \"./node_modules/lodash/_Uint8Array.js\");\n\n/**\n * Creates a clone of `arrayBuffer`.\n *\n * @private\n * @param {ArrayBuffer} arrayBuffer The array buffer to clone.\n * @returns {ArrayBuffer} Returns the cloned array buffer.\n */\nfunction cloneArrayBuffer(arrayBuffer) {\n  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);\n  new Uint8Array(result).set(new Uint8Array(arrayBuffer));\n  return result;\n}\n\nmodule.exports = cloneArrayBuffer;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_cloneArrayBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined,\n    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;\n\n/**\n * Creates a clone of  `buffer`.\n *\n * @private\n * @param {Buffer} buffer The buffer to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Buffer} Returns the cloned buffer.\n */\nfunction cloneBuffer(buffer, isDeep) {\n  if (isDeep) {\n    return buffer.slice();\n  }\n  var length = buffer.length,\n      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);\n\n  buffer.copy(result);\n  return result;\n}\n\nmodule.exports = cloneBuffer;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/lodash/_cloneBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ \"./node_modules/lodash/_cloneArrayBuffer.js\");\n\n/**\n * Creates a clone of `dataView`.\n *\n * @private\n * @param {Object} dataView The data view to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned data view.\n */\nfunction cloneDataView(dataView, isDeep) {\n  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;\n  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);\n}\n\nmodule.exports = cloneDataView;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_cloneDataView.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to match `RegExp` flags from their coerced string values. */\nvar reFlags = /\\w*$/;\n\n/**\n * Creates a clone of `regexp`.\n *\n * @private\n * @param {Object} regexp The regexp to clone.\n * @returns {Object} Returns the cloned regexp.\n */\nfunction cloneRegExp(regexp) {\n  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));\n  result.lastIndex = regexp.lastIndex;\n  return result;\n}\n\nmodule.exports = cloneRegExp;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_cloneRegExp.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;\n\n/**\n * Creates a clone of the `symbol` object.\n *\n * @private\n * @param {Object} symbol The symbol object to clone.\n * @returns {Object} Returns the cloned symbol object.\n */\nfunction cloneSymbol(symbol) {\n  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};\n}\n\nmodule.exports = cloneSymbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_cloneSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ \"./node_modules/lodash/_cloneArrayBuffer.js\");\n\n/**\n * Creates a clone of `typedArray`.\n *\n * @private\n * @param {Object} typedArray The typed array to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned typed array.\n */\nfunction cloneTypedArray(typedArray, isDeep) {\n  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;\n  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);\n}\n\nmodule.exports = cloneTypedArray;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_cloneTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Copies the values of `source` to `array`.\n *\n * @private\n * @param {Array} source The array to copy values from.\n * @param {Array} [array=[]] The array to copy values to.\n * @returns {Array} Returns `array`.\n */\nfunction copyArray(source, array) {\n  var index = -1,\n      length = source.length;\n\n  array || (array = Array(length));\n  while (++index < length) {\n    array[index] = source[index];\n  }\n  return array;\n}\n\nmodule.exports = copyArray;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_copyArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assignValue = __webpack_require__(/*! ./_assignValue */ \"./node_modules/lodash/_assignValue.js\"),\n    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\");\n\n/**\n * Copies properties of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy properties from.\n * @param {Array} props The property identifiers to copy.\n * @param {Object} [object={}] The object to copy properties to.\n * @param {Function} [customizer] The function to customize copied values.\n * @returns {Object} Returns `object`.\n */\nfunction copyObject(source, props, object, customizer) {\n  var isNew = !object;\n  object || (object = {});\n\n  var index = -1,\n      length = props.length;\n\n  while (++index < length) {\n    var key = props[index];\n\n    var newValue = customizer\n      ? customizer(object[key], source[key], key, object, source)\n      : undefined;\n\n    if (newValue === undefined) {\n      newValue = source[key];\n    }\n    if (isNew) {\n      baseAssignValue(object, key, newValue);\n    } else {\n      assignValue(object, key, newValue);\n    }\n  }\n  return object;\n}\n\nmodule.exports = copyObject;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_copyObject.js?");

/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    getSymbols = __webpack_require__(/*! ./_getSymbols */ \"./node_modules/lodash/_getSymbols.js\");\n\n/**\n * Copies own symbols of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy symbols from.\n * @param {Object} [object={}] The object to copy symbols to.\n * @returns {Object} Returns `object`.\n */\nfunction copySymbols(source, object) {\n  return copyObject(source, getSymbols(source), object);\n}\n\nmodule.exports = copySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_copySymbols.js?");

/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ \"./node_modules/lodash/_getSymbolsIn.js\");\n\n/**\n * Copies own and inherited symbols of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy symbols from.\n * @param {Object} [object={}] The object to copy symbols to.\n * @returns {Object} Returns `object`.\n */\nfunction copySymbolsIn(source, object) {\n  return copyObject(source, getSymbolsIn(source), object);\n}\n\nmodule.exports = copySymbolsIn;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_copySymbolsIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\nmodule.exports = coreJsData;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_coreJsData.js?");

/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\nvar defineProperty = (function() {\n  try {\n    var func = getNative(Object, 'defineProperty');\n    func({}, '', {});\n    return func;\n  } catch (e) {}\n}());\n\nmodule.exports = defineProperty;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_defineProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ \"./node_modules/lodash/_baseGetAllKeys.js\"),\n    getSymbols = __webpack_require__(/*! ./_getSymbols */ \"./node_modules/lodash/_getSymbols.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * Creates an array of own enumerable property names and symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction getAllKeys(object) {\n  return baseGetAllKeys(object, keys, getSymbols);\n}\n\nmodule.exports = getAllKeys;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getAllKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ \"./node_modules/lodash/_baseGetAllKeys.js\"),\n    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ \"./node_modules/lodash/_getSymbolsIn.js\"),\n    keysIn = __webpack_require__(/*! ./keysIn */ \"./node_modules/lodash/keysIn.js\");\n\n/**\n * Creates an array of own and inherited enumerable property names and\n * symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction getAllKeysIn(object) {\n  return baseGetAllKeys(object, keysIn, getSymbolsIn);\n}\n\nmodule.exports = getAllKeysIn;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getAllKeysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isKeyable = __webpack_require__(/*! ./_isKeyable */ \"./node_modules/lodash/_isKeyable.js\");\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\nmodule.exports = getMapData;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getMapData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ \"./node_modules/lodash/_baseIsNative.js\"),\n    getValue = __webpack_require__(/*! ./_getValue */ \"./node_modules/lodash/_getValue.js\");\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\nmodule.exports = getNative;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/** Built-in value references. */\nvar getPrototype = overArg(Object.getPrototypeOf, Object);\n\nmodule.exports = getPrototype;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ \"./node_modules/lodash/_arrayFilter.js\"),\n    stubArray = __webpack_require__(/*! ./stubArray */ \"./node_modules/lodash/stubArray.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeGetSymbols = Object.getOwnPropertySymbols;\n\n/**\n * Creates an array of the own enumerable symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of symbols.\n */\nvar getSymbols = !nativeGetSymbols ? stubArray : function(object) {\n  if (object == null) {\n    return [];\n  }\n  object = Object(object);\n  return arrayFilter(nativeGetSymbols(object), function(symbol) {\n    return propertyIsEnumerable.call(object, symbol);\n  });\n};\n\nmodule.exports = getSymbols;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getSymbols.js?");

/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayPush = __webpack_require__(/*! ./_arrayPush */ \"./node_modules/lodash/_arrayPush.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"./node_modules/lodash/_getPrototype.js\"),\n    getSymbols = __webpack_require__(/*! ./_getSymbols */ \"./node_modules/lodash/_getSymbols.js\"),\n    stubArray = __webpack_require__(/*! ./stubArray */ \"./node_modules/lodash/stubArray.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeGetSymbols = Object.getOwnPropertySymbols;\n\n/**\n * Creates an array of the own and inherited enumerable symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of symbols.\n */\nvar getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {\n  var result = [];\n  while (object) {\n    arrayPush(result, getSymbols(object));\n    object = getPrototype(object);\n  }\n  return result;\n};\n\nmodule.exports = getSymbolsIn;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getSymbolsIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DataView = __webpack_require__(/*! ./_DataView */ \"./node_modules/lodash/_DataView.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\"),\n    Promise = __webpack_require__(/*! ./_Promise */ \"./node_modules/lodash/_Promise.js\"),\n    Set = __webpack_require__(/*! ./_Set */ \"./node_modules/lodash/_Set.js\"),\n    WeakMap = __webpack_require__(/*! ./_WeakMap */ \"./node_modules/lodash/_WeakMap.js\"),\n    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/** `Object#toString` result references. */\nvar mapTag = '[object Map]',\n    objectTag = '[object Object]',\n    promiseTag = '[object Promise]',\n    setTag = '[object Set]',\n    weakMapTag = '[object WeakMap]';\n\nvar dataViewTag = '[object DataView]';\n\n/** Used to detect maps, sets, and weakmaps. */\nvar dataViewCtorString = toSource(DataView),\n    mapCtorString = toSource(Map),\n    promiseCtorString = toSource(Promise),\n    setCtorString = toSource(Set),\n    weakMapCtorString = toSource(WeakMap);\n\n/**\n * Gets the `toStringTag` of `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nvar getTag = baseGetTag;\n\n// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.\nif ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||\n    (Map && getTag(new Map) != mapTag) ||\n    (Promise && getTag(Promise.resolve()) != promiseTag) ||\n    (Set && getTag(new Set) != setTag) ||\n    (WeakMap && getTag(new WeakMap) != weakMapTag)) {\n  getTag = function(value) {\n    var result = baseGetTag(value),\n        Ctor = result == objectTag ? value.constructor : undefined,\n        ctorString = Ctor ? toSource(Ctor) : '';\n\n    if (ctorString) {\n      switch (ctorString) {\n        case dataViewCtorString: return dataViewTag;\n        case mapCtorString: return mapTag;\n        case promiseCtorString: return promiseTag;\n        case setCtorString: return setTag;\n        case weakMapCtorString: return weakMapTag;\n      }\n    }\n    return result;\n  };\n}\n\nmodule.exports = getTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\nmodule.exports = getValue;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n  this.size = 0;\n}\n\nmodule.exports = hashClear;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_hashClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  var result = this.has(key) && delete this.__data__[key];\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = hashDelete;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_hashDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\nmodule.exports = hashGet;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_hashGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);\n}\n\nmodule.exports = hashHas;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_hashHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  this.size += this.has(key) ? 0 : 1;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\nmodule.exports = hashSet;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_hashSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Initializes an array clone.\n *\n * @private\n * @param {Array} array The array to clone.\n * @returns {Array} Returns the initialized clone.\n */\nfunction initCloneArray(array) {\n  var length = array.length,\n      result = new array.constructor(length);\n\n  // Add properties assigned by `RegExp#exec`.\n  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {\n    result.index = array.index;\n    result.input = array.input;\n  }\n  return result;\n}\n\nmodule.exports = initCloneArray;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_initCloneArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ \"./node_modules/lodash/_cloneArrayBuffer.js\"),\n    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ \"./node_modules/lodash/_cloneDataView.js\"),\n    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ \"./node_modules/lodash/_cloneRegExp.js\"),\n    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ \"./node_modules/lodash/_cloneSymbol.js\"),\n    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ \"./node_modules/lodash/_cloneTypedArray.js\");\n\n/** `Object#toString` result references. */\nvar boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/**\n * Initializes an object clone based on its `toStringTag`.\n *\n * **Note:** This function only supports cloning values with tags of\n * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.\n *\n * @private\n * @param {Object} object The object to clone.\n * @param {string} tag The `toStringTag` of the object to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the initialized clone.\n */\nfunction initCloneByTag(object, tag, isDeep) {\n  var Ctor = object.constructor;\n  switch (tag) {\n    case arrayBufferTag:\n      return cloneArrayBuffer(object);\n\n    case boolTag:\n    case dateTag:\n      return new Ctor(+object);\n\n    case dataViewTag:\n      return cloneDataView(object, isDeep);\n\n    case float32Tag: case float64Tag:\n    case int8Tag: case int16Tag: case int32Tag:\n    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:\n      return cloneTypedArray(object, isDeep);\n\n    case mapTag:\n      return new Ctor;\n\n    case numberTag:\n    case stringTag:\n      return new Ctor(object);\n\n    case regexpTag:\n      return cloneRegExp(object);\n\n    case setTag:\n      return new Ctor;\n\n    case symbolTag:\n      return cloneSymbol(object);\n  }\n}\n\nmodule.exports = initCloneByTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_initCloneByTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseCreate = __webpack_require__(/*! ./_baseCreate */ \"./node_modules/lodash/_baseCreate.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"./node_modules/lodash/_getPrototype.js\"),\n    isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\");\n\n/**\n * Initializes an object clone.\n *\n * @private\n * @param {Object} object The object to clone.\n * @returns {Object} Returns the initialized clone.\n */\nfunction initCloneObject(object) {\n  return (typeof object.constructor == 'function' && !isPrototype(object))\n    ? baseCreate(getPrototype(object))\n    : {};\n}\n\nmodule.exports = initCloneObject;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_initCloneObject.js?");

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  var type = typeof value;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n\n  return !!length &&\n    (type == 'number' ||\n      (type != 'symbol' && reIsUint.test(value))) &&\n        (value > -1 && value % 1 == 0 && value < length);\n}\n\nmodule.exports = isIndex;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_isIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\nmodule.exports = isKeyable;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_isKeyable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var coreJsData = __webpack_require__(/*! ./_coreJsData */ \"./node_modules/lodash/_coreJsData.js\");\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\nmodule.exports = isMasked;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_isMasked.js?");

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\nmodule.exports = isPrototype;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_isPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\nmodule.exports = listCacheClear;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_listCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype;\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  --this.size;\n  return true;\n}\n\nmodule.exports = listCacheDelete;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_listCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\nmodule.exports = listCacheGet;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_listCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\nmodule.exports = listCacheHas;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_listCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\nmodule.exports = listCacheSet;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_listCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Hash = __webpack_require__(/*! ./_Hash */ \"./node_modules/lodash/_Hash.js\"),\n    ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\");\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.size = 0;\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\nmodule.exports = mapCacheClear;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_mapCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  var result = getMapData(this, key)['delete'](key);\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = mapCacheDelete;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_mapCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\nmodule.exports = mapCacheGet;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_mapCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\nmodule.exports = mapCacheHas;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_mapCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  var data = getMapData(this, key),\n      size = data.size;\n\n  data.set(key, value);\n  this.size += data.size == size ? 0 : 1;\n  return this;\n}\n\nmodule.exports = mapCacheSet;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_mapCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\n/* Built-in method references that are verified to be native. */\nvar nativeCreate = getNative(Object, 'create');\n\nmodule.exports = nativeCreate;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_nativeCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = overArg(Object.keys, Object);\n\nmodule.exports = nativeKeys;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_nativeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This function is like\n * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * except that it includes inherited enumerable properties.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction nativeKeysIn(object) {\n  var result = [];\n  if (object != null) {\n    for (var key in Object(object)) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = nativeKeysIn;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_nativeKeysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Detect free variable `process` from Node.js. */\nvar freeProcess = moduleExports && freeGlobal.process;\n\n/** Used to access faster Node.js helpers. */\nvar nodeUtil = (function() {\n  try {\n    // Use `util.types` for Node.js 10+.\n    var types = freeModule && freeModule.require && freeModule.require('util').types;\n\n    if (types) {\n      return types;\n    }\n\n    // Legacy `process.binding('util')` for Node.js < 10.\n    return freeProcess && freeProcess.binding && freeProcess.binding('util');\n  } catch (e) {}\n}());\n\nmodule.exports = nodeUtil;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/lodash/_nodeUtil.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\nmodule.exports = overArg;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_overArg.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\");\n\n/**\n * Removes all key-value entries from the stack.\n *\n * @private\n * @name clear\n * @memberOf Stack\n */\nfunction stackClear() {\n  this.__data__ = new ListCache;\n  this.size = 0;\n}\n\nmodule.exports = stackClear;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_stackClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes `key` and its value from the stack.\n *\n * @private\n * @name delete\n * @memberOf Stack\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction stackDelete(key) {\n  var data = this.__data__,\n      result = data['delete'](key);\n\n  this.size = data.size;\n  return result;\n}\n\nmodule.exports = stackDelete;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_stackDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the stack value for `key`.\n *\n * @private\n * @name get\n * @memberOf Stack\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction stackGet(key) {\n  return this.__data__.get(key);\n}\n\nmodule.exports = stackGet;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_stackGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if a stack value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Stack\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction stackHas(key) {\n  return this.__data__.has(key);\n}\n\nmodule.exports = stackHas;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_stackHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\"),\n    MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/**\n * Sets the stack `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Stack\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the stack cache instance.\n */\nfunction stackSet(key, value) {\n  var data = this.__data__;\n  if (data instanceof ListCache) {\n    var pairs = data.__data__;\n    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {\n      pairs.push([key, value]);\n      this.size = ++data.size;\n      return this;\n    }\n    data = this.__data__ = new MapCache(pairs);\n  }\n  data.set(key, value);\n  this.size = data.size;\n  return this;\n}\n\nmodule.exports = stackSet;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_stackSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar funcProto = Function.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to convert.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\nmodule.exports = toSource;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_toSource.js?");

/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseClone = __webpack_require__(/*! ./_baseClone */ \"./node_modules/lodash/_baseClone.js\");\n\n/** Used to compose bitmasks for cloning. */\nvar CLONE_DEEP_FLAG = 1,\n    CLONE_SYMBOLS_FLAG = 4;\n\n/**\n * This method is like `_.clone` except that it recursively clones `value`.\n *\n * @static\n * @memberOf _\n * @since 1.0.0\n * @category Lang\n * @param {*} value The value to recursively clone.\n * @returns {*} Returns the deep cloned value.\n * @see _.clone\n * @example\n *\n * var objects = [{ 'a': 1 }, { 'b': 2 }];\n *\n * var deep = _.cloneDeep(objects);\n * console.log(deep[0] === objects[0]);\n * // => false\n */\nfunction cloneDeep(value) {\n  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);\n}\n\nmodule.exports = cloneDeep;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/cloneDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\nmodule.exports = eq;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/eq.js?");

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ \"./node_modules/lodash/_baseIsArguments.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nvar isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {\n  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&\n    !propertyIsEnumerable.call(value, 'callee');\n};\n\nmodule.exports = isArguments;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\");\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\nmodule.exports = isArrayLike;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isArrayLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\"),\n    stubFalse = __webpack_require__(/*! ./stubFalse */ \"./node_modules/lodash/stubFalse.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;\n\n/**\n * Checks if `value` is a buffer.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.\n * @example\n *\n * _.isBuffer(new Buffer(2));\n * // => true\n *\n * _.isBuffer(new Uint8Array(2));\n * // => false\n */\nvar isBuffer = nativeIsBuffer || stubFalse;\n\nmodule.exports = isBuffer;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/lodash/isBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isLength.js?");

/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ \"./node_modules/lodash/_baseIsMap.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"./node_modules/lodash/_nodeUtil.js\");\n\n/* Node.js helper references. */\nvar nodeIsMap = nodeUtil && nodeUtil.isMap;\n\n/**\n * Checks if `value` is classified as a `Map` object.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a map, else `false`.\n * @example\n *\n * _.isMap(new Map);\n * // => true\n *\n * _.isMap(new WeakMap);\n * // => false\n */\nvar isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;\n\nmodule.exports = isMap;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isMap.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ \"./node_modules/lodash/_baseIsSet.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"./node_modules/lodash/_nodeUtil.js\");\n\n/* Node.js helper references. */\nvar nodeIsSet = nodeUtil && nodeUtil.isSet;\n\n/**\n * Checks if `value` is classified as a `Set` object.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a set, else `false`.\n * @example\n *\n * _.isSet(new Set);\n * // => true\n *\n * _.isSet(new WeakSet);\n * // => false\n */\nvar isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;\n\nmodule.exports = isSet;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isSet.js?");

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ \"./node_modules/lodash/_baseIsTypedArray.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"./node_modules/lodash/_nodeUtil.js\");\n\n/* Node.js helper references. */\nvar nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;\n\n/**\n * Checks if `value` is classified as a typed array.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n * @example\n *\n * _.isTypedArray(new Uint8Array);\n * // => true\n *\n * _.isTypedArray([]);\n * // => false\n */\nvar isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;\n\nmodule.exports = isTypedArray;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ \"./node_modules/lodash/_arrayLikeKeys.js\"),\n    baseKeys = __webpack_require__(/*! ./_baseKeys */ \"./node_modules/lodash/_baseKeys.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nfunction keys(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);\n}\n\nmodule.exports = keys;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/keys.js?");

/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ \"./node_modules/lodash/_arrayLikeKeys.js\"),\n    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ \"./node_modules/lodash/_baseKeysIn.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates an array of the own and inherited enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keysIn(new Foo);\n * // => ['a', 'b', 'c'] (iteration order is not guaranteed)\n */\nfunction keysIn(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);\n}\n\nmodule.exports = keysIn;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/keysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns a new empty array.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {Array} Returns the new empty array.\n * @example\n *\n * var arrays = _.times(2, _.stubArray);\n *\n * console.log(arrays);\n * // => [[], []]\n *\n * console.log(arrays[0] === arrays[1]);\n * // => false\n */\nfunction stubArray() {\n  return [];\n}\n\nmodule.exports = stubArray;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/stubArray.js?");

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/stubFalse.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Game = void 0;\r\nconst ai_trainer_1 = __webpack_require__(/*! ./ai/ai-trainer */ \"./src/ai/ai-trainer.ts\");\r\nconst go_to_previous_menu_command_1 = __webpack_require__(/*! ./menu/commands/go-to-previous-menu-command */ \"./src/menu/commands/go-to-previous-menu-command.ts\");\r\nconst go_to_sub_menu_command_1 = __webpack_require__(/*! ./menu/commands/go-to-sub-menu-command */ \"./src/menu/commands/go-to-sub-menu-command.ts\");\r\nconst toggle_sound_command_1 = __webpack_require__(/*! ./menu/commands/toggle-sound-command */ \"./src/menu/commands/toggle-sound-command.ts\");\r\nconst pvc_command_1 = __webpack_require__(/*! ./menu/commands/pvc-command */ \"./src/menu/commands/pvc-command.ts\");\r\nconst pvp_command_1 = __webpack_require__(/*! ./menu/commands/pvp-command */ \"./src/menu/commands/pvp-command.ts\");\r\nconst game_config_1 = __webpack_require__(/*! ./game.config */ \"./src/game.config.ts\");\r\nconst menu_action_type_1 = __webpack_require__(/*! ./menu/menu-action-type */ \"./src/menu/menu-action-type.ts\");\r\nconst menu_1 = __webpack_require__(/*! ./menu/menu */ \"./src/menu/menu.ts\");\r\nconst assets_1 = __webpack_require__(/*! ./assets */ \"./src/assets.ts\");\r\nconst game_world_1 = __webpack_require__(/*! ./game-objects/game-world */ \"./src/game-objects/game-world.ts\");\r\nconst keyboard_1 = __webpack_require__(/*! ./input/keyboard */ \"./src/input/keyboard.ts\");\r\nconst canvas_1 = __webpack_require__(/*! ./canvas */ \"./src/canvas.ts\");\r\nconst mouse_1 = __webpack_require__(/*! ./input/mouse */ \"./src/input/mouse.ts\");\r\nconst fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n//------Configurations------//\r\nconst sprites = game_config_1.GameConfig.sprites;\r\nconst inputConfig = game_config_1.GameConfig.input;\r\nclass Game {\r\n    constructor() {\r\n        //------Members------//\r\n        this._previousMenus = [];\r\n        this._menu = new menu_1.Menu();\r\n        this.fileReader = new FileReader();\r\n    }\r\n    //------Private Methods------//\r\n    initMenuActions() {\r\n        this._menuActionsMap = new Map();\r\n        this._menuActionsMap.set(menu_action_type_1.MenuActionType.PVP, new pvp_command_1.PVPCommand(this));\r\n        this._menuActionsMap.set(menu_action_type_1.MenuActionType.PVC, new pvc_command_1.PVCCommand(this));\r\n        this._menuActionsMap.set(menu_action_type_1.MenuActionType.ToggleSound, new toggle_sound_command_1.ToggleSoundCommand());\r\n        this._menuActionsMap.set(menu_action_type_1.MenuActionType.GoToSubMenu, new go_to_sub_menu_command_1.GoToSubMenuCommand(this));\r\n        this._menuActionsMap.set(menu_action_type_1.MenuActionType.GoToPreviousMenu, new go_to_previous_menu_command_1.GoToPreviousMenuCommand(this));\r\n    }\r\n    initMainMenu() {\r\n        this._menu.init(this._menuActionsMap, game_config_1.GameConfig.mainMenu);\r\n    }\r\n    displayLoadingScreen() {\r\n        return new Promise((resolve) => {\r\n            this._isLoading = true;\r\n            canvas_1.Canvas2D.clear();\r\n            canvas_1.Canvas2D.drawImage(assets_1.Assets.getSprite(sprites.paths.controls), game_config_1.GameConfig.loadingScreenImagePosition);\r\n            setTimeout(() => {\r\n                this._isLoading = false;\r\n                resolve();\r\n            }, game_config_1.GameConfig.loadingScreenTimeout);\r\n        });\r\n    }\r\n    handleInput() {\r\n        if (this._inGame && keyboard_1.Keyboard.isPressed(inputConfig.toggleMenuKey)) {\r\n            if (this._menu.active) {\r\n                this._menu.active = false;\r\n            }\r\n            else {\r\n                this.initMainMenu();\r\n                this._menu.active = true;\r\n            }\r\n        }\r\n    }\r\n    update() {\r\n        if (this._isLoading)\r\n            return;\r\n        this.handleInput();\r\n        this._menu.active ? this._menu.update() : this._poolGame.update();\r\n        keyboard_1.Keyboard.reset();\r\n        mouse_1.Mouse.reset();\r\n    }\r\n    draw() {\r\n        if (this._isLoading)\r\n            return;\r\n        if (ai_trainer_1.AI.finishedSession) {\r\n            canvas_1.Canvas2D.clear();\r\n            this._menu.active ? this._menu.draw() : this._poolGame.draw();\r\n        }\r\n    }\r\n    gameLoop() {\r\n        this.update();\r\n        this.draw();\r\n        window.requestAnimationFrame(() => {\r\n            this.gameLoop();\r\n        });\r\n    }\r\n    //------Public Methods------//\r\n    async init() {\r\n        console.log(\"INIT\");\r\n        fs.writeFile('archivo.txt', \"Prueba 1\", (err) => {\r\n            if (err) {\r\n                console.error('Error al crear el archivo:', err);\r\n            }\r\n            else {\r\n                console.log('Archivo creado exitosamente');\r\n            }\r\n        });\r\n        await assets_1.Assets.loadGameAssets();\r\n        this.initMenuActions();\r\n        this.initMainMenu();\r\n        this._menu.active = true;\r\n        this._poolGame = new game_world_1.GameWorld();\r\n        this.gameLoop();\r\n    }\r\n    goToSubMenu(index) {\r\n        setTimeout(() => {\r\n            if (this._menu) {\r\n                this._menu.active = false;\r\n                this._previousMenus.push(this._menu);\r\n            }\r\n            this._menu = this._menu.getSubMenu(index);\r\n            this._menu.active = true;\r\n        }, game_config_1.GameConfig.timeoutToLoadSubMenu);\r\n    }\r\n    goToPreviousMenu() {\r\n        if (this._previousMenus.length > 0) {\r\n            setTimeout(() => {\r\n                this._menu.active = false;\r\n                this._menu = this._previousMenus.pop();\r\n                this._menu.active = true;\r\n            }, game_config_1.GameConfig.timeoutToLoadSubMenu);\r\n        }\r\n    }\r\n    start() {\r\n        console.log(\"EL VANIDOSO\");\r\n        console.error(\"EL VANIDOSO\");\r\n        this.displayLoadingScreen().then(() => {\r\n            this._menu.active = false;\r\n            this._inGame = true;\r\n            this._poolGame = new game_world_1.GameWorld();\r\n            this._poolGame.initMatch();\r\n        });\r\n    }\r\n}\r\nexports.Game = Game;\r\nconst game = new Game();\r\ngame.init();\r\n\n\n//# sourceURL=webpack:///./src/Game.ts?");

/***/ }),

/***/ "./src/ai/ai-opponent.ts":
/*!*******************************!*\
  !*** ./src/ai/ai-opponent.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AIOpponent = void 0;\r\nclass AIOpponent {\r\n    constructor(power = 50, rotation = 0, evaluation = 0) {\r\n        this.power = power;\r\n        this.rotation = rotation;\r\n        this.evaluation = evaluation;\r\n    }\r\n}\r\nexports.AIOpponent = AIOpponent;\r\n\n\n//# sourceURL=webpack:///./src/ai/ai-opponent.ts?");

/***/ }),

/***/ "./src/ai/ai-policy.ts":
/*!*****************************!*\
  !*** ./src/ai/ai-policy.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AIPolicy = void 0;\r\nconst game_config_1 = __webpack_require__(/*! ./../game.config */ \"./src/game.config.ts\");\r\nclass AIPolicy {\r\n    constructor() { }\r\n    evaluate(gameWorld) {\r\n        let evaluation = 1;\r\n        for (let i = 0; i < gameWorld.balls.length; i++) {\r\n            for (let j = i + 1; j < gameWorld.balls.length; j++) {\r\n                let firstBall = gameWorld.balls[i];\r\n                let secondBall = gameWorld.balls[j];\r\n                evaluation += firstBall.position.distFrom(secondBall.position) * game_config_1.GameConfig.ai.ballDistanceBonus;\r\n            }\r\n        }\r\n        if (gameWorld.isTurnValid) {\r\n            evaluation += game_config_1.GameConfig.ai.validTurnBonus;\r\n            evaluation += game_config_1.GameConfig.ai.pocketedBallBonus * gameWorld.numOfPocketedBallsOnTurn;\r\n            if (gameWorld.isGameOver) {\r\n                evaluation += game_config_1.GameConfig.ai.gameWonBonus;\r\n            }\r\n        }\r\n        else {\r\n            evaluation = evaluation - game_config_1.GameConfig.ai.invalidTurnPenalty;\r\n            if (gameWorld.isGameOver) {\r\n                evaluation -= game_config_1.GameConfig.ai.gameLossPenalty;\r\n            }\r\n        }\r\n        return evaluation;\r\n    }\r\n}\r\nexports.AIPolicy = AIPolicy;\r\n\n\n//# sourceURL=webpack:///./src/ai/ai-policy.ts?");

/***/ }),

/***/ "./src/ai/ai-trainer.ts":
/*!******************************!*\
  !*** ./src/ai/ai-trainer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AI = exports.AITrainer = void 0;\r\nconst vector2_1 = __webpack_require__(/*! ./../geom/vector2 */ \"./src/geom/vector2.ts\");\r\nconst game_config_1 = __webpack_require__(/*! ./../game.config */ \"./src/game.config.ts\");\r\nconst ai_opponent_1 = __webpack_require__(/*! ./ai-opponent */ \"./src/ai/ai-opponent.ts\");\r\nconst ai_policy_1 = __webpack_require__(/*! ./ai-policy */ \"./src/ai/ai-policy.ts\");\r\nconst cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ \"./node_modules/lodash/cloneDeep.js\");\r\nconst mouse_1 = __webpack_require__(/*! ../input/mouse */ \"./src/input/mouse.ts\");\r\nconst aiConfig = game_config_1.GameConfig.ai;\r\nconst stickConfig = game_config_1.GameConfig.stick;\r\nclass AITrainer {\r\n    constructor() {\r\n        this._iteration = 0;\r\n        this._finishedSession = true;\r\n        this._policy = new ai_policy_1.AIPolicy();\r\n    }\r\n    get finishedSession() {\r\n        return this._finishedSession;\r\n    }\r\n    placeBallInHand(gameWorld) {\r\n        debugger;\r\n        let marginX = 5;\r\n        let pos = vector2_1.Vector2.copy(game_config_1.GameConfig.cueBallPosition);\r\n        while (!gameWorld.isValidPosToPlaceCueBall(pos)) {\r\n            pos.addToX(marginX);\r\n        }\r\n        gameWorld.placeBallInHand(pos);\r\n    }\r\n    init() {\r\n        this._opponents = [];\r\n        this._currentOpponent = this.createRandomOpponent();\r\n        this._bestOpponent = this._currentOpponent;\r\n        this._iteration = 0;\r\n    }\r\n    createMutation(opponent) {\r\n        let newPower = opponent.power;\r\n        newPower += (Math.random() * 2 * aiConfig.shotPowerMutationVariance) - aiConfig.shotPowerMutationVariance;\r\n        newPower = newPower < aiConfig.minShotPower ? aiConfig.minShotPower : newPower;\r\n        newPower = newPower > stickConfig.maxPower ? stickConfig.maxPower : newPower;\r\n        let newRotation = opponent.rotation;\r\n        if (opponent.evaluation > 0) {\r\n            newRotation += (1 / opponent.evaluation) * (Math.random() * 2 * Math.PI - Math.PI);\r\n        }\r\n        else {\r\n            newRotation = (Math.random() * 2 * Math.PI - Math.PI);\r\n        }\r\n        return new ai_opponent_1.AIOpponent(newPower, newRotation);\r\n    }\r\n    createRandomOpponent() {\r\n        const power = (Math.random() * 75 + 1);\r\n        const rotation = (Math.random() * 2 * Math.PI);\r\n        return new ai_opponent_1.AIOpponent(power, rotation);\r\n    }\r\n    train() {\r\n        if (this._iteration === aiConfig.trainIterations) {\r\n            game_config_1.GameConfig.soundOn = this._soundOnState;\r\n            this.playTurn();\r\n            this._finishedSession = true;\r\n            return;\r\n        }\r\n        if (this._gameWorld.isBallsMoving)\r\n            return;\r\n        this._gameWorld.concludeTurn();\r\n        this._currentOpponent.evaluation = this._policy.evaluate(this._gameWorld);\r\n        const current = new ai_opponent_1.AIOpponent(this._currentOpponent.power, this._currentOpponent.rotation, this._currentOpponent.evaluation);\r\n        this._opponents.push(current);\r\n        if (current.evaluation > this._bestOpponent.evaluation) {\r\n            this._bestOpponent = current;\r\n        }\r\n        this._gameWorld = cloneDeep(this._initialGameWorld);\r\n        this._currentOpponent = this.buildNewOpponent();\r\n        this._iteration++;\r\n        this.simulate();\r\n    }\r\n    buildNewOpponent() {\r\n        if (this._iteration % 10 === 0) {\r\n            return this.createRandomOpponent();\r\n        }\r\n        else {\r\n            return this.createMutation(this._bestOpponent);\r\n        }\r\n    }\r\n    playTurn() {\r\n        this._initialGameWorld.shootCueBall(this._bestOpponent.power, this._bestOpponent.rotation);\r\n    }\r\n    simulate() {\r\n        this._gameWorld.shootCueBall(this._currentOpponent.power, this._currentOpponent.rotation);\r\n    }\r\n    opponentTrainingLoop() {\r\n        while (!this._finishedSession) {\r\n            this.train();\r\n            this._gameWorld.update();\r\n        }\r\n        mouse_1.Mouse.reset();\r\n    }\r\n    startSession(gameWorld) {\r\n        this._soundOnState = game_config_1.GameConfig.soundOn;\r\n        game_config_1.GameConfig.soundOn = false;\r\n        if (gameWorld.isBallInHand) {\r\n            this.placeBallInHand(gameWorld);\r\n        }\r\n        this._initialGameWorld = gameWorld;\r\n        this._gameWorld = cloneDeep(gameWorld);\r\n        this.init();\r\n        this._finishedSession = false;\r\n        this.simulate();\r\n        this.opponentTrainingLoop();\r\n    }\r\n}\r\nexports.AITrainer = AITrainer;\r\nexports.AI = new AITrainer();\r\n\n\n//# sourceURL=webpack:///./src/ai/ai-trainer.ts?");

/***/ }),

/***/ "./src/assets.ts":
/*!***********************!*\
  !*** ./src/assets.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Assets = void 0;\r\nconst game_config_1 = __webpack_require__(/*! ./game.config */ \"./src/game.config.ts\");\r\n//------Configurations------//\r\nconst sprites = game_config_1.GameConfig.sprites;\r\nconst sounds = game_config_1.GameConfig.sounds;\r\nclass Assets_Singleton {\r\n    //------Constructor------//\r\n    constructor() {\r\n        this._sprites = new Map();\r\n        this._sounds = new Map();\r\n    }\r\n    //------Private Methods------//\r\n    loadSprite(path) {\r\n        const img = new Image();\r\n        this._sprites.set(path, img);\r\n        return new Promise(resolve => {\r\n            img.onload = () => resolve();\r\n            img.src = sprites.basePath + path;\r\n        });\r\n    }\r\n    async loadGameSprites() {\r\n        const loadPromises = Object.values(sprites.paths).map(this.loadSprite.bind(this));\r\n        await Promise.all(loadPromises);\r\n    }\r\n    loadSound(path) {\r\n        const audio = new Audio(sounds.basePath + path);\r\n        this._sounds.set(path, audio);\r\n        audio.load();\r\n        return new Promise(resolve => {\r\n            audio.onloadeddata = () => resolve();\r\n        });\r\n    }\r\n    async loadGameSounds() {\r\n        const loadPromises = Object.values(sounds.paths).map(this.loadSound.bind(this));\r\n        await Promise.all(loadPromises);\r\n    }\r\n    //------Public Methods------//\r\n    async loadGameAssets() {\r\n        await this.loadGameSounds();\r\n        await this.loadGameSprites();\r\n    }\r\n    getSprite(key) {\r\n        return this._sprites.get(key);\r\n    }\r\n    getSound(key) {\r\n        return this._sounds.get(key).cloneNode(true);\r\n    }\r\n    playSound(key, volume) {\r\n        if (game_config_1.GameConfig.soundOn) {\r\n            const sound = this.getSound(key);\r\n            sound.volume = volume;\r\n            sound.play();\r\n        }\r\n    }\r\n}\r\nexports.Assets = new Assets_Singleton();\r\n\n\n//# sourceURL=webpack:///./src/assets.ts?");

/***/ }),

/***/ "./src/canvas.ts":
/*!***********************!*\
  !*** ./src/canvas.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Canvas2D = void 0;\r\nconst game_config_1 = __webpack_require__(/*! ./game.config */ \"./src/game.config.ts\");\r\nconst vector2_1 = __webpack_require__(/*! ./geom/vector2 */ \"./src/geom/vector2.ts\");\r\nclass Canvas2D_Singleton {\r\n    //------Constructor------//\r\n    constructor(canvas, canvasContainer) {\r\n        this._canvasContainer = canvasContainer;\r\n        this._canvas = canvas;\r\n        this._context = this._canvas.getContext('2d');\r\n        this.resizeCanvas();\r\n    }\r\n    //------Properties------//\r\n    get scaleX() {\r\n        return this._scale.x;\r\n    }\r\n    get scaleY() {\r\n        return this._scale.y;\r\n    }\r\n    get offsetX() {\r\n        return this._offset.x;\r\n    }\r\n    get offsetY() {\r\n        return this._offset.y;\r\n    }\r\n    //------Public Methods------//\r\n    resizeCanvas() {\r\n        const originalCanvasWidth = game_config_1.GameConfig.gameSize.x;\r\n        const originalCanvasHeight = game_config_1.GameConfig.gameSize.y;\r\n        const widthToHeight = originalCanvasWidth / originalCanvasHeight;\r\n        let newHeight = window.innerHeight;\r\n        let newWidth = window.innerWidth;\r\n        const newWidthToHeight = newWidth / newHeight;\r\n        if (newWidthToHeight > widthToHeight) {\r\n            newWidth = newHeight * widthToHeight;\r\n        }\r\n        else {\r\n            newHeight = newWidth / widthToHeight;\r\n        }\r\n        this._canvasContainer.style.width = newWidth + 'px';\r\n        this._canvasContainer.style.height = newHeight + 'px';\r\n        this._canvasContainer.style.marginTop = (window.innerHeight - newHeight) / 2 + 'px';\r\n        this._canvasContainer.style.marginLeft = (window.innerWidth - newWidth) / 2 + 'px';\r\n        this._canvasContainer.style.marginBottom = (window.innerHeight - newHeight) / 2 + 'px';\r\n        this._canvasContainer.style.marginRight = (window.innerWidth - newWidth) / 2 + 'px';\r\n        this._scale = new vector2_1.Vector2(newWidth / originalCanvasWidth, newHeight / originalCanvasHeight);\r\n        this._canvas.width = newWidth;\r\n        this._canvas.height = newHeight;\r\n        if (this._canvas.offsetParent) {\r\n            this._offset = new vector2_1.Vector2(this._canvas.offsetLeft, this._canvas.offsetTop);\r\n        }\r\n    }\r\n    clear() {\r\n        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);\r\n    }\r\n    drawImage(sprite, position = { x: 0, y: 0 }, rotation = 0, origin = { x: 0, y: 0 }) {\r\n        this._context.save();\r\n        this._context.scale(this._scale.x, this._scale.y);\r\n        this._context.translate(position.x, position.y);\r\n        this._context.rotate(rotation);\r\n        this._context.drawImage(sprite, 0, 0, sprite.width, sprite.height, -origin.x, -origin.y, sprite.width, sprite.height);\r\n        this._context.restore();\r\n    }\r\n    drawText(text, font, color, position, textAlign = 'left') {\r\n        this._context.save();\r\n        this._context.scale(this._scale.x, this._scale.y);\r\n        this._context.fillStyle = color;\r\n        this._context.font = font;\r\n        this._context.textAlign = textAlign;\r\n        this._context.fillText(text, position.x, position.y);\r\n        this._context.restore();\r\n    }\r\n    changeCursor(cursor) {\r\n        this._canvas.style.cursor = cursor;\r\n    }\r\n}\r\nconst canvas = document.getElementById('screen');\r\nconst container = document.getElementById('gameArea');\r\nexports.Canvas2D = new Canvas2D_Singleton(canvas, container);\r\nwindow.addEventListener('resize', exports.Canvas2D.resizeCanvas.bind(exports.Canvas2D));\r\n\n\n//# sourceURL=webpack:///./src/canvas.ts?");

/***/ }),

/***/ "./src/common/color.ts":
/*!*****************************!*\
  !*** ./src/common/color.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Color = void 0;\r\nvar Color;\r\n(function (Color) {\r\n    Color[\"white\"] = \"#BABABA\";\r\n    Color[\"black\"] = \"#2B2B2B\";\r\n    Color[\"red\"] = \"#B62A2F\";\r\n    Color[\"yellow\"] = \"#FECA34\";\r\n})(Color = exports.Color || (exports.Color = {}));\r\n\n\n//# sourceURL=webpack:///./src/common/color.ts?");

/***/ }),

/***/ "./src/common/helper.ts":
/*!******************************!*\
  !*** ./src/common/helper.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.mapRange = void 0;\r\nexports.mapRange = (num, in_min, in_max, out_min, out_max) => {\r\n    let value = (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;\r\n    value = value < out_min ? out_min : value;\r\n    value = value > out_max ? out_max : value;\r\n    return value;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/common/helper.ts?");

/***/ }),

/***/ "./src/game-objects/ball.ts":
/*!**********************************!*\
  !*** ./src/game-objects/ball.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Ball = void 0;\r\nconst game_config_1 = __webpack_require__(/*! ../game.config */ \"./src/game.config.ts\");\r\nconst canvas_1 = __webpack_require__(/*! ../canvas */ \"./src/canvas.ts\");\r\nconst color_1 = __webpack_require__(/*! ../common/color */ \"./src/common/color.ts\");\r\nconst vector2_1 = __webpack_require__(/*! ../geom/vector2 */ \"./src/geom/vector2.ts\");\r\nconst assets_1 = __webpack_require__(/*! ../assets */ \"./src/assets.ts\");\r\nconst physicsConfig = game_config_1.GameConfig.physics;\r\nconst sprites = game_config_1.GameConfig.sprites;\r\nconst ballConfig = game_config_1.GameConfig.ball;\r\nclass Ball {\r\n    //------Constructor------//\r\n    constructor(_position, color) {\r\n        this._position = _position;\r\n        this._velocity = vector2_1.Vector2.zero;\r\n        this._moving = false;\r\n        this._visible = true;\r\n        this._color = color;\r\n        this.resolveSprite(color);\r\n    }\r\n    //------Properties------//\r\n    get position() {\r\n        return vector2_1.Vector2.copy(this._position);\r\n    }\r\n    set position(value) {\r\n        this._position = value;\r\n    }\r\n    get nextPosition() {\r\n        return this.position.add(this._velocity.mult(1 - physicsConfig.friction));\r\n    }\r\n    get velocity() {\r\n        return vector2_1.Vector2.copy(this._velocity);\r\n    }\r\n    set velocity(value) {\r\n        this._moving = value.length > 0 ? true : false;\r\n        this._velocity = value;\r\n    }\r\n    get moving() {\r\n        return this._moving;\r\n    }\r\n    get color() {\r\n        return this._color;\r\n    }\r\n    get visible() {\r\n        return this._visible;\r\n    }\r\n    //------Private Methods------//\r\n    resolveSprite(color) {\r\n        switch (color) {\r\n            case color_1.Color.white:\r\n                this._sprite = assets_1.Assets.getSprite(sprites.paths.cueBall);\r\n                break;\r\n            case color_1.Color.black:\r\n                this._sprite = assets_1.Assets.getSprite(sprites.paths.blackBall);\r\n                break;\r\n            case color_1.Color.red:\r\n                this._sprite = assets_1.Assets.getSprite(sprites.paths.redBall);\r\n                break;\r\n            case color_1.Color.yellow:\r\n                this._sprite = assets_1.Assets.getSprite(sprites.paths.yellowBall);\r\n                break;\r\n        }\r\n    }\r\n    //------Public Methods------//\r\n    shoot(power, angle) {\r\n        this._velocity = new vector2_1.Vector2(power * Math.cos(angle), power * Math.sin(angle));\r\n        this._moving = true;\r\n    }\r\n    show(position) {\r\n        this._position = position;\r\n        this._velocity = vector2_1.Vector2.zero;\r\n        this._visible = true;\r\n        console.log(this._position);\r\n        console.log(\"PUTA\");\r\n    }\r\n    hide() {\r\n        this._velocity = vector2_1.Vector2.zero;\r\n        this._moving = false;\r\n        this._visible = false;\r\n    }\r\n    update() {\r\n        if (this._moving) {\r\n            this._velocity.multBy(1 - physicsConfig.friction);\r\n            this._position.addTo(this._velocity);\r\n            if (this._velocity.length < ballConfig.minVelocityLength) {\r\n                this.velocity = vector2_1.Vector2.zero;\r\n                this._moving = false;\r\n                //Acabar juego \r\n            }\r\n        }\r\n    }\r\n    draw() {\r\n        if (this._visible) {\r\n            canvas_1.Canvas2D.drawImage(this._sprite, this._position, 0, ballConfig.origin);\r\n        }\r\n    }\r\n}\r\nexports.Ball = Ball;\r\n\n\n//# sourceURL=webpack:///./src/game-objects/ball.ts?");

/***/ }),

/***/ "./src/game-objects/game-world.ts":
/*!****************************************!*\
  !*** ./src/game-objects/game-world.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GameWorld = void 0;\r\nconst ai_trainer_1 = __webpack_require__(/*! ./../ai/ai-trainer */ \"./src/ai/ai-trainer.ts\");\r\nconst helper_1 = __webpack_require__(/*! ../common/helper */ \"./src/common/helper.ts\");\r\nconst referee_1 = __webpack_require__(/*! ./referee */ \"./src/game-objects/referee.ts\");\r\nconst player_1 = __webpack_require__(/*! ./player */ \"./src/game-objects/player.ts\");\r\nconst stick_1 = __webpack_require__(/*! ./stick */ \"./src/game-objects/stick.ts\");\r\nconst color_1 = __webpack_require__(/*! ../common/color */ \"./src/common/color.ts\");\r\nconst vector2_1 = __webpack_require__(/*! ../geom/vector2 */ \"./src/geom/vector2.ts\");\r\nconst game_config_1 = __webpack_require__(/*! ../game.config */ \"./src/game.config.ts\");\r\nconst assets_1 = __webpack_require__(/*! ../assets */ \"./src/assets.ts\");\r\nconst canvas_1 = __webpack_require__(/*! ../canvas */ \"./src/canvas.ts\");\r\nconst ball_1 = __webpack_require__(/*! ./ball */ \"./src/game-objects/ball.ts\");\r\nconst mouse_1 = __webpack_require__(/*! ../input/mouse */ \"./src/input/mouse.ts\");\r\nconst state_1 = __webpack_require__(/*! ./state */ \"./src/game-objects/state.ts\");\r\n//------Configurations------//\r\nconst physicsConfig = game_config_1.GameConfig.physics;\r\nconst inputConfig = game_config_1.GameConfig.input;\r\nconst ballConfig = game_config_1.GameConfig.ball;\r\nconst tableConfig = game_config_1.GameConfig.table;\r\nconst labelsConfig = game_config_1.GameConfig.labels;\r\nconst matchScoreConfig = game_config_1.GameConfig.matchScore;\r\nconst aiConfig = game_config_1.GameConfig.ai;\r\nconst gameSize = game_config_1.GameConfig.gameSize;\r\nconst sprites = game_config_1.GameConfig.sprites;\r\nconst sounds = game_config_1.GameConfig.sounds;\r\nclass GameWorld {\r\n    //------Constructor------//\r\n    constructor() {\r\n        this._players = [new player_1.Player(), new player_1.Player()];\r\n        this._currentPlayerIndex = 0;\r\n        this.initMatch();\r\n    }\r\n    //------Properties------//\r\n    get currentPlayer() {\r\n        return this._players[this._currentPlayerIndex];\r\n    }\r\n    get nextPlayer() {\r\n        return this._players[(this._currentPlayerIndex + 1) % this._players.length];\r\n    }\r\n    get balls() {\r\n        return this._balls;\r\n    }\r\n    get isBallInHand() {\r\n        return this._turnState.ballInHand;\r\n    }\r\n    get isTurnValid() {\r\n        return this._turnState.isValid;\r\n    }\r\n    get isGameOver() {\r\n        return this._referee.isGameOver(this.currentPlayer, this._cueBall, this._8Ball);\r\n    }\r\n    get isBallsMoving() {\r\n        return this._balls.some(ball => ball.moving);\r\n    }\r\n    get numOfPocketedBallsOnTurn() {\r\n        return this._turnState.pocketedBalls.length;\r\n    }\r\n    //------Private Methods------//\r\n    getBallsByColor(color) {\r\n        return this._balls.filter((ball) => ball.color === color);\r\n    }\r\n    handleInput() {\r\n        if (ai_trainer_1.AI.finishedSession && mouse_1.Mouse.isPressed(inputConfig.mouseShootButton)) {\r\n            this.shootCueBall(this._stick.power, this._stick.rotation);\r\n        }\r\n    }\r\n    isBallPosOutsideTopBorder(position) {\r\n        const topBallEdge = position.y - ballConfig.diameter / 2;\r\n        return topBallEdge <= tableConfig.cushionWidth;\r\n    }\r\n    isBallPosOutsideLeftBorder(position) {\r\n        const leftBallEdge = position.x - ballConfig.diameter / 2;\r\n        return leftBallEdge <= tableConfig.cushionWidth;\r\n    }\r\n    isBallPosOutsideRightBorder(position) {\r\n        const rightBallEdge = position.x + ballConfig.diameter / 2;\r\n        return rightBallEdge >= gameSize.x - tableConfig.cushionWidth;\r\n    }\r\n    isBallPosOutsideBottomBorder(position) {\r\n        const bottomBallEdge = position.y + ballConfig.diameter / 2;\r\n        return bottomBallEdge >= gameSize.y - tableConfig.cushionWidth;\r\n    }\r\n    handleCollisionWithTopCushion(ball) {\r\n        ball.position = ball.position.addY(tableConfig.cushionWidth - ball.position.y + ballConfig.diameter / 2);\r\n        ball.velocity = new vector2_1.Vector2(ball.velocity.x, -ball.velocity.y);\r\n    }\r\n    handleCollisionWithLeftCushion(ball) {\r\n        ball.position = ball.position.addX(tableConfig.cushionWidth - ball.position.x + ballConfig.diameter / 2);\r\n        ball.velocity = new vector2_1.Vector2(-ball.velocity.x, ball.velocity.y);\r\n    }\r\n    handleCollisionWithRightCushion(ball) {\r\n        ball.position = ball.position.addX(gameSize.x - tableConfig.cushionWidth - ball.position.x - ballConfig.diameter / 2);\r\n        ball.velocity = new vector2_1.Vector2(-ball.velocity.x, ball.velocity.y);\r\n    }\r\n    handleCollisionWithBottomCushion(ball) {\r\n        ball.position = ball.position.addY(gameSize.y - tableConfig.cushionWidth - ball.position.y - ballConfig.diameter / 2);\r\n        ball.velocity = new vector2_1.Vector2(ball.velocity.x, -ball.velocity.y);\r\n    }\r\n    resolveBallCollisionWithCushion(ball) {\r\n        let collided = false;\r\n        if (this.isBallPosOutsideTopBorder(ball.nextPosition)) {\r\n            this.handleCollisionWithTopCushion(ball);\r\n            collided = true;\r\n        }\r\n        if (this.isBallPosOutsideLeftBorder(ball.nextPosition)) {\r\n            this.handleCollisionWithLeftCushion(ball);\r\n            collided = true;\r\n        }\r\n        if (this.isBallPosOutsideRightBorder(ball.nextPosition)) {\r\n            this.handleCollisionWithRightCushion(ball);\r\n            collided = true;\r\n        }\r\n        if (this.isBallPosOutsideBottomBorder(ball.nextPosition)) {\r\n            this.handleCollisionWithBottomCushion(ball);\r\n            collided = true;\r\n        }\r\n        if (collided) {\r\n            ball.velocity = ball.velocity.mult(1 - physicsConfig.collisionLoss);\r\n        }\r\n    }\r\n    resolveBallsCollision(first, second) {\r\n        if (!first.visible || !second.visible) {\r\n            return false;\r\n        }\r\n        // Find a normal vector\r\n        const n = first.position.subtract(second.position);\r\n        // Find distance\r\n        const dist = n.length;\r\n        if (dist > ballConfig.diameter) {\r\n            return false;\r\n        }\r\n        // Find minimum translation distance\r\n        const mtd = n.mult((ballConfig.diameter - dist) / dist);\r\n        // Push-pull balls apart\r\n        first.position = first.position.add(mtd.mult(0.5));\r\n        second.position = second.position.subtract(mtd.mult(0.5));\r\n        // Find unit normal vector\r\n        const un = n.mult(1 / n.length);\r\n        // Find unit tangent vector\r\n        const ut = new vector2_1.Vector2(-un.y, un.x);\r\n        // Project velocities onto the unit normal and unit tangent vectors\r\n        const v1n = un.dot(first.velocity);\r\n        const v1t = ut.dot(first.velocity);\r\n        const v2n = un.dot(second.velocity);\r\n        const v2t = ut.dot(second.velocity);\r\n        // Convert the scalar normal and tangential velocities into vectors\r\n        const v1nTag = un.mult(v2n);\r\n        const v1tTag = ut.mult(v1t);\r\n        const v2nTag = un.mult(v1n);\r\n        const v2tTag = ut.mult(v2t);\r\n        // Update velocities\r\n        first.velocity = v1nTag.add(v1tTag);\r\n        second.velocity = v2nTag.add(v2tTag);\r\n        first.velocity = first.velocity.mult(1 - physicsConfig.collisionLoss);\r\n        second.velocity = second.velocity.mult(1 - physicsConfig.collisionLoss);\r\n        return true;\r\n    }\r\n    handleCollisions() {\r\n        for (let i = 0; i < this._balls.length; i++) {\r\n            this.resolveBallCollisionWithCushion(this._balls[i]);\r\n            for (let j = i + 1; j < this._balls.length; j++) {\r\n                const firstBall = this._balls[i];\r\n                const secondBall = this._balls[j];\r\n                const collided = this.resolveBallsCollision(firstBall, secondBall);\r\n                if (collided) {\r\n                    const force = firstBall.velocity.length + secondBall.velocity.length;\r\n                    const volume = helper_1.mapRange(force, 0, ballConfig.maxExpectedCollisionForce, 0, 1);\r\n                    assets_1.Assets.playSound(sounds.paths.ballsCollide, volume);\r\n                    if (!this._turnState.firstCollidedBallColor) {\r\n                        const color = firstBall.color === color_1.Color.white ? secondBall.color : firstBall.color;\r\n                        this._turnState.firstCollidedBallColor = color;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    isInsidePocket(position) {\r\n        return tableConfig.pocketsPositions\r\n            .some((pocketPos) => position.distFrom(pocketPos) <= tableConfig.pocketRadius);\r\n    }\r\n    resolveBallInPocket(ball) {\r\n        if (this.isInsidePocket(ball.position)) {\r\n            ball.hide();\r\n        }\r\n    }\r\n    isValidPlayerColor(color) {\r\n        return color === color_1.Color.red || color === color_1.Color.yellow;\r\n    }\r\n    handleBallsInPockets() {\r\n        this._balls.forEach((ball) => {\r\n            this.resolveBallInPocket(ball);\r\n            if (!ball.visible && !this._turnState.pocketedBalls.includes(ball)) {\r\n                assets_1.Assets.playSound(sounds.paths.rail, 1);\r\n                if (!this.currentPlayer.color && this.isValidPlayerColor(ball.color)) {\r\n                    this.currentPlayer.color = ball.color;\r\n                    this.nextPlayer.color = ball.color === color_1.Color.yellow ? color_1.Color.red : color_1.Color.yellow;\r\n                }\r\n                this._turnState.pocketedBalls.push(ball);\r\n            }\r\n        });\r\n    }\r\n    handleBallInHand() {\r\n        if (mouse_1.Mouse.isPressed(inputConfig.mousePlaceBallButton) && this.isValidPosToPlaceCueBall(mouse_1.Mouse.position)) {\r\n            this.placeBallInHand(mouse_1.Mouse.position);\r\n        }\r\n        else {\r\n            this._stick.movable = false;\r\n            this._stick.visible = false;\r\n            this._cueBall.position = mouse_1.Mouse.position;\r\n        }\r\n    }\r\n    handleGameOver() {\r\n        if (this._turnState.isValid) {\r\n            this.currentPlayer.overallScore++;\r\n        }\r\n        else {\r\n            this.nextPlayer.overallScore++;\r\n        }\r\n        this.initMatch();\r\n    }\r\n    nextTurn() {\r\n        const foul = !this._turnState.isValid;\r\n        if (!this._cueBall.visible) {\r\n            this._cueBall.show(vector2_1.Vector2.copy(game_config_1.GameConfig.cueBallPosition));\r\n        }\r\n        if (foul || this._turnState.pocketedBalls.length === 0) {\r\n            this._currentPlayerIndex++;\r\n            this._currentPlayerIndex = this._currentPlayerIndex % this._players.length;\r\n        }\r\n        this._stick.show(this._cueBall.position);\r\n        this._turnState = new state_1.State();\r\n        this._turnState.ballInHand = foul;\r\n        if (this.isAITurn()) {\r\n            ai_trainer_1.AI.startSession(this);\r\n        }\r\n        console.log(this.balls[0].show(this.balls[0].position));\r\n        if (this.isGameOver) {\r\n            this.handleGameOver();\r\n            return;\r\n        }\r\n    }\r\n    drawCurrentPlayerLabel() {\r\n        canvas_1.Canvas2D.drawText(labelsConfig.currentPlayer.text + (this._currentPlayerIndex + 1), labelsConfig.currentPlayer.font, labelsConfig.currentPlayer.color, labelsConfig.currentPlayer.position, labelsConfig.currentPlayer.alignment);\r\n    }\r\n    drawMatchScores() {\r\n        for (let i = 0; i < this._players.length; i++) {\r\n            for (let j = 0; j < this._players[i].matchScore; j++) {\r\n                const scorePosition = vector2_1.Vector2.copy(matchScoreConfig.scoresPositions[i]).addToX(j * matchScoreConfig.unitMargin);\r\n                const scoreSprite = this._players[i].color === color_1.Color.red ? assets_1.Assets.getSprite(sprites.paths.redScore) : assets_1.Assets.getSprite(sprites.paths.yellowScore);\r\n                canvas_1.Canvas2D.drawImage(scoreSprite, scorePosition);\r\n            }\r\n        }\r\n    }\r\n    drawOverallScores() {\r\n        for (let i = 0; i < this._players.length; i++) {\r\n            canvas_1.Canvas2D.drawText(this._players[i].overallScore.toString(), labelsConfig.overalScores[i].font, labelsConfig.overalScores[i].color, labelsConfig.overalScores[i].position, labelsConfig.overalScores[i].alignment);\r\n        }\r\n    }\r\n    isInsideTableBoundaries(position) {\r\n        let insideTable = !this.isInsidePocket(position);\r\n        insideTable = insideTable && !this.isBallPosOutsideTopBorder(position);\r\n        insideTable = insideTable && !this.isBallPosOutsideLeftBorder(position);\r\n        insideTable = insideTable && !this.isBallPosOutsideRightBorder(position);\r\n        insideTable = insideTable && !this.isBallPosOutsideBottomBorder(position);\r\n        return insideTable;\r\n    }\r\n    isAITurn() {\r\n        //return AI.finishedSession && aiConfig.on && this._currentPlayerIndex === aiConfig.playerIndex;\r\n        return true;\r\n    }\r\n    initMatch() {\r\n        const redBalls = game_config_1.GameConfig.redBallsPositions\r\n            .map((position) => new ball_1.Ball(vector2_1.Vector2.copy(position), color_1.Color.yellow));\r\n        const yellowBalls = game_config_1.GameConfig.yellowBallsPositions\r\n            .map((position) => new ball_1.Ball(vector2_1.Vector2.copy(position), color_1.Color.red));\r\n        this._8Ball = new ball_1.Ball(vector2_1.Vector2.copy(game_config_1.GameConfig.eightBallPosition), color_1.Color.black);\r\n        this._cueBall = new ball_1.Ball(vector2_1.Vector2.copy(game_config_1.GameConfig.cueBallPosition), color_1.Color.white);\r\n        this._stick = new stick_1.Stick(vector2_1.Vector2.copy(game_config_1.GameConfig.cueBallPosition));\r\n        this._balls = [\r\n            ...redBalls,\r\n            ...yellowBalls,\r\n            this._8Ball,\r\n            this._cueBall,\r\n        ];\r\n        this._currentPlayerIndex = 0;\r\n        this._players.forEach((player) => {\r\n            player.matchScore = 0;\r\n            player.color = null;\r\n        });\r\n        this._turnState = new state_1.State();\r\n        this._referee = new referee_1.Referee();\r\n        if (this.isAITurn()) {\r\n            ai_trainer_1.AI.startSession(this);\r\n        }\r\n    }\r\n    isValidPosToPlaceCueBall(position) {\r\n        let noOverlap = this._balls.every((ball) => {\r\n            return ball.color === color_1.Color.white ||\r\n                ball.position.distFrom(position) > ballConfig.diameter;\r\n        });\r\n        return noOverlap && this.isInsideTableBoundaries(position);\r\n    }\r\n    placeBallInHand(position) {\r\n        this._cueBall.position = position;\r\n        this._turnState.ballInHand = false;\r\n        this._stick.show(this._cueBall.position);\r\n    }\r\n    concludeTurn() {\r\n        this._turnState.pocketedBalls.forEach((ball) => {\r\n            const ballIndex = this._balls.indexOf(ball);\r\n            if (ball.color != color_1.Color.white) {\r\n                this._balls.splice(ballIndex, 1);\r\n            }\r\n        });\r\n        if (this.currentPlayer.color) {\r\n            this.currentPlayer.matchScore = 8 - this.getBallsByColor(this.currentPlayer.color).length - this.getBallsByColor(color_1.Color.black).length;\r\n        }\r\n        if (this.nextPlayer.color) {\r\n            this.nextPlayer.matchScore = 8 - this.getBallsByColor(this.nextPlayer.color).length - this.getBallsByColor(color_1.Color.black).length;\r\n        }\r\n        this._turnState.isValid = this._referee.isValidTurn(this.currentPlayer, this._turnState);\r\n    }\r\n    shootCueBall(power, rotation) {\r\n        if (power > 0) {\r\n            this._stick.rotation = rotation;\r\n            this._stick.shoot();\r\n            this._cueBall.shoot(power, rotation);\r\n            this._stick.movable = false;\r\n            setTimeout(() => this._stick.hide(), game_config_1.GameConfig.timeoutToHideStickAfterShot);\r\n        }\r\n    }\r\n    update() {\r\n        if (this.isBallInHand) {\r\n            this.handleBallInHand();\r\n            return;\r\n        }\r\n        this.handleBallsInPockets();\r\n        this.handleCollisions();\r\n        this.handleInput();\r\n        this._stick.update();\r\n        this._balls.forEach((ball) => ball.update());\r\n        if (!this.isBallsMoving && !this._stick.visible) {\r\n            this.concludeTurn();\r\n            this.nextTurn();\r\n        }\r\n    }\r\n    draw() {\r\n        canvas_1.Canvas2D.drawImage(assets_1.Assets.getSprite(sprites.paths.table));\r\n        this.drawCurrentPlayerLabel();\r\n        this.drawMatchScores();\r\n        this.drawOverallScores();\r\n        this._balls.forEach((ball) => ball.draw());\r\n        this._stick.draw();\r\n    }\r\n}\r\nexports.GameWorld = GameWorld;\r\n\n\n//# sourceURL=webpack:///./src/game-objects/game-world.ts?");

/***/ }),

/***/ "./src/game-objects/player.ts":
/*!************************************!*\
  !*** ./src/game-objects/player.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Player = void 0;\r\nclass Player {\r\n    constructor() {\r\n        //------Properties------//\r\n        this.matchScore = 0;\r\n        this.overallScore = 0;\r\n    }\r\n}\r\nexports.Player = Player;\r\n\n\n//# sourceURL=webpack:///./src/game-objects/player.ts?");

/***/ }),

/***/ "./src/game-objects/referee.ts":
/*!*************************************!*\
  !*** ./src/game-objects/referee.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Referee = void 0;\r\nconst color_1 = __webpack_require__(/*! ../common/color */ \"./src/common/color.ts\");\r\nclass Referee {\r\n    //------Private Methods------//\r\n    isValidFirstTouch(player, collidedBallColor, somePocketed) {\r\n        if (!collidedBallColor) {\r\n            return false;\r\n        }\r\n        if (!player.color) {\r\n            return collidedBallColor !== color_1.Color.black;\r\n        }\r\n        return player.color === collidedBallColor ||\r\n            (player.matchScore === 1 && somePocketed && collidedBallColor !== color_1.Color.black) ||\r\n            (player.matchScore === 7 && collidedBallColor === color_1.Color.black) ||\r\n            (player.matchScore === 8 && collidedBallColor === color_1.Color.black);\r\n    }\r\n    isValidPocketedBalls(player, pocketedBalls) {\r\n        if (pocketedBalls.length === 0) {\r\n            return true;\r\n        }\r\n        if (player.color) {\r\n            if (player.matchScore === 8) {\r\n                return pocketedBalls.length === 1 && pocketedBalls[0].color === color_1.Color.black;\r\n            }\r\n            else {\r\n                return pocketedBalls.every((ball) => ball.color === player.color);\r\n            }\r\n        }\r\n        else {\r\n            const color = pocketedBalls[0].color;\r\n            return color !== color_1.Color.white &&\r\n                color !== color_1.Color.black &&\r\n                pocketedBalls.every((ball) => ball.color === color);\r\n        }\r\n    }\r\n    //------Public Methods------//\r\n    isValidTurn(player, state) {\r\n        return this.isValidFirstTouch(player, state.firstCollidedBallColor, state.pocketedBalls.length > 0) &&\r\n            this.isValidPocketedBalls(player, state.pocketedBalls);\r\n    }\r\n    isGameOver(currentPlayer, cueBall, eightBall) {\r\n        /* return !eightBall.visible ||\r\n               (!cueBall.visible && currentPlayer.matchScore === 7) ||\r\n               (!cueBall.visible && currentPlayer.matchScore === 8) */\r\n        return true;\r\n    }\r\n}\r\nexports.Referee = Referee;\r\n\n\n//# sourceURL=webpack:///./src/game-objects/referee.ts?");

/***/ }),

/***/ "./src/game-objects/state.ts":
/*!***********************************!*\
  !*** ./src/game-objects/state.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.State = void 0;\r\nclass State {\r\n    constructor() {\r\n        //------Properties------//\r\n        this.pocketedBalls = [];\r\n        this.ballInHand = false;\r\n        this.isValid = false;\r\n    }\r\n}\r\nexports.State = State;\r\n\n\n//# sourceURL=webpack:///./src/game-objects/state.ts?");

/***/ }),

/***/ "./src/game-objects/stick.ts":
/*!***********************************!*\
  !*** ./src/game-objects/stick.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Stick = void 0;\r\nconst keyboard_1 = __webpack_require__(/*! ../input/keyboard */ \"./src/input/keyboard.ts\");\r\nconst mouse_1 = __webpack_require__(/*! ../input/mouse */ \"./src/input/mouse.ts\");\r\nconst game_config_1 = __webpack_require__(/*! ../game.config */ \"./src/game.config.ts\");\r\nconst assets_1 = __webpack_require__(/*! ../assets */ \"./src/assets.ts\");\r\nconst canvas_1 = __webpack_require__(/*! ../canvas */ \"./src/canvas.ts\");\r\nconst vector2_1 = __webpack_require__(/*! ../geom/vector2 */ \"./src/geom/vector2.ts\");\r\nconst helper_1 = __webpack_require__(/*! ../common/helper */ \"./src/common/helper.ts\");\r\n//------Configurations------//\r\nconst inputConfig = game_config_1.GameConfig.input;\r\nconst stickConfig = game_config_1.GameConfig.stick;\r\nconst sprites = game_config_1.GameConfig.sprites;\r\nconst sounds = game_config_1.GameConfig.sounds;\r\nclass Stick {\r\n    //------Constructor------//\r\n    constructor(_position) {\r\n        this._position = _position;\r\n        //------Members------//\r\n        this._sprite = assets_1.Assets.getSprite(sprites.paths.stick);\r\n        this._rotation = 0;\r\n        this._origin = vector2_1.Vector2.copy(stickConfig.origin);\r\n        this._power = 0;\r\n        this._movable = true;\r\n        this._visible = true;\r\n    }\r\n    //------Properties------//\r\n    get position() {\r\n        return vector2_1.Vector2.copy(this._position);\r\n    }\r\n    get rotation() {\r\n        return this._rotation;\r\n    }\r\n    get power() {\r\n        return this._power;\r\n    }\r\n    set movable(value) {\r\n        this._movable = value;\r\n    }\r\n    get visible() {\r\n        return this._visible;\r\n    }\r\n    set visible(value) {\r\n        this._visible = value;\r\n    }\r\n    set rotation(value) {\r\n        this._rotation = value;\r\n    }\r\n    //------Private Methods------//\r\n    increasePower() {\r\n        this._power += stickConfig.powerToAddPerFrame;\r\n        this._origin.addToX(stickConfig.movementPerFrame);\r\n    }\r\n    decreasePower() {\r\n        this._power -= stickConfig.powerToAddPerFrame;\r\n        this._origin.addToX(-stickConfig.movementPerFrame);\r\n    }\r\n    isLessThanMaxPower() {\r\n        return this._power < stickConfig.maxPower;\r\n    }\r\n    isMoreThanMinPower() {\r\n        return this._power >= 0;\r\n    }\r\n    updatePower() {\r\n        if (keyboard_1.Keyboard.isDown(inputConfig.increaseShotPowerKey) && this.isLessThanMaxPower()) {\r\n            this.increasePower();\r\n        }\r\n        else if (keyboard_1.Keyboard.isDown(inputConfig.decreaseShotPowerKey) && this.isMoreThanMinPower()) {\r\n            this.decreasePower();\r\n        }\r\n    }\r\n    updateRotation() {\r\n        const opposite = mouse_1.Mouse.position.y - this._position.y;\r\n        const adjacent = mouse_1.Mouse.position.x - this._position.x;\r\n        this._rotation = Math.atan2(opposite, adjacent);\r\n    }\r\n    //------Public Methods------//\r\n    hide() {\r\n        this._power = 0;\r\n        this._visible = false;\r\n        this._movable = false;\r\n    }\r\n    show(position) {\r\n        this._position = position;\r\n        this._origin = vector2_1.Vector2.copy(stickConfig.origin);\r\n        this._movable = true;\r\n        this._visible = true;\r\n    }\r\n    shoot() {\r\n        this._origin = vector2_1.Vector2.copy(stickConfig.shotOrigin);\r\n        const volume = helper_1.mapRange(this._power, 0, stickConfig.maxPower, 0, 1);\r\n        assets_1.Assets.playSound(sounds.paths.strike, volume);\r\n    }\r\n    update() {\r\n        if (this._movable) {\r\n            this.updateRotation();\r\n            this.updatePower();\r\n        }\r\n    }\r\n    draw() {\r\n        if (this._visible) {\r\n            canvas_1.Canvas2D.drawImage(this._sprite, this._position, this._rotation, this._origin);\r\n        }\r\n    }\r\n}\r\nexports.Stick = Stick;\r\n\n\n//# sourceURL=webpack:///./src/game-objects/stick.ts?");

/***/ }),

/***/ "./src/game.config.ts":
/*!****************************!*\
  !*** ./src/game.config.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GameConfig = void 0;\r\nconst menu_action_type_1 = __webpack_require__(/*! ./menu/menu-action-type */ \"./src/menu/menu-action-type.ts\");\r\nexports.GameConfig = {\r\n    gameSize: { x: 1500, y: 825 },\r\n    soundOn: true,\r\n    timeoutToHideStickAfterShot: 500,\r\n    timeoutToHideBallAfterPocket: 100,\r\n    loadingScreenTimeout: 5000,\r\n    loadingScreenImagePosition: { x: 450, y: 112.5 },\r\n    timeoutToLoadSubMenu: 100,\r\n    labels: {\r\n        currentPlayer: {\r\n            position: { x: 640, y: 260 },\r\n            color: '#126736',\r\n            font: '70px Impact',\r\n            alignment: 'top',\r\n            text: 'PLAYER ',\r\n        },\r\n        overalScores: [\r\n            {\r\n                position: { x: 628, y: 460 },\r\n                color: '#126736',\r\n                font: '200px Impact',\r\n                alignment: 'top'\r\n            },\r\n            {\r\n                position: { x: 778, y: 460 },\r\n                color: '#126736',\r\n                font: '200px Impact',\r\n                alignment: 'top'\r\n            }\r\n        ]\r\n    },\r\n    redBallsPositions: [\r\n        { x: 1056, y: 433 },\r\n        { x: 1090, y: 374 },\r\n        { x: 1126, y: 393 },\r\n        { x: 1126, y: 472 },\r\n        { x: 1162, y: 335 },\r\n        { x: 1162, y: 374 },\r\n        { x: 1162, y: 452 },\r\n    ],\r\n    yellowBallsPositions: [\r\n        { x: 1022, y: 413 },\r\n        { x: 1056, y: 393 },\r\n        { x: 1090, y: 452 },\r\n        { x: 1126, y: 354 },\r\n        { x: 1126, y: 433 },\r\n        { x: 1162, y: 413 },\r\n        { x: 1162, y: 491 },\r\n    ],\r\n    cueBallPosition: { x: 413, y: 413 },\r\n    eightBallPosition: { x: 1090, y: 413 },\r\n    matchScore: {\r\n        scoresPositions: [\r\n            { x: 420, y: 27 },\r\n            { x: 932, y: 27 }\r\n        ],\r\n        unitMargin: 20\r\n    },\r\n    sprites: {\r\n        basePath: 'assets/sprites/',\r\n        paths: {\r\n            menuBackground: 'main_menu_background.png',\r\n            table: 'spr_background4.png',\r\n            cueBall: 'spr_ball2.png',\r\n            redBall: 'spr_redBall2.png',\r\n            yellowBall: 'spr_yellowBall2.png',\r\n            blackBall: 'spr_blackBall2.png',\r\n            stick: 'spr_stick.png',\r\n            twoPlayersButton: '2_players_button.png',\r\n            twoPlayersButtonHovered: '2_players_button_hover.png',\r\n            onePlayerButton: '1_player_button.png',\r\n            onePlayerButtonHovered: '1_player_button_hover.png',\r\n            muteButton: 'mute_button.png',\r\n            muteButtonHovered: 'mute_button_hover.png',\r\n            muteButtonPressed: 'mute_button_pressed.png',\r\n            muteButtonPressedHovered: 'mute_button_pressed_hover.png',\r\n            easyButton: 'easy_button.png',\r\n            easyButtonHovered: 'easy_button_hover.png',\r\n            mediumButton: 'medium_button.png',\r\n            mediumButtonHovered: 'medium_button_hover.png',\r\n            hardButton: 'hard_button.png',\r\n            hardButtonHovered: 'hard_button_hover.png',\r\n            backButton: 'back_button.png',\r\n            backButtonHovered: 'back_button_hover.png',\r\n            continueButton: 'continue_button.png',\r\n            continueButtonHovered: 'continue_button_hover.png',\r\n            insaneButton: 'insane_button.png',\r\n            insaneButtonHovered: 'insane_button_hover.png',\r\n            controls: 'controls.png',\r\n            redScore: 'red_score.png',\r\n            yellowScore: 'yellow_score.png'\r\n        }\r\n    },\r\n    sounds: {\r\n        basePath: 'assets/sounds/',\r\n        paths: {\r\n            ballsCollide: 'BallsCollide.wav',\r\n            strike: 'Strike.wav',\r\n            rail: 'Hole.wav',\r\n        }\r\n    },\r\n    physics: {\r\n        friction: 0.018,\r\n        collisionLoss: 0.018,\r\n    },\r\n    table: {\r\n        cushionWidth: 57,\r\n        pocketRadius: 48,\r\n        pocketsPositions: [\r\n            { x: 62, y: 62 },\r\n            { x: 750, y: 32 },\r\n            { x: 1435, y: 62 },\r\n            { x: 62, y: 762 },\r\n            { x: 750, y: 794 },\r\n            { x: 1435, y: 762 }\r\n        ]\r\n    },\r\n    ball: {\r\n        diameter: 38,\r\n        origin: { x: 25, y: 25 },\r\n        minVelocityLength: 0.05,\r\n        maxExpectedVelocity: 120,\r\n        maxExpectedCollisionForce: 70\r\n    },\r\n    stick: {\r\n        origin: { x: 970, y: 11 },\r\n        shotOrigin: { x: 950, y: 11 },\r\n        powerToAddPerFrame: 1,\r\n        movementPerFrame: 3,\r\n        maxPower: 50\r\n    },\r\n    input: {\r\n        mouseSelectButton: 0,\r\n        mouseShootButton: 0,\r\n        mousePlaceBallButton: 0,\r\n        increaseShotPowerKey: 87,\r\n        decreaseShotPowerKey: 83,\r\n        toggleMenuKey: 27\r\n    },\r\n    mainMenu: {\r\n        labels: [\r\n            {\r\n                text: 'Classic 8-Ball',\r\n                position: { x: 200, y: 100 },\r\n                font: '100px Bookman',\r\n                color: 'white',\r\n                alignment: 'left',\r\n            },\r\n            {\r\n                text: `© ${new Date().getFullYear()} Chen Shmilovich`,\r\n                position: { x: 1250, y: 800 },\r\n                font: '20px Bookman',\r\n                color: 'white',\r\n                alignment: 'left',\r\n            }\r\n        ],\r\n        buttons: [\r\n            {\r\n                action: menu_action_type_1.MenuActionType.PVP,\r\n                position: { x: 200, y: 200 },\r\n                sprite: 'twoPlayersButton',\r\n                spriteOnHover: 'twoPlayersButtonHovered',\r\n            },\r\n            {\r\n                action: menu_action_type_1.MenuActionType.GoToSubMenu,\r\n                value: 0,\r\n                position: { x: 200, y: 400 },\r\n                sprite: 'onePlayerButton',\r\n                spriteOnHover: 'onePlayerButtonHovered',\r\n            },\r\n            {\r\n                action: menu_action_type_1.MenuActionType.ToggleSound,\r\n                position: { x: 1430, y: 10 },\r\n                sprite: 'muteButton',\r\n                spriteOnHover: 'muteButtonHovered',\r\n            },\r\n        ],\r\n        subMenus: [\r\n            {\r\n                labels: [\r\n                    {\r\n                        text: 'Choose Difficulty',\r\n                        position: { x: 200, y: 80 },\r\n                        font: '70px Bookman',\r\n                        color: 'white',\r\n                        alignment: 'left',\r\n                    },\r\n                    {\r\n                        text: `© ${new Date().getFullYear()} Chen Shmilovich`,\r\n                        position: { x: 1250, y: 800 },\r\n                        font: '20px Bookman',\r\n                        color: 'white',\r\n                        alignment: 'left',\r\n                    }\r\n                ],\r\n                buttons: [\r\n                    {\r\n                        action: menu_action_type_1.MenuActionType.GoToPreviousMenu,\r\n                        position: { x: 100, y: 150 },\r\n                        sprite: 'backButton',\r\n                        spriteOnHover: 'backButtonHovered',\r\n                    },\r\n                    {\r\n                        action: menu_action_type_1.MenuActionType.PVC,\r\n                        position: { x: 200, y: 150 },\r\n                        value: 30,\r\n                        sprite: 'easyButton',\r\n                        spriteOnHover: 'easyButtonHovered'\r\n                    },\r\n                    {\r\n                        action: menu_action_type_1.MenuActionType.PVC,\r\n                        position: { x: 200, y: 300 },\r\n                        value: 50,\r\n                        sprite: 'mediumButton',\r\n                        spriteOnHover: 'mediumButtonHovered'\r\n                    },\r\n                    {\r\n                        action: menu_action_type_1.MenuActionType.PVC,\r\n                        position: { x: 200, y: 450 },\r\n                        value: 100,\r\n                        sprite: 'hardButton',\r\n                        spriteOnHover: 'hardButtonHovered'\r\n                    },\r\n                    {\r\n                        action: menu_action_type_1.MenuActionType.PVC,\r\n                        position: { x: 200, y: 600 },\r\n                        value: 700,\r\n                        sprite: 'insaneButton',\r\n                        spriteOnHover: 'insaneButtonHovered'\r\n                    },\r\n                    {\r\n                        action: menu_action_type_1.MenuActionType.ToggleSound,\r\n                        position: { x: 1430, y: 10 },\r\n                        sprite: 'muteButton',\r\n                        spriteOnHover: 'muteButtonHovered',\r\n                    },\r\n                ],\r\n                subMenus: []\r\n            }\r\n        ]\r\n    },\r\n    cursor: {\r\n        default: 'default',\r\n        button: 'pointer'\r\n    },\r\n    ai: {\r\n        on: true,\r\n        trainIterations: 30,\r\n        playerIndex: 1,\r\n        ballDistanceBonus: 1 / 5800,\r\n        validTurnBonus: 5000,\r\n        pocketedBallBonus: 2000,\r\n        invalidTurnPenalty: 3000,\r\n        gameWonBonus: 50000,\r\n        gameLossPenalty: 50000,\r\n        shotPowerMutationVariance: 15,\r\n        minShotPower: 10,\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/game.config.ts?");

/***/ }),

/***/ "./src/geom/vector2.ts":
/*!*****************************!*\
  !*** ./src/geom/vector2.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Vector2 = void 0;\r\nclass Vector2 {\r\n    //------Constructor------//\r\n    constructor(x, y) {\r\n        this._x = x;\r\n        this._y = y;\r\n    }\r\n    //------Properties------//\r\n    get x() {\r\n        return this._x;\r\n    }\r\n    get y() {\r\n        return this._y;\r\n    }\r\n    static get zero() {\r\n        return new Vector2(0, 0);\r\n    }\r\n    get length() {\r\n        return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2));\r\n    }\r\n    //------Public Methods------//\r\n    static copy(vector) {\r\n        return new Vector2(vector.x, vector.y);\r\n    }\r\n    addX(x) {\r\n        return new Vector2(this._x, this._y).addToX(x);\r\n    }\r\n    addY(y) {\r\n        return new Vector2(this._x, this._y).addToY(y);\r\n    }\r\n    addToX(x) {\r\n        this._x += x;\r\n        return this;\r\n    }\r\n    addToY(y) {\r\n        this._y += y;\r\n        return this;\r\n    }\r\n    addTo(vector) {\r\n        return this.addToX(vector.x).addToY(vector.y);\r\n    }\r\n    add(vector) {\r\n        return new Vector2(this._x, this._y).addTo(vector);\r\n    }\r\n    subtractTo(vector) {\r\n        this._x -= vector.x;\r\n        this._y -= vector.y;\r\n        return this;\r\n    }\r\n    subtract(vector) {\r\n        return new Vector2(this._x, this._y).subtractTo(vector);\r\n    }\r\n    mult(v) {\r\n        return new Vector2(this._x, this._y).multBy(v);\r\n    }\r\n    multBy(v) {\r\n        this._x *= v;\r\n        this._y *= v;\r\n        return this;\r\n    }\r\n    dot(vector) {\r\n        return this._x * vector.x + this._y * vector.y;\r\n    }\r\n    distFrom(vector) {\r\n        return this.subtract(vector).length;\r\n    }\r\n}\r\nexports.Vector2 = Vector2;\r\n\n\n//# sourceURL=webpack:///./src/geom/vector2.ts?");

/***/ }),

/***/ "./src/input/button-state.ts":
/*!***********************************!*\
  !*** ./src/input/button-state.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ButtonState = void 0;\r\nclass ButtonState {\r\n    constructor() {\r\n        //------Properties------//\r\n        this.down = false;\r\n        this.pressed = false;\r\n    }\r\n}\r\nexports.ButtonState = ButtonState;\r\n\n\n//# sourceURL=webpack:///./src/input/button-state.ts?");

/***/ }),

/***/ "./src/input/keyboard.ts":
/*!*******************************!*\
  !*** ./src/input/keyboard.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Keyboard = void 0;\r\nconst button_state_1 = __webpack_require__(/*! ./button-state */ \"./src/input/button-state.ts\");\r\nclass Keyboard_Singleton {\r\n    //------Constructor------//\r\n    constructor() {\r\n        //------Members------//\r\n        this._keyStates = [];\r\n        for (let i = 0; i < 256; i++) {\r\n            this._keyStates[i] = new button_state_1.ButtonState();\r\n        }\r\n        document.addEventListener('keyup', (event) => this.handleKeyUp(event));\r\n        document.addEventListener('keydown', (event) => this.handleKeyDown(event));\r\n    }\r\n    //------Private Methods------//\r\n    handleKeyUp(event) {\r\n        this._keyStates[event.keyCode].down = false;\r\n    }\r\n    handleKeyDown(event) {\r\n        this._keyStates[event.keyCode].pressed = true;\r\n        this._keyStates[event.keyCode].down = true;\r\n    }\r\n    //------Public Methods------//\r\n    reset() {\r\n        for (let i = 0; i < 256; i++) {\r\n            this._keyStates[i].pressed = false;\r\n        }\r\n    }\r\n    isDown(keyCode) {\r\n        return this._keyStates[keyCode].down;\r\n    }\r\n    isPressed(keyCode) {\r\n        return this._keyStates[keyCode].pressed;\r\n    }\r\n}\r\nexports.Keyboard = new Keyboard_Singleton();\r\n\n\n//# sourceURL=webpack:///./src/input/keyboard.ts?");

/***/ }),

/***/ "./src/input/mouse.ts":
/*!****************************!*\
  !*** ./src/input/mouse.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Mouse = void 0;\r\nconst button_state_1 = __webpack_require__(/*! ./button-state */ \"./src/input/button-state.ts\");\r\nconst canvas_1 = __webpack_require__(/*! ../canvas */ \"./src/canvas.ts\");\r\nconst vector2_1 = __webpack_require__(/*! ../geom/vector2 */ \"./src/geom/vector2.ts\");\r\nclass Mouse_Singleton {\r\n    //------Constructor------//\r\n    constructor() {\r\n        //------Members------//\r\n        this._buttonStates = [];\r\n        for (let i = 0; i < 3; i++) {\r\n            this._buttonStates[i] = new button_state_1.ButtonState();\r\n        }\r\n        this._position = vector2_1.Vector2.zero;\r\n        document.addEventListener('mousemove', (event) => this.handleMouseMove(event));\r\n        document.addEventListener('mousedown', (event) => this.handleMouseDown(event));\r\n        document.addEventListener('mouseup', (event) => this.handleMouseUp(event));\r\n    }\r\n    //------Properties------//\r\n    get position() {\r\n        return vector2_1.Vector2.copy(this._position);\r\n    }\r\n    //------Private Methods------//\r\n    handleMouseMove(event) {\r\n        const mouseX = (event.pageX - canvas_1.Canvas2D.offsetX) / canvas_1.Canvas2D.scaleX;\r\n        const mouseY = (event.pageY - canvas_1.Canvas2D.offsetY) / canvas_1.Canvas2D.scaleY;\r\n        this._position = new vector2_1.Vector2(mouseX, mouseY);\r\n    }\r\n    handleMouseDown(event) {\r\n        this._buttonStates[event.button].down = true;\r\n        this._buttonStates[event.button].pressed = true;\r\n    }\r\n    handleMouseUp(event) {\r\n        this._buttonStates[event.button].down = false;\r\n    }\r\n    //------Public Methods------//\r\n    reset() {\r\n        for (let i = 0; i < 3; i++) {\r\n            this._buttonStates[i].pressed = false;\r\n        }\r\n    }\r\n    isDown(button) {\r\n        return this._buttonStates[button].down;\r\n    }\r\n    isPressed(button) {\r\n        return this._buttonStates[button].pressed;\r\n    }\r\n}\r\nexports.Mouse = new Mouse_Singleton();\r\n\n\n//# sourceURL=webpack:///./src/input/mouse.ts?");

/***/ }),

/***/ "./src/menu/commands/go-to-previous-menu-command.ts":
/*!**********************************************************!*\
  !*** ./src/menu/commands/go-to-previous-menu-command.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GoToPreviousMenuCommand = void 0;\r\nclass GoToPreviousMenuCommand {\r\n    //------Constructor------//\r\n    constructor(_game) {\r\n        this._game = _game;\r\n    }\r\n    //------Public Methods------//\r\n    execute() {\r\n        this._game.goToPreviousMenu();\r\n    }\r\n}\r\nexports.GoToPreviousMenuCommand = GoToPreviousMenuCommand;\r\n\n\n//# sourceURL=webpack:///./src/menu/commands/go-to-previous-menu-command.ts?");

/***/ }),

/***/ "./src/menu/commands/go-to-sub-menu-command.ts":
/*!*****************************************************!*\
  !*** ./src/menu/commands/go-to-sub-menu-command.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GoToSubMenuCommand = void 0;\r\nclass GoToSubMenuCommand {\r\n    //------Constructor------//\r\n    constructor(_game) {\r\n        this._game = _game;\r\n    }\r\n    //------Public Methods------//\r\n    execute(value) {\r\n        this._game.goToSubMenu(value);\r\n    }\r\n}\r\nexports.GoToSubMenuCommand = GoToSubMenuCommand;\r\n\n\n//# sourceURL=webpack:///./src/menu/commands/go-to-sub-menu-command.ts?");

/***/ }),

/***/ "./src/menu/commands/pvc-command.ts":
/*!******************************************!*\
  !*** ./src/menu/commands/pvc-command.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PVCCommand = void 0;\r\nconst game_config_1 = __webpack_require__(/*! ./../../game.config */ \"./src/game.config.ts\");\r\nclass PVCCommand {\r\n    //------Constructor------//\r\n    constructor(_game) {\r\n        this._game = _game;\r\n    }\r\n    //------Public Methods------//\r\n    execute(iterationsValue) {\r\n        game_config_1.GameConfig.ai.playerIndex = Math.floor(Math.random() * 2);\r\n        game_config_1.GameConfig.ai.on = true;\r\n        game_config_1.GameConfig.ai.trainIterations = iterationsValue;\r\n        this._game.start();\r\n    }\r\n}\r\nexports.PVCCommand = PVCCommand;\r\n\n\n//# sourceURL=webpack:///./src/menu/commands/pvc-command.ts?");

/***/ }),

/***/ "./src/menu/commands/pvp-command.ts":
/*!******************************************!*\
  !*** ./src/menu/commands/pvp-command.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PVPCommand = void 0;\r\nconst game_config_1 = __webpack_require__(/*! ./../../game.config */ \"./src/game.config.ts\");\r\nclass PVPCommand {\r\n    //------Constructor------//\r\n    constructor(_game) {\r\n        this._game = _game;\r\n    }\r\n    //------Public Methods------//\r\n    execute() {\r\n        game_config_1.GameConfig.ai.on = false;\r\n        this._game.start();\r\n    }\r\n}\r\nexports.PVPCommand = PVPCommand;\r\n\n\n//# sourceURL=webpack:///./src/menu/commands/pvp-command.ts?");

/***/ }),

/***/ "./src/menu/commands/toggle-sound-command.ts":
/*!***************************************************!*\
  !*** ./src/menu/commands/toggle-sound-command.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ToggleSoundCommand = void 0;\r\nconst game_config_1 = __webpack_require__(/*! ../../game.config */ \"./src/game.config.ts\");\r\n//------Configurations------//\r\nconst sprites = game_config_1.GameConfig.sprites;\r\nclass ToggleSoundCommand {\r\n    //------Private Methods------//\r\n    toggleMuteButtonSprite() {\r\n        const currentMuteButtonPath = sprites.paths.muteButton;\r\n        const currentMuteButtonHoveredPath = sprites.paths.muteButtonHovered;\r\n        sprites.paths.muteButton = sprites.paths.muteButtonPressed;\r\n        sprites.paths.muteButtonHovered = sprites.paths.muteButtonPressedHovered;\r\n        sprites.paths.muteButtonPressed = currentMuteButtonPath;\r\n        sprites.paths.muteButtonPressedHovered = currentMuteButtonHoveredPath;\r\n    }\r\n    //------Public Methods------//\r\n    execute() {\r\n        game_config_1.GameConfig.soundOn = !game_config_1.GameConfig.soundOn;\r\n        this.toggleMuteButtonSprite();\r\n    }\r\n}\r\nexports.ToggleSoundCommand = ToggleSoundCommand;\r\n\n\n//# sourceURL=webpack:///./src/menu/commands/toggle-sound-command.ts?");

/***/ }),

/***/ "./src/menu/menu-action-type.ts":
/*!**************************************!*\
  !*** ./src/menu/menu-action-type.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuActionType = void 0;\r\nvar MenuActionType;\r\n(function (MenuActionType) {\r\n    MenuActionType[MenuActionType[\"CONTINUE\"] = 0] = \"CONTINUE\";\r\n    MenuActionType[MenuActionType[\"PVP\"] = 1] = \"PVP\";\r\n    MenuActionType[MenuActionType[\"PVC\"] = 2] = \"PVC\";\r\n    MenuActionType[MenuActionType[\"ToggleSound\"] = 3] = \"ToggleSound\";\r\n    MenuActionType[MenuActionType[\"GoToSubMenu\"] = 4] = \"GoToSubMenu\";\r\n    MenuActionType[MenuActionType[\"GoToPreviousMenu\"] = 5] = \"GoToPreviousMenu\";\r\n})(MenuActionType = exports.MenuActionType || (exports.MenuActionType = {}));\r\n\n\n//# sourceURL=webpack:///./src/menu/menu-action-type.ts?");

/***/ }),

/***/ "./src/menu/menu-button.ts":
/*!*********************************!*\
  !*** ./src/menu/menu-button.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuButton = void 0;\r\nconst game_config_1 = __webpack_require__(/*! ../game.config */ \"./src/game.config.ts\");\r\nconst mouse_1 = __webpack_require__(/*! ../input/mouse */ \"./src/input/mouse.ts\");\r\nconst canvas_1 = __webpack_require__(/*! ../canvas */ \"./src/canvas.ts\");\r\nconst assets_1 = __webpack_require__(/*! ../assets */ \"./src/assets.ts\");\r\n//------Configurations------//\r\nconst inputConfig = game_config_1.GameConfig.input;\r\nconst cursorConfig = game_config_1.GameConfig.cursor;\r\nconst sprites = game_config_1.GameConfig.sprites;\r\nclass MenuButton {\r\n    //------Constructor------//\r\n    constructor(_command, _value, _position, _spriteKey, _spriteOnHoverKey) {\r\n        this._command = _command;\r\n        this._value = _value;\r\n        this._position = _position;\r\n        this._spriteKey = _spriteKey;\r\n        this._spriteOnHoverKey = _spriteOnHoverKey;\r\n        this._activeSprite = assets_1.Assets.getSprite(sprites.paths[this._spriteKey]);\r\n    }\r\n    //------Properties------//\r\n    set hovered(value) {\r\n        this._hovered = value;\r\n    }\r\n    //------Private Methods------//\r\n    isInsideButton(position) {\r\n        return position.x > this._position.x &&\r\n            position.x < this._position.x + this._activeSprite.width &&\r\n            position.y > this._position.y &&\r\n            position.y < this._position.y + this._activeSprite.height;\r\n    }\r\n    //------Public Methods------//\r\n    handleInput() {\r\n        this.hovered = this.isInsideButton(mouse_1.Mouse.position);\r\n        this._activeSprite = this._hovered ?\r\n            assets_1.Assets.getSprite(sprites.paths[this._spriteOnHoverKey]) :\r\n            assets_1.Assets.getSprite(sprites.paths[this._spriteKey]);\r\n        if (this._hovered && mouse_1.Mouse.isPressed(inputConfig.mouseSelectButton)) {\r\n            canvas_1.Canvas2D.changeCursor(cursorConfig.default);\r\n            this._command.execute(this._value);\r\n        }\r\n    }\r\n    update() {\r\n        this.handleInput();\r\n    }\r\n    draw() {\r\n        if (this._hovered) {\r\n            canvas_1.Canvas2D.changeCursor(cursorConfig.button);\r\n        }\r\n        canvas_1.Canvas2D.drawImage(this._activeSprite, this._position);\r\n    }\r\n}\r\nexports.MenuButton = MenuButton;\r\n\n\n//# sourceURL=webpack:///./src/menu/menu-button.ts?");

/***/ }),

/***/ "./src/menu/menu-label.ts":
/*!********************************!*\
  !*** ./src/menu/menu-label.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuLabel = void 0;\r\nconst canvas_1 = __webpack_require__(/*! ../canvas */ \"./src/canvas.ts\");\r\nclass MenuLabel {\r\n    //------Constructor------//\r\n    constructor(_text, _position, _font, _color, _alignment) {\r\n        this._text = _text;\r\n        this._position = _position;\r\n        this._font = _font;\r\n        this._color = _color;\r\n        this._alignment = _alignment;\r\n    }\r\n    //------Public Methods------//\r\n    draw() {\r\n        canvas_1.Canvas2D.drawText(this._text, this._font, this._color, this._position, this._alignment);\r\n    }\r\n}\r\nexports.MenuLabel = MenuLabel;\r\n\n\n//# sourceURL=webpack:///./src/menu/menu-label.ts?");

/***/ }),

/***/ "./src/menu/menu.ts":
/*!**************************!*\
  !*** ./src/menu/menu.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nconst menu_button_1 = __webpack_require__(/*! ./menu-button */ \"./src/menu/menu-button.ts\");\r\nconst assets_1 = __webpack_require__(/*! ../assets */ \"./src/assets.ts\");\r\nconst canvas_1 = __webpack_require__(/*! ../canvas */ \"./src/canvas.ts\");\r\nconst game_config_1 = __webpack_require__(/*! ../game.config */ \"./src/game.config.ts\");\r\nconst menu_label_1 = __webpack_require__(/*! ./menu-label */ \"./src/menu/menu-label.ts\");\r\n//------Configurations------//\r\nconst cursorConfig = game_config_1.GameConfig.cursor;\r\nconst sprites = game_config_1.GameConfig.sprites;\r\nclass Menu {\r\n    //------Properties------//\r\n    set active(value) {\r\n        this._active = value;\r\n    }\r\n    get active() {\r\n        return this._active;\r\n    }\r\n    //------Public Methods------//\r\n    init(actionsMap, config) {\r\n        this._buttons = config.buttons.map((button) => {\r\n            return new menu_button_1.MenuButton(actionsMap.get(button.action), button.value, button.position, button.sprite, button.spriteOnHover);\r\n        });\r\n        this._labels = config.labels.map((label) => {\r\n            return new menu_label_1.MenuLabel(label.text, label.position, label.font, label.color, label.alignment);\r\n        });\r\n        this._subMenus = config.subMenus.map((menu) => {\r\n            const subMenu = new Menu();\r\n            subMenu.init(actionsMap, menu);\r\n            return subMenu;\r\n        });\r\n    }\r\n    getSubMenu(index) {\r\n        return this._subMenus[index];\r\n    }\r\n    update() {\r\n        if (this._active) {\r\n            this._buttons.forEach((button) => button.update());\r\n        }\r\n        this._subMenus.forEach((menu) => menu.update());\r\n    }\r\n    draw() {\r\n        if (this._active) {\r\n            canvas_1.Canvas2D.changeCursor(cursorConfig.default);\r\n            canvas_1.Canvas2D.drawImage(assets_1.Assets.getSprite(sprites.paths.menuBackground));\r\n            this._labels.forEach((label) => label.draw());\r\n            this._buttons.forEach((button) => button.draw());\r\n        }\r\n        this._subMenus.forEach((menu) => menu.draw());\r\n    }\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/menu/menu.ts?");

/***/ })

/******/ });