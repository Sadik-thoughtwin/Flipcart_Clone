import { OPEN_MODEL, CLOSE_MODEL } from "../Constant/constant";

const initialState = {
  openModel: false,
  closeModel: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODEL:
      return {
        ...state,
        openModel: action.payload,
      };
    case CLOSE_MODEL:
      return {
        ...state,
        closeModel: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
