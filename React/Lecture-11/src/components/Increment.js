import { useState } from "react";

function Increment({count, setCount}) {

    return (
        <>
            <h2>Child Counter is {count}</h2>
            <button onClick={()=>setCount(count+1)}> Increment</button>
        </>
    )
}

export default Increment;