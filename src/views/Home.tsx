import { AppContext } from "contexts/AppContextProvider";
import React, { useContext } from "react";

const Home = () => {
  const { settings } = useContext(AppContext);
  console.log(settings);
  return (
    <div className={`home ${settings?.darkmode ? "dark" : ""} `}>
      <nav className="navbar">
        <span>Home</span>
        <span>Users</span>
        <span>Login</span>
      </nav>
      <main>
        <h1>Hola mundo</h1>
      </main>
    </div>
  );
};

export default Home;
