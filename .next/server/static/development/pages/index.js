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

/***/ "./Components/Cards/Cards.js":
/*!***********************************!*\
  !*** ./Components/Cards/Cards.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/projects */ "./src/projects.js");
var _jsxFileName = "/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/Cards/Cards.js";

 // import Tilt from "react-tilt";

 // import './Cards.css';
// import '../../src/css/entry.css';

var uuidv1 = __webpack_require__(/*! uuid/v1 */ "uuid/v1"); // const Container = styled.div`
//   /* transform: scale(1); */
// `
// const Div = styled.div`
//   width: 430px;
//   transition: all .3s ease;
//   /* -moz-transition: scale .3s ease; */
//   /* -webkit-transition: scale .3s ease; */
//   &:hover{
//     transform:translateY(-10px);
//   }
// `;
// const Div2 = styled.div`
//   /* flex: 1; */
// `;
// const Completed = styled.p`
//   border: 1px solid blue;
//   margin-top: 2.7rem;
// `;
// const Img = styled.img`
//   border-top-right-radius: 4px;
//   border-top-left-radius: 4px;
// `
// --------- END STYLED-COMPONENTS ---------


var Cards = function Cards() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-10816166" + " " + "flex flex-wrap justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, _src_projects__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (project) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: uuidv1(),
      className: "jsx-10816166" + " " + 'card',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-10816166" + " " + "br2 ma2 bg-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: project.link,
      className: "jsx-10816166",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: project.image,
      alt: "alt",
      className: "jsx-10816166" + " " + "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-10816166" + " " + "textContainer pa4b lh-copy3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "title",
      className: "jsx-10816166" + " " + "f3c mt1 mb0 fw6 lh-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, project.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "desc",
      className: "jsx-10816166" + " " + "f6b blue7  mt3 mb4 space",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, project.desc), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "",
      className: "jsx-10816166" + " " + "projectRole f6 mt1 blue7 mb2 fw6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "My project role :"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      style: {
        listStyleType: 'circle'
      },
      className: "jsx-10816166" + " " + 'f6b blue7',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-10816166" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, project.role1 ? project.role1 : project.role), project.role2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-10816166" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, project.role2) : null, project.role3 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-10816166" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, project.role3) : null, project.role4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-10816166" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, project.role4) : null, project.role5 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-10816166" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, project.role5) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "",
      className: "jsx-10816166" + " " + "f6 mt4 mb0 blue7 fw6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "Project stack:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      first: "",
      className: "jsx-10816166" + " " + "mt0 tag bg-blue5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, project.tag1), project.tag2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-10816166" + " " + "mt0 tag bg-blue6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, project.tag2) : null, project.tag3 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-10816166" + " " + "mt0 tag bg-indigo7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, project.tag3) : null, project.tag4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-10816166" + " " + "mt0 tag bg-violet7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, project.tag4) : null, project.tag5 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-10816166" + " " + "mt0 tag bg-violet7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, project.tag5) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "",
      className: "jsx-10816166" + " " + "completed dib f7 blue7 ph3 pv2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "Completed: \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-10816166" + " " + "fw7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, project.year))))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "10816166",
    css: ".card.jsx-10816166{width:430px;-webkit-transition:all .3s ease;transition:all .3s ease;}.card.jsx-10816166:hover{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}.completed.jsx-10816166{border:1px solid blue;margin-top:2.7rem;}.image.jsx-10816166{border-top-right-radius:4px;border-top-left-radius:4px;}.tag.jsx-10816166{color:white;display:inline-block;padding:4px 12px;border-radius:6px;font-size:10px;margin-top:10px;}p.tag.jsx-10816166:not([first]){margin-left:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9DYXJkcy9DYXJkcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSWtCLEFBRWUsQUFLa0IsQUFHUixBQUlNLEFBS2hCLEFBUUksWUF4QlEsQUFpQkgsSUFPSixNQWhCQyxNQUlTLEtBTVYsT0FWRSxVQVdELEtBUFUsYUFWYyxBQWtCM0IsZUFDQyxhQWpCZSxHQWlCZCIsImZpbGUiOiIvVXNlcnMvYWFyb25hZGxlci9Ecm9wYm94L0RFU0RFVl9EUklCQkIvd3d3LWFhLW5leHQ3L0NvbXBvbmVudHMvQ2FyZHMvQ2FyZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgVGlsdCBmcm9tIFwicmVhY3QtdGlsdFwiO1xuaW1wb3J0IHByb2plY3RzIGZyb20gXCIuLi8uLi9zcmMvcHJvamVjdHNcIjtcbi8vIGltcG9ydCAnLi9DYXJkcy5jc3MnO1xuLy8gaW1wb3J0ICcuLi8uLi9zcmMvY3NzL2VudHJ5LmNzcyc7XG5jb25zdCB1dWlkdjEgPSByZXF1aXJlKFwidXVpZC92MVwiKTtcblxuLy8gY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbi8vICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxKTsgKi9cblxuLy8gYFxuLy8gY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcbi8vICAgd2lkdGg6IDQzMHB4O1xuLy8gICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG4vLyAgIC8qIC1tb3otdHJhbnNpdGlvbjogc2NhbGUgLjNzIGVhc2U7ICovXG4vLyAgIC8qIC13ZWJraXQtdHJhbnNpdGlvbjogc2NhbGUgLjNzIGVhc2U7ICovXG4vLyAgICY6aG92ZXJ7XG4vLyAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO1xuLy8gICB9XG4vLyBgO1xuXG4vLyBjb25zdCBEaXYyID0gc3R5bGVkLmRpdmBcbi8vICAgLyogZmxleDogMTsgKi9cbi8vIGA7XG5cbi8vIGNvbnN0IENvbXBsZXRlZCA9IHN0eWxlZC5wYFxuLy8gICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuLy8gICBtYXJnaW4tdG9wOiAyLjdyZW07XG5cbi8vIGA7XG5cblxuLy8gY29uc3QgSW1nID0gc3R5bGVkLmltZ2Bcbi8vICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbi8vICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuLy8gYFxuLy8gLS0tLS0tLS0tIEVORCBTVFlMRUQtQ09NUE9ORU5UUyAtLS0tLS0tLS1cblxuY29uc3QgQ2FyZHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICB7cHJvamVjdHMubWFwKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgICByZXR1cm4gKFxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJyBrZXk9e3V1aWR2MSgpfT5cbiAgICAgICAgICAgICAgey8qIDxUaWx0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiVGlsdFwiXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17eyByZXZlcnNlOiB0cnVlLCBtYXg6IDEyLCBzY2FsZTogMS4wMywgc3BlZWQ6IDkwMCB9fVxuICAgICAgICAgICAgICA+ICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicjIgbWEyIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtwcm9qZWN0Lmxpbms/cHJvamVjdC5saW5rOm51bGx9PiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17cHJvamVjdC5saW5rfT5cblxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIHNyYz17cHJvamVjdC5pbWFnZX0gYWx0PVwiYWx0XCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0Q29udGFpbmVyIHBhNGIgbGgtY29weTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwidGl0bGVcIiBjbGFzc05hbWU9XCJmM2MgbXQxIG1iMCBmdzYgbGgtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImRlc2NcIiBjbGFzc05hbWU9XCJmNmIgYmx1ZTcgIG10MyBtYjQgc3BhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJcIiBjbGFzc05hbWU9XCJwcm9qZWN0Um9sZSBmNiBtdDEgYmx1ZTcgbWIyIGZ3NlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBNeSBwcm9qZWN0IHJvbGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlOidjaXJjbGUnfX0gY2xhc3NOYW1lPSdmNmIgYmx1ZTcnPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbXQzJz57cHJvamVjdC5yb2xlMT9wcm9qZWN0LnJvbGUxOnByb2plY3Qucm9sZX08L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnJvbGUyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtdDMnPntwcm9qZWN0LnJvbGUyfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnJvbGUzP1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtdDMnPntwcm9qZWN0LnJvbGUzfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnJvbGU0P1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtdDMnPntwcm9qZWN0LnJvbGU0fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3Qucm9sZTU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J210Myc+e3Byb2plY3Qucm9sZTV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIlwiIGNsYXNzTmFtZT1cImY2IG10NCBtYjAgYmx1ZTcgZnc2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3Qgc3RhY2s6XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGZpcnN0PVwiXCIgY2xhc3NOYW1lPVwibXQwIHRhZyBiZy1ibHVlNVwiPntwcm9qZWN0LnRhZzF9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50YWcyP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQwIHRhZyBiZy1ibHVlNlwiPntwcm9qZWN0LnRhZzJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRhZzM/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdDAgdGFnIGJnLWluZGlnbzdcIj57cHJvamVjdC50YWczfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50YWc0P1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQwIHRhZyBiZy12aW9sZXQ3XCI+e3Byb2plY3QudGFnNH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGFnNT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10MCB0YWcgYmctdmlvbGV0N1wiPntwcm9qZWN0LnRhZzV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiXCIgY2xhc3NOYW1lPVwiY29tcGxldGVkIGRpYiBmNyBibHVlNyBwaDMgcHYyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlZDogJm5ic3A7PHNwYW4gY2xhc3NOYW1lPVwiZnc3XCI+e3Byb2plY3QueWVhcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiA8L1RpbHQ+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuXG4gICAgICA8c3R5bGUganN4PntgXG5cbi5jYXJke1xuICB3aWR0aDogNDMwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbiAgLyogLW1vei10cmFuc2l0aW9uOiBzY2FsZSAuM3MgZWFzZTsgKi9cbiAgLyogLXdlYmtpdC10cmFuc2l0aW9uOiBzY2FsZSAuM3MgZWFzZTsgKi9cbiAgJjpob3ZlcntcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7XG4gIH1cbn1cblxuLmNvbXBsZXRlZHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgbWFyZ2luLXRvcDogMi43cmVtO1xufVxuXG4uaW1hZ2V7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbn0gICAgIFxuICAgICAgXG4udGFne1xuICAvKiBiYWNrZ3JvdW5kOiBibHVlOyAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tdG9wOjEwcHg7XG59XG5cblxuXG5wLnRhZzpub3QoW2ZpcnN0XSl7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbnAucHJvamVjdFJvbGV7XG4gIC8qIGxpbmUtaGVpZ2h0OiAxLjM7ICovXG59XG4gIFxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkcztcbiJdfQ== */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/Cards/Cards.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ }),

