/** @format */

import React from "react";

export default function CardPic() {
  return (
    <div className="d-flex justify-content-center">
      <img
        src="card1.jpg"
        alt="Card 1"
        style={{
          width: "1210px",
          height: "1300px",
          objectFit: "cover",
        }}
      />
      <img
        src="card2.jpg"
        alt="Card 2"
        style={{
          width: "1210px",
          height: "1300px",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
