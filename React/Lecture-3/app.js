import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement(
//   "h1",
//   {
//     id: "first",
//     className: "Rahul",
//     style: { backgroundColor: "blue", fontSize: "30px", color: "white" },
//   },
//   "Hello Coder Army",
// );

// const element2 = React.createElement(
//   "h2",
//   {
//     id: "first",
//     className: "Rahul",
//     style: { backgroundColor: "black", fontSize: "30px", color: "white" },
//   },
//   "Maja Aaya muje",
// );

// const div1 = React.createElement("div", {}, [element, element2]);
// root.render(div1);

const names = "Asif";

const obj = {
  age: 20,
  salary: 60,
};

const obj2 = {
    backgroundColor: "pink",
    fontSize: '30px',
    color: 'white'
}


const ele = (
  <>
    <h1 id="first" className="second">
      Hello Coder Army {names}
    </h1>
    <h2
      style={{
        backgroundColor: "pink",
        fontSize: "30px",
        color: "white",
      }}
    >
      Maja Aaya muje {obj.age}
    </h2>
  </>
);


function greet() {
    return <h1>Aur bhai kaisa hai</h1>
}
const meet = ()=> <h2>I am doing Good</h2>

const newEle = meet();
const element = greet();

const newEle2 = (
  <>
    {newEle} {element}
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(newEle2);

// JSX JavaScript XML: Html code diretc js andar lik sakte hai




