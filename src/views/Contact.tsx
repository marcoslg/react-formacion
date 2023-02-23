import React from "react";
import { useSearchParams } from "react-router-dom";
import { URLSearchParams } from "url";

const Contact = ({ saludo }: { saludo: string }) => {
  const getUrlParamsObject = (
    urlParams: URLSearchParams
  ): { nombre: string | null } => {
    const obj = {
      nombre: urlParams.get("nombre"),
    };
    return obj;
  };

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("nombre"));
  const { nombre } = getUrlParamsObject(searchParams);

  return (
    <div>
      Contact
      <h2>{saludo}</h2>
      <p>Nombre {nombre}</p>
    </div>
  );
};

export default Contact;
