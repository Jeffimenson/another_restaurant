/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
}

html {
    font-family: Helvetica, sans-serif;
}

body {
    display: flex;
    flex-direction: column;
}

body > #content {
    flex: 1;
}

button, input {
    background-color: inherit;
    border: none;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    cursor: pointer;
}

button:active, input:active {
    cursor: default;
}

/* Preliminaries above and other stuff below */

img.logo {
    display: block;
    height: 100%;
}

header {
    width: 100%;
    letter-spacing: 3px;
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    gap: 4em;
    box-shadow: 0 0 2px 2px gainsboro;
    height: 80px;
}

header > .fake-link {
    padding: 30px 0;
    height: 100%;
}

button#order {
    background-color: blue;
    color: azure;
    width: 130px;
    padding: 12px 16px;
    border-radius: 6px;
}

.fake-link.selected {
    border-bottom: 4px gold solid;
    padding-bottom: 26px;
    font-weight: 700;
}

#content {
    width: 100%;
    box-sizing: border-box;
    padding: 80px 25%;
    display: flex;
    flex-direction: column;

    font-size: 18px;
    gap: 20px;
}

#content h1 {
    font-size: 2.5em;
}

#content.about img {
    display: block;
    height: 450px;
    object-fit:cover;
    margin-bottom: 20px;
}

#content h1{
    text-align: center;
}

#content.menu {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 80px 1fr;
}

#content.menu .sidebar {
    display: flex;
    flex-direction: column;

    grid-row-start: 2;

    border: gainsboro 2px solid;
    border-radius: 10px;
    height: fit-content;
}

#content.menu .sidebar.featured {
    grid-row-start: 1;
}

.sidebar .sidetab {
    display: flex;
    height: 80px;
    align-items: center;
    gap: 15px;
    padding-left: 15px;

    cursor: pointer;
}

.sidebar .sidetab.selected {
    font-weight: bold;
    border-left: blue 4px solid;
}

.sidetab img {
    display: block;
    width: 30%;
    object-fit: contain;
}

.menu-holder {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-auto-rows: 200px;

    grid-column-start: 2;
    grid-row: 1 / -1;
    gap: 60px;
}

.menu-holder article {

    display: flex;
    flex-direction: column;
    text-align: center;

    cursor: pointer;

    justify-content: space-between;
}


.menu-holder article img {
    width: 100%;
    height: 70%;
    margin-bottom: 0px;    
    object-fit: contain;

}
.menu-holder article p:not(.limited)::after {
    content: ' ®';
}

.menu-holder article p.limited {
    color: rgb(173, 121, 24);
    font-size: 0.8em;
    font-weight: bold;
}

.menu-holder h1 {
    text-align: center;
    grid-column: 1 / -1;
}

footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 90px;
    padding: 0 25%;
    padding-bottom: 60px;
}

footer .row:first-child {
    display: flex;
    justify-content: space-between;
    padding-bottom: 60px;
    margin-bottom: 60px;
    border-bottom: 2px gainsboro solid;
    width: 100%;
}

footer .row:nth-child(2) {
    width: 100%;
    justify-content: left;
    display: flex;
    gap: 40px;
}

footer .row li {
    list-style: none;
    margin-bottom: 10px;
}



footer .row li:first-of-type {
    font-weight: bold;
}

