import React from "react";
import Login from "./login";

var isLogedIn = true;

function App() {
  return (
    <div className="container">
      {isLogedIn ? <h1>Hello Habib.</h1> : <Login />}
    </div>
  );
}

export default App;
