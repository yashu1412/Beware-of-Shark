import React from "react";
import HungaryImage from "../../../Assets/Hungary-fish.png"; 

const HungaryFish: React.FC = () => (
  <div
    className="big-fish-animation"
    style={{
      position: "absolute",
      bottom: "50px", 
      left: "0",
      display: "flex",
      animation: "moveFishBig 7s linear forwards", 
    }}
  >
    <img
      src={HungaryImage}
      alt="Big Fish"
      style={{
        width: "300px",
        margin: "0 10px",
      }}
    />
  </div>
);

export default HungaryFish;
