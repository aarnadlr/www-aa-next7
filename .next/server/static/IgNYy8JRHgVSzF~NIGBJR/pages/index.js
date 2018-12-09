module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-scrollchor");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./styles/style.scss
var style = __webpack_require__(7);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var external_styled_jsx_style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react-scrollchor"
var external_react_scrollchor_ = __webpack_require__(3);
var external_react_scrollchor_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollchor_);

// CONCATENATED MODULE: ./Components/TopNav/TopNav.js


// import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';
// import moduleName from '@fortawesome/fontawesome-free'
 // import jQuery from 'jquery';
// import '../easings';      
// const Container = styled.div`
//     position: fixed;
//     top: 0;
//     right: 0;
//     z-index:99;
// `
// const Icon = styled.i`
//   position: relative;
//   bottom:2px;
//   margin-right: 6px;
// `

var easeInOutQuart = function easeInOutQuart(x, t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
};

var TopNav_TopNav = function TopNav() {
  return external_react_default.a.createElement("div", {
    className: "jsx-1557708495" + " " + "container white flex items-center justify-end"
  }, external_react_default.a.createElement(external_react_scrollchor_default.a, {
    animate: {
      offset: 50,
      duration: 1400,
      easing: easeInOutQuart
    },
    to: "#coretools",
    className: ""
  }, external_react_default.a.createElement("div", {
    className: "jsx-1557708495" + " " + "flex items-center icon grow2"
  }, external_react_default.a.createElement("i", {
    className: "jsx-1557708495" + " " + "icon fa fa-suitcase blue5"
  }), external_react_default.a.createElement("p", {
    className: "jsx-1557708495" + " " + "mr4 text-shad-1"
  }, "Tools"))), external_react_default.a.createElement(external_react_scrollchor_default.a, {
    animate: {
      offset: -350,
      duration: 1400,
      easing: easeInOutQuart
    },
    to: "#contact",
    className: ""
  }, external_react_default.a.createElement("div", {
    className: "jsx-1557708495" + " " + "flex items-center icon grow2"
  }, external_react_default.a.createElement("i", {
    className: "jsx-1557708495" + " " + "icon fa fa-envelope-o blue5"
  }), external_react_default.a.createElement("p", {
    className: "jsx-1557708495" + " " + "mr4 text-shad-1"
  }, "Contact"))), external_react_default.a.createElement(external_styled_jsx_style_default.a, {
    styleId: "1557708495",
    css: [".container.jsx-1557708495{position:fixed;top:0;right:0;z-index:99;}", ".icon.jsx-1557708495{position:relative;bottom:2px;margin-right:6px;}"]
  }));
};

/* harmony default export */ var Components_TopNav_TopNav = (TopNav_TopNav);
// CONCATENATED MODULE: ./Components/TopNav/index.js

/* harmony default export */ var Components_TopNav = (Components_TopNav_TopNav);
// CONCATENATED MODULE: ./Components/WelcomeBio/WelcomeBio.js

 // import styles from "./WelcomeBio.css";
// const Paragraph = styled.p`
//   font-weight:300;
// `

