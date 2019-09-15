import { SHOW_MODAL, HIDE_MODAL } from '../constants/ActionTypes';

export const showModal = ({ modalProps, modalType }) => dispatch => {
  dispatch({
    type: SHOW_MODAL,
    modalProps,
    modalType
  });
}

export const hideModal = () => dispatch => {
  dispatch({
    type: HIDE_MODAL
  });
}