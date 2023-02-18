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
                'Access-Control-Allow-Origin': 'https://proj42-production.up.railway.app',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0F1dGhQYWdlX3VpX0F1dGhQYWdlX3RzeC44ZWZjZWM5YWQyZWRmOTIyNzBhMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0Q7QUFDaEQ7QUFDQSxXQUFXLHNEQUFJLG9CQUFvQix5QkFBeUIsSUFBSSxzQkFBc0I7QUFDdEY7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z6QixnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQ2I7QUFDSDtBQUMvQyxtREFBbUQsR0FBRyx5QkFBeUIsSUFBSTtBQUNuRiw4RkFBOEYsS0FBSztBQUNuRztBQUNBLFlBQVksNkRBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsK0JBQStCO0FBQ3ZFO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLG1CQUFtQix1QkFBdUIsSUFBSSxXQUFXLHNEQUFJLHFCQUFxQix5Q0FBeUMsSUFBSSxvQ0FBb0MsSUFBSSxzREFBSSxZQUFZLHlIQUF5SCxtRUFBbUUsc0RBQUksQ0FBQyxpRUFBUyxJQUFJLDZDQUE2QyxLQUFLO0FBQ3hjO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDekIsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUM5QjtBQUMwQjtBQUNaO0FBQ0c7QUFDbEQ7QUFDQSxhQUFhLCtDQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxZQUFZLDZEQUFjO0FBQzFCO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsOENBQThDO0FBQ2xIO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLG1CQUFtQixXQUFXLHlFQUFVLG1CQUFtQixzQkFBc0IsSUFBSSxXQUFXLHNEQUFJLFNBQVMsd0NBQXdDLEdBQUcsdURBQUssb0JBQW9CLGdFQUFnRSxJQUFJLDRDQUE0QyxzREFBSSxDQUFDLGlFQUFTLElBQUksa0ZBQWtGLElBQUksc0RBQUksQ0FBQyxpRUFBUyxJQUFJLCtFQUErRSxHQUFHLHNEQUFJLENBQUMsaUVBQVMsSUFBSSxrRkFBa0YsR0FBRyxzREFBSSxtQkFBbUIscUJBQXFCLElBQUksVUFBVSxzREFBSSxzQkFBc0IsNEJBQTRCLElBQUksdUVBQXVFLElBQUksS0FBSyxLQUFLO0FBQzl5QjtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q3hCLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7QUFDbkI7QUFDZTtBQUNaO0FBQ1I7QUFDdkM7QUFDQSxZQUFZLDZEQUFjO0FBQzFCLGFBQWEsK0NBQVE7QUFDckIsYUFBYSwrQ0FBUTtBQUNyQixJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCx3Q0FBd0MseUJBQXlCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Qsd0NBQXdDLHlCQUF5QjtBQUNqRTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLG1CQUFtQixXQUFXLHlFQUFVLG1CQUFtQixzQkFBc0IsSUFBSSxXQUFXLHNEQUFJLFNBQVMscUJBQXFCLEdBQUcsdURBQUssb0JBQW9CLGdFQUFnRSxJQUFJLFdBQVcsc0RBQUksQ0FBQyxxREFBTSxJQUFJLG9EQUFvRCx5QkFBeUIsR0FBRyxzREFBSSxxQkFBcUIscUNBQXFDLElBQUkseUJBQXlCLElBQUksc0RBQUksWUFBWSx1RUFBdUUsR0FBRyxzREFBSSxtQkFBbUIscUJBQXFCLElBQUksVUFBVSxzREFBSSxzQkFBc0IsNEJBQTRCLElBQUkscUJBQXFCLElBQUksS0FBSyxLQUFLO0FBQzdxQjtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEV4QixnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQ2Y7QUFDQTtBQUNoRDtBQUNBLFlBQVksdURBQUssbUJBQW1CLDRCQUE0QixJQUFJLFdBQVcsc0RBQUksQ0FBQyxnRUFBUSxJQUFJLHdDQUF3QyxHQUFHLHNEQUFJLENBQUMsZ0VBQVEsSUFBSSx3Q0FBd0MsR0FBRyxzREFBSSxDQUFDLGdFQUFRLElBQUksbUJBQW1CLElBQUk7QUFDL087QUFDQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2F1dGgvRXJyb3JTcGFuLnRzeCIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2F1dGgvSW5wdXRGb3JtLnRzeCIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2F1dGgvU2lnbkZvcm0udHN4Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9Vc2VyRm9ybS50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvcGFnZXMvQXV0aFBhZ2UvdWkvQXV0aFBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxudmFyIEVycm9yU3BhbiA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgcmV0dXJuIF9qc3goXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImVycm9yLXRleHRcIiB9LCB7IGNoaWxkcmVuOiBwcm9wcy50ZXh0IH0pKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JTcGFuO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCBFcnJvclNwYW4gZnJvbSAnY29tcG9uZW50cy9hdXRoL0Vycm9yU3Bhbic7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbnZhciBSZWdleEVtYWlsID0gUmVnRXhwKC9eXFxzP1tBLVow4oCTOV0rW0EtWjDigJM5Ll8rLV17MCx9QFtBLVow4oCTOS5fKy1dK1xcLltBLVow4oCTOV17Miw0fVxccz8kL2kpO1xyXG52YXIgUmVnZXhQYXNzd29yZCA9IFJlZ0V4cCgvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlxcZCkoPz0uKlsjJEAhJSYqP10pW0EtWmEtelxcZCMkQCElJio/XXs4LDMwfSQvKTtcclxudmFyIElucHV0Rm9ybSA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbigpLnQ7XHJcbiAgICB2YXIgY2hlY2tJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBfYiA9IGV2ZW50LnRhcmdldCwgbmFtZSA9IF9iLm5hbWUsIHZhbHVlID0gX2IudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VzZXJuYW1lJzpcclxuICAgICAgICAgICAgICAgIHByb3BzLmluaXRpYWxTdGF0ZS5lcnJvcnMudXNlcm5hbWUgPSB2YWx1ZS5sZW5ndGggPCA1ID8gJ1VzZXJuYW1lIG11c3QgYmUgNSBjaGFyYWN0ZXJzIGxvbmchJyA6ICcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICAgICAgICAgIHByb3BzLmluaXRpYWxTdGF0ZS5lcnJvcnMuZW1haWwgPSBSZWdleEVtYWlsLnRlc3QodmFsdWUpID8gJycgOiAnRW1haWwgaXMgbm90IHZhbGlkISc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGFzc3dvcmQnOlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuaW5pdGlhbFN0YXRlLmVycm9ycy5wYXNzd29yZCA9IFJlZ2V4UGFzc3dvcmQudGVzdCh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnUGFzc3dvcmQgbXVzdCBiZSBtaW5pbXVtIGVpZ2h0IGNoYXJhY3RlcnMsIGF0IGxlYXN0IG9uZSB1cHBlcmNhc2UgbGV0dGVyLCBvbmUgbG93ZXJjYXNlIGxldHRlciwgb25lIG51bWJlciBhbmQgb25lIHNwZWNpYWwgY2hhcmFjdGVyJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdGF0ZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm9wcy5pbml0aWFsU3RhdGUpLCAoX2EgPSB7fSwgX2FbbmFtZV0gPSB2YWx1ZSwgX2EpKTtcclxuICAgICAgICBwcm9wcy5jaGVja0lucHV0Q2hhbmdlKHN0YXRlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBwcm9wcy50eXBlIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibGFiZWxcIiwgaHRtbEZvcjogcHJvcHMudHlwZSB9LCB7IGNoaWxkcmVuOiB0KFwiXCIuY29uY2F0KHByb3BzLnR5cGUpKSB9KSksIF9qc3goXCJpbnB1dFwiLCB7IGNsYXNzTmFtZTogXCJpbnB1dFwiLCB0eXBlOiBwcm9wcy50eXBlID09PSAncGFzc3dvcmQnID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0JywgbmFtZTogcHJvcHMudHlwZSwgb25DaGFuZ2U6IGNoZWNrSW5wdXRDaGFuZ2UgfSksIHByb3BzLmluaXRpYWxTdGF0ZS5lcnJvcnNbXCJcIi5jb25jYXQocHJvcHMudHlwZSldLmxlbmd0aCA+IDAgJiYgKF9qc3goRXJyb3JTcGFuLCB7IHRleHQ6IHByb3BzLmluaXRpYWxTdGF0ZS5lcnJvcnNbcHJvcHMudHlwZV0gfSkpXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZvcm07XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdoZWxwZXJzL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSAnY29tcG9uZW50cy9hdXRoL0lucHV0Rm9ybSc7XHJcbnZhciBTaWduRm9ybSA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgdmFyIF9hID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGVycm9yczoge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KSwgaW5pdGlhbFN0YXRlID0gX2FbMF0sIHNldEluaXRpYWxTdGF0ZSA9IF9hWzFdO1xyXG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbigpLnQ7XHJcbiAgICB2YXIgY2hlY2tJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICAgIHNldEluaXRpYWxTdGF0ZShfX2Fzc2lnbih7fSwgc3RhdGUpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbml0aWFsU3RhdGUpO1xyXG4gICAgfTtcclxuICAgIHZhciBjaGVja1N1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciB2YWxpZGl0eSA9IHRydWU7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhpbml0aWFsU3RhdGUuZXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbC5sZW5ndGggPiAwICYmICh2YWxpZGl0eSA9IGZhbHNlKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkaXR5O1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJ3NpZ24td3JhcHBlcicsIHt9LCBbcHJvcHMuY2xhc3NOYW1lXSkgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoMlwiLCB7IGNoaWxkcmVuOiB0KFwiXCIuY29uY2F0KHByb3BzLnR5cGVGb3JtKSkgfSksIF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtXCIsIG9uU3VibWl0OiBjaGVja1N1Ym1pdEZvcm0sIG5vVmFsaWRhdGU6IHRydWUgfSwgeyBjaGlsZHJlbjogW3Byb3BzLnR5cGVGb3JtID09PSAnc2lnbi11cCcgJiYgKF9qc3goSW5wdXRGb3JtLCB7IHR5cGU6ICd1c2VybmFtZScsIGNoZWNrSW5wdXRDaGFuZ2U6IGNoZWNrSW5wdXRDaGFuZ2UsIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlIH0pKSwgX2pzeChJbnB1dEZvcm0sIHsgdHlwZTogJ2VtYWlsJywgY2hlY2tJbnB1dENoYW5nZTogY2hlY2tJbnB1dENoYW5nZSwgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUgfSksIF9qc3goSW5wdXRGb3JtLCB7IHR5cGU6ICdwYXNzd29yZCcsIGNoZWNrSW5wdXRDaGFuZ2U6IGNoZWNrSW5wdXRDaGFuZ2UsIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlIH0pLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInN1Ym1pdFwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibGVhcm5pbmdfX2J0blwiIH0sIHsgY2hpbGRyZW46IHByb3BzLnR5cGVGb3JtID09PSAnc2lnbi11cCcgPyB0KCdyZWdpc3RlcicpIDogdCgnc2lnbi1pbicpIH0pKSB9KSldIH0pKV0gfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2lnbkZvcm07XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ2hlbHBlcnMvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbnZhciBVc2VyRm9ybSA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbigpLnQ7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSgpLCBwaG90byA9IF9hWzBdLCBzZXRQaG90byA9IF9hWzFdO1xyXG4gICAgdmFyIF9iID0gdXNlU3RhdGUoJycpLCB1cmxQaG90byA9IF9iWzBdLCBzZXRVcmxQaG90byA9IF9iWzFdO1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9ndWlzZXBwZS1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwL2FwaS9sb2dpbicsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgLy9vcmlnaW46ICdodHRwczovL2d1aXNlcHBlLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdjaWJ1bHlhZGV2QGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJ3Bhc3Nzd29yZCcsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgc2V0VXJsUGhvdG8oZGF0YS51c2VySW1hZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgY2hlY2tTdWJtaXRGb3JtID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIHBob3RvKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwaG90byk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9ndWlzZXBwZS1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwL2FwaS9zZXRwaWN0dXJlJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnaHR0cHM6Ly9wcm9qNDItcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcCcsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB1c2VySW1hZ2U6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdjaWJ1bHlhZGV2QGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB2YXIgc2F2ZVBob3RvID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgdmFyIHNlbGVjdFBob3RvID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZmlsZUxpc3QgPSBlLnRhcmdldC5maWxlcztcclxuICAgICAgICBpZiAoIWZpbGVMaXN0KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2V0UGhvdG8oZmlsZUxpc3RbMF0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJ3NpZ24td3JhcHBlcicsIHt9LCBbcHJvcHMuY2xhc3NOYW1lXSkgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoMlwiLCB7IGNoaWxkcmVuOiB0KCd1c2VyJykgfSksIF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtXCIsIG9uU3VibWl0OiBjaGVja1N1Ym1pdEZvcm0sIG5vVmFsaWRhdGU6IHRydWUgfSwgeyBjaGlsZHJlbjogW19qc3goQXZhdGFyLCB7IGFsdDogcHJvcHMudXNlcm5hbWUgfHwgJ3VzZXInLCBzcmM6IHVybFBob3RvLCBzeDogeyB3aWR0aDogNTYsIGhlaWdodDogNTYgfSB9KSwgX2pzeChcImxhYmVsXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImxhYmVsXCIsIGh0bWxGb3I6IFwiZmlsZVwiIH0sIHsgY2hpbGRyZW46IHQoJ2FkZC1maWxlJykgfSkpLCBfanN4KFwiaW5wdXRcIiwgeyBjbGFzc05hbWU6IFwiaW5wdXRcIiwgdHlwZTogXCJmaWxlXCIsIG5hbWU6IFwiZmlsZVwiLCBvbkNoYW5nZTogc2VsZWN0UGhvdG8gfSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic3VibWl0XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJsZWFybmluZ19fYnRuXCIgfSwgeyBjaGlsZHJlbjogdCgnc2F2ZScpIH0pKSB9KSldIH0pKV0gfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVXNlckZvcm07XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IFNpZ25Gb3JtIGZyb20gJ2NvbXBvbmVudHMvYXV0aC9TaWduRm9ybSc7XHJcbmltcG9ydCBVc2VyRm9ybSBmcm9tICdjb21wb25lbnRzL2F1dGgvVXNlckZvcm0nO1xyXG52YXIgQXV0aFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImxlYXJuaW5nLW1vZGVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChTaWduRm9ybSwgeyBjbGFzc05hbWU6ICdjYXJkJywgdHlwZUZvcm06ICdzaWduLXVwJyB9KSwgX2pzeChTaWduRm9ybSwgeyBjbGFzc05hbWU6ICdjYXJkJywgdHlwZUZvcm06ICdzaWduLWluJyB9KSwgX2pzeChVc2VyRm9ybSwgeyBjbGFzc05hbWU6ICdjYXJkJyB9KV0gfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXV0aFBhZ2U7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==