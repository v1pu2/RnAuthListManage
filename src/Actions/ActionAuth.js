import {GET_USER, LOG_IN, LOG_OUT, SET_USER} from './Types';

export const getUser = () => async dispatch => {
  dispatch({
    type: GET_USER,
  });
};
export const logIn = () => async dispatch => {
  dispatch({
    type: LOG_IN,
    payload: true,
  });
};
export const logOut = () => async dispatch => {
  dispatch({
    type: LOG_OUT,
    payload: false,
  });
};
export const setUser = data => async dispatch => {
  dispatch({
    type: SET_USER,
    payload: data,
  });
};

