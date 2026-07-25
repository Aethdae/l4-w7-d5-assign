import React, { useState } from "react";
import { FLASK_USERS_URL } from "../consts";

export default function UserForm({ getUsers }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(FLASK_USERS_URL, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ first_name: firstName, last_name: lastName }),
      });
      const data = await res.json();
      getUsers();
    } catch (error) {}
  }
  return (
    <form
      className="flex flex-col items-center p-4 gap-4"
      onSubmit={(e) => onFormSubmit(e)}
    >
      <label className="flex gap-2">
        First name
        <input
          className="bg-white border border-black rounded-lg text-black"
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
      </label>
      <label className="flex gap-2">
        Last name
        <input
          className="bg-white border border-black rounded-lg text-black"
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
      </label>
      <button className="bg-blue-800 px-6 py-2 rounded-2xl border-white border-4">
        Submit
      </button>
    </form>
  );
}
