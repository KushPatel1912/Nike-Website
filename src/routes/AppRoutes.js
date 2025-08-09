/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "../components/Banner";
import Sale from "../components/Sale";
import CardPic from "../components/CardPic";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/men"
        element={<Banner />}
      />
      <Route
        path="/women"
        element={<Banner />}
      />
      <Route
        path="/kids"
        element={<Banner />}
      />
      <Route
        path="/jordan"
        element={<Banner />}
      />
      <Route
        path="/sports"
        element={<Banner />}
      />
    </Routes>
  );
}
