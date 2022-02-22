import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux/CakeActions";

import { addNewCake } from "../Redux/CakeActions";

const CakeContainer = (props) => {
  return (
    <div>
      <h3> Count = {props.numOfCakes}</h3>
      <button onClick={props.buyCake}> BUY CAKE</button>
      <button onClick={props.addNewCake}> ADD NEW CAKE</button>
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
  };
};
export default connect(mapStateToProps, mapDisptchToProps)(CakeContainer);
