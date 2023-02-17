import React, { useState } from "react";
import ComponenteClase from "./components/ComponenteClase";

import "./App.css";
// import EventosTeclado from "./components/eventos/EventosTeclado";
import EventosRaton from "./components/eventos/EventosRaton";
// import IntroEventos from "./components/eventos/IntroEventos";

function App() {
  return (
    <div>
      {/* <IntroEventos /> */}
      {/* <EventosTeclado /> */}
      <EventosRaton />
    </div>
  );
}

export default App;
