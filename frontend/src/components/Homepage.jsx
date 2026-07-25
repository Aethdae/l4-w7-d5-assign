import React, { useEffect, useState } from "react";
import { FLASK_USERS_URL } from "../consts";
import UserForm from "./UserForm";

export default function Homepage() {
  const [users, setUsers] = useState([]);
  async function getUsers() {
    const res = await fetch(FLASK_USERS_URL);
    const data = await res.json();
    setUsers(data.users);
    console.log(users);
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <UserForm getUsers={getUsers} />
      <ul className="flex flex-col gap-2 items-center">
        {users &&
          users.map((user) => (
            <li
              key={user.id}
              className="flex flex-col gap-2 bg-black p-2 rounded-xl items-center border-white border"
            >
              <p>
                Name: {user.first_name} {user.last_name}
              </p>
              <p>ID: {user.id}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