var WelcomeBio_WelcomeBio = function WelcomeBio() {
  return external_react_default.a.createElement("div", {
    className: "jsx-2609408294" + " " + ""
  }, external_react_default.a.createElement("div", {
    id: "topSection",
    className: "jsx-2609408294" + " " + "flex flex-column center white mt6 mb5"
  }, external_react_default.a.createElement("img", {
    id: "profile-pic",
    src: "https://ww2.aaronadler.com/images/profile-pic.jpg",
    alt: "alt",
    className: "jsx-2609408294" + " " + "grow2 center mb3"
  }), external_react_default.a.createElement("p", {
    className: "jsx-2609408294" + " " + "f2c tc"
  }, "Aaron Adler"), external_react_default.a.createElement("div", {
    className: "jsx-2609408294" + " " + 'flex justify-center mb4'
  }, external_react_default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://dribbble.com/aarnadlr",
    className: "jsx-2609408294"
  }, external_react_default.a.createElement("img", {
    alt: "dribbb",
    src: "../../static/icons/AA-dribbble-icon.png",
    className: "jsx-2609408294" + " " + 'icon grow-large-2'
  })), external_react_default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.toptal.com/designers/resume/aaron-adler",
    className: "jsx-2609408294"
  }, external_react_default.a.createElement("img", {
    alt: "toptal",
    src: "../../static/icons/toptal.gif",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3'
  })), external_react_default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://github.com/aarnadlr",
    className: "jsx-2609408294"
  }, external_react_default.a.createElement("img", {
    alt: "github",
    src: "../../static/icons/github.gif",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3'
  })), external_react_default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.linkedin.com/in/aaronadler/",
    className: "jsx-2609408294"
  }, external_react_default.a.createElement("img", {
    alt: "linkedin",
    src: "../../static/icons/linkedin.png",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3'
  })), external_react_default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://codepen.io/aaronadler/",
    className: "jsx-2609408294"
  }, external_react_default.a.createElement("img", {
    alt: "codepen",
    src: "../../static/icons/codepen.png",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3'
  })), external_react_default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://medium.com/@aaronadler",
    className: "jsx-2609408294"
  }, external_react_default.a.createElement("img", {
    alt: "medium",
    src: "../../static/icons/medium.png",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3'
  })), external_react_default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.producthunt.com/@aarnadlr",
    className: "jsx-2609408294"
  }, external_react_default.a.createElement("img", {
    src: "../../static/icons/prodhunt.png",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3'
  })), external_react_default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://workingnotworking.com/aarn",
    className: "jsx-2609408294"
  }, external_react_default.a.createElement("img", {
    src: "../../static/icons/wnw.png",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3'
  })), external_react_default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://twitter.com/aaronadler",
    className: "jsx-2609408294"
  }, external_react_default.a.createElement("img", {
    src: "../../static/icons/twitter.png",
    className: "jsx-2609408294" + " " + 'icon grow-large-2 ml3'
  }))), external_react_default.a.createElement("p", {
    className: "jsx-2609408294" + " " + "paragraph f5 lh-copy4 mh3"
  }, "Hi there. I\u2019m a UX designer & Front-end developer in NYC. I\u2019ve worked on projects for Facebook, Google, IBM, R/GA, Droga5 and others. My work has been recognized by Cannes, AICP, the Art Directors Club, Clios, Archive, Adweek, and the New York Times. My focus is on ", external_react_default.a.createElement("span", {
    className: "jsx-2609408294" + " " + "bg-green8"
  }, "\xA0UX design\xA0"), " , ", external_react_default.a.createElement("span", {
    className: "jsx-2609408294" + " " + "bg-teal8"
  }, "\xA0CSS3\xA0"), " , ", external_react_default.a.createElement("span", {
    className: "jsx-2609408294" + " " + "bg-cyan8"
  }, "\xA0JavaScript ES6 + React\xA0"), " and ", external_react_default.a.createElement("span", {
    className: "jsx-2609408294" + " " + "bg-blue6"
  }, "\xA0coded animation\xA0"), ".")), external_react_default.a.createElement(external_styled_jsx_style_default.a, {
    styleId: "2609408294",
    css: [".icon.jsx-2609408294{width:20px;height:20px;border-radius:3px;}"]
  }));
};

/* harmony default export */ var Components_WelcomeBio_WelcomeBio = (WelcomeBio_WelcomeBio);
// CONCATENATED MODULE: ./Components/WelcomeBio/index.js

