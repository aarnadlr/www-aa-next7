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
/* harmony import */ var _CodeWindow_js_CodeWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CodeWindow.js/CodeWindow */ "./Components/CodeWindow.js/CodeWindow.js");
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
    className: "jsx-4117071207" + " " + "flex flex-wrap justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, _src_projects__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (project) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: uuidv1(),
      className: "jsx-4117071207" + " " + 'card',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4117071207" + " " + "br2 ma2 bg-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: project.link,
      className: "jsx-4117071207",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, project.image ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: project.image,
      alt: "alt",
      className: "jsx-4117071207" + " " + ((project.gif ? "gifStyle" : "image") || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CodeWindow_js_CodeWindow__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4117071207" + " " + "textContainer pa4b lh-copy3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "title",
      className: "jsx-4117071207" + " " + "f3c mt1 mb0 fw6 lh-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, project.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "desc",
      className: "jsx-4117071207" + " " + "f6b blue7  mt3 mb4 space",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, project.desc), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "",
      className: "jsx-4117071207" + " " + "projectRole f6 mt1 blue7 mb2 fw6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "My project role :"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      style: {
        listStyleType: 'circle'
      },
      className: "jsx-4117071207" + " " + 'f6b blue7',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-4117071207" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, project.role1 ? project.role1 : project.role), project.role2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-4117071207" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, project.role2) : null, project.role3 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-4117071207" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, project.role3) : null, project.role4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-4117071207" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, project.role4) : null, project.role5 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-4117071207" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, project.role5) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "",
      className: "jsx-4117071207" + " " + "f6 mt4 mb0 blue7 fw6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "Project stack:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      first: "",
      className: "jsx-4117071207" + " " + "mt0 tag bg-blue5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, project.tag1), project.tag2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4117071207" + " " + "mt0 tag bg-blue6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, project.tag2) : null, project.tag3 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4117071207" + " " + "mt0 tag bg-indigo7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, project.tag3) : null, project.tag4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4117071207" + " " + "mt0 tag bg-violet7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, project.tag4) : null, project.tag5 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4117071207" + " " + "mt0 tag bg-violet7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, project.tag5) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "",
      className: "jsx-4117071207" + " " + "completed dib f7 blue7 ph3 pv2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, "Completed: \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-4117071207" + " " + "fw7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, project.year))))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4117071207",
    css: ".card.jsx-4117071207{width:430px;-webkit-transition:all .3s ease;transition:all .3s ease;}.card.jsx-4117071207:hover{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}.completed.jsx-4117071207{border:1px solid blue;margin-top:2.7rem;}.image.jsx-4117071207{border-top-right-radius:4px;border-top-left-radius:4px;}.gifStyle.jsx-4117071207{width:100%;border-top-right-radius:4px;border-top-left-radius:4px;}.tag.jsx-4117071207{color:white;display:inline-block;padding:4px 12px;border-radius:6px;font-size:10px;margin-top:10px;}p.tag.jsx-4117071207:not([first]){margin-left:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9DYXJkcy9DYXJkcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SVksQUFFZSxBQUtrQixBQUdSLEFBSU0sQUFJakIsQUFNQyxBQVFJLFdBYlksQ0FoQkosQUFzQkgsSUFPSixNQXJCQyxNQUlTLEtBV1YsTUFOVSxDQVRSLFVBZ0JELEtBWlUsV0FLQSxFQWZjLEFBdUIzQixlQUNDLGFBdEJlLEdBc0JkIiwiZmlsZSI6Ii9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9DYXJkcy9DYXJkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBUaWx0IGZyb20gXCJyZWFjdC10aWx0XCI7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4uLy4uL3NyYy9wcm9qZWN0c1wiO1xuaW1wb3J0IENvZGVXaW5kb3cgZnJvbSBcIi4uL0NvZGVXaW5kb3cuanMvQ29kZVdpbmRvd1wiO1xuLy8gaW1wb3J0ICcuL0NhcmRzLmNzcyc7XG4vLyBpbXBvcnQgJy4uLy4uL3NyYy9jc3MvZW50cnkuY3NzJztcbmNvbnN0IHV1aWR2MSA9IHJlcXVpcmUoXCJ1dWlkL3YxXCIpO1xuXG4vLyBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuLy8gICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEpOyAqL1xuXG4vLyBgXG4vLyBjb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxuLy8gICB3aWR0aDogNDMwcHg7XG4vLyAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbi8vICAgLyogLW1vei10cmFuc2l0aW9uOiBzY2FsZSAuM3MgZWFzZTsgKi9cbi8vICAgLyogLXdlYmtpdC10cmFuc2l0aW9uOiBzY2FsZSAuM3MgZWFzZTsgKi9cbi8vICAgJjpob3Zlcntcbi8vICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7XG4vLyAgIH1cbi8vIGA7XG5cbi8vIGNvbnN0IERpdjIgPSBzdHlsZWQuZGl2YFxuLy8gICAvKiBmbGV4OiAxOyAqL1xuLy8gYDtcblxuLy8gY29uc3QgQ29tcGxldGVkID0gc3R5bGVkLnBgXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4vLyAgIG1hcmdpbi10b3A6IDIuN3JlbTtcblxuLy8gYDtcblxuXG4vLyBjb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxuLy8gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuLy8gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4vLyBgXG4vLyAtLS0tLS0tLS0gRU5EIFNUWUxFRC1DT01QT05FTlRTIC0tLS0tLS0tLVxuXG5jb25zdCBDYXJkcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICAgIHJldHVybiAoXG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnIGtleT17dXVpZHYxKCl9PlxuICAgICAgICAgICAgICB7LyogPFRpbHRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJUaWx0XCJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt7IHJldmVyc2U6IHRydWUsIG1heDogMTIsIHNjYWxlOiAxLjAzLCBzcGVlZDogOTAwIH19XG4gICAgICAgICAgICAgID4gKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyMiBtYTIgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3Byb2plY3QubGluaz9wcm9qZWN0Lmxpbms6bnVsbH0+ICovfVxuICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtwcm9qZWN0Lmxpbmt9PlxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBJZiB0aGUgcHJvamVjdCBvYmplY3QgaGFzIGFuIGltYWdlIGtleSwgZGlzcGxheSBpbWcgdGFnLiBPdGhlcndpc2UsIHNob3cgYSBkaXYgZm9yIEpTIGNvZGUuICovfVxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBzcmM9e3Byb2plY3QuaW1hZ2V9IGFsdD1cImFsdFwiIGNsYXNzTmFtZT17cHJvamVjdC5naWY/XCJnaWZTdHlsZVwiOlwiaW1hZ2VcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2RlV2luZG93Lz5cbiAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0Q29udGFpbmVyIHBhNGIgbGgtY29weTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwidGl0bGVcIiBjbGFzc05hbWU9XCJmM2MgbXQxIG1iMCBmdzYgbGgtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImRlc2NcIiBjbGFzc05hbWU9XCJmNmIgYmx1ZTcgIG10MyBtYjQgc3BhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJcIiBjbGFzc05hbWU9XCJwcm9qZWN0Um9sZSBmNiBtdDEgYmx1ZTcgbWIyIGZ3NlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBNeSBwcm9qZWN0IHJvbGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlOidjaXJjbGUnfX0gY2xhc3NOYW1lPSdmNmIgYmx1ZTcnPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbXQzJz57cHJvamVjdC5yb2xlMT9wcm9qZWN0LnJvbGUxOnByb2plY3Qucm9sZX08L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnJvbGUyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtdDMnPntwcm9qZWN0LnJvbGUyfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnJvbGUzP1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtdDMnPntwcm9qZWN0LnJvbGUzfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnJvbGU0P1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtdDMnPntwcm9qZWN0LnJvbGU0fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3Qucm9sZTU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J210Myc+e3Byb2plY3Qucm9sZTV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIlwiIGNsYXNzTmFtZT1cImY2IG10NCBtYjAgYmx1ZTcgZnc2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3Qgc3RhY2s6XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGZpcnN0PVwiXCIgY2xhc3NOYW1lPVwibXQwIHRhZyBiZy1ibHVlNVwiPntwcm9qZWN0LnRhZzF9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50YWcyP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQwIHRhZyBiZy1ibHVlNlwiPntwcm9qZWN0LnRhZzJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRhZzM/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdDAgdGFnIGJnLWluZGlnbzdcIj57cHJvamVjdC50YWczfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50YWc0P1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQwIHRhZyBiZy12aW9sZXQ3XCI+e3Byb2plY3QudGFnNH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGFnNT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10MCB0YWcgYmctdmlvbGV0N1wiPntwcm9qZWN0LnRhZzV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiXCIgY2xhc3NOYW1lPVwiY29tcGxldGVkIGRpYiBmNyBibHVlNyBwaDMgcHYyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlZDogJm5ic3A7PHNwYW4gY2xhc3NOYW1lPVwiZnc3XCI+e3Byb2plY3QueWVhcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiA8L1RpbHQ+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuXG48c3R5bGUganN4PntgXG5cbiAgLmNhcmR7XG4gICAgd2lkdGg6IDQzMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbiAgICAvKiAtbW96LXRyYW5zaXRpb246IHNjYWxlIC4zcyBlYXNlOyAqL1xuICAgIC8qIC13ZWJraXQtdHJhbnNpdGlvbjogc2NhbGUgLjNzIGVhc2U7ICovXG4gICAgJjpob3ZlcntcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICB9XG4gIH1cblxuXG4gIC5jb21wbGV0ZWR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICBtYXJnaW4tdG9wOiAyLjdyZW07XG4gIH1cblxuICAuaW1hZ2V7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIH0gICAgIFxuICAuZ2lmU3R5bGV7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgfVxuICAudGFne1xuICAgIC8qIGJhY2tncm91bmQ6IGJsdWU7ICovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6MTBweDtcbiAgfVxuXG5cblxuICBwLnRhZzpub3QoW2ZpcnN0XSl7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgfVxuXG4gIHAucHJvamVjdFJvbGV7XG4gICAgLyogbGluZS1oZWlnaHQ6IDEuMzsgKi9cbiAgfVxuXG5gfTwvc3R5bGU+XG5cbiAgICAgIFxuICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRzO1xuIl19 */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/Cards/Cards.js */",
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

