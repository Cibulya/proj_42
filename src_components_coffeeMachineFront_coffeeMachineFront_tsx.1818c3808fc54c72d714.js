"use strict";
(self["webpackChunkproj_42"] = self["webpackChunkproj_42"] || []).push([["src_components_coffeeMachineFront_coffeeMachineFront_tsx"],{

/***/ "./src/components/canvasClock/digit.ts":
/*!*********************************************!*\
  !*** ./src/components/canvasClock/digit.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderDigitalClock": () => (/* binding */ renderDigitalClock)
/* harmony export */ });
var renderDigitalClock = function renderDigitalClock(context, props) {
  var top = props.top,
    left = props.left,
    width = props.width,
    height = props.height,
    bgColor = props.bgColor,
    timeoffset = props.timeoffset,
    dialColor = props.dialColor,
    time24h = props.time24h,
    fontSize = props.fontSize;
  var now = new Date();
  now.setTime(now.getTime() + timeoffset * 1000);
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hour = time24h ? now.getHours() : now.getHours() % 12;
  var secBlink = ':';
  if (hour < 10) hour = '0' + hour.toString();
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;
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
  setTimeout(function () {
    return renderDigitalClock(context, props);
  }, 50);
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
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};




var CanvasClock = function CanvasClock(props) {
  var defaultProps = __assign({
    size: 200,
    bgColor: '#4d4d4d',
    timeoffset: 0,
    dialColor: '#00ff05',
    time24h: true
  }, props);
  var id = defaultProps.id,
    width = defaultProps.width,
    height = defaultProps.height;
  var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var context = canvasRef.current.getContext('2d');
    (0,components_canvasClock_digit__WEBPACK_IMPORTED_MODULE_3__.renderDigitalClock)(context, defaultProps);
  });
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", {
      ref: canvasRef,
      id: id,
      width: width,
      height: height
    })
  });
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
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};


function AddIndicators() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: "indicators"
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "indicator indicator__water"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
      className: "icon icon__water",
      onClick: _manageResources__WEBPACK_IMPORTED_MODULE_1__.addWater
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "indicator indicator__beans"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
      className: "icon icon__beans",
      onClick: _manageResources__WEBPACK_IMPORTED_MODULE_1__.addBeans
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "indicator indicator__waste"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
      className: "icon icon__waste",
      onClick: _manageResources__WEBPACK_IMPORTED_MODULE_1__.emptyWasteContainer
    })]
  }));
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
  var indicators = [document.querySelector('.indicator__water'), document.querySelector('.indicator__beans'), document.querySelector('.indicator__waste')];
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
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};









var CoffeeMachineFront = function CoffeeMachineFront() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: "machine"
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: "control"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
        className: "container__left"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_onOffBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_addIndicators__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
        className: "control__right"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(providers_drinks_drinks__WEBPACK_IMPORTED_MODULE_7__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
          className: "control__screen"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_canvasClock__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "canvas",
            top: "10",
            left: "-13",
            width: "200",
            height: "29",
            fontSize: "12",
            dialColor: "rgb(227, 214, 214)",
            bgColor: "#a17d8b"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({
            className: "message"
          }, {
            children: "Turn on the coffee machine"
          }))]
        }))]
      }))]
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: "placeForCup"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "liquid"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cup_steam__WEBPACK_IMPORTED_MODULE_6__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cup_cup__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "shelf"
    })]
  }));
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
  if (!water) _sound_allSounds__WEBPACK_IMPORTED_MODULE_1__.sound.play('water');
  water = 1;
  var indicator = document.querySelector('.indicator__water');
  indicator.classList.remove('active');
  (0,_checkResources__WEBPACK_IMPORTED_MODULE_0__["default"])();
  openDrinkChoice();
}
function addBeans() {
  if (!beans) _sound_allSounds__WEBPACK_IMPORTED_MODULE_1__.sound.play('grains');
  beans = 2;
  var indicator = document.querySelector('.indicator__beans');
  indicator.classList.remove('active');
  (0,_checkResources__WEBPACK_IMPORTED_MODULE_0__["default"])();
  openDrinkChoice();
}
function emptyWasteContainer() {
  if (!wastePlace) _sound_allSounds__WEBPACK_IMPORTED_MODULE_1__.sound.play('container');
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
  if (event.code == 'KeyW') addWater();
  if (event.code == 'KeyB') addBeans();
  if (event.code == 'KeyE') emptyWasteContainer();
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
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};




function TurnOnOff() {
  var _a = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),
    selected = _a[0],
    setSelected = _a[1];
  var indicators = document.getElementsByClassName('active');
  while (indicators.length) {
    indicators[0].classList.remove('active');
  }
  var msg = document.querySelector('.message');
  var drinks = document.querySelector('.control__middle');
  var modal = document.querySelector('.card');
  if (msg && msg.innerHTML === 'Turn on the coffee machine' && selected) {
    msg.innerHTML = 'Choose coffee';
  } else if (msg && modal) {
    msg.innerHTML = '';
    drinks.style.width = '0px';
  } else if (msg && !modal) {
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
    } else {
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
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({
    value: "check",
    selected: selected,
    onChange: function onChange() {
      return toggle();
    },
    className: "onBtn"
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "control__onOff"
    })
  }));
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
  } else if (size === 'M') {
    cupContainer.style.flex = '0.5';
    steamOne.style.left = '25vh';
    steamTwo.style.right = '27vh';
  } else {
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
    if (!modal) (0,_checkResources__WEBPACK_IMPORTED_MODULE_0__["default"])();
    if (_manageResources__WEBPACK_IMPORTED_MODULE_2__.water > 0 && _manageResources__WEBPACK_IMPORTED_MODULE_2__.beans > 0 && _manageResources__WEBPACK_IMPORTED_MODULE_2__.wastePlace > 0) {
      (0,_cup_addCup__WEBPACK_IMPORTED_MODULE_1__["default"])();
      !modal ? msg.innerHTML = "Preparing ".concat(coffee, "...") : modal.innerHTML += coffee;
      var onBtn = document.getElementsByClassName('onBtn');
      onBtn[0].disabled = true;
      if (!modal) (0,_manageResources__WEBPACK_IMPORTED_MODULE_2__.reduceResources)();
    }
  }
  if (isOn === "true") {
    modal ? setTimeout(function () {
      start();
    }, 8000) : start();
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
    if (start === 0) start = time;
    var progress = (time - start) / 500;
    var translate = progress * 5.5;
    cup.style.margin = "0 ".concat(translate, "vh");
    if (progress < 1) requestAnimationFrame(measure);
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
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};


function Cup() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
    className: "wrapper"
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: "cup-container"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", __assign({
        id: "Drawing",
        viewBox: "0 0 142 108",
        xmlns: "http://www.w3.org/2000/svg",
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "1.5"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
          id: "Plate",
          d: "M18.015 94.437c7.612 1.459 35.965 5.128 54.27 5.128 14.4 0 39.517-.949 51.277-5.128.573-.204-1.29 5.969-4.887 7.003-8.012 2.303-27.277 5.155-46.39 4.92-15.054-.184-41.378-3.092-50.486-4.92-3.498-.703-4.721-7.183-3.784-7.003zM70.84 66.76c38.546 0 69.84 7.35 69.84 16.403 0 9.052-31.294 16.402-69.84 16.402C32.294 99.565 1 92.215 1 83.163 1 74.11 32.294 66.76 70.84 66.76z",
          fill: "none",
          stroke: "url(#_Linear1)",
          strokeWidth: "2"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
          id: "Mug",
          d: "M62.255 1.398C66.07 1.139 70.121 1 74.32 1c16.639 0 30.972 2.189 37.365 5.328 1.315.486 2.379.976 3.165 1.453 2.125 1.292 3.236 6.334 2.834 14.423l.102-.012.041-.477-.032.476-.009.001c-.458 5.251-1.674 18.534-2.216 23.84a306.273 306.273 0 01-.732 6.467 845.219 845.219 0 01-1.248 8.96c-2.617 16.856-6.333 30.535-9.529 31.768-9.323 3.598-17.283 5.258-29.334 5.351-16.492.127-32.395-2.605-36.786-4.151-4.485-1.578-7.811-31.759-8.204-48.635-.441-18.964.83-34.119 4.08-37.051 4.515-4.071 14.488-6.81 28.438-7.343zm55.54 20.793c1.634-.172 12.149-.683 15.804 4.084 7.437 9.701 3.133 32.403-4.08 41.076-2.228 2.679-17.116 2.16-17.116 2.16s.533-3.512 1.187-8.052c.452-2.908.871-5.911 1.248-8.96.329-2.468.623-4.806.83-6.69.43-3.926 1.758-18.213 2.127-23.618zm-6.11-15.863C104.633 3.721 92.262 1 74.727 1c-3.711 0-9.157.271-12.472.398C45.552 2.532 32.68 6.436 32.68 10.48c0 3.343 9.024 5.782 21.339 7.334C60.003 18.569 66.934 19 74.32 19c22.584 0 40.92-4.033 40.92-9 0-1.308-1.271-2.55-3.555-3.672z",
          fill: "none",
          stroke: "url(#_Linear2)",
          strokeWidth: "2"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", __assign({
          id: "_clip3"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            id: "Liquid-Clip",
            d: "M110.986 58.684c-1.831 12.969-7.069 27.114-7.949 29.313-.603 1.509.592 2.439.326 3.07-1.147 2.729-15.124 6.986-29.813 7.031-12.413.037-33.366-2.362-36.067-4.871-2.337-2.171-6.827-29.596-7.003-46.475-.21-20.026.36-28.237 1.918-34.047.062-.233 5.557 3.344 16.441 5.229 10.997 1.904 33.545 2.002 37.381 1.677 7.898-.668 19.551-2.244 25.966-5.11.997-.445 1.602 24.334-1.2 44.183z"
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", __assign({
          clipPath: "url(#_clip3)"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", __assign({
            id: "Coffee"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
              id: "Liquid",
              d: "M16.063 59.232c8.845-3.959 35.7-4.952 54.977-4.952 21.21 0 53.709 2.395 61.221 6.684 9.387 5.359-21.15 42.962-21.15 42.962l-81.467-1.981S6.281 63.61 16.063 59.232z",
              fill: "#443530"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", __assign({
              clipPath: "url(#_clip4)"
            }, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ellipse", {
                cx: "71.982",
                cy: "55.975",
                rx: "40.701",
                ry: "6.14",
                fill: "#df148a",
                fillOpacity: ".15"
              })
            }))]
          }))
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
          id: "Shadow",
          d: "M96.383 2.92c3.96 0 1.347 81.408-4.8 83.52-3.142 1.08-18.38 10.205-34.56 11.52-2.877.234 20.57 2.302 26.279 1.651 8.493-.969 16.745-1.294 23.881-5.731 8.636-18.444 11.73-54.634 9.6-84.96 0 0-4.463-1.496-6.72-2.16-3.4-1-13.68-3.84-13.68-3.84z",
          fill: "#340044",
          fillOpacity: ".13"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", __assign({
            id: "_clip4"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
              d: "M16.063 59.232c8.845-3.959 35.7-4.952 54.977-4.952 21.21 0 53.709 2.395 61.221 6.684 9.387 5.359-21.15 42.962-21.15 42.962l-81.467-1.981S6.281 63.61 16.063 59.232z"
            })
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", __assign({
            id: "_Linear1",
            x1: "0",
            y1: "0",
            x2: "1",
            y2: "0",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "matrix(139.68 0 0 30.6961 -2.84 91.715)"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
              offset: "0",
              stopColor: "#df148a"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
              offset: "1",
              stopColor: "#a357c3"
            })]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", __assign({
            id: "_Linear2",
            x1: "0",
            y1: "0",
            x2: "1",
            y2: "0",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "matrix(107.181 0 0 99.0471 42.218 50.739)"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
              offset: "0",
              stopColor: "#df148a"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
              offset: "1",
              stopColor: "#a357c3"
            })]
          }))]
        })]
      }))
    }))
  }));
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
      if (!modal) screen.style.display = 'none';
      if (!modal) drinkBtns.style.flex = '2';
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
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};

