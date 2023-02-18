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






var radio = null;
function Radio() {
    var _a = react__WEBPACK_IMPORTED_MODULE_1__.useState(false), selected = _a[0], setSelected = _a[1];
    function playRadio() {
        if (radio != null) {
            radio.stop();
            radio.unload();
            radio = null;
            handleSliderChange(event, 30);
        }
        else {
            radio = new howler__WEBPACK_IMPORTED_MODULE_2__.Howl({
                src: ['https://stream.nightride.fm/nightride.mp3'],
                html5: true,
                volume: 0.5
            });
            radio.play();
        }
    }
    var _b = react__WEBPACK_IMPORTED_MODULE_1__.useState(30), value = _b[0], setValue = _b[1];
    var handleSliderChange = function (event, newValue) {
        setValue(newValue);
        var newVolume = +(newValue / 100).toFixed(1);
        if (radio)
            radio.volume(newVolume);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "music__container" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ container: true, spacing: 2, alignItems: "center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ item: true }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ value: "check", selected: selected, onChange: function () {
                            playRadio();
                            setSelected(!selected);
                        }, className: "radio" }, { children: " Music ON/OFF" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], { item: true, className: "volume__icon" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ item: true, xs: true }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_5__["default"], { value: typeof value === 'number' ? value : 0, onChange: handleSliderChange, "aria-labelledby": "input-slider", color: "secondary" }) }))] })) })));
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




