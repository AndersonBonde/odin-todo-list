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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --nav-width: 220px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, Helvetica, sans-serif;
}

/* Nav bar */

nav {
    position: fixed;
    width: var(--nav-width);
    top: 0;
    bottom: 0;
    left: 0;
    background-color: whitesmoke;
    padding: 16px;
}

nav h2 {
    margin-bottom: 16px;
}

nav ul {
    list-style: none;
    padding-block: 16px;
    display: flex;
    flex-direction: column;
    gap: 2px;
}

nav h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#add-new-list {
    width: 30px;
    height: 30px;
    font-weight: bold;
    font-size: 24px;
    border: none;
    background-color: lightskyblue;
    color: white;
    border-radius: 50%;
}

#add-new-list:hover {
    background-color: black;
    color: white;
    cursor: pointer;
}

nav a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color: black;
    font-weight: bold;
    padding: 4px 16px;
}

nav a:hover {
    background-color: #ccc;
}

/* Main */

main {
    margin-left: calc(var(--nav-width) + 16px);
    padding: 16px;
    display: flex;
    height: 100vh;
    gap: 32px;
}

/* To do list */

.current-list {
    position: relative;
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.current-list h2 {
    margin-bottom: 8px;
}

#add-new-task {
    position: absolute;
    bottom: 16px;
    right: 16px;
    font-weight: bold;
    font-size: 2.6rem;
    border: none;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    background-color: lightskyblue;
    color: white;
}

#add-new-task:hover {
    background-color: black;
    color: white;
    cursor: pointer;
}

/* List item */

.list-item {
    background-color: whitesmoke;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    border-radius: 8px;
}

.list-item > h3 {
    border-bottom: 1px solid #ccc;
}

.list-due-time {
    margin-left: auto;
    margin-right: 6px;
}

.list-item-buttons {
    display: flex;
    align-items: center;
    gap: 4px;
}

.list-item button {
    width: 60px;
    padding: 4px;    
}

.list-item-delete {
    background-color: tomato;
    border: none;
    border-radius: 6px;
}

.list-item-delete:hover {
    outline: 1px solid tomato;
    background-color: whitesmoke;
    cursor: pointer;
}

.list-item-view {
    background-color: gold;
    border: none;
    border-radius: 6px;
}

.list-item-view:hover {
    outline: 1px solid gold;
    background-color: whitesmoke;
    cursor: pointer;
}

.late {
    background-color: lightcoral;
}

/* New task */

.task {
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border-radius: 8px;
    width: 480px;
}

.task-item {
    display: flex;
    align-items: center;
    gap: 16px;
}

.task-item :nth-child(1) {
    flex-basis: 80px;
}

.task-item :nth-child(2) {
    flex-grow: 1;
}

.task input,
.task textarea,
.task select {
    padding: 4px;
    font-size: 1rem;
}

.task textarea {
    resize: none;
}

.task .buttons {
    margin-top: auto;
    display: flex;
    gap: 16px;
}

.task .buttons * {
    flex: 1;
    padding-block:12px;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
}

.task #delete {
    background: tomato;
}

#delete:hover {
    outline: 2px solid tomato;
    background-color: white;
    cursor: pointer;
}

.task #save-change {
    background-color: lime;
}

#save-change:hover {
    outline: 2px solid lime;
    background-color: white;
    cursor: pointer;
}

.checklist {
    list-style: none;
    padding-inline: 16px;
}

.checklist li {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
}

.checklist input[type="checkbox"] {
    width: 18px;
    height: 18px;
}

.checklist input[type="checkbox"]:hover {
    cursor: pointer;
}

#new-checklist-item {
    width: 20px;
    height: 20px;
    border: none;
    background-color: #ccc;
    border-radius: 50%;
    font-weight: bold;
    font-size: 16px;
    margin-top: 16px;
    margin-inline: 16px;
}

#new-checklist-item:hover {
    outline: 2px solid black;
    cursor: pointer;
}

#new-checklist-item + span {
    color: #949494;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yCAAyC;AAC7C;;AAEA,YAAY;;AAEZ;IACI,eAAe;IACf,uBAAuB;IACvB,MAAM;IACN,SAAS;IACT,OAAO;IACP,4BAA4B;IAC5B,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,8BAA8B;IAC9B,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA,SAAS;;AAET;IACI,0CAA0C;IAC1C,aAAa;IACb,aAAa;IACb,aAAa;IACb,SAAS;AACb;;AAEA,eAAe;;AAEf;IACI,kBAAkB;IAClB,aAAa;IACb,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,eAAe;AACnB;;AAEA,cAAc;;AAEd;IACI,4BAA4B;IAC5B,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,4BAA4B;AAChC;;AAEA,aAAa;;AAEb;IACI,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;;;IAGI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,OAAO;IACP,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB","sourcesContent":[":root {\n    --nav-width: 220px;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n/* Nav bar */\n\nnav {\n    position: fixed;\n    width: var(--nav-width);\n    top: 0;\n    bottom: 0;\n    left: 0;\n    background-color: whitesmoke;\n    padding: 16px;\n}\n\nnav h2 {\n    margin-bottom: 16px;\n}\n\nnav ul {\n    list-style: none;\n    padding-block: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\nnav h3 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n#add-new-list {\n    width: 30px;\n    height: 30px;\n    font-weight: bold;\n    font-size: 24px;\n    border: none;\n    background-color: lightskyblue;\n    color: white;\n    border-radius: 50%;\n}\n\n#add-new-list:hover {\n    background-color: black;\n    color: white;\n    cursor: pointer;\n}\n\nnav a {\n    display: inline-block;\n    width: 100%;\n    text-decoration: none;\n    color: black;\n    font-weight: bold;\n    padding: 4px 16px;\n}\n\nnav a:hover {\n    background-color: #ccc;\n}\n\n/* Main */\n\nmain {\n    margin-left: calc(var(--nav-width) + 16px);\n    padding: 16px;\n    display: flex;\n    height: 100vh;\n    gap: 32px;\n}\n\n/* To do list */\n\n.current-list {\n    position: relative;\n    padding: 16px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.current-list h2 {\n    margin-bottom: 8px;\n}\n\n#add-new-task {\n    position: absolute;\n    bottom: 16px;\n    right: 16px;\n    font-weight: bold;\n    font-size: 2.6rem;\n    border: none;\n    border-radius: 50%;\n    width: 56px;\n    height: 56px;\n    background-color: lightskyblue;\n    color: white;\n}\n\n#add-new-task:hover {\n    background-color: black;\n    color: white;\n    cursor: pointer;\n}\n\n/* List item */\n\n.list-item {\n    background-color: whitesmoke;\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    border-radius: 8px;\n}\n\n.list-item > h3 {\n    border-bottom: 1px solid #ccc;\n}\n\n.list-due-time {\n    margin-left: auto;\n    margin-right: 6px;\n}\n\n.list-item-buttons {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n}\n\n.list-item button {\n    width: 60px;\n    padding: 4px;    \n}\n\n.list-item-delete {\n    background-color: tomato;\n    border: none;\n    border-radius: 6px;\n}\n\n.list-item-delete:hover {\n    outline: 1px solid tomato;\n    background-color: whitesmoke;\n    cursor: pointer;\n}\n\n.list-item-view {\n    background-color: gold;\n    border: none;\n    border-radius: 6px;\n}\n\n.list-item-view:hover {\n    outline: 1px solid gold;\n    background-color: whitesmoke;\n    cursor: pointer;\n}\n\n.late {\n    background-color: lightcoral;\n}\n\n/* New task */\n\n.task {\n    background-color: whitesmoke;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    padding: 16px;\n    border-radius: 8px;\n    width: 480px;\n}\n\n.task-item {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n}\n\n.task-item :nth-child(1) {\n    flex-basis: 80px;\n}\n\n.task-item :nth-child(2) {\n    flex-grow: 1;\n}\n\n.task input,\n.task textarea,\n.task select {\n    padding: 4px;\n    font-size: 1rem;\n}\n\n.task textarea {\n    resize: none;\n}\n\n.task .buttons {\n    margin-top: auto;\n    display: flex;\n    gap: 16px;\n}\n\n.task .buttons * {\n    flex: 1;\n    padding-block:12px;\n    font-size: 1rem;\n    font-weight: bold;\n    border: none;\n    border-radius: 8px;\n}\n\n.task #delete {\n    background: tomato;\n}\n\n#delete:hover {\n    outline: 2px solid tomato;\n    background-color: white;\n    cursor: pointer;\n}\n\n.task #save-change {\n    background-color: lime;\n}\n\n#save-change:hover {\n    outline: 2px solid lime;\n    background-color: white;\n    cursor: pointer;\n}\n\n.checklist {\n    list-style: none;\n    padding-inline: 16px;\n}\n\n.checklist li {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    margin-bottom: 6px;\n}\n\n.checklist input[type=\"checkbox\"] {\n    width: 18px;\n    height: 18px;\n}\n\n.checklist input[type=\"checkbox\"]:hover {\n    cursor: pointer;\n}\n\n#new-checklist-item {\n    width: 20px;\n    height: 20px;\n    border: none;\n    background-color: #ccc;\n    border-radius: 50%;\n    font-weight: bold;\n    font-size: 16px;\n    margin-top: 16px;\n    margin-inline: 16px;\n}\n\n#new-checklist-item:hover {\n    outline: 2px solid black;\n    cursor: pointer;\n}\n\n#new-checklist-item + span {\n    color: #949494;\n}"],"sourceRoot":""}]);
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

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-item */ "./src/list-item.js");
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./src/events.js");





