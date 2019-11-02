import React from "react";
import "./App.css";
import object, { females, males } from "./file2";
const { firstName, email } = object;
const array = [...males, ...females];
console.log(array);

function App2() {
  return (
    <div>
      <p>{firstName} </p>
      <p>{email} </p>
    </div>
  );
}

export default App2;
