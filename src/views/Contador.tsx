import ContadorView from "components/contador/ContadorView";
import ContadorControls from "components/contador/ContadorControls";
import React from "react";

const Contador = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ContadorView />
      <ContadorControls />
    </div>
  );
};

export default Contador;
