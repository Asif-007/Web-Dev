import React from "react";
import ReactDOM from "react-dom/client";

// Header
// Body
// Footer

function Card(props) {
  return (
    <div style={{ border: "1px solid black" }}>
      <img
        src="https://www.jeffa.in/cdn/shop/files/PeakPerformanceTshirtBlue3.webp?v=1712666355"
        height="200px"
        width="200px"
      />
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}

const arr = [
  { id: "1", cloth: "T-Shirt", offer: "20-30%off" },
  { id: "2", cloth: "Jeans", offer: "10-30%off" },
  { id: "3", cloth: "Kurta", offer: "23-30%off" },
  { id: "4", cloth: "Pyjama", offer: "20-37%off" },
  { id: "5", cloth: "Tops", offer: "20-50%off" },
  { id: "6", cloth: "Leggings", offer: "20-70%off" },
  { id: "7", cloth: "Vests", offer: "11-30%off" },
  { id: "8", cloth: "Briefs", offer: "12-30%off" },
];

function App() {
  return (
    // Header
    // Body
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {/* <Card cloth="T-Shirt" offer="20-80%off" />
      <Card cloth="Jeans" offer="20-80%off" />
      <Card cloth="Kurta" offer="20-80%off" />
      <Card cloth="Pyjama" offer="20-80%off" />
      <Card cloth="Tops" offer="20-80%off" />
      <Card cloth="Leggings" offer="20-80%off" />
      <Card cloth="Vests" offer="20-80%off" />
      <Card cloth="Briefs" offer="20-80%off" /> */}

      {/* use map as it returns an array, if we use normal loops it of no use because jsx should have js code which has something in result */}
      {arr.map((value) => (
        <Card key={value.id} cloth={value.cloth} offer={value.offer} />
      ))}
    </div>

    // Footer
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
