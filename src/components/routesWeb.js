import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/";
import PokedexPage from "./pages/pokedex/";
import { ContactPage } from "./pages/contact/";

export const RoutesWeb = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/pokedex" element={<PokedexPage />} />
      <Route exact path="/contact" element={<ContactPage />} />
    </Routes>
  );
};