/* harmony default export */ var Components_WelcomeBio = (Components_WelcomeBio_WelcomeBio);
// CONCATENATED MODULE: ./src/projects.js
// import kith from './images/kith-rect3.jpg';
// import ibm from '../static/thumbs2018/IBM-rect.jpg';
// import arthritis from './images/thumbs2018/arthritis-rect.jpg';
// import motet from './images/thumbs2018/motet3b.jpg';
// import verbal from './images/thumbs2018/verbal4.jpg';
// import patagonia from './images/thumbs2018/patagonia-ww3.gif';
// import googlePlay from './images/thumbs2018/google-play-17-rect.jpg';
// import daftpunk from './images/thumbs2018/daftpunk-320.gif';
// import cottonBur from './images/thumbs2018/cotton-bur-rect.gif';
// // import moic from './images/thumbs2018/moic3.gif';
// import youtubeZero from './images/thumbs2018/youtubezero3-rect.gif';
// import bpCover from './images/Blockparty-800x400-3.jpg';
// import wfCover from '../src/images/wellsfargo/wfLock2.jpg'
var projects = [{
  key: 1,
  // image: './images/thumbs2018/IBM-rect.jpg',
  image: '../static/thumbs2018/IBM-rect.jpg',
  // image: require('./images/ibm.png'),
  title: 'IBM Partners',
  desc: "Wireframing, UX design and prototype development for IBM Partners, IBM's business services portal. Click to view the project.",
  // role: "UX wireframes, UI design, and client-side coded components using CSS3 and javascript. Implemented IBM’s Northstar and Duo design systems, including typography, .clr palettes, JSON type styles, grids and column layouts.",
  role1: "Interfaced with IBM marketing, design and engineering teams to develop UX design and coded components for IBM Partners",
  role2: "Implemented IBM’s Northstar and Duo design systems, including type, color palettes, grids, text styles, and column layouts",
  role3: "Motion graphic creation for IBM Partners lockup compiled to JavaScript and SVG to run in the browser",
  role4: "Delivered front-end javascript code to be implemented on the IBM website",
  // techstack: ""
  // TAGS:
  tag1: 'Sketch',
  tag2: 'HTML5',
  tag3: 'CSS3',
  tag4: 'JavaScript',
  year: 2018,
  // HREF LINK
  // link: "./ibm.html"
  link: "https://www.ibm.com/partners/start/"
}, {
  key: 2,
  image: '../static/kith-rect3.jpg',
  title: 'Kith Footwear',
  desc: 'Ecommerce store prototype. Built with React, Webpack, styled-components, CSS grid, tachyons, and more. Click to view the project.',
  role: "Built each piece of UI as a React component. Each product card is rendered from a mapped array, and inserted into a responsive CSS Grid.  All product data is passed from parent to child component via props. Set up custom media queries with ES6 template strings, which retrieve screen widths from a javascript object.",
  // TAGS:
  tag1: 'HTML5',
  tag2: 'CSS Grid',
  tag3: 'JavaScript',
  tag4: 'React',
  //  tag4: 'Styled-components',
  year: 2018,
  // HREF LINK
  link: "http://kith-store.aaronadler.com"
}, {
  key: '26',
  image: '../static/wellsfargo/wfLock2.jpg',
  title: 'Wells Fargo UX',
  desc: 'Redesign of the the Wells Fargo consumer banking design system. Coming 2019; viewable by appointment.',
  role1: "Constructed the master design system “source of truth” Sketch file, consisting of typography, color palette, grid and column layouts.",
  role2: "Built a family of button styles and their default, hover, active, and disabled states.",
  role3: "Redesigned several interface components, including masthead, header nav menu, mobile nav menu, footer and others",
  // TAGS:
  tag1: 'Sketch',
  tag2: 'Illustrator',
  tag3: 'Photoshop',
  tag4: 'SVG',
  year: 2018,
  // HREF LINK
  link: "javascript:alert('👋👋👋 The Wells Fargo UX project is viewable by appointment until it is released in 2019  🙏🙏🙏')"
}, {
  key: '2B',
  image: '../static/thumbs2018/motet3b.jpg',
  title: 'Motet - Music App UX',
  desc: 'Mobile music app with a minimal graphic interface. Light scheme to contrast against Spotify. Click to view the project.',
  role: "Developed the brand identity with Photoshop and Illustrator. Created the UI design of all screens at 1x with Sketch.",
  // TAGS:
  tag1: 'Sketch',
  tag2: 'Illustrator',
  tag3: 'Photoshop',
  tag4: 'SVG',
  year: 2017,
  // HREF LINK
  link: "https://www.behance.net/gallery/60987045/Motet-Music-Application-Identity-and-UI-Design"
}, {
  key: 5,
  image: '../static/thumbs2018/youtubezero3-rect.gif',
  title: 'YouTube Zero',
  desc: 'React application providing a zero-click YouTube search interface. Fetches data in realtime from YouTube DataAPI v3. Click to view.',
  role: 'Built the entire application in React. Used an API key to access YouTube Data API v3. Designed the components using styled-components and Tachyons.',
  // TAGS:
  tag1: 'React',
  tag2: 'CSS3',
  tag3: 'javascript',
  tag4: 'YouTube API',
  year: 2017,
  // HREF LINK
  // link: "https://youtubezero.herokuapp.com/"
  link: "https://youtubezero.now.sh/"
}, {
  key: 3,
  image: 'https://ww2.aaronadler.com/images/Tradewind-800x400.gif',
  title: 'Tradewind Markets - Blockchain platform',
  desc: "Designed, built and coded Tradewind's web presence, as well as a coded animated logo treatment.",
  role: "Built the multipage site using HTML5, CSS3, Flexbox, Sass, Javascript and Gulp. Animated the logo with Greensock/GSAP TweenMax. Handed off to internal engineers for deployment.",
  // TAGS:
  //  tag1: 'sketch',
  tag1: 'HTML5',
  tag2: 'CSS3',
  tag3: 'javascript',
  tag4: 'Gulp',
  year: 2018,
  //  tag6: 'sass/scss',
  //  tag7: 'svg',
  // HREF LINK
  // link: "https://www.behance.net/gallery/63693141/Tradewind-Markets-Blockchain-Technology-Website"
  link: "https://tradewindmarkets.com"
}, // vvv BLOCKPARTY
// vvv BLOCKPARTY
// vvv BLOCKPARTY
{
  key: '2BB',
  image: '../static/Blockparty-800x400-3.jpg',
  title: 'Blockparty - Blockchain app UX',
  desc: 'Blockchain-based event-ticketing platform. The polygonal hippo graphic is original artwork created with D-Mesh. Click to view.',
  role: "Designed the onboarding flow UI screens; built React components which were ported to React Native; developed the character design for their polygonal hippo mascot. The polygonal hippo is original artwork created with DMesh.",
  // TAGS:
  tag1: 'Sketch',
  tag2: 'Illustrator',
  tag3: 'DMesh',
  tag4: 'React',
  year: 2018,
  // HREF LINK
  link: "https://www.behance.net/gallery/66044535/Blockparty-Blockchain-UXUI-Mobile-App-Site-Design"
}, {
  key: '2C',
  image: 'https://dl.dropboxusercontent.com/s/4siji9ixbeggje9/blockchain-RECT-2.gif',
  title: 'Blockchain.com - Wallet UI',
  desc: 'Currency Slider Component for iOS Wallet App, which allows the user to select and transact with multiple currencies. Click to view.',
  role: "Developed the Currency Slider Component with Sketch and AdobeCC. Designed the UI component of all screens at 1x with Sketch.",
  // TAGS:
  tag1: 'Sketch',
  tag2: 'Illustrator',
  tag3: 'Photoshop',
  tag4: 'SVG',
  year: 2018,
  // HREF LINK
  link: "https://www.behance.net/gallery/65967583/Blockchaincom-UI-Currency-Slider"
}, {
  key: 4,
  image: '../static/thumbs2018/verbal4.jpg',
  title: 'Verbal - Messaging UI',
  desc: 'Single-purpose messaging app without marketplaces, ads, or other add-ons to encourage usage. Click to view.',
  role: "Developed the brand identity with Photoshop and Illustrator. Created the UI design of all screens at 1x with Sketch.",
  // TAGS:
  tag1: 'Sketch',
  tag2: 'Illustrator',
  tag3: 'Photoshop',
  tag4: 'SVG',
  year: 2016,
  // HREF LINK
  link: "https://www.behance.net/gallery/61048837/Verbal-Messaging-App-Brand-Identity-and-UI-Design"
}, {
  key: 6,
  image: '../static/thumbs2018/patagonia-ww3.gif',
  title: 'Patagonia Provisions',
  desc: "Animated sequence for Patagonia Provisions, Patagonia's line of foods and recipes. Click to view.",
  role: "Created the Provisions design artwork in Pshop/Illustrator, based on brand assets. Animated the assets in After Effects. Rendered to JSON and implemented into a codebase.",
  // TAGS:
  //  tag1: 'sketch',
  //  tag2: 'CSS3',
  tag1: 'After Effects',
  tag2: 'javascript',
  tag3: 'Lottie',
  tag4: 'Illustrator',
  tag5: 'SVG',
  year: 2017,
  // HREF LINK
  link: "https://codepen.io/aaronadler/pen/vWoVoN"
}, {
  key: 7,
  image: '../static/thumbs2018/google-play-17-rect.jpg',
  title: 'Google Play',
  desc: 'Campaign concept and design to promote movies, music and book titles on Google Play. Click to view.',
  role: "I worked with a writer to develop the creative concept. Designed the layouts with Sketch and Adobe Creative Suite.",
  // TAGS:
  tag1: 'Sketch',
  tag2: 'Illustrator',
  tag3: 'Photoshop',
  tag4: 'SVG',
  year: 2014,
  //  tag5: 'bodymovin',
  //  tag6: 'Illustrator',
  //  tag7: '',
  // HREF LINK
  link: "https://dribbble.com/shots/3939152-Google-Play-All-Together-Beauty"
}, {
  key: 8,
  image: '../static/thumbs2018/daftpunk-320.gif',
  title: 'Daft Punk - Facebook Camera Effect AR',
  desc: 'The Daft Punk Helmet as a wearable Camera Effect. Click to view the video and experience the Camera Effect on mobile.',
  role: "Received the helmet as a .obj 3D model. Added textures, materials and lighting in Blender and ARStudio. Created the background animations in After Effects. Configured the object to a face-tracker in ARStudio.",
  // TAGS:
  tag1: 'ARstudio',
  tag2: 'Blender3D',
  tag3: 'Photoshop',
  tag4: 'After Eff',
  year: 2017,
  // HREF LINK
  link: "https://www.facebook.com/160758384681784/videos/166745714083051"
}, {
  key: 9,
  image: '../static/thumbs2018/cotton-bur-rect.gif',
  title: "Cotton Bureau",
  desc: 'Animated logo lockup for Cotton Bureau. Created in After Effects and converted to JSON via Lottie. Click to view on Codepen.',
  role: "tba",
  // TAGS:
  tag1: 'Illustrator',
  tag2: 'After Effects',
  tag3: 'javascript',
  tag4: 'lottie',
  year: 2017,
  // HREF LINK
  link: "https://codepen.io/aaronadler/pen/OzLYYM"
}, // {
//   key: 10,
//   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/arss.gif',
//   title: 'ARsocialstudio',
//    desc: 'ARss is a microservice to build and deploy 3D Facebook Camera Effects for clients. 3D modeling, scripting and publication to the Camera Effects Platform. Click to view site.',
//    role: "tba",
//   // TAGS:
//    tag1: 'HTML5',
//    tag2: 'css3',
//    tag3: 'javascript',
//    tag4: 'gulp',
//    year: 2017,
//    // HREF LINK
//    link: "https://thearss.com/"
// },
{
  key: 11,
  image: '../static/thumbs2018/moic3.gif',
  title: 'Museum of Ice Cream - Facebook Camera Effect',
  desc: 'Interactive AR 3D-based Facebook Camera Effect for the Museum of Ice Cream. Click to view the video and Camera Effect on your mobile device.',
  role: "Received the ice cream scoops, cone and peppermint assets as .obj 3D models. Added colors, textures, and materials in ARStudio. Created the typography and background animations in After Effects. Configured the objects to a face-tracker in ARStudio.",
  // TAGS:
  tag1: 'ARStudio',
  tag2: 'Blender3D',
  tag3: 'Photoshop',
  tag4: 'After Eff',
  year: 2017,
  // HREF LINK
  link: "https://www.facebook.com/160758384681784/videos/162009941223295/"
}, {
  key: 12,
  image: '../static/thumbs2018/arthritis-rect.jpg',
  title: 'Arthritis Foundation',
  desc: 'Graphic to promote awareness for the Arthritis Foundation. Click to view.',
  role: "Concept creation and graphic design",
  // TAGS:
  tag1: 'Sketch',
  tag2: 'Illustrator',
  tag3: 'SVG',
  tag4: 'Photoshop',
  year: 2011,
  // HREF LINK
  link: "https://dribbble.com/shots/3998425-Arthritis-Foundation-graphic"
}];
/* harmony default export */ var src_projects = (projects);
// CONCATENATED MODULE: ./Components/Cards/Cards.js

 // import Tilt from "react-tilt";

 // import './Cards.css';
