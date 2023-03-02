// import FormularioLista from "components/FormularioLista";
import Listado from "components/Listado";
import Saludo from "components/Saludo";
import React, { useState } from "react";

const Lista = () => {
  const [lista, setLista] = useState([]);
  return (
    <div>
      {/* <FormularioLista /> */}
      <Listado lista={lista} />
      <Saludo lista={lista} />
    </div>
  );
};

export default Lista;
