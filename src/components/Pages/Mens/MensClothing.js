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
import MansShopCategory from "./MansShopCategory";
import FooterMenu from "../dashboard/FooterMenu";
import Menucarousel from "../dashboard/MenuCarousel";
import Footer from "../dashboard/Footer";

export default function MensClothing() {
  return (
    <div>
      <Navbar />
      <MansClothingNav />
      {/* Hero Video Section */}
      <div className="hero-video">
        <MansClothingVideo />
      </div>
      {/* Nike Running Section */}
      <div className="nike-running">
        <MansClothingRunning />
      </div>
      {/* Men Shop By Section */}
      <MenShopBy />
      {/* Mans Trending Now Section */}
      <MansTrendingNow />
      {/* Mans Shop Category Section */}
      <MansShopCategory />
      {/* Mans Clothing Section */}
      <Menucarousel />
      <FooterMenu />
      <Footer />
    </div>
  );
}
