/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FooterMenu() {
  return (
    <div
      className="container-fluid"
      style={{
        height: "300px",
        marginTop: "100px",
      }}
    >
      <div className="row justify-content-around">
        <div className="col-7">
          <div className="row">
            {/* Column 1: Featured */}
            <div className="col-3">
              <h6
                className="fw-bold text-dark mb-2 text-start"
                style={{ fontSize: "25px" }}
              >
                Featured
              </h6>
              <ul className="list-unstyled">
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    Air Force 1
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    Jordan 1
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    Air Max Dn
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    Vomero
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Shoes */}
            <div className="col-3">
              <h6
                className="fw-bold text-dark mb-2 text-start"
                style={{ fontSize: "25px" }}
              >
                Shoes
              </h6>
              <ul className="list-unstyled">
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    All Shoes
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    Jordan Shoes
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    Running Shoes
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    Basketball Shoes
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Clothing */}
            <div className="col-3">
              <h6
                className="fw-bold text-dark mb-2 text-start"
                style={{ fontSize: "25px" }}
              >
                Clothing
              </h6>
              <ul className="list-unstyled">
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    All Clothing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    Tops & T-Shirts
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    Shorts
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    Hoodies & Pullovers
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Kids */}
            <div className="col-3">
              <h6
                className="fw-bold text-dark mb-2 text-start"
                style={{ fontSize: "25px" }}
              >
                Kids
              </h6>
              <ul className="list-unstyled">
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    Infant & Toddler Shoes
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    Kids Shoes
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    Kids Basketball Shoes
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-decoration-none text-muted text-start d-block"
                    style={{ fontSize: "25px" }}
                  >
                    Kids Running Shoes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="container-fluid mt-5">
        <hr
          style={{
            border: "1px solid #dee2e6",
            margin: "0 auto",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}
