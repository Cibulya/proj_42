"use strict";
(self["webpackChunkproj_42"] = self["webpackChunkproj_42"] || []).push([["src_pages_LearningModePage_ui_LearningModePage_tsx"],{

/***/ "./src/components/cards/LearningCard.tsx":
/*!***********************************************!*\
  !*** ./src/components/cards/LearningCard.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/classNames/classNames */ "./src/helpers/classNames/classNames.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var fonts_LearningSteps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fonts/LearningSteps */ "./src/fonts/LearningSteps.ts");
/* harmony import */ var components_coffeeMachineFront_onOffBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/coffeeMachineFront/onOffBtn */ "./src/components/coffeeMachineFront/onOffBtn.tsx");
/* harmony import */ var components_cup_finishPreparation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cup/finishPreparation */ "./src/components/cup/finishPreparation.ts");
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






var LearningCard = function LearningCard(props) {
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)().t;
  var raiseProgress = function raiseProgress(ind) {
    if (ind === fonts_LearningSteps__WEBPACK_IMPORTED_MODULE_2__.LearningSteps.length) {
      props.callback(ind - 1);
      window.open("https://www.youtube.com/watch?v=OBGxt8zhbRk");
    } else props.callback(ind);
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)('card', {}, ["".concat(props.className)])
  }, {
    children: [props.state.text !== '' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      children: t("".concat(props.state.text))
    }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}), props.state.picture !== '' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      src: props.state.picture,
      width: '280px',
      height: '200px',
      alt: 'MVC model'
    }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}), props.state.buttonOne !== '' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
      className: "learning__btn",
      onClick: function onClick(event) {
        if (t("".concat(props.state.buttonOne)) !== "Repeat") {
          raiseProgress(props.progress + 1);
        } else {
          var onBtn = document.querySelector('.onBtn');
          if (onBtn.getAttribute('aria-pressed') === 'true') (0,components_coffeeMachineFront_onOffBtn__WEBPACK_IMPORTED_MODULE_3__.turnOff)();
          (0,components_cup_finishPreparation__WEBPACK_IMPORTED_MODULE_4__.removeCup)();
          raiseProgress(0);
        }
      }
    }, {
      children: t("".concat(props.state.buttonOne))
    })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}), props.state.buttonTwo !== '' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
      className: "learning__btn",
      onClick: function onClick(event) {
        raiseProgress(props.progress + 1);
      }
    }, {
      children: t("".concat(props.state.buttonTwo))
    })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LearningCard);

/***/ }),

/***/ "./src/components/sound/radio.tsx":
/*!****************************************!*\
  !*** ./src/components/sound/radio.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ToggleButton */ "./node_modules/@mui/material/ToggleButton/ToggleButton.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Slider */ "./node_modules/@mui/material/Slider/Slider.js");
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






var radio = null;
function Radio() {
  var _a = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),
    selected = _a[0],
    setSelected = _a[1];
  function playRadio() {
    if (radio != null) {
      radio.stop();
      radio.unload();
      radio = null;
      handleSliderChange(event, 30);
    } else {
      radio = new howler__WEBPACK_IMPORTED_MODULE_2__.Howl({
        src: ['https://stream.nightride.fm/nightride.mp3'],
        html5: true,
        volume: 0.5
      });
      radio.play();
    }
  }
  var _b = react__WEBPACK_IMPORTED_MODULE_1__.useState(30),
    value = _b[0],
    setValue = _b[1];
  var handleSliderChange = function handleSliderChange(event, newValue) {
    setValue(newValue);
    var newVolume = +(newValue / 100).toFixed(1);
    if (radio) radio.volume(newVolume);
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
    className: "music__container"
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({
      container: true,
      spacing: 2,
      alignItems: "center"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({
        item: true
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({
          value: "check",
          selected: selected,
          onChange: function onChange() {
            playRadio();
            setSelected(!selected);
          },
          className: "radio"
        }, {
          children: " Music ON/OFF"
        }))
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        item: true,
        className: "volume__icon"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({
        item: true,
        xs: true
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: typeof value === 'number' ? value : 0,
          onChange: handleSliderChange,
          "aria-labelledby": "input-slider",
          color: "secondary"
        })
      }))]
    }))
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radio);

/***/ }),

/***/ "./src/fonts/LearningSteps.ts":
/*!************************************!*\
  !*** ./src/fonts/LearningSteps.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningSteps": () => (/* binding */ LearningSteps)
/* harmony export */ });
var LearningSteps = [{
  modalCenter: {
    text: 'modalCenter-text-1',
    picture: '',
    buttonOne: 'modalCenter-buttonOne-1',
    buttonTwo: ''
  },
  modalLeft: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightTop: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: 'modalLeft-text-2',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightTop: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: 'modalLeft-text-3',
    picture: '',
    buttonOne: 'modalLeft-buttonOne-3',
    buttonTwo: ''
  },
  modalRightTop: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: 'modalLeft-text-4',
    picture: 'modalLeft-picture-4',
    buttonOne: 'OK',
    buttonTwo: ''
  },
  modalRightTop: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: 'modalLeft-text-5',
    picture: '',
    buttonOne: 'modalLeft-buttonOne-5',
    buttonTwo: ''
  },
  modalRightTop: {
    text: 'modalRightTop-text-5',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: 'modalRightBottom-text-5',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: 'modalLeft-text-6',
    picture: '',
    buttonOne: 'OK',
    buttonTwo: ''
  },
  modalRightTop: {
    text: 'CONTROLLER',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: 'MODEL',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: 'modalLeft-text-7',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightTop: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightTop: {
    text: 'modalRightTop-text-8',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightTop: {
    text: 'modalRightTop-text-9',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightTop: {
    text: 'modalRightTop-text-10',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightTop: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: 'modalRightBottom-text-11',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightTop: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: 'modalRightBottom-text-12',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: 'modalLeft-text-13',
    picture: '',
    buttonOne: 'Repeat',
    buttonTwo: 'Quiz'
  },
  modalRightTop: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: 'modalLeft-text-answer',
    picture: '',
    buttonOne: 'Next',
    buttonTwo: ''
  },
  modalRightTop: {
    text: 'CONTROLLER',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: 'MODEL',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: 'modalLeft-text-answer',
    picture: '',
    buttonOne: 'Next',
    buttonTwo: ''
  },
  modalRightTop: {
    text: 'CONTROLLER',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: 'MODEL',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: 'modalLeft-text-answer',
    picture: '',
    buttonOne: 'Next',
    buttonTwo: ''
  },
  modalRightTop: {
    text: 'CONTROLLER',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: 'MODEL',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: 'modalLeft-text-answer',
    picture: '',
    buttonOne: 'Next',
    buttonTwo: ''
  },
  modalRightTop: {
    text: 'CONTROLLER',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: 'MODEL',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalLeft: {
    text: 'modalLeft-text-answer',
    picture: '',
    buttonOne: 'Next',
    buttonTwo: ''
  },
  modalRightTop: {
    text: 'CONTROLLER',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: 'MODEL',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}, {
  modalCenter: {
    text: 'modalCenter-text-19',
    picture: '',
    buttonOne: 'modalCenter-buttonOne-19',
    buttonTwo: ''
  },
  modalLeft: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightTop: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: '',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  }
}];

/***/ }),

