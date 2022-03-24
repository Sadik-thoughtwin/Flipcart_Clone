import React from "react";
import { INCREMENT, DECREMENT } from "../Constant/constant";

const initialState = {
  count: 1,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return [
        ...state,
        {
          state: state + action.payload,
        },
      ];

    case DECREMENT:
      return { state: state - action.payload };

    default:
      return state;
  }
};
export default dataReducer;
