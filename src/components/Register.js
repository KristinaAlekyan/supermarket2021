import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import service from "../api/service";
import rVal from "../utils/inputValidator";

import "../styles/Register.scss";

const Register = ({children}) => {
  const [errorNum, setErrorNum] = useState(0);
  const [inputVals, setInputVals] = useState({
    name: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const inputChangeHandler = (e) => {
    setInputVals({ ...inputVals, [e.target.name]: e.target.value });
  };

  const inputValidator = () => {
    let credentials = {
      name: inputVals.name,
      email: inputVals.email,
      password: inputVals.password,
    };

    let res = rVal.checkRegCred(credentials);

    if (res === 1) {
      setErrorNum(0);
      //service.register(credentials);
      pageChanger();
    }
    setErrorNum(res);
  };

  const pageChanger = () => {
    navigate("/warehouses");
  };

  return (
    <div className="app-register">
      <div className="app-register__main">
        In development

        <input
          name="name"
          placeholder="Enter username"
          onChange={inputChangeHandler}
          value={inputVals.name}
        />
        {errorNum === 2 && <span>No names longer than 9 characters</span>}
        <input
          name="email"
          placeholder="Enter email"
          onChange={inputChangeHandler}
          value={inputVals.email}
        />
        {errorNum === 3 && <span>Invalid email</span>}
        <input
          name="password"
          placeholder="Enter password"
          type="password"
          onChange={inputChangeHandler}
          value={inputVals.password}
        />
        {errorNum === 4 && (
          <span>
            Password must contain capital letter, number and be at least 8
            digits long
          </span>
        )}
        <button onClick={inputValidator}>Sign up</button>
      {children}
      </div>
    </div>
  );
};

export default Register;
