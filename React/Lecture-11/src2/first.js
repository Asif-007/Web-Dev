import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Second from "./second";
import GlobalContext from "./Global";
function App() {
  const [count, setCount] = useState(15);
  return (
    <>
      <GlobalContext.Provider value={{ count, setCount }}>
        <h1>Hello Coder Army</h1>
        <Second/>
      </GlobalContext.Provider>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
