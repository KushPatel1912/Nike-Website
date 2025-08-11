/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginBar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "8px 20px",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          width: "100%",
        }}
      >
        {/* Left side - Logos */}
        <div className="d-flex align-items-center">
          <img
            to="/dashboard"
            src="/Jordan.png"
            alt="Jordan Logo"
            width="90"
            height="70"
            style={{
              marginRight: "20px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/dashboard");
              window.location.reload();
            }}
          />
        </div>

        {/* Right side - Navigation Links */}
        <div className="d-flex align-items-center">
          <Link
            to="/find-store"
            style={{
              color: "#000",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "500",
              marginRight: "20px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.color = "#666")
            }
            onMouseLeave={(e) =>
              (e.target.style.color = "#000")
            }
          >
            Find a Store
          </Link>

          <div
            style={{
              width: "1px",
              height: "16px",
              backgroundColor: "#000",
              marginRight: "20px",
            }}
          />

          <Link
            to="/signup"
            onClick={() => {
              navigate("/signup");
              window.location.reload();
            }}
            style={{
              color: "#000",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "500",
              marginRight: "20px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.color = "#666")
            }
            onMouseLeave={(e) =>
              (e.target.style.color = "#000")
            }
          >
            Join Us
          </Link>

          <div
            style={{
              width: "1px",
              height: "16px",
              backgroundColor: "#000",
              marginRight: "20px",
            }}
          />

          <Link
            to="/login"
            style={{
              color: "#000",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "500",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.color = "#666")
            }
            onMouseLeave={(e) =>
              (e.target.style.color = "#000")
            }
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
