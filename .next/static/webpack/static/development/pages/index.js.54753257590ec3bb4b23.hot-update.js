webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/Cards/Cards.js":
/*!***********************************!*\
  !*** ./Components/Cards/Cards.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/projects */ "./src/projects.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/aaronadler/Desktop/www-aa-next7/Components/Cards/Cards.js";


function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid blue;\n  margin-top: 2.7rem;\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  /* flex: 1; */\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 430px;\n  transition: all .3s ease;\n  /* -moz-transition: scale .3s ease; */\n  /* -webkit-transition: scale .3s ease; */\n  &:hover{\n    transform:translateY(-10px);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* transform: scale(1); */\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 // import Tilt from "react-tilt";


 // import './Cards.css';
// import '../../src/css/entry.css';

var uuidv1 = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");

var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Div = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var Div2 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var Completed = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p(_templateObject4());
var Img = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject5()); // --------- END STYLED-COMPONENTS ---------

var Cards = function Cards() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    className: "flex flex-wrap justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, _src_projects__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (project) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
      key: uuidv1(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3796818824" + " " + "br2 ma2 bg-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: project.link,
      className: "jsx-3796818824",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Img, {
      src: project.image,
      alt: "alt",
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div2, {
      className: "textContainer pa4b lh-copy3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "title",
      className: "jsx-3796818824" + " " + "f3c mt1 mb0 fw6 lh-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, project.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "desc",
      className: "jsx-3796818824" + " " + "f6b blue7  mt3 mb4 space",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, project.desc), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "",
      className: "jsx-3796818824" + " " + "projectRole f6 mt1 blue7 mb2 fw6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "My project role :"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      style: {
        listStyleType: 'circle'
      },
      className: "jsx-3796818824" + " " + 'f6b blue7',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3796818824" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, project.role1 ? project.role1 : project.role), project.role2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3796818824" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, project.role2) : null, project.role3 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3796818824" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, project.role3) : null, project.role4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3796818824" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, project.role4) : null, project.role5 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3796818824" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, project.role5) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "",
      className: "jsx-3796818824" + " " + "f6 mt4 mb0 blue7 fw6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Project stack:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      first: "",
      className: "jsx-3796818824" + " " + "mt0 tag bg-blue5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, project.tag1), project.tag2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3796818824" + " " + "mt0 tag bg-blue6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, project.tag2) : null, project.tag3 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3796818824" + " " + "mt0 tag bg-indigo7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, project.tag3) : null, project.tag4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3796818824" + " " + "mt0 tag bg-violet7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, project.tag4) : null, project.tag5 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3796818824" + " " + "mt0 tag bg-violet7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, project.tag5) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Completed, {
      id: "",
      className: "dib f7 blue7 ph3 pv2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "Completed: \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3796818824" + " " + "fw7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, project.year))))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3796818824",
    css: ".tag.jsx-3796818824{color:white;display:inline-block;padding:4px 12px;border-radius:6px;font-size:10px;margin-top:10px;}p.tag.jsx-3796818824:not([first]){margin-left:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3Avd3d3LWFhLW5leHQ3L0NvbXBvbmVudHMvQ2FyZHMvQ2FyZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUlrQixBQUdlLEFBUUksWUFQSyxJQU9KLGlCQU5BLGlCQUNDLGtCQUNILGVBQ0MsZ0JBQUMiLCJmaWxlIjoiL1VzZXJzL2Fhcm9uYWRsZXIvRGVza3RvcC93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9DYXJkcy9DYXJkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBUaWx0IGZyb20gXCJyZWFjdC10aWx0XCI7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4uLy4uL3NyYy9wcm9qZWN0c1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbi8vIGltcG9ydCAnLi9DYXJkcy5jc3MnO1xuLy8gaW1wb3J0ICcuLi8uLi9zcmMvY3NzL2VudHJ5LmNzcyc7XG5jb25zdCB1dWlkdjEgPSByZXF1aXJlKFwidXVpZC92MVwiKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgLyogdHJhbnNmb3JtOiBzY2FsZSgxKTsgKi9cblxuYFxuY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDQzMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG4gIC8qIC1tb3otdHJhbnNpdGlvbjogc2NhbGUgLjNzIGVhc2U7ICovXG4gIC8qIC13ZWJraXQtdHJhbnNpdGlvbjogc2NhbGUgLjNzIGVhc2U7ICovXG4gICY6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBEaXYyID0gc3R5bGVkLmRpdmBcbiAgLyogZmxleDogMTsgKi9cbmA7XG5cbmNvbnN0IENvbXBsZXRlZCA9IHN0eWxlZC5wYFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICBtYXJnaW4tdG9wOiAyLjdyZW07XG5cbmA7XG5cblxuY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuYFxuLy8gLS0tLS0tLS0tIEVORCBTVFlMRUQtQ09NUE9ORU5UUyAtLS0tLS0tLS1cblxuY29uc3QgQ2FyZHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cblxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICB7cHJvamVjdHMubWFwKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgICByZXR1cm4gKFxuXG5cbiAgICAgICAgICAgIDxEaXYga2V5PXt1dWlkdjEoKX0+XG4gICAgICAgICAgICAgIHsvKiA8VGlsdFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlRpbHRcIlxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3sgcmV2ZXJzZTogdHJ1ZSwgbWF4OiAxMiwgc2NhbGU6IDEuMDMsIHNwZWVkOiA5MDAgfX1cbiAgICAgICAgICAgICAgPiAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnIyIG1hMiBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17cHJvamVjdC5saW5rP3Byb2plY3QubGluazpudWxsfT4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3Byb2plY3QubGlua30+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1nICBzcmM9e3Byb2plY3QuaW1hZ2V9IGFsdD1cImFsdFwiIGNsYXNzTmFtZT1cIlwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8RGl2MiBjbGFzc05hbWU9XCJ0ZXh0Q29udGFpbmVyIHBhNGIgbGgtY29weTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwidGl0bGVcIiBjbGFzc05hbWU9XCJmM2MgbXQxIG1iMCBmdzYgbGgtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImRlc2NcIiBjbGFzc05hbWU9XCJmNmIgYmx1ZTcgIG10MyBtYjQgc3BhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJcIiBjbGFzc05hbWU9XCJwcm9qZWN0Um9sZSBmNiBtdDEgYmx1ZTcgbWIyIGZ3NlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBNeSBwcm9qZWN0IHJvbGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlOidjaXJjbGUnfX0gY2xhc3NOYW1lPSdmNmIgYmx1ZTcnPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbXQzJz57cHJvamVjdC5yb2xlMT9wcm9qZWN0LnJvbGUxOnByb2plY3Qucm9sZX08L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnJvbGUyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtdDMnPntwcm9qZWN0LnJvbGUyfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnJvbGUzP1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtdDMnPntwcm9qZWN0LnJvbGUzfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnJvbGU0P1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtdDMnPntwcm9qZWN0LnJvbGU0fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3Qucm9sZTU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J210Myc+e3Byb2plY3Qucm9sZTV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIlwiIGNsYXNzTmFtZT1cImY2IG10NCBtYjAgYmx1ZTcgZnc2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3Qgc3RhY2s6XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGZpcnN0PVwiXCIgY2xhc3NOYW1lPVwibXQwIHRhZyBiZy1ibHVlNVwiPntwcm9qZWN0LnRhZzF9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50YWcyP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQwIHRhZyBiZy1ibHVlNlwiPntwcm9qZWN0LnRhZzJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRhZzM/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdDAgdGFnIGJnLWluZGlnbzdcIj57cHJvamVjdC50YWczfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50YWc0P1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQwIHRhZyBiZy12aW9sZXQ3XCI+e3Byb2plY3QudGFnNH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGFnNT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10MCB0YWcgYmctdmlvbGV0N1wiPntwcm9qZWN0LnRhZzV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbGV0ZWQgaWQ9XCJcIiBjbGFzc05hbWU9XCJkaWIgZjcgYmx1ZTcgcGgzIHB2MlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wbGV0ZWQ6ICZuYnNwOzxzcGFuIGNsYXNzTmFtZT1cImZ3N1wiPntwcm9qZWN0LnllYXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db21wbGV0ZWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8L0RpdjI+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogPC9UaWx0PiAqL31cbiAgICAgICAgICAgIDwvRGl2PlxuXG5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICBcbi50YWd7XG4gIC8qIGJhY2tncm91bmQ6IGJsdWU7ICovXG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbi10b3A6MTBweDtcbn1cblxuXG5cbnAudGFnOm5vdChbZmlyc3RdKXtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxucC5wcm9qZWN0Um9sZXtcbiAgLyogbGluZS1oZWlnaHQ6IDEuMzsgKi9cbn1cbiAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRzO1xuIl19 */\n/*@ sourceURL=/Users/aaronadler/Desktop/www-aa-next7/Components/Cards/Cards.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ })

})
//# sourceMappingURL=index.js.54753257590ec3bb4b23.hot-update.js.map