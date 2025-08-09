/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faShoppingCart,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    setTimeout(() => {
      window.location.reload();
      navigate("/");
    }, 2000);
  };

  return (
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
              <a
                className="nav-link text-white"
                href="#"
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
  );
}
