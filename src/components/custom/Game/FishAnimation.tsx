import React from "react";
import bigFishImage from "../../../assets/Hungary-fish.png";
import smallFishImage from "../../../assets/Fishes.png";
import sharkImage from "../../../assets/shark.png";
import NoAnswerBubble from "../../../assets/no.png";

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
    <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-10">
      {/* Big Fish */}
      <div
        className={`flex items-center transition-transform animate__animated animate__slideInLeft ${bigFishMove ? "duration-2000" : ""} ${bigFishPosition}`}
      >
        <img src={bigFishImage} alt="Big Fish" className="w-36 h-36 transform" />
        {showBubble && (
          <img
            src={NoAnswerBubble}
            alt="No Answer Bubble"
            className="absolute top-[-25%] left-[50%] transform -translate-x-1/2 w-56 h-36 opacity-100"
          />
        )}
      </div>

      {/* Small Fishes */}
      <div className={`flex items-center transform animate__animated animate__slideInRight ${hideSmallFishes ? "hidden" : ""}`}>
        <img src={smallFishImage} alt="Small Fishes" className="w-48 h-48 transform scale-x-[-1]" />
      </div>

      {/* Shark */}
      {showShark && (
        <div
          className={`absolute bottom-20 left-[-50%] transform transition-transform duration-[2000ms] ease-in-out animate__animated animate__slideInLeft`}
        >
          <img src={sharkImage} alt="Shark" className="w-64 h-64 transform" />
        </div>
      )}
    </div>
  );
};

export default FishAnimation;
