import { createRoot } from "react-dom/client";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Additionals from "./Additionals";
import Details from "./Pages/PokeDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
            <Route path="/pokedetails" element={<Home />} />
            <Route path="/pokedetails/:id" element={<Details />} />
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
