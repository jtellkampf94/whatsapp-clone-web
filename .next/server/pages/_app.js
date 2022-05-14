"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
;// CONCATENATED MODULE: ./themes/homePageTheme.ts

const homePageTheme = {
  largeScreen: args => (0,external_styled_components_.css)(["@media screen and (min-width:1301px){", "}"], (0,external_styled_components_.css)(args)),
  mediumScreen: args => (0,external_styled_components_.css)(["@media screen and (min-width:990px){", "}"], (0,external_styled_components_.css)(args)),
  smallScreen: args => (0,external_styled_components_.css)(["@media screen and (max-width:900px){", ";}"], (0,external_styled_components_.css)(args))
};
;// CONCATENATED MODULE: ./themes/registerPageTheme.ts

const registerPageTheme = {
  smallScreen: args => (0,external_styled_components_.css)(["@media screen and (max-width:600px){", ";}"], (0,external_styled_components_.css)(args))
};
// EXTERNAL MODULE: ./themes/globalTheme.ts
var globalTheme = __webpack_require__(3606);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./themes/index.tsx





const Theme = ({
  children
}) => /*#__PURE__*/jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
  theme: {
    homePageTheme: homePageTheme,
    globalTheme: globalTheme/* globalTheme */._,
    registerPageTheme: registerPageTheme
  },
  children: children
});
// EXTERNAL MODULE: ./utils/createApolloClient.ts
var createApolloClient = __webpack_require__(4574);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(client_.ApolloProvider, {
    client: (0,createApolloClient/* createApolloClient */.n)(),
    children: /*#__PURE__*/jsx_runtime_.jsx(Theme, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 8074:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 3811:
/***/ ((module) => {

module.exports = require("@apollo/client/link/ws");

/***/ }),

/***/ 5049:
/***/ ((module) => {

module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [879], () => (__webpack_exec__(6885)));
module.exports = __webpack_exports__;

})();