"use strict";
(self["webpackChunkproj_42"] = self["webpackChunkproj_42"] || []).push([["src_pages_LearningModePage_ui_LearningModePage_tsx"],{

/***/ "./src/components/auth/UserForm.tsx":
/*!******************************************!*\
  !*** ./src/components/auth/UserForm.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/classNames/classNames */ "./src/helpers/classNames/classNames.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
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





var UserForm = function (props) {
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)().t;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), photo = _a[0], setPhoto = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), urlPhoto = _b[0], setUrlPhoto = _b[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        fetch('https://guiseppe-production.up.railway.app/api/login', {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            //origin: 'https://guiseppe-production.up.railway.app/',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'cibulyadev@gmail.com',
                password: 'passsword',
            }),
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            console.log(data);
            setUrlPhoto(data.userImage);
        });
    });
    var checkSubmitForm = function (event) {
        var formData = new FormData();
        formData.append('image', photo);
        console.log(photo);
        event.preventDefault();
        fetch('https://guiseppe-production.up.railway.app/api/setpicture', {
            method: 'PATCH',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userImage: formData,
                email: 'cibulyadev@gmail.com',
            }),
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            console.log(data);
        });
    };
    var savePhoto = function () { };
    var selectPhoto = function (e) {
        var fileList = e.target.files;
        if (!fileList)
            return;
        setPhoto(fileList[0]);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)('sign-wrapper', {}, [props.className]) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: t('user') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ className: "form", onSubmit: checkSubmitForm, noValidate: true }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { alt: props.username || 'user', src: urlPhoto, sx: { width: 56, height: 56 } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", __assign({ className: "label", htmlFor: "file" }, { children: t('add-file') })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: "input", type: "file", name: "file", onChange: selectPhoto }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "submit" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "learning__btn" }, { children: t('save') })) }))] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserForm);


/***/ }),

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




var LearningCard = function (props) {
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)().t;
    var raiseProgress = function (ind) {
        if (ind === fonts_LearningSteps__WEBPACK_IMPORTED_MODULE_2__.LearningSteps.length) {
            props.callback(ind - 1);
            window.open('https://www.youtube.com/watch?v=OBGxt8zhbRk');
        }
        else
            props.callback(ind);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)('card', {}, ["".concat(props.className)]) }, { children: [props.state.text !== '' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: t("".concat(props.state.text, ":key")) }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}), props.state.picture !== '' ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: props.state.picture, width: "280px", height: "200px", alt: "MVC model" })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})), props.state.buttonOne !== '' ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "learning__btn", onClick: function (event) {
                    t("".concat(props.state.buttonOne, ":key")) !== 'Repeat' ? raiseProgress(props.progress + 1) : raiseProgress(0);
                } }, { children: t("".concat(props.state.buttonOne, ":key")) }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})), props.state.buttonTwo !== '' ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "learning__btn", onClick: function (event) {
                    raiseProgress(props.progress + 1);
                } }, { children: t("".concat(props.state.buttonTwo, ":key")) }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}))] })));
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
var LearningSteps = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    }
];


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
/* harmony import */ var components_auth_UserForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/auth/UserForm */ "./src/components/auth/UserForm.tsx");
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










