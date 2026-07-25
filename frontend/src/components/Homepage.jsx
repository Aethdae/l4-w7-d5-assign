import React, { useEffect, useState } from "react";

export default function Homepage() {
  const [users, setUsers] = useState([]);
  async function getUsers() {
    const res = await fetch(FLASK_USERS_URL);
    const data = await res.json();
    setUsers(data.users);
  }
  useEffect(() => {
    getUsers();
  }, []);

  return <div></div>;
}
