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
      drinks.classList.add('hidden');
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
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
          className: "auth-icon"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({
            className: "account"
          }, {
            children: "My Account"
          }))
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
    drinks.classList.remove('hidden');
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "turnOff": () => (/* binding */ turnOff)
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




var turnOff;
function TurnOnOff() {
  var _a = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),
    selected = _a[0],
    setSelected = _a[1];
  var indicators = document.getElementsByClassName('active');
  while (indicators.length) {
    indicators[0].classList.remove('active');
  }
  var invitation = document.querySelector('.invitation');
  var chooseMessage = document.querySelector('.choose__message');
  var msg = document.querySelector('.message');
  var drinks = document.querySelector('.control__middle');
  var modal = document.querySelector('.card');
  if (msg && msg.innerHTML === 'Turn on the coffee machine' && selected) {
    msg.innerHTML = 'Choose coffee';
    invitation.style.display = 'none';
    chooseMessage.style.display = 'flex';
  } else if (msg && modal) {
    msg.innerHTML = '';
    drinks.classList.add('hidden');
  } else if (msg && !modal) {
    msg.innerHTML = 'Turn on the coffee machine';
    drinks.classList.add('hidden');
    invitation.style.display = 'flex';
    chooseMessage.style.display = 'none';
  }
  var toggle = function toggle() {
    var drinks = document.querySelector('.control__middle');
    var screen = document.querySelector('.control__screen');
    var authIcon = document.querySelector('.auth-icon');
    var auth = document.querySelector('.auth');
    if (!selected) {
      if (modal) {
        authIcon.style.display = 'block';
        screen.style.display = 'none';
        drinks.classList.add('hidden');
      } else {
        if (auth) auth.style.display = 'none';
        screen.style.display = 'none';
        drinks.classList.remove('hidden');
      }
    } else {
      if (auth) auth.style.display = 'none';
      screen.style.display = 'flex';
      drinks.classList.add('hidden');
    }
    setSelected(!selected);
    _sound_allSounds__WEBPACK_IMPORTED_MODULE_2__.sound.play('onOff');
    var btn = event.target;
    btn.disabled = true;
    setTimeout(function () {
      if (!modal) btn.disabled = false;
    }, 1000);
    authIcon.addEventListener('click', function () {
      if (auth) auth.style.display = 'flex';
    });
  };
  turnOff = toggle;
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
  var drinkBtn;
  if (event.target.getAttribute('class').includes('drink')) {
    drinkBtn = event.target.parentElement;
  } else {
    drinkBtn = event.target;
  }
  var coffee = drinkBtn.getAttribute('value');
  var size = drinkBtn.getAttribute('data-size');
  var color = drinkBtn.getAttribute('name');
  var screen = document.querySelector('.control__screen');
  var isOn = document.querySelector('.onBtn').getAttribute("aria-pressed");
  var drinks = document.querySelector('.control__middle');
  drinks.classList.add('hidden');
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "removeCup": () => (/* binding */ removeCup)
/* harmony export */ });
/* harmony import */ var _sound_allSounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sound/allSounds */ "./src/components/sound/allSounds.ts");
/* harmony import */ var _fillCup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fillCup */ "./src/components/cup/fillCup.ts");


