const element = React.createElement(
  "h1",
  {
    id: "first",
    className: "Rahul",
    style: { backgroundColor: "blue", fontSize: "30px", color: "white" },
  },
  "Hello Coder Army"
);

const element2 = React.createElement(
  "h2",
  {
    id: "first",
    className: "Rahul",
    style: { backgroundColor: "blue", fontSize: "30px", color: "white" },
  },
  "Maja Aaya muje"
);


const div1 = React.createElement('div',{},[element,element2])
const root = ReactDOM.createRoot(document.getElementById("root"));
// react root container

// root.render(element);
// root.render(element2)

root.render(div1)


