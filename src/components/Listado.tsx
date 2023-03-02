import React, { useState } from "react";

const Listado = ({ lista }: { lista: string[] }) => {
  return (
    <ul>
      {lista.map((entrada, inde) => (
        <li key={inde}>entrada</li>
      ))}
    </ul>
  );
};

export default Listado;
