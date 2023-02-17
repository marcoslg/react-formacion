import React from "react";

const Modal = () => {
  const handleClick = (e: React.MouseEvent) => {
    //para que no se propague al padre
    e.stopPropagation();
    console.log("click boton");
  };
  return (
    <div>
      <button onClick={handleClick}>Aceptar</button>
      <button onClick={handleClick}>Cerrar</button>
    </div>
  );
};

export default Modal;
