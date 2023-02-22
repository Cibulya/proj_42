"use strict";
(self["webpackChunkproj_42"] = self["webpackChunkproj_42"] || []).push([["src_pages_MainPage_ui_MainPage_tsx"],{

/***/ "./src/components/cards/StartCard.tsx":
/*!********************************************!*\
  !*** ./src/components/cards/StartCard.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/classNames/classNames */ "./src/helpers/classNames/classNames.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var components_Header_Navbar_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Header/Navbar/AppLink/AppLink */ "./src/components/Header/Navbar/AppLink/AppLink.tsx");
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




var StartCard = function StartCard(props) {
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)().t;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)('card', {}, ["".concat(props.className)])
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
      children: t("".concat(props.linkTitle))
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Header_Navbar_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_2__["default"], __assign({
      theme: components_Header_Navbar_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_2__.AppLinkTheme.SECONDARY,
      to: props.to
    }, {
      children: t("next")
    }))]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartCard);

/***/ }),

/***/ "./src/pages/MainPage/ui/MainPage.tsx":
/*!********************************************!*\
  !*** ./src/pages/MainPage/ui/MainPage.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/classNames/classNames */ "./src/helpers/classNames/classNames.ts");
/* harmony import */ var components_cards_StartCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/cards/StartCard */ "./src/components/cards/StartCard.tsx");
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



