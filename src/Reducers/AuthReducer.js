import {GET_USER, SET_USER, UPDATE_USER} from '../Actions/Types';

const initialState = {
  users: [],
  userDetail: {},
};

const authReducer = (state = initialState, action) => {
  console.log('in reducer--action--', action);
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
    case UPDATE_USER:
      return {
        ...state,
        userDetail: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
