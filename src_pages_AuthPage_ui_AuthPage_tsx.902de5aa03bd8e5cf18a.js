"use strict";
(self["webpackChunkproj_42"] = self["webpackChunkproj_42"] || []).push([["src_pages_AuthPage_ui_AuthPage_tsx"],{

/***/ "./src/components/auth/ErrorSpan.tsx":
/*!*******************************************!*\
  !*** ./src/components/auth/ErrorSpan.tsx ***!
  \*******************************************/
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

var ErrorSpan = function (props) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({ className: "error-text" }, { children: props.text }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorSpan);


/***/ }),

/***/ "./src/components/auth/InputForm.tsx":
/*!*******************************************!*\
  !*** ./src/components/auth/InputForm.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var components_auth_ErrorSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/auth/ErrorSpan */ "./src/components/auth/ErrorSpan.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
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



var RegexEmail = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);
var RegexPassword = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/);
var InputForm = function (props) {
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)().t;
    var checkInputChange = function (event) {
        var _a;
        event.preventDefault();
        var _b = event.target, name = _b.name, value = _b.value;
        switch (name) {
            case 'username':
                props.initialState.errors.username = value.length < 5 ? 'Username must be 5 characters long!' : '';
                break;
            case 'email':
                props.initialState.errors.email = RegexEmail.test(value) ? '' : 'Email is not valid!';
                break;
            case 'password':
                props.initialState.errors.password = RegexPassword.test(value)
                    ? ''
                    : 'Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
                break;
            default:
                break;
        }
        var state = __assign(__assign({}, props.initialState), (_a = {}, _a[name] = value, _a));
        props.checkInputChange(state);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: props.type }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", __assign({ className: "label", htmlFor: props.type }, { children: t("".concat(props.type)) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: "input", type: props.type === 'password' ? 'password' : 'text', name: props.type, onChange: checkInputChange }), props.initialState.errors["".concat(props.type)].length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_ErrorSpan__WEBPACK_IMPORTED_MODULE_1__["default"], { text: props.initialState.errors[props.type] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputForm);


/***/ }),

/***/ "./src/components/auth/SignForm.tsx":
/*!******************************************!*\
  !*** ./src/components/auth/SignForm.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/classNames/classNames */ "./src/helpers/classNames/classNames.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var components_auth_InputForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/auth/InputForm */ "./src/components/auth/InputForm.tsx");
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





var SignForm = function (props) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        username: '',
        email: '',
        password: '',
        errors: {
            username: '',
            email: '',
            password: '',
        },
    }), initialState = _a[0], setInitialState = _a[1];
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)().t;
    var checkInputChange = function (state) {
        setInitialState(__assign({}, state));
        console.log(initialState);
    };
    var checkSubmitForm = function (event) {
        event.preventDefault();
        var validity = true;
        Object.values(initialState.errors).forEach(function (val) { return val.length > 0 && (validity = false); });
        return validity;
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)('sign-wrapper', {}, [props.className]) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: t("".concat(props.typeForm)) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ className: "form", onSubmit: checkSubmitForm, noValidate: true }, { children: [props.typeForm === 'sign-up' && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_InputForm__WEBPACK_IMPORTED_MODULE_3__["default"], { type: 'username', checkInputChange: checkInputChange, initialState: initialState })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_InputForm__WEBPACK_IMPORTED_MODULE_3__["default"], { type: 'email', checkInputChange: checkInputChange, initialState: initialState }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_InputForm__WEBPACK_IMPORTED_MODULE_3__["default"], { type: 'password', checkInputChange: checkInputChange, initialState: initialState }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "submit" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "learning__btn" }, { children: props.typeForm === 'sign-up' ? t('register') : t('sign-in') })) }))] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignForm);


/***/ }),

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

/***/ "./src/pages/AuthPage/ui/AuthPage.tsx":
/*!********************************************!*\
  !*** ./src/pages/AuthPage/ui/AuthPage.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var components_auth_SignForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/auth/SignForm */ "./src/components/auth/SignForm.tsx");
