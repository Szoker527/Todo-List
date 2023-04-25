/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n  padding-right: 10px;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.close-detail {\n  justify-self: end;\n  position: absolute;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/modal.css"],"names":[],"mappings":";;AAEA,qBAAqB;AACrB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB","sourcesContent":["\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n  padding-right: 10px;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.close-detail {\n  justify-self: end;\n  position: absolute;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/modals.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/modals.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    overflow: auto;\n    height: 100vh;\n    width: 100vw;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.main-small {\n    grid-template-columns: 170px 1fr;\n    grid-template-rows: 63px 1fr;\n    height: 25rem;\n    width: 40rem;\n    background-color: #fefefe;\n}\n\n    .header-small {\n        padding-left: 20px;\n        gap: 10px;\n    }\n\n        .header-small h1 {\n            font-size: 2rem;\n        }\n\n        .header-small span {\n            font-size: 2rem;\n            padding-bottom: 5px;\n        }\n\n    .menu-small {\n        padding-top: 20px;\n        font-size: 1.8rem;\n        gap: 10px;\n    }\n    \n        .menu-small li {\n            padding-left: 40px;\n            cursor: pointer;\n        }\n\n    .display-todo {\n        display: none;\n        grid-template-rows: 1fr 3fr 1fr 1fr;\n        padding: 20px;\n        font-family: \"Ubuntu-Light\", sans-serif;\n    }\n\n\n        .display-date {\n            align-self: center;\n            font-size: 1.3rem;\n        }\n            .display-date input {\n                margin-left: 10px;\n                background-color: #fff;\n                color: var(--primary-color);\n                border: 1px solid var(--primary-color);\n                padding: 3px 3px;\n                font-size: 1.2rem;\n            }\n\n            .display-date input:focus {\n                border: 2px solid blue;\n              }\n\n        .display-todo-buttons {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n\n            .radio-buttons span {\n                font-size: 1.3rem;\n                margin-right: 10px;\n            }\n\n            /* Hide the default radio input */\n            input[type=\"radio\"] {\n                display: none;\n            }\n            \n            /* Style the label to look like a button */\n            label.radio-button {\n                display: inline-block;\n                padding: 9px 11px;\n                border: 1px solid #ccc;\n                background-color: #fff;\n                cursor: pointer;\n                user-select: none;\n                margin-right: 5px;\n                font-size: 1.2rem;\n                font-family: \"Ubuntu-Light\", sans-serif;\n            }\n            \n            /* Style the label to look like a button when the radio input is checked */\n            input[id=\"low\"]:hover + label.radio-button,\n            input[id=\"low\"]:checked + label.radio-button {\n                background-color: green;\n                color: #fff;\n                border-color: green;\n            }\n\n            input[id=\"medium\"]:hover + label.radio-button,\n            input[id=\"medium\"]:checked + label.radio-button {\n                background-color: orange;\n                color: #fff;\n                border-color: orange;\n            }\n\n            input[id=\"high\"]:hover + label.radio-button,\n            input[id=\"high\"]:checked + label.radio-button {\n                background-color: red;\n                color: #fff;\n                border-color: red;\n            }\n\n            .display-submit {\n                font-size: 1.2rem;\n                padding: 9px 11px;\n                font-family: \"Ubuntu-Light\", sans-serif;\n            }\n\n    .display-project {\n        display: none;\n        grid-template-rows: 4fr 1fr;\n        padding: 25px;\n    }\n\n        .display-project textarea {\n            font-size: 1.2rem;\n        }\n\n        #display-project-buttons {\n            display: flex;\n            align-items: center;\n            justify-content: flex-end;\n        }\n\n\n    .display-note {\n        display: none;\n        grid-template-rows: 1fr  4fr 1fr;\n        padding: 25px;\n    }\n\n        .display-note textarea {\n            font-size: 1.2rem;\n        }\n\n        #display-note-buttons {\n            display: flex;\n            align-items: center;\n            justify-content: flex-end;\n        }\n    ", "",{"version":3,"sources":["webpack://./src/styles/modals.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,cAAc;IACd,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;AAC5D;;AAEA;IACI,gCAAgC;IAChC,4BAA4B;IAC5B,aAAa;IACb,YAAY;IACZ,yBAAyB;AAC7B;;IAEI;QACI,kBAAkB;QAClB,SAAS;IACb;;QAEI;YACI,eAAe;QACnB;;QAEA;YACI,eAAe;YACf,mBAAmB;QACvB;;IAEJ;QACI,iBAAiB;QACjB,iBAAiB;QACjB,SAAS;IACb;;QAEI;YACI,kBAAkB;YAClB,eAAe;QACnB;;IAEJ;QACI,aAAa;QACb,mCAAmC;QACnC,aAAa;QACb,uCAAuC;IAC3C;;;QAGI;YACI,kBAAkB;YAClB,iBAAiB;QACrB;YACI;gBACI,iBAAiB;gBACjB,sBAAsB;gBACtB,2BAA2B;gBAC3B,sCAAsC;gBACtC,gBAAgB;gBAChB,iBAAiB;YACrB;;YAEA;gBACI,sBAAsB;cACxB;;QAEN;YACI,aAAa;YACb,8BAA8B;YAC9B,mBAAmB;QACvB;;YAEI;gBACI,iBAAiB;gBACjB,kBAAkB;YACtB;;YAEA,iCAAiC;YACjC;gBACI,aAAa;YACjB;;YAEA,0CAA0C;YAC1C;gBACI,qBAAqB;gBACrB,iBAAiB;gBACjB,sBAAsB;gBACtB,sBAAsB;gBACtB,eAAe;gBACf,iBAAiB;gBACjB,iBAAiB;gBACjB,iBAAiB;gBACjB,uCAAuC;YAC3C;;YAEA,0EAA0E;YAC1E;;gBAEI,uBAAuB;gBACvB,WAAW;gBACX,mBAAmB;YACvB;;YAEA;;gBAEI,wBAAwB;gBACxB,WAAW;gBACX,oBAAoB;YACxB;;YAEA;;gBAEI,qBAAqB;gBACrB,WAAW;gBACX,iBAAiB;YACrB;;YAEA;gBACI,iBAAiB;gBACjB,iBAAiB;gBACjB,uCAAuC;YAC3C;;IAER;QACI,aAAa;QACb,2BAA2B;QAC3B,aAAa;IACjB;;QAEI;YACI,iBAAiB;QACrB;;QAEA;YACI,aAAa;YACb,mBAAmB;YACnB,yBAAyB;QAC7B;;;IAGJ;QACI,aAAa;QACb,gCAAgC;QAChC,aAAa;IACjB;;QAEI;YACI,iBAAiB;QACrB;;QAEA;YACI,aAAa;YACb,mBAAmB;YACnB,yBAAyB;QAC7B","sourcesContent":[".modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    overflow: auto;\n    height: 100vh;\n    width: 100vw;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.main-small {\n    grid-template-columns: 170px 1fr;\n    grid-template-rows: 63px 1fr;\n    height: 25rem;\n    width: 40rem;\n    background-color: #fefefe;\n}\n\n    .header-small {\n        padding-left: 20px;\n        gap: 10px;\n    }\n\n        .header-small h1 {\n            font-size: 2rem;\n        }\n\n        .header-small span {\n            font-size: 2rem;\n            padding-bottom: 5px;\n        }\n\n    .menu-small {\n        padding-top: 20px;\n        font-size: 1.8rem;\n        gap: 10px;\n    }\n    \n        .menu-small li {\n            padding-left: 40px;\n            cursor: pointer;\n        }\n\n    .display-todo {\n        display: none;\n        grid-template-rows: 1fr 3fr 1fr 1fr;\n        padding: 20px;\n        font-family: \"Ubuntu-Light\", sans-serif;\n    }\n\n\n        .display-date {\n            align-self: center;\n            font-size: 1.3rem;\n        }\n            .display-date input {\n                margin-left: 10px;\n                background-color: #fff;\n                color: var(--primary-color);\n                border: 1px solid var(--primary-color);\n                padding: 3px 3px;\n                font-size: 1.2rem;\n            }\n\n            .display-date input:focus {\n                border: 2px solid blue;\n              }\n\n        .display-todo-buttons {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n\n            .radio-buttons span {\n                font-size: 1.3rem;\n                margin-right: 10px;\n            }\n\n            /* Hide the default radio input */\n            input[type=\"radio\"] {\n                display: none;\n            }\n            \n            /* Style the label to look like a button */\n            label.radio-button {\n                display: inline-block;\n                padding: 9px 11px;\n                border: 1px solid #ccc;\n                background-color: #fff;\n                cursor: pointer;\n                user-select: none;\n                margin-right: 5px;\n                font-size: 1.2rem;\n                font-family: \"Ubuntu-Light\", sans-serif;\n            }\n            \n            /* Style the label to look like a button when the radio input is checked */\n            input[id=\"low\"]:hover + label.radio-button,\n            input[id=\"low\"]:checked + label.radio-button {\n                background-color: green;\n                color: #fff;\n                border-color: green;\n            }\n\n            input[id=\"medium\"]:hover + label.radio-button,\n            input[id=\"medium\"]:checked + label.radio-button {\n                background-color: orange;\n                color: #fff;\n                border-color: orange;\n            }\n\n            input[id=\"high\"]:hover + label.radio-button,\n            input[id=\"high\"]:checked + label.radio-button {\n                background-color: red;\n                color: #fff;\n                border-color: red;\n            }\n\n            .display-submit {\n                font-size: 1.2rem;\n                padding: 9px 11px;\n                font-family: \"Ubuntu-Light\", sans-serif;\n            }\n\n    .display-project {\n        display: none;\n        grid-template-rows: 4fr 1fr;\n        padding: 25px;\n    }\n\n        .display-project textarea {\n            font-size: 1.2rem;\n        }\n\n        #display-project-buttons {\n            display: flex;\n            align-items: center;\n            justify-content: flex-end;\n        }\n\n\n    .display-note {\n        display: none;\n        grid-template-rows: 1fr  4fr 1fr;\n        padding: 25px;\n    }\n\n        .display-note textarea {\n            font-size: 1.2rem;\n        }\n\n        #display-note-buttons {\n            display: flex;\n            align-items: center;\n            justify-content: flex-end;\n        }\n    "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Ubuntu/Ubuntu-Medium.ttf */ "./src/fonts/Ubuntu/Ubuntu-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Ubuntu/Ubuntu-Regular.ttf */ "./src/fonts/Ubuntu/Ubuntu-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Ubuntu/Ubuntu-Light.ttf */ "./src/fonts/Ubuntu/Ubuntu-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"Ubuntu-Medium\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  }\n@font-face {\n    font-family: \"Ubuntu-Regular\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n}\n@font-face {\n    font-family: \"Ubuntu-Light\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n}\n\n/* For Webkit browsers */\n::-webkit-scrollbar {\n    width: 8px;\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #1E90FF;\n}\n\n/* For Firefox */\n::-moz-scrollbar {\n    width: 8px;\n}\n\n::-moz-scrollbar-thumb {\n    background-color: #1E90FF;\n}\n\n:root {\n    --primary-color: #1E90FF;\n    --secondary-color: #fff;\n    --text-color: #333;\n    --bg-color: #f5f5f5;\n}  \n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n  \nbody {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Classes with large next to it are for non modal elements */\n\n.main {\n    display: grid;\n    border: 1px solid #ddd;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.main-large {\n    grid-template-columns: 350px 1fr;\n    grid-template-rows: 90px 1fr;\n    height: 45rem;\n    width: 90rem;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    background-color: var(--primary-color);\n    grid-column: 1 / -1;\n}\n\n.header-large {\n    padding-left: 30px;\n    gap: 10px;\n}\n\n    .header h1 {\n        font-family: \"Ubuntu-Medium\", sans-serif;\n        color: var(--secondary-color);\n    }\n\n    .header-large h1 {\n        font-size: 4rem;\n    }\n\n    .header span {\n        font-family: \"Ubuntu-Medium\", sans-serif;\n        color: var(--secondary-color);\n    }\n\n    .header-large span {\n        font-size: 3.5rem;\n        padding-bottom: 5px;\n    }\n\n.menu {\n    background-color: var(--bg-color);\n    color: var(--text-color);\n    display: flex;\n    flex-direction: column;\n    font-family: \"Ubuntu-Light\", sans-serif;\n    border-right: 2px solid #ccc;\n    list-style: none;\n}\n\n.menu-large {\n    font-size: 2.5rem;\n    gap: 10px;\n    padding: 50px 20px;\n}\n\n    .menu-large li {\n        padding-left: 80px;\n        cursor: pointer;\n    }\n\n    .menu-large ul {\n        padding-left: 80px;\n    }\n\n        ul .project-content {\n            font-size: 1.5rem;\n            margin: 10px 0;\n            padding-left: 30px;\n            list-style: none;\n        }\n    \n    .menu-button {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        background-color: var(--primary-color);\n        color: #fff;\n        font-size: 30px;\n        cursor: pointer;\n        border: 1px solid #ddd;\n        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);\n        margin: 0 35%;\n        margin-top: 70px;\n        position: relative;\n        top: 0;\n        transition: top 0.1s ease-out;\n      }\n\n    .menu-button:active {\n        top: 2px;\n    } \n\n    .menu-button span {\n        font-size: 54px;\n        font-weight: bold;\n      }\n\n.display {\n    display: grid;\n    overflow: auto;\n}\n\n.display-large {\n    display: block;\n    padding: 20px;\n    padding-top: 40px;\n    gap: 8px;\n}\n\n    .task-container {\n        display: grid;\n        height: 60px;\n        margin: 10px 0;\n        border: 1px solid #ccc;\n        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n        align-items: center;\n        justify-items: center;\n        grid-template-columns: 10px 75px 1fr 150px 100px 60px 60px;\n    }\n\n        .task-color {\n            background-color: red;\n            width: 100%;\n            height: 100%;\n        }\n\n        .task-checkbox {\n            width: 100%;\n            height: 25px;\n        }\n\n        .task-title {\n            font-size: 2rem;\n            font-family: \"Ubuntu-Light\", sans-serif;\n            justify-self: flex-start;\n            padding-left: 20px;\n        }\n\n        .task-details {\n            font-size: 1rem;\n            padding: 8px 10px;\n            font-family: \"Ubuntu-Medium\", sans-serif;\n        }\n\n        .task-date {\n            font-size: 1.5rem;\n            font-family: \"Ubuntu-Light\", sans-serif;\n        }\n\n        .icon {\n            width: 100%;\n            height: 30px;\n            fill: black;\n            transition: fill 0.2s;\n          }\n          \n          a:hover .icon {\n            fill: blue;\n          }\n\n\n/* Here are global styles that are meant to be reused */\nbutton {\n    position: relative;\n    top: 0;\n    transition: top 0.1s ease-out;\n    border: 1px solid var(--primary-color);\n    /* box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3); */\n    color: var(--primary-color);\n    background-color: white;\n}\n\nbutton:active {\n    top: 2px;\n}\n\nbutton:hover {\n    border: 1px solid white;\n    color: white;\n    background-color: var(--primary-color);\n}\n\ntextarea {\n    resize: none;\n    border: none;\n    outline: none;\n    font-size: 1rem;\n}\n\ntextarea:focus {\n    border: none;\n    outline: none;\n  }", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,+DAAgE;EAClE;AACF;IACI,6BAA6B;IAC7B,+DAAiE;AACrE;AACA;IACI,2BAA2B;IAC3B,+DAA+D;AACnE;;AAEA,wBAAwB;AACxB;IACI,UAAU;AACd;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,gBAAgB;AAChB;IACI,UAAU;AACd;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,6DAA6D;;AAE7D;IACI,aAAa;IACb,sBAAsB;IACtB,0CAA0C;AAC9C;;AAEA;IACI,gCAAgC;IAChC,4BAA4B;IAC5B,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sCAAsC;IACtC,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,SAAS;AACb;;IAEI;QACI,wCAAwC;QACxC,6BAA6B;IACjC;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,wCAAwC;QACxC,6BAA6B;IACjC;;IAEA;QACI,iBAAiB;QACjB,mBAAmB;IACvB;;AAEJ;IACI,iCAAiC;IACjC,wBAAwB;IACxB,aAAa;IACb,sBAAsB;IACtB,uCAAuC;IACvC,4BAA4B;IAC5B,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,SAAS;IACT,kBAAkB;AACtB;;IAEI;QACI,kBAAkB;QAClB,eAAe;IACnB;;IAEA;QACI,kBAAkB;IACtB;;QAEI;YACI,iBAAiB;YACjB,cAAc;YACd,kBAAkB;YAClB,gBAAgB;QACpB;;IAEJ;QACI,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,WAAW;QACX,YAAY;QACZ,kBAAkB;QAClB,sCAAsC;QACtC,WAAW;QACX,eAAe;QACf,eAAe;QACf,sBAAsB;QACtB,0CAA0C;QAC1C,aAAa;QACb,gBAAgB;QAChB,kBAAkB;QAClB,MAAM;QACN,6BAA6B;MAC/B;;IAEF;QACI,QAAQ;IACZ;;IAEA;QACI,eAAe;QACf,iBAAiB;MACnB;;AAEN;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,iBAAiB;IACjB,QAAQ;AACZ;;IAEI;QACI,aAAa;QACb,YAAY;QACZ,cAAc;QACd,sBAAsB;QACtB,0CAA0C;QAC1C,mBAAmB;QACnB,qBAAqB;QACrB,0DAA0D;IAC9D;;QAEI;YACI,qBAAqB;YACrB,WAAW;YACX,YAAY;QAChB;;QAEA;YACI,WAAW;YACX,YAAY;QAChB;;QAEA;YACI,eAAe;YACf,uCAAuC;YACvC,wBAAwB;YACxB,kBAAkB;QACtB;;QAEA;YACI,eAAe;YACf,iBAAiB;YACjB,wCAAwC;QAC5C;;QAEA;YACI,iBAAiB;YACjB,uCAAuC;QAC3C;;QAEA;YACI,WAAW;YACX,YAAY;YACZ,WAAW;YACX,qBAAqB;UACvB;;UAEA;YACE,UAAU;UACZ;;;AAGV,uDAAuD;AACvD;IACI,kBAAkB;IAClB,MAAM;IACN,6BAA6B;IAC7B,sCAAsC;IACtC,gDAAgD;IAChD,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;EACf","sourcesContent":["@font-face {\n    font-family: \"Ubuntu-Medium\";\n    src: url(\"../fonts/Ubuntu/Ubuntu-Medium.ttf\") format(\"truetype\");\n  }\n@font-face {\n    font-family: \"Ubuntu-Regular\";\n    src: url(\"../fonts/Ubuntu/Ubuntu-Regular.ttf\") format(\"truetype\");\n}\n@font-face {\n    font-family: \"Ubuntu-Light\";\n    src: url(\"../fonts/Ubuntu/Ubuntu-Light.ttf\") format(\"truetype\");\n}\n\n/* For Webkit browsers */\n::-webkit-scrollbar {\n    width: 8px;\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #1E90FF;\n}\n\n/* For Firefox */\n::-moz-scrollbar {\n    width: 8px;\n}\n\n::-moz-scrollbar-thumb {\n    background-color: #1E90FF;\n}\n\n:root {\n    --primary-color: #1E90FF;\n    --secondary-color: #fff;\n    --text-color: #333;\n    --bg-color: #f5f5f5;\n}  \n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n  \nbody {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Classes with large next to it are for non modal elements */\n\n.main {\n    display: grid;\n    border: 1px solid #ddd;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.main-large {\n    grid-template-columns: 350px 1fr;\n    grid-template-rows: 90px 1fr;\n    height: 45rem;\n    width: 90rem;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    background-color: var(--primary-color);\n    grid-column: 1 / -1;\n}\n\n.header-large {\n    padding-left: 30px;\n    gap: 10px;\n}\n\n    .header h1 {\n        font-family: \"Ubuntu-Medium\", sans-serif;\n        color: var(--secondary-color);\n    }\n\n    .header-large h1 {\n        font-size: 4rem;\n    }\n\n    .header span {\n        font-family: \"Ubuntu-Medium\", sans-serif;\n        color: var(--secondary-color);\n    }\n\n    .header-large span {\n        font-size: 3.5rem;\n        padding-bottom: 5px;\n    }\n\n.menu {\n    background-color: var(--bg-color);\n    color: var(--text-color);\n    display: flex;\n    flex-direction: column;\n    font-family: \"Ubuntu-Light\", sans-serif;\n    border-right: 2px solid #ccc;\n    list-style: none;\n}\n\n.menu-large {\n    font-size: 2.5rem;\n    gap: 10px;\n    padding: 50px 20px;\n}\n\n    .menu-large li {\n        padding-left: 80px;\n        cursor: pointer;\n    }\n\n    .menu-large ul {\n        padding-left: 80px;\n    }\n\n        ul .project-content {\n            font-size: 1.5rem;\n            margin: 10px 0;\n            padding-left: 30px;\n            list-style: none;\n        }\n    \n    .menu-button {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        background-color: var(--primary-color);\n        color: #fff;\n        font-size: 30px;\n        cursor: pointer;\n        border: 1px solid #ddd;\n        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);\n        margin: 0 35%;\n        margin-top: 70px;\n        position: relative;\n        top: 0;\n        transition: top 0.1s ease-out;\n      }\n\n    .menu-button:active {\n        top: 2px;\n    } \n\n    .menu-button span {\n        font-size: 54px;\n        font-weight: bold;\n      }\n\n.display {\n    display: grid;\n    overflow: auto;\n}\n\n.display-large {\n    display: block;\n    padding: 20px;\n    padding-top: 40px;\n    gap: 8px;\n}\n\n    .task-container {\n        display: grid;\n        height: 60px;\n        margin: 10px 0;\n        border: 1px solid #ccc;\n        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n        align-items: center;\n        justify-items: center;\n        grid-template-columns: 10px 75px 1fr 150px 100px 60px 60px;\n    }\n\n        .task-color {\n            background-color: red;\n            width: 100%;\n            height: 100%;\n        }\n\n        .task-checkbox {\n            width: 100%;\n            height: 25px;\n        }\n\n        .task-title {\n            font-size: 2rem;\n            font-family: \"Ubuntu-Light\", sans-serif;\n            justify-self: flex-start;\n            padding-left: 20px;\n        }\n\n        .task-details {\n            font-size: 1rem;\n            padding: 8px 10px;\n            font-family: \"Ubuntu-Medium\", sans-serif;\n        }\n\n        .task-date {\n            font-size: 1.5rem;\n            font-family: \"Ubuntu-Light\", sans-serif;\n        }\n\n        .icon {\n            width: 100%;\n            height: 30px;\n            fill: black;\n            transition: fill 0.2s;\n          }\n          \n          a:hover .icon {\n            fill: blue;\n          }\n\n\n/* Here are global styles that are meant to be reused */\nbutton {\n    position: relative;\n    top: 0;\n    transition: top 0.1s ease-out;\n    border: 1px solid var(--primary-color);\n    /* box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3); */\n    color: var(--primary-color);\n    background-color: white;\n}\n\nbutton:active {\n    top: 2px;\n}\n\nbutton:hover {\n    border: 1px solid white;\n    color: white;\n    background-color: var(--primary-color);\n}\n\ntextarea {\n    resize: none;\n    border: none;\n    outline: none;\n    font-size: 1rem;\n}\n\ntextarea:focus {\n    border: none;\n    outline: none;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles/modal.css":
/*!******************************!*\
  !*** ./src/styles/modal.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/modals.css":
/*!*******************************!*\
  !*** ./src/styles/modals.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modals.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/modals.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/assets/images/edit.svg":
/*!************************************!*\
  !*** ./src/assets/images/edit.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-edit\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path></svg>"

/***/ }),

/***/ "./src/assets/images/trash.svg":
/*!*************************************!*\
  !*** ./src/assets/images/trash.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>"

/***/ }),

/***/ "./src/functions/arrays.js":
/*!*********************************!*\
  !*** ./src/functions/arrays.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNote": () => (/* binding */ addNote),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "findProjectTitles": () => (/* binding */ findProjectTitles),
