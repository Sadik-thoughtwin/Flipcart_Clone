import { SIGN_OPEN } from "../Constant/constant";

export const signmodelopen = (signopenBox) => {
   return {
    type: SIGN_OPEN,
    payload: signopenBox,
  };
};
