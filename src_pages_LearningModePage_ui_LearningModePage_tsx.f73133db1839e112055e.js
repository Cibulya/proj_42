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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var fonts_LearningSteps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fonts/LearningSteps */ "./src/fonts/LearningSteps.ts");
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
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)().t;
  var raiseProgress = function raiseProgress(ind) {
    if (ind === fonts_LearningSteps__WEBPACK_IMPORTED_MODULE_2__.LearningSteps.length) {
      props.callback(ind - 1);
      window.open('https://www.youtube.com/watch?v=OBGxt8zhbRk');
    } else props.callback(ind);
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)('card', {}, ["".concat(props.className)])
  }, {
    children: [props.state.text !== '' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      children: t("".concat(props.state.text, ":key"))
    }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}), props.state.picture !== '' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      src: props.state.picture,
      width: "280px",
      height: "200px",
      alt: "MVC model"
    }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}), props.state.buttonOne !== '' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
      className: "learning__btn",
      onClick: function onClick(event) {
        t("".concat(props.state.buttonOne, ":key")) !== 'Repeat' ? raiseProgress(props.progress + 1) : raiseProgress(0);
      }
    }, {
      children: t("".concat(props.state.buttonOne, ":key"))
    })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}), props.state.buttonTwo !== '' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
      className: "learning__btn",
      onClick: function onClick(event) {
        raiseProgress(props.progress + 1);
      }
    }, {
      children: t("".concat(props.state.buttonTwo, ":key"))
    })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LearningCard);

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
    text: 'Welcome! \n Here we mix Real Life and Digital! We would like to introduce you the MVC architecture pattern on the Real Life Example – Coffee Machine. Or you can relax and drink a digital Coffee :)',
    picture: '',
    buttonOne: 'Let’s start!',
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
    text: 'So, you have an exclusive coffee machine like Elon Musk, do you? Turn it on.',
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
    text: 'Personal account in Coffee Machine? No way! Do you know that Coffee Machine is conceivable as an application divided on 3 parts, like MVC pattern?',
    picture: '',
    buttonOne: 'Let’s see',
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
    text: 'MVC is an architecture pattern which separates logic, UI & database connection of our application. It’s divided into 3 sections: MODEL, VIEW and CONTROLLER.',
    picture: 'https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/mvc.png',
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
    text: 'Now you (User) interact with VIEW. VIEW is responsible for look and feel of our application (UI components, forms, buttons..).',
    picture: '',
    buttonOne: 'Whaaat?',
    buttonTwo: ''
  },
  modalRightTop: {
    text: 'CONTROLLER \nreceives input from VIEW, uses logic to translate the input to a request for the MODEL',
    picture: '',
    buttonOne: '',
    buttonTwo: ''
  },
  modalRightBottom: {
    text: 'MODEL \nstores & manages data and provides data to the VIEW',
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
    text: 'But what’s happened during Logging in? \n1. You filled in the Login form in the VIEW.\n2. CONTROLLER verified and sent your data to MODEL. \n3. MODEL updated VIEW and you see your name and picture',
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
    text: 'And now let’s make an MVC coffee! Choose a coffee on the screen.',
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
    text: 'CONTROLLER:\nChecking validation of the User…',
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
    text: 'CONTROLLER:\nChecking water, coffee beans and free space in the waste container…',
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
    text: 'CONTROLLER:\nMODEL, you should make ',
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
    text: 'MODEL: \nPreparing ',
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
    text: 'MODEL: \nGrinding coffee beans. Water enters the boiler and heats up.',
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
    text: 'Coffee is ready. You can take it (click on the cup) in the VIEW. Check if you understood the MVC with a Quiz. Good luck!',
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
    text: 'Choose the correct element for this step (press "M" for MODEL, "V" for VIEW or "C" for CONTROLLER): You filled in the Login form',
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
    text: 'Choose the correct element for this step (press "M" for MODEL, "V" for VIEW or "C" for CONTROLLER): Preparation of the coffee',
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
    text: 'Choose the correct element for this step (press "M" for MODEL, "V" for VIEW or "C" for CONTROLLER): Checking water, coffee beans and free space in the waste container',
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
    text: 'Choose the correct element for this step (press "M" for MODEL, "V" for VIEW or "C" for CONTROLLER): You choose a drink',
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
    text: 'Choose the correct element for this step (press "M" for MODEL, "V" for VIEW or "C" for CONTROLLER): Checking validation of the User',
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
    text: 'Finish!\n It’s time to drink a REAL coffee!',
    picture: '',
    buttonOne: 'Shut down PC',
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var components_coffeeMachineFront_coffeeMachineFront__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/coffeeMachineFront/coffeeMachineFront */ "./src/components/coffeeMachineFront/coffeeMachineFront.tsx");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/LinearProgress */ "./node_modules/@mui/material/LinearProgress/LinearProgress.js");
/* harmony import */ var components_auth_UserSettingsForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/auth/UserSettingsForm */ "./src/components/auth/UserSettingsForm.tsx");
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










