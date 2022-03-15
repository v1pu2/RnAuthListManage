import {ADD_ITEM, GET_ITEM_LIST, REMOVE_ITEM} from '../Actions/Types';

const initialState = {
  items: [],
};

let id = 0;
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newitem = {
        id: ++id,
        value: action.payload,
      };
      return {
        ...state,
        items: state.items.concat(newitem),
      };

    case REMOVE_ITEM:
      let newArr = state?.items;
      return {
        ...state,
        items: newArr.filter(item => item?.id !== action.payload),
      };

    case GET_ITEM_LIST:
      return state;

    default:
      return state;
  }
};

export default listReducer;
