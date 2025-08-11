/** @format */

import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Banner from "../components/Pages/dashboard/Banner";
import CardPic from "../components/Pages/dashboard/CardPic";
import AthleteCard from "../components/Pages/dashboard/athletecard";
import MenuCarousel from "../components/Pages/dashboard/MenuCarousel";
import Feature from "../components/Pages/dashboard/Feature";
import FooterMenu from "../components/Pages/dashboard/FooterMenu";
import Footer from "../components/Pages/dashboard/Footer";
import Navbar from "../components/Pages/dashboard/Navbar";
import LoginBar from "../components/Pages/dashboard/LoginBar";
import FindStore from "../components/Pages/Find Store/FindStore";
import SignUp from "../components/Pages/Auth/SignUp";
import Login from "../components/Pages/Auth/Login";

// Dashboard component that combines all dashboard components with loading state
function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#000",
          color: "white",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            border: "4px solid #fff",
            borderTop: "4px solid transparent",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
        <h2
          style={{
            marginTop: "20px",
            fontSize: "2rem",
            fontFamily:
              "Nike Futura ND, Arial, sans-serif",
          }}
        >
          Loading...
        </h2>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div>
      <LoginBar />
      <Navbar />
      <Banner />
      <CardPic />
      <AthleteCard />
      <MenuCarousel />
      <Feature />
      <FooterMenu />
      <Footer />
    </div>
  );
}

// Home component for the root path
function Home() {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 20px",
        backgroundColor: "#f8f9fa",
        minHeight: "80vh",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#333",
          fontStyle: "italic",
          marginBottom: "5px",
          fontFamily:
            "Nike Futura ND, Arial, sans-serif",
        }}
      >
        WELCOME TO NIKE{" "}
      </h1>
      <img
        src="nikewhite.svg"
        alt="nike"
        style={{
          marginLeft: "10px",
          width: "100px",
          height: "100px",
          objectFit: "cover",
        }}
      />
      <p
        style={{
          fontSize: "1.2rem",
          color: "#666",
          marginBottom: "40px",
        }}
      >
        Discover the latest in athletic footwear and
        apparel
      </p>
      <button
        onClick={handleDiscoverClick}
        style={{
          display: "inline-block",
          padding: "15px 30px",
          backgroundColor: "#000",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "1.1rem",
          fontWeight: "bold",
          transition: "background-color 0.3s ease",
          border: "none",
          cursor: "pointer",
        }}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = "#333")
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = "#000")
        }
      >
        Discover
      </button>
    </div>
  );
}

// Wrapper component for pages that need navbar
function PageWithNavbar({ children }) {
  return (
    <div>
      <LoginBar />
      <Navbar />
      {children}
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/find-store"
        element={<FindStore />}
      />
      <Route
        path="/signup"
        element={<SignUp />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
      <Route
        path="/men"
        element={
          <PageWithNavbar>
            <Banner />
          </PageWithNavbar>
        }
      />
      <Route
        path="/women"
        element={
          <PageWithNavbar>
            <Banner />
          </PageWithNavbar>
        }
      />
      <Route
        path="/kids"
        element={
          <PageWithNavbar>
            <Banner />
          </PageWithNavbar>
        }
      />
      <Route
        path="/jordan"
        element={
          <PageWithNavbar>
            <Banner />
          </PageWithNavbar>
        }
      />
      <Route
        path="/sports"
        element={
          <PageWithNavbar>
            <Banner />
          </PageWithNavbar>
        }
      />
    </Routes>
  );
}
