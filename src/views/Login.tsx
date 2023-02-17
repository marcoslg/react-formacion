import React, { useState } from "react";
import "./Login.scss";
const Login = () => {
  const [correcto, setCorrecto] = useState(true);
  //https://github.com/JedWatson/classnames
  return (
    <div>
      <h1>login</h1>
      <p style={{ color: correcto ? "blue" : "red", fontSize: "1.2rem" }}>
        Welcome
      </p>
      <button
        className={`btn ${correcto ? "correcto" : "incorrecto"}`}
        onClick={() => setCorrecto((prev) => !prev)}
      >
        Cambia valor
      </button>
    </div>
  );
};

export default Login;
