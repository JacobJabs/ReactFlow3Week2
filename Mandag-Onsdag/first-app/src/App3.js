import React from "react";
import { names } from "./file2";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export function WelcomePerson({ persons }) {
  return (
    <ul>
      {persons.map(person => (
        <li>
          {person.firstName}, {person.lastName}, {person.gender}, {person.email}
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <WelcomePerson persons={names} />
    </div>
  );
}
