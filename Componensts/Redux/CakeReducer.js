import { BUY_CAKE } from "./CakeTypes";
import { ADD_NEW_CAKE, MULTIPLY } from "./CakeTypes";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case ADD_NEW_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
    case MULTIPLY:
      return {
        ...state,
        numOfCakes: state.numOfCakes * 2,
      };
    default:
      return state;
  }
};
export default cakeReducer;
