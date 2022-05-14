"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 3391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "react-responsive"
const external_react_responsive_namespaceObject = require("react-responsive");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./generated/graphql.tsx
var graphql = __webpack_require__(5051);
// EXTERNAL MODULE: ./components/Input.tsx
var Input = __webpack_require__(7973);
// EXTERNAL MODULE: ./components/Form.tsx
var Form = __webpack_require__(7804);
// EXTERNAL MODULE: ./components/FormContainer.tsx
var FormContainer = __webpack_require__(606);
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
;// CONCATENATED MODULE: ./containers/LoginForm.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const LoginForm = () => {
  const isSmallScreen = (0,external_react_responsive_namespaceObject.useMediaQuery)({
    query: "(max-width: 880px)"
  });
  const [login, {
    loading,
    data
  }] = (0,graphql/* useLoginMutation */.YA)();
  const {
    0: credentials,
    1: setCredentials
  } = (0,external_react_.useState)({
    emailOrUsername: "",
    password: ""
  });
  const {
    0: errors,
    1: setErrors
  } = (0,external_react_.useState)(null);
  const {
    emailOrUsername,
    password
  } = credentials;
  const router = (0,router_.useRouter)();

  const handleChange = e => {
    setCredentials(_objectSpread(_objectSpread({}, credentials), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors(null);
    await login({
      variables: {
        options: credentials
      }
    });
  };

  (0,external_react_.useEffect)(() => {
    if (data) {
      if (data.login.ok === true) {
        router.push("/");
      } else {
        var _data$login$errors;

        let loginErrors = {};
        (_data$login$errors = data.login.errors) === null || _data$login$errors === void 0 ? void 0 : _data$login$errors.forEach(error => {
          loginErrors[error.field] = error.message;
        });
        setErrors(loginErrors);
      }
    }
  }, [data]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [isSmallScreen && /*#__PURE__*/jsx_runtime_.jsx(FormHeader/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FormContainer/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Form/* default */.Z, {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          isActive: !!emailOrUsername,
          type: "text",
          name: "emailOrUsername",
          value: emailOrUsername,
          onChange: handleChange,
          placeholder: "Email address or username",
          error: errors && errors.emailOrUsername ? errors.emailOrUsername : undefined
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          isActive: !!password,
          type: "password",
          name: "password",
          value: password,
          onChange: handleChange,
          placeholder: "Password",
          error: errors && errors.password ? errors.password : undefined
        }), /*#__PURE__*/jsx_runtime_.jsx(SubmitButton/* default */.Z, {
          loading: loading,
          children: "Log In"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(OrSection/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(RerouteSection/* default */.Z, {
        text: "Don't have an account? Sign up",
        href: "/register"
      })]
    })]
  });
};

/* harmony default export */ const containers_LoginForm = (LoginForm);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/LoginContainer.tsx


const Container = external_styled_components_default().div.withConfig({
  displayName: "LoginContainer__Container",
  componentId: "sc-17l70qk-0"
})(["display:flex;height:100vh;width:100vw;background-color:", ";"], ({
  theme
}) => theme.globalTheme.white);

const LoginContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: children
  });
};

/* harmony default export */ const components_LoginContainer = (LoginContainer);
// EXTERNAL MODULE: ./assets/images/whats-app-logo.svg
var whats_app_logo = __webpack_require__(1628);
;// CONCATENATED MODULE: ./components/DownloadOnTheAppStoreLogo.tsx



