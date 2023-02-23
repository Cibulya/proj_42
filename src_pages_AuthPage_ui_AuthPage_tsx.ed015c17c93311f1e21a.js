"use strict";
(self["webpackChunkproj_42"] = self["webpackChunkproj_42"] || []).push([["src_pages_AuthPage_ui_AuthPage_tsx"],{

/***/ "./src/components/auth/Authorization.tsx":
/*!***********************************************!*\
  !*** ./src/components/auth/Authorization.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/classNames/classNames */ "./src/helpers/classNames/classNames.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var components_auth_SignForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/auth/SignForm */ "./src/components/auth/SignForm.tsx");
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
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};







var Authorization = function Authorization(props) {
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)().t;
  var _a = react__WEBPACK_IMPORTED_MODULE_1__.useState('login'),
    value = _a[0],
    setValue = _a[1];
  var handleChange = function handleChange(event, newValue) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, setValue(newValue)];
          case 1:
            _a.sent();
            return [2 /*return*/];
        }
      });
    });
  };

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)('sign-wrapper', {}, [props.className])
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
      children: t('authorization')
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({
      sx: {
        width: '100%'
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], __assign({
        value: value,
        onChange: handleChange,
        textColor: "secondary",
        indicatorColor: "secondary",
        "aria-label": "secondary tabs example"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "login",
          label: t('login')
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "sign-up",
          label: t('sign-up')
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "restore",
          disableRipple: true,
          disabled: true
        })]
      }))
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_SignForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      typeForm: value
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({
      onClick: function onClick(event) {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4 /*yield*/, setValue('restore')];
              case 1:
                _a.sent();
                return [2 /*return*/];
            }
          });
        });
      }
    }, {
      children: t('restore')
    }))]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Authorization);

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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Api */ "./src/Api/index.ts");
/* harmony import */ var components_auth_ErrorSpan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/auth/ErrorSpan */ "./src/components/auth/ErrorSpan.tsx");
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
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)().t;
  var fileInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    error = _a[0],
    setError = _a[1];
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    photo = _b[0],
    setPhoto = _b[1];
  var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      userName: '',
      email: '',
      secretWord: '',
      userImage: '',
      isActivated: false
    }),
    initialState = _c[0],
    setInitialState = _c[1];
  var labelRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var buttonSubmitRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    Api__WEBPACK_IMPORTED_MODULE_2__.API.getUser().then(function (data) {
      if (data && !data.hasOwnProperty('message')) {
        setInitialState(__assign(__assign({}, initialState), {
          email: data.email,
          userName: data.name,
          userImage: data.userImage,
          isActivated: data.isActivated
        }));
        if (!data.isActivated) {
          labelRef.current.textContent = "".concat(t('activate'));
          fileInput.current.disabled = Boolean(!initialState.userName);
        }
      } else {
        labelRef.current.textContent = "".concat(t('login-reload'));
        fileInput.current.disabled = Boolean(!initialState.userName);
      }
    });
  }, [setPhoto]);
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
    buttonSubmitRef.current.disabled = Boolean(true);
  };
  var selectPhoto = function selectPhoto(e) {
    var fileList = e.target.files;
    if (!fileList) return;
    var file = fileList[0];
    if ((file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') && file.size / 1024 < 512) {
      setPhoto(file);
      setInitialState(__assign(__assign({}, initialState), {
        userImage: URL.createObjectURL(file)
      }));
      buttonSubmitRef.current.disabled = Boolean(!initialState.email);
      setError('');
    } else {
      e.target.files = null;
      fileInput.current.value = '';
      setPhoto(null);
      setError("".concat(t('loadImg')));
    }
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({
    className: "form",
    onSubmit: checkSubmitForm,
    noValidate: true
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      alt: t('userPhoto'),
      src: initialState.userImage,
      sx: {
        width: 72,
        height: 72
      }
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
      children: initialState.userName
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", __assign({
      ref: labelRef,
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
    }), error.length > 0 && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_ErrorSpan__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: error
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: "submit"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
        ref: buttonSubmitRef,
        className: "learning__btn",
        disabled: true
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var components_auth_UserPhotoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/auth/UserPhotoForm */ "./src/components/auth/UserPhotoForm.tsx");
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
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)().t;
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
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({
      sx: {
        width: '100%'
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], __assign({
        centered: true,
        value: value,
        onChange: handleChange,
        textColor: "secondary",
        indicatorColor: "secondary",
        "aria-label": "secondary tabs example"
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "one",
          label: t('changePhoto')
        })
      }))
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_UserPhotoForm__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserSettingsForm);

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
/* harmony import */ var components_auth_Authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/auth/Authorization */ "./src/components/auth/Authorization.tsx");
/* harmony import */ var components_auth_UserSettingsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/auth/UserSettingsForm */ "./src/components/auth/UserSettingsForm.tsx");
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



