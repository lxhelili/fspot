
import axios from 'axios';
import { GET_ITEMS, ITEMS_LOADING, SEARCH_ITEMS, FAVORITE_ITEM } from '../constants/ActionTypes';
import { returnErrors } from '../actions/error';
import { tokenConfig } from '../actions/auth';

export const getItems = () => async (dispatch) => {
  dispatch(setItemsLoading());
  await axios
    .get('https://flowrspot-api.herokuapp.com/api/v1/flowers')
    .then(res =>
      {
        dispatch({
            type: GET_ITEMS,
            payload: res.data.flowers
          })
      }
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const searchItems = ({query}) => (dispatch) => {
  dispatch(setItemsLoading());
   axios
    .get(`https://flowrspot-api.herokuapp.com/api/v1/flowers/search?query=${query}`)
    .then(res =>
      {
        dispatch({
            type: SEARCH_ITEMS,
            payload: res.data.flowers
          })
      }
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const makeFavorite = ({id}) => (dispatch) => {
  dispatch(setItemsLoading());
   axios
    .post(`https://flowrspot-api.herokuapp.com/api/v1/flowers/${id}/favorites`, null, tokenConfig())
    .then(res =>
      {
        dispatch({
            type: FAVORITE_ITEM,
            payload: res.data.flowers
          })
      }
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};