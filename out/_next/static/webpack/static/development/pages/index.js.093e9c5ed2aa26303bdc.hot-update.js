webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/TopNav/TopNav.js":
/*!*************************************!*\
  !*** ./Components/TopNav/TopNav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_scrollchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scrollchor */ "./node_modules/react-scrollchor/lib/scrollchor.js");
/* harmony import */ var react_scrollchor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollchor__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/aaronadler/Desktop/www-aa-next7/Components/TopNav/TopNav.js";



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  bottom:2px;\n  margin-right: 6px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';

 // import jQuery from 'jquery';
// import '../easings';      
// const Container = styled.div`
//     position: fixed;
//     top: 0;
//     right: 0;
//     z-index:99;
// `

var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].i(_templateObject());

var easeInOutQuart = function easeInOutQuart(x, t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
};

var TopNav = function TopNav() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1690151429" + " " + "container white flex items-center justify-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scrollchor__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
    className: "jsx-1690151429" + " " + "flex items-center icon grow2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    className: "fa fa-suitcase blue5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1690151429" + " " + "mr4 text-shad-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Tools"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scrollchor__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
    className: "jsx-1690151429" + " " + "flex items-center icon grow2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    className: "fa fa-envelope-o blue5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1690151429" + " " + "mr4 text-shad-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1690151429",
    css: ".container.jsx-1690151429{position:fixed;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3Avd3d3LWFhLW5leHQ3L0NvbXBvbmVudHMvVG9wTmF2L1RvcE5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q2MsQUFFa0IsZUFBQyIsImZpbGUiOiIvVXNlcnMvYWFyb25hZGxlci9EZXNrdG9wL3d3dy1hYS1uZXh0Ny9Db21wb25lbnRzL1RvcE5hdi9Ub3BOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0ICdmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFNjcm9sbGNob3IgZnJvbSAncmVhY3Qtc2Nyb2xsY2hvcic7XG4vLyBpbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG4vLyBpbXBvcnQgJy4uL2Vhc2luZ3MnOyAgICAgIFxuXG4vLyBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgICB0b3A6IDA7XG4vLyAgICAgcmlnaHQ6IDA7XG4vLyAgICAgei1pbmRleDo5OTtcbi8vIGBcblxuY29uc3QgSWNvbiA9IHN0eWxlZC5pYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbToycHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuYFxuXG5jb25zdCBlYXNlSW5PdXRRdWFydCA9IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG4gIGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQqdCArIGI7XG4gIHJldHVybiAtYy8yICogKCh0LT0yKSp0KnQqdCAtIDIpICsgYjtcbn1cblxuXG5cbmNvbnN0IFRvcE5hdiA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj5cblxuXG4gICAgICA8U2Nyb2xsY2hvciAgYW5pbWF0ZT17e29mZnNldDogNTAsIGR1cmF0aW9uOiAxNDAwLCBlYXNpbmc6IGVhc2VJbk91dFF1YXJ0IH19IHRvPVwiI2NvcmV0b29sc1wiIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGljb24gZ3JvdzJcIj5cbiAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmEgZmEtc3VpdGNhc2UgYmx1ZTVcIiAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtcjQgdGV4dC1zaGFkLTFcIj5Ub29sczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Njcm9sbGNob3I+XG5cbiAgICAgIDxTY3JvbGxjaG9yICBhbmltYXRlPXt7b2Zmc2V0OiAtMzUwLCBkdXJhdGlvbjogMTQwMCwgZWFzaW5nOiBlYXNlSW5PdXRRdWFydCB9fSB0bz1cIiNjb250YWN0XCIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgaWNvbiBncm93MlwiPlxuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlLW8gYmx1ZTVcIiAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yNCB0ZXh0LXNoYWQtMVwiPkNvbnRhY3Q8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TY3JvbGxjaG9yPlxuXG4gIDxzdHlsZSBqc3g+e2BcbiAgLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbiAgICBcbiAgICBgfTwvc3R5bGU+XG5cbiAgPC9kaXY+XG4pO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2OyJdfQ== */\n/*@ sourceURL=/Users/aaronadler/Desktop/www-aa-next7/Components/TopNav/TopNav.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TopNav);

/***/ })

})
//# sourceMappingURL=index.js.093e9c5ed2aa26303bdc.hot-update.js.map