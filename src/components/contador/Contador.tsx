import React, { useState } from "react";
import BotonesContador from "./BotonesContador";
import DisplayContador from "./DisplayConador";
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
      <DisplayContador valor={value} />
      <BotonesContador resta={resta} suma={suma} />
    </>
  );
};

export default Contador;
