"use strict";
(self["webpackChunkproj_42"] = self["webpackChunkproj_42"] || []).push([["src_components_auth_UserSettingsForm_tsx"],{

/***/ "./src/Api/index.ts":
/*!**************************!*\
  !*** ./src/Api/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API": () => (/* binding */ API),
/* harmony export */   "EndPoints": () => (/* binding */ EndPoints)
/* harmony export */ });
var BASE_URL = 'https://guiseppe-production.up.railway.app/api/';
var EndPoints;
(function (EndPoints) {
  EndPoints["COFFEE"] = "coffee/";
  EndPoints["REGISTER"] = "register/";
  EndPoints["USER"] = "user/";
  EndPoints["LOGIN"] = "login/";
  EndPoints["LOGOUT"] = "logout/";
  EndPoints["SET_PICTURE"] = "setpicture/";
})(EndPoints || (EndPoints = {}));
var API = {
  getUser: function getUser() {
    return fetch("".concat(BASE_URL).concat(EndPoints.USER), {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: {}
    }).then(function (response) {
      return response.json();
    });
  },
  createUser: function createUser(body) {
    return fetch("".concat(BASE_URL).concat(EndPoints.REGISTER), {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(function (response) {
      return response.json();
    });
  },
  loginUser: function loginUser(body) {
    return fetch("".concat(BASE_URL).concat(EndPoints.LOGIN), {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(function (response) {
      return response.json();
    });
  },
  logoutUser: function logoutUser() {
    return fetch("".concat(BASE_URL).concat(EndPoints.LOGOUT), {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    });
  },
  updateAvatar: function updateAvatar(formData) {
    return fetch("".concat(BASE_URL).concat(EndPoints.SET_PICTURE), {
      method: 'PUT',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {},
      body: formData
    }).then(function (response) {
      return response.json();
    });
  }
};

/***/ }),

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

var ErrorSpan = function ErrorSpan(props) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({
    className: "error-text"
  }, {
    children: props.text
  }));
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



var RegexEmail = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);
var RegexPassword = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/);
var InputForm = function InputForm(props) {
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)().t;
  var checkInputChange = function checkInputChange(event) {
    var _a;
    event.preventDefault();
    var _b = event.target,
      name = _b.name,
      value = _b.value;
    switch (name) {
      case 'username':
        props.initialState.errors.username = value.length < 5 ? 'Username must be 5 characters long!' : '';
        break;
      case 'email':
        props.initialState.errors.email = RegexEmail.test(value) ? '' : 'Email is not valid!';
        break;
      case 'password':
        props.initialState.errors.password = RegexPassword.test(value) ? '' : 'Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
        break;
      case 'secretWord':
        props.initialState.errors.secretWord = value.length < 5 ? 'Secret word must be 5 characters long!' : '';
        break;
      default:
        break;
    }
    var state = __assign(__assign({}, props.initialState), (_a = {}, _a[name] = value, _a));
    props.checkInputChange(state);
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: props.type
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", __assign({
      className: "label",
      htmlFor: props.type
    }, {
      children: t("".concat(props.type))
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
      className: "input",
      type: props.type === 'password' ? 'password' : 'text',
      name: props.type,
      onChange: checkInputChange
    }), props.initialState.errors["".concat(props.type)].length > 0 && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_ErrorSpan__WEBPACK_IMPORTED_MODULE_1__["default"], {
      text: props.initialState.errors[props.type]
    })]
  }));
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var components_auth_InputForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/auth/InputForm */ "./src/components/auth/InputForm.tsx");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Api */ "./src/Api/index.ts");
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





