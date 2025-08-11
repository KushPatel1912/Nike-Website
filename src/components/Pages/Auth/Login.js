/** @format */

import React, { useState } from "react";
import LoginBar from "../dashboard/LoginBar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] =
    useState(false);
  const [passwordFocused, setPasswordFocused] =
    useState(false);

  return (
    <div>
      <LoginBar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        <img
          src={"/nikewhite.svg"}
          alt="Nike Logo"
          style={{ width: "100px", height: "100px" }}
        />
        <img
          src={"/Jordan.png"}
          alt="Nike Logo"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <h1>
              Enter your email and password to join us
              or sign in.
            </h1>
            <form className="mt-5">
              <div style={{ marginBottom: "20px" }}>
                {/* Email */}
                <div
                  className="mt-5"
                  style={{
                    position: "relative",
                  }}
                >
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    style={{
                      width: "100%",
                      padding: "20px 16px",
                      border: "2px solid #ddd",
                      borderRadius: "12px",
                      fontSize: "22px",
                      outline: "none",
                      backgroundColor: "#fff",
                      transition:
                        "border-color 0.2s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor =
                        "#000";
                      setEmailFocused(true);
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor =
                        "#ddd";
                      setEmailFocused(false);
                    }}
                  />
                  <label
                    htmlFor="email"
                    style={{
                      position: "absolute",
                      left: "16px",
                      top:
                        email || emailFocused
                          ? "-8px"
                          : "20px",
                      fontSize:
                        email || emailFocused
                          ? "12px"
                          : "16px",
                      color: "#666",
                      pointerEvents: "none",
                      transition: "all 0.2s ease",
                      backgroundColor: "white",
                      padding: "0 4px",
                    }}
                  >
                    Email*
                  </label>
                </div>

                {/* Password */}
                <div
                  style={{ position: "relative" }}
                  className="mt-5"
                >
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    style={{
                      width: "100%",
                      padding: "20px 16px",
                      border: "2px solid #ddd",
                      borderRadius: "12px",
                      fontSize: "22px",
                      outline: "none",
                      backgroundColor: "#fff",
                      transition:
                        "border-color 0.2s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor =
                        "#000";
                      setPasswordFocused(true);
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor =
                        "#ddd";
                      setPasswordFocused(false);
                    }}
                  />
                  <label
                    htmlFor="password"
                    style={{
                      position: "absolute",
                      left: "16px",
                      top:
                        password || passwordFocused
                          ? "-8px"
                          : "20px",
                      fontSize:
                        password || passwordFocused
                          ? "12px"
                          : "16px",
                      color: "#666",
                      pointerEvents: "none",
                      transition: "all 0.2s ease",
                      backgroundColor: "white",
                      padding: "0 4px",
                    }}
                  >
                    Password*
                  </label>
                </div>

                <div className="d-flex justify-content-center mt-5">
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      backgroundColor: "#000",
                      color: "#fff",
                      border: "none",
                      borderRadius: "12px",
                      padding: "20px 24px",
                      fontSize: "18px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      marginTop: "24px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      boxShadow:
                        "0 4px 15px rgba(0, 0, 0, 0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor =
                        "#333";
                      e.target.style.transform =
                        "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 6px 20px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor =
                        "#000";
                      e.target.style.transform =
                        "translateY(0)";
                      e.target.style.boxShadow =
                        "0 4px 15px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseDown={(e) => {
                      e.target.style.transform =
                        "translateY(0)";
                      e.target.style.boxShadow =
                        "0 2px 10px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseUp={(e) => {
                      e.target.style.transform =
                        "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 6px 20px rgba(0, 0, 0, 0.3)";
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
            <div className="d-flex justify-content-between align-items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