const DownloadOnTheAppStoreLogo = ({
  width,
  height
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    width: width,
    height: height,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      transform: "scale(1 1)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#FFF",
        d: "M134.032 35.268a3.83 3.83 0 0 1-3.834 3.83H4.729a3.835 3.835 0 0 1-3.839-3.83V4.725A3.84 3.84 0 0 1 4.729.89h125.468a3.834 3.834 0 0 1 3.834 3.835l.001 30.543z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#A6A6A6",
        d: "M130.198 39.989H4.729A4.73 4.73 0 0 1 0 35.268V4.726A4.733 4.733 0 0 1 4.729 0h125.468a4.735 4.735 0 0 1 4.729 4.726v30.542c.002 2.604-2.123 4.721-4.728 4.721z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M134.032 35.268a3.83 3.83 0 0 1-3.834 3.83H4.729a3.835 3.835 0 0 1-3.839-3.83V4.725A3.84 3.84 0 0 1 4.729.89h125.468a3.834 3.834 0 0 1 3.834 3.835l.001 30.543z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#FFF",
        d: "M30.128 19.784c-.029-3.223 2.639-4.791 2.761-4.864-1.511-2.203-3.853-2.504-4.676-2.528-1.967-.207-3.875 1.177-4.877 1.177-1.022 0-2.565-1.157-4.228-1.123-2.14.033-4.142 1.272-5.24 3.196-2.266 3.923-.576 9.688 1.595 12.859 1.086 1.554 2.355 3.287 4.016 3.226 1.625-.066 2.232-1.035 4.193-1.035 1.943 0 2.513 1.035 4.207.996 1.744-.027 2.842-1.56 3.89-3.127 1.255-1.779 1.759-3.533 1.779-3.623-.04-.014-3.386-1.292-3.42-5.154zM26.928 10.306c.874-1.093 1.472-2.58 1.306-4.089-1.265.056-2.847.875-3.758 1.944-.806.942-1.526 2.486-1.34 3.938 1.421.106 2.88-.717 3.792-1.793z"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "a",
        gradientUnits: "userSpaceOnUse",
        x1: "-23.235",
        y1: "97.431",
        x2: "-23.235",
        y2: "61.386",
        gradientTransform: "matrix(4.0022 0 0 4.0011 191.95 -349.736)",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "0",
          stopColor: "#1a1a1a",
          stopOpacity: ".1"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".123",
          stopColor: "#212121",
          stopOpacity: ".151"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".308",
          stopColor: "#353535",
          stopOpacity: ".227"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".532",
          stopColor: "#575757",
          stopOpacity: ".318"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".783",
          stopColor: "#858585",
          stopOpacity: ".421"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#b3b3b3",
          stopOpacity: ".51"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "url(#a)",
        d: "M130.198 0H62.993l26.323 39.989h40.882a4.733 4.733 0 0 0 4.729-4.724V4.726A4.734 4.734 0 0 0 130.198 0z"
      }), /*#__PURE__*/jsx_runtime_.jsx("g", {
        fill: "#FFF",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M53.665 31.504h-2.271l-1.244-3.909h-4.324l-1.185 3.909H42.43l4.285-13.308h2.646l4.304 13.308zm-3.89-5.549L48.65 22.48c-.119-.355-.343-1.191-.671-2.507h-.04c-.132.566-.343 1.402-.632 2.507l-1.106 3.475h3.574zM64.663 26.588c0 1.632-.443 2.922-1.33 3.869-.794.843-1.781 1.264-2.958 1.264-1.271 0-2.185-.453-2.74-1.361v5.035h-2.132V25.062c0-1.025-.027-2.076-.079-3.154h1.875l.119 1.521h.04c.711-1.146 1.79-1.719 3.238-1.719 1.132 0 2.077.447 2.833 1.342.755.897 1.134 2.075 1.134 3.536zm-2.172.078c0-.934-.21-1.704-.632-2.311-.461-.631-1.08-.947-1.856-.947-.526 0-1.004.176-1.431.523-.428.35-.708.807-.839 1.373a2.784 2.784 0 0 0-.099.649v1.601c0 .697.214 1.286.642 1.768.428.48.984.721 1.668.721.803 0 1.428-.311 1.875-.928.448-.619.672-1.435.672-2.449zM75.7 26.588c0 1.632-.443 2.922-1.33 3.869-.795.843-1.781 1.264-2.959 1.264-1.271 0-2.185-.453-2.74-1.361v5.035h-2.132V25.062c0-1.025-.027-2.076-.079-3.154h1.875l.119 1.521h.04c.71-1.146 1.789-1.719 3.238-1.719 1.131 0 2.076.447 2.834 1.342.754.897 1.134 2.075 1.134 3.536zm-2.173.078c0-.934-.211-1.704-.633-2.311-.461-.631-1.078-.947-1.854-.947-.526 0-1.004.176-1.433.523-.428.35-.707.807-.838 1.373-.065.264-.1.479-.1.649v1.601c0 .697.215 1.286.641 1.768.428.479.984.721 1.67.721.804 0 1.429-.311 1.875-.928.448-.619.672-1.435.672-2.449zM88.04 27.771c0 1.133-.396 2.054-1.183 2.765-.866.776-2.075 1.165-3.625 1.165-1.432 0-2.58-.276-3.446-.829l.493-1.777c.935.554 1.962.83 3.08.83.804 0 1.429-.182 1.875-.543.447-.362.673-.846.673-1.45 0-.541-.187-.994-.554-1.363-.369-.368-.979-.711-1.836-1.026-2.33-.869-3.496-2.14-3.496-3.812 0-1.092.412-1.986 1.234-2.685.822-.698 1.912-1.047 3.268-1.047 1.211 0 2.22.211 3.021.632l-.535 1.738c-.754-.408-1.605-.612-2.557-.612-.752 0-1.342.185-1.764.553-.355.329-.535.73-.535 1.206 0 .525.205.961.613 1.303.354.315 1 .658 1.934 1.026 1.146.462 1.988 1 2.527 1.618.543.618.813 1.389.813 2.308zM95.107 23.508h-2.35v4.659c0 1.185.414 1.776 1.244 1.776.381 0 .697-.032.947-.099l.059 1.619c-.42.157-.973.236-1.658.236-.842 0-1.5-.257-1.975-.771-.473-.514-.711-1.375-.711-2.587v-4.837h-1.4v-1.6h1.4v-1.757l2.094-.632v2.389h2.35v1.604zM105.689 26.627c0 1.475-.422 2.686-1.264 3.633-.881.975-2.053 1.461-3.514 1.461-1.41 0-2.531-.467-3.367-1.4-.836-.935-1.254-2.113-1.254-3.534 0-1.487.432-2.705 1.293-3.652.863-.948 2.025-1.422 3.486-1.422 1.408 0 2.539.468 3.395 1.402.818.906 1.225 2.076 1.225 3.512zm-2.21.049c0-.879-.19-1.633-.571-2.264-.447-.762-1.087-1.143-1.916-1.143-.854 0-1.509.381-1.955 1.143-.382.631-.572 1.398-.572 2.304 0 .88.19 1.636.572 2.265.461.762 1.104 1.143 1.937 1.143.815 0 1.454-.389 1.916-1.162.392-.646.589-1.405.589-2.286zM112.622 23.783a3.71 3.71 0 0 0-.672-.059c-.75 0-1.33.282-1.738.85-.354.5-.532 1.132-.532 1.895v5.035h-2.132V24.93a67.43 67.43 0 0 0-.062-3.021h1.857l.078 1.836h.059c.226-.631.58-1.14 1.066-1.521a2.578 2.578 0 0 1 1.541-.514c.197 0 .375.014.533.039l.002 2.034zM122.157 26.252a5 5 0 0 1-.078.967h-6.396c.024.948.334 1.674.928 2.174.539.446 1.236.67 2.092.67.947 0 1.811-.15 2.588-.453l.334 1.479c-.908.396-1.98.593-3.217.593-1.488 0-2.656-.438-3.506-1.312-.848-.875-1.273-2.051-1.273-3.524 0-1.446.395-2.651 1.186-3.612.828-1.026 1.947-1.539 3.355-1.539 1.383 0 2.43.513 3.141 1.539.563.813.846 1.821.846 3.018zm-2.033-.553c.015-.633-.125-1.178-.414-1.639-.369-.594-.937-.89-1.698-.89-.697 0-1.265.289-1.697.869-.355.461-.566 1.015-.631 1.658l4.44.002z"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("g", {
        fill: "#FFF",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M45.211 13.491c-.593 0-1.106-.029-1.533-.078V6.979a11.606 11.606 0 0 1 1.805-.136c2.445 0 3.571 1.203 3.571 3.164 0 2.262-1.33 3.484-3.843 3.484zm.358-5.823c-.33 0-.611.02-.844.068v4.891c.126.02.368.029.708.029 1.602 0 2.514-.912 2.514-2.62 0-1.523-.825-2.368-2.378-2.368zM52.563 13.54c-1.378 0-2.271-1.029-2.271-2.426 0-1.456.912-2.494 2.349-2.494 1.358 0 2.271.98 2.271 2.417 0 1.474-.941 2.503-2.349 2.503zm.04-4.154c-.757 0-1.242.708-1.242 1.698 0 .971.495 1.679 1.232 1.679s1.232-.757 1.232-1.699c0-.96-.485-1.678-1.222-1.678zM62.77 8.717l-1.475 4.716h-.961l-.611-2.048a15.53 15.53 0 0 1-.379-1.523h-.02c-.077.514-.223 1.029-.378 1.523l-.65 2.048h-.971l-1.388-4.716h1.077l.534 2.242c.126.534.232 1.038.32 1.514h.02c.077-.397.203-.893.388-1.504l.67-2.251h.854l.641 2.203c.155.534.281 1.058.379 1.553h.028c.068-.485.175-1 .32-1.553l.573-2.203 1.029-.001zM68.2 13.433h-1.048v-2.708c0-.834-.32-1.252-.951-1.252-.621 0-1.048.534-1.048 1.155v2.805h-1.048v-3.368c0-.417-.01-.864-.039-1.349h.922l.049.728h.029c.282-.504.854-.824 1.495-.824.99 0 1.64.757 1.64 1.989l-.001 2.824zM71.09 13.433h-1.049v-6.88h1.049v6.88zM74.911 13.54c-1.377 0-2.271-1.029-2.271-2.426 0-1.456.912-2.494 2.348-2.494 1.359 0 2.271.98 2.271 2.417.001 1.474-.941 2.503-2.348 2.503zm.039-4.154c-.757 0-1.242.708-1.242 1.698 0 .971.496 1.679 1.231 1.679.738 0 1.232-.757 1.232-1.699.001-.96-.483-1.678-1.221-1.678zM81.391 13.433l-.076-.543h-.028c-.32.437-.787.65-1.379.65-.845 0-1.445-.592-1.445-1.388 0-1.164 1.009-1.766 2.756-1.766v-.087c0-.621-.329-.932-.979-.932-.465 0-.873.117-1.232.35l-.213-.689c.436-.272.98-.408 1.619-.408 1.232 0 1.854.65 1.854 1.951v1.737c0 .476.021.845.068 1.126l-.945-.001zm-.144-2.349c-1.164 0-1.748.282-1.748.951 0 .495.301.737.719.737.533 0 1.029-.407 1.029-.96v-.728zM87.357 13.433l-.049-.757h-.029c-.301.572-.807.864-1.514.864-1.137 0-1.979-1-1.979-2.407 0-1.475.873-2.514 2.065-2.514.631 0 1.078.213 1.33.641h.021V6.553h1.049v5.609c0 .456.011.883.039 1.271h-.933zm-.155-2.775c0-.66-.437-1.223-1.104-1.223-.777 0-1.252.689-1.252 1.659 0 .951.493 1.602 1.231 1.602.659 0 1.125-.573 1.125-1.252v-.786zM94.902 13.54c-1.377 0-2.27-1.029-2.27-2.426 0-1.456.912-2.494 2.348-2.494 1.359 0 2.271.98 2.271 2.417.001 1.474-.94 2.503-2.349 2.503zm.039-4.154c-.756 0-1.241.708-1.241 1.698 0 .971.495 1.679 1.231 1.679.738 0 1.232-.757 1.232-1.699.002-.96-.483-1.678-1.222-1.678zM102.887 13.433h-1.049v-2.708c0-.834-.32-1.252-.951-1.252-.621 0-1.047.534-1.047 1.155v2.805h-1.049v-3.368c0-.417-.01-.864-.039-1.349h.922l.049.728h.029c.281-.504.854-.825 1.494-.825.99 0 1.641.757 1.641 1.989v2.825zM109.938 9.503h-1.153v2.29c0 .583.202.874.61.874.185 0 .34-.02.465-.049l.029.796c-.203.078-.475.117-.813.117-.826 0-1.32-.456-1.32-1.65V9.503h-.688v-.786h.688v-.864l1.029-.311v1.174h1.153v.787zM115.486 13.433h-1.047v-2.688c0-.844-.319-1.271-.951-1.271-.543 0-1.049.369-1.049 1.116v2.843h-1.047v-6.88h1.047v2.833h.021c.33-.514.808-.767 1.418-.767.998 0 1.608.776 1.608 2.009v2.805zM121.17 11.327h-3.145c.02.893.611 1.397 1.486 1.397.465 0 .893-.078 1.271-.223l.163.728c-.446.194-.971.291-1.582.291-1.475 0-2.348-.932-2.348-2.377 0-1.446.894-2.533 2.23-2.533 1.205 0 1.961.893 1.961 2.242a2.02 2.02 0 0 1-.036.475zm-.961-.747c0-.728-.367-1.242-1.037-1.242-.602 0-1.078.524-1.146 1.242h2.183z"
        })
      })]
    })
  });
};