// import '../../src/css/entry.css';

var uuidv1 = __webpack_require__(8); // const Container = styled.div`
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


var Cards_Cards = function Cards() {
  return external_react_default.a.createElement("div", {
    className: "jsx-10816166" + " " + "flex flex-wrap justify-center"
  }, src_projects.map(function (project) {
    return external_react_default.a.createElement("div", {
      key: uuidv1(),
      className: "jsx-10816166" + " " + 'card'
    }, external_react_default.a.createElement("div", {
      className: "jsx-10816166" + " " + "br2 ma2 bg-white"
    }, external_react_default.a.createElement("a", {
      target: "_blank",
      href: project.link,
      className: "jsx-10816166"
    }, external_react_default.a.createElement("img", {
      src: project.image,
      alt: "alt",
      className: "jsx-10816166" + " " + "image"
    }), external_react_default.a.createElement("div", {
      className: "jsx-10816166" + " " + "textContainer pa4b lh-copy3"
    }, external_react_default.a.createElement("p", {
      id: "title",
      className: "jsx-10816166" + " " + "f3c mt1 mb0 fw6 lh-title"
    }, project.title), external_react_default.a.createElement("p", {
      id: "desc",
      className: "jsx-10816166" + " " + "f6b blue7  mt3 mb4 space"
    }, project.desc), external_react_default.a.createElement("p", {
      id: "",
      className: "jsx-10816166" + " " + "projectRole f6 mt1 blue7 mb2 fw6"
    }, "My project role :"), external_react_default.a.createElement("ul", {
      style: {
        listStyleType: 'circle'
      },
      className: "jsx-10816166" + " " + 'f6b blue7'
    }, external_react_default.a.createElement("li", {
      className: "jsx-10816166" + " " + 'mt3'
    }, project.role1 ? project.role1 : project.role), project.role2 ? external_react_default.a.createElement("li", {
      className: "jsx-10816166" + " " + 'mt3'
    }, project.role2) : null, project.role3 ? external_react_default.a.createElement("li", {
      className: "jsx-10816166" + " " + 'mt3'
    }, project.role3) : null, project.role4 ? external_react_default.a.createElement("li", {
      className: "jsx-10816166" + " " + 'mt3'
    }, project.role4) : null, project.role5 ? external_react_default.a.createElement("li", {
      className: "jsx-10816166" + " " + 'mt3'
    }, project.role5) : null), external_react_default.a.createElement("p", {
      id: "",
      className: "jsx-10816166" + " " + "f6 mt4 mb0 blue7 fw6"
    }, "Project stack:"), external_react_default.a.createElement("p", {
      first: "",
      className: "jsx-10816166" + " " + "mt0 tag bg-blue5"
    }, project.tag1), project.tag2 ? external_react_default.a.createElement("p", {
      className: "jsx-10816166" + " " + "mt0 tag bg-blue6"
    }, project.tag2) : null, project.tag3 ? external_react_default.a.createElement("p", {
      className: "jsx-10816166" + " " + "mt0 tag bg-indigo7"
    }, project.tag3) : null, project.tag4 ? external_react_default.a.createElement("p", {
      className: "jsx-10816166" + " " + "mt0 tag bg-violet7"
    }, project.tag4) : null, project.tag5 ? external_react_default.a.createElement("p", {
      className: "jsx-10816166" + " " + "mt0 tag bg-violet7"
    }, project.tag5) : null, external_react_default.a.createElement("p", {
      id: "",
      className: "jsx-10816166" + " " + "completed dib f7 blue7 ph3 pv2"
    }, "Completed: \xA0", external_react_default.a.createElement("span", {
      className: "jsx-10816166" + " " + "fw7"
    }, project.year))))));
  }), external_react_default.a.createElement(external_styled_jsx_style_default.a, {
    styleId: "10816166",
    css: [".card.jsx-10816166{width:430px;-webkit-transition:all .3s ease;transition:all .3s ease;}", ".card.jsx-10816166:hover{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}", ".completed.jsx-10816166{border:1px solid blue;margin-top:2.7rem;}", ".image.jsx-10816166{border-top-right-radius:4px;border-top-left-radius:4px;}", ".tag.jsx-10816166{color:white;display:inline-block;padding:4px 12px;border-radius:6px;font-size:10px;margin-top:10px;}", "p.tag.jsx-10816166:not([first]){margin-left:6px;}"]
  }));
};

