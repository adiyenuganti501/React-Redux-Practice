import React, { useState } from "react";
import styles from "./Login.module.scss";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

//import { Col, Row,Container } from 'react-bootstrap';

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [mobileValidation, setMobileValidation] = useState("");
  const fcm_id = "123-21-2-1-2-1-2-1-2--12--1-2-1-2-1-2";
  const history = useHistory();

  async function loginFunction() {
    if (mobile.length > 0 && password.length > 0) {
      setError("");

      console.log(mobile, password, fcm_id);

      let item = { mobile, password, fcm_id };
      let result = await fetch(
        "http://ec2-35-154-68-115.ap-south-1.compute.amazonaws.com:4040/api/v1/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(item),
        }
      );
      result = await result.json();

      if (!result.error) {
        history.push("/welcome");
        localStorage.setItem("user_info", JSON.stringify(result));
      } else {
        setError(result.msg);
      }
    } else {
      setError("Please enter Username and Password");
    }
  }

  return (
    <React.Fragment>
      <h1> Login Page </h1>
      <header className={styles.login_card}>
        <div className="login_card_body">
          <div>
            <label>Username </label> <br />
            <input
              className={styles.heighttext}
              placeholder="Username"
              onChange={(e) => setMobile(e.target.value)}
              type="text"
            />
          </div>
          {/* <div className={styles.error}>{mobileValidation} </div> */}
          <br />
          <div>
            <label>Password </label> <br />
            <input
              className={styles.heighttext}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              type="Password"
            />
          </div>
        </div>
        <section>
          <br />

          <div>
            {" "}
            <label>
              {" "}
              <input
                type="button"
                onClick={loginFunction}
                value="Login "
              />{" "}
            </label>{" "}
          </div>
          <br />
          <div className={styles.error}>{error} </div>
        </section>
      </header>
    </React.Fragment>
  );
};
export default Login;
