"use strict";
(self["webpackChunkproj_42"] = self["webpackChunkproj_42"] || []).push([["src_components_coffeeMachineFront_coffeeMachineFront_tsx"],{

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/canvasClock/canvasClock.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/canvasClock/canvasClock.scss ***!
  \**************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "canvas {\n  font-family: \"DigitalNumbers\";\n  height: 1.2rem;\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/components/canvasClock/canvasClock.scss"],"names":[],"mappings":"AAAA;EACE,6BAAA;EACA,cAAA;EACA,WAAA;AACF","sourcesContent":["canvas {\r\n  font-family: \"DigitalNumbers\";\r\n  height: 1.2rem;\r\n  width: 100%;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/coffeeMachineFront.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/coffeeMachineFront.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.invitation {\n  margin: 20px;\n  background-color: rgba(137, 96, 124, 0.8117647059);\n  color: #fff;\n  border-radius: 20px;\n  padding: 15px;\n}\n\n.machine {\n  width: 46.6666666667vh;\n  height: 70vh;\n  border-radius: 10px;\n  background: url(\"https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/design/machine-front1.png\") 50%/100% no-repeat;\n}\n\n.control {\n  width: 93%;\n  height: 27%;\n  border-radius: 10px 10px 0 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 5% 4%;\n  margin-top: 12%;\n  margin-left: 4%;\n}\n\n.onBtn {\n  margin-left: 15% !important;\n}\n\n.container__left > button {\n  width: 3vh;\n  height: 3vh;\n  border-radius: 25px;\n  box-shadow: 1px 1px 10px 4px #ff0000;\n  padding: 0 2%;\n  margin-right: 5px;\n  background: url(\"https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/on.png\") 100% 100%/100% 100% no-repeat;\n}\n\n.container__left > button[aria-pressed=true] {\n  box-shadow: 1px 1px 10px 4px #008000;\n}\n\n.container__left {\n  position: relative;\n  top: -5px;\n  width: 20%;\n}\n\n.control__middle {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  height: 100%;\n  width: 0px;\n  margin-top: 1px;\n}\n\n.control__middle > button {\n  border-radius: 4px;\n}\n\n.drink__picture {\n  width: 100%;\n  height: 120%;\n  background-color: #000;\n  border-radius: 4px !important;\n}\n\n.drink__picture:hover {\n  border: 1px solid #000;\n}\n\n.drink {\n  width: 27%;\n  height: 48%;\n  background-color: #000;\n  border-radius: 4px !important;\n  padding: 0 !important;\n  margin: 0 2%;\n  overflow: hidden;\n}\n\n.control__right {\n  width: 78%;\n  display: flex;\n}\n\n.control__screen {\n  width: 100%;\n  color: rgb(227, 214, 214);\n  border-radius: 5px;\n  padding: 5px;\n  font-size: 0.9rem;\n  line-height: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.message {\n  position: relative;\n  top: -5px;\n  text-align: center;\n}\n\n.indicators {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  height: 30%;\n  width: 100%;\n}\n\n.indicator {\n  width: 1vh;\n  height: 1vh;\n  background-color: rgba(109, 103, 103, 0.721);\n  border-radius: 25px;\n  margin: 15% 11%;\n}\n\n.active {\n  background-color: #ff0000;\n  box-shadow: 0px 0px 4px 2px #ff0000;\n}\n\n.icon__water {\n  width: 4vh;\n  height: 1.5vh;\n  background: url(\"https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/water.png\") 100% 100%/100% 100% no-repeat;\n}\n\n.icon__beans {\n  width: 3vh;\n  height: 3vh;\n  background: url(\"https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/grains.png\") 100% 100%/100% 100% no-repeat;\n}\n\n.icon__waste {\n  width: 3vh;\n  height: 3vh;\n  background: url(\"https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/waste.png\") 100% 100%/100% 100% no-repeat;\n}\n\n.placeForCup {\n  width: 100%;\n  height: 52%;\n  position: relative;\n}\n\n.shelf {\n  width: 100%;\n  height: 10%;\n  border-radius: 0 0 10px 10px;\n}\n\n.cup {\n  display: none;\n  position: absolute;\n  bottom: -11vh;\n  left: 11.6666666667vh;\n  width: 35vh;\n  height: 35vh;\n}\n\nbutton {\n  border: none;\n}\n\n.music__container {\n  display: flex;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.4078431373);\n  border-radius: 15px;\n  padding: 20px;\n  width: 100%;\n  max-width: 300px;\n}\n\n.volume__icon {\n  position: relative;\n  top: 5px;\n  width: 35px;\n  height: 35px;\n  margin: 10px 0 10px 20px !important;\n  background: url(\"https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/Sounds/volume-purple.png\") 0% 100%/100% 100% no-repeat;\n}\n\n.radio {\n  width: 15vh;\n  border-radius: 50px !important;\n  background: linear-gradient(to right, #b81e88, #924eb8);\n  box-shadow: 2px 3px 5px rgb(16, 16, 16);\n  color: #fff !important;\n}", "",{"version":3,"sources":["webpack://./src/styles/coffeeMachineFront.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AACF;;AACA;EACE,YAAA;EACA,kDAAA;EACA,WAAA;EACA,mBAAA;EACA,aAAA;AAEF;;AAAA;EACE,sBAAA;EACA,YAAA;EACA,mBAAA;EACA,oIAAA;AAGF;;AADA;EACE,UAAA;EACA,WAAA;EACA,4BAAA;EACA,aAAA;EACA,8BAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;AAIF;;AAFA;EACE,2BAAA;AAKF;;AAHA;EACE,UAAA;EACA,WAAA;EACA,mBAAA;EACA,oCAAA;EACA,aAAA;EACA,iBAAA;EACA,0HAAA;AAMF;;AAJA;EACE,oCAAA;AAOF;;AALA;EACE,kBAAA;EACA,SAAA;EACA,UAAA;AAQF;;AANA;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;EACA,UAAA;EACA,eAAA;AASF;;AAPA;EACE,kBAAA;AAUF;;AARA;EACE,WAAA;EACA,YAAA;EACA,sBAAA;EACA,6BAAA;AAWF;;AATA;EACE,sBAAA;AAYF;;AAVA;EACE,UAAA;EACA,WAAA;EACA,sBAAA;EACA,6BAAA;EACA,qBAAA;EACA,YAAA;EACA,gBAAA;AAaF;;AAXA;EACE,UAAA;EACA,aAAA;AAcF;;AAZA;EACE,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;EACA,OAAA;EACA,aAAA;EACA,sBAAA;AAeF;;AAbA;EACE,kBAAA;EACA,SAAA;EACA,kBAAA;AAgBF;;AAdA;EACE,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,WAAA;EACA,WAAA;AAiBF;;AAfA;EACE,UAAA;EACA,WAAA;EACA,4CAAA;EACA,mBAAA;EACA,eAAA;AAkBF;;AAhBA;EACE,yBAAA;EACA,mCAAA;AAmBF;;AAjBA;EACE,UAAA;EACA,aAAA;EACA,6HAAA;AAoBF;;AAlBA;EACE,UAAA;EACA,WAAA;EACA,8HAAA;AAqBF;;AAnBA;EACE,UAAA;EACA,WAAA;EACA,6HAAA;AAsBF;;AApBA;EACE,WAAA;EACA,WAAA;EACA,kBAAA;AAuBF;;AArBA;EACE,WAAA;EACA,WAAA;EACA,4BAAA;AAwBF;;AAtBA;EACE,aAAA;EACA,kBAAA;EACA,aAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;AAyBF;;AAvBA;EACE,YAAA;AA0BF;;AAxBA;EACE,aAAA;EACA,uBAAA;EACA,6CAAA;EACA,mBAAA;EACA,aAAA;EACA,WAAA;EACA,gBAAA;AA2BF;;AAzBA;EACE,kBAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,mCAAA;EACA,4IAAA;AA4BF;;AA1BA;EACE,WAAA;EACA,8BAAA;EACA,uDAAA;EACA,uCAAA;EACA,sBAAA;AA6BF","sourcesContent":[".container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.invitation {\r\n  margin: 20px;\r\n  background-color: #89607ccf;\r\n  color: #fff;\r\n  border-radius: 20px;\r\n  padding: 15px;\r\n}\r\n.machine {\r\n  width: calc(70vh / 1.5);\r\n  height: 70vh;\r\n  border-radius: 10px;\r\n  background: url('https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/design/machine-front1.png') 50% / 100% no-repeat;\r\n}\r\n.control {\r\n  width: 93%;\r\n  height: 27%;\r\n  border-radius: 10px 10px 0 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 5% 4%;\r\n  margin-top: 12%;\r\n  margin-left: 4%;\r\n}\r\n.onBtn {\r\n  margin-left: 15% !important;\r\n}\r\n.container__left > button {\r\n  width: 3vh;\r\n  height: 3vh;\r\n  border-radius: 25px;\r\n  box-shadow: 1px 1px 10px 4px #ff0000;\r\n  padding: 0 2%;\r\n  margin-right: 5px;\r\n  background: url('https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/on.png') 100% 100%/100% 100% no-repeat;\r\n}\r\n.container__left > button[aria-pressed=\"true\"] {\r\n  box-shadow: 1px 1px 10px 4px #008000;\r\n}\r\n.container__left {\r\n  position: relative;\r\n  top: -5px;\r\n  width: 20%;\r\n}\r\n.control__middle {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  height: 100%;\r\n  width: 0px;\r\n  margin-top: 1px;\r\n}\r\n.control__middle > button {\r\n  border-radius: 4px;\r\n}\r\n.drink__picture {\r\n  width: 100%;\r\n  height: 120%;\r\n  background-color: #000;\r\n  border-radius: 4px !important;\r\n}\r\n.drink__picture:hover {\r\n  border: 1px solid #000;\r\n}\r\n.drink {\r\n  width: 27%;\r\n  height: 48%;\r\n  background-color: #000;\r\n  border-radius: 4px !important;\r\n  padding: 0 !important;\r\n  margin: 0 2%;\r\n  overflow: hidden;\r\n}\r\n.control__right {\r\n  width: 78%;\r\n  display: flex;\r\n}\r\n.control__screen {\r\n  width: 100%;\r\n  color: rgb(227, 214, 214);\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  font-size: 0.9rem;\r\n  line-height: 100%;\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.message {\r\n  position: relative;\r\n  top: -5px;\r\n  text-align: center;\r\n}\r\n.indicators {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  height: 30%;\r\n  width: 100%;\r\n}\r\n.indicator {\r\n  width: 1vh;\r\n  height: 1vh;\r\n  background-color: rgba(109, 103, 103, 0.721);\r\n  border-radius: 25px;\r\n  margin: 15% 11%;\r\n}\r\n.active {\r\n  background-color: #ff0000;\r\n  box-shadow: 0px 0px 4px 2px #ff0000;\r\n}\r\n.icon__water {\r\n  width: 4vh;\r\n  height: 1.5vh;\r\n  background: url('https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/water.png') 100% 100%/100% 100% no-repeat;\r\n}\r\n.icon__beans {\r\n  width: 3vh;\r\n  height: 3vh;\r\n  background: url('https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/grains.png') 100% 100%/100% 100% no-repeat;\r\n}\r\n.icon__waste {\r\n  width: 3vh;\r\n  height: 3vh;\r\n  background: url('https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/waste.png') 100% 100%/100% 100% no-repeat;\r\n}\r\n.placeForCup {\r\n  width: 100%;\r\n  height: 52%;\r\n  position: relative;\r\n}\r\n.shelf {\r\n  width: 100%;\r\n  height: 10%;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n.cup {\r\n  display: none;\r\n  position: absolute;\r\n  bottom: -11vh;\r\n  left: calc((70vh / 1.2 / 2) - 17.5vh);\r\n  width: 35vh;\r\n  height: 35vh;\r\n}\r\nbutton {\r\n  border: none;\r\n}\r\n.music__container {\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: #00000068;\r\n  border-radius: 15px;\r\n  padding: 20px;\r\n  width: 100%;\r\n  max-width: 300px;\r\n}\r\n.volume__icon {\r\n  position: relative;\r\n  top: 5px;\r\n  width: 35px;\r\n  height: 35px;\r\n  margin: 10px 0 10px 20px !important;\r\n  background: url('https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/Sounds/volume-purple.png') 0% 100% / 100% 100% no-repeat;\r\n}\r\n.radio {\r\n  width: 15vh;\r\n  border-radius: 50px !important;\r\n  background: linear-gradient(to right, #b81e88, #924eb8);\r\n  box-shadow: 2px 3px 5px rgb(16, 16, 16);\r\n  color: #fff !important;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/cup.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/cup.scss ***!
  \**************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper {\n  display: none;\n  justify-content: center;\n  width: 35vh;\n  height: 100%;\n  flex-wrap: wrap;\n  align-content: flex-end;\n  margin: 0 auto;\n}\n\n.cup-container {\n  position: relative;\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-end;\n  cursor: auto;\n}\n\n.controls {\n  max-width: 190px;\n}\n\n#Drawing {\n  max-width: 400px;\n}\n\n#Coffee {\n  transition: cubic-bezier(0.68, -0.55, 0.27, 1.35) all 3s;\n  transform-origin: bottom;\n}\n\n@keyframes liquid {\n  0% {\n    height: 0px;\n    opacity: 1;\n  }\n  5% {\n    height: 0px;\n    opacity: 1;\n  }\n  20% {\n    height: 70px;\n    opacity: 1;\n  }\n  95% {\n    height: 70px;\n    opacity: 1;\n  }\n  100% {\n    height: 70px;\n    opacity: 0;\n  }\n}\n.liquid {\n  display: none;\n  width: 8px;\n  border-radius: 0 0 5px 5px;\n  height: 71px;\n  opacity: 0;\n  position: absolute;\n  top: 20vh;\n  left: 48%;\n  background-color: #443530;\n  animation: liquid 4s 4s linear infinite;\n}\n\n.coffee-medium__smoke {\n  width: 8px;\n  height: 20px;\n  position: absolute;\n  border-radius: 5px;\n  background-color: #b3aeae;\n}\n\n@keyframes smokeOne {\n  0% {\n    bottom: 15vh;\n    opacity: 0;\n  }\n  40% {\n    bottom: 20vh;\n    opacity: 0.5;\n  }\n  80% {\n    bottom: 30vh;\n    opacity: 0.3;\n  }\n  100% {\n    bottom: 30vh;\n    opacity: 0;\n  }\n}\n@keyframes smokeTwo {\n  0% {\n    bottom: 20vh;\n    opacity: 0;\n  }\n  40% {\n    bottom: 25vh;\n    opacity: 0.5;\n  }\n  80% {\n    bottom: 35vh;\n    opacity: 0.3;\n  }\n  100% {\n    bottom: 35vh;\n    opacity: 0;\n  }\n}\n.coffee-medium__smoke-one {\n  opacity: 0;\n  bottom: 50vh;\n  left: 25vh;\n  filter: blur(4px);\n  animation: smokeOne 3s 4s linear infinite;\n}\n\n.coffee-medium__smoke-two {\n  opacity: 0;\n  bottom: 70vh;\n  left: 23vh;\n  filter: blur(4px);\n  animation: smokeTwo 3s 5s linear infinite;\n}\n\n.coffee-medium__smoke-three {\n  opacity: 0;\n  bottom: 65vh;\n  right: 28vh;\n  filter: blur(4px);\n  animation: smokeTwo 3s 6s linear infinite;\n}\n\n.coffee-medium__smoke-four {\n  opacity: 0;\n  bottom: 50vh;\n  right: 25vh;\n  filter: blur(4px);\n  animation: smokeOne 3s 5s linear infinite;\n}\n\n.steam {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/cup.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;AACF;;AACA;EACE,kBAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,YAAA;AAEF;;AAAA;EACE,gBAAA;AAGF;;AADA;EACE,gBAAA;AAIF;;AAFA;EACE,wDAAA;EACA,wBAAA;AAKF;;AAFA;EACE;IACE,WAAA;IACA,UAAA;EAKF;EAHA;IACE,WAAA;IACA,UAAA;EAKF;EAHA;IACE,YAAA;IACA,UAAA;EAKF;EAHA;IACE,YAAA;IACA,UAAA;EAKF;EAHA;IACE,YAAA;IACA,UAAA;EAKF;AACF;AAFA;EACE,aAAA;EACA,UAAA;EACA,0BAAA;EACA,YAAA;EACA,UAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,yBAAA;EACA,uCAAA;AAIF;;AADA;EACE,UAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBAAA;AAIF;;AAFA;EACE;IACE,YAAA;IACA,UAAA;EAKF;EAHA;IACE,YAAA;IACA,YAAA;EAKF;EAHA;IACE,YAAA;IACA,YAAA;EAKF;EAHA;IACE,YAAA;IACA,UAAA;EAKF;AACF;AAHA;EACE;IACE,YAAA;IACA,UAAA;EAKF;EAHA;IACE,YAAA;IACA,YAAA;EAKF;EAHA;IACE,YAAA;IACA,YAAA;EAKF;EAHA;IACE,YAAA;IACA,UAAA;EAKF;AACF;AAHA;EACE,UAAA;EACA,YAAA;EACA,UAAA;EACA,iBAAA;EACA,yCAAA;AAKF;;AAHA;EACE,UAAA;EACA,YAAA;EACA,UAAA;EACA,iBAAA;EACA,yCAAA;AAMF;;AAJA;EACE,UAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,yCAAA;AAOF;;AALA;EACE,UAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,yCAAA;AAQF;;AANA;EACE,aAAA;AASF","sourcesContent":[".wrapper {\r\n  display: none;\r\n  justify-content: center;\r\n  width: 35vh;\r\n  height: 100%;\r\n  flex-wrap: wrap;\r\n  align-content: flex-end;\r\n  margin: 0 auto;\r\n}\r\n.cup-container {\r\n  position: relative;\r\n  flex: 1;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-content: flex-end;\r\n  cursor: auto;\r\n}\r\n.controls {\r\n  max-width: 190px;\r\n}\r\n#Drawing {\r\n  max-width: 400px;\r\n}\r\n#Coffee {\r\n  transition: cubic-bezier(.68,-0.55,.27,1.35) all 3s;\r\n  transform-origin: bottom;\r\n}\r\n\r\n@keyframes liquid {\r\n  0% {\r\n    height: 0px;  \r\n    opacity: 1;\r\n  }\r\n  5% {\r\n    height: 0px;  \r\n    opacity: 1;\r\n  }\r\n  20% {\r\n    height: 70px;  \r\n    opacity: 1;\r\n  }\r\n  95% {\r\n    height: 70px;\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    height: 70px;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.liquid {\r\n  display: none;\r\n  width: 8px;\r\n  border-radius: 0 0 5px 5px;\r\n  height: 71px;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 20vh;\r\n  left: 48%;\r\n  background-color: #443530;\r\n  animation: liquid 4s 4s linear infinite;\r\n}\r\n\r\n.coffee-medium__smoke {\r\n  width: 8px;\r\n  height: 20px;\r\n  position: absolute;  \r\n  border-radius: 5px;\r\n  background-color: #b3aeae;\r\n}\r\n@keyframes smokeOne {\r\n  0% {\r\n    bottom: 15vh;\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    bottom: 20vh;\r\n    opacity: .5;\r\n  }\r\n  80% {\r\n    bottom: 30vh;\r\n    opacity: .3;\r\n  }\r\n  100% {\r\n    bottom: 30vh;\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes smokeTwo {\r\n  0% {\r\n    bottom: 20vh;\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    bottom: 25vh;\r\n    opacity: .5;\r\n  }\r\n  80% {\r\n    bottom: 35vh;\r\n    opacity: .3;\r\n  }\r\n  100% {\r\n    bottom: 35vh;\r\n    opacity: 0;\r\n  }\r\n}\r\n.coffee-medium__smoke-one {\r\n  opacity: 0;\r\n  bottom: 50vh;\r\n  left: 25vh;\r\n  filter: blur(4px);\r\n  animation: smokeOne 3s 4s linear infinite;\r\n}\r\n.coffee-medium__smoke-two {\r\n  opacity: 0;\r\n  bottom: 70vh;\r\n  left: 23vh;\r\n  filter: blur(4px);\r\n  animation: smokeTwo 3s 5s linear infinite;\r\n}\r\n.coffee-medium__smoke-three {\r\n  opacity: 0;\r\n  bottom: 65vh;\r\n  right: 28vh;\r\n  filter: blur(4px);\r\n  animation: smokeTwo 3s 6s linear infinite;\r\n}\r\n.coffee-medium__smoke-four {\r\n  opacity: 0;\r\n  bottom: 50vh;\r\n  right: 25vh;\r\n  filter: blur(4px);\r\n  animation: smokeOne 3s 5s linear infinite;\r\n}\r\n.steam {\r\n  display: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/canvasClock/canvasClock.scss":
/*!*****************************************************!*\
  !*** ./src/components/canvasClock/canvasClock.scss ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./canvasClock.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/canvasClock/canvasClock.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./canvasClock.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/canvasClock/canvasClock.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./canvasClock.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/canvasClock/canvasClock.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/coffeeMachineFront.scss":
/*!********************************************!*\
  !*** ./src/styles/coffeeMachineFront.scss ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../node_modules/sass-loader/dist/cjs.js!./coffeeMachineFront.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/coffeeMachineFront.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../node_modules/sass-loader/dist/cjs.js!./coffeeMachineFront.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/coffeeMachineFront.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../node_modules/sass-loader/dist/cjs.js!./coffeeMachineFront.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/coffeeMachineFront.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/cup.scss":
/*!*****************************!*\
  !*** ./src/styles/cup.scss ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../node_modules/sass-loader/dist/cjs.js!./cup.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/cup.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../node_modules/sass-loader/dist/cjs.js!./cup.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/cup.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../node_modules/sass-loader/dist/cjs.js!./cup.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/cup.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/canvasClock/digit.ts":
/*!*********************************************!*\
  !*** ./src/components/canvasClock/digit.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderDigitalClock": () => (/* binding */ renderDigitalClock)
/* harmony export */ });
var renderDigitalClock = function (context, props) {
    var top = props.top, left = props.left, width = props.width, height = props.height, bgColor = props.bgColor, timeoffset = props.timeoffset, dialColor = props.dialColor, time24h = props.time24h, fontSize = props.fontSize;
    var now = new Date();
    now.setTime(now.getTime() + timeoffset * 1000);
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hour = time24h ? now.getHours() : now.getHours() % 12;
    var secBlink = ':';
    if (hour < 10)
        hour = '0' + hour.toString();
    if (min < 10)
        min = '0' + min;
    if (sec < 10)
        sec = '0' + sec;
    if (Number(sec) % 2 === 0) {
        secBlink = ':';
    }
    context.clearRect(left, top, width, height);
    context.beginPath();
    context.fillStyle = bgColor;
    context.rect(top, left, width, height);
    context.fill();
    context.closePath();
    context.fillStyle = dialColor;
    context.textAlign = 'center';
    context.font = fontSize + 'px DigitalNumbers';
    context.fillText(hour + secBlink + min + ':' + sec, width / 4, height / 2.5);
    setTimeout(function () { return renderDigitalClock(context, props); }, 50);
};


/***/ }),

/***/ "./src/components/canvasClock/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/canvasClock/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _canvasClock_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvasClock.scss */ "./src/components/canvasClock/canvasClock.scss");
/* harmony import */ var components_canvasClock_digit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/canvasClock/digit */ "./src/components/canvasClock/digit.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var CanvasClock = function (props) {
    var defaultProps = __assign({ size: 200, bgColor: '#4d4d4d', timeoffset: 0, dialColor: '#00ff05', time24h: true }, props);
    var id = defaultProps.id, width = defaultProps.width, height = defaultProps.height;
    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        var context = canvasRef.current.getContext('2d');
        (0,components_canvasClock_digit__WEBPACK_IMPORTED_MODULE_3__.renderDigitalClock)(context, defaultProps);
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", { ref: canvasRef, id: id, width: width, height: height }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasClock);


/***/ }),