/* harmony default export */ var Components_Cards_Cards = (Cards_Cards);
// CONCATENATED MODULE: ./Components/Cards/index.js

/* harmony default export */ var Components_Cards = (Components_Cards_Cards);
// CONCATENATED MODULE: ./Components/CoreTools/CoreTools.js



var CoreTools_CoreTools = function CoreTools() {
  return external_react_default.a.createElement("div", {
    id: "coretools",
    className: "jsx-794909562" + " " + "flex container"
  }, external_react_default.a.createElement("div", {
    className: "jsx-794909562" + " " + "justify-center coreskills-box lightest-blue "
  }, external_react_default.a.createElement("div", {
    className: "jsx-794909562" + " " + "coreskills-box__core-col blue0"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-794909562" + " " + ""
  }, "Core Tools"), external_react_default.a.createElement("p", {
    className: "jsx-794909562"
  }, "Software and libraries I often work with in projects."), external_react_default.a.createElement("ul", {
    className: "jsx-794909562"
  }, external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fas fa-pencil-alt rainbow1"
  })), "Sketch"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fab fas fa-code rainbow2"
  })), "HTML5"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-css3 rainbow3"
  })), "CSS3"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-th-large rainbow4"
  })), "CSS Grid"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-bars rainbow5"
  })), "CSS Flexbox"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fab fa-sass rainbow6"
  })), "", "Sass/scss"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-play-circle rainbow7"
  })), "After Effects"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-camera rainbow8"
  })), "Photoshop"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-bezier-curve rainbow8"
  })), "Illustrator"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fab fa-js-square rainbow9"
  })), "Javascript ES6"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fab fa-react rainbow9"
  })), "React"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-code rainbow9"
  })), "NextJS"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, "\uD83D\uDD25"), "Firebase"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    role: "img",
    "aria-label": "skill",
    className: "jsx-794909562" + " " + "f4"
  }, "\uD83D\uDC85 "), " \xA0Styled-Components"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-th-large rainbow9"
  })), " ", "Bootstrap 4"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-bolt rainbow10"
  })), " ", "Tachyons"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-magic rainbow11"
  })), " ", "jQuery"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-video rainbow12"
  })), " ", "Greensock/GSAP"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-window-maximize rainbow12"
  })), " ", "SVG"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-laptop-code rainbow13"
  })), " ", "Git/GitHub"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-cube rainbow13"
  })), " ", "Blender3D"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-facebook-square rainbow14"
  })), " ", "Facebook AR Studio"))), external_react_default.a.createElement("div", {
    className: "jsx-794909562" + " " + "coreskills-box__core-col blue0"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-794909562" + " " + ""
  }, "Secondary Tools"), external_react_default.a.createElement("p", {
    className: "jsx-794909562"
  }, "Software I work with, and I am actively learning."), external_react_default.a.createElement("ul", {
    className: "jsx-794909562"
  }, external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-terminal rainbow11"
  })), " ", "NodeJS"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-random rainbow12"
  })), " ", "Express"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-file-code-o rainbow13"
  })), " ", "MongoDB"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-briefcase rainbow14"
  })), " ", "PostCSS"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-code-fork rainbow14"
  })), " ", "Gulp"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-language rainbow15"
  })), " ", "Babel"), external_react_default.a.createElement("li", {
    className: "jsx-794909562" + " " + "skill"
  }, external_react_default.a.createElement("span", {
    className: "jsx-794909562" + " " + "fa-stack"
  }, external_react_default.a.createElement("i", {
    className: "jsx-794909562" + " " + "fa fa-cube rainbow17"
  })), " ", "Webpack")))), external_react_default.a.createElement(external_styled_jsx_style_default.a, {
    styleId: "794909562",
    css: [".container.jsx-794909562{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".coreskills-box.jsx-794909562{border:1px solid #7db9e5;margin:100px 0 0;text-align:center;padding-bottom:20px;width:70%;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:90%;text-align:left;padding-bottom:50px;}", ".coreskills-box__core-col.jsx-794909562{line-height:2rem;width:260px;margin:40px 30px;font-size:.9rem;}", ".coreskills-box__core-col.jsx-794909562 p.jsx-794909562{margin-bottom:30px;font-size:.9rem;line-height:2;}", "h1.jsx-794909562{font-size:1.5rem;}", ".skill.jsx-794909562{line-height:2;list-style:none;}", "ul.jsx-794909562{padding:0;list-style-type:none;}"]
  }));
};

