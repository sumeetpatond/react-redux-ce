/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/CakeActions";

const Counter1 = function ({ numberOfCakes, buyCake }) {
  return (
    <div>
      <h3>Cakes Available: {numberOfCakes}</h3>
      <button onClick={buyCake}>Buy one</button>
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter1);
