"use strict";
(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 3312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ register),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./generated/graphql.tsx
var graphql = __webpack_require__(5051);
// EXTERNAL MODULE: ./components/FormContainer.tsx
var FormContainer = __webpack_require__(606);
// EXTERNAL MODULE: ./components/Form.tsx
var Form = __webpack_require__(7804);
// EXTERNAL MODULE: ./components/Input.tsx
var Input = __webpack_require__(7973);
// EXTERNAL MODULE: ./components/SubmitButton.tsx
var SubmitButton = __webpack_require__(7271);
// EXTERNAL MODULE: ./components/OrSection.tsx
var OrSection = __webpack_require__(2303);
// EXTERNAL MODULE: ./components/RerouteSection.tsx
var RerouteSection = __webpack_require__(4580);
// EXTERNAL MODULE: ./components/FormHeader.tsx
var FormHeader = __webpack_require__(1557);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./containers/RegisterForm.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const RegisterForm = () => {
  const router = (0,router_.useRouter)();
  const [register, {
    data,
    loading,
    error
  }] = (0,graphql/* useRegisterMutation */.l4)();
  const {
    0: errors,
    1: setErrors
  } = (0,external_react_.useState)(null);
  const {
    0: credentials,
    1: setCredentials
  } = (0,external_react_.useState)({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: ""
  });
  const {
    username,
    email,
    password,
    confirmPassword,
    firstName,
    lastName
  } = credentials;

  const handleChange = e => {
    setCredentials(_objectSpread(_objectSpread({}, credentials), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors(null);

    if (confirmPassword.length === 0) {
      setErrors({
        confirmPassword: "Please enter confirm password"
      });
    }

    if (confirmPassword.length === 0 && password.length > 0) {
      setErrors({
        confirmPassword: "Please enter confirm password"
      });
      return;
    }

    if (confirmPassword.length > 0 && password !== confirmPassword) {
      setErrors({
        confirmPassword: "Confirm password does not match password"
      });
      return;
    }

    await register({
      variables: {
        options: {
          username,
          email,
          password,
          firstName,
          lastName
        }
      }
    });
  };

  (0,external_react_.useEffect)(() => {
    if (data) {
      if (data.register.ok) {
        router.push("/");
      } else {
        var _data$register$errors;

        let registerErrors = {};
        (_data$register$errors = data.register.errors) === null || _data$register$errors === void 0 ? void 0 : _data$register$errors.forEach(error => {
          registerErrors[error.field] = error.message;
        });
        setErrors(_objectSpread(_objectSpread({}, errors), registerErrors));
      }
    }
  }, [data]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(FormHeader/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FormContainer/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Form/* default */.Z, {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          isActive: !!email,
          type: "email",
          name: "email",
          value: email,
          onChange: handleChange,
          placeholder: "Email address",
          error: errors && errors.email ? errors.email : undefined
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          isActive: !!username,
          type: "text",
          name: "username",
          value: username,
          onChange: handleChange,
          placeholder: "Username",
          error: errors && errors.username ? errors.username : undefined
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          isActive: !!firstName,
          type: "text",
          name: "firstName",
          value: firstName,
          onChange: handleChange,
          placeholder: "First name",
          error: errors && errors.firstName ? errors.firstName : undefined
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          isActive: !!lastName,
          type: "text",
          name: "lastName",
          value: lastName,
          onChange: handleChange,
          placeholder: "Last name",
          error: errors && errors.lastName ? errors.lastName : undefined
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          isActive: !!password,
          type: "password",
          name: "password",
          value: password,
          onChange: handleChange,
          placeholder: "Password",
          error: errors && errors.password ? errors.password : undefined
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          isActive: !!confirmPassword,
          type: "password",
          name: "confirmPassword",
          value: confirmPassword,
          onChange: handleChange,
          placeholder: "Confirm password",
          error: errors && errors.confirmPassword ? errors.confirmPassword : undefined
        }), /*#__PURE__*/jsx_runtime_.jsx(SubmitButton/* default */.Z, {
          loading: loading,
          children: "Register"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(OrSection/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(RerouteSection/* default */.Z, {
        text: "Have an account? Log in",
        href: "/login"
      })]
    })]
  });
};

/* harmony default export */ const containers_RegisterForm = (RegisterForm);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/RegisterContainer.tsx


const Container = external_styled_components_default().div.withConfig({
  displayName: "RegisterContainer__Container",
  componentId: "sc-tiqjhu-0"
})(["width:100vw;height:100vh;overflow-y:scroll;flex-direction:column;display:flex;align-items:center;background-color:", ";"], ({
  theme
}) => theme.globalTheme.smokeGrey);

const RegisterContainer = ({
  children
}) => /*#__PURE__*/jsx_runtime_.jsx(Container, {
  children: children
});

/* harmony default export */ const components_RegisterContainer = (RegisterContainer);
// EXTERNAL MODULE: ./utils/isUserLoggedIn.ts
var isUserLoggedIn = __webpack_require__(9136);
;// CONCATENATED MODULE: ./pages/register.tsx





const Register = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(components_RegisterContainer, {
    children: /*#__PURE__*/jsx_runtime_.jsx(containers_RegisterForm, {})
  });
};

const getServerSideProps = isUserLoggedIn/* userLoggedIn */.n;
/* harmony default export */ const register = (Register);

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

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1683:
/***/ ((module) => {

module.exports = require("react-loader-spinner");

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
var __webpack_exports__ = __webpack_require__.X(0, [426,664,879,283,232], () => (__webpack_exec__(3312)));
module.exports = __webpack_exports__;

})();