const displayController = (() => {
    const cache = cacheDOM();
    let _currentDisplayedItemId = undefined;
    let _currentList = undefined;
    let _allLists = [];

    addListeners();

    (function initialPageLoad() {
        cache.newTaskCard.style.display = "none";
        _currentList = (0,_list__WEBPACK_IMPORTED_MODULE_2__["default"])("To Do");
        _allLists.push(_currentList);
        populateNavBarList();
        populateTaskListField();

        // Placeholder for test
        let newItem = (0,_todo_item__WEBPACK_IMPORTED_MODULE_1__["default"])("Placeholder", "Description for the placeholder task.", "2023-10-13", [{"Placeholder check list": true}, {"Second item": false}]);
        let newListItem = (0,_list_item__WEBPACK_IMPORTED_MODULE_0__["default"])(newItem);
        _currentList.items.push(newListItem);
        cache.currentList.appendChild(newListItem.container);
    })();
    
    function cacheDOM() {
        const obj = {};
    
        obj.projectsList = document.querySelector(".projects-list");
        obj.currentList = document.querySelector(".current-list");
        obj.addNewListButton = document.querySelector("#add-new-list");
        obj.addNewTaskButton = document.querySelector("#add-new-task");
        obj.newTaskCard = document.querySelector(".task");
        obj.taskTitleField = document.querySelector("#title");
        obj.taskDescriptionField = document.querySelector("#description");
        obj.taskListField = document.querySelector("#list");
        obj.taskDateField = document.querySelector("#due-date");    
        obj.checkList = document.querySelector(".checklist");
        obj.addNewChecklistItemButton = document.querySelector("#new-checklist-item");
        obj.taskDeleteButton = document.querySelector("#delete");
        obj.taskSaveChangeButton = document.querySelector("#save-change");
    
        return obj;
    }
    
    function addListeners() {
        cache.addNewListButton.addEventListener("click", createNewList);
        cache.addNewTaskButton.addEventListener("click", openCleanTaskCard);
        cache.taskDeleteButton.addEventListener("click", closeTaskCard);
        cache.taskSaveChangeButton.addEventListener("click", handleSaveChange);
        cache.addNewChecklistItemButton.addEventListener("click", addNewChecklistItem);

        _events__WEBPACK_IMPORTED_MODULE_3__["default"].on("viewItem", openTaskCardWithInfo);
        _events__WEBPACK_IMPORTED_MODULE_3__["default"].on("deleteItem", deleteTask);

        document.addEventListener("keydown", enterKeyToSaveChanges);
        document.addEventListener("keydown", deleteKeyToDeleteOpenTask);
    }
    
    function openCleanTaskCard() {
        clearTaskCard();
        taskCardFieldsSetup();
    }
    
    function openTaskCardWithInfo(id, item) {
        clearTaskCard();
        taskCardFieldsSetup();
        loadItemToCard(item);
        loadChecklistToCard(item);
        
        _currentDisplayedItemId = id;
    }
    
    function clearTaskCard() {
        cache.taskTitleField.value = "";
        cache.taskDescriptionField.value = "";
        cache.taskListField.value = "";
        cache.taskDateField.value = "";

        let allCheckListItems = cache.checkList.querySelectorAll("li");
        allCheckListItems.forEach(curr => {
            cache.checkList.removeChild(curr);
        });
    
        _currentDisplayedItemId = undefined;
    }
    
    function loadItemToCard(item) {
        cache.taskTitleField.value = item.getTitle();
        cache.taskDescriptionField.value = item.getDescription();
        cache.taskDateField.value = item.getDueTime();
    }
    
    function taskCardFieldsSetup() {
        cache.newTaskCard.style.display = "flex";
        cache.taskTitleField.focus();
        cache.taskListField.value = _currentList.getName();
    }

    function loadChecklistToCard(item) {
        clearAllChecklistItems();

        let arr = item.getCheckList();
        
        arr.forEach((curr) => {
            let newLi = document.createElement("li");
            let newInput = document.createElement("input");
            let newLabel = document.createElement("label");

            newLi.appendChild(newInput);
            newLi.appendChild(newLabel);

            newInput.type = "checkbox";
            newInput.id = Object.keys(curr)[0];
            newInput.checked = Object.values(curr)[0];
            newLabel.htmlFor = Object.keys(curr)[0];
            newLabel.textContent = Object.keys(curr)[0];

            cache.checkList.insertBefore(newLi, cache.addNewChecklistItemButton);
        })
    }

    function clearAllChecklistItems() {
        let allItems = cache.checkList.querySelectorAll("li");

        allItems.forEach(curr => {
            cache.checkList.removeChild(curr);
        })
    }
    
    function closeTaskCard() {
        if(_currentDisplayedItemId != undefined) {
            deleteOpenedTask();
        }
    
        cache.newTaskCard.style.display = "none";
        _currentDisplayedItemId = undefined;
    }

    function deleteTask(id) {
        let target = findOpenedItem(id);

        removeTaskFromList(target);

        cache.currentList.removeChild(target);
    }
    
    function deleteOpenedTask() {
        let target = findOpenedItem();

        removeTaskFromList(target);
        
        cache.currentList.removeChild(target);
    }

    function removeTaskFromList(item) {
        let index = _currentList.items.findIndex(curr => curr.id == item.dataset.id);
        _currentList.items.splice(index, 1);
    }
    
    function findOpenedItem(id) {
        if(id == undefined) {
            id = _currentDisplayedItemId;
        }
        let allTasks = document.querySelectorAll(".list-item");
    
        return Array.from(allTasks).find(curr => curr.dataset.id == id);
    }
    
    function handleSaveChange() {
        if(_currentDisplayedItemId != undefined) {
            modifyCurrentItem();
        } else {
            createNewListItem();
        }
    }

    function modifyCurrentItem() {
        createNewListItem();
    }
    
    function createNewListItem() {
        let newTitle = cache.taskTitleField.value;
        let newDesc = cache.taskDescriptionField.value;
        let newDueTime = cache.taskDateField.value;
        let newChecklist = getChecklistFromCard();
    
        if(newTitle != "") {
            let newItem = (0,_todo_item__WEBPACK_IMPORTED_MODULE_1__["default"])(newTitle, newDesc, newDueTime, newChecklist);
            let newListItem = (0,_list_item__WEBPACK_IMPORTED_MODULE_0__["default"])(newItem);

            addNewListItemToSelectedList(newListItem);
        }
    
        closeTaskCard();
    }

    function addNewListItemToSelectedList(listItem) {
        let selectedList = cache.taskListField.value;
        let list = _allLists.find(curr => curr.getName() == selectedList);

        list.items.push(listItem);
        loadCurrentList();
    }

    function getChecklistFromCard() {
        let checklist = [];
        let allItems = cache.checkList.querySelectorAll("li");

        allItems.forEach(curr => {
            let key = curr.querySelector("label").textContent;
            let value = curr.querySelector("input").checked;
            let obj = {};
            obj[key] = value;
            checklist.push(obj);
        })

        return checklist;
    }

    function populateNavBarList() {
        clearNavBar();

        _allLists.forEach(curr => {
            let newLi = document.createElement("li");
            let newA = document.createElement("a");

            newLi.appendChild(newA);
            newLi.classList.add("to-do-list");

            newA.href = "#";
            newA.textContent = curr.getName();
            newA.addEventListener("click", setCurrentList.bind(null, curr.getName()));

            cache.projectsList.appendChild(newLi);
        })
    }

    function clearNavBar() {
        let all = cache.projectsList.querySelectorAll(".to-do-list");

        all.forEach(curr => {
            cache.projectsList.removeChild(curr);
        })
    }

    function setCurrentList(newListName) {
        let toLoad = _allLists.find(curr => curr.getName() == newListName);
        _currentList = toLoad;

        document.querySelector(".list-name").textContent = newListName;

        loadCurrentList();
    }

    function loadCurrentList() {
        clearAllFromCurrentList();

        _currentList.items.forEach(curr => {
            cache.currentList.appendChild(curr.container);
        })
    }

    function clearAllFromCurrentList() {
        let allItems = cache.currentList.querySelectorAll(".list-item");

        allItems.forEach(curr => {
            cache.currentList.removeChild(curr);
        })
    }

    function createNewList() {
        let listName = prompt("List Name?", "");
        let newList = (0,_list__WEBPACK_IMPORTED_MODULE_2__["default"])(listName);
        _allLists.push(newList);

        populateNavBarList();
        populateTaskListField();
    }

    function enterKeyToSaveChanges(e) {
        if(e.code == "Enter" && cache.newTaskCard.style.display == "flex") {
            createNewListItem();
        }
    }

    function deleteKeyToDeleteOpenTask(e) {
        if(e.code == "Delete" && cache.newTaskCard.style.display == "flex") {
            closeTaskCard();
        }
    }

    function populateTaskListField() {
        clearAllTaskListField();

        _allLists.forEach(curr => {
            let option = document.createElement("option");

            option.textContent = curr.getName();
            option.value = curr.getName();
            cache.taskListField.appendChild(option);
        })

        cache.taskListField.value = "To Do";
    }

    function clearAllTaskListField() {
        cache.taskListField.innerHTML = "";
    }

    function addNewChecklistItem() {
        let toAdd = prompt("New checklist item:", "");
        let obj = {};
        obj[toAdd] = false;

        let newLi = document.createElement("li");
        let newInput = document.createElement("input");
        let newLabel = document.createElement("label");

        newLi.appendChild(newInput);
        newLi.appendChild(newLabel);

        newInput.type = "checkbox";
        newInput.id = Object.keys(obj)[0];
        newInput.checked = Object.values(obj)[0];
        newLabel.htmlFor = Object.keys(obj)[0];
        newLabel.textContent = Object.keys(obj)[0];

        cache.checkList.insertBefore(newLi, cache.addNewChecklistItemButton);
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const events = (() => {
    const module = {};

    const _events = {};
    module.on = (eventName, fn) => {
        _events[eventName] = _events[eventName] || [];
        _events[eventName].push(fn);
    };
    module.off = (eventName, fn) => {
        if(_events[eventName]) {
            for(let i = 0; i < _events[eventName].length; i++) {
                if(_events[eventName][i] === fn) {
                    _events[eventName].splice(i, 1);
                    break;
                }
            };
        }
    };
    module.emit = (eventName, ...data) => {
        if(_events[eventName]) {
            _events[eventName].forEach(fn => {
                fn(...data);
            });
        }
    };

    return module;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);

/***/ }),

/***/ "./src/list-item.js":
/*!**************************!*\
  !*** ./src/list-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");


const listItem = (todoItem) => {
    const elements = createElements();
    const item = todoItem;
    let id = `${item.getTitle()} ${item.getDescription()}`;

    addClassesAndData();
    parentChildStructure();
    addText();
    addListenersToButtons();
    
    function createElements() {
        const obj = {};
    
        obj.container = document.createElement("div");
        obj.title = document.createElement("h3");
        obj.dueTime = document.createElement("span");
        obj.description = document.createElement("p");
        obj.buttonContainer = document.createElement("div");
        obj.deleteButton = document.createElement("button");
        obj.viewButton = document.createElement("button");
    
        return obj;
    }
    
    function addClassesAndData() {
        elements.container.classList.add("list-item");
        elements.container.dataset.id = id;
    
        elements.title.classList.add("list-item-title");
        elements.dueTime.classList.add("list-due-time");
        elements.description.classList.add("list-item-description");
        elements.buttonContainer.classList.add("list-item-buttons");
        elements.deleteButton.classList.add("list-item-delete");
        elements.viewButton.classList.add("list-item-view");
    }
    
    function parentChildStructure() {
        elements.container.appendChild(elements.title);
        elements.container.appendChild(elements.description);
        elements.container.appendChild(elements.buttonContainer);
        
        elements.buttonContainer.appendChild(elements.deleteButton);
        elements.buttonContainer.appendChild(elements.viewButton);
        elements.buttonContainer.appendChild(elements.dueTime);
    }
    
    function addText() {
        elements.title.textContent = item.getTitle();
        elements.dueTime.textContent = calculateTimeToDueDateInDays();
        elements.description.textContent = item.getDescription();
        elements.deleteButton.textContent = "Delete";
        elements.viewButton.textContent = "View";
    }

    function calculateTimeToDueDateInDays() {
        if(item.getDueTime() == "") return "";

        let dueDate = new Date(item.getDueTime());
        let today = new Date();
        let diff = dueDate.getTime() - today.getTime();
        let diffInDays = diff / (1000 * 3600 * 24);

        if(diffInDays < 0) elements.container.classList.add("late");

        return `Due Time: ${diffInDays.toFixed(1)} days`;
    }
    
    function addListenersToButtons() {
        elements.deleteButton.addEventListener("click", deleteSelf);
        elements.viewButton.addEventListener("click", displaySelf);
    }
    
    function deleteSelf() {
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].emit("deleteItem", id);
    }
    
    function displaySelf() {
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].emit("viewItem", id, item);
    }

    return {
        container: elements.container,
        item,
        id
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItem);

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const list = (name) => {
    const items = [];
    let _name = name;

    const getName = () => _name;

    return {
        items,
        getName
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);

/***/ }),

