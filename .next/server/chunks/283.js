"use strict";
exports.id = 283;
exports.ids = [283];
exports.modules = {

/***/ 7804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const FormElement = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "Form__FormElement",
  componentId: "sc-1y9ul38-0"
})(["width:100%;height:100%;"]);

const Form = ({
  children,
  onSubmit
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(FormElement, {
    onSubmit: onSubmit,
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ 5051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Uj": () => (/* binding */ ChatFragmentFragmentDoc),
/* harmony export */   "Km": () => (/* binding */ useAddToContactsMutation),
/* harmony export */   "kx": () => (/* binding */ useCreateChatMutation),
/* harmony export */   "kf": () => (/* binding */ useEditProfileMutation),
/* harmony export */   "YA": () => (/* binding */ useLoginMutation),
/* harmony export */   "_y": () => (/* binding */ useLogoutMutation),
/* harmony export */   "l4": () => (/* binding */ useRegisterMutation),
/* harmony export */   "px": () => (/* binding */ useRemoveFromContactsMutation),
/* harmony export */   "at": () => (/* binding */ useSendMessageMutation),
/* harmony export */   "LN": () => (/* binding */ useGetChatLazyQuery),
/* harmony export */   "bs": () => (/* binding */ GetChatsDocument),
/* harmony export */   "zj": () => (/* binding */ useGetChatsQuery),
/* harmony export */   "$0": () => (/* binding */ GetContactsDocument),
/* harmony export */   "wY": () => (/* binding */ useGetContactsQuery),
/* harmony export */   "W$": () => (/* binding */ GetCurrentUserDocument),
/* harmony export */   "XC": () => (/* binding */ useGetCurrentUserQuery),
/* harmony export */   "E0": () => (/* binding */ useGetMessagesQuery),
/* harmony export */   "Te": () => (/* binding */ useGetPresignedUrlLazyQuery),
/* harmony export */   "OV": () => (/* binding */ useSearchUsersLazyQuery),
/* harmony export */   "u9": () => (/* binding */ NewMessageDocument),
/* harmony export */   "bn": () => (/* binding */ useNewMessageSubscription)
/* harmony export */ });
/* unused harmony exports MessageFragmentFragmentDoc, AddToContactsDocument, CreateChatDocument, EditProfileDocument, LoginDocument, LogoutDocument, RegisterDocument, RemoveFromContactsDocument, SendMessageDocument, GetChatDocument, useGetChatQuery, useGetChatsLazyQuery, useGetContactsLazyQuery, useGetCurrentUserLazyQuery, GetMessagesDocument, useGetMessagesLazyQuery, GetPresignedUrlDocument, useGetPresignedUrlQuery, SearchUsersDocument, useSearchUsersQuery, GetUsersDocument, useGetUsersQuery, useGetUsersLazyQuery */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8074);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */

const ChatFragmentFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    fragment ChatFragment on Chat {
  id
  groupAvatarUrl
  groupName
  updatedAt
  members {
    id
    firstName
    lastName
    profilePictureUrl
  }
  messages(limit: $limit, cursor: $cursor) {
    id
    text
    createdAt
    user {
      id
    }
  }
}
    `;
const MessageFragmentFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    fragment MessageFragment on Message {
  id
  text
  imageUrl
  chatId
  createdAt
  user {
    id
    firstName
    lastName
  }
}
    `;
const AddToContactsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation AddToContacts($contactId: Int!) {
  addToContacts(contactId: $contactId) {
    contact {
      id
      firstName
      lastName
      about
      profilePictureUrl
    }
  }
}
    `;

/**
 * __useAddToContactsMutation__
 *
 * To run a mutation, you first call `useAddToContactsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToContactsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToContactsMutation, { data, loading, error }] = useAddToContactsMutation({
 *   variables: {
 *      contactId: // value for 'contactId'
 *   },
 * });
 */
function useAddToContactsMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(AddToContactsDocument, options);
}
const CreateChatDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation CreateChat($userIds: [Int!]!, $groupName: String, $limit: Int!, $cursor: String, $groupAvatarUrl: String) {
  createChat(
    userIds: $userIds
    groupName: $groupName
    groupAvatarUrl: $groupAvatarUrl
  ) {
    ...ChatFragment
  }
}
    ${ChatFragmentFragmentDoc}`;

/**
 * __useCreateChatMutation__
 *
 * To run a mutation, you first call `useCreateChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatMutation, { data, loading, error }] = useCreateChatMutation({
 *   variables: {
 *      userIds: // value for 'userIds'
 *      groupName: // value for 'groupName'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      groupAvatarUrl: // value for 'groupAvatarUrl'
 *   },
 * });
 */
function useCreateChatMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(CreateChatDocument, options);
}
const EditProfileDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation EditProfile($profilePictureUrl: String, $firstName: String!, $lastName: String!, $username: String!, $about: String) {
  editProfile(
    profilePictureUrl: $profilePictureUrl
    firstName: $firstName
    lastName: $lastName
    username: $username
    about: $about
  ) {
    id
    firstName
    lastName
    username
    about
    profilePictureUrl
  }
}
    `;

/**
 * __useEditProfileMutation__
 *
 * To run a mutation, you first call `useEditProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProfileMutation, { data, loading, error }] = useEditProfileMutation({
 *   variables: {
 *      profilePictureUrl: // value for 'profilePictureUrl'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      username: // value for 'username'
 *      about: // value for 'about'
 *   },
 * });
 */
function useEditProfileMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(EditProfileDocument, options);
}
const LoginDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation Login($options: LoginInput!) {
  login(options: $options) {
    ok
    user {
      id
      email
      username
      updatedAt
      createdAt
    }
    errors {
      field
      message
    }
  }
}
    `;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
function useLoginMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(LoginDocument, options);
}
const LogoutDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation Logout {
  logout
}
    `;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
function useLogoutMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(LogoutDocument, options);
}
const RegisterDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation Register($options: RegisterInput!) {
  register(options: $options) {
    ok
    user {
      id
      email
      username
      updatedAt
      createdAt
    }
    errors {
      field
      message
    }
  }
}
    `;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
function useRegisterMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(RegisterDocument, options);
}
const RemoveFromContactsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation RemoveFromContacts($contactId: Int!) {
  removeFromContacts(contactId: $contactId)
}
    `;

/**
 * __useRemoveFromContactsMutation__
 *
 * To run a mutation, you first call `useRemoveFromContactsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromContactsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromContactsMutation, { data, loading, error }] = useRemoveFromContactsMutation({
 *   variables: {
 *      contactId: // value for 'contactId'
 *   },
 * });
 */
function useRemoveFromContactsMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(RemoveFromContactsDocument, options);
}
const SendMessageDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation SendMessage($chatId: Int!, $text: String!, $imageUrl: String) {
  sendMessage(chatId: $chatId, text: $text, imageUrl: $imageUrl) {
    ...MessageFragment
  }
}
    ${MessageFragmentFragmentDoc}`;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *      text: // value for 'text'
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
function useSendMessageMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(SendMessageDocument, options);
}
const GetChatDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetChat($chatId: Int!, $limit: Int!, $cursor: String) {
  getChat(chatId: $chatId) {
    ...ChatFragment
  }
}
    ${ChatFragmentFragmentDoc}`;
/**
 * __useGetChatQuery__
 *
 * To run a query within a React component, call `useGetChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatQuery({
 *   variables: {
 *      chatId: // value for 'chatId'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */

function useGetChatQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return Apollo.useQuery(GetChatDocument, options);
}
function useGetChatLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery(GetChatDocument, options);
}
const GetChatsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetChats($limit: Int!, $cursor: String) {
  getChats {
    ...ChatFragment
  }
}
    ${ChatFragmentFragmentDoc}`;
/**
 * __useGetChatsQuery__
 *
 * To run a query within a React component, call `useGetChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */

function useGetChatsQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(GetChatsDocument, options);
}
function useGetChatsLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return Apollo.useLazyQuery(GetChatsDocument, options);
}
const GetContactsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetContacts {
  getContacts {
    id
    firstName
    lastName
    about
    profilePictureUrl
  }
}
    `;
/**
 * __useGetContactsQuery__
 *
 * To run a query within a React component, call `useGetContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactsQuery({
 *   variables: {
 *   },
 * });
 */

function useGetContactsQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(GetContactsDocument, options);
}
function useGetContactsLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return Apollo.useLazyQuery(GetContactsDocument, options);
}
const GetCurrentUserDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetCurrentUser {
  currentUser {
    id
    username
    firstName
    lastName
    about
    profilePictureUrl
  }
}
    `;
/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */

function useGetCurrentUserQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(GetCurrentUserDocument, options);
}
function useGetCurrentUserLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return Apollo.useLazyQuery(GetCurrentUserDocument, options);
}
const GetMessagesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetMessages($chatId: Int!, $limit: Int!, $cursor: String) {
  getMessages(chatId: $chatId, limit: $limit, cursor: $cursor) {
    hasMore
    messages {
      ...MessageFragment
    }
  }
}
    ${MessageFragmentFragmentDoc}`;
