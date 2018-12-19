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
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2940148244" + " " + "flex flex-wrap justify-center ma2 pa5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2940148244" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, this.props.items ? this.props.items.map(function (article) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-2940148244" + " " + 'mediumArticle',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
          className: "jsx-2940148244",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, article.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          className: "jsx-2940148244",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, article.pubDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-2940148244",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, article.link), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
          className: "jsx-2940148244",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, article.guid), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
          className: "jsx-2940148244",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, article.author), "--------------------------", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-2940148244",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, _this.props.mediumData ? _this.props.mediumData.feed.title : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-2940148244",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, _this.props.mediumData ? _this.props.mediumData.feed.link : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-2940148244",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, _this.props.mediumData ? _this.props.mediumData.feed.image : null));
      }) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2940148244",
        css: ".card.jsx-2940148244{width:430px;-webkit-transition:all .3s ease;transition:all .3s ease;}.card.jsx-2940148244:hover{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}.mediumArticle.jsx-2940148244{background:lavender;}.completed.jsx-2940148244{border:1px solid blue;margin-top:2.7rem;}.image.jsx-2940148244{border-top-right-radius:4px;border-top-left-radius:4px;}.tag.jsx-2940148244{color:white;display:inline-block;padding:4px 12px;border-radius:6px;font-size:10px;margin-top:10px;}p.tag.jsx-2940148244:not([first]){margin-left:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9NZWRpdW1DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDb0IsQUFFZSxBQUtrQixBQUdWLEFBR0UsQUFJTSxBQUtoQixBQVFJLFlBM0JRLEFBb0JILElBT0osSUFwQkksRUFJSCxNQUlTLEtBTVYsT0FWRSxVQVdELEtBUFUsYUFiYyxBQXFCM0IsZUFDQyxhQXBCZSxHQW9CZCIsImZpbGUiOiIvVXNlcnMvYWFyb25hZGxlci9Ecm9wYm94L0RFU0RFVl9EUklCQkIvd3d3LWFhLW5leHQ3L0NvbXBvbmVudHMvTWVkaXVtQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSU1NSZXF1ZXN0SE9DIGZyb20gJy4vSE9Dcy9SU1NSZXF1ZXN0SE9DJ1xuY2xhc3MgTWVkaXVtQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBtYTIgcGE1XCI+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJyMiBtYTIgYmctd2hpdGVcIj4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAge3RoaXMucHJvcHMuaXRlbXNcbiAgICAgICAgICAgP1xuICAgICAgICAgICB0aGlzLnByb3BzLml0ZW1zLm1hcCgoYXJ0aWNsZSk9PihcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGl1bUFydGljbGUnPlxuICAgICAgICAgICAgICAgIDxoMT57YXJ0aWNsZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxoMj57YXJ0aWNsZS5wdWJEYXRlfTwvaDI+XG4gICAgICAgICAgICAgICAgPGgzPnthcnRpY2xlLmxpbmt9PC9oMz5cbiAgICAgICAgICAgICAgICA8aDQ+e2FydGljbGUuZ3VpZH08L2g0PlxuICAgICAgICAgICAgICAgIDxoNT57YXJ0aWNsZS5hdXRob3J9PC9oNT5cbiAgICAgICAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5tZWRpdW1EYXRhID8gdGhpcy5wcm9wcy5tZWRpdW1EYXRhLmZlZWQudGl0bGUgOiBudWxsfTwvaDM+XG4gICAgICAgICAgICAgICAgPGgzPnt0aGlzLnByb3BzLm1lZGl1bURhdGEgPyB0aGlzLnByb3BzLm1lZGl1bURhdGEuZmVlZC5saW5rIDogbnVsbH08L2gzPlxuICAgICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5tZWRpdW1EYXRhID8gdGhpcy5wcm9wcy5tZWRpdW1EYXRhLmZlZWQuaW1hZ2UgOiBudWxsfTwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgICAgOlxuICAgICAgICAgIG51bGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogPGgzPnt0aGlzLnByb3BzLnN0YXR1c308L2gzPiAqL31cbiAgICAgICAgICB7LyogPGgzPnt0aGlzLnByb3BzLnN0YXR1c308L2gzPiAqL31cbiAgICAgICAgICB7LyogPGgzPnt0aGlzLnByb3BzLnVybH08L2gzPiAqL31cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5jYXJke1xuICAgICAgICAgIHdpZHRoOiA0MzBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG4gICAgICAgICAgLyogLW1vei10cmFuc2l0aW9uOiBzY2FsZSAuM3MgZWFzZTsgKi9cbiAgICAgICAgICAvKiAtd2Via2l0LXRyYW5zaXRpb246IHNjYWxlIC4zcyBlYXNlOyAqL1xuICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tZWRpdW1BcnRpY2xle1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxhdmVuZGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb21wbGV0ZWR7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyLjdyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2V7XG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgIH0gICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgLnRhZ3tcbiAgICAgICAgICAvKiBiYWNrZ3JvdW5kOiBibHVlOyAqL1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgcC50YWc6bm90KFtmaXJzdF0pe1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwLnByb2plY3RSb2xle1xuICAgICAgICAgIC8qIGxpbmUtaGVpZ2h0OiAxLjM7ICovXG4gICAgICAgIH1cbiAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUlNTUmVxdWVzdEhPQyhNZWRpdW1DYXJkKTtcbiJdfQ== */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/MediumCard.js */",
        __self: this
      }));
    }
  }]);

  return MediumCard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOCs_RSSRequestHOC__WEBPACK_IMPORTED_MODULE_2__["default"])(MediumCard));

/***/ })

})
//# sourceMappingURL=index.js.a0fbbd7f3274589545ee.hot-update.js.map