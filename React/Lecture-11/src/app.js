import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello Coder Army</h1>
      <Increment count={count} setCount={setCount} />
      <Decrement count={count} setCount={setCount} />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
