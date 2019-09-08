import ActionTypes from '../constants/ActionTypes';

const initialState = {
    msg: {},
    status: null,
    id: null
  }
  
  export default function(state = initialState, action) {
    switch(action.type) {
      case ActionTypes.GET_ERRORS:
        return {
          msg: action.payload.msg.error,
          status: action.payload.status,
          id: action.payload.id
        };
      case ActionTypes.CLEAR_ERRORS:
        return {
          msg: {},
          status: null,
          id: null
        };
      default:
        return state;
    }
  }