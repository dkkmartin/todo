"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/img/background.png */ "./src/assets/img/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Text:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* \nfont-family: 'Red Hat Display', sans-serif;\nfont-family: 'Red Hat Text', sans-serif;\n*/\n\n/* ANIMATION */\n\n@keyframes expander {\n  0% {\n    height: 10vh;\n  }\n  100% {\n    height: 50vh;\n  }\n}\n\n@keyframes resizer {\n  0% {\n    height: 50vh;\n  }\n  100% {\n    height: 10vh;\n  }\n}\n\n.expand {\n  animation: expander 1s forwards;\n}\n\n.resize {\n  animation: resizer 1s forwards;\n}\n\n/* BODY */\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n/* MAIN */\n\n.main {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n}\n\n/* CARD */\n\n.main__content__cards {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100% 100%;\n  flex: 5;\n  padding: 1%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  align-items: center;\n}\n\n.card {\n  justify-self: center;\n  height: clamp(65px, 6vh, 7vh);\n  width: calc(100% - 2em);\n  padding: 10px 20px;\n  border: 1px solid rgba(255, 255, 255, 1);\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  background-color: rgba(255, 255, 255, 0.4);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: 'Red Hat Text', sans-serif;\n  cursor: pointer;\n}\n\n.card__content__container {\n  display: flex;\n  align-items: center;\n  gap: 1.5em;\n}\n\n.card__content__text__container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2em;\n}\n\n.card__content__info__container {\n  display: flex;\n  gap: 1em;\n}\n\n.info__calendar,\n.info__project {\n  display: flex;\n  align-items: baseline;\n  gap: 0.2em;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  padding: 1%;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.button__ellipse {\n  width: 30px;\n  height: 30px;\n  border: 1px solid black;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.3);\n  transition: background-color 0.3s;\n}\n\n.button:hover {\n  cursor: pointer;\n}\n\n.button__ellipse:hover {\n  background-color: rgba(128, 255, 111, 0.5);\n}\n\n.card__content__icons__container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3em;\n}\n\n.icon--blue {\n  color: rgba(61, 158, 255, 0.7);\n  font-size: 22px;\n}\n\n.icon--red {\n  color: rgba(255, 3, 3, 0.5);\n  font-size: 22px;\n}\n\n.card__content__title {\n  font-size: 18px;\n  font-weight: 400;\n}\n\n.button--nostyle {\n  border: none;\n  background-color: inherit;\n  display: flex;\n  transition: transform 0.3s ease;\n}\n\n.button--nostyle:hover {\n  transform: scale(1.25);\n}\n\n/* SIDE MENU */\n\n.sidebar {\n  flex: 1;\n  border-right: 1px solid white;\n  background: linear-gradient(90deg, #50c9c3 0%, #96deda 100%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  font-family: 'Red Hat Display', sans-serif;\n  padding: 1em 0;\n}\n\n.sidebar__title {\n  font-weight: 300;\n  font-size: 50px;\n}\n\n.sidebar__container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4em;\n}\n\n.sidebar__button__container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n  color: #363636;\n}\n\n.sidebar__button {\n  display: grid;\n  color: #363636;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  background-color: inherit;\n  width: 15vw;\n  height: 10vh;\n  font-weight: 400;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.sidebar__button__title {\n  border: none;\n  background-color: inherit;\n  font: inherit;\n}\n\n.footer__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 28px;\n  width: 100%;\n  height: 54px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.link__github {\n  color: inherit;\n}\n\n/* SIDEMENU BUTTON MODALS */\n\n.sidebar__modal {\n  display: none;\n  text-align: center;\n}\n\n.modal__input {\n  height: 3vh;\n  font-size: 18px;\n  background-color: rgba(255, 255, 255, 0.2);\n  border: 1px solid white;\n  border-radius: 10px;\n}\n\n.checkmarks__container {\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;CAGC;;AAED,cAAc;;AAEd;EACE;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;AACF;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;AAChC;;AAEA,SAAS;;AAET;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA,SAAS;;AAET;EACE,aAAa;EACb,YAAY;EACZ,aAAa;AACf;;AAEA,SAAS;;AAET;EACE,yDAAgD;EAChD,0BAA0B;EAC1B,OAAO;EACP,WAAW;EACX,aAAa;EACb,qCAAqC;EACrC,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,6BAA6B;EAC7B,uBAAuB;EACvB,kBAAkB;EAClB,wCAAwC;EACxC,kBAAkB;EAClB,0CAA0C;EAC1C,0CAA0C;EAC1C,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,uCAAuC;EACvC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;;EAEE,aAAa;EACb,qBAAqB;EACrB,UAAU;EACV,oCAAoC;EACpC,kBAAkB;EAClB,WAAW;EACX,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,0CAA0C;EAC1C,iCAAiC;AACnC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;AACxB;;AAEA,cAAc;;AAEd;EACE,OAAO;EACP,6BAA6B;EAC7B,4DAA4D;EAC5D,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,0CAA0C;EAC1C,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,0CAA0C;AAC5C;;AAEA;EACE,cAAc;AAChB;;AAEA,2BAA2B;;AAE3B;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,0CAA0C;EAC1C,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Text:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');\n\n/* \nfont-family: 'Red Hat Display', sans-serif;\nfont-family: 'Red Hat Text', sans-serif;\n*/\n\n/* ANIMATION */\n\n@keyframes expander {\n  0% {\n    height: 10vh;\n  }\n  100% {\n    height: 50vh;\n  }\n}\n\n@keyframes resizer {\n  0% {\n    height: 50vh;\n  }\n  100% {\n    height: 10vh;\n  }\n}\n\n.expand {\n  animation: expander 1s forwards;\n}\n\n.resize {\n  animation: resizer 1s forwards;\n}\n\n/* BODY */\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n/* MAIN */\n\n.main {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n}\n\n/* CARD */\n\n.main__content__cards {\n  background-image: url(assets/img/background.png);\n  background-size: 100% 100%;\n  flex: 5;\n  padding: 1%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  align-items: center;\n}\n\n.card {\n  justify-self: center;\n  height: clamp(65px, 6vh, 7vh);\n  width: calc(100% - 2em);\n  padding: 10px 20px;\n  border: 1px solid rgba(255, 255, 255, 1);\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  background-color: rgba(255, 255, 255, 0.4);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: 'Red Hat Text', sans-serif;\n  cursor: pointer;\n}\n\n.card__content__container {\n  display: flex;\n  align-items: center;\n  gap: 1.5em;\n}\n\n.card__content__text__container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2em;\n}\n\n.card__content__info__container {\n  display: flex;\n  gap: 1em;\n}\n\n.info__calendar,\n.info__project {\n  display: flex;\n  align-items: baseline;\n  gap: 0.2em;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  padding: 1%;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.button__ellipse {\n  width: 30px;\n  height: 30px;\n  border: 1px solid black;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.3);\n  transition: background-color 0.3s;\n}\n\n.button:hover {\n  cursor: pointer;\n}\n\n.button__ellipse:hover {\n  background-color: rgba(128, 255, 111, 0.5);\n}\n\n.card__content__icons__container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3em;\n}\n\n.icon--blue {\n  color: rgba(61, 158, 255, 0.7);\n  font-size: 22px;\n}\n\n.icon--red {\n  color: rgba(255, 3, 3, 0.5);\n  font-size: 22px;\n}\n\n.card__content__title {\n  font-size: 18px;\n  font-weight: 400;\n}\n\n.button--nostyle {\n  border: none;\n  background-color: inherit;\n  display: flex;\n  transition: transform 0.3s ease;\n}\n\n.button--nostyle:hover {\n  transform: scale(1.25);\n}\n\n/* SIDE MENU */\n\n.sidebar {\n  flex: 1;\n  border-right: 1px solid white;\n  background: linear-gradient(90deg, #50c9c3 0%, #96deda 100%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  font-family: 'Red Hat Display', sans-serif;\n  padding: 1em 0;\n}\n\n.sidebar__title {\n  font-weight: 300;\n  font-size: 50px;\n}\n\n.sidebar__container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4em;\n}\n\n.sidebar__button__container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n  color: #363636;\n}\n\n.sidebar__button {\n  display: grid;\n  color: #363636;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  background-color: inherit;\n  width: 15vw;\n  height: 10vh;\n  font-weight: 400;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.sidebar__button__title {\n  border: none;\n  background-color: inherit;\n  font: inherit;\n}\n\n.footer__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 28px;\n  width: 100%;\n  height: 54px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.link__github {\n  color: inherit;\n}\n\n/* SIDEMENU BUTTON MODALS */\n\n.sidebar__modal {\n  display: none;\n  text-align: center;\n}\n\n.modal__input {\n  height: 3vh;\n  font-size: 18px;\n  background-color: rgba(255, 255, 255, 0.2);\n  border: 1px solid white;\n  border-radius: 10px;\n}\n\n.checkmarks__container {\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/utils */ "./src/modules/utils.js");
// import { format, compareAsc } from 'date-fns'



(0,_modules_utils__WEBPACK_IMPORTED_MODULE_1__.globalEventListener)('click', '.sidebar__button__title', e => {
  // if btn parentElement has classlist then resize else expand
  if (e.target.parentElement.classList.contains('expand')) {
    (0,_modules_utils__WEBPACK_IMPORTED_MODULE_1__.resize)(e.target.parentElement)
    console.log('Resizing...')
  } else {
    (0,_modules_utils__WEBPACK_IMPORTED_MODULE_1__.expand)(e.target.parentElement)
    console.log('Expanding...')
  }
})


/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expand": () => (/* binding */ expand),
/* harmony export */   "globalEventListener": () => (/* binding */ globalEventListener),
/* harmony export */   "resize": () => (/* binding */ resize)
/* harmony export */ });
function globalEventListener (type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) {
      callback(e)
    }
  })
}

