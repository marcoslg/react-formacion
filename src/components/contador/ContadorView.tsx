import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
const ContadorView = () => {
  const contador = useSelector<RootState, number>((state) => state.valor);
  console.log(contador);
  return (
    <div>
      <h1>ContadorView</h1>
      <p> valor {contador} </p>
    </div>
  );
};

export default ContadorView;
