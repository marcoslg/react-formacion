import React from "react";

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
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
