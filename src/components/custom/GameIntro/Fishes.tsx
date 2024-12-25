import React from "react";
import fishImage from "../../../Assets/Fishes.png"; 

const Fishes: React.FC = () => (
  <div
    className="fish-animation"
    style={{
      position: "absolute",
      bottom: "150px", 
      left: "0",
      display: "flex",
      animation: "moveFishSmall 7s forwards", 
    }}
  >
    <img
      src={fishImage}
      alt="Fish"
      style={{
        width: "300px",
        margin: "0 10px",
      }}
    />
  </div>
);

export default Fishes;
