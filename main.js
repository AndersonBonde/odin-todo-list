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
    background-color: blueviolet;
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
    background-color: white;
    color: black;
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

.list-item-buttons {
    display: flex;
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

.checklist-list {
    list-style: none;
    padding-inline: 16px;
}

.checklist-list li {
    display: flex;
    align-items: center;
    gap: 8px;
}

.checklist-list input[type="checkbox"] {
    width: 18px;
    height: 18px;
}

.checklist-list input[type="checkbox"]:hover {
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --nav-width: 220px;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n/* Nav bar */\n\nnav {\n    position: fixed;\n    width: var(--nav-width);\n    top: 0;\n    bottom: 0;\n    left: 0;\n    background-color: whitesmoke;\n    padding: 16px;\n}\n\nnav h2 {\n    margin-bottom: 16px;\n}\n\nnav ul {\n    list-style: none;\n    padding-block: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\nnav h3 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n#add-new-list {\n    width: 30px;\n    height: 30px;\n    font-weight: bold;\n    font-size: 24px;\n    border: none;\n    background-color: lightskyblue;\n    border-radius: 50%;\n}\n\n#add-new-list:hover {\n    background-color: black;\n    color: white;\n    cursor: pointer;\n}\n\nnav a {\n    display: inline-block;\n    width: 100%;\n    text-decoration: none;\n    color: black;\n    font-weight: bold;\n    padding: 4px 16px;\n}\n\nnav a:hover {\n    background-color: #ccc;\n}\n\n/* Main */\n\nmain {\n    margin-left: calc(var(--nav-width) + 16px);\n    padding: 16px;\n    display: flex;\n    height: 100vh;\n    gap: 32px;\n}\n\n/* To do list */\n\n.current-list {\n    position: relative;\n    background-color: blueviolet;\n    padding: 16px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.current-list h2 {\n    margin-bottom: 8px;\n}\n\n#add-new-task {\n    position: absolute;\n    bottom: 16px;\n    right: 16px;\n    font-weight: bold;\n    font-size: 2.6rem;\n    border: none;\n    border-radius: 50%;\n    width: 56px;\n    height: 56px;\n    background-color: lightskyblue;\n    color: white;\n}\n\n#add-new-task:hover {\n    background-color: white;\n    color: black;\n    cursor: pointer;\n}\n\n/* List item */\n\n.list-item {\n    background-color: whitesmoke;\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    border-radius: 8px;\n}\n\n.list-item > h3 {\n    border-bottom: 1px solid #ccc;\n}\n\n.list-item-buttons {\n    display: flex;\n    gap: 4px;\n}\n\n.list-item button {\n    width: 60px;\n    padding: 4px;    \n}\n\n.list-item-delete {\n    background-color: tomato;\n    border: none;\n    border-radius: 6px;\n}\n\n.list-item-delete:hover {\n    outline: 1px solid tomato;\n    background-color: whitesmoke;\n    cursor: pointer;\n}\n\n.list-item-view {\n    background-color: gold;\n    border: none;\n    border-radius: 6px;\n}\n\n.list-item-view:hover {\n    outline: 1px solid gold;\n    background-color: whitesmoke;\n    cursor: pointer;\n}\n\n/* New task */\n\n.task {\n    background-color: whitesmoke;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    padding: 16px;\n    border-radius: 8px;\n    width: 480px;\n}\n\n.task-item {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n}\n\n.task-item :nth-child(1) {\n    flex-basis: 80px;\n}\n\n.task-item :nth-child(2) {\n    flex-grow: 1;\n}\n\n.task input,\n.task textarea,\n.task select {\n    padding: 4px;\n    font-size: 1rem;\n}\n\n.task .buttons {\n    margin-top: auto;\n    display: flex;\n    gap: 16px;\n}\n\n.task .buttons * {\n    flex: 1;\n    padding-block:12px;\n    font-size: 1rem;\n    font-weight: bold;\n    border: none;\n    border-radius: 8px;\n}\n\n.task #delete {\n    background: tomato;\n}\n\n#delete:hover {\n    outline: 2px solid tomato;\n    background-color: white;\n    cursor: pointer;\n}\n\n.task #save-change {\n    background-color: lime;\n}\n\n#save-change:hover {\n    outline: 2px solid lime;\n    background-color: white;\n    cursor: pointer;\n}\n\n.checklist-list {\n    list-style: none;\n    padding-inline: 16px;\n}\n\n.checklist-list li {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.checklist-list input[type=\"checkbox\"] {\n    width: 18px;\n    height: 18px;\n}\n\n.checklist-list input[type=\"checkbox\"]:hover {\n    cursor: pointer;\n}\n\n#new-checklist-item {\n    width: 20px;\n    height: 20px;\n    border: none;\n    background-color: #ccc;\n    border-radius: 50%;\n    font-weight: bold;\n    font-size: 16px;\n    margin-top: 16px;\n    margin-inline: 16px;\n}\n\n#new-checklist-item:hover {\n    outline: 2px solid black;\n    cursor: pointer;\n}\n\n#new-checklist-item + span {\n    color: #949494;\n}"],"sourceRoot":""}]);
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
        _currentList = (0,_list__WEBPACK_IMPORTED_MODULE_2__["default"])();
        _allLists.push(_currentList);

        // Placeholder for test
        let newItem = (0,_todo_item__WEBPACK_IMPORTED_MODULE_1__["default"])("Placeholder", "Description for the placeholder task.");
        let newListItem = (0,_list_item__WEBPACK_IMPORTED_MODULE_0__["default"])(newItem);
        _currentList.items.push(newListItem);
        cache.currentList.appendChild(newListItem.container);
    })();
    
    function cacheDOM() {
        const obj = {};
    
        obj.currentList = document.querySelector(".current-list");
        obj.addNewTaskButton = document.querySelector("#add-new-task");
        obj.newTaskCard = document.querySelector(".task");
        obj.taskTitleField = document.querySelector("#title");
        obj.taskDescriptionField = document.querySelector("#description");
        obj.taskListField = document.querySelector("#list");
        obj.taskDateField = document.querySelector("#due-date");    
        obj.taskDeleteButton = document.querySelector("#delete");
        obj.taskSaveChangeButton = document.querySelector("#save-change");
    
        return obj;
    }
    
    function addListeners() {
        cache.addNewTaskButton.addEventListener("click", openCleanTaskCard);
        cache.taskDeleteButton.addEventListener("click", closeTaskCard);
        cache.taskSaveChangeButton.addEventListener("click", handleSaveChange);

        _events__WEBPACK_IMPORTED_MODULE_3__["default"].on("viewItem", openTaskCardWithInfo);
        _events__WEBPACK_IMPORTED_MODULE_3__["default"].on("deleteItem", deleteTask);
    }
    
    function openCleanTaskCard() {
        clearTaskCard();
        
        cache.newTaskCard.style.display = "flex";
    }
    
    function openTaskCardWithInfo(id, item) {
        clearTaskCard();
        
        cache.newTaskCard.style.display = "flex";
    
        loadItemToCard(item);
        _currentDisplayedItemId = id;
    }
    
    function clearTaskCard() {
        cache.taskTitleField.value = "";
        cache.taskDescriptionField.value = "";
        cache.taskListField.value = "";
        cache.taskDateField.value = "";
    
        _currentDisplayedItemId = undefined;
    }
    
    function loadItemToCard(item) {
        cache.taskTitleField.value = item.getTitle();
        cache.taskDescriptionField.value = item.getDescription();
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
        _events__WEBPACK_IMPORTED_MODULE_3__["default"].emit("listItemDeleted", item.dataset.id);
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
    
        if(newTitle != "") {
            let newItem = (0,_todo_item__WEBPACK_IMPORTED_MODULE_1__["default"])(newTitle, newDesc);
            let newListItem = (0,_list_item__WEBPACK_IMPORTED_MODULE_0__["default"])(newItem);
        
            cache.currentList.appendChild(newListItem.container);

            _events__WEBPACK_IMPORTED_MODULE_3__["default"].emit("listItemCreated", newListItem);
        }
    
        closeTaskCard();
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
    }
    
    function addText() {
        elements.title.textContent = item.getTitle();
        elements.description.textContent = item.getDescription();
        elements.deleteButton.textContent = "Delete";
        elements.viewButton.textContent = "View";
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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");


const list = () => {
    const items = [];

    addListeners();

    function addListeners() {
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("listItemCreated", addItemToList);
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("listItemDeleted", deleteItemFromList);
    }

    function addItemToList(listItem) {
        items.push(listItem);
    }

    function deleteItemFromList(id) {
        let idIndex = items.findIndex(curr => curr.id == id);
        items.splice(idIndex, 1);
    }

    return {
        items
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
const todoItem = (title, description) => {
    let _title = title;
    let _description = description; 

    const getTitle = () => _title;
    const getDescription = () => _description;

    return {
        getTitle,
        getDescription
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtB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d0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2M7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9saXN0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLW5hdi13aWR0aDogMjIwcHg7XG59XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBOYXYgYmFyICovXG5cbm5hdiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiB2YXIoLS1uYXYtd2lkdGgpO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbm5hdiBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxubmF2IHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctYmxvY2s6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnB4O1xufVxuXG5uYXYgaDMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNhZGQtbmV3LWxpc3Qge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiNhZGQtbmV3LWxpc3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm5hdiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcbn1cblxubmF2IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi8qIE1haW4gKi9cblxubWFpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tbmF2LXdpZHRoKSArIDE2cHgpO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGdhcDogMzJweDtcbn1cblxuLyogVG8gZG8gbGlzdCAqL1xuXG4uY3VycmVudC1saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xufVxuXG4uY3VycmVudC1saXN0IGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbiNhZGQtbmV3LXRhc2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE2cHg7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNTZweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2FkZC1uZXctdGFzazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTGlzdCBpdGVtICovXG5cbi5saXN0LWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ubGlzdC1pdGVtID4gaDMge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4ubGlzdC1pdGVtLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA0cHg7XG59XG5cbi5saXN0LWl0ZW0gYnV0dG9uIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBwYWRkaW5nOiA0cHg7ICAgIFxufVxuXG4ubGlzdC1pdGVtLWRlbGV0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5saXN0LWl0ZW0tZGVsZXRlOmhvdmVyIHtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdG9tYXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGlzdC1pdGVtLXZpZXcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmxpc3QtaXRlbS12aWV3OmhvdmVyIHtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgZ29sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTmV3IHRhc2sgKi9cblxuLnRhc2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogNDgwcHg7XG59XG5cbi50YXNrLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG59XG5cbi50YXNrLWl0ZW0gOm50aC1jaGlsZCgxKSB7XG4gICAgZmxleC1iYXNpczogODBweDtcbn1cblxuLnRhc2staXRlbSA6bnRoLWNoaWxkKDIpIHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi50YXNrIGlucHV0LFxuLnRhc2sgdGV4dGFyZWEsXG4udGFzayBzZWxlY3Qge1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi50YXNrIC5idXR0b25zIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNnB4O1xufVxuXG4udGFzayAuYnV0dG9ucyAqIHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmctYmxvY2s6MTJweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnRhc2sgI2RlbGV0ZSB7XG4gICAgYmFja2dyb3VuZDogdG9tYXRvO1xufVxuXG4jZGVsZXRlOmhvdmVyIHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgdG9tYXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2sgI3NhdmUtY2hhbmdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lO1xufVxuXG4jc2F2ZS1jaGFuZ2U6aG92ZXIge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCBsaW1lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoZWNrbGlzdC1saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctaW5saW5lOiAxNnB4O1xufVxuXG4uY2hlY2tsaXN0LWxpc3QgbGkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbn1cblxuLmNoZWNrbGlzdC1saXN0IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xufVxuXG4uY2hlY2tsaXN0LWxpc3QgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNuZXctY2hlY2tsaXN0LWl0ZW0ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLWlubGluZTogMTZweDtcbn1cblxuI25ldy1jaGVja2xpc3QtaXRlbTpob3ZlciB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI25ldy1jaGVja2xpc3QtaXRlbSArIHNwYW4ge1xuICAgIGNvbG9yOiAjOTQ5NDk0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBLFlBQVk7O0FBRVo7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLDRCQUE0QjtJQUM1QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUEsU0FBUzs7QUFFVDtJQUNJLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBLGNBQWM7O0FBRWQ7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7O0FBRUEsYUFBYTs7QUFFYjtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1uYXYtd2lkdGg6IDIyMHB4O1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIE5hdiBiYXIgKi9cXG5cXG5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiB2YXIoLS1uYXYtd2lkdGgpO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG59XFxuXFxubmF2IGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxubmF2IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZy1ibG9jazogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbm5hdiBoMyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2FkZC1uZXctbGlzdCB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbiNhZGQtbmV3LWxpc3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiBhIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcXG59XFxuXFxubmF2IGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxubWFpbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLW5hdi13aWR0aCkgKyAxNnB4KTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZ2FwOiAzMnB4O1xcbn1cXG5cXG4vKiBUbyBkbyBsaXN0ICovXFxuXFxuLmN1cnJlbnQtbGlzdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5jdXJyZW50LWxpc3QgaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbiNhZGQtbmV3LXRhc2sge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTZweDtcXG4gICAgcmlnaHQ6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIuNnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA1NnB4O1xcbiAgICBoZWlnaHQ6IDU2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWRkLW5ldy10YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBMaXN0IGl0ZW0gKi9cXG5cXG4ubGlzdC1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmxpc3QtaXRlbSA+IGgzIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxufVxcblxcbi5saXN0LWl0ZW0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7ICAgIFxcbn1cXG5cXG4ubGlzdC1pdGVtLWRlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5saXN0LWl0ZW0tZGVsZXRlOmhvdmVyIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHRvbWF0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1pdGVtLXZpZXcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmxpc3QtaXRlbS12aWV3OmhvdmVyIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGdvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTmV3IHRhc2sgKi9cXG5cXG4udGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTZweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB3aWR0aDogNDgwcHg7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi50YXNrLWl0ZW0gOm50aC1jaGlsZCgxKSB7XFxuICAgIGZsZXgtYmFzaXM6IDgwcHg7XFxufVxcblxcbi50YXNrLWl0ZW0gOm50aC1jaGlsZCgyKSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnRhc2sgaW5wdXQsXFxuLnRhc2sgdGV4dGFyZWEsXFxuLnRhc2sgc2VsZWN0IHtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrIC5idXR0b25zIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4udGFzayAuYnV0dG9ucyAqIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZy1ibG9jazoxMnB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnRhc2sgI2RlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQ6IHRvbWF0bztcXG59XFxuXFxuI2RlbGV0ZTpob3ZlciB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB0b21hdG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrICNzYXZlLWNoYW5nZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XFxufVxcblxcbiNzYXZlLWNoYW5nZTpob3ZlciB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBsaW1lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tsaXN0LWxpc3Qge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nLWlubGluZTogMTZweDtcXG59XFxuXFxuLmNoZWNrbGlzdC1saXN0IGxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5jaGVja2xpc3QtbGlzdCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDtcXG59XFxuXFxuLmNoZWNrbGlzdC1saXN0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuZXctY2hlY2tsaXN0LWl0ZW0ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgbWFyZ2luLWlubGluZTogMTZweDtcXG59XFxuXFxuI25ldy1jaGVja2xpc3QtaXRlbTpob3ZlciB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LWNoZWNrbGlzdC1pdGVtICsgc3BhbiB7XFxuICAgIGNvbG9yOiAjOTQ5NDk0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxpc3RJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IHRvZG9JdGVtIGZyb20gXCIuL3RvZG8taXRlbVwiO1xuaW1wb3J0IGxpc3QgZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNhY2hlID0gY2FjaGVET00oKTtcbiAgICBsZXQgX2N1cnJlbnREaXNwbGF5ZWRJdGVtSWQgPSB1bmRlZmluZWQ7XG4gICAgbGV0IF9jdXJyZW50TGlzdCA9IHVuZGVmaW5lZDtcbiAgICBsZXQgX2FsbExpc3RzID0gW107XG5cbiAgICBhZGRMaXN0ZW5lcnMoKTtcblxuICAgIChmdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XG4gICAgICAgIGNhY2hlLm5ld1Rhc2tDYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgX2N1cnJlbnRMaXN0ID0gbGlzdCgpO1xuICAgICAgICBfYWxsTGlzdHMucHVzaChfY3VycmVudExpc3QpO1xuXG4gICAgICAgIC8vIFBsYWNlaG9sZGVyIGZvciB0ZXN0XG4gICAgICAgIGxldCBuZXdJdGVtID0gdG9kb0l0ZW0oXCJQbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uIGZvciB0aGUgcGxhY2Vob2xkZXIgdGFzay5cIik7XG4gICAgICAgIGxldCBuZXdMaXN0SXRlbSA9IGxpc3RJdGVtKG5ld0l0ZW0pO1xuICAgICAgICBfY3VycmVudExpc3QuaXRlbXMucHVzaChuZXdMaXN0SXRlbSk7XG4gICAgICAgIGNhY2hlLmN1cnJlbnRMaXN0LmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtLmNvbnRhaW5lcik7XG4gICAgfSkoKTtcbiAgICBcbiAgICBmdW5jdGlvbiBjYWNoZURPTSgpIHtcbiAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgXG4gICAgICAgIG9iai5jdXJyZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1saXN0XCIpO1xuICAgICAgICBvYmouYWRkTmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLW5ldy10YXNrXCIpO1xuICAgICAgICBvYmoubmV3VGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tcIik7XG4gICAgICAgIG9iai50YXNrVGl0bGVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgICAgIG9iai50YXNrRGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG4gICAgICAgIG9iai50YXNrTGlzdEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0XCIpO1xuICAgICAgICBvYmoudGFza0RhdGVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIik7ICAgIFxuICAgICAgICBvYmoudGFza0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsZXRlXCIpO1xuICAgICAgICBvYmoudGFza1NhdmVDaGFuZ2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmUtY2hhbmdlXCIpO1xuICAgIFxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNhY2hlLmFkZE5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5DbGVhblRhc2tDYXJkKTtcbiAgICAgICAgY2FjaGUudGFza0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUYXNrQ2FyZCk7XG4gICAgICAgIGNhY2hlLnRhc2tTYXZlQ2hhbmdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTYXZlQ2hhbmdlKTtcblxuICAgICAgICBldmVudHMub24oXCJ2aWV3SXRlbVwiLCBvcGVuVGFza0NhcmRXaXRoSW5mbyk7XG4gICAgICAgIGV2ZW50cy5vbihcImRlbGV0ZUl0ZW1cIiwgZGVsZXRlVGFzayk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIG9wZW5DbGVhblRhc2tDYXJkKCkge1xuICAgICAgICBjbGVhclRhc2tDYXJkKCk7XG4gICAgICAgIFxuICAgICAgICBjYWNoZS5uZXdUYXNrQ2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIG9wZW5UYXNrQ2FyZFdpdGhJbmZvKGlkLCBpdGVtKSB7XG4gICAgICAgIGNsZWFyVGFza0NhcmQoKTtcbiAgICAgICAgXG4gICAgICAgIGNhY2hlLm5ld1Rhc2tDYXJkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBcbiAgICAgICAgbG9hZEl0ZW1Ub0NhcmQoaXRlbSk7XG4gICAgICAgIF9jdXJyZW50RGlzcGxheWVkSXRlbUlkID0gaWQ7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNsZWFyVGFza0NhcmQoKSB7XG4gICAgICAgIGNhY2hlLnRhc2tUaXRsZUZpZWxkLnZhbHVlID0gXCJcIjtcbiAgICAgICAgY2FjaGUudGFza0Rlc2NyaXB0aW9uRmllbGQudmFsdWUgPSBcIlwiO1xuICAgICAgICBjYWNoZS50YXNrTGlzdEZpZWxkLnZhbHVlID0gXCJcIjtcbiAgICAgICAgY2FjaGUudGFza0RhdGVGaWVsZC52YWx1ZSA9IFwiXCI7XG4gICAgXG4gICAgICAgIF9jdXJyZW50RGlzcGxheWVkSXRlbUlkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBsb2FkSXRlbVRvQ2FyZChpdGVtKSB7XG4gICAgICAgIGNhY2hlLnRhc2tUaXRsZUZpZWxkLnZhbHVlID0gaXRlbS5nZXRUaXRsZSgpO1xuICAgICAgICBjYWNoZS50YXNrRGVzY3JpcHRpb25GaWVsZC52YWx1ZSA9IGl0ZW0uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY2xvc2VUYXNrQ2FyZCgpIHtcbiAgICAgICAgaWYoX2N1cnJlbnREaXNwbGF5ZWRJdGVtSWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkZWxldGVPcGVuZWRUYXNrKCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY2FjaGUubmV3VGFza0NhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBfY3VycmVudERpc3BsYXllZEl0ZW1JZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrKGlkKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBmaW5kT3BlbmVkSXRlbShpZCk7XG5cbiAgICAgICAgcmVtb3ZlVGFza0Zyb21MaXN0KHRhcmdldCk7XG5cbiAgICAgICAgY2FjaGUuY3VycmVudExpc3QucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZGVsZXRlT3BlbmVkVGFzaygpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGZpbmRPcGVuZWRJdGVtKCk7XG5cbiAgICAgICAgcmVtb3ZlVGFza0Zyb21MaXN0KHRhcmdldCk7XG4gICAgICAgIFxuICAgICAgICBjYWNoZS5jdXJyZW50TGlzdC5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tTGlzdChpdGVtKSB7XG4gICAgICAgIGV2ZW50cy5lbWl0KFwibGlzdEl0ZW1EZWxldGVkXCIsIGl0ZW0uZGF0YXNldC5pZCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGZpbmRPcGVuZWRJdGVtKGlkKSB7XG4gICAgICAgIGlmKGlkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWQgPSBfY3VycmVudERpc3BsYXllZEl0ZW1JZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtaXRlbVwiKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsVGFza3MpLmZpbmQoY3VyciA9PiBjdXJyLmRhdGFzZXQuaWQgPT0gaWQpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBoYW5kbGVTYXZlQ2hhbmdlKCkge1xuICAgICAgICBpZihfY3VycmVudERpc3BsYXllZEl0ZW1JZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1vZGlmeUN1cnJlbnRJdGVtKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGVOZXdMaXN0SXRlbSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9kaWZ5Q3VycmVudEl0ZW0oKSB7XG4gICAgICAgIGNyZWF0ZU5ld0xpc3RJdGVtKCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld0xpc3RJdGVtKCkge1xuICAgICAgICBsZXQgbmV3VGl0bGUgPSBjYWNoZS50YXNrVGl0bGVGaWVsZC52YWx1ZTtcbiAgICAgICAgbGV0IG5ld0Rlc2MgPSBjYWNoZS50YXNrRGVzY3JpcHRpb25GaWVsZC52YWx1ZTtcbiAgICBcbiAgICAgICAgaWYobmV3VGl0bGUgIT0gXCJcIikge1xuICAgICAgICAgICAgbGV0IG5ld0l0ZW0gPSB0b2RvSXRlbShuZXdUaXRsZSwgbmV3RGVzYyk7XG4gICAgICAgICAgICBsZXQgbmV3TGlzdEl0ZW0gPSBsaXN0SXRlbShuZXdJdGVtKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjYWNoZS5jdXJyZW50TGlzdC5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbS5jb250YWluZXIpO1xuXG4gICAgICAgICAgICBldmVudHMuZW1pdChcImxpc3RJdGVtQ3JlYXRlZFwiLCBuZXdMaXN0SXRlbSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY2xvc2VUYXNrQ2FyZCgpO1xuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyOyIsImNvbnN0IGV2ZW50cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgbW9kdWxlID0ge307XG5cbiAgICBjb25zdCBfZXZlbnRzID0ge307XG4gICAgbW9kdWxlLm9uID0gKGV2ZW50TmFtZSwgZm4pID0+IHtcbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdID0gX2V2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XG4gICAgfTtcbiAgICBtb2R1bGUub2ZmID0gKGV2ZW50TmFtZSwgZm4pID0+IHtcbiAgICAgICAgaWYoX2V2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoX2V2ZW50c1tldmVudE5hbWVdW2ldID09PSBmbikge1xuICAgICAgICAgICAgICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBtb2R1bGUuZW1pdCA9IChldmVudE5hbWUsIC4uLmRhdGEpID0+IHtcbiAgICAgICAgaWYoX2V2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICAgICAgZm4oLi4uZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbW9kdWxlO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmNvbnN0IGxpc3RJdGVtID0gKHRvZG9JdGVtKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBjcmVhdGVFbGVtZW50cygpO1xuICAgIGNvbnN0IGl0ZW0gPSB0b2RvSXRlbTtcbiAgICBsZXQgaWQgPSBgJHtpdGVtLmdldFRpdGxlKCl9ICR7aXRlbS5nZXREZXNjcmlwdGlvbigpfWA7XG5cbiAgICBhZGRDbGFzc2VzQW5kRGF0YSgpO1xuICAgIHBhcmVudENoaWxkU3RydWN0dXJlKCk7XG4gICAgYWRkVGV4dCgpO1xuICAgIGFkZExpc3RlbmVyc1RvQnV0dG9ucygpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICBcbiAgICAgICAgb2JqLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG9iai50aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgb2JqLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG9iai5idXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvYmouZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgb2JqLnZpZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIFxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGRDbGFzc2VzQW5kRGF0YSgpIHtcbiAgICAgICAgZWxlbWVudHMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW1cIik7XG4gICAgICAgIGVsZW1lbnRzLmNvbnRhaW5lci5kYXRhc2V0LmlkID0gaWQ7XG4gICAgXG4gICAgICAgIGVsZW1lbnRzLnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW0tdGl0bGVcIik7XG4gICAgICAgIGVsZW1lbnRzLmRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW0tZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLWJ1dHRvbnNcIik7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLWRlbGV0ZVwiKTtcbiAgICAgICAgZWxlbWVudHMudmlld0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLXZpZXdcIik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHBhcmVudENoaWxkU3RydWN0dXJlKCkge1xuICAgICAgICBlbGVtZW50cy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMudGl0bGUpO1xuICAgICAgICBlbGVtZW50cy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMuZGVzY3JpcHRpb24pO1xuICAgICAgICBlbGVtZW50cy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50cy5kZWxldGVCdXR0b24pO1xuICAgICAgICBlbGVtZW50cy5idXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMudmlld0J1dHRvbik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGFkZFRleHQoKSB7XG4gICAgICAgIGVsZW1lbnRzLnRpdGxlLnRleHRDb250ZW50ID0gaXRlbS5nZXRUaXRsZSgpO1xuICAgICAgICBlbGVtZW50cy5kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICAgICAgZWxlbWVudHMudmlld0J1dHRvbi50ZXh0Q29udGVudCA9IFwiVmlld1wiO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnNUb0J1dHRvbnMoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlU2VsZik7XG4gICAgICAgIGVsZW1lbnRzLnZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlTZWxmKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZGVsZXRlU2VsZigpIHtcbiAgICAgICAgZXZlbnRzLmVtaXQoXCJkZWxldGVJdGVtXCIsIGlkKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZGlzcGxheVNlbGYoKSB7XG4gICAgICAgIGV2ZW50cy5lbWl0KFwidmlld0l0ZW1cIiwgaWQsIGl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRhaW5lcjogZWxlbWVudHMuY29udGFpbmVyLFxuICAgICAgICBpdGVtLFxuICAgICAgICBpZFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdEl0ZW07IiwiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcblxuY29uc3QgbGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgYWRkTGlzdGVuZXJzKCk7XG5cbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGV2ZW50cy5vbihcImxpc3RJdGVtQ3JlYXRlZFwiLCBhZGRJdGVtVG9MaXN0KTtcbiAgICAgICAgZXZlbnRzLm9uKFwibGlzdEl0ZW1EZWxldGVkXCIsIGRlbGV0ZUl0ZW1Gcm9tTGlzdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkSXRlbVRvTGlzdChsaXN0SXRlbSkge1xuICAgICAgICBpdGVtcy5wdXNoKGxpc3RJdGVtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVJdGVtRnJvbUxpc3QoaWQpIHtcbiAgICAgICAgbGV0IGlkSW5kZXggPSBpdGVtcy5maW5kSW5kZXgoY3VyciA9PiBjdXJyLmlkID09IGlkKTtcbiAgICAgICAgaXRlbXMuc3BsaWNlKGlkSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW1zXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0OyIsImNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGxldCBfdGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247IFxuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBfdGl0bGU7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBfZGVzY3JpcHRpb247XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRUaXRsZSxcbiAgICAgICAgZ2V0RGVzY3JpcHRpb25cbiAgICB9XG59IFxuXG5leHBvcnQgZGVmYXVsdCB0b2RvSXRlbTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHRvZG9JdGVtIGZyb20gXCIuL3RvZG8taXRlbVwiO1xuaW1wb3J0IGxpc3RJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9