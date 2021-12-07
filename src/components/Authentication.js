import React, { useState } from "react";

import Register from "./Register";
import Login from "./Login";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <Login>
          <button onClick={() => setIsLogin(!isLogin)}>
            Don't have an account
          </button>
        </Login>
      ) : (
        <Register>
          <button onClick={() => setIsLogin(!isLogin)}>
            Already have an account?
          </button>
        </Register>
      )}
    </>
  );
};

export default Authentication;
