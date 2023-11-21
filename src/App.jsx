import { createRoot } from "react-dom/client";
import React from "react";
import Navbar from "./Navbar";
import Pokedex from "./Pages/Home";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Additionals from "./Additionals";
import Index from "./Pages/Index";
import Details from "./Pages/PokeDetails";
import About from "./Pages/About";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Abilities from "./Pages/Abilities";
import AbilityDetails from "./Pages/AbilityDetails";
import Items from "./Pages/Items";
import ItemDetails from "./Pages/ItemDetails";
import Compare from "./Pages/Compare";
import Contact from "./Pages/Contact";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Abilities" element={<Abilities />} />
            <Route path="/Abilities/:id" element={<AbilityDetails />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<Details />} />
            <Route path="/items" element={<Items />} />
            <Route path="/About" element={<About />} />
            <Route path="/items/:id" element={<ItemDetails />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Additionals />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const NotFound = () => {
  return <h1>404 - Page not found</h1>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
