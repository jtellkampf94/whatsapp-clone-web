"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: ./generated/graphql.tsx
var graphql = __webpack_require__(5051);
// EXTERNAL MODULE: ./utils/isUserLoggedIn.ts
var isUserLoggedIn = __webpack_require__(9136);
;// CONCATENATED MODULE: external "react-waypoint"
const external_react_waypoint_namespaceObject = require("react-waypoint");
;// CONCATENATED MODULE: ./utils/capitalizeFirstLetter.ts
const capitalizeFirstLetter = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
;// CONCATENATED MODULE: ./utils/getUsersFullname.ts

const getUsersFullname = (users, userId) => {
  const user = users.filter(user => Number(user.id) !== userId)[0];
  return `${capitalizeFirstLetter(user.firstName)} ${capitalizeFirstLetter(user.lastName)}`;
};
;// CONCATENATED MODULE: external "react-moment"
const external_react_moment_namespaceObject = require("react-moment");
var external_react_moment_default = /*#__PURE__*/__webpack_require__.n(external_react_moment_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./utils/dateFunctions.tsx


const getDifferenceInDays = (date1, date2) => {
  const diffInMs = Math.abs(date2.getTime() - date1.getTime());
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return diffInDays;
};
const isSameDay = (date1, date2) => {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};
const formatDate = timeOfLatestMessage => {
  if (timeOfLatestMessage === undefined) {
    return undefined;
  }

  const latestMessageDate = new Date(timeOfLatestMessage);
  const nowDate = new Date();
  let dateFormat;

  if (isSameDay(nowDate, latestMessageDate)) {
    dateFormat = /*#__PURE__*/jsx_runtime_.jsx((external_react_moment_default()), {
      format: "HH:mm",
      children: timeOfLatestMessage
    });
  } else if (getDifferenceInDays(nowDate, latestMessageDate) < 1 && nowDate.getDay() !== latestMessageDate.getDay()) {
    dateFormat = "Yesterday";
  } else {
    dateFormat = /*#__PURE__*/jsx_runtime_.jsx((external_react_moment_default()), {
      format: "DD-MM-YYYY",
      children: timeOfLatestMessage
    });
  }

  return dateFormat;
};
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "@material-ui/core"
const core_namespaceObject = require("@material-ui/core");
;// CONCATENATED MODULE: external "@material-ui/icons/Group"
const Group_namespaceObject = require("@material-ui/icons/Group");
var Group_default = /*#__PURE__*/__webpack_require__.n(Group_namespaceObject);
;// CONCATENATED MODULE: ./assets/images/chat-section-background.png
/* harmony default export */ const chat_section_background = ({"src":"/_next/static/image/assets/images/chat-section-background.39f53e74f66d348d9f7c26384eea0f98.png","height":981,"width":540,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAQAAAB0OpaOAAAANElEQVR42h3GwQkAIBTD0I4iWr+K+68XLJJDnjCbwmL9jpgfDlKxRWcEU5lZdFHpUqJhjB8u+SRtObwvQQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/ChatScreen.tsx






const Container = external_styled_components_default().div.withConfig({
  displayName: "ChatScreen__Container",
  componentId: "sc-nhvs0h-0"
})(["width:100%;height:calc(100vh - 77px);"]);
const Header = external_styled_components_default().div.withConfig({
  displayName: "ChatScreen__Header",
  componentId: "sc-nhvs0h-1"
})(["padding:10px 17px;display:flex;align-items:center;justify-content:space-between;height:67px;background-color:", ";border-bottom:1px solid ", ";"], ({
  theme
}) => theme.globalTheme.primaryGrey, ({
  theme
}) => theme.globalTheme.greyLineColor);
const IconsContainer = external_styled_components_default().div.withConfig({
  displayName: "ChatScreen__IconsContainer",
  componentId: "sc-nhvs0h-2"
})(["display:flex;align-items:center;"]);
const UserAvatar = external_styled_components_default()(core_namespaceObject.Avatar).withConfig({
  displayName: "ChatScreen__UserAvatar",
  componentId: "sc-nhvs0h-3"
})(["cursor:pointer;&:hover{opacity:0.8;}"]);
const Name = external_styled_components_default().p.withConfig({
  displayName: "ChatScreen__Name",
  componentId: "sc-nhvs0h-4"
})(["font-size:19px;font-weight:400;margin-left:17px;"]);
const EndOfMessage = external_styled_components_default().div.withConfig({
  displayName: "ChatScreen__EndOfMessage",
  componentId: "sc-nhvs0h-5"
})([""]);
const MessagesContainer = external_styled_components_default().div.withConfig({
  displayName: "ChatScreen__MessagesContainer",
  componentId: "sc-nhvs0h-6"
})(["background-image:url(", ");background-color:", ";height:calc(100vh - 144px);overflow-y:scroll;display:flex;flex-direction:column-reverse;padding:0 9%;scrollbar-width:thin;&::-webkit-scrollbar{width:6px !important;height:6px !important;}&::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.2);}&::-webkit-scrollbar-track{background:hsla(0,0%,100%,0.1);}"], chat_section_background.src, ({
  theme
}) => theme.globalTheme.chatScreenBackground);

const ChatScreen = ({
  name,
  isGroupChat,
  endOfMessageRef,
  groupAvatarUrl,
  profilePictureUrl,
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconsContainer, {
        children: [!isGroupChat ? /*#__PURE__*/jsx_runtime_.jsx(UserAvatar, {
          style: {
            width: "44px",
            height: "44px"
          },
          src: profilePictureUrl
        }) : /*#__PURE__*/jsx_runtime_.jsx(UserAvatar, {
          style: {
            width: "44px",
            height: "44px"
          },
          src: groupAvatarUrl,
          children: /*#__PURE__*/jsx_runtime_.jsx((Group_default()), {
            style: {
              width: "34px",
              height: "34px"
            }
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Name, {
          children: name
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MessagesContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(EndOfMessage, {
        ref: endOfMessageRef
      }), children]
    })]
  });
};

/* harmony default export */ const components_ChatScreen = (ChatScreen);
;// CONCATENATED MODULE: ./components/Message.tsx



const Message_Container = external_styled_components_default()("div").withConfig({
  displayName: "Message__Container",
  componentId: "sc-1tqv8mv-0"
})(["background-color:", ";display:flex;flex-direction:column;border-radius:7.5px;padding:8px 9px;width:fit-content;max-width:290px;margin:10px 0;align-self:", ";& p,div{text-align:", ";justify-content:", ";}"], props => props.isUser ? props.theme.globalTheme.messageGreen : props.theme.globalTheme.hoverGrey, props => props.isUser ? "flex-end" : "flex-start", props => props.isUser ? "right" : "left", props => props.isUser ? "flex-end" : "flex-start");
const Message_Header = external_styled_components_default()("p").withConfig({
  displayName: "Message__Header",
  componentId: "sc-1tqv8mv-1"
})(["&::first-letter{text-transform:uppercase;}font-weight:700;font-size:14px;color:", ";"], props => props.color ? props.color : "black");
const Text = external_styled_components_default().p.withConfig({
  displayName: "Message__Text",
  componentId: "sc-1tqv8mv-2"
})([""]);
const MessageFooter = external_styled_components_default().div.withConfig({
  displayName: "Message__MessageFooter",
  componentId: "sc-1tqv8mv-3"
})(["width:100%;display:flex;"]);
const DateSent = external_styled_components_default().p.withConfig({
  displayName: "Message__DateSent",
  componentId: "sc-1tqv8mv-4"
})(["font-size:11px;margin-right:5px;color:", ";"], ({
  theme
}) => theme.globalTheme.greyMessageColor);
const Img = external_styled_components_default().img.withConfig({
  displayName: "Message__Img",
  componentId: "sc-1tqv8mv-5"
})(["object-fit:cover;max-width:280px;max-height:230px;border-radius:5px;"]);

const Message = ({
  isUser,
  text,
  sender,
  color,
  dateSent,
  imageUrl
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Message_Container, {
    isUser: isUser,
    children: [sender && /*#__PURE__*/jsx_runtime_.jsx(Message_Header, {
      color: color,
      children: sender
    }), imageUrl && /*#__PURE__*/jsx_runtime_.jsx(Img, {
      src: imageUrl
    }), /*#__PURE__*/jsx_runtime_.jsx(Text, {
      children: text
    }), /*#__PURE__*/jsx_runtime_.jsx(MessageFooter, {
      children: /*#__PURE__*/jsx_runtime_.jsx(DateSent, {
        children: dateSent
      })
    })]
  });
};

/* harmony default export */ const components_Message = (Message);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js + 39 modules
var IconButton = __webpack_require__(9690);
;// CONCATENATED MODULE: external "@material-ui/icons/AddAPhotoOutlined"
const AddAPhotoOutlined_namespaceObject = require("@material-ui/icons/AddAPhotoOutlined");
var AddAPhotoOutlined_default = /*#__PURE__*/__webpack_require__.n(AddAPhotoOutlined_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Send"
const Send_namespaceObject = require("@material-ui/icons/Send");
var Send_default = /*#__PURE__*/__webpack_require__.n(Send_namespaceObject);
// EXTERNAL MODULE: ./themes/globalTheme.ts
var globalTheme = __webpack_require__(3606);
;// CONCATENATED MODULE: ./components/ChatFormContainer.tsx


const ChatFormContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "ChatFormContainer__Container",
  componentId: "sc-dvlwu5-0"
})(["background-color:", ";display:flex;align-items:center;justify-content:center;border-top:1px solid ", ";border-bottom:1px solid ", ";"], ({
  theme
}) => theme.globalTheme.chatBoxBackground, ({
  theme
}) => theme.globalTheme.greyLineColor, ({
  theme
}) => theme.globalTheme.greyLineColor);

const ChatFormContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ChatFormContainer_Container, {
    children: children
  });
};

/* harmony default export */ const components_ChatFormContainer = (ChatFormContainer);
;// CONCATENATED MODULE: ./components/ChatFormForm.tsx


const Form = external_styled_components_default().form.withConfig({
  displayName: "ChatFormForm__Form",
  componentId: "sc-8qf4i2-0"
})(["padding:10px 17px;display:flex;align-items:center;width:100%;"]);

const ChatFormForm = ({
  children,
  onSubmit
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Form, {
    onSubmit: onSubmit,
    children: children
  });
};

/* harmony default export */ const components_ChatFormForm = (ChatFormForm);
;// CONCATENATED MODULE: ./components/ChatFormInput.tsx


const Input = external_styled_components_default().input.withConfig({
  displayName: "ChatFormInput__Input",
  componentId: "sc-1jvl6m2-0"
})(["outline-width:0;padding-left:17px;border:none;width:100%;margin:0 17px;font-size:16px;height:36px;border-radius:18px;&::placeholder{color:", ";}"], ({
  theme
}) => theme.globalTheme.greyFontColor);

const ChatFormInput = ({
  onChange,
  value
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Input, {
    onChange: onChange,
    value: value,
    placeholder: "Type a message"
  });
};

/* harmony default export */ const components_ChatFormInput = (ChatFormInput);
;// CONCATENATED MODULE: ./containers/ChatForm.tsx












const ChatForm = ({
  chatId,
  setMessageText,
  setPreview,
  messageText,
  scrollToBottom
}) => {
  const {
    0: file,
    1: setFile
  } = (0,external_react_.useState)(null);
  const fileInputRef = (0,external_react_.useRef)(null);
  const [sendMessage] = (0,graphql/* useSendMessageMutation */.at)();
  (0,external_react_.useEffect)(() => {
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);

  const handleClick = () => {
    var _fileInputRef$current;

    fileInputRef === null || fileInputRef === void 0 ? void 0 : (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
  };

  const handleFileChange = e => {
    setFile(e.target.files ? e.target.files[0] : null);
  };

  const handleMessageChange = e => {
    setMessageText(e.target.value);
  };

  const handleFileClick = e => {
    //@ts-ignore
    e.target.value = "";
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!messageText) return;
    await sendMessage({
      variables: {
        chatId,
        text: messageText
      }
    });
    setMessageText("");
    scrollToBottom();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(components_ChatFormContainer, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_ChatFormForm, {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(IconButton/* default */.Z, {
        onClick: handleClick,
        type: "button",
        children: [/*#__PURE__*/jsx_runtime_.jsx((AddAPhotoOutlined_default()), {
          style: {
            fill: globalTheme/* globalTheme.iconColor */._.iconColor,
            width: "30px",
            height: "30px"
          }
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "file",
          accept: "image/*",
          style: {
            display: "none"
          },
          onChange: handleFileChange,
          onClick: handleFileClick,
          ref: fileInputRef
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(components_ChatFormInput, {
        onChange: handleMessageChange,
        value: messageText
      }), /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
        type: "submit",
        children: /*#__PURE__*/jsx_runtime_.jsx((Send_default()), {
          style: {
            fill: globalTheme/* globalTheme.iconColor */._.iconColor,
            width: "30px",
            height: "30px"
          }
        })
      })]
    })
  });
};

/* harmony default export */ const containers_ChatForm = (ChatForm);
// EXTERNAL MODULE: external "react-loader-spinner"
var external_react_loader_spinner_ = __webpack_require__(1683);
;// CONCATENATED MODULE: ./components/Spinner.tsx




const Spinner_Container = external_styled_components_default()("div").withConfig({
  displayName: "Spinner__Container",
  componentId: "sc-7syvoa-0"
})(["width:100%;height:", ";display:flex;align-items:center;justify-content:center;"], props => props.small ? "50px" : "100%");

const Spinner = ({
  small
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Spinner_Container, {
    small: small ? small : false,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_loader_spinner_.Oval, {
      color: globalTheme/* globalTheme.darkGreen */._.darkGreen,
      width: 40,
      height: 40
    })
  });
};

/* harmony default export */ const components_Spinner = (Spinner);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "react-easy-crop"
const external_react_easy_crop_namespaceObject = require("react-easy-crop");
var external_react_easy_crop_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_crop_namespaceObject);
;// CONCATENATED MODULE: ./hooks/useImageEditor.ts

const useImageEditor = () => {
  const {
    0: crop,
    1: setCrop
  } = (0,external_react_.useState)({
    x: 0,
    y: 0
  });
  const {
    0: zoom,
    1: setZoom
  } = (0,external_react_.useState)(1);
  const {
    0: rotation,
    1: setRotation
  } = (0,external_react_.useState)(0);
  const {
    0: croppedAreaPixels,
    1: setCroppedAreaPixels
  } = (0,external_react_.useState)(null);
  const onCropComplete = (0,external_react_.useCallback)((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const zoomIn = () => {
    setZoom(z => z + 0.1);
  };

  const zoomOut = () => {
    setZoom(z => z - 0.1);
  };

  const rotateClockwise = () => {
    setRotation(z => z + 10);
  };

  const rotateAntiClockwise = () => {
    setRotation(z => z - 10);
  };

  return {
    crop,
    setCrop,
    zoom,
    setZoom,
    zoomIn,
    zoomOut,
    onCropComplete,
    croppedAreaPixels,
    rotation,
    setRotation,
    rotateClockwise,
    rotateAntiClockwise
  };
};
;// CONCATENATED MODULE: ./utils/cropImage.ts
const createImage = url => new Promise((resolve, reject) => {
  const image = new Image();
  image.addEventListener("load", () => resolve(image));
  image.addEventListener("error", error => reject(error));
  image.setAttribute("crossOrigin", "anonymous");
  image.src = url;
});
function getRadianAngle(degreeValue) {
  return degreeValue * Math.PI / 180;
}
/**
 * Returns the new bounding area of a rotated rectangle.
 */

function rotateSize(width, height, rotation) {
  const rotRad = getRadianAngle(rotation);
  return {
    width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height)
  };
}
/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */

async function getCroppedImg(imageSrc, pixelCrop, rotation = 0, flip = {
  horizontal: false,
  vertical: false
}) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return null;
  }

  const rotRad = getRadianAngle(rotation); // calculate bounding box of the rotated image

  const {
    width: bBoxWidth,
    height: bBoxHeight
  } = rotateSize(image.width, image.height, rotation); // set canvas size to match the bounding box

  canvas.width = bBoxWidth;
  canvas.height = bBoxHeight; // translate canvas context to a central location to allow rotating and flipping around the center

  ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
  ctx.rotate(rotRad);
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  ctx.translate(-image.width / 2, -image.height / 2); // draw rotated image

  ctx.drawImage(image, 0, 0); // croppedAreaPixels values are bounding box relative
  // extract the cropped image using these values

  const data = ctx.getImageData(pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height); // set canvas width to final desired crop size - this will clear existing context

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height; // paste generated rotate image at the top left corner

  ctx.putImageData(data, 0, 0); // As Base64 string
  // return canvas.toDataURL('image/jpeg');
  // As a blob

  return new Promise((resolve, reject) => {
    canvas.toBlob(file => {
      resolve(file);
    }, "image/jpeg");
  });
}
;// CONCATENATED MODULE: ./components/MessageWithImageFormContainer.tsx


const MessageWithImageFormContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "MessageWithImageFormContainer__Container",
  componentId: "sc-ty3mgv-0"
})(["position:absolute;bottom:0;left:0;right:0;top:67px;width:100%;height:calc(100vh - 67px);background-color:#e9edef;"]);

const MessageWithImageFormContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(MessageWithImageFormContainer_Container, {
    children: children
  });
};

/* harmony default export */ const components_MessageWithImageFormContainer = (MessageWithImageFormContainer);
;// CONCATENATED MODULE: ./components/ImageForm.tsx


const ImageForm_Form = external_styled_components_default().form.withConfig({
  displayName: "ImageForm__Form",
  componentId: "sc-1ok157f-0"
})(["width:100%;height:100%;display:flex;flex-direction:column;position:relative;"]);

const ImageForm = ({
  children,
  onSubmit
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ImageForm_Form, {
    onSubmit: onSubmit,
    children: children
  });
};

/* harmony default export */ const components_ImageForm = (ImageForm);
;// CONCATENATED MODULE: external "@material-ui/icons/Add"
const Add_namespaceObject = require("@material-ui/icons/Add");
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Remove"
const Remove_namespaceObject = require("@material-ui/icons/Remove");
var Remove_default = /*#__PURE__*/__webpack_require__.n(Remove_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/RotateRight"
const RotateRight_namespaceObject = require("@material-ui/icons/RotateRight");
var RotateRight_default = /*#__PURE__*/__webpack_require__.n(RotateRight_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/RotateLeft"
const RotateLeft_namespaceObject = require("@material-ui/icons/RotateLeft");
var RotateLeft_default = /*#__PURE__*/__webpack_require__.n(RotateLeft_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Close"
const Close_namespaceObject = require("@material-ui/icons/Close");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_namespaceObject);
;// CONCATENATED MODULE: ./components/ImageFormButtons.tsx








const ImageFormButtons_Container = external_styled_components_default().div.withConfig({
  displayName: "ImageFormButtons__Container",
  componentId: "sc-14l68wv-0"
})(["display:flex;width:100%;position:relative;padding:20px;"]);
const ImageButtonsContainer = external_styled_components_default().div.withConfig({
  displayName: "ImageFormButtons__ImageButtonsContainer",
  componentId: "sc-14l68wv-1"
})(["display:flex;position:absolute;left:50%;transform:translateX(-50%);"]);
const Button = external_styled_components_default().button.withConfig({
  displayName: "ImageFormButtons__Button",
  componentId: "sc-14l68wv-2"
})(["width:40px;height:40px;border:none;outline:none;border-radius:3px;background-color:transparent;display:flex;align-items:center;justify-content:center;color:#54656f;font-size:32px;margin:0 10px;&:hover{cursor:pointer;}"]);

const ImageFormButtons = ({
  close,
  zoomIn,
  zoomOut,
  rotateClockwise,
  rotateAntiClockwise
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ImageFormButtons_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Button, {
      type: "button",
      onClick: close,
      children: /*#__PURE__*/jsx_runtime_.jsx((Close_default()), {
        style: {
          fontSize: "32px"
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ImageButtonsContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Button, {
        type: "button",
        onClick: zoomIn,
        children: /*#__PURE__*/jsx_runtime_.jsx((Add_default()), {
          style: {
            fontSize: "32px"
          }
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
        type: "button",
        onClick: zoomOut,
        children: /*#__PURE__*/jsx_runtime_.jsx((Remove_default()), {
          style: {
            fontSize: "32px"
          }
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
        type: "button",
        onClick: rotateClockwise,
        children: /*#__PURE__*/jsx_runtime_.jsx((RotateRight_default()), {
          style: {
            fontSize: "32px"
          }
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
        type: "button",
        onClick: rotateAntiClockwise,
        children: /*#__PURE__*/jsx_runtime_.jsx((RotateLeft_default()), {
          style: {
            fontSize: "32px"
          }
        })
      })]
    })]
  });
};

/* harmony default export */ const components_ImageFormButtons = (ImageFormButtons);
;// CONCATENATED MODULE: ./components/ImageFormInput.tsx


const InputContainer = external_styled_components_default().div.withConfig({
  displayName: "ImageFormInput__InputContainer",
  componentId: "sc-igdimp-0"
})(["width:100%;display:flex;justify-content:center;padding:20px;margin-top:20px;"]);
const ImageFormInput_Input = external_styled_components_default().input.withConfig({
  displayName: "ImageFormInput__Input",
  componentId: "sc-igdimp-1"
})(["height:45px;outline:none;border:none;border-radius:5px;width:70%;padding:20px;font-size:16px;&::placeholder{color:", ";}"], ({
  theme
}) => theme.globalTheme.greyFontColor);

const ImageFormInput = ({
  value,
  onChange
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(InputContainer, {
    children: /*#__PURE__*/jsx_runtime_.jsx(ImageFormInput_Input, {
      type: "text",
      placeholder: "Type a message",
      onChange: onChange,
      value: value
    })
  });
};

/* harmony default export */ const components_ImageFormInput = (ImageFormInput);
;// CONCATENATED MODULE: ./components/ImageFormCropperContainer.tsx


const ImageFormCropperContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "ImageFormCropperContainer__Container",
  componentId: "sc-gth0ip-0"
})(["width:100%;display:flex;justify-content:center;padding:20px;"]);
const ImageCropperContainer = external_styled_components_default().div.withConfig({
  displayName: "ImageFormCropperContainer__ImageCropperContainer",
  componentId: "sc-gth0ip-1"
})(["position:relative;width:490px;height:285px;box-shadow:0 3px 12px rgba(11,20,26,0.16);border-radius:3px;overflow:hidden;"]);

const ImageFormCropperContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ImageFormCropperContainer_Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(ImageCropperContainer, {
      children: children
    })
  });
};

/* harmony default export */ const components_ImageFormCropperContainer = (ImageFormCropperContainer);
;// CONCATENATED MODULE: ./components/ImageFormSubmitButton.tsx



const ImageFormSubmitButton_Button = external_styled_components_default().button.withConfig({
  displayName: "ImageFormSubmitButton__Button",
  componentId: "sc-12tu4p6-0"
})(["background-color:#00a884;box-shadow:0 3px 12px rgba(11,20,26,0.16);border-radius:50%;border:none;outline:none;width:60px;height:60px;position:absolute;bottom:20px;right:20px;color:", ";display:flex;justify-content:center;align-items:center;&:hover{filter:brightness(105%);cursor:pointer;}"], ({
  theme
}) => theme.globalTheme.white);

const ImageFormSubmitButton = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(ImageFormSubmitButton_Button, {
    type: "submit",
    children: /*#__PURE__*/jsx_runtime_.jsx((Send_default()), {})
  });
};

/* harmony default export */ const components_ImageFormSubmitButton = (ImageFormSubmitButton);
;// CONCATENATED MODULE: ./containers/MessageWithImageForm.tsx















const MessageWithImageForm = ({
  chatId,
  setMessageText,
  messageText,
  scrollToBottom,
  preview,
  close
}) => {
  const [getPresignedUrl, {
    data
  }] = (0,graphql/* useGetPresignedUrlLazyQuery */.Te)();
  const [sendMessage] = (0,graphql/* useSendMessageMutation */.at)();
  const {
    0: croppedImage,
    1: setCroppedImage
  } = (0,external_react_.useState)(null);
  const {
    crop,
    setCrop,
    zoom,
    setZoom,
    zoomIn,
    zoomOut,
    rotation,
    setRotation,
    rotateClockwise,
    rotateAntiClockwise,
    onCropComplete,
    croppedAreaPixels
  } = useImageEditor();
  const handleSubmit = (0,external_react_.useCallback)(async e => {
    e.preventDefault();

    try {
      if (croppedAreaPixels) {
        const croppedImage = await getCroppedImg(preview, croppedAreaPixels, rotation);
        setCroppedImage(croppedImage);
        await getPresignedUrl();
      }
    } catch (error) {
      console.log(error);
    }
  }, [croppedAreaPixels]);

  const handleChange = e => {
    setMessageText(e.target.value);
  };

  (0,external_react_.useEffect)(() => {
    const sendMessageWithImage = async () => {
      if (data && croppedImage) {
        const {
          presignedUrl,
          key
        } = data.getPresignedUrl;
        await external_axios_default().put(presignedUrl, croppedImage, {
          headers: {
            "Content-Type": croppedImage.type
          }
        });
        const imageUrl = `${"https://jt-whatsapp-clone-bucket.s3.eu-west-2.amazonaws.com"}/${key}`;
        await sendMessage({
          variables: {
            chatId,
            text: messageText,
            imageUrl
          },
          update: async (cache, {
            data
          }) => {
            cache.modify({
              fields: {
                getPresignedUrl() {
                  return undefined;
                }

              }
            });
          }
        });
        setMessageText("");
        close();
        scrollToBottom();
      }
    };

    if (data && croppedImage) sendMessageWithImage();
  }, [data]);
  return /*#__PURE__*/jsx_runtime_.jsx(components_MessageWithImageFormContainer, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_ImageForm, {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_ImageFormButtons, {
        close: close,
        zoomIn: zoomIn,
        zoomOut: zoomOut,
        rotateClockwise: rotateClockwise,
        rotateAntiClockwise: rotateAntiClockwise
      }), /*#__PURE__*/jsx_runtime_.jsx(components_ImageFormCropperContainer, {
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_easy_crop_default()), {
          image: preview,
          crop: crop,
          zoom: zoom,
          aspect: 1,
          onCropChange: setCrop,
          rotation: rotation,
          onRotationChange: setRotation,
          onCropComplete: onCropComplete,
          onZoomChange: setZoom
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(components_ImageFormInput, {
        value: messageText,
        onChange: handleChange
      }), /*#__PURE__*/jsx_runtime_.jsx(components_ImageFormSubmitButton, {})]
    })
  });
};

/* harmony default export */ const containers_MessageWithImageForm = (MessageWithImageForm);
;// CONCATENATED MODULE: ./containers/ChatSection.tsx