/***/ "./src/todo-item.js":
/*!**************************!*\
  !*** ./src/todo-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todoItem = (title, description, dueTime = "", checkList = []) => {
    let _title = title;
    let _description = description;
    let _dueTime = dueTime; 
    let _checkList = checkList;

    const getTitle = () => _title;
    const getDescription = () => _description;
    const getDueTime = () => _dueTime;
    const getCheckList = () => _checkList;

    function addToCheckList(toAdd) {
        if(typeof toAdd !== "object") {
            console.log("addToCheckList must be an object"); 
            return;
        };

        _checkList.push(toAdd);
    }

    return {
        getTitle,
        getDescription,
        getDueTime,
        getCheckList,
        addToCheckList
    }
} 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoItem);

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
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-item */ "./src/list-item.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFL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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzREFBUTtBQUNsQyw4QkFBOEIsc0RBQVE7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQUk7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUM5VWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDN0JTOztBQUU5QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCLEVBQUUsc0JBQXNCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBTTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3pGdkI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNabkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7VUM3QnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2xpc3QtaXRlbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG8taXRlbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbmF2LXdpZHRoOiAyMjBweDtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi8qIE5hdiBiYXIgKi9cblxubmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IHZhcigtLW5hdi13aWR0aCk7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxubmF2IGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG5uYXYgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1ibG9jazogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycHg7XG59XG5cbm5hdiBoMyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI2FkZC1uZXctbGlzdCB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiNhZGQtbmV3LWxpc3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm5hdiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcbn1cblxubmF2IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi8qIE1haW4gKi9cblxubWFpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tbmF2LXdpZHRoKSArIDE2cHgpO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGdhcDogMzJweDtcbn1cblxuLyogVG8gZG8gbGlzdCAqL1xuXG4uY3VycmVudC1saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbn1cblxuLmN1cnJlbnQtbGlzdCBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4jYWRkLW5ldy10YXNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxNnB4O1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNhZGQtbmV3LXRhc2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIExpc3QgaXRlbSAqL1xuXG4ubGlzdC1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmxpc3QtaXRlbSA+IGgzIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLmxpc3QtZHVlLXRpbWUge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4ubGlzdC1pdGVtLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbn1cblxuLmxpc3QtaXRlbSBidXR0b24ge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHBhZGRpbmc6IDRweDsgICAgXG59XG5cbi5saXN0LWl0ZW0tZGVsZXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmxpc3QtaXRlbS1kZWxldGU6aG92ZXIge1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCB0b21hdG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saXN0LWl0ZW0tdmlldyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubGlzdC1pdGVtLXZpZXc6aG92ZXIge1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCBnb2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGF0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbn1cblxuLyogTmV3IHRhc2sgKi9cblxuLnRhc2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogNDgwcHg7XG59XG5cbi50YXNrLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG59XG5cbi50YXNrLWl0ZW0gOm50aC1jaGlsZCgxKSB7XG4gICAgZmxleC1iYXNpczogODBweDtcbn1cblxuLnRhc2staXRlbSA6bnRoLWNoaWxkKDIpIHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi50YXNrIGlucHV0LFxuLnRhc2sgdGV4dGFyZWEsXG4udGFzayBzZWxlY3Qge1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi50YXNrIHRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbi50YXNrIC5idXR0b25zIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNnB4O1xufVxuXG4udGFzayAuYnV0dG9ucyAqIHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmctYmxvY2s6MTJweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnRhc2sgI2RlbGV0ZSB7XG4gICAgYmFja2dyb3VuZDogdG9tYXRvO1xufVxuXG4jZGVsZXRlOmhvdmVyIHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgdG9tYXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2sgI3NhdmUtY2hhbmdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lO1xufVxuXG4jc2F2ZS1jaGFuZ2U6aG92ZXIge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCBsaW1lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoZWNrbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nLWlubGluZTogMTZweDtcbn1cblxuLmNoZWNrbGlzdCBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLmNoZWNrbGlzdCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbn1cblxuLmNoZWNrbGlzdCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI25ldy1jaGVja2xpc3QtaXRlbSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBtYXJnaW4taW5saW5lOiAxNnB4O1xufVxuXG4jbmV3LWNoZWNrbGlzdC1pdGVtOmhvdmVyIHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jbmV3LWNoZWNrbGlzdC1pdGVtICsgc3BhbiB7XG4gICAgY29sb3I6ICM5NDk0OTQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsNEJBQTRCO0lBQzVCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxX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SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1uYXYtd2lkdGg6IDIyMHB4O1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIE5hdiBiYXIgKi9cXG5cXG5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiB2YXIoLS1uYXYtd2lkdGgpO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG59XFxuXFxubmF2IGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxubmF2IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZy1ibG9jazogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbm5hdiBoMyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2FkZC1uZXctbGlzdCB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuI2FkZC1uZXctbGlzdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2IGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xcbn1cXG5cXG5uYXYgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG5tYWluIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tbmF2LXdpZHRoKSArIDE2cHgpO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBnYXA6IDMycHg7XFxufVxcblxcbi8qIFRvIGRvIGxpc3QgKi9cXG5cXG4uY3VycmVudC1saXN0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLmN1cnJlbnQtbGlzdCBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuI2FkZC1uZXctdGFzayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxNnB4O1xcbiAgICByaWdodDogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDU2cHg7XFxuICAgIGhlaWdodDogNTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNhZGQtbmV3LXRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIExpc3QgaXRlbSAqL1xcblxcbi5saXN0LWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtID4gaDMge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXG59XFxuXFxuLmxpc3QtZHVlLXRpbWUge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxufVxcblxcbi5saXN0LWl0ZW0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7ICAgIFxcbn1cXG5cXG4ubGlzdC1pdGVtLWRlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5saXN0LWl0ZW0tZGVsZXRlOmhvdmVyIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHRvbWF0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1pdGVtLXZpZXcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmxpc3QtaXRlbS12aWV3OmhvdmVyIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGdvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxhdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbn1cXG5cXG4vKiBOZXcgdGFzayAqL1xcblxcbi50YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHdpZHRoOiA0ODBweDtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLnRhc2staXRlbSA6bnRoLWNoaWxkKDEpIHtcXG4gICAgZmxleC1iYXNpczogODBweDtcXG59XFxuXFxuLnRhc2staXRlbSA6bnRoLWNoaWxkKDIpIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4udGFzayBpbnB1dCxcXG4udGFzayB0ZXh0YXJlYSxcXG4udGFzayBzZWxlY3Qge1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2sgdGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50YXNrIC5idXR0b25zIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4udGFzayAuYnV0dG9ucyAqIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZy1ibG9jazoxMnB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnRhc2sgI2RlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQ6IHRvbWF0bztcXG59XFxuXFxuI2RlbGV0ZTpob3ZlciB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB0b21hdG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrICNzYXZlLWNoYW5nZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XFxufVxcblxcbiNzYXZlLWNoYW5nZTpob3ZlciB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBsaW1lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tsaXN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDE2cHg7XFxufVxcblxcbi5jaGVja2xpc3QgbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG5cXG4uY2hlY2tsaXN0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG4uY2hlY2tsaXN0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuZXctY2hlY2tsaXN0LWl0ZW0ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgbWFyZ2luLWlubGluZTogMTZweDtcXG59XFxuXFxuI25ldy1jaGVja2xpc3QtaXRlbTpob3ZlciB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LWNoZWNrbGlzdC1pdGVtICsgc3BhbiB7XFxuICAgIGNvbG9yOiAjOTQ5NDk0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxpc3RJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IHRvZG9JdGVtIGZyb20gXCIuL3RvZG8taXRlbVwiO1xuaW1wb3J0IGxpc3QgZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNhY2hlID0gY2FjaGVET00oKTtcbiAgICBsZXQgX2N1cnJlbnREaXNwbGF5ZWRJdGVtSWQgPSB1bmRlZmluZWQ7XG4gICAgbGV0IF9jdXJyZW50TGlzdCA9IHVuZGVmaW5lZDtcbiAgICBsZXQgX2FsbExpc3RzID0gW107XG5cbiAgICBhZGRMaXN0ZW5lcnMoKTtcblxuICAgIChmdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XG4gICAgICAgIGNhY2hlLm5ld1Rhc2tDYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgX2N1cnJlbnRMaXN0ID0gbGlzdChcIlRvIERvXCIpO1xuICAgICAgICBfYWxsTGlzdHMucHVzaChfY3VycmVudExpc3QpO1xuICAgICAgICBwb3B1bGF0ZU5hdkJhckxpc3QoKTtcbiAgICAgICAgcG9wdWxhdGVUYXNrTGlzdEZpZWxkKCk7XG5cbiAgICAgICAgLy8gUGxhY2Vob2xkZXIgZm9yIHRlc3RcbiAgICAgICAgbGV0IG5ld0l0ZW0gPSB0b2RvSXRlbShcIlBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb24gZm9yIHRoZSBwbGFjZWhvbGRlciB0YXNrLlwiLCBcIjIwMjMtMTAtMTNcIiwgW3tcIlBsYWNlaG9sZGVyIGNoZWNrIGxpc3RcIjogdHJ1ZX0sIHtcIlNlY29uZCBpdGVtXCI6IGZhbHNlfV0pO1xuICAgICAgICBsZXQgbmV3TGlzdEl0ZW0gPSBsaXN0SXRlbShuZXdJdGVtKTtcbiAgICAgICAgX2N1cnJlbnRMaXN0Lml0ZW1zLnB1c2gobmV3TGlzdEl0ZW0pO1xuICAgICAgICBjYWNoZS5jdXJyZW50TGlzdC5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbS5jb250YWluZXIpO1xuICAgIH0pKCk7XG4gICAgXG4gICAgZnVuY3Rpb24gY2FjaGVET00oKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIFxuICAgICAgICBvYmoucHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xuICAgICAgICBvYmouY3VycmVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtbGlzdFwiKTtcbiAgICAgICAgb2JqLmFkZE5ld0xpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1uZXctbGlzdFwiKTtcbiAgICAgICAgb2JqLmFkZE5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1uZXctdGFza1wiKTtcbiAgICAgICAgb2JqLm5ld1Rhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrXCIpO1xuICAgICAgICBvYmoudGFza1RpdGxlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICAgICAgICBvYmoudGFza0Rlc2NyaXB0aW9uRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICBvYmoudGFza0xpc3RGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdFwiKTtcbiAgICAgICAgb2JqLnRhc2tEYXRlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpOyAgICBcbiAgICAgICAgb2JqLmNoZWNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tsaXN0XCIpO1xuICAgICAgICBvYmouYWRkTmV3Q2hlY2tsaXN0SXRlbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWNoZWNrbGlzdC1pdGVtXCIpO1xuICAgICAgICBvYmoudGFza0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsZXRlXCIpO1xuICAgICAgICBvYmoudGFza1NhdmVDaGFuZ2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmUtY2hhbmdlXCIpO1xuICAgIFxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNhY2hlLmFkZE5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZU5ld0xpc3QpO1xuICAgICAgICBjYWNoZS5hZGROZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuQ2xlYW5UYXNrQ2FyZCk7XG4gICAgICAgIGNhY2hlLnRhc2tEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVGFza0NhcmQpO1xuICAgICAgICBjYWNoZS50YXNrU2F2ZUNoYW5nZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlU2F2ZUNoYW5nZSk7XG4gICAgICAgIGNhY2hlLmFkZE5ld0NoZWNrbGlzdEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld0NoZWNrbGlzdEl0ZW0pO1xuXG4gICAgICAgIGV2ZW50cy5vbihcInZpZXdJdGVtXCIsIG9wZW5UYXNrQ2FyZFdpdGhJbmZvKTtcbiAgICAgICAgZXZlbnRzLm9uKFwiZGVsZXRlSXRlbVwiLCBkZWxldGVUYXNrKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlbnRlcktleVRvU2F2ZUNoYW5nZXMpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBkZWxldGVLZXlUb0RlbGV0ZU9wZW5UYXNrKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gb3BlbkNsZWFuVGFza0NhcmQoKSB7XG4gICAgICAgIGNsZWFyVGFza0NhcmQoKTtcbiAgICAgICAgdGFza0NhcmRGaWVsZHNTZXR1cCgpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBvcGVuVGFza0NhcmRXaXRoSW5mbyhpZCwgaXRlbSkge1xuICAgICAgICBjbGVhclRhc2tDYXJkKCk7XG4gICAgICAgIHRhc2tDYXJkRmllbGRzU2V0dXAoKTtcbiAgICAgICAgbG9hZEl0ZW1Ub0NhcmQoaXRlbSk7XG4gICAgICAgIGxvYWRDaGVja2xpc3RUb0NhcmQoaXRlbSk7XG4gICAgICAgIFxuICAgICAgICBfY3VycmVudERpc3BsYXllZEl0ZW1JZCA9IGlkO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjbGVhclRhc2tDYXJkKCkge1xuICAgICAgICBjYWNoZS50YXNrVGl0bGVGaWVsZC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGNhY2hlLnRhc2tEZXNjcmlwdGlvbkZpZWxkLnZhbHVlID0gXCJcIjtcbiAgICAgICAgY2FjaGUudGFza0xpc3RGaWVsZC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGNhY2hlLnRhc2tEYXRlRmllbGQudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIGxldCBhbGxDaGVja0xpc3RJdGVtcyA9IGNhY2hlLmNoZWNrTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XG4gICAgICAgIGFsbENoZWNrTGlzdEl0ZW1zLmZvckVhY2goY3VyciA9PiB7XG4gICAgICAgICAgICBjYWNoZS5jaGVja0xpc3QucmVtb3ZlQ2hpbGQoY3Vycik7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBfY3VycmVudERpc3BsYXllZEl0ZW1JZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbG9hZEl0ZW1Ub0NhcmQoaXRlbSkge1xuICAgICAgICBjYWNoZS50YXNrVGl0bGVGaWVsZC52YWx1ZSA9IGl0ZW0uZ2V0VGl0bGUoKTtcbiAgICAgICAgY2FjaGUudGFza0Rlc2NyaXB0aW9uRmllbGQudmFsdWUgPSBpdGVtLmdldERlc2NyaXB0aW9uKCk7XG4gICAgICAgIGNhY2hlLnRhc2tEYXRlRmllbGQudmFsdWUgPSBpdGVtLmdldER1ZVRpbWUoKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdGFza0NhcmRGaWVsZHNTZXR1cCgpIHtcbiAgICAgICAgY2FjaGUubmV3VGFza0NhcmQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBjYWNoZS50YXNrVGl0bGVGaWVsZC5mb2N1cygpO1xuICAgICAgICBjYWNoZS50YXNrTGlzdEZpZWxkLnZhbHVlID0gX2N1cnJlbnRMaXN0LmdldE5hbWUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkQ2hlY2tsaXN0VG9DYXJkKGl0ZW0pIHtcbiAgICAgICAgY2xlYXJBbGxDaGVja2xpc3RJdGVtcygpO1xuXG4gICAgICAgIGxldCBhcnIgPSBpdGVtLmdldENoZWNrTGlzdCgpO1xuICAgICAgICBcbiAgICAgICAgYXJyLmZvckVhY2goKGN1cnIpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGxldCBuZXdJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGxldCBuZXdMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuICAgICAgICAgICAgbmV3TGkuYXBwZW5kQ2hpbGQobmV3SW5wdXQpO1xuICAgICAgICAgICAgbmV3TGkuYXBwZW5kQ2hpbGQobmV3TGFiZWwpO1xuXG4gICAgICAgICAgICBuZXdJbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICAgICAgbmV3SW5wdXQuaWQgPSBPYmplY3Qua2V5cyhjdXJyKVswXTtcbiAgICAgICAgICAgIG5ld0lucHV0LmNoZWNrZWQgPSBPYmplY3QudmFsdWVzKGN1cnIpWzBdO1xuICAgICAgICAgICAgbmV3TGFiZWwuaHRtbEZvciA9IE9iamVjdC5rZXlzKGN1cnIpWzBdO1xuICAgICAgICAgICAgbmV3TGFiZWwudGV4dENvbnRlbnQgPSBPYmplY3Qua2V5cyhjdXJyKVswXTtcblxuICAgICAgICAgICAgY2FjaGUuY2hlY2tMaXN0Lmluc2VydEJlZm9yZShuZXdMaSwgY2FjaGUuYWRkTmV3Q2hlY2tsaXN0SXRlbUJ1dHRvbik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJBbGxDaGVja2xpc3RJdGVtcygpIHtcbiAgICAgICAgbGV0IGFsbEl0ZW1zID0gY2FjaGUuY2hlY2tMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcblxuICAgICAgICBhbGxJdGVtcy5mb3JFYWNoKGN1cnIgPT4ge1xuICAgICAgICAgICAgY2FjaGUuY2hlY2tMaXN0LnJlbW92ZUNoaWxkKGN1cnIpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjbG9zZVRhc2tDYXJkKCkge1xuICAgICAgICBpZihfY3VycmVudERpc3BsYXllZEl0ZW1JZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZU9wZW5lZFRhc2soKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjYWNoZS5uZXdUYXNrQ2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIF9jdXJyZW50RGlzcGxheWVkSXRlbUlkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRhc2soaWQpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGZpbmRPcGVuZWRJdGVtKGlkKTtcblxuICAgICAgICByZW1vdmVUYXNrRnJvbUxpc3QodGFyZ2V0KTtcblxuICAgICAgICBjYWNoZS5jdXJyZW50TGlzdC5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkZWxldGVPcGVuZWRUYXNrKCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZmluZE9wZW5lZEl0ZW0oKTtcblxuICAgICAgICByZW1vdmVUYXNrRnJvbUxpc3QodGFyZ2V0KTtcbiAgICAgICAgXG4gICAgICAgIGNhY2hlLmN1cnJlbnRMaXN0LnJlbW92ZUNoaWxkKHRhcmdldCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21MaXN0KGl0ZW0pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gX2N1cnJlbnRMaXN0Lml0ZW1zLmZpbmRJbmRleChjdXJyID0+IGN1cnIuaWQgPT0gaXRlbS5kYXRhc2V0LmlkKTtcbiAgICAgICAgX2N1cnJlbnRMaXN0Lml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGZpbmRPcGVuZWRJdGVtKGlkKSB7XG4gICAgICAgIGlmKGlkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWQgPSBfY3VycmVudERpc3BsYXllZEl0ZW1JZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtaXRlbVwiKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsVGFza3MpLmZpbmQoY3VyciA9PiBjdXJyLmRhdGFzZXQuaWQgPT0gaWQpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBoYW5kbGVTYXZlQ2hhbmdlKCkge1xuICAgICAgICBpZihfY3VycmVudERpc3BsYXllZEl0ZW1JZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1vZGlmeUN1cnJlbnRJdGVtKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGVOZXdMaXN0SXRlbSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9kaWZ5Q3VycmVudEl0ZW0oKSB7XG4gICAgICAgIGNyZWF0ZU5ld0xpc3RJdGVtKCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld0xpc3RJdGVtKCkge1xuICAgICAgICBsZXQgbmV3VGl0bGUgPSBjYWNoZS50YXNrVGl0bGVGaWVsZC52YWx1ZTtcbiAgICAgICAgbGV0IG5ld0Rlc2MgPSBjYWNoZS50YXNrRGVzY3JpcHRpb25GaWVsZC52YWx1ZTtcbiAgICAgICAgbGV0IG5ld0R1ZVRpbWUgPSBjYWNoZS50YXNrRGF0ZUZpZWxkLnZhbHVlO1xuICAgICAgICBsZXQgbmV3Q2hlY2tsaXN0ID0gZ2V0Q2hlY2tsaXN0RnJvbUNhcmQoKTtcbiAgICBcbiAgICAgICAgaWYobmV3VGl0bGUgIT0gXCJcIikge1xuICAgICAgICAgICAgbGV0IG5ld0l0ZW0gPSB0b2RvSXRlbShuZXdUaXRsZSwgbmV3RGVzYywgbmV3RHVlVGltZSwgbmV3Q2hlY2tsaXN0KTtcbiAgICAgICAgICAgIGxldCBuZXdMaXN0SXRlbSA9IGxpc3RJdGVtKG5ld0l0ZW0pO1xuXG4gICAgICAgICAgICBhZGROZXdMaXN0SXRlbVRvU2VsZWN0ZWRMaXN0KG5ld0xpc3RJdGVtKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjbG9zZVRhc2tDYXJkKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTmV3TGlzdEl0ZW1Ub1NlbGVjdGVkTGlzdChsaXN0SXRlbSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRMaXN0ID0gY2FjaGUudGFza0xpc3RGaWVsZC52YWx1ZTtcbiAgICAgICAgbGV0IGxpc3QgPSBfYWxsTGlzdHMuZmluZChjdXJyID0+IGN1cnIuZ2V0TmFtZSgpID09IHNlbGVjdGVkTGlzdCk7XG5cbiAgICAgICAgbGlzdC5pdGVtcy5wdXNoKGxpc3RJdGVtKTtcbiAgICAgICAgbG9hZEN1cnJlbnRMaXN0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q2hlY2tsaXN0RnJvbUNhcmQoKSB7XG4gICAgICAgIGxldCBjaGVja2xpc3QgPSBbXTtcbiAgICAgICAgbGV0IGFsbEl0ZW1zID0gY2FjaGUuY2hlY2tMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcblxuICAgICAgICBhbGxJdGVtcy5mb3JFYWNoKGN1cnIgPT4ge1xuICAgICAgICAgICAgbGV0IGtleSA9IGN1cnIucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gY3Vyci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuY2hlY2tlZDtcbiAgICAgICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICBjaGVja2xpc3QucHVzaChvYmopO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBjaGVja2xpc3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVOYXZCYXJMaXN0KCkge1xuICAgICAgICBjbGVhck5hdkJhcigpO1xuXG4gICAgICAgIF9hbGxMaXN0cy5mb3JFYWNoKGN1cnIgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbGV0IG5ld0EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgICAgICAgICAgbmV3TGkuYXBwZW5kQ2hpbGQobmV3QSk7XG4gICAgICAgICAgICBuZXdMaS5jbGFzc0xpc3QuYWRkKFwidG8tZG8tbGlzdFwiKTtcblxuICAgICAgICAgICAgbmV3QS5ocmVmID0gXCIjXCI7XG4gICAgICAgICAgICBuZXdBLnRleHRDb250ZW50ID0gY3Vyci5nZXROYW1lKCk7XG4gICAgICAgICAgICBuZXdBLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRDdXJyZW50TGlzdC5iaW5kKG51bGwsIGN1cnIuZ2V0TmFtZSgpKSk7XG5cbiAgICAgICAgICAgIGNhY2hlLnByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChuZXdMaSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJOYXZCYXIoKSB7XG4gICAgICAgIGxldCBhbGwgPSBjYWNoZS5wcm9qZWN0c0xpc3QucXVlcnlTZWxlY3RvckFsbChcIi50by1kby1saXN0XCIpO1xuXG4gICAgICAgIGFsbC5mb3JFYWNoKGN1cnIgPT4ge1xuICAgICAgICAgICAgY2FjaGUucHJvamVjdHNMaXN0LnJlbW92ZUNoaWxkKGN1cnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRMaXN0KG5ld0xpc3ROYW1lKSB7XG4gICAgICAgIGxldCB0b0xvYWQgPSBfYWxsTGlzdHMuZmluZChjdXJyID0+IGN1cnIuZ2V0TmFtZSgpID09IG5ld0xpc3ROYW1lKTtcbiAgICAgICAgX2N1cnJlbnRMaXN0ID0gdG9Mb2FkO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1uYW1lXCIpLnRleHRDb250ZW50ID0gbmV3TGlzdE5hbWU7XG5cbiAgICAgICAgbG9hZEN1cnJlbnRMaXN0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZEN1cnJlbnRMaXN0KCkge1xuICAgICAgICBjbGVhckFsbEZyb21DdXJyZW50TGlzdCgpO1xuXG4gICAgICAgIF9jdXJyZW50TGlzdC5pdGVtcy5mb3JFYWNoKGN1cnIgPT4ge1xuICAgICAgICAgICAgY2FjaGUuY3VycmVudExpc3QuYXBwZW5kQ2hpbGQoY3Vyci5jb250YWluZXIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyQWxsRnJvbUN1cnJlbnRMaXN0KCkge1xuICAgICAgICBsZXQgYWxsSXRlbXMgPSBjYWNoZS5jdXJyZW50TGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtaXRlbVwiKTtcblxuICAgICAgICBhbGxJdGVtcy5mb3JFYWNoKGN1cnIgPT4ge1xuICAgICAgICAgICAgY2FjaGUuY3VycmVudExpc3QucmVtb3ZlQ2hpbGQoY3Vycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3TGlzdCgpIHtcbiAgICAgICAgbGV0IGxpc3ROYW1lID0gcHJvbXB0KFwiTGlzdCBOYW1lP1wiLCBcIlwiKTtcbiAgICAgICAgbGV0IG5ld0xpc3QgPSBsaXN0KGxpc3ROYW1lKTtcbiAgICAgICAgX2FsbExpc3RzLnB1c2gobmV3TGlzdCk7XG5cbiAgICAgICAgcG9wdWxhdGVOYXZCYXJMaXN0KCk7XG4gICAgICAgIHBvcHVsYXRlVGFza0xpc3RGaWVsZCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVudGVyS2V5VG9TYXZlQ2hhbmdlcyhlKSB7XG4gICAgICAgIGlmKGUuY29kZSA9PSBcIkVudGVyXCIgJiYgY2FjaGUubmV3VGFza0NhcmQuc3R5bGUuZGlzcGxheSA9PSBcImZsZXhcIikge1xuICAgICAgICAgICAgY3JlYXRlTmV3TGlzdEl0ZW0oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUtleVRvRGVsZXRlT3BlblRhc2soZSkge1xuICAgICAgICBpZihlLmNvZGUgPT0gXCJEZWxldGVcIiAmJiBjYWNoZS5uZXdUYXNrQ2FyZC5zdHlsZS5kaXNwbGF5ID09IFwiZmxleFwiKSB7XG4gICAgICAgICAgICBjbG9zZVRhc2tDYXJkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVRhc2tMaXN0RmllbGQoKSB7XG4gICAgICAgIGNsZWFyQWxsVGFza0xpc3RGaWVsZCgpO1xuXG4gICAgICAgIF9hbGxMaXN0cy5mb3JFYWNoKGN1cnIgPT4ge1xuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGN1cnIuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gY3Vyci5nZXROYW1lKCk7XG4gICAgICAgICAgICBjYWNoZS50YXNrTGlzdEZpZWxkLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY2FjaGUudGFza0xpc3RGaWVsZC52YWx1ZSA9IFwiVG8gRG9cIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckFsbFRhc2tMaXN0RmllbGQoKSB7XG4gICAgICAgIGNhY2hlLnRhc2tMaXN0RmllbGQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGROZXdDaGVja2xpc3RJdGVtKCkge1xuICAgICAgICBsZXQgdG9BZGQgPSBwcm9tcHQoXCJOZXcgY2hlY2tsaXN0IGl0ZW06XCIsIFwiXCIpO1xuICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgIG9ialt0b0FkZF0gPSBmYWxzZTtcblxuICAgICAgICBsZXQgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxldCBuZXdJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbGV0IG5ld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4gICAgICAgIG5ld0xpLmFwcGVuZENoaWxkKG5ld0lucHV0KTtcbiAgICAgICAgbmV3TGkuYXBwZW5kQ2hpbGQobmV3TGFiZWwpO1xuXG4gICAgICAgIG5ld0lucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIG5ld0lucHV0LmlkID0gT2JqZWN0LmtleXMob2JqKVswXTtcbiAgICAgICAgbmV3SW5wdXQuY2hlY2tlZCA9IE9iamVjdC52YWx1ZXMob2JqKVswXTtcbiAgICAgICAgbmV3TGFiZWwuaHRtbEZvciA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gICAgICAgIG5ld0xhYmVsLnRleHRDb250ZW50ID0gT2JqZWN0LmtleXMob2JqKVswXTtcblxuICAgICAgICBjYWNoZS5jaGVja0xpc3QuaW5zZXJ0QmVmb3JlKG5ld0xpLCBjYWNoZS5hZGROZXdDaGVja2xpc3RJdGVtQnV0dG9uKTtcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29udHJvbGxlcjsiLCJjb25zdCBldmVudHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1vZHVsZSA9IHt9O1xuXG4gICAgY29uc3QgX2V2ZW50cyA9IHt9O1xuICAgIG1vZHVsZS5vbiA9IChldmVudE5hbWUsIGZuKSA9PiB7XG4gICAgICAgIF9ldmVudHNbZXZlbnROYW1lXSA9IF9ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xuICAgIH07XG4gICAgbW9kdWxlLm9mZiA9IChldmVudE5hbWUsIGZuKSA9PiB7XG4gICAgICAgIGlmKF9ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IF9ldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKF9ldmVudHNbZXZlbnROYW1lXVtpXSA9PT0gZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgbW9kdWxlLmVtaXQgPSAoZXZlbnROYW1lLCAuLi5kYXRhKSA9PiB7XG4gICAgICAgIGlmKF9ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLmZvckVhY2goZm4gPT4ge1xuICAgICAgICAgICAgICAgIGZuKC4uLmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIG1vZHVsZTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50czsiLCJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuXG5jb25zdCBsaXN0SXRlbSA9ICh0b2RvSXRlbSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gY3JlYXRlRWxlbWVudHMoKTtcbiAgICBjb25zdCBpdGVtID0gdG9kb0l0ZW07XG4gICAgbGV0IGlkID0gYCR7aXRlbS5nZXRUaXRsZSgpfSAke2l0ZW0uZ2V0RGVzY3JpcHRpb24oKX1gO1xuXG4gICAgYWRkQ2xhc3Nlc0FuZERhdGEoKTtcbiAgICBwYXJlbnRDaGlsZFN0cnVjdHVyZSgpO1xuICAgIGFkZFRleHQoKTtcbiAgICBhZGRMaXN0ZW5lcnNUb0J1dHRvbnMoKTtcbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgXG4gICAgICAgIG9iai5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvYmoudGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG9iai5kdWVUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIG9iai5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBvYmouYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgb2JqLmRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIG9iai52aWV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3Nlc0FuZERhdGEoKSB7XG4gICAgICAgIGVsZW1lbnRzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtXCIpO1xuICAgICAgICBlbGVtZW50cy5jb250YWluZXIuZGF0YXNldC5pZCA9IGlkO1xuICAgIFxuICAgICAgICBlbGVtZW50cy50aXRsZS5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLXRpdGxlXCIpO1xuICAgICAgICBlbGVtZW50cy5kdWVUaW1lLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWR1ZS10aW1lXCIpO1xuICAgICAgICBlbGVtZW50cy5kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBlbGVtZW50cy5idXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbS1idXR0b25zXCIpO1xuICAgICAgICBlbGVtZW50cy5kZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbS1kZWxldGVcIik7XG4gICAgICAgIGVsZW1lbnRzLnZpZXdCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbS12aWV3XCIpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBwYXJlbnRDaGlsZFN0cnVjdHVyZSgpIHtcbiAgICAgICAgZWxlbWVudHMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRzLnRpdGxlKTtcbiAgICAgICAgZWxlbWVudHMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRzLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgZWxlbWVudHMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50cy5idXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMuZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRzLnZpZXdCdXR0b24pO1xuICAgICAgICBlbGVtZW50cy5idXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMuZHVlVGltZSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGFkZFRleHQoKSB7XG4gICAgICAgIGVsZW1lbnRzLnRpdGxlLnRleHRDb250ZW50ID0gaXRlbS5nZXRUaXRsZSgpO1xuICAgICAgICBlbGVtZW50cy5kdWVUaW1lLnRleHRDb250ZW50ID0gY2FsY3VsYXRlVGltZVRvRHVlRGF0ZUluRGF5cygpO1xuICAgICAgICBlbGVtZW50cy5kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICAgICAgZWxlbWVudHMudmlld0J1dHRvbi50ZXh0Q29udGVudCA9IFwiVmlld1wiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVUb0R1ZURhdGVJbkRheXMoKSB7XG4gICAgICAgIGlmKGl0ZW0uZ2V0RHVlVGltZSgpID09IFwiXCIpIHJldHVybiBcIlwiO1xuXG4gICAgICAgIGxldCBkdWVEYXRlID0gbmV3IERhdGUoaXRlbS5nZXREdWVUaW1lKCkpO1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgZGlmZiA9IGR1ZURhdGUuZ2V0VGltZSgpIC0gdG9kYXkuZ2V0VGltZSgpO1xuICAgICAgICBsZXQgZGlmZkluRGF5cyA9IGRpZmYgLyAoMTAwMCAqIDM2MDAgKiAyNCk7XG5cbiAgICAgICAgaWYoZGlmZkluRGF5cyA8IDApIGVsZW1lbnRzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGF0ZVwiKTtcblxuICAgICAgICByZXR1cm4gYER1ZSBUaW1lOiAke2RpZmZJbkRheXMudG9GaXhlZCgxKX0gZGF5c2A7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVyc1RvQnV0dG9ucygpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVTZWxmKTtcbiAgICAgICAgZWxlbWVudHMudmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVNlbGYpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkZWxldGVTZWxmKCkge1xuICAgICAgICBldmVudHMuZW1pdChcImRlbGV0ZUl0ZW1cIiwgaWQpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkaXNwbGF5U2VsZigpIHtcbiAgICAgICAgZXZlbnRzLmVtaXQoXCJ2aWV3SXRlbVwiLCBpZCwgaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udGFpbmVyOiBlbGVtZW50cy5jb250YWluZXIsXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIGlkXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0SXRlbTsiLCJjb25zdCBsaXN0ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgIGxldCBfbmFtZSA9IG5hbWU7XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gX25hbWU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpdGVtcyxcbiAgICAgICAgZ2V0TmFtZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdDsiLCJjb25zdCB0b2RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZVRpbWUgPSBcIlwiLCBjaGVja0xpc3QgPSBbXSkgPT4ge1xuICAgIGxldCBfdGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgbGV0IF9kdWVUaW1lID0gZHVlVGltZTsgXG4gICAgbGV0IF9jaGVja0xpc3QgPSBjaGVja0xpc3Q7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IF90aXRsZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IF9kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBnZXREdWVUaW1lID0gKCkgPT4gX2R1ZVRpbWU7XG4gICAgY29uc3QgZ2V0Q2hlY2tMaXN0ID0gKCkgPT4gX2NoZWNrTGlzdDtcblxuICAgIGZ1bmN0aW9uIGFkZFRvQ2hlY2tMaXN0KHRvQWRkKSB7XG4gICAgICAgIGlmKHR5cGVvZiB0b0FkZCAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRUb0NoZWNrTGlzdCBtdXN0IGJlIGFuIG9iamVjdFwiKTsgXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG5cbiAgICAgICAgX2NoZWNrTGlzdC5wdXNoKHRvQWRkKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRUaXRsZSxcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgICAgIGdldER1ZVRpbWUsXG4gICAgICAgIGdldENoZWNrTGlzdCxcbiAgICAgICAgYWRkVG9DaGVja0xpc3RcbiAgICB9XG59IFxuXG5leHBvcnQgZGVmYXVsdCB0b2RvSXRlbTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHRvZG9JdGVtIGZyb20gXCIuL3RvZG8taXRlbVwiO1xuaW1wb3J0IGxpc3RJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9