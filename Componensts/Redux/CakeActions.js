import { BUY_CAKE } from "./CakeTypes";
import { ADD_NEW_CAKE } from "./CakeTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export const addNewCake = () => {
  return {
    type: ADD_NEW_CAKE,
  };
};
