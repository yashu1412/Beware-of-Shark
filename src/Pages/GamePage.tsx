import React, { useState, useEffect } from "react";
import titleImage from "../Assets/Title-image.png"; 
import Fishes from "../components/custom/GameIntro/Fishes"; 
import BigFish from "../components/custom/GameIntro/HungaryFish"; 
import Shark from "../components/custom/GameIntro/Shark"; 

const GamePage: React.FC = () => {
  const [showFish, setShowFish] = useState(false);
  const [showBigFish, setShowBigFish] = useState(false);
  const [showShark, setShowShark] = useState(false);

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
    
      setShowFish(true); 

      const fishTimeout = setTimeout(() => {
        setShowBigFish(true); 

        const sharkTimeout = setTimeout(() => {
          setShowShark(true); 
        }, 7000); 

        return () => clearTimeout(sharkTimeout);
      }, 5000); 

      return () => clearTimeout(fishTimeout);
    }, 2000); 

    return () => clearTimeout(titleTimeout);
  }, []);

  return (
    <div className="bg-common flex flex-col items-center justify-center relative">
      {/* Title Image */}
      <img
        src={titleImage} 
        alt="Game Title"
        className="w-3/4 md:w-1/2 mb-8 " 
        style={{ marginTop: "-313px" }} 
      />

      {/* Small Fish Animation */}
      {showFish && <Fishes />}

      {/* Big Fish Animation */}
      {showBigFish && <BigFish />}

      {/* Shark Animation */}
      {showShark && <Shark />}
    </div>
  );
};

export default GamePage;