var SignForm = function SignForm(props) {
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)().t;
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      username: '',
      email: '',
      password: '',
      secretWord: '',
      errors: {
        username: '',
        email: '',
        password: '',
        secretWord: ''
      }
    }),
    initialState = _a[0],
    setInitialState = _a[1];
  var checkInputChange = function checkInputChange(state) {
    setInitialState(__assign({}, state));
  };
  var checkSubmitForm = function checkSubmitForm(event) {
    event.preventDefault();
    var validity = true;
    Object.values(initialState.errors).forEach(function (val) {
      return val.length > 0 && (validity = false);
    });
    if (validity) {
      switch (props.typeForm) {
        case 'sign-up':
          Api__WEBPACK_IMPORTED_MODULE_3__.API.createUser({
            name: initialState.username,
            email: initialState.email,
            password: initialState.password,
            secretWord: initialState.secretWord
          }).then(function (data) {
            return console.log(data);
          });
          break;
        case 'sign-in':
          Api__WEBPACK_IMPORTED_MODULE_3__.API.loginUser({
            email: initialState.email,
            password: initialState.password
          }).then(function (data) {
            return console.log(data);
          });
          break;
        case 'restore':
          break;
        case 'change-password':
          break;
        default:
          break;
      }
      setInitialState({
        username: '',
        email: '',
        password: '',
        secretWord: '',
        errors: {
          username: '',
          email: '',
          password: '',
          secretWord: ''
        }
      });
    }
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({
    className: "form",
    onSubmit: checkSubmitForm,
    noValidate: true
  }, {
    children: [props.typeForm === 'sign-in' && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_InputForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: 'email',
        checkInputChange: checkInputChange,
        initialState: initialState
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_InputForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: 'password',
        checkInputChange: checkInputChange,
        initialState: initialState
      })]
    }), props.typeForm === 'sign-up' && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_InputForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: 'username',
        checkInputChange: checkInputChange,
        initialState: initialState
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_InputForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: 'email',
        checkInputChange: checkInputChange,
        initialState: initialState
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_InputForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: 'password',
        checkInputChange: checkInputChange,
        initialState: initialState
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_InputForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: 'secretWord',
        checkInputChange: checkInputChange,
        initialState: initialState
      })]
    }), props.typeForm === 'restore' && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_InputForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: 'email',
        checkInputChange: checkInputChange,
        initialState: initialState
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_InputForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: 'secretWord',
        checkInputChange: checkInputChange,
        initialState: initialState
      })]
    }), props.typeForm === 'change-password' && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_InputForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: 'password',
        checkInputChange: checkInputChange,
        initialState: initialState
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_InputForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: 'secretWord',
        checkInputChange: checkInputChange,
        initialState: initialState
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: "submit"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
        className: "learning__btn"
      }, {
        children: props.typeForm === 'sign-up' ? t('register') : props.typeForm === 'restore' ? t('restore') : props.typeForm === 'change-password' ? t('save') : t('sign-in')
      }))
    }))]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignForm);

/***/ }),

/***/ "./src/components/auth/UserPhotoForm.tsx":
/*!***********************************************!*\
  !*** ./src/components/auth/UserPhotoForm.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Api */ "./src/Api/index.ts");
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





var UserPhotoForm = function UserPhotoForm(props) {
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)().t;
  var fileInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    photo = _a[0],
    setPhoto = _a[1];
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      userName: '',
      email: '',
      secretWord: '',
      userImage: ''
    }),
    initialState = _b[0],
    setInitialState = _b[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    Api__WEBPACK_IMPORTED_MODULE_2__.API.getUser().then(function (data) {
      console.log(data);
      setInitialState(__assign(__assign({}, initialState), {
        email: data.email,
        userName: data.name,
        userImage: data.userImage
      }));
    });
  }, []);
  var checkSubmitForm = function checkSubmitForm(event) {
    event.preventDefault();
    var formData = new FormData();
    formData.append('userImage', photo);
    formData.append('email', initialState.email);
    Api__WEBPACK_IMPORTED_MODULE_2__.API.updateAvatar(formData).then(function (data) {
      setInitialState(__assign(__assign({}, initialState), {
        userImage: data
      }));
    });
    fileInput.current.value = '';
    setPhoto(null);
  };
  var selectPhoto = function selectPhoto(e) {
    var fileList = e.target.files;
    if (!fileList) return;
    setPhoto(fileList[0]);
    setInitialState(__assign(__assign({}, initialState), {
      userImage: URL.createObjectURL(fileList[0])
    }));
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({
    className: "form",
    onSubmit: checkSubmitForm,
    noValidate: true
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      alt: t('userPhoto'),
      src: initialState.userImage,
      sx: {
        width: 72,
        height: 72
      }
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", __assign({
      className: "label label-file",
      htmlFor: "file"
    }, {
      children: t('add-file')
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
      ref: fileInput,
      id: "file",
      className: "input input-file",
      type: "file",
      name: "file",
      onChange: selectPhoto
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: "submit"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
        className: "learning__btn"
      }, {
        children: t('save')
      }))
    }))]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserPhotoForm);

/***/ }),

