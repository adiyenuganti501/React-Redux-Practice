import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux/CakeActions";

import { addNewCake, Multiply } from "../Redux/CakeActions";

const CakeContainer = (props) => {
  return (
    <div>
      <h3> Count = {props.numOfCakes}</h3>
      <button onClick={props.buyCake}> BUY CAKE</button>
      <button onClick={props.addNewCake}> ADD NEW CAKE</button>
      <button onClick={props.Multiply}>MULTIPLY</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDisptchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    addNewCake: () => dispatch(addNewCake()),
    Multiply: () => dispatch(Multiply()),
  };
};
export default connect(mapStateToProps, mapDisptchToProps)(CakeContainer);
