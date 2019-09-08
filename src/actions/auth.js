import axios from 'axios';
import ActionTypes from '../constants/ActionTypes';
import { returnErrors } from './error';
//Check token & load user
export const loadUser = () => (dispatch) => {
  // User loading
  dispatch({ type: ActionTypes.USER_LOADING });

  axios
    .get('https://flowrspot-api.herokuapp.com/api/v1/users/me', tokenConfig())
    .then(res => {
      dispatch({
        type: ActionTypes.USER_LOADED,
        payload: res.data.user
      })
    }
      
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: ActionTypes.AUTH_ERROR
      });
    });
};

// Register User
export const register = ({ email, password, first_name, last_name, date_of_birth }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ email, password, first_name, last_name, date_of_birth });

  axios
    .post('https://flowrspot-api.herokuapp.com/api/v1/users/register', body, config)
    .then(res =>
      dispatch({
        type: ActionTypes.REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: ActionTypes.REGISTER_FAIL
      });
    });
};

// Login User
export const login = ({ email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post('https://flowrspot-api.herokuapp.com/api/v1/users/login', body, config)
    .then(res => {
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: res.data
      });
    }
      
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: ActionTypes.LOGIN_FAIL
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS
  };
};

// Setup config/headers and token
export const tokenConfig = () => {
  // Get token from localstorage
  const token = localStorage.getItem('token');

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['Authorization'] = token;
  }

  return config;
};