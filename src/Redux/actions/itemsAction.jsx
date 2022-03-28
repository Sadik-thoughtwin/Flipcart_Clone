import { ADD_TO_CART, INCREMENT, DECREMENT } from "../Constant/constant";

export const addToCart = (cardItem) => {
  console.log("itemsData", cardItem);
  return {
    type: ADD_TO_CART,
    payload: cardItem,
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