var MainPage = function MainPage() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
    className: 'main-page'
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: (0,helpers_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)('cards')
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_cards_StartCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: '/pause',
        linkTitle: 'Pause Mode'
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_cards_StartCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: '/learning',
        linkTitle: 'Learning Mode'
      })]
    }))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX01haW5QYWdlX3VpX01haW5QYWdlX3RzeC5mNDVlZGNkNmZiMTgzODhlYmNlNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxRQUFRLElBQUssWUFBWTtFQUNsREEsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sSUFBSSxVQUFTQyxDQUFDLEVBQUU7SUFDcEMsS0FBSyxJQUFJQyxDQUFDLEVBQUVDLENBQUMsR0FBRyxDQUFDLEVBQUVDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFNLEVBQUVILENBQUMsR0FBR0MsQ0FBQyxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNqREQsQ0FBQyxHQUFHRyxTQUFTLENBQUNGLENBQUMsQ0FBQztNQUNoQixLQUFLLElBQUlJLENBQUMsSUFBSUwsQ0FBQyxFQUFFLElBQUlILE1BQU0sQ0FBQ1MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFSyxDQUFDLENBQUMsRUFDM0ROLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO0lBQ25CO0lBQ0EsT0FBT04sQ0FBQztFQUNaLENBQUM7RUFDRCxPQUFPSCxRQUFRLENBQUNhLEtBQUssQ0FBQyxJQUFJLEVBQUVOLFNBQVMsQ0FBQztBQUMxQyxDQUFDO0FBQzhEO0FBQ0o7QUFDWjtBQUNrQztBQUNqRixJQUFJZSxTQUFTLEdBQUcsU0FBWkEsU0FBUyxDQUFhQyxLQUFLLEVBQUU7RUFDN0IsSUFBSXBCLENBQUMsR0FBR2dCLDZEQUFjLEVBQUUsQ0FBQ2hCLENBQUM7RUFDMUIsT0FBUWMsdURBQUssQ0FBQyxLQUFLLEVBQUVqQixRQUFRLENBQUM7SUFBRXdCLFNBQVMsRUFBRU4seUVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUNPLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDQyxTQUFTLENBQUMsQ0FBQztFQUFFLENBQUMsRUFBRTtJQUFFRSxRQUFRLEVBQUUsQ0FBQ1gsc0RBQUksQ0FBQyxJQUFJLEVBQUU7TUFBRVcsUUFBUSxFQUFFdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQ3NCLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDSSxTQUFTLENBQUM7SUFBRSxDQUFDLENBQUMsRUFBRVosc0RBQUksQ0FBQ0ssZ0ZBQU8sRUFBRXBCLFFBQVEsQ0FBQztNQUFFNEIsS0FBSyxFQUFFUCw0RkFBc0I7TUFBRVMsRUFBRSxFQUFFUCxLQUFLLENBQUNPO0lBQUcsQ0FBQyxFQUFFO01BQUVKLFFBQVEsRUFBRXZCLENBQUMsQ0FBQyxNQUFNO0lBQUUsQ0FBQyxDQUFDLENBQUM7RUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuUixDQUFDO0FBQ0QsaUVBQWVtQixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CeEIsSUFBSXRCLFFBQVEsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxRQUFRLElBQUssWUFBWTtFQUNsREEsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sSUFBSSxVQUFTQyxDQUFDLEVBQUU7SUFDcEMsS0FBSyxJQUFJQyxDQUFDLEVBQUVDLENBQUMsR0FBRyxDQUFDLEVBQUVDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFNLEVBQUVILENBQUMsR0FBR0MsQ0FBQyxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNqREQsQ0FBQyxHQUFHRyxTQUFTLENBQUNGLENBQUMsQ0FBQztNQUNoQixLQUFLLElBQUlJLENBQUMsSUFBSUwsQ0FBQyxFQUFFLElBQUlILE1BQU0sQ0FBQ1MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFSyxDQUFDLENBQUMsRUFDM0ROLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO0lBQ25CO0lBQ0EsT0FBT04sQ0FBQztFQUNaLENBQUM7RUFDRCxPQUFPSCxRQUFRLENBQUNhLEtBQUssQ0FBQyxJQUFJLEVBQUVOLFNBQVMsQ0FBQztBQUMxQyxDQUFDO0FBQzhEO0FBQ0o7QUFDUjtBQUNuRCxJQUFJd0IsUUFBUSxHQUFHLFNBQVhBLFFBQVEsR0FBZTtFQUN2QixPQUFPaEIsc0RBQUksQ0FBQyxLQUFLLEVBQUVmLFFBQVEsQ0FBQztJQUFFd0IsU0FBUyxFQUFFO0VBQVksQ0FBQyxFQUFFO0lBQUVFLFFBQVEsRUFBRVQsdURBQUssQ0FBQyxLQUFLLEVBQUVqQixRQUFRLENBQUM7TUFBRXdCLFNBQVMsRUFBRU4seUVBQVUsQ0FBQyxPQUFPO0lBQUUsQ0FBQyxFQUFFO01BQUVRLFFBQVEsRUFBRSxDQUFDWCxzREFBSSxDQUFDTyxrRUFBUyxFQUFFO1FBQUVRLEVBQUUsRUFBRSxRQUFRO1FBQUVILFNBQVMsRUFBRTtNQUFhLENBQUMsQ0FBQyxFQUFFWixzREFBSSxDQUFDTyxrRUFBUyxFQUFFO1FBQUVRLEVBQUUsRUFBRSxXQUFXO1FBQUVILFNBQVMsRUFBRTtNQUFnQixDQUFDLENBQUM7SUFBRSxDQUFDLENBQUM7RUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwUixDQUFDO0FBQ0QsaUVBQWVJLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qX180Mi8uL3NyYy9jb21wb25lbnRzL2NhcmRzL1N0YXJ0Q2FyZC50c3giLCJ3ZWJwYWNrOi8vcHJval9fNDIvLi9zcmMvcGFnZXMvTWFpblBhZ2UvdWkvTWFpblBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ2hlbHBlcnMvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IEFwcExpbmssIHsgQXBwTGlua1RoZW1lIH0gZnJvbSAnY29tcG9uZW50cy9IZWFkZXIvTmF2YmFyL0FwcExpbmsvQXBwTGluayc7XHJcbnZhciBTdGFydENhcmQgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oKS50O1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lcygnY2FyZCcsIHt9LCBbXCJcIi5jb25jYXQocHJvcHMuY2xhc3NOYW1lKV0pIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDJcIiwgeyBjaGlsZHJlbjogdChcIlwiLmNvbmNhdChwcm9wcy5saW5rVGl0bGUpKSB9KSwgX2pzeChBcHBMaW5rLCBfX2Fzc2lnbih7IHRoZW1lOiBBcHBMaW5rVGhlbWUuU0VDT05EQVJZLCB0bzogcHJvcHMudG8gfSwgeyBjaGlsZHJlbjogdChcIm5leHRcIikgfSkpXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdGFydENhcmQ7XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ2hlbHBlcnMvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcclxuaW1wb3J0IFN0YXJ0Q2FyZCBmcm9tICdjb21wb25lbnRzL2NhcmRzL1N0YXJ0Q2FyZCc7XHJcbnZhciBNYWluUGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiAnbWFpbi1wYWdlJyB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lcygnY2FyZHMnKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChTdGFydENhcmQsIHsgdG86ICcvcGF1c2UnLCBsaW5rVGl0bGU6ICdQYXVzZSBNb2RlJyB9KSwgX2pzeChTdGFydENhcmQsIHsgdG86ICcvbGVhcm5pbmcnLCBsaW5rVGl0bGU6ICdMZWFybmluZyBNb2RlJyB9KV0gfSkpIH0pKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwiY2xhc3NOYW1lcyIsInVzZVRyYW5zbGF0aW9uIiwiQXBwTGluayIsIkFwcExpbmtUaGVtZSIsIlN0YXJ0Q2FyZCIsInByb3BzIiwiY2xhc3NOYW1lIiwiY29uY2F0IiwiY2hpbGRyZW4iLCJsaW5rVGl0bGUiLCJ0aGVtZSIsIlNFQ09OREFSWSIsInRvIiwiTWFpblBhZ2UiXSwic291cmNlUm9vdCI6IiJ9