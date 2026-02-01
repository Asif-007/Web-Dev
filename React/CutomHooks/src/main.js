import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
function Main() {


    // Header
    // Body 10 cards
  return (
    <>
          <Header></Header>
          <Body></Body>
    </>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)