import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import titleImage from "../Assets/Title-image.png";
import Fishes from "../components/custom/GameIntro/Fishes";
import BigFish from "../components/custom/GameIntro/HungaryFish";
import Shark from "../components/custom/GameIntro/Shark";

const GameIntro: React.FC = () => {
  const [showFish, setShowFish] = useState(false);
  const [showBigFish, setShowBigFish] = useState(false);
  const [showShark, setShowShark] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [showStartButton, setShowStartButton] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setShowFish(true);

      const fishTimeout = setTimeout(() => {
        setShowBigFish(true);

        const sharkTimeout = setTimeout(() => {
          setShowShark(true);

          const titleAnimationTimeout = setTimeout(() => {
            setAnimateTitle(true);

            const buttonTimeout = setTimeout(() => {
              setShowStartButton(true);
            }, 10000); 
            return () => clearTimeout(buttonTimeout);
          }, 7000); 
          return () => clearTimeout(titleAnimationTimeout);
        }, 7000); 
        return () => clearTimeout(sharkTimeout);
      }, 5000); 
      return () => clearTimeout(fishTimeout);
    }, 2000); 
    return () => clearTimeout(titleTimeout);
  }, []);

  return (
    <div className="bg-common flex flex-col items-center justify-center relative overflow-hidden">
      {/* Title Image */}
      <div
        className={`transition-transform duration-[10000ms] ease-in-out flex flex-col items-center justify-center ${
          animateTitle ? "scale-[2]" : "scale-100"
        }`}
        style={{
          position: animateTitle ? "absolute" : "relative",
          top: animateTitle ? "0" : "auto",
          left: animateTitle ? "0" : "auto",
          width: animateTitle ? "100%" : "auto",
          height: animateTitle ? "100%" : "auto",
          backgroundImage: `url(${titleImage})`,
          backgroundSize: animateTitle ? "cover" : "contain",
          backgroundPosition: "center",
        }}
      >
        {!animateTitle && (
          <img
            src={titleImage}
            alt="Game Title"
            className="w-3/4 md:w-1/2 mb-8"
            style={{
              marginTop: "-313px",
            }}
          />
        )}
      </div>

      {/* Small Fish Animation */}
      {showFish && <Fishes />}

      {/* Big Fish Animation */}
      {showBigFish && <BigFish />}

      {/* Shark Animation */}
      {showShark && <Shark />}

      {/* Start Game Button */}
      {showStartButton && (
        <button
          onClick={() => navigate("/game")}
          className="z-10 mt-8 px-6 py-3 bg-violet-600 text-white text-lg font-bold rounded-lg shadow-md hover:bg-violet-700 transition-colors"
        >
          Start Game
        </button>
      )}
    </div>
  );
};

export default GameIntro;
