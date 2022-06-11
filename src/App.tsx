import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Services,
  History,
  Location,
  Events,
  Products,
  Contact,
  Whoops404,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<History />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="events" element={<Events />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
