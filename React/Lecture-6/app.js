import {useState} from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  let [count,setCount] = useState(0);
  function inc() {
    //   count = count + 1;
      setCount(count+1);
    // console.log(count);
    // document.querySelector("h1").innerHTML = `  Count is: ${count}`;
  }
  function dec() {
    //   count = count - 1;
      setCount(count-1)
    // document.querySelector("h1").innerHTML = `  Count is: ${count}`;
  }
  return (
    <div className="first">
      <h1>Count is: {count}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