/* harmony default export */ const components_DownloadOnTheAppStoreLogo = (DownloadOnTheAppStoreLogo);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./assets/images/gpi.png
/* harmony default export */ const gpi = ({"src":"/_next/static/image/assets/images/gpi.5976dd80989b6f5f38ac138a61704e15.png","height":1500,"width":1500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAArElEQVR42mMIDglh9PTyYvT392cMCwtjDAwMZPTy8gRiL8ag4CBGBoIgk4GBH0jJMvD7SjvZ6MuYmprJAPnSILGEhHh+BvPsunnxTdX/s+L9vhWVlP9MT0/7GRIa+s3b2/u/kZHRPAaX1Np55cWV/9Njvb/V1jf+7O3t/VlXV/etsbHxv39AwDyGbIgVQGNNQcYiY5mYmBh+BqIA0D6Qt8A4NDQUTPv6+oK9CAA+1jS6q1ACVQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/GooglePlayDownloadLogo.tsx




const GooglePlayDownloadLogo = ({
  width,
  height
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    src: gpi,
    alt: "google_play_download_logo",
    width: width,
    height: height,
    objectFit: "cover"
  });
};

/* harmony default export */ const components_GooglePlayDownloadLogo = (GooglePlayDownloadLogo);
;// CONCATENATED MODULE: ./components/LoginHeaderSection.tsx






const LoginHeaderSection_Container = external_styled_components_default().div.withConfig({
  displayName: "LoginHeaderSection__Container",
  componentId: "sc-1t7w5hf-0"
})(["width:55%;display:flex;flex-direction:column;justify-content:center;color:", ";padding:100px;background-color:", ";"], ({
  theme
}) => theme.globalTheme.white, ({
  theme
}) => theme.globalTheme.darkGreen);
const Heading = external_styled_components_default().h1.withConfig({
  displayName: "LoginHeaderSection__Heading",
  componentId: "sc-1t7w5hf-1"
})(["font-size:32px;font-weight:600;margin-top:40px;"]);
const Subheading = external_styled_components_default().h4.withConfig({
  displayName: "LoginHeaderSection__Subheading",
  componentId: "sc-1t7w5hf-2"
})(["font-size:18px;font-weight:300;margin-top:10px;"]);
const HeaderSectionFooter = external_styled_components_default().div.withConfig({
  displayName: "LoginHeaderSection__HeaderSectionFooter",
  componentId: "sc-1t7w5hf-3"
})(["margin-top:40px;"]);
const FooterText = external_styled_components_default().p.withConfig({
  displayName: "LoginHeaderSection__FooterText",
  componentId: "sc-1t7w5hf-4"
})(["font-size:18px;font-weight:300;margin-bottom:20px;"]);
const IconsContainer = external_styled_components_default().div.withConfig({
  displayName: "LoginHeaderSection__IconsContainer",
  componentId: "sc-1t7w5hf-5"
})(["height:50px;display:flex;align-items:center;"]);

const LoginHeaderSection = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(LoginHeaderSection_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(whats_app_logo/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Heading, {
      children: ["Simple. Secure. ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Reliable Messaging."]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Subheading, {
      children: ["With WhatsApp web, you", /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "'"
      }), "ll get fast, simple and secure messaging on your laptop or desktop."]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderSectionFooter, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(FooterText, {
        children: "Get the app."
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconsContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_DownloadOnTheAppStoreLogo, {
          width: "136px",
          height: "40px"
        }), /*#__PURE__*/jsx_runtime_.jsx(components_GooglePlayDownloadLogo, {
          width: 150,
          height: 44
        })]
      })]
    })]
  });
};

