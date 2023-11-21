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
            <Route path="/PokeDiscovery/" element={<Index />} />
            <Route path="/PokeDiscovery/Abilities" element={<Abilities />} />
            <Route path="/PokeDiscovery/Abilities/:id" element={<AbilityDetails />} />
            <Route path="/PokeDiscovery/pokedex" element={<Pokedex />} />
            <Route path="/PokeDiscovery/pokedex/:id" element={<Details />} />
            <Route path="/PokeDiscovery/items" element={<Items />} />
            <Route path="/PokeDiscovery/About" element={<About />} />
            <Route path="/PokeDiscovery/items/:id" element={<ItemDetails />} />
            <Route path="/PokeDiscovery/compare" element={<Compare />} />
            <Route path="/PokeDiscovery/contact" element={<Contact />} />
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
