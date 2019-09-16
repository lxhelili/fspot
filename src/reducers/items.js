import { GET_ITEMS, ITEMS_LOADING, SEARCH_ITEMS, FAVORITE_ITEM} from '../constants/ActionTypes';

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
    case SEARCH_ITEMS:
      return {
        ...state,
        flowers: action.payload,
        loading: false
      };
    case FAVORITE_ITEM: 
      return {
        ...state,
        flowers: [action.payload, ...state.items]
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
