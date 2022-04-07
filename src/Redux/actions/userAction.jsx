import { OPEN_MODEL, CLOSE_MODEL } from "../Constant/constant";

export const openModel = (openBox) => {
  return {
    type: OPEN_MODEL,
    payload: openBox,
  };
};

export const closeModel = (closeBox) => {
  return {
    type: CLOSE_MODEL,
    payload: closeBox,
  };
};
