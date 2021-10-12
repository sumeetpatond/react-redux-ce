import { BUY_ICECREAM } from "./IcecreamConstants";

const initialState = {
  numberOfIcecreams: 10,
};

const IcecreamReducer = function (state = initialState, action) {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - 1,
      };
    default:
      return state;
  }
};

export default IcecreamReducer;
