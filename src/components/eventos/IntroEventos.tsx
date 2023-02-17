import React, { useRef, useEffect } from "react";

const IntroEventos = () => {
  //genera la referencia
  const auxBtnRef = useRef<HTMLButtonElement | null>(null);
  const inputREf = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    //añadir el eventlistener
    const element = auxBtnRef.current;
    element?.addEventListener("click", () => {
      console.log("click otro boton");
    });
    return () => element?.removeEventListener("click", () => {});
  }, []);

  const logInputValue = () => {
    const valor = inputREf.current?.value;
    console.log("input " + valor);
  };
  return (
    <div>
      <h1>IntroEventos</h1>
      <button onClick={() => console.log("click")}>click</button>
      <button ref={auxBtnRef} id="boton-aux">
        otro boton
      </button>
      <input type="text" ref={inputREf} />
      <button onClick={logInputValue}>btn buton</button>
    </div>
  );
};

export default IntroEventos;
