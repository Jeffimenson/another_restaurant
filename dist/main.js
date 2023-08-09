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

#content .menu-holder {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-auto-rows: 200px;

    grid-column-start: 2;
    gap: 60px;
}

#content h1{
    text-align: center;
}

#content.menu {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 80px;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA,8CAA8C;;AAE9C;IACI,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;;IAEtB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,WAAW;;IAEX,aAAa;IACb,qCAAqC;IACrC,wBAAwB;IACxB,qBAAqB;;IAErB,oBAAoB;IACpB,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,iBAAiB;;IAEjB,2BAA2B;IAC3B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,kBAAkB;;IAElB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,cAAc;IACd,UAAU;IACV,mBAAmB;AACvB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;;IAElB,eAAe;;IAEf,8BAA8B;AAClC;;;AAGA;IACI,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,mBAAmB;;AAEvB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-family: Helvetica, sans-serif;\n}\n\nbutton, input {\n    background-color: inherit;\n    border: none;\n    font-size: inherit;\n    font-family: inherit;\n    color: inherit;\n    cursor: pointer;\n}\n\nbutton:active, input:active {\n    cursor: default;\n}\n\n/* Preliminaries above and other stuff below */\n\nimg.logo {\n    display: block;\n    height: 100%;\n}\n\nheader {\n    width: 100%;\n    letter-spacing: 3px;\n    display: flex;\n    font-size: 18px;\n    justify-content: center;\n    align-items: center;\n    gap: 4em;\n    box-shadow: 0 0 2px 2px gainsboro;\n    height: 80px;\n}\n\nheader > .fake-link {\n    padding: 30px 0;\n    height: 100%;\n}\n\nbutton#order {\n    background-color: blue;\n    color: azure;\n    width: 130px;\n    padding: 12px 16px;\n    border-radius: 6px;\n}\n\n.fake-link.selected {\n    border-bottom: 4px gold solid;\n    padding-bottom: 26px;\n    font-weight: 700;\n}\n\n#content {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 80px 25%;\n    display: flex;\n    flex-direction: column;\n\n    font-size: 18px;\n    gap: 20px;\n}\n\n#content h1 {\n    font-size: 2.5em;\n}\n\n#content.about img {\n    display: block;\n    height: 450px;\n    object-fit:cover;\n    margin-bottom: 20px;\n}\n\n#content .menu-holder {\n    width: 100%;\n\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: auto;\n    grid-auto-rows: 200px;\n\n    grid-column-start: 2;\n    gap: 60px;\n}\n\n#content h1{\n    text-align: center;\n}\n\n#content.menu {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 80px;\n}\n\n#content.menu .sidebar {\n    display: flex;\n    flex-direction: column;\n\n    grid-row-start: 2;\n\n    border: gainsboro 2px solid;\n    border-radius: 10px;\n    height: fit-content;\n}\n\n#content.menu .sidebar.featured {\n    grid-row-start: 1;\n}\n\n.sidebar .sidetab {\n    display: flex;\n    height: 80px;\n    align-items: center;\n    gap: 15px;\n    padding-left: 15px;\n\n    cursor: pointer;\n}\n\n.sidebar .sidetab.selected {\n    font-weight: bold;\n    border-left: blue 4px solid;\n}\n\n.sidetab img {\n    display: block;\n    width: 30%;\n    object-fit: contain;\n}\n\n.menu-holder article {\n\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n\n    cursor: pointer;\n\n    justify-content: space-between;\n}\n\n\n.menu-holder article img {\n    width: 100%;\n    height: 70%;\n    margin-bottom: 0px;    \n    object-fit: contain;\n\n}\n.menu-holder article p:not(.limited)::after {\n    content: ' ®';\n}\n\n.menu-holder article p.limited {\n    color: rgb(173, 121, 24);\n    font-size: 0.8em;\n    font-weight: bold;\n}\n\n.menu-holder h1 {\n    text-align: center;\n    grid-column: 1 / -1;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixtREFBSTtBQUMzQjtBQUNBO0FBQ0Esd0JBQXdCLG1EQUFJO0FBQzVCOztBQUVBOztBQUVBLHVCQUF1QixtREFBSTtBQUMzQixxQkFBcUIsbURBQUk7QUFDekI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLG1EQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5vdGhlcl9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlcl9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlcl9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL3NyYy9pbWFnZV9tb2QvaW1hZ2VfYmFycmVsLmpzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL3NyYy9qZWZmUXVlcnkuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlcl9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hbm90aGVyX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Fub3RoZXJfcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbiwgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjphY3RpdmUsIGlucHV0OmFjdGl2ZSB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKiBQcmVsaW1pbmFyaWVzIGFib3ZlIGFuZCBvdGhlciBzdHVmZiBiZWxvdyAqL1xuXG5pbWcubG9nbyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRlbTtcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCBnYWluc2Jvcm87XG4gICAgaGVpZ2h0OiA4MHB4O1xufVxuXG5oZWFkZXIgPiAuZmFrZS1saW5rIHtcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5idXR0b24jb3JkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgY29sb3I6IGF6dXJlO1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uZmFrZS1saW5rLnNlbGVjdGVkIHtcbiAgICBib3JkZXItYm90dG9tOiA0cHggZ29sZCBzb2xpZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA4MHB4IDI1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4jY29udGVudCBoMSB7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbn1cblxuI2NvbnRlbnQuYWJvdXQgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIG9iamVjdC1maXQ6Y292ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI2NvbnRlbnQgLm1lbnUtaG9sZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xuXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ2FwOiA2MHB4O1xufVxuXG4jY29udGVudCBoMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250ZW50Lm1lbnUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweDtcbn1cblxuI2NvbnRlbnQubWVudSAuc2lkZWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG5cbiAgICBib3JkZXI6IGdhaW5zYm9ybyAycHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4jY29udGVudC5tZW51IC5zaWRlYmFyLmZlYXR1cmVkIHtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbn1cblxuLnNpZGViYXIgLnNpZGV0YWIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpZGViYXIgLnNpZGV0YWIuc2VsZWN0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1sZWZ0OiBibHVlIDRweCBzb2xpZDtcbn1cblxuLnNpZGV0YWIgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMzAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5tZW51LWhvbGRlciBhcnRpY2xlIHtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cblxuLm1lbnUtaG9sZGVyIGFydGljbGUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7ICAgIFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG5cbn1cbi5tZW51LWhvbGRlciBhcnRpY2xlIHA6bm90KC5saW1pdGVkKTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcgwq4nO1xufVxuXG4ubWVudS1ob2xkZXIgYXJ0aWNsZSBwLmxpbWl0ZWQge1xuICAgIGNvbG9yOiByZ2IoMTczLCAxMjEsIDI0KTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWVudS1ob2xkZXIgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLDhDQUE4Qzs7QUFFOUM7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7O0lBRVgsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyx3QkFBd0I7SUFDeEIscUJBQXFCOztJQUVyQixvQkFBb0I7SUFDcEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixpQkFBaUI7O0lBRWpCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjs7SUFFbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjs7SUFFbEIsZUFBZTs7SUFFZiw4QkFBOEI7QUFDbEM7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uLCBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSwgaW5wdXQ6YWN0aXZlIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKiBQcmVsaW1pbmFyaWVzIGFib3ZlIGFuZCBvdGhlciBzdHVmZiBiZWxvdyAqL1xcblxcbmltZy5sb2dvIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNGVtO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCBnYWluc2Jvcm87XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuaGVhZGVyID4gLmZha2UtbGluayB7XFxuICAgIHBhZGRpbmc6IDMwcHggMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5idXR0b24jb3JkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBjb2xvcjogYXp1cmU7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5mYWtlLWxpbmsuc2VsZWN0ZWQge1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggZ29sZCBzb2xpZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDI2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDgwcHggMjUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2NvbnRlbnQgaDEge1xcbiAgICBmb250LXNpemU6IDIuNWVtO1xcbn1cXG5cXG4jY29udGVudC5hYm91dCBpbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG4gICAgb2JqZWN0LWZpdDpjb3ZlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2NvbnRlbnQgLm1lbnUtaG9sZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xcblxcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ2FwOiA2MHB4O1xcbn1cXG5cXG4jY29udGVudCBoMXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudC5tZW51IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHg7XFxufVxcblxcbiNjb250ZW50Lm1lbnUgLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG5cXG4gICAgYm9yZGVyOiBnYWluc2Jvcm8gMnB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jY29udGVudC5tZW51IC5zaWRlYmFyLmZlYXR1cmVkIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxufVxcblxcbi5zaWRlYmFyIC5zaWRldGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciAuc2lkZXRhYi5zZWxlY3RlZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItbGVmdDogYmx1ZSA0cHggc29saWQ7XFxufVxcblxcbi5zaWRldGFiIGltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4ubWVudS1ob2xkZXIgYXJ0aWNsZSB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcblxcbi5tZW51LWhvbGRlciBhcnRpY2xlIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4OyAgICBcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG5cXG59XFxuLm1lbnUtaG9sZGVyIGFydGljbGUgcDpub3QoLmxpbWl0ZWQpOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgwq4nO1xcbn1cXG5cXG4ubWVudS1ob2xkZXIgYXJ0aWNsZSBwLmxpbWl0ZWQge1xcbiAgICBjb2xvcjogcmdiKDE3MywgMTIxLCAyNCk7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudS1ob2xkZXIgaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQge2RlZmF1bHQgYXMgbG9nb30gZnJvbSAnLi9iY2JvbmFsZHMuanBnJzsgLy9jYW50IGp1c3QgZG8gZXhwb3J0IGxvZ28gc2luY2UgdGhpcyBpcyBhbiBleHBvcnQgZnJvbSBzdGF0ZW1lbnRcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtYW5FYXRpbmdCdXJnZXJ9IGZyb20gJy4vbWFuX2VhdGluZ19idXJnZXIuanBlZyc7XG5cbiIsImZ1bmN0aW9uIG1ha2Uoc2VsZWN0b3IsIHBhcmVudCl7XG4gICAgbGV0IGxhc3RJbmQgPSBnZXROZXh0U2VwYXJhdG9yKDAsIHNlbGVjdG9yKTtcbiAgICBcbiAgICBjb25zdCBjb3JyZWN0ZWRMYXN0SW5kID0gKGxhc3RJbmQgPiAtMSkgPyBsYXN0SW5kIDogc2VsZWN0b3IubGVuZ3RoO1xuICAgIGNvbnN0IHR5cGUgPSBzZWxlY3Rvci5zbGljZSgwLCBjb3JyZWN0ZWRMYXN0SW5kKTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgICBsZXQgaWQ7XG4gICAgd2hpbGUgKGxhc3RJbmQgPiAtMSl7XG4gICAgICAgIGNvbnN0IGluZCA9IGdldE5leHRTZXBhcmF0b3IobGFzdEluZCsxLCBzZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGNvcnJlY3RlZEluZCA9IChpbmQgPiAtMSkgPyBpbmQgOiBzZWxlY3Rvci5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHN1YlN0ciA9IHNlbGVjdG9yLnNsaWNlKGxhc3RJbmQrMSwgY29ycmVjdGVkSW5kKTtcblxuICAgICAgICBpZiAoc3ViU3RyLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKCdVc2FnZSBlcnJvcjogVHJpZWQgdG8gdXNlIHR3byBzeW1ib2xzIGZvciBjbGFzcyBhbmQvb3IgaWQgaW4gYSByb3cuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3ltID0gc2VsZWN0b3IuYXQobGFzdEluZCk7XG4gICAgICAgIGlmIChzeW0gPT09ICcuJyl7XG4gICAgICAgICAgICBjbGFzc2VzLnVuc2hpZnQoc3ViU3RyKTtcbiAgICAgICAgfSBlbHNlIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZCA9IHN1YlN0cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoXCJBcmd1bWVudCBlcnJvcjogZWxlbWVudHMgY2FuJ3QgaGF2ZSBtdWx0aXBsZSBpZHNcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0SW5kID0gaW5kO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGZvciAoY29uc3QgY2xhenogb2YgY2xhc3Nlcyl7XG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGF6eik7XG4gICAgfVxuICAgIGlmIChpZCkgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5hcHBlbmQobmV3RWxlbWVudCk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGdldE5leHRTZXBhcmF0b3Ioc3RhcnQsIHNlbGVjdG9yKXtcbiAgICBjb25zdCBuZXh0SGFzaCA9IHNlbGVjdG9yLmluZGV4T2YoJyMnLCBzdGFydCk7XG4gICAgY29uc3QgbmV4dERvdCA9IHNlbGVjdG9yLmluZGV4T2YoJy4nLCBzdGFydCk7XG5cbiAgICBpZiAobmV4dEhhc2ggPT09IC0xKXtcbiAgICAgICAgcmV0dXJuIG5leHREb3Q7XG4gICAgfSBlbHNlIGlmIChuZXh0RG90ID09PSAtMSl7XG4gICAgICAgIHJldHVybiBuZXh0SGFzaDtcbiAgICB9XG4gICAgcmV0dXJuIChuZXh0SGFzaCA+IG5leHREb3QpID8gbmV4dERvdCA6IG5leHRIYXNoO1xufVxuXG5leHBvcnQge21ha2V9OyAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQge2xvZ28sIG1hbkVhdGluZ0J1cmdlcn0gZnJvbSAnLi9pbWFnZV9tb2QvaW1hZ2VfYmFycmVsLmpzJztcbmltcG9ydCB7bWFrZX0gZnJvbSAnLi9qZWZmUXVlcnkuanMnXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuY29uc3QgZmFrZUxpbmtzID0gW107XG5jcmVhdGVIZWFkZXIoZmFrZUxpbmtzKTtcbmNvbnN0IG1lbnVGYWtlTGluayA9IGZha2VMaW5rc1swXTtcbmNvbnN0IGNvbnRhY3RGYWtlTGluayA9IGZha2VMaW5rc1sxXTtcbmNvbnN0IGFib3V0RmFrZUxpbmsgPSBmYWtlTGlua3NbMl07XG5cbmxvYWRBYm91dChhYm91dEZha2VMaW5rLCBmYWtlTGlua3MpO1xubGV0IGxhc3RDb250ZXh0ID0gJ2Fib3V0JztcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZChsYXN0Q29udGV4dCk7XG5cbmFib3V0RmFrZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2hhbmdlQ29udGVudENvbnRleHQoJ2Fib3V0Jyk7XG4gICAgY2xlYXJDb250ZW50KGNvbnRlbnQpO1xuICAgIGxvYWRBYm91dChhYm91dEZha2VMaW5rLCBmYWtlTGlua3MpO1xufSk7XG5cbmNvbnRhY3RGYWtlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgY2hhbmdlQ29udGVudENvbnRleHQoJ2NvbnRhY3QnKTtcbiAgICBjbGVhckNvbnRlbnQoY29udGVudCk7IC8vdGhpcyBub3Qgd29ya2luZyBmb3Igc29tZSByZWFzb25cbiAgICBsb2FkQ29udGFjdChjb250YWN0RmFrZUxpbmssIGZha2VMaW5rcyk7XG59KTtcblxubWVudUZha2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNoYW5nZUNvbnRlbnRDb250ZXh0KCdtZW51Jyk7XG4gICAgY2xlYXJDb250ZW50KGNvbnRlbnQpO1xuICAgIGxvYWRNZW51KG1lbnVGYWtlTGluaywgZmFrZUxpbmtzKTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoZmFrZUxpbmtzKXtcbiAgICBjb25zdCBoZWFkZXIgPSBtYWtlKCdoZWFkZXInKTtcbiAgICBjb25zdCBsb2dvSW1nID0gbWFrZSgnaW1nLmxvZ28nLCBoZWFkZXIpO1xuICAgIGxvZ29JbWcuc3JjID0gbG9nbztcbiAgICBsb2dvSW1nLmFsdCA9ICdsb2dvJztcblxuICAgIGZha2VMaW5rc1swXSA9IG1ha2UoJ2J1dHRvbi5mYWtlLWxpbmsjbWVudScsIGhlYWRlcik7XG4gICAgZmFrZUxpbmtzWzBdLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGZha2VMaW5rc1sxXSA9IG1ha2UoJ2J1dHRvbi5mYWtlLWxpbmsjY29udGFjdCcsIGhlYWRlcik7XG4gICAgZmFrZUxpbmtzWzFdLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIGZha2VMaW5rc1syXSA9IG1ha2UoJ2J1dHRvbi5mYWtlLWxpbmsjYWJvdXQnLCBoZWFkZXIpO1xuICAgIGZha2VMaW5rc1syXS50ZXh0Q29udGVudCA9ICdBYm91dCc7XG5cbiAgICBjb25zdCBvcmRlckJ1dHRvbiA9IG1ha2UoJ2J1dHRvbiNvcmRlcicsIGhlYWRlcik7XG4gICAgb3JkZXJCdXR0b24udGV4dENvbnRlbnQgPSAnT3JkZXIgbm93JztcblxuICAgIGJvZHkucHJlcGVuZChoZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBsb2FkQWJvdXQoYWJvdXRMaW5rLCBmYWtlTGlua3MpIHtcbiAgICByZWFzc2lnblNlbGVjdGVkRmFrZUxpbmsoYWJvdXRMaW5rLCBmYWtlTGlua3MpO1xuXG4gICAgY29uc3QgaGVhZGluZzEgPSBtYWtlKCdoMScsIGNvbnRlbnQpO1xuICAgIGhlYWRpbmcxLnRleHRDb250ZW50ID0gXCJBYm91dCB1c1wiO1xuICAgIGNvbnN0IGltZyA9IG1ha2UoJ2ltZycsIGNvbnRlbnQpO1xuICAgIGltZy5zcmMgPSBtYW5FYXRpbmdCdXJnZXI7XG4gICAgaW1nLmFsdCA9IFwibWFuIGVuam95aW5nIGJjYm9uYWxkcyBidXJnZXJcIjtcbiAgICBjb25zdCBoZWFkaW5nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZzIudGV4dENvbnRlbnQgPSBcIkRlZGljYXRpb24gdG8geW91XCI7XG4gICAgY29udGVudC5hcHBlbmQoaGVhZGluZzIpO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IFwiV2UgcmVkZWZpbmUgZmFzdCBmb29kIHdpdGggaW1hZ2luYXRpdmUgZmxhdm9ycyBhbmQgYSBxdWlya3kgYXRtb3NwaGVyZSBhbGwgZm9yIG91ciBtaXNzaW9uIHRvIG1ha2UgZGluaW5nIGZ1biBhbmQgdW5mb3JnZXR0YWJsZSEgSm9pbiB1cyBhdCBCY0JvbmFsZHMgZm9yIGEgZGVsaWdodGZ1bCBleHBlcmllbmNlIHRoYXQgbGVhdmVzIHlvdSBzbWlsaW5nIHdpdGggZXZlcnkgYml0ZS5cIjtcbiAgICBjb250ZW50LmFwcGVuZChwYXJhKTtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoY29udGFjdExpbmssIGZha2VMaW5rcyl7XG4gICAgcmVhc3NpZ25TZWxlY3RlZEZha2VMaW5rKGNvbnRhY3RMaW5rLCBmYWtlTGlua3MpO1xuXG5cbiAgICBjb25zdCBoZWFkaW5nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZzIudGV4dENvbnRlbnQgPSBcIlJlYWNoIHVzIGF0OlwiO1xuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRpbmcyKTtcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmEuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdiY2JvbmFsZHNpc2dyZWF0QGJjYm9uYWxkcy5jb20nKSlcbiAgICBwYXJhLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgICBwYXJhLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnNjY5LTQyMC02OTY5JykpO1xuICAgIGNvbnRlbnQuYXBwZW5kKHBhcmEpO1xuXG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KG1lbnVMaW5rLCBmYWtlTGlua3Mpe1xuICAgIHJlYXNzaWduU2VsZWN0ZWRGYWtlTGluayhtZW51TGluaywgZmFrZUxpbmtzKTtcblxuICAgIGNvbnN0IGZlYXR1cmVkID0gbWFrZSgnZGl2LnNpZGViYXIuZmVhdHVyZWQnLCBjb250ZW50KTs7XG4gICAgY29uc3QgZmVhdFRhYiA9IG1ha2UoJ2Rpdi5zaWRldGFiJywgZmVhdHVyZWQpO1xuICAgIGNvbnN0IGZlYXRJbWcgPSBtYWtlKCdpbWcnLCBmZWF0VGFiKTtcbiAgICBmZWF0SW1nLnNyYyA9ICdodHRwczovL3M3ZDEuc2NlbmU3LmNvbS9pcy9pbWFnZS9tY2RvbmFsZHMvZGVzc2VydHNfc2hha2VzXzMwMHgzMDA6Y2F0ZWdvcnktcGFuZWwtbGVmdC1kZXNrdG9wJyA7XG4gICAgZmVhdEltZy5hbHQgPSAnZmVhdHVyZWQgaW1hZ2UnO1xuICAgIGNvbnN0IGZlYXROYW1lID0gbWFrZSgncCcsIGZlYXRUYWIpO1xuICAgIGZlYXROYW1lLnRleHRDb250ZW50ID0gJ0ZlYXR1cmVkJztcbiAgICBcbiAgICBjb25zdCBzaWRlYmFyID0gbWFrZSgnZGl2LnNpZGViYXInLCBjb250ZW50KTtcbiAgICBcbiAgICBjb25zdCB0YWIgPSBtYWtlKCdkaXYuc2lkZXRhYi5zZWxlY3RlZCcsIHNpZGViYXIpO1xuICAgIGNvbnN0IHRhYkltZyA9IG1ha2UoJ2ltZycsIHRhYik7XG4gICAgdGFiSW1nLnNyYyA9ICdodHRwczovL3M3ZDEuc2NlbmU3LmNvbS9pcy9pbWFnZS9tY2RvbmFsZHMvYnVyZ2Vyc18zMDB4MzAwOmNhdGVnb3J5LXBhbmVsLWxlZnQtZGVza3RvcCc7XG4gICAgdGFiLmFsdCA9ICd0YWIgcGljdHVyZSc7XG4gICAgY29uc3QgdGFiTmFtZSA9IG1ha2UoJ3AnLCB0YWIpO1xuICAgIHRhYk5hbWUudGV4dENvbnRlbnQgPSBcIkJ1cmdlcnNcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgICAgICAgY29uc3QgdGFiID0gbWFrZSgnZGl2LnNpZGV0YWInLCBzaWRlYmFyKTtcbiAgICAgICAgY29uc3QgdGFiSW1nID0gbWFrZSgnaW1nJywgdGFiKTtcbiAgICAgICAgdGFiSW1nLnNyYyA9ICdodHRwczovL3M3ZDEuc2NlbmU3LmNvbS9pcy9pbWFnZS9tY2RvbmFsZHMvYnVyZ2Vyc18zMDB4MzAwOmNhdGVnb3J5LXBhbmVsLWxlZnQtZGVza3RvcCc7XG4gICAgICAgIHRhYi5hbHQgPSAndGFiIHBpY3R1cmUnO1xuICAgICAgICBjb25zdCB0YWJOYW1lID0gbWFrZSgncCcsIHRhYik7XG4gICAgICAgIHRhYk5hbWUudGV4dENvbnRlbnQgPSBcIkJ1cmdlcnNcIjtcblxuICAgIH1cblxuICAgIGNvbnN0IG1lbnVIb2xkZXIgPSBtYWtlKCdkaXYubWVudS1ob2xkZXInLCBjb250ZW50KTtcbiAgICBjb25zdCBoZWFkaW5nMSA9IG1ha2UoJ2gxJywgbWVudUhvbGRlcik7XG4gICAgaGVhZGluZzEudGV4dENvbnRlbnQgPSBcIk91ciBmb29kXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspe1xuICAgICAgICBjb25zdCBlbnRyeUFydGljbGUgPSBtYWtlRW50cnkoJ0JjQnVyZ2VyJywgJ2h0dHBzOi8vczdkMS5zY2VuZTcuY29tL2lzL2ltYWdlL21jZG9uYWxkcy9EQ18yMDE5MDdfMDAwNV9CaWdNYWNfODMyeDQ3MjoxLTQtcHJvZHVjdC10aWxlLWRlc2t0b3AnLCB0cnVlKTtcbiAgICAgICAgbWVudUhvbGRlci5hcHBlbmQoZW50cnlBcnRpY2xlKTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gbWFrZUVudHJ5KG5hbWUsIGltZywgaXNMaW1pdGVkKXtcbiAgICBjb25zdCBlbnRyeUFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgY29uc3QgZW50cnlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBlbnRyeUltZy5zcmMgPSBpbWc7XG4gICAgZW50cnlJbWcuYWx0ID0gJ2VudHJ5IGltYWdlIGZvciAnICsgbmFtZTtcbiAgICBlbnRyeUFydGljbGUuYXBwZW5kKGVudHJ5SW1nKTtcblxuICAgIGlmIChpc0xpbWl0ZWQpIHtcbiAgICAgICAgY29uc3QgbGltaXRlZFAgPSBtYWtlKCdwLmxpbWl0ZWQnLCBlbnRyeUFydGljbGUpO1xuICAgICAgICBsaW1pdGVkUC50ZXh0Q29udGVudCA9ICdMaW1pdGVkIFRpbWUgT25seSdcbiAgICB9XG4gICAgY29uc3QgZW50cnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVudHJ5TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgZW50cnlBcnRpY2xlLmFwcGVuZChlbnRyeU5hbWUpO1xuXG4gICAgcmV0dXJuIGVudHJ5QXJ0aWNsZTtcbn1cblxuXG5cbmZ1bmN0aW9uIHJlYXNzaWduU2VsZWN0ZWRGYWtlTGluayhmYWtlTGluaywgZmFrZUxpbmtzKXtcbiAgICBmYWtlTGlua3MubWFwKChmYWtlTGluayA9PiB7XG4gICAgICAgIGZha2VMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfSkpO1xuICAgIGZha2VMaW5rLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudChjb250ZW50KXtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ29udGVudENvbnRleHQoY29udGV4dCl7XG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKGxhc3RDb250ZXh0KTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoY29udGV4dCk7XG4gICAgbGFzdENvbnRleHQgPSBjb250ZXh0O1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=