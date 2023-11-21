import { createRoot } from "react-dom/client";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Additionals from "./Additionals";
// import Quiz from './Pages/Quiz';
import About from "./Pages/About";
import QuizStart from "./Pages/QuizStart";
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
          <Route exact path="/Resources" element={<Resources />}>
            {" "}
          </Route>

          <Route path="/Quiz">
            <Route index element={<QuizStart />} />
            <Route path="Javascript" element={<JavascriptQuiz />}></Route>
            <Route path="Html" element={<HtmlQuiz />}></Route>
            <Route path="Css" element={<CssQuiz />}></Route>
          </Route>

          <Route exact path="/About" element={<About />}>
            {" "}
          </Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Additionals />
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