/* harmony export */   "nextWeek": () => (/* binding */ nextWeek),
/* harmony export */   "returnProjectArray": () => (/* binding */ returnProjectArray),
/* harmony export */   "returnTaskArray": () => (/* binding */ returnTaskArray),
/* harmony export */   "todayTasks": () => (/* binding */ todayTasks)
/* harmony export */ });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_addDays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/addDays */ "./node_modules/date-fns/esm/addDays/index.js");


// import { render } from './render'
// import menu from '../pages/menu'
// import { defaultProjectName } from './tasks'
// import home from '../pages/home'
// import {updateStorage} from '..'

// Here are functions that add objects to arrays, store them and display them on page.
let taskArray = [
    {
        project: "work",
        title: "What to do",
        description: "wdadadadadaada",
        priority: "low",
        date: "2014-02-03",
        id: 0
    },
    {
        project: "work",
        title: "What to do",
        description: "wdadadadadaada",
        priority: "low",
        date: "2014-02-03",
        id: 0
    },
    {
        project: "work",
        title: "What to do",
        description: "wdadadadadaada",
        priority: "low",
        date: "2014-02-03",
        id: 1
    },
    {
        project: "relax",
        title: "Play games",
        description: "xxxxxxxxxxxxxxxxx",
        priority: "medium",
        date: "2014-01-04",
        id: 2
    },
    {
        project: "work",
        title: "Report about dolphins",
        description: "xxxxxxxxxxxxxxxxx",
        priority: "high",
        date: "2014-03-05",
        id: 3
    },
    {
        project: "work",
        title: "Talk to Jarret",
        description: "xxxxxxxxxxxxxxxxx",
        priority: "high",
        date: "2023-04-25",
        id: 4
    },
    {
        project: "work",
        title: "Bring Boss coffe",
        description: "gggggg",
        priority: "low",
        date: "2023-04-27",
        id: 5
    },
    {
        project: "relax",
        title: "Delete xxx files",
        description: "gggggg",
        priority: "high",
        date: "2023-04-23",
        id: 6
    }
]

const projectArray = ["work", "relax"]
const noteArray = []

function returnTaskArray() {
    return taskArray
}

function returnProjectArray() {
    if(!projectArray) {
        return
    }
    const uniqueNames = [...new Set(projectArray)];
    return uniqueNames;
}

function addTask(obj) {
    taskArray.push(obj)
    addIdToTask()
    // localStorage.setItem("tasks", JSON.stringify(taskArray));
}

function addNote(obj) {
    noteArray.push(obj)
}

function addProject(title) {
    const newTitle = title.toLowerCase().replace(/\s+/g, "-");
    projectArray.push(newTitle)
    console.log(projectArray)
}

// function removeFromArray(id) {
//     let indexToRemove = dateArray.findIndex(obj => obj.id === id);
//     // If the object is found in the array, remove it
//     if (indexToRemove !== -1) {
//         dateArray.splice(indexToRemove, 1);
//     }
//     addIdToTask()
//     render()
//     menu()
//     defaultProjectName()
//     home()
//     updateStorage()
// }

// function setStorageArray(storageArray) {
//     dateArray = storageArray
// }

function addIdToTask() {
    taskArray.forEach(function(obj, index) {
        obj.id = index
    });
}

function findProjectTitles(projectName) {
    const newstring = projectName.replace(/-/g, ' ')
    console.log(newstring)
    const newArray = [];
    taskArray.forEach(function(obj) {
        if(obj.project === newstring) {
            newArray.push(obj)
        }
        
    });
    return newArray
}

// function findDateArray(date) {
//     const newArray = [];
//     dateArray.forEach(function(obj) {
//         const newobjArray = obj.date
//         if(newobjArray === date) {
//             newArray.push(obj)
//         }
        
//     });
//     return newArray
// }

function displayAllProjectTitles() {
    taskArray.forEach(function(obj) {
        projectArray.push(obj.project)
    });
    return projectArray
}

function nextWeek() {
    const today = new Date();
    const nextSevenDays = [...Array(7)].map((_, i) => (0,date_fns_addDays__WEBPACK_IMPORTED_MODULE_0__["default"])(today, i));
    const weekArray = [];
    nextSevenDays.forEach((date, i) => {
        const nextDay = `${(0,date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(date, 'yyyy-MM-dd')}`
        taskArray.forEach(function(obj) {
            const newobjArray = obj.date
            if(newobjArray === nextDay) {
                weekArray.push(obj)
            }    
        });
    });
    return weekArray
}

function todayTasks() {
    const today = new Date();
    const todayFormatted = `${(0,date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(today, 'yyyy-MM-dd')}`
    const todayArray = taskArray.filter((obj) => obj.date === todayFormatted);
    return todayArray;
  }

// export {addTask, findProjectTitles, findDateArray,
//      displayAllProjectTitles, dateArray, nextWeek,
//      addNote, noteArray, addProject, removeFromArray, setStorageArray}


/***/ }),

/***/ "./src/functions/dates.js":
/*!********************************!*\
  !*** ./src/functions/dates.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");


function currentDate() {
    const currentDate = new Date();
    const formattedDate = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_0__["default"])(currentDate, 'EEEE, MMMM do, yyyy');
    return formattedDate;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentDate); 


/***/ }),

/***/ "./src/functions/displayTasks.js":
/*!***************************************!*\
  !*** ./src/functions/displayTasks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks)
/* harmony export */ });
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrays */ "./src/functions/arrays.js");
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs */ "./src/functions/inputs.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/functions/tasks.js");
/* harmony import */ var _assets_images_trash_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/trash.svg */ "./src/assets/images/trash.svg");
/* harmony import */ var _assets_images_trash_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_trash_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/edit.svg */ "./src/assets/images/edit.svg");
/* harmony import */ var _assets_images_edit_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_edit_svg__WEBPACK_IMPORTED_MODULE_4__);







function displayTasks(array) {
    const nodeContainer = document.getElementById('display');
    const originalNode = document.getElementById('original');
    originalNode.style.display = "grid";

    if (!originalNode) {
      console.error("Element with id 'original' not found");
      return;
    }
  
    const clonedNode = originalNode.cloneNode(true);
    clonedNode.id = 'cloned';
  
    // Remove all child nodes except the original
    while (nodeContainer.lastChild && nodeContainer.lastChild !== originalNode) {
        nodeContainer.removeChild(nodeContainer.lastChild);
    }
  
    for (let i = 0; i < array.length; i++) {
        const date = new Date(array[i].date);
        // console.log(array[i].date)
        const formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(date, 'MMM d');
        const clonedNode = originalNode.cloneNode(true);
        clonedNode.id = 'id-' + i;
        clonedNode.querySelector('.task-title').textContent = array[i].title;
        clonedNode.querySelector('.task-date').textContent = formattedDate;
        nodeContainer.appendChild(clonedNode);
    }
  
    originalNode.style.display = "none";
  }


function displayProjects(array) {
  const nodeContainer = document.getElementById("projects-display")


  const children = nodeContainer.childNodes;
  for (let i = children.length - 1; i >= 1; i--) {
    nodeContainer.removeChild(children[i]);
  }

  for (let i = 0; i < array.length; i++) {
    const name = array[i];
    const listItem = document.createElement("li");

    listItem.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    listItem.classList.add("project-content")
    listItem.id = name.toLowerCase().replace(/\s+/g, "-"); // Convert name to lowercase and replace any spaces with hyphens to create an ID
    nodeContainer.appendChild(listItem); // Append the li element to the parent element

    listItem.addEventListener('click', function() {
      displayTasks((0,_arrays__WEBPACK_IMPORTED_MODULE_0__.findProjectTitles)(this.id))
      ;(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.addedProjectName)(this.id)
      console.log(`Clicked div with id: ${this.id}`);
    });

  }

}



/***/ }),

/***/ "./src/functions/firstLoad.js":
/*!************************************!*\
  !*** ./src/functions/firstLoad.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstLoad": () => (/* binding */ firstLoad),
/* harmony export */   "firstLoadModal": () => (/* binding */ firstLoadModal)
/* harmony export */ });
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrays */ "./src/functions/arrays.js");
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTasks */ "./src/functions/displayTasks.js");
// import home from "../pages/home"
// import menu from "../pages/menu"
// import toDoModal from "../pages/modalPages/toDoModal"



// When user opens website this will be the first thing that will be displayed.

function firstLoad() {
    // const retrievedTasks = JSON.parse(localStorage.getItem("tasks"));
    // console.log(retrievedTasks)
    // setStorageArray(retrievedTasks)
    (0,_displayTasks__WEBPACK_IMPORTED_MODULE_1__.displayTasks)((0,_arrays__WEBPACK_IMPORTED_MODULE_0__.returnTaskArray)())
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_1__.displayProjects)((0,_arrays__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)())
}

function firstLoadModal() {
    const toDoModal = document.getElementById("display-modal")
    toDoModal.style.display = "grid"
}



/***/ }),

/***/ "./src/functions/inputs.js":
/*!*********************************!*\
  !*** ./src/functions/inputs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputBtn": () => (/* binding */ inputBtn),
/* harmony export */   "inputCheckBox": () => (/* binding */ inputCheckBox),
/* harmony export */   "inputDetail": () => (/* binding */ inputDetail),
/* harmony export */   "inputImgEdit": () => (/* binding */ inputImgEdit),
/* harmony export */   "inputImgTrash": () => (/* binding */ inputImgTrash),
/* harmony export */   "inputRadio": () => (/* binding */ inputRadio),
/* harmony export */   "inputTitle": () => (/* binding */ inputTitle),
/* harmony export */   "inputTitleNotes": () => (/* binding */ inputTitleNotes),
/* harmony export */   "inputType": () => (/* binding */ inputType)
/* harmony export */ });
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrays */ "./src/functions/arrays.js");
/* harmony import */ var _pages_modalPages_detailModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/modalPages/detailModal */ "./src/pages/modalPages/detailModal.js");
/* harmony import */ var _pages_modalPages_editModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/modalPages/editModal */ "./src/pages/modalPages/editModal.js");




function inputTitle(cssClass, idName, parent, placeholder) {
    const inputTitle = document.createElement("input")
    inputTitle.classList.add(`${cssClass}`)
    parent.appendChild(inputTitle)
    inputTitle.setAttribute("type", "text")
    inputTitle.setAttribute("placeholder", `${placeholder}`)
    inputTitle.setAttribute("name", `${idName}`)
    inputTitle.setAttribute("id", `${idName}`)
    inputTitle.setAttribute("required", "true")

}

function inputTitleNotes(cssClass, idName, parent, placeholder) {
    const inputTitle = document.createElement("textarea")
    inputTitle.classList.add(`${cssClass}`)
    parent.appendChild(inputTitle)
    inputTitle.setAttribute("placeholder", `${placeholder}`)
    inputTitle.setAttribute("name", `${idName}`)
    inputTitle.setAttribute("id", `${idName}`)
    inputTitle.setAttribute("required", "true")
    return inputTitle
}

function inputType(cssClass, idName, parent, type) {
    const inputType = document.createElement("input")
    inputType.classList.add(`${cssClass}`)
    parent.appendChild(inputType)
    inputType.setAttribute("type", `${type}`)
    inputType.setAttribute("name", `${idName}`)
    inputType.setAttribute("id", `${idName}`)
    inputType.setAttribute("required", "true")
    return inputType
}

function inputCheckBox(cssClass, parent, obj) {
    const inputCheck = document.createElement("input")
    inputCheck.classList.add(`${cssClass}`)
    parent.appendChild(inputCheck)
    inputCheck.setAttribute("type", "checkbox")
    inputCheck.addEventListener("click", function() {
        const checkBoxTask = document.querySelector(`#task-${obj.id}`)
        console.log(checkBoxTask)
        checkBoxTask.style.textDecoration = "line-through";
    })
}

function inputImgEdit(cssClass, parent, mySvg, obj) {
    const mySvgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    mySvgElement.classList.add(`${cssClass}`)
    parent.appendChild(mySvgElement)
    mySvgElement.innerHTML = mySvg;
    mySvgElement.addEventListener("click", function() {
        (0,_pages_modalPages_editModal__WEBPACK_IMPORTED_MODULE_2__["default"])(obj)
    })
}

function inputImgTrash(cssClass, parent, mySvg, obj) {
    const mySvgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    mySvgElement.classList.add(`${cssClass}`)
    parent.appendChild(mySvgElement)
    mySvgElement.innerHTML = mySvg;
    mySvgElement.addEventListener("click", function() {
        (0,_arrays__WEBPACK_IMPORTED_MODULE_0__.removeFromArray)(obj.id)
    })
}

function inputDetail(parent, cssClass, name, obj) {
    const dispalyDetail = document.createElement("button")
    parent.appendChild(dispalyDetail)
    dispalyDetail.textContent = `${name}`
    dispalyDetail.setAttribute("class", `${cssClass}`)
    dispalyDetail.addEventListener("click", function() {
        ;(0,_pages_modalPages_detailModal__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)
    })
}

function inputBtn(parent, cssClass, name) {
    const submitBtn = document.createElement("button")
    parent.appendChild(submitBtn)
    submitBtn.textContent = `${name}`
    submitBtn.setAttribute("class", `${cssClass}`)
}


function inputRadio(parent, idName, labelText, radioValue) {
    const radioBtn = document.createElement("input")
    const radioLabel = document.createElement("label")
    parent.appendChild(radioBtn)
    parent.appendChild(radioLabel)
    radioLabel.textContent = labelText
    radioLabel.setAttribute("class", "radio-button")
    radioLabel.setAttribute("for", `${idName}`)
    radioBtn.setAttribute("type", "radio")
    radioBtn.setAttribute("id", `${idName}`)
    radioBtn.setAttribute("name", "priority")
    radioBtn.setAttribute("value", `${radioValue}`)
    return radioBtn
}



/***/ }),

/***/ "./src/functions/projects.js":
/*!***********************************!*\
  !*** ./src/functions/projects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrays */ "./src/functions/arrays.js");


function project() {
    const leftMenu = document.querySelector(".left-menu")
    const projectContainer = document.createElement("div")
    const projectTitle = document.createElement("span")

    projectContainer.classList.add("projects")
    projectTitle.classList.add("project-title")
    projectTitle.textContent = "Projects"
    
    projectContainer.appendChild(projectTitle)
    leftMenu.appendChild(projectContainer)

    const projectTopics = filterTopic()

    for (let i = 0; i < projectTopics.length; i++) {
        const elementText = projectTopics[i];
        const divTopic = document.createElement("li")
        const newElementText = elementText.slice(0, 1).toUpperCase() + elementText.slice(1)
        divTopic.classList.add("project-topics")
        divTopic.setAttribute("id", `${elementText.toLowerCase()}`)
        divTopic.textContent = `${newElementText}`
        projectContainer.appendChild(divTopic)
    }
}

function filterTopic() {
    const arrayTopic = (0,_arrays__WEBPACK_IMPORTED_MODULE_0__.displayAllProjectTitles)()
    
    const uniqueArray = arrayTopic.filter((item, index) => {
        return arrayTopic.indexOf(item) === index;
    });
    console.log(uniqueArray)
    return uniqueArray
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);


/***/ }),

/***/ "./src/functions/render.js":
/*!*********************************!*\
  !*** ./src/functions/render.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderForm": () => (/* binding */ renderForm),
/* harmony export */   "renderModal": () => (/* binding */ renderModal)
/* harmony export */ });


function render() {
    const display = document.getElementById("display");
    const firstNode = display.firstChild;
  
     while (display.lastChild !== firstNode) {
      display.removeChild(display.lastChild);
    }
    const project = document.getElementById("project-display");
    const children = project.childNodes;
    for (let i = children.length - 1; i >= 2; i--) {
      project.removeChild(children[i]);
    }
}

function renderModal() {
  const main = document.querySelector(".main-small")
  const dispalyContainer = document.getElementById("display-modal")
  console.log(main)
  if (!dispalyContainer) {
    return
  }
  while (dispalyContainer.firstChild) {
    dispalyContainer.removeChild(dispalyContainer.firstChild);
    }
    main.removeChild(dispalyContainer)
}

function renderForm() {
  const formContainer = document.querySelector("#myForm")
  const menuContainer = document.querySelector(".main-small")
  while (formContainer.firstChild) {
    formContainer.removeChild(formContainer.firstChild);
  }
  menuContainer.removeChild(formContainer)
  const newForm = document.createElement("form")
  newForm.classList.add("display-menu-small")
  newForm.setAttribute('id', 'myForm');
  menuContainer.appendChild(newForm)
  console.log(newForm)
}



/***/ }),

/***/ "./src/functions/tasks.js":
/*!********************************!*\
  !*** ./src/functions/tasks.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addedProjectName": () => (/* binding */ addedProjectName),
/* harmony export */   "createNotes": () => (/* binding */ createNotes),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrays */ "./src/functions/arrays.js");

    // Here are tasks functions that create tasks objects
    
    let currentProjectName = "work";
    
    class tasks {
        constructor(project, title, description, priority, date) {
            this.project = project,
            this.title = title,
            this.description = description,
            this.priority = priority,
            this.date = date
        }
    }
    
    class notes {
        constructor(title, description) {
            this.title = title,
        this.description = description
    }
}

function createTask(date, title, description, priority) {
    // const result = format(new Date(date), 'yyyy-MM-dd')
    // console.log(date, title, description, priority)
    const projectNameObj = currentProjectName
    const newObj = new tasks(projectNameObj.toLowerCase(), title, description, priority, date) 
    ;(0,_arrays__WEBPACK_IMPORTED_MODULE_0__.addTask)(newObj)
    ;(0,_arrays__WEBPACK_IMPORTED_MODULE_0__.nextWeek)()
}

function createNotes(title, description) {
    const newNote = new notes(title, description)
    ;(0,_arrays__WEBPACK_IMPORTED_MODULE_0__.addNote)(newNote)
}

function createProject(title) {
    (0,_arrays__WEBPACK_IMPORTED_MODULE_0__.addProject)(title)
}

// function defaultProjectName() {
//     currentProjectName = "work"
//     return currentProjectName
// }

function addedProjectName(name) {
    currentProjectName = name;
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _styles_modals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/modals.css */ "./src/styles/modals.css");
/* harmony import */ var _functions_firstLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/firstLoad */ "./src/functions/firstLoad.js");
/* harmony import */ var _functions_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/render */ "./src/functions/render.js");
/* harmony import */ var _functions_displayTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/displayTasks */ "./src/functions/displayTasks.js");
/* harmony import */ var _functions_arrays__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/arrays */ "./src/functions/arrays.js");
/* harmony import */ var _pages_modalAdd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/modalAdd */ "./src/pages/modalAdd.js");
/* harmony import */ var _functions_tasks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/tasks */ "./src/functions/tasks.js");









(0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_2__.firstLoad)()
const home = document.getElementById("home");
const today = document.getElementById("today");
const week = document.getElementById("week");
const projects = document.querySelectorAll('.project-content');
const menuButton = document.querySelector(".menu-button");

home.addEventListener("click", function() {
  (0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_2__.firstLoad)()
})

today.addEventListener("click", function() {
  ;(0,_functions_displayTasks__WEBPACK_IMPORTED_MODULE_4__.displayTasks)((0,_functions_arrays__WEBPACK_IMPORTED_MODULE_5__.todayTasks)())
})

week.addEventListener("click", function() {
  ;(0,_functions_displayTasks__WEBPACK_IMPORTED_MODULE_4__.displayTasks)((0,_functions_arrays__WEBPACK_IMPORTED_MODULE_5__.nextWeek)())
})

projects.forEach(projectName => {
  projectName.addEventListener('click', function() {
    ;(0,_functions_displayTasks__WEBPACK_IMPORTED_MODULE_4__.displayTasks)((0,_functions_arrays__WEBPACK_IMPORTED_MODULE_5__.findProjectTitles)(projectName.id))
    ;(0,_functions_tasks__WEBPACK_IMPORTED_MODULE_7__.addedProjectName)(projectName.id)
    console.log(`Clicked div with id: ${projectName.id}`);
  });
});

menuButton.addEventListener("click", function() {
  (0,_pages_modalAdd__WEBPACK_IMPORTED_MODULE_6__["default"])()
})


// console.log(returnTaskArray())


// const nodeContainer = document.getElementById('display');
// const originalNode = document.getElementById('original');
// const clonedNode = originalNode.cloneNode(true);

// clonedNode.id = 'cloned';

// for (let i = 0; i < returnTaskArray().length; i++) {
//     const clonedNode = originalNode.cloneNode(true);
//     clonedNode.id = 'cloned-' + i;
//     clonedNode.querySelector('.task-title').textContent = returnTaskArray()[i].title;
//     clonedNode.querySelector('.task-date').textContent = returnTaskArray()[i].date;
//     nodeContainer.appendChild(clonedNode);
//   }

// console.log(nodeContainer)
// import { firstLoad, firstLoadModal } from "./functions/firstLoad"
// import { createTask } from "./functions/tasks"
// import { dateArray } from "./functions/arrays"

// // createTask("2014-02-03", "What to do", "wdadadadadaada", "low")
// // createTask("2014-01-04", "Play games", "xxxxxxxxxxxxxxxxx", "medium")
// // createTask("2014-03-05", "Report about dolphins", "xxxxxxxxxxxxxxxxx", "high")
// // createTask("2023-04-14", "Talk to Jarret", "xxxxxxxxxxxxxxxxx", "high")
// // createTask("2023-04-16", "Bring Boss coffe", "gggggg", "low")
// // createTask("2023-04-15", "Delete xxx files", "gggggg", "high")

// firstLoad()

// function updateStorage() {
//     localStorage.setItem("tasks", JSON.stringify(dateArray));
// }
  
// function restoreDefault() {
//     const defaultArray = [
//         {
//             project: "work",
//             title: "What to do",
//             description: "wdadadadadaada",
//             priority: "low",
//             date: "2014-02-03",
//             id: 0
//         },
//         {
//             project: "work",
//             title: "What to do",
//             description: "wdadadadadaada",
//             priority: "low",
//             date: "2014-02-03",
//             id: 1
//         },
//         {
//             project: "relax",
//             title: "Play games",
//             description: "xxxxxxxxxxxxxxxxx",
//             priority: "medium",
//             date: "2014-01-04",
//             id: 2
//         },
//         {
//             project: "work",
//             title: "Report about dolphins",
//             description: "xxxxxxxxxxxxxxxxx",
//             priority: "high",
//             date: "2014-03-05",
//             id: 3
//         },
//         {
//             project: "work",
//             title: "Talk to Jarret",
//             description: "xxxxxxxxxxxxxxxxx",
//             priority: "high",
//             date: "2023-04-14",
//             id: 4
//         },
//         {
//             project: "work",
//             title: "Bring Boss coffe",
//             description: "gggggg",
//             priority: "low",
//             date: "2023-04-16",
//             id: 5
//         },
//         {
//             project: "relax",
//             title: "Delete xxx files",
//             description: "gggggg",
//             priority: "high",
//             date: "2023-04-15",
//             id: 6
//         }
//     ]
//     localStorage.setItem("tasks", JSON.stringify(defaultArray));
// }

//   console.log(dateArray)
  

// export {updateStorage, restoreDefault}

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/dates */ "./src/functions/dates.js");
/* harmony import */ var _functions_displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/displayTasks */ "./src/functions/displayTasks.js");
/* harmony import */ var _functions_arrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/arrays */ "./src/functions/arrays.js");




function home() {
    const menu = document.querySelector(".display-menu")
    ;(0,_functions_displayTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(menu, _functions_arrays__WEBPACK_IMPORTED_MODULE_2__.dateArray)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/projects */ "./src/functions/projects.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today */ "./src/pages/today.js");
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./week */ "./src/pages/week.js");
/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notes */ "./src/pages/notes.js");
/* harmony import */ var _projectPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectPage */ "./src/pages/projectPage.js");
/* harmony import */ var _functions_firstLoad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/firstLoad */ "./src/functions/firstLoad.js");
/* harmony import */ var _functions_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../functions/render */ "./src/functions/render.js");
/* harmony import */ var _modalAdd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modalAdd */ "./src/pages/modalAdd.js");
/* harmony import */ var _modalPages_projectModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modalPages/projectModal */ "./src/pages/modalPages/projectModal.js");
/* harmony import */ var _functions_tasks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../functions/tasks */ "./src/functions/tasks.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! .. */ "./src/index.js");












