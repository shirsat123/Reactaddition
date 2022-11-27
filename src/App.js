//creating addition of 2 numbers:
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [result, setResult] = useState(null);
  return (
    <div className="App">
      <h1>Addition of 2 numbers:</h1>
      <input type="Number" onChange={(e) => setInput1(e.target.value)} />
      <input type="Number" onChange={(e) => setInput2(e.target.value)} />
      <br />
      <button onClick={(e) => setResult(parseInt(input1) + parseInt(input2))}>
        Addition
      </button>
      <br />
      {result}
    </div>
  );
}
