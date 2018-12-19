webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/MediumCard.js":
/*!**********************************!*\
  !*** ./Components/MediumCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3970830730" + " " + "flex flex-wrap justify-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3970830730" + " " + "br2 ma2 bg-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, this.props.items.map(function (article) {
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
          className: "jsx-3970830730",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, article.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-3970830730",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, article.pubDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-3970830730",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, article.link), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          className: "jsx-3970830730",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, article.guid), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          className: "jsx-3970830730",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, article.author));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3970830730",
        css: ".card.jsx-3970830730{width:430px;-webkit-transition:all .3s ease;transition:all .3s ease;}.card.jsx-3970830730:hover{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}.completed.jsx-3970830730{border:1px solid blue;margin-top:2.7rem;}.image.jsx-3970830730{border-top-right-radius:4px;border-top-left-radius:4px;}.tag.jsx-3970830730{color:white;display:inline-block;padding:4px 12px;border-radius:6px;font-size:10px;margin-top:10px;}p.tag.jsx-3970830730:not([first]){margin-left:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9NZWRpdW1DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDb0IsQUFFZSxBQUtrQixBQUdSLEFBSU0sQUFLaEIsQUFRSSxZQXhCUSxBQWlCSCxJQU9KLE1BaEJDLE1BSVMsS0FNVixPQVZFLFVBV0QsS0FQVSxhQVZjLEFBa0IzQixlQUNDLGFBakJlLEdBaUJkIiwiZmlsZSI6Ii9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9NZWRpdW1DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJTU1JlcXVlc3RIT0MgZnJvbSAnLi9IT0NzL1JTU1JlcXVlc3RIT0MnXG5jbGFzcyBNZWRpdW1DYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnIyIG1hMiBiZy13aGl0ZVwiPlxuICAgICAgICAgIHsvKiA8aDM+e3RoaXMucHJvcHMubWVkaXVtRGF0YSA/IHRoaXMucHJvcHMubWVkaXVtRGF0YS5zdGF0dXMgOiBudWxsfTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLm1lZGl1bURhdGEgPyB0aGlzLnByb3BzLm1lZGl1bURhdGEuZmVlZC51cmwgOiBudWxsfTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLm1lZGl1bURhdGEgPyB0aGlzLnByb3BzLm1lZGl1bURhdGEuZmVlZC50aXRsZSA6IG51bGx9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMubWVkaXVtRGF0YSA/IHRoaXMucHJvcHMubWVkaXVtRGF0YS5mZWVkLmxpbmsgOiBudWxsfTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLm1lZGl1bURhdGEgPyB0aGlzLnByb3BzLm1lZGl1bURhdGEuZmVlZC5kZXNjcmlwdGlvbiA6IG51bGx9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMubWVkaXVtRGF0YSA/IHRoaXMucHJvcHMubWVkaXVtRGF0YS5mZWVkLmltYWdlIDogbnVsbH08L2gzPiAqL31cbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICB7dGhpcy5wcm9wcy5pdGVtcy5tYXAoKGFydGljbGUpPT57XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPGg0PnthcnRpY2xlLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICA8aDM+e2FydGljbGUucHViRGF0ZX08L2gzPlxuICAgICAgICAgICAgPGgzPnthcnRpY2xlLmxpbmt9PC9oMz5cbiAgICAgICAgICAgIDxoMj57YXJ0aWNsZS5ndWlkfTwvaDI+XG4gICAgICAgICAgICA8aDI+e2FydGljbGUuYXV0aG9yfTwvaDI+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICB9KX1cbiAgICAgICAgICB7LyogPGgzPnt0aGlzLnByb3BzLnN0YXR1c308L2gzPiAqL31cbiAgICAgICAgICB7LyogPGgzPnt0aGlzLnByb3BzLnN0YXR1c308L2gzPiAqL31cbiAgICAgICAgICB7LyogPGgzPnt0aGlzLnByb3BzLnVybH08L2gzPiAqL31cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5jYXJke1xuICAgICAgICAgIHdpZHRoOiA0MzBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG4gICAgICAgICAgLyogLW1vei10cmFuc2l0aW9uOiBzY2FsZSAuM3MgZWFzZTsgKi9cbiAgICAgICAgICAvKiAtd2Via2l0LXRyYW5zaXRpb246IHNjYWxlIC4zcyBlYXNlOyAqL1xuICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbXBsZXRlZHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIuN3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZXtcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgfSAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAudGFne1xuICAgICAgICAgIC8qIGJhY2tncm91bmQ6IGJsdWU7ICovXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBwLnRhZzpub3QoW2ZpcnN0XSl7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAucHJvamVjdFJvbGV7XG4gICAgICAgICAgLyogbGluZS1oZWlnaHQ6IDEuMzsgKi9cbiAgICAgICAgfVxuICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSU1NSZXF1ZXN0SE9DKE1lZGl1bUNhcmQpO1xuIl19 */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/MediumCard.js */",
        __self: this
      }));
    }
  }]);

  return MediumCard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOCs_RSSRequestHOC__WEBPACK_IMPORTED_MODULE_2__["default"])(MediumCard));

/***/ })

})
//# sourceMappingURL=index.js.f5fea08b04f220b42799.hot-update.js.map