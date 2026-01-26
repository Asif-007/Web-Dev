import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
  const [password, setPassword] = useState("ABDBHJDVB");
  const [length, setLength] = useState(9);
  const [num, setNum] = useState(false);
  const [ch, setCh] = useState(false);
  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHJIKLMNOPQRSTUVWXYZ";
    if (num) str += "0123456789";
    if (ch) str += "{}[]()!@#$%^&*";
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, ch, num]);

  // function generatePAssword() {
    // let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHJIKLMNOPQRSTUVWXYZ";
    // if (num) str += "0123456789";
    // if (ch) str += "{}[]()!@#$%^&*";
    // let pass = "";
    // for (let i = 0; i < length; i++) {
    //   pass += str[Math.floor(Math.random() * str.length)];
    // }
    // setPassword(pass);
  // }
  useEffect(() => {
    generatePassword();
  }, [generatePassword]);
  return (
    <>
      <h1>Pasword is : {password}</h1>
      <div className="second">
        <input
          id="len"
          type="range"
          min={5}
          max={50}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        ></input>
        <label htmlFor="len">Length ({length})</label>
        <input
          type="checkbox"
          defaultChecked={num}
          onChange={() => setNum(!num)}
          id="num"
        ></input>
        <label htmlFor="num">Number</label>
        <input
          type="checkbox"
          defaultChecked={ch}
          onChange={() => setCh(!ch)}
          id="ch"
        ></input>
        <label htmlFor="ch">Character</label>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <PasswordGenerator />,
);
