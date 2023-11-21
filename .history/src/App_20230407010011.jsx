import { createRoot } from "react-dom/client";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Additionals from "./Additionals";
// import Quiz from './Pages/Quiz';
// JavaScript source code
// Your code is going to go here

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}>
            {" "}
          </Route>
        </Routes>
        <Additionals />
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