footer a {
    text-decoration: none;
    color: inherit;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA,8CAA8C;;AAE9C;IACI,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;;IAEtB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,iBAAiB;;IAEjB,2BAA2B;IAC3B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,kBAAkB;;IAElB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,cAAc;IACd,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,WAAW;;IAEX,aAAa;IACb,qCAAqC;IACrC,wBAAwB;IACxB,qBAAqB;;IAErB,oBAAoB;IACpB,gBAAgB;IAChB,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;;IAElB,eAAe;;IAEf,8BAA8B;AAClC;;;AAGA;IACI,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,mBAAmB;;AAEvB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,gBAAgB;IAChB,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,oBAAoB;IACpB,mBAAmB;IACnB,kCAAkC;IAClC,WAAW;AACf;;AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;;;AAIA;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-family: Helvetica, sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nbody > #content {\n    flex: 1;\n}\n\nbutton, input {\n    background-color: inherit;\n    border: none;\n    font-size: inherit;\n    font-family: inherit;\n    color: inherit;\n    cursor: pointer;\n}\n\nbutton:active, input:active {\n    cursor: default;\n}\n\n/* Preliminaries above and other stuff below */\n\nimg.logo {\n    display: block;\n    height: 100%;\n}\n\nheader {\n    width: 100%;\n    letter-spacing: 3px;\n    display: flex;\n    font-size: 18px;\n    justify-content: center;\n    align-items: center;\n    gap: 4em;\n    box-shadow: 0 0 2px 2px gainsboro;\n    height: 80px;\n}\n\nheader > .fake-link {\n    padding: 30px 0;\n    height: 100%;\n}\n\nbutton#order {\n    background-color: blue;\n    color: azure;\n    width: 130px;\n    padding: 12px 16px;\n    border-radius: 6px;\n}\n\n.fake-link.selected {\n    border-bottom: 4px gold solid;\n    padding-bottom: 26px;\n    font-weight: 700;\n}\n\n#content {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 80px 25%;\n    display: flex;\n    flex-direction: column;\n\n    font-size: 18px;\n    gap: 20px;\n}\n\n#content h1 {\n    font-size: 2.5em;\n}\n\n#content.about img {\n    display: block;\n    height: 450px;\n    object-fit:cover;\n    margin-bottom: 20px;\n}\n\n#content h1{\n    text-align: center;\n}\n\n#content.menu {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 80px 1fr;\n}\n\n#content.menu .sidebar {\n    display: flex;\n    flex-direction: column;\n\n    grid-row-start: 2;\n\n    border: gainsboro 2px solid;\n    border-radius: 10px;\n    height: fit-content;\n}\n\n#content.menu .sidebar.featured {\n    grid-row-start: 1;\n}\n\n.sidebar .sidetab {\n    display: flex;\n    height: 80px;\n    align-items: center;\n    gap: 15px;\n    padding-left: 15px;\n\n    cursor: pointer;\n}\n\n.sidebar .sidetab.selected {\n    font-weight: bold;\n    border-left: blue 4px solid;\n}\n\n.sidetab img {\n    display: block;\n    width: 30%;\n    object-fit: contain;\n}\n\n.menu-holder {\n    width: 100%;\n\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: auto;\n    grid-auto-rows: 200px;\n\n    grid-column-start: 2;\n    grid-row: 1 / -1;\n    gap: 60px;\n}\n\n.menu-holder article {\n\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n\n    cursor: pointer;\n\n    justify-content: space-between;\n}\n\n\n.menu-holder article img {\n    width: 100%;\n    height: 70%;\n    margin-bottom: 0px;    \n    object-fit: contain;\n\n}\n.menu-holder article p:not(.limited)::after {\n    content: ' ®';\n}\n\n.menu-holder article p.limited {\n    color: rgb(173, 121, 24);\n    font-size: 0.8em;\n    font-weight: bold;\n}\n\n.menu-holder h1 {\n    text-align: center;\n    grid-column: 1 / -1;\n}\n\nfooter {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    margin-top: 90px;\n    padding: 0 25%;\n    padding-bottom: 60px;\n}\n\nfooter .row:first-child {\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 60px;\n    margin-bottom: 60px;\n    border-bottom: 2px gainsboro solid;\n    width: 100%;\n}\n\nfooter .row:nth-child(2) {\n    width: 100%;\n    justify-content: left;\n    display: flex;\n    gap: 40px;\n}\n\nfooter .row li {\n    list-style: none;\n    margin-bottom: 10px;\n}\n\n\n\nfooter .row li:first-of-type {\n    font-weight: bold;\n}\n\nfooter a {\n    text-decoration: none;\n    color: inherit;\n}"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/image_mod/image_barrel.js":
/*!***************************************!*\
  !*** ./src/image_mod/image_barrel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logo: () => (/* reexport default export from named module */ _bcbonalds_jpg__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   manEatingBurger: () => (/* reexport default export from named module */ _man_eating_burger_jpeg__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _bcbonalds_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bcbonalds.jpg */ "./src/image_mod/bcbonalds.jpg");
/* harmony import */ var _man_eating_burger_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./man_eating_burger.jpeg */ "./src/image_mod/man_eating_burger.jpeg");
 //cant just do export logo since this is an export from statement




/***/ }),

/***/ "./src/jeffQuery.js":
/*!**************************!*\
  !*** ./src/jeffQuery.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   make: () => (/* binding */ make)
/* harmony export */ });
function make(selector, parent){
    let lastInd = getNextSeparator(0, selector);
    
    const correctedLastInd = (lastInd > -1) ? lastInd : selector.length;
    const type = selector.slice(0, correctedLastInd);

    const classes = [];
    let id;
    while (lastInd > -1){
        const ind = getNextSeparator(lastInd+1, selector);
        const correctedInd = (ind > -1) ? ind : selector.length;
        const subStr = selector.slice(lastInd+1, correctedInd);

        if (subStr.length === 0){
            throw console.error('Usage error: Tried to use two symbols for class and/or id in a row.');
            return;
        }
        const sym = selector.at(lastInd);
        if (sym === '.'){
            classes.unshift(subStr);
        } else if (id === undefined) {
            id = subStr;
        } else {
            throw console.error("Argument error: elements can't have multiple ids");
            return;
        }

        lastInd = ind;
    }

    const newElement = document.createElement(type);
    for (const clazz of classes){
        newElement.classList.add(clazz);
    }
    if (id) newElement.setAttribute('id', id);
    if (parent) parent.append(newElement);
    return newElement;
    
}

function getNextSeparator(start, selector){
    const nextHash = selector.indexOf('#', start);
    const nextDot = selector.indexOf('.', start);

    if (nextHash === -1){
        return nextDot;
    } else if (nextDot === -1){
        return nextHash;
    }
    return (nextHash > nextDot) ? nextDot : nextHash;
}

 

/***/ }),

/***/ "./src/image_mod/bcbonalds.jpg":
/*!*************************************!*\
  !*** ./src/image_mod/bcbonalds.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0c7661c0b963cd23374.jpg";

/***/ }),

/***/ "./src/image_mod/man_eating_burger.jpeg":
/*!**********************************************!*\
  !*** ./src/image_mod/man_eating_burger.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8243cecb215e5ad41df.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _image_mod_image_barrel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image_mod/image_barrel.js */ "./src/image_mod/image_barrel.js");
/* harmony import */ var _jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jeffQuery.js */ "./src/jeffQuery.js");





