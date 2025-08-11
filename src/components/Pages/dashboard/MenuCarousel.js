/** @format */

import React, { useState, useEffect } from "react";

const products = [
  {
    img: "shoe1.avif",
  },
  {
    img: "shoe2.avif",
  },
  {
    img: "shoe3.avif",
  },
  {
    img: "shoe4.avif",
  },
  {
    img: "shoe5.avif",
  },
  {
    img: "shoe6.avif",
  },
  {
    img: "shoe7.avif",
  },
  {
    img: "shoe8.avif",
  },
  {
    img: "shoe9.avif",
  },
];

const MenuCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const productsPerView = 6; // Show 6 products at once
  const maxSlides = Math.max(
    0,
    products.length - productsPerView
  );

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide(
          (prev) => (prev + 1) % (maxSlides + 1)
        );
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, maxSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToNext = () => {
    setCurrentSlide((prev) =>
      Math.min(prev + 1, maxSlides)
    );
  };

  return (
    <div className="container-fluid my-5 mb-7">
      {/* Header with title and navigation arrows */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4
          className="fw-bold mb-0"
          style={{
            fontFamily: "Arial, sans-serif",
            color: "black",
            fontSize: "30px",
            paddingLeft: "20px",
          }}
        >
          Shop The Classics
        </h4>
        <div className="d-flex gap-2">
          <button
            className="btn btn-light rounded-circle"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={goToPrevious}
            disabled={currentSlide === 0}
          >
            ‹
          </button>
          <button
            className="btn btn-light rounded-circle"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={goToNext}
            disabled={currentSlide === maxSlides}
          >
            ›
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Sliding product display */}
        <div
          style={{
            display: "flex",
            transform: `translateX(-${
              currentSlide * (100 / productsPerView)
            }%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                minWidth: `${100 / productsPerView}%`,
                padding: "0 10px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                  padding: "10px",
                  height: "400px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f5f5f6",
                }}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  style={{
                    width: "100%",
                    maxHeight: "250px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <p className="mb-0 fw-bold text-center mt-2">
                {product.name}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
            zIndex: 10,
          }}
        >
          {Array.from(
            { length: maxSlides + 1 },
            (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor:
                    index === currentSlide
                      ? "#000000"
                      : "rgba(0, 0, 0, 0.3)",
                  cursor: "pointer",
                  transition:
                    "background-color 0.3s ease",
                }}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCarousel;
