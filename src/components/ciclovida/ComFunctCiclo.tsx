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
          setMiVariable((val) => !val);
        }}
      >
        actualiza
      </button>
    </div>
  );
};

export default ComFunctCiclo;
