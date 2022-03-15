import {ADD_ITEM, GET_ITEM_LIST, REMOVE_ITEM} from './Types';

export const addItem = item => {
  console.log('actionitem add items call', item);
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const deleteItem = id => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};

export const getItems = () => {
  console.log('actionitem getitems call');
  return {
    type: GET_ITEM_LIST,
  };
};
