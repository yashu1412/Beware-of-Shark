import React, { useState, useEffect } from "react";
import Coin from "../Assets/coin.png";
import Hint from "../Assets/hint.png";
import PowerUp from "../Assets/powerUp.png";
import GameOverImage from '../Assets/GameOver.png'; 

const GameOver: React.FC = () => {
  const [isScoreVisible, setIsScoreVisible] = useState(false); 
  const [isHintActive, setIsHintActive] = useState(false);
  const [isPowerUpActive, setIsPowerUpActive] = useState(false);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScoreVisible(true);
    }, 5000); 

    return () => clearTimeout(timer); 
  }, []);

  const handleCoinClick = () => {
    alert("Coin clicked!");
  };

  const handleHintClick = () => {
    setIsHintActive(true);
    setTimeout(() => setIsHintActive(false), 500); 
  };

  const handlePowerUpClick = () => {
    setIsPowerUpActive(true);
    setTimeout(() => setIsPowerUpActive(false), 300); 
  };

  return (
    <div className="bg-common flex flex-col justify-between relative h-full overflow-hidden">
      <div className="absolute top-4 right-5 flex flex-col items-center gap-4 gap-y-2">
        {/* Coin Button */}
        <button
          onClick={handleCoinClick}
          className="w-20 h-9 bg-[#88F0C8] rounded-full shadow-md shadow-slate-800 flex items-center justify-center gap-2"
        >
          <img src={Coin} alt="Coin" className="w-7 h-7 object-contain animate-spin-y" />
          <span className="text-black text-2xl">50</span>
        </button>

        {/* Hint Button with Glow Effect */}
        <button
          onClick={handleHintClick}
          className={`transition-all duration-300 rounded-full ${isHintActive ? "hint-glow" : ""}`}
        >
          <img src={Hint} alt="Hint" className="w-12 h-12 object-contain" />
        </button>

        {/* Power-Up Button with Scale Effect */}
        <button
          onClick={handlePowerUpClick}
          className={`transition-transform duration-300 rounded-full ${isPowerUpActive ? "scale-effect" : ""}`}
        >
          <img src={PowerUp} alt="Power-Up" className="w-12 h-12 object-contain " />
        </button>
      </div>

      {/* Game Over Section */}
      <div className="flex flex-col items-center justify-center mt-28 flex-grow">
        <img
          src={GameOverImage}
          alt="Game Over"
          className="w-3/4 max-w-sm animate-bounce"
        />
      </div>

      {/* Score Section */}
      <div
        className={`flex justify-center items-center space-x-6 w-full py-4 transition-opacity duration-300 ease-out ${isScoreVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex flex-col items-center px-6 py-40 pt-6 bg-[#34841E] text-white font-bold w-1/3">
          <p className="text-2xl font-normal bg-gray-900 p-4">Right</p>
          <span className="text-4xl font-normal pt-4">4</span> 
        </div>
        <div className="flex flex-col items-center px-6 py-40 pt-6 bg-[#FF0900] text-white font-bold w-1/3">
          <p className="text-2xl font-normal bg-gray-900 p-4">Wrong</p>
          <span className="text-4xl font-normal pt-4">1</span> 
        </div>
      </div>
    </div>
  );
};

export default GameOver;