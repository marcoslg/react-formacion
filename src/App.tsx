import React, { useState } from "react";
import Contact from "views/Contact";
import Home from "views/Home";
import Users from "views/Users";
import "./App.css";

function App() {
  const [route, setRoute] = useState("contact");
  return (
    <>
      {route === "home" && <Home />}
      {route === "users" && <Users />}
      {route === "contact" && <Contact />}
      <span onClick={() => setRoute("home")}>Home</span>
      <span onClick={() => setRoute("users")}>users</span>
      <span onClick={() => setRoute("contact")}>contact</span>
    </>
  );
}

export default App;
