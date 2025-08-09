/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Feature() {
  return (
    <div
      className="container-fluid"
      style={{
        height: "300px",
        marginTop: "200px",
        paddingBlock: "10px",
      }}
    >
      {/* Nike Logo - Centered */}
      <div className="text-center">
        <a
          href="#"
          className="text-decoration-none"
        >
          <img
            src="/nikewhite.svg"
            alt="Nike Logo"
            width="100px"
            height="100px"
            style={{ filter: "brightness(0)" }}
          />
        </a>
      </div>

      {/* Navigation Links - Centered and evenly spaced */}
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="d-flex"
          style={{ gap: "100px", marginTop: "50px" }}
        >
          <a
            href="#"
            style={{
              fontSize: "25px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              color: "black",
              textDecoration: "none",
            }}
          >
            Find a Store
          </a>
          <a
            href="#"
            style={{
              fontSize: "25px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              color: "black",
              textDecoration: "none",
            }}
          >
            Help
          </a>
          <a
            href="#"
            style={{
              fontSize: "25px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              color: "black",
              textDecoration: "none",
            }}
          >
            Join Us
          </a>
          <a
            href="#"
            style={{
              fontSize: "25px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              color: "black",
              textDecoration: "none",
            }}
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