var AuthPage = function AuthPage() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: "learning-mode"
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_Authorization__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: 'card'
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_auth_UserSettingsForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: 'card'
    })]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0F1dGhQYWdlX3VpX0F1dGhQYWdlX3RzeC5lZDAxNWMxN2M5MzMxMWYxZTIxYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsUUFBUSxJQUFLLFlBQVk7RUFDbERBLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLElBQUksVUFBU0MsQ0FBQyxFQUFFO0lBQ3BDLEtBQUssSUFBSUMsQ0FBQyxFQUFFQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFSCxDQUFDLEdBQUdDLENBQUMsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDakRELENBQUMsR0FBR0csU0FBUyxDQUFDRixDQUFDLENBQUM7TUFDaEIsS0FBSyxJQUFJSSxDQUFDLElBQUlMLENBQUMsRUFBRSxJQUFJSCxNQUFNLENBQUNTLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQzNETixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztJQUNuQjtJQUNBLE9BQU9OLENBQUM7RUFDWixDQUFDO0VBQ0QsT0FBT0gsUUFBUSxDQUFDYSxLQUFLLENBQUMsSUFBSSxFQUFFTixTQUFTLENBQUM7QUFDMUMsQ0FBQztBQUNELElBQUlPLFNBQVMsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxTQUFTLElBQUssVUFBVUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLENBQUMsRUFBRUMsU0FBUyxFQUFFO0VBQ3JGLFNBQVNDLEtBQUssQ0FBQ0MsS0FBSyxFQUFFO0lBQUUsT0FBT0EsS0FBSyxZQUFZSCxDQUFDLEdBQUdHLEtBQUssR0FBRyxJQUFJSCxDQUFDLENBQUMsVUFBVUksT0FBTyxFQUFFO01BQUVBLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDO0lBQUUsQ0FBQyxDQUFDO0VBQUU7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Q0FBQyxFQUFFQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFSCxDQUFDLEdBQUdDLENBQUMsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDakRELENBQUMsR0FBR0csU0FBUyxDQUFDRixDQUFDLENBQUM7TUFDaEIsS0FBSyxJQUFJSSxDQUFDLElBQUlMLENBQUMsRUFBRSxJQUFJSCxNQUFNLENBQUNTLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQzNETixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztJQUNuQjtJQUNBLE9BQU9OLENBQUM7RUFDWixDQUFDO0VBQ0QsT0FBT0gsUUFBUSxDQUFDYSxLQUFLLENBQUMsSUFBSSxFQUFFTixTQUFTLENBQUM7QUFDMUMsQ0FBQztBQUM4RDtBQUNMO0FBQ007QUFDaEUsSUFBSWdJLFFBQVEsR0FBRyxTQUFYQSxRQUFRLEdBQWU7RUFDdkIsT0FBUWxGLHVEQUFLLENBQUMsS0FBSyxFQUFFckQsUUFBUSxDQUFDO0lBQUVxRSxTQUFTLEVBQUU7RUFBZ0IsQ0FBQyxFQUFFO0lBQUVDLFFBQVEsRUFBRSxDQUFDbkIsc0RBQUksQ0FBQ1UscUVBQWEsRUFBRTtNQUFFUSxTQUFTLEVBQUU7SUFBTyxDQUFDLENBQUMsRUFBRWxCLHNEQUFJLENBQUNrRix3RUFBZ0IsRUFBRTtNQUFFaEUsU0FBUyxFQUFFO0lBQU8sQ0FBQyxDQUFDO0VBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0ssQ0FBQztBQUNELGlFQUFla0UsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9BdXRob3JpemF0aW9uLnRzeCIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2F1dGgvVXNlclBob3RvRm9ybS50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9hdXRoL1VzZXJTZXR0aW5nc0Zvcm0udHN4Iiwid2VicGFjazovL3Byb2pfXzQyLy4vc3JjL3BhZ2VzL0F1dGhQYWdlL3VpL0F1dGhQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdoZWxwZXJzL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IFRhYiwgVGFicyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFNpZ25Gb3JtIGZyb20gJ2NvbXBvbmVudHMvYXV0aC9TaWduRm9ybSc7XHJcbnZhciBBdXRob3JpemF0aW9uID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCkudDtcclxuICAgIHZhciBfYSA9IFJlYWN0LnVzZVN0YXRlKCdsb2dpbicpLCB2YWx1ZSA9IF9hWzBdLCBzZXRWYWx1ZSA9IF9hWzFdO1xyXG4gICAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCwgbmV3VmFsdWUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHNldFZhbHVlKG5ld1ZhbHVlKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IH07XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCdzaWduLXdyYXBwZXInLCB7fSwgW3Byb3BzLmNsYXNzTmFtZV0pIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDJcIiwgeyBjaGlsZHJlbjogdCgnYXV0aG9yaXphdGlvbicpIH0pLCBfanN4KEJveCwgX19hc3NpZ24oeyBzeDogeyB3aWR0aDogJzEwMCUnIH0gfSwgeyBjaGlsZHJlbjogX2pzeHMoVGFicywgX19hc3NpZ24oeyB2YWx1ZTogdmFsdWUsIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsIHRleHRDb2xvcjogXCJzZWNvbmRhcnlcIiwgaW5kaWNhdG9yQ29sb3I6IFwic2Vjb25kYXJ5XCIsIFwiYXJpYS1sYWJlbFwiOiBcInNlY29uZGFyeSB0YWJzIGV4YW1wbGVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChUYWIsIHsgdmFsdWU6IFwibG9naW5cIiwgbGFiZWw6IHQoJ2xvZ2luJykgfSksIF9qc3goVGFiLCB7IHZhbHVlOiBcInNpZ24tdXBcIiwgbGFiZWw6IHQoJ3NpZ24tdXAnKSB9KSwgX2pzeChUYWIsIHsgdmFsdWU6IFwicmVzdG9yZVwiLCBkaXNhYmxlUmlwcGxlOiB0cnVlLCBkaXNhYmxlZDogdHJ1ZSB9KV0gfSkpIH0pKSwgX2pzeChTaWduRm9ybSwgeyB0eXBlRm9ybTogdmFsdWUgfSksIF9qc3goXCJhXCIsIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXRWYWx1ZSgncmVzdG9yZScpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTsgfSB9LCB7IGNoaWxkcmVuOiB0KCdyZXN0b3JlJykgfSkpXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBdXRob3JpemF0aW9uO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJ0FwaSc7XHJcbmltcG9ydCBFcnJvclNwYW4gZnJvbSAnY29tcG9uZW50cy9hdXRoL0Vycm9yU3Bhbic7XHJcbnZhciBVc2VyUGhvdG9Gb3JtID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCkudDtcclxuICAgIHZhciBmaWxlSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSgnJyksIGVycm9yID0gX2FbMF0sIHNldEVycm9yID0gX2FbMV07XHJcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShudWxsKSwgcGhvdG8gPSBfYlswXSwgc2V0UGhvdG8gPSBfYlsxXTtcclxuICAgIHZhciBfYyA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VyTmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHNlY3JldFdvcmQ6ICcnLFxyXG4gICAgICAgIHVzZXJJbWFnZTogJycsXHJcbiAgICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxyXG4gICAgfSksIGluaXRpYWxTdGF0ZSA9IF9jWzBdLCBzZXRJbml0aWFsU3RhdGUgPSBfY1sxXTtcclxuICAgIHZhciBsYWJlbFJlZiA9IHVzZVJlZigpO1xyXG4gICAgdmFyIGJ1dHRvblN1Ym1pdFJlZiA9IHVzZVJlZigpO1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBBUEkuZ2V0VXNlcigpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgJiYgIWRhdGEuaGFzT3duUHJvcGVydHkoJ21lc3NhZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SW5pdGlhbFN0YXRlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBpbml0aWFsU3RhdGUpLCB7IGVtYWlsOiBkYXRhLmVtYWlsLCB1c2VyTmFtZTogZGF0YS5uYW1lLCB1c2VySW1hZ2U6IGRhdGEudXNlckltYWdlLCBpc0FjdGl2YXRlZDogZGF0YS5pc0FjdGl2YXRlZCB9KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaXNBY3RpdmF0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFJlZi5jdXJyZW50LnRleHRDb250ZW50ID0gXCJcIi5jb25jYXQodCgnYWN0aXZhdGUnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZUlucHV0LmN1cnJlbnQuZGlzYWJsZWQgPSBCb29sZWFuKCFpbml0aWFsU3RhdGUudXNlck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxSZWYuY3VycmVudC50ZXh0Q29udGVudCA9IFwiXCIuY29uY2F0KHQoJ2xvZ2luLXJlbG9hZCcpKTtcclxuICAgICAgICAgICAgICAgIGZpbGVJbnB1dC5jdXJyZW50LmRpc2FibGVkID0gQm9vbGVhbighaW5pdGlhbFN0YXRlLnVzZXJOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW3NldFBob3RvXSk7XHJcbiAgICB2YXIgY2hlY2tTdWJtaXRGb3JtID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJJbWFnZScsIHBob3RvKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgaW5pdGlhbFN0YXRlLmVtYWlsKTtcclxuICAgICAgICBBUEkudXBkYXRlQXZhdGFyKGZvcm1EYXRhKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHNldEluaXRpYWxTdGF0ZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaW5pdGlhbFN0YXRlKSwgeyB1c2VySW1hZ2U6IGRhdGEgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZpbGVJbnB1dC5jdXJyZW50LnZhbHVlID0gJyc7XHJcbiAgICAgICAgc2V0UGhvdG8obnVsbCk7XHJcbiAgICAgICAgYnV0dG9uU3VibWl0UmVmLmN1cnJlbnQuZGlzYWJsZWQgPSBCb29sZWFuKHRydWUpO1xyXG4gICAgfTtcclxuICAgIHZhciBzZWxlY3RQaG90byA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGZpbGVMaXN0ID0gZS50YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgaWYgKCFmaWxlTGlzdClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBmaWxlID0gZmlsZUxpc3RbMF07XHJcbiAgICAgICAgaWYgKChmaWxlLnR5cGUgPT09ICdpbWFnZS9wbmcnIHx8IGZpbGUudHlwZSA9PT0gJ2ltYWdlL2pwZWcnIHx8IGZpbGUudHlwZSA9PT0gJ2ltYWdlL2pwZycpICYmXHJcbiAgICAgICAgICAgIGZpbGUuc2l6ZSAvIDEwMjQgPCA1MTIpIHtcclxuICAgICAgICAgICAgc2V0UGhvdG8oZmlsZSk7XHJcbiAgICAgICAgICAgIHNldEluaXRpYWxTdGF0ZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaW5pdGlhbFN0YXRlKSwgeyB1c2VySW1hZ2U6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkgfSkpO1xyXG4gICAgICAgICAgICBidXR0b25TdWJtaXRSZWYuY3VycmVudC5kaXNhYmxlZCA9IEJvb2xlYW4oIWluaXRpYWxTdGF0ZS5lbWFpbCk7XHJcbiAgICAgICAgICAgIHNldEVycm9yKCcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmZpbGVzID0gbnVsbDtcclxuICAgICAgICAgICAgZmlsZUlucHV0LmN1cnJlbnQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgc2V0UGhvdG8obnVsbCk7XHJcbiAgICAgICAgICAgIHNldEVycm9yKFwiXCIuY29uY2F0KHQoJ2xvYWRJbWcnKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtXCIsIG9uU3VibWl0OiBjaGVja1N1Ym1pdEZvcm0sIG5vVmFsaWRhdGU6IHRydWUgfSwgeyBjaGlsZHJlbjogW19qc3goQXZhdGFyLCB7IGFsdDogdCgndXNlclBob3RvJyksIHNyYzogaW5pdGlhbFN0YXRlLnVzZXJJbWFnZSwgc3g6IHsgd2lkdGg6IDcyLCBoZWlnaHQ6IDcyIH0gfSksIF9qc3goXCJoM1wiLCB7IGNoaWxkcmVuOiBpbml0aWFsU3RhdGUudXNlck5hbWUgfSksIF9qc3goXCJsYWJlbFwiLCBfX2Fzc2lnbih7IHJlZjogbGFiZWxSZWYsIGNsYXNzTmFtZTogXCJsYWJlbCBsYWJlbC1maWxlXCIsIGh0bWxGb3I6IFwiZmlsZVwiIH0sIHsgY2hpbGRyZW46IHQoJ2FkZC1maWxlJykgfSkpLCBfanN4KFwiaW5wdXRcIiwgeyByZWY6IGZpbGVJbnB1dCwgaWQ6IFwiZmlsZVwiLCBjbGFzc05hbWU6IFwiaW5wdXQgaW5wdXQtZmlsZVwiLCB0eXBlOiBcImZpbGVcIiwgbmFtZTogXCJmaWxlXCIsIG9uQ2hhbmdlOiBzZWxlY3RQaG90byB9KSwgZXJyb3IubGVuZ3RoID4gMCAmJiBfanN4KEVycm9yU3BhbiwgeyB0ZXh0OiBlcnJvciB9KSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJzdWJtaXRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgcmVmOiBidXR0b25TdWJtaXRSZWYsIGNsYXNzTmFtZTogXCJsZWFybmluZ19fYnRuXCIsIGRpc2FibGVkOiB0cnVlIH0sIHsgY2hpbGRyZW46IHQoJ3NhdmUnKSB9KSkgfSkpXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyUGhvdG9Gb3JtO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdoZWxwZXJzL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IFRhYiwgVGFicyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFVzZXJQaG90b0Zvcm0gZnJvbSAnY29tcG9uZW50cy9hdXRoL1VzZXJQaG90b0Zvcm0nO1xyXG52YXIgVXNlclNldHRpbmdzRm9ybSA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbigpLnQ7XHJcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VTdGF0ZSgnb25lJyksIHZhbHVlID0gX2FbMF0sIHNldFZhbHVlID0gX2FbMV07XHJcbiAgICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50LCBuZXdWYWx1ZSkge1xyXG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCdzaWduLXdyYXBwZXInLCB7fSwgW3Byb3BzLmNsYXNzTmFtZV0pIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDJcIiwgeyBjaGlsZHJlbjogdCgndXNlclNldHRpbmdzJykgfSksIF9qc3goQm94LCBfX2Fzc2lnbih7IHN4OiB7IHdpZHRoOiAnMTAwJScgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFRhYnMsIF9fYXNzaWduKHsgY2VudGVyZWQ6IHRydWUsIHZhbHVlOiB2YWx1ZSwgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSwgdGV4dENvbG9yOiBcInNlY29uZGFyeVwiLCBpbmRpY2F0b3JDb2xvcjogXCJzZWNvbmRhcnlcIiwgXCJhcmlhLWxhYmVsXCI6IFwic2Vjb25kYXJ5IHRhYnMgZXhhbXBsZVwiIH0sIHsgY2hpbGRyZW46IF9qc3goVGFiLCB7IHZhbHVlOiBcIm9uZVwiLCBsYWJlbDogdCgnY2hhbmdlUGhvdG8nKSB9KSB9KSkgfSkpLCBfanN4KFVzZXJQaG90b0Zvcm0sIHt9KV0gfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVXNlclNldHRpbmdzRm9ybTtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICdjb21wb25lbnRzL2F1dGgvQXV0aG9yaXphdGlvbic7XHJcbmltcG9ydCBVc2VyU2V0dGluZ3NGb3JtIGZyb20gJ2NvbXBvbmVudHMvYXV0aC9Vc2VyU2V0dGluZ3NGb3JtJztcclxudmFyIEF1dGhQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJsZWFybmluZy1tb2RlXCIgfSwgeyBjaGlsZHJlbjogW19qc3goQXV0aG9yaXphdGlvbiwgeyBjbGFzc05hbWU6ICdjYXJkJyB9KSwgX2pzeChVc2VyU2V0dGluZ3NGb3JtLCB7IGNsYXNzTmFtZTogJ2NhcmQnIH0pXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBdXRoUGFnZTtcclxuIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwidmFsdWUiLCJyZXNvbHZlIiwiUHJvbWlzZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsImYiLCJ5IiwiZyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInYiLCJvcCIsIlR5cGVFcnJvciIsInBvcCIsInB1c2giLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwiUmVhY3QiLCJjbGFzc05hbWVzIiwidXNlVHJhbnNsYXRpb24iLCJUYWIiLCJUYWJzIiwiQm94IiwiU2lnbkZvcm0iLCJBdXRob3JpemF0aW9uIiwicHJvcHMiLCJfYSIsInVzZVN0YXRlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJzeCIsIndpZHRoIiwib25DaGFuZ2UiLCJ0ZXh0Q29sb3IiLCJpbmRpY2F0b3JDb2xvciIsImRpc2FibGVSaXBwbGUiLCJkaXNhYmxlZCIsInR5cGVGb3JtIiwib25DbGljayIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkF2YXRhciIsIkFQSSIsIkVycm9yU3BhbiIsIlVzZXJQaG90b0Zvcm0iLCJmaWxlSW5wdXQiLCJlcnJvciIsInNldEVycm9yIiwiX2IiLCJwaG90byIsInNldFBob3RvIiwiX2MiLCJ1c2VyTmFtZSIsImVtYWlsIiwic2VjcmV0V29yZCIsInVzZXJJbWFnZSIsImlzQWN0aXZhdGVkIiwiaW5pdGlhbFN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwibGFiZWxSZWYiLCJidXR0b25TdWJtaXRSZWYiLCJnZXRVc2VyIiwiZGF0YSIsIm5hbWUiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJjb25jYXQiLCJCb29sZWFuIiwiY2hlY2tTdWJtaXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXBkYXRlQXZhdGFyIiwic2VsZWN0UGhvdG8iLCJmaWxlTGlzdCIsInRhcmdldCIsImZpbGVzIiwiZmlsZSIsInR5cGUiLCJzaXplIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25TdWJtaXQiLCJub1ZhbGlkYXRlIiwiYWx0Iiwic3JjIiwiaGVpZ2h0IiwicmVmIiwiaHRtbEZvciIsImlkIiwidGV4dCIsIlVzZXJTZXR0aW5nc0Zvcm0iLCJjZW50ZXJlZCIsIkF1dGhQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==