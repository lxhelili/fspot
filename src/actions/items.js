
import axios from 'axios';
import { GET_ITEMS, ITEMS_LOADING } from '../constants/ActionTypes';
import { returnErrors } from '../actions/error';

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

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};