/***/ "./src/components/coffeeMachineFront/addIndicators.tsx":
/*!*************************************************************!*\
  !*** ./src/components/coffeeMachineFront/addIndicators.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _manageResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageResources */ "./src/components/coffeeMachineFront/manageResources.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function AddIndicators() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "indicators" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "indicator indicator__water" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "icon icon__water", onClick: _manageResources__WEBPACK_IMPORTED_MODULE_1__.addWater }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "indicator indicator__beans" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "icon icon__beans", onClick: _manageResources__WEBPACK_IMPORTED_MODULE_1__.addBeans }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "indicator indicator__waste" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "icon icon__waste", onClick: _manageResources__WEBPACK_IMPORTED_MODULE_1__.emptyWasteContainer })] })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddIndicators);


/***/ }),

/***/ "./src/components/coffeeMachineFront/checkResources.ts":
/*!*************************************************************!*\
  !*** ./src/components/coffeeMachineFront/checkResources.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _manageResources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageResources */ "./src/components/coffeeMachineFront/manageResources.ts");

function checkResources() {
    var resources = [_manageResources__WEBPACK_IMPORTED_MODULE_0__.water, _manageResources__WEBPACK_IMPORTED_MODULE_0__.beans, _manageResources__WEBPACK_IMPORTED_MODULE_0__.wastePlace];
    var indicators = [
        document.querySelector('.indicator__water'),
        document.querySelector('.indicator__beans'),
        document.querySelector('.indicator__waste')
    ];
    var msg = document.querySelector('.message');
    msg.innerHTML = '';
    var msgNoResources = ['Add water (press "W"). ', 'Add coffee beans (press "B"). ', 'Empty waste container (press "E").'];
    var drinks = document.querySelector('.control__middle');
    for (var i = 0; i < resources.length; i++) {
        if (!resources[i]) {
            indicators[i].classList.add('active');
            msg.innerHTML += msgNoResources[i];
            drinks.style.width = '0px';
            drinks.style.flex = '0';
        }
    }
    return;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkResources);


/***/ }),

/***/ "./src/components/coffeeMachineFront/coffeeMachineFront.tsx":
/*!******************************************************************!*\
  !*** ./src/components/coffeeMachineFront/coffeeMachineFront.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var styles_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/coffeeMachineFront.scss */ "./src/styles/coffeeMachineFront.scss");
/* harmony import */ var _onOffBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onOffBtn */ "./src/components/coffeeMachineFront/onOffBtn.tsx");
/* harmony import */ var _addIndicators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addIndicators */ "./src/components/coffeeMachineFront/addIndicators.tsx");
/* harmony import */ var _cup_cup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cup/cup */ "./src/components/cup/cup.tsx");
/* harmony import */ var styles_cup_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/cup.scss */ "./src/styles/cup.scss");
/* harmony import */ var _cup_steam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cup/steam */ "./src/components/cup/steam.tsx");
/* harmony import */ var providers_drinks_drinks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! providers/drinks/drinks */ "./src/providers/drinks/drinks.tsx");
/* harmony import */ var components_canvasClock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/canvasClock */ "./src/components/canvasClock/index.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};









var CoffeeMachineFront = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "machine" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "control" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "container__left" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_onOffBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_addIndicators__WEBPACK_IMPORTED_MODULE_3__["default"], {})] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "control__right" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(providers_drinks_drinks__WEBPACK_IMPORTED_MODULE_7__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "control__screen" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_canvasClock__WEBPACK_IMPORTED_MODULE_8__["default"], { id: "canvas", top: "10", left: "-13", width: "200", height: "29", fontSize: "12", dialColor: "rgb(227, 214, 214)", bgColor: "#a17d8b" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "message" }, { children: "Turn on the coffee machine" }))] }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "placeForCup" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "liquid" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cup_steam__WEBPACK_IMPORTED_MODULE_6__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cup_cup__WEBPACK_IMPORTED_MODULE_4__["default"], {})] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "shelf" })] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoffeeMachineFront);


/***/ }),

/***/ "./src/components/coffeeMachineFront/manageResources.ts":
/*!**************************************************************!*\
  !*** ./src/components/coffeeMachineFront/manageResources.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBeans": () => (/* binding */ addBeans),