const ChatSection = ({
  chatId,
  chat,
  userId
}) => {
  var _data$getMessages, _data$getMessages2;

  const endOfMessageRef = (0,external_react_.useRef)(null);
  const {
    0: messageText,
    1: setMessageText
  } = (0,external_react_.useState)("");
  const {
    0: limit,
    1: setLimit
  } = (0,external_react_.useState)(10);
  const {
    0: preview,
    1: setPreview
  } = (0,external_react_.useState)(null);
  const {
    loading,
    error,
    refetch,
    data,
    subscribeToMore,
    fetchMore
  } = (0,graphql/* useGetMessagesQuery */.E0)({
    variables: {
      chatId,
      limit
    },
    notifyOnNetworkStatusChange: true
  });

  const subscribe = chatId => subscribeToMore({
    document: graphql/* NewMessageDocument */.u9,
    variables: {
      chatId,
      limit
    },
    updateQuery: (prev, {
      subscriptionData
    }) => {
      if (!subscriptionData.data) return prev; //@ts-ignore

      const newMessage = subscriptionData.data.newMessage;
      const newMessageChatId = Number(newMessage.chatId);

      if (chatId === newMessageChatId) {
        var _prev$getMessages, _prev$getMessages2;

        if ((_prev$getMessages = prev.getMessages) !== null && _prev$getMessages !== void 0 && _prev$getMessages.messages) {
          if (prev.getMessages.messages.filter(message => Number(message.id) === Number(newMessage.id)).length === 0) {
            return {
              getMessages: {
                messages: [newMessage, ...prev.getMessages.messages],
                hasMore: prev.getMessages.hasMore
              }
            };
          } else {
            return {
              getMessages: {
                messages: prev.getMessages.messages.map(message => {
                  if (Number(message.id) === Number(newMessage.id)) return newMessage;
                  return message;
                }),
                hasMore: prev.getMessages.hasMore
              }
            };
          }
        }

        if (!((_prev$getMessages2 = prev.getMessages) !== null && _prev$getMessages2 !== void 0 && _prev$getMessages2.messages)) {
          return {
            getMessages: {
              messages: [newMessage],
              hasMore: false
            }
          };
        }
      }

      return prev;
    }
  });

  (0,external_react_.useEffect)(() => {
    refetch();
    const unsubscribe = subscribe(chatId);
    return () => unsubscribe();
  }, [chatId]);

  const scrollToBottom = () => {
    var _endOfMessageRef$curr;

    (_endOfMessageRef$curr = endOfMessageRef.current) === null || _endOfMessageRef$curr === void 0 ? void 0 : _endOfMessageRef$curr.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const handleFetchMore = () => {
    if (data !== null && data !== void 0 && data.getMessages) {
      fetchMore({
        variables: {
          limit,
          cursor: data.getMessages.messages[data.getMessages.messages.length - 1].createdAt
        }
      });
    }
  };

  const handleClosePreview = () => {
    setPreview(null);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(components_ChatScreen, {
      name: chat.groupName ? chat.groupName : getUsersFullname(chat.members, userId),
      isGroupChat: !!chat.groupName,
      profilePictureUrl: chat.members[0].profilePictureUrl ? chat.members[0].profilePictureUrl : undefined,
      groupAvatarUrl: chat.groupAvatarUrl ? chat.groupAvatarUrl : undefined,
      endOfMessageRef: endOfMessageRef,
      children: [data === null || data === void 0 ? void 0 : (_data$getMessages = data.getMessages) === null || _data$getMessages === void 0 ? void 0 : _data$getMessages.messages.map(message => {
        const isUser = userId === Number(message.user.id);
        return /*#__PURE__*/jsx_runtime_.jsx(components_Message, {
          isUser: isUser,
          text: message.text,
          sender: isUser ? undefined : `${capitalizeFirstLetter(message.user.firstName)} ${capitalizeFirstLetter(message.user.lastName)}`,
          dateSent: formatDate(message.createdAt),
          imageUrl: message.imageUrl ? message.imageUrl : undefined
        }, `messageId-${message.id}`);
      }), loading && (data === null || data === void 0 ? void 0 : data.getMessages) && /*#__PURE__*/jsx_runtime_.jsx(components_Spinner, {
        small: true
      }), loading && !(data !== null && data !== void 0 && data.getMessages) && /*#__PURE__*/jsx_runtime_.jsx(components_Spinner, {}), (data === null || data === void 0 ? void 0 : (_data$getMessages2 = data.getMessages) === null || _data$getMessages2 === void 0 ? void 0 : _data$getMessages2.hasMore) && /*#__PURE__*/jsx_runtime_.jsx(external_react_waypoint_namespaceObject.Waypoint, {
        onEnter: handleFetchMore
      })]
    }), !preview ? /*#__PURE__*/jsx_runtime_.jsx(containers_ChatForm, {
      chatId: chatId,
      setPreview: setPreview,
      setMessageText: setMessageText,
      messageText: messageText,
      scrollToBottom: scrollToBottom
    }) : /*#__PURE__*/jsx_runtime_.jsx(containers_MessageWithImageForm, {
      chatId: chatId,
      setMessageText: setMessageText,
      messageText: messageText,
      scrollToBottom: scrollToBottom,
      preview: preview,
      close: handleClosePreview
    })]
  });
};

/* harmony default export */ const containers_ChatSection = (ChatSection);
;// CONCATENATED MODULE: external "@material-ui/icons/MoreVert"
const MoreVert_namespaceObject = require("@material-ui/icons/MoreVert");
var MoreVert_default = /*#__PURE__*/__webpack_require__.n(MoreVert_namespaceObject);
;// CONCATENATED MODULE: external "react-outside-click-handler"
const external_react_outside_click_handler_namespaceObject = require("react-outside-click-handler");
var external_react_outside_click_handler_default = /*#__PURE__*/__webpack_require__.n(external_react_outside_click_handler_namespaceObject);
;// CONCATENATED MODULE: ./components/SidebarMenuContainer.tsx


const SidebarMenuContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "SidebarMenuContainer__Container",
  componentId: "sc-1f8eoy2-0"
})(["position:relative;"]);

const SidebarMenuContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(SidebarMenuContainer_Container, {
    children: children
  });
};

/* harmony default export */ const components_SidebarMenuContainer = (SidebarMenuContainer);
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(3810);
;// CONCATENATED MODULE: ./components/DropdownContent.tsx



const ContentContainer = external_styled_components_default().div.withConfig({
  displayName: "DropdownContent__ContentContainer",
  componentId: "sc-1beu5k8-0"
})(["position:absolute;right:0px;top:calc(100% + 5px);overflow:hidden;border-radius:3px;box-shadow:0 2px 5px 0 rgba(0,0,0,0.1);padding:7px 0;background-color:", ";width:200px;font-size:14px;color:", ";&.dropdown-enter{pointer-events:none;opacity:0;transform:translateY(-10px);}&.dropdown-enter-active{opacity:1;transform:translateY(0px);pointer-events:auto;transition:opacity,transform 200ms ease-in-out;}&.dropdown-exit{transform:translateY(0px);transition:opacity,transform 200ms ease-in-out;}&.dropdown-exit-active{transform:translateY(-10px);opacity:0;pointer-events:none;}"], ({
  theme
}) => theme.globalTheme.white, ({
  theme
}) => theme.globalTheme.secondaryGreyFont);

const DropdownContent = ({
  dropdownIn,
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_transition_group_.CSSTransition, {
    classNames: "dropdown",
    in: dropdownIn,
    timeout: 300,
    unmountOnExit: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(ContentContainer, {
      children: children
    })
  });
};

/* harmony default export */ const components_DropdownContent = (DropdownContent);
;// CONCATENATED MODULE: ./containers/SidebarMenu.tsx










const SidebarMenu = ({
  children
}) => {
  const {
    0: openDropdown,
    1: setOpenDropdown
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_SidebarMenuContainer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_namespaceObject.IconButton, {
      onClick: () => setOpenDropdown(!openDropdown),
      children: /*#__PURE__*/jsx_runtime_.jsx((MoreVert_default()), {
        style: {
          fill: globalTheme/* globalTheme.iconColor */._.iconColor
        }
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_outside_click_handler_default()), {
      onOutsideClick: () => setOpenDropdown(false),
      children: /*#__PURE__*/jsx_runtime_.jsx(components_DropdownContent, {
        dropdownIn: openDropdown,
        children: children
      })
    })]
  });
};

/* harmony default export */ const containers_SidebarMenu = (SidebarMenu);
;// CONCATENATED MODULE: external "@material-ui/icons/Search"
const Search_namespaceObject = require("@material-ui/icons/Search");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
;// CONCATENATED MODULE: ./components/SearchBar.tsx





const SearchBar_Container = external_styled_components_default().div.withConfig({
  displayName: "SearchBar__Container",
  componentId: "sc-3fdwwj-0"
})(["display:flex;align-items:center;height:53px;padding:7px 14px;border-radius:2px;background-color:", ";border-bottom:1px solid ", ";"], ({
  theme
}) => theme.globalTheme.searchBarColor, ({
  theme
}) => theme.globalTheme.greyLineColor);
const Search = external_styled_components_default().div.withConfig({
  displayName: "SearchBar__Search",
  componentId: "sc-3fdwwj-1"
})(["background-color:white;border-radius:18px;width:100%;display:flex;align-items:center;height:36px;padding:0 20px;"]);
const SearchInput = external_styled_components_default().input.withConfig({
  displayName: "SearchBar__SearchInput",
  componentId: "sc-3fdwwj-2"
})(["outline-width:0;border:none;flex:1;width:100%;font-size:15px;margin-left:20px;height:20px;&::placeholder{color:", ";}"], ({
  theme
}) => theme.globalTheme.greyFontColor);

const SearchBar = ({
  placeholder,
  onChange,
  value
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(SearchBar_Container, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Search, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((Search_default()), {
        fontSize: "small",
        style: {
          fill: globalTheme/* globalTheme.iconColor */._.iconColor
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(SearchInput, {
        onChange: onChange,
        value: value,
        placeholder: placeholder
      })]
    })
  });
};

/* harmony default export */ const components_SearchBar = (SearchBar);
;// CONCATENATED MODULE: ./components/Chat.tsx





const Chat_Container = external_styled_components_default()("div").withConfig({
  displayName: "Chat__Container",
  componentId: "sc-4atca4-0"
})(["width:100%;height:77px;padding:10px 24px 10px 16px;display:flex;align-items:center;border-bottom:1px solid ", ";background-color:", ";&:hover{cursor:pointer;background-color:", ";}"], ({
  theme
}) => theme.globalTheme.greyLineColor, props => props.highlighted ? props.theme.globalTheme.selectGrey : "white", props => props.highlighted ? props.theme.globalTheme.selectGrey : props.theme.globalTheme.hoverGrey);
const TextContainer = external_styled_components_default().div.withConfig({
  displayName: "Chat__TextContainer",
  componentId: "sc-4atca4-1"
})(["display:flex;flex-direction:column;margin-left:16px;justify-content:space-between;"]);
const Chat_Name = external_styled_components_default().p.withConfig({
  displayName: "Chat__Name",
  componentId: "sc-4atca4-2"
})(["font-size:16px;font-weight:400;"]);
const LatestMessage = external_styled_components_default().p.withConfig({
  displayName: "Chat__LatestMessage",
  componentId: "sc-4atca4-3"
})(["font-size:16px;color:", ";font-weight:300;"], ({
  theme
}) => theme.globalTheme.greyMessageColor);
const TimeOfLatestMessage = external_styled_components_default().div.withConfig({
  displayName: "Chat__TimeOfLatestMessage",
  componentId: "sc-4atca4-4"
})(["display:flex;justify-content:flex-end;margin-left:auto;margin-top:10px;align-self:start;font-size:12px;color:", ";font-weight:300;"], ({
  theme
}) => theme.globalTheme.greyMessageColor);

