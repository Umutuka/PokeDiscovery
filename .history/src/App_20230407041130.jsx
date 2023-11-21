import { createRoot } from "react-dom/client";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Additionals from "./Additionals";
import Details from "./Pages/PokeDetails";
import { QueryClient } from "@tanstack/react-query";
// import Quiz from './Pages/Quiz';
// JavaScript source code
// Your code is going to go here

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  },
})

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/pokedetails/:id" element={<Details />} />
            <Route path="/" element={<Home />} />
          </Routes>
        <Additionals />
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
