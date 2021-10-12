import { BUY_CAKE } from "./CakeConstants";

const initialState = {
  numberOfCakes: 10,
};

const CakeReducer = function (state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

export default CakeReducer;