/***/ "./Components/Cards/index.js":
/*!***********************************!*\
  !*** ./Components/Cards/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cards */ "./Components/Cards/Cards.js");

/* harmony default export */ __webpack_exports__["default"] = (_Cards__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./Components/CoreTools/CoreTools.js":
/*!*******************************************!*\
  !*** ./Components/CoreTools/CoreTools.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/CoreTools/CoreTools.js";



var CoreTools = function CoreTools() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "coretools",
    className: "jsx-794909562" + " " + "flex container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-794909562" + " " + "justify-center coreskills-box lightest-blue ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-794909562" + " " + "coreskills-box__core-col blue0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-794909562" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Core Tools"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-794909562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Software and libraries I often work with in projects."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-794909562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fas fa-pencil-alt rainbow1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), "Sketch"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fab fas fa-code rainbow2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), "HTML5"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-css3 rainbow3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), "CSS3"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-th-large rainbow4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), "CSS Grid"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-bars rainbow5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), "CSS Flexbox"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fab fa-sass rainbow6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), "", "Sass/scss"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-play-circle rainbow7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), "After Effects"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-camera rainbow8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), "Photoshop"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-bezier-curve rainbow8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), "Illustrator"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fab fa-js-square rainbow9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), "Javascript ES6"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fab fa-react rainbow9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), "React"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-code rainbow9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), "NextJS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "\uD83D\uDD25"), "Firebase"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    role: "img",
    "aria-label": "skill",
    className: "jsx-794909562" + " " + "f4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "\uD83D\uDC85 "), " \xA0Styled-Components"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-th-large rainbow9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })), " ", "Bootstrap 4"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-bolt rainbow10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })), " ", "Tachyons"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-magic rainbow11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), " ", "jQuery"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-video rainbow12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  })), " ", "Greensock/GSAP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-window-maximize rainbow12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  })), " ", "SVG"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-laptop-code rainbow13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  })), " ", "Git/GitHub"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-cube rainbow13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  })), " ", "Blender3D"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-facebook-square rainbow14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  })), " ", "Facebook AR Studio"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-794909562" + " " + "coreskills-box__core-col blue0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-794909562" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "Secondary Tools"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-794909562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "Software I work with, and I am actively learning."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-794909562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-terminal rainbow11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  })), " ", "NodeJS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-random rainbow12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  })), " ", "Express"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-file-code-o rainbow13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  })), " ", "MongoDB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-briefcase rainbow14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  })), " ", "PostCSS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-code-fork rainbow14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  })), " ", "Gulp"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-language rainbow15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  })), " ", "Babel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-cube rainbow17",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  })), " ", "Webpack")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "794909562",
    css: ".container.jsx-794909562{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.coreskills-box.jsx-794909562{border:1px solid #7db9e5;margin:100px 0 0;text-align:center;padding-bottom:20px;width:70%;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:90%;text-align:left;padding-bottom:50px;}.coreskills-box__core-col.jsx-794909562{line-height:2rem;width:260px;margin:40px 30px;font-size:.9rem;}.coreskills-box__core-col.jsx-794909562 p.jsx-794909562{margin-bottom:30px;font-size:.9rem;line-height:2;}h1.jsx-794909562{font-size:1.5rem;}.skill.jsx-794909562{line-height:2;list-style:none;}ul.jsx-794909562{padding:0;list-style-type:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9Db3JlVG9vbHMvQ29yZVRvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlSYyxBQUV1QixBQU1LLEFBZ0JSLEFBTUUsQUFNRixBQUdILEFBS0osVUFDVyxJQUxMLEdBZkosQUFXTSxFQUpGLENBN0JILEtBTUksSUFpQkEsQ0FjQSxDQUtLLElBWlIsT0F2QkksSUFpQkYsR0FNRCxXQXRCSyxFQWdCSCxrQkFmUCxVQUNVLElBVEMsZ0JBVVIsS0FUVSxxRUFVSixtQkFDSixXQVhTLDhDQVlILHFCQUNFLG1HQUNiLFVBQ00sZ0JBQ0ksb0JBQUMiLCJmaWxlIjoiL1VzZXJzL2Fhcm9uYWRsZXIvRHJvcGJveC9ERVNERVZfRFJJQkJCL3d3dy1hYS1uZXh0Ny9Db21wb25lbnRzL0NvcmVUb29scy9Db3JlVG9vbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgQ29yZVRvb2xzID0gKCkgPT4gKFxuICA8ZGl2IGlkPVwiY29yZXRvb2xzXCIgY2xhc3NOYW1lPVwiZmxleCBjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIGNvcmVza2lsbHMtYm94IGxpZ2h0ZXN0LWJsdWUgXCI+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Jlc2tpbGxzLWJveF9fY29yZS1jb2wgYmx1ZTBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIlwiPkNvcmUgVG9vbHM8L2gxPlxuICAgICAgICA8cD5Tb2Z0d2FyZSBhbmQgbGlicmFyaWVzIEkgb2Z0ZW4gd29yayB3aXRoIGluIHByb2plY3RzLjwvcD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmFzIGZhLXBlbmNpbC1hbHQgcmFpbmJvdzFcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgU2tldGNoPC9saT5cblxuXG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYXMgZmEtY29kZSByYWluYm93MlwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBIVE1MNTwvbGk+XG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY3NzMyByYWluYm93M1wiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBDU1MzPC9saT5cblxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aC1sYXJnZSByYWluYm93NFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBDU1MgR3JpZDwvbGk+XG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFycyByYWluYm93NVwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBDU1MgRmxleGJveDwvbGk+XG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtcGhvdG8tbyByYWluYm93NlwiIC8+ICovfVxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtc2FzcyByYWluYm93NlwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj57XCJcIn1TYXNzL3Njc3M8L2xpPlxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wbGF5LWNpcmNsZSByYWluYm93N1wiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBBZnRlciBFZmZlY3RzPC9saT5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FtZXJhIHJhaW5ib3c4XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIFBob3Rvc2hvcDwvbGk+XG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmV6aWVyLWN1cnZlIHJhaW5ib3c4XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIElsbHVzdHJhdG9yPC9saT5cblxuXG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1qcy1zcXVhcmUgcmFpbmJvdzlcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBKYXZhc2NyaXB0IEVTNlxuICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1yZWFjdCByYWluYm93OVwiIC8+ICovfVxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtcmVhY3QgcmFpbmJvdzlcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBSZWFjdFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgXG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2RlIHJhaW5ib3c5XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIE5leHRKU1xuICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29kZSByYWluYm93OVwiIC8+ICovfVxuICAgICAgICAgICAg8J+UpSBcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIEZpcmViYXNlXG4gICAgICAgICAgPC9saT5cblxuXG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIHJvbGU9J2ltZycgYXJpYS1sYWJlbD1cInNraWxsXCIgY2xhc3NOYW1lPVwiZjRcIj7wn5KFIDwvc3Bhbj4gJm5ic3A7U3R5bGVkLUNvbXBvbmVudHNcbiAgICAgICAgICA8L2xpPlxuXG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRoLWxhcmdlIHJhaW5ib3c5XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBCb290c3RyYXAgNDwvbGk+XG5cbiAgICAgICBcblxuICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxhbmd1YWdlIHJhaW5ib3cxM1wiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgQmFiZWw8L2xpPiAqL31cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYm9sdCByYWluYm93MTBcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIFRhY2h5b25zPC9saT5cblxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1tYWdpYyByYWluYm93MTFcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIGpRdWVyeTwvbGk+XG4gICAgICAgICAgICBcbiAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1sYXB0b3AgcmFpbmJvdzE2XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBJQk0gQ29sb3IgTGlicmFyeTwvbGk+ICovfVxuXG5cbiAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hZGp1c3QgcmFpbmJvdzE3XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBQYWx4PC9saT4gKi99XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdmlkZW8gcmFpbmJvdzEyXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBHcmVlbnNvY2svR1NBUDwvbGk+XG5cblxuICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpcnN0LW9yZGVyIHJhaW5ib3cxN1wiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgU2VtYW50aWNVSTwvbGk+ICovfVxuXG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXdpbmRvdy1tYXhpbWl6ZSByYWluYm93MTJcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIFNWRzwvbGk+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbGFwdG9wLWNvZGUgcmFpbmJvdzEzXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBHaXQvR2l0SHViPC9saT5cblxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jdWJlIHJhaW5ib3cxM1wiIC8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIEJsZW5kZXIzRDwvbGk+XG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmFjZWJvb2stc3F1YXJlIHJhaW5ib3cxNFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgRmFjZWJvb2sgQVIgU3R1ZGlvPC9saT5cblxuey8qICAgICAgICAgICAgIFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29sdW1ucyByYWluYm93MTRcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIEluRGVzaWduPC9saT4gKi99XG5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG5cblxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29yZXNraWxscy1ib3hfX2NvcmUtY29sIGJsdWUwXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJcIj5TZWNvbmRhcnkgVG9vbHM8L2gxPlxuICAgICAgICA8cD5Tb2Z0d2FyZSBJIHdvcmsgd2l0aCwgYW5kIEkgYW0gYWN0aXZlbHkgbGVhcm5pbmcuPC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10ZXJtaW5hbCByYWluYm93MTFcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIE5vZGVKU1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1yYW5kb20gcmFpbmJvdzEyXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBFeHByZXNzXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtY29kZS1vIHJhaW5ib3cxM1wiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgTW9uZ29EQlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1icmllZmNhc2UgcmFpbmJvdzE0XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBQb3N0Q1NTXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZGUtZm9yayByYWluYm93MTRcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIEd1bHBcbiAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3BhY2Utc2h1dHRsZSByYWluYm93MTZcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIE1ldGVvclxuICAgICAgICAgIDwvbGk+ICovfVxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1sYW5ndWFnZSByYWluYm93MTVcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIEJhYmVsXG4gICAgICAgICAgPC9saT5cblxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jdWJlIHJhaW5ib3cxN1wiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgV2VicGFja1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICA8L2Rpdj5cblxuXG4gIDxzdHlsZSBqc3g+e2BcbiAgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29yZXNraWxscy1ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2RiOWU1O1xuICBtYXJnaW46IDEwMHB4IDAgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHhcbn1cblxuXG5cbi5jb3Jlc2tpbGxzLWJveF9fY29yZS1jb2wge1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDI2MHB4O1xuICBtYXJnaW46IDQwcHggMzBweDtcbiAgZm9udC1zaXplOiAuOXJlbVxufVxuXG5cblxuXG4uY29yZXNraWxscy1ib3hfX2NvcmUtY29sIHAge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAvKiBmb250LXNpemU6IDFyZW0gKi9cbiAgICBmb250LXNpemU6IC45cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG5cblxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtXG59XG5cblxuaSB7XG4gLy8gY29sb3I6ICMxYjJmZTk7XG59XG4uc2tpbGwge1xuICBsaW5lLWhlaWdodDogMjtcbiAgbGlzdC1zdHlsZTogbm9uZVxufVxuXG51bHtcbiAgLyogbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDsgKi9cbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuXG59XG5cblxuICBgfTwvc3R5bGU+ICBcbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb3JlVG9vbHM7XG4iXX0= */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/CoreTools/CoreTools.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CoreTools);