function expand (btn) {
  btn.classList.add('expand')
  delay(1000).then(animationClassRemover(btn))
}

function resize (btn) {
  btn.classList.add('resize')
  delay(1000).then(animationClassRemover(btn))
}

function delay (time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

function animationClassRemover (element) {
  if (element.classList.contains('expand')) {
    element.classList.remove('expand')
  }
  if (element.classList.contains('resize')) {
    element.classList.remove('resize')
  }
}


/***/ }),

/***/ "./src/assets/img/background.png":
/*!***************************************!*\
  !*** ./src/assets/img/background.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/background-5d5e8672dacca9ea60c1.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDZkEsWUFBWSxxQkFBcUI7QUFDYjtBQUNpRDs7QUFFckUsbUVBQW1CO0FBQ25CO0FBQ0E7QUFDQSxJQUFJLHNEQUFNO0FBQ1Y7QUFDQSxJQUFJO0FBQ0osSUFBSSxzREFBTTtBQUNWO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvaW1nL2JhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SZWQrSGF0K0Rpc3BsYXk6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1SZWQrSGF0K1RleHQ6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzEsMzAwOzEsNDAwOzEsNTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBcXG5mb250LWZhbWlseTogJ1JlZCBIYXQgRGlzcGxheScsIHNhbnMtc2VyaWY7XFxuZm9udC1mYW1pbHk6ICdSZWQgSGF0IFRleHQnLCBzYW5zLXNlcmlmO1xcbiovXFxuXFxuLyogQU5JTUFUSU9OICovXFxuXFxuQGtleWZyYW1lcyBleHBhbmRlciB7XFxuICAwJSB7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcmVzaXplciB7XFxuICAwJSB7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICB9XFxufVxcblxcbi5leHBhbmQge1xcbiAgYW5pbWF0aW9uOiBleHBhbmRlciAxcyBmb3J3YXJkcztcXG59XFxuXFxuLnJlc2l6ZSB7XFxuICBhbmltYXRpb246IHJlc2l6ZXIgMXMgZm9yd2FyZHM7XFxufVxcblxcbi8qIEJPRFkgKi9cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBNQUlOICovXFxuXFxuLm1haW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIENBUkQgKi9cXG5cXG4ubWFpbl9fY29udGVudF9fY2FyZHMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgZmxleDogNTtcXG4gIHBhZGRpbmc6IDElO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiBjbGFtcCg2NXB4LCA2dmgsIDd2aCk7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMmVtKTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnUmVkIEhhdCBUZXh0Jywgc2Fucy1zZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcmRfX2NvbnRlbnRfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS41ZW07XFxufVxcblxcbi5jYXJkX19jb250ZW50X190ZXh0X19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuMmVtO1xcbn1cXG5cXG4uY2FyZF9fY29udGVudF9faW5mb19fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLmluZm9fX2NhbGVuZGFyLFxcbi5pbmZvX19wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBnYXA6IDAuMmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogMSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxufVxcblxcbi5idXR0b25fX2VsbGlwc2Uge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b25fX2VsbGlwc2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDI1NSwgMTExLCAwLjUpO1xcbn1cXG5cXG4uY2FyZF9fY29udGVudF9faWNvbnNfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zZW07XFxufVxcblxcbi5pY29uLS1ibHVlIHtcXG4gIGNvbG9yOiByZ2JhKDYxLCAxNTgsIDI1NSwgMC43KTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmljb24tLXJlZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDMsIDMsIDAuNSk7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5jYXJkX19jb250ZW50X190aXRsZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYnV0dG9uLS1ub3N0eWxlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG59XFxuXFxuLmJ1dHRvbi0tbm9zdHlsZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcbn1cXG5cXG4vKiBTSURFIE1FTlUgKi9cXG5cXG4uc2lkZWJhciB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM1MGM5YzMgMCUsICM5NmRlZGEgMTAwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LWZhbWlseTogJ1JlZCBIYXQgRGlzcGxheScsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAxZW0gMDtcXG59XFxuXFxuLnNpZGViYXJfX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi5zaWRlYmFyX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0ZW07XFxufVxcblxcbi5zaWRlYmFyX19idXR0b25fX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41ZW07XFxuICBjb2xvcjogIzM2MzYzNjtcXG59XFxuXFxuLnNpZGViYXJfX2J1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgY29sb3I6ICMzNjM2MzY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXJfX2J1dHRvbl9fdGl0bGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi5mb290ZXJfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDU0cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5saW5rX19naXRodWIge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qIFNJREVNRU5VIEJVVFRPTiBNT0RBTFMgKi9cXG5cXG4uc2lkZWJhcl9fbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsX19pbnB1dCB7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNoZWNrbWFya3NfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0NBR0M7O0FBRUQsY0FBYzs7QUFFZDtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSx5REFBZ0Q7RUFDaEQsMEJBQTBCO0VBQzFCLE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxtQ0FBbUM7RUFDbkMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBOztFQUVFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLE9BQU87RUFDUCw2QkFBNkI7RUFDN0IsNERBQTREO0VBQzVELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLDJCQUEyQjs7QUFFM0I7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZiwwQ0FBMEM7RUFDMUMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsUUFBUTtBQUNWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJlZCtIYXQrRGlzcGxheTppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZmFtaWx5PVJlZCtIYXQrVGV4dDppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MSwzMDA7MSw0MDA7MSw1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogXFxuZm9udC1mYW1pbHk6ICdSZWQgSGF0IERpc3BsYXknLCBzYW5zLXNlcmlmO1xcbmZvbnQtZmFtaWx5OiAnUmVkIEhhdCBUZXh0Jywgc2Fucy1zZXJpZjtcXG4qL1xcblxcbi8qIEFOSU1BVElPTiAqL1xcblxcbkBrZXlmcmFtZXMgZXhwYW5kZXIge1xcbiAgMCUge1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJlc2l6ZXIge1xcbiAgMCUge1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgfVxcbn1cXG5cXG4uZXhwYW5kIHtcXG4gIGFuaW1hdGlvbjogZXhwYW5kZXIgMXMgZm9yd2FyZHM7XFxufVxcblxcbi5yZXNpemUge1xcbiAgYW5pbWF0aW9uOiByZXNpemVyIDFzIGZvcndhcmRzO1xcbn1cXG5cXG4vKiBCT0RZICovXFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogTUFJTiAqL1xcblxcbi5tYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBDQVJEICovXFxuXFxuLm1haW5fX2NvbnRlbnRfX2NhcmRzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChhc3NldHMvaW1nL2JhY2tncm91bmQucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgZmxleDogNTtcXG4gIHBhZGRpbmc6IDElO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiBjbGFtcCg2NXB4LCA2dmgsIDd2aCk7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMmVtKTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnUmVkIEhhdCBUZXh0Jywgc2Fucy1zZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcmRfX2NvbnRlbnRfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS41ZW07XFxufVxcblxcbi5jYXJkX19jb250ZW50X190ZXh0X19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuMmVtO1xcbn1cXG5cXG4uY2FyZF9fY29udGVudF9faW5mb19fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLmluZm9fX2NhbGVuZGFyLFxcbi5pbmZvX19wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBnYXA6IDAuMmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogMSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxufVxcblxcbi5idXR0b25fX2VsbGlwc2Uge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b25fX2VsbGlwc2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDI1NSwgMTExLCAwLjUpO1xcbn1cXG5cXG4uY2FyZF9fY29udGVudF9faWNvbnNfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zZW07XFxufVxcblxcbi5pY29uLS1ibHVlIHtcXG4gIGNvbG9yOiByZ2JhKDYxLCAxNTgsIDI1NSwgMC43KTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmljb24tLXJlZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDMsIDMsIDAuNSk7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5jYXJkX19jb250ZW50X190aXRsZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYnV0dG9uLS1ub3N0eWxlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG59XFxuXFxuLmJ1dHRvbi0tbm9zdHlsZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcbn1cXG5cXG4vKiBTSURFIE1FTlUgKi9cXG5cXG4uc2lkZWJhciB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM1MGM5YzMgMCUsICM5NmRlZGEgMTAwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LWZhbWlseTogJ1JlZCBIYXQgRGlzcGxheScsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAxZW0gMDtcXG59XFxuXFxuLnNpZGViYXJfX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi5zaWRlYmFyX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0ZW07XFxufVxcblxcbi5zaWRlYmFyX19idXR0b25fX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41ZW07XFxuICBjb2xvcjogIzM2MzYzNjtcXG59XFxuXFxuLnNpZGViYXJfX2J1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgY29sb3I6ICMzNjM2MzY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXJfX2J1dHRvbl9fdGl0bGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi5mb290ZXJfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDU0cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5saW5rX19naXRodWIge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qIFNJREVNRU5VIEJVVFRPTiBNT0RBTFMgKi9cXG5cXG4uc2lkZWJhcl9fbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsX19pbnB1dCB7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNoZWNrbWFya3NfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYyB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7IGdsb2JhbEV2ZW50TGlzdGVuZXIsIHJlc2l6ZSwgZXhwYW5kIH0gZnJvbSAnLi9tb2R1bGVzL3V0aWxzJ1xuXG5nbG9iYWxFdmVudExpc3RlbmVyKCdjbGljaycsICcuc2lkZWJhcl9fYnV0dG9uX190aXRsZScsIGUgPT4ge1xuICAvLyBpZiBidG4gcGFyZW50RWxlbWVudCBoYXMgY2xhc3NsaXN0IHRoZW4gcmVzaXplIGVsc2UgZXhwYW5kXG4gIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kJykpIHtcbiAgICByZXNpemUoZS50YXJnZXQucGFyZW50RWxlbWVudClcbiAgICBjb25zb2xlLmxvZygnUmVzaXppbmcuLi4nKVxuICB9IGVsc2Uge1xuICAgIGV4cGFuZChlLnRhcmdldC5wYXJlbnRFbGVtZW50KVxuICAgIGNvbnNvbGUubG9nKCdFeHBhbmRpbmcuLi4nKVxuICB9XG59KVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdsb2JhbEV2ZW50TGlzdGVuZXIgKHR5cGUsIHNlbGVjdG9yLCBjYWxsYmFjaykge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgY2FsbGJhY2soZSlcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmQgKGJ0bikge1xuICBidG4uY2xhc3NMaXN0LmFkZCgnZXhwYW5kJylcbiAgZGVsYXkoMTAwMCkudGhlbihhbmltYXRpb25DbGFzc1JlbW92ZXIoYnRuKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZSAoYnRuKSB7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKCdyZXNpemUnKVxuICBkZWxheSgxMDAwKS50aGVuKGFuaW1hdGlvbkNsYXNzUmVtb3ZlcihidG4pKVxufVxuXG5mdW5jdGlvbiBkZWxheSAodGltZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKVxufVxuXG5mdW5jdGlvbiBhbmltYXRpb25DbGFzc1JlbW92ZXIgKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmQnKSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kJylcbiAgfVxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Jlc2l6ZScpKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdyZXNpemUnKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=