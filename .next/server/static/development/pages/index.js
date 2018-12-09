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
var _jsxFileName = "/Users/aaronadler/Desktop/www-aa-next7/Components/Cards/Cards.js";

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
    css: ".card.jsx-10816166{width:430px;-webkit-transition:all .3s ease;transition:all .3s ease;}.card.jsx-10816166:hover{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}.completed.jsx-10816166{border:1px solid blue;margin-top:2.7rem;}.image.jsx-10816166{border-top-right-radius:4px;border-top-left-radius:4px;}.tag.jsx-10816166{color:white;display:inline-block;padding:4px 12px;border-radius:6px;font-size:10px;margin-top:10px;}p.tag.jsx-10816166:not([first]){margin-left:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3Avd3d3LWFhLW5leHQ3L0NvbXBvbmVudHMvQ2FyZHMvQ2FyZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0lrQixBQUVlLEFBS2tCLEFBR1IsQUFJTSxBQUtoQixBQVFJLFlBeEJRLEFBaUJILElBT0osTUFoQkMsTUFJUyxLQU1WLE9BVkUsVUFXRCxLQVBVLGFBVmMsQUFrQjNCLGVBQ0MsYUFqQmUsR0FpQmQiLCJmaWxlIjoiL1VzZXJzL2Fhcm9uYWRsZXIvRGVza3RvcC93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9DYXJkcy9DYXJkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBUaWx0IGZyb20gXCJyZWFjdC10aWx0XCI7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4uLy4uL3NyYy9wcm9qZWN0c1wiO1xuLy8gaW1wb3J0ICcuL0NhcmRzLmNzcyc7XG4vLyBpbXBvcnQgJy4uLy4uL3NyYy9jc3MvZW50cnkuY3NzJztcbmNvbnN0IHV1aWR2MSA9IHJlcXVpcmUoXCJ1dWlkL3YxXCIpO1xuXG4vLyBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuLy8gICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEpOyAqL1xuXG4vLyBgXG4vLyBjb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxuLy8gICB3aWR0aDogNDMwcHg7XG4vLyAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbi8vICAgLyogLW1vei10cmFuc2l0aW9uOiBzY2FsZSAuM3MgZWFzZTsgKi9cbi8vICAgLyogLXdlYmtpdC10cmFuc2l0aW9uOiBzY2FsZSAuM3MgZWFzZTsgKi9cbi8vICAgJjpob3Zlcntcbi8vICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7XG4vLyAgIH1cbi8vIGA7XG5cbi8vIGNvbnN0IERpdjIgPSBzdHlsZWQuZGl2YFxuLy8gICAvKiBmbGV4OiAxOyAqL1xuLy8gYDtcblxuLy8gY29uc3QgQ29tcGxldGVkID0gc3R5bGVkLnBgXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4vLyAgIG1hcmdpbi10b3A6IDIuN3JlbTtcblxuLy8gYDtcblxuXG4vLyBjb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxuLy8gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuLy8gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4vLyBgXG4vLyAtLS0tLS0tLS0gRU5EIFNUWUxFRC1DT01QT05FTlRTIC0tLS0tLS0tLVxuXG5jb25zdCBDYXJkcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICAgIHJldHVybiAoXG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnIGtleT17dXVpZHYxKCl9PlxuICAgICAgICAgICAgICB7LyogPFRpbHRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJUaWx0XCJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt7IHJldmVyc2U6IHRydWUsIG1heDogMTIsIHNjYWxlOiAxLjAzLCBzcGVlZDogOTAwIH19XG4gICAgICAgICAgICAgID4gKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyMiBtYTIgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3Byb2plY3QubGluaz9wcm9qZWN0Lmxpbms6bnVsbH0+ICovfVxuICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtwcm9qZWN0Lmxpbmt9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyAgc3JjPXtwcm9qZWN0LmltYWdlfSBhbHQ9XCJhbHRcIiBjbGFzc05hbWU9XCJpbWFnZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRDb250YWluZXIgcGE0YiBsaC1jb3B5M1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImYzYyBtdDEgbWIwIGZ3NiBsaC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiZGVzY1wiIGNsYXNzTmFtZT1cImY2YiBibHVlNyAgbXQzIG1iNCBzcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5kZXNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIlwiIGNsYXNzTmFtZT1cInByb2plY3RSb2xlIGY2IG10MSBibHVlNyBtYjIgZnc2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE15IHByb2plY3Qgcm9sZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZVR5cGU6J2NpcmNsZSd9fSBjbGFzc05hbWU9J2Y2YiBibHVlNyc+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtdDMnPntwcm9qZWN0LnJvbGUxP3Byb2plY3Qucm9sZTE6cHJvamVjdC5yb2xlfTwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3Qucm9sZTI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J210Myc+e3Byb2plY3Qucm9sZTJ9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3Qucm9sZTM/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J210Myc+e3Byb2plY3Qucm9sZTN9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3Qucm9sZTQ/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J210Myc+e3Byb2plY3Qucm9sZTR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5yb2xlNT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbXQzJz57cHJvamVjdC5yb2xlNX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiXCIgY2xhc3NOYW1lPVwiZjYgbXQ0IG1iMCBibHVlNyBmdzZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvamVjdCBzdGFjazpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgZmlyc3Q9XCJcIiBjbGFzc05hbWU9XCJtdDAgdGFnIGJnLWJsdWU1XCI+e3Byb2plY3QudGFnMX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRhZzI/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdDAgdGFnIGJnLWJsdWU2XCI+e3Byb2plY3QudGFnMn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGFnMz9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10MCB0YWcgYmctaW5kaWdvN1wiPntwcm9qZWN0LnRhZzN9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRhZzQ/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdDAgdGFnIGJnLXZpb2xldDdcIj57cHJvamVjdC50YWc0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50YWc1P1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQwIHRhZyBiZy12aW9sZXQ3XCI+e3Byb2plY3QudGFnNX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJcIiBjbGFzc05hbWU9XCJjb21wbGV0ZWQgZGliIGY3IGJsdWU3IHBoMyBwdjJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGxldGVkOiAmbmJzcDs8c3BhbiBjbGFzc05hbWU9XCJmdzdcIj57cHJvamVjdC55ZWFyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIDwvVGlsdD4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuLmNhcmR7XG4gIHdpZHRoOiA0MzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xuICAvKiAtbW96LXRyYW5zaXRpb246IHNjYWxlIC4zcyBlYXNlOyAqL1xuICAvKiAtd2Via2l0LXRyYW5zaXRpb246IHNjYWxlIC4zcyBlYXNlOyAqL1xuICAmOmhvdmVye1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTtcbiAgfVxufVxuXG4uY29tcGxldGVke1xuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICBtYXJnaW4tdG9wOiAyLjdyZW07XG59XG5cbi5pbWFnZXtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xufSAgICAgXG4gICAgICBcbi50YWd7XG4gIC8qIGJhY2tncm91bmQ6IGJsdWU7ICovXG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbi10b3A6MTBweDtcbn1cblxuXG5cbnAudGFnOm5vdChbZmlyc3RdKXtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxucC5wcm9qZWN0Um9sZXtcbiAgLyogbGluZS1oZWlnaHQ6IDEuMzsgKi9cbn1cbiAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRzO1xuIl19 */\n/*@ sourceURL=/Users/aaronadler/Desktop/www-aa-next7/Components/Cards/Cards.js */",
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
var _jsxFileName = "/Users/aaronadler/Desktop/www-aa-next7/Components/CoreTools/CoreTools.js";



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
    css: ".container.jsx-794909562{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.coreskills-box.jsx-794909562{border:1px solid #7db9e5;margin:100px 0 0;text-align:center;padding-bottom:20px;width:70%;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:90%;text-align:left;padding-bottom:50px;}.coreskills-box__core-col.jsx-794909562{line-height:2rem;width:260px;margin:40px 30px;font-size:.9rem;}.coreskills-box__core-col.jsx-794909562 p.jsx-794909562{margin-bottom:30px;font-size:.9rem;line-height:2;}h1.jsx-794909562{font-size:1.5rem;}.skill.jsx-794909562{line-height:2;list-style:none;}ul.jsx-794909562{padding:0;list-style-type:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3Avd3d3LWFhLW5leHQ3L0NvbXBvbmVudHMvQ29yZVRvb2xzL0NvcmVUb29scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpUmMsQUFFdUIsQUFNSyxBQWdCUixBQU1FLEFBTUYsQUFHSCxBQUtKLFVBQ1csSUFMTCxHQWZKLEFBV00sRUFKRixDQTdCSCxLQU1JLElBaUJBLENBY0EsQ0FLSyxJQVpSLE9BdkJJLElBaUJGLEdBTUQsV0F0QkssRUFnQkgsa0JBZlAsVUFDVSxJQVRDLGdCQVVSLEtBVFUscUVBVUosbUJBQ0osV0FYUyw4Q0FZSCxxQkFDRSxtR0FDYixVQUNNLGdCQUNJLG9CQUFDIiwiZmlsZSI6Ii9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3Avd3d3LWFhLW5leHQ3L0NvbXBvbmVudHMvQ29yZVRvb2xzL0NvcmVUb29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBDb3JlVG9vbHMgPSAoKSA9PiAoXG4gIDxkaXYgaWQ9XCJjb3JldG9vbHNcIiBjbGFzc05hbWU9XCJmbGV4IGNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgY29yZXNraWxscy1ib3ggbGlnaHRlc3QtYmx1ZSBcIj5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcmVza2lsbHMtYm94X19jb3JlLWNvbCBibHVlMFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiXCI+Q29yZSBUb29sczwvaDE+XG4gICAgICAgIDxwPlNvZnR3YXJlIGFuZCBsaWJyYXJpZXMgSSBvZnRlbiB3b3JrIHdpdGggaW4gcHJvamVjdHMuPC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYXMgZmEtcGVuY2lsLWFsdCByYWluYm93MVwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBTa2V0Y2g8L2xpPlxuXG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhcyBmYS1jb2RlIHJhaW5ib3cyXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIEhUTUw1PC9saT5cblxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jc3MzIHJhaW5ib3czXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIENTUzM8L2xpPlxuXG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRoLWxhcmdlIHJhaW5ib3c0XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIENTUyBHcmlkPC9saT5cblxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzIHJhaW5ib3c1XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIENTUyBGbGV4Ym94PC9saT5cblxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS1waG90by1vIHJhaW5ib3c2XCIgLz4gKi99XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1zYXNzIHJhaW5ib3c2XCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPntcIlwifVNhc3Mvc2NzczwvbGk+XG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsYXktY2lyY2xlIHJhaW5ib3c3XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIEFmdGVyIEVmZmVjdHM8L2xpPlxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYW1lcmEgcmFpbmJvdzhcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgUGhvdG9zaG9wPC9saT5cblxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iZXppZXItY3VydmUgcmFpbmJvdzhcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgSWxsdXN0cmF0b3I8L2xpPlxuXG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWpzLXNxdWFyZSByYWluYm93OVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIEphdmFzY3JpcHQgRVM2XG4gICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXJlYWN0IHJhaW5ib3c5XCIgLz4gKi99XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1yZWFjdCByYWluYm93OVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIFJlYWN0XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICBcblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZGUgcmFpbmJvdzlcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgTmV4dEpTXG4gICAgICAgICAgPC9saT5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2RlIHJhaW5ib3c5XCIgLz4gKi99XG4gICAgICAgICAgICDwn5SlIFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgRmlyZWJhc2VcbiAgICAgICAgICA8L2xpPlxuXG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gcm9sZT0naW1nJyBhcmlhLWxhYmVsPVwic2tpbGxcIiBjbGFzc05hbWU9XCJmNFwiPvCfkoUgPC9zcGFuPiAmbmJzcDtTdHlsZWQtQ29tcG9uZW50c1xuICAgICAgICAgIDwvbGk+XG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGgtbGFyZ2UgcmFpbmJvdzlcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIEJvb3RzdHJhcCA0PC9saT5cblxuICAgICAgIFxuXG4gICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbGFuZ3VhZ2UgcmFpbmJvdzEzXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBCYWJlbDwvbGk+ICovfVxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1ib2x0IHJhaW5ib3cxMFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgVGFjaHlvbnM8L2xpPlxuXG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hZ2ljIHJhaW5ib3cxMVwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgalF1ZXJ5PC9saT5cbiAgICAgICAgICAgIFxuICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxhcHRvcCByYWluYm93MTZcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIElCTSBDb2xvciBMaWJyYXJ5PC9saT4gKi99XG5cblxuICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFkanVzdCByYWluYm93MTdcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIFBhbHg8L2xpPiAqL31cblxuICAgICAgICAgICAgXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS12aWRlbyByYWluYm93MTJcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIEdyZWVuc29jay9HU0FQPC9saT5cblxuXG4gICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlyc3Qtb3JkZXIgcmFpbmJvdzE3XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBTZW1hbnRpY1VJPC9saT4gKi99XG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtd2luZG93LW1heGltaXplIHJhaW5ib3cxMlwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgU1ZHPC9saT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1sYXB0b3AtY29kZSByYWluYm93MTNcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIEdpdC9HaXRIdWI8L2xpPlxuXG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWN1YmUgcmFpbmJvdzEzXCIgLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgQmxlbmRlcjNEPC9saT5cblxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9vay1zcXVhcmUgcmFpbmJvdzE0XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBGYWNlYm9vayBBUiBTdHVkaW88L2xpPlxuXG57LyogICAgICAgICAgICAgXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2x1bW5zIHJhaW5ib3cxNFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgSW5EZXNpZ248L2xpPiAqL31cblxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cblxuXG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Jlc2tpbGxzLWJveF9fY29yZS1jb2wgYmx1ZTBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIlwiPlNlY29uZGFyeSBUb29sczwvaDE+XG4gICAgICAgIDxwPlNvZnR3YXJlIEkgd29yayB3aXRoLCBhbmQgSSBhbSBhY3RpdmVseSBsZWFybmluZy48L3A+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRlcm1pbmFsIHJhaW5ib3cxMVwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgTm9kZUpTXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXJhbmRvbSByYWluYm93MTJcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIEV4cHJlc3NcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS1jb2RlLW8gcmFpbmJvdzEzXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBNb25nb0RCXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJyaWVmY2FzZSByYWluYm93MTRcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIFBvc3RDU1NcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29kZS1mb3JrIHJhaW5ib3cxNFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgR3VscFxuICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcGFjZS1zaHV0dGxlIHJhaW5ib3cxNlwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgTWV0ZW9yXG4gICAgICAgICAgPC9saT4gKi99XG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxhbmd1YWdlIHJhaW5ib3cxNVwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgQmFiZWxcbiAgICAgICAgICA8L2xpPlxuXG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWN1YmUgcmFpbmJvdzE3XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBXZWJwYWNrXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG5cblxuICAgIDwvZGl2PlxuXG5cbiAgPHN0eWxlIGpzeD57YFxuICAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb3Jlc2tpbGxzLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ZGI5ZTU7XG4gIG1hcmdpbjogMTAwcHggMCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweFxufVxuXG5cblxuLmNvcmVza2lsbHMtYm94X19jb3JlLWNvbCB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMjYwcHg7XG4gIG1hcmdpbjogNDBweCAzMHB4O1xuICBmb250LXNpemU6IC45cmVtXG59XG5cblxuXG5cbi5jb3Jlc2tpbGxzLWJveF9fY29yZS1jb2wgcCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIC8qIGZvbnQtc2l6ZTogMXJlbSAqL1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgbGluZS1oZWlnaHQ6IDI7XG59XG5cblxuXG5cbmgxIHtcbiAgZm9udC1zaXplOiAxLjVyZW1cbn1cblxuXG5pIHtcbiAvLyBjb2xvcjogIzFiMmZlOTtcbn1cbi5za2lsbCB7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBsaXN0LXN0eWxlOiBub25lXG59XG5cbnVse1xuICAvKiBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50OyAqL1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cbn1cblxuXG4gIGB9PC9zdHlsZT4gIFxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvcmVUb29scztcbiJdfQ== */\n/*@ sourceURL=/Users/aaronadler/Desktop/www-aa-next7/Components/CoreTools/CoreTools.js */",
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
var _jsxFileName = "/Users/aaronadler/Desktop/www-aa-next7/Components/Footer/Footer.js";



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
    css: "footer.jsx-2980524257{-webkit-letter-spacing:.08rem;-moz-letter-spacing:.08rem;-ms-letter-spacing:.08rem;letter-spacing:.08rem;text-align:center;}.container--parag.jsx-2980524257{max-width:478px;margin:auto;}.container--contact.jsx-2980524257{max-width:300px;margin:auto;}.container--left.jsx-2980524257{-ms-flex-pack:start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.container--marbot30.jsx-2980524257{margin-bottom:30px;}.container--marginbot40.jsx-2980524257{margin-bottom:40px;}.container--marbot10.jsx-2980524257{margin-bottom:10px;}.container--marbot20.jsx-2980524257{margin-bottom:20px;}.container--marbot60.jsx-2980524257{margin-bottom:60px;}.container--marbot80.jsx-2980524257{margin-bottom:80px;}.container--martop20.jsx-2980524257{margin-top:20px;}.container--martop30.jsx-2980524257{margin-top:30px;}.container--martop40.jsx-2980524257{margin-top:40px;}.container--martop50.jsx-2980524257{margin-top:50px;}.container--martop70.jsx-2980524257{margin-top:70px;}.container--pad10.jsx-2980524257{padding:10px 0;}#email.jsx-2980524257{margin-bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3Avd3d3LWFhLW5leHQ3L0NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmMsQUFFeUIsQUFRTixBQUlBLEFBSUksQUFJRCxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHSCxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0QsQUFHQyxlQUhBLENBNUNKLEFBSUEsQUF5QkssQUFHQSxBQUdBLEFBR0EsQUFHQSxBQU1BLEdBcENHLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxDQWxCTyxRQVJkLEFBSUEsNkVBWkssa0JBQUMsRUFnQlMiLCJmaWxlIjoiL1VzZXJzL2Fhcm9uYWRsZXIvRGVza3RvcC93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCAnLi9Gb290ZXIuY3NzJztcbi8vIGltcG9ydCAnLi4vLi4vc3JjL2Nzcy9lbnRyeS5jc3MnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxmb290ZXIgY2xhc3NOYW1lPVwiY2VudGVyIGxpZ2h0ZXN0LWJsdWVcIj5cblxuICAgIHsvKiA8IS0tIFRIQU5LIFlPVSAtLT4gKi99XG4gICAgPGRpdiBpZD1cImNvbnRhY3RcIiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLS1tYXJ0b3A3MFwiPlxuICAgICAgPHAgY2xhc3NOYW1lPSdmMyc+XG4gICAgICAgIFRoYW5rIFlvdVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgey8qIDwhLS0gQ09OVEFDVCAvIEVNQUlMIC0tPiAqL31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItLW1hcmJvdDgwIGNvbnRhaW5lci0tcGFkMTBcIj5cbiAgICAgIDxhIGhyZWY9XCJtYWlsdG86YWFyb24uYWRsZXJAZ21haWwuY29tXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImdyb3cgbGlnaHRlc3QtYmx1ZSBmNVwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlLW8gYmx1ZTUgbXIyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBhYXJvbi5hZGxlcihhdClnbWFpbCguY29tKVxuICAgICAgICA8L3A+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3NOYW1lPSdmNyBmbGV4IGp1c3RpZnktY2VudGVyIHB0NSBwYjUnPlxuICAgICAgPHAgY2xhc3NOYW1lPSd3LTcwIHRjIGxoLWNvcHkyJz5TaXRlIGJ1aWx0IHdpdGggPHNwYW4gY2xhc3NOYW1lPVwidGVhbDZcIj5OZXh0SlMsIFJlYWN0LCBTYXNzPC9zcGFuPiBhbmQgPHNwYW4gY2xhc3NOYW1lPVwiY3lhbjVcIj5GbGV4Ym94PC9zcGFuPi48L3A+XG4gICAgPC9kaXY+XG5cblxuICA8c3R5bGUganN4PntgXG4gICAgZm9vdGVye1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC4wOHJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIH1cblxuICAgIC8qIC5jb250YWluZXIgcCB7XG4gICAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMi45cmVtXG4gICAgfSAqL1xuICAgIC5jb250YWluZXItLXBhcmFnIHtcbiAgICAgIG1heC13aWR0aDogNDc4cHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIC5jb250YWluZXItLWNvbnRhY3Qge1xuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgIG1hcmdpbjogYXV0b1xuICAgIH1cbiAgICAuY29udGFpbmVyLS1sZWZ0IHtcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0XG4gICAgfVxuICAgIC5jb250YWluZXItLW1hcmJvdDMwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHhcbiAgICB9XG4gICAgLmNvbnRhaW5lci0tbWFyZ2luYm90NDAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweFxuICAgIH1cbiAgICAuY29udGFpbmVyLS1tYXJib3QxMCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gICAgfVxuICAgIC5jb250YWluZXItLW1hcmJvdDIwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHhcbiAgICB9XG4gICAgLmNvbnRhaW5lci0tbWFyYm90NjAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNjBweFxuICAgIH1cbiAgICAuY29udGFpbmVyLS1tYXJib3Q4MCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4MHB4XG4gICAgfVxuICAgIC5jb250YWluZXItLW1hcnRvcDIwIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHhcbiAgICB9XG4gICAgLmNvbnRhaW5lci0tbWFydG9wMzAge1xuICAgICAgbWFyZ2luLXRvcDogMzBweFxuICAgIH1cbiAgICAuY29udGFpbmVyLS1tYXJ0b3A0MCB7XG4gICAgICBtYXJnaW4tdG9wOiA0MHB4XG4gICAgfVxuICAgIC5jb250YWluZXItLW1hcnRvcDUwIHtcbiAgICAgIG1hcmdpbi10b3A6IDUwcHhcbiAgICB9XG4gICAgLmNvbnRhaW5lci0tbWFydG9wNzAge1xuICAgICAgbWFyZ2luLXRvcDogNzBweFxuICAgIH1cbiAgICAuY29udGFpbmVyLS1wYWQxMCB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDBcbiAgICB9XG4gICAgI2VtYWlsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBcbiAgICB9XG4gIFxuICBgfTwvc3R5bGU+XG5cbiAgPC9mb290ZXI+XG5cbik7XG5cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl19 */\n/*@ sourceURL=/Users/aaronadler/Desktop/www-aa-next7/Components/Footer/Footer.js */",
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
var _jsxFileName = "/Users/aaronadler/Desktop/www-aa-next7/Components/TopNav/TopNav.js";


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
    css: ".container.jsx-1557708495{position:fixed;top:0;right:0;z-index:99;}.icon.jsx-1557708495{position:relative;bottom:2px;margin-right:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3Avd3d3LWFhLW5leHQ3L0NvbXBvbmVudHMvVG9wTmF2L1RvcE5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q2MsQUFFa0IsQUFNRyxlQUxaLEdBTUssR0FMSCxRQUNHLEFBS00sV0FMTCxNQUtNIiwiZmlsZSI6Ii9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3Avd3d3LWFhLW5leHQ3L0NvbXBvbmVudHMvVG9wTmF2L1RvcE5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgJ2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnO1xuLy8gaW1wb3J0IG1vZHVsZU5hbWUgZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUnXG5pbXBvcnQgU2Nyb2xsY2hvciBmcm9tICdyZWFjdC1zY3JvbGxjaG9yJztcbi8vIGltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5Jztcbi8vIGltcG9ydCAnLi4vZWFzaW5ncyc7ICAgICAgXG5cbi8vIGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICAgIHRvcDogMDtcbi8vICAgICByaWdodDogMDtcbi8vICAgICB6LWluZGV4Ojk5O1xuLy8gYFxuXG4vLyBjb25zdCBJY29uID0gc3R5bGVkLmlgXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgYm90dG9tOjJweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4vLyBgXG5cbmNvbnN0IGVhc2VJbk91dFF1YXJ0ID0gZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcbiAgaWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQqdCp0ICsgYjtcbiAgcmV0dXJuIC1jLzIgKiAoKHQtPTIpKnQqdCp0IC0gMikgKyBiO1xufVxuXG5cblxuY29uc3QgVG9wTmF2ID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB3aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZFwiPlxuXG5cbiAgICAgIDxTY3JvbGxjaG9yICBhbmltYXRlPXt7b2Zmc2V0OiA1MCwgZHVyYXRpb246IDE0MDAsIGVhc2luZzogZWFzZUluT3V0UXVhcnQgfX0gdG89XCIjY29yZXRvb2xzXCIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgaWNvbiBncm93MlwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGZhIGZhLXN1aXRjYXNlIGJsdWU1XCIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXI0IHRleHQtc2hhZC0xXCI+VG9vbHM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TY3JvbGxjaG9yPlxuXG4gICAgICA8U2Nyb2xsY2hvciAgYW5pbWF0ZT17e29mZnNldDogLTM1MCwgZHVyYXRpb246IDE0MDAsIGVhc2luZzogZWFzZUluT3V0UXVhcnQgfX0gdG89XCIjY29udGFjdFwiIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGljb24gZ3JvdzJcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGZhIGZhLWVudmVsb3BlLW8gYmx1ZTVcIiAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yNCB0ZXh0LXNoYWQtMVwiPkNvbnRhY3Q8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TY3JvbGxjaG9yPlxuXG4gIDxzdHlsZSBqc3g+e2BcbiAgICAuY29udGFpbmVye1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB6LWluZGV4OiA5OTtcbiAgICB9XG4gICAgLmljb257XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbToycHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIH1cbiAgYH08L3N0eWxlPlxuXG4gIDwvZGl2PlxuKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IFRvcE5hdjsiXX0= */\n/*@ sourceURL=/Users/aaronadler/Desktop/www-aa-next7/Components/TopNav/TopNav.js */",
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
var _jsxFileName = "/Users/aaronadler/Desktop/www-aa-next7/Components/WelcomeBio/WelcomeBio.js";

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
    css: ".icon.jsx-2609408294{width:20px;height:20px;border-radius:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3Avd3d3LWFhLW5leHQ3L0NvbXBvbmVudHMvV2VsY29tZUJpby9XZWxjb21lQmlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDYyxBQUVjLFdBQ0MsWUFDTSxrQkFBQyIsImZpbGUiOiIvVXNlcnMvYWFyb25hZGxlci9EZXNrdG9wL3d3dy1hYS1uZXh0Ny9Db21wb25lbnRzL1dlbGNvbWVCaW8vV2VsY29tZUJpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4vV2VsY29tZUJpby5jc3NcIjtcblxuLy8gY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkLnBgXG4vLyAgIGZvbnQtd2VpZ2h0OjMwMDtcbi8vIGBcblxuY29uc3QgV2VsY29tZUJpbyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJcIj5cblxuICAgIDxkaXYgaWQ9XCJ0b3BTZWN0aW9uXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbHVtbiBjZW50ZXIgd2hpdGUgbXQ2IG1iNVwiPlxuICAgICAgPGltZ1xuICAgICAgICBpZD1cInByb2ZpbGUtcGljXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdzIgY2VudGVyIG1iM1wiXG4gICAgICAgIHNyYz1cImh0dHBzOi8vd3cyLmFhcm9uYWRsZXIuY29tL2ltYWdlcy9wcm9maWxlLXBpYy5qcGdcIlxuICAgICAgICBhbHQ9J2FsdCdcbiAgICAgIC8+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmMmMgdGNcIj5BYXJvbiBBZGxlcjwvcD5cblxuXG4gICAgICB7LyogU09DSUFMIElDT05TIFVOREVSIE5BTUUgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBtYjQnPlxuICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2RyaWJiYmxlLmNvbS9hYXJuYWRsclwiPjxpbWcgYWx0PSdkcmliYmInIGNsYXNzTmFtZT0naWNvbiBncm93LWxhcmdlLTInIHNyYz0nLi4vLi4vc3RhdGljL2ljb25zL0FBLWRyaWJiYmxlLWljb24ucG5nJyAvPjwvYT5cbiAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly93d3cudG9wdGFsLmNvbS9kZXNpZ25lcnMvcmVzdW1lL2Fhcm9uLWFkbGVyXCI+PGltZyBhbHQ9J3RvcHRhbCcgY2xhc3NOYW1lPSdpY29uIGdyb3ctbGFyZ2UtMiBtbDMnIHNyYz0nLi4vLi4vc3RhdGljL2ljb25zL3RvcHRhbC5naWYnIC8+PC9hPlxuICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWFybmFkbHJcIj48aW1nIGFsdD0nZ2l0aHViJyBjbGFzc05hbWU9J2ljb24gZ3Jvdy1sYXJnZS0yIG1sMycgc3JjPScuLi8uLi9zdGF0aWMvaWNvbnMvZ2l0aHViLmdpZicgLz48L2E+XG4gICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hYXJvbmFkbGVyL1wiPjxpbWcgYWx0PSdsaW5rZWRpbicgY2xhc3NOYW1lPSdpY29uIGdyb3ctbGFyZ2UtMiBtbDMnIHNyYz0nLi4vLi4vc3RhdGljL2ljb25zL2xpbmtlZGluLnBuZycgLz48L2E+XG4gICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9hYXJvbmFkbGVyL1wiPjxpbWcgYWx0PSdjb2RlcGVuJyBjbGFzc05hbWU9J2ljb24gZ3Jvdy1sYXJnZS0yIG1sMycgc3JjPScuLi8uLi9zdGF0aWMvaWNvbnMvY29kZXBlbi5wbmcnIC8+PC9hPlxuICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vQGFhcm9uYWRsZXJcIj48aW1nIGFsdD0nbWVkaXVtJyBjbGFzc05hbWU9J2ljb24gZ3Jvdy1sYXJnZS0yIG1sMycgc3JjPScuLi8uLi9zdGF0aWMvaWNvbnMvbWVkaXVtLnBuZycgLz48L2E+XG4gICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vd3d3LnByb2R1Y3RodW50LmNvbS9AYWFybmFkbHJcIj48aW1nIGNsYXNzTmFtZT0naWNvbiBncm93LWxhcmdlLTIgbWwzJyBzcmM9Jy4uLy4uL3N0YXRpYy9pY29ucy9wcm9kaHVudC5wbmcnIC8+PC9hPlxuICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL3dvcmtpbmdub3R3b3JraW5nLmNvbS9hYXJuXCI+PGltZyBjbGFzc05hbWU9J2ljb24gZ3Jvdy1sYXJnZS0yIG1sMycgc3JjPScuLi8uLi9zdGF0aWMvaWNvbnMvd253LnBuZycgLz48L2E+XG4gICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vYWFyb25hZGxlclwiPjxpbWcgY2xhc3NOYW1lPSdpY29uIGdyb3ctbGFyZ2UtMiBtbDMnIHNyYz0nLi4vLi4vc3RhdGljL2ljb25zL3R3aXR0ZXIucG5nJyAvPjwvYT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYXJhZ3JhcGggZjUgbGgtY29weTQgbWgzXCI+XG4gICAgICAgIEhpIHRoZXJlLiBJ4oCZbSBhIFVYIGRlc2lnbmVyICYgRnJvbnQtZW5kIGRldmVsb3BlciBpbiBOWUMuIEnigJl2ZSB3b3JrZWQgb25cbiAgICAgICAgcHJvamVjdHMgZm9yIEZhY2Vib29rLCBHb29nbGUsIElCTSwgUi9HQSwgRHJvZ2E1IGFuZFxuICAgICAgICBvdGhlcnMuIE15IHdvcmsgaGFzIGJlZW4gcmVjb2duaXplZCBieSBDYW5uZXMsIEFJQ1AsIHRoZSBBcnQgRGlyZWN0b3JzXG4gICAgICAgIENsdWIsIENsaW9zLCBBcmNoaXZlLCBBZHdlZWssIGFuZCB0aGUgTmV3IFlvcmsgVGltZXMuIE15IGZvY3VzIGlzIG9uIDxzcGFuIGNsYXNzTmFtZT1cImJnLWdyZWVuOFwiPiZuYnNwO1VYIGRlc2lnbiZuYnNwOzwvc3Bhbj4gLCA8c3BhbiBjbGFzc05hbWU9XCJiZy10ZWFsOFwiPiZuYnNwO0NTUzMmbmJzcDs8L3NwYW4+ICwgPHNwYW4gY2xhc3NOYW1lPVwiYmctY3lhbjhcIj4mbmJzcDtKYXZhU2NyaXB0IEVTNiArIFJlYWN0Jm5ic3A7PC9zcGFuPiBhbmQgPHNwYW4gY2xhc3NOYW1lPVwiYmctYmx1ZTZcIj4mbmJzcDtjb2RlZFxuICAgICAgICBhbmltYXRpb24mbmJzcDs8L3NwYW4+LlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gIDxzdHlsZSBqc3g+e2BcbiAgICAuaWNvbntcbiAgICAgIHdpZHRoOjIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuICAgIC8vLnBhcmFncmFwaHtcbiAgICAvLyAgZm9udC13ZWlnaHQ6MzAwO1xuICAgIC8vfVxuICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZUJpbztcbiJdfQ== */\n/*@ sourceURL=/Users/aaronadler/Desktop/www-aa-next7/Components/WelcomeBio/WelcomeBio.js */",
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
var _jsxFileName = "/Users/aaronadler/Desktop/www-aa-next7/pages/index.js";







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