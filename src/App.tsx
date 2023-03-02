/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
import React, { useState, lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contador = lazy(() => import("views/Contador"));
const Lista = lazy(() => import("views/Lista"));

function App() {
  const [route, setRoute] = useState("lista");
  const cambia = () => setRoute("contador");
  return (
    <div>
      <Suspense fallback={<div>Cargando</div>}>
        {route == "contador" && <Contador />}
        {route == "lista" && <Lista />}
        <button onClick={cambia}>cambia</button>
      </Suspense>
    </div>
  );
}

export default App;
