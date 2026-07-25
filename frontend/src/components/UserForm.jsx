import React, { useState } from "react";

export default function UserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <form>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
      </label>
      <button>Submit</button>
    </form>
  );
}