// This page creates elements that are displayed on menu
function menu() {
    const homePage = document.createElement("li")
    const today = document.createElement("li")
    const week = document.createElement("li")
    const notesPage = document.createElement("li")
    const btnAdd = document.createElement("button")
    const btnReset = document.createElement("button")
    const leftMenu = document.querySelector(".left-menu")
    homePage.classList.add("home-page", "left-menu-title")
    today.classList.add("today-page", "left-menu-title")
    week.classList.add("upcoming-page", "left-menu-title")
    notesPage.classList.add("notes-page", "left-menu-title")
    btnAdd.classList.add("add-btn")
    btnReset.classList.add("reset-btn")


    homePage.textContent = "Home"
    today.textContent = "Today"
    week.textContent = "Week"
    notesPage.textContent = "Notes"
    btnAdd.textContent = "ADD"
    btnReset.textContent = "Reset"

    leftMenu.appendChild(homePage)
    leftMenu.appendChild(today)
    leftMenu.appendChild(week)
    ;(0,_functions_projects__WEBPACK_IMPORTED_MODULE_0__["default"])()
    leftMenu.appendChild(notesPage)
    leftMenu.appendChild(btnAdd)
    leftMenu.appendChild(btnReset)

    const homeBtn = document.querySelector(".home-page")
    const todayBtn = document.querySelector(".today-page")
    const weekBtn = document.querySelector(".upcoming-page")
    const projectBtns = document.querySelectorAll('.project-topics');
    const notesBtn = document.querySelector(".notes-page")
    const addBtn = document.querySelector(".add-btn")
    const resetBtn = document.querySelector(".reset-btn")


homeBtn.addEventListener("click", function() {
    ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_7__.render)()
    menu()
    ;(0,_functions_tasks__WEBPACK_IMPORTED_MODULE_10__.defaultProjectName)()
    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()
    console.log("home")
})

todayBtn.addEventListener("click", function() {
    ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_7__.render)()
    menu()
    ;(0,_functions_tasks__WEBPACK_IMPORTED_MODULE_10__.defaultProjectName)()
    ;(0,_today__WEBPACK_IMPORTED_MODULE_2__["default"])()
    console.log("today")
})

weekBtn.addEventListener("click", function() {
    ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_7__.render)()
    menu()
    ;(0,_functions_tasks__WEBPACK_IMPORTED_MODULE_10__.defaultProjectName)()
    ;(0,_week__WEBPACK_IMPORTED_MODULE_3__["default"])()
    weekBtn.classList.add("selected-nav")
    console.log(weekBtn)
})

projectBtns.forEach((project, index) => {
    if (index >= 0) {
        project.addEventListener('click', (event) => {
            (0,_functions_render__WEBPACK_IMPORTED_MODULE_7__.render)()
            menu()
            ;(0,_projectPage__WEBPACK_IMPORTED_MODULE_5__["default"])(event.target.id)
            ;(0,_functions_tasks__WEBPACK_IMPORTED_MODULE_10__.addedProjectName)(event.target.id)
            console.log(`${event.target.id}`)
      });
    }
  });

notesBtn.addEventListener("click", function() {
    (0,_functions_render__WEBPACK_IMPORTED_MODULE_7__.render)()
    menu()
    ;(0,_functions_tasks__WEBPACK_IMPORTED_MODULE_10__.defaultProjectName)()
    ;(0,_notes__WEBPACK_IMPORTED_MODULE_4__["default"])()
    console.log("notes")
})

addBtn.addEventListener("click", function() {
    ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_7__.renderModal)()
    ;(0,_modalAdd__WEBPACK_IMPORTED_MODULE_8__["default"])()
    ;(0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_6__.firstLoadModal)()
})

resetBtn.addEventListener("click", function() {
    ;(0,___WEBPACK_IMPORTED_MODULE_11__.restoreDefault)()
    location.reload();
})

}

// function checkedState(element) {
//     element.classList.add("selected-nav")
// }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/pages/modalAdd.js":
/*!*******************************!*\
  !*** ./src/pages/modalAdd.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/modal.css */ "./src/styles/modal.css");
/* harmony import */ var _modalPages_toDoModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalPages/toDoModal */ "./src/pages/modalPages/toDoModal.js");
/* harmony import */ var _modalPages_projectModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalPages/projectModal */ "./src/pages/modalPages/projectModal.js");
/* harmony import */ var _modalPages_noteModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalPages/noteModal */ "./src/pages/modalPages/noteModal.js");
/* harmony import */ var _functions_firstLoad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/firstLoad */ "./src/functions/firstLoad.js");
/* harmony import */ var _functions_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/render */ "./src/functions/render.js");
/* harmony import */ var _functions_tasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/tasks */ "./src/functions/tasks.js");









function modalAdd() {
    const modal = document.querySelector(".modal")
    const smallMain = document.querySelector(".main-small")

    const addToDo = document.getElementById("add-to-do");
    const addProject = document.getElementById("add-project");
    const addNote = document.getElementById("add-note");

    const formToDo = document.getElementById("display-todo")
    const formProject = document.getElementById("display-project")
    const formNote = document.getElementById("display-note")

    modal.style.display = "flex"

    ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_5__.renderModal)()
    toDoForm(smallMain)
    ;(0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_4__.firstLoadModal)()
    
    addToDo.addEventListener("click", function() {
        ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_5__.renderModal)()
        toDoForm(smallMain)
    })
    
    addProject.addEventListener("click", function() {
        ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_5__.renderModal)()
        projectForm(smallMain)
    })

    addNote.addEventListener("click", function() {
        ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_5__.renderModal)()
        noteForm(smallMain)
    })
}

function toDoForm(parent) {
    const form = document.createElement("form");
    form.classList.add("display", "display-todo");
    form.setAttribute("id", "display-modal");
    form.setAttribute("autocomplete", "off");
    form.style.display = "grid";

    const titleTextArea = document.createElement("textarea");
    titleTextArea.setAttribute("name", "titles");
    titleTextArea.setAttribute("id", "display-title");
    titleTextArea.setAttribute("placeholder", "Title:");
    titleTextArea.setAttribute("required", "");

    const descriptionTextArea = document.createElement("textarea");
    descriptionTextArea.setAttribute("name", "descriptions");
    descriptionTextArea.setAttribute("id", "display-description");
    descriptionTextArea.setAttribute("placeholder", "Description: e.g internet, phone, rent.");
    descriptionTextArea.setAttribute("required", "");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("display-date");

    const dateSpan = document.createElement("span");
    dateSpan.textContent = "Due Date:";

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "date");
    dateInput.setAttribute("id", "due-date");
    dateInput.setAttribute("required", "");

    dateDiv.appendChild(dateSpan);
    dateDiv.appendChild(dateInput);

    const todoButtonsDiv = document.createElement("div");
    todoButtonsDiv.classList.add("display-todo-buttons");

    const radioButtonsDiv = document.createElement("div");
    radioButtonsDiv.classList.add("radio-buttons");

    const prioritySpan = document.createElement("span");
    prioritySpan.textContent = "Priority:";

    const lowRadioInput = document.createElement("input");
    lowRadioInput.setAttribute("type", "radio");
    lowRadioInput.setAttribute("id", "low");
    lowRadioInput.setAttribute("name", "priority");
    lowRadioInput.setAttribute("value", "low");

    const lowLabel = document.createElement("label");
    lowLabel.setAttribute("for", "low");
    lowLabel.classList.add("radio-button");
    lowLabel.textContent = "Low";

    const mediumRadioInput = document.createElement("input");
    mediumRadioInput.setAttribute("type", "radio");
    mediumRadioInput.setAttribute("id", "medium");
    mediumRadioInput.setAttribute("name", "priority");
    mediumRadioInput.setAttribute("value", "medium");

    const mediumLabel = document.createElement("label");
    mediumLabel.setAttribute("for", "medium");
    mediumLabel.classList.add("radio-button");
    mediumLabel.textContent = "Medium";

    const highRadioInput = document.createElement("input");
    highRadioInput.setAttribute("type", "radio");
    highRadioInput.setAttribute("id", "high");
    highRadioInput.setAttribute("name", "priority");
    highRadioInput.setAttribute("value", "high");

    const highLabel = document.createElement("label");
    highLabel.setAttribute("for", "high");
    highLabel.classList.add("radio-button");
    highLabel.textContent = "High";

    radioButtonsDiv.appendChild(prioritySpan);
    radioButtonsDiv.appendChild(lowRadioInput);
    radioButtonsDiv.appendChild(lowLabel);
    radioButtonsDiv.appendChild(mediumRadioInput);
    radioButtonsDiv.appendChild(mediumLabel);
    radioButtonsDiv.appendChild(highRadioInput);
    radioButtonsDiv.appendChild(highLabel);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.classList.add("display-submit");
    submitButton.textContent = "Submit";

    todoButtonsDiv.appendChild(radioButtonsDiv);
    todoButtonsDiv.appendChild(submitButton);

    form.appendChild(titleTextArea);
    form.appendChild(descriptionTextArea);
    form.appendChild(dateDiv);
    form.appendChild(todoButtonsDiv);

    parent.appendChild(form);

    function onSubmit(event) {
       event.preventDefault();
       const formData = new FormData(form);
       const selectedPriority = formData.get('priority');
       (0,_functions_tasks__WEBPACK_IMPORTED_MODULE_6__.createTask)(formData.get('date'), formData.get('titles'), formData.get('descriptions'), selectedPriority);
       form.reset();
       const modal = document.querySelector(".modal");
       modal.style.display = "none";
       (0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_4__.firstLoad)();
       form.removeEventListener('submit', onSubmit, true);
    }

    form.addEventListener('submit', onSubmit, true);

  }

function projectForm(parent) {
    const form = document.createElement('form');
    form.classList.add('display', "display-project");
    form.id = 'display-modal';
    form.style.display = "grid";

    const textArea = document.createElement('textarea');
    textArea.name = 'project-title';
    textArea.id = 'project-title';
    textArea.placeholder = 'New Project Title:';

    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = "display-project-buttons"

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('display-submit');
    submitButton.textContent = 'Submit';

    buttonsContainer.appendChild(submitButton);
    form.appendChild(textArea);
    form.appendChild(buttonsContainer);

    parent.appendChild(form);

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(form);
        console.log(formData.get('project-title'))
        ;(0,_functions_tasks__WEBPACK_IMPORTED_MODULE_6__.createProject)(formData.get('project-title'));
        form.reset();
        const modal = document.querySelector(".modal");
        modal.style.display = "none";
        (0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_4__.firstLoad)();
        form.removeEventListener('submit', onSubmit, true);
    }
    
    form.addEventListener('submit', onSubmit, true);

    }

function noteForm(parent) {
    const form = document.createElement('form');
    form.classList.add('display', "display-note");
    form.id = 'display-modal';
    form.style.display = "grid"

    const textArea = document.createElement('textarea');
    textArea.name = 'note';
    textArea.id = 'note';
    textArea.placeholder = 'New Note:';

    const textDes = document.createElement('textarea');
    textDes.name = 'note-des';
    textDes.id = 'note-des';
    textDes.placeholder = 'Note Description:';

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('display-note-buttons');

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('display-submit');
    submitButton.textContent = 'Submit';

    buttonsContainer.appendChild(submitButton);

    form.appendChild(textArea);
    form.appendChild(textDes);
    form.appendChild(buttonsContainer);

    parent.appendChild(form);

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(form);
        console.log(formData.get('note'), formData.get('note-des'))
        ;(0,_functions_tasks__WEBPACK_IMPORTED_MODULE_6__.createNotes)(formData.get('note'), formData.get('note-des'));
        form.reset();
        const modal = document.querySelector(".modal");
        modal.style.display = "none";
        (0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_4__.firstLoad)();
        form.removeEventListener('submit', onSubmit, true);
    }
    
    form.addEventListener('submit', onSubmit, true);

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalAdd);

/***/ }),

/***/ "./src/pages/modalPages/detailModal.js":
/*!*********************************************!*\
  !*** ./src/pages/modalPages/detailModal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/render */ "./src/functions/render.js");


function detailMod(obj) {
    const body = document.querySelector("body")
    const myModal = document.createElement("div")
    const modalContent = document.createElement("div")
    const span = document.createElement("span")
    const detailTitle = document.createElement("div")
    const detailProject = document.createElement("div")
    const detailPriority = document.createElement("div")
    const detailDueDate = document.createElement("div")
    const detailDescription = document.createElement("div")

    myModal.classList.add("modal")
    modalContent.classList.add("modal-detail","modal-content", "main")
    span.classList.add("close", "close-detail")
    detailTitle.classList.add("detail-title")
    detailProject.classList.add("detail-project", "detail-content")
    detailPriority.classList.add("detail-priority", "detail-content")
    detailDueDate.classList.add("detail-date", "detail-content")
    detailDescription.classList.add("detail-description", "detail-content")


    myModal.style.display = "flex"
    span.textContent = "close" 
    detailTitle.textContent = obj.title
    detailProject.textContent = "Project: " + obj.project 
    detailPriority.textContent = "Priority: " + obj.priority 
    detailDueDate.textContent = "Due Date: " + obj.date 
    detailDescription.textContent = "Description: " + obj.description

    const detailContent = document.querySelectorAll(".detail-content")
    console.log(detailContent)

    span.addEventListener("click", () => {
        myModal.style.display = "none"
        ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_0__.renderModal)()
    })

    body.appendChild(myModal)
    myModal.appendChild(modalContent)
    modalContent.appendChild(span)
    modalContent.appendChild(detailTitle)
    modalContent.appendChild(detailProject)
    modalContent.appendChild(detailPriority)
    modalContent.appendChild(detailDueDate)
    modalContent.appendChild(detailDescription)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (detailMod);

/***/ }),

/***/ "./src/pages/modalPages/editModal.js":
/*!*******************************************!*\
  !*** ./src/pages/modalPages/editModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/inputs */ "./src/functions/inputs.js");
/* harmony import */ var _functions_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/render */ "./src/functions/render.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home */ "./src/pages/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu */ "./src/pages/menu.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../.. */ "./src/index.js");






function editModal(obj) {   
    const body = document.querySelector("body")
    const editContainer = document.createElement("div")
    const modalFormEdit = document.createElement("form")
    const span = document.createElement("span")
    const editTitle = (0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputTitleNotes)("edit-content", "edit-title", modalFormEdit, "Title")
    const editDescription = (0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputTitleNotes)("edit-content", "edit-description", modalFormEdit, "Description:")
    const editDate = dueDateBtn(modalFormEdit) 
    const editPriority = bottomBtnPriority(modalFormEdit, obj.priority)
    bottomBtnSubmit(modalFormEdit)

    editPriority.setAttribute("checked", "true")
    span.classList.add("close", "close-detail")
    editContainer.classList.add("modal")
    modalFormEdit.classList.add("modal-edit","modal-content", "main")
    body.appendChild(editContainer)
    editContainer.appendChild(modalFormEdit)
    modalFormEdit.appendChild(span)
    
    span.addEventListener("click", () => {
        editContainer.style.display = "none"
    })
    
    editContainer.style.display = "flex"   
    span.textContent = "close"
    editTitle.textContent = obj.title
    editDescription.textContent = obj.description
    editDate.value = obj.date

    modalFormEdit.addEventListener('submit', (event) => {
        event.preventDefault();
        editContainer.style.display = 'none';
        const selectedPriority = document.querySelector('input[name="priority"]:checked').value;
        obj.title = editTitle.textContent
        obj.description =  editDescription.textContent
        obj.date = editDate.value
        obj.priority = selectedPriority
        ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_1__.render)()
        ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_1__.renderModal)()
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])()
        ;(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])()
        ;(0,___WEBPACK_IMPORTED_MODULE_4__.updateStorage)()
        });
}

function bottomBtnPriority(parent, objPrio) {
    const bottomBtns = document.createElement("div")
    const priorityText = document.createElement("div")
    console.log(objPrio)
    bottomBtns.classList.add("edit-bottom-btn-prio")
    parent.appendChild(bottomBtns)
    bottomBtns.appendChild(priorityText)
    priorityText.classList.add("edit-bottom-text-prio")
    priorityText.textContent = "Priority:"

    const low = (0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputRadio)(bottomBtns, "edit-button-low", "LOW", "low")
    const medium = (0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputRadio)(bottomBtns, "edit-button-medium", "Medium", "medium")
    const high = (0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputRadio)(bottomBtns, "edit-button-high", "High", "high")
    if (objPrio === "low") {
        console.log(low.value)
        return low
    }
    if (objPrio === "medium") {
        console.log(medium.value)
        return medium
    }
    if (objPrio === "high") {
        console.log(high.value)
        return high
    }
}

function bottomBtnSubmit(parent) {
    const bottomBtns = document.createElement("div")

    bottomBtns.classList.add("edit-bottom-btn-subm")
    parent.appendChild(bottomBtns)
    ;(0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputBtn)(bottomBtns, "edit-button", "submit edit")
}

function dueDateBtn(parent) {
    const dueDate = document.createElement("div")
    const dateText = document.createElement("label")
    
    dateText.classList.add("edit-bottom-text-date")
    dateText.textContent = "Due Date:"

    dueDate.classList.add("edit-bottom-btn-date")
    parent.appendChild(dueDate)
    dueDate.appendChild(dateText)
    return (0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputType)("edit-date-button", "edit-date-submit", dueDate, "date")
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editModal);

/***/ }),

/***/ "./src/pages/modalPages/noteModal.js":
/*!*******************************************!*\
  !*** ./src/pages/modalPages/noteModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/tasks */ "./src/functions/tasks.js");
/* harmony import */ var _functions_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/render */ "./src/functions/render.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home */ "./src/pages/home.js");
/* harmony import */ var _functions_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/inputs */ "./src/functions/inputs.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu */ "./src/pages/menu.js");






function noteModal() {
    const displayMenu = document.querySelector(".display-menu-small")
    displayMenu.setAttribute("class", "display-menu-small-notes")
    displayMenu.classList.add("display-menu-small")

    ;(0,_functions_inputs__WEBPACK_IMPORTED_MODULE_3__.inputTitle)("title-input-notes", "input-title", displayMenu, "TITLE")
    ;(0,_functions_inputs__WEBPACK_IMPORTED_MODULE_3__.inputTitleNotes)("description-input-notes", "input-description", displayMenu, "Description")
    bottomBtnSubmit(displayMenu)

    const modal = document.querySelector(".modal");
    const form = document.querySelector('#myForm');
    const formTitle = document.querySelector('#input-title');
    const formDescription = document.querySelector('#input-description');

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    modal.style.display = "flex";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        modal.style.display = 'none';
        (0,_functions_tasks__WEBPACK_IMPORTED_MODULE_0__.createNotes)(formTitle.value, formDescription.value)
        ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_1__.renderModal)()
        ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_1__.render)()
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])()
        ;(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])()
        });
        
    }
    
function bottomBtnSubmit(parent) {
    const bottomBtns = document.createElement("div")

    bottomBtns.classList.add("bottom-btn-note-submit")
    parent.appendChild(bottomBtns)
    ;(0,_functions_inputs__WEBPACK_IMPORTED_MODULE_3__.inputBtn)(bottomBtns, "note-button", "Submit", "submit-note")
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (noteModal);

/***/ }),

/***/ "./src/pages/modalPages/projectModal.js":
/*!**********************************************!*\
  !*** ./src/pages/modalPages/projectModal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/inputs */ "./src/functions/inputs.js");
/* harmony import */ var _functions_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/tasks */ "./src/functions/tasks.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home */ "./src/pages/home.js");
/* harmony import */ var _functions_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/render */ "./src/functions/render.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu */ "./src/pages/menu.js");






function projectModal() {
    const displayMenu = document.querySelector(".display-menu-small")
    displayMenu.setAttribute("class", "display-menu-small-project")
    displayMenu.classList.add("display-menu-small")

    ;(0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputTitle)("input-project-name", "input-project", displayMenu, "Project Name")
    bottomBtnSubmit(displayMenu)
    const modal = document.querySelector(".modal");
    const form = document.querySelector('#myForm');
    const formProjectTitle = document.querySelector('#input-project');


    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    modal.style.display = "flex";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        modal.style.display = 'none';
        (0,_functions_tasks__WEBPACK_IMPORTED_MODULE_1__.createProject)(formProjectTitle.value)
        ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_3__.render)()
        ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_3__.renderModal)()
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])()
        ;(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])()
        });

    console.log("project will be here!")
}


function bottomBtnSubmit(parent) {
    const bottomBtns = document.createElement("div")

    bottomBtns.classList.add("bottom-btn-note-submit")
    parent.appendChild(bottomBtns)
    ;(0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputBtn)(bottomBtns, "note-button", "Submit", "submit-note")
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModal);

/***/ }),

/***/ "./src/pages/modalPages/toDoModal.js":
/*!*******************************************!*\
  !*** ./src/pages/modalPages/toDoModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/inputs */ "./src/functions/inputs.js");
/* harmony import */ var _functions_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/render */ "./src/functions/render.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home */ "./src/pages/home.js");
/* harmony import */ var _functions_tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/tasks */ "./src/functions/tasks.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu */ "./src/pages/menu.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.. */ "./src/index.js");







function toDoModal() {
    const displayMenu = document.querySelector(".display-menu-small")
    displayMenu.classList.add("display-menu-small-todo")

    ;(0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputTitle)("title-input", "input-title", displayMenu, "TITLE")
    ;(0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputTitle)("description-input", "input-description", displayMenu, "Description")

    bottomBtnPriority()
    bottomBtnSubmit()
    dueDateBtn()

    const todoModal = document.querySelector("#todoModal")
    const projectMod = document.querySelector("#projectModal")
    const noteModal = document.querySelector("#noteModal")
    const modal = document.querySelector(".modal");
    const form = document.querySelector('#myForm');
    const formTitle = document.querySelector('#input-title');
    const formDescription = document.querySelector('#input-description');
    const formDateSubmit = document.querySelector('#date-submit');
    const formPriorityRadio = document.querySelectorAll('input[name="priority"]');
    console.log(todoModal)
    
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    modal.style.display = "flex";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        modal.style.display = 'none';
        const selectedPriority = document.querySelector('input[name="priority"]:checked').value;
        (0,_functions_tasks__WEBPACK_IMPORTED_MODULE_3__.createTask)(formDateSubmit.value, formTitle.value, formDescription.value , selectedPriority)
        ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_1__.render)()
        ;(0,_functions_render__WEBPACK_IMPORTED_MODULE_1__.renderModal)()
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])()
        ;(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])()
        ;(0,___WEBPACK_IMPORTED_MODULE_5__.updateStorage)()
      });
}

function bottomBtnPriority() {
    const displayMenu = document.querySelector(".display-menu-small")
    const bottomBtns = document.createElement("div")
    const priorityText = document.createElement("div")

    bottomBtns.classList.add("bottom-btn-todo-prio")
    displayMenu.appendChild(bottomBtns)
    bottomBtns.appendChild(priorityText)
    priorityText.classList.add("bottom-text-todo-prio")
    priorityText.textContent = "Priority:"

    ;(0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputRadio)(bottomBtns, "todo-button-low", "LOW", "low")
    ;(0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputRadio)(bottomBtns, "todo-button-medium", "Medium", "medium")
    ;(0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputRadio)(bottomBtns, "todo-button-high", "High", "high")
}

function bottomBtnSubmit() {
    const displayMenu = document.querySelector(".display-menu-small")
    const bottomBtns = document.createElement("div")

    bottomBtns.classList.add("bottom-btn-todo-subm")
    displayMenu.appendChild(bottomBtns)
    ;(0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputBtn)(bottomBtns, "todo-button", "Submit", "submit-todo")
}

function dueDateBtn() {
    const displayMenu = document.querySelector(".display-menu-small")
    const dueDate = document.createElement("div")
    const dateText = document.createElement("label")
    
    dateText.classList.add("bottom-text-todo-date")
    dateText.textContent = "Due Date:"

    dueDate.classList.add("bottom-btn-todo-date")
    displayMenu.appendChild(dueDate)
    dueDate.appendChild(dateText)
    ;(0,_functions_inputs__WEBPACK_IMPORTED_MODULE_0__.inputType)("date-button", "date-submit", dueDate, "date")
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoModal);

/***/ }),

/***/ "./src/pages/notes.js":
/*!****************************!*\
  !*** ./src/pages/notes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/dates */ "./src/functions/dates.js");