/***/ }),

/***/ "./Components/CoreTools/index.js":
/*!***************************************!*\
  !*** ./Components/CoreTools/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CoreTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoreTools */ "./Components/CoreTools/CoreTools.js");

/* harmony default export */ __webpack_exports__["default"] = (_CoreTools__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./Components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./Components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/Footer/Footer.js";



// import React from 'react';
// import './Footer.css';
// import '../../src/css/entry.css';
var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-2980524257" + " " + "center lightest-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "contact",
    className: "jsx-2980524257" + " " + "container container--martop70",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2980524257" + " " + 'f3',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Thank You")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2980524257" + " " + "container container--marbot80 container--pad10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:aaron.adler@gmail.com",
    className: "jsx-2980524257",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2980524257" + " " + "grow lightest-blue f5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    "aria-hidden": "true",
    className: "jsx-2980524257" + " " + "fa fa-envelope-o blue5 mr2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), " aaron.adler(at)gmail(.com)"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2980524257" + " " + 'f7 flex justify-center pt5 pb5',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2980524257" + " " + 'w-70 tc lh-copy2',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Site built with ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2980524257" + " " + "teal6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "NextJS, React, Sass"), " and ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2980524257" + " " + "cyan5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Flexbox"), ".")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2980524257",
    css: "footer.jsx-2980524257{-webkit-letter-spacing:.08rem;-moz-letter-spacing:.08rem;-ms-letter-spacing:.08rem;letter-spacing:.08rem;text-align:center;}.container--parag.jsx-2980524257{max-width:478px;margin:auto;}.container--contact.jsx-2980524257{max-width:300px;margin:auto;}.container--left.jsx-2980524257{-ms-flex-pack:start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.container--marbot30.jsx-2980524257{margin-bottom:30px;}.container--marginbot40.jsx-2980524257{margin-bottom:40px;}.container--marbot10.jsx-2980524257{margin-bottom:10px;}.container--marbot20.jsx-2980524257{margin-bottom:20px;}.container--marbot60.jsx-2980524257{margin-bottom:60px;}.container--marbot80.jsx-2980524257{margin-bottom:80px;}.container--martop20.jsx-2980524257{margin-top:20px;}.container--martop30.jsx-2980524257{margin-top:30px;}.container--martop40.jsx-2980524257{margin-top:40px;}.container--martop50.jsx-2980524257{margin-top:50px;}.container--martop70.jsx-2980524257{margin-top:70px;}.container--pad10.jsx-2980524257{padding:10px 0;}#email.jsx-2980524257{margin-bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCYyxBQUV5QixBQVFOLEFBSUEsQUFJSSxBQUlELEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdILEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHRCxBQUdDLGVBSEEsQ0E1Q0osQUFJQSxBQXlCSyxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBTUEsR0FwQ0csQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLENBbEJPLFFBUmQsQUFJQSw2RUFaSyxrQkFBQyxFQWdCUyIsImZpbGUiOiIvVXNlcnMvYWFyb25hZGxlci9Ecm9wYm94L0RFU0RFVl9EUklCQkIvd3d3LWFhLW5leHQ3L0NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgJy4vRm9vdGVyLmNzcyc7XG4vLyBpbXBvcnQgJy4uLy4uL3NyYy9jc3MvZW50cnkuY3NzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Zm9vdGVyIGNsYXNzTmFtZT1cImNlbnRlciBsaWdodGVzdC1ibHVlXCI+XG5cbiAgICB7LyogPCEtLSBUSEFOSyBZT1UgLS0+ICovfVxuICAgIDxkaXYgaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci0tbWFydG9wNzBcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZjMnPlxuICAgICAgICBUaGFuayBZb3VcbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cblxuICAgIHsvKiA8IS0tIENPTlRBQ1QgLyBFTUFJTCAtLT4gKi99XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLS1tYXJib3Q4MCBjb250YWluZXItLXBhZDEwXCI+XG4gICAgICA8YSBocmVmPVwibWFpbHRvOmFhcm9uLmFkbGVyQGdtYWlsLmNvbVwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJncm93IGxpZ2h0ZXN0LWJsdWUgZjVcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZS1vIGJsdWU1IG1yMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gYWFyb24uYWRsZXIoYXQpZ21haWwoLmNvbSlcbiAgICAgICAgPC9wPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nZjcgZmxleCBqdXN0aWZ5LWNlbnRlciBwdDUgcGI1Jz5cbiAgICAgIDxwIGNsYXNzTmFtZT0ndy03MCB0YyBsaC1jb3B5Mic+U2l0ZSBidWlsdCB3aXRoIDxzcGFuIGNsYXNzTmFtZT1cInRlYWw2XCI+TmV4dEpTLCBSZWFjdCwgU2Fzczwvc3Bhbj4gYW5kIDxzcGFuIGNsYXNzTmFtZT1cImN5YW41XCI+RmxleGJveDwvc3Bhbj4uPC9wPlxuICAgIDwvZGl2PlxuXG5cbiAgPHN0eWxlIGpzeD57YFxuICAgIGZvb3RlcntcbiAgICAgIGxldHRlci1zcGFjaW5nOiAuMDhyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB9XG5cbiAgICAvKiAuY29udGFpbmVyIHAge1xuICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDIuOXJlbVxuICAgIH0gKi9cbiAgICAuY29udGFpbmVyLS1wYXJhZyB7XG4gICAgICBtYXgtd2lkdGg6IDQ3OHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAuY29udGFpbmVyLS1jb250YWN0IHtcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICBtYXJnaW46IGF1dG9cbiAgICB9XG4gICAgLmNvbnRhaW5lci0tbGVmdCB7XG4gICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydFxuICAgIH1cbiAgICAuY29udGFpbmVyLS1tYXJib3QzMCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4XG4gICAgfVxuICAgIC5jb250YWluZXItLW1hcmdpbmJvdDQwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHhcbiAgICB9XG4gICAgLmNvbnRhaW5lci0tbWFyYm90MTAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICAgIH1cbiAgICAuY29udGFpbmVyLS1tYXJib3QyMCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gICAgfVxuICAgIC5jb250YWluZXItLW1hcmJvdDYwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDYwcHhcbiAgICB9XG4gICAgLmNvbnRhaW5lci0tbWFyYm90ODAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogODBweFxuICAgIH1cbiAgICAuY29udGFpbmVyLS1tYXJ0b3AyMCB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4XG4gICAgfVxuICAgIC5jb250YWluZXItLW1hcnRvcDMwIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHhcbiAgICB9XG4gICAgLmNvbnRhaW5lci0tbWFydG9wNDAge1xuICAgICAgbWFyZ2luLXRvcDogNDBweFxuICAgIH1cbiAgICAuY29udGFpbmVyLS1tYXJ0b3A1MCB7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4XG4gICAgfVxuICAgIC5jb250YWluZXItLW1hcnRvcDcwIHtcbiAgICAgIG1hcmdpbi10b3A6IDcwcHhcbiAgICB9XG4gICAgLmNvbnRhaW5lci0tcGFkMTAge1xuICAgICAgcGFkZGluZzogMTBweCAwXG4gICAgfVxuICAgICNlbWFpbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwXG4gICAgfVxuICBcbiAgYH08L3N0eWxlPlxuXG4gIDwvZm9vdGVyPlxuXG4pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/Footer/Footer.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./Components/Footer/index.js":
