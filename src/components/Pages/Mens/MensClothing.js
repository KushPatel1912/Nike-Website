/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../dashboard/Navbar";
import { Link } from "react-router-dom";
import NikeAir from "../../../assets/NikeAIR.mp4";

import MansClothingNav from "./MansClothingNav";
import MansClothingVideo from "./MansClothingVideo";
import MansClothingRunning from "./MansClothingRunning";
import MenShopBy from "./MenShopBy";
import MansTrendingNow from "./MansTrendingNow";

export default function MensClothing() {
  return (
    <div>
      <Navbar />
      <MansClothingNav />
      {/* Hero Video Section */}
      <MansClothingVideo />
      {/* Nike Running Section */}
      <MansClothingRunning />
      {/* Men Shop By Section */}
      <MenShopBy />
      {/* Mans Trending Now Section */}
      <MansTrendingNow />
    </div>
  );
}
