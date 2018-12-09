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


function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid blue;\n  margin-top: 2.7rem;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* flex: 1; */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 // import Tilt from "react-tilt";


 // import './Cards.css';
// import '../../src/css/entry.css';

var uuidv1 = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js"); // const Container = styled.div`
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


var Div2 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Completed = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p(_templateObject2());
var Img = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject3()); // --------- END STYLED-COMPONENTS ---------

var Cards = function Cards() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2792676913" + " " + "flex flex-wrap justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, _src_projects__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (project) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: uuidv1(),
      className: "jsx-2792676913" + " " + 'card',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2792676913" + " " + "br2 ma2 bg-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: project.link,
      className: "jsx-2792676913",
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
      className: "jsx-2792676913" + " " + "f3c mt1 mb0 fw6 lh-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, project.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "desc",
      className: "jsx-2792676913" + " " + "f6b blue7  mt3 mb4 space",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, project.desc), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "",
      className: "jsx-2792676913" + " " + "projectRole f6 mt1 blue7 mb2 fw6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "My project role :"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      style: {
        listStyleType: 'circle'
      },
      className: "jsx-2792676913" + " " + 'f6b blue7',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-2792676913" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, project.role1 ? project.role1 : project.role), project.role2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-2792676913" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, project.role2) : null, project.role3 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-2792676913" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, project.role3) : null, project.role4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-2792676913" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, project.role4) : null, project.role5 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-2792676913" + " " + 'mt3',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, project.role5) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "",
      className: "jsx-2792676913" + " " + "f6 mt4 mb0 blue7 fw6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Project stack:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      first: "",
      className: "jsx-2792676913" + " " + "mt0 tag bg-blue5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, project.tag1), project.tag2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2792676913" + " " + "mt0 tag bg-blue6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, project.tag2) : null, project.tag3 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2792676913" + " " + "mt0 tag bg-indigo7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, project.tag3) : null, project.tag4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2792676913" + " " + "mt0 tag bg-violet7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, project.tag4) : null, project.tag5 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2792676913" + " " + "mt0 tag bg-violet7",
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
      className: "jsx-2792676913" + " " + "fw7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, project.year))))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2792676913",
    css: ".card.jsx-2792676913{width:430px;-webkit-transition:all .3s ease;transition:all .3s ease;}.card.jsx-2792676913:hover{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}.tag.jsx-2792676913{color:white;display:inline-block;padding:4px 12px;border-radius:6px;font-size:10px;margin-top:10px;}p.tag.jsx-2792676913:not([first]){margin-left:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3Avd3d3LWFhLW5leHQ3L0NvbXBvbmVudHMvQ2FyZHMvQ2FyZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUlrQixBQUVlLEFBS2tCLEFBSWxCLEFBUUksWUFoQlEsQUFTSCxJQU9KLGlCQU5BLGlCQUNDLGtCQVR3QixBQVUzQixlQUNDLGFBVGUsR0FTZCIsImZpbGUiOiIvVXNlcnMvYWFyb25hZGxlci9EZXNrdG9wL3d3dy1hYS1uZXh0Ny9Db21wb25lbnRzL0NhcmRzL0NhcmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IFRpbHQgZnJvbSBcInJlYWN0LXRpbHRcIjtcbmltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi4vLi4vc3JjL3Byb2plY3RzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuLy8gaW1wb3J0ICcuL0NhcmRzLmNzcyc7XG4vLyBpbXBvcnQgJy4uLy4uL3NyYy9jc3MvZW50cnkuY3NzJztcbmNvbnN0IHV1aWR2MSA9IHJlcXVpcmUoXCJ1dWlkL3YxXCIpO1xuXG4vLyBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuLy8gICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEpOyAqL1xuXG4vLyBgXG4vLyBjb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxuLy8gICB3aWR0aDogNDMwcHg7XG4vLyAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbi8vICAgLyogLW1vei10cmFuc2l0aW9uOiBzY2FsZSAuM3MgZWFzZTsgKi9cbi8vICAgLyogLXdlYmtpdC10cmFuc2l0aW9uOiBzY2FsZSAuM3MgZWFzZTsgKi9cbi8vICAgJjpob3Zlcntcbi8vICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7XG4vLyAgIH1cbi8vIGA7XG5cbmNvbnN0IERpdjIgPSBzdHlsZWQuZGl2YFxuICAvKiBmbGV4OiAxOyAqL1xuYDtcblxuY29uc3QgQ29tcGxldGVkID0gc3R5bGVkLnBgXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gIG1hcmdpbi10b3A6IDIuN3JlbTtcblxuYDtcblxuXG5jb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG5gXG4vLyAtLS0tLS0tLS0gRU5EIFNUWUxFRC1DT01QT05FTlRTIC0tLS0tLS0tLVxuXG5jb25zdCBDYXJkcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICAgIHJldHVybiAoXG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnIGtleT17dXVpZHYxKCl9PlxuICAgICAgICAgICAgICB7LyogPFRpbHRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJUaWx0XCJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt7IHJldmVyc2U6IHRydWUsIG1heDogMTIsIHNjYWxlOiAxLjAzLCBzcGVlZDogOTAwIH19XG4gICAgICAgICAgICAgID4gKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyMiBtYTIgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3Byb2plY3QubGluaz9wcm9qZWN0Lmxpbms6bnVsbH0+ICovfVxuICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtwcm9qZWN0Lmxpbmt9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPEltZyAgc3JjPXtwcm9qZWN0LmltYWdlfSBhbHQ9XCJhbHRcIiBjbGFzc05hbWU9XCJcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPERpdjIgY2xhc3NOYW1lPVwidGV4dENvbnRhaW5lciBwYTRiIGxoLWNvcHkzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInRpdGxlXCIgY2xhc3NOYW1lPVwiZjNjIG10MSBtYjAgZnc2IGxoLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJkZXNjXCIgY2xhc3NOYW1lPVwiZjZiIGJsdWU3ICBtdDMgbWI0IHNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmRlc2N9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiXCIgY2xhc3NOYW1lPVwicHJvamVjdFJvbGUgZjYgbXQxIGJsdWU3IG1iMiBmdzZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgcHJvamVjdCByb2xlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZTonY2lyY2xlJ319IGNsYXNzTmFtZT0nZjZiIGJsdWU3Jz5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J210Myc+e3Byb2plY3Qucm9sZTE/cHJvamVjdC5yb2xlMTpwcm9qZWN0LnJvbGV9PC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5yb2xlMj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbXQzJz57cHJvamVjdC5yb2xlMn08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5yb2xlMz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbXQzJz57cHJvamVjdC5yb2xlM308L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5yb2xlND9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbXQzJz57cHJvamVjdC5yb2xlNH08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnJvbGU1P1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtdDMnPntwcm9qZWN0LnJvbGU1fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJcIiBjbGFzc05hbWU9XCJmNiBtdDQgbWIwIGJsdWU3IGZ3NlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0IHN0YWNrOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBmaXJzdD1cIlwiIGNsYXNzTmFtZT1cIm10MCB0YWcgYmctYmx1ZTVcIj57cHJvamVjdC50YWcxfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGFnMj9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10MCB0YWcgYmctYmx1ZTZcIj57cHJvamVjdC50YWcyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50YWczP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQwIHRhZyBiZy1pbmRpZ283XCI+e3Byb2plY3QudGFnM308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGFnND9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10MCB0YWcgYmctdmlvbGV0N1wiPntwcm9qZWN0LnRhZzR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRhZzU/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdDAgdGFnIGJnLXZpb2xldDdcIj57cHJvamVjdC50YWc1fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGxldGVkIGlkPVwiXCIgY2xhc3NOYW1lPVwiZGliIGY3IGJsdWU3IHBoMyBwdjJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGxldGVkOiAmbmJzcDs8c3BhbiBjbGFzc05hbWU9XCJmdzdcIj57cHJvamVjdC55ZWFyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29tcGxldGVkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPC9EaXYyPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIDwvVGlsdD4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuLmNhcmR7XG4gIHdpZHRoOiA0MzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xuICAvKiAtbW96LXRyYW5zaXRpb246IHNjYWxlIC4zcyBlYXNlOyAqL1xuICAvKiAtd2Via2l0LXRyYW5zaXRpb246IHNjYWxlIC4zcyBlYXNlOyAqL1xuICAmOmhvdmVye1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTtcbiAgfVxufVxuICAgICAgXG4gICAgICBcbi50YWd7XG4gIC8qIGJhY2tncm91bmQ6IGJsdWU7ICovXG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbi10b3A6MTBweDtcbn1cblxuXG5cbnAudGFnOm5vdChbZmlyc3RdKXtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxucC5wcm9qZWN0Um9sZXtcbiAgLyogbGluZS1oZWlnaHQ6IDEuMzsgKi9cbn1cbiAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRzO1xuIl19 */\n/*@ sourceURL=/Users/aaronadler/Desktop/www-aa-next7/Components/Cards/Cards.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ })

})
//# sourceMappingURL=index.js.2dc6e46a1c1722fafad7.hot-update.js.map