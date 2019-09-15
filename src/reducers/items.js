import ActionTypes from '../constants/ActionTypes';

const initialState = {
  flowers: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_ITEMS:
      return {
        ...state,
        flowers: action.payload,
        loading: false
      };
    case ActionTypes.ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
