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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUs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Q0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNibUM7QUFDQTtBQUNUO0FBQ0k7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixpREFBSTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isc0RBQVEseUVBQXlFLCtCQUErQixHQUFHLHFCQUFxQjtBQUM5SiwwQkFBMEIsc0RBQVE7QUFDbEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSwrQ0FBTTtBQUNkLFFBQVEsK0NBQU07O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQVE7QUFDbEMsOEJBQThCLHNEQUFROztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFJO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDOVVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtCQUErQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVELGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQzdCUzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQixFQUFFLHNCQUFzQjs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQU07QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUN6RnZCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDWm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7O1VDN0J2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2M7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9saXN0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLW5hdi13aWR0aDogMjIwcHg7XG59XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBOYXYgYmFyICovXG5cbm5hdiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiB2YXIoLS1uYXYtd2lkdGgpO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbm5hdiBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxubmF2IHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctYmxvY2s6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnB4O1xufVxuXG5uYXYgaDMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNhZGQtbmV3LWxpc3Qge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4jYWRkLW5ldy1saXN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5uYXYgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogNHB4IDE2cHg7XG59XG5cbm5hdiBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4vKiBNYWluICovXG5cbm1haW4ge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLW5hdi13aWR0aCkgKyAxNnB4KTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBnYXA6IDMycHg7XG59XG5cbi8qIFRvIGRvIGxpc3QgKi9cblxuLmN1cnJlbnQtbGlzdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0cHg7XG59XG5cbi5jdXJyZW50LWxpc3QgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuI2FkZC1uZXctdGFzayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTZweDtcbiAgICByaWdodDogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIuNnJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA1NnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jYWRkLW5ldy10YXNrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBMaXN0IGl0ZW0gKi9cblxuLmxpc3QtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5saXN0LWl0ZW0gPiBoMyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5saXN0LWR1ZS10aW1lIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLmxpc3QtaXRlbS1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA0cHg7XG59XG5cbi5saXN0LWl0ZW0gYnV0dG9uIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBwYWRkaW5nOiA0cHg7ICAgIFxufVxuXG4ubGlzdC1pdGVtLWRlbGV0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5saXN0LWl0ZW0tZGVsZXRlOmhvdmVyIHtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdG9tYXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGlzdC1pdGVtLXZpZXcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmxpc3QtaXRlbS12aWV3OmhvdmVyIHtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgZ29sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG59XG5cbi8qIE5ldyB0YXNrICovXG5cbi50YXNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDQ4MHB4O1xufVxuXG4udGFzay1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xufVxuXG4udGFzay1pdGVtIDpudGgtY2hpbGQoMSkge1xuICAgIGZsZXgtYmFzaXM6IDgwcHg7XG59XG5cbi50YXNrLWl0ZW0gOm50aC1jaGlsZCgyKSB7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4udGFzayBpbnB1dCxcbi50YXNrIHRleHRhcmVhLFxuLnRhc2sgc2VsZWN0IHtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGFzayAuYnV0dG9ucyB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTZweDtcbn1cblxuLnRhc2sgLmJ1dHRvbnMgKiB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nLWJsb2NrOjEycHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi50YXNrICNkZWxldGUge1xuICAgIGJhY2tncm91bmQ6IHRvbWF0bztcbn1cblxuI2RlbGV0ZTpob3ZlciB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHRvbWF0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrICNzYXZlLWNoYW5nZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGltZTtcbn1cblxuI3NhdmUtY2hhbmdlOmhvdmVyIHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgbGltZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGVja2xpc3Qge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1pbmxpbmU6IDE2cHg7XG59XG5cbi5jaGVja2xpc3QgbGkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5jaGVja2xpc3QgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5jaGVja2xpc3QgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNuZXctY2hlY2tsaXN0LWl0ZW0ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLWlubGluZTogMTZweDtcbn1cblxuI25ldy1jaGVja2xpc3QtaXRlbTpob3ZlciB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI25ldy1jaGVja2xpc3QtaXRlbSArIHNwYW4ge1xuICAgIGNvbG9yOiAjOTQ5NDk0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBLFlBQVk7O0FBRVo7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLDRCQUE0QjtJQUM1QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFF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b290IHtcXG4gICAgLS1uYXYtd2lkdGg6IDIyMHB4O1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIE5hdiBiYXIgKi9cXG5cXG5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiB2YXIoLS1uYXYtd2lkdGgpO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG59XFxuXFxubmF2IGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxubmF2IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZy1ibG9jazogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbm5hdiBoMyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2FkZC1uZXctbGlzdCB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuI2FkZC1uZXctbGlzdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2IGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xcbn1cXG5cXG5uYXYgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG5tYWluIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tbmF2LXdpZHRoKSArIDE2cHgpO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBnYXA6IDMycHg7XFxufVxcblxcbi8qIFRvIGRvIGxpc3QgKi9cXG5cXG4uY3VycmVudC1saXN0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLmN1cnJlbnQtbGlzdCBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuI2FkZC1uZXctdGFzayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxNnB4O1xcbiAgICByaWdodDogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDU2cHg7XFxuICAgIGhlaWdodDogNTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNhZGQtbmV3LXRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIExpc3QgaXRlbSAqL1xcblxcbi5saXN0LWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtID4gaDMge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXG59XFxuXFxuLmxpc3QtZHVlLXRpbWUge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxufVxcblxcbi5saXN0LWl0ZW0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7ICAgIFxcbn1cXG5cXG4ubGlzdC1pdGVtLWRlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5saXN0LWl0ZW0tZGVsZXRlOmhvdmVyIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHRvbWF0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1pdGVtLXZpZXcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmxpc3QtaXRlbS12aWV3OmhvdmVyIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGdvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxhdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbn1cXG5cXG4vKiBOZXcgdGFzayAqL1xcblxcbi50YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHdpZHRoOiA0ODBweDtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLnRhc2staXRlbSA6bnRoLWNoaWxkKDEpIHtcXG4gICAgZmxleC1iYXNpczogODBweDtcXG59XFxuXFxuLnRhc2staXRlbSA6bnRoLWNoaWxkKDIpIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4udGFzayBpbnB1dCxcXG4udGFzayB0ZXh0YXJlYSxcXG4udGFzayBzZWxlY3Qge1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2sgLmJ1dHRvbnMge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi50YXNrIC5idXR0b25zICoge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nLWJsb2NrOjEycHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4udGFzayAjZGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZDogdG9tYXRvO1xcbn1cXG5cXG4jZGVsZXRlOmhvdmVyIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHRvbWF0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2sgI3NhdmUtY2hhbmdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGltZTtcXG59XFxuXFxuI3NhdmUtY2hhbmdlOmhvdmVyIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGxpbWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja2xpc3Qge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nLWlubGluZTogMTZweDtcXG59XFxuXFxuLmNoZWNrbGlzdCBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbi5jaGVja2xpc3QgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxufVxcblxcbi5jaGVja2xpc3QgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25ldy1jaGVja2xpc3QtaXRlbSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICBtYXJnaW4taW5saW5lOiAxNnB4O1xcbn1cXG5cXG4jbmV3LWNoZWNrbGlzdC1pdGVtOmhvdmVyIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuZXctY2hlY2tsaXN0LWl0ZW0gKyBzcGFuIHtcXG4gICAgY29sb3I6ICM5NDk0OTQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbGlzdEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQgdG9kb0l0ZW0gZnJvbSBcIi4vdG9kby1pdGVtXCI7XG5pbXBvcnQgbGlzdCBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgY2FjaGUgPSBjYWNoZURPTSgpO1xuICAgIGxldCBfY3VycmVudERpc3BsYXllZEl0ZW1JZCA9IHVuZGVmaW5lZDtcbiAgICBsZXQgX2N1cnJlbnRMaXN0ID0gdW5kZWZpbmVkO1xuICAgIGxldCBfYWxsTGlzdHMgPSBbXTtcblxuICAgIGFkZExpc3RlbmVycygpO1xuXG4gICAgKGZ1bmN0aW9uIGluaXRpYWxQYWdlTG9hZCgpIHtcbiAgICAgICAgY2FjaGUubmV3VGFza0NhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBfY3VycmVudExpc3QgPSBsaXN0KFwiVG8gRG9cIik7XG4gICAgICAgIF9hbGxMaXN0cy5wdXNoKF9jdXJyZW50TGlzdCk7XG4gICAgICAgIHBvcHVsYXRlTmF2QmFyTGlzdCgpO1xuICAgICAgICBwb3B1bGF0ZVRhc2tMaXN0RmllbGQoKTtcblxuICAgICAgICAvLyBQbGFjZWhvbGRlciBmb3IgdGVzdFxuICAgICAgICBsZXQgbmV3SXRlbSA9IHRvZG9JdGVtKFwiUGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvbiBmb3IgdGhlIHBsYWNlaG9sZGVyIHRhc2suXCIsIFwiMjAyMy0xMC0xM1wiLCBbe1wiUGxhY2Vob2xkZXIgY2hlY2sgbGlzdFwiOiB0cnVlfSwge1wiU2Vjb25kIGl0ZW1cIjogZmFsc2V9XSk7XG4gICAgICAgIGxldCBuZXdMaXN0SXRlbSA9IGxpc3RJdGVtKG5ld0l0ZW0pO1xuICAgICAgICBfY3VycmVudExpc3QuaXRlbXMucHVzaChuZXdMaXN0SXRlbSk7XG4gICAgICAgIGNhY2hlLmN1cnJlbnRMaXN0LmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtLmNvbnRhaW5lcik7XG4gICAgfSkoKTtcbiAgICBcbiAgICBmdW5jdGlvbiBjYWNoZURPTSgpIHtcbiAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgXG4gICAgICAgIG9iai5wcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIik7XG4gICAgICAgIG9iai5jdXJyZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1saXN0XCIpO1xuICAgICAgICBvYmouYWRkTmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLW5ldy1saXN0XCIpO1xuICAgICAgICBvYmouYWRkTmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLW5ldy10YXNrXCIpO1xuICAgICAgICBvYmoubmV3VGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tcIik7XG4gICAgICAgIG9iai50YXNrVGl0bGVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgICAgIG9iai50YXNrRGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG4gICAgICAgIG9iai50YXNrTGlzdEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0XCIpO1xuICAgICAgICBvYmoudGFza0RhdGVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIik7ICAgIFxuICAgICAgICBvYmouY2hlY2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVja2xpc3RcIik7XG4gICAgICAgIG9iai5hZGROZXdDaGVja2xpc3RJdGVtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctY2hlY2tsaXN0LWl0ZW1cIik7XG4gICAgICAgIG9iai50YXNrRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWxldGVcIik7XG4gICAgICAgIG9iai50YXNrU2F2ZUNoYW5nZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZS1jaGFuZ2VcIik7XG4gICAgXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICAgICAgY2FjaGUuYWRkTmV3TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTmV3TGlzdCk7XG4gICAgICAgIGNhY2hlLmFkZE5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5DbGVhblRhc2tDYXJkKTtcbiAgICAgICAgY2FjaGUudGFza0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUYXNrQ2FyZCk7XG4gICAgICAgIGNhY2hlLnRhc2tTYXZlQ2hhbmdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTYXZlQ2hhbmdlKTtcbiAgICAgICAgY2FjaGUuYWRkTmV3Q2hlY2tsaXN0SXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkTmV3Q2hlY2tsaXN0SXRlbSk7XG5cbiAgICAgICAgZXZlbnRzLm9uKFwidmlld0l0ZW1cIiwgb3BlblRhc2tDYXJkV2l0aEluZm8pO1xuICAgICAgICBldmVudHMub24oXCJkZWxldGVJdGVtXCIsIGRlbGV0ZVRhc2spO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGVudGVyS2V5VG9TYXZlQ2hhbmdlcyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGRlbGV0ZUtleVRvRGVsZXRlT3BlblRhc2spO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBvcGVuQ2xlYW5UYXNrQ2FyZCgpIHtcbiAgICAgICAgY2xlYXJUYXNrQ2FyZCgpO1xuICAgICAgICB0YXNrQ2FyZEZpZWxkc1NldHVwKCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIG9wZW5UYXNrQ2FyZFdpdGhJbmZvKGlkLCBpdGVtKSB7XG4gICAgICAgIGNsZWFyVGFza0NhcmQoKTtcbiAgICAgICAgdGFza0NhcmRGaWVsZHNTZXR1cCgpO1xuICAgICAgICBsb2FkSXRlbVRvQ2FyZChpdGVtKTtcbiAgICAgICAgbG9hZENoZWNrbGlzdFRvQ2FyZChpdGVtKTtcbiAgICAgICAgXG4gICAgICAgIF9jdXJyZW50RGlzcGxheWVkSXRlbUlkID0gaWQ7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNsZWFyVGFza0NhcmQoKSB7XG4gICAgICAgIGNhY2hlLnRhc2tUaXRsZUZpZWxkLnZhbHVlID0gXCJcIjtcbiAgICAgICAgY2FjaGUudGFza0Rlc2NyaXB0aW9uRmllbGQudmFsdWUgPSBcIlwiO1xuICAgICAgICBjYWNoZS50YXNrTGlzdEZpZWxkLnZhbHVlID0gXCJcIjtcbiAgICAgICAgY2FjaGUudGFza0RhdGVGaWVsZC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgbGV0IGFsbENoZWNrTGlzdEl0ZW1zID0gY2FjaGUuY2hlY2tMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcbiAgICAgICAgYWxsQ2hlY2tMaXN0SXRlbXMuZm9yRWFjaChjdXJyID0+IHtcbiAgICAgICAgICAgIGNhY2hlLmNoZWNrTGlzdC5yZW1vdmVDaGlsZChjdXJyKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIF9jdXJyZW50RGlzcGxheWVkSXRlbUlkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBsb2FkSXRlbVRvQ2FyZChpdGVtKSB7XG4gICAgICAgIGNhY2hlLnRhc2tUaXRsZUZpZWxkLnZhbHVlID0gaXRlbS5nZXRUaXRsZSgpO1xuICAgICAgICBjYWNoZS50YXNrRGVzY3JpcHRpb25GaWVsZC52YWx1ZSA9IGl0ZW0uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgY2FjaGUudGFza0RhdGVGaWVsZC52YWx1ZSA9IGl0ZW0uZ2V0RHVlVGltZSgpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB0YXNrQ2FyZEZpZWxkc1NldHVwKCkge1xuICAgICAgICBjYWNoZS5uZXdUYXNrQ2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGNhY2hlLnRhc2tUaXRsZUZpZWxkLmZvY3VzKCk7XG4gICAgICAgIGNhY2hlLnRhc2tMaXN0RmllbGQudmFsdWUgPSBfY3VycmVudExpc3QuZ2V0TmFtZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRDaGVja2xpc3RUb0NhcmQoaXRlbSkge1xuICAgICAgICBjbGVhckFsbENoZWNrbGlzdEl0ZW1zKCk7XG5cbiAgICAgICAgbGV0IGFyciA9IGl0ZW0uZ2V0Q2hlY2tMaXN0KCk7XG4gICAgICAgIFxuICAgICAgICBhcnIuZm9yRWFjaCgoY3VycikgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbGV0IG5ld0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbGV0IG5ld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4gICAgICAgICAgICBuZXdMaS5hcHBlbmRDaGlsZChuZXdJbnB1dCk7XG4gICAgICAgICAgICBuZXdMaS5hcHBlbmRDaGlsZChuZXdMYWJlbCk7XG5cbiAgICAgICAgICAgIG5ld0lucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgICBuZXdJbnB1dC5pZCA9IE9iamVjdC5rZXlzKGN1cnIpWzBdO1xuICAgICAgICAgICAgbmV3SW5wdXQuY2hlY2tlZCA9IE9iamVjdC52YWx1ZXMoY3VycilbMF07XG4gICAgICAgICAgICBuZXdMYWJlbC5odG1sRm9yID0gT2JqZWN0LmtleXMoY3VycilbMF07XG4gICAgICAgICAgICBuZXdMYWJlbC50ZXh0Q29udGVudCA9IE9iamVjdC5rZXlzKGN1cnIpWzBdO1xuXG4gICAgICAgICAgICBjYWNoZS5jaGVja0xpc3QuaW5zZXJ0QmVmb3JlKG5ld0xpLCBjYWNoZS5hZGROZXdDaGVja2xpc3RJdGVtQnV0dG9uKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckFsbENoZWNrbGlzdEl0ZW1zKCkge1xuICAgICAgICBsZXQgYWxsSXRlbXMgPSBjYWNoZS5jaGVja0xpc3QucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xuXG4gICAgICAgIGFsbEl0ZW1zLmZvckVhY2goY3VyciA9PiB7XG4gICAgICAgICAgICBjYWNoZS5jaGVja0xpc3QucmVtb3ZlQ2hpbGQoY3Vycik7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNsb3NlVGFza0NhcmQoKSB7XG4gICAgICAgIGlmKF9jdXJyZW50RGlzcGxheWVkSXRlbUlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVsZXRlT3BlbmVkVGFzaygpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNhY2hlLm5ld1Rhc2tDYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgX2N1cnJlbnREaXNwbGF5ZWRJdGVtSWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzayhpZCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZmluZE9wZW5lZEl0ZW0oaWQpO1xuXG4gICAgICAgIHJlbW92ZVRhc2tGcm9tTGlzdCh0YXJnZXQpO1xuXG4gICAgICAgIGNhY2hlLmN1cnJlbnRMaXN0LnJlbW92ZUNoaWxkKHRhcmdldCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRlbGV0ZU9wZW5lZFRhc2soKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBmaW5kT3BlbmVkSXRlbSgpO1xuXG4gICAgICAgIHJlbW92ZVRhc2tGcm9tTGlzdCh0YXJnZXQpO1xuICAgICAgICBcbiAgICAgICAgY2FjaGUuY3VycmVudExpc3QucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrRnJvbUxpc3QoaXRlbSkge1xuICAgICAgICBsZXQgaW5kZXggPSBfY3VycmVudExpc3QuaXRlbXMuZmluZEluZGV4KGN1cnIgPT4gY3Vyci5pZCA9PSBpdGVtLmRhdGFzZXQuaWQpO1xuICAgICAgICBfY3VycmVudExpc3QuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZmluZE9wZW5lZEl0ZW0oaWQpIHtcbiAgICAgICAgaWYoaWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZCA9IF9jdXJyZW50RGlzcGxheWVkSXRlbUlkO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1pdGVtXCIpO1xuICAgIFxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxUYXNrcykuZmluZChjdXJyID0+IGN1cnIuZGF0YXNldC5pZCA9PSBpZCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGhhbmRsZVNhdmVDaGFuZ2UoKSB7XG4gICAgICAgIGlmKF9jdXJyZW50RGlzcGxheWVkSXRlbUlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbW9kaWZ5Q3VycmVudEl0ZW0oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNyZWF0ZU5ld0xpc3RJdGVtKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb2RpZnlDdXJyZW50SXRlbSgpIHtcbiAgICAgICAgY3JlYXRlTmV3TGlzdEl0ZW0oKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3TGlzdEl0ZW0oKSB7XG4gICAgICAgIGxldCBuZXdUaXRsZSA9IGNhY2hlLnRhc2tUaXRsZUZpZWxkLnZhbHVlO1xuICAgICAgICBsZXQgbmV3RGVzYyA9IGNhY2hlLnRhc2tEZXNjcmlwdGlvbkZpZWxkLnZhbHVlO1xuICAgICAgICBsZXQgbmV3RHVlVGltZSA9IGNhY2hlLnRhc2tEYXRlRmllbGQudmFsdWU7XG4gICAgICAgIGxldCBuZXdDaGVja2xpc3QgPSBnZXRDaGVja2xpc3RGcm9tQ2FyZCgpO1xuICAgIFxuICAgICAgICBpZihuZXdUaXRsZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBsZXQgbmV3SXRlbSA9IHRvZG9JdGVtKG5ld1RpdGxlLCBuZXdEZXNjLCBuZXdEdWVUaW1lLCBuZXdDaGVja2xpc3QpO1xuICAgICAgICAgICAgbGV0IG5ld0xpc3RJdGVtID0gbGlzdEl0ZW0obmV3SXRlbSk7XG5cbiAgICAgICAgICAgIGFkZE5ld0xpc3RJdGVtVG9TZWxlY3RlZExpc3QobmV3TGlzdEl0ZW0pO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNsb3NlVGFza0NhcmQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGROZXdMaXN0SXRlbVRvU2VsZWN0ZWRMaXN0KGxpc3RJdGVtKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZExpc3QgPSBjYWNoZS50YXNrTGlzdEZpZWxkLnZhbHVlO1xuICAgICAgICBsZXQgbGlzdCA9IF9hbGxMaXN0cy5maW5kKGN1cnIgPT4gY3Vyci5nZXROYW1lKCkgPT0gc2VsZWN0ZWRMaXN0KTtcblxuICAgICAgICBsaXN0Lml0ZW1zLnB1c2gobGlzdEl0ZW0pO1xuICAgICAgICBsb2FkQ3VycmVudExpc3QoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDaGVja2xpc3RGcm9tQ2FyZCgpIHtcbiAgICAgICAgbGV0IGNoZWNrbGlzdCA9IFtdO1xuICAgICAgICBsZXQgYWxsSXRlbXMgPSBjYWNoZS5jaGVja0xpc3QucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xuXG4gICAgICAgIGFsbEl0ZW1zLmZvckVhY2goY3VyciA9PiB7XG4gICAgICAgICAgICBsZXQga2V5ID0gY3Vyci5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBjdXJyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5jaGVja2VkO1xuICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGNoZWNrbGlzdC5wdXNoKG9iaik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGNoZWNrbGlzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZU5hdkJhckxpc3QoKSB7XG4gICAgICAgIGNsZWFyTmF2QmFyKCk7XG5cbiAgICAgICAgX2FsbExpc3RzLmZvckVhY2goY3VyciA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBsZXQgbmV3QSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgICAgICAgICBuZXdMaS5hcHBlbmRDaGlsZChuZXdBKTtcbiAgICAgICAgICAgIG5ld0xpLmNsYXNzTGlzdC5hZGQoXCJ0by1kby1saXN0XCIpO1xuXG4gICAgICAgICAgICBuZXdBLmhyZWYgPSBcIiNcIjtcbiAgICAgICAgICAgIG5ld0EudGV4dENvbnRlbnQgPSBjdXJyLmdldE5hbWUoKTtcbiAgICAgICAgICAgIG5ld0EuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNldEN1cnJlbnRMaXN0LmJpbmQobnVsbCwgY3Vyci5nZXROYW1lKCkpKTtcblxuICAgICAgICAgICAgY2FjaGUucHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG5ld0xpKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhck5hdkJhcigpIHtcbiAgICAgICAgbGV0IGFsbCA9IGNhY2hlLnByb2plY3RzTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvLWRvLWxpc3RcIik7XG5cbiAgICAgICAgYWxsLmZvckVhY2goY3VyciA9PiB7XG4gICAgICAgICAgICBjYWNoZS5wcm9qZWN0c0xpc3QucmVtb3ZlQ2hpbGQoY3Vycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudExpc3QobmV3TGlzdE5hbWUpIHtcbiAgICAgICAgbGV0IHRvTG9hZCA9IF9hbGxMaXN0cy5maW5kKGN1cnIgPT4gY3Vyci5nZXROYW1lKCkgPT0gbmV3TGlzdE5hbWUpO1xuICAgICAgICBfY3VycmVudExpc3QgPSB0b0xvYWQ7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LW5hbWVcIikudGV4dENvbnRlbnQgPSBuZXdMaXN0TmFtZTtcblxuICAgICAgICBsb2FkQ3VycmVudExpc3QoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkQ3VycmVudExpc3QoKSB7XG4gICAgICAgIGNsZWFyQWxsRnJvbUN1cnJlbnRMaXN0KCk7XG5cbiAgICAgICAgX2N1cnJlbnRMaXN0Lml0ZW1zLmZvckVhY2goY3VyciA9PiB7XG4gICAgICAgICAgICBjYWNoZS5jdXJyZW50TGlzdC5hcHBlbmRDaGlsZChjdXJyLmNvbnRhaW5lcik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJBbGxGcm9tQ3VycmVudExpc3QoKSB7XG4gICAgICAgIGxldCBhbGxJdGVtcyA9IGNhY2hlLmN1cnJlbnRMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1pdGVtXCIpO1xuXG4gICAgICAgIGFsbEl0ZW1zLmZvckVhY2goY3VyciA9PiB7XG4gICAgICAgICAgICBjYWNoZS5jdXJyZW50TGlzdC5yZW1vdmVDaGlsZChjdXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdMaXN0KCkge1xuICAgICAgICBsZXQgbGlzdE5hbWUgPSBwcm9tcHQoXCJMaXN0IE5hbWU/XCIsIFwiXCIpO1xuICAgICAgICBsZXQgbmV3TGlzdCA9IGxpc3QobGlzdE5hbWUpO1xuICAgICAgICBfYWxsTGlzdHMucHVzaChuZXdMaXN0KTtcblxuICAgICAgICBwb3B1bGF0ZU5hdkJhckxpc3QoKTtcbiAgICAgICAgcG9wdWxhdGVUYXNrTGlzdEZpZWxkKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW50ZXJLZXlUb1NhdmVDaGFuZ2VzKGUpIHtcbiAgICAgICAgaWYoZS5jb2RlID09IFwiRW50ZXJcIiAmJiBjYWNoZS5uZXdUYXNrQ2FyZC5zdHlsZS5kaXNwbGF5ID09IFwiZmxleFwiKSB7XG4gICAgICAgICAgICBjcmVhdGVOZXdMaXN0SXRlbSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlS2V5VG9EZWxldGVPcGVuVGFzayhlKSB7XG4gICAgICAgIGlmKGUuY29kZSA9PSBcIkRlbGV0ZVwiICYmIGNhY2hlLm5ld1Rhc2tDYXJkLnN0eWxlLmRpc3BsYXkgPT0gXCJmbGV4XCIpIHtcbiAgICAgICAgICAgIGNsb3NlVGFza0NhcmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVGFza0xpc3RGaWVsZCgpIHtcbiAgICAgICAgY2xlYXJBbGxUYXNrTGlzdEZpZWxkKCk7XG5cbiAgICAgICAgX2FsbExpc3RzLmZvckVhY2goY3VyciA9PiB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY3Vyci5nZXROYW1lKCk7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBjdXJyLmdldE5hbWUoKTtcbiAgICAgICAgICAgIGNhY2hlLnRhc2tMaXN0RmllbGQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjYWNoZS50YXNrTGlzdEZpZWxkLnZhbHVlID0gXCJUbyBEb1wiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyQWxsVGFza0xpc3RGaWVsZCgpIHtcbiAgICAgICAgY2FjaGUudGFza0xpc3RGaWVsZC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE5ld0NoZWNrbGlzdEl0ZW0oKSB7XG4gICAgICAgIGxldCB0b0FkZCA9IHByb21wdChcIk5ldyBjaGVja2xpc3QgaXRlbTpcIiwgXCJcIik7XG4gICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgb2JqW3RvQWRkXSA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGV0IG5ld0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBsZXQgbmV3TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbiAgICAgICAgbmV3TGkuYXBwZW5kQ2hpbGQobmV3SW5wdXQpO1xuICAgICAgICBuZXdMaS5hcHBlbmRDaGlsZChuZXdMYWJlbCk7XG5cbiAgICAgICAgbmV3SW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgbmV3SW5wdXQuaWQgPSBPYmplY3Qua2V5cyhvYmopWzBdO1xuICAgICAgICBuZXdJbnB1dC5jaGVja2VkID0gT2JqZWN0LnZhbHVlcyhvYmopWzBdO1xuICAgICAgICBuZXdMYWJlbC5odG1sRm9yID0gT2JqZWN0LmtleXMob2JqKVswXTtcbiAgICAgICAgbmV3TGFiZWwudGV4dENvbnRlbnQgPSBPYmplY3Qua2V5cyhvYmopWzBdO1xuXG4gICAgICAgIGNhY2hlLmNoZWNrTGlzdC5pbnNlcnRCZWZvcmUobmV3TGksIGNhY2hlLmFkZE5ld0NoZWNrbGlzdEl0ZW1CdXR0b24pO1xuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyOyIsImNvbnN0IGV2ZW50cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgbW9kdWxlID0ge307XG5cbiAgICBjb25zdCBfZXZlbnRzID0ge307XG4gICAgbW9kdWxlLm9uID0gKGV2ZW50TmFtZSwgZm4pID0+IHtcbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdID0gX2V2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XG4gICAgfTtcbiAgICBtb2R1bGUub2ZmID0gKGV2ZW50TmFtZSwgZm4pID0+IHtcbiAgICAgICAgaWYoX2V2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoX2V2ZW50c1tldmVudE5hbWVdW2ldID09PSBmbikge1xuICAgICAgICAgICAgICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBtb2R1bGUuZW1pdCA9IChldmVudE5hbWUsIC4uLmRhdGEpID0+IHtcbiAgICAgICAgaWYoX2V2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICAgICAgZm4oLi4uZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbW9kdWxlO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmNvbnN0IGxpc3RJdGVtID0gKHRvZG9JdGVtKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBjcmVhdGVFbGVtZW50cygpO1xuICAgIGNvbnN0IGl0ZW0gPSB0b2RvSXRlbTtcbiAgICBsZXQgaWQgPSBgJHtpdGVtLmdldFRpdGxlKCl9ICR7aXRlbS5nZXREZXNjcmlwdGlvbigpfWA7XG5cbiAgICBhZGRDbGFzc2VzQW5kRGF0YSgpO1xuICAgIHBhcmVudENoaWxkU3RydWN0dXJlKCk7XG4gICAgYWRkVGV4dCgpO1xuICAgIGFkZExpc3RlbmVyc1RvQnV0dG9ucygpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICBcbiAgICAgICAgb2JqLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG9iai50aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgb2JqLmR1ZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgb2JqLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG9iai5idXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvYmouZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgb2JqLnZpZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIFxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGRDbGFzc2VzQW5kRGF0YSgpIHtcbiAgICAgICAgZWxlbWVudHMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW1cIik7XG4gICAgICAgIGVsZW1lbnRzLmNvbnRhaW5lci5kYXRhc2V0LmlkID0gaWQ7XG4gICAgXG4gICAgICAgIGVsZW1lbnRzLnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW0tdGl0bGVcIik7XG4gICAgICAgIGVsZW1lbnRzLmR1ZVRpbWUuY2xhc3NMaXN0LmFkZChcImxpc3QtZHVlLXRpbWVcIik7XG4gICAgICAgIGVsZW1lbnRzLmRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW0tZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLWJ1dHRvbnNcIik7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLWRlbGV0ZVwiKTtcbiAgICAgICAgZWxlbWVudHMudmlld0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLXZpZXdcIik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHBhcmVudENoaWxkU3RydWN0dXJlKCkge1xuICAgICAgICBlbGVtZW50cy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMudGl0bGUpO1xuICAgICAgICBlbGVtZW50cy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMuZGVzY3JpcHRpb24pO1xuICAgICAgICBlbGVtZW50cy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50cy5kZWxldGVCdXR0b24pO1xuICAgICAgICBlbGVtZW50cy5idXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMudmlld0J1dHRvbik7XG4gICAgICAgIGVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50cy5kdWVUaW1lKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkVGV4dCgpIHtcbiAgICAgICAgZWxlbWVudHMudGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLmdldFRpdGxlKCk7XG4gICAgICAgIGVsZW1lbnRzLmR1ZVRpbWUudGV4dENvbnRlbnQgPSBjYWxjdWxhdGVUaW1lVG9EdWVEYXRlSW5EYXlzKCk7XG4gICAgICAgIGVsZW1lbnRzLmRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICBlbGVtZW50cy5kZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICBlbGVtZW50cy52aWV3QnV0dG9uLnRleHRDb250ZW50ID0gXCJWaWV3XCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZVRvRHVlRGF0ZUluRGF5cygpIHtcbiAgICAgICAgaWYoaXRlbS5nZXREdWVUaW1lKCkgPT0gXCJcIikgcmV0dXJuIFwiXCI7XG5cbiAgICAgICAgbGV0IGR1ZURhdGUgPSBuZXcgRGF0ZShpdGVtLmdldER1ZVRpbWUoKSk7XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBkaWZmID0gZHVlRGF0ZS5nZXRUaW1lKCkgLSB0b2RheS5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBkaWZmSW5EYXlzID0gZGlmZiAvICgxMDAwICogMzYwMCAqIDI0KTtcblxuICAgICAgICBpZihkaWZmSW5EYXlzIDwgMCkgZWxlbWVudHMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsYXRlXCIpO1xuXG4gICAgICAgIHJldHVybiBgRHVlIFRpbWU6ICR7ZGlmZkluRGF5cy50b0ZpeGVkKDEpfSBkYXlzYDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzVG9CdXR0b25zKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVNlbGYpO1xuICAgICAgICBlbGVtZW50cy52aWV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5U2VsZik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRlbGV0ZVNlbGYoKSB7XG4gICAgICAgIGV2ZW50cy5lbWl0KFwiZGVsZXRlSXRlbVwiLCBpZCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRpc3BsYXlTZWxmKCkge1xuICAgICAgICBldmVudHMuZW1pdChcInZpZXdJdGVtXCIsIGlkLCBpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250YWluZXI6IGVsZW1lbnRzLmNvbnRhaW5lcixcbiAgICAgICAgaXRlbSxcbiAgICAgICAgaWRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RJdGVtOyIsImNvbnN0IGxpc3QgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgbGV0IF9uYW1lID0gbmFtZTtcblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBfbmFtZTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW1zLFxuICAgICAgICBnZXROYW1lXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0OyIsImNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlVGltZSA9IFwiXCIsIGNoZWNrTGlzdCA9IFtdKSA9PiB7XG4gICAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICAgIGxldCBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBsZXQgX2R1ZVRpbWUgPSBkdWVUaW1lOyBcbiAgICBsZXQgX2NoZWNrTGlzdCA9IGNoZWNrTGlzdDtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gX3RpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gX2Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldER1ZVRpbWUgPSAoKSA9PiBfZHVlVGltZTtcbiAgICBjb25zdCBnZXRDaGVja0xpc3QgPSAoKSA9PiBfY2hlY2tMaXN0O1xuXG4gICAgZnVuY3Rpb24gYWRkVG9DaGVja0xpc3QodG9BZGQpIHtcbiAgICAgICAgaWYodHlwZW9mIHRvQWRkICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZFRvQ2hlY2tMaXN0IG11c3QgYmUgYW4gb2JqZWN0XCIpOyBcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcblxuICAgICAgICBfY2hlY2tMaXN0LnB1c2godG9BZGQpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBnZXREZXNjcmlwdGlvbixcbiAgICAgICAgZ2V0RHVlVGltZSxcbiAgICAgICAgZ2V0Q2hlY2tMaXN0LFxuICAgICAgICBhZGRUb0NoZWNrTGlzdFxuICAgIH1cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9JdGVtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgdG9kb0l0ZW0gZnJvbSBcIi4vdG9kby1pdGVtXCI7XG5pbXBvcnQgbGlzdEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=