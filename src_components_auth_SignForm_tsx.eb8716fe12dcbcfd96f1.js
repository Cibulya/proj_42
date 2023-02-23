"use strict";
(self["webpackChunkproj_42"] = self["webpackChunkproj_42"] || []).push([["src_components_auth_SignForm_tsx"],{

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
  EndPoints["RESTORE"] = "restore/";
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
    })["catch"](function (error) {
      return console.log(error);
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
    })["catch"](function (error) {
      return console.log(error);
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
    })["catch"](function (error) {
      return console.log(error);
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
    })["catch"](function (error) {
      return console.log(error);
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
    })["catch"](function (error) {
      return console.log(error);
    });
  },
  restoreUser: function restoreUser(body) {
    return fetch("".concat(BASE_URL).concat(EndPoints.RESTORE), {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(function (response) {
      return response.json();
    })["catch"](function (error) {
      return console.log(error);
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
    className: props.type === 'secretWord' ? 'username' : props.type
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
      value: props.initialState[props.type],
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var components_auth_InputForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/auth/InputForm */ "./src/components/auth/InputForm.tsx");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Api */ "./src/Api/index.ts");
/* harmony import */ var components_auth_ErrorSpan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/auth/ErrorSpan */ "./src/components/auth/ErrorSpan.tsx");
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
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)().t;
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
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    error = _b[0],
    setError = _b[1];
  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var checkInputChange = function checkInputChange(state) {
    setInitialState(__assign({}, state));
    setError('');
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
            if (data && data.message === 'User created') {
              Api__WEBPACK_IMPORTED_MODULE_3__.API.loginUser({
                email: initialState.email,
                password: initialState.password
              }).then(function (data) {
                !data.hasOwnProperty('error') ? formRef.current.parentElement.style.display = 'none' : setError(data.error || 'Try again');
              });
            }
          });
          break;
        case 'login':
          Api__WEBPACK_IMPORTED_MODULE_3__.API.loginUser({
            email: initialState.email,
            password: initialState.password
          }).then(function (data) {
            !data.hasOwnProperty('error') ? formRef.current.parentElement.style.display = 'none' : setError(data.error || 'Try again');
          });
          break;
        case 'restore':
          Api__WEBPACK_IMPORTED_MODULE_3__.API.restoreUser({
            email: initialState.email,
            password: initialState.password,
            secretWord: initialState.secretWord
          }).then(function (data) {
            if (data.statusCode !== 500) {
              Api__WEBPACK_IMPORTED_MODULE_3__.API.loginUser({
                email: initialState.email,
                password: initialState.password
              }).then(function (data) {
                !data.hasOwnProperty('error') ? formRef.current.parentElement.style.display = 'none' : setError(data.error || 'Try again');
              });
            } else {
              setError(data.message || 'Try again');
            }
          });
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
    ref: formRef,
    className: "form",
    onSubmit: checkSubmitForm,
    noValidate: true
  }, {
    children: [error.length > 0 && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_ErrorSpan__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: error
    }), props.typeForm === 'login' && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_InputForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: 'password',
        checkInputChange: checkInputChange,
        initialState: initialState
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: "submit"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
        className: "learning__btn"
      }, {
        children: props.typeForm === 'sign-up' ? t('register') : props.typeForm === 'restore' ? t('restore') : t('login')
      }))
    }))]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignForm);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfYXV0aF9TaWduRm9ybV90c3guZWI4NzE2ZmUxMmRjYmNmZDk2ZjEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUcsaURBQWlEO0FBQ3pELElBQUlDLFNBQVM7QUFDcEIsQ0FBQyxVQUFVQSxTQUFTLEVBQUU7RUFDbEJBLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxTQUFTO0VBQy9CQSxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsV0FBVztFQUNuQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU87RUFDM0JBLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRO0VBQzdCQSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUztFQUMvQkEsU0FBUyxDQUFDLGFBQWEsQ0FBQyxHQUFHLGFBQWE7RUFDeENBLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVO0FBQ3JDLENBQUMsRUFBRUEsU0FBUyxLQUFLQSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFJQyxHQUFHLEdBQUc7RUFDYkMsT0FBTyxFQUFFLG1CQUFZO0lBQ2pCLE9BQU9DLEtBQUssQ0FBQyxFQUFFLENBQUNDLE1BQU0sQ0FBQ0wsUUFBUSxDQUFDLENBQUNLLE1BQU0sQ0FBQ0osU0FBUyxDQUFDSyxJQUFJLENBQUMsRUFBRTtNQUNyREMsTUFBTSxFQUFFLEtBQUs7TUFDYkMsV0FBVyxFQUFFLFNBQVM7TUFDdEJDLElBQUksRUFBRSxNQUFNO01BQ1pDLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQyxDQUFDLENBQ0dDLElBQUksQ0FBQyxVQUFVQyxRQUFRLEVBQUU7TUFBRSxPQUFPQSxRQUFRLENBQUNDLElBQUksRUFBRTtJQUFFLENBQUMsQ0FBQyxTQUNoRCxDQUFDLFVBQVVDLEtBQUssRUFBRTtNQUFFLE9BQU9DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7SUFBRSxDQUFDLENBQUM7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Q0FBQyxVQUFVLENBQUMsR0FBR2MsS0FBSyxDQUFDMkMsUUFBUSxLQUFLLFNBQVMsR0FBR3pELENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBR0EsQ0FBQyxDQUFDLE9BQU87TUFBRSxDQUFDLENBQUM7SUFBRSxDQUFDLENBQUMsQ0FBQztFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlnRCxDQUFDO0FBQ0QsaUVBQWVnRCxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvQXBpL2luZGV4LnRzIiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9FcnJvclNwYW4udHN4Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9JbnB1dEZvcm0udHN4Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9TaWduRm9ybS50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEJBU0VfVVJMID0gJ2h0dHBzOi8vZ3Vpc2VwcGUtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9hcGkvJztcclxuZXhwb3J0IHZhciBFbmRQb2ludHM7XHJcbihmdW5jdGlvbiAoRW5kUG9pbnRzKSB7XHJcbiAgICBFbmRQb2ludHNbXCJDT0ZGRUVcIl0gPSBcImNvZmZlZS9cIjtcclxuICAgIEVuZFBvaW50c1tcIlJFR0lTVEVSXCJdID0gXCJyZWdpc3Rlci9cIjtcclxuICAgIEVuZFBvaW50c1tcIlVTRVJcIl0gPSBcInVzZXIvXCI7XHJcbiAgICBFbmRQb2ludHNbXCJMT0dJTlwiXSA9IFwibG9naW4vXCI7XHJcbiAgICBFbmRQb2ludHNbXCJMT0dPVVRcIl0gPSBcImxvZ291dC9cIjtcclxuICAgIEVuZFBvaW50c1tcIlNFVF9QSUNUVVJFXCJdID0gXCJzZXRwaWN0dXJlL1wiO1xyXG4gICAgRW5kUG9pbnRzW1wiUkVTVE9SRVwiXSA9IFwicmVzdG9yZS9cIjtcclxufSkoRW5kUG9pbnRzIHx8IChFbmRQb2ludHMgPSB7fSkpO1xyXG5leHBvcnQgdmFyIEFQSSA9IHtcclxuICAgIGdldFVzZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJcIi5jb25jYXQoQkFTRV9VUkwpLmNvbmNhdChFbmRQb2ludHMuVVNFUiksIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7fSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9KTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVVc2VyOiBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcIlwiLmNvbmNhdChCQVNFX1VSTCkuY29uY2F0KEVuZFBvaW50cy5SRUdJU1RFUiksIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSk7XHJcbiAgICB9LFxyXG4gICAgbG9naW5Vc2VyOiBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcIlwiLmNvbmNhdChCQVNFX1VSTCkuY29uY2F0KEVuZFBvaW50cy5MT0dJTiksIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSk7XHJcbiAgICB9LFxyXG4gICAgbG9nb3V0VXNlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcIlwiLmNvbmNhdChCQVNFX1VSTCkuY29uY2F0KEVuZFBvaW50cy5MT0dPVVQpLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlQXZhdGFyOiBmdW5jdGlvbiAoZm9ybURhdGEpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJcIi5jb25jYXQoQkFTRV9VUkwpLmNvbmNhdChFbmRQb2ludHMuU0VUX1BJQ1RVUkUpLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxyXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpOyB9KTtcclxuICAgIH0sXHJcbiAgICByZXN0b3JlVXNlcjogZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJcIi5jb25jYXQoQkFTRV9VUkwpLmNvbmNhdChFbmRQb2ludHMuUkVTVE9SRSksIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTsgfSk7XHJcbiAgICB9LFxyXG59O1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbnZhciBFcnJvclNwYW4gPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHJldHVybiBfanN4KFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJlcnJvci10ZXh0XCIgfSwgeyBjaGlsZHJlbjogcHJvcHMudGV4dCB9KSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yU3BhbjtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgRXJyb3JTcGFuIGZyb20gJ2NvbXBvbmVudHMvYXV0aC9FcnJvclNwYW4nO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG52YXIgUmVnZXhFbWFpbCA9IFJlZ0V4cCgvXlxccz9bQS1aMOKAkzldK1tBLVow4oCTOS5fKy1dezAsfUBbQS1aMOKAkzkuXystXStcXC5bQS1aMOKAkzldezIsNH1cXHM/JC9pKTtcclxudmFyIFJlZ2V4UGFzc3dvcmQgPSBSZWdFeHAoL14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipcXGQpKD89LipbIyRAISUmKj9dKVtBLVphLXpcXGQjJEAhJSYqP117OCwzMH0kLyk7XHJcbnZhciBJbnB1dEZvcm0gPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oKS50O1xyXG4gICAgdmFyIGNoZWNrSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgX2IgPSBldmVudC50YXJnZXQsIG5hbWUgPSBfYi5uYW1lLCB2YWx1ZSA9IF9iLnZhbHVlO1xyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICd1c2VybmFtZSc6XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5pbml0aWFsU3RhdGUuZXJyb3JzLnVzZXJuYW1lID0gdmFsdWUubGVuZ3RoIDwgNSA/ICdVc2VybmFtZSBtdXN0IGJlIDUgY2hhcmFjdGVycyBsb25nIScgOiAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5pbml0aWFsU3RhdGUuZXJyb3JzLmVtYWlsID0gUmVnZXhFbWFpbC50ZXN0KHZhbHVlKSA/ICcnIDogJ0VtYWlsIGlzIG5vdCB2YWxpZCEnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bhc3N3b3JkJzpcclxuICAgICAgICAgICAgICAgIHByb3BzLmluaXRpYWxTdGF0ZS5lcnJvcnMucGFzc3dvcmQgPSBSZWdleFBhc3N3b3JkLnRlc3QodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogJ1Bhc3N3b3JkIG11c3QgYmUgbWluaW11bSBlaWdodCBjaGFyYWN0ZXJzLCBhdCBsZWFzdCBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIGxvd2VyY2FzZSBsZXR0ZXIsIG9uZSBudW1iZXIgYW5kIG9uZSBzcGVjaWFsIGNoYXJhY3Rlcic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2VjcmV0V29yZCc6XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5pbml0aWFsU3RhdGUuZXJyb3JzLnNlY3JldFdvcmQgPSB2YWx1ZS5sZW5ndGggPCA1ID8gJ1NlY3JldCB3b3JkIG11c3QgYmUgNSBjaGFyYWN0ZXJzIGxvbmchJyA6ICcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0YXRlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3BzLmluaXRpYWxTdGF0ZSksIChfYSA9IHt9LCBfYVtuYW1lXSA9IHZhbHVlLCBfYSkpO1xyXG4gICAgICAgIHByb3BzLmNoZWNrSW5wdXRDaGFuZ2Uoc3RhdGUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IHByb3BzLnR5cGUgPT09ICdzZWNyZXRXb3JkJyA/ICd1c2VybmFtZScgOiBwcm9wcy50eXBlIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibGFiZWxcIiwgaHRtbEZvcjogcHJvcHMudHlwZSB9LCB7IGNoaWxkcmVuOiB0KFwiXCIuY29uY2F0KHByb3BzLnR5cGUpKSB9KSksIF9qc3goXCJpbnB1dFwiLCB7IGNsYXNzTmFtZTogXCJpbnB1dFwiLCB0eXBlOiBwcm9wcy50eXBlID09PSAncGFzc3dvcmQnID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0JywgbmFtZTogcHJvcHMudHlwZSwgdmFsdWU6IHByb3BzLmluaXRpYWxTdGF0ZVtwcm9wcy50eXBlXSwgb25DaGFuZ2U6IGNoZWNrSW5wdXRDaGFuZ2UgfSksIHByb3BzLmluaXRpYWxTdGF0ZS5lcnJvcnNbXCJcIi5jb25jYXQocHJvcHMudHlwZSldLmxlbmd0aCA+IDAgJiYgKF9qc3goRXJyb3JTcGFuLCB7IHRleHQ6IHByb3BzLmluaXRpYWxTdGF0ZS5lcnJvcnNbcHJvcHMudHlwZV0gfSkpXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZvcm07XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgSW5wdXRGb3JtIGZyb20gJ2NvbXBvbmVudHMvYXV0aC9JbnB1dEZvcm0nO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICdBcGknO1xyXG5pbXBvcnQgRXJyb3JTcGFuIGZyb20gJ2NvbXBvbmVudHMvYXV0aC9FcnJvclNwYW4nO1xyXG52YXIgU2lnbkZvcm0gPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oKS50O1xyXG4gICAgdmFyIF9hID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHNlY3JldFdvcmQ6ICcnLFxyXG4gICAgICAgIGVycm9yczoge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICBzZWNyZXRXb3JkOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgfSksIGluaXRpYWxTdGF0ZSA9IF9hWzBdLCBzZXRJbml0aWFsU3RhdGUgPSBfYVsxXTtcclxuICAgIHZhciBfYiA9IHVzZVN0YXRlKCcnKSwgZXJyb3IgPSBfYlswXSwgc2V0RXJyb3IgPSBfYlsxXTtcclxuICAgIHZhciBmb3JtUmVmID0gdXNlUmVmKCk7XHJcbiAgICB2YXIgY2hlY2tJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICAgIHNldEluaXRpYWxTdGF0ZShfX2Fzc2lnbih7fSwgc3RhdGUpKTtcclxuICAgICAgICBzZXRFcnJvcignJyk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGNoZWNrU3VibWl0Rm9ybSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHZhbGlkaXR5ID0gdHJ1ZTtcclxuICAgICAgICBPYmplY3QudmFsdWVzKGluaXRpYWxTdGF0ZS5lcnJvcnMpLmZvckVhY2goZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsLmxlbmd0aCA+IDAgJiYgKHZhbGlkaXR5ID0gZmFsc2UpOyB9KTtcclxuICAgICAgICBpZiAodmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChwcm9wcy50eXBlRm9ybSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc2lnbi11cCc6XHJcbiAgICAgICAgICAgICAgICAgICAgQVBJLmNyZWF0ZVVzZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpbml0aWFsU3RhdGUudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBpbml0aWFsU3RhdGUuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBpbml0aWFsU3RhdGUucGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3JldFdvcmQ6IGluaXRpYWxTdGF0ZS5zZWNyZXRXb3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5tZXNzYWdlID09PSAnVXNlciBjcmVhdGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQVBJLmxvZ2luVXNlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGluaXRpYWxTdGF0ZS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogaW5pdGlhbFN0YXRlLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkYXRhLmhhc093blByb3BlcnR5KCdlcnJvcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGZvcm1SZWYuY3VycmVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2V0RXJyb3IoZGF0YS5lcnJvciB8fCAnVHJ5IGFnYWluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbG9naW4nOlxyXG4gICAgICAgICAgICAgICAgICAgIEFQSS5sb2dpblVzZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogaW5pdGlhbFN0YXRlLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogaW5pdGlhbFN0YXRlLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWRhdGEuaGFzT3duUHJvcGVydHkoJ2Vycm9yJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGZvcm1SZWYuY3VycmVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNldEVycm9yKGRhdGEuZXJyb3IgfHwgJ1RyeSBhZ2FpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmVzdG9yZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgQVBJLnJlc3RvcmVVc2VyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGluaXRpYWxTdGF0ZS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGluaXRpYWxTdGF0ZS5wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjcmV0V29yZDogaW5pdGlhbFN0YXRlLnNlY3JldFdvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXNDb2RlICE9PSA1MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFQSS5sb2dpblVzZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBpbml0aWFsU3RhdGUuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGluaXRpYWxTdGF0ZS5wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChmb3JtUmVmLmN1cnJlbnQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNldEVycm9yKGRhdGEuZXJyb3IgfHwgJ1RyeSBhZ2FpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UgfHwgJ1RyeSBhZ2FpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldEluaXRpYWxTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgICAgICBzZWNyZXRXb3JkOiAnJyxcclxuICAgICAgICAgICAgICAgIGVycm9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlY3JldFdvcmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJmb3JtXCIsIF9fYXNzaWduKHsgcmVmOiBmb3JtUmVmLCBjbGFzc05hbWU6IFwiZm9ybVwiLCBvblN1Ym1pdDogY2hlY2tTdWJtaXRGb3JtLCBub1ZhbGlkYXRlOiB0cnVlIH0sIHsgY2hpbGRyZW46IFtlcnJvci5sZW5ndGggPiAwICYmIF9qc3goRXJyb3JTcGFuLCB7IHRleHQ6IGVycm9yIH0pLCBwcm9wcy50eXBlRm9ybSA9PT0gJ2xvZ2luJyAmJiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChJbnB1dEZvcm0sIHsgdHlwZTogJ2VtYWlsJywgY2hlY2tJbnB1dENoYW5nZTogY2hlY2tJbnB1dENoYW5nZSwgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUgfSksIF9qc3goSW5wdXRGb3JtLCB7IHR5cGU6ICdwYXNzd29yZCcsIGNoZWNrSW5wdXRDaGFuZ2U6IGNoZWNrSW5wdXRDaGFuZ2UsIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlIH0pXSB9KSksIHByb3BzLnR5cGVGb3JtID09PSAnc2lnbi11cCcgJiYgKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goSW5wdXRGb3JtLCB7IHR5cGU6ICd1c2VybmFtZScsIGNoZWNrSW5wdXRDaGFuZ2U6IGNoZWNrSW5wdXRDaGFuZ2UsIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlIH0pLCBfanN4KElucHV0Rm9ybSwgeyB0eXBlOiAnZW1haWwnLCBjaGVja0lucHV0Q2hhbmdlOiBjaGVja0lucHV0Q2hhbmdlLCBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSB9KSwgX2pzeChJbnB1dEZvcm0sIHsgdHlwZTogJ3Bhc3N3b3JkJywgY2hlY2tJbnB1dENoYW5nZTogY2hlY2tJbnB1dENoYW5nZSwgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUgfSksIF9qc3goSW5wdXRGb3JtLCB7IHR5cGU6ICdzZWNyZXRXb3JkJywgY2hlY2tJbnB1dENoYW5nZTogY2hlY2tJbnB1dENoYW5nZSwgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUgfSldIH0pKSwgcHJvcHMudHlwZUZvcm0gPT09ICdyZXN0b3JlJyAmJiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChJbnB1dEZvcm0sIHsgdHlwZTogJ2VtYWlsJywgY2hlY2tJbnB1dENoYW5nZTogY2hlY2tJbnB1dENoYW5nZSwgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUgfSksIF9qc3goSW5wdXRGb3JtLCB7IHR5cGU6ICdzZWNyZXRXb3JkJywgY2hlY2tJbnB1dENoYW5nZTogY2hlY2tJbnB1dENoYW5nZSwgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUgfSksIF9qc3goSW5wdXRGb3JtLCB7IHR5cGU6ICdwYXNzd29yZCcsIGNoZWNrSW5wdXRDaGFuZ2U6IGNoZWNrSW5wdXRDaGFuZ2UsIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlIH0pXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic3VibWl0XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJsZWFybmluZ19fYnRuXCIgfSwgeyBjaGlsZHJlbjogcHJvcHMudHlwZUZvcm0gPT09ICdzaWduLXVwJyA/IHQoJ3JlZ2lzdGVyJykgOiBwcm9wcy50eXBlRm9ybSA9PT0gJ3Jlc3RvcmUnID8gdCgncmVzdG9yZScpIDogdCgnbG9naW4nKSB9KSkgfSkpXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTaWduRm9ybTtcclxuIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwiRW5kUG9pbnRzIiwiQVBJIiwiZ2V0VXNlciIsImZldGNoIiwiY29uY2F0IiwiVVNFUiIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwibW9kZSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlVXNlciIsImJvZHkiLCJSRUdJU1RFUiIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dpblVzZXIiLCJMT0dJTiIsImxvZ291dFVzZXIiLCJMT0dPVVQiLCJ1cGRhdGVBdmF0YXIiLCJmb3JtRGF0YSIsIlNFVF9QSUNUVVJFIiwicmVzdG9yZVVzZXIiLCJSRVNUT1JFIiwiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwianN4IiwiX2pzeCIsIkVycm9yU3BhbiIsInByb3BzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJ0ZXh0IiwianN4cyIsIl9qc3hzIiwidXNlVHJhbnNsYXRpb24iLCJSZWdleEVtYWlsIiwiUmVnRXhwIiwiUmVnZXhQYXNzd29yZCIsIklucHV0Rm9ybSIsImNoZWNrSW5wdXRDaGFuZ2UiLCJldmVudCIsIl9hIiwicHJldmVudERlZmF1bHQiLCJfYiIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImluaXRpYWxTdGF0ZSIsImVycm9ycyIsInVzZXJuYW1lIiwiZW1haWwiLCJ0ZXN0IiwicGFzc3dvcmQiLCJzZWNyZXRXb3JkIiwic3RhdGUiLCJ0eXBlIiwiaHRtbEZvciIsIm9uQ2hhbmdlIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlNpZ25Gb3JtIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0RXJyb3IiLCJmb3JtUmVmIiwiY2hlY2tTdWJtaXRGb3JtIiwidmFsaWRpdHkiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsIiwidHlwZUZvcm0iLCJkYXRhIiwibWVzc2FnZSIsImN1cnJlbnQiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwic3RhdHVzQ29kZSIsInJlZiIsIm9uU3VibWl0Iiwibm9WYWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=