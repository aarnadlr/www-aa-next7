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


function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid blue;\n  margin-top: 2.7rem;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  /* flex: 1; */\n"]);

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

var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject()); // const Div = styled.div`
//   width: 430px;
//   transition: all .3s ease;
//   /* -moz-transition: scale .3s ease; */
//   /* -webkit-transition: scale .3s ease; */
//   &:hover{
//     transform:translateY(-10px);
//   }
// `;

var Div2 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var Completed = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p(_templateObject3());
var Img = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject4()); // --------- END STYLED-COMPONENTS ---------

var Cards = function Cards() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    className: "flex flex-wrap justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, _src_projects__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (project) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: uuidv1(),
      className: "jsx-1614700044" + " " + 'card',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1614700044" + " " + "br2 ma2 bg-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: project.link,
      className: "jsx-1614700044",
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
      className: "jsx-1614700044" + " " + "f3c mt1 mb0 fw6 lh-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, project.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "desc",
      className: "jsx-1614700044" + " " + "f6b blue7  mt3 mb4 space",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, project.desc), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "",
      className: "jsx-1614700044" + " " + "projectRole f6 mt1 blue7 mb2 fw6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "My project role :"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      style: {
        listStyleType: 'circle'
      },
      className: "jsx-1614700044" + " " + 'f6b blue7',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1614700044" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, project.role1 ? project.role1 : project.role), project.role2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1614700044" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, project.role2) : null, project.role3 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1614700044" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, project.role3) : null, project.role4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1614700044" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, project.role4) : null, project.role5 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1614700044" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, project.role5) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "",
      className: "jsx-1614700044" + " " + "f6 mt4 mb0 blue7 fw6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Project stack:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      first: "",
      className: "jsx-1614700044" + " " + "mt0 tag bg-blue5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, project.tag1), project.tag2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1614700044" + " " + "mt0 tag bg-blue6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, project.tag2) : null, project.tag3 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1614700044" + " " + "mt0 tag bg-indigo7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, project.tag3) : null, project.tag4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1614700044" + " " + "mt0 tag bg-violet7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, project.tag4) : null, project.tag5 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1614700044" + " " + "mt0 tag bg-violet7",
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
      className: "jsx-1614700044" + " " + "fw7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, project.year))))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1614700044",
    css: ".tag.jsx-1614700044{color:white;display:inline-block;padding:4px 12px;border-radius:6px;font-size:10px;margin-top:10px;}p.tag.jsx-1614700044:not([first]){margin-left:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3Avd3d3LWFhLW5leHQ3L0NvbXBvbmVudHMvQ2FyZHMvQ2FyZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUlrQixBQUdlLEFBUUksWUFQSyxJQU9KLGlCQU5BLGlCQUNDLGtCQUNILGVBQ0MsZ0JBQUMiLCJmaWxlIjoiL1VzZXJzL2Fhcm9uYWRsZXIvRGVza3RvcC93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9DYXJkcy9DYXJkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBUaWx0IGZyb20gXCJyZWFjdC10aWx0XCI7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4uLy4uL3NyYy9wcm9qZWN0c1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbi8vIGltcG9ydCAnLi9DYXJkcy5jc3MnO1xuLy8gaW1wb3J0ICcuLi8uLi9zcmMvY3NzL2VudHJ5LmNzcyc7XG5jb25zdCB1dWlkdjEgPSByZXF1aXJlKFwidXVpZC92MVwiKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgLyogdHJhbnNmb3JtOiBzY2FsZSgxKTsgKi9cblxuYFxuLy8gY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcbi8vICAgd2lkdGg6IDQzMHB4O1xuLy8gICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG4vLyAgIC8qIC1tb3otdHJhbnNpdGlvbjogc2NhbGUgLjNzIGVhc2U7ICovXG4vLyAgIC8qIC13ZWJraXQtdHJhbnNpdGlvbjogc2NhbGUgLjNzIGVhc2U7ICovXG4vLyAgICY6aG92ZXJ7XG4vLyAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO1xuLy8gICB9XG4vLyBgO1xuXG5jb25zdCBEaXYyID0gc3R5bGVkLmRpdmBcbiAgLyogZmxleDogMTsgKi9cbmA7XG5cbmNvbnN0IENvbXBsZXRlZCA9IHN0eWxlZC5wYFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICBtYXJnaW4tdG9wOiAyLjdyZW07XG5cbmA7XG5cblxuY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuYFxuLy8gLS0tLS0tLS0tIEVORCBTVFlMRUQtQ09NUE9ORU5UUyAtLS0tLS0tLS1cblxuY29uc3QgQ2FyZHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cblxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICB7cHJvamVjdHMubWFwKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgICByZXR1cm4gKFxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJyBrZXk9e3V1aWR2MSgpfT5cbiAgICAgICAgICAgICAgey8qIDxUaWx0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiVGlsdFwiXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17eyByZXZlcnNlOiB0cnVlLCBtYXg6IDEyLCBzY2FsZTogMS4wMywgc3BlZWQ6IDkwMCB9fVxuICAgICAgICAgICAgICA+ICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicjIgbWEyIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtwcm9qZWN0Lmxpbms/cHJvamVjdC5saW5rOm51bGx9PiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17cHJvamVjdC5saW5rfT5cblxuICAgICAgICAgICAgICAgICAgICAgIDxJbWcgIHNyYz17cHJvamVjdC5pbWFnZX0gYWx0PVwiYWx0XCIgY2xhc3NOYW1lPVwiXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgIDxEaXYyIGNsYXNzTmFtZT1cInRleHRDb250YWluZXIgcGE0YiBsaC1jb3B5M1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImYzYyBtdDEgbWIwIGZ3NiBsaC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiZGVzY1wiIGNsYXNzTmFtZT1cImY2YiBibHVlNyAgbXQzIG1iNCBzcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5kZXNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIlwiIGNsYXNzTmFtZT1cInByb2plY3RSb2xlIGY2IG10MSBibHVlNyBtYjIgZnc2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE15IHByb2plY3Qgcm9sZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZVR5cGU6J2NpcmNsZSd9fSBjbGFzc05hbWU9J2Y2YiBibHVlNyc+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtdDMnPntwcm9qZWN0LnJvbGUxP3Byb2plY3Qucm9sZTE6cHJvamVjdC5yb2xlfTwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3Qucm9sZTI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J210Myc+e3Byb2plY3Qucm9sZTJ9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3Qucm9sZTM/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J210Myc+e3Byb2plY3Qucm9sZTN9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3Qucm9sZTQ/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J210Myc+e3Byb2plY3Qucm9sZTR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5yb2xlNT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbXQzJz57cHJvamVjdC5yb2xlNX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiXCIgY2xhc3NOYW1lPVwiZjYgbXQ0IG1iMCBibHVlNyBmdzZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvamVjdCBzdGFjazpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgZmlyc3Q9XCJcIiBjbGFzc05hbWU9XCJtdDAgdGFnIGJnLWJsdWU1XCI+e3Byb2plY3QudGFnMX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRhZzI/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdDAgdGFnIGJnLWJsdWU2XCI+e3Byb2plY3QudGFnMn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGFnMz9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10MCB0YWcgYmctaW5kaWdvN1wiPntwcm9qZWN0LnRhZzN9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRhZzQ/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdDAgdGFnIGJnLXZpb2xldDdcIj57cHJvamVjdC50YWc0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50YWc1P1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQwIHRhZyBiZy12aW9sZXQ3XCI+e3Byb2plY3QudGFnNX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsZXRlZCBpZD1cIlwiIGNsYXNzTmFtZT1cImRpYiBmNyBibHVlNyBwaDMgcHYyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlZDogJm5ic3A7PHNwYW4gY2xhc3NOYW1lPVwiZnc3XCI+e3Byb2plY3QueWVhcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbXBsZXRlZD5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvRGl2Mj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiA8L1RpbHQ+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuXG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgIFxuICAgICAgXG4udGFne1xuICAvKiBiYWNrZ3JvdW5kOiBibHVlOyAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tdG9wOjEwcHg7XG59XG5cblxuXG5wLnRhZzpub3QoW2ZpcnN0XSl7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbnAucHJvamVjdFJvbGV7XG4gIC8qIGxpbmUtaGVpZ2h0OiAxLjM7ICovXG59XG4gIFxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkcztcbiJdfQ== */\n/*@ sourceURL=/Users/aaronadler/Desktop/www-aa-next7/Components/Cards/Cards.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ })

})
//# sourceMappingURL=index.js.e515dfea487e64909dd6.hot-update.js.map