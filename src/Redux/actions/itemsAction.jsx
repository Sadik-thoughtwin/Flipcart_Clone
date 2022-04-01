import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  INCREMENT,
  DECREMENT,
} from "../Constant/constant";

export const addToCart = (cardItem) => {
  return {
    type: ADD_TO_CART,
    payload: cardItem,
  };
};
export const removeToCart = (id) => {
  return {
    type: REMOVE_TO_CART,
    payload: id,
  };
};

export const increment = (id) => {
  return {
    type: INCREMENT,
    payload: id,
  };
};

export const decrement = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};
