import React from "react";
import sharkImage from "../../../Assets/shark.png";

const Shark: React.FC = () => (
  <div
    className="shark-animation"
    style={{
      position: "absolute",
      bottom: "100px", 
      left: "0",
      display: "flex",
      animation: "moveShark 7s linear forwards", 
    }}
  >
    <img
      src={sharkImage}
      alt="Shark"
      style={{
        width: "350px",
        margin: "0 10px",
      }}
    />
  </div>
);

export default Shark;