const Chat = ({
  isHighlighted,
  onClick,
  name,
  isGroupChat,
  latestMessage,
  timeOfLatestMessage,
  groupAvatarUrl,
  profilePictureUrl
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Chat_Container, {
    highlighted: isHighlighted,
    onClick: onClick,
    children: [isGroupChat ? /*#__PURE__*/jsx_runtime_.jsx(core_namespaceObject.Avatar, {
      style: {
        width: "52px",
        height: "52px"
      },
      src: groupAvatarUrl,
      children: /*#__PURE__*/jsx_runtime_.jsx((Group_default()), {
        style: {
          width: "40px",
          height: "40px"
        }
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx(core_namespaceObject.Avatar, {
      style: {
        width: "52px",
        height: "52px"
      },
      src: profilePictureUrl
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Chat_Name, {
        children: name
      }), latestMessage && /*#__PURE__*/jsx_runtime_.jsx(LatestMessage, {
        children: latestMessage
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(TimeOfLatestMessage, {
      children: timeOfLatestMessage
    })]
  });
};

/* harmony default export */ const components_Chat = (Chat);
;// CONCATENATED MODULE: ./components/QueryResult.tsx




const QueryResult_Container = external_styled_components_default().div.withConfig({
  displayName: "QueryResult__Container",
  componentId: "sc-15e93lm-0"
})(["width:100%;height:100%;display:flex;align-items:center;justify-content:center;"]);
const ErrorText = external_styled_components_default().p.withConfig({
  displayName: "QueryResult__ErrorText",
  componentId: "sc-15e93lm-1"
})(["font-size:16px;color:", ";"], ({
  theme
}) => theme.globalTheme.errorRed);

const QueryResult = ({
  loading,
  error,
  children
}) => {
  if (loading) return /*#__PURE__*/jsx_runtime_.jsx(components_Spinner, {});
  if (error) return /*#__PURE__*/jsx_runtime_.jsx(QueryResult_Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(ErrorText, {
      children: error.message
    })
  });
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: children
  });
};

/* harmony default export */ const components_QueryResult = (QueryResult);
;// CONCATENATED MODULE: ./components/SidebarContainer.tsx


const SidebarContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "SidebarContainer__Container",
  componentId: "sc-boilpy-0"
})(["width:100%;height:100%;display:flex;flex-direction:column;"]);

const SidebarContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(SidebarContainer_Container, {
    children: children
  });
};

/* harmony default export */ const components_SidebarContainer = (SidebarContainer);
;// CONCATENATED MODULE: external "@material-ui/icons/Chat"
const icons_Chat_namespaceObject = require("@material-ui/icons/Chat");
var Chat_default = /*#__PURE__*/__webpack_require__.n(icons_Chat_namespaceObject);
;// CONCATENATED MODULE: ./components/SidebarHeader.tsx






const SidebarHeader_Header = external_styled_components_default().div.withConfig({
  displayName: "SidebarHeader__Header",
  componentId: "sc-aud11h-0"
})(["display:flex;position:sticky;top:0;background-color:", ";z-index:1;justify-content:space-between;align-items:center;padding:10px 16px;height:67px;border-bottom:1px solid whitesmoke;"], ({
  theme
}) => theme.globalTheme.primaryGrey);
const SidebarHeader_UserAvatar = external_styled_components_default()(core_namespaceObject.Avatar).withConfig({
  displayName: "SidebarHeader__UserAvatar",
  componentId: "sc-aud11h-1"
})(["cursor:pointer;&:hover{opacity:0.8;}"]);
const SidebarHeader_IconsContainer = external_styled_components_default().div.withConfig({
  displayName: "SidebarHeader__IconsContainer",
  componentId: "sc-aud11h-2"
})(["display:flex;align-items:center;"]);

const SidebarHeader = ({
  onAvatarClick,
  profilePictureUrl,
  onContactsClick,
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SidebarHeader_Header, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(SidebarHeader_UserAvatar, {
      onClick: onAvatarClick,
      style: {
        width: "44px",
        height: "44px"
      },
      src: profilePictureUrl
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SidebarHeader_IconsContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_namespaceObject.IconButton, {
        onClick: onContactsClick,
        children: /*#__PURE__*/jsx_runtime_.jsx((Chat_default()), {
          style: {
            fill: globalTheme/* globalTheme.iconColor */._.iconColor
          }
        })
      }), children]
    })]
  });
};

/* harmony default export */ const components_SidebarHeader = (SidebarHeader);
;// CONCATENATED MODULE: ./components/SidebarChatContainer.tsx


const SidebarChatContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "SidebarChatContainer__Container",
  componentId: "sc-9storb-0"
})(["width:100%;height:calc(100vh - 120px);overflow-y:auto;scrollbar-width:thin;&::-webkit-scrollbar{width:6px !important;height:6px !important;}&::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.2);}&::-webkit-scrollbar-track{background:hsla(0,0%,100%,0.1);}"]);

const SidebarChatContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(SidebarChatContainer_Container, {
    children: children
  });
};

/* harmony default export */ const components_SidebarChatContainer = (SidebarChatContainer);
;// CONCATENATED MODULE: ./components/DropdownItem.tsx


const Item = external_styled_components_default().div.withConfig({
  displayName: "DropdownItem__Item",
  componentId: "sc-vxmyo0-0"
})(["padding:10px 20px;&:hover{background-color:", ";cursor:pointer;}"], ({
  theme
}) => theme.globalTheme.hoverGrey);

const DropdownItem = ({
  children,
  onClick
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Item, {
    onClick: onClick,
    children: children
  });
};

/* harmony default export */ const components_DropdownItem = (DropdownItem);
;// CONCATENATED MODULE: ./containers/Sidebar.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const Sidebar = ({
  toContactsTab,
  toEditProfileTab,
  toSearchUsers,
  currentUser,
  handleSetChat,
  handleLogout,
  chatId,
  handleClick
}) => {
  const {
    data,
    loading,
    error,
    subscribeToMore
  } = (0,graphql/* useGetChatsQuery */.zj)({
    variables: {
      limit: 1
    }
  });
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,external_react_.useState)("");

  const subscribe = () => subscribeToMore({
    document: graphql/* NewMessageDocument */.u9,
    updateQuery: (prev, {
      subscriptionData
    }) => {
      if (!subscriptionData.data) return prev; //@ts-ignore

      const newMessage = subscriptionData.data.newMessage;
      const newChats = prev.getChats.map(chat => {
        if (Number(chat.id) === Number(newMessage.chatId)) {
          return _objectSpread(_objectSpread({}, chat), {}, {
            messages: [newMessage]
          });
        }

        return chat;
      });
      return {
        getChats: newChats
      };
    }
  });

  (0,external_react_.useEffect)(() => {
    const unsubscribe = subscribe();
    return () => unsubscribe();
  }, []);
  (0,external_react_.useEffect)(() => {
    if (data && chatId) {
      handleSetChat(data.getChats.filter(chat => Number(chat.id) === chatId)[0]);
    }
  }, [chatId]);

  const handleChange = async e => {
    setSearchTerm(e.target.value);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_SidebarContainer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_SidebarHeader, {
      profilePictureUrl: currentUser !== null && currentUser !== void 0 && currentUser.profilePictureUrl ? currentUser.profilePictureUrl : undefined,
      onAvatarClick: toEditProfileTab,
      onContactsClick: toContactsTab,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(containers_SidebarMenu, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_DropdownItem, {
          onClick: toSearchUsers,
          children: "Search users"
        }), /*#__PURE__*/jsx_runtime_.jsx(components_DropdownItem, {
          onClick: handleLogout,
          children: "Log out"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SearchBar, {
      value: searchTerm,
      onChange: handleChange,
      placeholder: "Search in chats"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SidebarChatContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(components_QueryResult, {
        loading: loading,
        error: error,
        children: currentUser && (data === null || data === void 0 ? void 0 : data.getChats.filter(chat => {
          var _chat$messages;

          return (_chat$messages = chat.messages) === null || _chat$messages === void 0 ? void 0 : _chat$messages[0].text.includes(searchTerm);
        }).map(chat => {
          var _chat$messages2, _chat$messages3;

          const selectedChatId = Number(chat.id);
          return /*#__PURE__*/jsx_runtime_.jsx(components_Chat, {
            isHighlighted: chatId === selectedChatId,
            onClick: () => handleClick(selectedChatId),
            name: chat.groupName ? chat.groupName : getUsersFullname(chat.members, Number(currentUser.id)),
            isGroupChat: !!chat.groupName,
            groupAvatarUrl: chat.groupAvatarUrl ? chat.groupAvatarUrl : undefined,
            profilePictureUrl: chat.members[0].profilePictureUrl ? chat.members[0].profilePictureUrl : undefined,
            latestMessage: (_chat$messages2 = chat.messages) === null || _chat$messages2 === void 0 ? void 0 : _chat$messages2[0].text,
            timeOfLatestMessage: formatDate((_chat$messages3 = chat.messages) === null || _chat$messages3 === void 0 ? void 0 : _chat$messages3[0].createdAt)
          }, `chatId-${chat.id}`);
        }))
      })
    })]
  });
};

/* harmony default export */ const containers_Sidebar = (Sidebar);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "@material-ui/icons/ComputerOutlined"
const ComputerOutlined_namespaceObject = require("@material-ui/icons/ComputerOutlined");
var ComputerOutlined_default = /*#__PURE__*/__webpack_require__.n(ComputerOutlined_namespaceObject);
;// CONCATENATED MODULE: ./assets/images/intro-connection-light.jpg
/* harmony default export */ const intro_connection_light = ({"src":"/_next/static/image/assets/images/intro-connection-light.6cc48a1ebd61a3b3200f0c081d0fb2da.jpg","height":355,"width":356,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAH/9oACAEBAAAAAEr/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDEAAAAD//xAAcEAABBAMBAAAAAAAAAAAAAAABAxETMQAFElH/2gAIAQEAAT8AmXGyhIMZS6djb+1n/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAxcf/aAAgBAgEBPwAb2f/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/AI//2Q=="});
;// CONCATENATED MODULE: ./components/ChatPlaceholder.tsx







const ChatPlaceholder_Container = external_styled_components_default().div.withConfig({
  displayName: "ChatPlaceholder__Container",
  componentId: "sc-wkwzwp-0"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;background-color:", ";border-bottom:6px solid #25d366;"], ({
  theme
}) => theme.globalTheme.smokeGrey);
const ChatPlaceholder_ContentContainer = external_styled_components_default().div.withConfig({
  displayName: "ChatPlaceholder__ContentContainer",
  componentId: "sc-wkwzwp-1"
})(["display:flex;flex-direction:column;align-items:center;width:80%;max-width:560px;"]);
const ChatPlaceholder_TextContainer = external_styled_components_default().div.withConfig({
  displayName: "ChatPlaceholder__TextContainer",
  componentId: "sc-wkwzwp-2"
})(["display:flex;flex-direction:column;align-items:center;color:", ";"], ({
  theme
}) => theme.globalTheme.secondaryGreyFont);
const ChatPlaceholder_Header = external_styled_components_default().h1.withConfig({
  displayName: "ChatPlaceholder__Header",
  componentId: "sc-wkwzwp-3"
})(["margin-top:28px;text-align:center;font-size:32px;font-weight:300;"]);
const TextBody = external_styled_components_default().p.withConfig({
  displayName: "ChatPlaceholder__TextBody",
  componentId: "sc-wkwzwp-4"
})(["margin-top:18px;text-align:center;padding-bottom:34px;font-size:14px;border-bottom:1px solid ", ";"], ({
  theme
}) => theme.globalTheme.greyLineColor);
const Footer = external_styled_components_default().div.withConfig({
  displayName: "ChatPlaceholder__Footer",
  componentId: "sc-wkwzwp-5"
})(["margin-top:34px;font-size:14px;display:flex;justify-content:center;"]);
const FooterText = external_styled_components_default().p.withConfig({
  displayName: "ChatPlaceholder__FooterText",
  componentId: "sc-wkwzwp-6"
})(["margin-left:5px;"]);

const ChatPlaceholder = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(ChatPlaceholder_Container, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ChatPlaceholder_ContentContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: intro_connection_light,
        width: 250,
        height: 250,
        alt: "keep connected"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ChatPlaceholder_TextContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ChatPlaceholder_Header, {
          children: "Keep your phone connected"
        }), /*#__PURE__*/jsx_runtime_.jsx(TextBody, {
          children: "WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi."
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Footer, {
          children: [/*#__PURE__*/jsx_runtime_.jsx((ComputerOutlined_default()), {
            style: {
              fontSize: "20px"
            }
          }), /*#__PURE__*/jsx_runtime_.jsx(FooterText, {
            children: "Make calls from desktop with WhatsApp for Windows."
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const components_ChatPlaceholder = (ChatPlaceholder);
;// CONCATENATED MODULE: ./components/Contact.tsx




const Contact_Container = external_styled_components_default().div.withConfig({
  displayName: "Contact__Container",
  componentId: "sc-10t0a7o-0"
})(["padding:10px 24px 10px 16px;display:flex;align-items:center;width:100%;height:77px;border-bottom:1px solid ", ";&:hover{cursor:pointer;background-color:", ";}"], ({
  theme
}) => theme.globalTheme.greyLineColor, ({
  theme
}) => theme.globalTheme.hoverGrey);
const Contact_TextContainer = external_styled_components_default().div.withConfig({
  displayName: "Contact__TextContainer",
  componentId: "sc-10t0a7o-1"
})(["display:flex;flex-direction:column;margin-left:16px;width:100%;"]);
const Contact_Name = external_styled_components_default().h4.withConfig({
  displayName: "Contact__Name",
  componentId: "sc-10t0a7o-2"
})(["font-size:16px;font-weight:400;"]);
const About = external_styled_components_default().p.withConfig({
  displayName: "Contact__About",
  componentId: "sc-10t0a7o-3"
})(["font-size:14px;color:", ";"], ({
  theme
}) => theme.globalTheme.secondaryGreyFont);

const Contact = ({
  profilePictureUrl,
  firstName,
  lastName,
  about,
  onClick
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Contact_Container, {
    onClick: onClick,
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_namespaceObject.Avatar, {
      src: profilePictureUrl ? profilePictureUrl : undefined,
      style: {
        width: "52px",
        height: "52px"
      }
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Contact_TextContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Contact_Name, {
        children: `${firstName} ${lastName}`
      }), /*#__PURE__*/jsx_runtime_.jsx(About, {
        children: about
      })]
    })]
  });
};

/* harmony default export */ const components_Contact = (Contact);
;// CONCATENATED MODULE: ./components/Container.tsx


const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "Container__Wrapper",
  componentId: "sc-70vpe8-0"
})(["width:100%;height:100%;"]);

const Container_Container = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
    children: children
  });
};

/* harmony default export */ const components_Container = (Container_Container);
;// CONCATENATED MODULE: external "@material-ui/icons/ArrowBack"
const ArrowBack_namespaceObject = require("@material-ui/icons/ArrowBack");
var ArrowBack_default = /*#__PURE__*/__webpack_require__.n(ArrowBack_namespaceObject);
;// CONCATENATED MODULE: ./components/Header.tsx






