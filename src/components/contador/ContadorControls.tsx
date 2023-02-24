import React from "react";
import { useDispatch } from "react-redux";
import { incrementa, decrementa } from "features/contador/ContadorSlice";
const ContadorControls = () => {
  const dispatch = useDispatch();
  const menos = (val: number = 1) => {
    dispatch(decrementa(val));
  };
  const mas = (val: number = 1) => {
    dispatch(incrementa(val));
  };
  return (
    <div>
      <button onClick={() => menos()}>Menos</button>
      <button onClick={() => mas(2)}>Mas</button>
    </div>
  );
};

export default ContadorControls;
