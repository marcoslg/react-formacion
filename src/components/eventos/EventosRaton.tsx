import React from "react";
import Modal from "./Modal";

const EventosRaton = () => {
  return (
    <div>
      <h1 onMouseEnter={() => console.log("raton dentro")}>Eventos Raton</h1>
      <p onDoubleClick={() => console.log("doble click")}>
        has hecho doble click Raton
      </p>

      <p onDragStart={() => console.log("drag start")}>drag start</p>

      <div
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "1rem 0.5rem",
        }}
        onClick={() => console.log("click div")}
      >
        <Modal />
      </div>
    </div>
  );
};

export default EventosRaton;
