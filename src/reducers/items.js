import { GET_ITEMS, ITEMS_LOADING} from '../constants/ActionTypes';

const initialState = {
  flowers: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        flowers: action.payload,
        loading: false
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