/* harmony import */ var components_auth_UserForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/auth/UserForm */ "./src/components/auth/UserForm.tsx");
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



var AuthPage = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "learning-mode" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_SignForm__WEBPACK_IMPORTED_MODULE_1__["default"], { className: 'card', typeForm: 'sign-up' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_SignForm__WEBPACK_IMPORTED_MODULE_1__["default"], { className: 'card', typeForm: 'sign-in' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_UserForm__WEBPACK_IMPORTED_MODULE_2__["default"], { className: 'card' })] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthPage);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0F1dGhQYWdlX3VpX0F1dGhQYWdlX3RzeC45MDJkZTVhYTAzYmQ4ZTVjZjE4YS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0Q7QUFDaEQ7QUFDQSxXQUFXLHNEQUFJLG9CQUFvQix5QkFBeUIsSUFBSSxzQkFBc0I7QUFDdEY7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z6QixnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQ2I7QUFDSDtBQUMvQyxtREFBbUQsR0FBRyx5QkFBeUIsSUFBSTtBQUNuRiw4RkFBOEYsS0FBSztBQUNuRztBQUNBLFlBQVksNkRBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsK0JBQStCO0FBQ3ZFO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLG1CQUFtQix1QkFBdUIsSUFBSSxXQUFXLHNEQUFJLHFCQUFxQix5Q0FBeUMsSUFBSSxvQ0FBb0MsSUFBSSxzREFBSSxZQUFZLHlIQUF5SCxtRUFBbUUsc0RBQUksQ0FBQyxpRUFBUyxJQUFJLDZDQUE2QyxLQUFLO0FBQ3hjO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDekIsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUM5QjtBQUMwQjtBQUNaO0FBQ0c7QUFDbEQ7QUFDQSxhQUFhLCtDQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxZQUFZLDZEQUFjO0FBQzFCO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsOENBQThDO0FBQ2xIO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLG1CQUFtQixXQUFXLHlFQUFVLG1CQUFtQixzQkFBc0IsSUFBSSxXQUFXLHNEQUFJLFNBQVMsd0NBQXdDLEdBQUcsdURBQUssb0JBQW9CLGdFQUFnRSxJQUFJLDRDQUE0QyxzREFBSSxDQUFDLGlFQUFTLElBQUksa0ZBQWtGLElBQUksc0RBQUksQ0FBQyxpRUFBUyxJQUFJLCtFQUErRSxHQUFHLHNEQUFJLENBQUMsaUVBQVMsSUFBSSxrRkFBa0YsR0FBRyxzREFBSSxtQkFBbUIscUJBQXFCLElBQUksVUFBVSxzREFBSSxzQkFBc0IsNEJBQTRCLElBQUksdUVBQXVFLElBQUksS0FBSyxLQUFLO0FBQzl5QjtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q3hCLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7QUFDbkI7QUFDZTtBQUNaO0FBQ1I7QUFDdkM7QUFDQSxZQUFZLDZEQUFjO0FBQzFCLGFBQWEsK0NBQVE7QUFDckIsYUFBYSwrQ0FBUTtBQUNyQixJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCx3Q0FBd0MseUJBQXlCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULHdDQUF3Qyx5QkFBeUI7QUFDakU7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBSyxtQkFBbUIsV0FBVyx5RUFBVSxtQkFBbUIsc0JBQXNCLElBQUksV0FBVyxzREFBSSxTQUFTLHFCQUFxQixHQUFHLHVEQUFLLG9CQUFvQixnRUFBZ0UsSUFBSSxXQUFXLHNEQUFJLENBQUMscURBQU0sSUFBSSxvREFBb0QseUJBQXlCLEdBQUcsc0RBQUkscUJBQXFCLHFDQUFxQyxJQUFJLHlCQUF5QixJQUFJLHNEQUFJLFlBQVksdUVBQXVFLEdBQUcsc0RBQUksbUJBQW1CLHFCQUFxQixJQUFJLFVBQVUsc0RBQUksc0JBQXNCLDRCQUE0QixJQUFJLHFCQUFxQixJQUFJLEtBQUssS0FBSztBQUM3cUI7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFeEIsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUNmO0FBQ0E7QUFDaEQ7QUFDQSxZQUFZLHVEQUFLLG1CQUFtQiw0QkFBNEIsSUFBSSxXQUFXLHNEQUFJLENBQUMsZ0VBQVEsSUFBSSx3Q0FBd0MsR0FBRyxzREFBSSxDQUFDLGdFQUFRLElBQUksd0NBQXdDLEdBQUcsc0RBQUksQ0FBQyxnRUFBUSxJQUFJLG1CQUFtQixJQUFJO0FBQy9PO0FBQ0EsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9hdXRoL0Vycm9yU3Bhbi50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9hdXRoL0lucHV0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9hdXRoL1NpZ25Gb3JtLnRzeCIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2F1dGgvVXNlckZvcm0udHN4Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL3BhZ2VzL0F1dGhQYWdlL3VpL0F1dGhQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbnZhciBFcnJvclNwYW4gPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHJldHVybiBfanN4KFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJlcnJvci10ZXh0XCIgfSwgeyBjaGlsZHJlbjogcHJvcHMudGV4dCB9KSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yU3BhbjtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgRXJyb3JTcGFuIGZyb20gJ2NvbXBvbmVudHMvYXV0aC9FcnJvclNwYW4nO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG52YXIgUmVnZXhFbWFpbCA9IFJlZ0V4cCgvXlxccz9bQS1aMOKAkzldK1tBLVow4oCTOS5fKy1dezAsfUBbQS1aMOKAkzkuXystXStcXC5bQS1aMOKAkzldezIsNH1cXHM/JC9pKTtcclxudmFyIFJlZ2V4UGFzc3dvcmQgPSBSZWdFeHAoL14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipcXGQpKD89LipbIyRAISUmKj9dKVtBLVphLXpcXGQjJEAhJSYqP117OCwzMH0kLyk7XHJcbnZhciBJbnB1dEZvcm0gPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oKS50O1xyXG4gICAgdmFyIGNoZWNrSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgX2IgPSBldmVudC50YXJnZXQsIG5hbWUgPSBfYi5uYW1lLCB2YWx1ZSA9IF9iLnZhbHVlO1xyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICd1c2VybmFtZSc6XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5pbml0aWFsU3RhdGUuZXJyb3JzLnVzZXJuYW1lID0gdmFsdWUubGVuZ3RoIDwgNSA/ICdVc2VybmFtZSBtdXN0IGJlIDUgY2hhcmFjdGVycyBsb25nIScgOiAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5pbml0aWFsU3RhdGUuZXJyb3JzLmVtYWlsID0gUmVnZXhFbWFpbC50ZXN0KHZhbHVlKSA/ICcnIDogJ0VtYWlsIGlzIG5vdCB2YWxpZCEnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bhc3N3b3JkJzpcclxuICAgICAgICAgICAgICAgIHByb3BzLmluaXRpYWxTdGF0ZS5lcnJvcnMucGFzc3dvcmQgPSBSZWdleFBhc3N3b3JkLnRlc3QodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogJ1Bhc3N3b3JkIG11c3QgYmUgbWluaW11bSBlaWdodCBjaGFyYWN0ZXJzLCBhdCBsZWFzdCBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIGxvd2VyY2FzZSBsZXR0ZXIsIG9uZSBudW1iZXIgYW5kIG9uZSBzcGVjaWFsIGNoYXJhY3Rlcic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RhdGUgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMuaW5pdGlhbFN0YXRlKSwgKF9hID0ge30sIF9hW25hbWVdID0gdmFsdWUsIF9hKSk7XHJcbiAgICAgICAgcHJvcHMuY2hlY2tJbnB1dENoYW5nZShzdGF0ZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogcHJvcHMudHlwZSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImxhYmVsXCIsIGh0bWxGb3I6IHByb3BzLnR5cGUgfSwgeyBjaGlsZHJlbjogdChcIlwiLmNvbmNhdChwcm9wcy50eXBlKSkgfSkpLCBfanN4KFwiaW5wdXRcIiwgeyBjbGFzc05hbWU6IFwiaW5wdXRcIiwgdHlwZTogcHJvcHMudHlwZSA9PT0gJ3Bhc3N3b3JkJyA/ICdwYXNzd29yZCcgOiAndGV4dCcsIG5hbWU6IHByb3BzLnR5cGUsIG9uQ2hhbmdlOiBjaGVja0lucHV0Q2hhbmdlIH0pLCBwcm9wcy5pbml0aWFsU3RhdGUuZXJyb3JzW1wiXCIuY29uY2F0KHByb3BzLnR5cGUpXS5sZW5ndGggPiAwICYmIChfanN4KEVycm9yU3BhbiwgeyB0ZXh0OiBwcm9wcy5pbml0aWFsU3RhdGUuZXJyb3JzW3Byb3BzLnR5cGVdIH0pKV0gfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGb3JtO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnaGVscGVycy9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgSW5wdXRGb3JtIGZyb20gJ2NvbXBvbmVudHMvYXV0aC9JbnB1dEZvcm0nO1xyXG52YXIgU2lnbkZvcm0gPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciBfYSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICBlcnJvcnM6IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgfSksIGluaXRpYWxTdGF0ZSA9IF9hWzBdLCBzZXRJbml0aWFsU3RhdGUgPSBfYVsxXTtcclxuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oKS50O1xyXG4gICAgdmFyIGNoZWNrSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgICBzZXRJbml0aWFsU3RhdGUoX19hc3NpZ24oe30sIHN0YXRlKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5pdGlhbFN0YXRlKTtcclxuICAgIH07XHJcbiAgICB2YXIgY2hlY2tTdWJtaXRGb3JtID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgdmFsaWRpdHkgPSB0cnVlO1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoaW5pdGlhbFN0YXRlLmVycm9ycykuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWwubGVuZ3RoID4gMCAmJiAodmFsaWRpdHkgPSBmYWxzZSk7IH0pO1xyXG4gICAgICAgIHJldHVybiB2YWxpZGl0eTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCdzaWduLXdyYXBwZXInLCB7fSwgW3Byb3BzLmNsYXNzTmFtZV0pIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDJcIiwgeyBjaGlsZHJlbjogdChcIlwiLmNvbmNhdChwcm9wcy50eXBlRm9ybSkpIH0pLCBfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybVwiLCBvblN1Ym1pdDogY2hlY2tTdWJtaXRGb3JtLCBub1ZhbGlkYXRlOiB0cnVlIH0sIHsgY2hpbGRyZW46IFtwcm9wcy50eXBlRm9ybSA9PT0gJ3NpZ24tdXAnICYmIChfanN4KElucHV0Rm9ybSwgeyB0eXBlOiAndXNlcm5hbWUnLCBjaGVja0lucHV0Q2hhbmdlOiBjaGVja0lucHV0Q2hhbmdlLCBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSB9KSksIF9qc3goSW5wdXRGb3JtLCB7IHR5cGU6ICdlbWFpbCcsIGNoZWNrSW5wdXRDaGFuZ2U6IGNoZWNrSW5wdXRDaGFuZ2UsIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlIH0pLCBfanN4KElucHV0Rm9ybSwgeyB0eXBlOiAncGFzc3dvcmQnLCBjaGVja0lucHV0Q2hhbmdlOiBjaGVja0lucHV0Q2hhbmdlLCBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSB9KSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJzdWJtaXRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImxlYXJuaW5nX19idG5cIiB9LCB7IGNoaWxkcmVuOiBwcm9wcy50eXBlRm9ybSA9PT0gJ3NpZ24tdXAnID8gdCgncmVnaXN0ZXInKSA6IHQoJ3NpZ24taW4nKSB9KSkgfSkpXSB9KSldIH0pKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25Gb3JtO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdoZWxwZXJzL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG52YXIgVXNlckZvcm0gPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oKS50O1xyXG4gICAgdmFyIF9hID0gdXNlU3RhdGUoKSwgcGhvdG8gPSBfYVswXSwgc2V0UGhvdG8gPSBfYVsxXTtcclxuICAgIHZhciBfYiA9IHVzZVN0YXRlKCcnKSwgdXJsUGhvdG8gPSBfYlswXSwgc2V0VXJsUGhvdG8gPSBfYlsxXTtcclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZ3Vpc2VwcGUtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9hcGkvbG9naW4nLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgIC8vb3JpZ2luOiAnaHR0cHM6Ly9ndWlzZXBwZS1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwLycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnY2lidWx5YWRldkBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICdwYXNzc3dvcmQnLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHNldFVybFBob3RvKGRhdGEudXNlckltYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdmFyIGNoZWNrU3VibWl0Rm9ybSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwaG90byk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGhvdG8pO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZ3Vpc2VwcGUtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9hcGkvc2V0cGljdHVyZScsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB1c2VySW1hZ2U6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdjaWJ1bHlhZGV2QGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB2YXIgc2F2ZVBob3RvID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgdmFyIHNlbGVjdFBob3RvID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZmlsZUxpc3QgPSBlLnRhcmdldC5maWxlcztcclxuICAgICAgICBpZiAoIWZpbGVMaXN0KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2V0UGhvdG8oZmlsZUxpc3RbMF0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJ3NpZ24td3JhcHBlcicsIHt9LCBbcHJvcHMuY2xhc3NOYW1lXSkgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoMlwiLCB7IGNoaWxkcmVuOiB0KCd1c2VyJykgfSksIF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtXCIsIG9uU3VibWl0OiBjaGVja1N1Ym1pdEZvcm0sIG5vVmFsaWRhdGU6IHRydWUgfSwgeyBjaGlsZHJlbjogW19qc3goQXZhdGFyLCB7IGFsdDogcHJvcHMudXNlcm5hbWUgfHwgJ3VzZXInLCBzcmM6IHVybFBob3RvLCBzeDogeyB3aWR0aDogNTYsIGhlaWdodDogNTYgfSB9KSwgX2pzeChcImxhYmVsXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImxhYmVsXCIsIGh0bWxGb3I6IFwiZmlsZVwiIH0sIHsgY2hpbGRyZW46IHQoJ2FkZC1maWxlJykgfSkpLCBfanN4KFwiaW5wdXRcIiwgeyBjbGFzc05hbWU6IFwiaW5wdXRcIiwgdHlwZTogXCJmaWxlXCIsIG5hbWU6IFwiZmlsZVwiLCBvbkNoYW5nZTogc2VsZWN0UGhvdG8gfSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic3VibWl0XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJsZWFybmluZ19fYnRuXCIgfSwgeyBjaGlsZHJlbjogdCgnc2F2ZScpIH0pKSB9KSldIH0pKV0gfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVXNlckZvcm07XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IFNpZ25Gb3JtIGZyb20gJ2NvbXBvbmVudHMvYXV0aC9TaWduRm9ybSc7XHJcbmltcG9ydCBVc2VyRm9ybSBmcm9tICdjb21wb25lbnRzL2F1dGgvVXNlckZvcm0nO1xyXG52YXIgQXV0aFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImxlYXJuaW5nLW1vZGVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChTaWduRm9ybSwgeyBjbGFzc05hbWU6ICdjYXJkJywgdHlwZUZvcm06ICdzaWduLXVwJyB9KSwgX2pzeChTaWduRm9ybSwgeyBjbGFzc05hbWU6ICdjYXJkJywgdHlwZUZvcm06ICdzaWduLWluJyB9KSwgX2pzeChVc2VyRm9ybSwgeyBjbGFzc05hbWU6ICdjYXJkJyB9KV0gfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXV0aFBhZ2U7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==