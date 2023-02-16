import React, { useState } from "react";

type TContadorProps = {
  initialValue?: number;
};
const Contador = ({ initialValue }: TContadorProps) => {
  const [value, setValue] = useState(initialValue || 0);

  //   let value = initialValue || 0;

  const resta = (cant: number = 1) => {
    if (value > 0) {
      setValue((anterior) => {
        if (anterior - cant < 0) {
          return 0;
        }
        return anterior - cant;
      });
    }
  };

  const suma = (cant: number = 1) => {
    setValue((anterior) => anterior + cant);
  };

  return (
    <>
      <h3>{value}</h3>
      <div>
        <button onClick={() => resta(5)}>Menos 5 </button>
        <button onClick={() => resta(1)}>Menos</button>
        <button onClick={() => suma()}>Mas</button>
        <button onClick={() => suma(5)}>Mas 5 </button>
      </div>
    </>
  );
};

export default Contador;