/*!************************************!*\
  !*** ./Components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./Components/Footer/Footer.js");

/* harmony default export */ __webpack_exports__["default"] = (_Footer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./Components/TopNav/TopNav.js":
/*!*************************************!*\
  !*** ./Components/TopNav/TopNav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scrollchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scrollchor */ "react-scrollchor");
/* harmony import */ var react_scrollchor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scrollchor__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/TopNav/TopNav.js";


// import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';
// import moduleName from '@fortawesome/fontawesome-free'
 // import jQuery from 'jquery';
// import '../easings';      
// const Container = styled.div`
//     position: fixed;
//     top: 0;
//     right: 0;
//     z-index:99;
// `
// const Icon = styled.i`
//   position: relative;
//   bottom:2px;
//   margin-right: 6px;
// `

var easeInOutQuart = function easeInOutQuart(x, t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
};

var TopNav = function TopNav() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1557708495" + " " + "container white flex items-center justify-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scrollchor__WEBPACK_IMPORTED_MODULE_2___default.a, {
    animate: {
      offset: 50,
      duration: 1400,
      easing: easeInOutQuart
    },
    to: "#coretools",
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1557708495" + " " + "flex items-center icon grow2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1557708495" + " " + "icon fa fa-suitcase blue5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1557708495" + " " + "mr4 text-shad-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Tools"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scrollchor__WEBPACK_IMPORTED_MODULE_2___default.a, {
    animate: {
      offset: -350,
      duration: 1400,
      easing: easeInOutQuart
    },
    to: "#contact",
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1557708495" + " " + "flex items-center icon grow2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1557708495" + " " + "icon fa fa-envelope-o blue5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1557708495" + " " + "mr4 text-shad-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1557708495",
    css: ".container.jsx-1557708495{position:fixed;top:0;right:0;z-index:99;}.icon.jsx-1557708495{position:relative;bottom:2px;margin-right:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9Ub3BOYXYvVG9wTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDYyxBQUVrQixBQU1HLGVBTFosR0FNSyxHQUxILFFBQ0csQUFLTSxXQUxMLE1BS00iLCJmaWxlIjoiL1VzZXJzL2Fhcm9uYWRsZXIvRHJvcGJveC9ERVNERVZfRFJJQkJCL3d3dy1hYS1uZXh0Ny9Db21wb25lbnRzL1RvcE5hdi9Ub3BOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0ICdmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJztcbi8vIGltcG9ydCBtb2R1bGVOYW1lIGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlJ1xuaW1wb3J0IFNjcm9sbGNob3IgZnJvbSAncmVhY3Qtc2Nyb2xsY2hvcic7XG4vLyBpbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG4vLyBpbXBvcnQgJy4uL2Vhc2luZ3MnOyAgICAgIFxuXG4vLyBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgICB0b3A6IDA7XG4vLyAgICAgcmlnaHQ6IDA7XG4vLyAgICAgei1pbmRleDo5OTtcbi8vIGBcblxuLy8gY29uc3QgSWNvbiA9IHN0eWxlZC5pYFxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIGJvdHRvbToycHg7XG4vLyAgIG1hcmdpbi1yaWdodDogNnB4O1xuLy8gYFxuXG5jb25zdCBlYXNlSW5PdXRRdWFydCA9IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG4gIGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQqdCArIGI7XG4gIHJldHVybiAtYy8yICogKCh0LT0yKSp0KnQqdCAtIDIpICsgYjtcbn1cblxuXG5cbmNvbnN0IFRvcE5hdiA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj5cblxuXG4gICAgICA8U2Nyb2xsY2hvciAgYW5pbWF0ZT17e29mZnNldDogNTAsIGR1cmF0aW9uOiAxNDAwLCBlYXNpbmc6IGVhc2VJbk91dFF1YXJ0IH19IHRvPVwiI2NvcmV0b29sc1wiIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGljb24gZ3JvdzJcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBmYSBmYS1zdWl0Y2FzZSBibHVlNVwiIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yNCB0ZXh0LXNoYWQtMVwiPlRvb2xzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2Nyb2xsY2hvcj5cblxuICAgICAgPFNjcm9sbGNob3IgIGFuaW1hdGU9e3tvZmZzZXQ6IC0zNTAsIGR1cmF0aW9uOiAxNDAwLCBlYXNpbmc6IGVhc2VJbk91dFF1YXJ0IH19IHRvPVwiI2NvbnRhY3RcIiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBpY29uIGdyb3cyXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBmYSBmYS1lbnZlbG9wZS1vIGJsdWU1XCIgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtcjQgdGV4dC1zaGFkLTFcIj5Db250YWN0PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2Nyb2xsY2hvcj5cblxuICA8c3R5bGUganN4PntgXG4gICAgLmNvbnRhaW5lcntcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgei1pbmRleDogOTk7XG4gICAgfVxuICAgIC5pY29ue1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206MnB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICB9XG4gIGB9PC9zdHlsZT5cblxuICA8L2Rpdj5cbik7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7Il19 */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/TopNav/TopNav.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TopNav);

/***/ }),

