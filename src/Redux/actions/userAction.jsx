import { OPEN_MODEL } from "../Constant/constant";

export const openModel = (loginStatus) => {
  return {
    type: OPEN_MODEL,
    payload: loginStatus,
  };
};