var LearningModePage = function LearningModePage() {
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)().t;
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    progress = _a[0],
    setProgress = _a[1];
  var state = fonts_LearningSteps__WEBPACK_IMPORTED_MODULE_4__.LearningSteps[progress];
  var modals = Object.entries(state);
  var machine = document.querySelector('.machine');
  var msg = document.querySelector('.message');
  var modal = document.getElementsByClassName('card');
  var btn = document.querySelector('.learning__btn');
  var answers = [['right__machine', 'wrong__modal', 'wrong__modal'], ['wrong__machine', 'right__modal', 'wrong__modal'], ['wrong__machine', 'wrong__modal', 'right__modal']];
  switch (progress) {
    case 1:
      var onBtn = document.querySelector('.onBtn');
      onBtn.addEventListener('click', function () {
        setProgress(progress + 1);
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
      var btns = document.querySelector('.control__middle');
      btns.addEventListener('click', function () {
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
      msg.innerHTML = 'VIEW';
    }, 0);
  }
  function removeBlick() {
    machine.classList.remove('right__machine');
    machine.classList.remove('wrong__machine');
    modal[1].classList.remove('right__modal');
    modal[1].classList.remove('wrong__modal');
    modal[2].classList.remove('right__modal');
    modal[2].classList.remove('wrong__modal');
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)('learning-mode')
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_UserSettingsForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}), fonts_LearningSteps__WEBPACK_IMPORTED_MODULE_4__.LearningSteps.length > progress ? modals.map(function (modal) {
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
      className: "learning__machine"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_coffeeMachineFront_coffeeMachineFront__WEBPACK_IMPORTED_MODULE_5__["default"], {})
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], __assign({
      className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)('progress'),
      sx: {
        width: '80%'
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "buffer",
        value: progress / 18 * 100,
        valueBuffer: 100
      })
    }))]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LearningModePage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0xlYXJuaW5nTW9kZVBhZ2VfdWlfTGVhcm5pbmdNb2RlUGFnZV90c3guZjczMTMzZGIxODM5ZTExMjA1NWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsUUFBUSxJQUFLLFlBQVk7RUFDbERBLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLElBQUksVUFBU0MsQ0FBQyxFQUFFO0lBQ3BDLEtBQUssSUFBSUMsQ0FBQyxFQUFFQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFSCxDQUFDLEdBQUdDLENBQUMsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDakRELENBQUMsR0FBR0csU0FBUyxDQUFDRixDQUFDLENBQUM7TUFDaEIsS0FBSyxJQUFJSSxDQUFDLElBQUlMLENBQUMsRUFBRSxJQUFJSCxNQUFNLENBQUNTLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQzNETixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztJQUNuQjtJQUNBLE9BQU9OLENBQUM7RUFDWixDQUFDO0VBQ0QsT0FBT0gsUUFBUSxDQUFDYSxLQUFLLENBQUMsSUFBSSxFQUFFTixTQUFTLENBQUM7QUFDMUMsQ0FBQztBQUNxRjtBQUMzQjtBQUNaO0FBQ0s7QUFDcEQsSUFBSWdCLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQWFDLEtBQUssRUFBRTtFQUNoQyxJQUFJckIsQ0FBQyxHQUFHa0IsNkRBQWMsRUFBRSxDQUFDbEIsQ0FBQztFQUMxQixJQUFJc0IsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLENBQWFDLEdBQUcsRUFBRTtJQUMvQixJQUFJQSxHQUFHLEtBQUtKLHFFQUFvQixFQUFFO01BQzlCRSxLQUFLLENBQUNHLFFBQVEsQ0FBQ0QsR0FBRyxHQUFH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QUksR0FBRztRQUFFMEMsV0FBVyxFQUFFO01BQUksQ0FBQztJQUFFLENBQUMsQ0FBQyxDQUFDO0VBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaFYsQ0FBQztBQUNELGlFQUFlL0IsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9jYXJkcy9MZWFybmluZ0NhcmQudHN4Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2ZvbnRzL0xlYXJuaW5nU3RlcHMudHMiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvcGFnZXMvTGVhcm5pbmdNb2RlUGFnZS91aS9MZWFybmluZ01vZGVQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ2hlbHBlcnMvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgTGVhcm5pbmdTdGVwcyB9IGZyb20gJ2ZvbnRzL0xlYXJuaW5nU3RlcHMnO1xyXG52YXIgTGVhcm5pbmdDYXJkID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCkudDtcclxuICAgIHZhciByYWlzZVByb2dyZXNzID0gZnVuY3Rpb24gKGluZCkge1xyXG4gICAgICAgIGlmIChpbmQgPT09IExlYXJuaW5nU3RlcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrKGluZCAtIDEpO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1PQkd4dDh6aGJSaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrKGluZCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lcygnY2FyZCcsIHt9LCBbXCJcIi5jb25jYXQocHJvcHMuY2xhc3NOYW1lKV0pIH0sIHsgY2hpbGRyZW46IFtwcm9wcy5zdGF0ZS50ZXh0ICE9PSAnJyA/IF9qc3goXCJwXCIsIHsgY2hpbGRyZW46IHQoXCJcIi5jb25jYXQocHJvcHMuc3RhdGUudGV4dCwgXCI6a2V5XCIpKSB9KSA6IF9qc3goX0ZyYWdtZW50LCB7fSksIHByb3BzLnN0YXRlLnBpY3R1cmUgIT09ICcnID8gKF9qc3goXCJpbWdcIiwgeyBzcmM6IHByb3BzLnN0YXRlLnBpY3R1cmUsIHdpZHRoOiBcIjI4MHB4XCIsIGhlaWdodDogXCIyMDBweFwiLCBhbHQ6IFwiTVZDIG1vZGVsXCIgfSkpIDogKF9qc3goX0ZyYWdtZW50LCB7fSkpLCBwcm9wcy5zdGF0ZS5idXR0b25PbmUgIT09ICcnID8gKF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibGVhcm5pbmdfX2J0blwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0KFwiXCIuY29uY2F0KHByb3BzLnN0YXRlLmJ1dHRvbk9uZSwgXCI6a2V5XCIpKSAhPT0gJ1JlcGVhdCcgPyByYWlzZVByb2dyZXNzKHByb3BzLnByb2dyZXNzICsgMSkgOiByYWlzZVByb2dyZXNzKDApO1xyXG4gICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiB0KFwiXCIuY29uY2F0KHByb3BzLnN0YXRlLmJ1dHRvbk9uZSwgXCI6a2V5XCIpKSB9KSkpIDogKF9qc3goX0ZyYWdtZW50LCB7fSkpLCBwcm9wcy5zdGF0ZS5idXR0b25Ud28gIT09ICcnID8gKF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibGVhcm5pbmdfX2J0blwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByYWlzZVByb2dyZXNzKHByb3BzLnByb2dyZXNzICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IHQoXCJcIi5jb25jYXQocHJvcHMuc3RhdGUuYnV0dG9uVHdvLCBcIjprZXlcIikpIH0pKSkgOiAoX2pzeChfRnJhZ21lbnQsIHt9KSldIH0pKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExlYXJuaW5nQ2FyZDtcclxuIiwiZXhwb3J0IHZhciBMZWFybmluZ1N0ZXBzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdXZWxjb21lISBcXG4gSGVyZSB3ZSBtaXggUmVhbCBMaWZlIGFuZCBEaWdpdGFsISBXZSB3b3VsZCBsaWtlIHRvIGludHJvZHVjZSB5b3UgdGhlIE1WQyBhcmNoaXRlY3R1cmUgcGF0dGVybiBvbiB0aGUgUmVhbCBMaWZlIEV4YW1wbGUg4oCTIENvZmZlZSBNYWNoaW5lLiBPciB5b3UgY2FuIHJlbGF4IGFuZCBkcmluayBhIGRpZ2l0YWwgQ29mZmVlIDopJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJ0xldOKAmXMgc3RhcnQhJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnU28sIHlvdSBoYXZlIGFuIGV4Y2x1c2l2ZSBjb2ZmZWUgbWFjaGluZSBsaWtlIEVsb24gTXVzaywgZG8geW91PyBUdXJuIGl0IG9uLicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdQZXJzb25hbCBhY2NvdW50IGluIENvZmZlZSBNYWNoaW5lPyBObyB3YXkhIERvIHlvdSBrbm93IHRoYXQgQ29mZmVlIE1hY2hpbmUgaXMgY29uY2VpdmFibGUgYXMgYW4gYXBwbGljYXRpb24gZGl2aWRlZCBvbiAzIHBhcnRzLCBsaWtlIE1WQyBwYXR0ZXJuPycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdMZXTigJlzIHNlZScsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0Qm90dG9tOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ01WQyBpcyBhbiBhcmNoaXRlY3R1cmUgcGF0dGVybiB3aGljaCBzZXBhcmF0ZXMgbG9naWMsIFVJICYgZGF0YWJhc2UgY29ubmVjdGlvbiBvZiBvdXIgYXBwbGljYXRpb24uIEl04oCZcyBkaXZpZGVkIGludG8gMyBzZWN0aW9uczogTU9ERUwsIFZJRVcgYW5kIENPTlRST0xMRVIuJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9jb2ZmZWVtYWNoaW5lZGF0YS9tYWluL212Yy5wbmcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdPSycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0Qm90dG9tOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ05vdyB5b3UgKFVzZXIpIGludGVyYWN0IHdpdGggVklFVy4gVklFVyBpcyByZXNwb25zaWJsZSBmb3IgbG9vayBhbmQgZmVlbCBvZiBvdXIgYXBwbGljYXRpb24gKFVJIGNvbXBvbmVudHMsIGZvcm1zLCBidXR0b25zLi4pLicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdXaGFhYXQ/JyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnQ09OVFJPTExFUiBcXG5yZWNlaXZlcyBpbnB1dCBmcm9tIFZJRVcsIHVzZXMgbG9naWMgdG8gdHJhbnNsYXRlIHRoZSBpbnB1dCB0byBhIHJlcXVlc3QgZm9yIHRoZSBNT0RFTCcsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0Qm90dG9tOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdNT0RFTCBcXG5zdG9yZXMgJiBtYW5hZ2VzIGRhdGEgYW5kIHByb3ZpZGVzIGRhdGEgdG8gdGhlIFZJRVcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0J1dCB3aGF04oCZcyBoYXBwZW5lZCBkdXJpbmcgTG9nZ2luZyBpbj8gXFxuMS4gWW91IGZpbGxlZCBpbiB0aGUgTG9naW4gZm9ybSBpbiB0aGUgVklFVy5cXG4yLiBDT05UUk9MTEVSIHZlcmlmaWVkIGFuZCBzZW50IHlvdXIgZGF0YSB0byBNT0RFTC4gXFxuMy4gTU9ERUwgdXBkYXRlZCBWSUVXIGFuZCB5b3Ugc2VlIHlvdXIgbmFtZSBhbmQgcGljdHVyZScsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdPSycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0NPTlRST0xMRVInLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnTU9ERUwnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0FuZCBub3cgbGV04oCZcyBtYWtlIGFuIE1WQyBjb2ZmZWUhIENob29zZSBhIGNvZmZlZSBvbiB0aGUgc2NyZWVuLicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnQ09OVFJPTExFUjpcXG5DaGVja2luZyB2YWxpZGF0aW9uIG9mIHRoZSBVc2Vy4oCmJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0NPTlRST0xMRVI6XFxuQ2hlY2tpbmcgd2F0ZXIsIGNvZmZlZSBiZWFucyBhbmQgZnJlZSBzcGFjZSBpbiB0aGUgd2FzdGUgY29udGFpbmVy4oCmJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0NPTlRST0xMRVI6XFxuTU9ERUwsIHlvdSBzaG91bGQgbWFrZSAnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJ01PREVMOiBcXG5QcmVwYXJpbmcgJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJ01PREVMOiBcXG5HcmluZGluZyBjb2ZmZWUgYmVhbnMuIFdhdGVyIGVudGVycyB0aGUgYm9pbGVyIGFuZCBoZWF0cyB1cC4nLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0NvZmZlZSBpcyByZWFkeS4gWW91IGNhbiB0YWtlIGl0IChjbGljayBvbiB0aGUgY3VwKSBpbiB0aGUgVklFVy4gQ2hlY2sgaWYgeW91IHVuZGVyc3Rvb2QgdGhlIE1WQyB3aXRoIGEgUXVpei4gR29vZCBsdWNrIScsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdSZXBlYXQnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICdRdWl6J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnQ2hvb3NlIHRoZSBjb3JyZWN0IGVsZW1lbnQgZm9yIHRoaXMgc3RlcCAocHJlc3MgXCJNXCIgZm9yIE1PREVMLCBcIlZcIiBmb3IgVklFVyBvciBcIkNcIiBmb3IgQ09OVFJPTExFUik6IFlvdSBmaWxsZWQgaW4gdGhlIExvZ2luIGZvcm0nLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnTmV4dCcsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0NPTlRST0xMRVInLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnTU9ERUwnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0Nob29zZSB0aGUgY29ycmVjdCBlbGVtZW50IGZvciB0aGlzIHN0ZXAgKHByZXNzIFwiTVwiIGZvciBNT0RFTCwgXCJWXCIgZm9yIFZJRVcgb3IgXCJDXCIgZm9yIENPTlRST0xMRVIpOiBQcmVwYXJhdGlvbiBvZiB0aGUgY29mZmVlJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJ05leHQnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdDT05UUk9MTEVSJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJ01PREVMJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdDaG9vc2UgdGhlIGNvcnJlY3QgZWxlbWVudCBmb3IgdGhpcyBzdGVwIChwcmVzcyBcIk1cIiBmb3IgTU9ERUwsIFwiVlwiIGZvciBWSUVXIG9yIFwiQ1wiIGZvciBDT05UUk9MTEVSKTogQ2hlY2tpbmcgd2F0ZXIsIGNvZmZlZSBiZWFucyBhbmQgZnJlZSBzcGFjZSBpbiB0aGUgd2FzdGUgY29udGFpbmVyJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJ05leHQnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdDT05UUk9MTEVSJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJ01PREVMJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdDaG9vc2UgdGhlIGNvcnJlY3QgZWxlbWVudCBmb3IgdGhpcyBzdGVwIChwcmVzcyBcIk1cIiBmb3IgTU9ERUwsIFwiVlwiIGZvciBWSUVXIG9yIFwiQ1wiIGZvciBDT05UUk9MTEVSKTogWW91IGNob29zZSBhIGRyaW5rJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJ05leHQnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdDT05UUk9MTEVSJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJ01PREVMJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdDaG9vc2UgdGhlIGNvcnJlY3QgZWxlbWVudCBmb3IgdGhpcyBzdGVwIChwcmVzcyBcIk1cIiBmb3IgTU9ERUwsIFwiVlwiIGZvciBWSUVXIG9yIFwiQ1wiIGZvciBDT05UUk9MTEVSKTogQ2hlY2tpbmcgdmFsaWRhdGlvbiBvZiB0aGUgVXNlcicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdOZXh0JyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnQ09OVFJPTExFUicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0Qm90dG9tOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdNT0RFTCcsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnRmluaXNoIVxcbiBJdOKAmXMgdGltZSB0byBkcmluayBhIFJFQUwgY29mZmVlIScsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdTaHV0IGRvd24gUEMnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbl07XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExlYXJuaW5nQ2FyZCBmcm9tICdjb21wb25lbnRzL2NhcmRzL0xlYXJuaW5nQ2FyZCc7XHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdoZWxwZXJzL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XHJcbmltcG9ydCB7IExlYXJuaW5nU3RlcHMgfSBmcm9tICdmb250cy9MZWFybmluZ1N0ZXBzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IENvZmZlZU1hY2hpbmVGcm9udCBmcm9tICdjb21wb25lbnRzL2NvZmZlZU1hY2hpbmVGcm9udC9jb2ZmZWVNYWNoaW5lRnJvbnQnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluZWFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgVXNlclNldHRpbmdzRm9ybSBmcm9tICdjb21wb25lbnRzL2F1dGgvVXNlclNldHRpbmdzRm9ybSc7XHJcbnZhciBMZWFybmluZ01vZGVQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbigpLnQ7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSgwKSwgcHJvZ3Jlc3MgPSBfYVswXSwgc2V0UHJvZ3Jlc3MgPSBfYVsxXTtcclxuICAgIHZhciBzdGF0ZSA9IExlYXJuaW5nU3RlcHNbcHJvZ3Jlc3NdO1xyXG4gICAgdmFyIG1vZGFscyA9IE9iamVjdC5lbnRyaWVzKHN0YXRlKTtcclxuICAgIHZhciBtYWNoaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hY2hpbmUnKTtcclxuICAgIHZhciBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xyXG4gICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZCcpO1xyXG4gICAgdmFyIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWFybmluZ19fYnRuJyk7XHJcbiAgICB2YXIgYW5zd2VycyA9IFtcclxuICAgICAgICBbJ3JpZ2h0X19tYWNoaW5lJywgJ3dyb25nX19tb2RhbCcsICd3cm9uZ19fbW9kYWwnXSxcclxuICAgICAgICBbJ3dyb25nX19tYWNoaW5lJywgJ3JpZ2h0X19tb2RhbCcsICd3cm9uZ19fbW9kYWwnXSxcclxuICAgICAgICBbJ3dyb25nX19tYWNoaW5lJywgJ3dyb25nX19tb2RhbCcsICdyaWdodF9fbW9kYWwnXSxcclxuICAgIF07XHJcbiAgICBzd2l0Y2ggKHByb2dyZXNzKSB7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICB2YXIgb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25CdG4nKTtcclxuICAgICAgICAgICAgb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9ncmVzcyhwcm9ncmVzcyArIDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICBtYWNoaW5lLmNsYXNzTGlzdC5hZGQoJ2JsaW5rX19tYWNoaW5lJyk7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1hY2hpbmUuY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmtfX21hY2hpbmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgbWFjaGluZS5jbGFzc0xpc3QuYWRkKCdibGlua19fbWFjaGluZScpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtYWNoaW5lKVxyXG4gICAgICAgICAgICAgICAgICAgIG1hY2hpbmUuY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmtfX21hY2hpbmUnKTtcclxuICAgICAgICAgICAgICAgIGlmIChtb2RhbFsxXSlcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFsxXS5jbGFzc0xpc3QuYWRkKCdibGlua19fbW9kYWwnKTtcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGFsWzFdKVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2JsaW5rX19tb2RhbCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGFsWzJdKVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsWzJdLmNsYXNzTGlzdC5hZGQoJ2JsaW5rX19tb2RhbCcpO1xyXG4gICAgICAgICAgICB9LCA2MDAwKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kYWxbMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxbMl0uY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmtfX21vZGFsJyk7XHJcbiAgICAgICAgICAgIH0sIDkwMDApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgIHZhciBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xfX21pZGRsZScpO1xyXG4gICAgICAgICAgICBidG5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MgKyAxKTtcclxuICAgICAgICAgICAgICAgIG1zZy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNzpcclxuICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MgKyAxKTtcclxuICAgICAgICAgICAgICAgIG1zZy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MgKyAxKTtcclxuICAgICAgICAgICAgfSwgNzAwMCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgY2FzZSAxNjpcclxuICAgICAgICAgICAgc2V0QmxpY2soMCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgICAgIHNldEJsaWNrKDIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE1OlxyXG4gICAgICAgIGNhc2UgMTc6XHJcbiAgICAgICAgICAgIHNldEJsaWNrKDEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0QmxpY2soaSkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgcmVtb3ZlQmxpY2soKTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0tleVYnKVxyXG4gICAgICAgICAgICAgICAgbWFjaGluZS5jbGFzc0xpc3QuYWRkKGFuc3dlcnNbaV1bMF0pO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSAnS2V5QycpXHJcbiAgICAgICAgICAgICAgICBtb2RhbFsxXS5jbGFzc0xpc3QuYWRkKGFuc3dlcnNbaV1bMV0pO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSAnS2V5TScpXHJcbiAgICAgICAgICAgICAgICBtb2RhbFsyXS5jbGFzc0xpc3QuYWRkKGFuc3dlcnNbaV1bMl0pO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUJsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9ncmVzcyhwcm9ncmVzcyArIDEpO1xyXG4gICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1zZy5pbm5lckhUTUwgPSAnVklFVyc7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVCbGljaygpIHtcclxuICAgICAgICBtYWNoaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0X19tYWNoaW5lJyk7XHJcbiAgICAgICAgbWFjaGluZS5jbGFzc0xpc3QucmVtb3ZlKCd3cm9uZ19fbWFjaGluZScpO1xyXG4gICAgICAgIG1vZGFsWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0X19tb2RhbCcpO1xyXG4gICAgICAgIG1vZGFsWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ3dyb25nX19tb2RhbCcpO1xyXG4gICAgICAgIG1vZGFsWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0X19tb2RhbCcpO1xyXG4gICAgICAgIG1vZGFsWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ3dyb25nX19tb2RhbCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lcygnbGVhcm5pbmctbW9kZScpIH0sIHsgY2hpbGRyZW46IFtfanN4KFVzZXJTZXR0aW5nc0Zvcm0sIHt9KSwgTGVhcm5pbmdTdGVwcy5sZW5ndGggPiBwcm9ncmVzcyA/IChtb2RhbHMubWFwKGZ1bmN0aW9uIChtb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGFsWzFdLnRleHQgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoX2pzeChMZWFybmluZ0NhcmQsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KG1vZGFsWzBdKSwge30sIFtcIlwiLmNvbmNhdChtb2RhbFsxXS5waWN0dXJlICE9PSAnJyA/ICd3aXRoSW1nJyA6ICcnKV0pLCBjYWxsYmFjazogc2V0UHJvZ3Jlc3MsIHByb2dyZXNzOiBwcm9ncmVzcywgc3RhdGU6IG1vZGFsWzFdIH0sIFwiXCIuY29uY2F0KG1vZGFsWzBdLCBcIi1pbmRleFwiKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSkgOiAoX2pzeChfRnJhZ21lbnQsIHt9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibGVhcm5pbmdfX21hY2hpbmVcIiB9LCB7IGNoaWxkcmVuOiBfanN4KENvZmZlZU1hY2hpbmVGcm9udCwge30pIH0pKSwgX2pzeChCb3gsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCdwcm9ncmVzcycpLCBzeDogeyB3aWR0aDogJzgwJScgfSB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmVhclByb2dyZXNzLCB7IHZhcmlhbnQ6IFwiYnVmZmVyXCIsIHZhbHVlOiAocHJvZ3Jlc3MgLyAxOCkgKiAxMDAsIHZhbHVlQnVmZmVyOiAxMDAgfSkgfSkpXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMZWFybmluZ01vZGVQYWdlO1xyXG4iXSwibmFtZXMiOlsiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwianN4IiwiX2pzeCIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwianN4cyIsIl9qc3hzIiwiY2xhc3NOYW1lcyIsInVzZVRyYW5zbGF0aW9uIiwiTGVhcm5pbmdTdGVwcyIsIkxlYXJuaW5nQ2FyZCIsInByb3BzIiwicmFpc2VQcm9ncmVzcyIsImluZCIsImNhbGxiYWNrIiwid2luZG93Iiwib3BlbiIsImNsYXNzTmFtZSIsImNvbmNhdCIsImNoaWxkcmVuIiwic3RhdGUiLCJ0ZXh0IiwicGljdHVyZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiYnV0dG9uT25lIiwib25DbGljayIsImV2ZW50IiwicHJvZ3Jlc3MiLCJidXR0b25Ud28iLCJtb2RhbENlbnRlciIsIm1vZGFsTGVmdCIsIm1vZGFsUmlnaHRUb3AiLCJtb2RhbFJpZ2h0Qm90dG9tIiwidXNlU3RhdGUiLCJDb2ZmZWVNYWNoaW5lRnJvbnQiLCJCb3giLCJMaW5lYXJQcm9ncmVzcyIsIlVzZXJTZXR0aW5nc0Zvcm0iLCJMZWFybmluZ01vZGVQYWdlIiwiX2EiLCJzZXRQcm9ncmVzcyIsIm1vZGFscyIsImVudHJpZXMiLCJtYWNoaW5lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibXNnIiwibW9kYWwiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYnRuIiwiYW5zd2VycyIsIm9uQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJidG5zIiwiaW5uZXJIVE1MIiwic2V0QmxpY2siLCJyZW1vdmVCbGljayIsImNvZGUiLCJvbmNlIiwibWFwIiwiY29uc29sZSIsImxvZyIsInN4IiwidmFyaWFudCIsInZhbHVlIiwidmFsdWVCdWZmZXIiXSwic291cmNlUm9vdCI6IiJ9