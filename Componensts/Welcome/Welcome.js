import React, { useEffect } from "react";
import styles from "./Welcome.modules.scss";
import { Redirect, useHistory } from "react-router-dom";

const Welcome = ({}) => {
  const history = useHistory();

  //   useEffect(()=>{
  //         if(!localStorage.getItem("user_info")){
  //             history.pushState("/Welcome");
  //         }

  //   },[])

  return (
    <React.Fragment>
      <h2>Welcome </h2>
    </React.Fragment>
  );
};
export default Welcome;
