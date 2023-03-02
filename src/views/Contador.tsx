import React, { useState, useMemo, useCallback } from "react";

const obtentexto = (valor: number) => {
  let suma = 0;
  for (let i = 0; i < 10000000; ++i) {
    let a = 0;
  }
  return `el valor contador es ${valor}`;
};

const miPromesa = () => new Promise(() => console.log("He terminado"));

const Contador = () => {
  const [valor, setValor] = useState(0);
  const [actualizar, setActualizar] = useState(true);

  //solo se llama a obtentexto cuando el "valor" cambia
  // const texto = useMemo(() => obtentexto(valor), [valor]);

  const llamarPRomesa = useCallback(() => miPromesa(), []);
  const obtenTextoCallback = useCallback(() => obtentexto(valor), [valor]);
  const texto = obtenTextoCallback();
  return (
    <div>
      <h1>valor: {valor}</h1>
      <button onClick={() => setValor((val) => val + 1)}>+ valor</button>
      <p> {texto}</p>
      <button onClick={() => setActualizar((prev) => !prev)}>Actualiza</button>
    </div>
  );
};

export default Contador;
