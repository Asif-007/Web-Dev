import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

// function Main() {
//   const [counter, setCounter] = useState(0);
//     //   let money = 0;
//     const money = useRef(0);
//   return (
//     <div>
//       <div>
//         <h1>Counter is : {counter}</h1>
//         <button onClick={() => setCounter(counter + 1)}>Increment</button>
//         <h1>Money is : {money.current}</h1>
//         <button
//           onClick={() => {
//             money.current += 1;
//             console.log(money.current);
//           }}
//         >
//           Increment
//         </button>
//       </div>
//     </div>
//   );
// }

function Stopwatch() {
  const [time, setTime] = useState(0);
  const timer = useRef(null);
  const [isRunning, setRunning] = useState(false);
  function start() {
    if (!isRunning) {
      timer.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setRunning(true);
    }
  }
  function stop() {
    clearInterval(timer.current);
    timer.current = null;
    setRunning(false);
  }
  function reset() {
    clearInterval(timer.current);
    timer.current = null;
      setTime(0);
    setRunning(false);
  }
  return (
    <>
      <h1>StopWatch is: {time}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Stopwatch />);
