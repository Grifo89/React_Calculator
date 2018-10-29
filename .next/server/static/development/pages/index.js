module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./componentes/Calculadora.js":
/*!************************************!*\
  !*** ./componentes/Calculadora.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/christian-salazar/Documents/Web-Developer/Github/React_Calculator/componentes/Calculadora.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Calculadora =
/*#__PURE__*/
function (_Component) {
  _inherits(Calculadora, _Component);

  function Calculadora() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Calculadora);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Calculadora)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      res: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDigit", function (digit) {
      var expresion = _this.state.res + digit;

      _this.setState({
        res: expresion
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ejecutar", function () {
      var resultados = eval(_this.state.res);

      _this.setState({
        res: resultados
      });
    });

    return _this;
  }

  _createClass(Calculadora, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2823304969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2823304969" + " " + 'resultado z-depth-3 light-blue lighten-2 white-text center-align',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, this.state.res || '0'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2823304969" + " " + 'calc-container  hoverable z-depth-2  col s12 m6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2823304969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].map(function (digit) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          key: digit,
          onClick: function onClick() {
            return _this2.onDigit(digit);
          },
          className: "jsx-2823304969" + " " + 'waves-effect waves-light btn-large',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, digit);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2823304969" + " " + 'operadores center-align',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, ['+', '-', '/', '*'].map(function (digit) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          key: digit,
          onClick: function onClick() {
            return _this2.onDigit(digit);
          },
          className: "jsx-2823304969" + " " + 'waves-effect waves-light amber darken-4 btn-large',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, digit);
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.setState({
            res: ''
          });
        },
        className: "jsx-2823304969" + " " + 'waves-effect waves-light amber darken-4 btn-large',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "C")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: this.ejecutar,
        className: "jsx-2823304969" + " " + 'waves-effect waves-light amber darken-4 btn-large enter',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "=")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2823304969",
        css: ".resultado.jsx-2823304969{width:300px;margin:0 auto;font-size:32px;margin-bottom:10px;border-radius:25px;}.calc-container.jsx-2823304969{width:20em;text-align:center;margin:0 auto;border:2px;border-radius:25px;}.calc-container.jsx-2823304969 a.jsx-2823304969{margin:5px;font-size:20px;border-radius:25px;}.operadores.jsx-2823304969{padding:10px;border:3px solid #ccc;margin-top:20px;border-radius:25px;}.enter.jsx-2823304969{width:250px;font-size:32px;border-radius:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NocmlzdGlhbi1zYWxhemFyL0RvY3VtZW50cy9XZWItRGV2ZWxvcGVyL0dpdGh1Yi9SZWFjdF9DYWxjdWxhdG9yL2NvbXBvbmVudGVzL0NhbGN1bGFkb3JhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEVSxBQUcwQixBQU9BLEFBUUEsQUFLRSxBQU1GLFdBbEJPLEFBUUgsQ0FmRCxBQTBCQyxDQU5NLGFBbkJOLEFBZUksQ0FXQSxFQW5CTCxNQWFDLE1BbkJJLEVBT1IsRUFRYixDQVdBLEtBTnFCLEdBWkEsTUFQQSxVQW9CckIsR0FYQSxNQVJBIiwiZmlsZSI6Ii9ob21lL2NocmlzdGlhbi1zYWxhemFyL0RvY3VtZW50cy9XZWItRGV2ZWxvcGVyL0dpdGh1Yi9SZWFjdF9DYWxjdWxhdG9yL2NvbXBvbmVudGVzL0NhbGN1bGFkb3JhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQ2FsY3VsYWRvcmEgZXh0ZW5kcyBDb21wb25lbnR7XG4gIHN0YXRlID0ge1xuICAgIHJlczonJ1xuICB9XG4gIG9uRGlnaXQgPSAoZGlnaXQpPT57XG4gICAgY29uc3QgZXhwcmVzaW9uID0gdGhpcy5zdGF0ZS5yZXMgKyBkaWdpdDtcbiAgICB0aGlzLnNldFN0YXRlKHtyZXM6IGV4cHJlc2lvbn0pO1xuICB9XG4gIC8vPGEgY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuLWxhcmdlJyBvbkNsaWNrPXsoKT0+IHRoaXMuc2V0U3RhdGUoe3JlczpcIjBcIn0pfT4wPC9hPlxuICBlamVjdXRhciA9ICgpID0+e1xuICAgIGNvbnN0IHJlc3VsdGFkb3MgPSBldmFsKHRoaXMuc3RhdGUucmVzKVxuICAgIHRoaXMuc2V0U3RhdGUoe3JlczpyZXN1bHRhZG9zfSlcbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzdWx0YWRvIHotZGVwdGgtMyBsaWdodC1ibHVlIGxpZ2h0ZW4tMiB3aGl0ZS10ZXh0IGNlbnRlci1hbGlnbic+XG4gICAgICAgICAge3RoaXMuc3RhdGUucmVzIHx8ICcwJ31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYWxjLWNvbnRhaW5lciAgaG92ZXJhYmxlIHotZGVwdGgtMiAgY29sIHMxMiBtNic+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgWycwJywnMScsJzInLCczJywnNCcsJzUnLCc2JywnNycsJzgnLCc5JywnLiddLm1hcChkaWdpdCA9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAga2V5PXtkaWdpdH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuLWxhcmdlJ1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHRoaXMub25EaWdpdChkaWdpdCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZGlnaXR9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcGVyYWRvcmVzIGNlbnRlci1hbGlnbic+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFsnKycsJy0nLCcvJywnKiddLm1hcChkaWdpdCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAga2V5PXtkaWdpdH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYW1iZXIgZGFya2VuLTQgYnRuLWxhcmdlJ1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHRoaXMub25EaWdpdChkaWdpdCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZGlnaXR9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYW1iZXIgZGFya2VuLTQgYnRuLWxhcmdlJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHRoaXMuc2V0U3RhdGUoe3JlczonJ30pfT5cbiAgICAgICAgICAgICAgQ1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBhbWJlciBkYXJrZW4tNCBidG4tbGFyZ2UgZW50ZXInXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmVqZWN1dGFyfT5cbiAgICAgICAgICAgID1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntcbiAgICAgICAgICBgXG4gICAgICAgICAgICAucmVzdWx0YWRve1xuICAgICAgICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYWxjLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgd2lkdGg6IDIwZW07XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIGJvcmRlcjogMnB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FsYy1jb250YWluZXIgYXtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vcGVyYWRvcmVze1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICBib3JkZXI6M3B4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5lbnRlcntcbiAgICAgICAgICAgICAgd2lkdGg6MjUwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhZG9yYTtcbiJdfQ== */\n/*@ sourceURL=/home/christian-salazar/Documents/Web-Developer/Github/React_Calculator/componentes/Calculadora.js */",
        __self: this
      }));
    }
  }]);

  return Calculadora;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Calculadora);

/***/ }),

/***/ "./componentes/comunes/Header.js":
/*!***************************************!*\
  !*** ./componentes/comunes/Header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/christian-salazar/Documents/Web-Developer/Github/React_Calculator/componentes/comunes/Header.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Mi Curso de Next.js y React"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _componentes_comunes_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componentes/comunes/Header */ "./componentes/comunes/Header.js");
/* harmony import */ var _componentes_Calculadora__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentes/Calculadora */ "./componentes/Calculadora.js");
var _jsxFileName = "/home/christian-salazar/Documents/Web-Developer/Github/React_Calculator/pages/index.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_componentes_comunes_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      fontSize: '3.3em'
    },
    className: "center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Calculadora"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_componentes_Calculadora__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map