/* harmony default export */ var Components_CoreTools_CoreTools = (CoreTools_CoreTools);
// CONCATENATED MODULE: ./Components/CoreTools/index.js

/* harmony default export */ var Components_CoreTools = (Components_CoreTools_CoreTools);
// CONCATENATED MODULE: ./Components/Footer/Footer.js



// import React from 'react';
// import './Footer.css';
// import '../../src/css/entry.css';
var Footer_Footer = function Footer() {
  return external_react_default.a.createElement("footer", {
    className: "jsx-2980524257" + " " + "center lightest-blue"
  }, external_react_default.a.createElement("div", {
    id: "contact",
    className: "jsx-2980524257" + " " + "container container--martop70"
  }, external_react_default.a.createElement("p", {
    className: "jsx-2980524257" + " " + 'f3'
  }, "Thank You")), external_react_default.a.createElement("div", {
    className: "jsx-2980524257" + " " + "container container--marbot80 container--pad10"
  }, external_react_default.a.createElement("a", {
    href: "mailto:aaron.adler@gmail.com",
    className: "jsx-2980524257"
  }, external_react_default.a.createElement("p", {
    className: "jsx-2980524257" + " " + "grow lightest-blue f5"
  }, external_react_default.a.createElement("i", {
    "aria-hidden": "true",
    className: "jsx-2980524257" + " " + "fa fa-envelope-o blue5 mr2"
  }), " aaron.adler(at)gmail(.com)"))), external_react_default.a.createElement("div", {
    className: "jsx-2980524257" + " " + 'f7 flex justify-center pt5 pb5'
  }, external_react_default.a.createElement("p", {
    className: "jsx-2980524257" + " " + 'w-70 tc lh-copy2'
  }, "Site built with ", external_react_default.a.createElement("span", {
    className: "jsx-2980524257" + " " + "teal6"
  }, "React"), " and ", external_react_default.a.createElement("span", {
    className: "jsx-2980524257" + " " + "cyan5"
  }, "Flexbox"), ". Rendered statically with ", external_react_default.a.createElement("span", {
    className: "jsx-2980524257" + " " + "violet5"
  }, "react-snapshot"), ".")), external_react_default.a.createElement(external_styled_jsx_style_default.a, {
    styleId: "2980524257",
    css: ["footer.jsx-2980524257{-webkit-letter-spacing:.08rem;-moz-letter-spacing:.08rem;-ms-letter-spacing:.08rem;letter-spacing:.08rem;text-align:center;}", ".container--parag.jsx-2980524257{max-width:478px;margin:auto;}", ".container--contact.jsx-2980524257{max-width:300px;margin:auto;}", ".container--left.jsx-2980524257{-ms-flex-pack:start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}", ".container--marbot30.jsx-2980524257{margin-bottom:30px;}", ".container--marginbot40.jsx-2980524257{margin-bottom:40px;}", ".container--marbot10.jsx-2980524257{margin-bottom:10px;}", ".container--marbot20.jsx-2980524257{margin-bottom:20px;}", ".container--marbot60.jsx-2980524257{margin-bottom:60px;}", ".container--marbot80.jsx-2980524257{margin-bottom:80px;}", ".container--martop20.jsx-2980524257{margin-top:20px;}", ".container--martop30.jsx-2980524257{margin-top:30px;}", ".container--martop40.jsx-2980524257{margin-top:40px;}", ".container--martop50.jsx-2980524257{margin-top:50px;}", ".container--martop70.jsx-2980524257{margin-top:70px;}", ".container--pad10.jsx-2980524257{padding:10px 0;}", "#email.jsx-2980524257{margin-bottom:0;}"]
  }));
};

/* harmony default export */ var Components_Footer_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./Components/Footer/index.js

/* harmony default export */ var Components_Footer = (Components_Footer_Footer);
// CONCATENATED MODULE: ./pages/index.js







/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", {
    className: ""
  }, external_react_default.a.createElement(Components_TopNav, null), external_react_default.a.createElement(Components_WelcomeBio, null), external_react_default.a.createElement(Components_Cards, null), external_react_default.a.createElement(Components_CoreTools, null), external_react_default.a.createElement(Components_Footer, null));
});

/***/ })
/******/ ]);