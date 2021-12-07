import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import service from "../api/service";
import rVal from "../utils/inputValidator";

import "../styles/Login.scss";

const Login = ({children}) => {
  const inputChangeHandler = (e) => {
    setInputVals({ ...inputVals, [e.target.name]: e.target.value });
  };

  const [emailErr, setEmailErr] = useState(false);
  const [inputVals, setInputVals] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const inputValidator = () => {
    setEmailErr(rVal.checkEmail(inputVals.email));

    if (inputVals.email) {
      //service.login(inputVals);
      pageChanger();
    }
  };

  const pageChanger = () => {
    navigate("/warehouses");
  };

  return (
    <div className="app-login">
      <div className="app-login__main">
        <input
          name="email"
          placeholder="Enter email"
          onChange={inputChangeHandler}
          value={inputVals.email}
        />
        {emailErr === 0 && <span>Invalid email</span>}
        <input
          name="password"
          placeholder="Enter password"
          type="password"
          onChange={inputChangeHandler}
          value={inputVals.password}
        />

        <button onClick={inputValidator}>Sign up</button>
      {children}
      </div>
    </div>
  );
};

export default Login;
