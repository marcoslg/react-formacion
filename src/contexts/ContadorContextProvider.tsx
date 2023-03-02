import { NullableContext, IContadorContext } from "models";
import React, { createContext, useReducer } from "react";

export const ContadorContext = createContext<NullableContext<IContadorContext>>(
  {}
);
const contadorReducer = (
  state: IContadorContext,
  action: { payload: any; type: any }
) => {
  switch (action.type) {
    case "increment":
      return { ...state, valor: state.valor + 1 };
    case "dencrement":
      return { ...state, valor: state.valor - 1 };
    case "reset":
      return { ...state, valor: 0 };
  }
};

const contadorInicial: IContadorContext = {
  valor: 0,
};
const ContadorContextProvider = ({ children }: any) => {
  //@ts-ignore
  const [contador, dispathContador] = useReducer(
    contadorReducer,
    contadorInicial
  );
  return <ContadorContext.Provider value={{}} children={children} />;
};

export default ContadorContextProvider;