/* harmony export */   "addWater": () => (/* binding */ addWater),
/* harmony export */   "beans": () => (/* binding */ beans),
/* harmony export */   "emptyWasteContainer": () => (/* binding */ emptyWasteContainer),
/* harmony export */   "reduceResources": () => (/* binding */ reduceResources),
/* harmony export */   "wastePlace": () => (/* binding */ wastePlace),
/* harmony export */   "water": () => (/* binding */ water)
/* harmony export */ });
/* harmony import */ var _checkResources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkResources */ "./src/components/coffeeMachineFront/checkResources.ts");
/* harmony import */ var _sound_allSounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sound/allSounds */ "./src/components/sound/allSounds.ts");


var water = 1;
var beans = 2;
var wastePlace = 1;
function openDrinkChoice() {
    if (water && beans && wastePlace) {
        var drinks = document.querySelector('.control__middle');
        drinks.style.width = '100%';
        drinks.style.flex = '1';
        var screen_1 = document.querySelector('.control__screen');
        screen_1.style.display = 'none';
    }
}
function addWater() {
    if (!water)
        _sound_allSounds__WEBPACK_IMPORTED_MODULE_1__.sound.play('water');
    water = 1;
    var indicator = document.querySelector('.indicator__water');
    indicator.classList.remove('active');
    (0,_checkResources__WEBPACK_IMPORTED_MODULE_0__["default"])();
    openDrinkChoice();
}
function addBeans() {
    if (!beans)
        _sound_allSounds__WEBPACK_IMPORTED_MODULE_1__.sound.play('grains');
    beans = 2;
    var indicator = document.querySelector('.indicator__beans');
    indicator.classList.remove('active');
    (0,_checkResources__WEBPACK_IMPORTED_MODULE_0__["default"])();
    openDrinkChoice();
}
function emptyWasteContainer() {
    if (!wastePlace)
        _sound_allSounds__WEBPACK_IMPORTED_MODULE_1__.sound.play('container');
    wastePlace = 1;
    var indicator = document.querySelector('.indicator__waste');
    indicator.classList.remove('active');
    (0,_checkResources__WEBPACK_IMPORTED_MODULE_0__["default"])();
    openDrinkChoice();
}
function reduceResources() {
    water--;
    beans--;
    wastePlace--;
}
document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyW')
        addWater();
    if (event.code == 'KeyB')
        addBeans();
    if (event.code == 'KeyE')
        emptyWasteContainer();
});


/***/ }),

/***/ "./src/components/coffeeMachineFront/onOffBtn.tsx":
/*!********************************************************!*\
  !*** ./src/components/coffeeMachineFront/onOffBtn.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ToggleButton/ToggleButton.js");
/* harmony import */ var _sound_allSounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sound/allSounds */ "./src/components/sound/allSounds.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




function TurnOnOff() {
    var _a = react__WEBPACK_IMPORTED_MODULE_1__.useState(false), selected = _a[0], setSelected = _a[1];
    var indicators = document.getElementsByClassName('active');
    while (indicators.length) {
        indicators[0].classList.remove('active');
    }
    var msg = document.querySelector('.message');
    var drinks = document.querySelector('.control__middle');
    var modal = document.querySelector('.card');
    if (msg && msg.innerHTML === 'Turn on the coffee machine' && selected) {
        msg.innerHTML = 'Choose coffee';
    }
    else if (msg && modal) {
        msg.innerHTML = '';
        drinks.style.width = '0px';
    }
    else if (msg && !modal) {
        msg.innerHTML = 'Turn on the coffee machine';
        drinks.style.width = '0px';
    }
    function toggle() {
        var drinks = document.querySelector('.control__middle');
        var screen = document.querySelector('.control__screen');
        if (!selected) {
            drinks.style.width = '100%';
            drinks.style.flex = '1';
            screen.style.display = 'none';
        }
        else {
            drinks.style.width = '0px';
            drinks.style.flex = '0';
            screen.style.display = 'flex';
        }
        setSelected(!selected);
        _sound_allSounds__WEBPACK_IMPORTED_MODULE_2__.sound.play('onOff');
        var btn = event.target;
        btn.disabled = true;
        setTimeout(function () {
            btn.disabled = false;
        }, 1000);
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ value: "check", selected: selected, onChange: function () { return toggle(); }, className: "onBtn" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "control__onOff" }) })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TurnOnOff);


/***/ }),

/***/ "./src/components/coffeeMachineFront/startPreparation.ts":
/*!***************************************************************!*\
  !*** ./src/components/coffeeMachineFront/startPreparation.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkResources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkResources */ "./src/components/coffeeMachineFront/checkResources.ts");
/* harmony import */ var _cup_addCup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cup/addCup */ "./src/components/cup/addCup.ts");
/* harmony import */ var _manageResources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manageResources */ "./src/components/coffeeMachineFront/manageResources.ts");



function startPreparation() {
    var drinkBtn = event.target.parentElement;
    var coffee = drinkBtn.getAttribute('value');
    var size = drinkBtn.getAttribute('data-size');
    var color = drinkBtn.getAttribute('name');
    var screen = document.querySelector('.control__screen');
    var isOn = document.querySelector('.onBtn').getAttribute("aria-pressed");
    var drinks = document.querySelector('.control__middle');
    drinks.style.width = '0px';
    drinks.style.flex = '0';
    screen.style.display = 'flex';
    var cupContainer = document.querySelector('.cup-container');
    var steamOne = document.querySelector('.coffee-medium__smoke-one');
    var steamTwo = document.querySelector('.coffee-medium__smoke-two');
    if (size === 'S') {
        cupContainer.style.flex = '0.4';
        steamOne.style.left = '22vh';
        steamTwo.style.right = '30vh';
    }
    else if (size === 'M') {
        cupContainer.style.flex = '0.5';
        steamOne.style.left = '25vh';
        steamTwo.style.right = '27vh';
    }
    else {
        cupContainer.style.flex = '0.6';
        steamOne.style.left = '28vh';
        steamTwo.style.right = '25vh';
    }
    var liquid = document.getElementById('Liquid');
    var stream = document.querySelector('.liquid');
    liquid.style.fill = color;
    stream.style.backgroundColor = color;
    var msg = document.querySelector('.message');
    var modal = document.querySelector('.card');
    function start() {
        if (!modal)
            (0,_checkResources__WEBPACK_IMPORTED_MODULE_0__["default"])();
        if (_manageResources__WEBPACK_IMPORTED_MODULE_2__.water > 0 && _manageResources__WEBPACK_IMPORTED_MODULE_2__.beans > 0 && _manageResources__WEBPACK_IMPORTED_MODULE_2__.wastePlace > 0) {
            (0,_cup_addCup__WEBPACK_IMPORTED_MODULE_1__["default"])();
            !modal ? msg.innerHTML = "Preparing ".concat(coffee, "...") : modal.innerHTML += coffee;
            var onBtn = document.getElementsByClassName('onBtn');
            onBtn[0].disabled = true;
            if (!modal)
                (0,_manageResources__WEBPACK_IMPORTED_MODULE_2__.reduceResources)();
        }
    }
    if (isOn === "true") {
        modal ? setTimeout(function () { start(); }, 8000) : start();
    }
    return;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startPreparation);


/***/ }),

/***/ "./src/components/cup/addCup.ts":
/*!**************************************!*\
  !*** ./src/components/cup/addCup.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sound_allSounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sound/allSounds */ "./src/components/sound/allSounds.ts");
/* harmony import */ var _finishPreparation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finishPreparation */ "./src/components/cup/finishPreparation.ts");


function addCup() {
    var cup = document.querySelector('.wrapper');
    cup.style.display = "flex";
    var start = 0;
    requestAnimationFrame(function measure(time) {
        if (start === 0)
            start = time;
        var progress = (time - start) / 500;
        var translate = progress * 5.5;
        cup.style.margin = "0 ".concat(translate, "vh");
        if (progress < 1)
            requestAnimationFrame(measure);
    });
    _sound_allSounds__WEBPACK_IMPORTED_MODULE_0__.sound.play('cup-on-shell');
    setTimeout(function () {
        _sound_allSounds__WEBPACK_IMPORTED_MODULE_0__.sound.play('making-coffee');
    }, 1000);
    (0,_finishPreparation__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCup);


/***/ }),

/***/ "./src/components/cup/cup.tsx":
/*!************************************!*\
  !*** ./src/components/cup/cup.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var styles_cup_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/cup.scss */ "./src/styles/cup.scss");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function Cup() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "wrapper" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "cup-container" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", __assign({ id: "Drawing", viewBox: "0 0 142 108", xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "1.5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { id: "Plate", d: "M18.015 94.437c7.612 1.459 35.965 5.128 54.27 5.128 14.4 0 39.517-.949 51.277-5.128.573-.204-1.29 5.969-4.887 7.003-8.012 2.303-27.277 5.155-46.39 4.92-15.054-.184-41.378-3.092-50.486-4.92-3.498-.703-4.721-7.183-3.784-7.003zM70.84 66.76c38.546 0 69.84 7.35 69.84 16.403 0 9.052-31.294 16.402-69.84 16.402C32.294 99.565 1 92.215 1 83.163 1 74.11 32.294 66.76 70.84 66.76z", fill: "none", stroke: "url(#_Linear1)", strokeWidth: "2" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { id: "Mug", d: "M62.255 1.398C66.07 1.139 70.121 1 74.32 1c16.639 0 30.972 2.189 37.365 5.328 1.315.486 2.379.976 3.165 1.453 2.125 1.292 3.236 6.334 2.834 14.423l.102-.012.041-.477-.032.476-.009.001c-.458 5.251-1.674 18.534-2.216 23.84a306.273 306.273 0 01-.732 6.467 845.219 845.219 0 01-1.248 8.96c-2.617 16.856-6.333 30.535-9.529 31.768-9.323 3.598-17.283 5.258-29.334 5.351-16.492.127-32.395-2.605-36.786-4.151-4.485-1.578-7.811-31.759-8.204-48.635-.441-18.964.83-34.119 4.08-37.051 4.515-4.071 14.488-6.81 28.438-7.343zm55.54 20.793c1.634-.172 12.149-.683 15.804 4.084 7.437 9.701 3.133 32.403-4.08 41.076-2.228 2.679-17.116 2.16-17.116 2.16s.533-3.512 1.187-8.052c.452-2.908.871-5.911 1.248-8.96.329-2.468.623-4.806.83-6.69.43-3.926 1.758-18.213 2.127-23.618zm-6.11-15.863C104.633 3.721 92.262 1 74.727 1c-3.711 0-9.157.271-12.472.398C45.552 2.532 32.68 6.436 32.68 10.48c0 3.343 9.024 5.782 21.339 7.334C60.003 18.569 66.934 19 74.32 19c22.584 0 40.92-4.033 40.92-9 0-1.308-1.271-2.55-3.555-3.672z", fill: "none", stroke: "url(#_Linear2)", strokeWidth: "2" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", __assign({ id: "_clip3" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { id: "Liquid-Clip", d: "M110.986 58.684c-1.831 12.969-7.069 27.114-7.949 29.313-.603 1.509.592 2.439.326 3.07-1.147 2.729-15.124 6.986-29.813 7.031-12.413.037-33.366-2.362-36.067-4.871-2.337-2.171-6.827-29.596-7.003-46.475-.21-20.026.36-28.237 1.918-34.047.062-.233 5.557 3.344 16.441 5.229 10.997 1.904 33.545 2.002 37.381 1.677 7.898-.668 19.551-2.244 25.966-5.11.997-.445 1.602 24.334-1.2 44.183z" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", __assign({ clipPath: "url(#_clip3)" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", __assign({ id: "Coffee" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { id: "Liquid", d: "M16.063 59.232c8.845-3.959 35.7-4.952 54.977-4.952 21.21 0 53.709 2.395 61.221 6.684 9.387 5.359-21.15 42.962-21.15 42.962l-81.467-1.981S6.281 63.61 16.063 59.232z", fill: "#443530" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", __assign({ clipPath: "url(#_clip4)" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ellipse", { cx: "71.982", cy: "55.975", rx: "40.701", ry: "6.14", fill: "#df148a", fillOpacity: ".15" }) }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { id: "Shadow", d: "M96.383 2.92c3.96 0 1.347 81.408-4.8 83.52-3.142 1.08-18.38 10.205-34.56 11.52-2.877.234 20.57 2.302 26.279 1.651 8.493-.969 16.745-1.294 23.881-5.731 8.636-18.444 11.73-54.634 9.6-84.96 0 0-4.463-1.496-6.72-2.16-3.4-1-13.68-3.84-13.68-3.84z", fill: "#340044", fillOpacity: ".13" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", __assign({ id: "_clip4" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M16.063 59.232c8.845-3.959 35.7-4.952 54.977-4.952 21.21 0 53.709 2.395 61.221 6.684 9.387 5.359-21.15 42.962-21.15 42.962l-81.467-1.981S6.281 63.61 16.063 59.232z" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", __assign({ id: "_Linear1", x1: "0", y1: "0", x2: "1", y2: "0", gradientUnits: "userSpaceOnUse", gradientTransform: "matrix(139.68 0 0 30.6961 -2.84 91.715)" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "0", stopColor: "#df148a" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "1", stopColor: "#a357c3" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", __assign({ id: "_Linear2", x1: "0", y1: "0", x2: "1", y2: "0", gradientUnits: "userSpaceOnUse", gradientTransform: "matrix(107.181 0 0 99.0471 42.218 50.739)" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "0", stopColor: "#df148a" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "1", stopColor: "#a357c3" })] }))] })] })) })) })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cup);


/***/ }),

/***/ "./src/components/cup/fillCup.ts":
/*!***************************************!*\
  !*** ./src/components/cup/fillCup.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function fillCup(level) {
    var coffee = document.querySelector("#Coffee");
    coffee.style.transform = "scaleY(".concat(level, ")");
    var liquid = document.querySelector(".liquid");
    var steam = document.querySelector(".steam");
    setTimeout(function () {
        liquid.style.display = 'block';
        steam.style.display = 'block';
        setTimeout(function () {
            liquid.style.display = 'none';
        }, 8000);
    }, 4000);
    return;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillCup);


/***/ }),

/***/ "./src/components/cup/finishPreparation.ts":
/*!*************************************************!*\
  !*** ./src/components/cup/finishPreparation.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sound_allSounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sound/allSounds */ "./src/components/sound/allSounds.ts");
/* harmony import */ var _fillCup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fillCup */ "./src/components/cup/fillCup.ts");


