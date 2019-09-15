import { combineReducers } from 'redux'
import modal from './modal'
import auth from './auth';
import errorReducer from './error';
import items from './items';

export default combineReducers({
  modal,
  auth,
  error: errorReducer,
  items
})
