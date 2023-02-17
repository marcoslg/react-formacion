import React, { useRef } from "react";

const EventosTeclado = () => {
  const frase = "cambiaste un rolex por un casio";
  const inputREf = useRef<HTMLInputElement>(null);
  const handleKeyDown = (event: any) => {
    console.log(event);
    //switch(event.
  };

  const handleKeyUp = (event: any) => {
    // console.log(event);
    if (event.code == "Enter") {
      console.log("comprobar");
      //   if (event.target.value === frase) {
      if (inputREf.current?.value === frase) {
        console.log("ok");
        alert("correcto");
      } else {
        alert("no no");
      }
    }
  };
  return (
    <div>
      <p>{frase}</p>
      <input
        ref={inputREf}
        type="text"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default EventosTeclado;