const Header_Container = external_styled_components_default().div.withConfig({
  displayName: "Header__Container",
  componentId: "sc-1mmlp76-0"
})(["width:100%;height:108px;background-color:", ";color:", ";padding:16px 28px;display:flex;align-items:flex-end;"], ({
  theme
}) => theme.globalTheme.darkGreen, ({
  theme
}) => theme.globalTheme.white);
const Heading = external_styled_components_default().h1.withConfig({
  displayName: "Header__Heading",
  componentId: "sc-1mmlp76-1"
})(["font-size:19px;margin-bottom:5px;font-weight:500;margin-left:27px;"]);

const Header_Header = ({
  onClick,
  heading
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Header_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_namespaceObject.IconButton, {
      onClick: onClick,
      size: "small",
      children: /*#__PURE__*/jsx_runtime_.jsx((ArrowBack_default()), {
        style: {
          fill: globalTheme/* globalTheme.white */._.white,
          fontSize: "24px"
        }
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Heading, {
      children: heading
    })]
  });
};

/* harmony default export */ const components_Header = (Header_Header);
;// CONCATENATED MODULE: external "@material-ui/icons/GroupAdd"
const GroupAdd_namespaceObject = require("@material-ui/icons/GroupAdd");
var GroupAdd_default = /*#__PURE__*/__webpack_require__.n(GroupAdd_namespaceObject);
;// CONCATENATED MODULE: ./components/AddToGroup.tsx





const AddToGroup_Container = external_styled_components_default().div.withConfig({
  displayName: "AddToGroup__Container",
  componentId: "sc-1vyu32c-0"
})(["padding:10px 24px 10px 16px;height:77px;width:100%;display:flex;align-items:center;border-bottom:1px solid ", ";&:hover{cursor:pointer;background-color:", ";}"], ({
  theme
}) => theme.globalTheme.greyLineColor, ({
  theme
}) => theme.globalTheme.hoverGrey);
const AddToGroup_Text = external_styled_components_default().p.withConfig({
  displayName: "AddToGroup__Text",
  componentId: "sc-1vyu32c-1"
})(["margin-left:16px;"]);

const AddToGroup = ({
  onClick
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(AddToGroup_Container, {
    onClick: onClick,
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_namespaceObject.Avatar, {
      style: {
        width: "52px",
        height: "52px",
        backgroundColor: "#00a884"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx((GroupAdd_default()), {
        style: {
          width: "32px",
          height: "32px"
        }
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(AddToGroup_Text, {
      children: "New Group"
    })]
  });
};

/* harmony default export */ const components_AddToGroup = (AddToGroup);
;// CONCATENATED MODULE: ./components/ContactsListContainer.tsx


const ContactsListContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "ContactsListContainer__Container",
  componentId: "sc-1177444-0"
})(["width:100%;height:calc(100vh - 238px);overflow-y:scroll;flex:1;scrollbar-width:thin;&::-webkit-scrollbar{width:6px !important;height:6px !important;}&::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.2);}&::-webkit-scrollbar-track{background:hsla(0,0%,100%,0.1);}"]);

const ContactsListContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ContactsListContainer_Container, {
    children: children
  });
};

/* harmony default export */ const components_ContactsListContainer = (ContactsListContainer);
;// CONCATENATED MODULE: ./containers/ContactsTab.tsx













const ContactsTab = ({
  backToSidebar,
  selectChat,
  toGroupParticipants
}) => {
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,external_react_.useState)("");
  const {
    data,
    loading,
    error
  } = (0,graphql/* useGetContactsQuery */.wY)();
  const [createChat] = (0,graphql/* useCreateChatMutation */.kx)();

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleClick = async contactId => {
    await createChat({
      variables: {
        userIds: [contactId],
        limit: 1
      },
      update: (cache, {
        data
      }) => {
        if (!data) return cache;
        const newChat = data.createChat;
        cache.modify({
          fields: {
            getChats(existingChats = [], {
              readField
            }) {
              const isAlreadyInChat = existingChats.filter( // @ts-ignore
              chat => Number(readField("id", chat)) === Number(newChat.id));
              if (isAlreadyInChat.length === 1) return existingChats;
              const newChatRef = cache.writeFragment({
                data: newChat,
                fragment: graphql/* ChatFragmentFragmentDoc */.Uj
              });
              return [...existingChats, newChatRef];
            }

          }
        });
        selectChat(Number(newChat.id));
      }
    });
    backToSidebar();
  };

  const handleToGroupParticipants = () => {
    if (data !== null && data !== void 0 && data.getContacts) {
      toGroupParticipants();
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {
      onClick: backToSidebar,
      heading: "New Chat"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SearchBar, {
      value: searchTerm,
      onChange: handleChange,
      placeholder: "Search in contacts"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_AddToGroup, {
      onClick: handleToGroupParticipants
    }), /*#__PURE__*/jsx_runtime_.jsx(components_ContactsListContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(components_QueryResult, {
        loading: loading,
        error: error,
        children: data === null || data === void 0 ? void 0 : data.getContacts.filter(contact => contact.firstName.includes(searchTerm) || contact.lastName.includes(searchTerm)).map(contact => {
          return /*#__PURE__*/jsx_runtime_.jsx(components_Contact, {
            firstName: capitalizeFirstLetter(contact.firstName),
            lastName: capitalizeFirstLetter(contact.lastName),
            about: contact.about,
            profilePictureUrl: contact.profilePictureUrl,
            onClick: () => handleClick(Number(contact.id))
          }, `contactId-${contact.id}`);
        })
      })
    })]
  });
};

/* harmony default export */ const containers_ContactsTab = (ContactsTab);
;// CONCATENATED MODULE: ./components/ParticipantsContainer.tsx


const ParticipantsContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "ParticipantsContainer__Container",
  componentId: "sc-i1iutc-0"
})(["height:100%;width:100%;display:flex;flex-direction:column;"]);

const ParticipantsContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ParticipantsContainer_Container, {
    children: children
  });
};

/* harmony default export */ const components_ParticipantsContainer = (ParticipantsContainer);
;// CONCATENATED MODULE: ./components/ContactsContainer.tsx


const ContactsContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "ContactsContainer__Container",
  componentId: "sc-blrtbg-0"
})(["width:100%;height:calc(100vh - 185px);overflow-y:scroll;flex:1;scrollbar-width:thin;&::-webkit-scrollbar{width:6px !important;height:6px !important;}&::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.2);}&::-webkit-scrollbar-track{background:hsla(0,0%,100%,0.1);}"]);

const ContactsContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ContactsContainer_Container, {
    children: children
  });
};

/* harmony default export */ const components_ContactsContainer = (ContactsContainer);
;// CONCATENATED MODULE: ./components/ContactChip.tsx



const ContactChip = ({
  onDelete,
  name,
  profilePictureUrl
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(core_namespaceObject.Chip, {
    label: name,
    onDelete: onDelete,
    avatar: /*#__PURE__*/jsx_runtime_.jsx(core_namespaceObject.Avatar, {
      src: profilePictureUrl
    })
  });
};

/* harmony default export */ const components_ContactChip = (ContactChip);
;// CONCATENATED MODULE: ./components/GroupParticipants.tsx



const GroupParticipants_Container = external_styled_components_default().div.withConfig({
  displayName: "GroupParticipants__Container",
  componentId: "sc-pwnbey-0"
})(["height:100px;width:100%;padding:10px 36px 10px 36px;border-bottom:1px solid ", ";display:flex;flex-direction:column;"], ({
  theme
}) => theme.globalTheme.greyLineColor);
const ChipContainer = external_styled_components_default().div.withConfig({
  displayName: "GroupParticipants__ChipContainer",
  componentId: "sc-pwnbey-1"
})(["display:flex;align-items:center;padding-bottom:10px;overflow-x:auto;overflow-y:hidden;scrollbar-width:thin;&::-webkit-scrollbar{width:6px !important;height:6px !important;}&::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.2);}&::-webkit-scrollbar-track{background:hsla(0,0%,100%,0.1);}"]);
const GroupParticipants_InputContainer = external_styled_components_default().div.withConfig({
  displayName: "GroupParticipants__InputContainer",
  componentId: "sc-pwnbey-2"
})([""]);
const GroupParticipants_Input = external_styled_components_default().input.withConfig({
  displayName: "GroupParticipants__Input",
  componentId: "sc-pwnbey-3"
})(["width:100%;height:32px;border:none;border-bottom:1px solid ", ";outline:none;font-size:16px;&::placeholder{font-size:16px;color:", ";}"], ({
  theme
}) => theme.globalTheme.greyLineColor, ({
  theme
}) => theme.globalTheme.secondaryGreyFont);

const GroupParticipants = ({
  children,
  onChange,
  value
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(GroupParticipants_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ChipContainer, {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(GroupParticipants_InputContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(GroupParticipants_Input, {
        placeholder: "Type contact name",
        onChange: onChange,
        value: value
      })
    })]
  });
};

/* harmony default export */ const components_GroupParticipants = (GroupParticipants);
;// CONCATENATED MODULE: external "@material-ui/icons/ArrowForward"
const ArrowForward_namespaceObject = require("@material-ui/icons/ArrowForward");
var ArrowForward_default = /*#__PURE__*/__webpack_require__.n(ArrowForward_namespaceObject);
;// CONCATENATED MODULE: ./components/NextButton.tsx



const NextButton_Container = external_styled_components_default()("div").withConfig({
  displayName: "NextButton__Container",
  componentId: "sc-16lp3wx-0"
})(["width:100%;height:70px;display:flex;align-items:center;justify-content:center;border-top:", ";"], props => props.withoutLine ? "none" : `1px solid ${props.theme.globalTheme.greyLineColor}`);
const NextButton_Button = external_styled_components_default().button.withConfig({
  displayName: "NextButton__Button",
  componentId: "sc-16lp3wx-1"
})(["border-radius:50%;height:50px;width:50px;background-color:", ";border:none;display:flex;align-items:center;justify-content:center;&:hover{filter:brightness(105%);cursor:pointer;}"], ({
  theme
}) => theme.globalTheme.buttonGreen);