function finishPreparation() {
    (0,_fillCup__WEBPACK_IMPORTED_MODULE_1__["default"])(0.1);
    setTimeout(function () {
        _sound_allSounds__WEBPACK_IMPORTED_MODULE_0__.sound.play('fillcup');
        (0,_fillCup__WEBPACK_IMPORTED_MODULE_1__["default"])(1.6);
        var liquid = document.querySelector(".liquid");
        setTimeout(function () {
            liquid.style.display = 'none';
        }, 4000);
    }, 8000);
    var msg = document.querySelector('.message');
    var cup = document.querySelector('.wrapper');
    setTimeout(function () {
        msg.innerHTML = "Enjoy your coffee! Take your cup.";
        var cupContainer = document.querySelector('.cup-container');
        cupContainer.style.cursor = 'pointer';
        cup.addEventListener('click', takeCup);
    }, 12000);
    var modal = document.querySelector('.card');
    function takeCup() {
        var steam = document.querySelector('.steam');
        cup.style.display = "none";
        steam.style.display = "none";
        !modal ? msg.innerHTML = 'Choose your coffee' : msg.innerHTML = '';
        var screen = document.querySelector('.control__screen');
        var drinkBtns = document.querySelector('.control__middle');
        setTimeout(function () {
            if (!modal)
                screen.style.display = 'none';
            if (!modal)
                drinkBtns.style.flex = '2';
        }, 1500);
        var onBtn = document.getElementsByClassName('onBtn');
        onBtn[0].disabled = false;
    }
    return;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (finishPreparation);


/***/ }),

/***/ "./src/components/cup/steam.tsx":
/*!**************************************!*\
  !*** ./src/components/cup/steam.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Steam = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "steam" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "coffee-medium__smoke coffee-medium__smoke-one" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "coffee-medium__smoke coffee-medium__smoke-two" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "coffee-medium__smoke coffee-medium__smoke-three" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "coffee-medium__smoke coffee-medium__smoke-four" })] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Steam);


/***/ }),

/***/ "./src/components/sound/allSounds.ts":
/*!*******************************************!*\
  !*** ./src/components/sound/allSounds.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sound": () => (/* binding */ sound)
/* harmony export */ });
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_0__);

var sound = new howler__WEBPACK_IMPORTED_MODULE_0__.Howl({
    "src": [
        "https://github.com/MarinaKovel/coffeemachinedata/blob/main/Sounds/Sound.webm?raw=true",
        "https://github.com/MarinaKovel/coffeemachinedata/blob/main/Sounds/Sound.mp3?raw=true"
    ],
    "sprite": {
        "container": [
            0,
            936.0090702947846
        ],
        "cup-on-shell": [
            2000,
            2246.5306122448983
        ],
        "fillcup": [
            6000,
            2519.9999999999995
        ],
        "grains": [
            10000,
            3960.000000000001
        ],
        "making-coffee": [
            15000,
            6269.387755102041
        ],
        "onOff": [
            23000,
            522.448979591836
        ],
        "sugar": [
            25000,
            5459.591836734696
        ],
        "water": [
            32000,
            1854.6938775510214
        ]
    }
});


/***/ }),

/***/ "./src/providers/drinks/drinks.tsx":
/*!*****************************************!*\
  !*** ./src/providers/drinks/drinks.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ToggleButton */ "./node_modules/@mui/material/ToggleButton/ToggleButton.js");
