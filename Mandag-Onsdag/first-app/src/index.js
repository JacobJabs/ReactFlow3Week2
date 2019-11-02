import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import "./index.css";
import ListDemoApp from "./list&keys/ListDemoApp";
import FormDemo from "./ReactForms/FormDemo";
import FormMultiple from "./ReactForms/formMultiple";
import ChuckNorrisComponent from "./state/ChuckNorrisComponent";
import ClockComponent from "./state/ClockComponent";
import { StateComponentContainer } from "./state/StateComponent";

let app = <App />;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <a href="/" className="x" id="app1">
        ex1
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app2">
        ex2
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app3">
        ex3
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app4">
        exState
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app5">
        ex5
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app6">
        ex6
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app7">
        exList
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app8">
        exReactForms
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app9">
        exFormMultiple
      </a>{" "}
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== "x") {
    return;
  }
  const id = event.target.id;
  switch (id) {
    case "app1":
      app = <App />;
      break;
    case "app2":
      app = <App2 />;
      break;
    case "app3":
      app = <App3 />;
      break;
    case "app4":
      app = <StateComponentContainer />;
      break;
    case "app5":
      app = <ClockComponent />;
      break;
    case "app6":
      app = <ChuckNorrisComponent />;
      break;
    case "app7":
      app = <ListDemoApp />;
      break;
    case "app8":
      app = <FormDemo />;
      break;
    case "app9":
      app = <FormMultiple />;
      break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
