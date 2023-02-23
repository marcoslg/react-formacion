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
    ciudad: "",
  });
  const cambiaNombre = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    //ponerlo entre parentesis hace el return implicito
    setFormData((prev) => ({ ...prev, nombre: event.target.value }));
  };

  const cambiaCampo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return false;
  };

  const cambioCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = event.target.checked;
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <div>
      <h1>FormulariosClasicos</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        <p>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            defaultValue="hola"
            onChange={cambiaNombre}
            required={true}
          />
          <span>{formData.nombre}</span>
        </p>
        <p>
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            defaultValue="mundo"
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, apellido: event.target.value }))
            }
          />
          <span>{formData.apellido}</span>
        </p>
        <p>
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            value={formData.ciudad}
            onChange={cambiaCampo}
          />
          <span>{formData.ciudad}</span>
        </p>
        <p>
          <input
            type="number"
            name="edad"
            placeholder="edad"
            value={formData.edad}
            onChange={cambiaCampo}
            max={25}
            min={18}
          />
          <span>{formData.edad}</span>
        </p>
        <p>
          <label htmlFor="input-developer">¿Eres desarrollador?</label>
          <input
            id="input-developer"
            type="checkbox"
            name="isDeveloper"
            checked={formData.isDeveloper}
            onChange={cambiaCampo}
          />
        </p>
        <p>
          <button type="button" onClick={() => console.log("click")}>
            click
          </button>
          <button type="submit" onClick={() => console.log("click")}>
            enviar
          </button>
        </p>
      </form>
    </div>
  );
};

export default FormulariosClasicos;
