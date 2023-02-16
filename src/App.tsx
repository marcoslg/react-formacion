import React, { useState } from "react";
import ComponenteClase from "./components/ComponenteClase";

import "./App.css";
import ComponenteFunction from "./components/ComponenteFunctional";
import ComponenteContenedor from "./components/componentTypes/ComponenteContenedor";
import ComponentePadre from "./components/jerarquia/ComponentePadre";
import Contador from "./components/contador/Contador";
import ContadorClase from "./components/contador/ContadorClase";
import ComponenteCicloVida from "./components/ciclovida/ComponenteCicloVida";
import ComFunctCiclo from "./components/ciclovida/ComFunctCiclo";
const miElemento = <button>Mi Boton</button>;

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {/* <h1>Hola mundo</h1>
     {miElemento}
     <ComponenteClase/>
     <ComponenteFunction/>
     <ComponenteContenedor/> */}

      {/* <ComponentePadre/> */}
      {/* <Contador /> */}
      {/* <ContadorClase initialValue={5} /> */}

      {show && <ComponenteCicloVida />}
      <button onClick={() => setShow((prev) => !prev)}> mostrar ocultar</button>

      {show && <ComFunctCiclo />}
    </div>
  );
}

export default App;
