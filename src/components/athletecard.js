/** @format */

import React from "react";

export default function AthleteCard() {
  return (
    <div
      className="mt-2"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        gap: "20px",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Running Panel */}
      <div
        style={{
          width: "1000px",
          height: "900px",
          position: "relative",
          overflow: "hidden",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="at1.avif"
          alt="Running"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
          }}
        >
          <button
            style={{
              width: "150px",
              backgroundColor: "white",
              color: "black",
              border: "none",
              padding: "12px 24px",
              borderRadius: "25px",
              fontSize: "20px",
              fontFamily: "Arial, sans-serif",
              cursor: "pointer",
            }}
          >
            Shop
          </button>
        </div>
      </div>

      {/* Golf Panel */}
      <div
        style={{
          width: "1000px",
          height: "900px",
          position: "relative",
          overflow: "hidden",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="at3.avif"
          alt="Golf"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
          }}
        >
          <button
            style={{
              width: "150px",
              backgroundColor: "white",
              color: "black",
              border: "none",
              padding: "12px 24px",
              borderRadius: "25px",
              fontSize: "20px",
              fontFamily: " Arial, sans-serif",
              cursor: "pointer",
            }}
          >
            Shop
          </button>
        </div>
        <div
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          Scottie Scheffler
        </div>
      </div>

      {/* Basketball Panel */}
      <div
        style={{
          width: "1000px",
          height: "900px",
          position: "relative",
          overflow: "hidden",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="at2.avif"
          alt="Basketball"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
          }}
        >
          <button
            style={{
              width: "150px",
              backgroundColor: "white",
              color: "black",
              border: "none",
              padding: "12px 24px",
              borderRadius: "25px",
              fontSize: "20px",
              fontFamily: " Arial, sans-serif",
              cursor: "pointer",
            }}
          >
            Shop
          </button>
        </div>
      </div>
    </div>
  );
}