/* harmony import */ var _mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButtonGroup */ "./node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js");
/* harmony import */ var components_coffeeMachineFront_startPreparation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/coffeeMachineFront/startPreparation */ "./src/components/coffeeMachineFront/startPreparation.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var Drinks = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), data = _a[0], setData = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        fetch("http://localhost:5000/coffees/")
            .then(function (response) {
            if (response.ok)
                return response.json();
        })
            .then(function (response) {
            var arrData = [];
            for (var i = 0; i < response.length; i++) {
                arrData.push(response[i]);
            }
            setData(arrData);
        })
            .catch(function (err) { return console.error(err); });
    }, []);
    var alignment = react__WEBPACK_IMPORTED_MODULE_1__.useState('left')[0];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ className: "control__middle", value: alignment, exclusive: true, onChange: function () { return (0,components_coffeeMachineFront_startPreparation__WEBPACK_IMPORTED_MODULE_2__["default"])(); } }, { children: data && data.map(function (drinkData) {
            var className = "drink ".concat(drinkData.name.toLowerCase());
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ value: data && drinkData.name, className: className, "data-size": drinkData.size, name: drinkData.recipe }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: drinkData.picture, className: "drink__picture" }) }), drinkData.index);
        }) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drinks);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfY29mZmVlTWFjaGluZUZyb250X2NvZmZlZU1hY2hpbmVGcm9udF90c3guNzFjODczN2FkNzY4ZjJkYTMwOWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esa0RBQWtELG9DQUFvQyxtQkFBbUIsZ0JBQWdCLEdBQUcsT0FBTyw4R0FBOEcsV0FBVyxVQUFVLFVBQVUsaUNBQWlDLHNDQUFzQyxxQkFBcUIsa0JBQWtCLEtBQUssMkJBQTJCO0FBQzlaO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLHNEQUFzRCxrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRyxpQkFBaUIsaUJBQWlCLHVEQUF1RCxnQkFBZ0Isd0JBQXdCLGtCQUFrQixHQUFHLGNBQWMsMkJBQTJCLGlCQUFpQix3QkFBd0IsMklBQTJJLEdBQUcsY0FBYyxlQUFlLGdCQUFnQixpQ0FBaUMsa0JBQWtCLG1DQUFtQyxtQkFBbUIsb0JBQW9CLG9CQUFvQixHQUFHLFlBQVksZ0NBQWdDLEdBQUcsK0JBQStCLGVBQWUsZ0JBQWdCLHdCQUF3Qix5Q0FBeUMsa0JBQWtCLHNCQUFzQixpSUFBaUksR0FBRyxrREFBa0QseUNBQXlDLEdBQUcsc0JBQXNCLHVCQUF1QixjQUFjLGVBQWUsR0FBRyxzQkFBc0Isa0JBQWtCLGtDQUFrQyx3QkFBd0Isb0JBQW9CLGlCQUFpQixlQUFlLG9CQUFvQixHQUFHLCtCQUErQix1QkFBdUIsR0FBRyxxQkFBcUIsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsa0NBQWtDLEdBQUcsMkJBQTJCLDJCQUEyQixHQUFHLFlBQVksZUFBZSxnQkFBZ0IsMkJBQTJCLGtDQUFrQywwQkFBMEIsaUJBQWlCLHFCQUFx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QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxvQ0FBb0MsNEJBQTRCO0FBQ2hFLEtBQUs7QUFDTCxvQkFBb0IsMkNBQWM7QUFDbEMsWUFBWSxzREFBSSxDQUFDLHVFQUFpQixhQUFhLHlGQUF5RixPQUFPLDBGQUFnQixPQUFPLElBQUk7QUFDMUs7QUFDQSxtQkFBbUIsc0RBQUksQ0FBQyxrRUFBWSxhQUFhLDBHQUEwRyxJQUFJLFVBQVUsc0RBQUksVUFBVSxxREFBcUQsR0FBRztBQUMvTyxTQUFTLEdBQUc7QUFDWjtBQUNBLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvY2FudmFzQ2xvY2svY2FudmFzQ2xvY2suc2NzcyIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9zdHlsZXMvY29mZmVlTWFjaGluZUZyb250LnNjc3MiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvc3R5bGVzL2N1cC5zY3NzIiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvY2FudmFzQ2xvY2svY2FudmFzQ2xvY2suc2Nzcz8wMTE0Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL3N0eWxlcy9jb2ZmZWVNYWNoaW5lRnJvbnQuc2Nzcz85MTg5Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL3N0eWxlcy9jdXAuc2Nzcz8xNGZmIiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvY2FudmFzQ2xvY2svZGlnaXQudHMiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jYW52YXNDbG9jay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jb2ZmZWVNYWNoaW5lRnJvbnQvYWRkSW5kaWNhdG9ycy50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jb2ZmZWVNYWNoaW5lRnJvbnQvY2hlY2tSZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jb2ZmZWVNYWNoaW5lRnJvbnQvY29mZmVlTWFjaGluZUZyb250LnRzeCIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2NvZmZlZU1hY2hpbmVGcm9udC9tYW5hZ2VSZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jb2ZmZWVNYWNoaW5lRnJvbnQvb25PZmZCdG4udHN4Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvY29mZmVlTWFjaGluZUZyb250L3N0YXJ0UHJlcGFyYXRpb24udHMiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jdXAvYWRkQ3VwLnRzIiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvY3VwL2N1cC50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jdXAvZmlsbEN1cC50cyIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2N1cC9maW5pc2hQcmVwYXJhdGlvbi50cyIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2N1cC9zdGVhbS50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9zb3VuZC9hbGxTb3VuZHMudHMiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvcHJvdmlkZXJzL2RyaW5rcy9kcmlua3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiY2FudmFzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGlnaXRhbE51bWJlcnNcXFwiO1xcbiAgaGVpZ2h0OiAxLjJyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY2FudmFzQ2xvY2svY2FudmFzQ2xvY2suc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJjYW52YXMge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJEaWdpdGFsTnVtYmVyc1xcXCI7XFxyXFxuICBoZWlnaHQ6IDEuMnJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW52aXRhdGlvbiB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNywgOTYsIDEyNCwgMC44MTE3NjQ3MDU5KTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5tYWNoaW5lIHtcXG4gIHdpZHRoOiA0Ni42NjY2NjY2NjY3dmg7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvY29mZmVlbWFjaGluZWRhdGEvbWFpbi9kZXNpZ24vbWFjaGluZS1mcm9udDEucG5nXFxcIikgNTAlLzEwMCUgbm8tcmVwZWF0O1xcbn1cXG5cXG4uY29udHJvbCB7XFxuICB3aWR0aDogOTMlO1xcbiAgaGVpZ2h0OiAyNyU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDUlIDQlO1xcbiAgbWFyZ2luLXRvcDogMTIlO1xcbiAgbWFyZ2luLWxlZnQ6IDQlO1xcbn1cXG5cXG4ub25CdG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDE1JSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29udGFpbmVyX19sZWZ0ID4gYnV0dG9uIHtcXG4gIHdpZHRoOiAzdmg7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggNHB4ICNmZjAwMDA7XFxuICBwYWRkaW5nOiAwIDIlO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9vbmxpbmVzdG9yZWRhdGEvbWFpbi9vbi5wbmdcXFwiKSAxMDAlIDEwMCUvMTAwJSAxMDAlIG5vLXJlcGVhdDtcXG59XFxuXFxuLmNvbnRhaW5lcl9fbGVmdCA+IGJ1dHRvblthcmlhLXByZXNzZWQ9dHJ1ZV0ge1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDRweCAjMDA4MDAwO1xcbn1cXG5cXG4uY29udGFpbmVyX19sZWZ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTVweDtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbi5jb250cm9sX19taWRkbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAwcHg7XFxuICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcblxcbi5jb250cm9sX19taWRkbGUgPiBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uZHJpbmtfX3BpY3R1cmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kcmlua19fcGljdHVyZTpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4uZHJpbmsge1xcbiAgd2lkdGg6IDI3JTtcXG4gIGhlaWdodDogNDglO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luOiAwIDIlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNvbnRyb2xfX3JpZ2h0IHtcXG4gIHdpZHRoOiA3OCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY29udHJvbF9fc2NyZWVuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHJnYigyMjcsIDIxNCwgMjE0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmluZGljYXRvcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5kaWNhdG9yIHtcXG4gIHdpZHRoOiAxdmg7XFxuICBoZWlnaHQ6IDF2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA5LCAxMDMsIDEwMywgMC43MjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIG1hcmdpbjogMTUlIDExJTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMnB4ICNmZjAwMDA7XFxufVxcblxcbi5pY29uX193YXRlciB7XFxuICB3aWR0aDogNHZoO1xcbiAgaGVpZ2h0OiAxLjV2aDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL01hcmluYUtvdmVsL29ubGluZXN0b3JlZGF0YS9tYWluL3dhdGVyLnBuZ1xcXCIpIDEwMCUgMTAwJS8xMDAlIDEwMCUgbm8tcmVwZWF0O1xcbn1cXG5cXG4uaWNvbl9fYmVhbnMge1xcbiAgd2lkdGg6IDN2aDtcXG4gIGhlaWdodDogM3ZoO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvb25saW5lc3RvcmVkYXRhL21haW4vZ3JhaW5zLnBuZ1xcXCIpIDEwMCUgMTAwJS8xMDAlIDEwMCUgbm8tcmVwZWF0O1xcbn1cXG5cXG4uaWNvbl9fd2FzdGUge1xcbiAgd2lkdGg6IDN2aDtcXG4gIGhlaWdodDogM3ZoO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvb25saW5lc3RvcmVkYXRhL21haW4vd2FzdGUucG5nXFxcIikgMTAwJSAxMDAlLzEwMCUgMTAwJSBuby1yZXBlYXQ7XFxufVxcblxcbi5wbGFjZUZvckN1cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTIlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2hlbGYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxufVxcblxcbi5jdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTExdmg7XFxuICBsZWZ0OiAxMS42NjY2NjY2NjY3dmg7XFxuICB3aWR0aDogMzV2aDtcXG4gIGhlaWdodDogMzV2aDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm11c2ljX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQwNzg0MzEzNzMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxufVxcblxcbi52b2x1bWVfX2ljb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIG1hcmdpbjogMTBweCAwIDEwcHggMjBweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvY29mZmVlbWFjaGluZWRhdGEvbWFpbi9Tb3VuZHMvdm9sdW1lLXB1cnBsZS5wbmdcXFwiKSAwJSAxMDAlLzEwMCUgMTAwJSBuby1yZXBlYXQ7XFxufVxcblxcbi5yYWRpbyB7XFxuICB3aWR0aDogMTV2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2I4MWU4OCwgIzkyNGViOCk7XFxuICBib3gtc2hhZG93OiAycHggM3B4IDVweCByZ2IoMTYsIDE2LCAxNik7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvZmZlZU1hY2hpbmVGcm9udC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvSUFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0UsMkJBQUE7QUFLRjs7QUFIQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDBIQUFBO0FBTUY7O0FBSkE7RUFDRSxvQ0FBQTtBQU9GOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVFGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBUEE7RUFDRSxrQkFBQTtBQVVGOztBQVJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBV0Y7O0FBVEE7RUFDRSxzQkFBQTtBQVlGOztBQVZBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFhRjs7QUFYQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBY0Y7O0FBWkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQWVGOztBQWJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQWlCRjs7QUFmQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFrQkY7O0FBaEJBO0VBQ0UseUJBQUE7RUFDQSxtQ0FBQTtBQW1CRjs7QUFqQkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDZIQUFBO0FBb0JGOztBQWxCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEhBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSw2SEFBQTtBQXNCRjs7QUFwQkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBdUJGOztBQXJCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUF3QkY7O0FBdEJBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF5QkY7O0FBdkJBO0VBQ0UsWUFBQTtBQTBCRjs7QUF4QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQTJCRjs7QUF6QkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsNElBQUE7QUE0QkY7O0FBMUJBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsdURBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0FBNkJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5pbnZpdGF0aW9uIHtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4OTYwN2NjZjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcbi5tYWNoaW5lIHtcXHJcXG4gIHdpZHRoOiBjYWxjKDcwdmggLyAxLjUpO1xcclxcbiAgaGVpZ2h0OiA3MHZoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL01hcmluYUtvdmVsL2NvZmZlZW1hY2hpbmVkYXRhL21haW4vZGVzaWduL21hY2hpbmUtZnJvbnQxLnBuZycpIDUwJSAvIDEwMCUgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG4uY29udHJvbCB7XFxyXFxuICB3aWR0aDogOTMlO1xcclxcbiAgaGVpZ2h0OiAyNyU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDUlIDQlO1xcclxcbiAgbWFyZ2luLXRvcDogMTIlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDQlO1xcclxcbn1cXHJcXG4ub25CdG4ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE1JSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uY29udGFpbmVyX19sZWZ0ID4gYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAzdmg7XFxyXFxuICBoZWlnaHQ6IDN2aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggNHB4ICNmZjAwMDA7XFxyXFxuICBwYWRkaW5nOiAwIDIlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9vbmxpbmVzdG9yZWRhdGEvbWFpbi9vbi5wbmcnKSAxMDAlIDEwMCUvMTAwJSAxMDAlIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuLmNvbnRhaW5lcl9fbGVmdCA+IGJ1dHRvblthcmlhLXByZXNzZWQ9XFxcInRydWVcXFwiXSB7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggNHB4ICMwMDgwMDA7XFxyXFxufVxcclxcbi5jb250YWluZXJfX2xlZnQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAtNXB4O1xcclxcbiAgd2lkdGg6IDIwJTtcXHJcXG59XFxyXFxuLmNvbnRyb2xfX21pZGRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDFweDtcXHJcXG59XFxyXFxuLmNvbnRyb2xfX21pZGRsZSA+IGJ1dHRvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbi5kcmlua19fcGljdHVyZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTIwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmRyaW5rX19waWN0dXJlOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcbi5kcmluayB7XFxyXFxuICB3aWR0aDogMjclO1xcclxcbiAgaGVpZ2h0OiA0OCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxyXFxuICBtYXJnaW46IDAgMiU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4uY29udHJvbF9fcmlnaHQge1xcclxcbiAgd2lkdGg6IDc4JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5jb250cm9sX19zY3JlZW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogcmdiKDIyNywgMjE0LCAyMTQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTAwJTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAtNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uaW5kaWNhdG9ycyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGhlaWdodDogMzAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5pbmRpY2F0b3Ige1xcclxcbiAgd2lkdGg6IDF2aDtcXHJcXG4gIGhlaWdodDogMXZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDksIDEwMywgMTAzLCAwLjcyMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgbWFyZ2luOiAxNSUgMTElO1xcclxcbn1cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAycHggI2ZmMDAwMDtcXHJcXG59XFxyXFxuLmljb25fX3dhdGVyIHtcXHJcXG4gIHdpZHRoOiA0dmg7XFxyXFxuICBoZWlnaHQ6IDEuNXZoO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvb25saW5lc3RvcmVkYXRhL21haW4vd2F0ZXIucG5nJykgMTAwJSAxMDAlLzEwMCUgMTAwJSBuby1yZXBlYXQ7XFxyXFxufVxcclxcbi5pY29uX19iZWFucyB7XFxyXFxuICB3aWR0aDogM3ZoO1xcclxcbiAgaGVpZ2h0OiAzdmg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9vbmxpbmVzdG9yZWRhdGEvbWFpbi9ncmFpbnMucG5nJykgMTAwJSAxMDAlLzEwMCUgMTAwJSBuby1yZXBlYXQ7XFxyXFxufVxcclxcbi5pY29uX193YXN0ZSB7XFxyXFxuICB3aWR0aDogM3ZoO1xcclxcbiAgaGVpZ2h0OiAzdmg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9vbmxpbmVzdG9yZWRhdGEvbWFpbi93YXN0ZS5wbmcnKSAxMDAlIDEwMCUvMTAwJSAxMDAlIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuLnBsYWNlRm9yQ3VwIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MiU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5zaGVsZiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXHJcXG59XFxyXFxuLmN1cCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAtMTF2aDtcXHJcXG4gIGxlZnQ6IGNhbGMoKDcwdmggLyAxLjIgLyAyKSAtIDE3LjV2aCk7XFxyXFxuICB3aWR0aDogMzV2aDtcXHJcXG4gIGhlaWdodDogMzV2aDtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLm11c2ljX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDY4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMzAwcHg7XFxyXFxufVxcclxcbi52b2x1bWVfX2ljb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICB3aWR0aDogMzVweDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDEwcHggMjBweCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvY29mZmVlbWFjaGluZWRhdGEvbWFpbi9Tb3VuZHMvdm9sdW1lLXB1cnBsZS5wbmcnKSAwJSAxMDAlIC8gMTAwJSAxMDAlIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuLnJhZGlvIHtcXHJcXG4gIHdpZHRoOiAxNXZoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYjgxZTg4LCAjOTI0ZWI4KTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggNXB4IHJnYigxNiwgMTYsIDE2KTtcXHJcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNXZoO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmN1cC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGN1cnNvcjogYXV0bztcXG59XFxuXFxuLmNvbnRyb2xzIHtcXG4gIG1heC13aWR0aDogMTkwcHg7XFxufVxcblxcbiNEcmF3aW5nIHtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbiNDb2ZmZWUge1xcbiAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjM1KSBhbGwgM3M7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxufVxcblxcbkBrZXlmcmFtZXMgbGlxdWlkIHtcXG4gIDAlIHtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICA1JSB7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMjAlIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgOTUlIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLmxpcXVpZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgaGVpZ2h0OiA3MXB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjB2aDtcXG4gIGxlZnQ6IDQ4JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDM1MzA7XFxuICBhbmltYXRpb246IGxpcXVpZCA0cyA0cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5jb2ZmZWUtbWVkaXVtX19zbW9rZSB7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzYWVhZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbW9rZU9uZSB7XFxuICAwJSB7XFxuICAgIGJvdHRvbTogMTV2aDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIGJvdHRvbTogMjB2aDtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgfVxcbiAgODAlIHtcXG4gICAgYm90dG9tOiAzMHZoO1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm90dG9tOiAzMHZoO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNtb2tlVHdvIHtcXG4gIDAlIHtcXG4gICAgYm90dG9tOiAyMHZoO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgYm90dG9tOiAyNXZoO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9XFxuICA4MCUge1xcbiAgICBib3R0b206IDM1dmg7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3R0b206IDM1dmg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5jb2ZmZWUtbWVkaXVtX19zbW9rZS1vbmUge1xcbiAgb3BhY2l0eTogMDtcXG4gIGJvdHRvbTogNTB2aDtcXG4gIGxlZnQ6IDI1dmg7XFxuICBmaWx0ZXI6IGJsdXIoNHB4KTtcXG4gIGFuaW1hdGlvbjogc21va2VPbmUgM3MgNHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4uY29mZmVlLW1lZGl1bV9fc21va2UtdHdvIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBib3R0b206IDcwdmg7XFxuICBsZWZ0OiAyM3ZoO1xcbiAgZmlsdGVyOiBibHVyKDRweCk7XFxuICBhbmltYXRpb246IHNtb2tlVHdvIDNzIDVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmNvZmZlZS1tZWRpdW1fX3Ntb2tlLXRocmVlIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBib3R0b206IDY1dmg7XFxuICByaWdodDogMjh2aDtcXG4gIGZpbHRlcjogYmx1cig0cHgpO1xcbiAgYW5pbWF0aW9uOiBzbW9rZVR3byAzcyA2cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5jb2ZmZWUtbWVkaXVtX19zbW9rZS1mb3VyIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBib3R0b206IDUwdmg7XFxuICByaWdodDogMjV2aDtcXG4gIGZpbHRlcjogYmx1cig0cHgpO1xcbiAgYW5pbWF0aW9uOiBzbW9rZU9uZSAzcyA1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5zdGVhbSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2N1cC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtBQUlGOztBQUZBO0VBQ0Usd0RBQUE7RUFDQSx3QkFBQTtBQUtGOztBQUZBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQUtGO0VBSEE7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQUtGO0FBQ0Y7QUFGQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0FBSUY7O0FBREE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUlGOztBQUZBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQUtGO0FBQ0Y7QUFIQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFLRjtFQUhBO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUFLRjtFQUhBO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUFLRjtFQUhBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFLRjtBQUNGO0FBSEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0FBS0Y7O0FBSEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0FBTUY7O0FBSkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0FBT0Y7O0FBTEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0FBUUY7O0FBTkE7RUFDRSxhQUFBO0FBU0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndyYXBwZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDM1dmg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG4uY3VwLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgY3Vyc29yOiBhdXRvO1xcclxcbn1cXHJcXG4uY29udHJvbHMge1xcclxcbiAgbWF4LXdpZHRoOiAxOTBweDtcXHJcXG59XFxyXFxuI0RyYXdpbmcge1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuI0NvZmZlZSB7XFxyXFxuICB0cmFuc2l0aW9uOiBjdWJpYy1iZXppZXIoLjY4LC0wLjU1LC4yNywxLjM1KSBhbGwgM3M7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbGlxdWlkIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgaGVpZ2h0OiAwcHg7ICBcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG4gIDUlIHtcXHJcXG4gICAgaGVpZ2h0OiAwcHg7ICBcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG4gIDIwJSB7XFxyXFxuICAgIGhlaWdodDogNzBweDsgIFxcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbiAgOTUlIHtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxpcXVpZCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcclxcbiAgaGVpZ2h0OiA3MXB4O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjB2aDtcXHJcXG4gIGxlZnQ6IDQ4JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDM1MzA7XFxyXFxuICBhbmltYXRpb246IGxpcXVpZCA0cyA0cyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUtbWVkaXVtX19zbW9rZSB7XFxyXFxuICB3aWR0aDogOHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlOyAgXFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNhZWFlO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNtb2tlT25lIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYm90dG9tOiAxNXZoO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgNDAlIHtcXHJcXG4gICAgYm90dG9tOiAyMHZoO1xcclxcbiAgICBvcGFjaXR5OiAuNTtcXHJcXG4gIH1cXHJcXG4gIDgwJSB7XFxyXFxuICAgIGJvdHRvbTogMzB2aDtcXHJcXG4gICAgb3BhY2l0eTogLjM7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYm90dG9tOiAzMHZoO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNtb2tlVHdvIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYm90dG9tOiAyMHZoO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgNDAlIHtcXHJcXG4gICAgYm90dG9tOiAyNXZoO1xcclxcbiAgICBvcGFjaXR5OiAuNTtcXHJcXG4gIH1cXHJcXG4gIDgwJSB7XFxyXFxuICAgIGJvdHRvbTogMzV2aDtcXHJcXG4gICAgb3BhY2l0eTogLjM7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYm90dG9tOiAzNXZoO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uY29mZmVlLW1lZGl1bV9fc21va2Utb25lIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBib3R0b206IDUwdmg7XFxyXFxuICBsZWZ0OiAyNXZoO1xcclxcbiAgZmlsdGVyOiBibHVyKDRweCk7XFxyXFxuICBhbmltYXRpb246IHNtb2tlT25lIDNzIDRzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuLmNvZmZlZS1tZWRpdW1fX3Ntb2tlLXR3byB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYm90dG9tOiA3MHZoO1xcclxcbiAgbGVmdDogMjN2aDtcXHJcXG4gIGZpbHRlcjogYmx1cig0cHgpO1xcclxcbiAgYW5pbWF0aW9uOiBzbW9rZVR3byAzcyA1cyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcbi5jb2ZmZWUtbWVkaXVtX19zbW9rZS10aHJlZSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYm90dG9tOiA2NXZoO1xcclxcbiAgcmlnaHQ6IDI4dmg7XFxyXFxuICBmaWx0ZXI6IGJsdXIoNHB4KTtcXHJcXG4gIGFuaW1hdGlvbjogc21va2VUd28gM3MgNnMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG4uY29mZmVlLW1lZGl1bV9fc21va2UtZm91ciB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYm90dG9tOiA1MHZoO1xcclxcbiAgcmlnaHQ6IDI1dmg7XFxyXFxuICBmaWx0ZXI6IGJsdXIoNHB4KTtcXHJcXG4gIGFuaW1hdGlvbjogc21va2VPbmUgM3MgNXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG4uc3RlYW0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhbnZhc0Nsb2NrLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzVdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYW52YXNDbG9jay5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhbnZhc0Nsb2NrLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzVdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2ZmZWVNYWNoaW5lRnJvbnQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNV0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvZmZlZU1hY2hpbmVGcm9udC5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNV0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvZmZlZU1hY2hpbmVGcm9udC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s1XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3VwLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzVdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jdXAuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzVdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jdXAuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCB2YXIgcmVuZGVyRGlnaXRhbENsb2NrID0gZnVuY3Rpb24gKGNvbnRleHQsIHByb3BzKSB7XHJcbiAgICB2YXIgdG9wID0gcHJvcHMudG9wLCBsZWZ0ID0gcHJvcHMubGVmdCwgd2lkdGggPSBwcm9wcy53aWR0aCwgaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0LCBiZ0NvbG9yID0gcHJvcHMuYmdDb2xvciwgdGltZW9mZnNldCA9IHByb3BzLnRpbWVvZmZzZXQsIGRpYWxDb2xvciA9IHByb3BzLmRpYWxDb2xvciwgdGltZTI0aCA9IHByb3BzLnRpbWUyNGgsIGZvbnRTaXplID0gcHJvcHMuZm9udFNpemU7XHJcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIG5vdy5zZXRUaW1lKG5vdy5nZXRUaW1lKCkgKyB0aW1lb2Zmc2V0ICogMTAwMCk7XHJcbiAgICB2YXIgc2VjID0gbm93LmdldFNlY29uZHMoKTtcclxuICAgIHZhciBtaW4gPSBub3cuZ2V0TWludXRlcygpO1xyXG4gICAgdmFyIGhvdXIgPSB0aW1lMjRoID8gbm93LmdldEhvdXJzKCkgOiBub3cuZ2V0SG91cnMoKSAlIDEyO1xyXG4gICAgdmFyIHNlY0JsaW5rID0gJzonO1xyXG4gICAgaWYgKGhvdXIgPCAxMClcclxuICAgICAgICBob3VyID0gJzAnICsgaG91ci50b1N0cmluZygpO1xyXG4gICAgaWYgKG1pbiA8IDEwKVxyXG4gICAgICAgIG1pbiA9ICcwJyArIG1pbjtcclxuICAgIGlmIChzZWMgPCAxMClcclxuICAgICAgICBzZWMgPSAnMCcgKyBzZWM7XHJcbiAgICBpZiAoTnVtYmVyKHNlYykgJSAyID09PSAwKSB7XHJcbiAgICAgICAgc2VjQmxpbmsgPSAnOic7XHJcbiAgICB9XHJcbiAgICBjb250ZXh0LmNsZWFyUmVjdChsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYmdDb2xvcjtcclxuICAgIGNvbnRleHQucmVjdCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29udGV4dC5maWxsKCk7XHJcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBkaWFsQ29sb3I7XHJcbiAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgY29udGV4dC5mb250ID0gZm9udFNpemUgKyAncHggRGlnaXRhbE51bWJlcnMnO1xyXG4gICAgY29udGV4dC5maWxsVGV4dChob3VyICsgc2VjQmxpbmsgKyBtaW4gKyAnOicgKyBzZWMsIHdpZHRoIC8gNCwgaGVpZ2h0IC8gMi41KTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVuZGVyRGlnaXRhbENsb2NrKGNvbnRleHQsIHByb3BzKTsgfSwgNTApO1xyXG59O1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9jYW52YXNDbG9jay5zY3NzJztcclxuaW1wb3J0IHsgcmVuZGVyRGlnaXRhbENsb2NrIH0gZnJvbSAnY29tcG9uZW50cy9jYW52YXNDbG9jay9kaWdpdCc7XHJcbnZhciBDYW52YXNDbG9jayA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IF9fYXNzaWduKHsgc2l6ZTogMjAwLCBiZ0NvbG9yOiAnIzRkNGQ0ZCcsIHRpbWVvZmZzZXQ6IDAsIGRpYWxDb2xvcjogJyMwMGZmMDUnLCB0aW1lMjRoOiB0cnVlIH0sIHByb3BzKTtcclxuICAgIHZhciBpZCA9IGRlZmF1bHRQcm9wcy5pZCwgd2lkdGggPSBkZWZhdWx0UHJvcHMud2lkdGgsIGhlaWdodCA9IGRlZmF1bHRQcm9wcy5oZWlnaHQ7XHJcbiAgICB2YXIgY2FudmFzUmVmID0gdXNlUmVmKCk7XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICByZW5kZXJEaWdpdGFsQ2xvY2soY29udGV4dCwgZGVmYXVsdFByb3BzKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogX2pzeChcImNhbnZhc1wiLCB7IHJlZjogY2FudmFzUmVmLCBpZDogaWQsIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSkgfSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDYW52YXNDbG9jaztcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyBhZGRXYXRlciwgYWRkQmVhbnMsIGVtcHR5V2FzdGVDb250YWluZXIgfSBmcm9tICcuL21hbmFnZVJlc291cmNlcyc7XHJcbmZ1bmN0aW9uIEFkZEluZGljYXRvcnMoKSB7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImluZGljYXRvcnNcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJpbmRpY2F0b3IgaW5kaWNhdG9yX193YXRlclwiIH0pLCBfanN4KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBcImljb24gaWNvbl9fd2F0ZXJcIiwgb25DbGljazogYWRkV2F0ZXIgfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaW5kaWNhdG9yIGluZGljYXRvcl9fYmVhbnNcIiB9KSwgX2pzeChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogXCJpY29uIGljb25fX2JlYW5zXCIsIG9uQ2xpY2s6IGFkZEJlYW5zIH0pLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImluZGljYXRvciBpbmRpY2F0b3JfX3dhc3RlXCIgfSksIF9qc3goXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IFwiaWNvbiBpY29uX193YXN0ZVwiLCBvbkNsaWNrOiBlbXB0eVdhc3RlQ29udGFpbmVyIH0pXSB9KSkpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFkZEluZGljYXRvcnM7XHJcbiIsImltcG9ydCB7IHdhdGVyLCBiZWFucywgd2FzdGVQbGFjZSB9IGZyb20gJy4vbWFuYWdlUmVzb3VyY2VzJztcclxuZnVuY3Rpb24gY2hlY2tSZXNvdXJjZXMoKSB7XHJcbiAgICB2YXIgcmVzb3VyY2VzID0gW3dhdGVyLCBiZWFucywgd2FzdGVQbGFjZV07XHJcbiAgICB2YXIgaW5kaWNhdG9ycyA9IFtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5kaWNhdG9yX193YXRlcicpLFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmRpY2F0b3JfX2JlYW5zJyksXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZGljYXRvcl9fd2FzdGUnKVxyXG4gICAgXTtcclxuICAgIHZhciBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xyXG4gICAgbXNnLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdmFyIG1zZ05vUmVzb3VyY2VzID0gWydBZGQgd2F0ZXIgKHByZXNzIFwiV1wiKS4gJywgJ0FkZCBjb2ZmZWUgYmVhbnMgKHByZXNzIFwiQlwiKS4gJywgJ0VtcHR5IHdhc3RlIGNvbnRhaW5lciAocHJlc3MgXCJFXCIpLiddO1xyXG4gICAgdmFyIGRyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sX19taWRkbGUnKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKCFyZXNvdXJjZXNbaV0pIHtcclxuICAgICAgICAgICAgaW5kaWNhdG9yc1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbXNnLmlubmVySFRNTCArPSBtc2dOb1Jlc291cmNlc1tpXTtcclxuICAgICAgICAgICAgZHJpbmtzLnN0eWxlLndpZHRoID0gJzBweCc7XHJcbiAgICAgICAgICAgIGRyaW5rcy5zdHlsZS5mbGV4ID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjaGVja1Jlc291cmNlcztcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgJ3N0eWxlcy9jb2ZmZWVNYWNoaW5lRnJvbnQuc2Nzcyc7XHJcbmltcG9ydCBUdXJuT25PZmYgZnJvbSAnLi9vbk9mZkJ0bic7XHJcbmltcG9ydCBBZGRJbmRpY2F0b3JzIGZyb20gJy4vYWRkSW5kaWNhdG9ycyc7XHJcbmltcG9ydCBDdXAgZnJvbSAnLi4vY3VwL2N1cCc7XHJcbmltcG9ydCAnc3R5bGVzL2N1cC5zY3NzJztcclxuaW1wb3J0IFN0ZWFtIGZyb20gJy4uL2N1cC9zdGVhbSc7XHJcbmltcG9ydCBEcmlua3MgZnJvbSAncHJvdmlkZXJzL2RyaW5rcy9kcmlua3MnO1xyXG5pbXBvcnQgQ2FudmFzQ2xvY2sgZnJvbSAnY29tcG9uZW50cy9jYW52YXNDbG9jayc7XHJcbnZhciBDb2ZmZWVNYWNoaW5lRnJvbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1hY2hpbmVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udHJvbFwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXJfX2xlZnRcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChUdXJuT25PZmYsIHt9KSwgX2pzeChBZGRJbmRpY2F0b3JzLCB7fSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udHJvbF9fcmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChEcmlua3MsIHt9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udHJvbF9fc2NyZWVuXCIgfSwgeyBjaGlsZHJlbjogW19qc3goQ2FudmFzQ2xvY2ssIHsgaWQ6IFwiY2FudmFzXCIsIHRvcDogXCIxMFwiLCBsZWZ0OiBcIi0xM1wiLCB3aWR0aDogXCIyMDBcIiwgaGVpZ2h0OiBcIjI5XCIsIGZvbnRTaXplOiBcIjEyXCIsIGRpYWxDb2xvcjogXCJyZ2IoMjI3LCAyMTQsIDIxNClcIiwgYmdDb2xvcjogXCIjYTE3ZDhiXCIgfSksIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1lc3NhZ2VcIiB9LCB7IGNoaWxkcmVuOiBcIlR1cm4gb24gdGhlIGNvZmZlZSBtYWNoaW5lXCIgfSkpXSB9KSldIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwbGFjZUZvckN1cFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImxpcXVpZFwiIH0pLCBfanN4KFN0ZWFtLCB7fSksIF9qc3goQ3VwLCB7fSldIH0pKSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzaGVsZlwiIH0pXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDb2ZmZWVNYWNoaW5lRnJvbnQ7XHJcbiIsImltcG9ydCBDaGVja1Jlc291cmNlcyBmcm9tICcuL2NoZWNrUmVzb3VyY2VzJztcclxuaW1wb3J0IHsgc291bmQgfSBmcm9tIFwiLi4vc291bmQvYWxsU291bmRzXCI7XHJcbmV4cG9ydCB2YXIgd2F0ZXIgPSAxO1xyXG5leHBvcnQgdmFyIGJlYW5zID0gMjtcclxuZXhwb3J0IHZhciB3YXN0ZVBsYWNlID0gMTtcclxuZnVuY3Rpb24gb3BlbkRyaW5rQ2hvaWNlKCkge1xyXG4gICAgaWYgKHdhdGVyICYmIGJlYW5zICYmIHdhc3RlUGxhY2UpIHtcclxuICAgICAgICB2YXIgZHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xfX21pZGRsZScpO1xyXG4gICAgICAgIGRyaW5rcy5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICBkcmlua3Muc3R5bGUuZmxleCA9ICcxJztcclxuICAgICAgICB2YXIgc2NyZWVuXzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbF9fc2NyZWVuJyk7XHJcbiAgICAgICAgc2NyZWVuXzEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkV2F0ZXIoKSB7XHJcbiAgICBpZiAoIXdhdGVyKVxyXG4gICAgICAgIHNvdW5kLnBsYXkoJ3dhdGVyJyk7XHJcbiAgICB3YXRlciA9IDE7XHJcbiAgICB2YXIgaW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZGljYXRvcl9fd2F0ZXInKTtcclxuICAgIGluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIENoZWNrUmVzb3VyY2VzKCk7XHJcbiAgICBvcGVuRHJpbmtDaG9pY2UoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQmVhbnMoKSB7XHJcbiAgICBpZiAoIWJlYW5zKVxyXG4gICAgICAgIHNvdW5kLnBsYXkoJ2dyYWlucycpO1xyXG4gICAgYmVhbnMgPSAyO1xyXG4gICAgdmFyIGluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmRpY2F0b3JfX2JlYW5zJyk7XHJcbiAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBDaGVja1Jlc291cmNlcygpO1xyXG4gICAgb3BlbkRyaW5rQ2hvaWNlKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5V2FzdGVDb250YWluZXIoKSB7XHJcbiAgICBpZiAoIXdhc3RlUGxhY2UpXHJcbiAgICAgICAgc291bmQucGxheSgnY29udGFpbmVyJyk7XHJcbiAgICB3YXN0ZVBsYWNlID0gMTtcclxuICAgIHZhciBpbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5kaWNhdG9yX193YXN0ZScpO1xyXG4gICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgQ2hlY2tSZXNvdXJjZXMoKTtcclxuICAgIG9wZW5Ecmlua0Nob2ljZSgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VSZXNvdXJjZXMoKSB7XHJcbiAgICB3YXRlci0tO1xyXG4gICAgYmVhbnMtLTtcclxuICAgIHdhc3RlUGxhY2UtLTtcclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PSAnS2V5VycpXHJcbiAgICAgICAgYWRkV2F0ZXIoKTtcclxuICAgIGlmIChldmVudC5jb2RlID09ICdLZXlCJylcclxuICAgICAgICBhZGRCZWFucygpO1xyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0tleUUnKVxyXG4gICAgICAgIGVtcHR5V2FzdGVDb250YWluZXIoKTtcclxufSk7XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVG9nZ2xlQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHNvdW5kIH0gZnJvbSBcIi4uL3NvdW5kL2FsbFNvdW5kc1wiO1xyXG5mdW5jdGlvbiBUdXJuT25PZmYoKSB7XHJcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksIHNlbGVjdGVkID0gX2FbMF0sIHNldFNlbGVjdGVkID0gX2FbMV07XHJcbiAgICB2YXIgaW5kaWNhdG9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZScpO1xyXG4gICAgd2hpbGUgKGluZGljYXRvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgaW5kaWNhdG9yc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIHZhciBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xyXG4gICAgdmFyIGRyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sX19taWRkbGUnKTtcclxuICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJyk7XHJcbiAgICBpZiAobXNnICYmIG1zZy5pbm5lckhUTUwgPT09ICdUdXJuIG9uIHRoZSBjb2ZmZWUgbWFjaGluZScgJiYgc2VsZWN0ZWQpIHtcclxuICAgICAgICBtc2cuaW5uZXJIVE1MID0gJ0Nob29zZSBjb2ZmZWUnO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobXNnICYmIG1vZGFsKSB7XHJcbiAgICAgICAgbXNnLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGRyaW5rcy5zdHlsZS53aWR0aCA9ICcwcHgnO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobXNnICYmICFtb2RhbCkge1xyXG4gICAgICAgIG1zZy5pbm5lckhUTUwgPSAnVHVybiBvbiB0aGUgY29mZmVlIG1hY2hpbmUnO1xyXG4gICAgICAgIGRyaW5rcy5zdHlsZS53aWR0aCA9ICcwcHgnO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xyXG4gICAgICAgIHZhciBkcmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbF9fbWlkZGxlJyk7XHJcbiAgICAgICAgdmFyIHNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sX19zY3JlZW4nKTtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGRyaW5rcy5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICAgICAgZHJpbmtzLnN0eWxlLmZsZXggPSAnMSc7XHJcbiAgICAgICAgICAgIHNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZHJpbmtzLnN0eWxlLndpZHRoID0gJzBweCc7XHJcbiAgICAgICAgICAgIGRyaW5rcy5zdHlsZS5mbGV4ID0gJzAnO1xyXG4gICAgICAgICAgICBzY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoIXNlbGVjdGVkKTtcclxuICAgICAgICBzb3VuZC5wbGF5KCdvbk9mZicpO1xyXG4gICAgICAgIHZhciBidG4gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKF9qc3goVG9nZ2xlQnV0dG9uLCBfX2Fzc2lnbih7IHZhbHVlOiBcImNoZWNrXCIsIHNlbGVjdGVkOiBzZWxlY3RlZCwgb25DaGFuZ2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRvZ2dsZSgpOyB9LCBjbGFzc05hbWU6IFwib25CdG5cIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbnRyb2xfX29uT2ZmXCIgfSkgfSkpKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUdXJuT25PZmY7XHJcbiIsImltcG9ydCBDaGVja1Jlc291cmNlcyBmcm9tICcuL2NoZWNrUmVzb3VyY2VzJztcclxuaW1wb3J0IGFkZEN1cCBmcm9tICcuLi9jdXAvYWRkQ3VwJztcclxuaW1wb3J0IHsgd2F0ZXIsIGJlYW5zLCB3YXN0ZVBsYWNlLCByZWR1Y2VSZXNvdXJjZXMgfSBmcm9tICcuL21hbmFnZVJlc291cmNlcyc7XHJcbmZ1bmN0aW9uIHN0YXJ0UHJlcGFyYXRpb24oKSB7XHJcbiAgICB2YXIgZHJpbmtCdG4gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgIHZhciBjb2ZmZWUgPSBkcmlua0J0bi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICB2YXIgc2l6ZSA9IGRyaW5rQnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1zaXplJyk7XHJcbiAgICB2YXIgY29sb3IgPSBkcmlua0J0bi5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcclxuICAgIHZhciBzY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbF9fc2NyZWVuJyk7XHJcbiAgICB2YXIgaXNPbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbkJ0bicpLmdldEF0dHJpYnV0ZShcImFyaWEtcHJlc3NlZFwiKTtcclxuICAgIHZhciBkcmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbF9fbWlkZGxlJyk7XHJcbiAgICBkcmlua3Muc3R5bGUud2lkdGggPSAnMHB4JztcclxuICAgIGRyaW5rcy5zdHlsZS5mbGV4ID0gJzAnO1xyXG4gICAgc2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB2YXIgY3VwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cC1jb250YWluZXInKTtcclxuICAgIHZhciBzdGVhbU9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2ZmZWUtbWVkaXVtX19zbW9rZS1vbmUnKTtcclxuICAgIHZhciBzdGVhbVR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2ZmZWUtbWVkaXVtX19zbW9rZS10d28nKTtcclxuICAgIGlmIChzaXplID09PSAnUycpIHtcclxuICAgICAgICBjdXBDb250YWluZXIuc3R5bGUuZmxleCA9ICcwLjQnO1xyXG4gICAgICAgIHN0ZWFtT25lLnN0eWxlLmxlZnQgPSAnMjJ2aCc7XHJcbiAgICAgICAgc3RlYW1Ud28uc3R5bGUucmlnaHQgPSAnMzB2aCc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzaXplID09PSAnTScpIHtcclxuICAgICAgICBjdXBDb250YWluZXIuc3R5bGUuZmxleCA9ICcwLjUnO1xyXG4gICAgICAgIHN0ZWFtT25lLnN0eWxlLmxlZnQgPSAnMjV2aCc7XHJcbiAgICAgICAgc3RlYW1Ud28uc3R5bGUucmlnaHQgPSAnMjd2aCc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjdXBDb250YWluZXIuc3R5bGUuZmxleCA9ICcwLjYnO1xyXG4gICAgICAgIHN0ZWFtT25lLnN0eWxlLmxlZnQgPSAnMjh2aCc7XHJcbiAgICAgICAgc3RlYW1Ud28uc3R5bGUucmlnaHQgPSAnMjV2aCc7XHJcbiAgICB9XHJcbiAgICB2YXIgbGlxdWlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xpcXVpZCcpO1xyXG4gICAgdmFyIHN0cmVhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXF1aWQnKTtcclxuICAgIGxpcXVpZC5zdHlsZS5maWxsID0gY29sb3I7XHJcbiAgICBzdHJlYW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICB2YXIgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcclxuICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJyk7XHJcbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIW1vZGFsKVxyXG4gICAgICAgICAgICBDaGVja1Jlc291cmNlcygpO1xyXG4gICAgICAgIGlmICh3YXRlciA+IDAgJiYgYmVhbnMgPiAwICYmIHdhc3RlUGxhY2UgPiAwKSB7XHJcbiAgICAgICAgICAgIGFkZEN1cCgpO1xyXG4gICAgICAgICAgICAhbW9kYWwgPyBtc2cuaW5uZXJIVE1MID0gXCJQcmVwYXJpbmcgXCIuY29uY2F0KGNvZmZlZSwgXCIuLi5cIikgOiBtb2RhbC5pbm5lckhUTUwgKz0gY29mZmVlO1xyXG4gICAgICAgICAgICB2YXIgb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvbkJ0bicpO1xyXG4gICAgICAgICAgICBvbkJ0blswXS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghbW9kYWwpXHJcbiAgICAgICAgICAgICAgICByZWR1Y2VSZXNvdXJjZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPbiA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBtb2RhbCA/IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzdGFydCgpOyB9LCA4MDAwKSA6IHN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc3RhcnRQcmVwYXJhdGlvbjtcclxuIiwiaW1wb3J0IHsgc291bmQgfSBmcm9tIFwiLi4vc291bmQvYWxsU291bmRzXCI7XHJcbmltcG9ydCBmaW5pc2hQcmVwYXJhdGlvbiBmcm9tICcuL2ZpbmlzaFByZXBhcmF0aW9uJztcclxuZnVuY3Rpb24gYWRkQ3VwKCkge1xyXG4gICAgdmFyIGN1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XHJcbiAgICBjdXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgdmFyIHN0YXJ0ID0gMDtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBtZWFzdXJlKHRpbWUpIHtcclxuICAgICAgICBpZiAoc3RhcnQgPT09IDApXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gdGltZTtcclxuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAodGltZSAtIHN0YXJ0KSAvIDUwMDtcclxuICAgICAgICB2YXIgdHJhbnNsYXRlID0gcHJvZ3Jlc3MgKiA1LjU7XHJcbiAgICAgICAgY3VwLnN0eWxlLm1hcmdpbiA9IFwiMCBcIi5jb25jYXQodHJhbnNsYXRlLCBcInZoXCIpO1xyXG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDEpXHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShtZWFzdXJlKTtcclxuICAgIH0pO1xyXG4gICAgc291bmQucGxheSgnY3VwLW9uLXNoZWxsJyk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzb3VuZC5wbGF5KCdtYWtpbmctY29mZmVlJyk7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIGZpbmlzaFByZXBhcmF0aW9uKCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYWRkQ3VwO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCAnc3R5bGVzL2N1cC5zY3NzJztcclxuZnVuY3Rpb24gQ3VwKCkge1xyXG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIndyYXBwZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImN1cC1jb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcInN2Z1wiLCBfX2Fzc2lnbih7IGlkOiBcIkRyYXdpbmdcIiwgdmlld0JveDogXCIwIDAgMTQyIDEwOFwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBmaWxsUnVsZTogXCJldmVub2RkXCIsIGNsaXBSdWxlOiBcImV2ZW5vZGRcIiwgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLCBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLCBzdHJva2VNaXRlcmxpbWl0OiBcIjEuNVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwicGF0aFwiLCB7IGlkOiBcIlBsYXRlXCIsIGQ6IFwiTTE4LjAxNSA5NC40MzdjNy42MTIgMS40NTkgMzUuOTY1IDUuMTI4IDU0LjI3IDUuMTI4IDE0LjQgMCAzOS41MTctLjk0OSA1MS4yNzctNS4xMjguNTczLS4yMDQtMS4yOSA1Ljk2OS00Ljg4NyA3LjAwMy04LjAxMiAyLjMwMy0yNy4yNzcgNS4xNTUtNDYuMzkgNC45Mi0xNS4wNTQtLjE4NC00MS4zNzgtMy4wOTItNTAuNDg2LTQuOTItMy40OTgtLjcwMy00LjcyMS03LjE4My0zLjc4NC03LjAwM3pNNzAuODQgNjYuNzZjMzguNTQ2IDAgNjkuODQgNy4zNSA2OS44NCAxNi40MDMgMCA5LjA1Mi0zMS4yOTQgMTYuNDAyLTY5Ljg0IDE2LjQwMkMzMi4yOTQgOTkuNTY1IDEgOTIuMjE1IDEgODMuMTYzIDEgNzQuMTEgMzIuMjk0IDY2Ljc2IDcwLjg0IDY2Ljc2elwiLCBmaWxsOiBcIm5vbmVcIiwgc3Ryb2tlOiBcInVybCgjX0xpbmVhcjEpXCIsIHN0cm9rZVdpZHRoOiBcIjJcIiB9KSwgX2pzeChcInBhdGhcIiwgeyBpZDogXCJNdWdcIiwgZDogXCJNNjIuMjU1IDEuMzk4QzY2LjA3IDEuMTM5IDcwLjEyMSAxIDc0LjMyIDFjMTYuNjM5IDAgMzAuOTcyIDIuMTg5IDM3LjM2NSA1LjMyOCAxLjMxNS40ODYgMi4zNzkuOTc2IDMuMTY1IDEuNDUzIDIuMTI1IDEuMjkyIDMuMjM2IDYuMzM0IDIuODM0IDE0LjQyM2wuMTAyLS4wMTIuMDQxLS40NzctLjAzMi40NzYtLjAwOS4wMDFjLS40NTggNS4yNTEtMS42NzQgMTguNTM0LTIuMjE2IDIzLjg0YTMwNi4yNzMgMzA2LjI3MyAwIDAxLS43MzIgNi40NjcgODQ1LjIxOSA4NDUuMjE5IDAgMDEtMS4yNDggOC45NmMtMi42MTcgMTYuODU2LTYuMzMzIDMwLjUzNS05LjUyOSAzMS43NjgtOS4zMjMgMy41OTgtMTcuMjgzIDUuMjU4LTI5LjMzNCA1LjM1MS0xNi40OTIuMTI3LTMyLjM5NS0yLjYwNS0zNi43ODYtNC4xNTEtNC40ODUtMS41NzgtNy44MTEtMzEuNzU5LTguMjA0LTQ4LjYzNS0uNDQxLTE4Ljk2NC44My0zNC4xMTkgNC4wOC0zNy4wNTEgNC41MTUtNC4wNzEgMTQuNDg4LTYuODEgMjguNDM4LTcuMzQzem01NS41NCAyMC43OTNjMS42MzQtLjE3MiAxMi4xNDktLjY4MyAxNS44MDQgNC4wODQgNy40MzcgOS43MDEgMy4xMzMgMzIuNDAzLTQuMDggNDEuMDc2LTIuMjI4IDIuNjc5LTE3LjExNiAyLjE2LTE3LjExNiAyLjE2cy41MzMtMy41MTIgMS4xODctOC4wNTJjLjQ1Mi0yLjkwOC44NzEtNS45MTEgMS4yNDgtOC45Ni4zMjktMi40NjguNjIzLTQuODA2LjgzLTYuNjkuNDMtMy45MjYgMS43NTgtMTguMjEzIDIuMTI3LTIzLjYxOHptLTYuMTEtMTUuODYzQzEwNC42MzMgMy43MjEgOTIuMjYyIDEgNzQuNzI3IDFjLTMuNzExIDAtOS4xNTcuMjcxLTEyLjQ3Mi4zOThDNDUuNTUyIDIuNTMyIDMyLjY4IDYuNDM2IDMyLjY4IDEwLjQ4YzAgMy4zNDMgOS4wMjQgNS43ODIgMjEuMzM5IDcuMzM0QzYwLjAwMyAxOC41NjkgNjYuOTM0IDE5IDc0LjMyIDE5YzIyLjU4NCAwIDQwLjkyLTQuMDMzIDQwLjkyLTkgMC0xLjMwOC0xLjI3MS0yLjU1LTMuNTU1LTMuNjcyelwiLCBmaWxsOiBcIm5vbmVcIiwgc3Ryb2tlOiBcInVybCgjX0xpbmVhcjIpXCIsIHN0cm9rZVdpZHRoOiBcIjJcIiB9KSwgX2pzeChcImNsaXBQYXRoXCIsIF9fYXNzaWduKHsgaWQ6IFwiX2NsaXAzXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcInBhdGhcIiwgeyBpZDogXCJMaXF1aWQtQ2xpcFwiLCBkOiBcIk0xMTAuOTg2IDU4LjY4NGMtMS44MzEgMTIuOTY5LTcuMDY5IDI3LjExNC03Ljk0OSAyOS4zMTMtLjYwMyAxLjUwOS41OTIgMi40MzkuMzI2IDMuMDctMS4xNDcgMi43MjktMTUuMTI0IDYuOTg2LTI5LjgxMyA3LjAzMS0xMi40MTMuMDM3LTMzLjM2Ni0yLjM2Mi0zNi4wNjctNC44NzEtMi4zMzctMi4xNzEtNi44MjctMjkuNTk2LTcuMDAzLTQ2LjQ3NS0uMjEtMjAuMDI2LjM2LTI4LjIzNyAxLjkxOC0zNC4wNDcuMDYyLS4yMzMgNS41NTcgMy4zNDQgMTYuNDQxIDUuMjI5IDEwLjk5NyAxLjkwNCAzMy41NDUgMi4wMDIgMzcuMzgxIDEuNjc3IDcuODk4LS42NjggMTkuNTUxLTIuMjQ0IDI1Ljk2Ni01LjExLjk5Ny0uNDQ1IDEuNjAyIDI0LjMzNC0xLjIgNDQuMTgzelwiIH0pIH0pKSwgX2pzeChcImdcIiwgX19hc3NpZ24oeyBjbGlwUGF0aDogXCJ1cmwoI19jbGlwMylcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImdcIiwgX19hc3NpZ24oeyBpZDogXCJDb2ZmZWVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcInBhdGhcIiwgeyBpZDogXCJMaXF1aWRcIiwgZDogXCJNMTYuMDYzIDU5LjIzMmM4Ljg0NS0zLjk1OSAzNS43LTQuOTUyIDU0Ljk3Ny00Ljk1MiAyMS4yMSAwIDUzLjcwOSAyLjM5NSA2MS4yMjEgNi42ODQgOS4zODcgNS4zNTktMjEuMTUgNDIuOTYyLTIxLjE1IDQyLjk2MmwtODEuNDY3LTEuOTgxUzYuMjgxIDYzLjYxIDE2LjA2MyA1OS4yMzJ6XCIsIGZpbGw6IFwiIzQ0MzUzMFwiIH0pLCBfanN4KFwiZ1wiLCBfX2Fzc2lnbih7IGNsaXBQYXRoOiBcInVybCgjX2NsaXA0KVwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJlbGxpcHNlXCIsIHsgY3g6IFwiNzEuOTgyXCIsIGN5OiBcIjU1Ljk3NVwiLCByeDogXCI0MC43MDFcIiwgcnk6IFwiNi4xNFwiLCBmaWxsOiBcIiNkZjE0OGFcIiwgZmlsbE9wYWNpdHk6IFwiLjE1XCIgfSkgfSkpXSB9KSkgfSkpLCBfanN4KFwicGF0aFwiLCB7IGlkOiBcIlNoYWRvd1wiLCBkOiBcIk05Ni4zODMgMi45MmMzLjk2IDAgMS4zNDcgODEuNDA4LTQuOCA4My41Mi0zLjE0MiAxLjA4LTE4LjM4IDEwLjIwNS0zNC41NiAxMS41Mi0yLjg3Ny4yMzQgMjAuNTcgMi4zMDIgMjYuMjc5IDEuNjUxIDguNDkzLS45NjkgMTYuNzQ1LTEuMjk0IDIzLjg4MS01LjczMSA4LjYzNi0xOC40NDQgMTEuNzMtNTQuNjM0IDkuNi04NC45NiAwIDAtNC40NjMtMS40OTYtNi43Mi0yLjE2LTMuNC0xLTEzLjY4LTMuODQtMTMuNjgtMy44NHpcIiwgZmlsbDogXCIjMzQwMDQ0XCIsIGZpbGxPcGFjaXR5OiBcIi4xM1wiIH0pLCBfanN4cyhcImRlZnNcIiwgeyBjaGlsZHJlbjogW19qc3goXCJjbGlwUGF0aFwiLCBfX2Fzc2lnbih7IGlkOiBcIl9jbGlwNFwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJwYXRoXCIsIHsgZDogXCJNMTYuMDYzIDU5LjIzMmM4Ljg0NS0zLjk1OSAzNS43LTQuOTUyIDU0Ljk3Ny00Ljk1MiAyMS4yMSAwIDUzLjcwOSAyLjM5NSA2MS4yMjEgNi42ODQgOS4zODcgNS4zNTktMjEuMTUgNDIuOTYyLTIxLjE1IDQyLjk2MmwtODEuNDY3LTEuOTgxUzYuMjgxIDYzLjYxIDE2LjA2MyA1OS4yMzJ6XCIgfSkgfSkpLCBfanN4cyhcImxpbmVhckdyYWRpZW50XCIsIF9fYXNzaWduKHsgaWQ6IFwiX0xpbmVhcjFcIiwgeDE6IFwiMFwiLCB5MTogXCIwXCIsIHgyOiBcIjFcIiwgeTI6IFwiMFwiLCBncmFkaWVudFVuaXRzOiBcInVzZXJTcGFjZU9uVXNlXCIsIGdyYWRpZW50VHJhbnNmb3JtOiBcIm1hdHJpeCgxMzkuNjggMCAwIDMwLjY5NjEgLTIuODQgOTEuNzE1KVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwic3RvcFwiLCB7IG9mZnNldDogXCIwXCIsIHN0b3BDb2xvcjogXCIjZGYxNDhhXCIgfSksIF9qc3goXCJzdG9wXCIsIHsgb2Zmc2V0OiBcIjFcIiwgc3RvcENvbG9yOiBcIiNhMzU3YzNcIiB9KV0gfSkpLCBfanN4cyhcImxpbmVhckdyYWRpZW50XCIsIF9fYXNzaWduKHsgaWQ6IFwiX0xpbmVhcjJcIiwgeDE6IFwiMFwiLCB5MTogXCIwXCIsIHgyOiBcIjFcIiwgeTI6IFwiMFwiLCBncmFkaWVudFVuaXRzOiBcInVzZXJTcGFjZU9uVXNlXCIsIGdyYWRpZW50VHJhbnNmb3JtOiBcIm1hdHJpeCgxMDcuMTgxIDAgMCA5OS4wNDcxIDQyLjIxOCA1MC43MzkpXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJzdG9wXCIsIHsgb2Zmc2V0OiBcIjBcIiwgc3RvcENvbG9yOiBcIiNkZjE0OGFcIiB9KSwgX2pzeChcInN0b3BcIiwgeyBvZmZzZXQ6IFwiMVwiLCBzdG9wQ29sb3I6IFwiI2EzNTdjM1wiIH0pXSB9KSldIH0pXSB9KSkgfSkpIH0pKSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3VwO1xyXG4iLCJmdW5jdGlvbiBmaWxsQ3VwKGxldmVsKSB7XHJcbiAgICB2YXIgY29mZmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNDb2ZmZWVcIik7XHJcbiAgICBjb2ZmZWUuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZVkoXCIuY29uY2F0KGxldmVsLCBcIilcIik7XHJcbiAgICB2YXIgbGlxdWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXF1aWRcIik7XHJcbiAgICB2YXIgc3RlYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0ZWFtXCIpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGlxdWlkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHN0ZWFtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsaXF1aWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9LCA4MDAwKTtcclxuICAgIH0sIDQwMDApO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZpbGxDdXA7XHJcbiIsImltcG9ydCB7IHNvdW5kIH0gZnJvbSBcIi4uL3NvdW5kL2FsbFNvdW5kc1wiO1xyXG5pbXBvcnQgZmlsbEN1cCBmcm9tICcuL2ZpbGxDdXAnO1xyXG5mdW5jdGlvbiBmaW5pc2hQcmVwYXJhdGlvbigpIHtcclxuICAgIGZpbGxDdXAoMC4xKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNvdW5kLnBsYXkoJ2ZpbGxjdXAnKTtcclxuICAgICAgICBmaWxsQ3VwKDEuNik7XHJcbiAgICAgICAgdmFyIGxpcXVpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlxdWlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsaXF1aWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgIH0sIDgwMDApO1xyXG4gICAgdmFyIG1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcbiAgICB2YXIgY3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1zZy5pbm5lckhUTUwgPSBcIkVuam95IHlvdXIgY29mZmVlISBUYWtlIHlvdXIgY3VwLlwiO1xyXG4gICAgICAgIHZhciBjdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VwLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGN1cENvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICAgICAgY3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFrZUN1cCk7XHJcbiAgICB9LCAxMjAwMCk7XHJcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpO1xyXG4gICAgZnVuY3Rpb24gdGFrZUN1cCgpIHtcclxuICAgICAgICB2YXIgc3RlYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RlYW0nKTtcclxuICAgICAgICBjdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHN0ZWFtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAhbW9kYWwgPyBtc2cuaW5uZXJIVE1MID0gJ0Nob29zZSB5b3VyIGNvZmZlZScgOiBtc2cuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdmFyIHNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sX19zY3JlZW4nKTtcclxuICAgICAgICB2YXIgZHJpbmtCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xfX21pZGRsZScpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIW1vZGFsKVxyXG4gICAgICAgICAgICAgICAgc2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGlmICghbW9kYWwpXHJcbiAgICAgICAgICAgICAgICBkcmlua0J0bnMuc3R5bGUuZmxleCA9ICcyJztcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICB2YXIgb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvbkJ0bicpO1xyXG4gICAgICAgIG9uQnRuWzBdLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZmluaXNoUHJlcGFyYXRpb247XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxudmFyIFN0ZWFtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJzdGVhbVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvZmZlZS1tZWRpdW1fX3Ntb2tlIGNvZmZlZS1tZWRpdW1fX3Ntb2tlLW9uZVwiIH0pLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvZmZlZS1tZWRpdW1fX3Ntb2tlIGNvZmZlZS1tZWRpdW1fX3Ntb2tlLXR3b1wiIH0pLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvZmZlZS1tZWRpdW1fX3Ntb2tlIGNvZmZlZS1tZWRpdW1fX3Ntb2tlLXRocmVlXCIgfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29mZmVlLW1lZGl1bV9fc21va2UgY29mZmVlLW1lZGl1bV9fc21va2UtZm91clwiIH0pXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdGVhbTtcclxuIiwiaW1wb3J0IHsgSG93bCB9IGZyb20gXCJob3dsZXJcIjtcclxuZXhwb3J0IHZhciBzb3VuZCA9IG5ldyBIb3dsKHtcclxuICAgIFwic3JjXCI6IFtcclxuICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9NYXJpbmFLb3ZlbC9jb2ZmZWVtYWNoaW5lZGF0YS9ibG9iL21haW4vU291bmRzL1NvdW5kLndlYm0/cmF3PXRydWVcIixcclxuICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9NYXJpbmFLb3ZlbC9jb2ZmZWVtYWNoaW5lZGF0YS9ibG9iL21haW4vU291bmRzL1NvdW5kLm1wMz9yYXc9dHJ1ZVwiXHJcbiAgICBdLFxyXG4gICAgXCJzcHJpdGVcIjoge1xyXG4gICAgICAgIFwiY29udGFpbmVyXCI6IFtcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgOTM2LjAwOTA3MDI5NDc4NDZcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiY3VwLW9uLXNoZWxsXCI6IFtcclxuICAgICAgICAgICAgMjAwMCxcclxuICAgICAgICAgICAgMjI0Ni41MzA2MTIyNDQ4OTgzXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImZpbGxjdXBcIjogW1xyXG4gICAgICAgICAgICA2MDAwLFxyXG4gICAgICAgICAgICAyNTE5Ljk5OTk5OTk5OTk5OTVcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiZ3JhaW5zXCI6IFtcclxuICAgICAgICAgICAgMTAwMDAsXHJcbiAgICAgICAgICAgIDM5NjAuMDAwMDAwMDAwMDAxXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIm1ha2luZy1jb2ZmZWVcIjogW1xyXG4gICAgICAgICAgICAxNTAwMCxcclxuICAgICAgICAgICAgNjI2OS4zODc3NTUxMDIwNDFcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwib25PZmZcIjogW1xyXG4gICAgICAgICAgICAyMzAwMCxcclxuICAgICAgICAgICAgNTIyLjQ0ODk3OTU5MTgzNlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJzdWdhclwiOiBbXHJcbiAgICAgICAgICAgIDI1MDAwLFxyXG4gICAgICAgICAgICA1NDU5LjU5MTgzNjczNDY5NlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ3YXRlclwiOiBbXHJcbiAgICAgICAgICAgIDMyMDAwLFxyXG4gICAgICAgICAgICAxODU0LjY5Mzg3NzU1MTAyMTRcclxuICAgICAgICBdXHJcbiAgICB9XHJcbn0pO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b24nO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uR3JvdXAgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25Hcm91cCc7XHJcbmltcG9ydCBzdGFydFByZXBhcmF0aW9uIGZyb20gXCJjb21wb25lbnRzL2NvZmZlZU1hY2hpbmVGcm9udC9zdGFydFByZXBhcmF0aW9uXCI7XHJcbnZhciBEcmlua3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShudWxsKSwgZGF0YSA9IF9hWzBdLCBzZXREYXRhID0gX2FbMV07XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NvZmZlZXMvXCIpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB2YXIgYXJyRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3BvbnNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJEYXRhLnB1c2gocmVzcG9uc2VbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldERhdGEoYXJyRGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTsgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB2YXIgYWxpZ25tZW50ID0gUmVhY3QudXNlU3RhdGUoJ2xlZnQnKVswXTtcclxuICAgIHJldHVybiAoX2pzeChUb2dnbGVCdXR0b25Hcm91cCwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udHJvbF9fbWlkZGxlXCIsIHZhbHVlOiBhbGlnbm1lbnQsIGV4Y2x1c2l2ZTogdHJ1ZSwgb25DaGFuZ2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0YXJ0UHJlcGFyYXRpb24oKTsgfSB9LCB7IGNoaWxkcmVuOiBkYXRhICYmIGRhdGEubWFwKGZ1bmN0aW9uIChkcmlua0RhdGEpIHtcclxuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IFwiZHJpbmsgXCIuY29uY2F0KGRyaW5rRGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gX2pzeChUb2dnbGVCdXR0b24sIF9fYXNzaWduKHsgdmFsdWU6IGRhdGEgJiYgZHJpbmtEYXRhLm5hbWUsIGNsYXNzTmFtZTogY2xhc3NOYW1lLCBcImRhdGEtc2l6ZVwiOiBkcmlua0RhdGEuc2l6ZSwgbmFtZTogZHJpbmtEYXRhLnJlY2lwZSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaW1nXCIsIHsgc3JjOiBkcmlua0RhdGEucGljdHVyZSwgY2xhc3NOYW1lOiBcImRyaW5rX19waWN0dXJlXCIgfSkgfSksIGRyaW5rRGF0YS5pbmRleCk7XHJcbiAgICAgICAgfSkgfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRHJpbmtzO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=