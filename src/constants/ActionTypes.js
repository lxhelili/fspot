import keyMirror from 'keymirror';

const ActionTypes = keyMirror({
  HIDE_MODAL: null,
  SHOW_MODAL: null,
  AUTH_ERROR: null,
  LOGIN_USER: null,
  LOGIN_SUCCESS: null,
  LOGIN_FAIL: null,
  LOGOUT_SUCCESS: null,
  REGISTER_SUCCESS: null,
  REGISTER_FAIL: null,
  USER_LOADING: null,
  USER_LOADED: null,
  GET_ERRORS: null,
  CLEAR_ERRORS: null
});

export default ActionTypes;