/***/ "./src/components/auth/UserSettingsForm.tsx":
/*!**************************************************!*\
  !*** ./src/components/auth/UserSettingsForm.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/classNames/classNames */ "./src/helpers/classNames/classNames.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var components_auth_UserPhotoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/auth/UserPhotoForm */ "./src/components/auth/UserPhotoForm.tsx");
/* harmony import */ var components_auth_SignForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/auth/SignForm */ "./src/components/auth/SignForm.tsx");
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








var UserSettingsForm = function UserSettingsForm(props) {
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)().t;
  var _a = react__WEBPACK_IMPORTED_MODULE_1__.useState('one'),
    value = _a[0],
    setValue = _a[1];
  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)('sign-wrapper', {}, [props.className])
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
      children: t('userSettings')
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], __assign({
      sx: {
        width: '100%'
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], __assign({
        value: value,
        onChange: handleChange,
        textColor: "secondary",
        indicatorColor: "secondary",
        "aria-label": "secondary tabs example"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
          value: "one",
          label: t('changePhoto')
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
          value: "two",
          label: t('changePassword')
        })]
      }))
    })), value === 'one' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_UserPhotoForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_SignForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      typeForm: 'change-password'
    })]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserSettingsForm);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfYXV0aF9Vc2VyU2V0dGluZ3NGb3JtX3RzeC45NDllZjE1ZDBjNjg5YTg1N2RjZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBRyxpREFBaUQ7QUFDekQsSUFBSUMsU0FBUztBQUNwQixDQUFDLFVBQVVBLFNBQVMsRUFBRTtFQUNsQkEsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVM7RUFDL0JBLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxXQUFXO0VBQ25DQSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTztFQUMzQkEsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFFBQVE7RUFDN0JBLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxTQUFTO0VBQy9CQSxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsYUFBYTtBQUM1QyxDQUFDLEVBQUVBLFNBQVMsS0FBS0EsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsSUFBSUMsR0FBRyxHQUFHO0VBQ2JDLE9BQU8sRUFBRSxtQkFBWTtJQUNqQixPQUFPQyxLQUFLLENBQUMsRUFBRSxDQUFDQyxNQUFNLENBQUNMLFFBQVEsQ0FBQyxDQUFDSyxNQUFNLENBQUNKLFNBQVMsQ0FBQ0ssSUFBSSxDQUFDLEVBQUU7TUFDckRDLE1BQU0sRUFBRSxLQUFLO01BQ2JDLFdBQVcsRUFBRSxTQUFTO01BQ3RCQyxJQUFJLEVBQUUsTUFBTTtNQUNaQyxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBVUMsUUFBUSxFQUFFO01BQUUsT0FBT0EsUUFBUSxDQUFDQyxJQUFJLEVBQUU7SUFBRSxDQUFDLENBQUM7RUFDNUQsQ0FBQztFQUNEQyxVQUFVLEVBQUUsb0JBQVVDLElBQUksRUFBRTtJQUN4QixPQUFPWCxLQUFLLENBQUMsRUFBRSxDQUFDQyxNQUFNLENBQUNMLFFBQVEsQ0FBQyxDQUFDSyxNQUFNLENBQUNK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O1VBQUV2RCxLQUFLLEVBQUUsS0FBSztVQUFFZ0UsS0FBSyxFQUFFaEcsQ0FBQyxDQUFDLGFBQWE7UUFBRSxDQUFDLENBQUMsRUFBRVksc0RBQUksQ0FBQzJFLHFEQUFHLEVBQUU7VUFBRXZELEtBQUssRUFBRSxLQUFLO1VBQUVnRSxLQUFLLEVBQUVoRyxDQUFDLENBQUMsZ0JBQWdCO1FBQUUsQ0FBQyxDQUFDO01BQUUsQ0FBQyxDQUFDO0lBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRWdDLEtBQUssS0FBSyxLQUFLLEdBQUdwQixzREFBSSxDQUFDbUQscUVBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHbkQsc0RBQUksQ0FBQ21DLGdFQUFRLEVBQUU7TUFBRU8sUUFBUSxFQUFFO0lBQWtCLENBQUMsQ0FBQztFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3psQixDQUFDO0FBQ0QsaUVBQWVvQyxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9BcGkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9hdXRoL0Vycm9yU3Bhbi50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9hdXRoL0lucHV0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9hdXRoL1NpZ25Gb3JtLnRzeCIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2F1dGgvVXNlclBob3RvRm9ybS50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9hdXRoL1VzZXJTZXR0aW5nc0Zvcm0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBCQVNFX1VSTCA9ICdodHRwczovL2d1aXNlcHBlLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvYXBpLyc7XHJcbmV4cG9ydCB2YXIgRW5kUG9pbnRzO1xyXG4oZnVuY3Rpb24gKEVuZFBvaW50cykge1xyXG4gICAgRW5kUG9pbnRzW1wiQ09GRkVFXCJdID0gXCJjb2ZmZWUvXCI7XHJcbiAgICBFbmRQb2ludHNbXCJSRUdJU1RFUlwiXSA9IFwicmVnaXN0ZXIvXCI7XHJcbiAgICBFbmRQb2ludHNbXCJVU0VSXCJdID0gXCJ1c2VyL1wiO1xyXG4gICAgRW5kUG9pbnRzW1wiTE9HSU5cIl0gPSBcImxvZ2luL1wiO1xyXG4gICAgRW5kUG9pbnRzW1wiTE9HT1VUXCJdID0gXCJsb2dvdXQvXCI7XHJcbiAgICBFbmRQb2ludHNbXCJTRVRfUElDVFVSRVwiXSA9IFwic2V0cGljdHVyZS9cIjtcclxufSkoRW5kUG9pbnRzIHx8IChFbmRQb2ludHMgPSB7fSkpO1xyXG5leHBvcnQgdmFyIEFQSSA9IHtcclxuICAgIGdldFVzZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJcIi5jb25jYXQoQkFTRV9VUkwpLmNvbmNhdChFbmRQb2ludHMuVVNFUiksIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7fSxcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVVc2VyOiBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcIlwiLmNvbmNhdChCQVNFX1VSTCkuY29uY2F0KEVuZFBvaW50cy5SRUdJU1RFUiksIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSk7XHJcbiAgICB9LFxyXG4gICAgbG9naW5Vc2VyOiBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcIlwiLmNvbmNhdChCQVNFX1VSTCkuY29uY2F0KEVuZFBvaW50cy5MT0dJTiksIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSk7XHJcbiAgICB9LFxyXG4gICAgbG9nb3V0VXNlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcIlwiLmNvbmNhdChCQVNFX1VSTCkuY29uY2F0KEVuZFBvaW50cy5MT0dPVVQpLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlQXZhdGFyOiBmdW5jdGlvbiAoZm9ybURhdGEpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJcIi5jb25jYXQoQkFTRV9VUkwpLmNvbmNhdChFbmRQb2ludHMuU0VUX1BJQ1RVUkUpLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxyXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KTtcclxuICAgIH0sXHJcbn07XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxudmFyIEVycm9yU3BhbiA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgcmV0dXJuIF9qc3goXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImVycm9yLXRleHRcIiB9LCB7IGNoaWxkcmVuOiBwcm9wcy50ZXh0IH0pKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JTcGFuO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCBFcnJvclNwYW4gZnJvbSAnY29tcG9uZW50cy9hdXRoL0Vycm9yU3Bhbic7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbnZhciBSZWdleEVtYWlsID0gUmVnRXhwKC9eXFxzP1tBLVow4oCTOV0rW0EtWjDigJM5Ll8rLV17MCx9QFtBLVow4oCTOS5fKy1dK1xcLltBLVow4oCTOV17Miw0fVxccz8kL2kpO1xyXG52YXIgUmVnZXhQYXNzd29yZCA9IFJlZ0V4cCgvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlxcZCkoPz0uKlsjJEAhJSYqP10pW0EtWmEtelxcZCMkQCElJio/XXs4LDMwfSQvKTtcclxudmFyIElucHV0Rm9ybSA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbigpLnQ7XHJcbiAgICB2YXIgY2hlY2tJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBfYiA9IGV2ZW50LnRhcmdldCwgbmFtZSA9IF9iLm5hbWUsIHZhbHVlID0gX2IudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VzZXJuYW1lJzpcclxuICAgICAgICAgICAgICAgIHByb3BzLmluaXRpYWxTdGF0ZS5lcnJvcnMudXNlcm5hbWUgPSB2YWx1ZS5sZW5ndGggPCA1ID8gJ1VzZXJuYW1lIG11c3QgYmUgNSBjaGFyYWN0ZXJzIGxvbmchJyA6ICcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICAgICAgICAgIHByb3BzLmluaXRpYWxTdGF0ZS5lcnJvcnMuZW1haWwgPSBSZWdleEVtYWlsLnRlc3QodmFsdWUpID8gJycgOiAnRW1haWwgaXMgbm90IHZhbGlkISc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGFzc3dvcmQnOlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuaW5pdGlhbFN0YXRlLmVycm9ycy5wYXNzd29yZCA9IFJlZ2V4UGFzc3dvcmQudGVzdCh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnUGFzc3dvcmQgbXVzdCBiZSBtaW5pbXVtIGVpZ2h0IGNoYXJhY3RlcnMsIGF0IGxlYXN0IG9uZSB1cHBlcmNhc2UgbGV0dGVyLCBvbmUgbG93ZXJjYXNlIGxldHRlciwgb25lIG51bWJlciBhbmQgb25lIHNwZWNpYWwgY2hhcmFjdGVyJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzZWNyZXRXb3JkJzpcclxuICAgICAgICAgICAgICAgIHByb3BzLmluaXRpYWxTdGF0ZS5lcnJvcnMuc2VjcmV0V29yZCA9IHZhbHVlLmxlbmd0aCA8IDUgPyAnU2VjcmV0IHdvcmQgbXVzdCBiZSA1IGNoYXJhY3RlcnMgbG9uZyEnIDogJyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RhdGUgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMuaW5pdGlhbFN0YXRlKSwgKF9hID0ge30sIF9hW25hbWVdID0gdmFsdWUsIF9hKSk7XHJcbiAgICAgICAgcHJvcHMuY2hlY2tJbnB1dENoYW5nZShzdGF0ZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogcHJvcHMudHlwZSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImxhYmVsXCIsIGh0bWxGb3I6IHByb3BzLnR5cGUgfSwgeyBjaGlsZHJlbjogdChcIlwiLmNvbmNhdChwcm9wcy50eXBlKSkgfSkpLCBfanN4KFwiaW5wdXRcIiwgeyBjbGFzc05hbWU6IFwiaW5wdXRcIiwgdHlwZTogcHJvcHMudHlwZSA9PT0gJ3Bhc3N3b3JkJyA/ICdwYXNzd29yZCcgOiAndGV4dCcsIG5hbWU6IHByb3BzLnR5cGUsIG9uQ2hhbmdlOiBjaGVja0lucHV0Q2hhbmdlIH0pLCBwcm9wcy5pbml0aWFsU3RhdGUuZXJyb3JzW1wiXCIuY29uY2F0KHByb3BzLnR5cGUpXS5sZW5ndGggPiAwICYmIChfanN4KEVycm9yU3BhbiwgeyB0ZXh0OiBwcm9wcy5pbml0aWFsU3RhdGUuZXJyb3JzW3Byb3BzLnR5cGVdIH0pKV0gfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGb3JtO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSAnY29tcG9uZW50cy9hdXRoL0lucHV0Rm9ybSc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJ0FwaSc7XHJcbnZhciBTaWduRm9ybSA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbigpLnQ7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgc2VjcmV0V29yZDogJycsXHJcbiAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgIHNlY3JldFdvcmQ6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KSwgaW5pdGlhbFN0YXRlID0gX2FbMF0sIHNldEluaXRpYWxTdGF0ZSA9IF9hWzFdO1xyXG4gICAgdmFyIGNoZWNrSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgICBzZXRJbml0aWFsU3RhdGUoX19hc3NpZ24oe30sIHN0YXRlKSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGNoZWNrU3VibWl0Rm9ybSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHZhbGlkaXR5ID0gdHJ1ZTtcclxuICAgICAgICBPYmplY3QudmFsdWVzKGluaXRpYWxTdGF0ZS5lcnJvcnMpLmZvckVhY2goZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsLmxlbmd0aCA+IDAgJiYgKHZhbGlkaXR5ID0gZmFsc2UpOyB9KTtcclxuICAgICAgICBpZiAodmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChwcm9wcy50eXBlRm9ybSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc2lnbi11cCc6XHJcbiAgICAgICAgICAgICAgICAgICAgQVBJLmNyZWF0ZVVzZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpbml0aWFsU3RhdGUudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBpbml0aWFsU3RhdGUuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBpbml0aWFsU3RhdGUucGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3JldFdvcmQ6IGluaXRpYWxTdGF0ZS5zZWNyZXRXb3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGRhdGEpOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3NpZ24taW4nOlxyXG4gICAgICAgICAgICAgICAgICAgIEFQSS5sb2dpblVzZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogaW5pdGlhbFN0YXRlLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogaW5pdGlhbFN0YXRlLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGRhdGEpOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3Jlc3RvcmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY2hhbmdlLXBhc3N3b3JkJzpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0SW5pdGlhbFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgICAgIHNlY3JldFdvcmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VjcmV0V29yZDogJycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybVwiLCBvblN1Ym1pdDogY2hlY2tTdWJtaXRGb3JtLCBub1ZhbGlkYXRlOiB0cnVlIH0sIHsgY2hpbGRyZW46IFtwcm9wcy50eXBlRm9ybSA9PT0gJ3NpZ24taW4nICYmIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KElucHV0Rm9ybSwgeyB0eXBlOiAnZW1haWwnLCBjaGVja0lucHV0Q2hhbmdlOiBjaGVja0lucHV0Q2hhbmdlLCBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSB9KSwgX2pzeChJbnB1dEZvcm0sIHsgdHlwZTogJ3Bhc3N3b3JkJywgY2hlY2tJbnB1dENoYW5nZTogY2hlY2tJbnB1dENoYW5nZSwgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUgfSldIH0pKSwgcHJvcHMudHlwZUZvcm0gPT09ICdzaWduLXVwJyAmJiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChJbnB1dEZvcm0sIHsgdHlwZTogJ3VzZXJuYW1lJywgY2hlY2tJbnB1dENoYW5nZTogY2hlY2tJbnB1dENoYW5nZSwgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUgfSksIF9qc3goSW5wdXRGb3JtLCB7IHR5cGU6ICdlbWFpbCcsIGNoZWNrSW5wdXRDaGFuZ2U6IGNoZWNrSW5wdXRDaGFuZ2UsIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlIH0pLCBfanN4KElucHV0Rm9ybSwgeyB0eXBlOiAncGFzc3dvcmQnLCBjaGVja0lucHV0Q2hhbmdlOiBjaGVja0lucHV0Q2hhbmdlLCBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSB9KSwgX2pzeChJbnB1dEZvcm0sIHsgdHlwZTogJ3NlY3JldFdvcmQnLCBjaGVja0lucHV0Q2hhbmdlOiBjaGVja0lucHV0Q2hhbmdlLCBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSB9KV0gfSkpLCBwcm9wcy50eXBlRm9ybSA9PT0gJ3Jlc3RvcmUnICYmIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KElucHV0Rm9ybSwgeyB0eXBlOiAnZW1haWwnLCBjaGVja0lucHV0Q2hhbmdlOiBjaGVja0lucHV0Q2hhbmdlLCBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSB9KSwgX2pzeChJbnB1dEZvcm0sIHsgdHlwZTogJ3NlY3JldFdvcmQnLCBjaGVja0lucHV0Q2hhbmdlOiBjaGVja0lucHV0Q2hhbmdlLCBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSB9KV0gfSkpLCBwcm9wcy50eXBlRm9ybSA9PT0gJ2NoYW5nZS1wYXNzd29yZCcgJiYgKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goSW5wdXRGb3JtLCB7IHR5cGU6ICdwYXNzd29yZCcsIGNoZWNrSW5wdXRDaGFuZ2U6IGNoZWNrSW5wdXRDaGFuZ2UsIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlIH0pLCBfanN4KElucHV0Rm9ybSwgeyB0eXBlOiAnc2VjcmV0V29yZCcsIGNoZWNrSW5wdXRDaGFuZ2U6IGNoZWNrSW5wdXRDaGFuZ2UsIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlIH0pXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic3VibWl0XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJsZWFybmluZ19fYnRuXCIgfSwgeyBjaGlsZHJlbjogcHJvcHMudHlwZUZvcm0gPT09ICdzaWduLXVwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHQoJ3JlZ2lzdGVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9wcy50eXBlRm9ybSA9PT0gJ3Jlc3RvcmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHQoJ3Jlc3RvcmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9wcy50eXBlRm9ybSA9PT0gJ2NoYW5nZS1wYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHQoJ3NhdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdCgnc2lnbi1pbicpIH0pKSB9KSldIH0pKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25Gb3JtO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJ0FwaSc7XHJcbnZhciBVc2VyUGhvdG9Gb3JtID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCkudDtcclxuICAgIHZhciBmaWxlSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShudWxsKSwgcGhvdG8gPSBfYVswXSwgc2V0UGhvdG8gPSBfYVsxXTtcclxuICAgIHZhciBfYiA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VyTmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHNlY3JldFdvcmQ6ICcnLFxyXG4gICAgICAgIHVzZXJJbWFnZTogJycsXHJcbiAgICB9KSwgaW5pdGlhbFN0YXRlID0gX2JbMF0sIHNldEluaXRpYWxTdGF0ZSA9IF9iWzFdO1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBBUEkuZ2V0VXNlcigpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHNldEluaXRpYWxTdGF0ZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaW5pdGlhbFN0YXRlKSwgeyBlbWFpbDogZGF0YS5lbWFpbCwgdXNlck5hbWU6IGRhdGEubmFtZSwgdXNlckltYWdlOiBkYXRhLnVzZXJJbWFnZSB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB2YXIgY2hlY2tTdWJtaXRGb3JtID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJJbWFnZScsIHBob3RvKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgaW5pdGlhbFN0YXRlLmVtYWlsKTtcclxuICAgICAgICBBUEkudXBkYXRlQXZhdGFyKGZvcm1EYXRhKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHNldEluaXRpYWxTdGF0ZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaW5pdGlhbFN0YXRlKSwgeyB1c2VySW1hZ2U6IGRhdGEgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZpbGVJbnB1dC5jdXJyZW50LnZhbHVlID0gJyc7XHJcbiAgICAgICAgc2V0UGhvdG8obnVsbCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNlbGVjdFBob3RvID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZmlsZUxpc3QgPSBlLnRhcmdldC5maWxlcztcclxuICAgICAgICBpZiAoIWZpbGVMaXN0KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2V0UGhvdG8oZmlsZUxpc3RbMF0pO1xyXG4gICAgICAgIHNldEluaXRpYWxTdGF0ZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaW5pdGlhbFN0YXRlKSwgeyB1c2VySW1hZ2U6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZUxpc3RbMF0pIH0pKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtXCIsIG9uU3VibWl0OiBjaGVja1N1Ym1pdEZvcm0sIG5vVmFsaWRhdGU6IHRydWUgfSwgeyBjaGlsZHJlbjogW19qc3goQXZhdGFyLCB7IGFsdDogdCgndXNlclBob3RvJyksIHNyYzogaW5pdGlhbFN0YXRlLnVzZXJJbWFnZSwgc3g6IHsgd2lkdGg6IDcyLCBoZWlnaHQ6IDcyIH0gfSksIF9qc3goXCJsYWJlbFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJsYWJlbCBsYWJlbC1maWxlXCIsIGh0bWxGb3I6IFwiZmlsZVwiIH0sIHsgY2hpbGRyZW46IHQoJ2FkZC1maWxlJykgfSkpLCBfanN4KFwiaW5wdXRcIiwgeyByZWY6IGZpbGVJbnB1dCwgaWQ6IFwiZmlsZVwiLCBjbGFzc05hbWU6IFwiaW5wdXQgaW5wdXQtZmlsZVwiLCB0eXBlOiBcImZpbGVcIiwgbmFtZTogXCJmaWxlXCIsIG9uQ2hhbmdlOiBzZWxlY3RQaG90byB9KSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJzdWJtaXRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImxlYXJuaW5nX19idG5cIiB9LCB7IGNoaWxkcmVuOiB0KCdzYXZlJykgfSkpIH0pKV0gfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVXNlclBob3RvRm9ybTtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnaGVscGVycy9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBUYWIsIFRhYnMgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBVc2VyUGhvdG9Gb3JtIGZyb20gJ2NvbXBvbmVudHMvYXV0aC9Vc2VyUGhvdG9Gb3JtJztcclxuaW1wb3J0IFNpZ25Gb3JtIGZyb20gJ2NvbXBvbmVudHMvYXV0aC9TaWduRm9ybSc7XHJcbnZhciBVc2VyU2V0dGluZ3NGb3JtID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCkudDtcclxuICAgIHZhciBfYSA9IFJlYWN0LnVzZVN0YXRlKCdvbmUnKSwgdmFsdWUgPSBfYVswXSwgc2V0VmFsdWUgPSBfYVsxXTtcclxuICAgIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQsIG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJ3NpZ24td3JhcHBlcicsIHt9LCBbcHJvcHMuY2xhc3NOYW1lXSkgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoMlwiLCB7IGNoaWxkcmVuOiB0KCd1c2VyU2V0dGluZ3MnKSB9KSwgX2pzeChCb3gsIF9fYXNzaWduKHsgc3g6IHsgd2lkdGg6ICcxMDAlJyB9IH0sIHsgY2hpbGRyZW46IF9qc3hzKFRhYnMsIF9fYXNzaWduKHsgdmFsdWU6IHZhbHVlLCBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLCB0ZXh0Q29sb3I6IFwic2Vjb25kYXJ5XCIsIGluZGljYXRvckNvbG9yOiBcInNlY29uZGFyeVwiLCBcImFyaWEtbGFiZWxcIjogXCJzZWNvbmRhcnkgdGFicyBleGFtcGxlXCIgfSwgeyBjaGlsZHJlbjogW19qc3goVGFiLCB7IHZhbHVlOiBcIm9uZVwiLCBsYWJlbDogdCgnY2hhbmdlUGhvdG8nKSB9KSwgX2pzeChUYWIsIHsgdmFsdWU6IFwidHdvXCIsIGxhYmVsOiB0KCdjaGFuZ2VQYXNzd29yZCcpIH0pXSB9KSkgfSkpLCB2YWx1ZSA9PT0gJ29uZScgPyBfanN4KFVzZXJQaG90b0Zvcm0sIHt9KSA6IF9qc3goU2lnbkZvcm0sIHsgdHlwZUZvcm06ICdjaGFuZ2UtcGFzc3dvcmQnIH0pXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyU2V0dGluZ3NGb3JtO1xyXG4iXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJFbmRQb2ludHMiLCJBUEkiLCJnZXRVc2VyIiwiZmV0Y2giLCJjb25jYXQiLCJVU0VSIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJtb2RlIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjcmVhdGVVc2VyIiwiYm9keSIsIlJFR0lTVEVSIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ2luVXNlciIsIkxPR0lOIiwibG9nb3V0VXNlciIsIkxPR09VVCIsInVwZGF0ZUF2YXRhciIsImZvcm1EYXRhIiwiU0VUX1BJQ1RVUkUiLCJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJqc3giLCJfanN4IiwiRXJyb3JTcGFuIiwicHJvcHMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInRleHQiLCJqc3hzIiwiX2pzeHMiLCJ1c2VUcmFuc2xhdGlvbiIsIlJlZ2V4RW1haWwiLCJSZWdFeHAiLCJSZWdleFBhc3N3b3JkIiwiSW5wdXRGb3JtIiwiY2hlY2tJbnB1dENoYW5nZSIsImV2ZW50IiwiX2EiLCJwcmV2ZW50RGVmYXVsdCIsIl9iIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaW5pdGlhbFN0YXRlIiwiZXJyb3JzIiwidXNlcm5hbWUiLCJlbWFpbCIsInRlc3QiLCJwYXNzd29yZCIsInNlY3JldFdvcmQiLCJzdGF0ZSIsInR5cGUiLCJodG1sRm9yIiwib25DaGFuZ2UiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsInVzZVN0YXRlIiwiU2lnbkZvcm0iLCJzZXRJbml0aWFsU3RhdGUiLCJjaGVja1N1Ym1pdEZvcm0iLCJ2YWxpZGl0eSIsInZhbHVlcyIsImZvckVhY2giLCJ2YWwiLCJ0eXBlRm9ybSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJub1ZhbGlkYXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQXZhdGFyIiwiVXNlclBob3RvRm9ybSIsImZpbGVJbnB1dCIsInBob3RvIiwic2V0UGhvdG8iLCJ1c2VyTmFtZSIsInVzZXJJbWFnZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiY3VycmVudCIsInNlbGVjdFBob3RvIiwiZSIsImZpbGVMaXN0IiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhbHQiLCJzcmMiLCJzeCIsIndpZHRoIiwiaGVpZ2h0IiwicmVmIiwiaWQiLCJSZWFjdCIsImNsYXNzTmFtZXMiLCJUYWIiLCJUYWJzIiwiQm94IiwiVXNlclNldHRpbmdzRm9ybSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWUiLCJ0ZXh0Q29sb3IiLCJpbmRpY2F0b3JDb2xvciIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==