/***/ "./Components/CodeWindow.js/CodeWindow.js":
/*!************************************************!*\
  !*** ./Components/CodeWindow.js/CodeWindow.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodeWindow; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lottie_react_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lottie-react-web */ "lottie-react-web");
/* harmony import */ var lottie_react_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lottie_react_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_circle_diamond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-circle-diamond */ "./Components/CodeWindow.js/data-circle-diamond.json");
var _data_circle_diamond__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data-circle-diamond */ "./Components/CodeWindow.js/data-circle-diamond.json", 1);
var _jsxFileName = "/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/CodeWindow.js/CodeWindow.js";

 // import LottieControl from '../LottieControl'



function CodeWindow() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2227284577" + " " + 'codeRect',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(lottie_react_web__WEBPACK_IMPORTED_MODULE_2___default.a, {
    options: {
      animationData: _data_circle_diamond__WEBPACK_IMPORTED_MODULE_3__ // loop: false,

    },
    speed: .6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2227284577",
    css: ".codeRect.jsx-2227284577{height:207px;background:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9Db2RlV2luZG93LmpzL0NvZGVXaW5kb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJrQixBQUVnQixhQUNHLGdCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9Db2RlV2luZG93LmpzL0NvZGVXaW5kb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgTG90dGllQ29udHJvbCBmcm9tICcuLi9Mb3R0aWVDb250cm9sJ1xuaW1wb3J0IExvdHRpZSBmcm9tICdsb3R0aWUtcmVhY3Qtd2ViJztcbmltcG9ydCBpYm0gZnJvbSAnLi9kYXRhLWNpcmNsZS1kaWFtb25kJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVXaW5kb3coKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvZGVSZWN0Jz5cbiAgICAgIFxuICAgICAgey8qIDxMb3R0aWVDb250cm9sLz4gKi99XG5cbiAgICAgIDxMb3R0aWVcbiAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGlibSxcbiAgICAgICAgICAvLyBsb29wOiBmYWxzZSxcbiAgICAgICAgIFxuICAgICAgICB9fVxuICAgICAgICBzcGVlZD17LjZ9XG4gICAgICAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29kZVJlY3R7XG4gICAgICAgIFxuICAgICAgICBoZWlnaHQ6IDIwN3B4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIFxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/CodeWindow.js/CodeWindow.js */",
    __self: this
  }));
}

/***/ }),

/***/ "./Components/CodeWindow.js/data-circle-diamond.json":
/*!***********************************************************!*\
  !*** ./Components/CodeWindow.js/data-circle-diamond.json ***!
  \***********************************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, default */