var PauseModePage = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: 'pause-mode' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "container" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "invitation" }, { children: "It's a wonderful day! Enjoy your pause and drink a cup of coffee. First turn on the Coffee Machine and choose your drink." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_coffeeMachineFront_coffeeMachineFront__WEBPACK_IMPORTED_MODULE_1__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_sound_radio__WEBPACK_IMPORTED_MODULE_2__["default"], {})] })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PauseModePage);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX1BhdXNlTW9kZVBhZ2VfdWlfUGF1c2VNb2RlUGFnZV90c3guNjI0YmUyOWI1NWNhYjk0YjAyNWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQ3JDO0FBQ0k7QUFDd0I7QUFDaEI7QUFDSTtBQUMxQztBQUNBO0FBQ0EsYUFBYSwyQ0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhLDJDQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQUksbUJBQW1CLCtCQUErQixJQUFJLFVBQVUsdURBQUssQ0FBQywwREFBSSxhQUFhLG1EQUFtRCxJQUFJLFdBQVcsc0RBQUksQ0FBQywwREFBSSxhQUFhLFlBQVksSUFBSSxVQUFVLHNEQUFJLENBQUMsa0VBQVksYUFBYTtBQUN2UDtBQUNBO0FBQ0EseUJBQXlCLHNCQUFzQixJQUFJLDJCQUEyQixJQUFJLElBQUksc0RBQUksQ0FBQywwREFBSSxJQUFJLHVDQUF1QyxHQUFHLHNEQUFJLENBQUMsMERBQUksYUFBYSxzQkFBc0IsSUFBSSxVQUFVLHNEQUFJLENBQUMsNERBQU0sSUFBSSxtSUFBbUksR0FBRyxLQUFLLElBQUk7QUFDclc7QUFDQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHJCLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7QUFDbUI7QUFDdkM7QUFDSDtBQUN4QztBQUNBLFlBQVksc0RBQUksbUJBQW1CLHlCQUF5QixJQUFJLFVBQVUsdURBQUssbUJBQW1CLHdCQUF3QixJQUFJLFdBQVcsc0RBQUksbUJBQW1CLHlCQUF5QixJQUFJLHVJQUF1SSxJQUFJLHNEQUFJLENBQUMsd0ZBQWtCLElBQUksR0FBRyxzREFBSSxDQUFDLDhEQUFLLElBQUksSUFBSSxJQUFJO0FBQzVYO0FBQ0EsaUVBQWUsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvY29tcG9uZW50cy9zb3VuZC9yYWRpby50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvcGFnZXMvUGF1c2VNb2RlUGFnZS91aS9QYXVzZU1vZGVQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhvd2wgfSBmcm9tIFwiaG93bGVyXCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b24nO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU2xpZGVyJztcclxudmFyIHJhZGlvID0gbnVsbDtcclxuZnVuY3Rpb24gUmFkaW8oKSB7XHJcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksIHNlbGVjdGVkID0gX2FbMF0sIHNldFNlbGVjdGVkID0gX2FbMV07XHJcbiAgICBmdW5jdGlvbiBwbGF5UmFkaW8oKSB7XHJcbiAgICAgICAgaWYgKHJhZGlvICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmFkaW8uc3RvcCgpO1xyXG4gICAgICAgICAgICByYWRpby51bmxvYWQoKTtcclxuICAgICAgICAgICAgcmFkaW8gPSBudWxsO1xyXG4gICAgICAgICAgICBoYW5kbGVTbGlkZXJDaGFuZ2UoZXZlbnQsIDMwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJhZGlvID0gbmV3IEhvd2woe1xyXG4gICAgICAgICAgICAgICAgc3JjOiBbJ2h0dHBzOi8vc3RyZWFtLm5pZ2h0cmlkZS5mbS9uaWdodHJpZGUubXAzJ10sXHJcbiAgICAgICAgICAgICAgICBodG1sNTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZvbHVtZTogMC41XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByYWRpby5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIF9iID0gUmVhY3QudXNlU3RhdGUoMzApLCB2YWx1ZSA9IF9iWzBdLCBzZXRWYWx1ZSA9IF9iWzFdO1xyXG4gICAgdmFyIGhhbmRsZVNsaWRlckNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCwgbmV3VmFsdWUpIHtcclxuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgdmFyIG5ld1ZvbHVtZSA9ICsobmV3VmFsdWUgLyAxMDApLnRvRml4ZWQoMSk7XHJcbiAgICAgICAgaWYgKHJhZGlvKVxyXG4gICAgICAgICAgICByYWRpby52b2x1bWUobmV3Vm9sdW1lKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibXVzaWNfX2NvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKEdyaWQsIF9fYXNzaWduKHsgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAyLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH0sIHsgY2hpbGRyZW46IFtfanN4KEdyaWQsIF9fYXNzaWduKHsgaXRlbTogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBfanN4KFRvZ2dsZUJ1dHRvbiwgX19hc3NpZ24oeyB2YWx1ZTogXCJjaGVja1wiLCBzZWxlY3RlZDogc2VsZWN0ZWQsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5UmFkaW8oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKCFzZWxlY3RlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNsYXNzTmFtZTogXCJyYWRpb1wiIH0sIHsgY2hpbGRyZW46IFwiIE11c2ljIE9OL09GRlwiIH0pKSB9KSksIF9qc3goR3JpZCwgeyBpdGVtOiB0cnVlLCBjbGFzc05hbWU6IFwidm9sdW1lX19pY29uXCIgfSksIF9qc3goR3JpZCwgX19hc3NpZ24oeyBpdGVtOiB0cnVlLCB4czogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBfanN4KFNsaWRlciwgeyB2YWx1ZTogdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlIDogMCwgb25DaGFuZ2U6IGhhbmRsZVNsaWRlckNoYW5nZSwgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJpbnB1dC1zbGlkZXJcIiwgY29sb3I6IFwic2Vjb25kYXJ5XCIgfSkgfSkpXSB9KSkgfSkpKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBSYWRpbztcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgQ29mZmVlTWFjaGluZUZyb250IGZyb20gJ2NvbXBvbmVudHMvY29mZmVlTWFjaGluZUZyb250L2NvZmZlZU1hY2hpbmVGcm9udCc7XHJcbmltcG9ydCBSYWRpbyBmcm9tICdjb21wb25lbnRzL3NvdW5kL3JhZGlvJztcclxuaW1wb3J0ICdzdHlsZXMvY29mZmVlTWFjaGluZUZyb250LnNjc3MnO1xyXG52YXIgUGF1c2VNb2RlUGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogJ3BhdXNlLW1vZGUnIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImludml0YXRpb25cIiB9LCB7IGNoaWxkcmVuOiBcIkl0J3MgYSB3b25kZXJmdWwgZGF5ISBFbmpveSB5b3VyIHBhdXNlIGFuZCBkcmluayBhIGN1cCBvZiBjb2ZmZWUuIEZpcnN0IHR1cm4gb24gdGhlIENvZmZlZSBNYWNoaW5lIGFuZCBjaG9vc2UgeW91ciBkcmluay5cIiB9KSksIF9qc3goQ29mZmVlTWFjaGluZUZyb250LCB7fSksIF9qc3goUmFkaW8sIHt9KV0gfSkpIH0pKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBhdXNlTW9kZVBhZ2U7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==