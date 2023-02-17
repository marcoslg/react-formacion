import React, { useRef, useState } from "react";
import { Tarea } from "models";

const listaTareas: Tarea[] = [
  { id: 0, texto: "sacar la basura", completado: false, deleted: false },
  { id: 1, texto: "hacer la compra", completado: false, deleted: false },
  { id: 2, texto: "sacar al perro", completado: true, deleted: false },
];
const Tareas = () => {
  const [tareas, setTareas] = useState(listaTareas);
  const inputAdd = useRef<HTMLInputElement>(null);
  const addTask = () => {
    if (!inputAdd.current?.value || inputAdd.current?.value === "") return;
    setTareas((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        texto: inputAdd.current?.value || "",
        completado: false,
        deleted: false,
      },
    ]);
  };

  const completaTarea = (id: number) => {
    setTareas((tareas) =>
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completado: !tarea.completado } : tarea
      )
    );
  };

  const eliminarTarea = (id: number) => {
    setTareas((tareas) =>
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, deleted: true } : tarea
      )
    );
  };
  return (
    <div>
      <h1>Tareas</h1>
      <div>
        <div>
          <input type="text" ref={inputAdd} />
          <button onClick={addTask}>Añadir</button>
        </div>
        <ul>
          {tareas
            .filter((tarea) => !tarea.deleted)
            .map((tarea, index) => (
              <li key={tarea.id}>
                <span
                  style={{
                    textDecoration: tarea.completado ? "line-through" : "",
                    marginRight: "0.5rem",
                  }}
                >
                  {tarea.texto}
                </span>
                <button onClick={() => completaTarea(tarea.id)}>
                  {tarea.completado ? "desmarcar" : "completar"}
                </button>
                <button onClick={() => eliminarTarea(tarea.id)}>
                  eliminar
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Tareas;
