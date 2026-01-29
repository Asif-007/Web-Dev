import { useState } from "react";

function Decrement({count, setCount}) {
  return (
    <>
      <button onClick={() => setCount(count - 1)}> Decrement</button>
    </>
  );
}

export default Decrement;