/***/ "./Components/TopNav/index.js":
/*!************************************!*\
  !*** ./Components/TopNav/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNav */ "./Components/TopNav/TopNav.js");

/* harmony default export */ __webpack_exports__["default"] = (_TopNav__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./Components/WelcomeBio/WelcomeBio.js":
/*!*********************************************!*\
  !*** ./Components/WelcomeBio/WelcomeBio.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/WelcomeBio/WelcomeBio.js";

 // import styles from "./WelcomeBio.css";
// const Paragraph = styled.p`
//   font-weight:300;
// `

var WelcomeBio = function WelcomeBio() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2609408294" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "topSection",
    className: "jsx-2609408294" + " " + "flex flex-column center white mt6 mb5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    id: "profile-pic",
    src: "https://ww2.aaronadler.com/images/profile-pic.jpg",
    alt: "alt",
    className: "jsx-2609408294" + " " + "grow2 center mb3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2609408294" + " " + "f2c tc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Aaron Adler"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2609408294" + " " + 'flex justify-center mb4',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://dribbble.com/aarnadlr",
    className: "jsx-2609408294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "dribbb",
    src: "../../static/icons/AA-dribbble-icon.png",
    className: "jsx-2609408294" + " " + 'icon grow-large-2',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.toptal.com/designers/resume/aaron-adler",
    className: "jsx-2609408294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "toptal",
    src: "../../static/icons/toptal.gif",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://github.com/aarnadlr",
    className: "jsx-2609408294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "github",
    src: "../../static/icons/github.gif",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.linkedin.com/in/aaronadler/",
    className: "jsx-2609408294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "linkedin",
    src: "../../static/icons/linkedin.png",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://codepen.io/aaronadler/",
    className: "jsx-2609408294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "codepen",
    src: "../../static/icons/codepen.png",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://medium.com/@aaronadler",
    className: "jsx-2609408294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "medium",
    src: "../../static/icons/medium.png",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.producthunt.com/@aarnadlr",
    className: "jsx-2609408294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../../static/icons/prodhunt.png",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://workingnotworking.com/aarn",
    className: "jsx-2609408294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../../static/icons/wnw.png",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://twitter.com/aaronadler",
    className: "jsx-2609408294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../../static/icons/twitter.png",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2609408294" + " " + "paragraph f5 lh-copy4 mh3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Hi there. I\u2019m a UX designer & Front-end developer in NYC. I\u2019ve worked on projects for Facebook, Google, IBM, R/GA, Droga5 and others. My work has been recognized by Cannes, AICP, the Art Directors Club, Clios, Archive, Adweek, and the New York Times. My focus is on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2609408294" + " " + "bg-green8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\xA0UX design\xA0"), " , ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2609408294" + " " + "bg-teal8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\xA0CSS3\xA0"), " , ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2609408294" + " " + "bg-cyan8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\xA0JavaScript ES6 + React\xA0"), " and ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2609408294" + " " + "bg-blue6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\xA0coded animation\xA0"), ".")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2609408294",
    css: ".icon.jsx-2609408294{width:20px;height:20px;border-radius:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9XZWxjb21lQmlvL1dlbGNvbWVCaW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENjLEFBRWMsV0FDQyxZQUNNLGtCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9XZWxjb21lQmlvL1dlbGNvbWVCaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL1dlbGNvbWVCaW8uY3NzXCI7XG5cbi8vIGNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5wYFxuLy8gICBmb250LXdlaWdodDozMDA7XG4vLyBgXG5cbmNvbnN0IFdlbGNvbWVCaW8gPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG5cbiAgICA8ZGl2IGlkPVwidG9wU2VjdGlvblwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2x1bW4gY2VudGVyIHdoaXRlIG10NiBtYjVcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgaWQ9XCJwcm9maWxlLXBpY1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImdyb3cyIGNlbnRlciBtYjNcIlxuICAgICAgICBzcmM9XCJodHRwczovL3d3Mi5hYXJvbmFkbGVyLmNvbS9pbWFnZXMvcHJvZmlsZS1waWMuanBnXCJcbiAgICAgICAgYWx0PSdhbHQnXG4gICAgICAvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZjJjIHRjXCI+QWFyb24gQWRsZXI8L3A+XG5cblxuICAgICAgey8qIFNPQ0lBTCBJQ09OUyBVTkRFUiBOQU1FICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbWI0Jz5cbiAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9kcmliYmJsZS5jb20vYWFybmFkbHJcIj48aW1nIGFsdD0nZHJpYmJiJyBjbGFzc05hbWU9J2ljb24gZ3Jvdy1sYXJnZS0yJyBzcmM9Jy4uLy4uL3N0YXRpYy9pY29ucy9BQS1kcmliYmJsZS1pY29uLnBuZycgLz48L2E+XG4gICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vd3d3LnRvcHRhbC5jb20vZGVzaWduZXJzL3Jlc3VtZS9hYXJvbi1hZGxlclwiPjxpbWcgYWx0PSd0b3B0YWwnIGNsYXNzTmFtZT0naWNvbiBncm93LWxhcmdlLTIgbWwzJyBzcmM9Jy4uLy4uL3N0YXRpYy9pY29ucy90b3B0YWwuZ2lmJyAvPjwvYT5cbiAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Fhcm5hZGxyXCI+PGltZyBhbHQ9J2dpdGh1YicgY2xhc3NOYW1lPSdpY29uIGdyb3ctbGFyZ2UtMiBtbDMnIHNyYz0nLi4vLi4vc3RhdGljL2ljb25zL2dpdGh1Yi5naWYnIC8+PC9hPlxuICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWFyb25hZGxlci9cIj48aW1nIGFsdD0nbGlua2VkaW4nIGNsYXNzTmFtZT0naWNvbiBncm93LWxhcmdlLTIgbWwzJyBzcmM9Jy4uLy4uL3N0YXRpYy9pY29ucy9saW5rZWRpbi5wbmcnIC8+PC9hPlxuICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vYWFyb25hZGxlci9cIj48aW1nIGFsdD0nY29kZXBlbicgY2xhc3NOYW1lPSdpY29uIGdyb3ctbGFyZ2UtMiBtbDMnIHNyYz0nLi4vLi4vc3RhdGljL2ljb25zL2NvZGVwZW4ucG5nJyAvPjwvYT5cbiAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL0BhYXJvbmFkbGVyXCI+PGltZyBhbHQ9J21lZGl1bScgY2xhc3NOYW1lPSdpY29uIGdyb3ctbGFyZ2UtMiBtbDMnIHNyYz0nLi4vLi4vc3RhdGljL2ljb25zL21lZGl1bS5wbmcnIC8+PC9hPlxuICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL3d3dy5wcm9kdWN0aHVudC5jb20vQGFhcm5hZGxyXCI+PGltZyBjbGFzc05hbWU9J2ljb24gZ3Jvdy1sYXJnZS0yIG1sMycgc3JjPScuLi8uLi9zdGF0aWMvaWNvbnMvcHJvZGh1bnQucG5nJyAvPjwvYT5cbiAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly93b3JraW5nbm90d29ya2luZy5jb20vYWFyblwiPjxpbWcgY2xhc3NOYW1lPSdpY29uIGdyb3ctbGFyZ2UtMiBtbDMnIHNyYz0nLi4vLi4vc3RhdGljL2ljb25zL3dudy5wbmcnIC8+PC9hPlxuICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2Fhcm9uYWRsZXJcIj48aW1nIGNsYXNzTmFtZT0naWNvbiBncm93LWxhcmdlLTIgbWwzJyBzcmM9Jy4uLy4uL3N0YXRpYy9pY29ucy90d2l0dGVyLnBuZycgLz48L2E+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoIGY1IGxoLWNvcHk0IG1oM1wiPlxuICAgICAgICBIaSB0aGVyZS4gSeKAmW0gYSBVWCBkZXNpZ25lciAmIEZyb250LWVuZCBkZXZlbG9wZXIgaW4gTllDLiBJ4oCZdmUgd29ya2VkIG9uXG4gICAgICAgIHByb2plY3RzIGZvciBGYWNlYm9vaywgR29vZ2xlLCBJQk0sIFIvR0EsIERyb2dhNSBhbmRcbiAgICAgICAgb3RoZXJzLiBNeSB3b3JrIGhhcyBiZWVuIHJlY29nbml6ZWQgYnkgQ2FubmVzLCBBSUNQLCB0aGUgQXJ0IERpcmVjdG9yc1xuICAgICAgICBDbHViLCBDbGlvcywgQXJjaGl2ZSwgQWR3ZWVrLCBhbmQgdGhlIE5ldyBZb3JrIFRpbWVzLiBNeSBmb2N1cyBpcyBvbiA8c3BhbiBjbGFzc05hbWU9XCJiZy1ncmVlbjhcIj4mbmJzcDtVWCBkZXNpZ24mbmJzcDs8L3NwYW4+ICwgPHNwYW4gY2xhc3NOYW1lPVwiYmctdGVhbDhcIj4mbmJzcDtDU1MzJm5ic3A7PC9zcGFuPiAsIDxzcGFuIGNsYXNzTmFtZT1cImJnLWN5YW44XCI+Jm5ic3A7SmF2YVNjcmlwdCBFUzYgKyBSZWFjdCZuYnNwOzwvc3Bhbj4gYW5kIDxzcGFuIGNsYXNzTmFtZT1cImJnLWJsdWU2XCI+Jm5ic3A7Y29kZWRcbiAgICAgICAgYW5pbWF0aW9uJm5ic3A7PC9zcGFuPi5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cblxuICA8c3R5bGUganN4PntgXG4gICAgLmljb257XG4gICAgICB3aWR0aDoyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgICAvLy5wYXJhZ3JhcGh7XG4gICAgLy8gIGZvbnQtd2VpZ2h0OjMwMDtcbiAgICAvL31cbiAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFdlbGNvbWVCaW87XG4iXX0= */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/WelcomeBio/WelcomeBio.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WelcomeBio);

