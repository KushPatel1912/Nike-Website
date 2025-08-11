/** @format */

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faShoppingCart,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const navigate = useNavigate();
  const [isRefreshing, setIsRefreshing] =
    useState(false);

  const handleClick = () => {
    setIsRefreshing(true);

    // After 2 seconds, redirect to home
    setTimeout(() => {
      window.location.href = "/home";
    }, 2000);
  };
  return (
    <>
      {/* Loading Overlay */}
      {isRefreshing && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
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
            Refreshing...
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
      )}

      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#000000",
          height: "200px",
        }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div
            className="navbar-brand"
            style={{ paddingLeft: "50px" }}
          >
            <a href="#">
              <img
                src="/logo.png"
                alt="Nike Logo"
                width="100"
                height="100"
                onClick={handleClick}
              />
            </a>
          </div>

          {/* Navigation Menu */}
          <div className="navbar-nav">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item mx-3">
                <Link
                  className="nav-link text-white"
                  to="/home"
                  style={{
                    fontSize: "24px",
                    fontFamily: "Nike Futura ND",
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Arial, sans-serif",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ffc107",
                    },
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link text-white"
                  to="/mens"
                  style={{
                    fontSize: "24px",
                    fontFamily: "Nike Futura ND",
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Arial, sans-serif",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ffc107",
                    },
                  }}
                >
                  Men
                </Link>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link text-white"
                  href="#"
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Arial, sans-serif",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ffc107",
                    },
                  }}
                >
                  Women
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link text-white"
                  href="#"
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Arial, sans-serif",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ffc107",
                    },
                  }}
                >
                  Kids
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link text-white"
                  href="#"
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Arial, sans-serif",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ffc107",
                    },
                  }}
                >
                  Jordan
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link text-white"
                  href="#"
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Arial, sans-serif",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ffc107",
                    },
                  }}
                >
                  Sports
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link text-white"
                  href="#"
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Arial, sans-serif",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ffc107",
                    },
                  }}
                >
                  Sale
                </a>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link text-white"
                  to="/dashboard"
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Arial, sans-serif",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ffc107",
                    },
                  }}
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Search Bar */}
          <div
            className="d-flex align-items-center"
            style={{ marginRight: "50px" }}
          >
            <input
              type="text"
              placeholder="Search"
              className="form-control me-2"
              style={{
                width: "200px",
                height: "40px",
                borderRadius: "50px",
                backgroundColor: "white",
                placeContent: "center",
                fontSize: "20px",
                fontWeight: "bold",
                color: "black",
              }}
            />
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                color: "white",
                fontSize: "30px",
                marginLeft: "1px",
                cursor: "pointer",
              }}
            />
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{
                color: "white",
                fontSize: "30px",
                marginLeft: "50px",
                cursor: "pointer",
              }}
            />
            <FontAwesomeIcon
              icon={faHeart}
              beat
              style={{
                color: "white",
                fontSize: "30px",
                marginLeft: "50px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
