import {
  USER_LOADING, 
  USER_LOADED, 
  AUTH_ERROR, 
  REGISTER_SUCCESS,
  REGISTER_FAIL, 
  LOGIN_SUCCESS, 
  LOGIN_FAIL, 
  LOGOUT_SUCCESS 
} from '../constants/ActionTypes';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    isRegistred: null
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case USER_LOADING:
        return {
            ...state,
            isLoading: true
        };
      case USER_LOADED:
        return {
            ...state,
            isAuthenticated: true,
            isLoading: false,
            user: action.payload
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isRegistred: true
        }
      case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.auth_token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false
        };
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
      case REGISTER_FAIL:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false
        };
      default:
        return state;
    }
  }