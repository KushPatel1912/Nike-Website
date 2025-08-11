/** @format */

import React from "react";

export default function MansClothingRunning() {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center mt-5"
      style={{ padding: "80px 20px" }}
    >
      {/* Nike Running Header */}
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "600",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          color: "#000",
          marginBottom: "40px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Nike Running
      </h2>

      {/* Main Headline */}
      <h1
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          fontFamily:
            "Nike Futura ND,Arial, sans-serif",
          textAlign: "center",
          color: "#000",
          marginBottom: "30px",
          lineHeight: "1.1",
        }}
      >
        MORE CHOICE.
        <br />
        MORE RUNNING.
      </h1>

      {/* Product Names */}
      <h3
        style={{
          fontSize: "24px",
          fontWeight: "600",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          color: "#000",
          marginBottom: "20px",
          lineHeight: "1.4",
        }}
      >
        Pegasus. Vomero. Structure.
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "18px",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          color: "#000",
          marginBottom: "50px",
          maxWidth: "600px",
          lineHeight: "1.5",
        }}
      >
        Three updated franchises for more cushioning
        and more performance.
      </p>

      {/* Shop All Button */}
      <button
        style={{
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "30px",
          padding: "16px 32px",
          fontSize: "18px",
          fontWeight: "600",
          fontFamily: "Arial, sans-serif",
          cursor: "pointer",
          transition: "all 0.3s ease",
          textTransform: "uppercase",
          letterSpacing: "1px",
          minWidth: "200px",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#333";
          e.target.style.transform =
            "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#000";
          e.target.style.transform = "translateY(0)";
        }}
      >
        Shop All
      </button>
    </div>
  );
}
