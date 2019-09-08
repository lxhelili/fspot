import { combineReducers } from 'redux'
import modal from './modal'
import auth from './auth';
import errorReducer from './error';

export default combineReducers({
  modal,
  auth,
  error: errorReducer
})
