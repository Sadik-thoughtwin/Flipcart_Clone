import { OPEN_MODEL, CLOSE_MODEL } from "../Constant/constant";

export const openModel = (loginStatus) => {
  return {
    type: OPEN_MODEL,
    payload: loginStatus,
  };
};
