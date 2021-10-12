/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/CakeActions";

const Counter2 = function () {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Cakes Available: {numberOfCakes}</h3>
      <button onClick={() => dispatch(buyCake())}>Buy one</button>
    </div>
  );
};

export default Counter2;