/***/ (function(module) {

module.exports = {"v":"4.13.0","fr":30,"ip":10,"op":66,"w":2400,"h":1500,"nm":"Circle Square Comp 2","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"I-1 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[770.879,671.278,0],"ix":2},"a":{"a":0,"k":[3.791,4.33,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.542,4.081],[3.542,4.081],[3.542,-4.081],[-3.542,-4.081]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.791,4.33],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"I-2 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[847.104,671.278,0],"ix":2},"a":{"a":0,"k":[5.331,4.33,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[5.081,-4.081],[-5.081,-4.081],[-5.081,4.081],[5.081,4.081]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[5.331,4.33],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"I-3 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[933.709,671.278,0],"ix":2},"a":{"a":0,"k":[3.829,4.33,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[3.579,-4.081],[-3.579,-4.081],[-3.579,4.081],[3.579,4.081]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.83,4.33],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"I-4 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[847.104,899.153,0],"ix":2},"a":{"a":0,"k":[5.331,18.957,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-5.081,18.707],[5.081,18.707],[5.081,-18.707],[-5.081,-18.707]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[5.331,18.957],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"I-5 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[760.879,1127.028,0],"ix":2},"a":{"a":0,"k":[3.791,4.33,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.542,4.081],[3.542,4.081],[3.542,-4.081],[-3.542,-4.081]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.791,4.331],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"I-6 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[847.104,1127.028,0],"ix":2},"a":{"a":0,"k":[5.331,4.33,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-5.081,4.081],[5.081,4.081],[5.081,-4.081],[-5.081,-4.081]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[5.331,4.331],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"I-7 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[933.709,1127.028,0],"ix":2},"a":{"a":0,"k":[3.829,4.33,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[3.579,-4.081],[-3.579,-4.081],[-3.579,4.081],[3.579,4.081]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.83,4.331],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"B-1 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1124.246,758.341,0],"ix":2},"a":{"a":0,"k":[5.331,13.036,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[5.081,9.617],[5.081,-4.163],[5.081,-12.786],[-5.081,-12.786],[-5.081,12.786],[5.081,12.786]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[5.331,13.036],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"B-2 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1240.039,673.748,0],"ix":2},"a":{"a":0,"k":[6.748,4.577,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.152,-0.008],[0,0],[0,0],[0,0]],"o":[[0.158,0],[0,0],[0,0],[0,0],[0,0]],"v":[[6.051,4.296],[6.499,4.327],[6.499,-4.327],[-6.499,-4.327],[-6.499,4.296]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[6.748,4.577],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"B-3 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1384.774,758.338,0],"ix":2},"a":{"a":0,"k":[8.225,13.036,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.939,-0.915],[0,-1.796],[0,0],[1.026,-1],[1.625,-0.078],[0,0],[0,0],[0,0],[-1.154,0.461],[-0.898,0.924],[-0.539,1.412],[0,2.054],[0.641,1.721],[1.233,1.182],[1.771,0.668],[2.206,0],[0,0],[0,0]],"o":[[1.026,1.001],[0,0],[0,1.797],[-0.939,0.915],[0,0],[0,0],[0,0],[1.231,-0.05],[1.155,-0.462],[0.898,-0.923],[0.538,-1.412],[0,-2.052],[-0.643,-1.719],[-1.231,-1.179],[-1.77,-0.666],[0,0],[0,0],[1.625,0.078]],"v":[[-4.113,-2.663],[-2.573,1.533],[-2.573,3.919],[-4.113,8.115],[-7.975,9.585],[-7.975,12.786],[-1.648,12.786],[-1.648,12.542],[1.93,11.773],[5.01,9.693],[7.167,6.191],[7.975,0.993],[7.012,-4.665],[4.201,-9.014],[-0.301,-11.786],[-6.268,-12.786],[-7.975,-12.786],[-7.975,-4.132]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.224,13.036],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"B-4 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1240.039,870.196,0],"ix":2},"a":{"a":0,"k":[6.748,1.851,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.158,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[-0.152,0.008]],"v":[[6.051,-1.569],[-6.499,-1.569],[-6.499,1.601],[6.499,1.601],[6.499,-1.601]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[6.748,1.851],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"B-5 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1124.246,1027.02,0],"ix":2},"a":{"a":0,"k":[5.331,14.332,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[5.081,-8.937],[5.081,-14.082],[-5.081,-14.082],[-5.081,14.082],[5.081,14.082],[5.081,5.459]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[5.331,14.332],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"B-6 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1240.039,911.928,0],"ix":2},"a":{"a":0,"k":[6.748,2.823,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-6.499,2.572],[6.499,2.572],[6.499,-2.572],[-6.499,-2.572]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 2","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[6.748,2.822],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"B-7 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1394.775,1027.021,0],"ix":2},"a":{"a":0,"k":[9.225,14.331,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.77,1.566],[1.155,1],[1.359,0.462],[1.181,0],[0,0],[0,0],[0,0],[0,0],[-1.078,-1.025],[0,-1.898],[0,0],[1.078,-1.001],[1.95,0],[0,0],[0,0],[0,0],[-1.694,0.795],[-1.232,1.386],[-0.692,1.874],[0,2.156]],"o":[[-0.77,-1.564],[-1.154,-1.001],[-1.361,-0.462],[0,0],[0,0],[0,0],[0,0],[1.95,0],[1.078,1.028],[0,0],[0,1.9],[-1.078,1.001],[0,0],[0,0],[0,0],[2.002,0],[1.694,-0.795],[1.232,-1.386],[0.694,-1.873],[0,-2.309]],"v":[[7.821,-7.128],[4.934,-10.977],[1.162,-13.171],[-2.649,-13.865],[-2.649,-14.081],[-8.975,-14.081],[-8.975,-8.938],[-7.807,-8.938],[-3.265,-7.398],[-1.648,-3.01],[-1.648,-0.393],[-3.265,3.958],[-7.807,5.458],[-8.975,5.458],[-8.975,14.081],[-4.882,14.081],[0.661,12.889],[5.05,9.615],[7.936,4.728],[8.975,-1.316]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[9.225,14.331],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"B-8 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1240.039,1124.718,0],"ix":2},"a":{"a":0,"k":[6.748,4.562,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-6.499,4.311],[6.499,4.311],[6.499,-4.311],[-6.499,-4.311]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[6.748,4.562],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"M-1 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1631.96,899.153,0],"ix":2},"a":{"a":0,"k":[5.062,27.118,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-4.811,-26.868],[-4.811,26.868],[4.811,26.868],[4.811,-11.702],[4.811,-26.868]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[5.062,27.118],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"M-2 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1757.44,850.627,0],"ix":2},"a":{"a":0,"k":[7.986,22.266,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[7.66,4.236],[-6.119,-22.016],[-7.736,-22.016],[-7.736,-6.85],[-7.506,-6.85],[-3.272,1.773],[7.736,22.016],[7.736,4.236]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7.986,22.266],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"M-3 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1912.566,850.653,0],"ix":2},"a":{"a":0,"k":[8.026,22.268,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[6.083,-22.018],[-7.621,4.234],[-7.776,4.234],[-7.776,22.013],[-7.774,22.018],[3.388,1.694],[7.468,-6.466],[7.776,-6.466],[7.776,-22.018]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.026,22.268],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"M-4 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2038.444,899.153,0],"ix":2},"a":{"a":0,"k":[5.062,27.118,0],"ix":1},"s":{"a":0,"k":[1000,1000,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-4.811,-26.868],[-4.811,-11.316],[-4.811,26.868],[4.811,26.868],[4.811,-26.868]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[5.061,27.118],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"CIRCLE 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.15,"y":1},"o":{"x":0.85,"y":0},"n":"0p15_1_0p85_0","t":95,"s":[592,750,0],"e":[1004,750,0],"to":[68.6666641235352,0,0],"ti":[-68.6666641235352,0,0]},{"t":130}],"ix":2},"a":{"a":0,"k":[-475.094,-2.219,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.15,0.15,0.15],"y":[1,1,1]},"o":{"x":[0.85,0.85,0.85],"y":[0,0,0]},"n":["0p15_1_0p85_0","0p15_1_0p85_0","0p15_1_0p85_0"],"t":95,"s":[100,100,100],"e":[145,145,100]},{"t":130}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[871.562,871.562],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.15],"y":[1]},"o":{"x":[0.85],"y":[0]},"n":["0p15_1_0p85_0"],"t":95,"s":[8],"e":[6]},{"t":130}],"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-475.094,-2.219],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":450,"st":0,"bm":0}]},{"id":"comp_2","layers":[{"ddd":0,"ind":1,"ty":3,"nm":"NULL CONTROL","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1074.996,452.541,0],"ix":2},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[500,500,100],"ix":6}},"ao":0,"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"P Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-70.797,56.613,0],"ix":2},"a":{"a":0,"k":[20.304,27.118,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-1.13,1.053],[0,1.951],[0,0],[1.128,1.027],[1.95,0],[0,0]],"o":[[0,0],[1.95,0],[1.128,-1.051],[0,0],[0,-1.95],[-1.13,-1.026],[0,0],[0,0]],"v":[[-9.893,-2.387],[3.195,-2.387],[7.814,-3.965],[9.507,-8.469],[9.507,-12.01],[7.814,-16.475],[3.195,-18.015],[-9.893,-18.015]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[-1.977,-0.795],[-1.387,-1.463],[-0.72,-2.053],[0,-2.462],[0.718,-2.027],[1.385,-1.463],[1.975,-0.795],[2.464,0],[0,0],[0,0]],"o":[[0,0],[0,0],[2.464,0],[1.975,0.797],[1.385,1.463],[0.718,2.053],[0,2.516],[-0.72,2.028],[-1.387,1.462],[-1.977,0.797],[0,0],[0,0],[0,0]],"v":[[-20.055,26.868],[-20.055,-26.868],[4.118,-26.868],[10.778,-25.675],[15.821,-22.287],[18.977,-17.014],[20.055,-10.24],[18.977,-3.426],[15.821,1.809],[10.778,5.196],[4.118,6.389],[-9.893,6.389],[-9.893,26.868]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[20.304,27.118],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"A Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-27.108,63.387,0],"ix":2},"a":{"a":0,"k":[19.188,21.267,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.951,0],[-1.541,0.968],[0,1.886],[0,0],[0,0],[0,-3.263],[0,0],[-1.052,-0.789]],"o":[[2.207,0],[1.539,-0.969],[0,0],[0,0],[-5.133,0],[0,0],[0,1.631],[1.053,0.79]],"v":[[-2.848,13.857],[2.773,12.406],[5.082,8.123],[5.082,2.848],[-1.232,2.848],[-8.93,7.742],[-8.93,9.041],[-7.353,12.672]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[1.258,1.258],[0.308,2.104],[0,0],[2.051,-1.309],[3.029,0],[2.206,2.148],[0,3.582],[-2.977,2.02],[-5.492,0],[0,0],[0,0],[1.181,1.232],[2.617,0],[1.411,-1.001],[0.974,-1.386],[0,0],[-2.464,1.42],[-4.055,0],[-2.823,-2.458],[0,-4.606],[0,0],[0,0],[0,0]],"o":[[-2.155,0],[-1.258,-1.257],[0,0],[-0.668,2.617],[-2.054,1.309],[-4.105,0],[-2.207,-2.149],[0,-4.144],[2.977,-2.021],[0,0],[0,0],[0,-2.258],[-1.18,-1.232],[-2.311,0],[-1.412,1.001],[0,0],[1.487,-2.323],[2.464,-1.419],[5.44,0],[2.822,2.458],[0,0],[0,0],[0,0],[0,0]],"v":[[13.473,20.093],[8.353,18.207],[6.006,13.165],[5.545,13.165],[1.464,19.054],[-6.16,21.017],[-15.628,17.795],[-18.939,9.199],[-14.473,-0.048],[-1.771,-3.08],[5.082,-3.08],[5.082,-6.005],[3.311,-11.24],[-2.385,-13.087],[-7.967,-11.586],[-11.548,-8.006],[-17.398,-13.273],[-11.471,-18.887],[-1.693,-21.017],[10.702,-17.33],[14.936,-6.732],[14.936,12.164],[18.939,12.164],[18.939,20.093]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[19.188,21.267],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"R1 Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[11.346,63.387,0],"ix":2},"a":{"a":0,"k":[11.76,20.343,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[-0.539,1.001],[-0.874,0.77],[-1.207,0.462],[-1.592,0],[0,0],[0,0],[0,0],[1.693,-0.974],[0,-2.206],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0.257,-1.078],[0.538,-1.001],[0.872,-0.77],[1.205,-0.462],[0,0],[0,0],[0,0],[-3.336,0],[-1.694,0.975],[0,0],[0,0]],"v":[[-11.51,20.094],[-11.51,-20.094],[-1.656,-20.094],[-1.656,-11.779],[-1.271,-11.779],[-0.077,-14.896],[2.04,-17.553],[5.158,-19.4],[9.353,-20.094],[11.51,-20.094],[11.51,-10.777],[8.429,-10.777],[0.885,-9.316],[-1.656,-4.542],[-1.656,20.094]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[11.76,20.343],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"T Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[38.636,57.883,0],"ix":2},"a":{"a":0,"k":[12.259,25.848,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.771,1.77],[0,3.285],[0,0],[0,0],[0,0],[0,0],[-0.539,0.693],[0,1.386],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[-3.388,0],[-1.77,-1.771],[0,0],[0,0],[0,0],[0,0],[1.488,0],[0.539,-0.693],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[4.312,25.598],[-3.426,22.941],[-6.083,15.359],[-6.083,-6.814],[-12.01,-6.814],[-12.01,-14.59],[-8.93,-14.59],[-5.89,-15.629],[-5.081,-18.747],[-5.081,-25.598],[3.773,-25.598],[3.773,-14.59],[12.01,-14.59],[12.01,-6.814],[3.773,-6.814],[3.773,17.667],[11.393,17.667],[11.393,25.598]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.259,25.848],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"N Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[76.358,62.926,0],"ix":2},"a":{"a":0,"k":[17.418,20.805,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[-1.77,1.462],[-3.13,0],[-2.207,-2.72],[0,-5.03],[0,0],[0,0],[0,0],[1.027,1.437],[2.36,0],[0.949,-0.281],[0.743,-0.539],[0.462,-0.795],[0,-1.077],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0.821,-2.156],[1.771,-1.463],[4.158,0],[2.207,2.72],[0,0],[0,0],[0,0],[0,-2.874],[-1.027,-1.437],[-1.027,0],[-0.95,0.283],[-0.745,0.539],[-0.462,0.796],[0,0],[0,0]],"v":[[-17.168,20.555],[-17.168,-19.632],[-7.313,-19.632],[-7.313,-12.934],[-6.928,-12.934],[-3.041,-18.361],[4.311,-20.555],[13.857,-16.475],[17.168,-4.85],[17.168,20.555],[7.314,20.555],[7.314,-3.849],[5.774,-10.316],[0.693,-12.472],[-2.271,-12.049],[-4.811,-10.817],[-6.62,-8.815],[-7.313,-6.006],[-7.313,20.555]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.418,20.805],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"E Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120.241,63.387,0],"ix":2},"a":{"a":0,"k":[18.727,21.268,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.565,0],[1.539,-1.744],[0,-2.772],[0,0],[0,0],[0,0],[1.359,1.72]],"o":[[-2.618,0],[-1.541,1.745],[0,0],[0,0],[0,0],[0,-2.771],[-1.362,-1.719]],"v":[[0.308,-13.626],[-5.927,-11.01],[-8.238,-4.234],[-8.238,-3.618],[8.237,-3.618],[8.237,-4.312],[6.198,-11.048]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[3.746,0],[2.335,1],[1.616,1.822],[0.872,2.592],[0,3.233],[-0.846,2.567],[-1.592,1.822],[-2.309,1.001],[-2.925,0],[-2.311,-1.078],[-1.489,-1.847],[-0.744,-2.437],[0,-2.771],[0,0],[0,0],[0,0],[-1.644,-1.758],[-3.233,0],[-1.565,1.018],[-1.232,1.581],[0,0],[2.85,-1.313]],"o":[[-2.976,0],[-2.336,-1.001],[-1.616,-1.821],[-0.873,-2.591],[0,-3.182],[0.848,-2.566],[1.589,-1.822],[2.31,-1.001],[3.13,0],[2.308,1.078],[1.488,1.848],[0.744,2.438],[0,0],[0,0],[0,0],[0,2.905],[1.642,1.759],[2.464,0],[1.566,-1.02],[0,0],[-1.642,2.317],[-2.848,1.31]],"v":[[0.461,21.018],[-7.507,19.516],[-13.434,15.281],[-17.168,8.661],[-18.477,-0.077],[-17.207,-8.7],[-13.549,-15.281],[-7.699,-19.516],[0.154,-21.018],[8.315,-19.4],[14.01,-15.012],[17.359,-8.585],[18.477,-0.771],[18.477,2.464],[-8.238,2.464],[-8.238,3.456],[-5.774,10.451],[1.539,13.087],[7.582,11.561],[11.779,7.661],[17.09,13.605],[10.354,19.049]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[18.726,21.268],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"R2 Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[158.925,63.387,0],"ix":2},"a":{"a":0,"k":[11.759,20.343,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[-0.539,1.001],[-0.873,0.77],[-1.206,0.462],[-1.591,0],[0,0],[0,0],[0,0],[1.693,-0.974],[0,-2.206],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0.256,-1.078],[0.539,-1.001],[0.872,-0.77],[1.206,-0.462],[0,0],[0,0],[0,0],[-3.336,0],[-1.695,0.975],[0,0],[0,0]],"v":[[-11.509,20.094],[-11.509,-20.094],[-1.656,-20.094],[-1.656,-11.779],[-1.271,-11.779],[-0.077,-14.896],[2.04,-17.553],[5.158,-19.4],[9.353,-20.094],[11.509,-20.094],[11.509,-10.777],[8.43,-10.777],[0.887,-9.316],[-1.656,-4.542],[-1.656,20.094]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[11.759,20.343],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"S Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[190.796,63.387,0],"ix":2},"a":{"a":0,"k":[16.841,21.267,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.515,0],[2.617,1.309],[2.002,2.31],[0,0],[-1.772,-0.975],[-2.31,0],[-1.052,0.822],[0,1.438],[0.744,0.693],[1.796,0.257],[0,0],[2.283,1.923],[0,3.695],[-0.721,1.566],[-1.334,1.104],[-1.875,0.59],[-2.309,0],[-1.514,-0.282],[-1.232,-0.539],[-1.027,-0.795],[-0.975,-0.974],[0,0],[1.643,0.822],[1.949,0],[0.95,-0.77],[0,-1.231],[-0.797,-0.693],[-1.9,-0.307],[0,0],[0,-6.671],[0.795,-1.617],[1.437,-1.155],[2.027,-0.641]],"o":[[-3.849,0],[-2.617,-1.309],[0,0],[1.488,1.694],[1.769,0.975],[2.36,0],[1.052,-0.82],[0,-1.18],[-0.744,-0.692],[0,0],[-4.362,-0.564],[-2.286,-1.925],[0,-1.949],[0.717,-1.565],[1.334,-1.104],[1.873,-0.589],[1.951,0],[1.514,0.283],[1.232,0.539],[1.026,0.797],[0,0],[-1.182,-1.233],[-1.642,-0.821],[-2.157,0],[-0.949,0.77],[0,1.335],[0.795,0.693],[0,0],[8.673,1.232],[0,1.951],[-0.796,1.617],[-1.438,1.155],[-2.029,0.642]],"v":[[0.038,21.017],[-9.661,19.054],[-16.591,13.626],[-10.585,7.775],[-5.696,11.779],[0.424,13.242],[5.543,12.009],[7.122,8.622],[6.005,5.812],[2.194,4.388],[-1.81,3.849],[-11.778,0.116],[-15.204,-8.315],[-14.126,-13.588],[-11.048,-17.591],[-6.235,-20.132],[0.038,-21.017],[5.235,-20.594],[9.354,-19.362],[12.741,-17.361],[15.743,-14.705],[9.97,-8.93],[5.735,-12.01],[0.347,-13.242],[-4.312,-12.087],[-5.735,-9.085],[-4.542,-6.044],[-0.5,-4.543],[3.58,-4.004],[16.591,7.852],[15.397,13.203],[12.048,17.36],[6.852,20.054]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[16.841,21.267],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":391,"st":0,"bm":0}]},{"id":"comp_3","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"SQUARE","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.15],"y":[1]},"o":{"x":[0.85],"y":[0]},"n":["0p15_1_0p85_0"],"t":95,"s":[90],"e":[0]},{"t":130}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.15,"y":1},"o":{"x":0.85,"y":0},"n":"0p15_1_0p85_0","t":95,"s":[1406.57,750.57,0],"e":[1002.57,750.57,0],"to":[-67.3333358764648,0,0],"ti":[67.3333358764648,0,0]},{"t":130}],"ix":2},"a":{"a":0,"k":[830.57,0.57,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[877.141,877.141],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.460000011968,0.460000011968,0.460000011968,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[830.57,0.57],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":450,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":2,"ty":0,"nm":"IBM Pre-comp-MSTR","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.8,"y":0},"n":"0p2_1_0p8_0","t":40,"s":[460,750,0],"e":[728,750,0],"to":[44.6666679382324,0,0],"ti":[-44.6666679382324,0,0]},{"t":60}],"ix":2},"a":{"a":0,"k":[1400,900,0],"ix":1},"s":{"a":0,"k":[15,15,100],"ix":6}},"ao":0,"w":2800,"h":1800,"ip":20,"op":470,"st":20,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"CIRCLE 1 Comp 1","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"n":"0p2_0p2_0p167_0p167","t":0,"s":[868,750,0],"e":[868,750,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.8,"y":0},"n":"0p2_1_0p8_0","t":40,"s":[868,750,0],"e":[1140,750,0],"to":[45.3333320617676,0,0],"ti":[-45.3333320617676,0,0]},{"t":60}],"ix":2},"a":{"a":0,"k":[1000,750,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":1,"y":0},"n":"0_1_1_0","t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-4,276],[-4,240],[2012,240],[2012,276]],"c":true}],"e":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-12,284],[-12,1216],[2012,1216],[2012,284]],"c":true}]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"n":"0p833_1_0p167_0","t":40,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-12,284],[-12,1216],[2012,1216],[2012,284]],"c":true}],"e":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-12,-20],[-12,1520],[2012,1520],[2012,-20]],"c":true}]},{"t":42}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":2000,"h":1500,"ip":0,"op":450,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"Partners-ONLY-MSTR","refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.8,"y":0},"n":"0p2_1_0p8_0","t":40,"s":[1770,754,0],"e":[1486,754,0],"to":[-47.3333320617676,0,0],"ti":[47.3333320617676,0,0]},{"t":60}],"ix":2},"a":{"a":0,"k":[1075,450,0],"ix":1},"s":{"a":0,"k":[30,30,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[0,0],[0,596.667],[2150,596.667],[2150,0]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":2150,"h":900,"ip":33,"op":483,"st":33,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"SQUARE Comp 1","refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"n":["0p2_1_0p8_0"],"t":40,"s":[45],"e":[0]},{"t":60}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.8,"y":0},"n":"0p2_1_0p8_0","t":40,"s":[1763.181,768.117,0],"e":[1491.181,768.117,0],"to":[-45.3333320617676,0,0],"ti":[45.3333320617676,0,0]},{"t":60}],"ix":2},"a":{"a":0,"k":[1431.181,768.117,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.8,"y":0},"n":"0p2_1_0p8_0","t":20,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1219.219,1889.408],[1196.592,1866.781],[2528.781,534.592],[2551.408,557.219]],"c":true}],"e":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1219.219,1889.408],[285.686,953.686],[1617.875,-378.503],[2551.408,557.219]],"c":true}]},{"i":{"x":0.2,"y":1},"o":{"x":0.8,"y":0},"n":"0p2_1_0p8_0","t":45,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1219.219,1889.408],[285.686,953.686],[1617.875,-378.503],[2551.408,557.219]],"c":true}],"e":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1219.219,1889.409],[-338.125,329.497],[994.064,-1002.692],[2551.408,557.22]],"c":true}]},{"t":46}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":2000,"h":1500,"ip":0,"op":450,"st":0,"bm":0}]};

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
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fas fa-database rainbow9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), "Redux"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-code rainbow9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), "NextJS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "\uD83D\uDD25"), "Firebase"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    role: "img",
    "aria-label": "skill",
    className: "jsx-794909562" + " " + "f4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "\uD83D\uDC85 "), " \xA0Styled-Components"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-th-large rainbow9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), " ", "Bootstrap 4"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-bolt rainbow10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), " ", "Tachyons"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-magic rainbow11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  })), " ", "jQuery"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-video rainbow12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  })), " ", "Greensock/GSAP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-window-maximize rainbow12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  })), " ", "SVG"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-laptop-code rainbow13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  })), " ", "Git/GitHub"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
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
    className: "jsx-794909562" + " " + "fa fa-cube rainbow13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  })), " ", "Blender3D"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fab fa-facebook-square rainbow14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  })), " ", "Facebook AR Studio"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-794909562" + " " + "coreskills-box__core-col blue0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-794909562" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "Secondary Tools"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-794909562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Software I work with, and I am actively learning."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-794909562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-terminal rainbow11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  })), " ", "NodeJS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-random rainbow12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  })), " ", "Express"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fas fa-database rainbow13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  })), " ", "MongoDB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-briefcase rainbow14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  })), " ", "PostCSS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fas fa-wine-bottle rainbow14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  })), " ", "Gulp"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-language rainbow15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  })), " ", "Babel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-cube rainbow17",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  })), " ", "Webpack")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "794909562",
    css: ".container.jsx-794909562{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.coreskills-box.jsx-794909562{border:1px solid #7db9e5;margin:100px 0 0;text-align:center;padding-bottom:20px;width:70%;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:90%;text-align:left;padding-bottom:50px;}.coreskills-box__core-col.jsx-794909562{line-height:2rem;width:260px;margin:40px 30px;font-size:.9rem;}.coreskills-box__core-col.jsx-794909562 p.jsx-794909562{margin-bottom:30px;font-size:.9rem;line-height:2;}h1.jsx-794909562{font-size:1.5rem;}.skill.jsx-794909562{line-height:2;list-style:none;}ul.jsx-794909562{padding:0;list-style-type:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9Db3JlVG9vbHMvQ29yZVRvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBSYyxBQUV1QixBQU1LLEFBZ0JSLEFBTUUsQUFNRixBQUdILEFBS0osVUFDVyxJQUxMLEdBZkosQUFXTSxFQUpGLENBN0JILEtBTUksSUFpQkEsQ0FjQSxDQUtLLElBWlIsT0F2QkksSUFpQkYsR0FNRCxXQXRCSyxFQWdCSCxrQkFmUCxVQUNVLElBVEMsZ0JBVVIsS0FUVSxxRUFVSixtQkFDSixXQVhTLDhDQVlILHFCQUNFLG1HQUNiLFVBQ00sZ0JBQ0ksb0JBQUMiLCJmaWxlIjoiL1VzZXJzL2Fhcm9uYWRsZXIvRHJvcGJveC9ERVNERVZfRFJJQkJCL3d3dy1hYS1uZXh0Ny9Db21wb25lbnRzL0NvcmVUb29scy9Db3JlVG9vbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgQ29yZVRvb2xzID0gKCkgPT4gKFxuICA8ZGl2IGlkPVwiY29yZXRvb2xzXCIgY2xhc3NOYW1lPVwiZmxleCBjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIGNvcmVza2lsbHMtYm94IGxpZ2h0ZXN0LWJsdWUgXCI+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Jlc2tpbGxzLWJveF9fY29yZS1jb2wgYmx1ZTBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIlwiPkNvcmUgVG9vbHM8L2gxPlxuICAgICAgICA8cD5Tb2Z0d2FyZSBhbmQgbGlicmFyaWVzIEkgb2Z0ZW4gd29yayB3aXRoIGluIHByb2plY3RzLjwvcD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmFzIGZhLXBlbmNpbC1hbHQgcmFpbmJvdzFcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgU2tldGNoPC9saT5cblxuXG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYXMgZmEtY29kZSByYWluYm93MlwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBIVE1MNTwvbGk+XG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY3NzMyByYWluYm93M1wiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBDU1MzPC9saT5cblxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aC1sYXJnZSByYWluYm93NFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBDU1MgR3JpZDwvbGk+XG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFycyByYWluYm93NVwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBDU1MgRmxleGJveDwvbGk+XG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtcGhvdG8tbyByYWluYm93NlwiIC8+ICovfVxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtc2FzcyByYWluYm93NlwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj57XCJcIn1TYXNzL3Njc3M8L2xpPlxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wbGF5LWNpcmNsZSByYWluYm93N1wiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBBZnRlciBFZmZlY3RzPC9saT5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FtZXJhIHJhaW5ib3c4XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIFBob3Rvc2hvcDwvbGk+XG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmV6aWVyLWN1cnZlIHJhaW5ib3c4XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIElsbHVzdHJhdG9yPC9saT5cblxuXG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1qcy1zcXVhcmUgcmFpbmJvdzlcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBKYXZhc2NyaXB0IEVTNlxuICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1yZWFjdCByYWluYm93OVwiIC8+ICovfVxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtcmVhY3QgcmFpbmJvdzlcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBSZWFjdFxuICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYWIgZmEtcmVhY3QgcmFpbmJvdzlcIiAvPiAqL31cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRhdGFiYXNlIHJhaW5ib3c5XCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgUmVkdXhcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIFxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29kZSByYWluYm93OVwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBOZXh0SlNcbiAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZGUgcmFpbmJvdzlcIiAvPiAqL31cbiAgICAgICAgICAgIPCflKUgXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBGaXJlYmFzZVxuICAgICAgICAgIDwvbGk+XG5cblxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiByb2xlPSdpbWcnIGFyaWEtbGFiZWw9XCJza2lsbFwiIGNsYXNzTmFtZT1cImY0XCI+8J+ShSA8L3NwYW4+ICZuYnNwO1N0eWxlZC1Db21wb25lbnRzXG4gICAgICAgICAgPC9saT5cblxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aC1sYXJnZSByYWluYm93OVwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgQm9vdHN0cmFwIDQ8L2xpPlxuXG4gICAgICAgXG5cbiAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1sYW5ndWFnZSByYWluYm93MTNcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIEJhYmVsPC9saT4gKi99XG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJvbHQgcmFpbmJvdzEwXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBUYWNoeW9uczwvbGk+XG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbWFnaWMgcmFpbmJvdzExXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBqUXVlcnk8L2xpPlxuICAgICAgICAgICAgXG4gICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbGFwdG9wIHJhaW5ib3cxNlwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgSUJNIENvbG9yIExpYnJhcnk8L2xpPiAqL31cblxuXG4gICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYWRqdXN0IHJhaW5ib3cxN1wiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgUGFseDwvbGk+ICovfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXZpZGVvIHJhaW5ib3cxMlwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgR3JlZW5zb2NrL0dTQVA8L2xpPlxuXG5cbiAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maXJzdC1vcmRlciByYWluYm93MTdcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIFNlbWFudGljVUk8L2xpPiAqL31cblxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS13aW5kb3ctbWF4aW1pemUgcmFpbmJvdzEyXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBTVkc8L2xpPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxhcHRvcC1jb2RlIHJhaW5ib3cxM1wiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgR2l0L0dpdEh1YjwvbGk+XG5cblxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY3ViZSByYWluYm93MTNcIiAvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBCbGVuZGVyM0Q8L2xpPlxuXG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1zcXVhcmUgcmFpbmJvdzE0XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBGYWNlYm9vayBBUiBTdHVkaW88L2xpPlxuXG57LyogICAgICAgICAgICAgXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2x1bW5zIHJhaW5ib3cxNFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgSW5EZXNpZ248L2xpPiAqL31cblxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cblxuXG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Jlc2tpbGxzLWJveF9fY29yZS1jb2wgYmx1ZTBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIlwiPlNlY29uZGFyeSBUb29sczwvaDE+XG4gICAgICAgIDxwPlNvZnR3YXJlIEkgd29yayB3aXRoLCBhbmQgSSBhbSBhY3RpdmVseSBsZWFybmluZy48L3A+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRlcm1pbmFsIHJhaW5ib3cxMVwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgTm9kZUpTXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXJhbmRvbSByYWluYm93MTJcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIEV4cHJlc3NcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRhdGFiYXNlIHJhaW5ib3cxM1wiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgTW9uZ29EQlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1icmllZmNhc2UgcmFpbmJvdzE0XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBQb3N0Q1NTXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ3VscCByYWluYm93MTRcIiAvPiAqL31cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmUtYm90dGxlIHJhaW5ib3cxNFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgR3VscFxuICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cInNraWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcGFjZS1zaHV0dGxlIHJhaW5ib3cxNlwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgTWV0ZW9yXG4gICAgICAgICAgPC9saT4gKi99XG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxhbmd1YWdlIHJhaW5ib3cxNVwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgQmFiZWxcbiAgICAgICAgICA8L2xpPlxuXG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWN1YmUgcmFpbmJvdzE3XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBXZWJwYWNrXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG5cblxuICAgIDwvZGl2PlxuXG5cbiAgPHN0eWxlIGpzeD57YFxuICAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb3Jlc2tpbGxzLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ZGI5ZTU7XG4gIG1hcmdpbjogMTAwcHggMCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweFxufVxuXG5cblxuLmNvcmVza2lsbHMtYm94X19jb3JlLWNvbCB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMjYwcHg7XG4gIG1hcmdpbjogNDBweCAzMHB4O1xuICBmb250LXNpemU6IC45cmVtXG59XG5cblxuXG5cbi5jb3Jlc2tpbGxzLWJveF9fY29yZS1jb2wgcCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIC8qIGZvbnQtc2l6ZTogMXJlbSAqL1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgbGluZS1oZWlnaHQ6IDI7XG59XG5cblxuXG5cbmgxIHtcbiAgZm9udC1zaXplOiAxLjVyZW1cbn1cblxuXG5pIHtcbiAvLyBjb2xvcjogIzFiMmZlOTtcbn1cbi5za2lsbCB7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBsaXN0LXN0eWxlOiBub25lXG59XG5cbnVse1xuICAvKiBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50OyAqL1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cbn1cblxuXG4gIGB9PC9zdHlsZT4gIFxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvcmVUb29scztcbiJdfQ== */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/CoreTools/CoreTools.js */",
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

