import React from "react";
import bigFishImage from "../../../assets/Hungary-fish.png";
import smallFishImage from "../../../assets/Fishes.png";
import sharkImage from "../../../assets/shark.png";

interface FishAnimationProps {
  bigFishMove: boolean;
  bigFishPosition: string; 
  hideSmallFishes: boolean;
  showBubble: boolean;
  showShark: boolean;
  sharkPosition: string; 
}

const FishAnimation: React.FC<FishAnimationProps> = ({
  bigFishMove,
  bigFishPosition,
  hideSmallFishes,
  showBubble,
  showShark,
  sharkPosition,
}) => {
  return (
    <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center gap-0">
      <div
        className={`flex items-center justify-between ${
          bigFishMove ? "hidden" : ""
        }`}
        style={{
          transform: bigFishPosition,
        }}
      >
        <img src={bigFishImage} alt="Big Fish" className="w-36 h-36" />
      </div>
      <div
        className={`flex items-center justify-between ${
          hideSmallFishes ? "hidden" : ""
        }`}
      >
        <img
          src={smallFishImage}
          alt="Small Fishes"
          className="w-60 h-52 transform rotate-180 translate-y-20"
        />
      </div>
      {showShark && (
        <div
          className={`absolute ${showShark ? "" : "hidden"}`}
          style={{
            transform: sharkPosition,
          }}
        >
          <img src={sharkImage} alt="Shark" className="w-64 h-64" />
        </div>
      )}
    </div>
  );
};

export default FishAnimation;
