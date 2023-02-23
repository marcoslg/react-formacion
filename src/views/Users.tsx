import React from "react";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  const users = [
    {
      id: 1,
      name: "Gorka",
    },
    { id: 2, name: "marc" },
    { id: 3, name: "pere" },
  ];
  return (
    <div>
      <h1>users</h1>
      <div style={{ padding: "1rem" }}>
        {users.map((user) => (
          <Link
            to={`/users/${user.name}`}
            key={user.id}
            style={{ padding: "1rem" }}
          >
            {user.name}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Users;
