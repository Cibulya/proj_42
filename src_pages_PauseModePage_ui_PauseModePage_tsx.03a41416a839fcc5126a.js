"use strict";
(self["webpackChunkproj_42"] = self["webpackChunkproj_42"] || []).push([["src_pages_PauseModePage_ui_PauseModePage_tsx"],{

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

/***/ "./src/pages/PauseModePage/ui/PauseModePage.tsx":
/*!******************************************************!*\
  !*** ./src/pages/PauseModePage/ui/PauseModePage.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var components_coffeeMachineFront_coffeeMachineFront__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/coffeeMachineFront/coffeeMachineFront */ "./src/components/coffeeMachineFront/coffeeMachineFront.tsx");
/* harmony import */ var components_sound_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/sound/radio */ "./src/components/sound/radio.tsx");
/* harmony import */ var styles_coffeeMachineFront_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/coffeeMachineFront.scss */ "./src/styles/coffeeMachineFront.scss");
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




var PauseModePage = function PauseModePage() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
    className: 'pause-mode'
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: "container"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
        className: "invitation"
      }, {
        children: "It's a wonderful day! Enjoy your pause and drink a cup of coffee. First turn on the Coffee Machine and choose your drink."
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_coffeeMachineFront_coffeeMachineFront__WEBPACK_IMPORTED_MODULE_1__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_sound_radio__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
    }))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PauseModePage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX1BhdXNlTW9kZVBhZ2VfdWlfUGF1c2VNb2RlUGFnZV90c3guMDNhNDE0MTZhODM5ZmNjNTEyNmEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsUUFBUSxJQUFLLFlBQVk7RUFDbERBLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLElBQUksVUFBU0MsQ0FBQyxFQUFFO0lBQ3BDLEtBQUssSUFBSUMsQ0FBQyxFQUFFQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFSCxDQUFDLEdBQUdDLENBQUMsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDakRELENBQUMsR0FBR0csU0FBUyxDQUFDRixDQUFDLENBQUM7TUFDaEIsS0FBSyxJQUFJSSxDQUFDLElBQUlMLENBQUMsRUFBRSxJQUFJSCxNQUFNLENBQUNTLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQzNETixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztJQUNuQjtJQUNBLE9BQU9OLENBQUM7RUFDWixDQUFDO0VBQ0QsT0FBT0gsUUFBUSxDQUFDYSxLQUFLLENBQUMsSUFBSSxFQUFFTixTQUFTLENBQUM7QUFDMUMsQ0FBQztBQUM4RDtBQUNyQztBQUNJO0FBQ3dCO0FBQ2hCO0FBQ0k7QUFDMUMsSUFBSWdCLEtBQUssR0FBRyxJQUFJO0FBQ2hCLFNBQVNDLEtBQUssR0FBRztFQUNiLElBQUlDLEVBQUUsR0FBR1AsMkNBQWMsQ0FBQyxLQUFLLENBQUM7SUFBRVMsUUFBUSxHQUFHRixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQUVHLFdBQVcsR0FBR0gsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNyRSxTQUFTSSxTQUFTLEdBQUc7SUFDakIsSUFBSU4sS0FBSyxJQUFJLElB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IjpbIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL3NvdW5kL3JhZGlvLnRzeCIsIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9wYWdlcy9QYXVzZU1vZGVQYWdlL3VpL1BhdXNlTW9kZVBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSG93bCB9IGZyb20gXCJob3dsZXJcIjtcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9TbGlkZXInO1xyXG52YXIgcmFkaW8gPSBudWxsO1xyXG5mdW5jdGlvbiBSYWRpbygpIHtcclxuICAgIHZhciBfYSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSwgc2VsZWN0ZWQgPSBfYVswXSwgc2V0U2VsZWN0ZWQgPSBfYVsxXTtcclxuICAgIGZ1bmN0aW9uIHBsYXlSYWRpbygpIHtcclxuICAgICAgICBpZiAocmFkaW8gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByYWRpby5zdG9wKCk7XHJcbiAgICAgICAgICAgIHJhZGlvLnVubG9hZCgpO1xyXG4gICAgICAgICAgICByYWRpbyA9IG51bGw7XHJcbiAgICAgICAgICAgIGhhbmRsZVNsaWRlckNoYW5nZShldmVudCwgMzApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmFkaW8gPSBuZXcgSG93bCh7XHJcbiAgICAgICAgICAgICAgICBzcmM6IFsnaHR0cHM6Ly9zdHJlYW0ubmlnaHRyaWRlLmZtL25pZ2h0cmlkZS5tcDMnXSxcclxuICAgICAgICAgICAgICAgIGh0bWw1OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdm9sdW1lOiAwLjVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJhZGlvLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgX2IgPSBSZWFjdC51c2VTdGF0ZSgzMCksIHZhbHVlID0gX2JbMF0sIHNldFZhbHVlID0gX2JbMV07XHJcbiAgICB2YXIgaGFuZGxlU2xpZGVyQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50LCBuZXdWYWx1ZSkge1xyXG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICB2YXIgbmV3Vm9sdW1lID0gKyhuZXdWYWx1ZSAvIDEwMCkudG9GaXhlZCgxKTtcclxuICAgICAgICBpZiAocmFkaW8pXHJcbiAgICAgICAgICAgIHJhZGlvLnZvbHVtZShuZXdWb2x1bWUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtdXNpY19fY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoR3JpZCwgX19hc3NpZ24oeyBjb250YWluZXI6IHRydWUsIHNwYWNpbmc6IDIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfSwgeyBjaGlsZHJlbjogW19qc3goR3JpZCwgX19hc3NpZ24oeyBpdGVtOiB0cnVlIH0sIHsgY2hpbGRyZW46IF9qc3goVG9nZ2xlQnV0dG9uLCBfX2Fzc2lnbih7IHZhbHVlOiBcImNoZWNrXCIsIHNlbGVjdGVkOiBzZWxlY3RlZCwgb25DaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlSYWRpbygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoIXNlbGVjdGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgY2xhc3NOYW1lOiBcInJhZGlvXCIgfSwgeyBjaGlsZHJlbjogXCIgTXVzaWMgT04vT0ZGXCIgfSkpIH0pKSwgX2pzeChHcmlkLCB7IGl0ZW06IHRydWUsIGNsYXNzTmFtZTogXCJ2b2x1bWVfX2ljb25cIiB9KSwgX2pzeChHcmlkLCBfX2Fzc2lnbih7IGl0ZW06IHRydWUsIHhzOiB0cnVlIH0sIHsgY2hpbGRyZW46IF9qc3goU2xpZGVyLCB7IHZhbHVlOiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gdmFsdWUgOiAwLCBvbkNoYW5nZTogaGFuZGxlU2xpZGVyQ2hhbmdlLCBcImFyaWEtbGFiZWxsZWRieVwiOiBcImlucHV0LXNsaWRlclwiLCBjb2xvcjogXCJzZWNvbmRhcnlcIiB9KSB9KSldIH0pKSB9KSkpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJhZGlvO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCBDb2ZmZWVNYWNoaW5lRnJvbnQgZnJvbSAnY29tcG9uZW50cy9jb2ZmZWVNYWNoaW5lRnJvbnQvY29mZmVlTWFjaGluZUZyb250JztcclxuaW1wb3J0IFJhZGlvIGZyb20gJ2NvbXBvbmVudHMvc291bmQvcmFkaW8nO1xyXG5pbXBvcnQgJ3N0eWxlcy9jb2ZmZWVNYWNoaW5lRnJvbnQuc2Nzcyc7XHJcbnZhciBQYXVzZU1vZGVQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiAncGF1c2UtbW9kZScgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaW52aXRhdGlvblwiIH0sIHsgY2hpbGRyZW46IFwiSXQncyBhIHdvbmRlcmZ1bCBkYXkhIEVuam95IHlvdXIgcGF1c2UgYW5kIGRyaW5rIGEgY3VwIG9mIGNvZmZlZS4gRmlyc3QgdHVybiBvbiB0aGUgQ29mZmVlIE1hY2hpbmUgYW5kIGNob29zZSB5b3VyIGRyaW5rLlwiIH0pKSwgX2pzeChDb2ZmZWVNYWNoaW5lRnJvbnQsIHt9KSwgX2pzeChSYWRpbywge30pXSB9KSkgfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGF1c2VNb2RlUGFnZTtcclxuIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJSZWFjdCIsIkhvd2wiLCJUb2dnbGVCdXR0b24iLCJHcmlkIiwiU2xpZGVyIiwicmFkaW8iLCJSYWRpbyIsIl9hIiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicGxheVJhZGlvIiwic3RvcCIsInVubG9hZCIsImhhbmRsZVNsaWRlckNoYW5nZSIsImV2ZW50Iiwic3JjIiwiaHRtbDUiLCJ2b2x1bWUiLCJwbGF5IiwiX2IiLCJ2YWx1ZSIsInNldFZhbHVlIiwibmV3VmFsdWUiLCJuZXdWb2x1bWUiLCJ0b0ZpeGVkIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJjb250YWluZXIiLCJzcGFjaW5nIiwiYWxpZ25JdGVtcyIsIml0ZW0iLCJvbkNoYW5nZSIsInhzIiwiY29sb3IiLCJDb2ZmZWVNYWNoaW5lRnJvbnQiLCJQYXVzZU1vZGVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==