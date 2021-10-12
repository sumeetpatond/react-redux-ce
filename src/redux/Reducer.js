import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import IcecreamReducer from "./icecream/IcecreamReducer";

const Reducer = combineReducers({
  cake: CakeReducer,
  icecream: IcecreamReducer,
});

export default Reducer;
