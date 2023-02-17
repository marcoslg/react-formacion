import React, { useState, useEffect } from "react";

const ComFunctCiclo = () => {
  let [miVariable, setMiVariable] = useState(true);
  useEffect(() => {
    console.log("ComFunctCiclo se ha actualizado");
  }, [miVariable]);

  useEffect(() => {
    console.log("ComFunctCiclo se ha ejecutado");
    return () => {
      console.log("ComFunctCiclo se va ha desmontar");
    };
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          console.time("mi contador");

          const alumnos = [
            { nombre: "marc", edad: 12 },
            { nombre: "marc os", edad: 122 },
            { nombre: "marcos", edad: 132 },
          ];
          console.table(alumnos);
          console.log("alumnos", alumnos);
          console.log({ alumnos });
          setMiVariable((val) => !val);
          console.timeEnd("mi contador");
        }}
      >
        actualiza
      </button>
    </div>
  );
};

export default ComFunctCiclo;
