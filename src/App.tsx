/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Contador from "views/Contador";
import "./App.scss";

function App() {
  const [miEstado, setMiEstado] = useState("hola mundo");
  return (
    <>
      <Contador />
    </>
  );
}

export default App;