/***/ "./src/pages/LearningModePage/ui/LearningModePage.tsx":
/*!************************************************************!*\
  !*** ./src/pages/LearningModePage/ui/LearningModePage.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var components_cards_LearningCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/cards/LearningCard */ "./src/components/cards/LearningCard.tsx");
/* harmony import */ var helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/classNames/classNames */ "./src/helpers/classNames/classNames.ts");
/* harmony import */ var fonts_LearningSteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fonts/LearningSteps */ "./src/fonts/LearningSteps.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var components_coffeeMachineFront_coffeeMachineFront__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/coffeeMachineFront/coffeeMachineFront */ "./src/components/coffeeMachineFront/coffeeMachineFront.tsx");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/LinearProgress */ "./node_modules/@mui/material/LinearProgress/LinearProgress.js");
/* harmony import */ var components_auth_SignForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/auth/SignForm */ "./src/components/auth/SignForm.tsx");
/* harmony import */ var weatherWidget_Weather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! weatherWidget/Weather */ "./src/weatherWidget/Weather.tsx");
/* harmony import */ var components_sound_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/sound/radio */ "./src/components/sound/radio.tsx");
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












var score = 0;
var LearningModePage = function LearningModePage() {
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)().t;
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    progress = _a[0],
    setProgress = _a[1];
  var state = fonts_LearningSteps__WEBPACK_IMPORTED_MODULE_4__.LearningSteps[progress];
  var modals = Object.entries(state);
  var machine = document.querySelector('.machine');
  var msg = document.querySelector('.message');
  var modal = document.getElementsByClassName('card');
  var btn = document.querySelector('.learning__btn');
  var auth = document.querySelector('.auth');
  var authIcon = document.querySelector('.auth-icon');
  var drinks = document.querySelector('.control__middle');
  var screen = document.querySelector('.control__screen');
  var answers = [['right__machine', 'wrong__modal', 'wrong__modal'], ['wrong__machine', 'right__modal', 'wrong__modal'], ['wrong__machine', 'wrong__modal', 'right__modal']];
  switch (progress) {
    case 1:
      var submit = document.querySelector('.submit');
      submit.addEventListener('click', function () {
        setProgress(progress + 1);
        auth.style.display = 'none';
      });
      break;
    case 4:
      machine.classList.add('blink__machine');
      btn.addEventListener('click', function () {
        machine.classList.remove('blink__machine');
      });
      break;
    case 5:
      machine.classList.add('blink__machine');
      setTimeout(function () {
        if (machine) machine.classList.remove('blink__machine');
        if (modal[1]) modal[1].classList.add('blink__modal');
      }, 3000);
      setTimeout(function () {
        if (modal[1]) modal[1].classList.remove('blink__modal');
        if (modal[2]) modal[2].classList.add('blink__modal');
      }, 6000);
      setTimeout(function () {
        if (modal[2]) modal[2].classList.remove('blink__modal');
      }, 9000);
      break;
    case 6:
      if (authIcon) authIcon.style.display = 'none';
      screen.style.display = 'none';
      setTimeout(function () {
        drinks.classList.remove('hidden');
      }, 0);
      drinks.addEventListener('click', function () {
        setProgress(progress + 1);
        msg.innerHTML = '';
      });
      break;
    case 7:
    case 8:
    case 9:
    case 10:
      setTimeout(function () {
        setProgress(progress + 1);
        msg.innerHTML = '';
      }, 3000);
      break;
    case 11:
      setTimeout(function () {
        setProgress(progress + 1);
      }, 7000);
      score = 0;
      break;
    case 13:
    case 16:
      setBlick(0);
      break;
    case 14:
      setBlick(2);
      break;
    case 15:
    case 17:
      setBlick(1);
      break;
    case 18:
      setTimeout(function () {
        var finishMsg = document.querySelector('.modalCenter');
        if (finishMsg) finishMsg.innerHTML += "QUIZ RESULT: You got ".concat(score, "/5 points!");
      }, 0);
      var bonus = document.querySelector('.bonus');
      bonus.style.display = 'flex';
      break;
    default:
  }
  function setBlick(i) {
    document.addEventListener('keydown', function (event) {
      removeBlick();
      if (event.code == 'KeyV') machine.classList.add(answers[i][0]);
      if (event.code == 'KeyC') modal[1].classList.add(answers[i][1]);
      if (event.code == 'KeyM') modal[2].classList.add(answers[i][2]);
      setTimeout(function () {
        removeBlick();
        setProgress(progress + 1);
      }, 1500);
    }, {
      once: true
    });
    setTimeout(function () {
      msg.innerHTML = "VIEW";
    }, 0);
  }
  function removeBlick() {
    countScore();
    machine.classList.remove('right__machine');
    machine.classList.remove('wrong__machine');
    modal[1].classList.remove('right__modal');
    modal[1].classList.remove('wrong__modal');
    modal[2].classList.remove('right__modal');
    modal[2].classList.remove('wrong__modal');
  }
  function countScore() {
    if (machine && modal[1] && modal[2]) {
      if (machine.getAttribute('class').includes('right__machine') || modal[1].getAttribute('class').includes('right__modal') || modal[2].getAttribute('class').includes('right__modal')) score++;
    }
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)('learning-mode')
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], __assign({
      className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)('progress'),
      sx: {
        width: '80%'
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_11__["default"], {
        color: "secondary",
        variant: "buffer",
        value: progress / 18 * 100,
        valueBuffer: 100
      })
    })), fonts_LearningSteps__WEBPACK_IMPORTED_MODULE_4__.LearningSteps.length > progress ? modals.map(function (modal) {
      if (modal[1].text !== '') {
        console.log(progress);
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_cards_LearningCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)("".concat(modal[0]), {}, ["".concat(modal[1].picture !== '' ? 'withImg' : '')]),
          callback: setProgress,
          progress: progress,
          state: modal[1]
        }, "".concat(modal[0], "-index"));
      }
    }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: 'learning__machine'
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_coffeeMachineFront_coffeeMachineFront__WEBPACK_IMPORTED_MODULE_5__["default"], {})
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_SignForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: 'card auth',
      typeForm: 'sign-up'
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: 'bonus'
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(weatherWidget_Weather__WEBPACK_IMPORTED_MODULE_7__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_sound_radio__WEBPACK_IMPORTED_MODULE_8__["default"], {})]
    }))]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LearningModePage);

