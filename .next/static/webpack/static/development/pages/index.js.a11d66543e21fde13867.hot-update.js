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
var _jsxFileName = "/Users/aaronadler/Desktop/www-aa-next7/Components/Cards/Cards.js";

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

/***/ })

})
//# sourceMappingURL=index.js.a11d66543e21fde13867.hot-update.js.map