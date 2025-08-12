/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MansShopCategory() {
  const cards = [
    { src: "at1.avif", label: "Accessories" },
    { src: "at3.avif", label: "Shoes" },
    { src: "at2.avif", label: "Clothing" },
  ];

  return (
    <div
      className="container-fluid"
      style={{
        paddingTop: "24px",
        height: "1000px",
        paddingBottom: "24px",
      }}
    >
      <h2
        style={{
          paddingTop: "70px",
          fontSize: "36px",
          fontFamily: "Arial, sans-serif",
          marginBottom: "16px",
          textAlign: "left",
        }}
      >
        Shop By Category
      </h2>

      <div className="row g-4">
        {cards.map((card, index) => (
          <div
            className="col-12 col-md-4"
            key={index}
          >
            <div
              style={{
                width: "100%",
                height: "700px",
                aspectRatio: "4 / 3",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <img
                src={card.src}
                alt={card.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#000",
                textAlign: "left",
                fontFamily: "Arial, sans-serif",
                marginTop: "12px",
              }}
            >
              {card.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
