import { ADD_TO_CART, INCREMENT, DECREMENT } from "../Constant/constant";
const initialState = [
  
];
export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const cardData = action.payload;
      return [...state, { ...cardData }];

    case INCREMENT:
      state.map((addQuatity) => {
        if (addQuatity.id === action.payload) {
          addQuatity.quantity = addQuatity.quantity + 1;
          return { ...addQuatity };
        }
        return addQuatity;
      });
      return [...state];

    case DECREMENT:
      const updatedList = state.map((newEle) => {
          if (newEle.id === action.payload) {
            newEle.quantity = newEle.quantity - 1;
            return { ...newEle };
          }
          return newEle;
        })
        .filter((newEle) => {
          return newEle.quantity !== 0;
        });
      return [...updatedList];

    default:
      return state;
  }
};
