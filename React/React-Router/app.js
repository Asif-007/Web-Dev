import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Router, Route, Link } from "react-router";
import Home from "./src/Home";
import Contact from "./src/Contact";
import Dashboard from "./src/Dashboard";
import Details from "./src/Details";
import Zero from "./src/Zero";
import Hi from "./src/Hi";
import Hello from "./src/Hello";
import  Github  from "./src/Github";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Details">Details</Link>
        <Link to="/Github">Github</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/Details" element={<Details></Details>}>
          <Route index element={<Zero></Zero>}></Route>
          <Route path="Hi" element={<Hi />}></Route>
          <Route path="Hello" element={<Hello />}></Route>
        </Route>
        {/* <Route path="/Github" element={<Github></Github>}></Route> */}
        <Route path="/Github/:name" element={<Github></Github>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);
