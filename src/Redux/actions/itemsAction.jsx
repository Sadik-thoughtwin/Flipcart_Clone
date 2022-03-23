import { ADD_TO_CART, REMOVE_TO_CART } from "../Constant/constant";

export const addToCart = (cartItem) => {
  return {
    type: ADD_TO_CART,
    payload: cartItem,
  };
};

export const removeToCart = (cartItem) => {
  return {
    type: REMOVE_TO_CART,
    payload: cartItem
  };
};