/***/ }),

/***/ "./Components/WelcomeBio/index.js":
/*!****************************************!*\
  !*** ./Components/WelcomeBio/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WelcomeBio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WelcomeBio */ "./Components/WelcomeBio/WelcomeBio.js");

/* harmony default export */ __webpack_exports__["default"] = (_WelcomeBio__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_TopNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/TopNav */ "./Components/TopNav/index.js");
/* harmony import */ var _Components_WelcomeBio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/WelcomeBio */ "./Components/WelcomeBio/index.js");
/* harmony import */ var _Components_Cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Cards */ "./Components/Cards/index.js");
/* harmony import */ var _Components_CoreTools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/CoreTools */ "./Components/CoreTools/index.js");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Footer */ "./Components/Footer/index.js");
var _jsxFileName = "/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/pages/index.js";







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_TopNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_WelcomeBio__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Cards__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_CoreTools__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
});

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import kith from './images/kith-rect3.jpg';
// import ibm from '../static/thumbs2018/IBM-rect.jpg';
// import arthritis from './images/thumbs2018/arthritis-rect.jpg';
// import motet from './images/thumbs2018/motet3b.jpg';
// import verbal from './images/thumbs2018/verbal4.jpg';
// import patagonia from './images/thumbs2018/patagonia-ww3.gif';
// import googlePlay from './images/thumbs2018/google-play-17-rect.jpg';
// import daftpunk from './images/thumbs2018/daftpunk-320.gif';
// import cottonBur from './images/thumbs2018/cotton-bur-rect.gif';
// // import moic from './images/thumbs2018/moic3.gif';
// import youtubeZero from './images/thumbs2018/youtubezero3-rect.gif';
// import bpCover from './images/Blockparty-800x400-3.jpg';
// import wfCover from '../src/images/wellsfargo/wfLock2.jpg'
var projects = [{
  key: 1,
  // image: './images/thumbs2018/IBM-rect.jpg',
  image: '../static/thumbs2018/IBM-rect.jpg',
  // image: require('./images/ibm.png'),
  title: 'IBM Partners',
  desc: "Wireframing, UX design and prototype development for IBM Partners, IBM's business services portal. Click to view the project.",
  // role: "UX wireframes, UI design, and client-side coded components using CSS3 and javascript. Implemented IBM’s Northstar and Duo design systems, including typography, .clr palettes, JSON type styles, grids and column layouts.",
  role1: "Interfaced with IBM marketing, design and engineering teams to develop UX design and coded components for IBM Partners",
  role2: "Implemented IBM’s Northstar and Duo design systems, including type, color palettes, grids, text styles, and column layouts",
  role3: "Motion graphic creation for IBM Partners lockup compiled to JavaScript and SVG to run in the browser",
  role4: "Delivered front-end javascript code to be implemented on the IBM website",
  // techstack: ""
  // TAGS:
  tag1: 'Sketch',
  tag2: 'HTML5',
  tag3: 'CSS3',
  tag4: 'JavaScript',
  year: 2018,
  // HREF LINK
  // link: "./ibm.html"
  link: "https://www.ibm.com/partners/start/"
}, {
  key: 2,
  image: '../static/kith-rect3.jpg',
  title: 'Kith Footwear',
  desc: 'Ecommerce store prototype. Built with React, Webpack, styled-components, CSS grid, tachyons, and more. Click to view the project.',
  role: "Built each piece of UI as a React component. Each product card is rendered from a mapped array, and inserted into a responsive CSS Grid.  All product data is passed from parent to child component via props. Set up custom media queries with ES6 template strings, which retrieve screen widths from a javascript object.",
  // TAGS:
  tag1: 'HTML5',
  tag2: 'CSS Grid',
  tag3: 'JavaScript',
  tag4: 'React',
  //  tag4: 'Styled-components',
  year: 2018,
  // HREF LINK
  link: "http://kith-store.aaronadler.com"
}, {
  key: '26',
  image: '../static/wellsfargo/wfLock2.jpg',
  title: 'Wells Fargo UX',
  desc: 'Redesign of the the Wells Fargo consumer banking design system. Coming 2019; viewable by appointment.',
  role1: "Constructed the master design system “source of truth” Sketch file, consisting of typography, color palette, grid and column layouts.",
  role2: "Built a family of button styles and their default, hover, active, and disabled states.",
  role3: "Redesigned several interface components, including masthead, header nav menu, mobile nav menu, footer and others",
  // TAGS:
  tag1: 'Sketch',
  tag2: 'Illustrator',
  tag3: 'Photoshop',
  tag4: 'SVG',
  year: 2018,
  // HREF LINK
  link: "javascript:alert('👋👋👋 The Wells Fargo UX project is viewable by appointment until it is released in 2019  🙏🙏🙏')"
}, {
  key: '2B',
  image: '../static/thumbs2018/motet3b.jpg',
  title: 'Motet - Music App UX',
  desc: 'Mobile music app with a minimal graphic interface. Light scheme to contrast against Spotify. Click to view the project.',
  role: "Developed the brand identity with Photoshop and Illustrator. Created the UI design of all screens at 1x with Sketch.",
  // TAGS:
  tag1: 'Sketch',
  tag2: 'Illustrator',
  tag3: 'Photoshop',
  tag4: 'SVG',
  year: 2017,
  // HREF LINK
  link: "https://www.behance.net/gallery/60987045/Motet-Music-Application-Identity-and-UI-Design"
}, {
  key: 5,
  image: '../static/thumbs2018/youtubezero3-rect.gif',
  title: 'YouTube Zero',
  desc: 'React application providing a zero-click YouTube search interface. Fetches data in realtime from YouTube DataAPI v3. Click to view.',
  role: 'Built the entire application in React. Used an API key to access YouTube Data API v3. Designed the components using styled-components and Tachyons.',
  // TAGS:
  tag1: 'React',
  tag2: 'CSS3',
  tag3: 'javascript',
  tag4: 'YouTube API',
  year: 2017,
  // HREF LINK
  // link: "https://youtubezero.herokuapp.com/"
  link: "https://youtubezero.now.sh/"
}, {
  key: 3,
  image: 'https://ww2.aaronadler.com/images/Tradewind-800x400.gif',
  title: 'Tradewind Markets - Blockchain platform',
  desc: "Designed, built and coded Tradewind's web presence, as well as a coded animated logo treatment.",
  role: "Built the multipage site using HTML5, CSS3, Flexbox, Sass, Javascript and Gulp. Animated the logo with Greensock/GSAP TweenMax. Handed off to internal engineers for deployment.",
  // TAGS:
  //  tag1: 'sketch',
  tag1: 'HTML5',
  tag2: 'CSS3',
  tag3: 'javascript',
  tag4: 'Gulp',
  year: 2018,
  //  tag6: 'sass/scss',
  //  tag7: 'svg',
  // HREF LINK
  // link: "https://www.behance.net/gallery/63693141/Tradewind-Markets-Blockchain-Technology-Website"
  link: "https://tradewindmarkets.com"
}, // vvv BLOCKPARTY
// vvv BLOCKPARTY
// vvv BLOCKPARTY
{
  key: '2BB',
  image: '../static/Blockparty-800x400-3.jpg',
  title: 'Blockparty - Blockchain app UX',
  desc: 'Blockchain-based event-ticketing platform. The polygonal hippo graphic is original artwork created with D-Mesh. Click to view.',
  role: "Designed the onboarding flow UI screens; built React components which were ported to React Native; developed the character design for their polygonal hippo mascot. The polygonal hippo is original artwork created with DMesh.",
  // TAGS:
  tag1: 'Sketch',
  tag2: 'Illustrator',
  tag3: 'DMesh',
  tag4: 'React',
  year: 2018,
  // HREF LINK
  link: "https://www.behance.net/gallery/66044535/Blockparty-Blockchain-UXUI-Mobile-App-Site-Design"
}, {
  key: '2C',
  image: 'https://dl.dropboxusercontent.com/s/4siji9ixbeggje9/blockchain-RECT-2.gif',
  title: 'Blockchain.com - Wallet UI',
  desc: 'Currency Slider Component for iOS Wallet App, which allows the user to select and transact with multiple currencies. Click to view.',
  role: "Developed the Currency Slider Component with Sketch and AdobeCC. Designed the UI component of all screens at 1x with Sketch.",
  // TAGS:
  tag1: 'Sketch',
  tag2: 'Illustrator',
  tag3: 'Photoshop',
  tag4: 'SVG',
  year: 2018,
  // HREF LINK
  link: "https://www.behance.net/gallery/65967583/Blockchaincom-UI-Currency-Slider"
}, {
  key: 4,
  image: '../static/thumbs2018/verbal4.jpg',
  title: 'Verbal - Messaging UI',
  desc: 'Single-purpose messaging app without marketplaces, ads, or other add-ons to encourage usage. Click to view.',
  role: "Developed the brand identity with Photoshop and Illustrator. Created the UI design of all screens at 1x with Sketch.",
  // TAGS:
  tag1: 'Sketch',
  tag2: 'Illustrator',
  tag3: 'Photoshop',
  tag4: 'SVG',
  year: 2016,
  // HREF LINK
  link: "https://www.behance.net/gallery/61048837/Verbal-Messaging-App-Brand-Identity-and-UI-Design"
}, {
  key: 6,
  image: '../static/thumbs2018/patagonia-ww3.gif',
  title: 'Patagonia Provisions',
  desc: "Animated sequence for Patagonia Provisions, Patagonia's line of foods and recipes. Click to view.",
  role: "Created the Provisions design artwork in Pshop/Illustrator, based on brand assets. Animated the assets in After Effects. Rendered to JSON and implemented into a codebase.",
  // TAGS:
  //  tag1: 'sketch',
  //  tag2: 'CSS3',
  tag1: 'After Effects',
  tag2: 'javascript',
  tag3: 'Lottie',
  tag4: 'Illustrator',
  tag5: 'SVG',
  year: 2017,
  // HREF LINK
  link: "https://codepen.io/aaronadler/pen/vWoVoN"
}, {
  key: 7,
  image: '../static/thumbs2018/google-play-17-rect.jpg',
  title: 'Google Play',
  desc: 'Campaign concept and design to promote movies, music and book titles on Google Play. Click to view.',
  role: "I worked with a writer to develop the creative concept. Designed the layouts with Sketch and Adobe Creative Suite.",
  // TAGS:
  tag1: 'Sketch',
  tag2: 'Illustrator',
  tag3: 'Photoshop',
  tag4: 'SVG',
  year: 2014,
  //  tag5: 'bodymovin',
  //  tag6: 'Illustrator',
  //  tag7: '',
  // HREF LINK
  link: "https://dribbble.com/shots/3939152-Google-Play-All-Together-Beauty"
}, {
  key: 8,
  image: '../static/thumbs2018/daftpunk-320.gif',
  title: 'Daft Punk - Facebook Camera Effect AR',
  desc: 'The Daft Punk Helmet as a wearable Camera Effect. Click to view the video and experience the Camera Effect on mobile.',
  role: "Received the helmet as a .obj 3D model. Added textures, materials and lighting in Blender and ARStudio. Created the background animations in After Effects. Configured the object to a face-tracker in ARStudio.",
  // TAGS:
  tag1: 'ARstudio',
  tag2: 'Blender3D',
  tag3: 'Photoshop',
  tag4: 'After Eff',
  year: 2017,
  // HREF LINK
  link: "https://www.facebook.com/160758384681784/videos/166745714083051"
}, {
  key: 9,
  image: '../static/thumbs2018/cotton-bur-rect.gif',
  title: "Cotton Bureau",
  desc: 'Animated logo lockup for Cotton Bureau. Created in After Effects and converted to JSON via Lottie. Click to view on Codepen.',
  role: "tba",
  // TAGS:
  tag1: 'Illustrator',
  tag2: 'After Effects',
  tag3: 'javascript',
  tag4: 'lottie',
  year: 2017,
  // HREF LINK
  link: "https://codepen.io/aaronadler/pen/OzLYYM"
}, // {
//   key: 10,
//   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/arss.gif',
//   title: 'ARsocialstudio',
//    desc: 'ARss is a microservice to build and deploy 3D Facebook Camera Effects for clients. 3D modeling, scripting and publication to the Camera Effects Platform. Click to view site.',
//    role: "tba",
//   // TAGS:
//    tag1: 'HTML5',
//    tag2: 'css3',
//    tag3: 'javascript',
//    tag4: 'gulp',
//    year: 2017,
//    // HREF LINK
//    link: "https://thearss.com/"
// },
{
  key: 11,
  image: '../static/thumbs2018/moic3.gif',
  title: 'Museum of Ice Cream - Facebook Camera Effect',
  desc: 'Interactive AR 3D-based Facebook Camera Effect for the Museum of Ice Cream. Click to view the video and Camera Effect on your mobile device.',
  role: "Received the ice cream scoops, cone and peppermint assets as .obj 3D models. Added colors, textures, and materials in ARStudio. Created the typography and background animations in After Effects. Configured the objects to a face-tracker in ARStudio.",
  // TAGS:
  tag1: 'ARStudio',
  tag2: 'Blender3D',
  tag3: 'Photoshop',
  tag4: 'After Eff',
  year: 2017,
  // HREF LINK
  link: "https://www.facebook.com/160758384681784/videos/162009941223295/"
}, {
  key: 12,
  image: '../static/thumbs2018/arthritis-rect.jpg',
  title: 'Arthritis Foundation',
  desc: 'Graphic to promote awareness for the Arthritis Foundation. Click to view.',
  role: "Concept creation and graphic design",
  // TAGS:
  tag1: 'Sketch',
  tag2: 'Illustrator',
  tag3: 'SVG',
  tag4: 'Photoshop',
  year: 2011,
  // HREF LINK
  link: "https://dribbble.com/shots/3998425-Arthritis-Foundation-graphic"
}];
/* harmony default export */ __webpack_exports__["default"] = (projects);

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-scrollchor":
/*!***********************************!*\
  !*** external "react-scrollchor" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollchor");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map