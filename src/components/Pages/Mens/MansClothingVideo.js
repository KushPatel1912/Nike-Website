/** @format */

import React from "react";
import NikeAir from "../../../assets/NikeAIR.mp4";

export default function MansClothingVideo() {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <video
        src={NikeAir}
        autoPlay
        muted
        loop
        playsInline
        crossOrigin="anonymous"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        onError={(e) => {
          console.error(
            "External video failed to load:",
            e
          );
          // Hide video on error and show gradient background
          e.target.style.display = "none";
        }}
        onLoadStart={() =>
          console.log("External video loading started")
        }
        onCanPlay={() =>
          console.log(
            "External video can play and is ready"
          )
        }
        onLoadedData={() =>
          console.log(
            "External video loaded successfully!"
          )
        }
      />
      {/* Optional overlay text */}
    </div>
  );
}