const body = document.querySelector('body');
const content = document.querySelector('#content');

const fakeLinks = [];
createHeader(fakeLinks);
createFooter();
const menuFakeLink = fakeLinks[0];
const contactFakeLink = fakeLinks[1];
const aboutFakeLink = fakeLinks[2];

loadAbout(aboutFakeLink, fakeLinks);
let lastContext = 'about';
content.classList.add(lastContext);


aboutFakeLink.addEventListener('click', () => {
    changeContentContext('about');
    clearContent(content);
    loadAbout(aboutFakeLink, fakeLinks);
});

contactFakeLink.addEventListener('click', ()=>{
    changeContentContext('contact');
    clearContent(content); //this not working for some reason
    loadContact(contactFakeLink, fakeLinks);
});

menuFakeLink.addEventListener('click', () => {
    changeContentContext('menu');
    clearContent(content);
    loadMenu(menuFakeLink, fakeLinks);
});

function createHeader(fakeLinks){
    const header = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('header');
    const logoImg = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('img.logo', header);
    logoImg.src = _image_mod_image_barrel_js__WEBPACK_IMPORTED_MODULE_1__.logo;
    logoImg.alt = 'logo';

    fakeLinks[0] = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('button.fake-link#menu', header);
    fakeLinks[0].textContent = 'Menu';
    fakeLinks[1] = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('button.fake-link#contact', header);
    fakeLinks[1].textContent = 'Contact';
    fakeLinks[2] = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('button.fake-link#about', header);
    fakeLinks[2].textContent = 'About';

    const orderButton = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('button#order', header);
    orderButton.textContent = 'Order now';

    body.prepend(header);
}

function createFooter(){
    const footer = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('footer', body);
    
    const row1 = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('div.row', footer);
    for (let i = 0; i < 4; i++){
        const listCol = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('div.list-col', row1);
        const list = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('ul', listCol);
        for (let j = 0; j < 3 + i; j++) {
            const li = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('li', listCol);
            const a = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('a', li);
            a.textContent = 'Stuff stuff';
            a.href = '#';
        }
    }

    const row2 = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('div.row', footer);
    for (let i = 0; i < 5; i++){
        const dummyLink = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('a', row2);
        dummyLink.textContent = "More stuff";
        dummyLink.href = "#";
    } 
}

function loadAbout(aboutLink, fakeLinks) {
    reassignSelectedFakeLink(aboutLink, fakeLinks);

    const heading1 = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('h1', content);
    heading1.textContent = "About us";
    const img = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('img', content);
    img.src = _image_mod_image_barrel_js__WEBPACK_IMPORTED_MODULE_1__.manEatingBurger;
    img.alt = "man enjoying bcbonalds burger";
    const heading2 = document.createElement('h2');
    heading2.textContent = "Dedication to you";
    content.append(heading2);
    const para = document.createElement('p');
    para.textContent = "We redefine fast food with imaginative flavors and a quirky atmosphere all for our mission to make dining fun and unforgettable! Join us at BcBonalds for a delightful experience that leaves you smiling with every bite.";
    content.append(para);
}

function loadContact(contactLink, fakeLinks){
    reassignSelectedFakeLink(contactLink, fakeLinks);

    const heading2 = document.createElement('h2');
    heading2.textContent = "Reach us at:";
    content.append(heading2);
    const para = document.createElement('p');
    para.append(document.createTextNode('bcbonaldsisgreat@bcbonalds.com'))
    para.append(document.createElement('br'));
    para.append(document.createTextNode('669-420-6969'));
    content.append(para);
}

function loadMenu(menuLink, fakeLinks){
    reassignSelectedFakeLink(menuLink, fakeLinks);

    const featured = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('div.sidebar.featured', content);;
    const featTab = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('div.sidetab', featured);
    const featImg = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('img', featTab);
    featImg.src = 'https://s7d1.scene7.com/is/image/mcdonalds/desserts_shakes_300x300:category-panel-left-desktop' ;
    featImg.alt = 'featured image';
    const featName = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('p', featTab);
    featName.textContent = 'Featured';
    
    const sidebar = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('div.sidebar', content);
    
    const tab = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('div.sidetab.selected', sidebar);
    const tabImg = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('img', tab);
    tabImg.src = 'https://s7d1.scene7.com/is/image/mcdonalds/burgers_300x300:category-panel-left-desktop';
    tab.alt = 'tab picture';
    const tabName = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('p', tab);
    tabName.textContent = "Burgers";

    for (let i = 0; i < 5; i++){
        const tab = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('div.sidetab', sidebar);
        const tabImg = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('img', tab);
        tabImg.src = 'https://s7d1.scene7.com/is/image/mcdonalds/burgers_300x300:category-panel-left-desktop';
        tab.alt = 'tab picture';
        const tabName = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('p', tab);
        tabName.textContent = "Burgers";

    }

    const menuHolder = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('div.menu-holder', content);
    const heading1 = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('h1', menuHolder);
    heading1.textContent = "Our food";
    for (let i = 0; i < 8; i++){
        const entryArticle = makeEntry('BcBurger', 'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:1-4-product-tile-desktop', true);
        menuHolder.append(entryArticle);
    }

}

