/** @format */
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    { src: "banner1.jpg", alt: "Nike Banner 1" },
    { src: "banner2.jpg", alt: "Nike Banner 2" },
    { src: "banner3.jpg", alt: "Nike Banner 3" },
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide(
          (prev) => (prev + 1) % slides.length
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + slides.length) % slides.length
    );
  };

  const goToNext = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % slides.length
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "800px",
        position: "relative",
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Carousel Content */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            transform: `translateX(-${
              currentSlide * 100
            }%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                minWidth: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "18%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "100px",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontStyle: "italic",
                  fontFamily:
                    "Nike Futura ND, Arial, sans-serif",
                  textShadow:
                    "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Run Faster, <br /> Feel better
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots - Overlay on Image */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              backgroundColor:
                index === currentSlide
                  ? "#ffffff"
                  : "rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Control Buttons - Overlay on Image */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          display: "flex",
          gap: "12px",
          zIndex: 10,
        }}
      >
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "2px solid #ffffff",
            backgroundColor: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {isPlaying ? (
            <div
              style={{ display: "flex", gap: "2px" }}
            >
              <div
                style={{
                  width: "3px",
                  height: "12px",
                  backgroundColor: "#ffffff",
                }}
              />
              <div
                style={{
                  width: "3px",
                  height: "12px",
                  backgroundColor: "#ffffff",
                }}
              />
            </div>
          ) : (
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "8px solid #ffffff",
                borderTop: "6px solid transparent",
                borderBottom: "6px solid transparent",
                marginLeft: "2px",
              }}
            />
          )}
        </button>

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#cccccc",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderRight: "6px solid #000000",
              borderTop: "4px solid transparent",
              borderBottom: "4px solid transparent",
            }}
          />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#cccccc",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "6px solid #000000",
              borderTop: "4px solid transparent",
              borderBottom: "4px solid transparent",
            }}
          />
        </button>
      </div>
    </div>
  );
}