/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *      chatId: // value for 'chatId'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */

function useGetMessagesQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(GetMessagesDocument, options);
}
function useGetMessagesLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return Apollo.useLazyQuery(GetMessagesDocument, options);
}
const GetPresignedUrlDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetPresignedUrl {
  getPresignedUrl {
    presignedUrl
    key
  }
}
    `;
/**
 * __useGetPresignedUrlQuery__
 *
 * To run a query within a React component, call `useGetPresignedUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPresignedUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPresignedUrlQuery({
 *   variables: {
 *   },
 * });
 */

function useGetPresignedUrlQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return Apollo.useQuery(GetPresignedUrlDocument, options);
}
function useGetPresignedUrlLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery(GetPresignedUrlDocument, options);
}
const SearchUsersDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query SearchUsers($searchTerm: String!, $limit: Int!, $page: Int!) {
  searchUsers(searchTerm: $searchTerm, limit: $limit, page: $page) {
    hasMore
    users {
      id
      firstName
      lastName
      username
      profilePictureUrl
    }
  }
}
    `;
/**
 * __useSearchUsersQuery__
 *
 * To run a query within a React component, call `useSearchUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUsersQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *   },
 * });
 */

function useSearchUsersQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return Apollo.useQuery(SearchUsersDocument, options);
}
function useSearchUsersLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery(SearchUsersDocument, options);
}
const GetUsersDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetUsers {
  users {
    id
    email
    username
    updatedAt
    createdAt
  }
}
    `;
/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */

function useGetUsersQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return Apollo.useQuery(GetUsersDocument, options);
}
function useGetUsersLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return Apollo.useLazyQuery(GetUsersDocument, options);
}
const NewMessageDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    subscription NewMessage {
  newMessage {
    ...MessageFragment
  }
}
    ${MessageFragmentFragmentDoc}`;
/**
 * __useNewMessageSubscription__
 *
 * To run a query within a React component, call `useNewMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessageSubscription({
 *   variables: {
 *   },
 * });
 */

function useNewMessageSubscription(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useSubscription(NewMessageDocument, options);
}

/***/ }),

/***/ 9136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ userLoggedOut),
/* harmony export */   "n": () => (/* binding */ userLoggedIn)
/* harmony export */ });
/* harmony import */ var _createApolloClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4574);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5051);


const userLoggedOut = async ({
  req,
  res
}) => {
  const cookies = req.cookies;
  const cookieName = Object.keys(cookies);
  let cookie = "";
  cookieName.forEach(c => {
    const newCookie = ` ${c}=${cookies[c]};`;
    cookie = cookie + newCookie;
  });

  try {
    const result = await (0,_createApolloClient__WEBPACK_IMPORTED_MODULE_0__/* .createApolloClient */ .n)({
      cookie
    }).query({
      query: _generated_graphql__WEBPACK_IMPORTED_MODULE_1__/* .GetCurrentUserDocument */ .W$
    });

    if (!result.data.currentUser) {
      res.writeHead(301, {
        Location: "/login"
      });
      res.end();
    }

    return {
      props: {}
    };
  } catch (e) {
    res.writeHead(301, {
      Location: "/login"
    });
    res.end();
    return {
      props: {}
    };
  }
};
const userLoggedIn = async ({
  req,
  res
}) => {
  const cookies = req.cookies;
  const cookieName = Object.keys(cookies);
  let cookie = "";
  cookieName.forEach(c => {
    const newCookie = ` ${c}=${cookies[c]};`;
    cookie = cookie + newCookie;
  });

  try {
    const result = await (0,_createApolloClient__WEBPACK_IMPORTED_MODULE_0__/* .createApolloClient */ .n)({
      cookie
    }).query({
      query: _generated_graphql__WEBPACK_IMPORTED_MODULE_1__/* .GetCurrentUserDocument */ .W$
    });

    if (result.data.currentUser) {
      res.writeHead(301, {
        Location: "/"
      });
      res.end();
    }

    return {
      props: {}
    };
  } catch (e) {
    return {
      props: {}
    };
  }
};

/***/ })

};
;