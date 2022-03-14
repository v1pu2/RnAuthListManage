import {GET_USER, SET_USER, UPDATE_USER} from './Types';

export const getUser = () => async dispatch => {
  //   console.log('call get event data********');

  dispatch({
    type: GET_USER,
    // payload: data,
  });
};


export const setUser = data => async dispatch => {
  console.log('call set event data********', data);

  dispatch({
    type: SET_USER,
    payload: data,
  });
};
export const updateUser = data => async dispatch => {
  console.log('call set event data********', data);

  dispatch({
    type: UPDATE_USER,
    payload: data,
  });
};
