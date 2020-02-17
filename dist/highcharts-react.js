(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("highcharts"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "highcharts"], factory);
	else if(typeof exports === 'object')
		exports["HighchartsReact"] = factory(require("react"), require("highcharts"));
	else
		root["HighchartsReact"] = factory(root["React"], root["Highcharts"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


 // React currently throws a warning when using `useLayoutEffect` on the server.
// To get around it, we can conditionally `useEffect` on the server (no-op) and
// `useLayoutEffect` in the browser. We need `useLayoutEffect` to ensure the
// `Highcharts` ref is available in the layout phase. This makes it available
// in a parent component's `componentDidMount`.

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __WEBPACK_IMPORTED_MODULE_0_react__["useLayoutEffect"] : __WEBPACK_IMPORTED_MODULE_0_react__["useEffect"];
var HighchartsReact = Object(__WEBPACK_IMPORTED_MODULE_0_react__["forwardRef"])(function HighchartsReact(props, ref) {
  var containerRef = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])();
  var chartRef = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])();
  useIsomorphicLayoutEffect(function () {
    function createChart() {
      var H = props.highcharts || __WEBPACK_IMPORTED_MODULE_1_highcharts___default.a;
      var constructorType = props.constructorType || 'chart';

      if (!H) {
        console.warn('The "highcharts" property was not passed.');
      } else if (!H[constructorType]) {
        console.warn('The "constructorType" property is incorrect or some ' + 'required module is not imported.');
      } else if (!props.options) {
        console.warn('The "options" property was not passed.');
      } else {
        // Create a chart
        chartRef.current = H[constructorType](containerRef.current, props.options, props.callback ? props.callback : undefined);
      }
    }

    if (!chartRef.current) {
      createChart();
    } else {
      if (props.allowChartUpdate !== false) {
        if (!props.immutable && chartRef.current) {
          var _chartRef$current;

          (_chartRef$current = chartRef.current).update.apply(_chartRef$current, [props.options].concat(_toConsumableArray(props.updateArgs || [true, true])));
        } else {
          createChart();
        }
      }
    }
  });
  useIsomorphicLayoutEffect(function () {
    return function () {
      // Destroy chart only if unmounting.
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);
  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useImperativeHandle"])(ref, function () {
    return {
      get chart() {
        return chartRef.current;
      },

      container: containerRef
    };
  }, []); // Create container for the chart

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({}, props.containerProps, {
    ref: containerRef
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react__["memo"])(HighchartsReact));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=highcharts-react.js.map