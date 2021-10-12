/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../redux/icecream/IcecreamActions";

const Counter3 = function () {
  const numberOfIcecreams = useSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Icecreams Available: {numberOfIcecreams}</h3>
      <button onClick={() => dispatch(buyIcecream(1))}>Buy one</button>
    </div>
  );
};

export default Counter3;
