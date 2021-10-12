/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../redux/icecream/IcecreamActions";

const Counter3 = function () {
  const numberOfCakes = useSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Cakes Available: {numberOfCakes}</h3>
      <button onClick={() => dispatch(buyIcecream())}>Buy one</button>
    </div>
  );
};

export default Counter3;
