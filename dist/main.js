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
    min-height: 900px;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA,8CAA8C;;AAE9C;IACI,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,sBAAsB;IACtB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;;IAEtB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,iBAAiB;;IAEjB,2BAA2B;IAC3B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,kBAAkB;;IAElB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,cAAc;IACd,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,WAAW;;IAEX,aAAa;IACb,qCAAqC;IACrC,wBAAwB;IACxB,qBAAqB;;IAErB,oBAAoB;IACpB,gBAAgB;IAChB,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;;IAElB,eAAe;;IAEf,8BAA8B;AAClC;;;AAGA;IACI,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,mBAAmB;;AAEvB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,gBAAgB;IAChB,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,oBAAoB;IACpB,mBAAmB;IACnB,kCAAkC;IAClC,WAAW;AACf;;AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;;;AAIA;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-family: Helvetica, sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nbody > #content {\n    flex: 1;\n}\n\nbutton, input {\n    background-color: inherit;\n    border: none;\n    font-size: inherit;\n    font-family: inherit;\n    color: inherit;\n    cursor: pointer;\n}\n\nbutton:active, input:active {\n    cursor: default;\n}\n\n/* Preliminaries above and other stuff below */\n\nimg.logo {\n    display: block;\n    height: 100%;\n}\n\nheader {\n    width: 100%;\n    letter-spacing: 3px;\n    display: flex;\n    font-size: 18px;\n    justify-content: center;\n    align-items: center;\n    gap: 4em;\n    box-shadow: 0 0 2px 2px gainsboro;\n    height: 80px;\n}\n\nheader > .fake-link {\n    padding: 30px 0;\n    height: 100%;\n}\n\nbutton#order {\n    background-color: blue;\n    color: azure;\n    width: 130px;\n    padding: 12px 16px;\n    border-radius: 6px;\n}\n\n.fake-link.selected {\n    border-bottom: 4px gold solid;\n    padding-bottom: 26px;\n    font-weight: 700;\n}\n\n#content {\n    width: 100%;\n    min-height: 900px;\n    box-sizing: border-box;\n    padding: 80px 25%;\n    display: flex;\n    flex-direction: column;\n\n    font-size: 18px;\n    gap: 20px;\n}\n\n#content h1 {\n    font-size: 2.5em;\n}\n\n#content.about img {\n    display: block;\n    height: 450px;\n    object-fit:cover;\n    margin-bottom: 20px;\n}\n\n#content h1{\n    text-align: center;\n}\n\n#content.menu {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 80px 1fr;\n}\n\n#content.menu .sidebar {\n    display: flex;\n    flex-direction: column;\n\n    grid-row-start: 2;\n\n    border: gainsboro 2px solid;\n    border-radius: 10px;\n    height: fit-content;\n}\n\n#content.menu .sidebar.featured {\n    grid-row-start: 1;\n}\n\n.sidebar .sidetab {\n    display: flex;\n    height: 80px;\n    align-items: center;\n    gap: 15px;\n    padding-left: 15px;\n\n    cursor: pointer;\n}\n\n.sidebar .sidetab.selected {\n    font-weight: bold;\n    border-left: blue 4px solid;\n}\n\n.sidetab img {\n    display: block;\n    width: 30%;\n    object-fit: contain;\n}\n\n.menu-holder {\n    width: 100%;\n\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: auto;\n    grid-auto-rows: 200px;\n\n    grid-column-start: 2;\n    grid-row: 1 / -1;\n    gap: 60px;\n}\n\n.menu-holder article {\n\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n\n    cursor: pointer;\n\n    justify-content: space-between;\n}\n\n\n.menu-holder article img {\n    width: 100%;\n    height: 70%;\n    margin-bottom: 0px;    \n    object-fit: contain;\n\n}\n.menu-holder article p:not(.limited)::after {\n    content: ' ®';\n}\n\n.menu-holder article p.limited {\n    color: rgb(173, 121, 24);\n    font-size: 0.8em;\n    font-weight: bold;\n}\n\n.menu-holder h1 {\n    text-align: center;\n    grid-column: 1 / -1;\n}\n\nfooter {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    margin-top: 90px;\n    padding: 0 25%;\n    padding-bottom: 60px;\n}\n\nfooter .row:first-child {\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 60px;\n    margin-bottom: 60px;\n    border-bottom: 2px gainsboro solid;\n    width: 100%;\n}\n\nfooter .row:nth-child(2) {\n    width: 100%;\n    justify-content: left;\n    display: flex;\n    gap: 40px;\n}\n\nfooter .row li {\n    list-style: none;\n    margin-bottom: 10px;\n}\n\n\n\nfooter .row li:first-of-type {\n    font-weight: bold;\n}\n\nfooter a {\n    text-decoration: none;\n    color: inherit;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksY0FBYyxZQUFZLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFB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b0IsbURBQUk7QUFDeEI7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0Isb0JBQW9CLG1EQUFJO0FBQ3hCLHVCQUF1QixtREFBSTtBQUMzQjtBQUNBO0FBQ0Esd0JBQXdCLG1EQUFJO0FBQzVCOztBQUVBOztBQUVBLHVCQUF1QixtREFBSTtBQUMzQixxQkFBcUIsbURBQUk7QUFDekI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLG1EQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5vdGhlcl9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlcl9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlcl9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL3NyYy9pbWFnZV9tb2QvaW1hZ2VfYmFycmVsLmpzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL3NyYy9qZWZmUXVlcnkuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlcl9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuYm9keSA+ICNjb250ZW50IHtcbiAgICBmbGV4OiAxO1xufVxuXG5idXR0b24sIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246YWN0aXZlLCBpbnB1dDphY3RpdmUge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLyogUHJlbGltaW5hcmllcyBhYm92ZSBhbmQgb3RoZXIgc3R1ZmYgYmVsb3cgKi9cblxuaW1nLmxvZ28ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA0ZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAycHggZ2FpbnNib3JvO1xuICAgIGhlaWdodDogODBweDtcbn1cblxuaGVhZGVyID4gLmZha2UtbGluayB7XG4gICAgcGFkZGluZzogMzBweCAwO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYnV0dG9uI29yZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIGNvbG9yOiBhenVyZTtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmZha2UtbGluay5zZWxlY3RlZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IGdvbGQgc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDkwMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogODBweCAyNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGdhcDogMjBweDtcbn1cblxuI2NvbnRlbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbiNjb250ZW50LmFib3V0IGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgICBvYmplY3QtZml0OmNvdmVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNjb250ZW50IGgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRlbnQubWVudSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDFmcjtcbn1cblxuI2NvbnRlbnQubWVudSAuc2lkZWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG5cbiAgICBib3JkZXI6IGdhaW5zYm9ybyAycHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4jY29udGVudC5tZW51IC5zaWRlYmFyLmZlYXR1cmVkIHtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbn1cblxuLnNpZGViYXIgLnNpZGV0YWIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpZGViYXIgLnNpZGV0YWIuc2VsZWN0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1sZWZ0OiBibHVlIDRweCBzb2xpZDtcbn1cblxuLnNpZGV0YWIgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMzAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5tZW51LWhvbGRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGdyaWQtYXV0by1yb3dzOiAyMDBweDtcblxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtcm93OiAxIC8gLTE7XG4gICAgZ2FwOiA2MHB4O1xufVxuXG4ubWVudS1ob2xkZXIgYXJ0aWNsZSB7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5cbi5tZW51LWhvbGRlciBhcnRpY2xlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4OyAgICBcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuXG59XG4ubWVudS1ob2xkZXIgYXJ0aWNsZSBwOm5vdCgubGltaXRlZCk6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnIMKuJztcbn1cblxuLm1lbnUtaG9sZGVyIGFydGljbGUgcC5saW1pdGVkIHtcbiAgICBjb2xvcjogcmdiKDE3MywgMTIxLCAyNCk7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1lbnUtaG9sZGVyIGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbn1cblxuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgcGFkZGluZzogMCAyNSU7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG5cbmZvb3RlciAucm93OmZpcnN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBnYWluc2Jvcm8gc29saWQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmZvb3RlciAucm93Om50aC1jaGlsZCgyKSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA0MHB4O1xufVxuXG5mb290ZXIgLnJvdyBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5cblxuZm9vdGVyIC5yb3cgbGk6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmZvb3RlciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLDhDQUE4Qzs7QUFFOUM7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLGlCQUFpQjs7SUFFakIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsa0JBQWtCOztJQUVsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVzs7SUFFWCxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLHdCQUF3QjtJQUN4QixxQkFBcUI7O0lBRXJCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCOztJQUVsQixlQUFlOztJQUVmLDhCQUE4QjtBQUNsQzs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0lBRW5CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7O0FBSUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmJvZHkgPiAjY29udGVudCB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbmJ1dHRvbiwgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUsIGlucHV0OmFjdGl2ZSB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyogUHJlbGltaW5hcmllcyBhYm92ZSBhbmQgb3RoZXIgc3R1ZmYgYmVsb3cgKi9cXG5cXG5pbWcubG9nbyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRlbTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAycHggZ2FpbnNib3JvO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbmhlYWRlciA+IC5mYWtlLWxpbmsge1xcbiAgICBwYWRkaW5nOiAzMHB4IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYnV0dG9uI29yZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgY29sb3I6IGF6dXJlO1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4uZmFrZS1saW5rLnNlbGVjdGVkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IGdvbGQgc29saWQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA5MDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogODBweCAyNSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jY29udGVudCBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxufVxcblxcbiNjb250ZW50LmFib3V0IGltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbiAgICBvYmplY3QtZml0OmNvdmVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jY29udGVudCBoMXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudC5tZW51IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyO1xcbn1cXG5cXG4jY29udGVudC5tZW51IC5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuXFxuICAgIGJvcmRlcjogZ2FpbnNib3JvIDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuI2NvbnRlbnQubWVudSAuc2lkZWJhci5mZWF0dXJlZCB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbn1cXG5cXG4uc2lkZWJhciAuc2lkZXRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXIgLnNpZGV0YWIuc2VsZWN0ZWQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLWxlZnQ6IGJsdWUgNHB4IHNvbGlkO1xcbn1cXG5cXG4uc2lkZXRhYiBpbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLm1lbnUtaG9sZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xcblxcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gICAgZ2FwOiA2MHB4O1xcbn1cXG5cXG4ubWVudS1ob2xkZXIgYXJ0aWNsZSB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcblxcbi5tZW51LWhvbGRlciBhcnRpY2xlIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4OyAgICBcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG5cXG59XFxuLm1lbnUtaG9sZGVyIGFydGljbGUgcDpub3QoLmxpbWl0ZWQpOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgwq4nO1xcbn1cXG5cXG4ubWVudS1ob2xkZXIgYXJ0aWNsZSBwLmxpbWl0ZWQge1xcbiAgICBjb2xvcjogcmdiKDE3MywgMTIxLCAyNCk7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudS1ob2xkZXIgaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi10b3A6IDkwcHg7XFxuICAgIHBhZGRpbmc6IDAgMjUlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXG59XFxuXFxuZm9vdGVyIC5yb3c6Zmlyc3QtY2hpbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZ2FpbnNib3JvIHNvbGlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZm9vdGVyIC5yb3c6bnRoLWNoaWxkKDIpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG5mb290ZXIgLnJvdyBsaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcblxcblxcbmZvb3RlciAucm93IGxpOmZpcnN0LW9mLXR5cGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHtkZWZhdWx0IGFzIGxvZ299IGZyb20gJy4vYmNib25hbGRzLmpwZyc7IC8vY2FudCBqdXN0IGRvIGV4cG9ydCBsb2dvIHNpbmNlIHRoaXMgaXMgYW4gZXhwb3J0IGZyb20gc3RhdGVtZW50XG5leHBvcnQge2RlZmF1bHQgYXMgbWFuRWF0aW5nQnVyZ2VyfSBmcm9tICcuL21hbl9lYXRpbmdfYnVyZ2VyLmpwZWcnO1xuXG4iLCJmdW5jdGlvbiBtYWtlKHNlbGVjdG9yLCBwYXJlbnQpe1xuICAgIGxldCBsYXN0SW5kID0gZ2V0TmV4dFNlcGFyYXRvcigwLCBzZWxlY3Rvcik7XG4gICAgXG4gICAgY29uc3QgY29ycmVjdGVkTGFzdEluZCA9IChsYXN0SW5kID4gLTEpID8gbGFzdEluZCA6IHNlbGVjdG9yLmxlbmd0aDtcbiAgICBjb25zdCB0eXBlID0gc2VsZWN0b3Iuc2xpY2UoMCwgY29ycmVjdGVkTGFzdEluZCk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgbGV0IGlkO1xuICAgIHdoaWxlIChsYXN0SW5kID4gLTEpe1xuICAgICAgICBjb25zdCBpbmQgPSBnZXROZXh0U2VwYXJhdG9yKGxhc3RJbmQrMSwgc2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBjb3JyZWN0ZWRJbmQgPSAoaW5kID4gLTEpID8gaW5kIDogc2VsZWN0b3IubGVuZ3RoO1xuICAgICAgICBjb25zdCBzdWJTdHIgPSBzZWxlY3Rvci5zbGljZShsYXN0SW5kKzEsIGNvcnJlY3RlZEluZCk7XG5cbiAgICAgICAgaWYgKHN1YlN0ci5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcignVXNhZ2UgZXJyb3I6IFRyaWVkIHRvIHVzZSB0d28gc3ltYm9scyBmb3IgY2xhc3MgYW5kL29yIGlkIGluIGEgcm93LicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN5bSA9IHNlbGVjdG9yLmF0KGxhc3RJbmQpO1xuICAgICAgICBpZiAoc3ltID09PSAnLicpe1xuICAgICAgICAgICAgY2xhc3Nlcy51bnNoaWZ0KHN1YlN0cik7XG4gICAgICAgIH0gZWxzZSBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWQgPSBzdWJTdHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKFwiQXJndW1lbnQgZXJyb3I6IGVsZW1lbnRzIGNhbid0IGhhdmUgbXVsdGlwbGUgaWRzXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdEluZCA9IGluZDtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBmb3IgKGNvbnN0IGNsYXp6IG9mIGNsYXNzZXMpe1xuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhenopO1xuICAgIH1cbiAgICBpZiAoaWQpIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuYXBwZW5kKG5ld0VsZW1lbnQpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xuICAgIFxufVxuXG5mdW5jdGlvbiBnZXROZXh0U2VwYXJhdG9yKHN0YXJ0LCBzZWxlY3Rvcil7XG4gICAgY29uc3QgbmV4dEhhc2ggPSBzZWxlY3Rvci5pbmRleE9mKCcjJywgc3RhcnQpO1xuICAgIGNvbnN0IG5leHREb3QgPSBzZWxlY3Rvci5pbmRleE9mKCcuJywgc3RhcnQpO1xuXG4gICAgaWYgKG5leHRIYXNoID09PSAtMSl7XG4gICAgICAgIHJldHVybiBuZXh0RG90O1xuICAgIH0gZWxzZSBpZiAobmV4dERvdCA9PT0gLTEpe1xuICAgICAgICByZXR1cm4gbmV4dEhhc2g7XG4gICAgfVxuICAgIHJldHVybiAobmV4dEhhc2ggPiBuZXh0RG90KSA/IG5leHREb3QgOiBuZXh0SGFzaDtcbn1cblxuZXhwb3J0IHttYWtlfTsgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHtsb2dvLCBtYW5FYXRpbmdCdXJnZXJ9IGZyb20gJy4vaW1hZ2VfbW9kL2ltYWdlX2JhcnJlbC5qcyc7XG5pbXBvcnQge21ha2V9IGZyb20gJy4vamVmZlF1ZXJ5LmpzJ1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmNvbnN0IGZha2VMaW5rcyA9IFtdO1xuY3JlYXRlSGVhZGVyKGZha2VMaW5rcyk7XG5jcmVhdGVGb290ZXIoKTtcbmNvbnN0IG1lbnVGYWtlTGluayA9IGZha2VMaW5rc1swXTtcbmNvbnN0IGNvbnRhY3RGYWtlTGluayA9IGZha2VMaW5rc1sxXTtcbmNvbnN0IGFib3V0RmFrZUxpbmsgPSBmYWtlTGlua3NbMl07XG5cbmxvYWRBYm91dChhYm91dEZha2VMaW5rLCBmYWtlTGlua3MpO1xubGV0IGxhc3RDb250ZXh0ID0gJ2Fib3V0JztcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZChsYXN0Q29udGV4dCk7XG5cblxuYWJvdXRGYWtlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGFuZ2VDb250ZW50Q29udGV4dCgnYWJvdXQnKTtcbiAgICBjbGVhckNvbnRlbnQoY29udGVudCk7XG4gICAgbG9hZEFib3V0KGFib3V0RmFrZUxpbmssIGZha2VMaW5rcyk7XG59KTtcblxuY29udGFjdEZha2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBjaGFuZ2VDb250ZW50Q29udGV4dCgnY29udGFjdCcpO1xuICAgIGNsZWFyQ29udGVudChjb250ZW50KTsgLy90aGlzIG5vdCB3b3JraW5nIGZvciBzb21lIHJlYXNvblxuICAgIGxvYWRDb250YWN0KGNvbnRhY3RGYWtlTGluaywgZmFrZUxpbmtzKTtcbn0pO1xuXG5tZW51RmFrZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2hhbmdlQ29udGVudENvbnRleHQoJ21lbnUnKTtcbiAgICBjbGVhckNvbnRlbnQoY29udGVudCk7XG4gICAgbG9hZE1lbnUobWVudUZha2VMaW5rLCBmYWtlTGlua3MpO1xufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihmYWtlTGlua3Mpe1xuICAgIGNvbnN0IGhlYWRlciA9IG1ha2UoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGxvZ29JbWcgPSBtYWtlKCdpbWcubG9nbycsIGhlYWRlcik7XG4gICAgbG9nb0ltZy5zcmMgPSBsb2dvO1xuICAgIGxvZ29JbWcuYWx0ID0gJ2xvZ28nO1xuXG4gICAgZmFrZUxpbmtzWzBdID0gbWFrZSgnYnV0dG9uLmZha2UtbGluayNtZW51JywgaGVhZGVyKTtcbiAgICBmYWtlTGlua3NbMF0udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgZmFrZUxpbmtzWzFdID0gbWFrZSgnYnV0dG9uLmZha2UtbGluayNjb250YWN0JywgaGVhZGVyKTtcbiAgICBmYWtlTGlua3NbMV0udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgZmFrZUxpbmtzWzJdID0gbWFrZSgnYnV0dG9uLmZha2UtbGluayNhYm91dCcsIGhlYWRlcik7XG4gICAgZmFrZUxpbmtzWzJdLnRleHRDb250ZW50ID0gJ0Fib3V0JztcblxuICAgIGNvbnN0IG9yZGVyQnV0dG9uID0gbWFrZSgnYnV0dG9uI29yZGVyJywgaGVhZGVyKTtcbiAgICBvcmRlckJ1dHRvbi50ZXh0Q29udGVudCA9ICdPcmRlciBub3cnO1xuXG4gICAgYm9keS5wcmVwZW5kKGhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlciA9IG1ha2UoJ2Zvb3RlcicsIGJvZHkpO1xuICAgIFxuICAgIGNvbnN0IHJvdzEgPSBtYWtlKCdkaXYucm93JywgZm9vdGVyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKyl7XG4gICAgICAgIGNvbnN0IGxpc3RDb2wgPSBtYWtlKCdkaXYubGlzdC1jb2wnLCByb3cxKTtcbiAgICAgICAgY29uc3QgbGlzdCA9IG1ha2UoJ3VsJywgbGlzdENvbCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMyArIGk7IGorKykge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBtYWtlKCdsaScsIGxpc3RDb2wpO1xuICAgICAgICAgICAgY29uc3QgYSA9IG1ha2UoJ2EnLCBsaSk7XG4gICAgICAgICAgICBhLnRleHRDb250ZW50ID0gJ1N0dWZmIHN0dWZmJztcbiAgICAgICAgICAgIGEuaHJlZiA9ICcjJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdzIgPSBtYWtlKCdkaXYucm93JywgZm9vdGVyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gICAgICAgIGNvbnN0IGR1bW15TGluayA9IG1ha2UoJ2EnLCByb3cyKTtcbiAgICAgICAgZHVtbXlMaW5rLnRleHRDb250ZW50ID0gXCJNb3JlIHN0dWZmXCI7XG4gICAgICAgIGR1bW15TGluay5ocmVmID0gXCIjXCI7XG4gICAgfSBcbn1cblxuZnVuY3Rpb24gbG9hZEFib3V0KGFib3V0TGluaywgZmFrZUxpbmtzKSB7XG4gICAgcmVhc3NpZ25TZWxlY3RlZEZha2VMaW5rKGFib3V0TGluaywgZmFrZUxpbmtzKTtcblxuICAgIGNvbnN0IGhlYWRpbmcxID0gbWFrZSgnaDEnLCBjb250ZW50KTtcbiAgICBoZWFkaW5nMS50ZXh0Q29udGVudCA9IFwiQWJvdXQgdXNcIjtcbiAgICBjb25zdCBpbWcgPSBtYWtlKCdpbWcnLCBjb250ZW50KTtcbiAgICBpbWcuc3JjID0gbWFuRWF0aW5nQnVyZ2VyO1xuICAgIGltZy5hbHQgPSBcIm1hbiBlbmpveWluZyBiY2JvbmFsZHMgYnVyZ2VyXCI7XG4gICAgY29uc3QgaGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcyLnRleHRDb250ZW50ID0gXCJEZWRpY2F0aW9uIHRvIHlvdVwiO1xuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRpbmcyKTtcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIldlIHJlZGVmaW5lIGZhc3QgZm9vZCB3aXRoIGltYWdpbmF0aXZlIGZsYXZvcnMgYW5kIGEgcXVpcmt5IGF0bW9zcGhlcmUgYWxsIGZvciBvdXIgbWlzc2lvbiB0byBtYWtlIGRpbmluZyBmdW4gYW5kIHVuZm9yZ2V0dGFibGUhIEpvaW4gdXMgYXQgQmNCb25hbGRzIGZvciBhIGRlbGlnaHRmdWwgZXhwZXJpZW5jZSB0aGF0IGxlYXZlcyB5b3Ugc21pbGluZyB3aXRoIGV2ZXJ5IGJpdGUuXCI7XG4gICAgY29udGVudC5hcHBlbmQocGFyYSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KGNvbnRhY3RMaW5rLCBmYWtlTGlua3Mpe1xuICAgIHJlYXNzaWduU2VsZWN0ZWRGYWtlTGluayhjb250YWN0TGluaywgZmFrZUxpbmtzKTtcblxuICAgIGNvbnN0IGhlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nMi50ZXh0Q29udGVudCA9IFwiUmVhY2ggdXMgYXQ6XCI7XG4gICAgY29udGVudC5hcHBlbmQoaGVhZGluZzIpO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ2JjYm9uYWxkc2lzZ3JlYXRAYmNib25hbGRzLmNvbScpKVxuICAgIHBhcmEuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgIHBhcmEuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCc2NjktNDIwLTY5NjknKSk7XG4gICAgY29udGVudC5hcHBlbmQocGFyYSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KG1lbnVMaW5rLCBmYWtlTGlua3Mpe1xuICAgIHJlYXNzaWduU2VsZWN0ZWRGYWtlTGluayhtZW51TGluaywgZmFrZUxpbmtzKTtcblxuICAgIGNvbnN0IGZlYXR1cmVkID0gbWFrZSgnZGl2LnNpZGViYXIuZmVhdHVyZWQnLCBjb250ZW50KTs7XG4gICAgY29uc3QgZmVhdFRhYiA9IG1ha2UoJ2Rpdi5zaWRldGFiJywgZmVhdHVyZWQpO1xuICAgIGNvbnN0IGZlYXRJbWcgPSBtYWtlKCdpbWcnLCBmZWF0VGFiKTtcbiAgICBmZWF0SW1nLnNyYyA9ICdodHRwczovL3M3ZDEuc2NlbmU3LmNvbS9pcy9pbWFnZS9tY2RvbmFsZHMvZGVzc2VydHNfc2hha2VzXzMwMHgzMDA6Y2F0ZWdvcnktcGFuZWwtbGVmdC1kZXNrdG9wJyA7XG4gICAgZmVhdEltZy5hbHQgPSAnZmVhdHVyZWQgaW1hZ2UnO1xuICAgIGNvbnN0IGZlYXROYW1lID0gbWFrZSgncCcsIGZlYXRUYWIpO1xuICAgIGZlYXROYW1lLnRleHRDb250ZW50ID0gJ0ZlYXR1cmVkJztcbiAgICBcbiAgICBjb25zdCBzaWRlYmFyID0gbWFrZSgnZGl2LnNpZGViYXInLCBjb250ZW50KTtcbiAgICBcbiAgICBjb25zdCB0YWIgPSBtYWtlKCdkaXYuc2lkZXRhYi5zZWxlY3RlZCcsIHNpZGViYXIpO1xuICAgIGNvbnN0IHRhYkltZyA9IG1ha2UoJ2ltZycsIHRhYik7XG4gICAgdGFiSW1nLnNyYyA9ICdodHRwczovL3M3ZDEuc2NlbmU3LmNvbS9pcy9pbWFnZS9tY2RvbmFsZHMvYnVyZ2Vyc18zMDB4MzAwOmNhdGVnb3J5LXBhbmVsLWxlZnQtZGVza3RvcCc7XG4gICAgdGFiLmFsdCA9ICd0YWIgcGljdHVyZSc7XG4gICAgY29uc3QgdGFiTmFtZSA9IG1ha2UoJ3AnLCB0YWIpO1xuICAgIHRhYk5hbWUudGV4dENvbnRlbnQgPSBcIkJ1cmdlcnNcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgICAgICAgY29uc3QgdGFiID0gbWFrZSgnZGl2LnNpZGV0YWInLCBzaWRlYmFyKTtcbiAgICAgICAgY29uc3QgdGFiSW1nID0gbWFrZSgnaW1nJywgdGFiKTtcbiAgICAgICAgdGFiSW1nLnNyYyA9ICdodHRwczovL3M3ZDEuc2NlbmU3LmNvbS9pcy9pbWFnZS9tY2RvbmFsZHMvYnVyZ2Vyc18zMDB4MzAwOmNhdGVnb3J5LXBhbmVsLWxlZnQtZGVza3RvcCc7XG4gICAgICAgIHRhYi5hbHQgPSAndGFiIHBpY3R1cmUnO1xuICAgICAgICBjb25zdCB0YWJOYW1lID0gbWFrZSgncCcsIHRhYik7XG4gICAgICAgIHRhYk5hbWUudGV4dENvbnRlbnQgPSBcIkJ1cmdlcnNcIjtcblxuICAgIH1cblxuICAgIGNvbnN0IG1lbnVIb2xkZXIgPSBtYWtlKCdkaXYubWVudS1ob2xkZXInLCBjb250ZW50KTtcbiAgICBjb25zdCBoZWFkaW5nMSA9IG1ha2UoJ2gxJywgbWVudUhvbGRlcik7XG4gICAgaGVhZGluZzEudGV4dENvbnRlbnQgPSBcIk91ciBmb29kXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspe1xuICAgICAgICBjb25zdCBlbnRyeUFydGljbGUgPSBtYWtlRW50cnkoJ0JjQnVyZ2VyJywgJ2h0dHBzOi8vczdkMS5zY2VuZTcuY29tL2lzL2ltYWdlL21jZG9uYWxkcy9EQ18yMDE5MDdfMDAwNV9CaWdNYWNfODMyeDQ3MjoxLTQtcHJvZHVjdC10aWxlLWRlc2t0b3AnLCB0cnVlKTtcbiAgICAgICAgbWVudUhvbGRlci5hcHBlbmQoZW50cnlBcnRpY2xlKTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gbWFrZUVudHJ5KG5hbWUsIGltZywgaXNMaW1pdGVkKXtcbiAgICBjb25zdCBlbnRyeUFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgY29uc3QgZW50cnlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBlbnRyeUltZy5zcmMgPSBpbWc7XG4gICAgZW50cnlJbWcuYWx0ID0gJ2VudHJ5IGltYWdlIGZvciAnICsgbmFtZTtcbiAgICBlbnRyeUFydGljbGUuYXBwZW5kKGVudHJ5SW1nKTtcblxuICAgIGlmIChpc0xpbWl0ZWQpIHtcbiAgICAgICAgY29uc3QgbGltaXRlZFAgPSBtYWtlKCdwLmxpbWl0ZWQnLCBlbnRyeUFydGljbGUpO1xuICAgICAgICBsaW1pdGVkUC50ZXh0Q29udGVudCA9ICdMaW1pdGVkIFRpbWUgT25seSdcbiAgICB9XG4gICAgY29uc3QgZW50cnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVudHJ5TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgZW50cnlBcnRpY2xlLmFwcGVuZChlbnRyeU5hbWUpO1xuXG4gICAgcmV0dXJuIGVudHJ5QXJ0aWNsZTtcbn1cblxuXG5cbmZ1bmN0aW9uIHJlYXNzaWduU2VsZWN0ZWRGYWtlTGluayhmYWtlTGluaywgZmFrZUxpbmtzKXtcbiAgICBmYWtlTGlua3MubWFwKChmYWtlTGluayA9PiB7XG4gICAgICAgIGZha2VMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfSkpO1xuICAgIGZha2VMaW5rLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudChjb250ZW50KXtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ29udGVudENvbnRleHQoY29udGV4dCl7XG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKGxhc3RDb250ZXh0KTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoY29udGV4dCk7XG4gICAgbGFzdENvbnRleHQgPSBjb250ZXh0O1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=