/* harmony import */ var _functions_arrays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/arrays */ "./src/functions/arrays.js");


function notes() {
    const displayMenu = document.querySelector(".display-menu")

    _functions_arrays__WEBPACK_IMPORTED_MODULE_1__.noteArray.forEach(function(obj) {
        const objContainer = document.createElement("div")
        objContainer.classList.add("display-menu-obj")
        displayMenu.appendChild(objContainer)
        createNotesLook(objContainer, obj.title, obj.description, obj)
    });
}

function createNotesLook(parent, title, description, obj) {
    const noteTitle = document.createElement("div")
    const noteDescritpion = document.createElement("div")

    noteTitle.setAttribute("contenteditable", "true")
    noteDescritpion.setAttribute("contenteditable", "true")
    
    noteTitle.classList.add("note-title")
    noteDescritpion.classList.add("note-description")

    noteTitle.textContent = title
    noteDescritpion.textContent = description

    noteTitle.addEventListener("blur", (event) => {
        const newTitle = event.target.textContent;
        obj.title = newTitle;
      });

      noteDescritpion.addEventListener("blur", (event) => {
        const newDescription = event.target.textContent;
        obj.description = newDescription;
    });

    parent.appendChild(noteTitle)
    parent.appendChild(noteDescritpion)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notes);

/***/ }),

/***/ "./src/pages/projectPage.js":
/*!**********************************!*\
  !*** ./src/pages/projectPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/arrays */ "./src/functions/arrays.js");
/* harmony import */ var _functions_displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/displayTasks */ "./src/functions/displayTasks.js");
/* harmony import */ var _functions_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/tasks */ "./src/functions/tasks.js");




function projects(idName) {
    const menu = document.querySelector(".display-menu")
    const projectArray = (0,_functions_arrays__WEBPACK_IMPORTED_MODULE_0__.findProjectTitles)(idName)
    ;(0,_functions_displayTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(menu, projectArray)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);

/***/ }),

/***/ "./src/pages/today.js":
/*!****************************!*\
  !*** ./src/pages/today.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_displayTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/displayTasks */ "./src/functions/displayTasks.js");
/* harmony import */ var _functions_dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/dates */ "./src/functions/dates.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _functions_arrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/arrays */ "./src/functions/arrays.js");





function todayPage() {
    const menu = document.querySelector(".display-menu")
    const today = new Date();
    const formattedDate = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_3__["default"])(today, 'yyyy-MM-dd');
    const todayArray = (0,_functions_arrays__WEBPACK_IMPORTED_MODULE_2__.findDateArray)(formattedDate)
    ;(0,_functions_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(menu, todayArray)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todayPage);

/***/ }),

/***/ "./src/pages/week.js":
/*!***************************!*\
  !*** ./src/pages/week.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/dates */ "./src/functions/dates.js");
/* harmony import */ var _functions_displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/displayTasks */ "./src/functions/displayTasks.js");
/* harmony import */ var _functions_arrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/arrays */ "./src/functions/arrays.js");




function Week() {
    const menu = document.querySelector(".display-menu")
    const weekArray = (0,_functions_arrays__WEBPACK_IMPORTED_MODULE_2__.nextWeek)()
    ;(0,_functions_displayTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(menu, weekArray)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Week);

/***/ }),

/***/ "./src/fonts/Ubuntu/Ubuntu-Light.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/Ubuntu/Ubuntu-Light.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f8765117ee72baf98124.ttf";

/***/ }),

/***/ "./src/fonts/Ubuntu/Ubuntu-Medium.ttf":
/*!********************************************!*\
  !*** ./src/fonts/Ubuntu/Ubuntu-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ea2efd053b75799d508e.ttf";

/***/ }),

