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
        className: "jsx-3481105884" + " " + "flex flex-wrap justify-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3481105884" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, this.props.items ? this.props.items.map(function (article) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3481105884" + " " + 'mediumArticle br2 ma2 pa4',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
          className: "jsx-3481105884",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, article.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          className: "jsx-3481105884",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, article.pubDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: article.link,
          className: "jsx-3481105884",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, article.link), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
          className: "jsx-3481105884",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, article.guid), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
          className: "jsx-3481105884",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, article.author), "--------------------------", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-3481105884",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, _this.props.mediumData ? _this.props.mediumData.feed.title : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-3481105884",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, _this.props.mediumData ? _this.props.mediumData.feed.link : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: article.thumbnail,
          alt: "",
          className: "jsx-3481105884",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }));
      }) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3481105884",
        css: ".card.jsx-3481105884{width:430px;-webkit-transition:all .3s ease;transition:all .3s ease;}.card.jsx-3481105884:hover{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}.mediumArticle.jsx-3481105884{background:lavender;}.mediumArticle.jsx-3481105884 a.jsx-3481105884{color:blue;}.completed.jsx-3481105884{border:1px solid blue;margin-top:2.7rem;}.image.jsx-3481105884{border-top-right-radius:4px;border-top-left-radius:4px;}.tag.jsx-3481105884{color:white;display:inline-block;padding:4px 12px;border-radius:6px;font-size:10px;margin-top:10px;}p.tag.jsx-3481105884:not([first]){margin-left:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9NZWRpdW1DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDb0IsQUFFZSxBQUtrQixBQUdWLEFBR1QsQUFHVyxBQUlNLEFBS2hCLEFBUUksV0FwQkosQ0FWWSxBQXVCSCxJQU9KLElBdkJJLEVBT0gsTUFJUyxLQU1WLE9BVkUsVUFXRCxLQVBVLGFBaEJjLEFBd0IzQixlQUNDLGFBdkJlLEdBdUJkIiwiZmlsZSI6Ii9Vc2Vycy9hYXJvbmFkbGVyL0Ryb3Bib3gvREVTREVWX0RSSUJCQi93d3ctYWEtbmV4dDcvQ29tcG9uZW50cy9NZWRpdW1DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJTU1JlcXVlc3RIT0MgZnJvbSAnLi9IT0NzL1JTU1JlcXVlc3RIT0MnXG5jbGFzcyBNZWRpdW1DYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJyMiBtYTIgYmctd2hpdGVcIj4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAge3RoaXMucHJvcHMuaXRlbXNcbiAgICAgICAgICAgP1xuICAgICAgICAgICB0aGlzLnByb3BzLml0ZW1zLm1hcCgoYXJ0aWNsZSk9PihcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGl1bUFydGljbGUgYnIyIG1hMiBwYTQnPlxuICAgICAgICAgICAgICAgIDxoMT57YXJ0aWNsZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxoMj57YXJ0aWNsZS5wdWJEYXRlfTwvaDI+XG4gICAgICAgICAgICAgICAgey8qIDxhPnthcnRpY2xlLmxpbmt9PC9hPiAqL31cbiAgICAgICAgICAgICAgICA8YSAgaHJlZj17YXJ0aWNsZS5saW5rfT57YXJ0aWNsZS5saW5rfTwvYT5cbiAgICAgICAgICAgICAgICA8aDQ+e2FydGljbGUuZ3VpZH08L2g0PlxuICAgICAgICAgICAgICAgIDxoNT57YXJ0aWNsZS5hdXRob3J9PC9oNT5cbiAgICAgICAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5tZWRpdW1EYXRhID8gdGhpcy5wcm9wcy5tZWRpdW1EYXRhLmZlZWQudGl0bGUgOiBudWxsfTwvaDM+XG4gICAgICAgICAgICAgICAgPGgzPnt0aGlzLnByb3BzLm1lZGl1bURhdGEgPyB0aGlzLnByb3BzLm1lZGl1bURhdGEuZmVlZC5saW5rIDogbnVsbH08L2gzPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17dGhpcy5wcm9wcy5tZWRpdW1EYXRhID8gdGhpcy5wcm9wcy5tZWRpdW1EYXRhLmZlZWQuaW1hZ2UgOiBudWxsfSBhbHQ9XCJcIi8+ICovfVxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLnRodW1ibmFpbH0gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKVxuICAgICAgICAgIDpcbiAgICAgICAgICBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgXG4gICAgICAgICAgey8qIDxoMz57dGhpcy5wcm9wcy5zdGF0dXN9PC9oMz4gKi99XG4gICAgICAgICAgey8qIDxoMz57dGhpcy5wcm9wcy5zdGF0dXN9PC9oMz4gKi99XG4gICAgICAgICAgey8qIDxoMz57dGhpcy5wcm9wcy51cmx9PC9oMz4gKi99XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAuY2FyZHtcbiAgICAgICAgICB3aWR0aDogNDMwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xuICAgICAgICAgIC8qIC1tb3otdHJhbnNpdGlvbjogc2NhbGUgLjNzIGVhc2U7ICovXG4gICAgICAgICAgLyogLXdlYmtpdC10cmFuc2l0aW9uOiBzY2FsZSAuM3MgZWFzZTsgKi9cbiAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubWVkaXVtQXJ0aWNsZXtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgICAgICAgfVxuICAgICAgICAubWVkaXVtQXJ0aWNsZSBhe1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5jb21wbGV0ZWR7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyLjdyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2V7XG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgIH0gICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgLnRhZ3tcbiAgICAgICAgICAvKiBiYWNrZ3JvdW5kOiBibHVlOyAqL1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgcC50YWc6bm90KFtmaXJzdF0pe1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwLnByb2plY3RSb2xle1xuICAgICAgICAgIC8qIGxpbmUtaGVpZ2h0OiAxLjM7ICovXG4gICAgICAgIH1cbiAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUlNTUmVxdWVzdEhPQyhNZWRpdW1DYXJkKTtcbiJdfQ== */\n/*@ sourceURL=/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/MediumCard.js */",
        __self: this
      }));
    }
  }]);

  return MediumCard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOCs_RSSRequestHOC__WEBPACK_IMPORTED_MODULE_2__["default"])(MediumCard));

/***/ })

})
//# sourceMappingURL=index.js.78c11d36e62efea0ae88.hot-update.js.map