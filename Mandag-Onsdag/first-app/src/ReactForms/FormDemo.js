import React, { useState } from "react";

const NameForm = () => {
  const initialState = { name: "" };
  const [person, setPerson] = useState(initialState);

  const handleSubmit = evt => {};

  const handleChange = event => {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    //name[id] = value;
    setPerson({ ...person, [id]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            id="name"
            type="text"
            value={person.name}
            onChange={handleChange}
            placeholder="name"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{JSON.stringify(person)}</p>
    </div>
  );
};

export default function FormDemo() {
  return (
    <div style={{ marginTop: 25 }}>
      <NameForm />
    </div>
  );
}
