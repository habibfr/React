import React, { useState } from "react";

function App() {
  const date = new Date().getSeconds();

  console.log(date);

  const [count, setCount] = useState(date);
  console.log(count);

  function increase() {
    return setCount(count + 1);
  }

  function decrease() {
    return setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
