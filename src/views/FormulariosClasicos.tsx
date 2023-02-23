import React, { useState } from "react";
import { IFormData } from "models";

const FormulariosClasicos = () => {
  const [nombre, setNombre] = useState("inicial");
  const [apellido, setApellido] = useState("apellido");
  const [formData, setFormData] = useState<IFormData>({
    nombre: "",
    apellido: "",
    edad: 20,
    isDeveloper: false,
  });
  const cambiaNombre = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setNombre(event.target.value);
  };
  return (
    <div>
      <h1>FormulariosClasicos</h1>
      <form>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          defaultValue="hola"
          onChange={cambiaNombre}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          defaultValue="mundo"
          onChange={(event) => setApellido(event.target.value)}
        />{" "}
        <span>{apellido}</span>
      </form>
    </div>
  );
};

export default FormulariosClasicos;