/***/ "./Components/HOCs/RSSRequestHOC.js":
/*!******************************************!*\
  !*** ./Components/HOCs/RSSRequestHOC.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/HOCs/RSSRequestHOC.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var RSSRequestHOCFn = function RSSRequestHOCFn(WrappedComponent) {
  var RSSRequestHOC =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(RSSRequestHOC, _React$Component);

    function RSSRequestHOC() {
      var _this;

      _classCallCheck(this, RSSRequestHOC);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RSSRequestHOC).call(this));
      _this.state = {
        status: '',
        url: ''
      };
      return _this;
    }

    _createClass(RSSRequestHOC, [{
      key: "RSSRequestHOC",
      value: function RSSRequestHOC() {
        var _this2 = this;

        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
          if (request.readyState == 4 && request.status == 200) {
            var mediumData = JSON.parse(request.responseText); // console.log(myObj)

            for (var i = 0; i < 1; i++) {
              _this2.setState({
                mediumData: mediumData,
                items: mediumData.items // status: myObj.status,
                // url: myObj.feed.url
                // name: myObj.items[i].title,
                // url: myObj.items[i].link

              });
            }
          }
        };

        request.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com/feed/@aaronadler", true);
        request.send();
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        {
          this.RSSRequestHOC();
        }
      }
    }, {
      key: "render",
      value: function render() {
        // return <WrappedComponent status={this.state.status} url={this.state.url} />
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, {
          mediumData: this.state.mediumData,
          items: this.state.items,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        });
      }
    }]);

    return RSSRequestHOC;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  return RSSRequestHOC;
};

/* harmony default export */ __webpack_exports__["default"] = (RSSRequestHOCFn);

