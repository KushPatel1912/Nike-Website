/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function MansClothingNav() {
  return (
    <nav
      className="navbar navbar-expand-lg responsive-mens-nav sticky-top"
      style={{
        backgroundColor: "#ffffff",
        height: "100px",
        padding: "0 50px",
        top: "64px", // Position below the main navbar
        zIndex: 999,
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <div
        className="container-fluid d-flex align-items-center"
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        {/* Men Header - Left Side */}
        <div
          className="navbar-brand"
          style={{ margin: 0 }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              margin: 0,
              color: "#000",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Men
          </h1>
        </div>

        {/* Navigation Menu - Center */}
        <div
          className="responsive-mens-nav-menu"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <li>
              <Link
                to="/mens"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#000",
                  textDecoration: "none",
                  fontFamily: "Arial, sans-serif",
                  transition: "color 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "#666")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "#000")
                }
              >
                Shoes
              </Link>
            </li>
            <li>
              <Link
                to="/mens"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#000",
                  textDecoration: "none",
                  fontFamily: "Arial, sans-serif",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "#666")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "#000")
                }
              >
                Clothing
              </Link>
            </li>
            <li>
              <Link
                to="/mens"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#000",
                  textDecoration: "none",
                  fontFamily: "Arial, sans-serif",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "#666")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "#000")
                }
              >
                Accessories
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