const NextButton = ({
  onClick,
  withoutLine
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(NextButton_Container, {
    withoutLine: withoutLine ? true : false,
    children: /*#__PURE__*/jsx_runtime_.jsx(NextButton_Button, {
      type: onClick ? "button" : "submit",
      onClick: onClick,
      children: /*#__PURE__*/jsx_runtime_.jsx((ArrowForward_default()), {
        style: {
          fill: "#fff",
          fontSize: "24px"
        }
      })
    })
  });
};

/* harmony default export */ const components_NextButton = (NextButton);
;// CONCATENATED MODULE: ./containers/AddGroupParticipants.tsx














const AddGroupParticipants = ({
  toContactsTab,
  toCreateGroup,
  selectedContacts,
  setSelectedContacts
}) => {
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,external_react_.useState)("");
  const client = (0,client_.useApolloClient)();
  const {
    getContacts
  } = client.readQuery({
    query: graphql/* GetContactsDocument */.$0
  });

  const filteredContacts = searchTerm => {
    return getContacts.filter(contact => {
      if (!searchTerm) return contact;
      return contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || contact.lastName.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  const handleSelectContact = contact => {
    const isDuplicate = selectedContacts.find(c => Number(c.id) === Number(contact.id));
    if (isDuplicate) return;
    setSelectedContacts([...selectedContacts, contact]);
    setSearchTerm("");
  };

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleRemoveFromSelectedContacts = contactId => {
    const newContacts = selectedContacts.filter(contact => Number(contact.id) !== contactId);
    setSelectedContacts(newContacts);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_ParticipantsContainer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {
      onClick: toContactsTab,
      heading: "Add group participants"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_GroupParticipants, {
      onChange: handleChange,
      value: searchTerm,
      children: selectedContacts.length > 0 && selectedContacts.map(contact => {
        return /*#__PURE__*/jsx_runtime_.jsx(components_ContactChip, {
          onDelete: () => handleRemoveFromSelectedContacts(Number(contact.id)),
          name: `${capitalizeFirstLetter(contact.firstName)} ${capitalizeFirstLetter(contact.lastName)}`,
          profilePictureUrl: contact.profilePictureUrl ? contact.profilePictureUrl : undefined
        }, `selectedContactId-${contact.id}`);
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_ContactsContainer, {
      children: filteredContacts(searchTerm).map(contact => {
        return /*#__PURE__*/jsx_runtime_.jsx(components_Contact, {
          firstName: capitalizeFirstLetter(contact.firstName),
          lastName: capitalizeFirstLetter(contact.lastName),
          about: contact.about,
          profilePictureUrl: contact.profilePictureUrl,
          onClick: () => handleSelectContact(contact)
        }, `contactId-${contact.id}`);
      })
    }), selectedContacts.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(components_NextButton, {
      onClick: toCreateGroup
    })]
  });
};

/* harmony default export */ const containers_AddGroupParticipants = (AddGroupParticipants);
;// CONCATENATED MODULE: ./hooks/useImageCrop.ts

const useImageCrop = () => {
  const {
    0: file,
    1: setFile
  } = (0,external_react_.useState)(null);
  const {
    0: preview,
    1: setPreview
  } = (0,external_react_.useState)(null);
  const {
    0: croppedImage,
    1: setCroppedImage
  } = (0,external_react_.useState)(null);

  const handleFileChange = e => {
    setFile(e.target.files ? e.target.files[0] : null);
  };

  const handleClosePreview = () => {
    setPreview(null);
  };

  (0,external_react_.useEffect)(() => {
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);
  return {
    handleFileChange,
    handleClosePreview,
    croppedImage,
    setCroppedImage,
    preview
  };
};
;// CONCATENATED MODULE: ./components/CreateGroupForm.tsx


const CreateGroupForm_Form = external_styled_components_default().form.withConfig({
  displayName: "CreateGroupForm__Form",
  componentId: "sc-54b06q-0"
})(["width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;"]);

const CreateGroupForm = ({
  onSubmit,
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(CreateGroupForm_Form, {
    onSubmit: onSubmit,
    children: children
  });
};

/* harmony default export */ const components_CreateGroupForm = (CreateGroupForm);
;// CONCATENATED MODULE: ./components/MemberInput.tsx



const MemberInput_InputContainer = external_styled_components_default().div.withConfig({
  displayName: "MemberInput__InputContainer",
  componentId: "sc-1cxcpon-0"
})(["margin-top:24px;width:100%;display:flex;flex-direction:column;justify-content:center;margin-bottom:52px;padding:0 10%;"]);
const MemberInput_Input = external_styled_components_default().input.withConfig({
  displayName: "MemberInput__Input",
  componentId: "sc-1cxcpon-1"
})(["border:none;outline:none;border-bottom:3px solid #00a884;font-size:16px;height:38px;width:100%;&::placeholder{font-size:16px;color:", ";}"], ({
  theme
}) => theme.globalTheme.secondaryGreyFont);
const Label = external_styled_components_default().label.withConfig({
  displayName: "MemberInput__Label",
  componentId: "sc-1cxcpon-2"
})(["color:#00a884;font-size:14px;"]);

const MemberInput = ({
  value,
  onChange,
  placeholder,
  type,
  name
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MemberInput_InputContainer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Label, {
      children: placeholder
    }), /*#__PURE__*/jsx_runtime_.jsx(MemberInput_Input, {
      onChange: onChange,
      value: value,
      type: type,
      name: name
    })]
  });
};

/* harmony default export */ const components_MemberInput = (MemberInput);
;// CONCATENATED MODULE: external "@material-ui/icons/AddAPhoto"
const AddAPhoto_namespaceObject = require("@material-ui/icons/AddAPhoto");
var AddAPhoto_default = /*#__PURE__*/__webpack_require__.n(AddAPhoto_namespaceObject);
;// CONCATENATED MODULE: ./components/ImageButton.tsx




const ImageButtonContainer = external_styled_components_default().div.withConfig({
  displayName: "ImageButton__ImageButtonContainer",
  componentId: "sc-zhb496-0"
})(["display:flex;align-items:center;justify-content:center;padding:28px 32px;"]);
const ImageBackground = external_styled_components_default()("div").withConfig({
  displayName: "ImageButton__ImageBackground",
  componentId: "sc-zhb496-1"
})(["height:200px;width:200px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:", ";background-size:cover;"], ({
  background
}) => background ? `url(${background}) no-repeat ` : "#fff");
const ImageLabel = external_styled_components_default().label.withConfig({
  displayName: "ImageButton__ImageLabel",
  componentId: "sc-zhb496-2"
})(["height:200px;width:200px;display:flex;align-items:center;justify-content:center;border-radius:50%;background-color:rgba(112,126,134,0.7);&:hover{cursor:pointer;filter:brightness(105%);}"]);
const ImageInput = external_styled_components_default().input.withConfig({
  displayName: "ImageButton__ImageInput",
  componentId: "sc-zhb496-3"
})(["display:none;"]);
const IconContainer = external_styled_components_default().div.withConfig({
  displayName: "ImageButton__IconContainer",
  componentId: "sc-zhb496-4"
})(["display:flex;flex-direction:column;align-items:center;"]);
const IconCaption = external_styled_components_default().p.withConfig({
  displayName: "ImageButton__IconCaption",
  componentId: "sc-zhb496-5"
})(["font-weight:300;font-size:12px;color:#fff;text-transform:uppercase;margin-top:5px;"]);

const ImageButton = ({
  onChange,
  placeholder,
  background
}) => {
  const handleClick = e => {
    //@ts-ignore
    e.target.value = "";
  };

  return /*#__PURE__*/jsx_runtime_.jsx(ImageButtonContainer, {
    children: /*#__PURE__*/jsx_runtime_.jsx(ImageBackground, {
      background: background,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ImageLabel, {
        htmlFor: "file-upload",
        children: [/*#__PURE__*/jsx_runtime_.jsx(ImageInput, {
          id: "file-upload",
          type: "file",
          accept: "image/*",
          onChange: onChange,
          onClick: handleClick
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconContainer, {
          children: [/*#__PURE__*/jsx_runtime_.jsx((AddAPhoto_default()), {
            style: {
              fontSize: "32px",
              fill: "#fff"
            }
          }), /*#__PURE__*/jsx_runtime_.jsx(IconCaption, {
            children: placeholder
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const components_ImageButton = (ImageButton);
;// CONCATENATED MODULE: ./components/ImageEditorHeader.tsx





const ImageEditorHeader_Header = external_styled_components_default().header.withConfig({
  displayName: "ImageEditorHeader__Header",
  componentId: "sc-fuwn8b-0"
})(["display:flex;background-color:", ";color:", ";align-items:center;height:50px;padding:0 24px;"], ({
  theme
}) => theme.globalTheme.darkGreen, ({
  theme
}) => theme.globalTheme.white);
const CloseButton = external_styled_components_default().button.withConfig({
  displayName: "ImageEditorHeader__CloseButton",
  componentId: "sc-fuwn8b-1"
})(["display:flex;align-items:center;justify-content:center;background-color:transparent;outline:none;border:none;margin-right:24px;&:hover{cursor:pointer;}"]);
const ImageEditorHeader_Heading = external_styled_components_default().h1.withConfig({
  displayName: "ImageEditorHeader__Heading",
  componentId: "sc-fuwn8b-2"
})(["font-size:19px;font-weight:500;"]);
const UploadButton = external_styled_components_default().button.withConfig({
  displayName: "ImageEditorHeader__UploadButton",
  componentId: "sc-fuwn8b-3"
})(["margin-left:auto;display:flex;align-items:center;justify-content:center;background-color:transparent;outline:none;border:none;font-size:14px;color:", ";&:hover{cursor:pointer;}"], ({
  theme
}) => theme.globalTheme.white);
const ImageEditorHeader_Input = external_styled_components_default().input.withConfig({
  displayName: "ImageEditorHeader__Input",
  componentId: "sc-fuwn8b-4"
})(["display:none;"]);

const ImageEditorHeader = ({
  close,
  changeFile
}) => {
  const inputRef = (0,external_react_.useRef)();

  const handleClick = () => {
    var _inputRef$current;

    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.click();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ImageEditorHeader_Header, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(CloseButton, {
      onClick: close,
      children: /*#__PURE__*/jsx_runtime_.jsx((Close_default()), {
        style: {
          fill: "#b2d8d1"
        }
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(ImageEditorHeader_Heading, {
      children: "Drag image to adjust"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(UploadButton, {
      onClick: handleClick,
      children: [/*#__PURE__*/jsx_runtime_.jsx(ImageEditorHeader_Input, {
        type: "file",
        onChange: changeFile,
        ref: inputRef,
        accept: "image/*"
      }), "Upload"]
    })]
  });
};

/* harmony default export */ const components_ImageEditorHeader = (ImageEditorHeader);
;// CONCATENATED MODULE: ./components/ImageEditorContainer.tsx


const ImageEditorContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "ImageEditorContainer__Container",
  componentId: "sc-1u0cxc3-0"
})(["position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;border-radius:5px;overflow:hidden;"]);

const ImageEditorContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ImageEditorContainer_Container, {
    children: children
  });
};

/* harmony default export */ const components_ImageEditorContainer = (ImageEditorContainer);
;// CONCATENATED MODULE: ./components/ImagePreviewContainer.tsx


const ImagePreviewContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "ImagePreviewContainer__Container",
  componentId: "sc-sb0mll-0"
})(["position:relative;width:100%;height:360px;"]);

const ImagePreviewContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ImagePreviewContainer_Container, {
    children: children
  });
};

/* harmony default export */ const components_ImagePreviewContainer = (ImagePreviewContainer);
;// CONCATENATED MODULE: ./components/ImageEditorOverlay.tsx


const Overlay = external_styled_components_default().div.withConfig({
  displayName: "ImageEditorOverlay__Overlay",
  componentId: "sc-15r31we-0"
})(["position:fixed;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.7);"]);

const ImageEditorOverlay = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Overlay, {
    children: children
  });
};

/* harmony default export */ const components_ImageEditorOverlay = (ImageEditorOverlay);
;// CONCATENATED MODULE: ./components/ZoomButtons.tsx





const ZoomButtons_Container = external_styled_components_default().div.withConfig({
  displayName: "ZoomButtons__Container",
  componentId: "sc-8ux1ut-0"
})(["background-color:", ";position:absolute;display:flex;flex-direction:column;border:none;outline:none;border-radius:3px;right:7px;top:50%;transform:translateY(-50%);background-color:", ";"], ({
  theme
}) => theme.globalTheme.white, ({
  theme
}) => theme.globalTheme.white);
const ZoomButton = external_styled_components_default().button.withConfig({
  displayName: "ZoomButtons__ZoomButton",
  componentId: "sc-8ux1ut-1"
})(["width:28px;height:28px;border:none;outline:none;border-radius:3px;background-color:transparent;display:flex;align-items:center;justify-content:center;&:hover{cursor:pointer;background-color:", ";}"], ({
  theme
}) => theme.globalTheme.hoverGrey);

const ZoomButtons = ({
  zoomIn,
  zoomOut,
  zoom
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ZoomButtons_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ZoomButton, {
      value: zoom,
      onClick: zoomIn,
      children: /*#__PURE__*/jsx_runtime_.jsx((Add_default()), {})
    }), /*#__PURE__*/jsx_runtime_.jsx(ZoomButton, {
      value: zoom,
      onClick: zoomOut,
      children: /*#__PURE__*/jsx_runtime_.jsx((Remove_default()), {})
    })]
  });
};

/* harmony default export */ const components_ZoomButtons = (ZoomButtons);
;// CONCATENATED MODULE: external "@material-ui/icons/Done"
const Done_namespaceObject = require("@material-ui/icons/Done");
var Done_default = /*#__PURE__*/__webpack_require__.n(Done_namespaceObject);
;// CONCATENATED MODULE: ./components/ImageEditorFooter.tsx



const ImageEditorFooter_Container = external_styled_components_default().div.withConfig({
  displayName: "ImageEditorFooter__Container",
  componentId: "sc-obz2z-0"
})(["height:90px;background-color:", ";position:relative;"], ({
  theme
}) => theme.globalTheme.white);
const DoneButton = external_styled_components_default().button.withConfig({
  displayName: "ImageEditorFooter__DoneButton",
  componentId: "sc-obz2z-1"
})(["border:none;outline:none;border-radius:50%;width:60px;height:60px;background-color:", ";position:absolute;right:40px;top:-100%;transform:translateY(100%);display:flex;align-items:center;justify-content:center;&:hover{cursor:pointer;filter:brightness(105%);}"], ({
  theme
}) => theme.globalTheme.buttonGreen);

const ImageEditorFooter = ({
  onClick
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ImageEditorFooter_Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(DoneButton, {
      onClick: onClick,
      children: /*#__PURE__*/jsx_runtime_.jsx((Done_default()), {
        style: {
          fill: "#fff",
          width: "30px",
          height: "30px"
        }
      })
    })
  });
};

/* harmony default export */ const components_ImageEditorFooter = (ImageEditorFooter);
;// CONCATENATED MODULE: ./containers/ImageEditor.tsx














const ImageEditor = ({
  imageUrl,
  closePreview,
  changeFile,
  setCroppedImage
}) => {
  const {
    crop,
    setCrop,
    zoom,
    setZoom,
    zoomIn,
    zoomOut,
    onCropComplete,
    croppedAreaPixels
  } = useImageEditor();
  const cropImage = (0,external_react_.useCallback)(async () => {
    try {
      if (croppedAreaPixels) {
        const croppedImage = await getCroppedImg(imageUrl, croppedAreaPixels);
        setCroppedImage(croppedImage);
        closePreview();
      }
    } catch (error) {
      console.log(error);
    }
  }, [croppedAreaPixels]);
  return /*#__PURE__*/jsx_runtime_.jsx(components_ImageEditorOverlay, {
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_outside_click_handler_default()), {
      onOutsideClick: () => {
        closePreview();
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_ImageEditorContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_ImageEditorHeader, {
          close: closePreview,
          changeFile: changeFile
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_ImagePreviewContainer, {
          children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_easy_crop_default()), {
            image: imageUrl,
            crop: crop,
            zoom: zoom,
            cropShape: "round",
            aspect: 1,
            onCropChange: setCrop,
            onCropComplete: onCropComplete,
            onZoomChange: setZoom
          }), /*#__PURE__*/jsx_runtime_.jsx(components_ZoomButtons, {
            zoom: zoom,
            zoomIn: zoomIn,
            zoomOut: zoomOut
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(components_ImageEditorFooter, {
          onClick: cropImage
        })]
      })
    })
  });
};

/* harmony default export */ const containers_ImageEditor = (ImageEditor);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(2268);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);
;// CONCATENATED MODULE: ./containers/Modal.tsx



const Modal = ({
  children,
  open
}) => {
  const {
    0: isBrowser,
    1: setIsBrowser
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setIsBrowser(true);
  }, []);
  return isBrowser && open ? /*#__PURE__*/external_react_dom_default().createPortal(children, document.getElementById("portal")) : null;
};

/* harmony default export */ const containers_Modal = (Modal);
;// CONCATENATED MODULE: ./containers/CreateGroup.tsx















const CreateGroup = ({
  toGroupParticipants,
  selectedContacts,
  selectChat,
  backToSidebar,
  setSelectedContacts
}) => {
  const {
    handleFileChange,
    handleClosePreview,
    croppedImage,
    setCroppedImage,
    preview
  } = useImageCrop();
  const {
    0: groupName,
    1: setGroupName
  } = (0,external_react_.useState)("");
  const [getPresignedUrl, {
    data
  }] = (0,graphql/* useGetPresignedUrlLazyQuery */.Te)();
  const [createChat] = (0,graphql/* useCreateChatMutation */.kx)();

  const createGroup = async (groupAvatarUrl = null) => {
    const userIds = selectedContacts.map(contact => Number(contact.id));
    await createChat({
      variables: {
        groupName,
        userIds,
        limit: 1,
        groupAvatarUrl
      },
      update: async (cache, {
        data
      }) => {
        if (!data) return cache;
        const newChat = data.createChat;
        await cache.modify({
          fields: {
            getChats(existingChats = []) {
              const newChatRef = cache.writeFragment({
                data: newChat,
                fragment: graphql/* ChatFragmentFragmentDoc */.Uj
              });
              return [newChatRef, ...existingChats];
            },

            getPresignedUrl() {
              return undefined;
            }

          }
        });
        selectChat(Number(newChat.id));
      }
    });
    backToSidebar();
    setSelectedContacts([]);
    setGroupName("");
  };

  const handleTextChange = e => {
    setGroupName(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (groupName.length === 0) return;

    if (croppedImage) {
      await getPresignedUrl();
    } else {
      createGroup();
    }
  };

  (0,external_react_.useEffect)(() => {
    if (data && croppedImage) {
      const createGroupWithAvatar = async () => {
        const {
          presignedUrl,
          key
        } = data.getPresignedUrl;
        await external_axios_default().put(presignedUrl, croppedImage, {
          headers: {
            "Content-Type": croppedImage.type
          }
        });
        const groupAvatarUrl = `${"https://jt-whatsapp-clone-bucket.s3.eu-west-2.amazonaws.com"}/${key}`;
        createGroup(groupAvatarUrl);
      };

      createGroupWithAvatar();
    }

    return () => setCroppedImage(null);
  }, [data]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {
      heading: "New group",
      onClick: toGroupParticipants
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_CreateGroupForm, {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_ImageButton, {
        background: croppedImage ? URL.createObjectURL(croppedImage) : null,
        onChange: handleFileChange,
        placeholder: "Add group icon"
      }), /*#__PURE__*/jsx_runtime_.jsx(components_MemberInput, {
        onChange: handleTextChange,
        type: "text",
        value: groupName,
        name: "groupName",
        placeholder: "Group Subject"
      }), groupName && /*#__PURE__*/jsx_runtime_.jsx(components_NextButton, {
        withoutLine: true
      }), /*#__PURE__*/jsx_runtime_.jsx(containers_Modal, {
        open: !!preview,
        children: preview && /*#__PURE__*/jsx_runtime_.jsx(containers_ImageEditor, {
          setCroppedImage: setCroppedImage,
          imageUrl: preview,
          closePreview: handleClosePreview,
          changeFile: handleFileChange
        })
      })]
    })]
  });
};