/***/ }),

/***/ "./src/weatherWidget/CurrentWeather.tsx":
/*!**********************************************!*\
  !*** ./src/weatherWidget/CurrentWeather.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _weather_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.scss */ "./src/weatherWidget/weather.scss");
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


var CurrentWeather = function CurrentWeather(_a) {
  var weather = _a.weather;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: "weather-wrapper"
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: "weather-main"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
          children: weather === null ? "" : weather.city_name
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          children: weather === null ? "" : weather.weather.description
        })]
      })
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: "weather-info"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
        className: "temperature"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
          width: '60px',
          alt: "weather-icon",
          src: weather === null ? "" : "https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/weather/".concat(weather.weather.icon, ".png")
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
          children: [weather === null ? "" : weather.temp, "\xB0C"]
        })]
      }))
    }))]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentWeather);

/***/ }),

/***/ "./src/weatherWidget/Weather.tsx":
/*!***************************************!*\
  !*** ./src/weatherWidget/Weather.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL),
/* harmony export */   "WEATHER_API_KEY": () => (/* binding */ WEATHER_API_KEY),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var weatherWidget_CurrentWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! weatherWidget/CurrentWeather */ "./src/weatherWidget/CurrentWeather.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");




var WEATHER_API_KEY = 'b5577dac54634a88a36e9bc8abe697fb';
var BASE_URL = 'https://api.weatherbit.io/v2.0/';
var Weather = function Weather() {
  var i18n = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)().i18n;
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    weather = _a[0],
    setWeather = _a[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    navigator.geolocation.getCurrentPosition(function (position) {
      var _a = position.coords,
        latitude = _a.latitude,
        longitude = _a.longitude;
      fetch("".concat(BASE_URL, "current?key=").concat(WEATHER_API_KEY, "&lang=").concat(i18n.language, "&lat=").concat(latitude, "&lon=").concat(longitude, "&units=M")).then(function (response) {
        return response.json();
      }).then(function (response) {
        setWeather(response.data[0]);
      })["catch"](function (err) {
        return console.error(err);
      });
    });
  }, [i18n.language]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(weatherWidget_CurrentWeather__WEBPACK_IMPORTED_MODULE_2__["default"], {
    weather: weather
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weather);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/weatherWidget/weather.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/weatherWidget/weather.scss ***!
  \*************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".weather-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 10px;\n  padding: 10px;\n  width: 220px;\n  height: 200px;\n  background-color: rgba(179, 42, 115, 0.7882352941);\n  border-radius: 20px;\n}\n.weather-wrapper h2 {\n  font-size: 32px;\n}", "",{"version":3,"sources":["webpack://./src/weatherWidget/weather.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,kDAAA;EACA,mBAAA;AACJ;AAAI;EACI,eAAA;AAER","sourcesContent":[".weather-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    width: 220px;\r\n    height: 200px;\r\n    background-color: #b32a73c9;\r\n    border-radius: 20px;\r\n    h2 {\r\n        font-size: 32px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/weatherWidget/weather.scss":
/*!****************************************!*\
  !*** ./src/weatherWidget/weather.scss ***!
  \****************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../node_modules/sass-loader/dist/cjs.js!./weather.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/weatherWidget/weather.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../node_modules/sass-loader/dist/cjs.js!./weather.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/weatherWidget/weather.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../node_modules/sass-loader/dist/cjs.js!./weather.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/weatherWidget/weather.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0xlYXJuaW5nTW9kZVBhZ2VfdWlfTGVhcm5pbmdNb2RlUGFnZV90c3guNGNlNzRkYjcyYmYzMGVhN2U4NzUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxRQUFRLElBQUssWUFBWTtFQUNsREEsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sSUFBSSxVQUFTQyxDQUFDLEVBQUU7SUFDcEMsS0FBSyxJQUFJQyxDQUFDLEVBQUVDLENBQUMsR0FBRyxDQUFDLEVBQUVDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFNLEVBQUVILENBQUMsR0FBR0MsQ0FBQyxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNqREQsQ0FBQyxHQUFHRyxTQUFTLENBQUNGLENBQUMsQ0FBQztNQUNoQixLQUFLLElBQUlJLENBQUMsSUFBSUwsQ0FBQyxFQUFFLElBQUlILE1BQU0sQ0FBQ1MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFSyxDQUFDLENBQUMsRUFDM0ROLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO0lBQ25CO0lBQ0EsT0FBT04sQ0FBQztFQUNaLENBQUM7RUFDRCxPQUFPSCxRQUFRLENBQUNhLEtBQUssQ0FBQyxJQUFJLEVBQUVOLFNBQVMsQ0FBQztBQUMxQyxDQUFDO0FBQ3FGO0FBQzNCO0FBQ1o7QUFDSztBQUNhO0FBQ0o7QUFDN0QsSUFBSWtCLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQWFDLEtBQUssRUFBRTtFQUNoQyxJQUFJdkIsQ0FBQyxHQUFHa0IsNkRBQWMsRUFBRSxDQUFDbEIsQ0FBQztFQUMxQixJQUFJd0IsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLENBQWFDLEdBQUcsRUFBRTtJQUMvQixJQUFJQSxHQUFHLEtBQUtOLHFFQUFvQixFQUFFO01BQzlCSSxLQUFLLENBQUNHLFFBQVEsQ0FB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SSxNQUFNO0FBQUE7QUFDTixzREFBc0QsMklBQVcsR0FBRyw2SkFBYztBQUNsRixnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsMklBQVcsR0FBRyw2SkFBYzs7QUFFdEUscUJBQXFCLHNKQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHa0o7QUFDbEosT0FBTyxpRUFBZSxzSkFBTyxJQUFJLDZKQUFjLEdBQUcsNkpBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jYXJkcy9MZWFybmluZ0NhcmQudHN4Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvc291bmQvcmFkaW8udHN4Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2ZvbnRzL0xlYXJuaW5nU3RlcHMudHMiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvcGFnZXMvTGVhcm5pbmdNb2RlUGFnZS91aS9MZWFybmluZ01vZGVQYWdlLnRzeCIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy93ZWF0aGVyV2lkZ2V0L0N1cnJlbnRXZWF0aGVyLnRzeCIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy93ZWF0aGVyV2lkZ2V0L1dlYXRoZXIudHN4Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL3dlYXRoZXJXaWRnZXQvd2VhdGhlci5zY3NzIiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL3dlYXRoZXJXaWRnZXQvd2VhdGhlci5zY3NzPzBjYTEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdoZWxwZXJzL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IExlYXJuaW5nU3RlcHMgfSBmcm9tICdmb250cy9MZWFybmluZ1N0ZXBzJztcclxuaW1wb3J0IHsgdHVybk9mZiB9IGZyb20gJ2NvbXBvbmVudHMvY29mZmVlTWFjaGluZUZyb250L29uT2ZmQnRuJztcclxuaW1wb3J0IHsgcmVtb3ZlQ3VwIH0gZnJvbSAnY29tcG9uZW50cy9jdXAvZmluaXNoUHJlcGFyYXRpb24nO1xyXG52YXIgTGVhcm5pbmdDYXJkID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCkudDtcclxuICAgIHZhciByYWlzZVByb2dyZXNzID0gZnVuY3Rpb24gKGluZCkge1xyXG4gICAgICAgIGlmIChpbmQgPT09IExlYXJuaW5nU3RlcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrKGluZCAtIDEpO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9T0JHeHQ4emhiUmtcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcHJvcHMuY2FsbGJhY2soaW5kKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCdjYXJkJywge30sIFtcIlwiLmNvbmNhdChwcm9wcy5jbGFzc05hbWUpXSkgfSwgeyBjaGlsZHJlbjogW3Byb3BzLnN0YXRlLnRleHQgIT09ICcnXHJcbiAgICAgICAgICAgICAgICA/IF9qc3goXCJwXCIsIHsgY2hpbGRyZW46IHQoXCJcIi5jb25jYXQocHJvcHMuc3RhdGUudGV4dCkpIH0pXHJcbiAgICAgICAgICAgICAgICA6IF9qc3goX0ZyYWdtZW50LCB7fSksIHByb3BzLnN0YXRlLnBpY3R1cmUgIT09ICcnXHJcbiAgICAgICAgICAgICAgICA/IF9qc3goXCJpbWdcIiwgeyBzcmM6IHByb3BzLnN0YXRlLnBpY3R1cmUsIHdpZHRoOiAnMjgwcHgnLCBoZWlnaHQ6ICcyMDBweCcsIGFsdDogJ01WQyBtb2RlbCcgfSlcclxuICAgICAgICAgICAgICAgIDogX2pzeChfRnJhZ21lbnQsIHt9KSwgcHJvcHMuc3RhdGUuYnV0dG9uT25lICE9PSAnJ1xyXG4gICAgICAgICAgICAgICAgPyBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImxlYXJuaW5nX19idG5cIiwgb25DbGljazogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KFwiXCIuY29uY2F0KHByb3BzLnN0YXRlLmJ1dHRvbk9uZSkpICE9PSBcIlJlcGVhdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWlzZVByb2dyZXNzKHByb3BzLnByb2dyZXNzICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25CdG4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkJ0bi5nZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcpID09PSAndHJ1ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHVybk9mZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ3VwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWlzZVByb2dyZXNzKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiB0KFwiXCIuY29uY2F0KHByb3BzLnN0YXRlLmJ1dHRvbk9uZSkpIH0pKVxyXG4gICAgICAgICAgICAgICAgOiBfanN4KF9GcmFnbWVudCwge30pLCBwcm9wcy5zdGF0ZS5idXR0b25Ud28gIT09ICcnXHJcbiAgICAgICAgICAgICAgICA/IF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibGVhcm5pbmdfX2J0blwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFpc2VQcm9ncmVzcyhwcm9wcy5wcm9ncmVzcyArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogdChcIlwiLmNvbmNhdChwcm9wcy5zdGF0ZS5idXR0b25Ud28pKSB9KSlcclxuICAgICAgICAgICAgICAgIDogX2pzeChfRnJhZ21lbnQsIHt9KV0gfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTGVhcm5pbmdDYXJkO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhvd2wgfSBmcm9tIFwiaG93bGVyXCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b24nO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU2xpZGVyJztcclxudmFyIHJhZGlvID0gbnVsbDtcclxuZnVuY3Rpb24gUmFkaW8oKSB7XHJcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksIHNlbGVjdGVkID0gX2FbMF0sIHNldFNlbGVjdGVkID0gX2FbMV07XHJcbiAgICBmdW5jdGlvbiBwbGF5UmFkaW8oKSB7XHJcbiAgICAgICAgaWYgKHJhZGlvICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmFkaW8uc3RvcCgpO1xyXG4gICAgICAgICAgICByYWRpby51bmxvYWQoKTtcclxuICAgICAgICAgICAgcmFkaW8gPSBudWxsO1xyXG4gICAgICAgICAgICBoYW5kbGVTbGlkZXJDaGFuZ2UoZXZlbnQsIDMwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJhZGlvID0gbmV3IEhvd2woe1xyXG4gICAgICAgICAgICAgICAgc3JjOiBbJ2h0dHBzOi8vc3RyZWFtLm5pZ2h0cmlkZS5mbS9uaWdodHJpZGUubXAzJ10sXHJcbiAgICAgICAgICAgICAgICBodG1sNTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZvbHVtZTogMC41XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByYWRpby5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIF9iID0gUmVhY3QudXNlU3RhdGUoMzApLCB2YWx1ZSA9IF9iWzBdLCBzZXRWYWx1ZSA9IF9iWzFdO1xyXG4gICAgdmFyIGhhbmRsZVNsaWRlckNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCwgbmV3VmFsdWUpIHtcclxuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgdmFyIG5ld1ZvbHVtZSA9ICsobmV3VmFsdWUgLyAxMDApLnRvRml4ZWQoMSk7XHJcbiAgICAgICAgaWYgKHJhZGlvKVxyXG4gICAgICAgICAgICByYWRpby52b2x1bWUobmV3Vm9sdW1lKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibXVzaWNfX2NvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKEdyaWQsIF9fYXNzaWduKHsgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAyLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH0sIHsgY2hpbGRyZW46IFtfanN4KEdyaWQsIF9fYXNzaWduKHsgaXRlbTogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBfanN4KFRvZ2dsZUJ1dHRvbiwgX19hc3NpZ24oeyB2YWx1ZTogXCJjaGVja1wiLCBzZWxlY3RlZDogc2VsZWN0ZWQsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5UmFkaW8oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKCFzZWxlY3RlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNsYXNzTmFtZTogXCJyYWRpb1wiIH0sIHsgY2hpbGRyZW46IFwiIE11c2ljIE9OL09GRlwiIH0pKSB9KSksIF9qc3goR3JpZCwgeyBpdGVtOiB0cnVlLCBjbGFzc05hbWU6IFwidm9sdW1lX19pY29uXCIgfSksIF9qc3goR3JpZCwgX19hc3NpZ24oeyBpdGVtOiB0cnVlLCB4czogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBfanN4KFNsaWRlciwgeyB2YWx1ZTogdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlIDogMCwgb25DaGFuZ2U6IGhhbmRsZVNsaWRlckNoYW5nZSwgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJpbnB1dC1zbGlkZXJcIiwgY29sb3I6IFwic2Vjb25kYXJ5XCIgfSkgfSkpXSB9KSkgfSkpKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBSYWRpbztcclxuIiwiZXhwb3J0IHZhciBMZWFybmluZ1N0ZXBzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdtb2RhbENlbnRlci10ZXh0LTEnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnbW9kYWxDZW50ZXItYnV0dG9uT25lLTEnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdtb2RhbExlZnQtdGV4dC0yJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnbW9kYWxMZWZ0LXRleHQtMycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdtb2RhbExlZnQtYnV0dG9uT25lLTMnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0Qm90dG9tOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ21vZGFsTGVmdC10ZXh0LTQnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnbW9kYWxMZWZ0LXBpY3R1cmUtNCcsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJ09LJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdtb2RhbExlZnQtdGV4dC01JyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJ21vZGFsTGVmdC1idXR0b25PbmUtNScsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdtb2RhbFJpZ2h0VG9wLXRleHQtNScsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnbW9kYWxSaWdodEJvdHRvbS10ZXh0LTUnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ21vZGFsTGVmdC10ZXh0LTYnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnT0snLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnQ09OVFJPTExFUicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnTU9ERUwnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ21vZGFsTGVmdC10ZXh0LTcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJ21vZGFsUmlnaHRUb3AtdGV4dC04JyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0Qm90dG9tOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnbW9kYWxSaWdodFRvcC10ZXh0LTknLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdtb2RhbFJpZ2h0VG9wLXRleHQtMTAnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJ21vZGFsUmlnaHRCb3R0b20tdGV4dC0xMScsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJ21vZGFsUmlnaHRCb3R0b20tdGV4dC0xMicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnbW9kYWxMZWZ0LXRleHQtMTMnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnUmVwZWF0JyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnUXVpeicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnbW9kYWxMZWZ0LXRleHQtYW5zd2VyJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJ05leHQnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnQ09OVFJPTExFUicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnTU9ERUwnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ21vZGFsTGVmdC10ZXh0LWFuc3dlcicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdOZXh0JyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0NPTlRST0xMRVInLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJ01PREVMJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdtb2RhbExlZnQtdGV4dC1hbnN3ZXInLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnTmV4dCcsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdDT05UUk9MTEVSJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0Qm90dG9tOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdNT0RFTCcsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnbW9kYWxMZWZ0LXRleHQtYW5zd2VyJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJ05leHQnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnQ09OVFJPTExFUicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnTU9ERUwnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ21vZGFsTGVmdC10ZXh0LWFuc3dlcicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdOZXh0JyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0NPTlRST0xMRVInLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJ01PREVMJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJ21vZGFsQ2VudGVyLXRleHQtMTknLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnbW9kYWxDZW50ZXItYnV0dG9uT25lLTE5JyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5dO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMZWFybmluZ0NhcmQgZnJvbSAnY29tcG9uZW50cy9jYXJkcy9MZWFybmluZ0NhcmQnO1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnaGVscGVycy9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xyXG5pbXBvcnQgeyBMZWFybmluZ1N0ZXBzIH0gZnJvbSAnZm9udHMvTGVhcm5pbmdTdGVwcyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCBDb2ZmZWVNYWNoaW5lRnJvbnQgZnJvbSAnY29tcG9uZW50cy9jb2ZmZWVNYWNoaW5lRnJvbnQvY29mZmVlTWFjaGluZUZyb250JztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmVhclByb2dyZXNzJztcclxuaW1wb3J0IFNpZ25Gb3JtIGZyb20gJ2NvbXBvbmVudHMvYXV0aC9TaWduRm9ybSc7XHJcbmltcG9ydCBXZWF0aGVyIGZyb20gJ3dlYXRoZXJXaWRnZXQvV2VhdGhlcic7XHJcbmltcG9ydCBSYWRpbyBmcm9tICdjb21wb25lbnRzL3NvdW5kL3JhZGlvJztcclxudmFyIHNjb3JlID0gMDtcclxudmFyIExlYXJuaW5nTW9kZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCkudDtcclxuICAgIHZhciBfYSA9IHVzZVN0YXRlKDApLCBwcm9ncmVzcyA9IF9hWzBdLCBzZXRQcm9ncmVzcyA9IF9hWzFdO1xyXG4gICAgdmFyIHN0YXRlID0gTGVhcm5pbmdTdGVwc1twcm9ncmVzc107XHJcbiAgICB2YXIgbW9kYWxzID0gT2JqZWN0LmVudHJpZXMoc3RhdGUpO1xyXG4gICAgdmFyIG1hY2hpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFjaGluZScpO1xyXG4gICAgdmFyIG1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkJyk7XHJcbiAgICB2YXIgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlYXJuaW5nX19idG4nKTtcclxuICAgIHZhciBhdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGgnKTtcclxuICAgIHZhciBhdXRoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRoLWljb24nKTtcclxuICAgIHZhciBkcmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbF9fbWlkZGxlJyk7XHJcbiAgICB2YXIgc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xfX3NjcmVlbicpO1xyXG4gICAgdmFyIGFuc3dlcnMgPSBbXHJcbiAgICAgICAgWydyaWdodF9fbWFjaGluZScsICd3cm9uZ19fbW9kYWwnLCAnd3JvbmdfX21vZGFsJ10sXHJcbiAgICAgICAgWyd3cm9uZ19fbWFjaGluZScsICdyaWdodF9fbW9kYWwnLCAnd3JvbmdfX21vZGFsJ10sXHJcbiAgICAgICAgWyd3cm9uZ19fbWFjaGluZScsICd3cm9uZ19fbW9kYWwnLCAncmlnaHRfX21vZGFsJ11cclxuICAgIF07XHJcbiAgICBzd2l0Y2ggKHByb2dyZXNzKSB7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICB2YXIgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xyXG4gICAgICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9ncmVzcyhwcm9ncmVzcyArIDEpO1xyXG4gICAgICAgICAgICAgICAgYXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICBtYWNoaW5lLmNsYXNzTGlzdC5hZGQoJ2JsaW5rX19tYWNoaW5lJyk7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgbWFjaGluZS5jbGFzc0xpc3QucmVtb3ZlKCdibGlua19fbWFjaGluZScpOyB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICBtYWNoaW5lLmNsYXNzTGlzdC5hZGQoJ2JsaW5rX19tYWNoaW5lJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hY2hpbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgbWFjaGluZS5jbGFzc0xpc3QucmVtb3ZlKCdibGlua19fbWFjaGluZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGFsWzFdKVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsWzFdLmNsYXNzTGlzdC5hZGQoJ2JsaW5rX19tb2RhbCcpO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kYWxbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxbMV0uY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmtfX21vZGFsJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kYWxbMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxbMl0uY2xhc3NMaXN0LmFkZCgnYmxpbmtfX21vZGFsJyk7XHJcbiAgICAgICAgICAgIH0sIDYwMDApO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtb2RhbFsyXSlcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFsyXS5jbGFzc0xpc3QucmVtb3ZlKCdibGlua19fbW9kYWwnKTtcclxuICAgICAgICAgICAgfSwgOTAwMCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgaWYgKGF1dGhJY29uKVxyXG4gICAgICAgICAgICAgICAgYXV0aEljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgc2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBkcmlua3MuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7IH0sIDApO1xyXG4gICAgICAgICAgICBkcmlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9ncmVzcyhwcm9ncmVzcyArIDEpO1xyXG4gICAgICAgICAgICAgICAgbXNnLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgIGNhc2UgODpcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9ncmVzcyhwcm9ncmVzcyArIDEpO1xyXG4gICAgICAgICAgICAgICAgbXNnLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHNldFByb2dyZXNzKHByb2dyZXNzICsgMSk7IH0sIDcwMDApO1xyXG4gICAgICAgICAgICBzY29yZSA9IDA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgY2FzZSAxNjpcclxuICAgICAgICAgICAgc2V0QmxpY2soMCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgICAgIHNldEJsaWNrKDIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE1OlxyXG4gICAgICAgIGNhc2UgMTc6XHJcbiAgICAgICAgICAgIHNldEJsaWNrKDEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE4OlxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBmaW5pc2hNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxDZW50ZXInKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaW5pc2hNc2cpXHJcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoTXNnLmlubmVySFRNTCArPSBcIlFVSVogUkVTVUxUOiBZb3UgZ290IFwiLmNvbmNhdChzY29yZSwgXCIvNSBwb2ludHMhXCIpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgdmFyIGJvbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzJyk7XHJcbiAgICAgICAgICAgIGJvbnVzLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRCbGljayhpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICByZW1vdmVCbGljaygpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSAnS2V5VicpXHJcbiAgICAgICAgICAgICAgICBtYWNoaW5lLmNsYXNzTGlzdC5hZGQoYW5zd2Vyc1tpXVswXSk7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09ICdLZXlDJylcclxuICAgICAgICAgICAgICAgIG1vZGFsWzFdLmNsYXNzTGlzdC5hZGQoYW5zd2Vyc1tpXVsxXSk7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09ICdLZXlNJylcclxuICAgICAgICAgICAgICAgIG1vZGFsWzJdLmNsYXNzTGlzdC5hZGQoYW5zd2Vyc1tpXVsyXSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQmxpY2soKTtcclxuICAgICAgICAgICAgICAgIHNldFByb2dyZXNzKHByb2dyZXNzICsgMSk7XHJcbiAgICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgbXNnLmlubmVySFRNTCA9IFwiVklFV1wiOyB9LCAwKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUJsaWNrKCkge1xyXG4gICAgICAgIGNvdW50U2NvcmUoKTtcclxuICAgICAgICBtYWNoaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0X19tYWNoaW5lJyk7XHJcbiAgICAgICAgbWFjaGluZS5jbGFzc0xpc3QucmVtb3ZlKCd3cm9uZ19fbWFjaGluZScpO1xyXG4gICAgICAgIG1vZGFsWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0X19tb2RhbCcpO1xyXG4gICAgICAgIG1vZGFsWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ3dyb25nX19tb2RhbCcpO1xyXG4gICAgICAgIG1vZGFsWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0X19tb2RhbCcpO1xyXG4gICAgICAgIG1vZGFsWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ3dyb25nX19tb2RhbCcpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY291bnRTY29yZSgpIHtcclxuICAgICAgICBpZiAobWFjaGluZSAmJiBtb2RhbFsxXSAmJiBtb2RhbFsyXSkge1xyXG4gICAgICAgICAgICBpZiAobWFjaGluZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuaW5jbHVkZXMoJ3JpZ2h0X19tYWNoaW5lJykgfHxcclxuICAgICAgICAgICAgICAgIG1vZGFsWzFdLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmNsdWRlcygncmlnaHRfX21vZGFsJykgfHxcclxuICAgICAgICAgICAgICAgIG1vZGFsWzJdLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmNsdWRlcygncmlnaHRfX21vZGFsJykpXHJcbiAgICAgICAgICAgICAgICBzY29yZSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJ2xlYXJuaW5nLW1vZGUnKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChCb3gsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCdwcm9ncmVzcycpLCBzeDogeyB3aWR0aDogJzgwJScgfSB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmVhclByb2dyZXNzLCB7IGNvbG9yOiBcInNlY29uZGFyeVwiLCB2YXJpYW50OiBcImJ1ZmZlclwiLCB2YWx1ZTogcHJvZ3Jlc3MgLyAxOCAqIDEwMCwgdmFsdWVCdWZmZXI6IDEwMCB9KSB9KSksIExlYXJuaW5nU3RlcHMubGVuZ3RoID4gcHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgID8gbW9kYWxzLm1hcChmdW5jdGlvbiAobW9kYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kYWxbMV0udGV4dCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9qc3goTGVhcm5pbmdDYXJkLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChtb2RhbFswXSksIHt9LCBbXCJcIi5jb25jYXQobW9kYWxbMV0ucGljdHVyZSAhPT0gJycgPyAnd2l0aEltZycgOiAnJyldKSwgY2FsbGJhY2s6IHNldFByb2dyZXNzLCBwcm9ncmVzczogcHJvZ3Jlc3MsIHN0YXRlOiBtb2RhbFsxXSB9LCBcIlwiLmNvbmNhdChtb2RhbFswXSwgXCItaW5kZXhcIikpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgOiBfanN4KF9GcmFnbWVudCwge30pLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiAnbGVhcm5pbmdfX21hY2hpbmUnIH0sIHsgY2hpbGRyZW46IF9qc3goQ29mZmVlTWFjaGluZUZyb250LCB7fSkgfSkpLCBfanN4KFNpZ25Gb3JtLCB7IGNsYXNzTmFtZTogJ2NhcmQgYXV0aCcsIHR5cGVGb3JtOiAnc2lnbi11cCcgfSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiAnYm9udXMnIH0sIHsgY2hpbGRyZW46IFtfanN4KFdlYXRoZXIsIHt9KSwgX2pzeChSYWRpbywge30pXSB9KSldIH0pKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExlYXJuaW5nTW9kZVBhZ2U7XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0ICcuL3dlYXRoZXIuc2Nzcyc7XHJcbnZhciBDdXJyZW50V2VhdGhlciA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHdlYXRoZXIgPSBfYS53ZWF0aGVyO1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ3ZWF0aGVyLXdyYXBwZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ3ZWF0aGVyLW1haW5cIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChcImgzXCIsIHsgY2hpbGRyZW46IHdlYXRoZXIgPT09IG51bGwgPyBcIlwiIDogd2VhdGhlci5jaXR5X25hbWUgfSksIF9qc3goXCJwXCIsIHsgY2hpbGRyZW46IHdlYXRoZXIgPT09IG51bGwgPyBcIlwiIDogd2VhdGhlci53ZWF0aGVyLmRlc2NyaXB0aW9uIH0pXSB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwid2VhdGhlci1pbmZvXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidGVtcGVyYXR1cmVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImltZ1wiLCB7IHdpZHRoOiAnNjBweCcsIGFsdDogXCJ3ZWF0aGVyLWljb25cIiwgc3JjOiB3ZWF0aGVyID09PSBudWxsID8gXCJcIiA6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL01hcmluYUtvdmVsL2NvZmZlZW1hY2hpbmVkYXRhL21haW4vd2VhdGhlci9cIi5jb25jYXQod2VhdGhlci53ZWF0aGVyLmljb24sIFwiLnBuZ1wiKSB9KSwgX2pzeHMoXCJoMlwiLCB7IGNoaWxkcmVuOiBbd2VhdGhlciA9PT0gbnVsbCA/IFwiXCIgOiB3ZWF0aGVyLnRlbXAsIFwiXFx1MDBCMENcIl0gfSldIH0pKSB9KSldIH0pKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRXZWF0aGVyO1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3VycmVudFdlYXRoZXIgZnJvbSAnd2VhdGhlcldpZGdldC9DdXJyZW50V2VhdGhlcic7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmV4cG9ydCB2YXIgV0VBVEhFUl9BUElfS0VZID0gJ2I1NTc3ZGFjNTQ2MzRhODhhMzZlOWJjOGFiZTY5N2ZiJztcclxuZXhwb3J0IHZhciBCQVNFX1VSTCA9ICdodHRwczovL2FwaS53ZWF0aGVyYml0LmlvL3YyLjAvJztcclxudmFyIFdlYXRoZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaTE4biA9IHVzZVRyYW5zbGF0aW9uKCkuaTE4bjtcclxuICAgIHZhciBfYSA9IHVzZVN0YXRlKG51bGwpLCB3ZWF0aGVyID0gX2FbMF0sIHNldFdlYXRoZXIgPSBfYVsxXTtcclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gcG9zaXRpb24uY29vcmRzLCBsYXRpdHVkZSA9IF9hLmxhdGl0dWRlLCBsb25naXR1ZGUgPSBfYS5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgIGZldGNoKFwiXCIuY29uY2F0KEJBU0VfVVJMLCBcImN1cnJlbnQ/a2V5PVwiKS5jb25jYXQoV0VBVEhFUl9BUElfS0VZLCBcIiZsYW5nPVwiKS5jb25jYXQoaTE4bi5sYW5ndWFnZSwgXCImbGF0PVwiKS5jb25jYXQobGF0aXR1ZGUsIFwiJmxvbj1cIikuY29uY2F0KGxvbmdpdHVkZSwgXCImdW5pdHM9TVwiKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRXZWF0aGVyKHJlc3BvbnNlLmRhdGFbMF0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbaTE4bi5sYW5ndWFnZV0pO1xyXG4gICAgcmV0dXJuIChfanN4KEN1cnJlbnRXZWF0aGVyLCB7IHdlYXRoZXI6IHdlYXRoZXIgfSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyO1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53ZWF0aGVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDIyMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc5LCA0MiwgMTE1LCAwLjc4ODIzNTI5NDEpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLndlYXRoZXItd3JhcHBlciBoMiB7XFxuICBmb250LXNpemU6IDMycHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy93ZWF0aGVyV2lkZ2V0L3dlYXRoZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndlYXRoZXItd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzMmE3M2M5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBoMiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXIuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwianN4IiwiX2pzeCIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwianN4cyIsIl9qc3hzIiwiY2xhc3NOYW1lcyIsInVzZVRyYW5zbGF0aW9uIiwiTGVhcm5pbmdTdGVwcyIsInR1cm5PZmYiLCJyZW1vdmVDdXAiLCJMZWFybmluZ0NhcmQiLCJwcm9wcyIsInJhaXNlUHJvZ3Jlc3MiLCJpbmQiLCJjYWxsYmFjayIsIndpbmRvdyIsIm9wZW4iLCJjbGFzc05hbWUiLCJjb25jYXQiLCJjaGlsZHJlbiIsInN0YXRlIiwidGV4dCIsInBpY3R1cmUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImJ1dHRvbk9uZSIsIm9uQ2xpY2siLCJldmVudCIsInByb2dyZXNzIiwib25CdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJidXR0b25Ud28iLCJSZWFjdCIsIkhvd2wiLCJUb2dnbGVCdXR0b24iLCJHcmlkIiwiU2xpZGVyIiwicmFkaW8iLCJSYWRpbyIsIl9hIiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicGxheVJhZGlvIiwic3RvcCIsInVubG9hZCIsImhhbmRsZVNsaWRlckNoYW5nZSIsImh0bWw1Iiwidm9sdW1lIiwicGxheSIsIl9iIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm5ld1ZhbHVlIiwibmV3Vm9sdW1lIiwidG9GaXhlZCIsImNvbnRhaW5lciIsInNwYWNpbmciLCJhbGlnbkl0ZW1zIiwiaXRlbSIsIm9uQ2hhbmdlIiwieHMiLCJjb2xvciIsIm1vZGFsQ2VudGVyIiwibW9kYWxMZWZ0IiwibW9kYWxSaWdodFRvcCIsIm1vZGFsUmlnaHRCb3R0b20iLCJDb2ZmZWVNYWNoaW5lRnJvbnQiLCJCb3giLCJMaW5lYXJQcm9ncmVzcyIsIlNpZ25Gb3JtIiwiV2VhdGhlciIsInNjb3JlIiwiTGVhcm5pbmdNb2RlUGFnZSIsInNldFByb2dyZXNzIiwibW9kYWxzIiwiZW50cmllcyIsIm1hY2hpbmUiLCJtc2ciLCJtb2RhbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJidG4iLCJhdXRoIiwiYXV0aEljb24iLCJkcmlua3MiLCJzY3JlZW4iLCJhbnN3ZXJzIiwic3VibWl0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJpbm5lckhUTUwiLCJzZXRCbGljayIsImZpbmlzaE1zZyIsImJvbnVzIiwicmVtb3ZlQmxpY2siLCJjb2RlIiwib25jZSIsImNvdW50U2NvcmUiLCJpbmNsdWRlcyIsInN4IiwidmFyaWFudCIsInZhbHVlQnVmZmVyIiwibWFwIiwiY29uc29sZSIsImxvZyIsInR5cGVGb3JtIiwiQ3VycmVudFdlYXRoZXIiLCJ3ZWF0aGVyIiwiY2l0eV9uYW1lIiwiZGVzY3JpcHRpb24iLCJpY29uIiwidGVtcCIsInVzZUVmZmVjdCIsIldFQVRIRVJfQVBJX0tFWSIsIkJBU0VfVVJMIiwiaTE4biIsInNldFdlYXRoZXIiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJmZXRjaCIsImxhbmd1YWdlIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJlcnIiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=