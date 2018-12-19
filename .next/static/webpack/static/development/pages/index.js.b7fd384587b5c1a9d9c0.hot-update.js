webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/HOCs/RSSRequestHOC.js":
/*!******************************************!*\
  !*** ./Components/HOCs/RSSRequestHOC.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/aaronadler/Dropbox/DESDEV_DRIBBB/www-aa-next7/Components/HOCs/RSSRequestHOC.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var RSSRequestHOCFn = function RSSRequestHOCFn(WrappedComponent) {
  var RSSRequestHOC =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(RSSRequestHOC, _React$Component);

    function RSSRequestHOC() {
      var _this;

      _classCallCheck(this, RSSRequestHOC);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RSSRequestHOC).call(this));
      _this.state = {
        status: '',
        url: ''
      };
      return _this;
    }

    _createClass(RSSRequestHOC, [{
      key: "RSSRequestHOC",
      value: function RSSRequestHOC() {
        var _this2 = this;

        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
          if (request.readyState == 4 && request.status == 200) {
            var myObj = JSON.parse(request.responseText); // console.log(myObj)

            for (var i = 0; i < 1; i++) {
              _this2.setState({
                mediumData: myObj // status: myObj.status,
                // url: myObj.feed.url
                // name: myObj.items[i].title,
                // url: myObj.items[i].link

              });
            }
          }
        };

        request.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com/feed/@aaronadler", true);
        request.send();
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        {
          this.RSSRequestHOC();
        }
      }
    }, {
      key: "render",
      value: function render() {
        // return <WrappedComponent status={this.state.status} url={this.state.url} />
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, {
          mediumData: this.state.mediumData,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        });
      }
    }]);

    return RSSRequestHOC;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  return RSSRequestHOC;
};

/* harmony default export */ __webpack_exports__["default"] = (RSSRequestHOCFn);

/***/ })

})
//# sourceMappingURL=index.js.b7fd384587b5c1a9d9c0.hot-update.js.map