var removeCup;
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
  var takeCup = function takeCup() {
    var steam = document.querySelector('.steam');
    cup.style.display = "none";
    steam.style.display = "none";
    !modal ? msg.innerHTML = 'Choose your coffee' : msg.innerHTML = '';
    var screen = document.querySelector('.control__screen');
    var drinkBtns = document.querySelector('.control__middle');
    setTimeout(function () {
      if (!modal) screen.style.display = 'none';
      if (!modal) drinkBtns.classList.remove('hidden');
    }, 1500);
    var onBtn = document.getElementsByClassName('onBtn');
    onBtn[0].disabled = false;
  };
  removeCup = takeCup;
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
    fetch("https://guiseppe-production.up.railway.app/coffees/").then(function (response) {
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
    className: "control__middle hidden",
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
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.invitation {\n  position: relative;\n  display: flex;\n  margin: 20px;\n  background-color: rgba(137, 96, 124, 0.8117647059);\n  color: #fff;\n  border-radius: 20px;\n  padding: 15px;\n  font-size: 1.2rem;\n}\n\n.machine {\n  position: relative;\n  width: 46.6666666667vh;\n  height: 70vh;\n  border-radius: 10px;\n  background: url(\"https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/design/machine-front1.png\") 50%/100% no-repeat;\n}\n\n.control {\n  width: 93%;\n  height: 27%;\n  border-radius: 10px 10px 0 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 5% 4%;\n  margin-top: 12%;\n  margin-left: 4%;\n}\n\n.onBtn {\n  margin-left: 15% !important;\n}\n\n.container__left > button {\n  width: 3vh;\n  height: 3vh;\n  border-radius: 25px;\n  box-shadow: 1px 1px 10px 4px #ff0000;\n  padding: 0 2%;\n  margin-right: 5px;\n  background: url(\"https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/on.png\") 100% 100%/100% 100% no-repeat;\n}\n\n.container__left > button[aria-pressed=true] {\n  box-shadow: 1px 1px 10px 4px #008000;\n}\n\n.container__left {\n  position: relative;\n  top: -5px;\n  width: 20%;\n}\n\n.control__middle {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  height: 100%;\n  width: 100%;\n  margin-top: 1px;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.control__middle > button {\n  border-radius: 4px;\n}\n\n.drink__picture {\n  width: 100%;\n  height: 120%;\n  background-color: #000;\n  border-radius: 4px !important;\n}\n\n.drink__picture:hover {\n  border: 1px solid #000;\n}\n\n.drink {\n  width: 27%;\n  height: 48%;\n  background-color: #000;\n  border-radius: 4px !important;\n  padding: 0 !important;\n  overflow: hidden;\n}\n\n.control__right {\n  width: 78%;\n  display: flex;\n}\n\n.control__screen {\n  width: 100%;\n  color: rgb(227, 214, 214);\n  border-radius: 5px;\n  padding: 5px;\n  font-size: 0.9rem;\n  line-height: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.message {\n  position: relative;\n  top: -5px;\n  text-align: center;\n}\n\n.indicators {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  height: 30%;\n  width: 100%;\n}\n\n.indicator {\n  width: 1vh;\n  height: 1vh;\n  background-color: rgba(109, 103, 103, 0.721);\n  border-radius: 25px;\n  margin: 15% 11%;\n}\n\n.active {\n  background-color: #ff0000;\n  box-shadow: 0px 0px 4px 2px #ff0000;\n}\n\n.icon__water {\n  width: 4vh;\n  height: 1.5vh;\n  background: url(\"https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/water.png\") 100% 100%/100% 100% no-repeat;\n}\n\n.icon__beans {\n  width: 3vh;\n  height: 3vh;\n  background: url(\"https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/grains.png\") 100% 100%/100% 100% no-repeat;\n}\n\n.icon__waste {\n  width: 3vh;\n  height: 3vh;\n  background: url(\"https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/waste.png\") 100% 100%/100% 100% no-repeat;\n}\n\n.placeForCup {\n  width: 100%;\n  height: 52%;\n  position: relative;\n}\n\n.shelf {\n  width: 100%;\n  height: 10%;\n  border-radius: 0 0 10px 10px;\n}\n\n.cup {\n  display: none;\n  position: absolute;\n  bottom: -11vh;\n  left: 11.6666666667vh;\n  width: 35vh;\n  height: 35vh;\n}\n\nbutton {\n  border: none;\n}\n\n.music__container {\n  display: flex;\n  justify-content: center;\n  background-color: rgba(179, 42, 115, 0.7882352941);\n  border-radius: 15px;\n  padding: 20px;\n  width: 100%;\n  max-width: 300px;\n}\n\n.volume__icon {\n  position: relative;\n  top: 5px;\n  width: 35px;\n  height: 35px;\n  margin: 10px 0 10px 20px !important;\n  background: url(\"https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/Sounds/volume-purple.png\") 0% 100%/100% 100% no-repeat;\n}\n\n.radio {\n  width: 15vh;\n  border-radius: 50px !important;\n  background: linear-gradient(to right, #b81e88, #924eb8);\n  box-shadow: 2px 3px 5px rgb(16, 16, 16);\n  color: #fff !important;\n}\n\n.auth-icon {\n  display: none;\n  width: 9vh;\n  height: 9vh;\n  margin: 1vh 3vh;\n  border-radius: 50px;\n  background: url(\"https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/user.png\") 0% 0%/100% 100% no-repeat;\n  animation: blinkUser 3s infinite;\n}\n\n.auth-icon:hover {\n  cursor: pointer;\n}\n\n.account {\n  font-size: 0.55rem;\n  color: #fff;\n  position: relative;\n  top: 9vh;\n  text-align: center;\n}\n\n@keyframes blinkUser {\n  50% {\n    box-shadow: 0px 0px 10px 5px #ffffff;\n  }\n}\n@media screen and (max-width: 915px) {\n  .bg,\n  .bg-night {\n    height: 117%;\n    background-size: auto 117vh;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/coffeeMachineFront.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AACF;;AACA;EACE,kBAAA;EACA,aAAA;EACA,YAAA;EACA,kDAAA;EACA,WAAA;EACA,mBAAA;EACA,aAAA;EACA,iBAAA;AAEF;;AAAA;EACE,kBAAA;EACA,sBAAA;EACA,YAAA;EACA,mBAAA;EACA,oIAAA;AAGF;;AADA;EACE,UAAA;EACA,WAAA;EACA,4BAAA;EACA,aAAA;EACA,8BAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;AAIF;;AAFA;EACE,2BAAA;AAKF;;AAHA;EACE,UAAA;EACA,WAAA;EACA,mBAAA;EACA,oCAAA;EACA,aAAA;EACA,iBAAA;EACA,0HAAA;AAMF;;AAJA;EACE,oCAAA;AAOF;;AALA;EACE,kBAAA;EACA,SAAA;EACA,UAAA;AAQF;;AANA;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;AASF;;AAPA;EACE,wBAAA;AAUF;;AARA;EACE,kBAAA;AAWF;;AATA;EACE,WAAA;EACA,YAAA;EACA,sBAAA;EACA,6BAAA;AAYF;;AAVA;EACE,sBAAA;AAaF;;AAXA;EACE,UAAA;EACA,WAAA;EACA,sBAAA;EACA,6BAAA;EACA,qBAAA;EACA,gBAAA;AAcF;;AAZA;EACE,UAAA;EACA,aAAA;AAeF;;AAbA;EACE,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;EACA,OAAA;EACA,aAAA;EACA,sBAAA;AAgBF;;AAdA;EACE,kBAAA;EACA,SAAA;EACA,kBAAA;AAiBF;;AAfA;EACE,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,WAAA;EACA,WAAA;AAkBF;;AAhBA;EACE,UAAA;EACA,WAAA;EACA,4CAAA;EACA,mBAAA;EACA,eAAA;AAmBF;;AAjBA;EACE,yBAAA;EACA,mCAAA;AAoBF;;AAlBA;EACE,UAAA;EACA,aAAA;EACA,6HAAA;AAqBF;;AAnBA;EACE,UAAA;EACA,WAAA;EACA,8HAAA;AAsBF;;AApBA;EACE,UAAA;EACA,WAAA;EACA,6HAAA;AAuBF;;AArBA;EACE,WAAA;EACA,WAAA;EACA,kBAAA;AAwBF;;AAtBA;EACE,WAAA;EACA,WAAA;EACA,4BAAA;AAyBF;;AAvBA;EACE,aAAA;EACA,kBAAA;EACA,aAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;AA0BF;;AAxBA;EACE,YAAA;AA2BF;;AAzBA;EACE,aAAA;EACA,uBAAA;EACA,kDAAA;EACA,mBAAA;EACA,aAAA;EACA,WAAA;EACA,gBAAA;AA4BF;;AA1BA;EACE,kBAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,mCAAA;EACA,4IAAA;AA6BF;;AA3BA;EACE,WAAA;EACA,8BAAA;EACA,uDAAA;EACA,uCAAA;EACA,sBAAA;AA8BF;;AA5BA;EACE,aAAA;EACA,UAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;EACA,0HAAA;EACA,gCAAA;AA+BF;;AA7BA;EACE,eAAA;AAgCF;;AA9BA;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,QAAA;EACA,kBAAA;AAiCF;;AA/BA;EACE;IAAK,oCAAA;EAmCL;AACF;AAjCA;EAEE;;IAEE,YAAA;IACA,2BAAA;EAkCF;AACF","sourcesContent":[".container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.invitation {\r\n  position: relative;\r\n  display: flex;\r\n  margin: 20px;\r\n  background-color: #89607ccf;\r\n  color: #fff;\r\n  border-radius: 20px;\r\n  padding: 15px;\r\n  font-size: 1.2rem;\r\n}\r\n.machine {\r\n  position: relative;\r\n  width: calc(70vh / 1.5);\r\n  height: 70vh;\r\n  border-radius: 10px;\r\n  background: url('https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/design/machine-front1.png') 50% / 100% no-repeat;\r\n}\r\n.control {\r\n  width: 93%;\r\n  height: 27%;\r\n  border-radius: 10px 10px 0 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 5% 4%;\r\n  margin-top: 12%;\r\n  margin-left: 4%;\r\n}\r\n.onBtn {\r\n  margin-left: 15% !important;\r\n}\r\n.container__left > button {\r\n  width: 3vh;\r\n  height: 3vh;\r\n  border-radius: 25px;\r\n  box-shadow: 1px 1px 10px 4px #ff0000;\r\n  padding: 0 2%;\r\n  margin-right: 5px;\r\n  background: url('https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/on.png') 100% 100%/100% 100% no-repeat;\r\n}\r\n.container__left > button[aria-pressed=\"true\"] {\r\n  box-shadow: 1px 1px 10px 4px #008000;\r\n}\r\n.container__left {\r\n  position: relative;\r\n  top: -5px;\r\n  width: 20%;\r\n}\r\n.control__middle {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  height: 100%;\r\n  width: 100%;\r\n  margin-top: 1px;\r\n}\r\n.hidden {\r\n  display: none !important;\r\n}\r\n.control__middle > button {\r\n  border-radius: 4px;\r\n}\r\n.drink__picture {\r\n  width: 100%;\r\n  height: 120%;\r\n  background-color: #000;\r\n  border-radius: 4px !important;\r\n}\r\n.drink__picture:hover {\r\n  border: 1px solid #000;\r\n}\r\n.drink {\r\n  width: 27%;\r\n  height: 48%;\r\n  background-color: #000;\r\n  border-radius: 4px !important;\r\n  padding: 0 !important;\r\n  overflow: hidden;\r\n}\r\n.control__right {\r\n  width: 78%;\r\n  display: flex;\r\n}\r\n.control__screen {\r\n  width: 100%;\r\n  color: rgb(227, 214, 214);\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  font-size: 0.9rem;\r\n  line-height: 100%;\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.message {\r\n  position: relative;\r\n  top: -5px;\r\n  text-align: center;\r\n}\r\n.indicators {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  height: 30%;\r\n  width: 100%;\r\n}\r\n.indicator {\r\n  width: 1vh;\r\n  height: 1vh;\r\n  background-color: rgba(109, 103, 103, 0.721);\r\n  border-radius: 25px;\r\n  margin: 15% 11%;\r\n}\r\n.active {\r\n  background-color: #ff0000;\r\n  box-shadow: 0px 0px 4px 2px #ff0000;\r\n}\r\n.icon__water {\r\n  width: 4vh;\r\n  height: 1.5vh;\r\n  background: url('https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/water.png') 100% 100%/100% 100% no-repeat;\r\n}\r\n.icon__beans {\r\n  width: 3vh;\r\n  height: 3vh;\r\n  background: url('https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/grains.png') 100% 100%/100% 100% no-repeat;\r\n}\r\n.icon__waste {\r\n  width: 3vh;\r\n  height: 3vh;\r\n  background: url('https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/waste.png') 100% 100%/100% 100% no-repeat;\r\n}\r\n.placeForCup {\r\n  width: 100%;\r\n  height: 52%;\r\n  position: relative;\r\n}\r\n.shelf {\r\n  width: 100%;\r\n  height: 10%;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n.cup {\r\n  display: none;\r\n  position: absolute;\r\n  bottom: -11vh;\r\n  left: calc((70vh / 1.2 / 2) - 17.5vh);\r\n  width: 35vh;\r\n  height: 35vh;\r\n}\r\nbutton {\r\n  border: none;\r\n}\r\n.music__container {\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: #b32a73c9;\r\n  border-radius: 15px;\r\n  padding: 20px;\r\n  width: 100%;\r\n  max-width: 300px;\r\n}\r\n.volume__icon {\r\n  position: relative;\r\n  top: 5px;\r\n  width: 35px;\r\n  height: 35px;\r\n  margin: 10px 0 10px 20px !important;\r\n  background: url('https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/Sounds/volume-purple.png') 0% 100% / 100% 100% no-repeat;\r\n}\r\n.radio {\r\n  width: 15vh;\r\n  border-radius: 50px !important;\r\n  background: linear-gradient(to right, #b81e88, #924eb8);\r\n  box-shadow: 2px 3px 5px rgb(16, 16, 16);\r\n  color: #fff !important;\r\n}\r\n.auth-icon {\r\n  display: none;\r\n  width: 9vh;\r\n  height: 9vh;\r\n  margin: 1vh 3vh;\r\n  border-radius: 50px;\r\n  background: url('https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/user.png') 0% 0% / 100% 100% no-repeat;\r\n  animation: blinkUser 3s infinite;\r\n}\r\n.auth-icon:hover {\r\n  cursor: pointer;\r\n}\r\n.account {\r\n  font-size: 0.55rem;\r\n  color: #fff;\r\n  position: relative;\r\n  top: 9vh;\r\n  text-align: center;\r\n}\r\n@keyframes blinkUser {\r\n  50% {box-shadow: 0px 0px 10px 5px #ffffff;}\r\n}\r\n\r\n@media screen and (max-width: 915px) {\r\n\r\n  .bg,\r\n  .bg-night {\r\n    height: 117%;\r\n    background-size: auto 117vh;\r\n  }\r\n\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfY29mZmVlTWFjaGluZUZyb250X2NvZmZlZU1hY2hpbmVGcm9udF90c3guOWYzNDJiMDZiZTRkOWU5OWZiZjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLElBQUlBLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0IsQ0FBYUMsT0FBTyxFQUFFQyxLQUFLLEVBQUU7RUFDdEQsSUFBSUMsR0FBRyxHQUFHRCxLQUFLLENBQUNDLEdBQUc7SUFBRUMsSUFBSSxHQUFHRixLQUFLLENBQUNFLElBQUk7SUFBRUMsS0FBSyxHQUFHSCxLQUFLLENBQUNHLEtBQUs7SUFBRUMsTUFBTSxHQUFHSixLQUFLLENBQUNJLE1BQU07SUFBRUMsT0FBTyxHQUFHTCxLQUFLLENBQUNLLE9BQU87SUFBRUMsVUFBVSxHQUFHTixLQUFLLENBQUNNLFVBQVU7SUFBRUMsU0FBUyxHQUFHUCxLQUFLLENBQUNPLFNBQVM7SUFBRUMsT0FBTyxHQUFHUixLQUFLLENBQUNRLE9BQU87SUFBRUMsUUFBUSxHQUFHVCxLQUFLLENBQUNTLFFBQVE7RUFDM04sSUFBSUMsR0FBRyxHQUFHLElBQUlDLElBQUksRUFBRTtFQUNwQkQsR0FBRyxDQUFDRSxPQUFPLENBQUNGLEdBQUcsQ0FBQ0csT0FBTyxFQUFFLEdBQUdQLFVBQVUsR0FBRyxJQUFJLENBQUM7RUFDOUMsSUFBSVEsR0FBRyxHQUFHSixHQUFHLENBQUNLLFVBQVUsRUFBRTtFQUMxQixJQUFJQyxHQUFHLEdBQUdOLEdBQUcsQ0FBQ08sVUFBVSxFQUFFO0VBQzFCLElBQUlDLElBQUksR0FBR1YsT0FBTyxHQUFHRSxHQUFHLENBQUNTLFFBQVEsRUFBRSxHQUFHVCxHQUFHLENBQUNTLFFBQVEsRUFBRSxHQUFHLEVBQUU7RUFDekQsSUFBSUMsUUFBUSxHQUFHLEdBQUc7RUFDbEIsSUFBSUYsSUFBSSxHQUFHLEVBQUUsRUFDVEEsSUFBSSxHQUFHLEdBQUcsR0FBR0EsSUFBSSxDQUFDRyxRQUFRLEVBQUU7RUFDaEMsSUFB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aUI7QUFDckIsTUFBTSxxUUFBK0g7QUFDckksTUFBTTtBQUFBO0FBQ04sc0RBQXNELHVJQUFXLEdBQUcseUpBQWM7QUFDbEYsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUEsMENBQTBDLHVJQUFXLEdBQUcseUpBQWM7O0FBRXRFLHFCQUFxQixrSkFBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7O0FBRzhJO0FBQzlJLE9BQU8saUVBQWUsa0pBQU8sSUFBSSx5SkFBYyxHQUFHLHlKQUFjLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvY2FudmFzQ2xvY2svZGlnaXQudHMiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jYW52YXNDbG9jay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jb2ZmZWVNYWNoaW5lRnJvbnQvYWRkSW5kaWNhdG9ycy50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jb2ZmZWVNYWNoaW5lRnJvbnQvY2hlY2tSZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jb2ZmZWVNYWNoaW5lRnJvbnQvY29mZmVlTWFjaGluZUZyb250LnRzeCIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2NvZmZlZU1hY2hpbmVGcm9udC9tYW5hZ2VSZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jb2ZmZWVNYWNoaW5lRnJvbnQvb25PZmZCdG4udHN4Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvY29mZmVlTWFjaGluZUZyb250L3N0YXJ0UHJlcGFyYXRpb24udHMiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jdXAvYWRkQ3VwLnRzIiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvY3VwL2N1cC50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jdXAvZmlsbEN1cC50cyIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2N1cC9maW5pc2hQcmVwYXJhdGlvbi50cyIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2N1cC9zdGVhbS50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9zb3VuZC9hbGxTb3VuZHMudHMiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvcHJvdmlkZXJzL2RyaW5rcy9kcmlua3MudHN4Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvY2FudmFzQ2xvY2svY2FudmFzQ2xvY2suc2NzcyIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9zdHlsZXMvY29mZmVlTWFjaGluZUZyb250LnNjc3MiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvc3R5bGVzL2N1cC5zY3NzIiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvY2FudmFzQ2xvY2svY2FudmFzQ2xvY2suc2Nzcz9jYzJjIiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL3N0eWxlcy9jb2ZmZWVNYWNoaW5lRnJvbnQuc2Nzcz9kMTU1Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL3N0eWxlcy9jdXAuc2Nzcz9mY2I5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgcmVuZGVyRGlnaXRhbENsb2NrID0gZnVuY3Rpb24gKGNvbnRleHQsIHByb3BzKSB7XHJcbiAgICB2YXIgdG9wID0gcHJvcHMudG9wLCBsZWZ0ID0gcHJvcHMubGVmdCwgd2lkdGggPSBwcm9wcy53aWR0aCwgaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0LCBiZ0NvbG9yID0gcHJvcHMuYmdDb2xvciwgdGltZW9mZnNldCA9IHByb3BzLnRpbWVvZmZzZXQsIGRpYWxDb2xvciA9IHByb3BzLmRpYWxDb2xvciwgdGltZTI0aCA9IHByb3BzLnRpbWUyNGgsIGZvbnRTaXplID0gcHJvcHMuZm9udFNpemU7XHJcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIG5vdy5zZXRUaW1lKG5vdy5nZXRUaW1lKCkgKyB0aW1lb2Zmc2V0ICogMTAwMCk7XHJcbiAgICB2YXIgc2VjID0gbm93LmdldFNlY29uZHMoKTtcclxuICAgIHZhciBtaW4gPSBub3cuZ2V0TWludXRlcygpO1xyXG4gICAgdmFyIGhvdXIgPSB0aW1lMjRoID8gbm93LmdldEhvdXJzKCkgOiBub3cuZ2V0SG91cnMoKSAlIDEyO1xyXG4gICAgdmFyIHNlY0JsaW5rID0gJzonO1xyXG4gICAgaWYgKGhvdXIgPCAxMClcclxuICAgICAgICBob3VyID0gJzAnICsgaG91ci50b1N0cmluZygpO1xyXG4gICAgaWYgKG1pbiA8IDEwKVxyXG4gICAgICAgIG1pbiA9ICcwJyArIG1pbjtcclxuICAgIGlmIChzZWMgPCAxMClcclxuICAgICAgICBzZWMgPSAnMCcgKyBzZWM7XHJcbiAgICBpZiAoTnVtYmVyKHNlYykgJSAyID09PSAwKSB7XHJcbiAgICAgICAgc2VjQmxpbmsgPSAnOic7XHJcbiAgICB9XHJcbiAgICBjb250ZXh0LmNsZWFyUmVjdChsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYmdDb2xvcjtcclxuICAgIGNvbnRleHQucmVjdCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29udGV4dC5maWxsKCk7XHJcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBkaWFsQ29sb3I7XHJcbiAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgY29udGV4dC5mb250ID0gZm9udFNpemUgKyAncHggRGlnaXRhbE51bWJlcnMnO1xyXG4gICAgY29udGV4dC5maWxsVGV4dChob3VyICsgc2VjQmxpbmsgKyBtaW4gKyAnOicgKyBzZWMsIHdpZHRoIC8gNCwgaGVpZ2h0IC8gMi41KTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVuZGVyRGlnaXRhbENsb2NrKGNvbnRleHQsIHByb3BzKTsgfSwgNTApO1xyXG59O1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9jYW52YXNDbG9jay5zY3NzJztcclxuaW1wb3J0IHsgcmVuZGVyRGlnaXRhbENsb2NrIH0gZnJvbSAnY29tcG9uZW50cy9jYW52YXNDbG9jay9kaWdpdCc7XHJcbnZhciBDYW52YXNDbG9jayA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IF9fYXNzaWduKHsgc2l6ZTogMjAwLCBiZ0NvbG9yOiAnIzRkNGQ0ZCcsIHRpbWVvZmZzZXQ6IDAsIGRpYWxDb2xvcjogJyMwMGZmMDUnLCB0aW1lMjRoOiB0cnVlIH0sIHByb3BzKTtcclxuICAgIHZhciBpZCA9IGRlZmF1bHRQcm9wcy5pZCwgd2lkdGggPSBkZWZhdWx0UHJvcHMud2lkdGgsIGhlaWdodCA9IGRlZmF1bHRQcm9wcy5oZWlnaHQ7XHJcbiAgICB2YXIgY2FudmFzUmVmID0gdXNlUmVmKCk7XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICByZW5kZXJEaWdpdGFsQ2xvY2soY29udGV4dCwgZGVmYXVsdFByb3BzKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogX2pzeChcImNhbnZhc1wiLCB7IHJlZjogY2FudmFzUmVmLCBpZDogaWQsIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSkgfSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDYW52YXNDbG9jaztcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyBhZGRXYXRlciwgYWRkQmVhbnMsIGVtcHR5V2FzdGVDb250YWluZXIgfSBmcm9tICcuL21hbmFnZVJlc291cmNlcyc7XHJcbmZ1bmN0aW9uIEFkZEluZGljYXRvcnMoKSB7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImluZGljYXRvcnNcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJpbmRpY2F0b3IgaW5kaWNhdG9yX193YXRlclwiIH0pLCBfanN4KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBcImljb24gaWNvbl9fd2F0ZXJcIiwgb25DbGljazogYWRkV2F0ZXIgfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaW5kaWNhdG9yIGluZGljYXRvcl9fYmVhbnNcIiB9KSwgX2pzeChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogXCJpY29uIGljb25fX2JlYW5zXCIsIG9uQ2xpY2s6IGFkZEJlYW5zIH0pLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImluZGljYXRvciBpbmRpY2F0b3JfX3dhc3RlXCIgfSksIF9qc3goXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IFwiaWNvbiBpY29uX193YXN0ZVwiLCBvbkNsaWNrOiBlbXB0eVdhc3RlQ29udGFpbmVyIH0pXSB9KSkpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFkZEluZGljYXRvcnM7XHJcbiIsImltcG9ydCB7IHdhdGVyLCBiZWFucywgd2FzdGVQbGFjZSB9IGZyb20gJy4vbWFuYWdlUmVzb3VyY2VzJztcclxuZnVuY3Rpb24gY2hlY2tSZXNvdXJjZXMoKSB7XHJcbiAgICB2YXIgcmVzb3VyY2VzID0gW3dhdGVyLCBiZWFucywgd2FzdGVQbGFjZV07XHJcbiAgICB2YXIgaW5kaWNhdG9ycyA9IFtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5kaWNhdG9yX193YXRlcicpLFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmRpY2F0b3JfX2JlYW5zJyksXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZGljYXRvcl9fd2FzdGUnKVxyXG4gICAgXTtcclxuICAgIHZhciBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xyXG4gICAgbXNnLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdmFyIG1zZ05vUmVzb3VyY2VzID0gWydBZGQgd2F0ZXIgKHByZXNzIFwiV1wiKS4gJywgJ0FkZCBjb2ZmZWUgYmVhbnMgKHByZXNzIFwiQlwiKS4gJywgJ0VtcHR5IHdhc3RlIGNvbnRhaW5lciAocHJlc3MgXCJFXCIpLiddO1xyXG4gICAgdmFyIGRyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sX19taWRkbGUnKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKCFyZXNvdXJjZXNbaV0pIHtcclxuICAgICAgICAgICAgaW5kaWNhdG9yc1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbXNnLmlubmVySFRNTCArPSBtc2dOb1Jlc291cmNlc1tpXTtcclxuICAgICAgICAgICAgZHJpbmtzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjaGVja1Jlc291cmNlcztcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgJ3N0eWxlcy9jb2ZmZWVNYWNoaW5lRnJvbnQuc2Nzcyc7XHJcbmltcG9ydCBUdXJuT25PZmYgZnJvbSAnLi9vbk9mZkJ0bic7XHJcbmltcG9ydCBBZGRJbmRpY2F0b3JzIGZyb20gJy4vYWRkSW5kaWNhdG9ycyc7XHJcbmltcG9ydCBDdXAgZnJvbSAnLi4vY3VwL2N1cCc7XHJcbmltcG9ydCAnc3R5bGVzL2N1cC5zY3NzJztcclxuaW1wb3J0IFN0ZWFtIGZyb20gJy4uL2N1cC9zdGVhbSc7XHJcbmltcG9ydCBEcmlua3MgZnJvbSAncHJvdmlkZXJzL2RyaW5rcy9kcmlua3MnO1xyXG5pbXBvcnQgQ2FudmFzQ2xvY2sgZnJvbSAnY29tcG9uZW50cy9jYW52YXNDbG9jayc7XHJcbnZhciBDb2ZmZWVNYWNoaW5lRnJvbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1hY2hpbmVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udHJvbFwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXJfX2xlZnRcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChUdXJuT25PZmYsIHt9KSwgX2pzeChBZGRJbmRpY2F0b3JzLCB7fSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udHJvbF9fcmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChEcmlua3MsIHt9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udHJvbF9fc2NyZWVuXCIgfSwgeyBjaGlsZHJlbjogW19qc3goQ2FudmFzQ2xvY2ssIHsgaWQ6IFwiY2FudmFzXCIsIHRvcDogXCIxMFwiLCBsZWZ0OiBcIi0xM1wiLCB3aWR0aDogXCIyMDBcIiwgaGVpZ2h0OiBcIjI5XCIsIGZvbnRTaXplOiBcIjEyXCIsIGRpYWxDb2xvcjogXCJyZ2IoMjI3LCAyMTQsIDIxNClcIiwgYmdDb2xvcjogXCIjYTE3ZDhiXCIgfSksIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1lc3NhZ2VcIiB9LCB7IGNoaWxkcmVuOiBcIlR1cm4gb24gdGhlIGNvZmZlZSBtYWNoaW5lXCIgfSkpXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYXV0aC1pY29uXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYWNjb3VudFwiIH0sIHsgY2hpbGRyZW46IFwiTXkgQWNjb3VudFwiIH0pKSB9KSldIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwbGFjZUZvckN1cFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImxpcXVpZFwiIH0pLCBfanN4KFN0ZWFtLCB7fSksIF9qc3goQ3VwLCB7fSldIH0pKSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzaGVsZlwiIH0pXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDb2ZmZWVNYWNoaW5lRnJvbnQ7XHJcbiIsImltcG9ydCBDaGVja1Jlc291cmNlcyBmcm9tICcuL2NoZWNrUmVzb3VyY2VzJztcclxuaW1wb3J0IHsgc291bmQgfSBmcm9tIFwiLi4vc291bmQvYWxsU291bmRzXCI7XHJcbmV4cG9ydCB2YXIgd2F0ZXIgPSAxO1xyXG5leHBvcnQgdmFyIGJlYW5zID0gMjtcclxuZXhwb3J0IHZhciB3YXN0ZVBsYWNlID0gMTtcclxuZnVuY3Rpb24gb3BlbkRyaW5rQ2hvaWNlKCkge1xyXG4gICAgaWYgKHdhdGVyICYmIGJlYW5zICYmIHdhc3RlUGxhY2UpIHtcclxuICAgICAgICB2YXIgZHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xfX21pZGRsZScpO1xyXG4gICAgICAgIGRyaW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB2YXIgc2NyZWVuXzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbF9fc2NyZWVuJyk7XHJcbiAgICAgICAgc2NyZWVuXzEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkV2F0ZXIoKSB7XHJcbiAgICBpZiAoIXdhdGVyKVxyXG4gICAgICAgIHNvdW5kLnBsYXkoJ3dhdGVyJyk7XHJcbiAgICB3YXRlciA9IDE7XHJcbiAgICB2YXIgaW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZGljYXRvcl9fd2F0ZXInKTtcclxuICAgIGluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIENoZWNrUmVzb3VyY2VzKCk7XHJcbiAgICBvcGVuRHJpbmtDaG9pY2UoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQmVhbnMoKSB7XHJcbiAgICBpZiAoIWJlYW5zKVxyXG4gICAgICAgIHNvdW5kLnBsYXkoJ2dyYWlucycpO1xyXG4gICAgYmVhbnMgPSAyO1xyXG4gICAgdmFyIGluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmRpY2F0b3JfX2JlYW5zJyk7XHJcbiAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBDaGVja1Jlc291cmNlcygpO1xyXG4gICAgb3BlbkRyaW5rQ2hvaWNlKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5V2FzdGVDb250YWluZXIoKSB7XHJcbiAgICBpZiAoIXdhc3RlUGxhY2UpXHJcbiAgICAgICAgc291bmQucGxheSgnY29udGFpbmVyJyk7XHJcbiAgICB3YXN0ZVBsYWNlID0gMTtcclxuICAgIHZhciBpbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5kaWNhdG9yX193YXN0ZScpO1xyXG4gICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgQ2hlY2tSZXNvdXJjZXMoKTtcclxuICAgIG9wZW5Ecmlua0Nob2ljZSgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VSZXNvdXJjZXMoKSB7XHJcbiAgICB3YXRlci0tO1xyXG4gICAgYmVhbnMtLTtcclxuICAgIHdhc3RlUGxhY2UtLTtcclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PSAnS2V5VycpXHJcbiAgICAgICAgYWRkV2F0ZXIoKTtcclxuICAgIGlmIChldmVudC5jb2RlID09ICdLZXlCJylcclxuICAgICAgICBhZGRCZWFucygpO1xyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0tleUUnKVxyXG4gICAgICAgIGVtcHR5V2FzdGVDb250YWluZXIoKTtcclxufSk7XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVG9nZ2xlQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHNvdW5kIH0gZnJvbSBcIi4uL3NvdW5kL2FsbFNvdW5kc1wiO1xyXG5leHBvcnQgdmFyIHR1cm5PZmY7XHJcbmZ1bmN0aW9uIFR1cm5Pbk9mZigpIHtcclxuICAgIHZhciBfYSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSwgc2VsZWN0ZWQgPSBfYVswXSwgc2V0U2VsZWN0ZWQgPSBfYVsxXTtcclxuICAgIHZhciBpbmRpY2F0b3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJyk7XHJcbiAgICB3aGlsZSAoaW5kaWNhdG9ycy5sZW5ndGgpIHtcclxuICAgICAgICBpbmRpY2F0b3JzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgdmFyIGludml0YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW52aXRhdGlvbicpO1xyXG4gICAgdmFyIGNob29zZU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hvb3NlX19tZXNzYWdlJyk7XHJcbiAgICB2YXIgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcclxuICAgIHZhciBkcmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbF9fbWlkZGxlJyk7XHJcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpO1xyXG4gICAgaWYgKG1zZyAmJiBtc2cuaW5uZXJIVE1MID09PSAnVHVybiBvbiB0aGUgY29mZmVlIG1hY2hpbmUnICYmIHNlbGVjdGVkKSB7XHJcbiAgICAgICAgbXNnLmlubmVySFRNTCA9ICdDaG9vc2UgY29mZmVlJztcclxuICAgICAgICBpbnZpdGF0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgY2hvb3NlTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobXNnICYmIG1vZGFsKSB7XHJcbiAgICAgICAgbXNnLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGRyaW5rcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG1zZyAmJiAhbW9kYWwpIHtcclxuICAgICAgICBtc2cuaW5uZXJIVE1MID0gJ1R1cm4gb24gdGhlIGNvZmZlZSBtYWNoaW5lJztcclxuICAgICAgICBkcmlua3MuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgaW52aXRhdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIGNob29zZU1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICAgIHZhciB0b2dnbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sX19taWRkbGUnKTtcclxuICAgICAgICB2YXIgc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xfX3NjcmVlbicpO1xyXG4gICAgICAgIHZhciBhdXRoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRoLWljb24nKTtcclxuICAgICAgICB2YXIgYXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRoJyk7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBpZiAobW9kYWwpIHtcclxuICAgICAgICAgICAgICAgIGF1dGhJY29uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgc2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBkcmlua3MuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXV0aClcclxuICAgICAgICAgICAgICAgICAgICBhdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBzY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGRyaW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGF1dGgpXHJcbiAgICAgICAgICAgICAgICBhdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICBkcmlua3MuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKCFzZWxlY3RlZCk7XHJcbiAgICAgICAgc291bmQucGxheSgnb25PZmYnKTtcclxuICAgICAgICB2YXIgYnRuID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghbW9kYWwpXHJcbiAgICAgICAgICAgICAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICBhdXRoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGF1dGgpXHJcbiAgICAgICAgICAgICAgICBhdXRoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdHVybk9mZiA9IHRvZ2dsZTtcclxuICAgIHJldHVybiAoX2pzeChUb2dnbGVCdXR0b24sIF9fYXNzaWduKHsgdmFsdWU6IFwiY2hlY2tcIiwgc2VsZWN0ZWQ6IHNlbGVjdGVkLCBvbkNoYW5nZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdG9nZ2xlKCk7IH0sIGNsYXNzTmFtZTogXCJvbkJ0blwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29udHJvbF9fb25PZmZcIiB9KSB9KSkpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFR1cm5Pbk9mZjtcclxuIiwiaW1wb3J0IENoZWNrUmVzb3VyY2VzIGZyb20gJy4vY2hlY2tSZXNvdXJjZXMnO1xyXG5pbXBvcnQgYWRkQ3VwIGZyb20gJy4uL2N1cC9hZGRDdXAnO1xyXG5pbXBvcnQgeyB3YXRlciwgYmVhbnMsIHdhc3RlUGxhY2UsIHJlZHVjZVJlc291cmNlcyB9IGZyb20gJy4vbWFuYWdlUmVzb3VyY2VzJztcclxuZnVuY3Rpb24gc3RhcnRQcmVwYXJhdGlvbigpIHtcclxuICAgIHZhciBkcmlua0J0bjtcclxuICAgIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluY2x1ZGVzKCdkcmluaycpKSB7XHJcbiAgICAgICAgZHJpbmtCdG4gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGRyaW5rQnRuID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgdmFyIGNvZmZlZSA9IGRyaW5rQnRuLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuICAgIHZhciBzaXplID0gZHJpbmtCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXNpemUnKTtcclxuICAgIHZhciBjb2xvciA9IGRyaW5rQnRuLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG4gICAgdmFyIHNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sX19zY3JlZW4nKTtcclxuICAgIHZhciBpc09uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uQnRuJykuZ2V0QXR0cmlidXRlKFwiYXJpYS1wcmVzc2VkXCIpO1xyXG4gICAgdmFyIGRyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sX19taWRkbGUnKTtcclxuICAgIGRyaW5rcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIHNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgdmFyIGN1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXAtY29udGFpbmVyJyk7XHJcbiAgICB2YXIgc3RlYW1PbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29mZmVlLW1lZGl1bV9fc21va2Utb25lJyk7XHJcbiAgICB2YXIgc3RlYW1Ud28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29mZmVlLW1lZGl1bV9fc21va2UtdHdvJyk7XHJcbiAgICBpZiAoc2l6ZSA9PT0gJ1MnKSB7XHJcbiAgICAgICAgY3VwQ29udGFpbmVyLnN0eWxlLmZsZXggPSAnMC40JztcclxuICAgICAgICBzdGVhbU9uZS5zdHlsZS5sZWZ0ID0gJzIydmgnO1xyXG4gICAgICAgIHN0ZWFtVHdvLnN0eWxlLnJpZ2h0ID0gJzMwdmgnO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2l6ZSA9PT0gJ00nKSB7XHJcbiAgICAgICAgY3VwQ29udGFpbmVyLnN0eWxlLmZsZXggPSAnMC41JztcclxuICAgICAgICBzdGVhbU9uZS5zdHlsZS5sZWZ0ID0gJzI1dmgnO1xyXG4gICAgICAgIHN0ZWFtVHdvLnN0eWxlLnJpZ2h0ID0gJzI3dmgnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY3VwQ29udGFpbmVyLnN0eWxlLmZsZXggPSAnMC42JztcclxuICAgICAgICBzdGVhbU9uZS5zdHlsZS5sZWZ0ID0gJzI4dmgnO1xyXG4gICAgICAgIHN0ZWFtVHdvLnN0eWxlLnJpZ2h0ID0gJzI1dmgnO1xyXG4gICAgfVxyXG4gICAgdmFyIGxpcXVpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMaXF1aWQnKTtcclxuICAgIHZhciBzdHJlYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlxdWlkJyk7XHJcbiAgICBsaXF1aWQuc3R5bGUuZmlsbCA9IGNvbG9yO1xyXG4gICAgc3RyZWFtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgdmFyIG1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpO1xyXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKCFtb2RhbClcclxuICAgICAgICAgICAgQ2hlY2tSZXNvdXJjZXMoKTtcclxuICAgICAgICBpZiAod2F0ZXIgPiAwICYmIGJlYW5zID4gMCAmJiB3YXN0ZVBsYWNlID4gMCkge1xyXG4gICAgICAgICAgICBhZGRDdXAoKTtcclxuICAgICAgICAgICAgIW1vZGFsID8gbXNnLmlubmVySFRNTCA9IFwiUHJlcGFyaW5nIFwiLmNvbmNhdChjb2ZmZWUsIFwiLi4uXCIpIDogbW9kYWwuaW5uZXJIVE1MICs9IGNvZmZlZTtcclxuICAgICAgICAgICAgdmFyIG9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb25CdG4nKTtcclxuICAgICAgICAgICAgb25CdG5bMF0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIW1vZGFsKVxyXG4gICAgICAgICAgICAgICAgcmVkdWNlUmVzb3VyY2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlzT24gPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgbW9kYWwgPyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgc3RhcnQoKTsgfSwgODAwMCkgOiBzdGFydCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0UHJlcGFyYXRpb247XHJcbiIsImltcG9ydCB7IHNvdW5kIH0gZnJvbSBcIi4uL3NvdW5kL2FsbFNvdW5kc1wiO1xyXG5pbXBvcnQgZmluaXNoUHJlcGFyYXRpb24gZnJvbSAnLi9maW5pc2hQcmVwYXJhdGlvbic7XHJcbmZ1bmN0aW9uIGFkZEN1cCgpIHtcclxuICAgIHZhciBjdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG4gICAgY3VwLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHZhciBzdGFydCA9IDA7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gbWVhc3VyZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID09PSAwKVxyXG4gICAgICAgICAgICBzdGFydCA9IHRpbWU7XHJcbiAgICAgICAgdmFyIHByb2dyZXNzID0gKHRpbWUgLSBzdGFydCkgLyA1MDA7XHJcbiAgICAgICAgdmFyIHRyYW5zbGF0ZSA9IHByb2dyZXNzICogNS41O1xyXG4gICAgICAgIGN1cC5zdHlsZS5tYXJnaW4gPSBcIjAgXCIuY29uY2F0KHRyYW5zbGF0ZSwgXCJ2aFwiKTtcclxuICAgICAgICBpZiAocHJvZ3Jlc3MgPCAxKVxyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWVhc3VyZSk7XHJcbiAgICB9KTtcclxuICAgIHNvdW5kLnBsYXkoJ2N1cC1vbi1zaGVsbCcpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc291bmQucGxheSgnbWFraW5nLWNvZmZlZScpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICBmaW5pc2hQcmVwYXJhdGlvbigpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGFkZEN1cDtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgJ3N0eWxlcy9jdXAuc2Nzcyc7XHJcbmZ1bmN0aW9uIEN1cCgpIHtcclxuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ3cmFwcGVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjdXAtY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJzdmdcIiwgX19hc3NpZ24oeyBpZDogXCJEcmF3aW5nXCIsIHZpZXdCb3g6IFwiMCAwIDE0MiAxMDhcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLCBjbGlwUnVsZTogXCJldmVub2RkXCIsIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIiwgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIiwgc3Ryb2tlTWl0ZXJsaW1pdDogXCIxLjVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcInBhdGhcIiwgeyBpZDogXCJQbGF0ZVwiLCBkOiBcIk0xOC4wMTUgOTQuNDM3YzcuNjEyIDEuNDU5IDM1Ljk2NSA1LjEyOCA1NC4yNyA1LjEyOCAxNC40IDAgMzkuNTE3LS45NDkgNTEuMjc3LTUuMTI4LjU3My0uMjA0LTEuMjkgNS45NjktNC44ODcgNy4wMDMtOC4wMTIgMi4zMDMtMjcuMjc3IDUuMTU1LTQ2LjM5IDQuOTItMTUuMDU0LS4xODQtNDEuMzc4LTMuMDkyLTUwLjQ4Ni00LjkyLTMuNDk4LS43MDMtNC43MjEtNy4xODMtMy43ODQtNy4wMDN6TTcwLjg0IDY2Ljc2YzM4LjU0NiAwIDY5Ljg0IDcuMzUgNjkuODQgMTYuNDAzIDAgOS4wNTItMzEuMjk0IDE2LjQwMi02OS44NCAxNi40MDJDMzIuMjk0IDk5LjU2NSAxIDkyLjIxNSAxIDgzLjE2MyAxIDc0LjExIDMyLjI5NCA2Ni43NiA3MC44NCA2Ni43NnpcIiwgZmlsbDogXCJub25lXCIsIHN0cm9rZTogXCJ1cmwoI19MaW5lYXIxKVwiLCBzdHJva2VXaWR0aDogXCIyXCIgfSksIF9qc3goXCJwYXRoXCIsIHsgaWQ6IFwiTXVnXCIsIGQ6IFwiTTYyLjI1NSAxLjM5OEM2Ni4wNyAxLjEzOSA3MC4xMjEgMSA3NC4zMiAxYzE2LjYzOSAwIDMwLjk3MiAyLjE4OSAzNy4zNjUgNS4zMjggMS4zMTUuNDg2IDIuMzc5Ljk3NiAzLjE2NSAxLjQ1MyAyLjEyNSAxLjI5MiAzLjIzNiA2LjMzNCAyLjgzNCAxNC40MjNsLjEwMi0uMDEyLjA0MS0uNDc3LS4wMzIuNDc2LS4wMDkuMDAxYy0uNDU4IDUuMjUxLTEuNjc0IDE4LjUzNC0yLjIxNiAyMy44NGEzMDYuMjczIDMwNi4yNzMgMCAwMS0uNzMyIDYuNDY3IDg0NS4yMTkgODQ1LjIxOSAwIDAxLTEuMjQ4IDguOTZjLTIuNjE3IDE2Ljg1Ni02LjMzMyAzMC41MzUtOS41MjkgMzEuNzY4LTkuMzIzIDMuNTk4LTE3LjI4MyA1LjI1OC0yOS4zMzQgNS4zNTEtMTYuNDkyLjEyNy0zMi4zOTUtMi42MDUtMzYuNzg2LTQuMTUxLTQuNDg1LTEuNTc4LTcuODExLTMxLjc1OS04LjIwNC00OC42MzUtLjQ0MS0xOC45NjQuODMtMzQuMTE5IDQuMDgtMzcuMDUxIDQuNTE1LTQuMDcxIDE0LjQ4OC02LjgxIDI4LjQzOC03LjM0M3ptNTUuNTQgMjAuNzkzYzEuNjM0LS4xNzIgMTIuMTQ5LS42ODMgMTUuODA0IDQuMDg0IDcuNDM3IDkuNzAxIDMuMTMzIDMyLjQwMy00LjA4IDQxLjA3Ni0yLjIyOCAyLjY3OS0xNy4xMTYgMi4xNi0xNy4xMTYgMi4xNnMuNTMzLTMuNTEyIDEuMTg3LTguMDUyYy40NTItMi45MDguODcxLTUuOTExIDEuMjQ4LTguOTYuMzI5LTIuNDY4LjYyMy00LjgwNi44My02LjY5LjQzLTMuOTI2IDEuNzU4LTE4LjIxMyAyLjEyNy0yMy42MTh6bS02LjExLTE1Ljg2M0MxMDQuNjMzIDMuNzIxIDkyLjI2MiAxIDc0LjcyNyAxYy0zLjcxMSAwLTkuMTU3LjI3MS0xMi40NzIuMzk4QzQ1LjU1MiAyLjUzMiAzMi42OCA2LjQzNiAzMi42OCAxMC40OGMwIDMuMzQzIDkuMDI0IDUuNzgyIDIxLjMzOSA3LjMzNEM2MC4wMDMgMTguNTY5IDY2LjkzNCAxOSA3NC4zMiAxOWMyMi41ODQgMCA0MC45Mi00LjAzMyA0MC45Mi05IDAtMS4zMDgtMS4yNzEtMi41NS0zLjU1NS0zLjY3MnpcIiwgZmlsbDogXCJub25lXCIsIHN0cm9rZTogXCJ1cmwoI19MaW5lYXIyKVwiLCBzdHJva2VXaWR0aDogXCIyXCIgfSksIF9qc3goXCJjbGlwUGF0aFwiLCBfX2Fzc2lnbih7IGlkOiBcIl9jbGlwM1wiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJwYXRoXCIsIHsgaWQ6IFwiTGlxdWlkLUNsaXBcIiwgZDogXCJNMTEwLjk4NiA1OC42ODRjLTEuODMxIDEyLjk2OS03LjA2OSAyNy4xMTQtNy45NDkgMjkuMzEzLS42MDMgMS41MDkuNTkyIDIuNDM5LjMyNiAzLjA3LTEuMTQ3IDIuNzI5LTE1LjEyNCA2Ljk4Ni0yOS44MTMgNy4wMzEtMTIuNDEzLjAzNy0zMy4zNjYtMi4zNjItMzYuMDY3LTQuODcxLTIuMzM3LTIuMTcxLTYuODI3LTI5LjU5Ni03LjAwMy00Ni40NzUtLjIxLTIwLjAyNi4zNi0yOC4yMzcgMS45MTgtMzQuMDQ3LjA2Mi0uMjMzIDUuNTU3IDMuMzQ0IDE2LjQ0MSA1LjIyOSAxMC45OTcgMS45MDQgMzMuNTQ1IDIuMDAyIDM3LjM4MSAxLjY3NyA3Ljg5OC0uNjY4IDE5LjU1MS0yLjI0NCAyNS45NjYtNS4xMS45OTctLjQ0NSAxLjYwMiAyNC4zMzQtMS4yIDQ0LjE4M3pcIiB9KSB9KSksIF9qc3goXCJnXCIsIF9fYXNzaWduKHsgY2xpcFBhdGg6IFwidXJsKCNfY2xpcDMpXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJnXCIsIF9fYXNzaWduKHsgaWQ6IFwiQ29mZmVlXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJwYXRoXCIsIHsgaWQ6IFwiTGlxdWlkXCIsIGQ6IFwiTTE2LjA2MyA1OS4yMzJjOC44NDUtMy45NTkgMzUuNy00Ljk1MiA1NC45NzctNC45NTIgMjEuMjEgMCA1My43MDkgMi4zOTUgNjEuMjIxIDYuNjg0IDkuMzg3IDUuMzU5LTIxLjE1IDQyLjk2Mi0yMS4xNSA0Mi45NjJsLTgxLjQ2Ny0xLjk4MVM2LjI4MSA2My42MSAxNi4wNjMgNTkuMjMyelwiLCBmaWxsOiBcIiM0NDM1MzBcIiB9KSwgX2pzeChcImdcIiwgX19hc3NpZ24oeyBjbGlwUGF0aDogXCJ1cmwoI19jbGlwNClcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZWxsaXBzZVwiLCB7IGN4OiBcIjcxLjk4MlwiLCBjeTogXCI1NS45NzVcIiwgcng6IFwiNDAuNzAxXCIsIHJ5OiBcIjYuMTRcIiwgZmlsbDogXCIjZGYxNDhhXCIsIGZpbGxPcGFjaXR5OiBcIi4xNVwiIH0pIH0pKV0gfSkpIH0pKSwgX2pzeChcInBhdGhcIiwgeyBpZDogXCJTaGFkb3dcIiwgZDogXCJNOTYuMzgzIDIuOTJjMy45NiAwIDEuMzQ3IDgxLjQwOC00LjggODMuNTItMy4xNDIgMS4wOC0xOC4zOCAxMC4yMDUtMzQuNTYgMTEuNTItMi44NzcuMjM0IDIwLjU3IDIuMzAyIDI2LjI3OSAxLjY1MSA4LjQ5My0uOTY5IDE2Ljc0NS0xLjI5NCAyMy44ODEtNS43MzEgOC42MzYtMTguNDQ0IDExLjczLTU0LjYzNCA5LjYtODQuOTYgMCAwLTQuNDYzLTEuNDk2LTYuNzItMi4xNi0zLjQtMS0xMy42OC0zLjg0LTEzLjY4LTMuODR6XCIsIGZpbGw6IFwiIzM0MDA0NFwiLCBmaWxsT3BhY2l0eTogXCIuMTNcIiB9KSwgX2pzeHMoXCJkZWZzXCIsIHsgY2hpbGRyZW46IFtfanN4KFwiY2xpcFBhdGhcIiwgX19hc3NpZ24oeyBpZDogXCJfY2xpcDRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwicGF0aFwiLCB7IGQ6IFwiTTE2LjA2MyA1OS4yMzJjOC44NDUtMy45NTkgMzUuNy00Ljk1MiA1NC45NzctNC45NTIgMjEuMjEgMCA1My43MDkgMi4zOTUgNjEuMjIxIDYuNjg0IDkuMzg3IDUuMzU5LTIxLjE1IDQyLjk2Mi0yMS4xNSA0Mi45NjJsLTgxLjQ2Ny0xLjk4MVM2LjI4MSA2My42MSAxNi4wNjMgNTkuMjMyelwiIH0pIH0pKSwgX2pzeHMoXCJsaW5lYXJHcmFkaWVudFwiLCBfX2Fzc2lnbih7IGlkOiBcIl9MaW5lYXIxXCIsIHgxOiBcIjBcIiwgeTE6IFwiMFwiLCB4MjogXCIxXCIsIHkyOiBcIjBcIiwgZ3JhZGllbnRVbml0czogXCJ1c2VyU3BhY2VPblVzZVwiLCBncmFkaWVudFRyYW5zZm9ybTogXCJtYXRyaXgoMTM5LjY4IDAgMCAzMC42OTYxIC0yLjg0IDkxLjcxNSlcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcInN0b3BcIiwgeyBvZmZzZXQ6IFwiMFwiLCBzdG9wQ29sb3I6IFwiI2RmMTQ4YVwiIH0pLCBfanN4KFwic3RvcFwiLCB7IG9mZnNldDogXCIxXCIsIHN0b3BDb2xvcjogXCIjYTM1N2MzXCIgfSldIH0pKSwgX2pzeHMoXCJsaW5lYXJHcmFkaWVudFwiLCBfX2Fzc2lnbih7IGlkOiBcIl9MaW5lYXIyXCIsIHgxOiBcIjBcIiwgeTE6IFwiMFwiLCB4MjogXCIxXCIsIHkyOiBcIjBcIiwgZ3JhZGllbnRVbml0czogXCJ1c2VyU3BhY2VPblVzZVwiLCBncmFkaWVudFRyYW5zZm9ybTogXCJtYXRyaXgoMTA3LjE4MSAwIDAgOTkuMDQ3MSA0Mi4yMTggNTAuNzM5KVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwic3RvcFwiLCB7IG9mZnNldDogXCIwXCIsIHN0b3BDb2xvcjogXCIjZGYxNDhhXCIgfSksIF9qc3goXCJzdG9wXCIsIHsgb2Zmc2V0OiBcIjFcIiwgc3RvcENvbG9yOiBcIiNhMzU3YzNcIiB9KV0gfSkpXSB9KV0gfSkpIH0pKSB9KSkpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEN1cDtcclxuIiwiZnVuY3Rpb24gZmlsbEN1cChsZXZlbCkge1xyXG4gICAgdmFyIGNvZmZlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQ29mZmVlXCIpO1xyXG4gICAgY29mZmVlLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGVZKFwiLmNvbmNhdChsZXZlbCwgXCIpXCIpO1xyXG4gICAgdmFyIGxpcXVpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlxdWlkXCIpO1xyXG4gICAgdmFyIHN0ZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGVhbVwiKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxpcXVpZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBzdGVhbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGlxdWlkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSwgODAwMCk7XHJcbiAgICB9LCA0MDAwKTtcclxuICAgIHJldHVybjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmaWxsQ3VwO1xyXG4iLCJpbXBvcnQgeyBzb3VuZCB9IGZyb20gXCIuLi9zb3VuZC9hbGxTb3VuZHNcIjtcclxuaW1wb3J0IGZpbGxDdXAgZnJvbSAnLi9maWxsQ3VwJztcclxuZXhwb3J0IHZhciByZW1vdmVDdXA7XHJcbmZ1bmN0aW9uIGZpbmlzaFByZXBhcmF0aW9uKCkge1xyXG4gICAgZmlsbEN1cCgwLjEpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc291bmQucGxheSgnZmlsbGN1cCcpO1xyXG4gICAgICAgIGZpbGxDdXAoMS42KTtcclxuICAgICAgICB2YXIgbGlxdWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXF1aWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxpcXVpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgfSwgODAwMCk7XHJcbiAgICB2YXIgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcclxuICAgIHZhciBjdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbXNnLmlubmVySFRNTCA9IFwiRW5qb3kgeW91ciBjb2ZmZWUhIFRha2UgeW91ciBjdXAuXCI7XHJcbiAgICAgICAgdmFyIGN1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXAtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY3VwQ29udGFpbmVyLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICBjdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWtlQ3VwKTtcclxuICAgIH0sIDEyMDAwKTtcclxuICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJyk7XHJcbiAgICB2YXIgdGFrZUN1cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc3RlYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RlYW0nKTtcclxuICAgICAgICBjdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHN0ZWFtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAhbW9kYWwgPyBtc2cuaW5uZXJIVE1MID0gJ0Nob29zZSB5b3VyIGNvZmZlZScgOiBtc2cuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdmFyIHNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sX19zY3JlZW4nKTtcclxuICAgICAgICB2YXIgZHJpbmtCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xfX21pZGRsZScpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIW1vZGFsKVxyXG4gICAgICAgICAgICAgICAgc2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGlmICghbW9kYWwpXHJcbiAgICAgICAgICAgICAgICBkcmlua0J0bnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgdmFyIG9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb25CdG4nKTtcclxuICAgICAgICBvbkJ0blswXS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIHJlbW92ZUN1cCA9IHRha2VDdXA7XHJcbiAgICByZXR1cm47XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZmluaXNoUHJlcGFyYXRpb247XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxudmFyIFN0ZWFtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJzdGVhbVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvZmZlZS1tZWRpdW1fX3Ntb2tlIGNvZmZlZS1tZWRpdW1fX3Ntb2tlLW9uZVwiIH0pLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvZmZlZS1tZWRpdW1fX3Ntb2tlIGNvZmZlZS1tZWRpdW1fX3Ntb2tlLXR3b1wiIH0pLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvZmZlZS1tZWRpdW1fX3Ntb2tlIGNvZmZlZS1tZWRpdW1fX3Ntb2tlLXRocmVlXCIgfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29mZmVlLW1lZGl1bV9fc21va2UgY29mZmVlLW1lZGl1bV9fc21va2UtZm91clwiIH0pXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdGVhbTtcclxuIiwiaW1wb3J0IHsgSG93bCB9IGZyb20gXCJob3dsZXJcIjtcclxuZXhwb3J0IHZhciBzb3VuZCA9IG5ldyBIb3dsKHtcclxuICAgIFwic3JjXCI6IFtcclxuICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9NYXJpbmFLb3ZlbC9jb2ZmZWVtYWNoaW5lZGF0YS9ibG9iL21haW4vU291bmRzL1NvdW5kLndlYm0/cmF3PXRydWVcIixcclxuICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9NYXJpbmFLb3ZlbC9jb2ZmZWVtYWNoaW5lZGF0YS9ibG9iL21haW4vU291bmRzL1NvdW5kLm1wMz9yYXc9dHJ1ZVwiXHJcbiAgICBdLFxyXG4gICAgXCJzcHJpdGVcIjoge1xyXG4gICAgICAgIFwiY29udGFpbmVyXCI6IFtcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgOTM2LjAwOTA3MDI5NDc4NDZcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiY3VwLW9uLXNoZWxsXCI6IFtcclxuICAgICAgICAgICAgMjAwMCxcclxuICAgICAgICAgICAgMjI0Ni41MzA2MTIyNDQ4OTgzXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImZpbGxjdXBcIjogW1xyXG4gICAgICAgICAgICA2MDAwLFxyXG4gICAgICAgICAgICAyNTE5Ljk5OTk5OTk5OTk5OTVcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiZ3JhaW5zXCI6IFtcclxuICAgICAgICAgICAgMTAwMDAsXHJcbiAgICAgICAgICAgIDM5NjAuMDAwMDAwMDAwMDAxXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIm1ha2luZy1jb2ZmZWVcIjogW1xyXG4gICAgICAgICAgICAxNTAwMCxcclxuICAgICAgICAgICAgNjI2OS4zODc3NTUxMDIwNDFcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwib25PZmZcIjogW1xyXG4gICAgICAgICAgICAyMzAwMCxcclxuICAgICAgICAgICAgNTIyLjQ0ODk3OTU5MTgzNlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJzdWdhclwiOiBbXHJcbiAgICAgICAgICAgIDI1MDAwLFxyXG4gICAgICAgICAgICA1NDU5LjU5MTgzNjczNDY5NlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ3YXRlclwiOiBbXHJcbiAgICAgICAgICAgIDMyMDAwLFxyXG4gICAgICAgICAgICAxODU0LjY5Mzg3NzU1MTAyMTRcclxuICAgICAgICBdXHJcbiAgICB9XHJcbn0pO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b24nO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uR3JvdXAgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25Hcm91cCc7XHJcbmltcG9ydCBzdGFydFByZXBhcmF0aW9uIGZyb20gXCJjb21wb25lbnRzL2NvZmZlZU1hY2hpbmVGcm9udC9zdGFydFByZXBhcmF0aW9uXCI7XHJcbnZhciBEcmlua3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShudWxsKSwgZGF0YSA9IF9hWzBdLCBzZXREYXRhID0gX2FbMV07XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9ndWlzZXBwZS1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwL2NvZmZlZXMvXCIpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB2YXIgYXJyRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3BvbnNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJEYXRhLnB1c2gocmVzcG9uc2VbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldERhdGEoYXJyRGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTsgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB2YXIgYWxpZ25tZW50ID0gUmVhY3QudXNlU3RhdGUoJ2xlZnQnKVswXTtcclxuICAgIHJldHVybiAoX2pzeChUb2dnbGVCdXR0b25Hcm91cCwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udHJvbF9fbWlkZGxlIGhpZGRlblwiLCB2YWx1ZTogYWxpZ25tZW50LCBleGNsdXNpdmU6IHRydWUsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdGFydFByZXBhcmF0aW9uKCk7IH0gfSwgeyBjaGlsZHJlbjogZGF0YSAmJiBkYXRhLm1hcChmdW5jdGlvbiAoZHJpbmtEYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBcImRyaW5rIFwiLmNvbmNhdChkcmlua0RhdGEubmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIF9qc3goVG9nZ2xlQnV0dG9uLCBfX2Fzc2lnbih7IHZhbHVlOiBkYXRhICYmIGRyaW5rRGF0YS5uYW1lLCBjbGFzc05hbWU6IGNsYXNzTmFtZSwgXCJkYXRhLXNpemVcIjogZHJpbmtEYXRhLnNpemUsIG5hbWU6IGRyaW5rRGF0YS5yZWNpcGUgfSwgeyBjaGlsZHJlbjogX2pzeChcImltZ1wiLCB7IHNyYzogZHJpbmtEYXRhLnBpY3R1cmUsIGNsYXNzTmFtZTogXCJkcmlua19fcGljdHVyZVwiIH0pIH0pLCBkcmlua0RhdGEuaW5kZXgpO1xyXG4gICAgICAgIH0pIH0pKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERyaW5rcztcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJjYW52YXMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEaWdpdGFsTnVtYmVyc1xcXCI7XFxuICBoZWlnaHQ6IDEuMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9jYW52YXNDbG9jay9jYW52YXNDbG9jay5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImNhbnZhcyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkRpZ2l0YWxOdW1iZXJzXFxcIjtcXHJcXG4gIGhlaWdodDogMS4ycmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnZpdGF0aW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNywgOTYsIDEyNCwgMC44MTE3NjQ3MDU5KTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLm1hY2hpbmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDQ2LjY2NjY2NjY2Njd2aDtcXG4gIGhlaWdodDogNzB2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9jb2ZmZWVtYWNoaW5lZGF0YS9tYWluL2Rlc2lnbi9tYWNoaW5lLWZyb250MS5wbmdcXFwiKSA1MCUvMTAwJSBuby1yZXBlYXQ7XFxufVxcblxcbi5jb250cm9sIHtcXG4gIHdpZHRoOiA5MyU7XFxuICBoZWlnaHQ6IDI3JTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNSUgNCU7XFxuICBtYXJnaW4tdG9wOiAxMiU7XFxuICBtYXJnaW4tbGVmdDogNCU7XFxufVxcblxcbi5vbkJ0biB7XFxuICBtYXJnaW4tbGVmdDogMTUlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb250YWluZXJfX2xlZnQgPiBidXR0b24ge1xcbiAgd2lkdGg6IDN2aDtcXG4gIGhlaWdodDogM3ZoO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCA0cHggI2ZmMDAwMDtcXG4gIHBhZGRpbmc6IDAgMiU7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL01hcmluYUtvdmVsL29ubGluZXN0b3JlZGF0YS9tYWluL29uLnBuZ1xcXCIpIDEwMCUgMTAwJS8xMDAlIDEwMCUgbm8tcmVwZWF0O1xcbn1cXG5cXG4uY29udGFpbmVyX19sZWZ0ID4gYnV0dG9uW2FyaWEtcHJlc3NlZD10cnVlXSB7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggNHB4ICMwMDgwMDA7XFxufVxcblxcbi5jb250YWluZXJfX2xlZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtNXB4O1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLmNvbnRyb2xfX21pZGRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29udHJvbF9fbWlkZGxlID4gYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmRyaW5rX19waWN0dXJlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZHJpbmtfX3BpY3R1cmU6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuXFxuLmRyaW5rIHtcXG4gIHdpZHRoOiAyNyU7XFxuICBoZWlnaHQ6IDQ4JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb250cm9sX19yaWdodCB7XFxuICB3aWR0aDogNzglO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNvbnRyb2xfX3NjcmVlbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiByZ2IoMjI3LCAyMTQsIDIxNCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC01cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbmRpY2F0b3JzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgaGVpZ2h0OiAzMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmluZGljYXRvciB7XFxuICB3aWR0aDogMXZoO1xcbiAgaGVpZ2h0OiAxdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwOSwgMTAzLCAxMDMsIDAuNzIxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBtYXJnaW46IDE1JSAxMSU7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDJweCAjZmYwMDAwO1xcbn1cXG5cXG4uaWNvbl9fd2F0ZXIge1xcbiAgd2lkdGg6IDR2aDtcXG4gIGhlaWdodDogMS41dmg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9vbmxpbmVzdG9yZWRhdGEvbWFpbi93YXRlci5wbmdcXFwiKSAxMDAlIDEwMCUvMTAwJSAxMDAlIG5vLXJlcGVhdDtcXG59XFxuXFxuLmljb25fX2JlYW5zIHtcXG4gIHdpZHRoOiAzdmg7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL01hcmluYUtvdmVsL29ubGluZXN0b3JlZGF0YS9tYWluL2dyYWlucy5wbmdcXFwiKSAxMDAlIDEwMCUvMTAwJSAxMDAlIG5vLXJlcGVhdDtcXG59XFxuXFxuLmljb25fX3dhc3RlIHtcXG4gIHdpZHRoOiAzdmg7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL01hcmluYUtvdmVsL29ubGluZXN0b3JlZGF0YS9tYWluL3dhc3RlLnBuZ1xcXCIpIDEwMCUgMTAwJS8xMDAlIDEwMCUgbm8tcmVwZWF0O1xcbn1cXG5cXG4ucGxhY2VGb3JDdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUyJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNoZWxmIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcbn1cXG5cXG4uY3VwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xMXZoO1xcbiAgbGVmdDogMTEuNjY2NjY2NjY2N3ZoO1xcbiAgd2lkdGg6IDM1dmg7XFxuICBoZWlnaHQ6IDM1dmg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5tdXNpY19fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc5LCA0MiwgMTE1LCAwLjc4ODIzNTI5NDEpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxufVxcblxcbi52b2x1bWVfX2ljb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIG1hcmdpbjogMTBweCAwIDEwcHggMjBweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvY29mZmVlbWFjaGluZWRhdGEvbWFpbi9Tb3VuZHMvdm9sdW1lLXB1cnBsZS5wbmdcXFwiKSAwJSAxMDAlLzEwMCUgMTAwJSBuby1yZXBlYXQ7XFxufVxcblxcbi5yYWRpbyB7XFxuICB3aWR0aDogMTV2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2I4MWU4OCwgIzkyNGViOCk7XFxuICBib3gtc2hhZG93OiAycHggM3B4IDVweCByZ2IoMTYsIDE2LCAxNik7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYXV0aC1pY29uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogOXZoO1xcbiAgaGVpZ2h0OiA5dmg7XFxuICBtYXJnaW46IDF2aCAzdmg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvY29mZmVlbWFjaGluZWRhdGEvbWFpbi91c2VyLnBuZ1xcXCIpIDAlIDAlLzEwMCUgMTAwJSBuby1yZXBlYXQ7XFxuICBhbmltYXRpb246IGJsaW5rVXNlciAzcyBpbmZpbml0ZTtcXG59XFxuXFxuLmF1dGgtaWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hY2NvdW50IHtcXG4gIGZvbnQtc2l6ZTogMC41NXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA5dmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmtVc2VyIHtcXG4gIDUwJSB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggI2ZmZmZmZjtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTE1cHgpIHtcXG4gIC5iZyxcXG4gIC5iZy1uaWdodCB7XFxuICAgIGhlaWdodDogMTE3JTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDExN3ZoO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvZmZlZU1hY2hpbmVGcm9udC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0lBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLDJCQUFBO0FBS0Y7O0FBSEE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwwSEFBQTtBQU1GOztBQUpBO0VBQ0Usb0NBQUE7QUFPRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFRRjs7QUFOQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVNGOztBQVBBO0VBQ0Usd0JBQUE7QUFVRjs7QUFSQTtFQUNFLGtCQUFBO0FBV0Y7O0FBVEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFZRjs7QUFWQTtFQUNFLHNCQUFBO0FBYUY7O0FBWEE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBY0Y7O0FBWkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQWVGOztBQWJBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQWlCRjs7QUFmQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBa0JGOztBQWhCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFtQkY7O0FBakJBO0VBQ0UseUJBQUE7RUFDQSxtQ0FBQTtBQW9CRjs7QUFsQkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDZIQUFBO0FBcUJGOztBQW5CQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEhBQUE7QUFzQkY7O0FBcEJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSw2SEFBQTtBQXVCRjs7QUFyQkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBd0JGOztBQXRCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUF5QkY7O0FBdkJBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsWUFBQTtBQTJCRjs7QUF6QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQTRCRjs7QUExQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsNElBQUE7QUE2QkY7O0FBM0JBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsdURBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0FBOEJGOztBQTVCQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBIQUFBO0VBQ0EsZ0NBQUE7QUErQkY7O0FBN0JBO0VBQ0UsZUFBQTtBQWdDRjs7QUE5QkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQWlDRjs7QUEvQkE7RUFDRTtJQUFLLG9DQUFBO0VBbUNMO0FBQ0Y7QUFqQ0E7RUFFRTs7SUFFRSxZQUFBO0lBQ0EsMkJBQUE7RUFrQ0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaW52aXRhdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5NjA3Y2NmO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG4ubWFjaGluZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogY2FsYyg3MHZoIC8gMS41KTtcXHJcXG4gIGhlaWdodDogNzB2aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9jb2ZmZWVtYWNoaW5lZGF0YS9tYWluL2Rlc2lnbi9tYWNoaW5lLWZyb250MS5wbmcnKSA1MCUgLyAxMDAlIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuLmNvbnRyb2wge1xcclxcbiAgd2lkdGg6IDkzJTtcXHJcXG4gIGhlaWdodDogMjclO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiA1JSA0JTtcXHJcXG4gIG1hcmdpbi10b3A6IDEyJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0JTtcXHJcXG59XFxyXFxuLm9uQnRuIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNSUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmNvbnRhaW5lcl9fbGVmdCA+IGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogM3ZoO1xcclxcbiAgaGVpZ2h0OiAzdmg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDRweCAjZmYwMDAwO1xcclxcbiAgcGFkZGluZzogMCAyJTtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvb25saW5lc3RvcmVkYXRhL21haW4vb24ucG5nJykgMTAwJSAxMDAlLzEwMCUgMTAwJSBuby1yZXBlYXQ7XFxyXFxufVxcclxcbi5jb250YWluZXJfX2xlZnQgPiBidXR0b25bYXJpYS1wcmVzc2VkPVxcXCJ0cnVlXFxcIl0ge1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDRweCAjMDA4MDAwO1xcclxcbn1cXHJcXG4uY29udGFpbmVyX19sZWZ0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogLTVweDtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxufVxcclxcbi5jb250cm9sX19taWRkbGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMXB4O1xcclxcbn1cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmNvbnRyb2xfX21pZGRsZSA+IGJ1dHRvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbi5kcmlua19fcGljdHVyZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTIwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmRyaW5rX19waWN0dXJlOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcbi5kcmluayB7XFxyXFxuICB3aWR0aDogMjclO1xcclxcbiAgaGVpZ2h0OiA0OCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4uY29udHJvbF9fcmlnaHQge1xcclxcbiAgd2lkdGg6IDc4JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5jb250cm9sX19zY3JlZW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogcmdiKDIyNywgMjE0LCAyMTQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTAwJTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAtNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uaW5kaWNhdG9ycyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGhlaWdodDogMzAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5pbmRpY2F0b3Ige1xcclxcbiAgd2lkdGg6IDF2aDtcXHJcXG4gIGhlaWdodDogMXZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDksIDEwMywgMTAzLCAwLjcyMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgbWFyZ2luOiAxNSUgMTElO1xcclxcbn1cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAycHggI2ZmMDAwMDtcXHJcXG59XFxyXFxuLmljb25fX3dhdGVyIHtcXHJcXG4gIHdpZHRoOiA0dmg7XFxyXFxuICBoZWlnaHQ6IDEuNXZoO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvb25saW5lc3RvcmVkYXRhL21haW4vd2F0ZXIucG5nJykgMTAwJSAxMDAlLzEwMCUgMTAwJSBuby1yZXBlYXQ7XFxyXFxufVxcclxcbi5pY29uX19iZWFucyB7XFxyXFxuICB3aWR0aDogM3ZoO1xcclxcbiAgaGVpZ2h0OiAzdmg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9vbmxpbmVzdG9yZWRhdGEvbWFpbi9ncmFpbnMucG5nJykgMTAwJSAxMDAlLzEwMCUgMTAwJSBuby1yZXBlYXQ7XFxyXFxufVxcclxcbi5pY29uX193YXN0ZSB7XFxyXFxuICB3aWR0aDogM3ZoO1xcclxcbiAgaGVpZ2h0OiAzdmg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9vbmxpbmVzdG9yZWRhdGEvbWFpbi93YXN0ZS5wbmcnKSAxMDAlIDEwMCUvMTAwJSAxMDAlIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuLnBsYWNlRm9yQ3VwIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MiU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5zaGVsZiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXHJcXG59XFxyXFxuLmN1cCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAtMTF2aDtcXHJcXG4gIGxlZnQ6IGNhbGMoKDcwdmggLyAxLjIgLyAyKSAtIDE3LjV2aCk7XFxyXFxuICB3aWR0aDogMzV2aDtcXHJcXG4gIGhlaWdodDogMzV2aDtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLm11c2ljX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzMmE3M2M5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMzAwcHg7XFxyXFxufVxcclxcbi52b2x1bWVfX2ljb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICB3aWR0aDogMzVweDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDEwcHggMjBweCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWFyaW5hS292ZWwvY29mZmVlbWFjaGluZWRhdGEvbWFpbi9Tb3VuZHMvdm9sdW1lLXB1cnBsZS5wbmcnKSAwJSAxMDAlIC8gMTAwJSAxMDAlIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuLnJhZGlvIHtcXHJcXG4gIHdpZHRoOiAxNXZoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYjgxZTg4LCAjOTI0ZWI4KTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggNXB4IHJnYigxNiwgMTYsIDE2KTtcXHJcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5hdXRoLWljb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHdpZHRoOiA5dmg7XFxyXFxuICBoZWlnaHQ6IDl2aDtcXHJcXG4gIG1hcmdpbjogMXZoIDN2aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9jb2ZmZWVtYWNoaW5lZGF0YS9tYWluL3VzZXIucG5nJykgMCUgMCUgLyAxMDAlIDEwMCUgbm8tcmVwZWF0O1xcclxcbiAgYW5pbWF0aW9uOiBibGlua1VzZXIgM3MgaW5maW5pdGU7XFxyXFxufVxcclxcbi5hdXRoLWljb246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYWNjb3VudCB7XFxyXFxuICBmb250LXNpemU6IDAuNTVyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogOXZoO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rVXNlciB7XFxyXFxuICA1MCUge2JveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggI2ZmZmZmZjt9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkxNXB4KSB7XFxyXFxuXFxyXFxuICAuYmcsXFxyXFxuICAuYmctbmlnaHQge1xcclxcbiAgICBoZWlnaHQ6IDExNyU7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMTd2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLndyYXBwZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDM1dmg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY3VwLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4uY29udHJvbHMge1xcbiAgbWF4LXdpZHRoOiAxOTBweDtcXG59XFxuXFxuI0RyYXdpbmcge1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG59XFxuXFxuI0NvZmZlZSB7XFxuICB0cmFuc2l0aW9uOiBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjcsIDEuMzUpIGFsbCAzcztcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcXG59XFxuXFxuQGtleWZyYW1lcyBsaXF1aWQge1xcbiAgMCUge1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDUlIHtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAyMCUge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICA5NSUge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4ubGlxdWlkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICBoZWlnaHQ6IDcxcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHZoO1xcbiAgbGVmdDogNDglO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0MzUzMDtcXG4gIGFuaW1hdGlvbjogbGlxdWlkIDRzIDRzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmNvZmZlZS1tZWRpdW1fX3Ntb2tlIHtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNhZWFlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNtb2tlT25lIHtcXG4gIDAlIHtcXG4gICAgYm90dG9tOiAxNXZoO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgYm90dG9tOiAyMHZoO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9XFxuICA4MCUge1xcbiAgICBib3R0b206IDMwdmg7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3R0b206IDMwdmg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc21va2VUd28ge1xcbiAgMCUge1xcbiAgICBib3R0b206IDIwdmg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA0MCUge1xcbiAgICBib3R0b206IDI1dmg7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIGJvdHRvbTogMzV2aDtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJvdHRvbTogMzV2aDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLmNvZmZlZS1tZWRpdW1fX3Ntb2tlLW9uZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYm90dG9tOiA1MHZoO1xcbiAgbGVmdDogMjV2aDtcXG4gIGZpbHRlcjogYmx1cig0cHgpO1xcbiAgYW5pbWF0aW9uOiBzbW9rZU9uZSAzcyA0cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5jb2ZmZWUtbWVkaXVtX19zbW9rZS10d28ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGJvdHRvbTogNzB2aDtcXG4gIGxlZnQ6IDIzdmg7XFxuICBmaWx0ZXI6IGJsdXIoNHB4KTtcXG4gIGFuaW1hdGlvbjogc21va2VUd28gM3MgNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4uY29mZmVlLW1lZGl1bV9fc21va2UtdGhyZWUge1xcbiAgb3BhY2l0eTogMDtcXG4gIGJvdHRvbTogNjV2aDtcXG4gIHJpZ2h0OiAyOHZoO1xcbiAgZmlsdGVyOiBibHVyKDRweCk7XFxuICBhbmltYXRpb246IHNtb2tlVHdvIDNzIDZzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmNvZmZlZS1tZWRpdW1fX3Ntb2tlLWZvdXIge1xcbiAgb3BhY2l0eTogMDtcXG4gIGJvdHRvbTogNTB2aDtcXG4gIHJpZ2h0OiAyNXZoO1xcbiAgZmlsdGVyOiBibHVyKDRweCk7XFxuICBhbmltYXRpb246IHNtb2tlT25lIDNzIDVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLnN0ZWFtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY3VwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSx3REFBQTtFQUNBLHdCQUFBO0FBS0Y7O0FBRkE7RUFDRTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VBS0Y7RUFIQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VBS0Y7RUFIQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VBS0Y7RUFIQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VBS0Y7RUFIQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VBS0Y7QUFDRjtBQUZBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7QUFJRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSUY7O0FBRkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VBS0Y7RUFIQTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VBS0Y7RUFIQTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VBS0Y7RUFIQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VBS0Y7QUFDRjtBQUhBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQUtGO0FBQ0Y7QUFIQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7QUFLRjs7QUFIQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7QUFNRjs7QUFKQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7QUFPRjs7QUFMQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7QUFRRjs7QUFOQTtFQUNFLGFBQUE7QUFTRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzV2aDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcbi5jdXAtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBjdXJzb3I6IGF1dG87XFxyXFxufVxcclxcbi5jb250cm9scyB7XFxyXFxuICBtYXgtd2lkdGg6IDE5MHB4O1xcclxcbn1cXHJcXG4jRHJhd2luZyB7XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG4jQ29mZmVlIHtcXHJcXG4gIHRyYW5zaXRpb246IGN1YmljLWJlemllciguNjgsLTAuNTUsLjI3LDEuMzUpIGFsbCAzcztcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsaXF1aWQge1xcclxcbiAgMCUge1xcclxcbiAgICBoZWlnaHQ6IDBweDsgIFxcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbiAgNSUge1xcclxcbiAgICBoZWlnaHQ6IDBweDsgIFxcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbiAgMjAlIHtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4OyAgXFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuICA5NSUge1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubGlxdWlkIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxyXFxuICBoZWlnaHQ6IDcxcHg7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyMHZoO1xcclxcbiAgbGVmdDogNDglO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0MzUzMDtcXHJcXG4gIGFuaW1hdGlvbjogbGlxdWlkIDRzIDRzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZmZlZS1tZWRpdW1fX3Ntb2tlIHtcXHJcXG4gIHdpZHRoOiA4cHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2FlYWU7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc21va2VPbmUge1xcclxcbiAgMCUge1xcclxcbiAgICBib3R0b206IDE1dmg7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICA0MCUge1xcclxcbiAgICBib3R0b206IDIwdmg7XFxyXFxuICAgIG9wYWNpdHk6IC41O1xcclxcbiAgfVxcclxcbiAgODAlIHtcXHJcXG4gICAgYm90dG9tOiAzMHZoO1xcclxcbiAgICBvcGFjaXR5OiAuMztcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBib3R0b206IDMwdmg7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc21va2VUd28ge1xcclxcbiAgMCUge1xcclxcbiAgICBib3R0b206IDIwdmg7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICA0MCUge1xcclxcbiAgICBib3R0b206IDI1dmg7XFxyXFxuICAgIG9wYWNpdHk6IC41O1xcclxcbiAgfVxcclxcbiAgODAlIHtcXHJcXG4gICAgYm90dG9tOiAzNXZoO1xcclxcbiAgICBvcGFjaXR5OiAuMztcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBib3R0b206IDM1dmg7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcbi5jb2ZmZWUtbWVkaXVtX19zbW9rZS1vbmUge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGJvdHRvbTogNTB2aDtcXHJcXG4gIGxlZnQ6IDI1dmg7XFxyXFxuICBmaWx0ZXI6IGJsdXIoNHB4KTtcXHJcXG4gIGFuaW1hdGlvbjogc21va2VPbmUgM3MgNHMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG4uY29mZmVlLW1lZGl1bV9fc21va2UtdHdvIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBib3R0b206IDcwdmg7XFxyXFxuICBsZWZ0OiAyM3ZoO1xcclxcbiAgZmlsdGVyOiBibHVyKDRweCk7XFxyXFxuICBhbmltYXRpb246IHNtb2tlVHdvIDNzIDVzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuLmNvZmZlZS1tZWRpdW1fX3Ntb2tlLXRocmVlIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBib3R0b206IDY1dmg7XFxyXFxuICByaWdodDogMjh2aDtcXHJcXG4gIGZpbHRlcjogYmx1cig0cHgpO1xcclxcbiAgYW5pbWF0aW9uOiBzbW9rZVR3byAzcyA2cyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcbi5jb2ZmZWUtbWVkaXVtX19zbW9rZS1mb3VyIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBib3R0b206IDUwdmg7XFxyXFxuICByaWdodDogMjV2aDtcXHJcXG4gIGZpbHRlcjogYmx1cig0cHgpO1xcclxcbiAgYW5pbWF0aW9uOiBzbW9rZU9uZSAzcyA1cyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcbi5zdGVhbSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FudmFzQ2xvY2suc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhbnZhc0Nsb2NrLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FudmFzQ2xvY2suc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvZmZlZU1hY2hpbmVGcm9udC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29mZmVlTWFjaGluZUZyb250LnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29mZmVlTWFjaGluZUZyb250LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jdXAuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2N1cC5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2N1cC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbInJlbmRlckRpZ2l0YWxDbG9jayIsImNvbnRleHQiLCJwcm9wcyIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsImJnQ29sb3IiLCJ0aW1lb2Zmc2V0IiwiZGlhbENvbG9yIiwidGltZTI0aCIsImZvbnRTaXplIiwibm93IiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwic2VjIiwiZ2V0U2Vjb25kcyIsIm1pbiIsImdldE1pbnV0ZXMiLCJob3VyIiwiZ2V0SG91cnMiLCJzZWNCbGluayIsInRvU3RyaW5nIiwiTnVtYmVyIiwiY2xlYXJSZWN0IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwicmVjdCIsImZpbGwiLCJjbG9zZVBhdGgiLCJ0ZXh0QWxpZ24iLCJmb250IiwiZmlsbFRleHQiLCJzZXRUaW1lb3V0IiwiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwianN4IiwiX2pzeCIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ2FudmFzQ2xvY2siLCJkZWZhdWx0UHJvcHMiLCJzaXplIiwiaWQiLCJjYW52YXNSZWYiLCJjdXJyZW50IiwiZ2V0Q29udGV4dCIsImNoaWxkcmVuIiwicmVmIiwianN4cyIsIl9qc3hzIiwiYWRkV2F0ZXIiLCJhZGRCZWFucyIsImVtcHR5V2FzdGVDb250YWluZXIiLCJBZGRJbmRpY2F0b3JzIiwiY2xhc3NOYW1lIiwib25DbGljayIsIndhdGVyIiwiYmVhbnMiLCJ3YXN0ZVBsYWNlIiwiY2hlY2tSZXNvdXJjZXMiLCJyZXNvdXJjZXMiLCJpbmRpY2F0b3JzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibXNnIiwiaW5uZXJIVE1MIiwibXNnTm9SZXNvdXJjZXMiLCJkcmlua3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJUdXJuT25PZmYiLCJDdXAiLCJTdGVhbSIsIkRyaW5rcyIsIkNvZmZlZU1hY2hpbmVGcm9udCIsIkNoZWNrUmVzb3VyY2VzIiwic291bmQiLCJvcGVuRHJpbmtDaG9pY2UiLCJyZW1vdmUiLCJzY3JlZW5fMSIsInN0eWxlIiwiZGlzcGxheSIsInBsYXkiLCJpbmRpY2F0b3IiLCJyZWR1Y2VSZXNvdXJjZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb2RlIiwiUmVhY3QiLCJUb2dnbGVCdXR0b24iLCJ0dXJuT2ZmIiwiX2EiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW52aXRhdGlvbiIsImNob29zZU1lc3NhZ2UiLCJtb2RhbCIsInRvZ2dsZSIsInNjcmVlbiIsImF1dGhJY29uIiwiYXV0aCIsImJ0biIsInRhcmdldCIsImRpc2FibGVkIiwidmFsdWUiLCJvbkNoYW5nZSIsImFkZEN1cCIsInN0YXJ0UHJlcGFyYXRpb24iLCJkcmlua0J0biIsImdldEF0dHJpYnV0ZSIsImluY2x1ZGVzIiwicGFyZW50RWxlbWVudCIsImNvZmZlZSIsImNvbG9yIiwiaXNPbiIsImN1cENvbnRhaW5lciIsInN0ZWFtT25lIiwic3RlYW1Ud28iLCJmbGV4IiwicmlnaHQiLCJsaXF1aWQiLCJnZXRFbGVtZW50QnlJZCIsInN0cmVhbSIsImJhY2tncm91bmRDb2xvciIsInN0YXJ0IiwiY29uY2F0Iiwib25CdG4iLCJmaW5pc2hQcmVwYXJhdGlvbiIsImN1cCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1lYXN1cmUiLCJ0aW1lIiwicHJvZ3Jlc3MiLCJ0cmFuc2xhdGUiLCJtYXJnaW4iLCJ2aWV3Qm94IiwieG1sbnMiLCJmaWxsUnVsZSIsImNsaXBSdWxlIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlTWl0ZXJsaW1pdCIsImQiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImNsaXBQYXRoIiwiY3giLCJjeSIsInJ4IiwicnkiLCJmaWxsT3BhY2l0eSIsIngxIiwieTEiLCJ4MiIsInkyIiwiZ3JhZGllbnRVbml0cyIsImdyYWRpZW50VHJhbnNmb3JtIiwib2Zmc2V0Iiwic3RvcENvbG9yIiwiZmlsbEN1cCIsImxldmVsIiwidHJhbnNmb3JtIiwic3RlYW0iLCJyZW1vdmVDdXAiLCJjdXJzb3IiLCJ0YWtlQ3VwIiwiZHJpbmtCdG5zIiwiSG93bCIsIlRvZ2dsZUJ1dHRvbkdyb3VwIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImFyckRhdGEiLCJwdXNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiYWxpZ25tZW50IiwiZXhjbHVzaXZlIiwibWFwIiwiZHJpbmtEYXRhIiwibmFtZSIsInRvTG93ZXJDYXNlIiwicmVjaXBlIiwic3JjIiwicGljdHVyZSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==