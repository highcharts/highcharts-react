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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _highcharts = __webpack_require__(2);

var _highcharts2 = _interopRequireDefault(_highcharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// React currently throws a warning when using `useLayoutEffect` on the server.
// To get around it, we can conditionally `useEffect` on the server (no-op) and
// `useLayoutEffect` in the browser. We need `useLayoutEffect` to ensure the
// `Highcharts` ref is available in the layout phase. This makes it available
// in a parent component's `componentDidMount`.
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? _react.useLayoutEffect : _react.useEffect;

var HighchartsReact = (0, _react.forwardRef)(function HighchartsReact(props, ref) {
  var containerRef = (0, _react.useRef)();
  var chartRef = (0, _react.useRef)();
  var unmountingRef = (0, _react.useRef)(false);

  useIsomorphicLayoutEffect(function () {
    return function () {
      unmountingRef.current = true;
    };
  }, []);

  useIsomorphicLayoutEffect(function () {
    function createChart() {
      var H = props.highcharts || _highcharts2.default;
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

    return function () {
      // Destroy chart only if unmounting.
      if (chartRef.current && unmountingRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  });

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      get chart() {
        return chartRef.current;
      },
      container: containerRef
    };
  }, []);

  // Create container for the chart
  return _react2.default.createElement('div', _extends({}, props.containerProps, { ref: containerRef }));
});

exports.default = (0, _react.memo)(HighchartsReact);

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