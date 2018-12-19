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
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3970830730",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, this.props.mediumData ? this.props.mediumData.status : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3970830730",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, this.props.mediumData ? this.props.mediumData.feed.url : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3970830730",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, this.props.mediumData ? this.props.mediumData.feed.title : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3970830730",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, this.props.mediumData ? this.props.mediumData.feed.link : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3970830730",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, this.props.mediumData ? this.props.mediumData.feed.description : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3970830730",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, this.props.mediumData ? this.props.mediumData.feed.image : null), this.props.items ? this.props.items.map(function (article) {
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3970830730",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
          className: "jsx-3970830730",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, article.author));
      }) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3970830730",
        css: ".card.jsx-3970830730{width:430px;-webkit-transition:all .3s ease;transition:all .3s ease;}.card.jsx-3970830730:hover{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}.completed.jsx-3970830730{border:1px solid blue;margin-top:2.7rem;}.image.jsx-3970830730{border-top-right-radius:4px;border-top-left-radius:4px;}.tag.jsx-3970830730{color:white;display:inline-block;padding:4px 12px;border-radius:6px;font-size:10px;margin-top:10px;}p.tag.jsx-3970830730:not([first]){margin-left:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9NZWRpdW1DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDb0IsQUFFZSxBQUtrQixBQUdSLEFBSU0sQUFLaEIsQUFRSSxZQXhCUSxBQWlCSCxJQU9KLE1BaEJDLE1BSVMsS0FNVixPQVZFLFVBV0QsS0FQVSxhQVZjLEFBa0IzQixlQUNDLGFBakJlLEdBaUJkIiwiZmlsZSI6Ii9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9NZWRpdW1DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJTU1JlcXVlc3RIT0MgZnJvbSAnLi9IT0NzL1JTU1JlcXVlc3RIT0MnXG5jbGFzcyBNZWRpdW1DYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnIyIG1hMiBiZy13aGl0ZVwiPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5tZWRpdW1EYXRhID8gdGhpcy5wcm9wcy5tZWRpdW1EYXRhLnN0YXR1cyA6IG51bGx9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMubWVkaXVtRGF0YSA/IHRoaXMucHJvcHMubWVkaXVtRGF0YS5mZWVkLnVybCA6IG51bGx9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMubWVkaXVtRGF0YSA/IHRoaXMucHJvcHMubWVkaXVtRGF0YS5mZWVkLnRpdGxlIDogbnVsbH08L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5tZWRpdW1EYXRhID8gdGhpcy5wcm9wcy5tZWRpdW1EYXRhLmZlZWQubGluayA6IG51bGx9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMubWVkaXVtRGF0YSA/IHRoaXMucHJvcHMubWVkaXVtRGF0YS5mZWVkLmRlc2NyaXB0aW9uIDogbnVsbH08L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5tZWRpdW1EYXRhID8gdGhpcy5wcm9wcy5tZWRpdW1EYXRhLmZlZWQuaW1hZ2UgOiBudWxsfTwvaDM+XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAge3RoaXMucHJvcHMuaXRlbXNcbiAgICAgICAgICAgP1xuICAgICAgICAgICB0aGlzLnByb3BzLml0ZW1zLm1hcCgoYXJ0aWNsZSk9PntcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7LyogPGg0PnthcnRpY2xlLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgPGgzPnthcnRpY2xlLnB1YkRhdGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8aDM+e2FydGljbGUubGlua308L2gzPlxuICAgICAgICAgICAgICAgIDxoMj57YXJ0aWNsZS5ndWlkfTwvaDI+ICovfVxuICAgICAgICAgICAgICAgIDxoND57YXJ0aWNsZS5hdXRob3J9PC9oND5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfSlcbiAgICAgICAgICA6XG4gICAgICAgICAgbnVsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiA8aDM+e3RoaXMucHJvcHMuc3RhdHVzfTwvaDM+ICovfVxuICAgICAgICAgIHsvKiA8aDM+e3RoaXMucHJvcHMuc3RhdHVzfTwvaDM+ICovfVxuICAgICAgICAgIHsvKiA8aDM+e3RoaXMucHJvcHMudXJsfTwvaDM+ICovfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLmNhcmR7XG4gICAgICAgICAgd2lkdGg6IDQzMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbiAgICAgICAgICAvKiAtbW96LXRyYW5zaXRpb246IHNjYWxlIC4zcyBlYXNlOyAqL1xuICAgICAgICAgIC8qIC13ZWJraXQtdHJhbnNpdGlvbjogc2NhbGUgLjNzIGVhc2U7ICovXG4gICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29tcGxldGVke1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMi43cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdle1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgICAgICB9ICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgIC50YWd7XG4gICAgICAgICAgLyogYmFja2dyb3VuZDogYmx1ZTsgKi9cbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIHAudGFnOm5vdChbZmlyc3RdKXtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcC5wcm9qZWN0Um9sZXtcbiAgICAgICAgICAvKiBsaW5lLWhlaWdodDogMS4zOyAqL1xuICAgICAgICB9XG4gIFxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJTU1JlcXVlc3RIT0MoTWVkaXVtQ2FyZCk7XG4iXX0= */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/MediumCard.js */",
        __self: this
      }));
    }
  }]);

  return MediumCard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOCs_RSSRequestHOC__WEBPACK_IMPORTED_MODULE_2__["default"])(MediumCard));

/***/ })

})
//# sourceMappingURL=index.js.2af4b454b8eaf089aef6.hot-update.js.map