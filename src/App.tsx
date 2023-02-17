import React from "react";
import "./App.css";
// import Admin from "./views/Admin";
// import Contact from "./views/Contact";
// import Home from "./views/Home";
// import Login from "./views/Login";
import { Admin, Contact, Home, Login } from "views";

function App() {
  const routes = {
    home: <Home />,
    contact: <Contact />,
    admin: <Admin />,
    login: <Login />,
  };
  // let currtenRoute: "home" | "contact" | "admin" | "login" = "contact";
  let currtenRoute: string = "login";
  // return routes[currtenRoute];
  // if (currtenRoute === "home") return <Home />;
  // if (currtenRoute === "contact") return <Contact />;
  // if (currtenRoute === "admin") return <Admin />;
  // if (currtenRoute === "login") return <Login />;
  const mostrar = true;
  return mostrar ? (
    <div>
      {currtenRoute === "home" && <Home />}
      {currtenRoute === "contact" && <Contact />}
      {currtenRoute === "admin" && <Admin />}
      {currtenRoute === "login" && <Login />}
      {/* {currtenRoute === "home" ? "hola estoy en home" : "no estoy en home"} */}
    </div>
  ) : (
    <>no hay naaaa</>
  );
}

export default App;
