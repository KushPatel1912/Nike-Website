/** @format */

import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Sale from "./components/Sale";
import Banner from "./components/Banner";
import CardPic from "./components/CardPic";
import AthleteCard from "./components/athletecard";
import MenuCarousel from "./components/MenuCarousel";
import Feature from "./components/Feature";
import FooterMenu from "./components/FooterMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Banner />
        {/* <Sale /> */}
        <CardPic />
        <AppRoutes />
        <AthleteCard />
        <MenuCarousel />
        <Feature />
        <FooterMenu />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