var Steam = function Steam() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: "steam"
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "coffee-medium__smoke coffee-medium__smoke-one"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "coffee-medium__smoke coffee-medium__smoke-two"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "coffee-medium__smoke coffee-medium__smoke-three"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "coffee-medium__smoke coffee-medium__smoke-four"
    })]
  }));
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
  "src": ["https://github.com/MarinaKovel/coffeemachinedata/blob/main/Sounds/Sound.webm?raw=true", "https://github.com/MarinaKovel/coffeemachinedata/blob/main/Sounds/Sound.mp3?raw=true"],
  "sprite": {
    "container": [0, 936.0090702947846],
    "cup-on-shell": [2000, 2246.5306122448983],
    "fillcup": [6000, 2519.9999999999995],
    "grains": [10000, 3960.000000000001],
    "making-coffee": [15000, 6269.387755102041],
    "onOff": [23000, 522.448979591836],
    "sugar": [25000, 5459.591836734696],
    "water": [32000, 1854.6938775510214]
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
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};





var Drinks = function Drinks() {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    data = _a[0],
    setData = _a[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    fetch("http://localhost:5000/coffees/").then(function (response) {
      if (response.ok) return response.json();
    }).then(function (response) {
      var arrData = [];
      for (var i = 0; i < response.length; i++) {
        arrData.push(response[i]);
      }
      setData(arrData);
    })["catch"](function (err) {
      return console.error(err);
    });
  }, []);
  var alignment = react__WEBPACK_IMPORTED_MODULE_1__.useState('left')[0];
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({
    className: "control__middle",
    value: alignment,
    exclusive: true,
    onChange: function onChange() {
      return (0,components_coffeeMachineFront_startPreparation__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  }, {
    children: data && data.map(function (drinkData) {
      var className = "drink ".concat(drinkData.name.toLowerCase());
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({
        value: data && drinkData.name,
        className: className,
        "data-size": drinkData.size,
        name: drinkData.recipe
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
          src: drinkData.picture,
          className: "drink__picture"
        })
      }), drinkData.index);
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drinks);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/canvasClock/canvasClock.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/canvasClock/canvasClock.scss ***!
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/coffeeMachineFront.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/coffeeMachineFront.scss ***!
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/cup.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/cup.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./canvasClock.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/canvasClock/canvasClock.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./canvasClock.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/canvasClock/canvasClock.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./canvasClock.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/canvasClock/canvasClock.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_canvasClock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../node_modules/sass-loader/dist/cjs.js!./coffeeMachineFront.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/coffeeMachineFront.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../node_modules/sass-loader/dist/cjs.js!./coffeeMachineFront.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/coffeeMachineFront.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../node_modules/sass-loader/dist/cjs.js!./coffeeMachineFront.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/coffeeMachineFront.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../node_modules/sass-loader/dist/cjs.js!./cup.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/cup.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../node_modules/sass-loader/dist/cjs.js!./cup.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/cup.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../node_modules/sass-loader/dist/cjs.js!./cup.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/cup.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_cup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfY29mZmVlTWFjaGluZUZyb250X2NvZmZlZU1hY2hpbmVGcm9udF90c3guMTgxOGMzODA4ZmM1NGM3MmQ3MTQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLElBQUlBLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0IsQ0FBYUMsT0FBTyxFQUFFQyxLQUFLLEVBQUU7RUFDdEQsSUFBSUMsR0FBRyxHQUFHRCxLQUFLLENBQUNDLEdBQUc7SUFBRUMsSUFBSSxHQUFHRixLQUFLLENBQUNFLElBQUk7SUFBRUMsS0FBSyxHQUFHSCxLQUFLLENBQUNHLEtBQUs7SUFBRUMsTUFBTSxHQUFHSixLQUFLLENBQUNJLE1BQU07SUFBRUMsT0FBTyxHQUFHTCxLQUFLLENBQUNLLE9BQU87SUFBRUMsVUFBVSxHQUFHTixLQUFLLENBQUNNLFVBQVU7SUFBRUMsU0FBUyxHQUFHUCxLQUFLLENBQUNPLFNBQVM7SUFBRUMsT0FBTyxHQUFHUixLQUFLLENBQUNRLE9BQU87SUFBRUMsUUFBUSxHQUFHVCxLQUFLLENBQUNTLFFBQVE7RUFDM04sSUFBSUMsR0FBRyxHQUFHLElBQUlDLElBQUksRUFBRTtFQUNwQkQsR0FBRyxDQUFDRSxPQUFPLENBQUNGLEdBQUcsQ0FBQ0csT0FBTyxFQUFFLEdBQUdQLFVBQVUsR0FBRyxJQUFJLENBQUM7RUFDOUMsSUFBSVEsR0FBRyxHQUFHSixHQUFHLENBQUNLLFVBQVUsRUFBRTtFQUMxQixJQUFJQyxHQUFHLEdBQUdOLEdBQUcsQ0FBQ08sVUFBVSxFQUFFO0VBQzFCLElBQUlDLElBQUksR0FBR1YsT0FBTyxHQUFHRSxHQUFHLENBQUNTLFFBQVEsRUFBRSxHQUFHVCxHQUFHLENBQUNTLFFBQVEsRUFBRSxHQUFHLEVBQUU7RUFDekQsSUFBSUMsUUFBUSxHQUFHLEdBQUc7RUFDbEIsSUFBSUYsSUFBSSxHQUFHLEVBQUUsRUFDVEEsSUFBSSxHQUFHLEdBQUcsR0FBR0EsSUFBSSxDQUFDRyxRQUFRLEVBQUU7RUFDaEMsSUFB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QUVoRSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLHFRQUErSDtBQUNySSxNQUFNO0FBQUE7QUFDTixzREFBc0QsdUlBQVcsR0FBRyx5SkFBYztBQUNsRixnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsdUlBQVcsR0FBRyx5SkFBYzs7QUFFdEUscUJBQXFCLGtKQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHOEk7QUFDOUksT0FBTyxpRUFBZSxrSkFBTyxJQUFJLHlKQUFjLEdBQUcseUpBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jYW52YXNDbG9jay9kaWdpdC50cyIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2NhbnZhc0Nsb2NrL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2NvZmZlZU1hY2hpbmVGcm9udC9hZGRJbmRpY2F0b3JzLnRzeCIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2NvZmZlZU1hY2hpbmVGcm9udC9jaGVja1Jlc291cmNlcy50cyIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2NvZmZlZU1hY2hpbmVGcm9udC9jb2ZmZWVNYWNoaW5lRnJvbnQudHN4Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvY29mZmVlTWFjaGluZUZyb250L21hbmFnZVJlc291cmNlcy50cyIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2NvZmZlZU1hY2hpbmVGcm9udC9vbk9mZkJ0bi50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jb2ZmZWVNYWNoaW5lRnJvbnQvc3RhcnRQcmVwYXJhdGlvbi50cyIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2N1cC9hZGRDdXAudHMiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jdXAvY3VwLnRzeCIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2N1cC9maWxsQ3VwLnRzIiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvY3VwL2ZpbmlzaFByZXBhcmF0aW9uLnRzIiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvY3VwL3N0ZWFtLnRzeCIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL3NvdW5kL2FsbFNvdW5kcy50cyIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9wcm92aWRlcnMvZHJpbmtzL2RyaW5rcy50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jYW52YXNDbG9jay9jYW52YXNDbG9jay5zY3NzIiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL3N0eWxlcy9jb2ZmZWVNYWNoaW5lRnJvbnQuc2NzcyIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9zdHlsZXMvY3VwLnNjc3MiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jYW52YXNDbG9jay9jYW52YXNDbG9jay5zY3NzP2NjMmMiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvc3R5bGVzL2NvZmZlZU1hY2hpbmVGcm9udC5zY3NzP2QxNTUiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvc3R5bGVzL2N1cC5zY3NzP2ZjYjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciByZW5kZXJEaWdpdGFsQ2xvY2sgPSBmdW5jdGlvbiAoY29udGV4dCwgcHJvcHMpIHtcclxuICAgIHZhciB0b3AgPSBwcm9wcy50b3AsIGxlZnQgPSBwcm9wcy5sZWZ0LCB3aWR0aCA9IHByb3BzLndpZHRoLCBoZWlnaHQgPSBwcm9wcy5oZWlnaHQsIGJnQ29sb3IgPSBwcm9wcy5iZ0NvbG9yLCB0aW1lb2Zmc2V0ID0gcHJvcHMudGltZW9mZnNldCwgZGlhbENvbG9yID0gcHJvcHMuZGlhbENvbG9yLCB0aW1lMjRoID0gcHJvcHMudGltZTI0aCwgZm9udFNpemUgPSBwcm9wcy5mb250U2l6ZTtcclxuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbm93LnNldFRpbWUobm93LmdldFRpbWUoKSArIHRpbWVvZmZzZXQgKiAxMDAwKTtcclxuICAgIHZhciBzZWMgPSBub3cuZ2V0U2Vjb25kcygpO1xyXG4gICAgdmFyIG1pbiA9IG5vdy5nZXRNaW51dGVzKCk7XHJcbiAgICB2YXIgaG91ciA9IHRpbWUyNGggPyBub3cuZ2V0SG91cnMoKSA6IG5vdy5nZXRIb3VycygpICUgMTI7XHJcbiAgICB2YXIgc2VjQmxpbmsgPSAnOic7XHJcbiAgICBpZiAoaG91ciA8IDEwKVxyXG4gICAgICAgIGhvdXIgPSAnMCcgKyBob3VyLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAobWluIDwgMTApXHJcbiAgICAgICAgbWluID0gJzAnICsgbWluO1xyXG4gICAgaWYgKHNlYyA8IDEwKVxyXG4gICAgICAgIHNlYyA9ICcwJyArIHNlYztcclxuICAgIGlmIChOdW1iZXIoc2VjKSAlIDIgPT09IDApIHtcclxuICAgICAgICBzZWNCbGluayA9ICc6JztcclxuICAgIH1cclxuICAgIGNvbnRleHQuY2xlYXJSZWN0KGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBiZ0NvbG9yO1xyXG4gICAgY29udGV4dC5yZWN0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICBjb250ZXh0LmZpbGwoKTtcclxuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGRpYWxDb2xvcjtcclxuICAgIGNvbnRleHQudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICBjb250ZXh0LmZvbnQgPSBmb250U2l6ZSArICdweCBEaWdpdGFsTnVtYmVycyc7XHJcbiAgICBjb250ZXh0LmZpbGxUZXh0KGhvdXIgKyBzZWNCbGluayArIG1pbiArICc6JyArIHNlYywgd2lkdGggLyA0LCBoZWlnaHQgLyAyLjUpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiByZW5kZXJEaWdpdGFsQ2xvY2soY29udGV4dCwgcHJvcHMpOyB9LCA1MCk7XHJcbn07XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL2NhbnZhc0Nsb2NrLnNjc3MnO1xyXG5pbXBvcnQgeyByZW5kZXJEaWdpdGFsQ2xvY2sgfSBmcm9tICdjb21wb25lbnRzL2NhbnZhc0Nsb2NrL2RpZ2l0JztcclxudmFyIENhbnZhc0Nsb2NrID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gX19hc3NpZ24oeyBzaXplOiAyMDAsIGJnQ29sb3I6ICcjNGQ0ZDRkJywgdGltZW9mZnNldDogMCwgZGlhbENvbG9yOiAnIzAwZmYwNScsIHRpbWUyNGg6IHRydWUgfSwgcHJvcHMpO1xyXG4gICAgdmFyIGlkID0gZGVmYXVsdFByb3BzLmlkLCB3aWR0aCA9IGRlZmF1bHRQcm9wcy53aWR0aCwgaGVpZ2h0ID0gZGVmYXVsdFByb3BzLmhlaWdodDtcclxuICAgIHZhciBjYW52YXNSZWYgPSB1c2VSZWYoKTtcclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHJlbmRlckRpZ2l0YWxDbG9jayhjb250ZXh0LCBkZWZhdWx0UHJvcHMpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBfanN4KFwiY2FudmFzXCIsIHsgcmVmOiBjYW52YXNSZWYsIGlkOiBpZCwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KSB9KSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENhbnZhc0Nsb2NrO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IGFkZFdhdGVyLCBhZGRCZWFucywgZW1wdHlXYXN0ZUNvbnRhaW5lciB9IGZyb20gJy4vbWFuYWdlUmVzb3VyY2VzJztcclxuZnVuY3Rpb24gQWRkSW5kaWNhdG9ycygpIHtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaW5kaWNhdG9yc1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImluZGljYXRvciBpbmRpY2F0b3JfX3dhdGVyXCIgfSksIF9qc3goXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IFwiaWNvbiBpY29uX193YXRlclwiLCBvbkNsaWNrOiBhZGRXYXRlciB9KSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJpbmRpY2F0b3IgaW5kaWNhdG9yX19iZWFuc1wiIH0pLCBfanN4KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBcImljb24gaWNvbl9fYmVhbnNcIiwgb25DbGljazogYWRkQmVhbnMgfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaW5kaWNhdG9yIGluZGljYXRvcl9fd2FzdGVcIiB9KSwgX2pzeChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogXCJpY29uIGljb25fX3dhc3RlXCIsIG9uQ2xpY2s6IGVtcHR5V2FzdGVDb250YWluZXIgfSldIH0pKSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWRkSW5kaWNhdG9ycztcclxuIiwiaW1wb3J0IHsgd2F0ZXIsIGJlYW5zLCB3YXN0ZVBsYWNlIH0gZnJvbSAnLi9tYW5hZ2VSZXNvdXJjZXMnO1xyXG5mdW5jdGlvbiBjaGVja1Jlc291cmNlcygpIHtcclxuICAgIHZhciByZXNvdXJjZXMgPSBbd2F0ZXIsIGJlYW5zLCB3YXN0ZVBsYWNlXTtcclxuICAgIHZhciBpbmRpY2F0b3JzID0gW1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmRpY2F0b3JfX3dhdGVyJyksXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZGljYXRvcl9fYmVhbnMnKSxcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5kaWNhdG9yX193YXN0ZScpXHJcbiAgICBdO1xyXG4gICAgdmFyIG1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcbiAgICBtc2cuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB2YXIgbXNnTm9SZXNvdXJjZXMgPSBbJ0FkZCB3YXRlciAocHJlc3MgXCJXXCIpLiAnLCAnQWRkIGNvZmZlZSBiZWFucyAocHJlc3MgXCJCXCIpLiAnLCAnRW1wdHkgd2FzdGUgY29udGFpbmVyIChwcmVzcyBcIkVcIikuJ107XHJcbiAgICB2YXIgZHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xfX21pZGRsZScpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoIXJlc291cmNlc1tpXSkge1xyXG4gICAgICAgICAgICBpbmRpY2F0b3JzW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBtc2cuaW5uZXJIVE1MICs9IG1zZ05vUmVzb3VyY2VzW2ldO1xyXG4gICAgICAgICAgICBkcmlua3Muc3R5bGUud2lkdGggPSAnMHB4JztcclxuICAgICAgICAgICAgZHJpbmtzLnN0eWxlLmZsZXggPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrUmVzb3VyY2VzO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCAnc3R5bGVzL2NvZmZlZU1hY2hpbmVGcm9udC5zY3NzJztcclxuaW1wb3J0IFR1cm5Pbk9mZiBmcm9tICcuL29uT2ZmQnRuJztcclxuaW1wb3J0IEFkZEluZGljYXRvcnMgZnJvbSAnLi9hZGRJbmRpY2F0b3JzJztcclxuaW1wb3J0IEN1cCBmcm9tICcuLi9jdXAvY3VwJztcclxuaW1wb3J0ICdzdHlsZXMvY3VwLnNjc3MnO1xyXG5pbXBvcnQgU3RlYW0gZnJvbSAnLi4vY3VwL3N0ZWFtJztcclxuaW1wb3J0IERyaW5rcyBmcm9tICdwcm92aWRlcnMvZHJpbmtzL2RyaW5rcyc7XHJcbmltcG9ydCBDYW52YXNDbG9jayBmcm9tICdjb21wb25lbnRzL2NhbnZhc0Nsb2NrJztcclxudmFyIENvZmZlZU1hY2hpbmVGcm9udCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWFjaGluZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb250cm9sXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lcl9fbGVmdFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFR1cm5Pbk9mZiwge30pLCBfanN4KEFkZEluZGljYXRvcnMsIHt9KV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb250cm9sX19yaWdodFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KERyaW5rcywge30pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb250cm9sX19zY3JlZW5cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChDYW52YXNDbG9jaywgeyBpZDogXCJjYW52YXNcIiwgdG9wOiBcIjEwXCIsIGxlZnQ6IFwiLTEzXCIsIHdpZHRoOiBcIjIwMFwiLCBoZWlnaHQ6IFwiMjlcIiwgZm9udFNpemU6IFwiMTJcIiwgZGlhbENvbG9yOiBcInJnYigyMjcsIDIxNCwgMjE0KVwiLCBiZ0NvbG9yOiBcIiNhMTdkOGJcIiB9KSwgX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWVzc2FnZVwiIH0sIHsgY2hpbGRyZW46IFwiVHVybiBvbiB0aGUgY29mZmVlIG1hY2hpbmVcIiB9KSldIH0pKV0gfSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBsYWNlRm9yQ3VwXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwibGlxdWlkXCIgfSksIF9qc3goU3RlYW0sIHt9KSwgX2pzeChDdXAsIHt9KV0gfSkpLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNoZWxmXCIgfSldIH0pKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENvZmZlZU1hY2hpbmVGcm9udDtcclxuIiwiaW1wb3J0IENoZWNrUmVzb3VyY2VzIGZyb20gJy4vY2hlY2tSZXNvdXJjZXMnO1xyXG5pbXBvcnQgeyBzb3VuZCB9IGZyb20gXCIuLi9zb3VuZC9hbGxTb3VuZHNcIjtcclxuZXhwb3J0IHZhciB3YXRlciA9IDE7XHJcbmV4cG9ydCB2YXIgYmVhbnMgPSAyO1xyXG5leHBvcnQgdmFyIHdhc3RlUGxhY2UgPSAxO1xyXG5mdW5jdGlvbiBvcGVuRHJpbmtDaG9pY2UoKSB7XHJcbiAgICBpZiAod2F0ZXIgJiYgYmVhbnMgJiYgd2FzdGVQbGFjZSkge1xyXG4gICAgICAgIHZhciBkcmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbF9fbWlkZGxlJyk7XHJcbiAgICAgICAgZHJpbmtzLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgIGRyaW5rcy5zdHlsZS5mbGV4ID0gJzEnO1xyXG4gICAgICAgIHZhciBzY3JlZW5fMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sX19zY3JlZW4nKTtcclxuICAgICAgICBzY3JlZW5fMS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRXYXRlcigpIHtcclxuICAgIGlmICghd2F0ZXIpXHJcbiAgICAgICAgc291bmQucGxheSgnd2F0ZXInKTtcclxuICAgIHdhdGVyID0gMTtcclxuICAgIHZhciBpbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5kaWNhdG9yX193YXRlcicpO1xyXG4gICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgQ2hlY2tSZXNvdXJjZXMoKTtcclxuICAgIG9wZW5Ecmlua0Nob2ljZSgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRCZWFucygpIHtcclxuICAgIGlmICghYmVhbnMpXHJcbiAgICAgICAgc291bmQucGxheSgnZ3JhaW5zJyk7XHJcbiAgICBiZWFucyA9IDI7XHJcbiAgICB2YXIgaW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZGljYXRvcl9fYmVhbnMnKTtcclxuICAgIGluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIENoZWNrUmVzb3VyY2VzKCk7XHJcbiAgICBvcGVuRHJpbmtDaG9pY2UoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlXYXN0ZUNvbnRhaW5lcigpIHtcclxuICAgIGlmICghd2FzdGVQbGFjZSlcclxuICAgICAgICBzb3VuZC5wbGF5KCdjb250YWluZXInKTtcclxuICAgIHdhc3RlUGxhY2UgPSAxO1xyXG4gICAgdmFyIGluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmRpY2F0b3JfX3dhc3RlJyk7XHJcbiAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBDaGVja1Jlc291cmNlcygpO1xyXG4gICAgb3BlbkRyaW5rQ2hvaWNlKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZVJlc291cmNlcygpIHtcclxuICAgIHdhdGVyLS07XHJcbiAgICBiZWFucy0tO1xyXG4gICAgd2FzdGVQbGFjZS0tO1xyXG59XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5jb2RlID09ICdLZXlXJylcclxuICAgICAgICBhZGRXYXRlcigpO1xyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0tleUInKVxyXG4gICAgICAgIGFkZEJlYW5zKCk7XHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PSAnS2V5RScpXHJcbiAgICAgICAgZW1wdHlXYXN0ZUNvbnRhaW5lcigpO1xyXG59KTtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb2dnbGVCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgc291bmQgfSBmcm9tIFwiLi4vc291bmQvYWxsU291bmRzXCI7XHJcbmZ1bmN0aW9uIFR1cm5Pbk9mZigpIHtcclxuICAgIHZhciBfYSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSwgc2VsZWN0ZWQgPSBfYVswXSwgc2V0U2VsZWN0ZWQgPSBfYVsxXTtcclxuICAgIHZhciBpbmRpY2F0b3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJyk7XHJcbiAgICB3aGlsZSAoaW5kaWNhdG9ycy5sZW5ndGgpIHtcclxuICAgICAgICBpbmRpY2F0b3JzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgdmFyIG1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcbiAgICB2YXIgZHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xfX21pZGRsZScpO1xyXG4gICAgdmFyIG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcclxuICAgIGlmIChtc2cgJiYgbXNnLmlubmVySFRNTCA9PT0gJ1R1cm4gb24gdGhlIGNvZmZlZSBtYWNoaW5lJyAmJiBzZWxlY3RlZCkge1xyXG4gICAgICAgIG1zZy5pbm5lckhUTUwgPSAnQ2hvb3NlIGNvZmZlZSc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtc2cgJiYgbW9kYWwpIHtcclxuICAgICAgICBtc2cuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgZHJpbmtzLnN0eWxlLndpZHRoID0gJzBweCc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtc2cgJiYgIW1vZGFsKSB7XHJcbiAgICAgICAgbXNnLmlubmVySFRNTCA9ICdUdXJuIG9uIHRoZSBjb2ZmZWUgbWFjaGluZSc7XHJcbiAgICAgICAgZHJpbmtzLnN0eWxlLndpZHRoID0gJzBweCc7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XHJcbiAgICAgICAgdmFyIGRyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sX19taWRkbGUnKTtcclxuICAgICAgICB2YXIgc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xfX3NjcmVlbicpO1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgZHJpbmtzLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgICAgICBkcmlua3Muc3R5bGUuZmxleCA9ICcxJztcclxuICAgICAgICAgICAgc2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkcmlua3Muc3R5bGUud2lkdGggPSAnMHB4JztcclxuICAgICAgICAgICAgZHJpbmtzLnN0eWxlLmZsZXggPSAnMCc7XHJcbiAgICAgICAgICAgIHNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZCghc2VsZWN0ZWQpO1xyXG4gICAgICAgIHNvdW5kLnBsYXkoJ29uT2ZmJyk7XHJcbiAgICAgICAgdmFyIGJ0biA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoX2pzeChUb2dnbGVCdXR0b24sIF9fYXNzaWduKHsgdmFsdWU6IFwiY2hlY2tcIiwgc2VsZWN0ZWQ6IHNlbGVjdGVkLCBvbkNoYW5nZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdG9nZ2xlKCk7IH0sIGNsYXNzTmFtZTogXCJvbkJ0blwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29udHJvbF9fb25PZmZcIiB9KSB9KSkpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFR1cm5Pbk9mZjtcclxuIiwiaW1wb3J0IENoZWNrUmVzb3VyY2VzIGZyb20gJy4vY2hlY2tSZXNvdXJjZXMnO1xyXG5pbXBvcnQgYWRkQ3VwIGZyb20gJy4uL2N1cC9hZGRDdXAnO1xyXG5pbXBvcnQgeyB3YXRlciwgYmVhbnMsIHdhc3RlUGxhY2UsIHJlZHVjZVJlc291cmNlcyB9IGZyb20gJy4vbWFuYWdlUmVzb3VyY2VzJztcclxuZnVuY3Rpb24gc3RhcnRQcmVwYXJhdGlvbigpIHtcclxuICAgIHZhciBkcmlua0J0biA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgdmFyIGNvZmZlZSA9IGRyaW5rQnRuLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuICAgIHZhciBzaXplID0gZHJpbmtCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXNpemUnKTtcclxuICAgIHZhciBjb2xvciA9IGRyaW5rQnRuLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG4gICAgdmFyIHNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sX19zY3JlZW4nKTtcclxuICAgIHZhciBpc09uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uQnRuJykuZ2V0QXR0cmlidXRlKFwiYXJpYS1wcmVzc2VkXCIpO1xyXG4gICAgdmFyIGRyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sX19taWRkbGUnKTtcclxuICAgIGRyaW5rcy5zdHlsZS53aWR0aCA9ICcwcHgnO1xyXG4gICAgZHJpbmtzLnN0eWxlLmZsZXggPSAnMCc7XHJcbiAgICBzY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIHZhciBjdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VwLWNvbnRhaW5lcicpO1xyXG4gICAgdmFyIHN0ZWFtT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvZmZlZS1tZWRpdW1fX3Ntb2tlLW9uZScpO1xyXG4gICAgdmFyIHN0ZWFtVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvZmZlZS1tZWRpdW1fX3Ntb2tlLXR3bycpO1xyXG4gICAgaWYgKHNpemUgPT09ICdTJykge1xyXG4gICAgICAgIGN1cENvbnRhaW5lci5zdHlsZS5mbGV4ID0gJzAuNCc7XHJcbiAgICAgICAgc3RlYW1PbmUuc3R5bGUubGVmdCA9ICcyMnZoJztcclxuICAgICAgICBzdGVhbVR3by5zdHlsZS5yaWdodCA9ICczMHZoJztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNpemUgPT09ICdNJykge1xyXG4gICAgICAgIGN1cENvbnRhaW5lci5zdHlsZS5mbGV4ID0gJzAuNSc7XHJcbiAgICAgICAgc3RlYW1PbmUuc3R5bGUubGVmdCA9ICcyNXZoJztcclxuICAgICAgICBzdGVhbVR3by5zdHlsZS5yaWdodCA9ICcyN3ZoJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGN1cENvbnRhaW5lci5zdHlsZS5mbGV4ID0gJzAuNic7XHJcbiAgICAgICAgc3RlYW1PbmUuc3R5bGUubGVmdCA9ICcyOHZoJztcclxuICAgICAgICBzdGVhbVR3by5zdHlsZS5yaWdodCA9ICcyNXZoJztcclxuICAgIH1cclxuICAgIHZhciBsaXF1aWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTGlxdWlkJyk7XHJcbiAgICB2YXIgc3RyZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpcXVpZCcpO1xyXG4gICAgbGlxdWlkLnN0eWxlLmZpbGwgPSBjb2xvcjtcclxuICAgIHN0cmVhbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICAgIHZhciBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xyXG4gICAgdmFyIG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcclxuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICghbW9kYWwpXHJcbiAgICAgICAgICAgIENoZWNrUmVzb3VyY2VzKCk7XHJcbiAgICAgICAgaWYgKHdhdGVyID4gMCAmJiBiZWFucyA+IDAgJiYgd2FzdGVQbGFjZSA+IDApIHtcclxuICAgICAgICAgICAgYWRkQ3VwKCk7XHJcbiAgICAgICAgICAgICFtb2RhbCA/IG1zZy5pbm5lckhUTUwgPSBcIlByZXBhcmluZyBcIi5jb25jYXQoY29mZmVlLCBcIi4uLlwiKSA6IG1vZGFsLmlubmVySFRNTCArPSBjb2ZmZWU7XHJcbiAgICAgICAgICAgIHZhciBvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29uQnRuJyk7XHJcbiAgICAgICAgICAgIG9uQnRuWzBdLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCFtb2RhbClcclxuICAgICAgICAgICAgICAgIHJlZHVjZVJlc291cmNlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpc09uID09PSBcInRydWVcIikge1xyXG4gICAgICAgIG1vZGFsID8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHN0YXJ0KCk7IH0sIDgwMDApIDogc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzdGFydFByZXBhcmF0aW9uO1xyXG4iLCJpbXBvcnQgeyBzb3VuZCB9IGZyb20gXCIuLi9zb3VuZC9hbGxTb3VuZHNcIjtcclxuaW1wb3J0IGZpbmlzaFByZXBhcmF0aW9uIGZyb20gJy4vZmluaXNoUHJlcGFyYXRpb24nO1xyXG5mdW5jdGlvbiBhZGRDdXAoKSB7XHJcbiAgICB2YXIgY3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcclxuICAgIGN1cC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB2YXIgc3RhcnQgPSAwO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIG1lYXN1cmUodGltZSkge1xyXG4gICAgICAgIGlmIChzdGFydCA9PT0gMClcclxuICAgICAgICAgICAgc3RhcnQgPSB0aW1lO1xyXG4gICAgICAgIHZhciBwcm9ncmVzcyA9ICh0aW1lIC0gc3RhcnQpIC8gNTAwO1xyXG4gICAgICAgIHZhciB0cmFuc2xhdGUgPSBwcm9ncmVzcyAqIDUuNTtcclxuICAgICAgICBjdXAuc3R5bGUubWFyZ2luID0gXCIwIFwiLmNvbmNhdCh0cmFuc2xhdGUsIFwidmhcIik7XHJcbiAgICAgICAgaWYgKHByb2dyZXNzIDwgMSlcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1lYXN1cmUpO1xyXG4gICAgfSk7XHJcbiAgICBzb3VuZC5wbGF5KCdjdXAtb24tc2hlbGwnKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNvdW5kLnBsYXkoJ21ha2luZy1jb2ZmZWUnKTtcclxuICAgIH0sIDEwMDApO1xyXG4gICAgZmluaXNoUHJlcGFyYXRpb24oKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBhZGRDdXA7XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0ICdzdHlsZXMvY3VwLnNjc3MnO1xyXG5mdW5jdGlvbiBDdXAoKSB7XHJcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwid3JhcHBlclwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY3VwLWNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwic3ZnXCIsIF9fYXNzaWduKHsgaWQ6IFwiRHJhd2luZ1wiLCB2aWV3Qm94OiBcIjAgMCAxNDIgMTA4XCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIGZpbGxSdWxlOiBcImV2ZW5vZGRcIiwgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiLCBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsIHN0cm9rZU1pdGVybGltaXQ6IFwiMS41XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJwYXRoXCIsIHsgaWQ6IFwiUGxhdGVcIiwgZDogXCJNMTguMDE1IDk0LjQzN2M3LjYxMiAxLjQ1OSAzNS45NjUgNS4xMjggNTQuMjcgNS4xMjggMTQuNCAwIDM5LjUxNy0uOTQ5IDUxLjI3Ny01LjEyOC41NzMtLjIwNC0xLjI5IDUuOTY5LTQuODg3IDcuMDAzLTguMDEyIDIuMzAzLTI3LjI3NyA1LjE1NS00Ni4zOSA0LjkyLTE1LjA1NC0uMTg0LTQxLjM3OC0zLjA5Mi01MC40ODYtNC45Mi0zLjQ5OC0uNzAzLTQuNzIxLTcuMTgzLTMuNzg0LTcuMDAzek03MC44NCA2Ni43NmMzOC41NDYgMCA2OS44NCA3LjM1IDY5Ljg0IDE2LjQwMyAwIDkuMDUyLTMxLjI5NCAxNi40MDItNjkuODQgMTYuNDAyQzMyLjI5NCA5OS41NjUgMSA5Mi4yMTUgMSA4My4xNjMgMSA3NC4xMSAzMi4yOTQgNjYuNzYgNzAuODQgNjYuNzZ6XCIsIGZpbGw6IFwibm9uZVwiLCBzdHJva2U6IFwidXJsKCNfTGluZWFyMSlcIiwgc3Ryb2tlV2lkdGg6IFwiMlwiIH0pLCBfanN4KFwicGF0aFwiLCB7IGlkOiBcIk11Z1wiLCBkOiBcIk02Mi4yNTUgMS4zOThDNjYuMDcgMS4xMzkgNzAuMTIxIDEgNzQuMzIgMWMxNi42MzkgMCAzMC45NzIgMi4xODkgMzcuMzY1IDUuMzI4IDEuMzE1LjQ4NiAyLjM3OS45NzYgMy4xNjUgMS40NTMgMi4xMjUgMS4yOTIgMy4yMzYgNi4zMzQgMi44MzQgMTQuNDIzbC4xMDItLjAxMi4wNDEtLjQ3Ny0uMDMyLjQ3Ni0uMDA5LjAwMWMtLjQ1OCA1LjI1MS0xLjY3NCAxOC41MzQtMi4yMTYgMjMuODRhMzA2LjI3MyAzMDYuMjczIDAgMDEtLjczMiA2LjQ2NyA4NDUuMjE5IDg0NS4yMTkgMCAwMS0xLjI0OCA4Ljk2Yy0yLjYxNyAxNi44NTYtNi4zMzMgMzAuNTM1LTkuNTI5IDMxLjc2OC05LjMyMyAzLjU5OC0xNy4yODMgNS4yNTgtMjkuMzM0IDUuMzUxLTE2LjQ5Mi4xMjctMzIuMzk1LTIuNjA1LTM2Ljc4Ni00LjE1MS00LjQ4NS0xLjU3OC03LjgxMS0zMS43NTktOC4yMDQtNDguNjM1LS40NDEtMTguOTY0LjgzLTM0LjExOSA0LjA4LTM3LjA1MSA0LjUxNS00LjA3MSAxNC40ODgtNi44MSAyOC40MzgtNy4zNDN6bTU1LjU0IDIwLjc5M2MxLjYzNC0uMTcyIDEyLjE0OS0uNjgzIDE1LjgwNCA0LjA4NCA3LjQzNyA5LjcwMSAzLjEzMyAzMi40MDMtNC4wOCA0MS4wNzYtMi4yMjggMi42NzktMTcuMTE2IDIuMTYtMTcuMTE2IDIuMTZzLjUzMy0zLjUxMiAxLjE4Ny04LjA1MmMuNDUyLTIuOTA4Ljg3MS01LjkxMSAxLjI0OC04Ljk2LjMyOS0yLjQ2OC42MjMtNC44MDYuODMtNi42OS40My0zLjkyNiAxLjc1OC0xOC4yMTMgMi4xMjctMjMuNjE4em0tNi4xMS0xNS44NjNDMTA0LjYzMyAzLjcyMSA5Mi4yNjIgMSA3NC43MjcgMWMtMy43MTEgMC05LjE1Ny4yNzEtMTIuNDcyLjM5OEM0NS41NTIgMi41MzIgMzIuNjggNi40MzYgMzIuNjggMTAuNDhjMCAzLjM0MyA5LjAyNCA1Ljc4MiAyMS4zMzkgNy4zMzRDNjAuMDAzIDE4LjU2OSA2Ni45MzQgMTkgNzQuMzIgMTljMjIuNTg0IDAgNDAuOTItNC4wMzMgNDAuOTItOSAwLTEuMzA4LTEuMjcxLTIuNTUtMy41NTUtMy42NzJ6XCIsIGZpbGw6IFwibm9uZVwiLCBzdHJva2U6IFwidXJsKCNfTGluZWFyMilcIiwgc3Ryb2tlV2lkdGg6IFwiMlwiIH0pLCBfanN4KFwiY2xpcFBhdGhcIiwgX19hc3NpZ24oeyBpZDogXCJfY2xpcDNcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwicGF0aFwiLCB7IGlkOiBcIkxpcXVpZC1DbGlwXCIsIGQ6IFwiTTExMC45ODYgNTguNjg0Yy0xLjgzMSAxMi45NjktNy4wNjkgMjcuMTE0LTcuOTQ5IDI5LjMxMy0uNjAzIDEuNTA5LjU5MiAyLjQzOS4zMjYgMy4wNy0xLjE0NyAyLjcyOS0xNS4xMjQgNi45ODYtMjkuODEzIDcuMDMxLTEyLjQxMy4wMzctMzMuMzY2LTIuMzYyLTM2LjA2Ny00Ljg3MS0yLjMzNy0yLjE3MS02LjgyNy0yOS41OTYtNy4wMDMtNDYuNDc1LS4yMS0yMC4wMjYuMzYtMjguMjM3IDEuOTE4LTM0LjA0Ny4wNjItLjIzMyA1LjU1NyAzLjM0NCAxNi40NDEgNS4yMjkgMTAuOTk3IDEuOTA0IDMzLjU0NSAyLjAwMiAzNy4zODEgMS42NzcgNy44OTgtLjY2OCAxOS41NTEtMi4yNDQgMjUuOTY2LTUuMTEuOTk3LS40NDUgMS42MDIgMjQuMzM0LTEuMiA0NC4xODN6XCIgfSkgfSkpLCBfanN4KFwiZ1wiLCBfX2Fzc2lnbih7IGNsaXBQYXRoOiBcInVybCgjX2NsaXAzKVwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZ1wiLCBfX2Fzc2lnbih7IGlkOiBcIkNvZmZlZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwicGF0aFwiLCB7IGlkOiBcIkxpcXVpZFwiLCBkOiBcIk0xNi4wNjMgNTkuMjMyYzguODQ1LTMuOTU5IDM1LjctNC45NTIgNTQuOTc3LTQuOTUyIDIxLjIxIDAgNTMuNzA5IDIuMzk1IDYxLjIyMSA2LjY4NCA5LjM4NyA1LjM1OS0yMS4xNSA0Mi45NjItMjEuMTUgNDIuOTYybC04MS40NjctMS45ODFTNi4yODEgNjMuNjEgMTYuMDYzIDU5LjIzMnpcIiwgZmlsbDogXCIjNDQzNTMwXCIgfSksIF9qc3goXCJnXCIsIF9fYXNzaWduKHsgY2xpcFBhdGg6IFwidXJsKCNfY2xpcDQpXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImVsbGlwc2VcIiwgeyBjeDogXCI3MS45ODJcIiwgY3k6IFwiNTUuOTc1XCIsIHJ4OiBcIjQwLjcwMVwiLCByeTogXCI2LjE0XCIsIGZpbGw6IFwiI2RmMTQ4YVwiLCBmaWxsT3BhY2l0eTogXCIuMTVcIiB9KSB9KSldIH0pKSB9KSksIF9qc3goXCJwYXRoXCIsIHsgaWQ6IFwiU2hhZG93XCIsIGQ6IFwiTTk2LjM4MyAyLjkyYzMuOTYgMCAxLjM0NyA4MS40MDgtNC44IDgzLjUyLTMuMTQyIDEuMDgtMTguMzggMTAuMjA1LTM0LjU2IDExLjUyLTIuODc3LjIzNCAyMC41NyAyLjMwMiAyNi4yNzkgMS42NTEgOC40OTMtLjk2OSAxNi43NDUtMS4yOTQgMjMuODgxLTUuNzMxIDguNjM2LTE4LjQ0NCAxMS43My01NC42MzQgOS42LTg0Ljk2IDAgMC00LjQ2My0xLjQ5Ni02LjcyLTIuMTYtMy40LTEtMTMuNjgtMy44NC0xMy42OC0zLjg0elwiLCBmaWxsOiBcIiMzNDAwNDRcIiwgZmlsbE9wYWNpdHk6IFwiLjEzXCIgfSksIF9qc3hzKFwiZGVmc1wiLCB7IGNoaWxkcmVuOiBbX2pzeChcImNsaXBQYXRoXCIsIF9fYXNzaWduKHsgaWQ6IFwiX2NsaXA0XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcInBhdGhcIiwgeyBkOiBcIk0xNi4wNjMgNTkuMjMyYzguODQ1LTMuOTU5IDM1LjctNC45NTIgNTQuOTc3LTQuOTUyIDIxLjIxIDAgNTMuNzA5IDIuMzk1IDYxLjIyMSA2LjY4NCA5LjM4NyA1LjM1OS0yMS4xNSA0Mi45NjItMjEuMTUgNDIuOTYybC04MS40NjctMS45ODFTNi4yODEgNjMuNjEgMTYuMDYzIDU5LjIzMnpcIiB9KSB9KSksIF9qc3hzKFwibGluZWFyR3JhZGllbnRcIiwgX19hc3NpZ24oeyBpZDogXCJfTGluZWFyMVwiLCB4MTogXCIwXCIsIHkxOiBcIjBcIiwgeDI6IFwiMVwiLCB5MjogXCIwXCIsIGdyYWRpZW50VW5pdHM6IFwidXNlclNwYWNlT25Vc2VcIiwgZ3JhZGllbnRUcmFuc2Zvcm06IFwibWF0cml4KDEzOS42OCAwIDAgMzAuNjk2MSAtMi44NCA5MS43MTUpXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJzdG9wXCIsIHsgb2Zmc2V0OiBcIjBcIiwgc3RvcENvbG9yOiBcIiNkZjE0OGFcIiB9KSwgX2pzeChcInN0b3BcIiwgeyBvZmZzZXQ6IFwiMVwiLCBzdG9wQ29sb3I6IFwiI2EzNTdjM1wiIH0pXSB9KSksIF9qc3hzKFwibGluZWFyR3JhZGllbnRcIiwgX19hc3NpZ24oeyBpZDogXCJfTGluZWFyMlwiLCB4MTogXCIwXCIsIHkxOiBcIjBcIiwgeDI6IFwiMVwiLCB5MjogXCIwXCIsIGdyYWRpZW50VW5pdHM6IFwidXNlclNwYWNlT25Vc2VcIiwgZ3JhZGllbnRUcmFuc2Zvcm06IFwibWF0cml4KDEwNy4xODEgMCAwIDk5LjA0NzEgNDIuMjE4IDUwLjczOSlcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcInN0b3BcIiwgeyBvZmZzZXQ6IFwiMFwiLCBzdG9wQ29sb3I6IFwiI2RmMTQ4YVwiIH0pLCBfanN4KFwic3RvcFwiLCB7IG9mZnNldDogXCIxXCIsIHN0b3BDb2xvcjogXCIjYTM1N2MzXCIgfSldIH0pKV0gfSldIH0pKSB9KSkgfSkpKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDdXA7XHJcbiIsImZ1bmN0aW9uIGZpbGxDdXAobGV2ZWwpIHtcclxuICAgIHZhciBjb2ZmZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0NvZmZlZVwiKTtcclxuICAgIGNvZmZlZS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlWShcIi5jb25jYXQobGV2ZWwsIFwiKVwiKTtcclxuICAgIHZhciBsaXF1aWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpcXVpZFwiKTtcclxuICAgIHZhciBzdGVhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RlYW1cIik7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsaXF1aWQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgc3RlYW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxpcXVpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0sIDgwMDApO1xyXG4gICAgfSwgNDAwMCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZmlsbEN1cDtcclxuIiwiaW1wb3J0IHsgc291bmQgfSBmcm9tIFwiLi4vc291bmQvYWxsU291bmRzXCI7XHJcbmltcG9ydCBmaWxsQ3VwIGZyb20gJy4vZmlsbEN1cCc7XHJcbmZ1bmN0aW9uIGZpbmlzaFByZXBhcmF0aW9uKCkge1xyXG4gICAgZmlsbEN1cCgwLjEpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc291bmQucGxheSgnZmlsbGN1cCcpO1xyXG4gICAgICAgIGZpbGxDdXAoMS42KTtcclxuICAgICAgICB2YXIgbGlxdWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXF1aWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxpcXVpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgfSwgODAwMCk7XHJcbiAgICB2YXIgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcclxuICAgIHZhciBjdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbXNnLmlubmVySFRNTCA9IFwiRW5qb3kgeW91ciBjb2ZmZWUhIFRha2UgeW91ciBjdXAuXCI7XHJcbiAgICAgICAgdmFyIGN1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXAtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY3VwQ29udGFpbmVyLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICBjdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWtlQ3VwKTtcclxuICAgIH0sIDEyMDAwKTtcclxuICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJyk7XHJcbiAgICBmdW5jdGlvbiB0YWtlQ3VwKCkge1xyXG4gICAgICAgIHZhciBzdGVhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGVhbScpO1xyXG4gICAgICAgIGN1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgc3RlYW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICFtb2RhbCA/IG1zZy5pbm5lckhUTUwgPSAnQ2hvb3NlIHlvdXIgY29mZmVlJyA6IG1zZy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB2YXIgc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xfX3NjcmVlbicpO1xyXG4gICAgICAgIHZhciBkcmlua0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbF9fbWlkZGxlJyk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghbW9kYWwpXHJcbiAgICAgICAgICAgICAgICBzY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgaWYgKCFtb2RhbClcclxuICAgICAgICAgICAgICAgIGRyaW5rQnRucy5zdHlsZS5mbGV4ID0gJzInO1xyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgIHZhciBvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29uQnRuJyk7XHJcbiAgICAgICAgb25CdG5bMF0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmaW5pc2hQcmVwYXJhdGlvbjtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG52YXIgU3RlYW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInN0ZWFtXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29mZmVlLW1lZGl1bV9fc21va2UgY29mZmVlLW1lZGl1bV9fc21va2Utb25lXCIgfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29mZmVlLW1lZGl1bV9fc21va2UgY29mZmVlLW1lZGl1bV9fc21va2UtdHdvXCIgfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29mZmVlLW1lZGl1bV9fc21va2UgY29mZmVlLW1lZGl1bV9fc21va2UtdGhyZWVcIiB9KSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb2ZmZWUtbWVkaXVtX19zbW9rZSBjb2ZmZWUtbWVkaXVtX19zbW9rZS1mb3VyXCIgfSldIH0pKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFN0ZWFtO1xyXG4iLCJpbXBvcnQgeyBIb3dsIH0gZnJvbSBcImhvd2xlclwiO1xyXG5leHBvcnQgdmFyIHNvdW5kID0gbmV3IEhvd2woe1xyXG4gICAgXCJzcmNcIjogW1xyXG4gICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL01hcmluYUtvdmVsL2NvZmZlZW1hY2hpbmVkYXRhL2Jsb2IvbWFpbi9Tb3VuZHMvU291bmQud2VibT9yYXc9dHJ1ZVwiLFxyXG4gICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL01hcmluYUtvdmVsL2NvZmZlZW1hY2hpbmVkYXRhL2Jsb2IvbWFpbi9Tb3VuZHMvU291bmQubXAzP3Jhdz10cnVlXCJcclxuICAgIF0sXHJcbiAgICBcInNwcml0ZVwiOiB7XHJcbiAgICAgICAgXCJjb250YWluZXJcIjogW1xyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICA5MzYuMDA5MDcwMjk0Nzg0NlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJjdXAtb24tc2hlbGxcIjogW1xyXG4gICAgICAgICAgICAyMDAwLFxyXG4gICAgICAgICAgICAyMjQ2LjUzMDYxMjI0NDg5ODNcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiZmlsbGN1cFwiOiBbXHJcbiAgICAgICAgICAgIDYwMDAsXHJcbiAgICAgICAgICAgIDI1MTkuOTk5OTk5OTk5OTk5NVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJncmFpbnNcIjogW1xyXG4gICAgICAgICAgICAxMDAwMCxcclxuICAgICAgICAgICAgMzk2MC4wMDAwMDAwMDAwMDFcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwibWFraW5nLWNvZmZlZVwiOiBbXHJcbiAgICAgICAgICAgIDE1MDAwLFxyXG4gICAgICAgICAgICA2MjY5LjM4Nzc1NTEwMjA0MVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJvbk9mZlwiOiBbXHJcbiAgICAgICAgICAgIDIzMDAwLFxyXG4gICAgICAgICAgICA1MjIuNDQ4OTc5NTkxODM2XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInN1Z2FyXCI6IFtcclxuICAgICAgICAgICAgMjUwMDAsXHJcbiAgICAgICAgICAgIDU0NTkuNTkxODM2NzM0Njk2XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIndhdGVyXCI6IFtcclxuICAgICAgICAgICAgMzIwMDAsXHJcbiAgICAgICAgICAgIDE4NTQuNjkzODc3NTUxMDIxNFxyXG4gICAgICAgIF1cclxuICAgIH1cclxufSk7XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbic7XHJcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tICdAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbkdyb3VwJztcclxuaW1wb3J0IHN0YXJ0UHJlcGFyYXRpb24gZnJvbSBcImNvbXBvbmVudHMvY29mZmVlTWFjaGluZUZyb250L3N0YXJ0UHJlcGFyYXRpb25cIjtcclxudmFyIERyaW5rcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfYSA9IHVzZVN0YXRlKG51bGwpLCBkYXRhID0gX2FbMF0sIHNldERhdGEgPSBfYVsxXTtcclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvY29mZmVlcy9cIilcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaylcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHZhciBhcnJEYXRhID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFyckRhdGEucHVzaChyZXNwb25zZVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0RGF0YShhcnJEYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikgeyByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpOyB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHZhciBhbGlnbm1lbnQgPSBSZWFjdC51c2VTdGF0ZSgnbGVmdCcpWzBdO1xyXG4gICAgcmV0dXJuIChfanN4KFRvZ2dsZUJ1dHRvbkdyb3VwLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb250cm9sX19taWRkbGVcIiwgdmFsdWU6IGFsaWdubWVudCwgZXhjbHVzaXZlOiB0cnVlLCBvbkNoYW5nZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RhcnRQcmVwYXJhdGlvbigpOyB9IH0sIHsgY2hpbGRyZW46IGRhdGEgJiYgZGF0YS5tYXAoZnVuY3Rpb24gKGRyaW5rRGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gXCJkcmluayBcIi5jb25jYXQoZHJpbmtEYXRhLm5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBfanN4KFRvZ2dsZUJ1dHRvbiwgX19hc3NpZ24oeyB2YWx1ZTogZGF0YSAmJiBkcmlua0RhdGEubmFtZSwgY2xhc3NOYW1lOiBjbGFzc05hbWUsIFwiZGF0YS1zaXplXCI6IGRyaW5rRGF0YS5zaXplLCBuYW1lOiBkcmlua0RhdGEucmVjaXBlIH0sIHsgY2hpbGRyZW46IF9qc3goXCJpbWdcIiwgeyBzcmM6IGRyaW5rRGF0YS5waWN0dXJlLCBjbGFzc05hbWU6IFwiZHJpbmtfX3BpY3R1cmVcIiB9KSB9KSwgZHJpbmtEYXRhLmluZGV4KTtcclxuICAgICAgICB9KSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEcmlua3M7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiY2FudmFzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGlnaXRhbE51bWJlcnNcXFwiO1xcbiAgaGVpZ2h0OiAxLjJyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY2FudmFzQ2xvY2svY2FudmFzQ2xvY2suc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJjYW52YXMge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJEaWdpdGFsTnVtYmVyc1xcXCI7XFxyXFxuICBoZWlnaHQ6IDEuMnJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW52aXRhdGlvbiB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNywgOTYsIDEyNCwgMC44MTE3NjQ3MDU5KTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5tYWNoaW5lIHtcXG4gIHdpZHRoOiA0Ni42NjY2NjY2NjY3dmg7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvY29mZmVlbWFjaGluZWRhdGEvbWFpbi9kZXNpZ24vbWFjaGluZS1mcm9udDEucG5nXFxcIikgNTAlLzEwMCUgbm8tcmVwZWF0O1xcbn1cXG5cXG4uY29udHJvbCB7XFxuICB3aWR0aDogOTMlO1xcbiAgaGVpZ2h0OiAyNyU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDUlIDQlO1xcbiAgbWFyZ2luLXRvcDogMTIlO1xcbiAgbWFyZ2luLWxlZnQ6IDQlO1xcbn1cXG5cXG4ub25CdG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDE1JSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29udGFpbmVyX19sZWZ0ID4gYnV0dG9uIHtcXG4gIHdpZHRoOiAzdmg7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggNHB4ICNmZjAwMDA7XFxuICBwYWRkaW5nOiAwIDIlO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9vbmxpbmVzdG9yZWRhdGEvbWFpbi9vbi5wbmdcXFwiKSAxMDAlIDEwMCUvMTAwJSAxMDAlIG5vLXJlcGVhdDtcXG59XFxuXFxuLmNvbnRhaW5lcl9fbGVmdCA+IGJ1dHRvblthcmlhLXByZXNzZWQ9dHJ1ZV0ge1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDRweCAjMDA4MDAwO1xcbn1cXG5cXG4uY29udGFpbmVyX19sZWZ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTVweDtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbi5jb250cm9sX19taWRkbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAwcHg7XFxuICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcblxcbi5jb250cm9sX19taWRkbGUgPiBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uZHJpbmtfX3BpY3R1cmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kcmlua19fcGljdHVyZTpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4uZHJpbmsge1xcbiAgd2lkdGg6IDI3JTtcXG4gIGhlaWdodDogNDglO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luOiAwIDIlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNvbnRyb2xfX3JpZ2h0IHtcXG4gIHdpZHRoOiA3OCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY29udHJvbF9fc2NyZWVuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHJnYigyMjcsIDIxNCwgMjE0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmluZGljYXRvcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5kaWNhdG9yIHtcXG4gIHdpZHRoOiAxdmg7XFxuICBoZWlnaHQ6IDF2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA5LCAxMDMsIDEwMywgMC43MjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIG1hcmdpbjogMTUlIDExJTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMnB4ICNmZjAwMDA7XFxufVxcblxcbi5pY29uX193YXRlciB7XFxuICB3aWR0aDogNHZoO1xcbiAgaGVpZ2h0OiAxLjV2aDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL01hcmluYUtvdmVsL29ubGluZXN0b3JlZGF0YS9tYWluL3dhdGVyLnBuZ1xcXCIpIDEwMCUgMTAwJS8xMDAlIDEwMCUgbm8tcmVwZWF0O1xcbn1cXG5cXG4uaWNvbl9fYmVhbnMge1xcbiAgd2lkdGg6IDN2aDtcXG4gIGhlaWdodDogM3ZoO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvb25saW5lc3RvcmVkYXRhL21haW4vZ3JhaW5zLnBuZ1xcXCIpIDEwMCUgMTAwJS8xMDAlIDEwMCUgbm8tcmVwZWF0O1xcbn1cXG5cXG4uaWNvbl9fd2FzdGUge1xcbiAgd2lkdGg6IDN2aDtcXG4gIGhlaWdodDogM3ZoO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvb25saW5lc3RvcmVkYXRhL21haW4vd2FzdGUucG5nXFxcIikgMTAwJSAxMDAlLzEwMCUgMTAwJSBuby1yZXBlYXQ7XFxufVxcblxcbi5wbGFjZUZvckN1cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTIlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2hlbGYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxufVxcblxcbi5jdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTExdmg7XFxuICBsZWZ0OiAxMS42NjY2NjY2NjY3dmg7XFxuICB3aWR0aDogMzV2aDtcXG4gIGhlaWdodDogMzV2aDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm11c2ljX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQwNzg0MzEzNzMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxufVxcblxcbi52b2x1bWVfX2ljb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIG1hcmdpbjogMTBweCAwIDEwcHggMjBweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvY29mZmVlbWFjaGluZWRhdGEvbWFpbi9Tb3VuZHMvdm9sdW1lLXB1cnBsZS5wbmdcXFwiKSAwJSAxMDAlLzEwMCUgMTAwJSBuby1yZXBlYXQ7XFxufVxcblxcbi5yYWRpbyB7XFxuICB3aWR0aDogMTV2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2I4MWU4OCwgIzkyNGViOCk7XFxuICBib3gtc2hhZG93OiAycHggM3B4IDVweCByZ2IoMTYsIDE2LCAxNik7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvZmZlZU1hY2hpbmVGcm9udC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvSUFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0UsMkJBQUE7QUFLRjs7QUFIQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDBIQUFBO0FBTUY7O0FBSkE7RUFDRSxvQ0FBQTtBQU9GOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVFGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBUEE7RUFDRSxrQkFBQTtBQVVGOztBQVJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBV0Y7O0FBVEE7RUFDRSxzQkFBQTtBQVlGOztBQVZBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFhRjs7QUFYQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBY0Y7O0FBWkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQWVGOztBQWJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQWlCRjs7QUFmQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFrQkY7O0FBaEJBO0VBQ0UseUJBQUE7RUFDQSxtQ0FBQTtBQW1CRjs7QUFqQkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDZIQUFBO0FBb0JGOztBQWxCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEhBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSw2SEFBQTtBQXNCRjs7QUFwQkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBdUJGOztBQXJCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUF3QkY7O0FBdEJBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF5QkY7O0FBdkJBO0VBQ0UsWUFBQTtBQTBCRjs7QUF4QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQTJCRjs7QUF6QkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsNElBQUE7QUE0QkY7O0FBMUJBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsdURBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0FBNkJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5pbnZpdGF0aW9uIHtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4OTYwN2NjZjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcbi5tYWNoaW5lIHtcXHJcXG4gIHdpZHRoOiBjYWxjKDcwdmggLyAxLjUpO1xcclxcbiAgaGVpZ2h0OiA3MHZoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL01hcmluYUtvdmVsL2NvZmZlZW1hY2hpbmVkYXRhL21haW4vZGVzaWduL21hY2hpbmUtZnJvbnQxLnBuZycpIDUwJSAvIDEwMCUgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG4uY29udHJvbCB7XFxyXFxuICB3aWR0aDogOTMlO1xcclxcbiAgaGVpZ2h0OiAyNyU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDUlIDQlO1xcclxcbiAgbWFyZ2luLXRvcDogMTIlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDQlO1xcclxcbn1cXHJcXG4ub25CdG4ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE1JSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uY29udGFpbmVyX19sZWZ0ID4gYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAzdmg7XFxyXFxuICBoZWlnaHQ6IDN2aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggNHB4ICNmZjAwMDA7XFxyXFxuICBwYWRkaW5nOiAwIDIlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9vbmxpbmVzdG9yZWRhdGEvbWFpbi9vbi5wbmcnKSAxMDAlIDEwMCUvMTAwJSAxMDAlIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuLmNvbnRhaW5lcl9fbGVmdCA+IGJ1dHRvblthcmlhLXByZXNzZWQ9XFxcInRydWVcXFwiXSB7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggNHB4ICMwMDgwMDA7XFxyXFxufVxcclxcbi5jb250YWluZXJfX2xlZnQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAtNXB4O1xcclxcbiAgd2lkdGg6IDIwJTtcXHJcXG59XFxyXFxuLmNvbnRyb2xfX21pZGRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDFweDtcXHJcXG59XFxyXFxuLmNvbnRyb2xfX21pZGRsZSA+IGJ1dHRvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbi5kcmlua19fcGljdHVyZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTIwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmRyaW5rX19waWN0dXJlOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcbi5kcmluayB7XFxyXFxuICB3aWR0aDogMjclO1xcclxcbiAgaGVpZ2h0OiA0OCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxyXFxuICBtYXJnaW46IDAgMiU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4uY29udHJvbF9fcmlnaHQge1xcclxcbiAgd2lkdGg6IDc4JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5jb250cm9sX19zY3JlZW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogcmdiKDIyNywgMjE0LCAyMTQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTAwJTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAtNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uaW5kaWNhdG9ycyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGhlaWdodDogMzAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5pbmRpY2F0b3Ige1xcclxcbiAgd2lkdGg6IDF2aDtcXHJcXG4gIGhlaWdodDogMXZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDksIDEwMywgMTAzLCAwLjcyMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgbWFyZ2luOiAxNSUgMTElO1xcclxcbn1cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAycHggI2ZmMDAwMDtcXHJcXG59XFxyXFxuLmljb25fX3dhdGVyIHtcXHJcXG4gIHdpZHRoOiA0dmg7XFxyXFxuICBoZWlnaHQ6IDEuNXZoO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvb25saW5lc3RvcmVkYXRhL21haW4vd2F0ZXIucG5nJykgMTAwJSAxMDAlLzEwMCUgMTAwJSBuby1yZXBlYXQ7XFxyXFxufVxcclxcbi5pY29uX19iZWFucyB7XFxyXFxuICB3aWR0aDogM3ZoO1xcclxcbiAgaGVpZ2h0OiAzdmg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9vbmxpbmVzdG9yZWRhdGEvbWFpbi9ncmFpbnMucG5nJykgMTAwJSAxMDAlLzEwMCUgMTAwJSBuby1yZXBlYXQ7XFxyXFxufVxcclxcbi5pY29uX193YXN0ZSB7XFxyXFxuICB3aWR0aDogM3ZoO1xcclxcbiAgaGVpZ2h0OiAzdmg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9vbmxpbmVzdG9yZWRhdGEvbWFpbi93YXN0ZS5wbmcnKSAxMDAlIDEwMCUvMTAwJSAxMDAlIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuLnBsYWNlRm9yQ3VwIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MiU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5zaGVsZiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXHJcXG59XFxyXFxuLmN1cCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAtMTF2aDtcXHJcXG4gIGxlZnQ6IGNhbGMoKDcwdmggLyAxLjIgLyAyKSAtIDE3LjV2aCk7XFxyXFxuICB3aWR0aDogMzV2aDtcXHJcXG4gIGhlaWdodDogMzV2aDtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLm11c2ljX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDY4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMzAwcHg7XFxyXFxufVxcclxcbi52b2x1bWVfX2ljb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICB3aWR0aDogMzVweDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDEwcHggMjBweCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvY29mZmVlbWFjaGluZWRhdGEvbWFpbi9Tb3VuZHMvdm9sdW1lLXB1cnBsZS5wbmcnKSAwJSAxMDAlIC8gMTAwJSAxMDAlIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuLnJhZGlvIHtcXHJcXG4gIHdpZHRoOiAxNXZoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYjgxZTg4LCAjOTI0ZWI4KTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggNXB4IHJnYigxNiwgMTYsIDE2KTtcXHJcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNXZoO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmN1cC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGN1cnNvcjogYXV0bztcXG59XFxuXFxuLmNvbnRyb2xzIHtcXG4gIG1heC13aWR0aDogMTkwcHg7XFxufVxcblxcbiNEcmF3aW5nIHtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbiNDb2ZmZWUge1xcbiAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjM1KSBhbGwgM3M7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxufVxcblxcbkBrZXlmcmFtZXMgbGlxdWlkIHtcXG4gIDAlIHtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICA1JSB7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMjAlIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgOTUlIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLmxpcXVpZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgaGVpZ2h0OiA3MXB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjB2aDtcXG4gIGxlZnQ6IDQ4JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDM1MzA7XFxuICBhbmltYXRpb246IGxpcXVpZCA0cyA0cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5jb2ZmZWUtbWVkaXVtX19zbW9rZSB7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzYWVhZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbW9rZU9uZSB7XFxuICAwJSB7XFxuICAgIGJvdHRvbTogMTV2aDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIGJvdHRvbTogMjB2aDtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgfVxcbiAgODAlIHtcXG4gICAgYm90dG9tOiAzMHZoO1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm90dG9tOiAzMHZoO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNtb2tlVHdvIHtcXG4gIDAlIHtcXG4gICAgYm90dG9tOiAyMHZoO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgYm90dG9tOiAyNXZoO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9XFxuICA4MCUge1xcbiAgICBib3R0b206IDM1dmg7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3R0b206IDM1dmg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5jb2ZmZWUtbWVkaXVtX19zbW9rZS1vbmUge1xcbiAgb3BhY2l0eTogMDtcXG4gIGJvdHRvbTogNTB2aDtcXG4gIGxlZnQ6IDI1dmg7XFxuICBmaWx0ZXI6IGJsdXIoNHB4KTtcXG4gIGFuaW1hdGlvbjogc21va2VPbmUgM3MgNHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4uY29mZmVlLW1lZGl1bV9fc21va2UtdHdvIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBib3R0b206IDcwdmg7XFxuICBsZWZ0OiAyM3ZoO1xcbiAgZmlsdGVyOiBibHVyKDRweCk7XFxuICBhbmltYXRpb246IHNtb2tlVHdvIDNzIDVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmNvZmZlZS1tZWRpdW1fX3Ntb2tlLXRocmVlIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBib3R0b206IDY1dmg7XFxuICByaWdodDogMjh2aDtcXG4gIGZpbHRlcjogYmx1cig0cHgpO1xcbiAgYW5pbWF0aW9uOiBzbW9rZVR3byAzcyA2cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5jb2ZmZWUtbWVkaXVtX19zbW9rZS1mb3VyIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBib3R0b206IDUwdmg7XFxuICByaWdodDogMjV2aDtcXG4gIGZpbHRlcjogYmx1cig0cHgpO1xcbiAgYW5pbWF0aW9uOiBzbW9rZU9uZSAzcyA1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5zdGVhbSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2N1cC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtBQUlGOztBQUZBO0VBQ0Usd0RBQUE7RUFDQSx3QkFBQTtBQUtGOztBQUZBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQUtGO0VBSEE7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQUtGO0FBQ0Y7QUFGQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0FBSUY7O0FBREE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUlGOztBQUZBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQUtGO0FBQ0Y7QUFIQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFLRjtFQUhBO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUFLRjtFQUhBO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUFLRjtFQUhBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFLRjtBQUNGO0FBSEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0FBS0Y7O0FBSEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0FBTUY7O0FBSkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0FBT0Y7O0FBTEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0FBUUY7O0FBTkE7RUFDRSxhQUFBO0FBU0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndyYXBwZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDM1dmg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG4uY3VwLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgY3Vyc29yOiBhdXRvO1xcclxcbn1cXHJcXG4uY29udHJvbHMge1xcclxcbiAgbWF4LXdpZHRoOiAxOTBweDtcXHJcXG59XFxyXFxuI0RyYXdpbmcge1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuI0NvZmZlZSB7XFxyXFxuICB0cmFuc2l0aW9uOiBjdWJpYy1iZXppZXIoLjY4LC0wLjU1LC4yNywxLjM1KSBhbGwgM3M7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbGlxdWlkIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgaGVpZ2h0OiAwcHg7ICBcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG4gIDUlIHtcXHJcXG4gICAgaGVpZ2h0OiAwcHg7ICBcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG4gIDIwJSB7XFxyXFxuICAgIGhlaWdodDogNzBweDsgIFxcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbiAgOTUlIHtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxpcXVpZCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcclxcbiAgaGVpZ2h0OiA3MXB4O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjB2aDtcXHJcXG4gIGxlZnQ6IDQ4JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDM1MzA7XFxyXFxuICBhbmltYXRpb246IGxpcXVpZCA0cyA0cyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUtbWVkaXVtX19zbW9rZSB7XFxyXFxuICB3aWR0aDogOHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlOyAgXFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNhZWFlO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNtb2tlT25lIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYm90dG9tOiAxNXZoO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgNDAlIHtcXHJcXG4gICAgYm90dG9tOiAyMHZoO1xcclxcbiAgICBvcGFjaXR5OiAuNTtcXHJcXG4gIH1cXHJcXG4gIDgwJSB7XFxyXFxuICAgIGJvdHRvbTogMzB2aDtcXHJcXG4gICAgb3BhY2l0eTogLjM7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYm90dG9tOiAzMHZoO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNtb2tlVHdvIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYm90dG9tOiAyMHZoO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgNDAlIHtcXHJcXG4gICAgYm90dG9tOiAyNXZoO1xcclxcbiAgICBvcGFjaXR5OiAuNTtcXHJcXG4gIH1cXHJcXG4gIDgwJSB7XFxyXFxuICAgIGJvdHRvbTogMzV2aDtcXHJcXG4gICAgb3BhY2l0eTogLjM7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYm90dG9tOiAzNXZoO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uY29mZmVlLW1lZGl1bV9fc21va2Utb25lIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBib3R0b206IDUwdmg7XFxyXFxuICBsZWZ0OiAyNXZoO1xcclxcbiAgZmlsdGVyOiBibHVyKDRweCk7XFxyXFxuICBhbmltYXRpb246IHNtb2tlT25lIDNzIDRzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuLmNvZmZlZS1tZWRpdW1fX3Ntb2tlLXR3byB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYm90dG9tOiA3MHZoO1xcclxcbiAgbGVmdDogMjN2aDtcXHJcXG4gIGZpbHRlcjogYmx1cig0cHgpO1xcclxcbiAgYW5pbWF0aW9uOiBzbW9rZVR3byAzcyA1cyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcbi5jb2ZmZWUtbWVkaXVtX19zbW9rZS10aHJlZSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYm90dG9tOiA2NXZoO1xcclxcbiAgcmlnaHQ6IDI4dmg7XFxyXFxuICBmaWx0ZXI6IGJsdXIoNHB4KTtcXHJcXG4gIGFuaW1hdGlvbjogc21va2VUd28gM3MgNnMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG4uY29mZmVlLW1lZGl1bV9fc21va2UtZm91ciB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYm90dG9tOiA1MHZoO1xcclxcbiAgcmlnaHQ6IDI1dmg7XFxyXFxuICBmaWx0ZXI6IGJsdXIoNHB4KTtcXHJcXG4gIGFuaW1hdGlvbjogc21va2VPbmUgM3MgNXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG4uc3RlYW0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhbnZhc0Nsb2NrLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYW52YXNDbG9jay5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhbnZhc0Nsb2NrLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2ZmZWVNYWNoaW5lRnJvbnQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvZmZlZU1hY2hpbmVGcm9udC5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvZmZlZU1hY2hpbmVGcm9udC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3VwLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jdXAuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jdXAuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJyZW5kZXJEaWdpdGFsQ2xvY2siLCJjb250ZXh0IiwicHJvcHMiLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJiZ0NvbG9yIiwidGltZW9mZnNldCIsImRpYWxDb2xvciIsInRpbWUyNGgiLCJmb250U2l6ZSIsIm5vdyIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInNlYyIsImdldFNlY29uZHMiLCJtaW4iLCJnZXRNaW51dGVzIiwiaG91ciIsImdldEhvdXJzIiwic2VjQmxpbmsiLCJ0b1N0cmluZyIsIk51bWJlciIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsInJlY3QiLCJmaWxsIiwiY2xvc2VQYXRoIiwidGV4dEFsaWduIiwiZm9udCIsImZpbGxUZXh0Iiwic2V0VGltZW91dCIsIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImpzeCIsIl9qc3giLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNhbnZhc0Nsb2NrIiwiZGVmYXVsdFByb3BzIiwic2l6ZSIsImlkIiwiY2FudmFzUmVmIiwiY3VycmVudCIsImdldENvbnRleHQiLCJjaGlsZHJlbiIsInJlZiIsImpzeHMiLCJfanN4cyIsImFkZFdhdGVyIiwiYWRkQmVhbnMiLCJlbXB0eVdhc3RlQ29udGFpbmVyIiwiQWRkSW5kaWNhdG9ycyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ3YXRlciIsImJlYW5zIiwid2FzdGVQbGFjZSIsImNoZWNrUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwiaW5kaWNhdG9ycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1zZyIsImlubmVySFRNTCIsIm1zZ05vUmVzb3VyY2VzIiwiZHJpbmtzIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJmbGV4IiwiVHVybk9uT2ZmIiwiQ3VwIiwiU3RlYW0iLCJEcmlua3MiLCJDb2ZmZWVNYWNoaW5lRnJvbnQiLCJDaGVja1Jlc291cmNlcyIsInNvdW5kIiwib3BlbkRyaW5rQ2hvaWNlIiwic2NyZWVuXzEiLCJkaXNwbGF5IiwicGxheSIsImluZGljYXRvciIsInJlbW92ZSIsInJlZHVjZVJlc291cmNlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJSZWFjdCIsIlRvZ2dsZUJ1dHRvbiIsIl9hIiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vZGFsIiwidG9nZ2xlIiwic2NyZWVuIiwiYnRuIiwidGFyZ2V0IiwiZGlzYWJsZWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiYWRkQ3VwIiwic3RhcnRQcmVwYXJhdGlvbiIsImRyaW5rQnRuIiwicGFyZW50RWxlbWVudCIsImNvZmZlZSIsImdldEF0dHJpYnV0ZSIsImNvbG9yIiwiaXNPbiIsImN1cENvbnRhaW5lciIsInN0ZWFtT25lIiwic3RlYW1Ud28iLCJyaWdodCIsImxpcXVpZCIsImdldEVsZW1lbnRCeUlkIiwic3RyZWFtIiwiYmFja2dyb3VuZENvbG9yIiwic3RhcnQiLCJjb25jYXQiLCJvbkJ0biIsImZpbmlzaFByZXBhcmF0aW9uIiwiY3VwIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWVhc3VyZSIsInRpbWUiLCJwcm9ncmVzcyIsInRyYW5zbGF0ZSIsIm1hcmdpbiIsInZpZXdCb3giLCJ4bWxucyIsImZpbGxSdWxlIiwiY2xpcFJ1bGUiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VNaXRlcmxpbWl0IiwiZCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiY2xpcFBhdGgiLCJjeCIsImN5IiwicngiLCJyeSIsImZpbGxPcGFjaXR5IiwieDEiLCJ5MSIsIngyIiwieTIiLCJncmFkaWVudFVuaXRzIiwiZ3JhZGllbnRUcmFuc2Zvcm0iLCJvZmZzZXQiLCJzdG9wQ29sb3IiLCJmaWxsQ3VwIiwibGV2ZWwiLCJ0cmFuc2Zvcm0iLCJzdGVhbSIsImN1cnNvciIsInRha2VDdXAiLCJkcmlua0J0bnMiLCJIb3dsIiwiVG9nZ2xlQnV0dG9uR3JvdXAiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiYXJyRGF0YSIsInB1c2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJhbGlnbm1lbnQiLCJleGNsdXNpdmUiLCJtYXAiLCJkcmlua0RhdGEiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJyZWNpcGUiLCJzcmMiLCJwaWN0dXJlIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9