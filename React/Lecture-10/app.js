import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

// function Fibonacci(n) {
//   if (n <= 1) return n;
//   return Fibonacci(n - 1) + Fibonacci(n - 2);
// }

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  // const [result, setResult] = useState('');

  const Fibonacci = useCallback((n) => {
    if (n <= 1) return n;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }, []);
  const result = useMemo(() => Fibonacci(value), [value]);

  // useEffect(() => {
  //     setResult(Fibonacci(value));
  // },[value])

  return (
    <div>
      <div>
        <h1>Counter is : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <h2>Fibonacci number is : {result}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