/***/ }),

/***/ "./Components/MediumCard.js":
/*!**********************************!*\
  !*** ./Components/MediumCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOCs_RSSRequestHOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HOCs/RSSRequestHOC */ "./Components/HOCs/RSSRequestHOC.js");
var _jsxFileName = "/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/MediumCard.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // IMPORTANT MEDIUNM INFO:
// RSS FEED:
// https://medium.com/feed/@aaronadler
// GIST: FetchDataFromRSSFeed
// https://gist.github.com/mittalyashu/4182b0cdaa54654e6b9f3e9441831edc
// RSS 2 JSON:
// https://rss2json.com/#rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40aaronadler
// 👇👇👇
// PAGE OF POSTS I SHOULD EMULATE:
// https://medium.com/@aaronadler

var MediumCard =
/*#__PURE__*/
function (_Component) {
  _inherits(MediumCard, _Component);

  function MediumCard() {
    _classCallCheck(this, MediumCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(MediumCard).apply(this, arguments));
  }

  _createClass(MediumCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3431094448" + " " + "flex flex-wrap justify-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3431094448" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.props.items ? this.props.items.map(function (article) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3431094448" + " " + 'mediumArticle br2 ma2 pa4',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
          className: "jsx-3431094448",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, article.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          className: "jsx-3431094448",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, article.pubDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: article.link,
          className: "jsx-3431094448",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, article.link), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
          className: "jsx-3431094448",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, article.guid), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
          className: "jsx-3431094448",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, article.author), "--------------------------", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-3431094448",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, _this.props.mediumData ? _this.props.mediumData.feed.title : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-3431094448",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, _this.props.mediumData ? _this.props.mediumData.feed.link : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: article.thumbnail,
          alt: "",
          className: "jsx-3431094448",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }));
      }) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3431094448",
        css: ".card.jsx-3431094448{width:430px;-webkit-transition:all .3s ease;transition:all .3s ease;}.card.jsx-3431094448:hover{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}.mediumArticle.jsx-3431094448{background:lavender;}.mediumArticle.jsx-3431094448 a.jsx-3431094448{color:blue;}.completed.jsx-3431094448{border:1px solid blue;margin-top:2.7rem;}.image.jsx-3431094448{border-top-right-radius:4px;border-top-left-radius:4px;}.tag.jsx-3431094448{color:white;display:inline-block;padding:4px 12px;border-radius:6px;font-size:10px;margin-top:10px;}p.tag.jsx-3431094448:not([first]){margin-left:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9NZWRpdW1DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEb0IsQUFFZSxBQUtrQixBQUdWLEFBR1QsQUFHVyxBQUlNLEFBS2hCLEFBUUksV0FwQkosQ0FWWSxBQXVCSCxJQU9KLElBdkJJLEVBT0gsTUFJUyxLQU1WLE9BVkUsVUFXRCxLQVBVLGFBaEJjLEFBd0IzQixlQUNDLGFBdkJlLEdBdUJkIiwiZmlsZSI6Ii9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9NZWRpdW1DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJTU1JlcXVlc3RIT0MgZnJvbSAnLi9IT0NzL1JTU1JlcXVlc3RIT0MnXG5cbi8vIElNUE9SVEFOVCBNRURJVU5NIElORk86XG4vLyBSU1MgRkVFRDpcbi8vIGh0dHBzOi8vbWVkaXVtLmNvbS9mZWVkL0BhYXJvbmFkbGVyXG5cbi8vIEdJU1Q6IEZldGNoRGF0YUZyb21SU1NGZWVkXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9taXR0YWx5YXNodS80MTgyYjBjZGFhNTQ2NTRlNmI5ZjNlOTQ0MTgzMWVkY1xuXG4vLyBSU1MgMiBKU09OOlxuLy8gaHR0cHM6Ly9yc3MyanNvbi5jb20vI3Jzc191cmw9aHR0cHMlM0ElMkYlMkZtZWRpdW0uY29tJTJGZmVlZCUyRiU0MGFhcm9uYWRsZXJcblxuLy8g8J+Rh/CfkYfwn5GHXG4vLyBQQUdFIE9GIFBPU1RTIEkgU0hPVUxEIEVNVUxBVEU6XG4vLyBodHRwczovL21lZGl1bS5jb20vQGFhcm9uYWRsZXJcblxuXG5jbGFzcyBNZWRpdW1DYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJyMiBtYTIgYmctd2hpdGVcIj4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAge3RoaXMucHJvcHMuaXRlbXNcbiAgICAgICAgICAgP1xuICAgICAgICAgICB0aGlzLnByb3BzLml0ZW1zLm1hcCgoYXJ0aWNsZSk9PihcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGl1bUFydGljbGUgYnIyIG1hMiBwYTQnPlxuICAgICAgICAgICAgICAgIDxoMT57YXJ0aWNsZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxoMj57YXJ0aWNsZS5wdWJEYXRlfTwvaDI+XG4gICAgICAgICAgICAgICAgey8qIDxhPnthcnRpY2xlLmxpbmt9PC9hPiAqL31cbiAgICAgICAgICAgICAgICA8YSAgaHJlZj17YXJ0aWNsZS5saW5rfT57YXJ0aWNsZS5saW5rfTwvYT5cbiAgICAgICAgICAgICAgICA8aDQ+e2FydGljbGUuZ3VpZH08L2g0PlxuICAgICAgICAgICAgICAgIDxoNT57YXJ0aWNsZS5hdXRob3J9PC9oNT5cbiAgICAgICAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5tZWRpdW1EYXRhID8gdGhpcy5wcm9wcy5tZWRpdW1EYXRhLmZlZWQudGl0bGUgOiBudWxsfTwvaDM+XG4gICAgICAgICAgICAgICAgPGgzPnt0aGlzLnByb3BzLm1lZGl1bURhdGEgPyB0aGlzLnByb3BzLm1lZGl1bURhdGEuZmVlZC5saW5rIDogbnVsbH08L2gzPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17dGhpcy5wcm9wcy5tZWRpdW1EYXRhID8gdGhpcy5wcm9wcy5tZWRpdW1EYXRhLmZlZWQuaW1hZ2UgOiBudWxsfSBhbHQ9XCJcIi8+ICovfVxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLnRodW1ibmFpbH0gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKVxuICAgICAgICAgIDpcbiAgICAgICAgICBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgXG4gICAgICAgICAgey8qIDxoMz57dGhpcy5wcm9wcy5zdGF0dXN9PC9oMz4gKi99XG4gICAgICAgICAgey8qIDxoMz57dGhpcy5wcm9wcy5zdGF0dXN9PC9oMz4gKi99XG4gICAgICAgICAgey8qIDxoMz57dGhpcy5wcm9wcy51cmx9PC9oMz4gKi99XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAuY2FyZHtcbiAgICAgICAgICB3aWR0aDogNDMwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xuICAgICAgICAgIC8qIC1tb3otdHJhbnNpdGlvbjogc2NhbGUgLjNzIGVhc2U7ICovXG4gICAgICAgICAgLyogLXdlYmtpdC10cmFuc2l0aW9uOiBzY2FsZSAuM3MgZWFzZTsgKi9cbiAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubWVkaXVtQXJ0aWNsZXtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgICAgICAgfVxuICAgICAgICAubWVkaXVtQXJ0aWNsZSBhe1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgLy8gYmFja2dyb3VuZDogbGF2ZW5kZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbXBsZXRlZHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIuN3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZXtcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgfSAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAudGFne1xuICAgICAgICAgIC8qIGJhY2tncm91bmQ6IGJsdWU7ICovXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBwLnRhZzpub3QoW2ZpcnN0XSl7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAucHJvamVjdFJvbGV7XG4gICAgICAgICAgLyogbGluZS1oZWlnaHQ6IDEuMzsgKi9cbiAgICAgICAgfVxuICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSU1NSZXF1ZXN0SE9DKE1lZGl1bUNhcmQpO1xuIl19 */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/MediumCard.js */",
        __self: this
      }));
    }
  }]);

  return MediumCard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOCs_RSSRequestHOC__WEBPACK_IMPORTED_MODULE_2__["default"])(MediumCard));

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
    src: "../../static/icons/profile-pic.jpg",
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
    className: "jsx-2609408294" + " " + "paragraph f5 lh-copy4b mh3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Hi there. \xA0I'm a\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2609408294" + " " + "bg-blue6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "\xA0UI Engineer\xA0"), "\xA0,\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2609408294" + " " + "bg-cyan8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "\xA0UX Designer\xA0"), "\xA0,\xA0 and \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2609408294" + " " + "bg-teal8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\xA0Front-end Developer\xA0"), " in NYC.\xA0 I\u2019ve worked on projects for Facebook, Google, IBM, R/GA, Droga5 and others. \xA0My work has been recognized by Cannes, AICP, the Art Directors Club, Clios, Archive, Adweek, and the New York Times. \xA0My focus is on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2609408294" + " " + "bg-green8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "\xA0UX design\xA0"), " , ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2609408294" + " " + "bg-teal8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "\xA0CSS3\xA0"), " , ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2609408294" + " " + "bg-cyan8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "\xA0JavaScript ES6 + React\xA0"), " and ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2609408294" + " " + "bg-blue6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "\xA0coded animation\xA0"), ".")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2609408294",
    css: ".icon.jsx-2609408294{width:20px;height:20px;border-radius:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9XZWxjb21lQmlvL1dlbGNvbWVCaW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNjLEFBRWMsV0FDQyxZQUNNLGtCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9XZWxjb21lQmlvL1dlbGNvbWVCaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL1dlbGNvbWVCaW8uY3NzXCI7XG5cbi8vIGNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5wYFxuLy8gICBmb250LXdlaWdodDozMDA7XG4vLyBgXG5cbmNvbnN0IFdlbGNvbWVCaW8gPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG5cbiAgICA8ZGl2IGlkPVwidG9wU2VjdGlvblwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2x1bW4gY2VudGVyIHdoaXRlIG10NiBtYjVcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgaWQ9XCJwcm9maWxlLXBpY1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImdyb3cyIGNlbnRlciBtYjNcIlxuICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaWNvbnMvcHJvZmlsZS1waWMuanBnXCJcbiAgICAgICAgYWx0PSdhbHQnXG4gICAgICAvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZjJjIHRjXCI+QWFyb24gQWRsZXI8L3A+XG5cblxuICAgICAgey8qIFNPQ0lBTCBJQ09OUyBVTkRFUiBOQU1FICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbWI0Jz5cbiAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9kcmliYmJsZS5jb20vYWFybmFkbHJcIj48aW1nIGFsdD0nZHJpYmJiJyBjbGFzc05hbWU9J2ljb24gZ3Jvdy1sYXJnZS0yJyBzcmM9Jy4uLy4uL3N0YXRpYy9pY29ucy9BQS1kcmliYmJsZS1pY29uLnBuZycgLz48L2E+XG4gICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vd3d3LnRvcHRhbC5jb20vZGVzaWduZXJzL3Jlc3VtZS9hYXJvbi1hZGxlclwiPjxpbWcgYWx0PSd0b3B0YWwnIGNsYXNzTmFtZT0naWNvbiBncm93LWxhcmdlLTIgbWwzJyBzcmM9Jy4uLy4uL3N0YXRpYy9pY29ucy90b3B0YWwuZ2lmJyAvPjwvYT5cbiAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Fhcm5hZGxyXCI+PGltZyBhbHQ9J2dpdGh1YicgY2xhc3NOYW1lPSdpY29uIGdyb3ctbGFyZ2UtMiBtbDMnIHNyYz0nLi4vLi4vc3RhdGljL2ljb25zL2dpdGh1Yi5naWYnIC8+PC9hPlxuICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWFyb25hZGxlci9cIj48aW1nIGFsdD0nbGlua2VkaW4nIGNsYXNzTmFtZT0naWNvbiBncm93LWxhcmdlLTIgbWwzJyBzcmM9Jy4uLy4uL3N0YXRpYy9pY29ucy9saW5rZWRpbi5wbmcnIC8+PC9hPlxuICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vYWFyb25hZGxlci9cIj48aW1nIGFsdD0nY29kZXBlbicgY2xhc3NOYW1lPSdpY29uIGdyb3ctbGFyZ2UtMiBtbDMnIHNyYz0nLi4vLi4vc3RhdGljL2ljb25zL2NvZGVwZW4ucG5nJyAvPjwvYT5cbiAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL0BhYXJvbmFkbGVyXCI+PGltZyBhbHQ9J21lZGl1bScgY2xhc3NOYW1lPSdpY29uIGdyb3ctbGFyZ2UtMiBtbDMnIHNyYz0nLi4vLi4vc3RhdGljL2ljb25zL21lZGl1bS5wbmcnIC8+PC9hPlxuICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL3d3dy5wcm9kdWN0aHVudC5jb20vQGFhcm5hZGxyXCI+PGltZyBjbGFzc05hbWU9J2ljb24gZ3Jvdy1sYXJnZS0yIG1sMycgc3JjPScuLi8uLi9zdGF0aWMvaWNvbnMvcHJvZGh1bnQucG5nJyAvPjwvYT5cbiAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly93b3JraW5nbm90d29ya2luZy5jb20vYWFyblwiPjxpbWcgY2xhc3NOYW1lPSdpY29uIGdyb3ctbGFyZ2UtMiBtbDMnIHNyYz0nLi4vLi4vc3RhdGljL2ljb25zL3dudy5wbmcnIC8+PC9hPlxuICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2Fhcm9uYWRsZXJcIj48aW1nIGNsYXNzTmFtZT0naWNvbiBncm93LWxhcmdlLTIgbWwzJyBzcmM9Jy4uLy4uL3N0YXRpYy9pY29ucy90d2l0dGVyLnBuZycgLz48L2E+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoIGY1IGxoLWNvcHk0YiBtaDNcIj5cbiAgICAgICAgSGkgdGhlcmUuICZuYnNwO0knbSBhJm5ic3A7XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLWJsdWU2XCI+Jm5ic3A7VUkgRW5naW5lZXImbmJzcDs8L3NwYW4+Jm5ic3A7LCZuYnNwO1xuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1jeWFuOFwiPiZuYnNwO1VYIERlc2lnbmVyJm5ic3A7PC9zcGFuPiZuYnNwOywmbmJzcDsgYW5kICZuYnNwO1xuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy10ZWFsOFwiPiZuYnNwO0Zyb250LWVuZCBEZXZlbG9wZXImbmJzcDs8L3NwYW4+IGluIE5ZQy4mbmJzcDtcbiAgICAgICAgSeKAmXZlIHdvcmtlZCBvbiBwcm9qZWN0cyBmb3IgRmFjZWJvb2ssIEdvb2dsZSwgSUJNLCBSL0dBLCBEcm9nYTUgYW5kXG4gICAgICAgIG90aGVycy4gJm5ic3A7TXkgd29yayBoYXMgYmVlbiByZWNvZ25pemVkIGJ5IENhbm5lcywgQUlDUCwgdGhlIEFydCBEaXJlY3RvcnNcbiAgICAgICAgQ2x1YiwgQ2xpb3MsIEFyY2hpdmUsIEFkd2VlaywgYW5kIHRoZSBOZXcgWW9yayBUaW1lcy4gJm5ic3A7TXkgZm9jdXMgaXMgb24gPHNwYW4gY2xhc3NOYW1lPVwiYmctZ3JlZW44XCI+Jm5ic3A7VVggZGVzaWduJm5ic3A7PC9zcGFuPiAsIDxzcGFuIGNsYXNzTmFtZT1cImJnLXRlYWw4XCI+Jm5ic3A7Q1NTMyZuYnNwOzwvc3Bhbj4gLCA8c3BhbiBjbGFzc05hbWU9XCJiZy1jeWFuOFwiPiZuYnNwO0phdmFTY3JpcHQgRVM2ICsgUmVhY3QmbmJzcDs8L3NwYW4+IGFuZCA8c3BhbiBjbGFzc05hbWU9XCJiZy1ibHVlNlwiPiZuYnNwO2NvZGVkXG4gICAgICAgIGFuaW1hdGlvbiZuYnNwOzwvc3Bhbj4uXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG5cbiAgPHN0eWxlIGpzeD57YFxuICAgIC5pY29ue1xuICAgICAgd2lkdGg6MjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB9XG4gICAgLy8ucGFyYWdyYXBoe1xuICAgIC8vICBmb250LXdlaWdodDozMDA7XG4gICAgLy99XG4gIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lQmlvO1xuIl19 */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/WelcomeBio/WelcomeBio.js */",
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
/* harmony import */ var _Components_MediumCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/MediumCard */ "./Components/MediumCard.js");
var _jsxFileName = "/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/pages/index.js";







 // import RSSRequestHOC from '../Components/HOCs/RSSRequestHOC'

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_TopNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_WelcomeBio__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Cards__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_CoreTools__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
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
  // role: "UX wireframes, UI design, and client-side coded components using CSS3 and JavaScript. Implemented IBM’s Northstar and Duo design systems, including typography, .clr palettes, JSON type styles, grids and column layouts.",
  role1: "Developed wireframes and UX designs using Sketch and AdobeCC",
  role2: "Delivered front-end JavaScript code to IBM engineering",
  role3: "Implemented IBM’s Northstar and Duo design systems, including type, color palettes, grids, text styles, and column layouts",
  // role4:"Motion graphic creation for IBM Partners lockup compiled to JavaScript and SVG to run in the browser",
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
  role: "Built each piece of UI as a React component. Each product card is rendered from a mapped array, and inserted into a responsive CSS Grid.  All product data is passed from parent to child component via props. Set up custom media queries with ES6 template strings, which retrieve screen widths from a JavaScript object.",
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
  key: 30,
  // image: './images/thumbs2018/IBM-rect.jpg',
  // image: '../static/thumbs2018/IBM-rect.jpg',
  // image: require('./images/ibm.png'),
  title: 'IBM Partners - Motion Identity',
  desc: "Motion graphic creation for IBM Partners, IBM's business services portal. Click to interact with the animation in a playground view.",
  // role: "UX wireframes, UI design, and client-side coded components using CSS3 and JavaScript. Implemented IBM’s Northstar and Duo design systems, including typography, .clr palettes, JSON type styles, grids and column layouts.",
  // role1:"Developed wireframes and UX designs using Sketch and AdobeCC",
  // role3:"Implemented IBM’s Northstar and Duo design systems, including type, color palettes, grids, text styles, and column layouts",
  role1: "Designed identity in Illustrator. Animated motion in After Effects. Exported to JSON and SVG with Bodymovin to run in the browser",
  role2: "Scales to any size, runs in the browser at 60fps, compiles to a tiny 43k JSON file.",
  // techstack: ""
  // TAGS:
  tag1: 'Sketch',
  tag2: 'AfterEffects',
  tag3: 'CSS3',
  tag4: 'JavaScript',
  year: 2018,
  // HREF LINK
  // link: "./ibm.html"
  link: "https://ww2.aaronadler.com/anim-demos/5_ibm-circle-diamond/"
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
  tag3: 'JavaScript',
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
  tag3: 'JavaScript',
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
  tag2: 'JavaScript',
  tag3: 'Lottie',
  //  tag4: 'Illustrator',
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
  gif: true,
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
  tag3: 'JavaScript',
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
//    tag3: 'JavaScript',
//    tag4: 'gulp',
//    year: 2017,
//    // HREF LINK
//    link: "https://thearss.com/"
// },
{
  key: 11,
  gif: true,
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

/***/ "lottie-react-web":
/*!***********************************!*\
  !*** external "lottie-react-web" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lottie-react-web");

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