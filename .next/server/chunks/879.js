"use strict";
exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 3606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ globalTheme)
/* harmony export */ });
const globalTheme = {
  iconColor: "#51585c",
  primaryGrey: "#EDEDED",
  searchBarColor: "#f6f6f6",
  greyFontColor: "#999999",
  greyLineColor: "#e4e4e4",
  greyMessageColor: "rgba(0,0,0,0.6)",
  selectGrey: "#ebebeb",
  chatScreenBackground: "#e5ddd5",
  chatBoxBackground: "#f0f0f0",
  readBlueCheck: "#4fc3f7",
  greyCheck: "#a4a4a4",
  messageGreen: "#dcf8c6",
  registerBackgroundGrey: "#f8f9fa",
  hoverGrey: "#f7f7f7",
  white: "#fff",
  errorRed: "#c80201",
  darkGreen: "#008069",
  secondaryGreyFont: "#667781",
  buttonGreen: "#00a884",
  smokeGrey: "#f8f8fa"
};

/***/ }),

/***/ 4574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ createApolloClient)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8074);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5049);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3811);
/* harmony import */ var _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_2__);



const createApolloClient = headers => {
  const httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({
    uri: `http://${"localhost:4000"}`,
    credentials: "include",
    headers: headers || {}
  });
  let splitLink = httpLink;

  if (false) {}

  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            getMessages: {
              keyArgs: ["chatId"],

              merge( //@ts-ignore
              existing = {}, incoming, //@ts-ignore
              {
                args: {
                  cursor
                }
              }) {
                if (cursor) return {
                  messages: [...existing.messages, ...incoming.messages],
                  hasMore: incoming.hasMore
                };
                return incoming;
              }

            },
            searchUsers: {
              keyArgs: ["searchTerm"],

              merge( //@ts-ignore
              existing = {}, incoming, //@ts-ignore
              {
                args: {
                  page
                }
              }) {
                if (page > 0) {
                  return {
                    users: [...existing.users, ...incoming.users],
                    hasMore: incoming.hasMore
                  };
                }

                return incoming;
              }

            }
          }
        }
      }
    }),
    link: splitLink
  });
};

/***/ })

};
;