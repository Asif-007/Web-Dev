import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import arr from "./utils/dummy";
import { greet, meet as goa } from "./utils/dummy";
// Header
// Body
// Footer

const ele = greet();
console.log(arr);
function App() {
  let [A, setA] = useState(arr);

  

  function filterByPrice() {
    const B = A.filter((value) => value.price > 45);
    setA(B);
  }
  function sortBy() {
    A.sort((a, b) => a.price - b.price);
    setA([...A]);
    console.log(A)
  }

  return (
    <>
      {/* Header */}

      <Header />

      <button onClick={sortBy}>Sort By Price</button>
      <button onClick={filterByPrice}>Filter By Price</button>
      {/* Body */}
      <div
        className="middle"
        style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
      >
        {/* <Card cloth="T-Shirt" offer="20-80%off" />
      <Card cloth="Jeans" offer="20-80%off" />
      <Card cloth="Kurta" offer="20-80%off" />
      <Card cloth="Pyjama" offer="20-80%off" />
      <Card cloth="Tops" offer="20-80%off" />
      <Card cloth="Leggings" offer="20-80%off" />
      <Card cloth="Vests" offer="20-80%off" />
      <Card cloth="Briefs" offer="20-80%off" /> */}

        {/* use map as it returns an array, if we use normal loops it of no use because jsx should have js code which has something in result */}
        {A.map((value, index) => (
          <Card
            key={index}
            cloth={value.cloth}
            offer={value.offer}
            price={value.price}
          />
        ))}
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
  <>
    <App />
  </>,
);
