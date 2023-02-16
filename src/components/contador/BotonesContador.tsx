import React from "react";

interface IBotonesProps {
  resta: (cant?: number) => void;
  suma: (cant?: number) => void;
}
const BotonesContador = ({ resta, suma }: IBotonesProps) => {
  return (
    <div>
      <button onClick={() => resta(5)}>Menos 5 </button>
      <button onClick={() => resta(1)}>Menos</button>
      <button onClick={() => suma()}>Mas</button>
      <button onClick={() => suma(5)}>Mas 5 </button>
    </div>
  );
};

export default BotonesContador;