var LearningModePage = function () {
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)().t;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), progress = _a[0], setProgress = _a[1];
    var state = fonts_LearningSteps__WEBPACK_IMPORTED_MODULE_4__.LearningSteps[progress];
    var modals = Object.entries(state);
    var machine = document.querySelector('.machine');
    var msg = document.querySelector('.message');
    var modal = document.getElementsByClassName('card');
    var btn = document.querySelector('.learning__btn');
    var answers = [
        ['right__machine', 'wrong__modal', 'wrong__modal'],
        ['wrong__machine', 'right__modal', 'wrong__modal'],
        ['wrong__machine', 'wrong__modal', 'right__modal'],
    ];
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
                if (machine)
                    machine.classList.remove('blink__machine');
                if (modal[1])
                    modal[1].classList.add('blink__modal');
            }, 3000);
            setTimeout(function () {
                if (modal[1])
                    modal[1].classList.remove('blink__modal');
                if (modal[2])
                    modal[2].classList.add('blink__modal');
            }, 6000);
            setTimeout(function () {
                if (modal[2])
                    modal[2].classList.remove('blink__modal');
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
            if (event.code == 'KeyV')
                machine.classList.add(answers[i][0]);
            if (event.code == 'KeyC')
                modal[1].classList.add(answers[i][1]);
            if (event.code == 'KeyM')
                modal[2].classList.add(answers[i][2]);
            setTimeout(function () {
                removeBlick();
                setProgress(progress + 1);
            }, 1500);
        }, { once: true });
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)('learning-mode') }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_UserForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}), fonts_LearningSteps__WEBPACK_IMPORTED_MODULE_4__.LearningSteps.length > progress ? (modals.map(function (modal) {
                if (modal[1].text !== '') {
                    console.log(progress);
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_cards_LearningCard__WEBPACK_IMPORTED_MODULE_2__["default"], { className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)("".concat(modal[0]), {}, ["".concat(modal[1].picture !== '' ? 'withImg' : '')]), callback: setProgress, progress: progress, state: modal[1] }, "".concat(modal[0], "-index")));
                }
            })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "learning__machine" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_coffeeMachineFront_coffeeMachineFront__WEBPACK_IMPORTED_MODULE_5__["default"], {}) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], __assign({ className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)('progress'), sx: { width: '80%' } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_9__["default"], { variant: "buffer", value: (progress / 18) * 100, valueBuffer: 100 }) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LearningModePage);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0xlYXJuaW5nTW9kZVBhZ2VfdWlfTGVhcm5pbmdNb2RlUGFnZV90c3guZjA1Yzc2MzMxYjFlZjcwODZkYWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUNuQjtBQUNlO0FBQ1o7QUFDUjtBQUN2QztBQUNBLFlBQVksNkRBQWM7QUFDMUIsYUFBYSwrQ0FBUTtBQUNyQixhQUFhLCtDQUFRO0FBQ3JCLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULHdDQUF3Qyx5QkFBeUI7QUFDakU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Qsd0NBQXdDLHlCQUF5QjtBQUNqRTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLG1CQUFtQixXQUFXLHlFQUFVLG1CQUFtQixzQkFBc0IsSUFBSSxXQUFXLHNEQUFJLFNBQVMscUJBQXFCLEdBQUcsdURBQUssb0JBQW9CLGdFQUFnRSxJQUFJLFdBQVcsc0RBQUksQ0FBQyxxREFBTSxJQUFJLG9EQUFvRCx5QkFBeUIsR0FBRyxzREFBSSxxQkFBcUIscUNBQXFDLElBQUkseUJBQXlCLElBQUksc0RBQUksWUFBWSx1RUFBdUUsR0FBRyxzREFBSSxtQkFBbUIscUJBQXFCLElBQUksVUFBVSxzREFBSSxzQkFBc0IsNEJBQTRCLElBQUkscUJBQXFCLElBQUksS0FBSyxLQUFLO0FBQzdxQjtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFeEIsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRjtBQUMzQjtBQUNaO0FBQ0s7QUFDcEQ7QUFDQSxZQUFZLDZEQUFjO0FBQzFCO0FBQ0Esb0JBQW9CLHFFQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLG1CQUFtQixXQUFXLHlFQUFVLFdBQVcsaUNBQWlDLElBQUkscUNBQXFDLHNEQUFJLFFBQVEsa0RBQWtELElBQUksc0RBQUksQ0FBQyx1REFBUyxJQUFJLGlDQUFpQyxzREFBSSxVQUFVLDZFQUE2RSxNQUFNLHNEQUFJLENBQUMsdURBQVMsSUFBSSxvQ0FBb0Msc0RBQUksc0JBQXNCO0FBQ3BiO0FBQ0EsbUJBQW1CLElBQUksdURBQXVELE9BQU8sc0RBQUksQ0FBQyx1REFBUyxJQUFJLG9DQUFvQyxzREFBSSxzQkFBc0I7QUFDcks7QUFDQSxtQkFBbUIsSUFBSSx1REFBdUQsT0FBTyxzREFBSSxDQUFDLHVEQUFTLElBQUksS0FBSztBQUM1RztBQUNBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JyQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9lQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NGO0FBQ3JEO0FBQ3dCO0FBQ0U7QUFDUDtBQUNMO0FBQ21DO0FBQzlDO0FBQ3NCO0FBQ1Y7QUFDaEQ7QUFDQSxZQUFZLDZEQUFjO0FBQzFCLGFBQWEsK0NBQVE7QUFDckIsZ0JBQWdCLDhEQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTLElBQUksWUFBWTtBQUN6QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQUssbUJBQW1CLFdBQVcseUVBQVUsbUJBQW1CLElBQUksV0FBVyxzREFBSSxDQUFDLGdFQUFRLElBQUksR0FBRyxxRUFBb0I7QUFDbkk7QUFDQTtBQUNBLDRCQUE0QixzREFBSSxDQUFDLHFFQUFZLElBQUksV0FBVyx5RUFBVSx3QkFBd0Isc0hBQXNIO0FBQ3BOO0FBQ0EsYUFBYSxNQUFNLHNEQUFJLENBQUMsdURBQVMsSUFBSSxJQUFJLHNEQUFJLG1CQUFtQixnQ0FBZ0MsSUFBSSxVQUFVLHNEQUFJLENBQUMsd0ZBQWtCLElBQUksR0FBRyxJQUFJLHNEQUFJLENBQUMseURBQUcsYUFBYSxXQUFXLHlFQUFVLG9CQUFvQixnQkFBZ0IsSUFBSSxVQUFVLHNEQUFJLENBQUMsb0VBQWMsSUFBSSxtRUFBbUUsR0FBRyxLQUFLO0FBQzlVO0FBQ0EsaUVBQWUsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2F1dGgvVXNlckZvcm0udHN4Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvTGVhcm5pbmdDYXJkLnRzeCIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9mb250cy9MZWFybmluZ1N0ZXBzLnRzIiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL3BhZ2VzL0xlYXJuaW5nTW9kZVBhZ2UvdWkvTGVhcm5pbmdNb2RlUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnaGVscGVycy9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxudmFyIFVzZXJGb3JtID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCkudDtcclxuICAgIHZhciBfYSA9IHVzZVN0YXRlKCksIHBob3RvID0gX2FbMF0sIHNldFBob3RvID0gX2FbMV07XHJcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZSgnJyksIHVybFBob3RvID0gX2JbMF0sIHNldFVybFBob3RvID0gX2JbMV07XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL2d1aXNlcHBlLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvYXBpL2xvZ2luJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgICAgICAvL29yaWdpbjogJ2h0dHBzOi8vZ3Vpc2VwcGUtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC8nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2NpYnVseWFkZXZAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAncGFzc3N3b3JkJyxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRVcmxQaG90byhkYXRhLnVzZXJJbWFnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHZhciBjaGVja1N1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgcGhvdG8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBob3RvKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL2d1aXNlcHBlLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvYXBpL3NldHBpY3R1cmUnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgdXNlckltYWdlOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnY2lidWx5YWRldkBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNhdmVQaG90byA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgIHZhciBzZWxlY3RQaG90byA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGZpbGVMaXN0ID0gZS50YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgaWYgKCFmaWxlTGlzdClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHNldFBob3RvKGZpbGVMaXN0WzBdKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCdzaWduLXdyYXBwZXInLCB7fSwgW3Byb3BzLmNsYXNzTmFtZV0pIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDJcIiwgeyBjaGlsZHJlbjogdCgndXNlcicpIH0pLCBfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybVwiLCBvblN1Ym1pdDogY2hlY2tTdWJtaXRGb3JtLCBub1ZhbGlkYXRlOiB0cnVlIH0sIHsgY2hpbGRyZW46IFtfanN4KEF2YXRhciwgeyBhbHQ6IHByb3BzLnVzZXJuYW1lIHx8ICd1c2VyJywgc3JjOiB1cmxQaG90bywgc3g6IHsgd2lkdGg6IDU2LCBoZWlnaHQ6IDU2IH0gfSksIF9qc3goXCJsYWJlbFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJsYWJlbFwiLCBodG1sRm9yOiBcImZpbGVcIiB9LCB7IGNoaWxkcmVuOiB0KCdhZGQtZmlsZScpIH0pKSwgX2pzeChcImlucHV0XCIsIHsgY2xhc3NOYW1lOiBcImlucHV0XCIsIHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcImZpbGVcIiwgb25DaGFuZ2U6IHNlbGVjdFBob3RvIH0pLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInN1Ym1pdFwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibGVhcm5pbmdfX2J0blwiIH0sIHsgY2hpbGRyZW46IHQoJ3NhdmUnKSB9KSkgfSkpXSB9KSldIH0pKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJGb3JtO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ2hlbHBlcnMvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgTGVhcm5pbmdTdGVwcyB9IGZyb20gJ2ZvbnRzL0xlYXJuaW5nU3RlcHMnO1xyXG52YXIgTGVhcm5pbmdDYXJkID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCkudDtcclxuICAgIHZhciByYWlzZVByb2dyZXNzID0gZnVuY3Rpb24gKGluZCkge1xyXG4gICAgICAgIGlmIChpbmQgPT09IExlYXJuaW5nU3RlcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrKGluZCAtIDEpO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1PQkd4dDh6aGJSaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHByb3BzLmNhbGxiYWNrKGluZCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lcygnY2FyZCcsIHt9LCBbXCJcIi5jb25jYXQocHJvcHMuY2xhc3NOYW1lKV0pIH0sIHsgY2hpbGRyZW46IFtwcm9wcy5zdGF0ZS50ZXh0ICE9PSAnJyA/IF9qc3goXCJwXCIsIHsgY2hpbGRyZW46IHQoXCJcIi5jb25jYXQocHJvcHMuc3RhdGUudGV4dCwgXCI6a2V5XCIpKSB9KSA6IF9qc3goX0ZyYWdtZW50LCB7fSksIHByb3BzLnN0YXRlLnBpY3R1cmUgIT09ICcnID8gKF9qc3goXCJpbWdcIiwgeyBzcmM6IHByb3BzLnN0YXRlLnBpY3R1cmUsIHdpZHRoOiBcIjI4MHB4XCIsIGhlaWdodDogXCIyMDBweFwiLCBhbHQ6IFwiTVZDIG1vZGVsXCIgfSkpIDogKF9qc3goX0ZyYWdtZW50LCB7fSkpLCBwcm9wcy5zdGF0ZS5idXR0b25PbmUgIT09ICcnID8gKF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibGVhcm5pbmdfX2J0blwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0KFwiXCIuY29uY2F0KHByb3BzLnN0YXRlLmJ1dHRvbk9uZSwgXCI6a2V5XCIpKSAhPT0gJ1JlcGVhdCcgPyByYWlzZVByb2dyZXNzKHByb3BzLnByb2dyZXNzICsgMSkgOiByYWlzZVByb2dyZXNzKDApO1xyXG4gICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiB0KFwiXCIuY29uY2F0KHByb3BzLnN0YXRlLmJ1dHRvbk9uZSwgXCI6a2V5XCIpKSB9KSkpIDogKF9qc3goX0ZyYWdtZW50LCB7fSkpLCBwcm9wcy5zdGF0ZS5idXR0b25Ud28gIT09ICcnID8gKF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibGVhcm5pbmdfX2J0blwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByYWlzZVByb2dyZXNzKHByb3BzLnByb2dyZXNzICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IHQoXCJcIi5jb25jYXQocHJvcHMuc3RhdGUuYnV0dG9uVHdvLCBcIjprZXlcIikpIH0pKSkgOiAoX2pzeChfRnJhZ21lbnQsIHt9KSldIH0pKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExlYXJuaW5nQ2FyZDtcclxuIiwiZXhwb3J0IHZhciBMZWFybmluZ1N0ZXBzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdXZWxjb21lISBcXG4gSGVyZSB3ZSBtaXggUmVhbCBMaWZlIGFuZCBEaWdpdGFsISBXZSB3b3VsZCBsaWtlIHRvIGludHJvZHVjZSB5b3UgdGhlIE1WQyBhcmNoaXRlY3R1cmUgcGF0dGVybiBvbiB0aGUgUmVhbCBMaWZlIEV4YW1wbGUg4oCTIENvZmZlZSBNYWNoaW5lLiBPciB5b3UgY2FuIHJlbGF4IGFuZCBkcmluayBhIGRpZ2l0YWwgQ29mZmVlIDopJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJ0xldOKAmXMgc3RhcnQhJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnU28sIHlvdSBoYXZlIGFuIGV4Y2x1c2l2ZSBjb2ZmZWUgbWFjaGluZSBsaWtlIEVsb24gTXVzaywgZG8geW91PyBUdXJuIGl0IG9uLicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdQZXJzb25hbCBhY2NvdW50IGluIENvZmZlZSBNYWNoaW5lPyBObyB3YXkhIERvIHlvdSBrbm93IHRoYXQgQ29mZmVlIE1hY2hpbmUgaXMgY29uY2VpdmFibGUgYXMgYW4gYXBwbGljYXRpb24gZGl2aWRlZCBvbiAzIHBhcnRzLCBsaWtlIE1WQyBwYXR0ZXJuPycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdMZXTigJlzIHNlZScsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0Qm90dG9tOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ01WQyBpcyBhbiBhcmNoaXRlY3R1cmUgcGF0dGVybiB3aGljaCBzZXBhcmF0ZXMgbG9naWMsIFVJICYgZGF0YWJhc2UgY29ubmVjdGlvbiBvZiBvdXIgYXBwbGljYXRpb24uIEl04oCZcyBkaXZpZGVkIGludG8gMyBzZWN0aW9uczogTU9ERUwsIFZJRVcgYW5kIENPTlRST0xMRVIuJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NYXJpbmFLb3ZlbC9jb2ZmZWVtYWNoaW5lZGF0YS9tYWluL212Yy5wbmcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdPSycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0Qm90dG9tOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ05vdyB5b3UgKFVzZXIpIGludGVyYWN0IHdpdGggVklFVy4gVklFVyBpcyByZXNwb25zaWJsZSBmb3IgbG9vayBhbmQgZmVlbCBvZiBvdXIgYXBwbGljYXRpb24gKFVJIGNvbXBvbmVudHMsIGZvcm1zLCBidXR0b25zLi4pLicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdXaGFhYXQ/JyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnQ09OVFJPTExFUiBcXG5yZWNlaXZlcyBpbnB1dCBmcm9tIFZJRVcsIHVzZXMgbG9naWMgdG8gdHJhbnNsYXRlIHRoZSBpbnB1dCB0byBhIHJlcXVlc3QgZm9yIHRoZSBNT0RFTCcsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0Qm90dG9tOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdNT0RFTCBcXG5zdG9yZXMgJiBtYW5hZ2VzIGRhdGEgYW5kIHByb3ZpZGVzIGRhdGEgdG8gdGhlIFZJRVcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0J1dCB3aGF04oCZcyBoYXBwZW5lZCBkdXJpbmcgTG9nZ2luZyBpbj8gXFxuMS4gWW91IGZpbGxlZCBpbiB0aGUgTG9naW4gZm9ybSBpbiB0aGUgVklFVy5cXG4yLiBDT05UUk9MTEVSIHZlcmlmaWVkIGFuZCBzZW50IHlvdXIgZGF0YSB0byBNT0RFTC4gXFxuMy4gTU9ERUwgdXBkYXRlZCBWSUVXIGFuZCB5b3Ugc2VlIHlvdXIgbmFtZSBhbmQgcGljdHVyZScsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdPSycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0NPTlRST0xMRVInLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnTU9ERUwnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0FuZCBub3cgbGV04oCZcyBtYWtlIGFuIE1WQyBjb2ZmZWUhIENob29zZSBhIGNvZmZlZSBvbiB0aGUgc2NyZWVuLicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnQ09OVFJPTExFUjpcXG5DaGVja2luZyB2YWxpZGF0aW9uIG9mIHRoZSBVc2Vy4oCmJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0NPTlRST0xMRVI6XFxuQ2hlY2tpbmcgd2F0ZXIsIGNvZmZlZSBiZWFucyBhbmQgZnJlZSBzcGFjZSBpbiB0aGUgd2FzdGUgY29udGFpbmVy4oCmJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0NPTlRST0xMRVI6XFxuTU9ERUwsIHlvdSBzaG91bGQgbWFrZSAnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJ01PREVMOiBcXG5QcmVwYXJpbmcgJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJ01PREVMOiBcXG5HcmluZGluZyBjb2ZmZWUgYmVhbnMuIFdhdGVyIGVudGVycyB0aGUgYm9pbGVyIGFuZCBoZWF0cyB1cC4nLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0NvZmZlZSBpcyByZWFkeS4gWW91IGNhbiB0YWtlIGl0IChjbGljayBvbiB0aGUgY3VwKSBpbiB0aGUgVklFVy4gQ2hlY2sgaWYgeW91IHVuZGVyc3Rvb2QgdGhlIE1WQyB3aXRoIGEgUXVpei4gR29vZCBsdWNrIScsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdSZXBlYXQnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICdRdWl6J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsTGVmdDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnQ2hvb3NlIHRoZSBjb3JyZWN0IGVsZW1lbnQgZm9yIHRoaXMgc3RlcCAocHJlc3MgXCJNXCIgZm9yIE1PREVMLCBcIlZcIiBmb3IgVklFVyBvciBcIkNcIiBmb3IgQ09OVFJPTExFUik6IFlvdSBmaWxsZWQgaW4gdGhlIExvZ2luIGZvcm0nLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnTmV4dCcsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRUb3A6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0NPTlRST0xMRVInLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnTU9ERUwnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbW9kYWxDZW50ZXI6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0Nob29zZSB0aGUgY29ycmVjdCBlbGVtZW50IGZvciB0aGlzIHN0ZXAgKHByZXNzIFwiTVwiIGZvciBNT0RFTCwgXCJWXCIgZm9yIFZJRVcgb3IgXCJDXCIgZm9yIENPTlRST0xMRVIpOiBQcmVwYXJhdGlvbiBvZiB0aGUgY29mZmVlJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJ05leHQnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdDT05UUk9MTEVSJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJ01PREVMJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdDaG9vc2UgdGhlIGNvcnJlY3QgZWxlbWVudCBmb3IgdGhpcyBzdGVwIChwcmVzcyBcIk1cIiBmb3IgTU9ERUwsIFwiVlwiIGZvciBWSUVXIG9yIFwiQ1wiIGZvciBDT05UUk9MTEVSKTogQ2hlY2tpbmcgd2F0ZXIsIGNvZmZlZSBiZWFucyBhbmQgZnJlZSBzcGFjZSBpbiB0aGUgd2FzdGUgY29udGFpbmVyJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJ05leHQnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdDT05UUk9MTEVSJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJ01PREVMJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdDaG9vc2UgdGhlIGNvcnJlY3QgZWxlbWVudCBmb3IgdGhpcyBzdGVwIChwcmVzcyBcIk1cIiBmb3IgTU9ERUwsIFwiVlwiIGZvciBWSUVXIG9yIFwiQ1wiIGZvciBDT05UUk9MTEVSKTogWW91IGNob29zZSBhIGRyaW5rJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJ05leHQnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdDT05UUk9MTEVSJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsUmlnaHRCb3R0b206IHtcclxuICAgICAgICAgICAgdGV4dDogJ01PREVMJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZGFsQ2VudGVyOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxMZWZ0OiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdDaG9vc2UgdGhlIGNvcnJlY3QgZWxlbWVudCBmb3IgdGhpcyBzdGVwIChwcmVzcyBcIk1cIiBmb3IgTU9ERUwsIFwiVlwiIGZvciBWSUVXIG9yIFwiQ1wiIGZvciBDT05UUk9MTEVSKTogQ2hlY2tpbmcgdmFsaWRhdGlvbiBvZiB0aGUgVXNlcicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdOZXh0JyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodFRvcDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnQ09OVFJPTExFUicsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0Qm90dG9tOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdNT0RFTCcsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtb2RhbENlbnRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnRmluaXNoIVxcbiBJdOKAmXMgdGltZSB0byBkcmluayBhIFJFQUwgY29mZmVlIScsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICdTaHV0IGRvd24gUEMnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbExlZnQ6IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25PbmU6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25Ud286ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbFJpZ2h0VG9wOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uT25lOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uVHdvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWxSaWdodEJvdHRvbToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbk9uZTogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvblR3bzogJydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbl07XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExlYXJuaW5nQ2FyZCBmcm9tICdjb21wb25lbnRzL2NhcmRzL0xlYXJuaW5nQ2FyZCc7XHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdoZWxwZXJzL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XHJcbmltcG9ydCB7IExlYXJuaW5nU3RlcHMgfSBmcm9tICdmb250cy9MZWFybmluZ1N0ZXBzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IENvZmZlZU1hY2hpbmVGcm9udCBmcm9tICdjb21wb25lbnRzL2NvZmZlZU1hY2hpbmVGcm9udC9jb2ZmZWVNYWNoaW5lRnJvbnQnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluZWFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgVXNlckZvcm0gZnJvbSAnY29tcG9uZW50cy9hdXRoL1VzZXJGb3JtJztcclxudmFyIExlYXJuaW5nTW9kZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCkudDtcclxuICAgIHZhciBfYSA9IHVzZVN0YXRlKDApLCBwcm9ncmVzcyA9IF9hWzBdLCBzZXRQcm9ncmVzcyA9IF9hWzFdO1xyXG4gICAgdmFyIHN0YXRlID0gTGVhcm5pbmdTdGVwc1twcm9ncmVzc107XHJcbiAgICB2YXIgbW9kYWxzID0gT2JqZWN0LmVudHJpZXMoc3RhdGUpO1xyXG4gICAgdmFyIG1hY2hpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFjaGluZScpO1xyXG4gICAgdmFyIG1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkJyk7XHJcbiAgICB2YXIgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlYXJuaW5nX19idG4nKTtcclxuICAgIHZhciBhbnN3ZXJzID0gW1xyXG4gICAgICAgIFsncmlnaHRfX21hY2hpbmUnLCAnd3JvbmdfX21vZGFsJywgJ3dyb25nX19tb2RhbCddLFxyXG4gICAgICAgIFsnd3JvbmdfX21hY2hpbmUnLCAncmlnaHRfX21vZGFsJywgJ3dyb25nX19tb2RhbCddLFxyXG4gICAgICAgIFsnd3JvbmdfX21hY2hpbmUnLCAnd3JvbmdfX21vZGFsJywgJ3JpZ2h0X19tb2RhbCddLFxyXG4gICAgXTtcclxuICAgIHN3aXRjaCAocHJvZ3Jlc3MpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHZhciBvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbkJ0bicpO1xyXG4gICAgICAgICAgICBvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNldFByb2dyZXNzKHByb2dyZXNzICsgMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIG1hY2hpbmUuY2xhc3NMaXN0LmFkZCgnYmxpbmtfX21hY2hpbmUnKTtcclxuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbWFjaGluZS5jbGFzc0xpc3QucmVtb3ZlKCdibGlua19fbWFjaGluZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICBtYWNoaW5lLmNsYXNzTGlzdC5hZGQoJ2JsaW5rX19tYWNoaW5lJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hY2hpbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgbWFjaGluZS5jbGFzc0xpc3QucmVtb3ZlKCdibGlua19fbWFjaGluZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGFsWzFdKVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsWzFdLmNsYXNzTGlzdC5hZGQoJ2JsaW5rX19tb2RhbCcpO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kYWxbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxbMV0uY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmtfX21vZGFsJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kYWxbMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxbMl0uY2xhc3NMaXN0LmFkZCgnYmxpbmtfX21vZGFsJyk7XHJcbiAgICAgICAgICAgIH0sIDYwMDApO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtb2RhbFsyXSlcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFsyXS5jbGFzc0xpc3QucmVtb3ZlKCdibGlua19fbW9kYWwnKTtcclxuICAgICAgICAgICAgfSwgOTAwMCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgdmFyIGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbF9fbWlkZGxlJyk7XHJcbiAgICAgICAgICAgIGJ0bnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9ncmVzcyhwcm9ncmVzcyArIDEpO1xyXG4gICAgICAgICAgICAgICAgbXNnLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgIGNhc2UgODpcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9ncmVzcyhwcm9ncmVzcyArIDEpO1xyXG4gICAgICAgICAgICAgICAgbXNnLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9ncmVzcyhwcm9ncmVzcyArIDEpO1xyXG4gICAgICAgICAgICB9LCA3MDAwKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICBjYXNlIDE2OlxyXG4gICAgICAgICAgICBzZXRCbGljaygwKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxNDpcclxuICAgICAgICAgICAgc2V0QmxpY2soMik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTU6XHJcbiAgICAgICAgY2FzZSAxNzpcclxuICAgICAgICAgICAgc2V0QmxpY2soMSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRCbGljayhpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICByZW1vdmVCbGljaygpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSAnS2V5VicpXHJcbiAgICAgICAgICAgICAgICBtYWNoaW5lLmNsYXNzTGlzdC5hZGQoYW5zd2Vyc1tpXVswXSk7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09ICdLZXlDJylcclxuICAgICAgICAgICAgICAgIG1vZGFsWzFdLmNsYXNzTGlzdC5hZGQoYW5zd2Vyc1tpXVsxXSk7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09ICdLZXlNJylcclxuICAgICAgICAgICAgICAgIG1vZGFsWzJdLmNsYXNzTGlzdC5hZGQoYW5zd2Vyc1tpXVsyXSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQmxpY2soKTtcclxuICAgICAgICAgICAgICAgIHNldFByb2dyZXNzKHByb2dyZXNzICsgMSk7XHJcbiAgICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbXNnLmlubmVySFRNTCA9ICdWSUVXJztcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUJsaWNrKCkge1xyXG4gICAgICAgIG1hY2hpbmUuY2xhc3NMaXN0LnJlbW92ZSgncmlnaHRfX21hY2hpbmUnKTtcclxuICAgICAgICBtYWNoaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ3dyb25nX19tYWNoaW5lJyk7XHJcbiAgICAgICAgbW9kYWxbMV0uY2xhc3NMaXN0LnJlbW92ZSgncmlnaHRfX21vZGFsJyk7XHJcbiAgICAgICAgbW9kYWxbMV0uY2xhc3NMaXN0LnJlbW92ZSgnd3JvbmdfX21vZGFsJyk7XHJcbiAgICAgICAgbW9kYWxbMl0uY2xhc3NMaXN0LnJlbW92ZSgncmlnaHRfX21vZGFsJyk7XHJcbiAgICAgICAgbW9kYWxbMl0uY2xhc3NMaXN0LnJlbW92ZSgnd3JvbmdfX21vZGFsJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCdsZWFybmluZy1tb2RlJykgfSwgeyBjaGlsZHJlbjogW19qc3goVXNlckZvcm0sIHt9KSwgTGVhcm5pbmdTdGVwcy5sZW5ndGggPiBwcm9ncmVzcyA/IChtb2RhbHMubWFwKGZ1bmN0aW9uIChtb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGFsWzFdLnRleHQgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoX2pzeChMZWFybmluZ0NhcmQsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KG1vZGFsWzBdKSwge30sIFtcIlwiLmNvbmNhdChtb2RhbFsxXS5waWN0dXJlICE9PSAnJyA/ICd3aXRoSW1nJyA6ICcnKV0pLCBjYWxsYmFjazogc2V0UHJvZ3Jlc3MsIHByb2dyZXNzOiBwcm9ncmVzcywgc3RhdGU6IG1vZGFsWzFdIH0sIFwiXCIuY29uY2F0KG1vZGFsWzBdLCBcIi1pbmRleFwiKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSkgOiAoX2pzeChfRnJhZ21lbnQsIHt9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibGVhcm5pbmdfX21hY2hpbmVcIiB9LCB7IGNoaWxkcmVuOiBfanN4KENvZmZlZU1hY2hpbmVGcm9udCwge30pIH0pKSwgX2pzeChCb3gsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCdwcm9ncmVzcycpLCBzeDogeyB3aWR0aDogJzgwJScgfSB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmVhclByb2dyZXNzLCB7IHZhcmlhbnQ6IFwiYnVmZmVyXCIsIHZhbHVlOiAocHJvZ3Jlc3MgLyAxOCkgKiAxMDAsIHZhbHVlQnVmZmVyOiAxMDAgfSkgfSkpXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMZWFybmluZ01vZGVQYWdlO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=