import {GET_USER, SET_USER, LOG_IN, LOG_OUT} from '../Actions/Types';

const initialState = {
  users: [],
  userDetail: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        userDetail: action.payload,
      };
    case LOG_IN:
      return {
        ...state,
        isLogin: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