function makeEntry(name, img, isLimited){
    const entryArticle = document.createElement('article');
    const entryImg = document.createElement('img');
    entryImg.src = img;
    entryImg.alt = 'entry image for ' + name;
    entryArticle.append(entryImg);

    if (isLimited) {
        const limitedP = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_2__.make)('p.limited', entryArticle);
        limitedP.textContent = 'Limited Time Only'
    }
    const entryName = document.createElement('p');
    entryName.textContent = name;
    entryArticle.append(entryName);

    return entryArticle;
}



function reassignSelectedFakeLink(fakeLink, fakeLinks){
    fakeLinks.map((fakeLink => {
        fakeLink.classList.remove('selected');
    }));
    fakeLink.classList.add('selected');
}

function clearContent(content){
    content.textContent = "";
}

function changeContentContext(context){
    content.classList.remove(lastContext);
    content.classList.add(context);
    lastContext = context;
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxjQUFjLFlBQVksWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtB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QUVBLG9CQUFvQixPQUFPO0FBQzNCLG9CQUFvQixtREFBSTtBQUN4Qix1QkFBdUIsbURBQUk7QUFDM0I7QUFDQTtBQUNBLHdCQUF3QixtREFBSTtBQUM1Qjs7QUFFQTs7QUFFQSx1QkFBdUIsbURBQUk7QUFDM0IscUJBQXFCLG1EQUFJO0FBQ3pCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixtREFBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYW5vdGhlcl9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYW5vdGhlcl9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlcl9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VfbW9kL2ltYWdlX2JhcnJlbC5qcyIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvLi9zcmMvamVmZlF1ZXJ5LmpzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYW5vdGhlcl9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYW5vdGhlcl9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5odG1sIHtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmJvZHkgPiAjY29udGVudCB7XG4gICAgZmxleDogMTtcbn1cblxuYnV0dG9uLCBpbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmFjdGl2ZSwgaW5wdXQ6YWN0aXZlIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qIFByZWxpbWluYXJpZXMgYWJvdmUgYW5kIG90aGVyIHN0dWZmIGJlbG93ICovXG5cbmltZy5sb2dvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNGVtO1xuICAgIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IGdhaW5zYm9ybztcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG5cbmhlYWRlciA+IC5mYWtlLWxpbmsge1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJ1dHRvbiNvcmRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBjb2xvcjogYXp1cmU7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5mYWtlLWxpbmsuc2VsZWN0ZWQge1xuICAgIGJvcmRlci1ib3R0b206IDRweCBnb2xkIHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNjb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDgwcHggMjUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBnYXA6IDIwcHg7XG59XG5cbiNjb250ZW50IGgxIHtcbiAgICBmb250LXNpemU6IDIuNWVtO1xufVxuXG4jY29udGVudC5hYm91dCBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNDUwcHg7XG4gICAgb2JqZWN0LWZpdDpjb3ZlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jY29udGVudCBoMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250ZW50Lm1lbnUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnI7XG59XG5cbiNjb250ZW50Lm1lbnUgLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuXG4gICAgYm9yZGVyOiBnYWluc2Jvcm8gMnB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuI2NvbnRlbnQubWVudSAuc2lkZWJhci5mZWF0dXJlZCB7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG59XG5cbi5zaWRlYmFyIC5zaWRldGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRlYmFyIC5zaWRldGFiLnNlbGVjdGVkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItbGVmdDogYmx1ZSA0cHggc29saWQ7XG59XG5cbi5zaWRldGFiIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4ubWVudS1ob2xkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBncmlkLWF1dG8tcm93czogMjAwcHg7XG5cbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLXJvdzogMSAvIC0xO1xuICAgIGdhcDogNjBweDtcbn1cblxuLm1lbnUtaG9sZGVyIGFydGljbGUge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuXG4ubWVudS1ob2xkZXIgYXJ0aWNsZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDsgICAgXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcblxufVxuLm1lbnUtaG9sZGVyIGFydGljbGUgcDpub3QoLmxpbWl0ZWQpOjphZnRlciB7XG4gICAgY29udGVudDogJyDCric7XG59XG5cbi5tZW51LWhvbGRlciBhcnRpY2xlIHAubGltaXRlZCB7XG4gICAgY29sb3I6IHJnYigxNzMsIDEyMSwgMjQpO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tZW51LWhvbGRlciBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG59XG5cbmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICAgIHBhZGRpbmc6IDAgMjUlO1xuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuXG5mb290ZXIgLnJvdzpmaXJzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggZ2FpbnNib3JvIHNvbGlkO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5mb290ZXIgLnJvdzpudGgtY2hpbGQoMikge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNDBweDtcbn1cblxuZm9vdGVyIC5yb3cgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuXG5cbmZvb3RlciAucm93IGxpOmZpcnN0LW9mLXR5cGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5mb290ZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSw4Q0FBOEM7O0FBRTlDO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLGlCQUFpQjs7SUFFakIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsa0JBQWtCOztJQUVsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVzs7SUFFWCxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLHdCQUF3QjtJQUN4QixxQkFBcUI7O0lBRXJCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCOztJQUVsQixlQUFlOztJQUVmLDhCQUE4QjtBQUNsQzs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0lBRW5CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7O0FBSUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmJvZHkgPiAjY29udGVudCB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbmJ1dHRvbiwgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUsIGlucHV0OmFjdGl2ZSB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyogUHJlbGltaW5hcmllcyBhYm92ZSBhbmQgb3RoZXIgc3R1ZmYgYmVsb3cgKi9cXG5cXG5pbWcubG9nbyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRlbTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAycHggZ2FpbnNib3JvO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbmhlYWRlciA+IC5mYWtlLWxpbmsge1xcbiAgICBwYWRkaW5nOiAzMHB4IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYnV0dG9uI29yZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgY29sb3I6IGF6dXJlO1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4uZmFrZS1saW5rLnNlbGVjdGVkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IGdvbGQgc29saWQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA4MHB4IDI1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNjb250ZW50IGgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXG59XFxuXFxuI2NvbnRlbnQuYWJvdXQgaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIG9iamVjdC1maXQ6Y292ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNjb250ZW50IGgxe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50Lm1lbnUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnI7XFxufVxcblxcbiNjb250ZW50Lm1lbnUgLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG5cXG4gICAgYm9yZGVyOiBnYWluc2Jvcm8gMnB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jY29udGVudC5tZW51IC5zaWRlYmFyLmZlYXR1cmVkIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxufVxcblxcbi5zaWRlYmFyIC5zaWRldGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciAuc2lkZXRhYi5zZWxlY3RlZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItbGVmdDogYmx1ZSA0cHggc29saWQ7XFxufVxcblxcbi5zaWRldGFiIGltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4ubWVudS1ob2xkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBncmlkLWF1dG8tcm93czogMjAwcHg7XFxuXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICBnYXA6IDYwcHg7XFxufVxcblxcbi5tZW51LWhvbGRlciBhcnRpY2xlIHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuXFxuLm1lbnUtaG9sZGVyIGFydGljbGUgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7ICAgIFxcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcblxcbn1cXG4ubWVudS1ob2xkZXIgYXJ0aWNsZSBwOm5vdCgubGltaXRlZCk6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyDCric7XFxufVxcblxcbi5tZW51LWhvbGRlciBhcnRpY2xlIHAubGltaXRlZCB7XFxuICAgIGNvbG9yOiByZ2IoMTczLCAxMjEsIDI0KTtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tZW51LWhvbGRlciBoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcDogOTBweDtcXG4gICAgcGFkZGluZzogMCAyNSU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcbn1cXG5cXG5mb290ZXIgLnJvdzpmaXJzdC1jaGlsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBnYWluc2Jvcm8gc29saWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5mb290ZXIgLnJvdzpudGgtY2hpbGQoMikge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcbmZvb3RlciAucm93IGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuXFxuXFxuZm9vdGVyIC5yb3cgbGk6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQge2RlZmF1bHQgYXMgbG9nb30gZnJvbSAnLi9iY2JvbmFsZHMuanBnJzsgLy9jYW50IGp1c3QgZG8gZXhwb3J0IGxvZ28gc2luY2UgdGhpcyBpcyBhbiBleHBvcnQgZnJvbSBzdGF0ZW1lbnRcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtYW5FYXRpbmdCdXJnZXJ9IGZyb20gJy4vbWFuX2VhdGluZ19idXJnZXIuanBlZyc7XG5cbiIsImZ1bmN0aW9uIG1ha2Uoc2VsZWN0b3IsIHBhcmVudCl7XG4gICAgbGV0IGxhc3RJbmQgPSBnZXROZXh0U2VwYXJhdG9yKDAsIHNlbGVjdG9yKTtcbiAgICBcbiAgICBjb25zdCBjb3JyZWN0ZWRMYXN0SW5kID0gKGxhc3RJbmQgPiAtMSkgPyBsYXN0SW5kIDogc2VsZWN0b3IubGVuZ3RoO1xuICAgIGNvbnN0IHR5cGUgPSBzZWxlY3Rvci5zbGljZSgwLCBjb3JyZWN0ZWRMYXN0SW5kKTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgICBsZXQgaWQ7XG4gICAgd2hpbGUgKGxhc3RJbmQgPiAtMSl7XG4gICAgICAgIGNvbnN0IGluZCA9IGdldE5leHRTZXBhcmF0b3IobGFzdEluZCsxLCBzZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGNvcnJlY3RlZEluZCA9IChpbmQgPiAtMSkgPyBpbmQgOiBzZWxlY3Rvci5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHN1YlN0ciA9IHNlbGVjdG9yLnNsaWNlKGxhc3RJbmQrMSwgY29ycmVjdGVkSW5kKTtcblxuICAgICAgICBpZiAoc3ViU3RyLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKCdVc2FnZSBlcnJvcjogVHJpZWQgdG8gdXNlIHR3byBzeW1ib2xzIGZvciBjbGFzcyBhbmQvb3IgaWQgaW4gYSByb3cuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3ltID0gc2VsZWN0b3IuYXQobGFzdEluZCk7XG4gICAgICAgIGlmIChzeW0gPT09ICcuJyl7XG4gICAgICAgICAgICBjbGFzc2VzLnVuc2hpZnQoc3ViU3RyKTtcbiAgICAgICAgfSBlbHNlIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZCA9IHN1YlN0cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoXCJBcmd1bWVudCBlcnJvcjogZWxlbWVudHMgY2FuJ3QgaGF2ZSBtdWx0aXBsZSBpZHNcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0SW5kID0gaW5kO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGZvciAoY29uc3QgY2xhenogb2YgY2xhc3Nlcyl7XG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGF6eik7XG4gICAgfVxuICAgIGlmIChpZCkgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5hcHBlbmQobmV3RWxlbWVudCk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGdldE5leHRTZXBhcmF0b3Ioc3RhcnQsIHNlbGVjdG9yKXtcbiAgICBjb25zdCBuZXh0SGFzaCA9IHNlbGVjdG9yLmluZGV4T2YoJyMnLCBzdGFydCk7XG4gICAgY29uc3QgbmV4dERvdCA9IHNlbGVjdG9yLmluZGV4T2YoJy4nLCBzdGFydCk7XG5cbiAgICBpZiAobmV4dEhhc2ggPT09IC0xKXtcbiAgICAgICAgcmV0dXJuIG5leHREb3Q7XG4gICAgfSBlbHNlIGlmIChuZXh0RG90ID09PSAtMSl7XG4gICAgICAgIHJldHVybiBuZXh0SGFzaDtcbiAgICB9XG4gICAgcmV0dXJuIChuZXh0SGFzaCA+IG5leHREb3QpID8gbmV4dERvdCA6IG5leHRIYXNoO1xufVxuXG5leHBvcnQge21ha2V9OyAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQge2xvZ28sIG1hbkVhdGluZ0J1cmdlcn0gZnJvbSAnLi9pbWFnZV9tb2QvaW1hZ2VfYmFycmVsLmpzJztcbmltcG9ydCB7bWFrZX0gZnJvbSAnLi9qZWZmUXVlcnkuanMnXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuY29uc3QgZmFrZUxpbmtzID0gW107XG5jcmVhdGVIZWFkZXIoZmFrZUxpbmtzKTtcbmNyZWF0ZUZvb3RlcigpO1xuY29uc3QgbWVudUZha2VMaW5rID0gZmFrZUxpbmtzWzBdO1xuY29uc3QgY29udGFjdEZha2VMaW5rID0gZmFrZUxpbmtzWzFdO1xuY29uc3QgYWJvdXRGYWtlTGluayA9IGZha2VMaW5rc1syXTtcblxubG9hZEFib3V0KGFib3V0RmFrZUxpbmssIGZha2VMaW5rcyk7XG5sZXQgbGFzdENvbnRleHQgPSAnYWJvdXQnO1xuY29udGVudC5jbGFzc0xpc3QuYWRkKGxhc3RDb250ZXh0KTtcblxuXG5hYm91dEZha2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNoYW5nZUNvbnRlbnRDb250ZXh0KCdhYm91dCcpO1xuICAgIGNsZWFyQ29udGVudChjb250ZW50KTtcbiAgICBsb2FkQWJvdXQoYWJvdXRGYWtlTGluaywgZmFrZUxpbmtzKTtcbn0pO1xuXG5jb250YWN0RmFrZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNoYW5nZUNvbnRlbnRDb250ZXh0KCdjb250YWN0Jyk7XG4gICAgY2xlYXJDb250ZW50KGNvbnRlbnQpOyAvL3RoaXMgbm90IHdvcmtpbmcgZm9yIHNvbWUgcmVhc29uXG4gICAgbG9hZENvbnRhY3QoY29udGFjdEZha2VMaW5rLCBmYWtlTGlua3MpO1xufSk7XG5cbm1lbnVGYWtlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGFuZ2VDb250ZW50Q29udGV4dCgnbWVudScpO1xuICAgIGNsZWFyQ29udGVudChjb250ZW50KTtcbiAgICBsb2FkTWVudShtZW51RmFrZUxpbmssIGZha2VMaW5rcyk7XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKGZha2VMaW5rcyl7XG4gICAgY29uc3QgaGVhZGVyID0gbWFrZSgnaGVhZGVyJyk7XG4gICAgY29uc3QgbG9nb0ltZyA9IG1ha2UoJ2ltZy5sb2dvJywgaGVhZGVyKTtcbiAgICBsb2dvSW1nLnNyYyA9IGxvZ287XG4gICAgbG9nb0ltZy5hbHQgPSAnbG9nbyc7XG5cbiAgICBmYWtlTGlua3NbMF0gPSBtYWtlKCdidXR0b24uZmFrZS1saW5rI21lbnUnLCBoZWFkZXIpO1xuICAgIGZha2VMaW5rc1swXS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBmYWtlTGlua3NbMV0gPSBtYWtlKCdidXR0b24uZmFrZS1saW5rI2NvbnRhY3QnLCBoZWFkZXIpO1xuICAgIGZha2VMaW5rc1sxXS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBmYWtlTGlua3NbMl0gPSBtYWtlKCdidXR0b24uZmFrZS1saW5rI2Fib3V0JywgaGVhZGVyKTtcbiAgICBmYWtlTGlua3NbMl0udGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuXG4gICAgY29uc3Qgb3JkZXJCdXR0b24gPSBtYWtlKCdidXR0b24jb3JkZXInLCBoZWFkZXIpO1xuICAgIG9yZGVyQnV0dG9uLnRleHRDb250ZW50ID0gJ09yZGVyIG5vdyc7XG5cbiAgICBib2R5LnByZXBlbmQoaGVhZGVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyID0gbWFrZSgnZm9vdGVyJywgYm9keSk7XG4gICAgXG4gICAgY29uc3Qgcm93MSA9IG1ha2UoJ2Rpdi5yb3cnLCBmb290ZXIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKXtcbiAgICAgICAgY29uc3QgbGlzdENvbCA9IG1ha2UoJ2Rpdi5saXN0LWNvbCcsIHJvdzEpO1xuICAgICAgICBjb25zdCBsaXN0ID0gbWFrZSgndWwnLCBsaXN0Q29sKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzICsgaTsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IG1ha2UoJ2xpJywgbGlzdENvbCk7XG4gICAgICAgICAgICBjb25zdCBhID0gbWFrZSgnYScsIGxpKTtcbiAgICAgICAgICAgIGEudGV4dENvbnRlbnQgPSAnU3R1ZmYgc3R1ZmYnO1xuICAgICAgICAgICAgYS5ocmVmID0gJyMnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm93MiA9IG1ha2UoJ2Rpdi5yb3cnLCBmb290ZXIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgICAgICAgY29uc3QgZHVtbXlMaW5rID0gbWFrZSgnYScsIHJvdzIpO1xuICAgICAgICBkdW1teUxpbmsudGV4dENvbnRlbnQgPSBcIk1vcmUgc3R1ZmZcIjtcbiAgICAgICAgZHVtbXlMaW5rLmhyZWYgPSBcIiNcIjtcbiAgICB9IFxufVxuXG5mdW5jdGlvbiBsb2FkQWJvdXQoYWJvdXRMaW5rLCBmYWtlTGlua3MpIHtcbiAgICByZWFzc2lnblNlbGVjdGVkRmFrZUxpbmsoYWJvdXRMaW5rLCBmYWtlTGlua3MpO1xuXG4gICAgY29uc3QgaGVhZGluZzEgPSBtYWtlKCdoMScsIGNvbnRlbnQpO1xuICAgIGhlYWRpbmcxLnRleHRDb250ZW50ID0gXCJBYm91dCB1c1wiO1xuICAgIGNvbnN0IGltZyA9IG1ha2UoJ2ltZycsIGNvbnRlbnQpO1xuICAgIGltZy5zcmMgPSBtYW5FYXRpbmdCdXJnZXI7XG4gICAgaW1nLmFsdCA9IFwibWFuIGVuam95aW5nIGJjYm9uYWxkcyBidXJnZXJcIjtcbiAgICBjb25zdCBoZWFkaW5nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZzIudGV4dENvbnRlbnQgPSBcIkRlZGljYXRpb24gdG8geW91XCI7XG4gICAgY29udGVudC5hcHBlbmQoaGVhZGluZzIpO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IFwiV2UgcmVkZWZpbmUgZmFzdCBmb29kIHdpdGggaW1hZ2luYXRpdmUgZmxhdm9ycyBhbmQgYSBxdWlya3kgYXRtb3NwaGVyZSBhbGwgZm9yIG91ciBtaXNzaW9uIHRvIG1ha2UgZGluaW5nIGZ1biBhbmQgdW5mb3JnZXR0YWJsZSEgSm9pbiB1cyBhdCBCY0JvbmFsZHMgZm9yIGEgZGVsaWdodGZ1bCBleHBlcmllbmNlIHRoYXQgbGVhdmVzIHlvdSBzbWlsaW5nIHdpdGggZXZlcnkgYml0ZS5cIjtcbiAgICBjb250ZW50LmFwcGVuZChwYXJhKTtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoY29udGFjdExpbmssIGZha2VMaW5rcyl7XG4gICAgcmVhc3NpZ25TZWxlY3RlZEZha2VMaW5rKGNvbnRhY3RMaW5rLCBmYWtlTGlua3MpO1xuXG4gICAgY29uc3QgaGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcyLnRleHRDb250ZW50ID0gXCJSZWFjaCB1cyBhdDpcIjtcbiAgICBjb250ZW50LmFwcGVuZChoZWFkaW5nMik7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnYmNib25hbGRzaXNncmVhdEBiY2JvbmFsZHMuY29tJykpXG4gICAgcGFyYS5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgcGFyYS5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJzY2OS00MjAtNjk2OScpKTtcbiAgICBjb250ZW50LmFwcGVuZChwYXJhKTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUobWVudUxpbmssIGZha2VMaW5rcyl7XG4gICAgcmVhc3NpZ25TZWxlY3RlZEZha2VMaW5rKG1lbnVMaW5rLCBmYWtlTGlua3MpO1xuXG4gICAgY29uc3QgZmVhdHVyZWQgPSBtYWtlKCdkaXYuc2lkZWJhci5mZWF0dXJlZCcsIGNvbnRlbnQpOztcbiAgICBjb25zdCBmZWF0VGFiID0gbWFrZSgnZGl2LnNpZGV0YWInLCBmZWF0dXJlZCk7XG4gICAgY29uc3QgZmVhdEltZyA9IG1ha2UoJ2ltZycsIGZlYXRUYWIpO1xuICAgIGZlYXRJbWcuc3JjID0gJ2h0dHBzOi8vczdkMS5zY2VuZTcuY29tL2lzL2ltYWdlL21jZG9uYWxkcy9kZXNzZXJ0c19zaGFrZXNfMzAweDMwMDpjYXRlZ29yeS1wYW5lbC1sZWZ0LWRlc2t0b3AnIDtcbiAgICBmZWF0SW1nLmFsdCA9ICdmZWF0dXJlZCBpbWFnZSc7XG4gICAgY29uc3QgZmVhdE5hbWUgPSBtYWtlKCdwJywgZmVhdFRhYik7XG4gICAgZmVhdE5hbWUudGV4dENvbnRlbnQgPSAnRmVhdHVyZWQnO1xuICAgIFxuICAgIGNvbnN0IHNpZGViYXIgPSBtYWtlKCdkaXYuc2lkZWJhcicsIGNvbnRlbnQpO1xuICAgIFxuICAgIGNvbnN0IHRhYiA9IG1ha2UoJ2Rpdi5zaWRldGFiLnNlbGVjdGVkJywgc2lkZWJhcik7XG4gICAgY29uc3QgdGFiSW1nID0gbWFrZSgnaW1nJywgdGFiKTtcbiAgICB0YWJJbWcuc3JjID0gJ2h0dHBzOi8vczdkMS5zY2VuZTcuY29tL2lzL2ltYWdlL21jZG9uYWxkcy9idXJnZXJzXzMwMHgzMDA6Y2F0ZWdvcnktcGFuZWwtbGVmdC1kZXNrdG9wJztcbiAgICB0YWIuYWx0ID0gJ3RhYiBwaWN0dXJlJztcbiAgICBjb25zdCB0YWJOYW1lID0gbWFrZSgncCcsIHRhYik7XG4gICAgdGFiTmFtZS50ZXh0Q29udGVudCA9IFwiQnVyZ2Vyc1wiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspe1xuICAgICAgICBjb25zdCB0YWIgPSBtYWtlKCdkaXYuc2lkZXRhYicsIHNpZGViYXIpO1xuICAgICAgICBjb25zdCB0YWJJbWcgPSBtYWtlKCdpbWcnLCB0YWIpO1xuICAgICAgICB0YWJJbWcuc3JjID0gJ2h0dHBzOi8vczdkMS5zY2VuZTcuY29tL2lzL2ltYWdlL21jZG9uYWxkcy9idXJnZXJzXzMwMHgzMDA6Y2F0ZWdvcnktcGFuZWwtbGVmdC1kZXNrdG9wJztcbiAgICAgICAgdGFiLmFsdCA9ICd0YWIgcGljdHVyZSc7XG4gICAgICAgIGNvbnN0IHRhYk5hbWUgPSBtYWtlKCdwJywgdGFiKTtcbiAgICAgICAgdGFiTmFtZS50ZXh0Q29udGVudCA9IFwiQnVyZ2Vyc1wiO1xuXG4gICAgfVxuXG4gICAgY29uc3QgbWVudUhvbGRlciA9IG1ha2UoJ2Rpdi5tZW51LWhvbGRlcicsIGNvbnRlbnQpO1xuICAgIGNvbnN0IGhlYWRpbmcxID0gbWFrZSgnaDEnLCBtZW51SG9sZGVyKTtcbiAgICBoZWFkaW5nMS50ZXh0Q29udGVudCA9IFwiT3VyIGZvb2RcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGVudHJ5QXJ0aWNsZSA9IG1ha2VFbnRyeSgnQmNCdXJnZXInLCAnaHR0cHM6Ly9zN2QxLnNjZW5lNy5jb20vaXMvaW1hZ2UvbWNkb25hbGRzL0RDXzIwMTkwN18wMDA1X0JpZ01hY184MzJ4NDcyOjEtNC1wcm9kdWN0LXRpbGUtZGVza3RvcCcsIHRydWUpO1xuICAgICAgICBtZW51SG9sZGVyLmFwcGVuZChlbnRyeUFydGljbGUpO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBtYWtlRW50cnkobmFtZSwgaW1nLCBpc0xpbWl0ZWQpe1xuICAgIGNvbnN0IGVudHJ5QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICBjb25zdCBlbnRyeUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGVudHJ5SW1nLnNyYyA9IGltZztcbiAgICBlbnRyeUltZy5hbHQgPSAnZW50cnkgaW1hZ2UgZm9yICcgKyBuYW1lO1xuICAgIGVudHJ5QXJ0aWNsZS5hcHBlbmQoZW50cnlJbWcpO1xuXG4gICAgaWYgKGlzTGltaXRlZCkge1xuICAgICAgICBjb25zdCBsaW1pdGVkUCA9IG1ha2UoJ3AubGltaXRlZCcsIGVudHJ5QXJ0aWNsZSk7XG4gICAgICAgIGxpbWl0ZWRQLnRleHRDb250ZW50ID0gJ0xpbWl0ZWQgVGltZSBPbmx5J1xuICAgIH1cbiAgICBjb25zdCBlbnRyeU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZW50cnlOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBlbnRyeUFydGljbGUuYXBwZW5kKGVudHJ5TmFtZSk7XG5cbiAgICByZXR1cm4gZW50cnlBcnRpY2xlO1xufVxuXG5cblxuZnVuY3Rpb24gcmVhc3NpZ25TZWxlY3RlZEZha2VMaW5rKGZha2VMaW5rLCBmYWtlTGlua3Mpe1xuICAgIGZha2VMaW5rcy5tYXAoKGZha2VMaW5rID0+IHtcbiAgICAgICAgZmFrZUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB9KSk7XG4gICAgZmFrZUxpbmsuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KGNvbnRlbnQpe1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb250ZW50Q29udGV4dChjb250ZXh0KXtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUobGFzdENvbnRleHQpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChjb250ZXh0KTtcbiAgICBsYXN0Q29udGV4dCA9IGNvbnRleHQ7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==