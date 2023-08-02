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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --nav-width: 220px;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n/* Nav bar */\n\nnav {\n    position: fixed;\n    width: var(--nav-width);\n    top: 0;\n    bottom: 0;\n    left: 0;\n    background-color: whitesmoke;\n    padding: 16px;\n}\n\nnav h2 {\n    margin-bottom: 16px;\n}\n\nnav ul {\n    list-style: none;\n    padding-block: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\nnav h3 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n#add-new-list {\n    width: 30px;\n    height: 30px;\n    font-weight: bold;\n    font-size: 24px;\n    border: none;\n    background-color: lightskyblue;\n    color: white;\n    border-radius: 50%;\n}\n\n#add-new-list:hover {\n    background-color: black;\n    color: white;\n    cursor: pointer;\n}\n\nnav a {\n    display: inline-block;\n    width: 100%;\n    text-decoration: none;\n    color: black;\n    font-weight: bold;\n    padding: 4px 16px;\n}\n\nnav a:hover {\n    background-color: #ccc;\n}\n\n/* Main */\n\nmain {\n    margin-left: calc(var(--nav-width) + 16px);\n    padding: 16px;\n    display: flex;\n    height: 100vh;\n    gap: 32px;\n}\n\n/* To do list */\n\n.current-list {\n    position: relative;\n    padding: 16px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.current-list h2 {\n    margin-bottom: 8px;\n}\n\n#add-new-task {\n    position: absolute;\n    bottom: 16px;\n    right: 16px;\n    font-weight: bold;\n    font-size: 2.6rem;\n    border: none;\n    border-radius: 50%;\n    width: 56px;\n    height: 56px;\n    background-color: lightskyblue;\n    color: white;\n}\n\n#add-new-task:hover {\n    background-color: black;\n    color: white;\n    cursor: pointer;\n}\n\n/* List item */\n\n.list-item {\n    background-color: whitesmoke;\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    border-radius: 8px;\n}\n\n.list-item > h3 {\n    border-bottom: 1px solid #ccc;\n}\n\n.list-due-time {\n    margin-left: auto;\n    margin-right: 6px;\n}\n\n.list-item-buttons {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n}\n\n.list-item button {\n    width: 60px;\n    padding: 4px;    \n}\n\n.list-item-delete {\n    background-color: tomato;\n    border: none;\n    border-radius: 6px;\n}\n\n.list-item-delete:hover {\n    outline: 1px solid tomato;\n    background-color: whitesmoke;\n    cursor: pointer;\n}\n\n.list-item-view {\n    background-color: gold;\n    border: none;\n    border-radius: 6px;\n}\n\n.list-item-view:hover {\n    outline: 1px solid gold;\n    background-color: whitesmoke;\n    cursor: pointer;\n}\n\n.late {\n    background-color: lightcoral;\n}\n\n/* New task */\n\n.task {\n    background-color: whitesmoke;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    padding: 16px;\n    border-radius: 8px;\n    width: 480px;\n}\n\n.task-item {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n}\n\n.task-item :nth-child(1) {\n    flex-basis: 80px;\n}\n\n.task-item :nth-child(2) {\n    flex-grow: 1;\n}\n\n.task input,\n.task textarea,\n.task select {\n    padding: 4px;\n    font-size: 1rem;\n}\n\n.task .buttons {\n    margin-top: auto;\n    display: flex;\n    gap: 16px;\n}\n\n.task .buttons * {\n    flex: 1;\n    padding-block:12px;\n    font-size: 1rem;\n    font-weight: bold;\n    border: none;\n    border-radius: 8px;\n}\n\n.task #delete {\n    background: tomato;\n}\n\n#delete:hover {\n    outline: 2px solid tomato;\n    background-color: white;\n    cursor: pointer;\n}\n\n.task #save-change {\n    background-color: lime;\n}\n\n#save-change:hover {\n    outline: 2px solid lime;\n    background-color: white;\n    cursor: pointer;\n}\n\n.checklist {\n    list-style: none;\n    padding-inline: 16px;\n}\n\n.checklist li {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    margin-bottom: 6px;\n}\n\n.checklist input[type=\"checkbox\"] {\n    width: 18px;\n    height: 18px;\n}\n\n.checklist input[type=\"checkbox\"]:hover {\n    cursor: pointer;\n}\n\n#new-checklist-item {\n    width: 20px;\n    height: 20px;\n    border: none;\n    background-color: #ccc;\n    border-radius: 50%;\n    font-weight: bold;\n    font-size: 16px;\n    margin-top: 16px;\n    margin-inline: 16px;\n}\n\n#new-checklist-item:hover {\n    outline: 2px solid black;\n    cursor: pointer;\n}\n\n#new-checklist-item + span {\n    color: #949494;\n}"],"sourceRoot":""}]);
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
    
        if(newTitle != "") {
            let newItem = (0,_todo_item__WEBPACK_IMPORTED_MODULE_1__["default"])(newTitle, newDesc, newDueTime);
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
        console.log("Checklist button clicked.");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUs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Q0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNibUM7QUFDQTtBQUNUO0FBQ0k7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixpREFBSTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isc0RBQVEseUVBQXlFLCtCQUErQixHQUFHLHFCQUFxQjtBQUM5SiwwQkFBMEIsc0RBQVE7QUFDbEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSwrQ0FBTTtBQUNkLFFBQVEsK0NBQU07O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNjO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbGlzdC1pdGVtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kby1pdGVtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1uYXYtd2lkdGg6IDIyMHB4O1xufVxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLyogTmF2IGJhciAqL1xuXG5uYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogdmFyKC0tbmF2LXdpZHRoKTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG5uYXYgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbm5hdiB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nLWJsb2NrOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJweDtcbn1cblxubmF2IGgzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jYWRkLW5ldy1saXN0IHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuI2FkZC1uZXctbGlzdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubmF2IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xufVxuXG5uYXYgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLyogTWFpbiAqL1xuXG5tYWluIHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1uYXYtd2lkdGgpICsgMTZweCk7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZ2FwOiAzMnB4O1xufVxuXG4vKiBUbyBkbyBsaXN0ICovXG5cbi5jdXJyZW50LWxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xufVxuXG4uY3VycmVudC1saXN0IGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbiNhZGQtbmV3LXRhc2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE2cHg7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNTZweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2FkZC1uZXctdGFzazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTGlzdCBpdGVtICovXG5cbi5saXN0LWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ubGlzdC1pdGVtID4gaDMge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4ubGlzdC1kdWUtdGltZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi5saXN0LWl0ZW0tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNHB4O1xufVxuXG4ubGlzdC1pdGVtIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgcGFkZGluZzogNHB4OyAgICBcbn1cblxuLmxpc3QtaXRlbS1kZWxldGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubGlzdC1pdGVtLWRlbGV0ZTpob3ZlciB7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHRvbWF0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxpc3QtaXRlbS12aWV3IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5saXN0LWl0ZW0tdmlldzpob3ZlciB7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGdvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4vKiBOZXcgdGFzayAqL1xuXG4udGFzayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiA0ODBweDtcbn1cblxuLnRhc2staXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbn1cblxuLnRhc2staXRlbSA6bnRoLWNoaWxkKDEpIHtcbiAgICBmbGV4LWJhc2lzOiA4MHB4O1xufVxuXG4udGFzay1pdGVtIDpudGgtY2hpbGQoMikge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLnRhc2sgaW5wdXQsXG4udGFzayB0ZXh0YXJlYSxcbi50YXNrIHNlbGVjdCB7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRhc2sgLmJ1dHRvbnMge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE2cHg7XG59XG5cbi50YXNrIC5idXR0b25zICoge1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZy1ibG9jazoxMnB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4udGFzayAjZGVsZXRlIHtcbiAgICBiYWNrZ3JvdW5kOiB0b21hdG87XG59XG5cbiNkZWxldGU6aG92ZXIge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCB0b21hdG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzayAjc2F2ZS1jaGFuZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XG59XG5cbiNzYXZlLWNoYW5nZTpob3ZlciB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGxpbWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2tsaXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctaW5saW5lOiAxNnB4O1xufVxuXG4uY2hlY2tsaXN0IGxpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uY2hlY2tsaXN0IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xufVxuXG4uY2hlY2tsaXN0IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jbmV3LWNoZWNrbGlzdC1pdGVtIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIG1hcmdpbi1pbmxpbmU6IDE2cHg7XG59XG5cbiNuZXctY2hlY2tsaXN0LWl0ZW06aG92ZXIge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNuZXctY2hlY2tsaXN0LWl0ZW0gKyBzcGFuIHtcbiAgICBjb2xvcjogIzk0OTQ5NDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQSxZQUFZOztBQUVaO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCw0QkFBNEI7SUFDNUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSxTQUFTOztBQUVUO0lBQ0ksMENBQTBDO0lBQzFDLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQSxlQUFlOztBQUVmO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQSxjQUFjOztBQUVkO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUEsYUFBYTs7QUFFYjtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbmF2LXdpZHRoOiAyMjBweDtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBOYXYgYmFyICovXFxuXFxubmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogdmFyKC0tbmF2LXdpZHRoKTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbm5hdiBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbm5hdiB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmctYmxvY2s6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG5uYXYgaDMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNhZGQtbmV3LWxpc3Qge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbiNhZGQtbmV3LWxpc3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiBhIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcXG59XFxuXFxubmF2IGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxubWFpbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLW5hdi13aWR0aCkgKyAxNnB4KTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZ2FwOiAzMnB4O1xcbn1cXG5cXG4vKiBUbyBkbyBsaXN0ICovXFxuXFxuLmN1cnJlbnQtbGlzdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5jdXJyZW50LWxpc3QgaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbiNhZGQtbmV3LXRhc2sge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTZweDtcXG4gICAgcmlnaHQ6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIuNnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA1NnB4O1xcbiAgICBoZWlnaHQ6IDU2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWRkLW5ldy10YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBMaXN0IGl0ZW0gKi9cXG5cXG4ubGlzdC1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmxpc3QtaXRlbSA+IGgzIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxufVxcblxcbi5saXN0LWR1ZS10aW1lIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLmxpc3QtaXRlbSBidXR0b24ge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgcGFkZGluZzogNHB4OyAgICBcXG59XFxuXFxuLmxpc3QtaXRlbS1kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLWRlbGV0ZTpob3ZlciB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB0b21hdG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3QtaXRlbS12aWV3IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5saXN0LWl0ZW0tdmlldzpob3ZlciB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBnb2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sYXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLyogTmV3IHRhc2sgKi9cXG5cXG4udGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTZweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB3aWR0aDogNDgwcHg7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi50YXNrLWl0ZW0gOm50aC1jaGlsZCgxKSB7XFxuICAgIGZsZXgtYmFzaXM6IDgwcHg7XFxufVxcblxcbi50YXNrLWl0ZW0gOm50aC1jaGlsZCgyKSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnRhc2sgaW5wdXQsXFxuLnRhc2sgdGV4dGFyZWEsXFxuLnRhc2sgc2VsZWN0IHtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrIC5idXR0b25zIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4udGFzayAuYnV0dG9ucyAqIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZy1ibG9jazoxMnB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnRhc2sgI2RlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQ6IHRvbWF0bztcXG59XFxuXFxuI2RlbGV0ZTpob3ZlciB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB0b21hdG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrICNzYXZlLWNoYW5nZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XFxufVxcblxcbiNzYXZlLWNoYW5nZTpob3ZlciB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBsaW1lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tsaXN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDE2cHg7XFxufVxcblxcbi5jaGVja2xpc3QgbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG5cXG4uY2hlY2tsaXN0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG4uY2hlY2tsaXN0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuZXctY2hlY2tsaXN0LWl0ZW0ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgbWFyZ2luLWlubGluZTogMTZweDtcXG59XFxuXFxuI25ldy1jaGVja2xpc3QtaXRlbTpob3ZlciB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LWNoZWNrbGlzdC1pdGVtICsgc3BhbiB7XFxuICAgIGNvbG9yOiAjOTQ5NDk0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxpc3RJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IHRvZG9JdGVtIGZyb20gXCIuL3RvZG8taXRlbVwiO1xuaW1wb3J0IGxpc3QgZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNhY2hlID0gY2FjaGVET00oKTtcbiAgICBsZXQgX2N1cnJlbnREaXNwbGF5ZWRJdGVtSWQgPSB1bmRlZmluZWQ7XG4gICAgbGV0IF9jdXJyZW50TGlzdCA9IHVuZGVmaW5lZDtcbiAgICBsZXQgX2FsbExpc3RzID0gW107XG5cbiAgICBhZGRMaXN0ZW5lcnMoKTtcblxuICAgIChmdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XG4gICAgICAgIGNhY2hlLm5ld1Rhc2tDYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgX2N1cnJlbnRMaXN0ID0gbGlzdChcIlRvIERvXCIpO1xuICAgICAgICBfYWxsTGlzdHMucHVzaChfY3VycmVudExpc3QpO1xuICAgICAgICBwb3B1bGF0ZU5hdkJhckxpc3QoKTtcbiAgICAgICAgcG9wdWxhdGVUYXNrTGlzdEZpZWxkKCk7XG5cbiAgICAgICAgLy8gUGxhY2Vob2xkZXIgZm9yIHRlc3RcbiAgICAgICAgbGV0IG5ld0l0ZW0gPSB0b2RvSXRlbShcIlBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb24gZm9yIHRoZSBwbGFjZWhvbGRlciB0YXNrLlwiLCBcIjIwMjMtMTAtMTNcIiwgW3tcIlBsYWNlaG9sZGVyIGNoZWNrIGxpc3RcIjogdHJ1ZX0sIHtcIlNlY29uZCBpdGVtXCI6IGZhbHNlfV0pO1xuICAgICAgICBsZXQgbmV3TGlzdEl0ZW0gPSBsaXN0SXRlbShuZXdJdGVtKTtcbiAgICAgICAgX2N1cnJlbnRMaXN0Lml0ZW1zLnB1c2gobmV3TGlzdEl0ZW0pO1xuICAgICAgICBjYWNoZS5jdXJyZW50TGlzdC5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbS5jb250YWluZXIpO1xuICAgIH0pKCk7XG4gICAgXG4gICAgZnVuY3Rpb24gY2FjaGVET00oKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIFxuICAgICAgICBvYmoucHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xuICAgICAgICBvYmouY3VycmVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtbGlzdFwiKTtcbiAgICAgICAgb2JqLmFkZE5ld0xpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1uZXctbGlzdFwiKTtcbiAgICAgICAgb2JqLmFkZE5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1uZXctdGFza1wiKTtcbiAgICAgICAgb2JqLm5ld1Rhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrXCIpO1xuICAgICAgICBvYmoudGFza1RpdGxlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICAgICAgICBvYmoudGFza0Rlc2NyaXB0aW9uRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICBvYmoudGFza0xpc3RGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdFwiKTtcbiAgICAgICAgb2JqLnRhc2tEYXRlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpOyAgICBcbiAgICAgICAgb2JqLmNoZWNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tsaXN0XCIpO1xuICAgICAgICBvYmouYWRkTmV3Q2hlY2tsaXN0SXRlbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWNoZWNrbGlzdC1pdGVtXCIpO1xuICAgICAgICBvYmoudGFza0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsZXRlXCIpO1xuICAgICAgICBvYmoudGFza1NhdmVDaGFuZ2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmUtY2hhbmdlXCIpO1xuICAgIFxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNhY2hlLmFkZE5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZU5ld0xpc3QpO1xuICAgICAgICBjYWNoZS5hZGROZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuQ2xlYW5UYXNrQ2FyZCk7XG4gICAgICAgIGNhY2hlLnRhc2tEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVGFza0NhcmQpO1xuICAgICAgICBjYWNoZS50YXNrU2F2ZUNoYW5nZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlU2F2ZUNoYW5nZSk7XG4gICAgICAgIGNhY2hlLmFkZE5ld0NoZWNrbGlzdEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld0NoZWNrbGlzdEl0ZW0pO1xuXG4gICAgICAgIGV2ZW50cy5vbihcInZpZXdJdGVtXCIsIG9wZW5UYXNrQ2FyZFdpdGhJbmZvKTtcbiAgICAgICAgZXZlbnRzLm9uKFwiZGVsZXRlSXRlbVwiLCBkZWxldGVUYXNrKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlbnRlcktleVRvU2F2ZUNoYW5nZXMpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBkZWxldGVLZXlUb0RlbGV0ZU9wZW5UYXNrKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gb3BlbkNsZWFuVGFza0NhcmQoKSB7XG4gICAgICAgIGNsZWFyVGFza0NhcmQoKTtcbiAgICAgICAgdGFza0NhcmRGaWVsZHNTZXR1cCgpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBvcGVuVGFza0NhcmRXaXRoSW5mbyhpZCwgaXRlbSkge1xuICAgICAgICBjbGVhclRhc2tDYXJkKCk7XG4gICAgICAgIHRhc2tDYXJkRmllbGRzU2V0dXAoKTtcbiAgICAgICAgbG9hZEl0ZW1Ub0NhcmQoaXRlbSk7XG4gICAgICAgIGxvYWRDaGVja2xpc3RUb0NhcmQoaXRlbSk7XG4gICAgICAgIFxuICAgICAgICBfY3VycmVudERpc3BsYXllZEl0ZW1JZCA9IGlkO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjbGVhclRhc2tDYXJkKCkge1xuICAgICAgICBjYWNoZS50YXNrVGl0bGVGaWVsZC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGNhY2hlLnRhc2tEZXNjcmlwdGlvbkZpZWxkLnZhbHVlID0gXCJcIjtcbiAgICAgICAgY2FjaGUudGFza0xpc3RGaWVsZC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGNhY2hlLnRhc2tEYXRlRmllbGQudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIGxldCBhbGxDaGVja0xpc3RJdGVtcyA9IGNhY2hlLmNoZWNrTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XG4gICAgICAgIGFsbENoZWNrTGlzdEl0ZW1zLmZvckVhY2goY3VyciA9PiB7XG4gICAgICAgICAgICBjYWNoZS5jaGVja0xpc3QucmVtb3ZlQ2hpbGQoY3Vycik7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBfY3VycmVudERpc3BsYXllZEl0ZW1JZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbG9hZEl0ZW1Ub0NhcmQoaXRlbSkge1xuICAgICAgICBjYWNoZS50YXNrVGl0bGVGaWVsZC52YWx1ZSA9IGl0ZW0uZ2V0VGl0bGUoKTtcbiAgICAgICAgY2FjaGUudGFza0Rlc2NyaXB0aW9uRmllbGQudmFsdWUgPSBpdGVtLmdldERlc2NyaXB0aW9uKCk7XG4gICAgICAgIGNhY2hlLnRhc2tEYXRlRmllbGQudmFsdWUgPSBpdGVtLmdldER1ZVRpbWUoKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdGFza0NhcmRGaWVsZHNTZXR1cCgpIHtcbiAgICAgICAgY2FjaGUubmV3VGFza0NhcmQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBjYWNoZS50YXNrVGl0bGVGaWVsZC5mb2N1cygpO1xuICAgICAgICBjYWNoZS50YXNrTGlzdEZpZWxkLnZhbHVlID0gX2N1cnJlbnRMaXN0LmdldE5hbWUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkQ2hlY2tsaXN0VG9DYXJkKGl0ZW0pIHtcbiAgICAgICAgbGV0IGFyciA9IGl0ZW0uZ2V0Q2hlY2tMaXN0KCk7XG4gICAgICAgIFxuICAgICAgICBhcnIuZm9yRWFjaCgoY3VycikgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbGV0IG5ld0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbGV0IG5ld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4gICAgICAgICAgICBuZXdMaS5hcHBlbmRDaGlsZChuZXdJbnB1dCk7XG4gICAgICAgICAgICBuZXdMaS5hcHBlbmRDaGlsZChuZXdMYWJlbCk7XG5cbiAgICAgICAgICAgIG5ld0lucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgICBuZXdJbnB1dC5pZCA9IE9iamVjdC5rZXlzKGN1cnIpWzBdO1xuICAgICAgICAgICAgbmV3SW5wdXQuY2hlY2tlZCA9IE9iamVjdC52YWx1ZXMoY3VycilbMF07XG4gICAgICAgICAgICBuZXdMYWJlbC5odG1sRm9yID0gT2JqZWN0LmtleXMoY3VycilbMF07XG4gICAgICAgICAgICBuZXdMYWJlbC50ZXh0Q29udGVudCA9IE9iamVjdC5rZXlzKGN1cnIpWzBdO1xuXG4gICAgICAgICAgICBjYWNoZS5jaGVja0xpc3QuaW5zZXJ0QmVmb3JlKG5ld0xpLCBjYWNoZS5hZGROZXdDaGVja2xpc3RJdGVtQnV0dG9uKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY2xvc2VUYXNrQ2FyZCgpIHtcbiAgICAgICAgaWYoX2N1cnJlbnREaXNwbGF5ZWRJdGVtSWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkZWxldGVPcGVuZWRUYXNrKCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY2FjaGUubmV3VGFza0NhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBfY3VycmVudERpc3BsYXllZEl0ZW1JZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrKGlkKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBmaW5kT3BlbmVkSXRlbShpZCk7XG5cbiAgICAgICAgcmVtb3ZlVGFza0Zyb21MaXN0KHRhcmdldCk7XG5cbiAgICAgICAgY2FjaGUuY3VycmVudExpc3QucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZGVsZXRlT3BlbmVkVGFzaygpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGZpbmRPcGVuZWRJdGVtKCk7XG5cbiAgICAgICAgcmVtb3ZlVGFza0Zyb21MaXN0KHRhcmdldCk7XG4gICAgICAgIFxuICAgICAgICBjYWNoZS5jdXJyZW50TGlzdC5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tTGlzdChpdGVtKSB7XG4gICAgICAgIGxldCBpbmRleCA9IF9jdXJyZW50TGlzdC5pdGVtcy5maW5kSW5kZXgoY3VyciA9PiBjdXJyLmlkID09IGl0ZW0uZGF0YXNldC5pZCk7XG4gICAgICAgIF9jdXJyZW50TGlzdC5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBmaW5kT3BlbmVkSXRlbShpZCkge1xuICAgICAgICBpZihpZCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlkID0gX2N1cnJlbnREaXNwbGF5ZWRJdGVtSWQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LWl0ZW1cIik7XG4gICAgXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGFsbFRhc2tzKS5maW5kKGN1cnIgPT4gY3Vyci5kYXRhc2V0LmlkID09IGlkKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaGFuZGxlU2F2ZUNoYW5nZSgpIHtcbiAgICAgICAgaWYoX2N1cnJlbnREaXNwbGF5ZWRJdGVtSWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtb2RpZnlDdXJyZW50SXRlbSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlTmV3TGlzdEl0ZW0oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vZGlmeUN1cnJlbnRJdGVtKCkge1xuICAgICAgICBjcmVhdGVOZXdMaXN0SXRlbSgpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdMaXN0SXRlbSgpIHtcbiAgICAgICAgbGV0IG5ld1RpdGxlID0gY2FjaGUudGFza1RpdGxlRmllbGQudmFsdWU7XG4gICAgICAgIGxldCBuZXdEZXNjID0gY2FjaGUudGFza0Rlc2NyaXB0aW9uRmllbGQudmFsdWU7XG4gICAgICAgIGxldCBuZXdEdWVUaW1lID0gY2FjaGUudGFza0RhdGVGaWVsZC52YWx1ZTtcbiAgICBcbiAgICAgICAgaWYobmV3VGl0bGUgIT0gXCJcIikge1xuICAgICAgICAgICAgbGV0IG5ld0l0ZW0gPSB0b2RvSXRlbShuZXdUaXRsZSwgbmV3RGVzYywgbmV3RHVlVGltZSk7XG4gICAgICAgICAgICBsZXQgbmV3TGlzdEl0ZW0gPSBsaXN0SXRlbShuZXdJdGVtKTtcblxuICAgICAgICAgICAgYWRkTmV3TGlzdEl0ZW1Ub1NlbGVjdGVkTGlzdChuZXdMaXN0SXRlbSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY2xvc2VUYXNrQ2FyZCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE5ld0xpc3RJdGVtVG9TZWxlY3RlZExpc3QobGlzdEl0ZW0pIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkTGlzdCA9IGNhY2hlLnRhc2tMaXN0RmllbGQudmFsdWU7XG4gICAgICAgIGxldCBsaXN0ID0gX2FsbExpc3RzLmZpbmQoY3VyciA9PiBjdXJyLmdldE5hbWUoKSA9PSBzZWxlY3RlZExpc3QpO1xuXG4gICAgICAgIGxpc3QuaXRlbXMucHVzaChsaXN0SXRlbSk7XG4gICAgICAgIGxvYWRDdXJyZW50TGlzdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlTmF2QmFyTGlzdCgpIHtcbiAgICAgICAgY2xlYXJOYXZCYXIoKTtcblxuICAgICAgICBfYWxsTGlzdHMuZm9yRWFjaChjdXJyID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGxldCBuZXdBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgICAgICAgICAgIG5ld0xpLmFwcGVuZENoaWxkKG5ld0EpO1xuICAgICAgICAgICAgbmV3TGkuY2xhc3NMaXN0LmFkZChcInRvLWRvLWxpc3RcIik7XG5cbiAgICAgICAgICAgIG5ld0EuaHJlZiA9IFwiI1wiO1xuICAgICAgICAgICAgbmV3QS50ZXh0Q29udGVudCA9IGN1cnIuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgbmV3QS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2V0Q3VycmVudExpc3QuYmluZChudWxsLCBjdXJyLmdldE5hbWUoKSkpO1xuXG4gICAgICAgICAgICBjYWNoZS5wcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobmV3TGkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyTmF2QmFyKCkge1xuICAgICAgICBsZXQgYWxsID0gY2FjaGUucHJvamVjdHNMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG8tZG8tbGlzdFwiKTtcblxuICAgICAgICBhbGwuZm9yRWFjaChjdXJyID0+IHtcbiAgICAgICAgICAgIGNhY2hlLnByb2plY3RzTGlzdC5yZW1vdmVDaGlsZChjdXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50TGlzdChuZXdMaXN0TmFtZSkge1xuICAgICAgICBsZXQgdG9Mb2FkID0gX2FsbExpc3RzLmZpbmQoY3VyciA9PiBjdXJyLmdldE5hbWUoKSA9PSBuZXdMaXN0TmFtZSk7XG4gICAgICAgIF9jdXJyZW50TGlzdCA9IHRvTG9hZDtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtbmFtZVwiKS50ZXh0Q29udGVudCA9IG5ld0xpc3ROYW1lO1xuXG4gICAgICAgIGxvYWRDdXJyZW50TGlzdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRDdXJyZW50TGlzdCgpIHtcbiAgICAgICAgY2xlYXJBbGxGcm9tQ3VycmVudExpc3QoKTtcblxuICAgICAgICBfY3VycmVudExpc3QuaXRlbXMuZm9yRWFjaChjdXJyID0+IHtcbiAgICAgICAgICAgIGNhY2hlLmN1cnJlbnRMaXN0LmFwcGVuZENoaWxkKGN1cnIuY29udGFpbmVyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckFsbEZyb21DdXJyZW50TGlzdCgpIHtcbiAgICAgICAgbGV0IGFsbEl0ZW1zID0gY2FjaGUuY3VycmVudExpc3QucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LWl0ZW1cIik7XG5cbiAgICAgICAgYWxsSXRlbXMuZm9yRWFjaChjdXJyID0+IHtcbiAgICAgICAgICAgIGNhY2hlLmN1cnJlbnRMaXN0LnJlbW92ZUNoaWxkKGN1cnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld0xpc3QoKSB7XG4gICAgICAgIGxldCBsaXN0TmFtZSA9IHByb21wdChcIkxpc3QgTmFtZT9cIiwgXCJcIik7XG4gICAgICAgIGxldCBuZXdMaXN0ID0gbGlzdChsaXN0TmFtZSk7XG4gICAgICAgIF9hbGxMaXN0cy5wdXNoKG5ld0xpc3QpO1xuXG4gICAgICAgIHBvcHVsYXRlTmF2QmFyTGlzdCgpO1xuICAgICAgICBwb3B1bGF0ZVRhc2tMaXN0RmllbGQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbnRlcktleVRvU2F2ZUNoYW5nZXMoZSkge1xuICAgICAgICBpZihlLmNvZGUgPT0gXCJFbnRlclwiICYmIGNhY2hlLm5ld1Rhc2tDYXJkLnN0eWxlLmRpc3BsYXkgPT0gXCJmbGV4XCIpIHtcbiAgICAgICAgICAgIGNyZWF0ZU5ld0xpc3RJdGVtKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVLZXlUb0RlbGV0ZU9wZW5UYXNrKGUpIHtcbiAgICAgICAgaWYoZS5jb2RlID09IFwiRGVsZXRlXCIgJiYgY2FjaGUubmV3VGFza0NhcmQuc3R5bGUuZGlzcGxheSA9PSBcImZsZXhcIikge1xuICAgICAgICAgICAgY2xvc2VUYXNrQ2FyZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVUYXNrTGlzdEZpZWxkKCkge1xuICAgICAgICBjbGVhckFsbFRhc2tMaXN0RmllbGQoKTtcblxuICAgICAgICBfYWxsTGlzdHMuZm9yRWFjaChjdXJyID0+IHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjdXJyLmdldE5hbWUoKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGN1cnIuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgY2FjaGUudGFza0xpc3RGaWVsZC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNhY2hlLnRhc2tMaXN0RmllbGQudmFsdWUgPSBcIlRvIERvXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJBbGxUYXNrTGlzdEZpZWxkKCkge1xuICAgICAgICBjYWNoZS50YXNrTGlzdEZpZWxkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTmV3Q2hlY2tsaXN0SXRlbSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGVja2xpc3QgYnV0dG9uIGNsaWNrZWQuXCIpO1xuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyOyIsImNvbnN0IGV2ZW50cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgbW9kdWxlID0ge307XG5cbiAgICBjb25zdCBfZXZlbnRzID0ge307XG4gICAgbW9kdWxlLm9uID0gKGV2ZW50TmFtZSwgZm4pID0+IHtcbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdID0gX2V2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XG4gICAgfTtcbiAgICBtb2R1bGUub2ZmID0gKGV2ZW50TmFtZSwgZm4pID0+IHtcbiAgICAgICAgaWYoX2V2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoX2V2ZW50c1tldmVudE5hbWVdW2ldID09PSBmbikge1xuICAgICAgICAgICAgICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBtb2R1bGUuZW1pdCA9IChldmVudE5hbWUsIC4uLmRhdGEpID0+IHtcbiAgICAgICAgaWYoX2V2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICAgICAgZm4oLi4uZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbW9kdWxlO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmNvbnN0IGxpc3RJdGVtID0gKHRvZG9JdGVtKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBjcmVhdGVFbGVtZW50cygpO1xuICAgIGNvbnN0IGl0ZW0gPSB0b2RvSXRlbTtcbiAgICBsZXQgaWQgPSBgJHtpdGVtLmdldFRpdGxlKCl9ICR7aXRlbS5nZXREZXNjcmlwdGlvbigpfWA7XG5cbiAgICBhZGRDbGFzc2VzQW5kRGF0YSgpO1xuICAgIHBhcmVudENoaWxkU3RydWN0dXJlKCk7XG4gICAgYWRkVGV4dCgpO1xuICAgIGFkZExpc3RlbmVyc1RvQnV0dG9ucygpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICBcbiAgICAgICAgb2JqLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG9iai50aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgb2JqLmR1ZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgb2JqLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG9iai5idXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvYmouZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgb2JqLnZpZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIFxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGRDbGFzc2VzQW5kRGF0YSgpIHtcbiAgICAgICAgZWxlbWVudHMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW1cIik7XG4gICAgICAgIGVsZW1lbnRzLmNvbnRhaW5lci5kYXRhc2V0LmlkID0gaWQ7XG4gICAgXG4gICAgICAgIGVsZW1lbnRzLnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW0tdGl0bGVcIik7XG4gICAgICAgIGVsZW1lbnRzLmR1ZVRpbWUuY2xhc3NMaXN0LmFkZChcImxpc3QtZHVlLXRpbWVcIik7XG4gICAgICAgIGVsZW1lbnRzLmRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW0tZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLWJ1dHRvbnNcIik7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLWRlbGV0ZVwiKTtcbiAgICAgICAgZWxlbWVudHMudmlld0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLXZpZXdcIik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHBhcmVudENoaWxkU3RydWN0dXJlKCkge1xuICAgICAgICBlbGVtZW50cy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMudGl0bGUpO1xuICAgICAgICBlbGVtZW50cy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMuZGVzY3JpcHRpb24pO1xuICAgICAgICBlbGVtZW50cy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50cy5kZWxldGVCdXR0b24pO1xuICAgICAgICBlbGVtZW50cy5idXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMudmlld0J1dHRvbik7XG4gICAgICAgIGVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50cy5kdWVUaW1lKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkVGV4dCgpIHtcbiAgICAgICAgZWxlbWVudHMudGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLmdldFRpdGxlKCk7XG4gICAgICAgIGVsZW1lbnRzLmR1ZVRpbWUudGV4dENvbnRlbnQgPSBjYWxjdWxhdGVUaW1lVG9EdWVEYXRlSW5EYXlzKCk7XG4gICAgICAgIGVsZW1lbnRzLmRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICBlbGVtZW50cy5kZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICBlbGVtZW50cy52aWV3QnV0dG9uLnRleHRDb250ZW50ID0gXCJWaWV3XCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZVRvRHVlRGF0ZUluRGF5cygpIHtcbiAgICAgICAgaWYoaXRlbS5nZXREdWVUaW1lKCkgPT0gXCJcIikgcmV0dXJuIFwiXCI7XG5cbiAgICAgICAgbGV0IGR1ZURhdGUgPSBuZXcgRGF0ZShpdGVtLmdldER1ZVRpbWUoKSk7XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBkaWZmID0gZHVlRGF0ZS5nZXRUaW1lKCkgLSB0b2RheS5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBkaWZmSW5EYXlzID0gZGlmZiAvICgxMDAwICogMzYwMCAqIDI0KTtcblxuICAgICAgICBpZihkaWZmSW5EYXlzIDwgMCkgZWxlbWVudHMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsYXRlXCIpO1xuXG4gICAgICAgIHJldHVybiBgRHVlIFRpbWU6ICR7ZGlmZkluRGF5cy50b0ZpeGVkKDEpfSBkYXlzYDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzVG9CdXR0b25zKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVNlbGYpO1xuICAgICAgICBlbGVtZW50cy52aWV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5U2VsZik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRlbGV0ZVNlbGYoKSB7XG4gICAgICAgIGV2ZW50cy5lbWl0KFwiZGVsZXRlSXRlbVwiLCBpZCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRpc3BsYXlTZWxmKCkge1xuICAgICAgICBldmVudHMuZW1pdChcInZpZXdJdGVtXCIsIGlkLCBpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250YWluZXI6IGVsZW1lbnRzLmNvbnRhaW5lcixcbiAgICAgICAgaXRlbSxcbiAgICAgICAgaWRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RJdGVtOyIsImNvbnN0IGxpc3QgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgbGV0IF9uYW1lID0gbmFtZTtcblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBfbmFtZTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW1zLFxuICAgICAgICBnZXROYW1lXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0OyIsImNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlVGltZSA9IFwiXCIsIGNoZWNrTGlzdCA9IFtdKSA9PiB7XG4gICAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICAgIGxldCBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBsZXQgX2R1ZVRpbWUgPSBkdWVUaW1lOyBcbiAgICBsZXQgX2NoZWNrTGlzdCA9IGNoZWNrTGlzdDtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gX3RpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gX2Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldER1ZVRpbWUgPSAoKSA9PiBfZHVlVGltZTtcbiAgICBjb25zdCBnZXRDaGVja0xpc3QgPSAoKSA9PiBfY2hlY2tMaXN0O1xuXG4gICAgZnVuY3Rpb24gYWRkVG9DaGVja0xpc3QodG9BZGQpIHtcbiAgICAgICAgaWYodHlwZW9mIHRvQWRkICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZFRvQ2hlY2tMaXN0IG11c3QgYmUgYW4gb2JqZWN0XCIpOyBcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcblxuICAgICAgICBfY2hlY2tMaXN0LnB1c2godG9BZGQpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBnZXREZXNjcmlwdGlvbixcbiAgICAgICAgZ2V0RHVlVGltZSxcbiAgICAgICAgZ2V0Q2hlY2tMaXN0LFxuICAgICAgICBhZGRUb0NoZWNrTGlzdFxuICAgIH1cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9JdGVtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgdG9kb0l0ZW0gZnJvbSBcIi4vdG9kby1pdGVtXCI7XG5pbXBvcnQgbGlzdEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=