/* harmony default export */ const components_LoginHeaderSection = (LoginHeaderSection);
;// CONCATENATED MODULE: ./components/LoginFormContainer.tsx


const LoginFormContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "LoginFormContainer__Container",
  componentId: "sc-1b54s0x-0"
})(["width:45%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;@media screen and (max-width:880px){width:100%;background-color:", ";}"], ({
  theme
}) => theme.globalTheme.smokeGrey);

const LoginFormContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(LoginFormContainer_Container, {
    children: children
  });
};

/* harmony default export */ const components_LoginFormContainer = (LoginFormContainer);
// EXTERNAL MODULE: ./utils/isUserLoggedIn.ts
var isUserLoggedIn = __webpack_require__(9136);
;// CONCATENATED MODULE: ./pages/login.tsx










const Login = () => {
  const isSmallScreen = (0,external_react_responsive_namespaceObject.useMediaQuery)({
    query: "(max-width: 880px)"
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_LoginContainer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Login"
      })
    }), !isSmallScreen && /*#__PURE__*/jsx_runtime_.jsx(components_LoginHeaderSection, {}), /*#__PURE__*/jsx_runtime_.jsx(components_LoginFormContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(containers_LoginForm, {})
    })]
  });
};

const getServerSideProps = isUserLoggedIn/* userLoggedIn */.n;
/* harmony default export */ const login = (Login);

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

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

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

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [426,664,675,879,283,232], () => (__webpack_exec__(3391)));
module.exports = __webpack_exports__;

})();