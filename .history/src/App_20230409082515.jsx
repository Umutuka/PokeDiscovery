import { createRoot } from "react-dom/client";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Additionals from "./Additionals";
import Details from "./Pages/PokeDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

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
            <Route path="/" element={<Home />} />
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

const port = process.env.PORT || 5173;
app.listen(port);
