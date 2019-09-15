
import axios from 'axios';
import ActionTypes from '../constants/ActionTypes';
import { returnErrors } from '../actions/error';

export const getItems = () => async (dispatch) => {
  dispatch(setItemsLoading());
  await axios
    .get('https://flowrspot-api.herokuapp.com/api/v1/flowers')
    .then(res =>
      {
        dispatch({
            type: ActionTypes.GET_ITEMS,
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
    type: ActionTypes.ITEMS_LOADING
  };
};