/** @format */

import React from "react";

export default function MansTrendingNow() {
  return (
    <div className="container-fluid p-0">
      {/* Two Portrait Images */}
      <div className="row g-0">
        <div className="col-6 position-relative">
          <img
            src="mensclothingp1.avif"
            alt="Portrait Left"
            className="w-100 object-fit-cover"
            style={{
              height: "1000px",
              objectFit: "cover",
            }}
          />

          {/* Shop Button - Left Portrait */}
          <div
            className="position-absolute text-white"
            style={{
              zIndex: 2,
              bottom: "40px",
              left: "40px",
            }}
          >
            <button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "none",
                borderRadius: "25px",
                padding: "14px 28px",
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Arial, sans-serif",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "1px",
                minWidth: "120px",
                boxShadow:
                  "0 4px 15px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor =
                  "#f5f5f5";
                e.target.style.transform =
                  "translateY(-2px)";
                e.target.style.boxShadow =
                  "0 6px 20px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor =
                  "#fff";
                e.target.style.transform =
                  "translateY(0)";
                e.target.style.boxShadow =
                  "0 4px 15px rgba(0,0,0,0.2)";
              }}
            >
              Shop
            </button>
          </div>
        </div>

        <div className="col-6 position-relative">
          <img
            src="mansclothingp2.avif"
            alt="Portrait Right"
            className="w-100 object-fit-cover"
            style={{
              height: "1000px",
              objectFit: "cover",
            }}
          />

          {/* Shop Button - Right Portrait */}
          <div
            className="position-absolute text-white"
            style={{
              zIndex: 2,
              bottom: "40px",
              left: "40px",
            }}
          >
            <button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "none",
                borderRadius: "25px",
                padding: "14px 28px",
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Arial, sans-serif",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "1px",
                minWidth: "120px",
                boxShadow:
                  "0 4px 15px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor =
                  "#f5f5f5";
                e.target.style.transform =
                  "translateY(-2px)";
                e.target.style.boxShadow =
                  "0 6px 20px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor =
                  "#fff";
                e.target.style.transform =
                  "translateY(0)";
                e.target.style.boxShadow =
                  "0 4px 15px rgba(0,0,0,0.2)";
              }}
            >
              Shop
            </button>
          </div>
        </div>
      </div>

      {/* Landscape Image with Text Overlay */}
      <div className="row g-0">
        <div className="col-12 position-relative">
          <img
            src="menstrendingls.avif"
            alt="Landscape"
            className="w-100 h-100"
            style={{
              height: "400px",
              objectFit: "cover",
              width: "1800px",
            }}
          />

          {/* Text Overlay */}
          <div
            className="position-absolute translate-middle text-center text-white"
            style={{
              zIndex: 2,
              width: "100%",
              padding: "0 20px",
              top: "60%",
              left: "10%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Main Headline */}
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                fontFamily:
                  "Nike Futura ND, Arial, sans-serif",
                marginBottom: "20px",
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.7)",
                lineHeight: "1.1",
              }}
            >
              STUDY HARD.
              <br />
              PLAY HARDER.
            </h1>

            {/* Supporting Message */}
            <p
              style={{
                fontSize: "20px",
                fontFamily: "Arial, sans-serif",
                marginBottom: "40px",
                textShadow:
                  "1px 1px 2px rgba(0,0,0,0.7)",
                fontWeight: "500",
              }}
            >
              Get back to class and back to sport.
            </p>

            {/* Shop Button */}
            <button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "none",
                borderRadius: "25px",
                padding: "14px 28px",
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Arial, sans-serif",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "1px",
                minWidth: "120px",
                boxShadow:
                  "0 4px 15px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor =
                  "#f5f5f5";
                e.target.style.transform =
                  "translateY(-2px)";
                e.target.style.boxShadow =
                  "0 6px 20px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor =
                  "#fff";
                e.target.style.transform =
                  "translateY(0)";
                e.target.style.boxShadow =
                  "0 4px 15px rgba(0,0,0,0.2)";
              }}
            >
              Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
