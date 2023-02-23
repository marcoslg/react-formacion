/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import "./App.scss";

function App() {
  const [logged, setlogged] = useState(false);
  const navigate = useNavigate();
  const goToUsers = () => {
    navigate("users");
  };
  return (
    <>
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        {logged && (
          <li>
            <NavLink to="Users">Users</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/contacto">contact</NavLink>
        </li>
        <li>
          <a href="#" onClick={goToUsers}>
            click users
          </a>
        </li>
      </nav>
      <Outlet />
      <div className="footer">
        <button onClick={() => setlogged((prev) => !prev)}>
          {logged ? "log out" : "Log in"}
        </button>
      </div>
    </>
  );
}

export default App;