/***/ "./src/fonts/Ubuntu/Ubuntu-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/Ubuntu/Ubuntu-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d89eda6750f6960a7456.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFzQixHQUFHLG9CQUFvQixtQkFBbUIsb0JBQW9CLEtBQUssT0FBTyx3RkFBd0YsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUVBQWU7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFFQUFlO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFFQUFlO0FBQzdCLGdCQUFnQixxRUFBZTtBQUMvQjtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqMkJvQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MscUVBQWU7QUFDOUQsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQjtBQUNBO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7O0FDbkZ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLG1DQUFtQyxNQUFNLDBEQUEwRCxNQUFNO0FBQ3pHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDL0Y3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMkM7QUFDUztBQUNwRDtBQUNlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaMkM7QUFDbUI7QUFDUTtBQUNsQjtBQUNwRDtBQUNlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkIsYUFBYSx1RUFBaUIsbUJBQW1CLDJFQUFxQixrQkFBa0I7QUFDeEY7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMkM7QUFDUztBQUNVO0FBQy9DO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUVBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1RUFBaUI7O0FBRXpDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkIyQztBQUNhO0FBQ1E7QUFDWjtBQUNwRDtBQUNlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkIsYUFBYSxvRUFBYyw0QkFBNEIsd0VBQWtCLDJCQUEyQjtBQUNwRztBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjJDO0FBQ1M7QUFDSTtBQUNWO0FBQ2lCO0FBQ2hEO0FBQ2Y7O0FBRUEsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQSx1QkFBdUIsMkVBQWlCO0FBQ3hDLDhCQUE4QiwrREFBUywrNEJBQSs0Qjs7QUFFdDdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0VBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9FQUFjOztBQUV0QztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQSx5SUFBeUk7QUFDekksSUFBSTtBQUNKLHFJQUFxSTtBQUNySSxJQUFJO0FBQ0osK0lBQStJO0FBQy9JLElBQUk7QUFDSixpSkFBaUo7QUFDako7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjJDO0FBQ1M7QUFDckM7QUFDZixFQUFFLGtFQUFZO0FBQ2Q7QUFDQSxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDhEO0FBQ0E7QUFDVjtBQUNyQztBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLHVFQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVFQUFpQjtBQUM5QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDJDO0FBQ1M7QUFDTjtBQUNpQjtBQUNoRDtBQUNmOztBQUVBLEVBQUUsa0VBQVk7QUFDZCx1QkFBdUIsMkVBQWlCO0FBQ3hDLHFCQUFxQiwrREFBUywyMkJBQTIyQjs7QUFFejRCO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQndEO0FBQ0o7QUFDSTtBQUNWO0FBQ2lCO0FBQ2hEO0FBQ2Y7O0FBRUEsRUFBRSxrRUFBWTtBQUNkLHVCQUF1QiwyRUFBaUI7QUFDeEMsOEJBQThCLCtEQUFTO0FBQ3ZDLGFBQWEsb0VBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvRUFBYztBQUMzQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ptRDtBQUNYO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkIsZUFBZSxtRUFBUzs7QUFFeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENtRDtBQUNYO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGtCQUFrQiw0REFBTTtBQUN4QixlQUFlLG1FQUFTO0FBQ3hCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0IwQztBQUNnQjtBQUNsQjtBQUNvQjtBQUNRO0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ007QUFDVztBQUNULENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUsd0JBQXdCLDRDQUE0QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixXQUFXLGVBQWU7QUFDMUIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLGFBQWEsUUFBUTtBQUNyQixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVkseUdBQXlHO0FBQ2pJLFlBQVksWUFBWSxxR0FBcUc7QUFDN0gsWUFBWSxZQUFZLCtHQUErRztBQUN2SSxZQUFZLFlBQVksaUhBQWlIO0FBQ3pJLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQSxFQUFFLHNFQUFZO0FBQ2Q7QUFDQSx1QkFBdUIsK0VBQWlCO0FBQ3hDLG1PQUFtTyxtRUFBYTtBQUNoUCw4QkFBOEIsbUVBQVMscTVCQUFxNUI7O0FBRTU3QjtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLG1FQUFTLG8zQkFBbzNCOztBQUVsNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDREQUFNOztBQUUzQixPQUFPLDZEQUFPO0FBQ2Q7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7O0FBR0EsdUJBQXVCLHlGQUErQjtBQUN0RCxnQkFBZ0IscUVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiwyRUFBYztBQUN4QztBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsdUVBQVU7O0FBRTlCO0FBQ0EsOEZBQThGLHdGQUF3QjtBQUN0SCxRQUFRLG1GQUFtQjtBQUMzQjs7QUFFQSwrRkFBK0YseUZBQXlCO0FBQ3hILFFBQVEsbUZBQW1CO0FBQzNCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2phQSx3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFM1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkN3QztBQUNBO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7O0FBRWQsT0FBTyw0REFBTTtBQUNiO0FBQ0E7O0FBRUEsYUFBYSw0REFBTTtBQUNuQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdGQUF3Rjs7QUFFeEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0NlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSix5Q0FBeUMsT0FBTztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGNEM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU8sT0FBTyxNQUFNO0FBQy9CLFdBQVcsT0FBTyxPQUFPLE1BQU07QUFDL0IsYUFBYSxNQUFNLElBQUksTUFBTTtBQUM3QixZQUFZLE1BQU0sSUFBSSxNQUFNO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLDJFQUFpQjtBQUN6QjtBQUNBO0FBQ0EsR0FBRztBQUNILFFBQVEsMkVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsWUFBWSwyRUFBaUI7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ2pDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7OztBQ2J3QztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyx5RUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMseUVBQWU7QUFDeEI7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsYUFBYSx5RUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakp3QztBQUNjO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2RUFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLHNFQUFZO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFdBQVcsc0VBQVk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsU0FBUyxzRUFBWTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLHNFQUFZO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGFBQWEsc0VBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHd0M7QUFDUjtBQUNRO0FBQ1o7QUFDTjs7QUFFMUM7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvRUFBYztBQUNoQyxjQUFjLGdFQUFVO0FBQ3hCLGtCQUFrQixvRUFBYztBQUNoQyxZQUFZLDhEQUFRO0FBQ3BCLFNBQVMsMkRBQUs7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCcUM7QUFDRDtBQUNOO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGVBQWUsbUVBQVM7QUFDeEIsU0FBUyxxRUFBZTtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQSx3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFM1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLHlEQUF5RDs7QUFFekQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSwwT0FBME87O0FBRTFPO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF1RztBQUN2RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSWlEO0FBQ3pFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF1RztBQUN2RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSWlEO0FBQ3pFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNFO0FBQ3RDLFlBQVksU0FBUztBQUNyQjtBQUNBLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0EsV0FBVyxlQUFlOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRCw0REFBTztBQUM3RDtBQUNBO0FBQ0EsMkJBQTJCLDJEQUFNLHFCQUFxQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsMkRBQU0sc0JBQXNCO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TG9DOztBQUVwQztBQUNBO0FBQ0EsMEJBQTBCLDJEQUFNO0FBQ2hDO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B3QztBQUVqQjtBQUNmO0FBQ1M7QUFDRztBQUNGOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBLDhCQUE4QixvREFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTs7QUFFQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRCx5Q0FBeUM7O0FBRXpDO0FBQ0EsbUJBQW1CLDBEQUFpQjtBQUNwQyxNQUFNLHlEQUFnQjtBQUN0QiwwQ0FBMEMsUUFBUTtBQUNsRCxLQUFLOztBQUVMOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDOEQ7QUFDQTs7QUFFOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFZLENBQUMsd0RBQWU7QUFDaEMsSUFBSSwrREFBZSxDQUFDLDJEQUFrQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CMEM7QUFDYTtBQUNGOztBQUVyRDtBQUNBO0FBQ0EsZ0NBQWdDLFNBQVM7QUFDekM7QUFDQTtBQUNBLDhDQUE4QyxZQUFZO0FBQzFELHVDQUF1QyxPQUFPO0FBQzlDLHFDQUFxQyxPQUFPO0FBQzVDOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUztBQUN6QztBQUNBLDhDQUE4QyxZQUFZO0FBQzFELHVDQUF1QyxPQUFPO0FBQzlDLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLFNBQVM7QUFDeEM7QUFDQSxzQ0FBc0MsS0FBSztBQUMzQyxzQ0FBc0MsT0FBTztBQUM3QyxvQ0FBb0MsT0FBTztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxTQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxPQUFPO0FBQ3BFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQVM7QUFDakIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFlO0FBQ3ZCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsS0FBSztBQUN4QywyQ0FBMkMsU0FBUztBQUNwRDtBQUNBLFFBQVEsMEVBQVM7QUFDakIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDLHVDQUF1QyxTQUFTO0FBQ2hEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQSxzQ0FBc0MsV0FBVztBQUNqRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR2tEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QywwQkFBMEI7QUFDakUsa0NBQWtDLGVBQWU7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGdFQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkN5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFPO0FBQ1gsSUFBSSxrREFBUTtBQUNaOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlEQUFPO0FBQ1g7O0FBRUE7QUFDQSxJQUFJLG1EQUFVO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEdUM7QUFDQztBQUNTO0FBQ047QUFDNkI7QUFDSTtBQUNyQztBQUNhOztBQUVwRCwrREFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLCtEQUFTO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsc0VBQVksQ0FBQyw2REFBVTtBQUN6QixDQUFDOztBQUVEO0FBQ0EsRUFBRSxzRUFBWSxDQUFDLDJEQUFRO0FBQ3ZCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksc0VBQVksQ0FBQyxvRUFBaUI7QUFDbEMsSUFBSSxtRUFBZ0I7QUFDcEIsd0NBQXdDLGVBQWU7QUFDdkQsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQSxFQUFFLDJEQUFRO0FBQ1YsQ0FBQzs7O0FBR0Q7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsOEJBQThCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksNEJBQTRCO0FBQ3hDLFlBQVksYUFBYTtBQUN6QixZQUFZLFlBQVk7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0lpQztBQUNRO0FBQ0w7O0FBRS9DO0FBQ0E7QUFDQSxJQUFJLG9FQUFZLE9BQU8sd0RBQVM7QUFDaEM7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Q0QjtBQUNsQjtBQUNNO0FBQ047QUFDRTtBQUNTO0FBQ21CO0FBQ0U7QUFDdkI7QUFDa0I7QUFDcUI7QUFDdEM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRUFBTztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxJQUFJLDBEQUFNO0FBQ1Y7QUFDQSxJQUFJLHNFQUFrQjtBQUN0QixJQUFJLGtEQUFJO0FBQ1I7QUFDQSxDQUFDOztBQUVEO0FBQ0EsSUFBSSwwREFBTTtBQUNWO0FBQ0EsSUFBSSxzRUFBa0I7QUFDdEIsSUFBSSxtREFBUztBQUNiO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLElBQUksMERBQU07QUFDVjtBQUNBLElBQUksc0VBQWtCO0FBQ3RCLElBQUksa0RBQUk7QUFDUjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlEQUFNO0FBQ2xCO0FBQ0EsWUFBWSx5REFBUTtBQUNwQixZQUFZLG9FQUFnQjtBQUM1QiwyQkFBMkIsZ0JBQWdCO0FBQzNDLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxJQUFJLHlEQUFNO0FBQ1Y7QUFDQSxJQUFJLHNFQUFrQjtBQUN0QixJQUFJLG1EQUFLO0FBQ1Q7QUFDQSxDQUFDOztBQUVEO0FBQ0EsSUFBSSwrREFBVztBQUNmLElBQUksc0RBQVM7QUFDYixJQUFJLHFFQUFjO0FBQ2xCLENBQUM7O0FBRUQ7QUFDQSxJQUFJLG1EQUFjO0FBQ2xCO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSHdCO0FBQ087QUFDTTtBQUNOO0FBQ1M7QUFDTTtBQUNjO0FBQ3pCOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLCtEQUFXO0FBQ2Y7QUFDQSxJQUFJLHFFQUFjO0FBQ2xCO0FBQ0E7QUFDQSxRQUFRLCtEQUFXO0FBQ25CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLCtEQUFXO0FBQ25CO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLFFBQVEsK0RBQVc7QUFDbkI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDREQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0RBQVM7QUFDaEI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRUFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDeFBxQzs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwrREFBVztBQUNuQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRDBFO0FBQzdCO0FBQ2xDO0FBQ0E7QUFDUzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrRUFBZTtBQUNyQyw0QkFBNEIsa0VBQWU7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBTTtBQUNkLFFBQVEsK0RBQVc7QUFDbkIsUUFBUSxrREFBSTtBQUNaLFFBQVEsa0RBQUk7QUFDWixRQUFRLGlEQUFhO0FBQ3JCLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLDZEQUFVO0FBQzFCLG1CQUFtQiw2REFBVTtBQUM3QixpQkFBaUIsNkRBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw0REFBUTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDREQUFTO0FBQ3BCOzs7QUFHQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR2dEO0FBQ0g7QUFDbEM7QUFDb0Q7QUFDcEQ7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksOERBQVU7QUFDZCxJQUFJLG1FQUFlO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFXO0FBQ25CLFFBQVEsK0RBQVc7QUFDbkIsUUFBUSwwREFBTTtBQUNkLFFBQVEsa0RBQUk7QUFDWixRQUFRLGtEQUFJO0FBQ1osU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksNERBQVE7QUFDWjs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRCtDO0FBQ1I7QUFDM0I7QUFDaUM7QUFDbEM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksOERBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQWE7QUFDckIsUUFBUSwwREFBTTtBQUNkLFFBQVEsK0RBQVc7QUFDbkIsUUFBUSxrREFBSTtBQUNaLFFBQVEsa0RBQUk7QUFDWixTQUFTOztBQUVUO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksNERBQVE7QUFDWjs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRxRTtBQUN4QjtBQUNsQztBQUN3QjtBQUN4QjtBQUNTOztBQUVuQztBQUNBO0FBQ0E7O0FBRUEsSUFBSSw4REFBVTtBQUNkLElBQUksOERBQVU7O0FBRWQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFVO0FBQ2xCLFFBQVEsMERBQU07QUFDZCxRQUFRLCtEQUFXO0FBQ25CLFFBQVEsa0RBQUk7QUFDWixRQUFRLGtEQUFJO0FBQ1osUUFBUSxpREFBYTtBQUNyQixPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDhEQUFVO0FBQ2QsSUFBSSw4REFBVTtBQUNkLElBQUksOERBQVU7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksNERBQVE7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFTO0FBQ2I7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUY2QjtBQUNHO0FBQy9DO0FBQ0E7O0FBRUEsSUFBSSxnRUFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q3dDO0FBQ0g7QUFDQzs7QUFFckQ7QUFDQTtBQUNBLHlCQUF5QixvRUFBaUI7QUFDMUMsSUFBSSxvRUFBWTtBQUNoQjs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZxQztBQUNSO0FBQ1A7QUFDZTs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJEQUFNO0FBQ2hDLHVCQUF1QixnRUFBYTtBQUNwQyxJQUFJLG9FQUFZO0FBQ2hCOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiNkI7QUFDUTtBQUNOOztBQUU5QztBQUNBO0FBQ0Esc0JBQXNCLDJEQUFRO0FBQzlCLElBQUksb0VBQVk7QUFDaEI7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbW9kYWwuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbW9kYWxzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbW9kYWwuY3NzPzA3YmUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9tb2RhbHMuY3NzP2QwNTMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2ltYWdlcy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2ltYWdlcy90cmFzaC5zdmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9hcnJheXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9kYXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2Rpc3BsYXlUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2ZpcnN0TG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2lucHV0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9tb2RhbEFkZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvbW9kYWxQYWdlcy9kZXRhaWxNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvbW9kYWxQYWdlcy9lZGl0TW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL21vZGFsUGFnZXMvbm90ZU1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9tb2RhbFBhZ2VzL3Byb2plY3RNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvbW9kYWxQYWdlcy90b0RvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL25vdGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9wcm9qZWN0UGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3dlZWsuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsb3NlLWRldGFpbCB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbG9zZS1kZXRhaWwge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4ubWFpbi1zbWFsbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTcwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYzcHggMWZyO1xcbiAgICBoZWlnaHQ6IDI1cmVtO1xcbiAgICB3aWR0aDogNDByZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxufVxcblxcbiAgICAuaGVhZGVyLXNtYWxsIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAgICAgLmhlYWRlci1zbWFsbCBoMSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmhlYWRlci1zbWFsbCBzcGFuIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgLm1lbnUtc21hbGwge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgICAgIC5tZW51LXNtYWxsIGxpIHtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAuZGlzcGxheS10b2RvIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyIDFmcjtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIlVidW50dS1MaWdodFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIH1cXG5cXG5cXG4gICAgICAgIC5kaXNwbGF5LWRhdGUge1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuZGlzcGxheS1kYXRlIGlucHV0IHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAzcHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZGlzcGxheS1kYXRlIGlucHV0OmZvY3VzIHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIC5kaXNwbGF5LXRvZG8tYnV0dG9ucyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucmFkaW8tYnV0dG9ucyBzcGFuIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLyogSGlkZSB0aGUgZGVmYXVsdCByYWRpbyBpbnB1dCAqL1xcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAvKiBTdHlsZSB0aGUgbGFiZWwgdG8gbG9vayBsaWtlIGEgYnV0dG9uICovXFxuICAgICAgICAgICAgbGFiZWwucmFkaW8tYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTFweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIlVidW50dS1MaWdodFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC8qIFN0eWxlIHRoZSBsYWJlbCB0byBsb29rIGxpa2UgYSBidXR0b24gd2hlbiB0aGUgcmFkaW8gaW5wdXQgaXMgY2hlY2tlZCAqL1xcbiAgICAgICAgICAgIGlucHV0W2lkPVxcXCJsb3dcXFwiXTpob3ZlciArIGxhYmVsLnJhZGlvLWJ1dHRvbixcXG4gICAgICAgICAgICBpbnB1dFtpZD1cXFwibG93XFxcIl06Y2hlY2tlZCArIGxhYmVsLnJhZGlvLWJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaW5wdXRbaWQ9XFxcIm1lZGl1bVxcXCJdOmhvdmVyICsgbGFiZWwucmFkaW8tYnV0dG9uLFxcbiAgICAgICAgICAgIGlucHV0W2lkPVxcXCJtZWRpdW1cXFwiXTpjaGVja2VkICsgbGFiZWwucmFkaW8tYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGlucHV0W2lkPVxcXCJoaWdoXFxcIl06aG92ZXIgKyBsYWJlbC5yYWRpby1idXR0b24sXFxuICAgICAgICAgICAgaW5wdXRbaWQ9XFxcImhpZ2hcXFwiXTpjaGVja2VkICsgbGFiZWwucmFkaW8tYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5kaXNwbGF5LXN1Ym1pdCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTFweDtcXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHUtTGlnaHRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgLmRpc3BsYXktcHJvamVjdCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0ZnIgMWZyO1xcbiAgICAgICAgcGFkZGluZzogMjVweDtcXG4gICAgfVxcblxcbiAgICAgICAgLmRpc3BsYXktcHJvamVjdCB0ZXh0YXJlYSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjZGlzcGxheS1wcm9qZWN0LWJ1dHRvbnMge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgfVxcblxcblxcbiAgICAuZGlzcGxheS1ub3RlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAgNGZyIDFmcjtcXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIH1cXG5cXG4gICAgICAgIC5kaXNwbGF5LW5vdGUgdGV4dGFyZWEge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2Rpc3BsYXktbm90ZS1idXR0b25zIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIH1cXG4gICAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tb2RhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0FBQzVEOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO0lBQ2I7O1FBRUk7WUFDSSxlQUFlO1FBQ25COztRQUVBO1lBQ0ksZUFBZTtZQUNmLG1CQUFtQjtRQUN2Qjs7SUFFSjtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsU0FBUztJQUNiOztRQUVJO1lBQ0ksa0JBQWtCO1lBQ2xCLGVBQWU7UUFDbkI7O0lBRUo7UUFDSSxhQUFhO1FBQ2IsbUNBQW1DO1FBQ25DLGFBQWE7UUFDYix1Q0FBdUM7SUFDM0M7OztRQUdJO1lBQ0ksa0JBQWtCO1lBQ2xCLGlCQUFpQjtRQUNyQjtZQUNJO2dCQUNJLGlCQUFpQjtnQkFDakIsc0JBQXNCO2dCQUN0QiwyQkFBMkI7Z0JBQzNCLHNDQUFzQztnQkFDdEMsZ0JBQWdCO2dCQUNoQixpQkFBaUI7WUFDckI7O1lBRUE7Z0JBQ0ksc0JBQXNCO2NBQ3hCOztRQUVOO1lBQ0ksYUFBYTtZQUNiLDhCQUE4QjtZQUM5QixtQkFBbUI7UUFDdkI7O1lBRUk7Z0JBQ0ksaUJBQWlCO2dCQUNqQixrQkFBa0I7WUFDdEI7O1lBRUEsaUNBQWlDO1lBQ2pDO2dCQUNJLGFBQWE7WUFDakI7O1lBRUEsMENBQTBDO1lBQzFDO2dCQUNJLHFCQUFxQjtnQkFDckIsaUJBQWlCO2dCQUNqQixzQkFBc0I7Z0JBQ3RCLHNCQUFzQjtnQkFDdEIsZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLGlCQUFpQjtnQkFDakIsaUJBQWlCO2dCQUNqQix1Q0FBdUM7WUFDM0M7O1lBRUEsMEVBQTBFO1lBQzFFOztnQkFFSSx1QkFBdUI7Z0JBQ3ZCLFdBQVc7Z0JBQ1gsbUJBQW1CO1lBQ3ZCOztZQUVBOztnQkFFSSx3QkFBd0I7Z0JBQ3hCLFdBQVc7Z0JBQ1gsb0JBQW9CO1lBQ3hCOztZQUVBOztnQkFFSSxxQkFBcUI7Z0JBQ3JCLFdBQVc7Z0JBQ1gsaUJBQWlCO1lBQ3JCOztZQUVBO2dCQUNJLGlCQUFpQjtnQkFDakIsaUJBQWlCO2dCQUNqQix1Q0FBdUM7WUFDM0M7O0lBRVI7UUFDSSxhQUFhO1FBQ2IsMkJBQTJCO1FBQzNCLGFBQWE7SUFDakI7O1FBRUk7WUFDSSxpQkFBaUI7UUFDckI7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLHlCQUF5QjtRQUM3Qjs7O0lBR0o7UUFDSSxhQUFhO1FBQ2IsZ0NBQWdDO1FBQ2hDLGFBQWE7SUFDakI7O1FBRUk7WUFDSSxpQkFBaUI7UUFDckI7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLHlCQUF5QjtRQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLm1haW4tc21hbGwge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE3MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2M3B4IDFmcjtcXG4gICAgaGVpZ2h0OiAyNXJlbTtcXG4gICAgd2lkdGg6IDQwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbn1cXG5cXG4gICAgLmhlYWRlci1zbWFsbCB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgICAgIC5oZWFkZXItc21hbGwgaDEge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5oZWFkZXItc21hbGwgc3BhbiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgICAgICB9XFxuXFxuICAgIC5tZW51LXNtYWxsIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgICAgICAubWVudS1zbWFsbCBsaSB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgLmRpc3BsYXktdG9kbyB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmciAxZnI7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHUtTGlnaHRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB9XFxuXFxuXFxuICAgICAgICAuZGlzcGxheS1kYXRlIHtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLmRpc3BsYXktZGF0ZSBpbnB1dCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggM3B4O1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmRpc3BsYXktZGF0ZSBpbnB1dDpmb2N1cyB7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAuZGlzcGxheS10b2RvLWJ1dHRvbnMge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnJhZGlvLWJ1dHRvbnMgc3BhbiB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC8qIEhpZGUgdGhlIGRlZmF1bHQgcmFkaW8gaW5wdXQgKi9cXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgLyogU3R5bGUgdGhlIGxhYmVsIHRvIGxvb2sgbGlrZSBhIGJ1dHRvbiAqL1xcbiAgICAgICAgICAgIGxhYmVsLnJhZGlvLWJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOXB4IDExcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHUtTGlnaHRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAvKiBTdHlsZSB0aGUgbGFiZWwgdG8gbG9vayBsaWtlIGEgYnV0dG9uIHdoZW4gdGhlIHJhZGlvIGlucHV0IGlzIGNoZWNrZWQgKi9cXG4gICAgICAgICAgICBpbnB1dFtpZD1cXFwibG93XFxcIl06aG92ZXIgKyBsYWJlbC5yYWRpby1idXR0b24sXFxuICAgICAgICAgICAgaW5wdXRbaWQ9XFxcImxvd1xcXCJdOmNoZWNrZWQgKyBsYWJlbC5yYWRpby1idXR0b24ge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGlucHV0W2lkPVxcXCJtZWRpdW1cXFwiXTpob3ZlciArIGxhYmVsLnJhZGlvLWJ1dHRvbixcXG4gICAgICAgICAgICBpbnB1dFtpZD1cXFwibWVkaXVtXFxcIl06Y2hlY2tlZCArIGxhYmVsLnJhZGlvLWJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpbnB1dFtpZD1cXFwiaGlnaFxcXCJdOmhvdmVyICsgbGFiZWwucmFkaW8tYnV0dG9uLFxcbiAgICAgICAgICAgIGlucHV0W2lkPVxcXCJoaWdoXFxcIl06Y2hlY2tlZCArIGxhYmVsLnJhZGlvLWJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZGlzcGxheS1zdWJtaXQge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOXB4IDExcHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1LUxpZ2h0XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgIC5kaXNwbGF5LXByb2plY3Qge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNGZyIDFmcjtcXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIH1cXG5cXG4gICAgICAgIC5kaXNwbGF5LXByb2plY3QgdGV4dGFyZWEge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2Rpc3BsYXktcHJvamVjdC1idXR0b25zIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgLmRpc3BsYXktbm90ZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgIDRmciAxZnI7XFxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICB9XFxuXFxuICAgICAgICAuZGlzcGxheS1ub3RlIHRleHRhcmVhIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNkaXNwbGF5LW5vdGUtYnV0dG9ucyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICB9XFxuICAgIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHUtTWVkaXVtXFxcIjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIH1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHUtUmVndWxhclxcXCI7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlVidW50dS1MaWdodFxcXCI7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcblxcbi8qIEZvciBXZWJraXQgYnJvd3NlcnMgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDhweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTkwRkY7XFxufVxcblxcbi8qIEZvciBGaXJlZm94ICovXFxuOjotbW96LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiA4cHg7XFxufVxcblxcbjo6LW1vei1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU5MEZGO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzFFOTBGRjtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICNmZmY7XFxuICAgIC0tdGV4dC1jb2xvcjogIzMzMztcXG4gICAgLS1iZy1jb2xvcjogI2Y1ZjVmNTtcXG59ICBcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4gIFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBDbGFzc2VzIHdpdGggbGFyZ2UgbmV4dCB0byBpdCBhcmUgZm9yIG5vbiBtb2RhbCBlbGVtZW50cyAqL1xcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ubWFpbi1sYXJnZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggMWZyO1xcbiAgICBoZWlnaHQ6IDQ1cmVtO1xcbiAgICB3aWR0aDogOTByZW07XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuLmhlYWRlci1sYXJnZSB7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4gICAgLmhlYWRlciBoMSB7XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIlVidW50dS1NZWRpdW1cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlci1sYXJnZSBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciBzcGFuIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1LU1lZGl1bVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyLWxhcmdlIHNwYW4ge1xcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICB9XFxuXFxuLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHUtTGlnaHRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjY2NjO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubWVudS1sYXJnZSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcXG59XFxuXFxuICAgIC5tZW51LWxhcmdlIGxpIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogODBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAubWVudS1sYXJnZSB1bCB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XFxuICAgIH1cXG5cXG4gICAgICAgIHVsIC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgfVxcbiAgICBcXG4gICAgLm1lbnUtYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgbWFyZ2luOiAwIDM1JTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dDtcXG4gICAgICB9XFxuXFxuICAgIC5tZW51LWJ1dHRvbjphY3RpdmUge1xcbiAgICAgICAgdG9wOiAycHg7XFxuICAgIH0gXFxuXFxuICAgIC5tZW51LWJ1dHRvbiBzcGFuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNTRweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIH1cXG5cXG4uZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZGlzcGxheS1sYXJnZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbiAgICAudGFzay1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcHggNzVweCAxZnIgMTUwcHggMTAwcHggNjBweCA2MHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAudGFzay1jb2xvciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YXNrLWNoZWNrYm94IHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFzay10aXRsZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1LUxpZ2h0XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhc2stZGV0YWlscyB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1LU1lZGl1bVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFzay1kYXRlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogXFxcIlVidW50dS1MaWdodFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaWNvbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIGZpbGw6IGJsYWNrO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMC4ycztcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBcXG4gICAgICAgICAgYTpob3ZlciAuaWNvbiB7XFxuICAgICAgICAgICAgZmlsbDogYmx1ZTtcXG4gICAgICAgICAgfVxcblxcblxcbi8qIEhlcmUgYXJlIGdsb2JhbCBzdHlsZXMgdGhhdCBhcmUgbWVhbnQgdG8gYmUgcmV1c2VkICovXFxuYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLyogYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpOyAqL1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgdG9wOiAycHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QiwrREFBZ0U7RUFDbEU7QUFDRjtJQUNJLDZCQUE2QjtJ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SUFDM0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7RUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHUtTWVkaXVtXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtTWVkaXVtLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIH1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHUtUmVndWxhclxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHUtTGlnaHRcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1MaWdodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcblxcbi8qIEZvciBXZWJraXQgYnJvd3NlcnMgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDhweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTkwRkY7XFxufVxcblxcbi8qIEZvciBGaXJlZm94ICovXFxuOjotbW96LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiA4cHg7XFxufVxcblxcbjo6LW1vei1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU5MEZGO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzFFOTBGRjtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICNmZmY7XFxuICAgIC0tdGV4dC1jb2xvcjogIzMzMztcXG4gICAgLS1iZy1jb2xvcjogI2Y1ZjVmNTtcXG59ICBcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4gIFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBDbGFzc2VzIHdpdGggbGFyZ2UgbmV4dCB0byBpdCBhcmUgZm9yIG5vbiBtb2RhbCBlbGVtZW50cyAqL1xcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ubWFpbi1sYXJnZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggMWZyO1xcbiAgICBoZWlnaHQ6IDQ1cmVtO1xcbiAgICB3aWR0aDogOTByZW07XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuLmhlYWRlci1sYXJnZSB7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4gICAgLmhlYWRlciBoMSB7XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIlVidW50dS1NZWRpdW1cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlci1sYXJnZSBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciBzcGFuIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1LU1lZGl1bVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyLWxhcmdlIHNwYW4ge1xcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICB9XFxuXFxuLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHUtTGlnaHRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjY2NjO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubWVudS1sYXJnZSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcXG59XFxuXFxuICAgIC5tZW51LWxhcmdlIGxpIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogODBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAubWVudS1sYXJnZSB1bCB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XFxuICAgIH1cXG5cXG4gICAgICAgIHVsIC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgfVxcbiAgICBcXG4gICAgLm1lbnUtYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgbWFyZ2luOiAwIDM1JTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dDtcXG4gICAgICB9XFxuXFxuICAgIC5tZW51LWJ1dHRvbjphY3RpdmUge1xcbiAgICAgICAgdG9wOiAycHg7XFxuICAgIH0gXFxuXFxuICAgIC5tZW51LWJ1dHRvbiBzcGFuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNTRweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIH1cXG5cXG4uZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZGlzcGxheS1sYXJnZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbiAgICAudGFzay1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcHggNzVweCAxZnIgMTUwcHggMTAwcHggNjBweCA2MHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAudGFzay1jb2xvciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YXNrLWNoZWNrYm94IHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFzay10aXRsZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1LUxpZ2h0XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhc2stZGV0YWlscyB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1LU1lZGl1bVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFzay1kYXRlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogXFxcIlVidW50dS1MaWdodFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaWNvbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIGZpbGw6IGJsYWNrO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMC4ycztcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBcXG4gICAgICAgICAgYTpob3ZlciAuaWNvbiB7XFxuICAgICAgICAgICAgZmlsbDogYmx1ZTtcXG4gICAgICAgICAgfVxcblxcblxcbi8qIEhlcmUgYXJlIGdsb2JhbCBzdHlsZXMgdGhhdCBhcmUgbWVhbnQgdG8gYmUgcmV1c2VkICovXFxuYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLyogYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpOyAqL1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgdG9wOiAycHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiBHKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIFkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiBSKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiBMKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiB3KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiBJKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiBEKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIGUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiBjKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiBiKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gQihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiBLKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIFgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIHgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIHooZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiB0KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIFQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG5cbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFscy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFscy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgY2xhc3M9XFxcImZlYXRoZXIgZmVhdGhlci1lZGl0XFxcIj48cGF0aCBkPVxcXCJNMTEgNEg0YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0ydi03XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE4LjUgMi41YTIuMTIxIDIuMTIxIDAgMCAxIDMgM0wxMiAxNWwtNCAxIDEtNCA5LjUtOS41elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgY2xhc3M9XFxcImZlYXRoZXIgZmVhdGhlci10cmFzaC0yXFxcIj48cG9seWxpbmUgcG9pbnRzPVxcXCIzIDYgNSA2IDIxIDZcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTE5IDZ2MTRhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJWNm0zIDBWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYyXFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjEwXFxcIiB5MT1cXFwiMTFcXFwiIHgyPVxcXCIxMFxcXCIgeTI9XFxcIjE3XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE0XFxcIiB5MT1cXFwiMTFcXFwiIHgyPVxcXCIxNFxcXCIgeTI9XFxcIjE3XFxcIj48L2xpbmU+PC9zdmc+XCIiLCJpbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCdcbmltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZERheXMnXG4vLyBpbXBvcnQgeyByZW5kZXIgfSBmcm9tICcuL3JlbmRlcidcbi8vIGltcG9ydCBtZW51IGZyb20gJy4uL3BhZ2VzL21lbnUnXG4vLyBpbXBvcnQgeyBkZWZhdWx0UHJvamVjdE5hbWUgfSBmcm9tICcuL3Rhc2tzJ1xuLy8gaW1wb3J0IGhvbWUgZnJvbSAnLi4vcGFnZXMvaG9tZSdcbi8vIGltcG9ydCB7dXBkYXRlU3RvcmFnZX0gZnJvbSAnLi4nXG5cbi8vIEhlcmUgYXJlIGZ1bmN0aW9ucyB0aGF0IGFkZCBvYmplY3RzIHRvIGFycmF5cywgc3RvcmUgdGhlbSBhbmQgZGlzcGxheSB0aGVtIG9uIHBhZ2UuXG5sZXQgdGFza0FycmF5ID0gW1xuICAgIHtcbiAgICAgICAgcHJvamVjdDogXCJ3b3JrXCIsXG4gICAgICAgIHRpdGxlOiBcIldoYXQgdG8gZG9cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwid2RhZGFkYWRhZGFhZGFcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibG93XCIsXG4gICAgICAgIGRhdGU6IFwiMjAxNC0wMi0wM1wiLFxuICAgICAgICBpZDogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBwcm9qZWN0OiBcIndvcmtcIixcbiAgICAgICAgdGl0bGU6IFwiV2hhdCB0byBkb1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJ3ZGFkYWRhZGFkYWFkYVwiLFxuICAgICAgICBwcmlvcml0eTogXCJsb3dcIixcbiAgICAgICAgZGF0ZTogXCIyMDE0LTAyLTAzXCIsXG4gICAgICAgIGlkOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHByb2plY3Q6IFwid29ya1wiLFxuICAgICAgICB0aXRsZTogXCJXaGF0IHRvIGRvXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIndkYWRhZGFkYWRhYWRhXCIsXG4gICAgICAgIHByaW9yaXR5OiBcImxvd1wiLFxuICAgICAgICBkYXRlOiBcIjIwMTQtMDItMDNcIixcbiAgICAgICAgaWQ6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcHJvamVjdDogXCJyZWxheFwiLFxuICAgICAgICB0aXRsZTogXCJQbGF5IGdhbWVzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcInh4eHh4eHh4eHh4eHh4eHh4XCIsXG4gICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICBkYXRlOiBcIjIwMTQtMDEtMDRcIixcbiAgICAgICAgaWQ6IDJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcHJvamVjdDogXCJ3b3JrXCIsXG4gICAgICAgIHRpdGxlOiBcIlJlcG9ydCBhYm91dCBkb2xwaGluc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJ4eHh4eHh4eHh4eHh4eHh4eFwiLFxuICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICAgIGRhdGU6IFwiMjAxNC0wMy0wNVwiLFxuICAgICAgICBpZDogM1xuICAgIH0sXG4gICAge1xuICAgICAgICBwcm9qZWN0OiBcIndvcmtcIixcbiAgICAgICAgdGl0bGU6IFwiVGFsayB0byBKYXJyZXRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwieHh4eHh4eHh4eHh4eHh4eHhcIixcbiAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgICBkYXRlOiBcIjIwMjMtMDQtMjVcIixcbiAgICAgICAgaWQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcHJvamVjdDogXCJ3b3JrXCIsXG4gICAgICAgIHRpdGxlOiBcIkJyaW5nIEJvc3MgY29mZmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiZ2dnZ2dnXCIsXG4gICAgICAgIHByaW9yaXR5OiBcImxvd1wiLFxuICAgICAgICBkYXRlOiBcIjIwMjMtMDQtMjdcIixcbiAgICAgICAgaWQ6IDVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcHJvamVjdDogXCJyZWxheFwiLFxuICAgICAgICB0aXRsZTogXCJEZWxldGUgeHh4IGZpbGVzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImdnZ2dnZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICAgIGRhdGU6IFwiMjAyMy0wNC0yM1wiLFxuICAgICAgICBpZDogNlxuICAgIH1cbl1cblxuY29uc3QgcHJvamVjdEFycmF5ID0gW1wid29ya1wiLCBcInJlbGF4XCJdXG5jb25zdCBub3RlQXJyYXkgPSBbXVxuXG5mdW5jdGlvbiByZXR1cm5UYXNrQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRhc2tBcnJheVxufVxuXG5mdW5jdGlvbiByZXR1cm5Qcm9qZWN0QXJyYXkoKSB7XG4gICAgaWYoIXByb2plY3RBcnJheSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgdW5pcXVlTmFtZXMgPSBbLi4ubmV3IFNldChwcm9qZWN0QXJyYXkpXTtcbiAgICByZXR1cm4gdW5pcXVlTmFtZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2sob2JqKSB7XG4gICAgdGFza0FycmF5LnB1c2gob2JqKVxuICAgIGFkZElkVG9UYXNrKClcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tBcnJheSkpO1xufVxuXG5mdW5jdGlvbiBhZGROb3RlKG9iaikge1xuICAgIG5vdGVBcnJheS5wdXNoKG9iailcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSkge1xuICAgIGNvbnN0IG5ld1RpdGxlID0gdGl0bGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKTtcbiAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdUaXRsZSlcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpXG59XG5cbi8vIGZ1bmN0aW9uIHJlbW92ZUZyb21BcnJheShpZCkge1xuLy8gICAgIGxldCBpbmRleFRvUmVtb3ZlID0gZGF0ZUFycmF5LmZpbmRJbmRleChvYmogPT4gb2JqLmlkID09PSBpZCk7XG4vLyAgICAgLy8gSWYgdGhlIG9iamVjdCBpcyBmb3VuZCBpbiB0aGUgYXJyYXksIHJlbW92ZSBpdFxuLy8gICAgIGlmIChpbmRleFRvUmVtb3ZlICE9PSAtMSkge1xuLy8gICAgICAgICBkYXRlQXJyYXkuc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuLy8gICAgIH1cbi8vICAgICBhZGRJZFRvVGFzaygpXG4vLyAgICAgcmVuZGVyKClcbi8vICAgICBtZW51KClcbi8vICAgICBkZWZhdWx0UHJvamVjdE5hbWUoKVxuLy8gICAgIGhvbWUoKVxuLy8gICAgIHVwZGF0ZVN0b3JhZ2UoKVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBzZXRTdG9yYWdlQXJyYXkoc3RvcmFnZUFycmF5KSB7XG4vLyAgICAgZGF0ZUFycmF5ID0gc3RvcmFnZUFycmF5XG4vLyB9XG5cbmZ1bmN0aW9uIGFkZElkVG9UYXNrKCkge1xuICAgIHRhc2tBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKG9iaiwgaW5kZXgpIHtcbiAgICAgICAgb2JqLmlkID0gaW5kZXhcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZmluZFByb2plY3RUaXRsZXMocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBuZXdzdHJpbmcgPSBwcm9qZWN0TmFtZS5yZXBsYWNlKC8tL2csICcgJylcbiAgICBjb25zb2xlLmxvZyhuZXdzdHJpbmcpXG4gICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcbiAgICB0YXNrQXJyYXkuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYob2JqLnByb2plY3QgPT09IG5ld3N0cmluZykge1xuICAgICAgICAgICAgbmV3QXJyYXkucHVzaChvYmopXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0FycmF5XG59XG5cbi8vIGZ1bmN0aW9uIGZpbmREYXRlQXJyYXkoZGF0ZSkge1xuLy8gICAgIGNvbnN0IG5ld0FycmF5ID0gW107XG4vLyAgICAgZGF0ZUFycmF5LmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4vLyAgICAgICAgIGNvbnN0IG5ld29iakFycmF5ID0gb2JqLmRhdGVcbi8vICAgICAgICAgaWYobmV3b2JqQXJyYXkgPT09IGRhdGUpIHtcbi8vICAgICAgICAgICAgIG5ld0FycmF5LnB1c2gob2JqKVxuLy8gICAgICAgICB9XG4gICAgICAgIFxuLy8gICAgIH0pO1xuLy8gICAgIHJldHVybiBuZXdBcnJheVxuLy8gfVxuXG5mdW5jdGlvbiBkaXNwbGF5QWxsUHJvamVjdFRpdGxlcygpIHtcbiAgICB0YXNrQXJyYXkuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcHJvamVjdEFycmF5LnB1c2gob2JqLnByb2plY3QpXG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2plY3RBcnJheVxufVxuXG5mdW5jdGlvbiBuZXh0V2VlaygpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgbmV4dFNldmVuRGF5cyA9IFsuLi5BcnJheSg3KV0ubWFwKChfLCBpKSA9PiBhZGREYXlzKHRvZGF5LCBpKSk7XG4gICAgY29uc3Qgd2Vla0FycmF5ID0gW107XG4gICAgbmV4dFNldmVuRGF5cy5mb3JFYWNoKChkYXRlLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHREYXkgPSBgJHtmb3JtYXQoZGF0ZSwgJ3l5eXktTU0tZGQnKX1gXG4gICAgICAgIHRhc2tBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgY29uc3QgbmV3b2JqQXJyYXkgPSBvYmouZGF0ZVxuICAgICAgICAgICAgaWYobmV3b2JqQXJyYXkgPT09IG5leHREYXkpIHtcbiAgICAgICAgICAgICAgICB3ZWVrQXJyYXkucHVzaChvYmopXG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gd2Vla0FycmF5XG59XG5cbmZ1bmN0aW9uIHRvZGF5VGFza3MoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZGF5Rm9ybWF0dGVkID0gYCR7Zm9ybWF0KHRvZGF5LCAneXl5eS1NTS1kZCcpfWBcbiAgICBjb25zdCB0b2RheUFycmF5ID0gdGFza0FycmF5LmZpbHRlcigob2JqKSA9PiBvYmouZGF0ZSA9PT0gdG9kYXlGb3JtYXR0ZWQpO1xuICAgIHJldHVybiB0b2RheUFycmF5O1xuICB9XG5cbi8vIGV4cG9ydCB7YWRkVGFzaywgZmluZFByb2plY3RUaXRsZXMsIGZpbmREYXRlQXJyYXksXG4vLyAgICAgIGRpc3BsYXlBbGxQcm9qZWN0VGl0bGVzLCBkYXRlQXJyYXksIG5leHRXZWVrLFxuLy8gICAgICBhZGROb3RlLCBub3RlQXJyYXksIGFkZFByb2plY3QsIHJlbW92ZUZyb21BcnJheSwgc2V0U3RvcmFnZUFycmF5fVxuZXhwb3J0IHtyZXR1cm5UYXNrQXJyYXksIG5leHRXZWVrLCB0b2RheVRhc2tzLFxuICAgICBmaW5kUHJvamVjdFRpdGxlcywgYWRkVGFzaywgYWRkUHJvamVjdCxcbiAgICAgYWRkTm90ZSwgcmV0dXJuUHJvamVjdEFycmF5fSIsImltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0J1xuXG5mdW5jdGlvbiBjdXJyZW50RGF0ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdChjdXJyZW50RGF0ZSwgJ0VFRUUsIE1NTU0gZG8sIHl5eXknKTtcbiAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3VycmVudERhdGUgXG4iLCJpbXBvcnQgeyBhZGRUYXNrLCBmaW5kUHJvamVjdFRpdGxlcywgZmluZERhdGVBcnJheSwgXG4gICAgZGlzcGxheUFsbFByb2plY3RUaXRsZXMsIGRhdGVBcnJheSwgbmV4dFdlZWsgfSBmcm9tIFwiLi9hcnJheXNcIlxuaW1wb3J0IHsgaW5wdXRUeXBlLCBpbnB1dEJ0biwgaW5wdXRJbWdUcmFzaCwgaW5wdXRJbWdFZGl0LFxuICAgICBpbnB1dENoZWNrQm94LCBpbnB1dERldGFpbCB9IGZyb20gXCIuL2lucHV0c1wiXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGFkZGVkUHJvamVjdE5hbWUgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHRyYXNoIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3RyYXNoLnN2Z1wiXG5pbXBvcnQgZWRpdCBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9lZGl0LnN2Z1wiXG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhhcnJheSkge1xuICAgIGNvbnN0IG5vZGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpO1xuICAgIGNvbnN0IG9yaWdpbmFsTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmlnaW5hbCcpO1xuICAgIG9yaWdpbmFsTm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG5cbiAgICBpZiAoIW9yaWdpbmFsTm9kZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVsZW1lbnQgd2l0aCBpZCAnb3JpZ2luYWwnIG5vdCBmb3VuZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIGNvbnN0IGNsb25lZE5vZGUgPSBvcmlnaW5hbE5vZGUuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNsb25lZE5vZGUuaWQgPSAnY2xvbmVkJztcbiAgXG4gICAgLy8gUmVtb3ZlIGFsbCBjaGlsZCBub2RlcyBleGNlcHQgdGhlIG9yaWdpbmFsXG4gICAgd2hpbGUgKG5vZGVDb250YWluZXIubGFzdENoaWxkICYmIG5vZGVDb250YWluZXIubGFzdENoaWxkICE9PSBvcmlnaW5hbE5vZGUpIHtcbiAgICAgICAgbm9kZUNvbnRhaW5lci5yZW1vdmVDaGlsZChub2RlQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfVxuICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShhcnJheVtpXS5kYXRlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXJyYXlbaV0uZGF0ZSlcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdChkYXRlLCAnTU1NIGQnKTtcbiAgICAgICAgY29uc3QgY2xvbmVkTm9kZSA9IG9yaWdpbmFsTm9kZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNsb25lZE5vZGUuaWQgPSAnaWQtJyArIGk7XG4gICAgICAgIGNsb25lZE5vZGUucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKS50ZXh0Q29udGVudCA9IGFycmF5W2ldLnRpdGxlO1xuICAgICAgICBjbG9uZWROb2RlLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRhdGUnKS50ZXh0Q29udGVudCA9IGZvcm1hdHRlZERhdGU7XG4gICAgICAgIG5vZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvbmVkTm9kZSk7XG4gICAgfVxuICBcbiAgICBvcmlnaW5hbE5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKGFycmF5KSB7XG4gIGNvbnN0IG5vZGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWRpc3BsYXlcIilcblxuXG4gIGNvbnN0IGNoaWxkcmVuID0gbm9kZUNvbnRhaW5lci5jaGlsZE5vZGVzO1xuICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAxOyBpLS0pIHtcbiAgICBub2RlQ29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkcmVuW2ldKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuYW1lID0gYXJyYXlbaV07XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRlbnRcIilcbiAgICBsaXN0SXRlbS5pZCA9IG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKTsgLy8gQ29udmVydCBuYW1lIHRvIGxvd2VyY2FzZSBhbmQgcmVwbGFjZSBhbnkgc3BhY2VzIHdpdGggaHlwaGVucyB0byBjcmVhdGUgYW4gSURcbiAgICBub2RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgLy8gQXBwZW5kIHRoZSBsaSBlbGVtZW50IHRvIHRoZSBwYXJlbnQgZWxlbWVudFxuXG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGRpc3BsYXlUYXNrcyhmaW5kUHJvamVjdFRpdGxlcyh0aGlzLmlkKSlcbiAgICAgIGFkZGVkUHJvamVjdE5hbWUodGhpcy5pZClcbiAgICAgIGNvbnNvbGUubG9nKGBDbGlja2VkIGRpdiB3aXRoIGlkOiAke3RoaXMuaWR9YCk7XG4gICAgfSk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCB7IGRpc3BsYXlUYXNrcywgZGlzcGxheVByb2plY3RzfSIsIi8vIGltcG9ydCBob21lIGZyb20gXCIuLi9wYWdlcy9ob21lXCJcbi8vIGltcG9ydCBtZW51IGZyb20gXCIuLi9wYWdlcy9tZW51XCJcbi8vIGltcG9ydCB0b0RvTW9kYWwgZnJvbSBcIi4uL3BhZ2VzL21vZGFsUGFnZXMvdG9Eb01vZGFsXCJcbmltcG9ydCB7IHJldHVyblRhc2tBcnJheSwgcmV0dXJuUHJvamVjdEFycmF5IH0gZnJvbSBcIi4vYXJyYXlzXCJcbmltcG9ydCB7IGRpc3BsYXlUYXNrcywgZGlzcGxheVByb2plY3RzIH0gZnJvbSBcIi4vZGlzcGxheVRhc2tzXCJcblxuLy8gV2hlbiB1c2VyIG9wZW5zIHdlYnNpdGUgdGhpcyB3aWxsIGJlIHRoZSBmaXJzdCB0aGluZyB0aGF0IHdpbGwgYmUgZGlzcGxheWVkLlxuXG5mdW5jdGlvbiBmaXJzdExvYWQoKSB7XG4gICAgLy8gY29uc3QgcmV0cmlldmVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJldHJpZXZlZFRhc2tzKVxuICAgIC8vIHNldFN0b3JhZ2VBcnJheShyZXRyaWV2ZWRUYXNrcylcbiAgICBkaXNwbGF5VGFza3MocmV0dXJuVGFza0FycmF5KCkpXG4gICAgZGlzcGxheVByb2plY3RzKHJldHVyblByb2plY3RBcnJheSgpKVxufVxuXG5mdW5jdGlvbiBmaXJzdExvYWRNb2RhbCgpIHtcbiAgICBjb25zdCB0b0RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXktbW9kYWxcIilcbiAgICB0b0RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiXG59XG5cbmV4cG9ydCB7Zmlyc3RMb2FkLCBmaXJzdExvYWRNb2RhbH0iLCJpbXBvcnQgeyByZW1vdmVGcm9tQXJyYXkgfSBmcm9tIFwiLi9hcnJheXNcIlxuaW1wb3J0IGRldGFpbE1vZCBmcm9tIFwiLi4vcGFnZXMvbW9kYWxQYWdlcy9kZXRhaWxNb2RhbFwiXG5pbXBvcnQgZWRpdE1vZGFsIGZyb20gXCIuLi9wYWdlcy9tb2RhbFBhZ2VzL2VkaXRNb2RhbFwiXG5cbmZ1bmN0aW9uIGlucHV0VGl0bGUoY3NzQ2xhc3MsIGlkTmFtZSwgcGFyZW50LCBwbGFjZWhvbGRlcikge1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBpbnB1dFRpdGxlLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9YClcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSlcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBgJHtwbGFjZWhvbGRlcn1gKVxuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBgJHtpZE5hbWV9YClcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2lkTmFtZX1gKVxuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJ0cnVlXCIpXG5cbn1cblxuZnVuY3Rpb24gaW5wdXRUaXRsZU5vdGVzKGNzc0NsYXNzLCBpZE5hbWUsIHBhcmVudCwgcGxhY2Vob2xkZXIpIHtcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXG4gICAgaW5wdXRUaXRsZS5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfWApXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGlucHV0VGl0bGUpXG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBgJHtwbGFjZWhvbGRlcn1gKVxuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBgJHtpZE5hbWV9YClcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2lkTmFtZX1gKVxuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJ0cnVlXCIpXG4gICAgcmV0dXJuIGlucHV0VGl0bGVcbn1cblxuZnVuY3Rpb24gaW5wdXRUeXBlKGNzc0NsYXNzLCBpZE5hbWUsIHBhcmVudCwgdHlwZSkge1xuICAgIGNvbnN0IGlucHV0VHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGlucHV0VHlwZS5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfWApXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGlucHV0VHlwZSlcbiAgICBpbnB1dFR5cGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBgJHt0eXBlfWApXG4gICAgaW5wdXRUeXBlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgYCR7aWROYW1lfWApXG4gICAgaW5wdXRUeXBlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2lkTmFtZX1gKVxuICAgIGlucHV0VHlwZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcInRydWVcIilcbiAgICByZXR1cm4gaW5wdXRUeXBlXG59XG5cbmZ1bmN0aW9uIGlucHV0Q2hlY2tCb3goY3NzQ2xhc3MsIHBhcmVudCwgb2JqKSB7XG4gICAgY29uc3QgaW5wdXRDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGlucHV0Q2hlY2suY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31gKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbnB1dENoZWNrKVxuICAgIGlucHV0Q2hlY2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpXG4gICAgaW5wdXRDaGVjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrQm94VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7b2JqLmlkfWApXG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrQm94VGFzaylcbiAgICAgICAgY2hlY2tCb3hUYXNrLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBpbnB1dEltZ0VkaXQoY3NzQ2xhc3MsIHBhcmVudCwgbXlTdmcsIG9iaikge1xuICAgIGNvbnN0IG15U3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgbXlTdmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9YClcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobXlTdmdFbGVtZW50KVxuICAgIG15U3ZnRWxlbWVudC5pbm5lckhUTUwgPSBteVN2ZztcbiAgICBteVN2Z0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBlZGl0TW9kYWwob2JqKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGlucHV0SW1nVHJhc2goY3NzQ2xhc3MsIHBhcmVudCwgbXlTdmcsIG9iaikge1xuICAgIGNvbnN0IG15U3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgbXlTdmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9YClcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobXlTdmdFbGVtZW50KVxuICAgIG15U3ZnRWxlbWVudC5pbm5lckhUTUwgPSBteVN2ZztcbiAgICBteVN2Z0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZW1vdmVGcm9tQXJyYXkob2JqLmlkKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGlucHV0RGV0YWlsKHBhcmVudCwgY3NzQ2xhc3MsIG5hbWUsIG9iaikge1xuICAgIGNvbnN0IGRpc3BhbHlEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGRpc3BhbHlEZXRhaWwpXG4gICAgZGlzcGFseURldGFpbC50ZXh0Q29udGVudCA9IGAke25hbWV9YFxuICAgIGRpc3BhbHlEZXRhaWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYCR7Y3NzQ2xhc3N9YClcbiAgICBkaXNwYWx5RGV0YWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZGV0YWlsTW9kKG9iailcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBpbnB1dEJ0bihwYXJlbnQsIGNzc0NsYXNzLCBuYW1lKSB7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gYCR7bmFtZX1gXG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGAke2Nzc0NsYXNzfWApXG59XG5cblxuZnVuY3Rpb24gaW5wdXRSYWRpbyhwYXJlbnQsIGlkTmFtZSwgbGFiZWxUZXh0LCByYWRpb1ZhbHVlKSB7XG4gICAgY29uc3QgcmFkaW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBjb25zdCByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHJhZGlvQnRuKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKVxuICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHRcbiAgICByYWRpb0xhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmFkaW8tYnV0dG9uXCIpXG4gICAgcmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYCR7aWROYW1lfWApXG4gICAgcmFkaW9CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpXG4gICAgcmFkaW9CdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7aWROYW1lfWApXG4gICAgcmFkaW9CdG4uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpXG4gICAgcmFkaW9CdG4uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7cmFkaW9WYWx1ZX1gKVxuICAgIHJldHVybiByYWRpb0J0blxufVxuXG5leHBvcnQge2lucHV0VGl0bGUsIGlucHV0VHlwZSwgaW5wdXRCdG4sIGlucHV0UmFkaW8sXG4gICAgIGlucHV0VGl0bGVOb3RlcywgaW5wdXRJbWdFZGl0LCBpbnB1dEltZ1RyYXNoLFxuICAgICBpbnB1dENoZWNrQm94LCBpbnB1dERldGFpbCB9IiwiaW1wb3J0IHsgZGlzcGxheUFsbFByb2plY3RUaXRsZXMgfSBmcm9tIFwiLi9hcnJheXNcIlxuXG5mdW5jdGlvbiBwcm9qZWN0KCkge1xuICAgIGNvbnN0IGxlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LW1lbnVcIilcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKVxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKVxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIlxuICAgIFxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuICAgIGxlZnRNZW51LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpXG5cbiAgICBjb25zdCBwcm9qZWN0VG9waWNzID0gZmlsdGVyVG9waWMoKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0VG9waWNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRUZXh0ID0gcHJvamVjdFRvcGljc1tpXTtcbiAgICAgICAgY29uc3QgZGl2VG9waWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudFRleHQgPSBlbGVtZW50VGV4dC5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgZWxlbWVudFRleHQuc2xpY2UoMSlcbiAgICAgICAgZGl2VG9waWMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdG9waWNzXCIpXG4gICAgICAgIGRpdlRvcGljLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2VsZW1lbnRUZXh0LnRvTG93ZXJDYXNlKCl9YClcbiAgICAgICAgZGl2VG9waWMudGV4dENvbnRlbnQgPSBgJHtuZXdFbGVtZW50VGV4dH1gXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2VG9waWMpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJUb3BpYygpIHtcbiAgICBjb25zdCBhcnJheVRvcGljID0gZGlzcGxheUFsbFByb2plY3RUaXRsZXMoKVxuICAgIFxuICAgIGNvbnN0IHVuaXF1ZUFycmF5ID0gYXJyYXlUb3BpYy5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJheVRvcGljLmluZGV4T2YoaXRlbSkgPT09IGluZGV4O1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHVuaXF1ZUFycmF5KVxuICAgIHJldHVybiB1bmlxdWVBcnJheVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RcbiIsIlxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheVwiKTtcbiAgICBjb25zdCBmaXJzdE5vZGUgPSBkaXNwbGF5LmZpcnN0Q2hpbGQ7XG4gIFxuICAgICB3aGlsZSAoZGlzcGxheS5sYXN0Q2hpbGQgIT09IGZpcnN0Tm9kZSkge1xuICAgICAgZGlzcGxheS5yZW1vdmVDaGlsZChkaXNwbGF5Lmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZGlzcGxheVwiKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHByb2plY3QuY2hpbGROb2RlcztcbiAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAyOyBpLS0pIHtcbiAgICAgIHByb2plY3QucmVtb3ZlQ2hpbGQoY2hpbGRyZW5baV0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTW9kYWwoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tc21hbGxcIilcbiAgY29uc3QgZGlzcGFseUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheS1tb2RhbFwiKVxuICBjb25zb2xlLmxvZyhtYWluKVxuICBpZiAoIWRpc3BhbHlDb250YWluZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuICB3aGlsZSAoZGlzcGFseUNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgZGlzcGFseUNvbnRhaW5lci5yZW1vdmVDaGlsZChkaXNwYWx5Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBtYWluLnJlbW92ZUNoaWxkKGRpc3BhbHlDb250YWluZXIpXG59XG5cbmZ1bmN0aW9uIHJlbmRlckZvcm0oKSB7XG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215Rm9ybVwiKVxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXNtYWxsXCIpXG4gIHdoaWxlIChmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBmb3JtQ29udGFpbmVyLnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbiAgbWVudUNvbnRhaW5lci5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKVxuICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcbiAgbmV3Rm9ybS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1tZW51LXNtYWxsXCIpXG4gIG5ld0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdteUZvcm0nKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdGb3JtKVxuICBjb25zb2xlLmxvZyhuZXdGb3JtKVxufVxuXG5leHBvcnQge3JlbmRlciwgcmVuZGVyTW9kYWwsIHJlbmRlckZvcm19IiwiaW1wb3J0IHthZGRUYXNrLCBmaW5kUHJvamVjdFRpdGxlcywgZmluZERhdGVBcnJheSwgXG4gICAgZGlzcGxheUFsbFByb2plY3RUaXRsZXMsIGRhdGVBcnJheSwgbmV4dFdlZWssXG4gICAgYWRkTm90ZSwgYWRkUHJvamVjdCB9IGZyb20gXCIuL2FycmF5c1wiXG4gICAgLy8gSGVyZSBhcmUgdGFza3MgZnVuY3Rpb25zIHRoYXQgY3JlYXRlIHRhc2tzIG9iamVjdHNcbiAgICBcbiAgICBsZXQgY3VycmVudFByb2plY3ROYW1lID0gXCJ3b3JrXCI7XG4gICAgXG4gICAgY2xhc3MgdGFza3Mge1xuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0LFxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLFxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LFxuICAgICAgICAgICAgdGhpcy5kYXRlID0gZGF0ZVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNsYXNzIG5vdGVzIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGUsXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhkYXRlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSB7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKGRhdGUpLCAneXl5eS1NTS1kZCcpXG4gICAgLy8gY29uc29sZS5sb2coZGF0ZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSlcbiAgICBjb25zdCBwcm9qZWN0TmFtZU9iaiA9IGN1cnJlbnRQcm9qZWN0TmFtZVxuICAgIGNvbnN0IG5ld09iaiA9IG5ldyB0YXNrcyhwcm9qZWN0TmFtZU9iai50b0xvd2VyQ2FzZSgpLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKSBcbiAgICBhZGRUYXNrKG5ld09iailcbiAgICBuZXh0V2VlaygpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGVzKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IG5ld05vdGUgPSBuZXcgbm90ZXModGl0bGUsIGRlc2NyaXB0aW9uKVxuICAgIGFkZE5vdGUobmV3Tm90ZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuICAgIGFkZFByb2plY3QodGl0bGUpXG59XG5cbi8vIGZ1bmN0aW9uIGRlZmF1bHRQcm9qZWN0TmFtZSgpIHtcbi8vICAgICBjdXJyZW50UHJvamVjdE5hbWUgPSBcIndvcmtcIlxuLy8gICAgIHJldHVybiBjdXJyZW50UHJvamVjdE5hbWVcbi8vIH1cblxuZnVuY3Rpb24gYWRkZWRQcm9qZWN0TmFtZShuYW1lKSB7XG4gICAgY3VycmVudFByb2plY3ROYW1lID0gbmFtZTtcbn1cblxuXG5leHBvcnQge2NyZWF0ZVRhc2ssIGNyZWF0ZU5vdGVzLCBjcmVhdGVQcm9qZWN0LFxuICAgICAgYWRkZWRQcm9qZWN0TmFtZX0iLCJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGVzL3N0eWxlcy5jc3NcIlxuaW1wb3J0IG1vZGFscyBmcm9tIFwiLi9zdHlsZXMvbW9kYWxzLmNzc1wiXG5pbXBvcnQgeyBmaXJzdExvYWQgfSBmcm9tIFwiLi9mdW5jdGlvbnMvZmlyc3RMb2FkXCJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2Z1bmN0aW9ucy9yZW5kZXJcIlxuaW1wb3J0IHsgZGlzcGxheVRhc2tzLCBkaXNwbGF5UHJvamVjdHMgfSBmcm9tIFwiLi9mdW5jdGlvbnMvZGlzcGxheVRhc2tzXCJcbmltcG9ydCB7IG5leHRXZWVrLCB0b2RheVRhc2tzLCBmaW5kUHJvamVjdFRpdGxlcyB9IGZyb20gXCIuL2Z1bmN0aW9ucy9hcnJheXNcIlxuaW1wb3J0IG1vZGFsQWRkIGZyb20gXCIuL3BhZ2VzL21vZGFsQWRkXCJcbmltcG9ydCB7IGFkZGVkUHJvamVjdE5hbWUgfSBmcm9tIFwiLi9mdW5jdGlvbnMvdGFza3NcIlxuXG5maXJzdExvYWQoKVxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKTtcbmNvbnN0IHdlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWtcIik7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWNvbnRlbnQnKTtcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnV0dG9uXCIpO1xuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgZmlyc3RMb2FkKClcbn0pXG5cbnRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgZGlzcGxheVRhc2tzKHRvZGF5VGFza3MoKSlcbn0pXG5cbndlZWsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICBkaXNwbGF5VGFza3MobmV4dFdlZWsoKSlcbn0pXG5cbnByb2plY3RzLmZvckVhY2gocHJvamVjdE5hbWUgPT4ge1xuICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGRpc3BsYXlUYXNrcyhmaW5kUHJvamVjdFRpdGxlcyhwcm9qZWN0TmFtZS5pZCkpXG4gICAgYWRkZWRQcm9qZWN0TmFtZShwcm9qZWN0TmFtZS5pZClcbiAgICBjb25zb2xlLmxvZyhgQ2xpY2tlZCBkaXYgd2l0aCBpZDogJHtwcm9qZWN0TmFtZS5pZH1gKTtcbiAgfSk7XG59KTtcblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gIG1vZGFsQWRkKClcbn0pXG5cblxuLy8gY29uc29sZS5sb2cocmV0dXJuVGFza0FycmF5KCkpXG5cblxuLy8gY29uc3Qgbm9kZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jyk7XG4vLyBjb25zdCBvcmlnaW5hbE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JpZ2luYWwnKTtcbi8vIGNvbnN0IGNsb25lZE5vZGUgPSBvcmlnaW5hbE5vZGUuY2xvbmVOb2RlKHRydWUpO1xuXG4vLyBjbG9uZWROb2RlLmlkID0gJ2Nsb25lZCc7XG5cbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0dXJuVGFza0FycmF5KCkubGVuZ3RoOyBpKyspIHtcbi8vICAgICBjb25zdCBjbG9uZWROb2RlID0gb3JpZ2luYWxOb2RlLmNsb25lTm9kZSh0cnVlKTtcbi8vICAgICBjbG9uZWROb2RlLmlkID0gJ2Nsb25lZC0nICsgaTtcbi8vICAgICBjbG9uZWROb2RlLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJykudGV4dENvbnRlbnQgPSByZXR1cm5UYXNrQXJyYXkoKVtpXS50aXRsZTtcbi8vICAgICBjbG9uZWROb2RlLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRhdGUnKS50ZXh0Q29udGVudCA9IHJldHVyblRhc2tBcnJheSgpW2ldLmRhdGU7XG4vLyAgICAgbm9kZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9uZWROb2RlKTtcbi8vICAgfVxuXG4vLyBjb25zb2xlLmxvZyhub2RlQ29udGFpbmVyKVxuLy8gaW1wb3J0IHsgZmlyc3RMb2FkLCBmaXJzdExvYWRNb2RhbCB9IGZyb20gXCIuL2Z1bmN0aW9ucy9maXJzdExvYWRcIlxuLy8gaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2Z1bmN0aW9ucy90YXNrc1wiXG4vLyBpbXBvcnQgeyBkYXRlQXJyYXkgfSBmcm9tIFwiLi9mdW5jdGlvbnMvYXJyYXlzXCJcblxuLy8gLy8gY3JlYXRlVGFzayhcIjIwMTQtMDItMDNcIiwgXCJXaGF0IHRvIGRvXCIsIFwid2RhZGFkYWRhZGFhZGFcIiwgXCJsb3dcIilcbi8vIC8vIGNyZWF0ZVRhc2soXCIyMDE0LTAxLTA0XCIsIFwiUGxheSBnYW1lc1wiLCBcInh4eHh4eHh4eHh4eHh4eHh4XCIsIFwibWVkaXVtXCIpXG4vLyAvLyBjcmVhdGVUYXNrKFwiMjAxNC0wMy0wNVwiLCBcIlJlcG9ydCBhYm91dCBkb2xwaGluc1wiLCBcInh4eHh4eHh4eHh4eHh4eHh4XCIsIFwiaGlnaFwiKVxuLy8gLy8gY3JlYXRlVGFzayhcIjIwMjMtMDQtMTRcIiwgXCJUYWxrIHRvIEphcnJldFwiLCBcInh4eHh4eHh4eHh4eHh4eHh4XCIsIFwiaGlnaFwiKVxuLy8gLy8gY3JlYXRlVGFzayhcIjIwMjMtMDQtMTZcIiwgXCJCcmluZyBCb3NzIGNvZmZlXCIsIFwiZ2dnZ2dnXCIsIFwibG93XCIpXG4vLyAvLyBjcmVhdGVUYXNrKFwiMjAyMy0wNC0xNVwiLCBcIkRlbGV0ZSB4eHggZmlsZXNcIiwgXCJnZ2dnZ2dcIiwgXCJoaWdoXCIpXG5cbi8vIGZpcnN0TG9hZCgpXG5cbi8vIGZ1bmN0aW9uIHVwZGF0ZVN0b3JhZ2UoKSB7XG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShkYXRlQXJyYXkpKTtcbi8vIH1cbiAgXG4vLyBmdW5jdGlvbiByZXN0b3JlRGVmYXVsdCgpIHtcbi8vICAgICBjb25zdCBkZWZhdWx0QXJyYXkgPSBbXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICAgIHByb2plY3Q6IFwid29ya1wiLFxuLy8gICAgICAgICAgICAgdGl0bGU6IFwiV2hhdCB0byBkb1wiLFxuLy8gICAgICAgICAgICAgZGVzY3JpcHRpb246IFwid2RhZGFkYWRhZGFhZGFcIixcbi8vICAgICAgICAgICAgIHByaW9yaXR5OiBcImxvd1wiLFxuLy8gICAgICAgICAgICAgZGF0ZTogXCIyMDE0LTAyLTAzXCIsXG4vLyAgICAgICAgICAgICBpZDogMFxuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgICBwcm9qZWN0OiBcIndvcmtcIixcbi8vICAgICAgICAgICAgIHRpdGxlOiBcIldoYXQgdG8gZG9cIixcbi8vICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIndkYWRhZGFkYWRhYWRhXCIsXG4vLyAgICAgICAgICAgICBwcmlvcml0eTogXCJsb3dcIixcbi8vICAgICAgICAgICAgIGRhdGU6IFwiMjAxNC0wMi0wM1wiLFxuLy8gICAgICAgICAgICAgaWQ6IDFcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgICAgcHJvamVjdDogXCJyZWxheFwiLFxuLy8gICAgICAgICAgICAgdGl0bGU6IFwiUGxheSBnYW1lc1wiLFxuLy8gICAgICAgICAgICAgZGVzY3JpcHRpb246IFwieHh4eHh4eHh4eHh4eHh4eHhcIixcbi8vICAgICAgICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuLy8gICAgICAgICAgICAgZGF0ZTogXCIyMDE0LTAxLTA0XCIsXG4vLyAgICAgICAgICAgICBpZDogMlxuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgICBwcm9qZWN0OiBcIndvcmtcIixcbi8vICAgICAgICAgICAgIHRpdGxlOiBcIlJlcG9ydCBhYm91dCBkb2xwaGluc1wiLFxuLy8gICAgICAgICAgICAgZGVzY3JpcHRpb246IFwieHh4eHh4eHh4eHh4eHh4eHhcIixcbi8vICAgICAgICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbi8vICAgICAgICAgICAgIGRhdGU6IFwiMjAxNC0wMy0wNVwiLFxuLy8gICAgICAgICAgICAgaWQ6IDNcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgICAgcHJvamVjdDogXCJ3b3JrXCIsXG4vLyAgICAgICAgICAgICB0aXRsZTogXCJUYWxrIHRvIEphcnJldFwiLFxuLy8gICAgICAgICAgICAgZGVzY3JpcHRpb246IFwieHh4eHh4eHh4eHh4eHh4eHhcIixcbi8vICAgICAgICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbi8vICAgICAgICAgICAgIGRhdGU6IFwiMjAyMy0wNC0xNFwiLFxuLy8gICAgICAgICAgICAgaWQ6IDRcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgICAgcHJvamVjdDogXCJ3b3JrXCIsXG4vLyAgICAgICAgICAgICB0aXRsZTogXCJCcmluZyBCb3NzIGNvZmZlXCIsXG4vLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJnZ2dnZ2dcIixcbi8vICAgICAgICAgICAgIHByaW9yaXR5OiBcImxvd1wiLFxuLy8gICAgICAgICAgICAgZGF0ZTogXCIyMDIzLTA0LTE2XCIsXG4vLyAgICAgICAgICAgICBpZDogNVxuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgICBwcm9qZWN0OiBcInJlbGF4XCIsXG4vLyAgICAgICAgICAgICB0aXRsZTogXCJEZWxldGUgeHh4IGZpbGVzXCIsXG4vLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJnZ2dnZ2dcIixcbi8vICAgICAgICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbi8vICAgICAgICAgICAgIGRhdGU6IFwiMjAyMy0wNC0xNVwiLFxuLy8gICAgICAgICAgICAgaWQ6IDZcbi8vICAgICAgICAgfVxuLy8gICAgIF1cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRBcnJheSkpO1xuLy8gfVxuXG4vLyAgIGNvbnNvbGUubG9nKGRhdGVBcnJheSlcbiAgXG5cbi8vIGV4cG9ydCB7dXBkYXRlU3RvcmFnZSwgcmVzdG9yZURlZmF1bHR9IiwiaW1wb3J0IGN1cnJlbnREYXRlIGZyb20gXCIuLi9mdW5jdGlvbnMvZGF0ZXNcIlxuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi4vZnVuY3Rpb25zL2Rpc3BsYXlUYXNrc1wiXG5pbXBvcnQgeyBkYXRlQXJyYXkgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2FycmF5c1wiXG5cbmZ1bmN0aW9uIGhvbWUoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1tZW51XCIpXG4gICAgZGlzcGxheVRhc2tzKG1lbnUsIGRhdGVBcnJheSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZSIsImltcG9ydCBwcm9qZWN0IGZyb20gXCIuLi9mdW5jdGlvbnMvcHJvamVjdHNcIlxuaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZVwiXG5pbXBvcnQgdG9kYXlQYWdlIGZyb20gXCIuL3RvZGF5XCJcbmltcG9ydCBXZWVrIGZyb20gXCIuL3dlZWtcIlxuaW1wb3J0IG5vdGVzIGZyb20gXCIuL25vdGVzXCJcbmltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0UGFnZVwiXG5pbXBvcnQgeyBmaXJzdExvYWRNb2RhbCB9IGZyb20gXCIuLi9mdW5jdGlvbnMvZmlyc3RMb2FkXCJcbmltcG9ydCB7IHJlbmRlciwgcmVuZGVyTW9kYWwgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3JlbmRlclwiXG5pbXBvcnQgbW9kYWxQYWdlIGZyb20gXCIuL21vZGFsQWRkXCJcbmltcG9ydCBwcm9qZWN0TW9kYWwgZnJvbSBcIi4vbW9kYWxQYWdlcy9wcm9qZWN0TW9kYWxcIlxuaW1wb3J0IHsgYWRkZWRQcm9qZWN0TmFtZSwgZGVmYXVsdFByb2plY3ROYW1lIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy90YXNrc1wiXG5pbXBvcnQgeyByZXN0b3JlRGVmYXVsdCB9IGZyb20gXCIuLlwiXG4vLyBUaGlzIHBhZ2UgY3JlYXRlcyBlbGVtZW50cyB0aGF0IGFyZSBkaXNwbGF5ZWQgb24gbWVudVxuZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIGNvbnN0IG5vdGVzUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIGNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBjb25zdCBidG5SZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBjb25zdCBsZWZ0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1tZW51XCIpXG4gICAgaG9tZVBhZ2UuY2xhc3NMaXN0LmFkZChcImhvbWUtcGFnZVwiLCBcImxlZnQtbWVudS10aXRsZVwiKVxuICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1wYWdlXCIsIFwibGVmdC1tZW51LXRpdGxlXCIpXG4gICAgd2Vlay5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctcGFnZVwiLCBcImxlZnQtbWVudS10aXRsZVwiKVxuICAgIG5vdGVzUGFnZS5jbGFzc0xpc3QuYWRkKFwibm90ZXMtcGFnZVwiLCBcImxlZnQtbWVudS10aXRsZVwiKVxuICAgIGJ0bkFkZC5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ0blwiKVxuICAgIGJ0blJlc2V0LmNsYXNzTGlzdC5hZGQoXCJyZXNldC1idG5cIilcblxuXG4gICAgaG9tZVBhZ2UudGV4dENvbnRlbnQgPSBcIkhvbWVcIlxuICAgIHRvZGF5LnRleHRDb250ZW50ID0gXCJUb2RheVwiXG4gICAgd2Vlay50ZXh0Q29udGVudCA9IFwiV2Vla1wiXG4gICAgbm90ZXNQYWdlLnRleHRDb250ZW50ID0gXCJOb3Rlc1wiXG4gICAgYnRuQWRkLnRleHRDb250ZW50ID0gXCJBRERcIlxuICAgIGJ0blJlc2V0LnRleHRDb250ZW50ID0gXCJSZXNldFwiXG5cbiAgICBsZWZ0TWVudS5hcHBlbmRDaGlsZChob21lUGFnZSlcbiAgICBsZWZ0TWVudS5hcHBlbmRDaGlsZCh0b2RheSlcbiAgICBsZWZ0TWVudS5hcHBlbmRDaGlsZCh3ZWVrKVxuICAgIHByb2plY3QoKVxuICAgIGxlZnRNZW51LmFwcGVuZENoaWxkKG5vdGVzUGFnZSlcbiAgICBsZWZ0TWVudS5hcHBlbmRDaGlsZChidG5BZGQpXG4gICAgbGVmdE1lbnUuYXBwZW5kQ2hpbGQoYnRuUmVzZXQpXG5cbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLXBhZ2VcIilcbiAgICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktcGFnZVwiKVxuICAgIGNvbnN0IHdlZWtCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwY29taW5nLXBhZ2VcIilcbiAgICBjb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRvcGljcycpO1xuICAgIGNvbnN0IG5vdGVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlcy1wYWdlXCIpXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYnRuXCIpXG4gICAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0LWJ0blwiKVxuXG5cbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJlbmRlcigpXG4gICAgbWVudSgpXG4gICAgZGVmYXVsdFByb2plY3ROYW1lKClcbiAgICBob21lKClcbiAgICBjb25zb2xlLmxvZyhcImhvbWVcIilcbn0pXG5cbnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICByZW5kZXIoKVxuICAgIG1lbnUoKVxuICAgIGRlZmF1bHRQcm9qZWN0TmFtZSgpXG4gICAgdG9kYXlQYWdlKClcbiAgICBjb25zb2xlLmxvZyhcInRvZGF5XCIpXG59KVxuXG53ZWVrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICByZW5kZXIoKVxuICAgIG1lbnUoKVxuICAgIGRlZmF1bHRQcm9qZWN0TmFtZSgpXG4gICAgV2VlaygpXG4gICAgd2Vla0J0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtbmF2XCIpXG4gICAgY29uc29sZS5sb2cod2Vla0J0bilcbn0pXG5cbnByb2plY3RCdG5zLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyKClcbiAgICAgICAgICAgIG1lbnUoKVxuICAgICAgICAgICAgcHJvamVjdHMoZXZlbnQudGFyZ2V0LmlkKVxuICAgICAgICAgICAgYWRkZWRQcm9qZWN0TmFtZShldmVudC50YXJnZXQuaWQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtldmVudC50YXJnZXQuaWR9YClcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbm5vdGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICByZW5kZXIoKVxuICAgIG1lbnUoKVxuICAgIGRlZmF1bHRQcm9qZWN0TmFtZSgpXG4gICAgbm90ZXMoKVxuICAgIGNvbnNvbGUubG9nKFwibm90ZXNcIilcbn0pXG5cbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmVuZGVyTW9kYWwoKVxuICAgIG1vZGFsUGFnZSgpXG4gICAgZmlyc3RMb2FkTW9kYWwoKVxufSlcblxucmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJlc3RvcmVEZWZhdWx0KClcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbn0pXG5cbn1cblxuLy8gZnVuY3Rpb24gY2hlY2tlZFN0YXRlKGVsZW1lbnQpIHtcbi8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1uYXZcIilcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgbWVudSIsImltcG9ydCBtb2RhbCBmcm9tIFwiLi4vc3R5bGVzL21vZGFsLmNzc1wiXG5pbXBvcnQgdG9Eb01vZGFsIGZyb20gXCIuL21vZGFsUGFnZXMvdG9Eb01vZGFsXCJcbmltcG9ydCBwcm9qZWN0TW9kYWwgZnJvbSBcIi4vbW9kYWxQYWdlcy9wcm9qZWN0TW9kYWxcIlxuaW1wb3J0IG5vdGVNb2RhbCBmcm9tIFwiLi9tb2RhbFBhZ2VzL25vdGVNb2RhbFwiXG5pbXBvcnQgeyBmaXJzdExvYWRNb2RhbCB9IGZyb20gXCIuLi9mdW5jdGlvbnMvZmlyc3RMb2FkXCJcbmltcG9ydCB7IHJlbmRlckZvcm0sIHJlbmRlck1vZGFsIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9yZW5kZXJcIlxuaW1wb3J0IHsgY3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCwgY3JlYXRlTm90ZXMgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3Rhc2tzXCJcbmltcG9ydCB7IGZpcnN0TG9hZCB9IGZyb20gXCIuLi9mdW5jdGlvbnMvZmlyc3RMb2FkXCJcblxuZnVuY3Rpb24gbW9kYWxBZGQoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpXG4gICAgY29uc3Qgc21hbGxNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXNtYWxsXCIpXG5cbiAgICBjb25zdCBhZGRUb0RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG8tZG9cIik7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3RcIik7XG4gICAgY29uc3QgYWRkTm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLW5vdGVcIik7XG5cbiAgICBjb25zdCBmb3JtVG9EbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheS10b2RvXCIpXG4gICAgY29uc3QgZm9ybVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXktcHJvamVjdFwiKVxuICAgIGNvbnN0IGZvcm1Ob3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5LW5vdGVcIilcblxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuXG4gICAgcmVuZGVyTW9kYWwoKVxuICAgIHRvRG9Gb3JtKHNtYWxsTWFpbilcbiAgICBmaXJzdExvYWRNb2RhbCgpXG4gICAgXG4gICAgYWRkVG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbmRlck1vZGFsKClcbiAgICAgICAgdG9Eb0Zvcm0oc21hbGxNYWluKVxuICAgIH0pXG4gICAgXG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbmRlck1vZGFsKClcbiAgICAgICAgcHJvamVjdEZvcm0oc21hbGxNYWluKVxuICAgIH0pXG5cbiAgICBhZGROb3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVuZGVyTW9kYWwoKVxuICAgICAgICBub3RlRm9ybShzbWFsbE1haW4pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdG9Eb0Zvcm0ocGFyZW50KSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIiwgXCJkaXNwbGF5LXRvZG9cIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRpc3BsYXktbW9kYWxcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIik7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG5cbiAgICBjb25zdCB0aXRsZVRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIHRpdGxlVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlc1wiKTtcbiAgICB0aXRsZVRleHRBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGlzcGxheS10aXRsZVwiKTtcbiAgICB0aXRsZVRleHRBcmVhLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGU6XCIpO1xuICAgIHRpdGxlVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NyaXB0aW9uVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uc1wiKTtcbiAgICBkZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGlzcGxheS1kZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb246IGUuZyBpbnRlcm5ldCwgcGhvbmUsIHJlbnQuXCIpO1xuICAgIGRlc2NyaXB0aW9uVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5cbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWRhdGVcIik7XG5cbiAgICBjb25zdCBkYXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGRhdGVTcGFuLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkYXRlXCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZS1kYXRlXCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcblxuICAgIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZVNwYW4pO1xuICAgIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IHRvZG9CdXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvQnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS10b2RvLWJ1dHRvbnNcIik7XG5cbiAgICBjb25zdCByYWRpb0J1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJhZGlvQnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKFwicmFkaW8tYnV0dG9uc1wiKTtcblxuICAgIGNvbnN0IHByaW9yaXR5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByaW9yaXR5U3Bhbi50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XG5cbiAgICBjb25zdCBsb3dSYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxvd1JhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIGxvd1JhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb3dcIik7XG4gICAgbG93UmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gICAgbG93UmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxvd1wiKTtcblxuICAgIGNvbnN0IGxvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxvd0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvd1wiKTtcbiAgICBsb3dMYWJlbC5jbGFzc0xpc3QuYWRkKFwicmFkaW8tYnV0dG9uXCIpO1xuICAgIGxvd0xhYmVsLnRleHRDb250ZW50ID0gXCJMb3dcIjtcblxuICAgIGNvbnN0IG1lZGl1bVJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbWVkaXVtUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgbWVkaXVtUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lZGl1bVwiKTtcbiAgICBtZWRpdW1SYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgICBtZWRpdW1SYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibWVkaXVtXCIpO1xuXG4gICAgY29uc3QgbWVkaXVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbWVkaXVtTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibWVkaXVtXCIpO1xuICAgIG1lZGl1bUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJyYWRpby1idXR0b25cIik7XG4gICAgbWVkaXVtTGFiZWwudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuXG4gICAgY29uc3QgaGlnaFJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaGlnaFJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIGhpZ2hSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlnaFwiKTtcbiAgICBoaWdoUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gICAgaGlnaFJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJoaWdoXCIpO1xuXG4gICAgY29uc3QgaGlnaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGhpZ2hMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoXCIpO1xuICAgIGhpZ2hMYWJlbC5jbGFzc0xpc3QuYWRkKFwicmFkaW8tYnV0dG9uXCIpO1xuICAgIGhpZ2hMYWJlbC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuXG4gICAgcmFkaW9CdXR0b25zRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5U3Bhbik7XG4gICAgcmFkaW9CdXR0b25zRGl2LmFwcGVuZENoaWxkKGxvd1JhZGlvSW5wdXQpO1xuICAgIHJhZGlvQnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChsb3dMYWJlbCk7XG4gICAgcmFkaW9CdXR0b25zRGl2LmFwcGVuZENoaWxkKG1lZGl1bVJhZGlvSW5wdXQpO1xuICAgIHJhZGlvQnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChtZWRpdW1MYWJlbCk7XG4gICAgcmFkaW9CdXR0b25zRGl2LmFwcGVuZENoaWxkKGhpZ2hSYWRpb0lucHV0KTtcbiAgICByYWRpb0J1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoaGlnaExhYmVsKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LXN1Ym1pdFwiKTtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4gICAgdG9kb0J1dHRvbnNEaXYuYXBwZW5kQ2hpbGQocmFkaW9CdXR0b25zRGl2KTtcbiAgICB0b2RvQnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZVRleHRBcmVhKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dEFyZWEpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvQnV0dG9uc0Rpdik7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgY29uc3Qgc2VsZWN0ZWRQcmlvcml0eSA9IGZvcm1EYXRhLmdldCgncHJpb3JpdHknKTtcbiAgICAgICBjcmVhdGVUYXNrKGZvcm1EYXRhLmdldCgnZGF0ZScpLCBmb3JtRGF0YS5nZXQoJ3RpdGxlcycpLCBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9ucycpLCBzZWxlY3RlZFByaW9yaXR5KTtcbiAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICBmaXJzdExvYWQoKTtcbiAgICAgICBmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0LCB0cnVlKTtcbiAgICB9XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0LCB0cnVlKTtcblxuICB9XG5cbmZ1bmN0aW9uIHByb2plY3RGb3JtKHBhcmVudCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5JywgXCJkaXNwbGF5LXByb2plY3RcIik7XG4gICAgZm9ybS5pZCA9ICdkaXNwbGF5LW1vZGFsJztcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcblxuICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0ZXh0QXJlYS5uYW1lID0gJ3Byb2plY3QtdGl0bGUnO1xuICAgIHRleHRBcmVhLmlkID0gJ3Byb2plY3QtdGl0bGUnO1xuICAgIHRleHRBcmVhLnBsYWNlaG9sZGVyID0gJ05ldyBQcm9qZWN0IFRpdGxlOic7XG5cbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uc0NvbnRhaW5lci5pZCA9IFwiZGlzcGxheS1wcm9qZWN0LWJ1dHRvbnNcIlxuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1zdWJtaXQnKTtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLmdldCgncHJvamVjdC10aXRsZScpKVxuICAgICAgICBjcmVhdGVQcm9qZWN0KGZvcm1EYXRhLmdldCgncHJvamVjdC10aXRsZScpKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZmlyc3RMb2FkKCk7XG4gICAgICAgIGZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQsIHRydWUpO1xuICAgIH1cbiAgICBcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0LCB0cnVlKTtcblxuICAgIH1cblxuZnVuY3Rpb24gbm90ZUZvcm0ocGFyZW50KSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknLCBcImRpc3BsYXktbm90ZVwiKTtcbiAgICBmb3JtLmlkID0gJ2Rpc3BsYXktbW9kYWwnO1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiXG5cbiAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dEFyZWEubmFtZSA9ICdub3RlJztcbiAgICB0ZXh0QXJlYS5pZCA9ICdub3RlJztcbiAgICB0ZXh0QXJlYS5wbGFjZWhvbGRlciA9ICdOZXcgTm90ZTonO1xuXG4gICAgY29uc3QgdGV4dERlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dERlcy5uYW1lID0gJ25vdGUtZGVzJztcbiAgICB0ZXh0RGVzLmlkID0gJ25vdGUtZGVzJztcbiAgICB0ZXh0RGVzLnBsYWNlaG9sZGVyID0gJ05vdGUgRGVzY3JpcHRpb246JztcblxuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm90ZS1idXR0b25zJyk7XG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LXN1Ym1pdCcpO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0RGVzKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLmdldCgnbm90ZScpLCBmb3JtRGF0YS5nZXQoJ25vdGUtZGVzJykpXG4gICAgICAgIGNyZWF0ZU5vdGVzKGZvcm1EYXRhLmdldCgnbm90ZScpLCBmb3JtRGF0YS5nZXQoJ25vdGUtZGVzJykpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBmaXJzdExvYWQoKTtcbiAgICAgICAgZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCwgdHJ1ZSk7XG4gICAgfVxuICAgIFxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQsIHRydWUpO1xuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxBZGQiLCJpbXBvcnQgeyByZW5kZXJNb2RhbCB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvcmVuZGVyXCJcblxuZnVuY3Rpb24gZGV0YWlsTW9kKG9iaikge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgIGNvbnN0IG15TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIGNvbnN0IGRldGFpbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGRldGFpbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZGV0YWlsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZGV0YWlsRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBkZXRhaWxEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIG15TW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpXG4gICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1kZXRhaWxcIixcIm1vZGFsLWNvbnRlbnRcIiwgXCJtYWluXCIpXG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIiwgXCJjbG9zZS1kZXRhaWxcIilcbiAgICBkZXRhaWxUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsLXRpdGxlXCIpXG4gICAgZGV0YWlsUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsLXByb2plY3RcIiwgXCJkZXRhaWwtY29udGVudFwiKVxuICAgIGRldGFpbFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJkZXRhaWwtcHJpb3JpdHlcIiwgXCJkZXRhaWwtY29udGVudFwiKVxuICAgIGRldGFpbER1ZURhdGUuY2xhc3NMaXN0LmFkZChcImRldGFpbC1kYXRlXCIsIFwiZGV0YWlsLWNvbnRlbnRcIilcbiAgICBkZXRhaWxEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsLWRlc2NyaXB0aW9uXCIsIFwiZGV0YWlsLWNvbnRlbnRcIilcblxuXG4gICAgbXlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICBzcGFuLnRleHRDb250ZW50ID0gXCJjbG9zZVwiIFxuICAgIGRldGFpbFRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlXG4gICAgZGV0YWlsUHJvamVjdC50ZXh0Q29udGVudCA9IFwiUHJvamVjdDogXCIgKyBvYmoucHJvamVjdCBcbiAgICBkZXRhaWxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiICsgb2JqLnByaW9yaXR5IFxuICAgIGRldGFpbER1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOiBcIiArIG9iai5kYXRlIFxuICAgIGRldGFpbERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCIgKyBvYmouZGVzY3JpcHRpb25cblxuICAgIGNvbnN0IGRldGFpbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRldGFpbC1jb250ZW50XCIpXG4gICAgY29uc29sZS5sb2coZGV0YWlsQ29udGVudClcblxuICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbXlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgcmVuZGVyTW9kYWwoKVxuICAgIH0pXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKG15TW9kYWwpXG4gICAgbXlNb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHNwYW4pXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGRldGFpbFRpdGxlKVxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkZXRhaWxQcm9qZWN0KVxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkZXRhaWxQcmlvcml0eSlcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZGV0YWlsRHVlRGF0ZSlcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZGV0YWlsRGVzY3JpcHRpb24pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRldGFpbE1vZCIsImltcG9ydCB7IGlucHV0QnRuLCBpbnB1dFR5cGUsIGlucHV0UmFkaW8sIGlucHV0VGl0bGVOb3RlcyB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvaW5wdXRzXCJcbmltcG9ydCB7IHJlbmRlciwgcmVuZGVyTW9kYWwgfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL3JlbmRlclwiXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi4vaG9tZVwiXG5pbXBvcnQgbWVudSBmcm9tIFwiLi4vbWVudVwiXG5pbXBvcnQge3VwZGF0ZVN0b3JhZ2V9IGZyb20gXCIuLi8uLlwiXG5cbmZ1bmN0aW9uIGVkaXRNb2RhbChvYmopIHsgICBcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICBjb25zdCBlZGl0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IG1vZGFsRm9ybUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIGNvbnN0IGVkaXRUaXRsZSA9IGlucHV0VGl0bGVOb3RlcyhcImVkaXQtY29udGVudFwiLCBcImVkaXQtdGl0bGVcIiwgbW9kYWxGb3JtRWRpdCwgXCJUaXRsZVwiKVxuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGlucHV0VGl0bGVOb3RlcyhcImVkaXQtY29udGVudFwiLCBcImVkaXQtZGVzY3JpcHRpb25cIiwgbW9kYWxGb3JtRWRpdCwgXCJEZXNjcmlwdGlvbjpcIilcbiAgICBjb25zdCBlZGl0RGF0ZSA9IGR1ZURhdGVCdG4obW9kYWxGb3JtRWRpdCkgXG4gICAgY29uc3QgZWRpdFByaW9yaXR5ID0gYm90dG9tQnRuUHJpb3JpdHkobW9kYWxGb3JtRWRpdCwgb2JqLnByaW9yaXR5KVxuICAgIGJvdHRvbUJ0blN1Ym1pdChtb2RhbEZvcm1FZGl0KVxuXG4gICAgZWRpdFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJ0cnVlXCIpXG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIiwgXCJjbG9zZS1kZXRhaWxcIilcbiAgICBlZGl0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKVxuICAgIG1vZGFsRm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWVkaXRcIixcIm1vZGFsLWNvbnRlbnRcIiwgXCJtYWluXCIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChlZGl0Q29udGFpbmVyKVxuICAgIGVkaXRDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxGb3JtRWRpdClcbiAgICBtb2RhbEZvcm1FZGl0LmFwcGVuZENoaWxkKHNwYW4pXG4gICAgXG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBlZGl0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH0pXG4gICAgXG4gICAgZWRpdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCIgICBcbiAgICBzcGFuLnRleHRDb250ZW50ID0gXCJjbG9zZVwiXG4gICAgZWRpdFRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlXG4gICAgZWRpdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gb2JqLmRlc2NyaXB0aW9uXG4gICAgZWRpdERhdGUudmFsdWUgPSBvYmouZGF0ZVxuXG4gICAgbW9kYWxGb3JtRWRpdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZWRpdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgICAgICAgb2JqLnRpdGxlID0gZWRpdFRpdGxlLnRleHRDb250ZW50XG4gICAgICAgIG9iai5kZXNjcmlwdGlvbiA9ICBlZGl0RGVzY3JpcHRpb24udGV4dENvbnRlbnRcbiAgICAgICAgb2JqLmRhdGUgPSBlZGl0RGF0ZS52YWx1ZVxuICAgICAgICBvYmoucHJpb3JpdHkgPSBzZWxlY3RlZFByaW9yaXR5XG4gICAgICAgIHJlbmRlcigpXG4gICAgICAgIHJlbmRlck1vZGFsKClcbiAgICAgICAgbWVudSgpXG4gICAgICAgIGhvbWUoKVxuICAgICAgICB1cGRhdGVTdG9yYWdlKClcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIGJvdHRvbUJ0blByaW9yaXR5KHBhcmVudCwgb2JqUHJpbykge1xuICAgIGNvbnN0IGJvdHRvbUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnNvbGUubG9nKG9ialByaW8pXG4gICAgYm90dG9tQnRucy5jbGFzc0xpc3QuYWRkKFwiZWRpdC1ib3R0b20tYnRuLXByaW9cIilcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYm90dG9tQnRucylcbiAgICBib3R0b21CdG5zLmFwcGVuZENoaWxkKHByaW9yaXR5VGV4dClcbiAgICBwcmlvcml0eVRleHQuY2xhc3NMaXN0LmFkZChcImVkaXQtYm90dG9tLXRleHQtcHJpb1wiKVxuICAgIHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCJcblxuICAgIGNvbnN0IGxvdyA9IGlucHV0UmFkaW8oYm90dG9tQnRucywgXCJlZGl0LWJ1dHRvbi1sb3dcIiwgXCJMT1dcIiwgXCJsb3dcIilcbiAgICBjb25zdCBtZWRpdW0gPSBpbnB1dFJhZGlvKGJvdHRvbUJ0bnMsIFwiZWRpdC1idXR0b24tbWVkaXVtXCIsIFwiTWVkaXVtXCIsIFwibWVkaXVtXCIpXG4gICAgY29uc3QgaGlnaCA9IGlucHV0UmFkaW8oYm90dG9tQnRucywgXCJlZGl0LWJ1dHRvbi1oaWdoXCIsIFwiSGlnaFwiLCBcImhpZ2hcIilcbiAgICBpZiAob2JqUHJpbyA9PT0gXCJsb3dcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhsb3cudmFsdWUpXG4gICAgICAgIHJldHVybiBsb3dcbiAgICB9XG4gICAgaWYgKG9ialByaW8gPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2cobWVkaXVtLnZhbHVlKVxuICAgICAgICByZXR1cm4gbWVkaXVtXG4gICAgfVxuICAgIGlmIChvYmpQcmlvID09PSBcImhpZ2hcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhoaWdoLnZhbHVlKVxuICAgICAgICByZXR1cm4gaGlnaFxuICAgIH1cbn1cblxuZnVuY3Rpb24gYm90dG9tQnRuU3VibWl0KHBhcmVudCkge1xuICAgIGNvbnN0IGJvdHRvbUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICBib3R0b21CdG5zLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJvdHRvbS1idG4tc3VibVwiKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChib3R0b21CdG5zKVxuICAgIGlucHV0QnRuKGJvdHRvbUJ0bnMsIFwiZWRpdC1idXR0b25cIiwgXCJzdWJtaXQgZWRpdFwiKVxufVxuXG5mdW5jdGlvbiBkdWVEYXRlQnRuKHBhcmVudCkge1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBcbiAgICBkYXRlVGV4dC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1ib3R0b20tdGV4dC1kYXRlXCIpXG4gICAgZGF0ZVRleHQudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiXG5cbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJvdHRvbS1idG4tZGF0ZVwiKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgIGR1ZURhdGUuYXBwZW5kQ2hpbGQoZGF0ZVRleHQpXG4gICAgcmV0dXJuIGlucHV0VHlwZShcImVkaXQtZGF0ZS1idXR0b25cIiwgXCJlZGl0LWRhdGUtc3VibWl0XCIsIGR1ZURhdGUsIFwiZGF0ZVwiKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGVkaXRNb2RhbCIsImltcG9ydCB7IGNyZWF0ZVRhc2ssIGNyZWF0ZU5vdGVzIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy90YXNrc1wiXG5pbXBvcnQgeyByZW5kZXIsIHJlbmRlck1vZGFsIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9yZW5kZXJcIlxuaW1wb3J0IGhvbWUgZnJvbSBcIi4uL2hvbWVcIlxuaW1wb3J0IHsgaW5wdXRCdG4sIGlucHV0VGl0bGUsIGlucHV0VGl0bGVOb3RlcyB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvaW5wdXRzXCJcbmltcG9ydCBtZW51IGZyb20gXCIuLi9tZW51XCJcblxuZnVuY3Rpb24gbm90ZU1vZGFsKCkge1xuICAgIGNvbnN0IGRpc3BsYXlNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LW1lbnUtc21hbGxcIilcbiAgICBkaXNwbGF5TWVudS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpc3BsYXktbWVudS1zbWFsbC1ub3Rlc1wiKVxuICAgIGRpc3BsYXlNZW51LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW1lbnUtc21hbGxcIilcblxuICAgIGlucHV0VGl0bGUoXCJ0aXRsZS1pbnB1dC1ub3Rlc1wiLCBcImlucHV0LXRpdGxlXCIsIGRpc3BsYXlNZW51LCBcIlRJVExFXCIpXG4gICAgaW5wdXRUaXRsZU5vdGVzKFwiZGVzY3JpcHRpb24taW5wdXQtbm90ZXNcIiwgXCJpbnB1dC1kZXNjcmlwdGlvblwiLCBkaXNwbGF5TWVudSwgXCJEZXNjcmlwdGlvblwiKVxuICAgIGJvdHRvbUJ0blN1Ym1pdChkaXNwbGF5TWVudSlcblxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215Rm9ybScpO1xuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC10aXRsZScpO1xuICAgIGNvbnN0IGZvcm1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1kZXNjcmlwdGlvbicpO1xuXG4gICAgLy8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGNsb3NlcyB0aGUgbW9kYWxcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuXG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJ1dHRvbiwgb3BlbiB0aGUgbW9kYWxcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiA8c3Bhbj4gKHgpLCBjbG9zZSB0aGUgbW9kYWxcbiAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGNyZWF0ZU5vdGVzKGZvcm1UaXRsZS52YWx1ZSwgZm9ybURlc2NyaXB0aW9uLnZhbHVlKVxuICAgICAgICByZW5kZXJNb2RhbCgpXG4gICAgICAgIHJlbmRlcigpXG4gICAgICAgIG1lbnUoKVxuICAgICAgICBob21lKClcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbmZ1bmN0aW9uIGJvdHRvbUJ0blN1Ym1pdChwYXJlbnQpIHtcbiAgICBjb25zdCBib3R0b21CdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgYm90dG9tQnRucy5jbGFzc0xpc3QuYWRkKFwiYm90dG9tLWJ0bi1ub3RlLXN1Ym1pdFwiKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChib3R0b21CdG5zKVxuICAgIGlucHV0QnRuKGJvdHRvbUJ0bnMsIFwibm90ZS1idXR0b25cIiwgXCJTdWJtaXRcIiwgXCJzdWJtaXQtbm90ZVwiKVxufVxuXG5leHBvcnQgZGVmYXVsdCBub3RlTW9kYWwiLCJpbXBvcnQgeyBpbnB1dFRpdGxlLCBpbnB1dEJ0biB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvaW5wdXRzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy90YXNrc1wiO1xuaW1wb3J0IGhvbWUgZnJvbSBcIi4uL2hvbWVcIjtcbmltcG9ydCB7IHJlbmRlciwgcmVuZGVyTW9kYWx9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvcmVuZGVyXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi4vbWVudVwiXG5cbmZ1bmN0aW9uIHByb2plY3RNb2RhbCgpIHtcbiAgICBjb25zdCBkaXNwbGF5TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1tZW51LXNtYWxsXCIpXG4gICAgZGlzcGxheU1lbnUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkaXNwbGF5LW1lbnUtc21hbGwtcHJvamVjdFwiKVxuICAgIGRpc3BsYXlNZW51LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW1lbnUtc21hbGxcIilcblxuICAgIGlucHV0VGl0bGUoXCJpbnB1dC1wcm9qZWN0LW5hbWVcIiwgXCJpbnB1dC1wcm9qZWN0XCIsIGRpc3BsYXlNZW51LCBcIlByb2plY3QgTmFtZVwiKVxuICAgIGJvdHRvbUJ0blN1Ym1pdChkaXNwbGF5TWVudSlcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUZvcm0nKTtcbiAgICBjb25zdCBmb3JtUHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LXByb2plY3QnKTtcblxuXG4gICAgLy8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGNsb3NlcyB0aGUgbW9kYWxcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuXG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJ1dHRvbiwgb3BlbiB0aGUgbW9kYWxcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiA8c3Bhbj4gKHgpLCBjbG9zZSB0aGUgbW9kYWxcbiAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGNyZWF0ZVByb2plY3QoZm9ybVByb2plY3RUaXRsZS52YWx1ZSlcbiAgICAgICAgcmVuZGVyKClcbiAgICAgICAgcmVuZGVyTW9kYWwoKVxuICAgICAgICBtZW51KClcbiAgICAgICAgaG9tZSgpXG4gICAgICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJwcm9qZWN0IHdpbGwgYmUgaGVyZSFcIilcbn1cblxuXG5mdW5jdGlvbiBib3R0b21CdG5TdWJtaXQocGFyZW50KSB7XG4gICAgY29uc3QgYm90dG9tQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIGJvdHRvbUJ0bnMuY2xhc3NMaXN0LmFkZChcImJvdHRvbS1idG4tbm90ZS1zdWJtaXRcIilcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYm90dG9tQnRucylcbiAgICBpbnB1dEJ0bihib3R0b21CdG5zLCBcIm5vdGUtYnV0dG9uXCIsIFwiU3VibWl0XCIsIFwic3VibWl0LW5vdGVcIilcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1vZGFsIiwiaW1wb3J0IHsgaW5wdXRUaXRsZSwgaW5wdXRCdG4sIGlucHV0VHlwZSwgaW5wdXRSYWRpbyB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvaW5wdXRzXCJcbmltcG9ydCB7IHJlbmRlciwgcmVuZGVyTW9kYWwgfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL3JlbmRlclwiXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi4vaG9tZVwiXG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy90YXNrc1wiXG5pbXBvcnQgbWVudSBmcm9tIFwiLi4vbWVudVwiXG5pbXBvcnQge3VwZGF0ZVN0b3JhZ2V9IGZyb20gXCIuLi8uLlwiXG5cbmZ1bmN0aW9uIHRvRG9Nb2RhbCgpIHtcbiAgICBjb25zdCBkaXNwbGF5TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1tZW51LXNtYWxsXCIpXG4gICAgZGlzcGxheU1lbnUuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbWVudS1zbWFsbC10b2RvXCIpXG5cbiAgICBpbnB1dFRpdGxlKFwidGl0bGUtaW5wdXRcIiwgXCJpbnB1dC10aXRsZVwiLCBkaXNwbGF5TWVudSwgXCJUSVRMRVwiKVxuICAgIGlucHV0VGl0bGUoXCJkZXNjcmlwdGlvbi1pbnB1dFwiLCBcImlucHV0LWRlc2NyaXB0aW9uXCIsIGRpc3BsYXlNZW51LCBcIkRlc2NyaXB0aW9uXCIpXG5cbiAgICBib3R0b21CdG5Qcmlvcml0eSgpXG4gICAgYm90dG9tQnRuU3VibWl0KClcbiAgICBkdWVEYXRlQnRuKClcblxuICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb01vZGFsXCIpXG4gICAgY29uc3QgcHJvamVjdE1vZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE1vZGFsXCIpXG4gICAgY29uc3Qgbm90ZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlTW9kYWxcIilcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUZvcm0nKTtcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtdGl0bGUnKTtcbiAgICBjb25zdCBmb3JtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBmb3JtRGF0ZVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlLXN1Ym1pdCcpO1xuICAgIGNvbnN0IGZvcm1Qcmlvcml0eVJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdJyk7XG4gICAgY29uc29sZS5sb2codG9kb01vZGFsKVxuICAgIFxuICAgIC8vIEdldCB0aGUgPHNwYW4+IGVsZW1lbnQgdGhhdCBjbG9zZXMgdGhlIG1vZGFsXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcblxuICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBidXR0b24sIG9wZW4gdGhlIG1vZGFsXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXG4gICAgc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgICAgICAgY3JlYXRlVGFzayhmb3JtRGF0ZVN1Ym1pdC52YWx1ZSwgZm9ybVRpdGxlLnZhbHVlLCBmb3JtRGVzY3JpcHRpb24udmFsdWUgLCBzZWxlY3RlZFByaW9yaXR5KVxuICAgICAgICByZW5kZXIoKVxuICAgICAgICByZW5kZXJNb2RhbCgpXG4gICAgICAgIG1lbnUoKVxuICAgICAgICBob21lKClcbiAgICAgICAgdXBkYXRlU3RvcmFnZSgpXG4gICAgICB9KTtcbn1cblxuZnVuY3Rpb24gYm90dG9tQnRuUHJpb3JpdHkoKSB7XG4gICAgY29uc3QgZGlzcGxheU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktbWVudS1zbWFsbFwiKVxuICAgIGNvbnN0IGJvdHRvbUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgYm90dG9tQnRucy5jbGFzc0xpc3QuYWRkKFwiYm90dG9tLWJ0bi10b2RvLXByaW9cIilcbiAgICBkaXNwbGF5TWVudS5hcHBlbmRDaGlsZChib3R0b21CdG5zKVxuICAgIGJvdHRvbUJ0bnMuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZXh0KVxuICAgIHByaW9yaXR5VGV4dC5jbGFzc0xpc3QuYWRkKFwiYm90dG9tLXRleHQtdG9kby1wcmlvXCIpXG4gICAgcHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIlxuXG4gICAgaW5wdXRSYWRpbyhib3R0b21CdG5zLCBcInRvZG8tYnV0dG9uLWxvd1wiLCBcIkxPV1wiLCBcImxvd1wiKVxuICAgIGlucHV0UmFkaW8oYm90dG9tQnRucywgXCJ0b2RvLWJ1dHRvbi1tZWRpdW1cIiwgXCJNZWRpdW1cIiwgXCJtZWRpdW1cIilcbiAgICBpbnB1dFJhZGlvKGJvdHRvbUJ0bnMsIFwidG9kby1idXR0b24taGlnaFwiLCBcIkhpZ2hcIiwgXCJoaWdoXCIpXG59XG5cbmZ1bmN0aW9uIGJvdHRvbUJ0blN1Ym1pdCgpIHtcbiAgICBjb25zdCBkaXNwbGF5TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1tZW51LXNtYWxsXCIpXG4gICAgY29uc3QgYm90dG9tQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIGJvdHRvbUJ0bnMuY2xhc3NMaXN0LmFkZChcImJvdHRvbS1idG4tdG9kby1zdWJtXCIpXG4gICAgZGlzcGxheU1lbnUuYXBwZW5kQ2hpbGQoYm90dG9tQnRucylcbiAgICBpbnB1dEJ0bihib3R0b21CdG5zLCBcInRvZG8tYnV0dG9uXCIsIFwiU3VibWl0XCIsIFwic3VibWl0LXRvZG9cIilcbn1cblxuZnVuY3Rpb24gZHVlRGF0ZUJ0bigpIHtcbiAgICBjb25zdCBkaXNwbGF5TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1tZW51LXNtYWxsXCIpXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBkYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIFxuICAgIGRhdGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJib3R0b20tdGV4dC10b2RvLWRhdGVcIilcbiAgICBkYXRlVGV4dC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCJcblxuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImJvdHRvbS1idG4tdG9kby1kYXRlXCIpXG4gICAgZGlzcGxheU1lbnUuYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcbiAgICBkdWVEYXRlLmFwcGVuZENoaWxkKGRhdGVUZXh0KVxuICAgIGlucHV0VHlwZShcImRhdGUtYnV0dG9uXCIsIFwiZGF0ZS1zdWJtaXRcIiwgZHVlRGF0ZSwgXCJkYXRlXCIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRG9Nb2RhbCIsImltcG9ydCBjdXJyZW50RGF0ZSBmcm9tIFwiLi4vZnVuY3Rpb25zL2RhdGVzXCJcbmltcG9ydCB7IG5vdGVBcnJheSB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYXJyYXlzXCJcbmZ1bmN0aW9uIG5vdGVzKCkge1xuICAgIGNvbnN0IGRpc3BsYXlNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LW1lbnVcIilcblxuICAgIG5vdGVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBjb25zdCBvYmpDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIG9iakNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1tZW51LW9ialwiKVxuICAgICAgICBkaXNwbGF5TWVudS5hcHBlbmRDaGlsZChvYmpDb250YWluZXIpXG4gICAgICAgIGNyZWF0ZU5vdGVzTG9vayhvYmpDb250YWluZXIsIG9iai50aXRsZSwgb2JqLmRlc2NyaXB0aW9uLCBvYmopXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGVzTG9vayhwYXJlbnQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgb2JqKSB7XG4gICAgY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IG5vdGVEZXNjcml0cGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIG5vdGVUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJ0cnVlXCIpXG4gICAgbm90ZURlc2NyaXRwaW9uLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIilcbiAgICBcbiAgICBub3RlVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5vdGUtdGl0bGVcIilcbiAgICBub3RlRGVzY3JpdHBpb24uY2xhc3NMaXN0LmFkZChcIm5vdGUtZGVzY3JpcHRpb25cIilcblxuICAgIG5vdGVUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlXG4gICAgbm90ZURlc2NyaXRwaW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25cblxuICAgIG5vdGVUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIG9iai50aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgfSk7XG5cbiAgICAgIG5vdGVEZXNjcml0cGlvbi5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIG9iai5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH0pO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5vdGVUaXRsZSlcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm90ZURlc2NyaXRwaW9uKVxufVxuXG5leHBvcnQgZGVmYXVsdCBub3RlcyIsImltcG9ydCB7IGZpbmRQcm9qZWN0VGl0bGVzIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9hcnJheXNcIlxuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi4vZnVuY3Rpb25zL2Rpc3BsYXlUYXNrc1wiXG5pbXBvcnQgeyBhZGRlZFByb2plY3ROYW1lIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy90YXNrc1wiXG5cbmZ1bmN0aW9uIHByb2plY3RzKGlkTmFtZSkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktbWVudVwiKVxuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IGZpbmRQcm9qZWN0VGl0bGVzKGlkTmFtZSlcbiAgICBkaXNwbGF5VGFza3MobWVudSwgcHJvamVjdEFycmF5KVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cyIsImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4uL2Z1bmN0aW9ucy9kaXNwbGF5VGFza3NcIlxuaW1wb3J0IGN1cnJlbnREYXRlIGZyb20gXCIuLi9mdW5jdGlvbnMvZGF0ZXNcIlxuaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XG5pbXBvcnQgeyBmaW5kRGF0ZUFycmF5IH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9hcnJheXNcIjtcblxuZnVuY3Rpb24gdG9kYXlQYWdlKCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktbWVudVwiKVxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0KHRvZGF5LCAneXl5eS1NTS1kZCcpO1xuICAgIGNvbnN0IHRvZGF5QXJyYXkgPSBmaW5kRGF0ZUFycmF5KGZvcm1hdHRlZERhdGUpXG4gICAgZGlzcGxheVRhc2tzKG1lbnUsIHRvZGF5QXJyYXkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZGF5UGFnZSIsImltcG9ydCBjdXJyZW50RGF0ZSBmcm9tIFwiLi4vZnVuY3Rpb25zL2RhdGVzXCJcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4uL2Z1bmN0aW9ucy9kaXNwbGF5VGFza3NcIlxuaW1wb3J0IHsgbmV4dFdlZWsgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2FycmF5c1wiXG5cbmZ1bmN0aW9uIFdlZWsoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1tZW51XCIpXG4gICAgY29uc3Qgd2Vla0FycmF5ID0gbmV4dFdlZWsoKVxuICAgIGRpc3BsYXlUYXNrcyhtZW51LCB3ZWVrQXJyYXkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlZWsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9