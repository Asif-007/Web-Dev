import React from "react";
import ReactDOM from "react-dom/client";

// const element = <h1>Hello Coder Army</h1>
// JSX: js expreession is to be put in {}, not declarative statement can be used like let a = 5

// props = {
//   name: "Asif",
//   age: 20,
// };
function Greet(props) {
    console.log(props)
    return <h1>Hello { props.a}</h1>;
}

const element = <Greet name="Asif" age="20" a="[10,20,30]" />;

// <Greet/> is a function call firt letter capital is rule by JSX to differentiate between user define tags and html tags

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
