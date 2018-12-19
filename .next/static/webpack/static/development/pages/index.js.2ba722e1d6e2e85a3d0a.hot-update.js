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
        className: "jsx-2940148244" + " " + "flex flex-wrap justify-center ma2",
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
        css: ".card.jsx-2940148244{width:430px;-webkit-transition:all .3s ease;transition:all .3s ease;}.card.jsx-2940148244:hover{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}.mediumArticle.jsx-2940148244{background:lavender;}.completed.jsx-2940148244{border:1px solid blue;margin-top:2.7rem;}.image.jsx-2940148244{border-top-right-radius:4px;border-top-left-radius:4px;}.tag.jsx-2940148244{color:white;display:inline-block;padding:4px 12px;border-radius:6px;font-size:10px;margin-top:10px;}p.tag.jsx-2940148244:not([first]){margin-left:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9NZWRpdW1DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDb0IsQUFFZSxBQUtrQixBQUdWLEFBR0UsQUFJTSxBQUtoQixBQVFJLFlBM0JRLEFBb0JILElBT0osSUFwQkksRUFJSCxNQUlTLEtBTVYsT0FWRSxVQVdELEtBUFUsYUFiYyxBQXFCM0IsZUFDQyxhQXBCZSxHQW9CZCIsImZpbGUiOiIvVXNlcnMvYWFyb25hZGxlci9Ecm9wYm94L0RFU0RFVl9EUklCQkIvd3d3LWFhLW5leHQ3L0NvbXBvbmVudHMvTWVkaXVtQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSU1NSZXF1ZXN0SE9DIGZyb20gJy4vSE9Dcy9SU1NSZXF1ZXN0SE9DJ1xuY2xhc3MgTWVkaXVtQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBtYTJcIj5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYnIyIG1hMiBiZy13aGl0ZVwiPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICB7dGhpcy5wcm9wcy5pdGVtc1xuICAgICAgICAgICA/XG4gICAgICAgICAgIHRoaXMucHJvcHMuaXRlbXMubWFwKChhcnRpY2xlKT0+KFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaXVtQXJ0aWNsZSc+XG4gICAgICAgICAgICAgICAgPGgxPnthcnRpY2xlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPGgyPnthcnRpY2xlLnB1YkRhdGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8aDM+e2FydGljbGUubGlua308L2gzPlxuICAgICAgICAgICAgICAgIDxoND57YXJ0aWNsZS5ndWlkfTwvaDQ+XG4gICAgICAgICAgICAgICAgPGg1PnthcnRpY2xlLmF1dGhvcn08L2g1PlxuICAgICAgICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgPGgzPnt0aGlzLnByb3BzLm1lZGl1bURhdGEgPyB0aGlzLnByb3BzLm1lZGl1bURhdGEuZmVlZC50aXRsZSA6IG51bGx9PC9oMz5cbiAgICAgICAgICAgICAgICA8aDM+e3RoaXMucHJvcHMubWVkaXVtRGF0YSA/IHRoaXMucHJvcHMubWVkaXVtRGF0YS5mZWVkLmxpbmsgOiBudWxsfTwvaDM+XG4gICAgICAgICAgICAgICAgPGgzPnt0aGlzLnByb3BzLm1lZGl1bURhdGEgPyB0aGlzLnByb3BzLm1lZGl1bURhdGEuZmVlZC5pbWFnZSA6IG51bGx9PC9oMz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgICA6XG4gICAgICAgICAgbnVsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiA8aDM+e3RoaXMucHJvcHMuc3RhdHVzfTwvaDM+ICovfVxuICAgICAgICAgIHsvKiA8aDM+e3RoaXMucHJvcHMuc3RhdHVzfTwvaDM+ICovfVxuICAgICAgICAgIHsvKiA8aDM+e3RoaXMucHJvcHMudXJsfTwvaDM+ICovfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLmNhcmR7XG4gICAgICAgICAgd2lkdGg6IDQzMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbiAgICAgICAgICAvKiAtbW96LXRyYW5zaXRpb246IHNjYWxlIC4zcyBlYXNlOyAqL1xuICAgICAgICAgIC8qIC13ZWJraXQtdHJhbnNpdGlvbjogc2NhbGUgLjNzIGVhc2U7ICovXG4gICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1lZGl1bUFydGljbGV7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGF2ZW5kZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbXBsZXRlZHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIuN3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZXtcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgfSAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAudGFne1xuICAgICAgICAgIC8qIGJhY2tncm91bmQ6IGJsdWU7ICovXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBwLnRhZzpub3QoW2ZpcnN0XSl7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAucHJvamVjdFJvbGV7XG4gICAgICAgICAgLyogbGluZS1oZWlnaHQ6IDEuMzsgKi9cbiAgICAgICAgfVxuICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSU1NSZXF1ZXN0SE9DKE1lZGl1bUNhcmQpO1xuIl19 */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/MediumCard.js */",
        __self: this
      }));
    }
  }]);

  return MediumCard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOCs_RSSRequestHOC__WEBPACK_IMPORTED_MODULE_2__["default"])(MediumCard));

/***/ })

})
//# sourceMappingURL=index.js.2ba722e1d6e2e85a3d0a.hot-update.js.map