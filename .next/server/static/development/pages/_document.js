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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ "next/document");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/pages/_document.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
In production the stylesheet is compiled to .next/static/style.css.
The file will be served from /_next/static/style.css
You could include it into the page using either next/head or a custom _document.js.
*/


var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyDocument).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", {
        prefix: "og: http://ogp.me/ns#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_2__["Head"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "image",
        property: "og:image",
        content: "https://aaronadler.com/static/og-aa-com.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "author",
        content: "Aaron Adler",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "keywords",
        content: "Aaron Adler, UX, design, HTML, CSS, JavaScript, React, Node, Sketch, Photoshop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "og:title",
        content: "Aaron Adler - UX/Dev",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "og:type",
        content: "website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "og:site_name",
        content: "Aaron Adler | UX Engineer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "og:description",
        content: "Aaron Adler | UX Engineer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "Description",
        content: "Aaron Adler | UX Engineer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "title",
        property: "og:title",
        content: "Aaron Adler - UX/Dev",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:url",
        content: "https://aaronadler.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "theme-color",
        content: "#000000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet noopener noreferrer",
        href: "https://use.fontawesome.com/releases/v5.5.0/css/all.css",
        integrity: "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), ">", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "manifest",
        href: "../manifest.json",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "https://aaronadler.com/static/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", {
        className: "jsx-161281474",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_2__["Main"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_2__["NextScript"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "161281474",
        css: "body.jsx-161281474{opacity:0;-webkit-animation:fadeIn ease-in 1;-moz-animation:fadeIn ease-in 1;-webkit-animation:fadeIn-jsx-161281474 ease-in 1;animation:fadeIn-jsx-161281474 ease-in 1;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:1s;-moz-animation-duration:1s;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:0.2s;-moz-animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-delay:0.2s;}@-webkit-keyframes fadeIn{from.jsx-161281474{opacity:0;}to.jsx-161281474{opacity:1;}}@-moz-keyframes fadeIn{from.jsx-161281474{opacity:0;}to.jsx-161281474{opacity:1;}}@-webkit-keyframes fadeIn-jsx-161281474{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-161281474{from{opacity:0;}to{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvcGFnZXMvX2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Db0IsQUFFYSxBQW9CRSxBQUVBLEFBSUEsQUFFQSxBQUlBLEFBRUEsVUFoQ3VCLEFBa0J0QixBQUVBLEFBSUEsQUFFQSxBQUlBLEFBRUEsbUNBOUJtQixnQ0FDTCwwRkFDVSxxQ0FFSCxrQ0FDTCxrRUFDQyw4QkFDSCwyQkFDTCxvREFDTyw2QkFDSCwwQkFDTCxrREFBQyIsImZpbGUiOiIvVXNlcnMvYWFyb25hZGxlci9Ecm9wYm94L0RFU0RFVl9EUklCQkIvd3d3LWFhLW5leHQ3L3BhZ2VzL19kb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5JbiBwcm9kdWN0aW9uIHRoZSBzdHlsZXNoZWV0IGlzIGNvbXBpbGVkIHRvIC5uZXh0L3N0YXRpYy9zdHlsZS5jc3MuXG5UaGUgZmlsZSB3aWxsIGJlIHNlcnZlZCBmcm9tIC9fbmV4dC9zdGF0aWMvc3R5bGUuY3NzXG5Zb3UgY291bGQgaW5jbHVkZSBpdCBpbnRvIHRoZSBwYWdlIHVzaW5nIGVpdGhlciBuZXh0L2hlYWQgb3IgYSBjdXN0b20gX2RvY3VtZW50LmpzLlxuKi9cblxuaW1wb3J0IERvY3VtZW50LCB7IEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aHRtbCBwcmVmaXg9XCJvZzogaHR0cDovL29ncC5tZS9ucyNcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImltYWdlXCIgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2Fhcm9uYWRsZXIuY29tL3N0YXRpYy9vZy1hYS1jb20uanBnXCIvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiQWFyb24gQWRsZXJcIi8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIkFhcm9uIEFkbGVyLCBVWCwgZGVzaWduLCBIVE1MLCBDU1MsIEphdmFTY3JpcHQsIFJlYWN0LCBOb2RlLCBTa2V0Y2gsIFBob3Rvc2hvcFwiLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PVwiQWFyb24gQWRsZXIgLSBVWC9EZXZcIi8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIkFhcm9uIEFkbGVyIHwgVVggRW5naW5lZXJcIi8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkFhcm9uIEFkbGVyIHwgVVggRW5naW5lZXJcIi8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIkRlc2NyaXB0aW9uXCIgY29udGVudD1cIkFhcm9uIEFkbGVyIHwgVVggRW5naW5lZXJcIj48L21ldGE+XG4gICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiQWFyb24gQWRsZXIgLSBVWC9EZXZcIi8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnVybCcgY29udGVudD0naHR0cHM6Ly9hYXJvbmFkbGVyLmNvbScvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwMDAwXCIvPlxuXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldCBub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS41LjAvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtQjRkSVlIS05CdDhCYzEycCtXWGNraHpjSUNvMHd0SkFvVThZWlRZNXFFMElkMUdTc2VUazZTK0wzQmxYZVZJVVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPj5cbiAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIuLi9tYW5pZmVzdC5qc29uXCIvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cImh0dHBzOi8vYWFyb25hZGxlci5jb20vc3RhdGljL2Zhdmljb24uaWNvXCIgLz5cblxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgb3BhY2l0eTowOyAgLyogbWFrZSB0aGluZ3MgaW52aXNpYmxlIHVwb24gc3RhcnQgKi9cbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7ICAvKiBjYWxsIG91ciBrZXlmcmFtZSBuYW1lZCBmYWRlSW4sIHVzZSBhbmltYXR0aW9uIGVhc2UtaW4gYW5kIHJlcGVhdCBpdCBvbmx5IDEgdGltZSAqL1xuICAgICAgICAgICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG5cbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzOyAgLyogdGhpcyBtYWtlcyBzdXJlIHRoYXQgYWZ0ZXIgYW5pbWF0aW9uIGlzIGRvbmUgd2UgcmVtYWluIGF0IHRoZSBsYXN0IGtleWZyYW1lIHZhbHVlIChvcGFjaXR5OiAxKSovXG4gICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcblxuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcblxuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBtYWtlIGtleWZyYW1lcyB0aGF0IHRlbGwgdGhlIHN0YXJ0IHN0YXRlIGFuZCB0aGUgZW5kIHN0YXRlIG9mIG91ciBvYmplY3QgKi9cbiAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG4gICAgICAgICAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/pages/_document.js */",
        __self: this
      })));
    }
  }]);

  return MyDocument;
}(next_document__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./pages/_document.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "next/document":
/*!********************************!*\
  !*** external "next/document" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/document");

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
//# sourceMappingURL=_document.js.map