/* harmony default export */ const containers_CreateGroup = (CreateGroup);
;// CONCATENATED MODULE: ./components/EditProfileFromContainer.tsx


const EditProfileFromContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "EditProfileFromContainer__Container",
  componentId: "sc-nryww0-0"
})(["width:100%;height:calc(100vh - 108px);overflow-y:scroll;scrollbar-width:thin;&::-webkit-scrollbar{width:6px !important;height:6px !important;}&::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.2);}&::-webkit-scrollbar-track{background:hsla(0,0%,100%,0.1);}"]);

const EditProfileFormContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(EditProfileFromContainer_Container, {
    children: children
  });
};

/* harmony default export */ const EditProfileFromContainer = (EditProfileFormContainer);
// EXTERNAL MODULE: ./components/Form.tsx
var components_Form = __webpack_require__(7804);
;// CONCATENATED MODULE: ./components/EditProfileSubmitButton.tsx


const ButtonContainer = external_styled_components_default().div.withConfig({
  displayName: "EditProfileSubmitButton__ButtonContainer",
  componentId: "sc-yhw2jr-0"
})(["display:flex;align-items:center;justify-content:center;padding:0 0 40px 0;width:100%;"]);
const EditProfileSubmitButton_Button = external_styled_components_default().button.withConfig({
  displayName: "EditProfileSubmitButton__Button",
  componentId: "sc-yhw2jr-1"
})(["background-color:#25d366;font-size:14px;font-weight:600;color:", ";outline:none;border-radius:3px;border:none;height:34px;width:130px;&:hover{cursor:pointer;filter:brightness(105%);}"], ({
  theme
}) => theme.globalTheme.white);

const EditProfileSubmitButton = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ButtonContainer, {
    children: /*#__PURE__*/jsx_runtime_.jsx(EditProfileSubmitButton_Button, {
      type: "submit",
      children: children
    })
  });
};

/* harmony default export */ const components_EditProfileSubmitButton = (EditProfileSubmitButton);
;// CONCATENATED MODULE: ./containers/EditProfile.tsx
function EditProfile_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function EditProfile_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { EditProfile_ownKeys(Object(source), true).forEach(function (key) { EditProfile_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { EditProfile_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function EditProfile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const EditProfile = ({
  backToSidebar
}) => {
  const [getPresignedUrl, {
    data: presignedUrlData
  }] = (0,graphql/* useGetPresignedUrlLazyQuery */.Te)();
  const [editProfile] = (0,graphql/* useEditProfileMutation */.kf)();
  const {
    handleFileChange,
    handleClosePreview,
    croppedImage,
    setCroppedImage,
    preview
  } = useImageCrop();
  const client = (0,client_.useApolloClient)();
  const {
    currentUser: cachedCurrentUser
  } = client.readQuery({
    query: graphql/* GetCurrentUserDocument */.W$
  });
  const {
    0: credentials,
    1: setCredentials
  } = (0,external_react_.useState)(EditProfile_objectSpread({}, cachedCurrentUser));
  const {
    username,
    firstName,
    lastName,
    profilePictureUrl,
    about
  } = credentials;

  const handleChange = e => {
    setCredentials(EditProfile_objectSpread(EditProfile_objectSpread({}, credentials), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const updateProfile = async profilePictureUrl => {
    await editProfile({
      variables: EditProfile_objectSpread(EditProfile_objectSpread({}, credentials), {}, {
        profilePictureUrl
      }),
      update: async (cache, {
        data
      }) => {
        if (!data) return cache;
        const currentUser = data.editProfile;
        cache.writeQuery({
          data: {
            currentUser
          },
          query: graphql/* GetCurrentUserDocument */.W$
        });
        cache.modify({
          fields: {
            getPresignedUrl() {
              return undefined;
            }

          }
        });
      }
    });
    backToSidebar();
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (croppedImage) {
      await getPresignedUrl();
    } else {
      updateProfile();
    }
  };

  (0,external_react_.useEffect)(() => {
    if (croppedImage && presignedUrlData) {
      const updateProfileWithAvatar = async () => {
        const {
          presignedUrl,
          key
        } = presignedUrlData.getPresignedUrl;
        await external_axios_default().put(presignedUrl, croppedImage, {
          headers: {
            "Content-Type": croppedImage.type
          }
        });
        const profilePictureUrl = `${"https://jt-whatsapp-clone-bucket.s3.eu-west-2.amazonaws.com"}/${key}`;
        updateProfile(profilePictureUrl);
      };

      updateProfileWithAvatar();
    }

    return () => setCroppedImage(null);
  }, [presignedUrlData]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {
      heading: "Edit Profile",
      onClick: backToSidebar
    }), /*#__PURE__*/jsx_runtime_.jsx(EditProfileFromContainer, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Form/* default */.Z, {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_ImageButton, {
          placeholder: "Add profile image",
          background: croppedImage ? URL.createObjectURL(croppedImage) : profilePictureUrl ? profilePictureUrl : null,
          onChange: handleFileChange
        }), /*#__PURE__*/jsx_runtime_.jsx(containers_Modal, {
          open: !!preview,
          children: preview && /*#__PURE__*/jsx_runtime_.jsx(containers_ImageEditor, {
            setCroppedImage: setCroppedImage,
            imageUrl: preview,
            closePreview: handleClosePreview,
            changeFile: handleFileChange
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(components_MemberInput, {
          onChange: handleChange,
          type: "text",
          value: username,
          name: "username",
          placeholder: "Username"
        }), /*#__PURE__*/jsx_runtime_.jsx(components_MemberInput, {
          onChange: handleChange,
          type: "text",
          value: firstName,
          name: "firstName",
          placeholder: "First name"
        }), /*#__PURE__*/jsx_runtime_.jsx(components_MemberInput, {
          onChange: handleChange,
          type: "text",
          value: lastName,
          name: "lastName",
          placeholder: "Last name"
        }), /*#__PURE__*/jsx_runtime_.jsx(components_MemberInput, {
          onChange: handleChange,
          type: "text",
          value: about ? about : "",
          name: "about",
          placeholder: "About"
        }), /*#__PURE__*/jsx_runtime_.jsx(components_EditProfileSubmitButton, {
          children: "Update profile"
        })]
      })
    })]
  });
};

/* harmony default export */ const containers_EditProfile = (EditProfile);
;// CONCATENATED MODULE: ./components/TabContainer.tsx



const TabContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "TabContainer__Container",
  componentId: "sc-1euu03j-0"
})(["width:100%;height:100%;position:absolute;&.tab-enter{transform:translateX(-100%);transition:transform 200ms ease-in;}&.tab-enter-active{transform:translateX(0%);}&.tab-exit{transform:translateX(0%);z-index:-1;transition:transform 200ms ease-in;}&.tab-exit-active{transform:translateX(100%);z-index:-1;}"]);

const TabContainer = ({
  tabIn,
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_transition_group_.CSSTransition, {
    in: tabIn,
    classNames: "tab",
    unmountOnExit: true,
    timeout: 300,
    children: /*#__PURE__*/jsx_runtime_.jsx(TabContainer_Container, {
      children: children
    })
  });
};

/* harmony default export */ const components_TabContainer = (TabContainer);
;// CONCATENATED MODULE: ./utils/sortAlphabetically.ts
const sortAlphabetically = contacts => {
  return contacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
};
;// CONCATENATED MODULE: ./components/User.tsx




const User_Container = external_styled_components_default().div.withConfig({
  displayName: "User__Container",
  componentId: "sc-nnoym2-0"
})(["width:100%;height:77px;padding:10px 24px 10px 16px;display:flex;align-items:center;border-bottom:1px solid ", ";background-color:", ";&:hover{background-color:", ";}"], ({
  theme
}) => theme.globalTheme.greyLineColor, ({
  theme
}) => theme.globalTheme.white, ({
  theme
}) => theme.globalTheme.hoverGrey);
const User_TextContainer = external_styled_components_default().div.withConfig({
  displayName: "User__TextContainer",
  componentId: "sc-nnoym2-1"
})(["display:flex;flex-direction:column;margin-left:16px;"]);
const Username = external_styled_components_default().p.withConfig({
  displayName: "User__Username",
  componentId: "sc-nnoym2-2"
})(["font-size:16px;font-weight:400;"]);
const User_Name = external_styled_components_default().p.withConfig({
  displayName: "User__Name",
  componentId: "sc-nnoym2-3"
})(["font-size:14px;color:", ";"], ({
  theme
}) => theme.globalTheme.secondaryGreyFont);

const User = ({
  name,
  username,
  profilePictureUrl,
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(User_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_namespaceObject.Avatar, {
      style: {
        width: "52px",
        height: "52px"
      },
      src: profilePictureUrl
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(User_TextContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Username, {
        children: username
      }), /*#__PURE__*/jsx_runtime_.jsx(User_Name, {
        children: name
      })]
    }), children]
  });
};

/* harmony default export */ const components_User = (User);
;// CONCATENATED MODULE: ./components/UserButtons.tsx



const UserButtons_Button = external_styled_components_default()("button").withConfig({
  displayName: "UserButtons__Button",
  componentId: "sc-1136qq0-0"
})(["display:flex;align-items:center;justify-content:center;margin-left:auto;font-size:14px;background-color:", ";color:", ";font-weight:600;outline:none;border-radius:3px;border:none;padding:10px 15px;width:75px;&:hover{cursor:pointer;filter:brightness(105%);}"], props => props.isContact ? "#25d366" : "#00a884", ({
  theme
}) => theme.globalTheme.white);

const UserButtons = ({
  addContact,
  removeContact,
  isContact,
  isCurrentUser
}) => {
  if (isCurrentUser) return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {});

  if (isContact) {
    return /*#__PURE__*/jsx_runtime_.jsx(UserButtons_Button, {
      isContact: isContact,
      onClick: removeContact,
      children: "Added"
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(UserButtons_Button, {
    isContact: isContact,
    onClick: addContact,
    children: "Add"
  });
};

/* harmony default export */ const components_UserButtons = (UserButtons);
;// CONCATENATED MODULE: ./components/SearchUsersContainer.tsx


const SearchUsersContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "SearchUsersContainer__Container",
  componentId: "sc-1ijsj3e-0"
})(["height:calc(100vh - 161px);overflow-y:scroll;scrollbar-width:thin;&::-webkit-scrollbar{width:6px !important;height:6px !important;}&::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.2);}&::-webkit-scrollbar-track{background:hsla(0,0%,100%,0.1);}"]);

const SearchUsersContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(SearchUsersContainer_Container, {
    children: children
  });
};

/* harmony default export */ const components_SearchUsersContainer = (SearchUsersContainer);
;// CONCATENATED MODULE: ./components/GetMoreUsersButton.tsx


const GetMoreUsersButton_Container = external_styled_components_default().div.withConfig({
  displayName: "GetMoreUsersButton__Container",
  componentId: "sc-175a1l2-0"
})(["display:flex;justify-content:center;align-items:center;width:100%;padding:20px 0;"]);
const GetMoreUsersButton_Button = external_styled_components_default().button.withConfig({
  displayName: "GetMoreUsersButton__Button",
  componentId: "sc-175a1l2-1"
})(["border-radius:3px;outline:none;border:none;background-color:", ";display:flex;justify-content:center;align-items:center;color:", ";padding:10px 15px;width:75px;font-weight:600;&:hover{cursor:pointer;filter:brightness(105%);}"], ({
  theme
}) => theme.globalTheme.secondaryGreyFont, ({
  theme
}) => theme.globalTheme.white);

const GetMoreUsersButton = ({
  children,
  onClick
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(GetMoreUsersButton_Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(GetMoreUsersButton_Button, {
      onClick: onClick,
      children: children
    })
  });
};

/* harmony default export */ const components_GetMoreUsersButton = (GetMoreUsersButton);
;// CONCATENATED MODULE: ./containers/SearchUsers.tsx
function SearchUsers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SearchUsers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SearchUsers_ownKeys(Object(source), true).forEach(function (key) { SearchUsers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SearchUsers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SearchUsers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const SearchUsers = ({
  backToSidebar
}) => {
  const client = (0,client_.useApolloClient)();
  const {
    currentUser
  } = client.readQuery({
    query: graphql/* GetCurrentUserDocument */.W$
  });
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,external_react_.useState)("");
  const {
    0: page,
    1: setPage
  } = (0,external_react_.useState)(0);
  const {
    0: limit,
    1: setLimit
  } = (0,external_react_.useState)(5);
  const [searchUsers, {
    data,
    loading,
    error,
    fetchMore
  }] = (0,graphql/* useSearchUsersLazyQuery */.OV)();
  const {
    data: contactsData
  } = (0,graphql/* useGetContactsQuery */.wY)();
  const [addContact] = (0,graphql/* useAddToContactsMutation */.Km)();
  const [removeFromContacts] = (0,graphql/* useRemoveFromContactsMutation */.px)();

  const handleChange = async e => {
    setSearchTerm(e.target.value);
    setPage(0);
    await searchUsers({
      variables: {
        searchTerm: e.target.value,
        page: 0,
        limit
      }
    });
  };

  const handleClick = async () => {
    if (fetchMore) {
      await fetchMore({
        variables: {
          searchTerm,
          page: page + 1,
          limit
        }
      });
    }

    setPage(page + 1);
  };

  const handleAddToContacts = async contactId => {
    await addContact({
      variables: {
        contactId
      },
      update: (cache, {
        data
      }) => {
        if (!data) return cache;
        const contact = data.addToContacts.contact;
        cache.modify({
          fields: {
            getContacts(existingCachedContacts = []) {
              if (existingCachedContacts.length === 0) {
                return [contact];
              }

              const {
                getContacts
              } = client.readQuery({
                query: graphql/* GetContactsDocument */.$0
              });
              const allContacts = [SearchUsers_objectSpread({}, contact), ...getContacts];
              sortAlphabetically(allContacts);
              return allContacts;
            }

          }
        });
      }
    });
  };

  const handleRemoveFromContacts = async contactId => {
    await removeFromContacts({
      variables: {
        contactId
      },

      update(cache, {
        data
      }) {
        if (!data) return cache;
        cache.modify({
          fields: {
            getContacts(existingContacts) {
              const {
                getContacts
              } = client.readQuery({
                query: graphql/* GetContactsDocument */.$0
              });
              return getContacts.filter(contact => Number(contact.id) !== contactId);
            }

          }
        });
      }

    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {
      heading: "Search users",
      onClick: backToSidebar
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SearchBar, {
      onChange: handleChange,
      value: searchTerm,
      placeholder: "Search for users"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_SearchUsersContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_QueryResult, {
        loading: loading,
        error: error,
        children: contactsData && (data === null || data === void 0 ? void 0 : data.searchUsers.users.map(user => {
          return /*#__PURE__*/jsx_runtime_.jsx(components_User, {
            username: user.username,
            name: `${capitalizeFirstLetter(user.firstName)} ${capitalizeFirstLetter(user.lastName)}`,
            profilePictureUrl: user.profilePictureUrl ? user.profilePictureUrl : undefined,
            children: /*#__PURE__*/jsx_runtime_.jsx(components_UserButtons, {
              addContact: () => handleAddToContacts(Number(user.id)),
              removeContact: () => handleRemoveFromContacts(Number(user.id)),
              isContact: !!contactsData.getContacts.find(contact => Number(contact.id) === Number(user.id)),
              isCurrentUser: Number(user.id) === Number(currentUser.id)
            })
          }, `searched-user-id-${user.id}`);
        }))
      }), (data === null || data === void 0 ? void 0 : data.searchUsers.hasMore) && /*#__PURE__*/jsx_runtime_.jsx(components_GetMoreUsersButton, {
        onClick: handleClick,
        children: "More"
      })]
    })]
  });
};

/* harmony default export */ const containers_SearchUsers = (SearchUsers);
;// CONCATENATED MODULE: ./components/HomePageContainer.tsx


const HomePageContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "HomePageContainer__Container",
  componentId: "sc-ra5wsg-0"
})(["display:flex;height:100vh;width:100vw;overflow:hidden;"]);

const HomePageContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(HomePageContainer_Container, {
    children: children
  });
};

/* harmony default export */ const components_HomePageContainer = (HomePageContainer);
;// CONCATENATED MODULE: ./components/HomeSidebarContainer.tsx


const HomeSidebarContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "HomeSidebarContainer__Container",
  componentId: "sc-bi9z8y-0"
})(["flex:40%;position:relative;min-width:330px;border-right:1px solid ", ";", ";"], ({
  theme
}) => theme.globalTheme.greyLineColor, ({
  theme
}) => theme.homePageTheme.mediumScreen`
  flex: 35%;
`);

const HomeSidebarContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(HomeSidebarContainer_Container, {
    children: children
  });
};

/* harmony default export */ const components_HomeSidebarContainer = (HomeSidebarContainer);
;// CONCATENATED MODULE: ./components/HomeChatContainer.tsx


const HomeChatContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "HomeChatContainer__Container",
  componentId: "sc-jt4c5n-0"
})(["flex:60%;position:relative;", ";"], ({
  theme
}) => theme.homePageTheme.mediumScreen`
    flex: 65%;
  `);

const HomeChatContainer = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(HomeChatContainer_Container, {
    children: children
  });
};

/* harmony default export */ const components_HomeChatContainer = (HomeChatContainer);
;// CONCATENATED MODULE: ./pages/index.tsx






















const Home = () => {
  const client = (0,client_.useApolloClient)();
  const router = (0,router_.useRouter)();
  const {
    data,
    loading,
    error
  } = (0,graphql/* useGetCurrentUserQuery */.XC)();
  const {
    0: chatId,
    1: setChatId
  } = (0,external_react_.useState)(null);
  const {
    0: selectedContacts,
    1: setSelectedContacts
  } = (0,external_react_.useState)([]);
  const {
    0: selectedChat,
    1: setSelectedChat
  } = (0,external_react_.useState)();
  const {
    0: tab,
    1: setTab
  } = (0,external_react_.useState)(1);
  const [getChatQuery, {
    data: newChatData
  }] = (0,graphql/* useGetChatLazyQuery */.LN)();
  const [logout, {
    data: logoutData,
    loading: logoutLoading,
    error: logoutError
  }] = (0,graphql/* useLogoutMutation */._y)();
  (0,graphql/* useNewMessageSubscription */.bn)({
    onSubscriptionData: ({
      client,
      subscriptionData
    }) => {
      var _subscriptionData$dat;

      if (subscriptionData !== null && subscriptionData !== void 0 && (_subscriptionData$dat = subscriptionData.data) !== null && _subscriptionData$dat !== void 0 && _subscriptionData$dat.newMessage && data !== null && data !== void 0 && data.currentUser) {
        const newMessage = subscriptionData.data.newMessage;
        const chatData = client.readQuery({
          query: graphql/* GetChatsDocument */.bs
        });

        if (chatData) {
          const getChats = chatData.getChats;
          const chatIsNotInCache = getChats.filter(chat => Number(chat.id) === Number(newMessage.chatId)).length === 0;

          if (!getChats || chatIsNotInCache) {
            var _subscriptionData$dat2;

            getChatQuery({
              variables: {
                chatId: subscriptionData === null || subscriptionData === void 0 ? void 0 : (_subscriptionData$dat2 = subscriptionData.data) === null || _subscriptionData$dat2 === void 0 ? void 0 : _subscriptionData$dat2.newMessage.chatId,
                limit: 1
              }
            });
          }
        }
      }
    }
  });
  (0,external_react_.useEffect)(() => {
    if (newChatData) {
      const {
        getChats
      } = client.readQuery({
        query: graphql/* GetChatsDocument */.bs
      });
      const chatIsNotInCache = getChats.filter(chat => Number(chat.id) === Number(newChatData.getChat.id)).length === 0;

      if (chatIsNotInCache) {
        client.writeQuery({
          query: graphql/* GetChatsDocument */.bs,
          data: {
            getChats: [newChatData.getChat, ...getChats]
          }
        });
      }
    }
  }, [newChatData, client]);

  const handleClick = selectedChatId => {
    setChatId(selectedChatId);
  };

  const handleTabChange = tabNumber => {
    setTab(tabNumber);
  };

  const handleSetChat = chat => {
    setSelectedChat(chat);
  };

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Whatsapp Clone"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Generated by create next app"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_HomePageContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(components_QueryResult, {
        error: error || logoutError,
        loading: loading || logoutLoading,
        children: (data === null || data === void 0 ? void 0 : data.currentUser) && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(components_HomeSidebarContainer, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(components_TabContainer, {
              tabIn: tab === 1,
              children: /*#__PURE__*/jsx_runtime_.jsx(containers_Sidebar, {
                currentUser: data.currentUser,
                toContactsTab: () => handleTabChange(2),
                toEditProfileTab: () => handleTabChange(5),
                toSearchUsers: () => handleTabChange(6),
                handleClick: handleClick,
                chatId: chatId,
                handleSetChat: handleSetChat,
                handleLogout: handleLogout
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(components_TabContainer, {
              tabIn: tab === 2,
              children: /*#__PURE__*/jsx_runtime_.jsx(containers_ContactsTab, {
                selectChat: handleClick,
                backToSidebar: () => handleTabChange(1),
                toGroupParticipants: () => handleTabChange(3)
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(components_TabContainer, {
              tabIn: tab === 3,
              children: /*#__PURE__*/jsx_runtime_.jsx(containers_AddGroupParticipants, {
                toContactsTab: () => handleTabChange(2),
                toCreateGroup: () => handleTabChange(4),
                selectedContacts: selectedContacts,
                setSelectedContacts: setSelectedContacts
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(components_TabContainer, {
              tabIn: tab === 4,
              children: /*#__PURE__*/jsx_runtime_.jsx(containers_CreateGroup, {
                toGroupParticipants: () => handleTabChange(3),
                selectedContacts: selectedContacts,
                selectChat: handleClick,
                backToSidebar: () => handleTabChange(1),
                setSelectedContacts: setSelectedContacts
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(components_TabContainer, {
              tabIn: tab === 5,
              children: /*#__PURE__*/jsx_runtime_.jsx(containers_EditProfile, {
                backToSidebar: () => handleTabChange(1)
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(components_TabContainer, {
              tabIn: tab === 6,
              children: /*#__PURE__*/jsx_runtime_.jsx(containers_SearchUsers, {
                backToSidebar: () => handleTabChange(1)
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(components_HomeChatContainer, {
            children: chatId && selectedChat ? /*#__PURE__*/jsx_runtime_.jsx(containers_ChatSection, {
              chatId: chatId,
              chat: selectedChat,
              userId: Number(data.currentUser.id)
            }) : /*#__PURE__*/jsx_runtime_.jsx(components_ChatPlaceholder, {})
          })]
        })
      })
    })]
  });
};

const getServerSideProps = isUserLoggedIn/* userLoggedOut */._;
/* harmony default export */ const pages = (Home);

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

/***/ 4047:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 9137:
/***/ ((module) => {

module.exports = require("@material-ui/system");

/***/ }),

/***/ 2958:
/***/ ((module) => {

module.exports = require("@material-ui/utils");

/***/ }),

/***/ 3536:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4229:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 1683:
/***/ ((module) => {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ 3810:
/***/ ((module) => {

module.exports = require("react-transition-group");

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
var __webpack_exports__ = __webpack_require__.X(0, [426,675,690,879,283], () => (__webpack_exec__(4001)));
module.exports = __webpack_exports__;

})();