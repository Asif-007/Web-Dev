import React, { useEffect,useState } from "react";

function Colorful({name }) {
     const [color, setColor] = useState("black");
     console.log("first");
     useEffect(() => {
    //    console.log("executed");
       document.body.style.backgroundColor = color;
     }, [color]);
    //  console.log("second");
     return (
         <>
             <h2>{name }</h2>
         <h1>Background Color Changer</h1>
         <button
           style={{ backgroundColor: "red" }}
           onClick={() => setColor("red")}
         >
           Red
         </button>
         <button
           style={{ backgroundColor: "green" }}
           onClick={() => setColor("green")}
         >
           Green
         </button>
         <button
           style={{ backgroundColor: "orange" }}
           onClick={() => setColor("orange")}
         >
           Orange
         </button>
         <button
           style={{ backgroundColor: "blue" }}
           onClick={() => setColor("blue")}
         >
           Blue
         </button>
       </>
     );
}


export default React.memo(Colorful);